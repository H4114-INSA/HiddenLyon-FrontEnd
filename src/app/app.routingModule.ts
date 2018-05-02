import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{AuthGuardService} from "../service/AuthGardService";


import { LoginPage } from "../pages/login/login";
import { HomePage } from "../pages/home/home";
import {ProfilPage} from "../pages/profil/profil";
import {RegisterPage} from "../pages/register/register";
import  {ValiderPointPage} from "../pages/validerPoint/validerPoint";
import{ReportPage} from "../pages/report/report";
import{ParcoursPage} from "../pages/parcours/parcours";
import {ParametresPage} from "../pages/parametres/parametres";
import {ConditionsPage} from "../pages/conditions/conditions";
import {PageStat} from "../pages/profil/PageStat";
import {PageProf} from "../pages/profil/PageProf";
import {PagePOI} from "../pages/profil/PagePOI";


const appRoutes: Routes = [
  {path: 'page-login', component:LoginPage },
  {path:'page-home',component:HomePage,canActivate: [AuthGuardService]},
  {path:'page-profil',component:ProfilPage},
  {path:'page-register',component:RegisterPage},
  {path:'page-validerPoint',component:ValiderPointPage},
  {path:'page-report',component:ReportPage},
  {path:'page-parcours',component:ParcoursPage},
  {path:'page-parametres',component:ParametresPage},
  {path:'page-conditions',component:ConditionsPage},
  {path:'pageProf', component:PageProf},
  {path:'pagePOI', component:PagePOI},
  {path:'pageStat', component:PageStat},
  {path:'',redirectTo: '/page-login', pathMatch: 'full'}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(appRoutes) ],
})
export class AppRoutingModule {}
