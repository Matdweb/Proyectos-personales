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