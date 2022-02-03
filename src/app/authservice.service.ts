import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor() { }
  checkuser(uname:string,pwd:String)
  {
    
    if(uname=="vijitha" && pwd=="123456")
    {
      localStorage.setItem('userName','vijitha');
     // alert(localStorage.getItem('username'));
      return true;
    }
    return false;
  
  
  }
}
