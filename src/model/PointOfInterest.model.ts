import {User} from "./user.model";
import {Category} from "./Category.model";

export class PointOfInterest {
  IdPoint: number;
  title: string;
  description:string;
  picture: ByteString;
  createDate:Date;
  status:Status;
  owner:User;
  categories:Array<Category>
  longitude:number;
  latitude:number;

  constructor(title:string, description: string, picture: ByteString, user: User, listCategory: Array<Category>,lon:number,lat:number){
    this.title=title;
    this.description=description;
    this.picture=picture;
    this.owner = user;
    this.categories=listCategory;
    this.longitude=lon;
    this.latitude=lat;
  }
}
