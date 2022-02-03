import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomepageComponent} from './homepage/homepage.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { AuthenticationGuard } from './authentication.guard';
import { SignupComponent } from './signup/signup.component';
const routes: Routes = [
  {
    path:'login',
    component:LoginComponent 
   },
   {
     path:'homepage',
     component:HomepageComponent,
     canActivate:[AuthenticationGuard]
    },
    {
      path:'',
      redirectTo:'/welcome-page',pathMatch:'full'
    },
    
    {
      path:'welcome-page',
      component:WelcomePageComponent
    },
    {
      path:'signup',
      component:SignupComponent
    },
    {
      path:'**',
      component:PageNotFoundComponent 
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[LoginComponent ,HomepageComponent,WelcomePageComponent,SignupComponent]
