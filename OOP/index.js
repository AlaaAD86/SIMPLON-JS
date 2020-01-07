class Voiture {
  constructor(marq, couleur, boite, modele) {
    //ce qui caracterise la voiture
    this.marque = marq;
    this.color = couleur;
    this.boiteVitesse = boite;
    this.model = modele;
    this.info = function() {
      return "I am " + this.marque + " of " + "and my model is " + this.model;
    };
  }
  //ce que sait faire la voiture
  klaxonner() {
    console.log("eeeeeeeeee");
  }
  rouler() {
    console.log("is alive");
  }
  tourner() {
    console.log("viiiiiiiiiiii");
  }
}


// =================================NEW ROBOT====================================


class Robot {
  constructor(color, antenne, tete, bras, moteur, chenille) {
    this.color = color;
    this.antenne = antenne;
    this.tete = tete;
    this.bras = bras;
    this.moteur = moteur;
    this.chenille = chenille;
    this.info = function() {
        return `Je suis un Robot et je suis ${this.color}. J'ai une ${this.tete} tete. J'ai ${this.bras} bras et je peux dire ` ;
      };
  }

//   info() {
//     return `Je suis un Robot et je suis ${this.color}. J'ai une ${this.tete} tete. J'ai ${this.bras} bras et je peux dire` ;
//   }
  
  rouler() {
    console.log("je roule doucement");
  }
  calcul() {
    console.log("je fais des calculs bizarres");
  }
  parler() {
    return "Peem Pam Poum";
  }
}
