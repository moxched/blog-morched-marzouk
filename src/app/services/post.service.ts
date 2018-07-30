import { Injectable } from '@angular/core';
import {Post} from '../post/post.module';
import {Subject} from "rxjs/Rx";
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;

@Injectable()
export class PostService {
  Posts: Post[] = [];
  postSubject = new Subject<Post[]>();

  constructor() {
  }

  emitPosts() {
    this.postSubject.next(this.Posts);
  }

  addPost(p: Post) {
    this.Posts.push(p);
    this.savePosts();
    this.emitPosts();
  }
  removePost(p: Post) {
    const indexToRemove = this.Posts.findIndex((post) => { if (post === p) { return true ;} } );
    this.Posts.splice(indexToRemove,1);
    this.savePosts();
    this.emitPosts();
  }
  getPost(title: string) {
    return this.Posts.find((p) => {
      return p.title === title;
    });
  }
  savePosts(){
    firebase.database().ref('/blogs').set(this.Posts);
  }
  getPosts(){
    firebase.database().ref('/blogs').on('value', (data: DataSnapshot) => {
      this.Posts = data.val() ? data.val() : [];
      this.emitPosts();
    })
  }
  order() {
    this.Posts.sort((a, b) => { return a.LoveIts - b.LoveIts});
  }
}
