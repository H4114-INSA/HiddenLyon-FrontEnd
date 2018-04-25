import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPage} from "../pages/login/login";
import {HomePage} from "../pages/home/home";


const appRoutes: Routes = [
  { path: 'page-login', component:LoginPage },
  {path:'page-home',component:HomePage},
  {path:'',redirectTo: '/page-home', pathMatch: 'full'}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(appRoutes) ],
})
export class AppRoutingModule {}
