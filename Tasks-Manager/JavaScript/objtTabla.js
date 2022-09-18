let ContTareas = document.querySelector(".container-tareas"); 
let ArregloTablas = []; 

class Tabla {
    constructor(filas){
        this.filas = filas
    }

    getFilas(){
        return this.filas;
    }

    setFilas(filas){
        this.filas = filas; 
    }

    NuevaTabla(){
        ArregloTablas.push(new Tabla(1));
        ContTareas.innerHTML = `<div class="tabla">
                                    <div class="fila">
                                        <label>Tarea</label>
                                        <label>Encargado</label>
                                        <label>Estado</label>
                                        <label>Descripcion</label>
                                    </div>
                                </div>`;
        console.log(ArregloTablas);
    }
}

ArregloTablas.push(new Tabla(4));