let containerFunciones = document.querySelector(".container-funciones"); 

// metodo - ingresarProducto
const FormsNuevoProducto = async() =>{
    containerFunciones.innerHTML = `<div class="container-forms-nuevo-producto">
                                        <h3>NUEVO PRODUCTO: Ingresar</h3>
                                        <form>
                                            <p>Nombre del nuevo producto:</p>
                                            <input class="nombre"  type="text">
                                            <p>Codigo:</p>
                                            <input value="111AA" class="codigo"  type="text">
                                            <p>Precio Base:</p>
                                            <input class="precio"  type="number">
                                            <p>Porcentaje de Ganancia:</p>
                                            <input class="ganancia"  type="number">
                                            <p>Cantidad Vendida:</p>
                                            <input class="cant-vendida"  type="number">
                                            <p>Existencia:</p>
                                            <input class="existencia"  type="number">
                                            <p>Peso unitario:</p>
                                            <input class="peso"  type="number"><label>  KG</label>
                                            <p>Existencia Minima:</p>
                                            <input class="existencia-min"  type="number">
                                        </form>
                                        <button class="btn-registrar">REGISTRAR</button>
                                    </div>`; 
}

const RegistrarDatos = ()=>{
    let DatosProducto = [];  
        let nombre = document.querySelector(".nombre").value;
        DatosProducto.push(nombre);
        let codigo = document.querySelector(".codigo").value;
        DatosProducto.push(codigo);
        let precio = document.querySelector(".precio").value;
        DatosProducto.push(precio);
        let ganancia = document.querySelector(".ganancia").value;
        DatosProducto.push(ganancia);
        let CantVendida = document.querySelector(".cant-vendida").value;
        DatosProducto.push(CantVendida);
        let existencia = document.querySelector(".existencia").value;
        DatosProducto.push(existencia);
        let peso = document.querySelector(".peso").value;
        DatosProducto.push(peso);
        let existenciaMin = document.querySelector(".existencia-min").value;
        DatosProducto.push(existenciaMin);
        console.log(DatosProducto); 
        return DatosProducto;
}

const TerminarFuncion = (texto) =>{
    containerFunciones.innerHTML = `<div class="texto-final"><h2>${texto}</h2><p>Haz click al texto para salir</p></div>`; 
    containerFunciones.firstChild.addEventListener("click",()=>{
         limpiarContainer();
    }); 
}

const limpiarContainer=()=>{
    containerFunciones.innerHTML = `<div class="funciones">BIENVENIDO AL SUPER MERCADO DE <br> Mat_dweb</div>`; 
}