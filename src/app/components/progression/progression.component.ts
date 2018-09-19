import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-progression',
  templateUrl: './progression.component.html',
  styleUrls: ['./progression.component.scss']
})
export class ProgressionComponent implements OnInit {

  public loading: boolean = true;
  public posts: Post[];

  constructor(
    private postService: PostService
  ) { }

  ngOnInit() {
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
      this.loading = false;
      console.log(this.posts);
    });
  }

}
