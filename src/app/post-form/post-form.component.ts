import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {PostService} from "../services/post.service";
import {Post} from "../post/post.module";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  postForm: FormGroup;

  constructor(private form: FormBuilder, private route: Router, private postserv: PostService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.postForm = this.form.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
      });
  }

  addPost() {
    const title = this.postForm.get('title').value;
    const content = this.postForm.get('content').value;
    const p = new Post(title, content);
    this.postserv.addPost(p);
    this.postserv.emitPosts();
    this.route.navigate(['/Posts']);
  }

}
