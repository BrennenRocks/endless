import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  postsCollection: AngularFirestoreCollection<Post>;
  posts: Observable<Post[]>;
  postDoc: AngularFirestoreDocument<Post>;

  constructor(
    private afs: AngularFirestore
  ) { 
    this.postsCollection = this.afs.collection('posts', ref => ref.orderBy('date', 'desc'));

    this.posts = this.postsCollection.snapshotChanges().pipe(
      map(changes => {
        return changes.map(a => {
          const data = a.payload.doc.data() as Post;
          data.id = a.payload.doc.id;
          return data;
        });
      }));
  }

  public getPosts(): Observable<Post[]> {
    return this.posts;
  }

  public addPost(post: Post) {
    return this.postsCollection.add(post);
  }

  public updatePost(post: Post): void {
    this.postDoc = this.afs.doc(`posts/${post.id}`);
    this.postDoc.update(post);
  }

  public deletePost(post: Post): void {
    this.postDoc = this.afs.doc(`posts/${post.id}`);
    this.postDoc.delete();
  }
}
