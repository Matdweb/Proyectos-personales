//estilizacion del grafico
const estilosGrafico = () =>{

    for(var i=1;i<=5;i++){
        document.querySelector(`.numeros-${i}`).style.gridRow = i;
        document.querySelector(`barra-${i}`).style.gridColumn = i;
    }
}

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
//metodo cuantasUnidadesSeHanVendidoDelProducto()
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
//metodo cuantasUnidadesSeHanVendidoDelProducto()
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
//metodo graficoDeVentasDeLos5ProductsMasVendidos()
const AveriguarProductoPorCodigo = (codigoProd) =>{
    for(var producto of productos){
        if(producto.getCodigo()==codigoProd){
            return producto;
        }
    }
}


//metodo costoDelInventario()
//metodo costoDeLasVentas()
const getCostoProducto = (producto) =>{
    return producto.getPrecioBase() - getGananciaProducto(producto);
}

//metodo ganaciaDelSuperMercadoPorVentas()
const getGananciaProducto = (producto) =>{
    return producto.getPrecioBase() * producto.getPorcentajeGanancia()
}

//metodo graficoDeVentasDeLos5ProductsMasVendidos()
const imprimirGrafico = () =>{
    containerFunciones.innerHTML = `<div class="container-grafico-prod">
                                        <div class="container-grafico">
                                            <div class="container-barras">
                                                
                                            </div>
                                            <div class="linea-numeros"></div>
                                            <div class="container-numeros">
                                                
                                            </div>
                                            <div class="linea-prod-nombres"></div>
                                            <div class="container-prod-nombres">
                                                
                                            </div>
                                        </div>
                                        <button>LISTO</button>
                                    </div>`;
    let contBarras = document.querySelector(".container-barras");
    let contNumeros = document.querySelector(".container-numeros"); 
    let contNombres = document.querySelector(".container-prod-nombres"); 
    return [contBarras,contNumeros,contNombres]; 
}

//metodo graficoDeVentasDeLos5ProductsMasVendidos()
const definirContNumeros = (mayor,containerGrafico) =>{
    let claseNum = 1;
    for(var i=100; i>0; i-=20){
        containerGrafico[1].innerHTML += `<div class="numeros numeros-${claseNum}">${mayor*(i/100)}</div>`;
        claseNum++;
    }
}

const definirBarras = (containerGrafico,info,mayorVentas,i)=>{
    containerGrafico[0].innerHTML += `<div style="height: ${(info[0]*100/mayorVentas)-9}%" class="barras barra-${i}"></div>
                                        <div class="mostar-num-barra-${i}">${info[0]}</div>`;
}

const MayorVentas = (copiaProductos) =>{
    let mayorVentas = 0; 
    let infoMayor = [0,0,0]
    for(var producto of copiaProductos){
        if(producto.getCantidadVendida()>mayorVentas){
            mayorVentas = producto.getCantidadVendida();
            infoMayor = [producto.getCantidadVendida(),producto.getNombre(),producto.getCodigo()];
        }
    }
    return infoMayor;
}

const MenorVentas = (copiaProductos,ventaMayor) =>{
    let MenorVentas = [0,0,0];
    for(producto of copiaProductos){
        if(producto.getCantidadVendida()<ventaMayor){
            ventaMayor = producto.getCantidadVendida();
            MenorVentas = [producto.getCantidadVendida(),producto.getNombre(),producto.getCodigo()];
        }
    }
    return MenorVentas;
}