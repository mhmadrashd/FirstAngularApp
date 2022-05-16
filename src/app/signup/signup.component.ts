import { Component, OnInit } from '@angular/core';
import { User } from '../Users';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor() { }
  outTopic=["Facebook","Twitter","Google"];
  userModel:User= new User("","","","","");
  ngOnInit(): void {
  }

}
