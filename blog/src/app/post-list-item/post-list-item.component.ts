import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

@Input() Title: String;
@Input() Content: String;
@Input() LoveIts: number;
@Input() CreatedAt: Date;

  constructor() {
    console.log('errrr');
  }

  ngOnInit() {
  }
  love() {
    this.LoveIts++;
  }
  dont() {
    this.LoveIts--;
  }

}
