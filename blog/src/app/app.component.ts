import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  Posts = [
    {
      Title : 'azer',
      Content : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ',
      LoveIts : 0,
      CreatedAt : new Date()

    },
    {
      Title : 'azer',
      Content : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ',
      LoveIts : 0,
      CreatedAt : new Date()
    },
    { Title : 'azer',
      Content : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ',
      LoveIts: 0,
      CreatedAt:  new Date()
    }

  ];
}
