export class Langue {
  titleLog:string;
  email:string;
  password:string;
  login:string;
  register:string;
  forgottenPassword:string;

  constructor(lang:string){
    switch (lang) {
      case ("fr"):
          this.titleLog = "Bienvenue";
          this.email = "e-mail";
          this.password = "mot de passe";
          this.login = "se connecter";
          this.register = "nouveau compte";
          this.forgottenPassword = "mot de passe oublié?";
        break;
    }
    switch (lang) {
      case ("en"):
        this.titleLog = "Welcome";
        this.email = "e-mail";
        this.password = "password";
        this.login = "Login";
        this.register = "Register";
        this.forgottenPassword = "Forgotten password?";
        break;
    }
  }
}
