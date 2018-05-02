import {Injectable} from "@angular/core";
import {UserExtended} from "../model/userExtended.model";
import {Langue} from "../model/Langue.model";
import  { PointOfInterest} from "../model/PointOfInterest.model";

@Injectable()
export class Globals{
  userExtended: UserExtended;
  langue:Langue;
  poi:PointOfInterest;
  langueParam:string="en";

  constructor(){
    this.userExtended=new UserExtended("a","a","a","a","a","../../assets/imgs/bb.jpg","tok");//todo
    this.langue=new Langue(this.langueParam);
  }

}
