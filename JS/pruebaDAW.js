//Declaración e inicialización de variables
var botoncito = document.getElementById("boton");

var sComb, pComb, iComb = 0;

var gFinal = 0;

botoncito.addEventListener('click',sumaGasto,true)

function sumaGasto(){
    
    //Declaración de variables de combos
    var sComb = parseInt(document.getElementById("superComb").value),
    pComb = parseInt(document.getElementById("personalComb").value),
    iComb = parseInt(document.getElementById("infantilComb").value);

    //Se crean las variables que almacenaran el precio de los combos dependiendo de la cantidad
    //de combos requeridos. Si no se ingresó algún combo por defecto el valor será 0.
    //Y como será 0 la multiplicaciónde dicho combo dará 0, validando así los datos de entrada.

    if (sComb > -1){
        precioComSup = 7.25 * sComb;
    }
    if (pComb > -1){
        precioComPer = 5.75 * pComb;
    }
    if (iComb > -1){
        precioComInf = 3.50 * iComb;
    }

    //Declaración de variables de checkbox
    var salad = document.querySelector("#ensalada"),
    pFritas = document.querySelector("#papaFrita"),
    pPoG = document.querySelector("#pPolloGrande"),
    pPoM = document.querySelector("#pPolloMediana"),
    pPoP = document.querySelector("#pPolloPequennia"),
    bG = document.querySelector("#bebidaGrande"),
    bM = document.querySelector("#bebidaMediana"),
    bP = document.querySelector("#bebidaPequennia"),
    coffe = document.querySelector("#cafe"),
    desert = document.querySelector("#postre");

    var sumaChecks = 0;

    if(salad.checked) {
        sumaChecks += parseFloat(salad.value);
    }
    if(pFritas.checked) {
        sumaChecks += parseFloat(pFritas.value);
    }
    if(pPoG.checked) {
        sumaChecks += parseFloat(pPoG.value);
    }
    if(pPoM.checked) {
        sumaChecks += parseFloat(pPoM.value);
    }
    if(pPoP.checked) {
        sumaChecks += parseFloat(pPoP.value);
    }
    if(bG.checked) {
        sumaChecks += parseFloat(bG.value);
    }
    if(bM.checked) {
        sumaChecks += parseFloat(bM.value);
    }
    if(bP.checked) {
        sumaChecks += parseFloat(bP.value);
    }
    if(coffe.checked) {
        sumaChecks += parseFloat(coffe.value);
    }
    if(desert.checked) {
        sumaChecks += parseFloat(desert.value);
    }

    var gFinal = (precioComSup + precioComPer + precioComInf + sumaChecks);
    document.querySelector("#gastoFinal").innerHTML = gFinal + "$";
}

function mostrarOcultar(){
    var controlE = event.keyCode;
    if (controlE == 0){
        
    }
}

