import { Component, OnInit } from '@angular/core';
import {PostService} from "../services/post.service";
import {Subscription} from "rxjs-compat/Subscription";
import {Post} from "../post/post.module";
import {Router} from "@angular/router";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

export class PostListComponent implements OnInit {

  posts : Post[];
  postSubscription: Subscription;


  constructor(private route: Router, private postserv: PostService ) {console.log('***45')}

  ngOnInit() {
    this.postSubscription = this.postserv.postSubject.subscribe((posts: Post[]) =>{this.posts = posts});
    this.postserv.emitPosts();
  }

  addNewPost() {
    this.route.navigate(['/Posts','new']);
  }
  onCharge(){
    this.postserv.getPosts();
  }
  onSave(){
    this.postserv.savePosts();
  }




}
