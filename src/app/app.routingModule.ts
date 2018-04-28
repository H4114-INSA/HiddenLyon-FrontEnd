import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{AuthGuardService} from "../service/AuthGardService";


import { LoginPage } from "../pages/login/login";
import { HomePage } from "../pages/home/home";
import {ProfilPage} from "../pages/profil/profil";
import {RegisterPage} from "../pages/register/register";
import  {ValiderPointPage} from "../pages/validerPoint/validerPoint";
import{ReportPage} from "../pages/report/report";



const appRoutes: Routes = [
  { path: 'page-login', component:LoginPage },
  {path:'page-home',component:HomePage,canActivate: [AuthGuardService]},
  {path:'page-profil',component:ProfilPage},
  {path:'page-register',component:RegisterPage},
  {path:'page-validerPoint',component:ValiderPointPage},
  {path:'page-report',component:ReportPage},
  {path:'',redirectTo: '/page-login', pathMatch: 'full'}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(appRoutes) ],
})
export class AppRoutingModule {}
