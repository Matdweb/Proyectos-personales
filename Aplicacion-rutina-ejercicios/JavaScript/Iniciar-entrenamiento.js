let empezar = document.querySelector(".btn-empezar"); 
let TipoRutina; 


empezar.addEventListener("click", ()=>{
    let series = document.querySelector(".series").value; 
    let descansoMin = document.querySelector(".descansoMin").value; 
    let rutina =  document.querySelector(".rutina").value; 

    if(rutina!=1 && rutina!=2){
        alert("ERROR: No ingresó un numero de rutina valido"); 
    }

    console.log(series); 
    console.log(descansoMin); 
    console.log(rutina); 

    //llamar a la info de la primera rutina
    let peticion = fetch("../Rutinas-datos/Rutina.txt"); 
    peticion.then(promesa=>promesa.json())
            .then(promesa=> configurarMinutaje(promesa,series,descansoMin,rutina));  
            
}); 


const configurarMinutaje = (promesa,series,descansoMin,rutina) =>{
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
    IniciarEjercicio(promesa,TipoRutina,descansoMin,series,contenedorAmarillo,contenedorRojo)
                            
}


const IniciarEjercicio = async (promesa,TipoRutina,descansoMin,series,contenedorAmarillo,contenedorRojo) =>{
    for (let serie=0; serie < series; serie++){
        contenedorAmarillo.style.backgroundColor = "#28F824"; 
        contenedorAmarillo.innerHTML = `<h1>Ejercicio: ${promesa[TipoRutina][0]["ejercicio"]}</h1>
                                    <p>${promesa[TipoRutina][0]["Reps"]} <br> REPETICIONES </p>
                                    <label> ${promesa[TipoRutina][0]["CAD"]} <br> CADENCIA </label>`; 
        contenedorRojo.innerHTML = `<div class="container-minutaje" >
                                        <p class="num-series">Numero de serie: ${serie+1} </p>
                                        <h2 class="minutos" >${descansoMin-1}</h2>
                                        <h2 class="segundos">:00</h2>
                                        <p class="sig-ejercicio" >Siguiente ejercicio: ${promesa[TipoRutina][0+1]["ejercicio"]}</p>
                                    </div>`; 
        try{
            await IniciarCronometro(descansoMin,contenedorAmarillo);   
        }catch(e){ 
            console.log(e) 
        } 

        console.log(`Se ejecuto ${serie} veces`);   
    }
}

//Iniciar el coronometro 
let minutos; 
let segundos; 
var s = 59;
var m; 

const IniciarCronometro = async (descansoMin,contenedorAmarillo)=>{

    contenedorAmarillo.style.backgroundColor = "#F3F824";

    minutos = document.querySelector(".minutos"); 
    segundos = document.querySelector(".segundos"); 

    m = descansoMin; 
    console.log(m); 
   return new Promise ((resolve,reject)=>{
    console.log(`Inicia el cornometro`);
    minutos.innerHTML = m-1;
    let cronometro = setInterval(()=>{
        if(s==0){
            s = 59; 
            m--; 
            segundos.innerHTML = `:${s}`; 
            minutos.innerHTML = m-1;
            s--; 
        }else{
            segundos.innerHTML = `:${s}`; 
            s--;
        }
    },1000); 

    let Finish = setTimeout(()=>{
        resolve(console.log(`Terminó el timer`));
        clearInterval(cronometro);
        contenedorAmarillo.style.backgroundColor = "#28F824";
    },(descansoMin*60000)); //Funcionó
}); 
}




            //     minutos.innerHTML = m; 
            //     m--;
            // },60000); 
            // if(s==0){
            //     s = 59; 
            //     segundos.innerHTML = `:${s}`; 
            //     s--; 
            // }else{
            //     segundos.innerHTML = `:${s}`; 
            //     s--;
            // }
            // setTimeout(()=>{
            //     m=0; 
            //     resolve(console.log(`It's done`));
            // },(descansoMinMin*10000)); 
//     }
//    })
// }

// const IniciarCronometro = async (descansoMin) =>{ 
//     IniciarSegundos();
//     await IniciarMinutos(descansoMin);
//     return new Promise((resolve, reject)=>{ 
//         resolve(console.log(`El tiempo terminó`)); 
//     }); 

// }

// const IniciarMinutos = async (descansoMin) =>{ 
//     minutos = document.querySelector(".minutos"); 
//     console.log(descansoMin); 
//     if(descansoMin>1){
//         m = (descansoMin-1); 
//     }else{
//         m = descansoMin; 
//     }
//     console.log(m + `aqui`); 

//         return new Promise((resolve,reject)=>{
//             setInterval(()=>{
//                 console.log(`Los minutos empezaron`); 
//                 if(m==0){
//                     clearInterval(); 
//                     minutos.innerHTML = m; 
//                     resolve(console.log(`El minutaje termino`));  
//                 }else{  
//                     minutos.innerHTML = m-1; 
//                     m--; 
//                 }
//             },60000);
//         })
// }

// const IniciarSegundos = async () =>{ 
//     segundos = document.querySelector(".segundos"); 
//     setInterval(()=>{
//         if(m==0){
//             console.log(m + ` segundos`)
//             if(s==0){
//                 segundos.innerHTML = `:${s}`;
//                 clearInterval();  
//                 s = 59; 
//                 console.log(`Los segundos terminaron`); 
//             }else{
//                 segundos.innerHTML = `:${s}`; 
//                 s--;
//             }
//         }
//     },1000); 
// }

