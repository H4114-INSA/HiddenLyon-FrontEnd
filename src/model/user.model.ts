export class User {
  IdUser: number;
  firstName: string;
  lastName: string;
  email:string;
  biography:string;
  pathToProfilePicture: string;
  hashPassword:string;


  constructor(fnam:string,lnam:string,mai:string,passwor:string,bi:string){
    this.firstName=fnam;
    this.lastName=lnam;
    this.email=mai;
    this.hashPassword=passwor;
    this.biography=bi;
    this.pathToProfilePicture="no picture";
  }
}
