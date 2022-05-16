import { Component, OnInit } from '@angular/core';
import { UsrDataService } from '../services/usr-data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor(private post:UsrDataService) { }
  postList:any;
  ngOnInit(): void {
    this.post.getPosts().subscribe(posts=>{
      this.postList = posts;
    })
  }

}
