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
            .then(promesa=> configurarMinutaje(promesa,series,descanso,rutina));  
            
}); 


const configurarMinutaje = (promesa,series,descanso,rutina) =>{
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
    IniciarEjercicio(promesa,TipoRutina,descanso,series,contenedorAmarillo,contenedorRojo)
                            
}


const IniciarEjercicio = async (promesa,TipoRutina,descanso,series,contenedorAmarillo,contenedorRojo) =>{
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
try{
        await IniciarCronometro(descanso);   
}catch(e){ console.log(e) }

        console.log(`Se ejecuto ${serie} veces`);   //posible error que no se ejecuten los minutos hasta que los segundos hayan terminado
    }
}

//Iniciar el coronometro 
let minutos; 
let segundos; 
var s = 59;
var m; 

const IniciarCronometro = async (descanso)=>{
    minutos = document.querySelector(".minutos"); 
    segundos = document.querySelector(".segundos"); 

    m = descanso; 
    console.log(m); 
   return new Promise ((resolve,reject)=>{
    let cronometro = setTimeout(()=>{resolve(console.log(`ya`))},2000); //Funcionó
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
            // },(descanso*10000)); 
//     }
//    })
// }

// const IniciarCronometro = async (descanso) =>{ 
//     IniciarSegundos();
//     await IniciarMinutos(descanso);
//     return new Promise((resolve, reject)=>{ 
//         resolve(console.log(`El tiempo terminó`)); 
//     }); 

// }

// const IniciarMinutos = async (descanso) =>{ 
//     minutos = document.querySelector(".minutos"); 
//     console.log(descanso); 
//     if(descanso>1){
//         m = (descanso-1); 
//     }else{
//         m = descanso; 
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

