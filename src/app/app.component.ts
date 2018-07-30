import {Component, OnInit} from '@angular/core';
import { Router} from "@angular/router";
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{



  constructor() { const config = {
    apiKey: "AIzaSyBc9whtMqAvF_ebzv_Dw_LkPq7S0KgYBtA",
    authDomain: "http-client-demo-angular-cab6b.firebaseapp.com",
    databaseURL: "https://http-client-demo-angular-cab6b.firebaseio.com",
    projectId: "http-client-demo-angular-cab6b",
    storageBucket: "http-client-demo-angular-cab6b.appspot.com",
    messagingSenderId: "438660030866"
  };
    firebase.initializeApp(config);
  }
  ngOnInit(){

  }
}
