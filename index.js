let message = document.getElementById("message");
message.innerHTML ="Bon jeu!" 


let ordi = Math.floor((Math.random() * 101));
console.log(ordi)
console.log("Tu n'es pas censé venir ici!")

;
function jeu() {
  let joueur = parseInt(document.getElementById("txt").value);
  
  

  
  if (joueur< 0 || joueur > 100) {
    message.innerHTML = "Veuillez entrer un nombre entre 0 et 100";
  }
  
    if (joueur < ordi ){
        message.innerHTML = "Vous avez visé trop bas"
       
    }
    else if (joueur > ordi){
        message.innerHTML = "Vous avez visé trop haut"
        
    }
    else if (joueur == ordi){
        message.innerHTML= `Bingo! Vous avez trouvé le nombre exact.`
        
    }
    else{
        message.innerHTML = "Je n'accepte pas de lettres"
    }
  
}
