import {PointOfInterest} from "../model/PointOfInterest.model";
import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs/Observable";
import { Report} from "../model/Report.model";
import {UserExtended} from "../model/userExtended.model";
import 'rxjs/Rx'
import {User} from "../model/user.model";
import {toPromise} from "rxjs/operator/toPromise";
import {Validation} from "../model/Validation.model";

@Injectable()
export class POIService {

  constructor(protected http:HttpClient) {
  }

  getPOI(token: string): Promise<Array<PointOfInterest>> {
    return this.http.get('http://localhost:8080/poi/allValid', {headers: new HttpHeaders({Authorization : 'Basic '+token})})
        .toPromise()
        .then(data => {
            return data as Array<PointOfInterest>;
        });
  }

  getNextPointToValidate(){
    //todo
     return this.http.get("todo");
  }

  getPointToValidate(token: string,  user: User) : Promise<PointOfInterest> { //pour vérifier s'il reste un point à valider ou non
    return this.http.get('http://localhost:8080/poi/getPointToValidate?email='+user.email, {headers: new HttpHeaders({Authorization : 'Basic '+token})})
      .toPromise()
      .then ( data =>  {
      return data as PointOfInterest;
    });
  }

  vote(token : string, validation : Validation){
    //todo
    this.http.post("http://localhost:8080/poi/voteForPoi",validation , {headers: new HttpHeaders({Authorization : 'Basic '+token})})
      .subscribe();
  }

  reportBack(params:string,rep:Report){
    return this.http.post(params, rep).subscribe();
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred during the authentication, please check your email/password'); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
