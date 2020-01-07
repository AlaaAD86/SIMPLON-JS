let button = document.getElementById('btn');
button.addEventListener('click', () => {
    afficherChapitres();
});


function afficherChapitres (){

    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'data/data.php');
    
    xhr.responseType = 'json';
    
    xhr.addEventListener('load', function(){
        let section = document.querySelector("section");
        section.innerHTML = "";
        let dataJson = this.response;
    
        dataJson.forEach(element => {
            console.log(element);
           let article = new Chapitre(element.titre, element.text);
           article.afficher();
        });
    });
    
    xhr.send();
}



// function create(articles){
//     let myDiv = document.createElement("div");
//     let monTitre = document.createElement("h2");
//     let monPara = document.createElement("p");

//     monTitre.innerText = articles.titre;
//     monPara.innerText = articles.text;

//     myDiv.appendChild(monTitre);
//     myDiv.appendChild(monPara);

//     document.body.appendChild(myDiv);

// }