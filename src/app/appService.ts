import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/Rx';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {LoginPage} from "../pages/login/login";
import{ProfilPage} from "../pages/profil/profil";

import {User} from "../model/user.model";

import { HttpClient  } from '@angular/common/http';

@Injectable()
export class AppService {


  constructor(protected http:HttpClient) {
  }


  getPOI() {
    return this.http.get('/poi/all');
  }
}

//get POI /poi/all
//
