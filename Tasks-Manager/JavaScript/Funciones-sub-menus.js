const DesplegarEstados = (fila)=>{
    let seleccion = document.querySelectorAll(".seleccion");
    let containerOpciones = document.querySelectorAll(".container-opciones-estado");
    containerOpciones[fila].classList.add("active");
    seleccion[fila].removeAttribute("onclick");
    if(containerOpciones[fila].children.length<=1){
        llenarEstados(fila,containerOpciones);
    }
}

const elegirEstado = (fila,numOpcion) =>{
    let seleccion = document.querySelectorAll(".seleccion");
    let containerOpciones = document.querySelectorAll(".container-opciones-estado");
    let estado = seleccion[fila];
    estado.innerHTML = document.querySelectorAll(".opcion")[numOpcion].lastElementChild.innerHTML;
    containerOpciones[fila].classList.remove("active");
    estado.setAttribute("onclick",`DesplegarEstados(${fila})`);
    estado.parentElement.parentElement.style.backgroundColor = DefinirEstado(estado.innerHTML);
}

const llenarEstados = (fila,containerOpciones) =>{
    var i=0;
    for(var estado of arregloEstados){
        containerOpciones[fila].innerHTML += `<div class="opcion">
                                              <input type="radio" class="radio"/>
                                              <span onclick="elegirEstado(${fila},${i})">${estado}</span>
                                            </div>`;
        i++;
    }
}


const DesplegarEncargados = (fila)=>{
    let containerEncargados = document.querySelectorAll(".container-opciones-encargado");
    containerEncargados[fila].classList.add("active");
    document.querySelectorAll(".encargado")[fila].removeAttribute("onclick");
    if(containerEncargados[fila].children.length==1){
        llenarIntegrantes(fila,containerEncargados);
    }
}

const llenarIntegrantes = (fila,containerEncargados) =>{
    var i=1;
    for(var Integrante of Integrantes){
        containerEncargados[fila].innerHTML += `<div class="Integrante">
                                                    <input type="radio" class="radio"/>
                                                    <span onclick="elegirEncargado(${fila},${i})">${Integrante}</span>
                                                </div>`;
        i++;
    }
}

const elegirEncargado = (fila,numOpcion) =>{
    let containerEncargados = document.querySelectorAll(".container-opciones-encargado");
    let encargado = document.querySelectorAll(".encargado")[fila];
    encargado.innerHTML = containerEncargados[fila].querySelectorAll(".Integrante")[numOpcion].lastElementChild.innerHTML;
    document.querySelectorAll(".container-opciones-encargado")[fila].classList.remove("active");
    encargado.setAttribute("onclick",`DesplegarEncargados(${fila})`);
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