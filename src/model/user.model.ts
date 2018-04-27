export class User {
  fname: string;
  lname: string;
  mail:string;
  password:string;
  bio:string;
  pathPicture:string;
  constructor(fnam:string,lnam:string,mai:string,passwor:string,bi:string,path:string){
    this.fname=fnam;
    this.lname=lnam;
    this.mail=mai;
    this.password=passwor;
    this.bio=bi;
    this.pathPicture=path;
  }
}
