import {User} from "../model/user.model";
import {Injectable} from "@angular/core";
import { HttpClient  } from '@angular/common/http';
import {UserExtended} from "../model/userExtended.model";
//import {Observable} from "rxjs/Observable";

import 'rxjs/Rx'

@Injectable()
export class UserService {

  constructor(protected http: HttpClient) {
  }

  registerService(params: string, user: User) {
    //return this.http.post(params, user).toPromise();
    this.http.post(params, user).subscribe();
  }

  updateUser(params: string, user: User) {
    return this.http.post(params, user).toPromise();
  }

  public loginService(params: string): Promise<UserExtended> {
    return this.http.get(params)
      .toPromise()
      .then(data => {
        return data as UserExtended;
      })
      //.catch(this.handleError);
  }

}
