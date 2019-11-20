// btn = document.getElementById("btn");
// btn.addEventListener("click", function() {



    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let response = JSON.parse(xhttp.responseText);
            let articles = response.articles;


            for (i = 0; i < articles.length; i++) {
                let article = articles[i];

                let block = document.createElement("div");
                block.setAttribute("class", "news");
                block.style.width = "80%";


                let title = document.createElement("h2");
                title.textContent = article.titre;
                title.style.color = "#5f5f5f";
                title.style.fontFamily = "'Courier New', Courier, monospace";
                title.style.textAlign = "center";
                block.append(title);

                let para = document.createElement("p");
                para.textContent = article.text;
                para.style.marginLeft = "10px";
                para.style.marginRight = "10px";
                para.style.color = "5f5f5f";
                block.append(para);

                let link = document.createElement("a");
                link.textContent = article.lien;
                link.href = article.lien;
                link.style.textDecoration = "none";
                link.style.color = "#5f5f5f";
                link.style.marginLeft = "10px";
                link.style.fontSize = "15px";
                link.style.fontWeight = 'bold';
                block.append(link);



                document.getElementById("container").appendChild(block);
            }

        }
    };


    xhttp.open("GET", "articles.json", true);
    xhttp.send();

