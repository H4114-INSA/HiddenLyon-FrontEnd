import {PointOfInterest} from "./PointOfInterest.model";
import {User} from "./user.model";

export class Report {

  IdReport: number;
  user: User;
  point: PointOfInterest;
  cause: Cause;

  constructor(user: User, point: PointOfInterest, cause: Cause) {
    this.user = user;
    this.point = point;
    this.cause = cause;
  }
}
