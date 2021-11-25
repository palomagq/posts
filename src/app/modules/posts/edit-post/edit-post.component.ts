import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CommonService } from '../../../common.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  alert: boolean = false;
editPosts = new FormGroup({
  userId: new FormControl(''),
  title: new FormControl(''),
  body: new FormControl('')
  })

  constructor(private commonService: CommonService, private router: ActivatedRoute, private router2: Router) { }

  ngOnInit(): void {
    console.log(this.router.snapshot.params.id)
    this.commonService.getCurrentData(this.router.snapshot.params.id).subscribe((result: any)=>{
      this.editPosts = new FormGroup({
        userId: new FormControl(result['userId']),
        title: new FormControl(result['title']),
        body: new FormControl(result['body'])
      });
    });
  }

  editPost(){
    this.commonService.editPost(this.router.snapshot.params.id,this.editPosts.value).subscribe((result) => {
      console.log(result,"Data Updated Succesfull")
      console.warn(this.editPosts.value);
      this.alert = true;

    })
  } 

  closeAlert(){
    this.alert = false;
  }

  goBack() {
    this.router2.navigate(['/posts']); 
  }
}
