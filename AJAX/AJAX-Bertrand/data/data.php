<?php
// connexion à la base de données
$connexion = new PDO("mysql:host=localhost;dbname=Gestion;charset=utf8;port=3306", "phpmyadmin", "Step13");
// requête SQL permettant de récupérer les données de la table chapitre
$req = $connexion->prepare("SELECT * FROM AjaxGestion_Chapitres");
// exécution de la requête
$req->execute();
// récupération des données sous forme de tableau associatif
$datas = $req->fetchAll(PDO::FETCH_ASSOC);
// envoi des données converties au format json
echo json_encode($datas);