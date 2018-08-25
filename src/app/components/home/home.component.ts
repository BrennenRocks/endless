import { Component, OnInit } from '@angular/core';
import { WowService } from '../../services/wow.service';
import { MzToastService } from 'ngx-materialize';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private numberOfNewsItems: number = 10;

  public newsLoading: boolean = true;
  public news: any[];

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
      console.log(this.news);
      this.newsLoading = false;
    });
  }

}
