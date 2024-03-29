let numeroSecreto = 0 ;
let intentos = 0 ;
let listaNumerosSorteados =[];
let numeroMaximo=10 ;
let maximoIntentos = 4


function asignarTextoElemento(elemento, texto){
    let elementoHTML= document.querySelector(elemento);
elementoHTML.innerHTML = texto;
return;
}

function verificarIntento(){
    let numeroDeUsuario =parseInt (document.getElementById('valorUsuario').value); 
  
    
    if (numeroDeUsuario === numeroSecreto ) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acerto 
        if (numeroDeUsuario > numeroSecreto) {
        asignarTextoElemento ('p','El número secreto es menor');
    } else {
        asignarTextoElemento('p','El número secreto es mayor');
      }
      intentos++;
    limpiarCaja();
    
    if (intentos > maximoIntentos ) {
        asignarTextoElemento('p',`Llegaste al número maximo de ${maximoIntentos} intentos`);}
        if (intentos > maximoIntentos ) {document.getElementById('reiniciar').removeAttribute('disabled');}
        
        if (intentos > maximoIntentos ) {document.querySelector('#verificar').setAttribute('disabled','true');}
        }
}
    
    



function limpiarCaja() {
 document.querySelector('#valorUsuario').value = '';

}
function generarNumeroSecreto() {
 let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

 console.log(numeroGenerado);
 console.log(listaNumerosSorteados);
 // si ya sorteramos todos los numeros
 if (listaNumerosSorteados.length == numeroMaximo){
    asignarTextoElemento('p','Ya se sortearon todos las números posibles');
}else{
     // Si el numero generado esta incluido en la lista 
 if (listaNumerosSorteados.includes(numeroGenerado)) {
 return generarNumeroSecreto();
 }else{
    listaNumerosSorteados.push(numeroGenerado);
    return numeroGenerado; 
    }
  }
} 
 function condicionesIniciales(){
    asignarTextoElemento('h1','¡Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;

 }

 function reiniciarJuego() {
//limpiar caja
limpiarCaja();
//indicar mensaje de intervalo de números
//generar el numero aleatorio
//Inicializar el número de intentos
condicionesIniciales();
//Deshabilitar el botón de nuevo juego 
document.querySelector('#reiniciar').setAttribute('disabled','true');


 }

 condicionesIniciales();


