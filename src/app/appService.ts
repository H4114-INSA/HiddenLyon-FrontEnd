import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {LoginPage} from "../pages/login/login";
import{ProfilPage} from "../pages/profil/profil";

import {User} from "../model/user.model";

import { Http  } from '@angular/http';

@Injectable()
export class AppService {


  constructor(private http:Http) {
  }
  registerService(params:string): Observable<any>{
    return this.http.get(params);
  }

  getPOI() {
    return this.http.get('/poi/all');
  }
}

//get POI /poi/all
//
