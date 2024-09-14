var imgAtual = "equipe.jpg";
var imgPosterior = "blusa.jpg";

function trocar() {
    document.getElementById("primeiraImagem").src = imgAtual;
    let aux = imgAtual;
    imgAtual = imgPosterior;
    imgPosterior = aux
}