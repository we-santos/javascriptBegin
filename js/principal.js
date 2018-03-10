var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var tdAltura = paciente.querySelector(".info-altura");
var tdImc = paciente.querySelector(".info-imc");

var peso = tdPeso.textContent;
var altura = tdAltura.textContent;


var alturaEhValida = true;
var pesoEhValido = true;

if (peso >= 1000 || peso <= 0) {
    console.log("Peso inválido!");
    tdImc.textContent = "Peso inválido!";
    pesoEhValido = false;
}

if (altura >= 3 || altura <= 0) {
    console.log("Altura inválido!");
    tdImc.textContent = "Altura inválida!";
    alturaEhValida = false;
}

if (pesoEhValido && alturaEhValida) {
    var imc = peso / (altura * altura);
    tdImc.textContent = imc;
}
