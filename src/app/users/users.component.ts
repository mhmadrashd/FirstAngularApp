import { Component, OnInit } from '@angular/core';
import { UsrDataService } from '../services/usr-data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private usr:UsrDataService) { }
  usrList:any;
  ngOnInit(): void {
    this.usr.getUsers().subscribe(user=>{
      this.usrList = user;
    })
  }

}
