//constantes modal

const modal = document.getElementById("modal");
const titulomodal = document.getElementById("titulomodal");
const ejerciciomodal = document.getElementById("ejerciciomodal");
const respuesta = document.getElementById("respuesta");
const btnverificar = document.getElementById("btnverificar");
const mensaje = document.getElementById("mensaje");
const btncerrar = document.getElementById("btncerrar")


//console.log(modal)
//constantes a cada boton

const btnpareimpar = document.getElementById("btnpareimpar");
const btnmayoredad = document.getElementById("btnmayoredad");
const btnposoneg = document.getElementById("btnposoneg");
const btnaprob = document.getElementById("btnaprob");
const btnent = document.getElementById("btnent");
const btnregresiva = document.getElementById("btnregresiva");
const btnlyn = document.getElementById("btnlyn");
const btnimpar = document.getElementById("btnimpar")

let funcionejercicioactual = null;

//console.log(btnpareimpar)
//eventos

btnpareimpar.addEventListener("click", function(){
    abrirmodal("Numero par o impar", "ingresa un numero para verificar si es par o impar", verificarpareimpar);
});
btnmayoredad.addEventListener("click", function(){
    abrirmodal("Edad", "Ingresa tú edad para comprobar si eres mayor de edad", verificarmayoredad)
});
btnposoneg.addEventListener("click", function(){
    abrirmodal("Numero positivo o negativo", "ingresa un numero para verificar si es positivo o negativo", verificarposoneg);
});
btnaprob.addEventListener("click", function(){
    abrirmodal("¿Cual es tu nota?", "ingresa la nota de tu examen basado en 0 a 10", verificaraprob);
});
btnent.addEventListener("click", function(){
    abrirmodal("Ingrese un numero entero", "Se generaran numeros de 1 en 1 hasta el que desee", ImprimirNum);
});
btnregresiva.addEventListener("click", function(){
    abrirmodal("Ingrese un numero entero", "Se generara cuenta regresiva desde eñ numero que desee", ImprimirCuentaR);
});
btnlyn.addEventListener("click", function(){
    abrirmodal("Ingrese un numero entero", "Se generaran numeros pares hasta el que desee", Imprimirlyn);
});
btnimpar.addEventListener("click", function(){
    abrirmodal("Ingrese un numero Impar", "Se generaran numeros impares hasta el que desee", ImprimirImpar);
});


function abrirmodal(titulo, descripcion, funcionejercicio){
    titulomodal.textContent = titulo;
    ejerciciomodal.textContent = descripcion;
    respuesta.value = "";
    mensaje.textContent = "";

    funcionejercicioactual = funcionejercicio;

    modal.classList.add("activarmodal");

    btncerrar.addEventListener("click", function(){
        modal.classList.remove("activarmodal");
    });
}
    function verificarpareimpar(){
        let numero = parseInt(respuesta.value);
        if(isNaN(numero)){
            mensaje.textContent = "ingresa un numero valido"
        }
        else{
            mensaje.textContent = (numero % 2 === 0) ? "Es un numero par" : "Es un numero impar";
        }
}
function verificarmayoredad(){
    let numero = parseInt(respuesta.value);
    if(isNaN(numero)){
        mensaje.textContent = "ingresa un numero valido"
    }
    else{
        mensaje.textContent = (numero >=18) ? "Eres mayor de edad" : "No eres mayor de edad";
    }
}
function verificarposoneg(){
    let numero = parseInt(respuesta.value);
    if(isNaN(numero)){
        mensaje.textContent = "ingresa un numero"
    }
    else{
        mensaje.textContent = (numero >=0) ? "Es un nunmero positivo" : "Es un numero negativo";
    }
}

function verificaraprob(){
    let numero = parseInt(respuesta.value);
    if(isNaN(numero)){
        mensaje.textContent = "ingresa un numero"
    }
    else{
        mensaje.textContent = (numero >=5) ? "Aprobaste, !Felicidades¡" : "No aporbaste, estudia más!";
    }
}


function ImprimirNum(){            
    let entero, max, result='';
    max = parseInt(respuesta.value);
    for(entero = 0; entero <= max;  entero++)
{
    mensaje.textContent = (result += entero + ",")
}};


function ImprimirCuentaR(){
    let entero, regresiva, result='';
    regresiva = parseInt(respuesta.value);
    for(entero = regresiva; entero > 0;  entero--)
{
    mensaje.textContent = (result += entero + ", ");
}};

function Imprimirlyn(){            
    let entero, max, result='';
    max = parseInt(respuesta.value);
    for(entero = 0; entero <= max;  entero += 2)
{
    mensaje.textContent = (result += entero + ",")
}};
function ImprimirImpar(){            
    let entero, max, result='';
    max = parseInt(respuesta.value);
    for(entero = 0; entero <= max;  entero += 3)
{
    mensaje.textContent = (result += entero + ",")
}};




    btnverificar.addEventListener("click", function(){
    if(funcionejercicioactual){
        funcionejercicioactual()
    }
})