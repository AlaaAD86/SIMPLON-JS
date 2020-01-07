const navbar = document.querySelector('nav');
const openDiv = document.querySelectorAll("section article div"); 
const clickBtn = document.querySelectorAll('.picto');
// console.log(clickBtn);


// changer l'image

let sidePhoto = document.querySelector('main > section > aside > div');
sidePhoto.addEventListener('mouseover', ()=>{
    sidePhoto.style.borderRadius = '0px';
});
sidePhoto.addEventListener('mouseout', ()=>{
    sidePhoto.style.borderRadius = '100px';
});


    
// Creer le navbar

let xhttp = new XMLHttpRequest();
xhttp.open("GET", "../data/menu.json", true);

xhttp.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200){
        console.log("connection established");

        let response = JSON.parse(xhttp.responseText);
        let menus = response.principal;
        console.log(response.principal);
        

        for(i = 0; i < menus.length; i++ ){
            let menu = menus[i];
            let list = document.createElement("a");
            list.textContent = menu.nom;
            // console.log(menu.nom);
            navbar.append(list);
        }
    }
}

xhttp.send();


// Ouvrir les divs

for (let i = 0; i>clickBtn.length; i++){
    clickBtn[i].addEventListener('click', function(){
        console.log();
        
        for(let j = 0; j > openDiv.length; i++){
            if(openDiv.style.visibility === hidden){
                openDiv.style.visibility = 'visible';
                openDiv.style.height = '0px';
            } else {
                openDiv.style.visibility = 'hidden';
                openDiv.style.height = 'auto';
            }
        }
    });
    
}