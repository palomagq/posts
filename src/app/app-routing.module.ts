import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePostComponent } from './modules/posts/create-post/create-post.component';
import { EditPostComponent } from './modules/posts/edit-post/edit-post.component';
import { ListPostComponent } from './modules/posts/list-post/list-post.component';

const routes: Routes = [
{ /*path: 'posts', */
component: ListPostComponent ,path:'posts'},

{component: EditPostComponent ,path:'edit/:id'},

{component: CreatePostComponent ,path:'create'}];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
