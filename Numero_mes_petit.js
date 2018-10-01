
function numeroMesPetit(){
    var numero1 = parseInt(prompt("Introdueix el primer número"))
    var numero2 = parseInt(prompt("Introdueix el segon número"))
    var numero3 = parseInt(prompt("Introdueix el tercer número"))
    var numero4 = parseInt(prompt("Introdueix el quart número"))
    var numero5 = parseInt(prompt("Introdueix el cinquè número"))

    var resultat = Math.min(numero1,numero2,numero3,numero4,numero5)
    document.getElementById("idPetit").innerHTML=("El número més petit és "+resultat)
}


