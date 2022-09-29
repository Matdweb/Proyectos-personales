const todasTareas = () =>{
    let tablas = document.querySelectorAll('.tabla');
    let tareas = 0; 
    for(var tabla of tablas){
       tareas += tabla.children.length-1  //se resta 1 debido a que la primera fila no cuenta
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

const efectividadUsuario = () =>{
    let tablas = document.querySelectorAll('.tabla');
    let listas = 0; 
    for(var tabla of tablas){
        for(var i=1; i<tabla.children.length; i++){
            if(tabla.children[i].children[2].firstElementChild.firstElementChild.innerHTML=='Listo' 
            || tabla.children[i].children[2].firstElementChild.firstElementChild.innerHTML=='Casi Listo'){
                listas++;
            }
        }
    }
    console.log(listas);
    return todasTareas() - listas
}

const Responsabilidad = () =>{
    let tablas = document.querySelectorAll('.tabla');
    let hoy = new Date; 
    let faltas = 0; //variable que almacena el numero de tareas que expiraron
    for(var tabla of tablas){
        for(var i=1; i<tabla.children.length; i++){
        let fecha = tabla.children[i].querySelector(`#fecha`).value;
       console.log(fecha.split('-').join(',')) 
        }
     }

}