import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListPostComponent } from './modules/posts/list-post/list-post.component';
import { CreatePostComponent } from './modules/posts/create-post/create-post.component';
import { EditPostComponent } from './modules/posts/edit-post/edit-post.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './modules/posts/filter.pipe';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ListPostComponent,
    CreatePostComponent,
    EditPostComponent,
    FilterPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
