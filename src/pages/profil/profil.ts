import { Component } from '@angular/core';

import {PageStat} from "../profil/PageStat";
import {PageProf} from "../profil/PageProf";
import {PagePOI} from "../profil/PagePOI";

@Component({
  selector: 'page-profil',
  templateUrl: 'profil.html',
})

export class ProfilPage {

  MonProfil = PageProf;
  MesStatistiques = PageStat;
  MesPOI = PagePOI;

  constructor() {

  }
}

