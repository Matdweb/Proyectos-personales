//metodo eliminar por codigo 
const formsEliminarXcodigo = () =>{
    containerFunciones.innerHTML = `<div class="container-eliminar">
                                        <h2>ELIMINAR PRODUCTO POR CODIGO</h2>
                                        <form>
                                            <p>Digite el codigo del producto que desea eliminar: </p><input value="365400" class="codigo-eliminar" type="text">
                                        </form>
                                        <button class="btn-eliminar">ELIMINAR</button>
                                    </div>`; 
}

//metodo eliminar por codigo  metodo cuantosKgsSeHanVendidoDelProducto()  
//metodo imprimProductosQueSonMasCostososQue()
const RegistrarCodigo = ()=>{
    return document.querySelector(".codigo-eliminar").value; 
}


//metodo imprimir todos los productos
const ImprimirCuadricula = () =>{
    containerFunciones.innerHTML = `<div class="container-imprimir-prod">
                                        <h2>PRODUCTOS</h2>  
                                        <div class="cuadricula-imprimir-prod">
                                            <div class="imprimir-codigo" style="background-color:#000; color:#fff;"><p>CODIGO</p></div>
                                            <div class="imprimir-nombre" style="background-color:#000; color:#fff;"><p>NOMBRE</p></div>
                                            <div class="imprimir-ganancia" style="background-color:#000; color:#fff;"><p>% DE GANANCIA</p></div>
                                            <div class="imprimir-precio" style="background-color:#000; color:#fff;"><p>PRECIO</p></div>
                                        </div>
                                        <button>LISTO</button>
                                    </div>`;

    return document.querySelector(".cuadricula-imprimir-prod");
}


//metodo imprimir prodcutos de baja existencia
const cuadriculaBajaExistencia = () =>{
    containerFunciones.innerHTML = `<div class="container-imprimir-prod">
                                        <h2>PRODUCTOS DE BAJA EXISTENCIA</h2>  
                                        <div class="cuadricula-imprimir-prod">
                                            <div class="imprimir-codigo" style="background-color:#000; color:#fff;"><p>CODIGO</p></div>
                                            <div class="imprimir-nombre" style="background-color:#000; color:#fff;"><p>NOMBRE</p></div>
                                            <div class="imprimir-ganancia" style="background-color:#000; color:#fff;"><p>EXISTENCIA</p></div>
                                            <div class="imprimir-precio" style="background-color:#000; color:#fff;"><p>PRECIO</p></div>
                                        </div>
                                        <button>LISTO</button>
                                    </div>`; 

    return document.querySelector(".cuadricula-imprimir-prod");
}

//metodo cuantos kg se han vendido de un producto  
//metodo imprimProductosQueSonMasCostososQue()
const formsPedirProducto = (texto) =>{
    containerFunciones.innerHTML = `<div class="container-eliminar container-pedir-producto">
                                        <h2>PRODUCTO</h2>
                                        <form>
                                            <p>${texto}</p><input value="365400" class="codigo-eliminar" type="text">
                                        </form>
                                        <button class="btn-eliminar btn-enviar">ENVIAR</button>
                                    </div>`; 
                           
}

//metodo imprimProductosQueSonMasCostososQue()
const cuadriculaImprimirProductos = (nombreProducto) =>{
    containerFunciones.innerHTML = `<div class="container-imprimir-prod">
                                        <h2>PRODUCTOS MAS COSTOSOS QUE ${nombreProducto}</h2>  
                                        <div class="cuadricula-imprimir-prod">
                                            <div class="imprimir-codigo" style="background-color:#000; color:#fff;"><p>CODIGO</p></div>
                                            <div class="imprimir-nombre" style="background-color:#000; color:#fff;"><p>NOMBRE</p></div>
                                            <div class="imprimir-ganancia" style="background-color:#000; color:#fff;"><p>EXISTENCIA</p></div>
                                            <div class="imprimir-precio" style="background-color:#000; color:#fff;"><p>PRECIO</p></div>
                                        </div>
                                        <button>LISTO</button>
                                    </div>`; 

    return document.querySelector(".cuadricula-imprimir-prod");
}

//metodo imprimProductosQueSonMasCostososQue()
const AveriguarProductoPorCodigo = (codigoProd) =>{
    for(var producto of productos){
        if(producto.getCodigo()==codigoProd){
            return producto;
        }
    }
}