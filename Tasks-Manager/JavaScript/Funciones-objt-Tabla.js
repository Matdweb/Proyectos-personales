const AgregarTabla = (numTabla) =>{
    ArregloTablas[numTabla].NuevaTabla();
}

const ModificarTexto = (tabla,fila,colm) =>{
    ArregloTablas[tabla].modificarTexto(tabla,fila,colm);
}

const validacionTexto = (casillaText) =>{
    if(casillaText.firstChild.value==""){
        return `Vacio`;
    }else{
        return casillaText.firstChild.value;
    }
}

const AgregarFila = (numTabla)=>{
    ArregloTablas[numTabla].agregarFila(numTabla);
}

const ModificarNomTabla = (numTabla) =>{
    ArregloTablas[numTabla].nuevoNomTabla(numTabla);
}

const ModificarEstado = (tabla,fila) =>{
    ArregloTablas[tabla].modificarEstado(tabla,fila);
}

const DefinirEstado = (casillaEstado) =>{
    switch (casillaEstado){
        case "Estancado": return "rgb(199, 56, 56)";
        break;
        case "En proceso": return "rgb(196, 179, 23)"
        break; 
        case "Casi Listo":  return "rgb(50, 124, 126)";
        break; 
        case "Listo": return "rgb(52, 161, 59)";
        break; 
        default: return "#2f3640"; 
    }
}

const ModificarEncargado = (tabla,fila) =>{
    ArregloTablas[tabla].modificarEncargado(tabla,fila);
}

const seleccion = document.querySelectorAll(".seleccion");
const containerOpciones = document.querySelectorAll(".container-opciones-estado");
const optionsList = document.querySelectorAll(".opcion");

const DesplegarEstados = (fila)=>{
    containerOpciones[fila].classList.add("active");
    seleccion[fila].removeAttribute("onclick");
    if(containerOpciones[fila].children.length<=1){
        llenarEstados(fila)
    }
}

const elegirEstado = (fila,numOpcion) =>{
    let estado = seleccion[fila];
    estado.innerHTML = document.querySelectorAll(".opcion")[numOpcion].lastElementChild.innerHTML;
    containerOpciones[fila].classList.remove("active");
    estado.setAttribute("onclick",`DesplegarEstados(${fila})`);
    estado.parentElement.parentElement.style.backgroundColor = DefinirEstado(estado.innerHTML);
}

const llenarEstados = (fila) =>{
    var i=0;
    for(var estado of arregloEstados){
        containerOpciones[fila].innerHTML += `<div class="opcion">
                                              <input type="radio" class="radio"/>
                                              <span onclick="elegirEstado(${fila},${i})">${estado}</span>
                                            </div>`;
        i++;
    }
}


const eleccion = document.querySelectorAll(".encargado");
const containerEncargados = document.querySelectorAll(".container-opciones-encargado");
const opcionesEncargados = document.querySelectorAll(".Integrante");

const DesplegarEncargados = (fila)=>{
    containerEncargados[fila].classList.add("active");
    eleccion[fila].removeAttribute("onclick");
    if(containerEncargados[fila].children.length==1){
        llenarIntegrantes(fila)
    }
}

const llenarIntegrantes = (fila) =>{
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
    let encargado = eleccion[fila];
    encargado.innerHTML = document.querySelectorAll(".Integrante")[numOpcion].lastElementChild.innerHTML;
    containerEncargados[fila].classList.remove("active");
    encargado.setAttribute("onclick",`DesplegarEncargados(${fila})`);
}

const subTarea = document.querySelectorAll(".ver-sub-tarea");
const containerSubTareas = document.querySelectorAll(".container-opciones-sub-tareas");
const subTareas = document.querySelectorAll(".sub-tarea");

const DesplegarSubTareas = (fila) =>{
    containerSubTareas[fila].classList.add("active");
    subTarea[fila].removeAttribute("onclick");
}

const elegirSubTarea = (fila,numOpcion) =>{
    let tareaFija = subTarea[fila];
    tareaFija.innerHTML = subTareas[numOpcion].lastElementChild.innerHTML;
    containerSubTareas[fila].classList.remove("active");
    tareaFija.setAttribute("onclick",`DesplegarSubTareas(${fila})`);
}