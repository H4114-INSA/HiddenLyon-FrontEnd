export class Report {

  titre: string;
  description:string;
  categorie: string;



  constructor(title:string,descr:string,categorie:string){
  this.categorie=categorie;
  this.description=descr;
  this.titre=title;
  }
}
