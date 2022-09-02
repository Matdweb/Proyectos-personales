let TipoRutina;   
let msj; 
let hablar; 

const Empezar = () =>{ 

    let rutina =  document.querySelector(".rutina").value; 

    if(rutina!=1 && rutina!=2){
        alert("ERROR: No ingresó un numero de rutina valido"); 
    }

    //llamar a la info de la primera rutina
    let peticion = fetch("../Rutinas-datos/Rutina.txt"); 
    peticion.then(promesa=>promesa.json())
            .then(promesa=> IniciarEntrenamiento(promesa,rutina));     
    
    document.querySelector(".btn-empezar").removeAttribute("onclick"); 

}


const IniciarEntrenamiento = (promesa,rutina) =>{
    //Se definen inputs
    let series = document.querySelector(".series").value; 
    let descansoMin = document.querySelector(".descansoMin").value;
    let descansoSeg = document.querySelector(".descansoSeg").value; 
    let descanso; 

    //Se modifican contenedores
    let contenedorAmarillo = document.querySelector(".informacion-pre-entreno"); 
    contenedorAmarillo.classList.replace("informacion-pre-entreno","informacion-ejercicio"); 
    let contenedorRojo = document.querySelector(".container-empezar");
    contenedorRojo.classList.replace("container-empezar","container-caja-roja");  

    if(rutina==1){   //Define con cual rutina se va a trabajar
        TipoRutina = "Rutina1"; 
    } else{
        TipoRutina = "Rutina2"
    }
        //Evita que se apague la pantalla en moviles
        NoSleepScreen(); 
        //Configura la info del ejercicio 
        IniciarEjercicio(promesa,TipoRutina,descansoMin,descansoSeg,series,contenedorAmarillo,contenedorRojo);  

}


const IniciarEjercicio = async (promesa,TipoRutina,descansoMin,descansoSeg,series,contenedorAmarillo,contenedorRojo) =>{
    let auxSeries = series; 
    let auxMin = descansoMin; 
    let auxSeg = descansoSeg; 
    for(let i = 0; i < promesa[TipoRutina].length; i++){
        for (let serie=0; serie < series; serie++){ 


            //Decir la informacion al usuario
            msj = new SpeechSynthesisUtterance(); 
            msj.lang = 'es-ES';
            hablar = window.speechSynthesis;

            //Se define el tiempo de descanso
            if(promesa[TipoRutina][i]["Tiempo"]!=undefined){  //si el ejercicio tiene que tener un tiempo especifico
                descansoMin = promesa[TipoRutina][i]["min"]; 
                descansoSeg = promesa[TipoRutina][i]["seg"];
                console.log(descansoMin); 
                console.log(descansoSeg)
                series = promesa[TipoRutina][i]["series"];
            }else{
                console.log(`Fin de ejercicios de calentamiento`);
                descansoSeg = auxSeg; 
                descansoMin = auxMin; 
                series = auxSeries; 
            }//sino se asigna el del usuario

            descanso = (descansoMin *60000) + (descansoSeg *1000);

            contenedorAmarillo.innerHTML = `<h1>Ejercicio: ${promesa[TipoRutina][i]["ejercicio"]}</h1>
                                        <p>${promesa[TipoRutina][i]["Reps"]} <br> REPETICIONES </p>
                                        <label> ${promesa[TipoRutina][i]["CAD"]} <br> CADENCIA </label>`; 

            try {
                contenedorRojo.innerHTML = `<div class="container-minutaje" >
                                                <p class="num-series">Numero de serie: ${serie+1} </p>
                                                <h2 class="minutos" >${descansoMin-1}</h2>
                                                <h2 class="segundos">:${descansoSeg}</h2>
                                                <p class="sig-ejercicio" >Siguiente ejercicio: ${promesa[TipoRutina][i+1]["ejercicio"]}</p>
                                            </div>
                                            <div class="omitir">
                                                    <p>></p>
                                            </div>
                                            <div class="container-imagen">
                                                <img class="imagen-ejercicio">
                                            </div>`; 

                msj.text = `Ejercicio ${promesa[TipoRutina][i]["ejercicio"]}, series completadas ${serie+1}, repeticiones ${promesa[TipoRutina][i]["Reps"]}, 
                        cadencia${promesa[TipoRutina][i]["CAD"]}, descanso de ${descansoMin} minutos con ${descansoSeg} segundos, siguiente ejercicio ${promesa[TipoRutina][i+1]["ejercicio"]}`;

            } catch (e) {
                contenedorRojo.innerHTML = `<div class="container-minutaje" >
                                            <p class="num-series">Numero de serie: ${serie+1} </p>
                                            <h2 class="minutos" >${descansoMin-1}</h2>
                                            <h2 class="segundos">:${descansoSeg}</h2>
                                            <p class="sig-ejercicio" >Siguiente ejercicio: ${promesa[TipoRutina][i]["ejercicio"]}</p>
                                        </div>
                                        <div class="omitir">
                                                <p>></p>
                                        </div>
                                        <div class="container-imagen">
                                            <img class="imagen-ejercicio">
                                        </div>`; 

                msj.text = `Ejercicio ${promesa[TipoRutina][i]["ejercicio"]}, series completadas ${serie+1}, repeticiones ${promesa[TipoRutina][i]["Reps"]}, 
                        cadencia${promesa[TipoRutina][i]["CAD"]}, descanso de ${descansoMin} minutos con ${descansoSeg} segundos, siguiente ejercicio ${promesa[TipoRutina][i]["ejercicio"]}`;

                                        
            }

            //Definir imagen
            DefinirImagen(promesa,TipoRutina,i); 
            
            try{
                await IniciarCronometro(promesa,descanso,descansoSeg,descansoMin,contenedorAmarillo,contenedorRojo,hablar,msj);   
            }catch(e){  
                console.log(e);
            } 

            console.log(`Se ejecuto ${serie} veces`);   
        }
    }
    //Se termina el programa y vuelve a su estado orginal
    contenedorRojo.innerHTML = `<h1>HAS TERMINADO</h1>`;
}

