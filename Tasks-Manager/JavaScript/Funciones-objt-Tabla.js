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