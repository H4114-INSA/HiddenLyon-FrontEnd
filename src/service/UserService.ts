import {User} from "../model/user.model";
import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserExtended} from "../model/userExtended.model";
//import {Observable} from "rxjs/Observable";

import 'rxjs/Rx'

@Injectable()
export class UserService {

  constructor(protected http: HttpClient) {
  }

  registerService(params: string, user: User){
    this.http.post(params, user).subscribe();
    //this.http.post(params, user).subscribe();
  }

  updateUser(params: string, user: User, token: string) {
    return this.http.post(params, user,{headers: new HttpHeaders({Authorization : 'Basic '+token})})
      .toPromise();
  }

  loginService(params: string): Promise<UserExtended> {
    return this.http.get(params)
      .toPromise()
      .then(data => {
        return data as UserExtended;
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred during the authentication, please check your email/password'); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
