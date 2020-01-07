class JunioRobot extends Robots {
  constructor(
    rouage,
    genreAntenne,
    nbYeux,
    nbBras,
    nbPieds,
    energie,
    vitesse,
    taille,
    puissance,
    oreilles
  ) {
    super(
      rouage,
      genreAntenne,
      nbYeux,
      nbBras,
      nbPieds,
      energie,
      vitesse,
      taille,
      puissance
    );
    this.oreilles = oreilles;
  }
}
