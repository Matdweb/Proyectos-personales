const todasTareas = () =>{
    let tablas = document.querySelectorAll('.tabla');
    let tareas = 0; 
    for(var tabla of tablas){
       tareas += tabla.children.length-1
    }
    console.log(tareas)
    return tareas;
}

const tareasListas = () =>{
    let tablas = document.querySelectorAll('.tabla');
    let listas = 0; 
    for(var tabla of tablas){
       for(var i=1; i<tabla.children.length; i++){
        console.log(tabla.children[i].children[2].firstElementChild.firstElementChild.innerHTML);
        if(tabla.children[i].children[2].firstElementChild.firstElementChild.innerHTML=='Listo'){
            listas++;
        }
       }
    }
    console.log(listas)
    return listas;
}

const tareasXRealizar = () =>{
    console.log(todasTareas()-tareasListas());
    return todasTareas()-tareasListas()
}

tareasXRealizar();