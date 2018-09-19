import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../models/post';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-progression',
  templateUrl: './progression.component.html',
  styleUrls: ['./progression.component.scss']
})
export class ProgressionComponent implements OnInit {

  public posts: Post[];

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.data.subscribe(posts => this.posts = posts[0]);
  }

}