//Iniciar el coronometro 
let minutos; 
let segundos; 
var s = 59;
var m; 

const IniciarCronometro = async (promesa,descanso, descansoSeg,descansoMin,contenedorAmarillo,contenedorRojo,hablar,msj)=>{
    let btnOmitir = document.querySelector(".omitir");  

    contenedorAmarillo.style.backgroundColor = "#F3F824"; //El contenedor amarillo se define con su color amarillo  

    minutos = document.querySelector(".minutos"); 
    segundos = document.querySelector(".segundos"); 

    m = descansoMin; 
    console.log(m); 
   return new Promise ((resolve,reject)=>{
    console.log(`Inicia el cornometro`);
    //El cronometro se ejecuta en cada segundo y cada 59s se redefine el m (minutaje)
    s = descansoSeg; 
    if(s>1 && s<59){
        minutos.innerHTML = m;
    }else{
        minutos.innerHTML = m-1;
    }
    let cronometro = setInterval(()=>{
        if(s==0){
            s = 59; 
            m--; 
            segundos.innerHTML = `:${s}`; 
            minutos.innerHTML = m;
            s--; 
        }else if(s<10){
            segundos.innerHTML = `:0${s}`; 
            s--;
        }else{
            segundos.innerHTML = `:${s}`; 
            s--;
        }
    },1000); 

    //Finish posee el tiempo definido anteriormente por el usuario, cuando este termina limpia el cronometro y envia la promesa
    let Finish = setTimeout(()=>{
        segundos.innerHTML= ":00"; 
        minutos.innerHTML = "0"; 

        clearInterval(cronometro);
        console.log(`Se cancelo el cronometro`); 

        hablar.speak(msj);

        contenedorAmarillo.style.backgroundColor = "#28F824"; //Se redefine el color de la caja amrilla a verde

        //Espera a que el usuario aprete el contendor para enviar la promesa
        contenedorRojo.addEventListener("click",()=>{
            resolve(console.log(`Terminó el timer`));
            s=descansoSeg; 
            m=descansoMin; 
        })

    },descanso); //Minutos y segundos definidos en el input 
    
    btnOmitir.addEventListener("click",()=>{  //Si es necesario el cronometro de cada ejercicio se puede saltar y enviar la promesa
        segundos.innerHTML= ":00"; 
        minutos.innerHTML = "0";
        s=descansoSeg; 
        m=descansoMin; 
        clearInterval(cronometro); 
        clearTimeout(Finish); 
        resolve(console.log(`Terminó el timer`));
        hablar.cancel();
    })
}); 
}

//Imagenes - funciones
const DefinirImagen = (promesa,TipoRutina,i)=>{
    let imagen = document.querySelector(".imagen-ejercicio"); 
    imagen.src = promesa[TipoRutina][i]["Img"];
}

const NoSleepScreen = () =>{
    var noSleep = new NoSleep();
    noSleep.enable(); 
    document.removeEventListener('touchstart', enableNoSleep, false);
}
