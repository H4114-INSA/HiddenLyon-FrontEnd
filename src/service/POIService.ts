import {PointOfInterest} from "../model/PointOfInterest.model";
import {Injectable} from "@angular/core";
import { HttpClient  } from '@angular/common/http';
import {Observable} from "rxjs/Observable";
import { Report} from "../model/Report.model";
import 'rxjs/Rx'

@Injectable()
export class POIService {

  constructor(protected http:HttpClient) {
  }
  getPOI() : Promise<Array<PointOfInterest>> {
    return this.http.get('/poi/allValid')
      .toPromise()
      .then(data =>{
        return data as Array<PointOfInterest>;
      });
  }
  getNextPointToValidate(){
    //todo
     return this.http.get("todo");
  }
  voteOui(){
    //todo
  }
  voteNon(){
    //todo
  }
  report(params:string,rep:Report){
    return this.http.post(params, rep).toPromise();
  }

}
