import {User} from "../model/user.model";
import {Injectable} from "@angular/core";
import { HttpClient  } from '@angular/common/http';
import {UserExtended} from "../model/userExtended.model";
import {Observable} from "rxjs/Observable";

import 'rxjs/Rx'

@Injectable()
export class UserService {

  constructor(protected http:HttpClient) {
  }

  registerService(params: string, user: User) {
    return this.http.post(params, user).toPromise();
  }

  updateUser(params: string, user: User) {
    return this.http.post(params, user).toPromise();
  }

  loginService(params: string): UserExtended{
    this.http.get(params).map(
      data => {
      console.log(data)
    }).toPromise();

    return ;
  }
}
