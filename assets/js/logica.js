const asignarEventos = ()=>{
    let elBotonMostrarRutina = document.getElementById('btnMostrarRutina');
    elBotonMostrarRutina.addEventListener('click', mostrarRutina);
    let elBotonGenerador = document.getElementById('btnGenerador');
    elBotonGenerador.addEventListener('click', invocarGenerador );
}

let arregloRutina = [];

const mostrarRutina = ()=>{
    let lasSemanas = document.getElementById('txtSemanas');
    let lasSemanasNumber = Number(lasSemanas.value);
    let losDias = document.getElementById('txtDias');
    let losDiasNumber = Number(losDias.value);
    // console.log('lasSemanas: ', lasSemanasNumber);
    // console.log('typeof lasSemanas: ', typeof lasSemanasNumber);
    // console.log('losDias: ', losDiasNumber);

    let numeroRutina = 0;
    let laRutina = '';
    let elMensaje = '';

    if( isNaN(lasSemanasNumber) || isNaN(losDiasNumber)){
        console.log('No se pueden operar los datos');
        lasSemanas.value = "";
        losDias.value = "";

    }
    else{
        console.log('Se pueden operar los datos');
        for(let i=1; i<=lasSemanasNumber;i++){// iteracion para las semanas
            console.log(`%c ------------------- SEMANA ${i} -------------------`, 'background-color:green; color:yellow');
            for(let j=1; j<=losDiasNumber; j++){ // iteracion para los dias
                numeroRutina = obtenerNumeroAleatorio();
                switch(numeroRutina){
                    case 1:
                        laRutina = 'Sentadillas';
                        break;
                    case 2:
                        laRutina = 'Bancos';
                        break;
                    case 3:
                        laRutina = 'Peso Muerto';
                        break;
                    case 4:
                        laRutina = 'Prensas';
                        break;
                    default:
                        laRutina = 'Descanso'; // esta situacion nunca se dara
                }// cierre switch
                elMensaje = `SEMANA ${i} - DIA ${j} - Rutina: ${laRutina}`;
                console.log('%c'+elMensaje,'background-color:green; color:yellow');
                arregloRutina.push(elMensaje);
            }// cierre for interno
        }// cierre for externo

        console.log(arregloRutina);
    }// cierre else
}// cierre funcion mostrarRutina


const obtenerNumeroAleatorio = ()=>{
    let limiteInferior = 0;
    let limiteSuperior = 5;
    let numeroGenerado = Math.ceil( Math.random()* (limiteSuperior - limiteInferior) + limiteInferior);
   // console.log(numeroGenerado);
    return numeroGenerado;
}

function* generador(){
    for(let i=0; i<arregloRutina.length; i++){
        yield arregloRutina[i];
    }
    return '...terminado';
}


const invocarGenerador = ()=>{
    let gen1 = generador();
    for(let i=0; i<arregloRutina.length; i++){
        console.log(gen1.next().value );
    }
}
