
function numeroMesPetit(){
    var numero1 = parseInt(prompt("Introdueix el primer número"))
    var numero2 = parseInt(prompt("Introdueix el segon número"))
    var numero3 = parseInt(prompt("Introdueix el tercer número"))
    var numero4 = parseInt(prompt("Introdueix el quart número"))
    var numero5 = parseInt(prompt("Introdueix el cinquè número"))
    var numero6 = parseInt(prompt("Introdueix el sisè número"))
    var numero7 = parseInt(prompt("Introdueix el setè número"))
    var numero8 = parseInt(prompt("Introdueix el vuitè número"))
    var numero9 = parseInt(prompt("Introdueix el novè número"))
    var numero10 = parseInt(prompt("Introdueix el desè número"))

    var resultat = Math.max(numero1,numero2,numero3,numero4,numero5,numero6,numero7,numero8,numero9,numero10)
    document.getElementById("idPetit").innerHTML=("El número més gran és "+resultat)
}
