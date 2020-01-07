class Chapitre {
    constructor(titre, text){
        this.titre = titre,
        this.text = text
    }
    afficher(){
        let section = document.querySelector("section");
        let myDiv = document.createElement("article");
        let monTitre = document.createElement("h2");
        let monPara = document.createElement("p");
    
        monTitre.innerText = this.titre;
        monPara.innerText = this.text;
    
        myDiv.appendChild(monTitre);
        myDiv.appendChild(monPara);
        section.appendChild(myDiv);
    }
}