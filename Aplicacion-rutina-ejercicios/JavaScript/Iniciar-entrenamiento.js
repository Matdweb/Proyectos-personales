let TipoRutina;  

const Empezar = () =>{ 
    let rutina =  document.querySelector(".rutina").value; 

    if(rutina!=1 && rutina!=2){
        alert("ERROR: No ingresó un numero de rutina valido"); 
    }

    //llamar a la info de la primera rutina
    let peticion = fetch("../Rutinas-datos/Rutina.txt"); 
    peticion.then(promesa=>promesa.json())
            .then(promesa=> configurarMinutaje(promesa,rutina));     
    
    document.querySelector(".btn-empezar").removeAttribute("onclick"); 

}


const configurarMinutaje = (promesa,rutina) =>{
    //inputs
    let series = document.querySelector(".series").value; 
    let descansoMin = document.querySelector(".descansoMin").value;

    //contenedores
    let contenedorAmarillo = document.querySelector(".informacion-pre-entreno"); 
    contenedorAmarillo.classList.replace("informacion-pre-entreno","informacion-ejercicio"); 
    let contenedorRojo = document.querySelector(".container-empezar");
    contenedorRojo.classList.replace("container-empezar","container-caja-roja");  

    if(rutina==1){   //Define con cual rutina se va a trabajar
        TipoRutina = "Rutina1"; 
    } else{
        TipoRutina = "Rutina2"
    }
    
        IniciarEjercicio(promesa,TipoRutina,descansoMin,series,contenedorAmarillo,contenedorRojo);  
}


const IniciarEjercicio = async (promesa,TipoRutina,descansoMin,series,contenedorAmarillo,contenedorRojo) =>{
    for(let i = 0; i < promesa[TipoRutina].length; i++){
        for (let serie=0; serie < series; serie++){
            contenedorAmarillo.style.backgroundColor = "#28F824"; 
            contenedorAmarillo.innerHTML = `<h1>Ejercicio: ${promesa[TipoRutina][i]["ejercicio"]}</h1>
                                        <p>${promesa[TipoRutina][i]["Reps"]} <br> REPETICIONES </p>
                                        <label> ${promesa[TipoRutina][i]["CAD"]} <br> CADENCIA </label>`; 
            contenedorRojo.innerHTML = `<div class="container-minutaje" >
                                            <p class="num-series">Numero de serie: ${serie+1} </p>
                                            <h2 class="minutos" >${descansoMin-1}</h2>
                                            <h2 class="segundos">:00</h2>
                                            <p class="sig-ejercicio" >Siguiente ejercicio: ${promesa[TipoRutina][i+1]["ejercicio"]}</p>
                                            <div class="omitir">
                                                <p>></p>
                                            </div>
                                        </div>`; 
            try{
                await IniciarCronometro(descansoMin,contenedorAmarillo,contenedorRojo);   
            }catch(e){ 
                console.log(e); 
            } 
    
            console.log(`Se ejecuto ${serie} veces`);   
        }
    }
}

//Iniciar el coronometro 
let minutos; 
let segundos; 
var s = 59;
var m; 

const IniciarCronometro = async (descansoMin,contenedorAmarillo,contenedorRojo)=>{
    let btnOmitir = document.querySelector(".omitir");

    contenedorAmarillo.style.backgroundColor = "#F3F824";

    minutos = document.querySelector(".minutos"); 
    segundos = document.querySelector(".segundos"); 

    m = descansoMin; 
    console.log(m); 
   return new Promise ((resolve,reject)=>{
    console.log(`Inicia el cornometro`);
    minutos.innerHTML = m-1;
    let cronometro = setInterval(()=>{
        if(s==1){
            s = 59; 
            m--; 
            segundos.innerHTML = `:${s}`; 
            minutos.innerHTML = m-1;
            s--; 
        }else if(s<10){
            segundos.innerHTML = `:0${s}`; 
            s--;
        }else{
            segundos.innerHTML = `:${s}`; 
            s--;
        }
    },1000); 

    let Finish = setTimeout(()=>{
        segundos.innerHTML= ":00"; 
        minutos.innerHTML = "0"; 
        clearInterval(cronometro);
        console.log(`Se cancelo el cronometro`); 
        contenedorAmarillo.style.backgroundColor = "#28F824";
        
        contenedorRojo.addEventListener("click",(evento)=>{
            resolve(console.log(`Terminó el timer`));
            s=59; 
            m=descansoMin; 
            evento.stopPropagation(); 
        })

    },(descansoMin*60000)); //Funcionó
    
    btnOmitir.addEventListener("click",()=>{
        segundos.innerHTML= ":00"; 
        minutos.innerHTML = "0";
        s=59; 
        m=descansoMin; 
        clearInterval(cronometro); 
        clearTimeout(Finish); 
        resolve(console.log(`Terminó el timer`));
    })
}); 
}