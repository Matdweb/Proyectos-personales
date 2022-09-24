const DesplegarEstados = (numTabla,fila)=>{
    let seleccion = document.querySelectorAll(".seleccion");
    let contTabla = document.querySelector(`.tabla-${numTabla}`);
    let containerOpciones = contTabla.querySelectorAll(".container-opciones-estado");
    containerOpciones[fila].classList.add("active");
    seleccion[fila].removeAttribute("onclick");
    if(containerOpciones[fila].children.length<=1){
        llenarEstados(numTabla,fila,containerOpciones);
    }
}

const elegirEstado = (numTabla,fila,numOpcion) =>{
    ArregloTablas[numTabla].modificarEstado(numTabla,fila,numOpcion);
}

const llenarEstados = (numTabla,fila,containerOpciones) =>{
    var i=0;
    for(var estado of arregloEstados){
        containerOpciones[fila].innerHTML += `<div class="opcion">
                                              <input type="radio" class="radio"/>
                                              <span onclick="elegirEstado(${numTabla},${fila},${i})">${estado}</span>
                                            </div>`;
        i++;
    }
}


const DesplegarEncargados = (numTabla,fila)=>{
    let contTabla = document.querySelector(`.tabla-${numTabla}`);
    let containerEncargados = contTabla.querySelectorAll(".container-opciones-encargado");
    containerEncargados[fila].classList.add("active");
    document.querySelectorAll(".encargado")[fila].removeAttribute("onclick");
    if(containerEncargados[fila].children.length==1){
        llenarIntegrantes(numTabla,fila,containerEncargados);
    }
}

const llenarIntegrantes = (numTabla,fila,containerEncargados) =>{
    var i=1;
    for(var Integrante of Integrantes){
        containerEncargados[fila].innerHTML += `<div class="Integrante">
                                                    <input type="radio" class="radio"/>
                                                    <span onclick="elegirEncargado(${numTabla},${fila},${i})">${Integrante}</span>
                                                </div>`;
        i++;
    }
}

const elegirEncargado = (numTabla,fila,numOpcion) =>{
    ArregloTablas[numTabla].modificarEncargado(numTabla,fila,numOpcion);
}

const subTarea = document.querySelectorAll(".ver-sub-tarea");
const containerSubTareas = document.querySelectorAll(".container-opciones-sub-tareas");

const DesplegarSubTareas = (fila) =>{
    let subTarea = document.querySelectorAll(".ver-sub-tarea");
    let containerSubTareas = document.querySelectorAll(".container-opciones-sub-tareas");
    containerSubTareas[fila].classList.add("active");
    subTarea[fila].removeAttribute("onclick");
}

const elegirSubTarea = (fila,numOpcion) =>{
    let tareaFija = document.querySelectorAll(".ver-sub-tarea")[fila];
    let containerSubTareas = document.querySelectorAll(".container-opciones-sub-tareas");
    let subTareas = containerSubTareas[fila].querySelectorAll(".sub-tarea");
    tareaFija.innerHTML = subTareas[numOpcion].lastElementChild.innerHTML;
    containerSubTareas[fila].classList.remove("active");
    tareaFija.setAttribute("onclick",`DesplegarSubTareas(${fila})`);
}