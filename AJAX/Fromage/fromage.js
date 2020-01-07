

    class Fromage {
        constructor(fromages, section, block, nom, type, pays, classe){
            this.fromages = fromage,
            this.block = document.createElement("div"),
            this.nom = document.createElement("h2"),
            this.type = document.createElement("p"),
            this.pays = document.createElement("p"),
            this.classe = document.createElement("p"),
            this.pushText()
        }
    
        pushText(){
            this.nom.textContent = this.fromages.nom;
            this.block.appendChild(this.nom)
            
        }


    
    }
    


    this.section = document.querySelector('#container'),


    let xhttp = new XMLHttpRequest();
    
    xhttp.open("GET", "fromage.json", true);

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log('connected 200');
            
            let response = JSON.parse(xhttp.responseText);
            let fromages = response.fromages; 


            for (i = 0; i < fromages.length; i++) {
                let cheese = new Fromage(fromages[i]);
                console.log(cheese[i]);
                


                
                // let block = document.createElement("div");
                // block.setAttribute("class", "news");
                // block.style.width = "50%";
                // block.style.display = "flex";
                // block.style.flexFlow = "column";
                // block.style.justifyContent = "center"
               


                // let nom = document.createElement("h2");
                // nom.textContent = cheese.nom;
                // nom.style.fontFamily = "'Courier New', Courier, monospace";
                // nom.style.textAlign = "left";
                // nom.style.color = "white";
                // nom.style.marginLeft = "10px";

                // block.append(nom);

          

                // let type = document.createElement("p");
                // type.textContent = cheese.type;
                // type.style.marginLeft = "10px";
                // type.style.marginRight = "10px";
                // type.style.color = "white";
                // block.append(type);

                // let origin = document.createElement("p");
                // origin.textContent = cheese.pays;
                // origin.style.textDecoration = "none";
                // origin.style.color = "yellow";
                // origin.style.marginLeft = "10px";
                // origin.style.fontSize = "15px";
                // origin.style.fontWeight = 'bold';
                // block.append(origin);



                // document.getElementById("container").appendChild(block);
            }

        }
    };


    xhttp.send();

