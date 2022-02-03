import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute,private dialog:MatDialog)  { }

  ngOnInit(): void {
  }
signin()
{
//this.router.navigate(['../login'])
this.dialog.open(LoginComponent);
}
signup()
{
  this.router.navigate(['../signup'])
 // this.dialog.open(SignupComponent);
}
}
