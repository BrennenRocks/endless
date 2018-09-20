import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { PostService } from '../../services/post.service';
import { Post } from '../../models/post';

import { environment } from '../../../environments/environment';
import { MzToastService } from 'ngx-materialize';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
  post: Post = {
    title: '',
    imageUrl: '',
    date: '',
    note: '',
    warcraftLogsUrl: '',
  }

  task: AngularFireUploadTask;
  percentage: Observable<number>;
  snapshot: Observable<any>;
  isHovering: boolean;

  constructor(
    private postService: PostService,
    private storage: AngularFireStorage,
    private toastService: MzToastService
  ) { }

  ngOnInit() {
  }

  public toggleHover(event: boolean) {
    this.isHovering = event;
  }

  public startUpload(event: FileList) {
    const file = event.item(0);
    if (file.type.split('/')[0] !== 'image') {
      this.toastService.show('The file must be an image type', 5000, 'red');
      return;
    }

    let path;
    if (environment.production) {
      path = `prod/${new Date().getTime()}_${file.name}`;
    } else {
      path = `dev/${new Date().getTime()}_${file.name}`;
    }

    this.task = this.storage.upload(path, file);
    this.task.then(() => {
      this.storage.ref(path).getDownloadURL().subscribe(url => {
        console.log(url);
        this.post.imageUrl = url;
      })
    });

    this.percentage = this.task.percentageChanges();
    this.snapshot = this.task.snapshotChanges();
  }

  public onSubmit(): void {
    if (this.post.title && this.post.imageUrl && this.post.date) {
      this.postService.addPost(this.post).then(res => {
        this.post.title = '';
        this.post.imageUrl = '';
        this.post.date = '';
        this.post.note = '';
        this.post.warcraftLogsUrl = '';
        this.toastService.show('Success!', 5000, 'green')
      })
      .catch(err => this.toastService.show('The post was not created, please try again later.', 5000, 'red'));
    } else {
      this.toastService.show('The post must have a title, date, and image.', 5000, 'red');
    }
  }

  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
  }

}
