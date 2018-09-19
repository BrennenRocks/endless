import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { map, first } from 'rxjs/operators';

import { Post } from '../models/post';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class PreloadGuard implements Resolve<any> {
  private postsCollection: AngularFirestoreCollection<Post>;
  private posts: Observable<Post[]>;

  constructor (
    private afs: AngularFirestore
  ) { 

    this.postsCollection = this.afs.collection('posts', ref => ref.orderBy('date', 'asc'));

    this.posts = this.postsCollection.snapshotChanges().pipe(
      map(changes => {
        return changes.map(a => {
          const data = a.payload.doc.data() as Post;
          data.id = a.payload.doc.id;
          return data;
        });
      }));
  }

  resolve(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<Post[]> {
      return this.posts.pipe(first());
  }
}
