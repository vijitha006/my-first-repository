import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthserviceService } from './authservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private AuthService:AuthserviceService,private router:Router){}
  canActivate()
   {
     
     if(localStorage.getItem('userName')!=null)
     {
       alert(localStorage.getItem('userName'));
     // this.router.navigate(['signup']);
       return true;
     }
    
     return false;
   
  }
  
}
