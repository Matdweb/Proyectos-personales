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
        ContTareas.innerHTML += `<div class="container-tabla tabla-${ArregloTablas.length-1}">
                                    <h2 onclick="ModificarNomTabla(${ArregloTablas.length-1})">NOMBRE TABLA</h2>
                                    <div class="tabla">
                                        <div class="fila">
                                            <label>Tarea</label>
                                            <label>Encargado</label>
                                            <label>Estado</label>
                                            <label>Descripcion</label>
                                        </div>
                                        <div class="fila">
                                            <label onclick="ModificarTexto(${ArregloTablas.length-1},${ArregloTablas[ArregloTablas.length-1].getFilas()},0)">Tarea</label>
                                            <label>Encargado</label>
                                            <label style = "background-color: red;">Estado</label>
                                            <label onclick="ModificarTexto(${ArregloTablas.length-1},${ArregloTablas[ArregloTablas.length-1].getFilas()},3)">Descripcion</label>
                                        </div>
                                    </div>
                                    <div onclick="AgregarFila(${ArregloTablas.length-1})" class="cont-agregar-fila"><h4 style="margin-left: 7px;">+ Nueva Fila</h4></div>
                                    <h3 onclick="AgregarTabla(${ArregloTablas.length-1})">+ Nueva Tabla</h3>
                                </div>`;
        console.log(ArregloTablas);
    }

    modificarTexto(tabla,fila,colm){
        let casillaText = document.querySelector(`.tabla-${tabla}`).children[1].children[fila].children[colm]; 
        console.log(casillaText.innerHTML); 
        casillaText.removeAttribute("onclick");
        casillaText.innerHTML = `<input type="text" value="${casillaText.innerHTML}"><div>E</div>`;
        casillaText.lastChild.addEventListener("click",()=>{
            casillaText.innerHTML = validacionTexto(casillaText);
            setTimeout(()=>{
                casillaText.setAttribute("onclick",`ModificarTexto(${tabla},${fila},${colm})`);
            },100)
        });
    }

    agregarFila(numTabla){
        ArregloTablas[numTabla].setFilas(ArregloTablas[numTabla].getFilas()+1);

        document.querySelector(`.tabla-${numTabla}`).children[1].innerHTML += `<div class="fila">
                                    <label onclick="ModificarTexto(${numTabla},${ArregloTablas[numTabla].getFilas()},0)">Tarea</label>
                                    <label>Encargado</label>
                                    <label style = "background-color: red;">Estado</label>
                                    <label onclick="ModificarTexto(${numTabla},${ArregloTablas[numTabla].getFilas()},3)">Descripcion</label>
                                </div>`;
    }

    nuevoNomTabla(numTabla){
        let casillaTitulo = document.querySelector(`.tabla-${numTabla}`).children[0];
        casillaTitulo.innerHTML = `<input type="text" value="${casillaTitulo.innerHTML}" ><div>E</div>`;
        casillaTitulo.removeAttribute("onclick");
        casillaTitulo.lastChild.addEventListener("click",()=>{
            casillaTitulo.innerHTML = validacionTexto(casillaTitulo);
            setTimeout(()=>{
                casillaTitulo.setAttribute("onclick",`ModificarNomTabla(${numTabla})`);
            },100);
        })
    }
}

ArregloTablas.push(new Tabla(4));

