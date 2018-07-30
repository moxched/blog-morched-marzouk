import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import { PostFormComponent } from './post-form/post-form.component';
import { HeaderComponent } from './header/header.component';
import {RouterModule, Routes} from '@angular/router';
import {PostService} from './services/post.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

const appRoute: Routes = [
  {path: 'Posts', component: PostListComponent},
  {path: 'Posts/new', component: PostFormComponent},
  {path: '', redirectTo: 'Posts', pathMatch: 'full'},
  {path: '**', redirectTo: 'Posts'}
  ];

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostListItemComponent,
    PostFormComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    RouterModule.forRoot(appRoute),
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
