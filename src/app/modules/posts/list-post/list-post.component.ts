import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../common.service';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {

  public collection: any;
  userId: any;

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.commonService.getPosts().subscribe((result)=>{
      this.collection=result;
      console.log(this.collection)
    });
  }


}
