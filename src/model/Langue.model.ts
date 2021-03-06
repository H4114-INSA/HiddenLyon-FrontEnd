export class Langue {
  titleLog: string;
  email: string;
  password: string;
  login: string;
  register: string;
  forgottenPassword: string;
  prenom: string;
  nom: string;
  biography: string;
  confirmPassword: string;
  cancel: string;
  map:string;
  profil:string;
  validerPoint:string;
  report:string;
  parcours:string;
  parametres:string;
  profilTitre:string;
  modifier:string;
  valider:string;
  toChangePassword:string;
  fillActualPassword:string;
  fillNewPassword:string;
  confirmNewPassword:string;
  langue:string;
  fr:string;
  en:string;
  patageData:string;
  geoloc:string;
  notif:string;
  conditions:string;
  appliquer:string;


  categorie:string;
  reportTitle:string;
  description:string;
  doublon:string;
illicite:string;
incoherent:string;
transport:string;
TCL:string;
voiture:string;
velo:string;
marcher:string;
remplirAuMoins1Champs:string;
distanceParcours:string;
  tempsParcours:string;
  revenirPointDepart:string;

  constructor(lang: string) {
    switch (lang) {
      case ("fr"):
        this.titleLog = "Bienvenue";
        this.email = "e-mail";
        this.password = "mot de passe";
        this.login = "Se connecter";
        this.register = "Nouveau compte";
        this.forgottenPassword = "Mot de passe oublié?";
        this.prenom = "Prénom";
        this.nom = "Nom";
        this.biography = "Biographie";
        this.confirmPassword = "Confirmer mot de passe";
        this.cancel = "Annuler";
        this.map="Carte";
        this.profil="Profil";
        this.parametres="Paramètres";
        this.validerPoint="Valider un point";
        this.report="Signaler";
        this.parcours="Parcours";
        this.profilTitre="Mon profil";
        this.modifier="Modifier";
        this.valider="Valider";
        this.toChangePassword="Pour changer de mot de passe:";
        this.fillActualPassword="Entrez votre mot de passe actuel";
        this.fillNewPassword="Entrez votre nouveau mot de passe";
        this.confirmNewPassword="Confirmez votre nouveau mot de passe";
        this.langue="Langue";
        this.fr="Français";
        this.en="Anglais";
        this.appliquer="Appliquer";
        this.patageData="autoriser le partage de données";
        this.geoloc="Autoriser la géolocalisation";
        this.conditions="Conditions d'utilisation";
        this.notif="Autoriser les notifications";
        this.categorie="Catégories";
        this.reportTitle="Titre du signalement";
        this.description="Description";
        this.doublon="Doublon";
        this.incoherent="Incohérent";
        this.illicite="Illicite";
        this.transport="Transport";
        this.TCL="TCL";
        this.voiture="Voiture";
        this.velo="Vélo";
        this.marcher="A pied";
        this.remplirAuMoins1Champs="Remplir au moins un champs pour valider";
        this.distanceParcours="Distance de parcours (km)";
        this.tempsParcours="Temps de parcours (minutes)";
        this.revenirPointDepart="Revenir au point de départ?";
        break;
      case ("en"):
        this.titleLog = "Welcome";
        this.email = "e-mail";
        this.password = "password";
        this.login = "Login";
        this.register = "Register";
        this.forgottenPassword = "Forgotten password?";
        this.prenom = "First name";
        this.nom = "Last name";
        this.biography = "Biography";
        this.confirmPassword = "Confirm password";
        this.cancel = "Cancel"
        this.map="Map";
        this.profil="Profile";
        this.parametres="Parameters";
        this.validerPoint="Confirm a point";
        this.report="Report";
        this.parcours="Trail";
        this.profilTitre="My profile";
        this.modifier="Modify";
        this.valider="Confirm";
        this.toChangePassword="To change your password:";
        this.fillActualPassword="Fill with your actual password";
        this.fillNewPassword="Fill with your new password";
        this.confirmNewPassword="Confirm your new password";
        this.langue="Language";
        this.fr="French";
        this.en="English";
        this.appliquer="Apply";
        this.patageData="Authorize data share";
        this.geoloc="Authorize geolocation";
        this.conditions="Terms of use";
        this.notif="Authorize notifications";
        this.categorie="Categories";
        this.reportTitle="Report title";
        this.description="Description";
        this.doublon="Double";
        this.incoherent="Incoherent";
        this.illicite="Illicit";
        this.transport="Transport";
        this.TCL="TCL";
        this.voiture="Car";
        this.velo="Bike";
        this.marcher="Walk";
        this.remplirAuMoins1Champs="Fill at least one:";
        this.distanceParcours="Trail distance(km)";
        this.tempsParcours="Trail time(minutes)";
        this.revenirPointDepart="Get back to your position?";
        break;
    }
  }
}
