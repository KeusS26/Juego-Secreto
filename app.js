/*aqui se les asigno el número 0 ya que la función que esta
al final la vuelve a reasignar y hace el codigo*/
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
let numeroVeces = 5;
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos == 1 ? 'vez' : 'veces')  }`)
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El número no acerto
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', `El número secreto es menor `)
        }
        else{
            asignarTextoElemento('p', 'El número secreto es mayor')
        }
        intentos++;
        if (intentos > numeroVeces) {
            asignarTextoElemento('p','Ya hiciste todos los intentos vuelve a empezar');
            document.getElementById('reiniciar').removeAttribute('disabled');
        }
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.getElementById('valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    //Si ya sorteamos todos los números

    if (listaNumerosSorteados.length == numeroMaximo && numeroVeces < intentos) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else {
        //si el numero generado esta incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
    
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();
    //Indicar mensaje de intervalos de números
    /*generar el número aleatorio aca estamos llamando
    a la variante no la estamos declarando la estamos nuevamente llamando*/
    //inicializar el número Intentos
    condicionesIniciales();
    /*Deshabilitar el botón de nuevo juego
    en este caso el setAttribute le tenemos que colocar 2 atributos como a quien y quele vamos hacer
    setAttribute('disable',true) que es este caso*/
    document.getElementById('reiniciar').setAttribute('disabled',true);
}

condicionesIniciales();