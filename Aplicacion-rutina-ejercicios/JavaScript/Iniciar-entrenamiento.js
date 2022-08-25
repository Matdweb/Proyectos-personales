let empezar = document.querySelector(".btn-empezar"); 

empezar.addEventListener("click", ()=>{
    let series = document.querySelector(".series").value; 
    let descanso = document.querySelector(".descanso").value; 
    let rutina =  document.querySelector(".rutina").value; 

    console.log(series); 
    console.log(descanso); 
    console.log(rutina); 

    //llamar a la info de la primera rutina
    let peticion = fetch("../Rutinas-datos/Rutina.txt"); 
    peticion.then(promesa=>promesa.json())
            .then(promesa=> obtenerResultados(promesa));  
            
}); 

//llamar a la info de la primera rutina
const obtenerResultados = (promesa) =>{
    console.log(promesa["Rutina1"][0]["ejercicio"]); 
    console.log(promesa["Rutina1"][0]["CAD"]);
    console.log(promesa["Rutina1"][0]["Reps"]);
    console.log(promesa["Rutina1"].length);
    definirEjerActual(promesa); 
}

const definirEjerActual = (promesa) =>{
    let contenedorAmarillo = document.querySelector(".informacion-pre-entreno"); 
    contenedorAmarillo.innerHTML = `<h1>${promesa["Rutina1"][0]["ejercicio"]}</h1>`; 
}