import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../../../common.service';


@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  public collection: any;
  alert: boolean = false;
createPosts = new FormGroup({
  userId: new FormControl(''),
  title: new FormControl(''),
  body: new FormControl('')
})

  constructor(private commonService: CommonService,private router: Router) { }

  ngOnInit(): void {
    this.commonService.getPosts().subscribe((result) => {
      this.collection = result;
    })
  }

  createPost(){
    //console.log(this.createPosts.value); 
    this.commonService.createPost(this.createPosts.value).subscribe((result) =>{
      //this.collection = result;
      console.warn(this.createPosts.value);
      this.alert = true;
      this.createPosts.reset({});
      console.log("Get data from service",result)
    }) 
  }

  closeAlert(){
    this.alert = false;
  }

  goBack() {
    this.router.navigate(['./posts']); 
  }

}
