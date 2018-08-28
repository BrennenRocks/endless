import { Component, OnInit } from '@angular/core';
import { WowService } from '../../services/wow.service';
import { MzToastService } from 'ngx-materialize';

import { IMAGE_CLASS_MAPPING, randomNumber } from '../../constants/constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private numberOfNewsItems: number = 10;

  public newsLoading: boolean = true;
  public news: any[];

  public spotlightLoading: boolean = true;
  public spotlight: any;

  constructor(
    private wowService: WowService,
    private toastService: MzToastService
  ) { }

  ngOnInit() {
    this.wowService.getNews().subscribe(data => {
      if (data.status === 'nok') {
        this.toastService.show(data.reason, 5000, 'red');
        return;
      }

      let temp = data.news.splice(0, this.numberOfNewsItems);
      temp.map(item => {
        if (item.type === 'itemLoot') {
          this.wowService.getItem(item.itemId).subscribe(data => {
            if (data.status == 'nok') {
              item.itemName = 'Not found';
              item.itemQuality = 404;
              return;
            }

            item.itemName = data.name;
            item.itemQuality = data.quality;
          });
        }
      });

      this.news = temp;
      this.newsLoading = false;
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
