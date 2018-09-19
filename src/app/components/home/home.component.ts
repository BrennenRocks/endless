import { Component, OnInit } from '@angular/core';

import { WowService } from '../../services/wow.service';
import { MzToastService } from 'ngx-materialize';

import { IMAGE_CLASS_MAPPING, randomNumber } from '../../constants/constants';
import { forkJoin } from 'rxjs';
import { Post } from '../../models/post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private numberOfNewsItems: number = 10;

  public postLoading: boolean = true;
  public post: Post;

  public newsLoading: boolean = true;
  public news: any[];

  public spotlightLoading: boolean = true;
  public spotlight: any;

  constructor(
    private wowService: WowService,
    private postService: PostService,
    private toastService: MzToastService
  ) { }

  ngOnInit() {
    this.postService.getPosts().subscribe(posts => {
      this.post = posts[0];
      this.postLoading = false;
    });

    this.wowService.getNews().subscribe(data => {
      if (data.status === 'nok') {
        this.toastService.show(data.reason, 5000, 'red');
        return;
      }

      let itemObs = [];
      let temp = data.news.splice(0, this.numberOfNewsItems);
      temp.map(item => {
        if (item.type === 'itemLoot') {
          itemObs.push(this.wowService.getItem(item.itemId));
        }
      });

      forkJoin(itemObs).subscribe(res => {
        res.forEach(itemRes => {
          let index = temp.map(item => item.itemId).indexOf(itemRes.id);
          temp[index].itemName = itemRes.name;
          temp[index].itemQuality = itemRes.quality;
        });

        this.news = temp;
        this.newsLoading = false;
      });
    });

    this.wowService.getSpotlightStats().subscribe(data => {
      if (data.status === 'nok') {
        this.toastService.show(data.reason, 5000, 'red');
        return;
      }

      let subStat = data.statistics.subCategories[randomNumber(0, data.statistics.subCategories.length - 1)];
      this.spotlight = subStat.statistics[randomNumber(0, subStat.statistics.length - 1)];
      this.spotlight.character = data.name;
      this.spotlight.classImage = IMAGE_CLASS_MAPPING[data.class - 1];
      this.spotlight.faction = data.faction;
      this.spotlight.thumbnail = data.thumbnail;
      this.spotlightLoading = false;
    })
  }

}
