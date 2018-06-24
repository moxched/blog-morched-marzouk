import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

export class PostListComponent implements OnInit {

@Input() post: Array<{Title: string, Content: string, LoveIts: number, CreatedAt: Date}> ;


  constructor() {
    console.log('sakl');
  }

  ngOnInit() {
  }

}
