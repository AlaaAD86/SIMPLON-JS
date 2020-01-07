class Robots extends Machine {
  constructor(
    rouage,
    nbTete = 1,
    typeTete = "Tordue",
    genreAntenne,
    nbYeux,
    nbBras,
    nbPieds,
    energie,
    vitesse,
    taille,
    puissance
  ) {
    super(rouage);
    this.nbTete = nbTete;
    this.typeTete = typeTete;
    this.genreAntenne = genreAntenne;
    this.nbYeux = nbYeux;
    this.nbBras = nbBras;
    this.nbPieds = nbPieds;
    this.energie = energie;
    this.vitesse = vitesse;
    this.taille = taille;
    this.puissance = puissance;
  }

  marcher() {
    return `Je peux marcher à une vitesse de ${this.vitesse}.`;
  }

  accelerer() {
    return this.puissance * this.vitesse;
  }

  sauter() {
    return this.puissance / this.taille;
  }

  monter() {
    if (this.nbPieds >= 2) {
      console.log("Je suis capable à monter");
    } else {
      console.log("Je n'ai pas des pieds pour sauter ");
    }
  }

  atrapper() {}
}
