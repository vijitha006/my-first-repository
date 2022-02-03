import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators } from '@angular/forms';
import { Router,ActivatedRoute,NavigationExtras} from '@angular/router';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
 loginForm=new FormGroup(
 {
   username:new FormControl('abc',[Validators.required]),
   password:new FormControl('123456',[Validators.required,Validators.minLength(5),Validators.maxLength(8)])
 })
  constructor(private service:AuthserviceService, private router:Router,private route:ActivatedRoute) { 
   
  }
  

  get username()
  {
    return this.loginForm.get('username');
  }
  
 
  get password()
  {
    return this.loginForm.get('password');
  }
  
  onSubmit()
  {
    let uname:any=this.loginForm.value.username;
    let pwd:any=this.loginForm.value.password;
  // alert(uname);
   var output=this.service.checkuser(uname,pwd);
    if(output==true)
    {
      this.router.navigate(['../homepage'],{queryParams:{data:uname}});
    }
    else
    {
        alert("Invalid Username or  Password");
       this.router.navigate(['./signup']);
    }
    //this.router.navigate(['../homepage'],{queryParams:{data:uname.username}});
  }
  ngOnInit():void
   {
   
  }

}
