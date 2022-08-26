let empezar = document.querySelector(".btn-empezar"); 
let TipoRutina; 


empezar.addEventListener("click", ()=>{
    let series = document.querySelector(".series").value; 
    let descanso = document.querySelector(".descanso").value; 
    let rutina =  document.querySelector(".rutina").value; 

    if(rutina!=1 && rutina!=2){
        alert("ERROR: No ingresó un numero de rutina valido"); 
    }

    console.log(series); 
    console.log(descanso); 
    console.log(rutina); 

    //llamar a la info de la primera rutina
    let peticion = fetch("../Rutinas-datos/Rutina.txt"); 
    peticion.then(promesa=>promesa.json())
            .then(promesa=> obtenerResultados(promesa,series,descanso,rutina));  
            
}); 

//llamar a la info de la primera rutina
const obtenerResultados = (promesa,series,descanso,rutina) =>{
    console.log(promesa["Rutina1"][0]["ejercicio"]); 
    console.log(promesa["Rutina1"][0]["CAD"]);
    console.log(promesa["Rutina1"][0]["Reps"]);
    console.log(promesa["Rutina1"].length);
    IniciarEntrenamiento(promesa,series,descanso,rutina); 
}

const IniciarEntrenamiento = (promesa,series,descanso,rutina) =>{
    let contenedorAmarillo = document.querySelector(".informacion-pre-entreno"); 
    contenedorAmarillo.classList.replace("informacion-pre-entreno","informacion-ejercicio"); 
    let contenedorRojo = document.querySelector(".container-empezar");
    contenedorRojo.classList.replace("container-empezar","container-caja-roja");  

    if(rutina==1){   //Define con cual rutina se va a trabajar
        TipoRutina = "Rutina1"; 
    } else{
        TipoRutina = "Rutina2"
    }
    
    //meter esto dentro de un ciclo for "promesa[TipoRutina].length" cantidad de veces
    IniciarCronometroEntrenamiento(promesa,TipoRutina,descanso,series,contenedorAmarillo,contenedorRojo)
                            
}


const IniciarCronometroEntrenamiento = async (promesa,TipoRutina,descanso,series,contenedorAmarillo,contenedorRojo) =>{
    for (let serie=0; serie < series; serie++){
        contenedorAmarillo.innerHTML = `<h1>Ejercicio: ${promesa[TipoRutina][0]["ejercicio"]}</h1>
                                    <p>${promesa[TipoRutina][0]["Reps"]} <br> REPETICIONES </p>
                                    <label> ${promesa[TipoRutina][0]["CAD"]} <br> CADENCIA </label>`; 
        contenedorRojo.innerHTML = `<div class="container-minutaje" >
                                        <p class="num-series">Numero de serie: ${serie+1} </p>
                                        <h2 class="minutos" >${descanso-1}</h2>
                                        <h2 class="segundos">:00</h2>
                                        <p class="sig-ejercicio" >Siguiente ejercicio: ${promesa[TipoRutina][0+1]["ejercicio"]}</p>
                                    </div>`; 

        await IniciarSegundos();
        let Minutaje = await IniciarMinutos(descanso); 
    console.log(`Se ejecuto ${serie} veces`);   //posible error que no se ejecuten los minutos hasta que los segundos hayan terminado
}
}

//Iniciar el coronometro 
let minutos; 
let segundos; 
var s = 59;
var m; 


const IniciarCronometro = async (descanso) =>{ 
    await IniciarSegundos();
    let Minutaje = await IniciarMinutos(descanso);  
}

const IniciarMinutos = async (descanso) =>{
    minutos = document.querySelector(".minutos"); 
    m = descanso; 
    return new Promise((resolve,reject)=>{
        setInterval(()=>{
            if(m==0){
                clearInterval(); 
                minutos.innerHTML = m; 
                resolve(m); 
            }else{ 
                minutos.innerHTML = m-1; 
                m--; 
            }
        },60000);
    })
}

const IniciarSegundos = async () =>{
    segundos = document.querySelector(".segundos"); 
    setInterval(()=>{
        if(m!=0){
            if(s==0){
                segundos.innerHTML = `:${s}`;
                s=59;  
                s--; 
            }else{
                segundos.innerHTML = `:${s}`; 
                s--;
            }
        } 
    },1000); 
}


