import { Component, Input, OnInit } from '@angular/core';
import {Post} from '../post/post.module';
import {PostService} from "../services/post.service";

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

@Input() P: Post;


  constructor(private postserv: PostService) {}

  ngOnInit() {
  }

  love() {
    this.P.LoveIts++;
    this.postserv.order();
  }
  dont() {
    this.P.LoveIts--;
    this.postserv.order();
  }
  deletePost() {
    this.postserv.removePost(this.P);
    this.postserv.order();
    this.postserv.emitPosts();
  }

}
