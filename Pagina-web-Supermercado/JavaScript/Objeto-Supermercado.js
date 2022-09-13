const productos = []; 
let texto; //variable que almacena el texto que se desae mostrar al terminar la funcion

class Supermercado{
    constructor(cantidad,total){
        this.cantidad = cantidad; 
        this.total = total;
    }

    //metodos set y get 

    setCantidad(cantidad_){
        this.cantidad = cantidad_; 
    }

    getCantidad(){
        return this.cantidad; 
    }

    getTotal(){
        return this.total; 
    }

    //metodos Supermercado
    IngresarDefault(codigo,nombre,precioBase,porcentajeGanancia,cantidadVendida,existencia,pesoUnitario,existenciaMinima){
        let productoDefault = new Producto(codigo,nombre,precioBase,porcentajeGanancia,cantidadVendida,existencia,pesoUnitario,existenciaMinima);
        this.setCantidad(this.getCantidad()+1);
        productos.push(productoDefault);
    }

    IngresarProducto(){
        if(this.getCantidad()<=this.getTotal() && this.getCantidad()>=0){
            FormsNuevoProducto();  
            let btnRegistrar = document.querySelector(".btn-registrar");

            btnRegistrar.addEventListener("click",()=>{
                let infoProducto = RegistrarDatos(); 
                let nuevoProducto = new Producto(infoProducto[1],infoProducto[0],infoProducto[2],infoProducto[3],infoProducto[4],infoProducto[5],infoProducto[6],infoProducto[7]); 
                texto = `Se registro el nuevo producto de codigo ${infoProducto[1]} con exito`;

                productos.push(nuevoProducto); 
                this.setCantidad((this.getCantidad())+1); 

                TerminarFuncion(texto);
                console.log(productos);
            })
        }else{
            texto = `Lo sentimos pero el limite total de productos creados ha sido alcanzado, no pude registrar mas productos`; 
            TerminarFuncion(texto); 
        }
    }
    

    eliminarProductoPorCodigo(){
        if(this.getCantidad()<=this.getTotal() && this.getCantidad()>0){
            formsEliminarXcodigo(); 
            let btnEliminar = document.querySelector(".btn-eliminar"); 

            btnEliminar.addEventListener("click",()=>{
                let codigoEliminar = RegistrarCodigo(); 
                var i = 0;
                texto = ` Lo sentimos no se encontró el producto con el codigo ${codigoEliminar} `;
                for(var producto of productos){
                    if(producto.getCodigo()==codigoEliminar){
                        productos.splice(i,1);
                        texto = ` Se elimino el producto de codigo ${producto["codigo"]} con exito`;
                        this.setCantidad((this.getCantidad())-1);
                        i++;
                    }else{
                        i++; 
                    }
                } 
                TerminarFuncion(texto);
                console.log(productos);
            });

        }else{
            texto = ` Disculpa la cantidad de productos existentes hace imposible poder borrar un producto en este momento`;
            TerminarFuncion(texto);
            console.log(productos);
        }
    }

    obtenerProducMayorValor(){
        if(this.getCantidad()<=this.getTotal() && this.getCantidad()>0){
            let max = [0,0,0]; 
            for(var producto of productos){
                if(producto.getPrecioBase()>=max[0]){
                    max = [producto.getPrecioBase(),producto.getNombre(),producto.getCodigo()]; 
                }
            }
            console.log(max);
            texto = `EL producto de mayor valor (precio de venta) es ${max[1]} con el codigo ${max[2]}`;
            TerminarFuncion(texto);
        }else{
            texto = `Lo sentimos no hay productos registrados por ahora`;
            TerminarFuncion(texto);
        }
    }

    obtenerProducConMayorExistencia(){
        if(this.getCantidad()<=this.getTotal() && this.getCantidad()>0){
            let mayorExistencia = [0,0,0]; 
        for(var producto of productos){
            if(producto.getExistencia()>=mayorExistencia[0]){
                mayorExistencia = [producto.getExistencia(),producto.getNombre(),producto.getCodigo()]; 
            }
        }
        console.log(mayorExistencia);
        texto = `EL producto de mayor exitencia es ${mayorExistencia[1]} de codigo ${mayorExistencia[2]}`;
        TerminarFuncion(texto);
        }else{
            texto = ` Lo sentimos no hay productos registrados por ahora`;
            TerminarFuncion(texto);
        }
    }

    ordenarProductPorCodigo(){  //ordenamiento de burbuja
        if(this.getCantidad()<=this.getTotal() && this.getCantidad()>0){
            let aux;
            texto = ` Los sentimos ocurrio un erorr`;
            for(var i=0; i<=((productos.length)-1); i++){
                for(var j=0; j<((productos.length)-1); j++){
                    if(productos[j].getCodigo()>productos[j+1].getCodigo()){
                        aux = productos[j]
                        productos[j] = productos[j+1]; 
                        productos[j+1] = aux; 
                    }
                }
            }
            texto = ` Los productos han sido ordenados por su codigo con exito`;
            TerminarFuncion(texto);
            console.log(productos);
        }else{
            texto = ` Lo sentimos no hay productos registrados por ahora`;
            TerminarFuncion(texto);
        }
    }

    imprimirTodosLosProductos(){   //código, nombre, porcentaje de ganancia y precio de venta.
        if(this.getCantidad()<=this.getTotal() && this.getCantidad()>0){
            let cuadricula = ImprimirCuadricula();
            for(var producto of productos){
                cuadricula.innerHTML += `<div class="imprimir-codigo"><p>${producto.getCodigo()}</p></div>
                                        <div class="imprimir-nombre"><p>${producto.getNombre()}</p></div>
                                        <div class="imprimir-ganancia"><p>${producto.getPorcentajeGanancia()}</p></div>
                                        <div class="imprimir-precio"><p>${producto.getPrecioBase()}</p></div>`;
                                        
            }
            cuadricula.nextElementSibling.addEventListener("click",()=>{
                limpiarContainer();
            });
        }else{
            texto = `Lo sentimos no hay productos registrados por ahora`;
            TerminarFuncion(texto);
        }
    }

    cantDeProductosBajosDeExistencia(){  //productos con una existencia menor a su existencia minima
        if(this.getCantidad()<=this.getTotal() && this.getCantidad()>0){
            let bajaExistencia=0; 
            for(var producto of productos){
                if(producto.getExistencia()<producto.getExistenciaMininma()){
                    bajaExistencia++;
                    console.log(producto.getNombre());
                }
            }
            texto = `La cantidad de productos con baja existencia en el registro es de ${bajaExistencia}`;
            TerminarFuncion(texto);
        }else{
            texto = `Lo sentimos no hay productos registrados por ahora`;
            TerminarFuncion(texto);
        }
    }

    imprimirProductosBajosDeExistencia(){
        if(this.getCantidad()<=this.getTotal() && this.getCantidad()>0){
            let cuadricula = cuadriculaBajaExistencia();
            for(var producto of productos){
                if(producto.getExistencia()<producto.getExistenciaMininma()){
                    cuadricula.innerHTML += `<div class="imprimir-codigo"><p>${producto.getCodigo()}</p></div>
                                            <div class="imprimir-nombre"><p>${producto.getNombre()}</p></div>
                                            <div class="imprimir-ganancia"><p>${producto.getExistencia()}</p></div>
                                            <div class="imprimir-precio"><p>${producto.getExistenciaMininma()}</p></div>`;
                }
            }
            cuadricula.nextElementSibling.addEventListener("click",()=>{
                limpiarContainer();
            });
        }else{
            texto = `Lo sentimos no hay productos registrados por ahora`;
            TerminarFuncion(texto);
        }
    }

    cuantosKgsSeHanVendidoEnGeneral(){   //la suma de los kilogrmos que se han vendido con cada producto
        if(this.getCantidad()<=this.getTotal() && this.getCantidad()>0){
            let suma=0;
            for(var producto of productos){
                suma += producto.getPesoUnitario()*producto.getCantidadVendida();
            }
            texto = `Con cada producto vendido se acumula un total de ${suma}kg vendidos en total`;
            TerminarFuncion(texto);
        }else{
            texto = `Lo sentimos no hay productos registrados por ahora`;
            TerminarFuncion(texto);
        }
    }

    cuantosKgsSeHanVendidoDelProducto(){  //la suma de los kilogrmos que se han venido de un producto
        if(this.getCantidad()<=this.getTotal() && this.getCantidad()>0){
            let codigoProd; 
            let kg=0;
            texto = `Digite el codigo del producto que desea saber cuantos KG fueron vendidos:`; 
            formsPedirProducto(texto);
            texto = `Lo sentimos no se ha encontrado ningun producto con ese codigo`;
            
            let btnPedirProducto = document.querySelector(".btn-eliminar"); 
            btnPedirProducto.addEventListener("click",()=>{
                codigoProd = RegistrarCodigo();
                for(var producto of productos){
                    if(producto.getCodigo()==codigoProd){
                        kg = producto.getPesoUnitario()*producto.getCantidadVendida(); 
                        texto = `Se han vendido ${kg}kg del producto de codigo ${codigoProd}`;
                    }
                }
                TerminarFuncion(texto);
            });
        }else{
            texto = `Lo sentimos no hay productos registrados por ahora`;
            TerminarFuncion(texto);
        }
    }

    imprimProductosQueSonMasCostososQue(){
        if(this.getCantidad()<=this.getTotal() && this.getCantidad()>0){
            let cuadricula;
            texto = `Digite el codigo del producto que desea saber cuales otros son mas costosos:`; 
            formsPedirProducto(texto);

            let btnPedirProducto = document.querySelector(".btn-eliminar"); 
            btnPedirProducto.addEventListener("click",()=>{
               try{
                  let prod = AveriguarProductoPorCodigo(RegistrarCodigo());
                }catch(e){
                 texto = `Lo sentimos no se encontró un producto con ese codigo`;
                  TerminarFuncion(texto);
                }
                cuadricula = cuadriculaImprimirProductos(prod.getNombre());
                for(var producto of productos){
                    if(producto.getPrecioBase()>prod.getPrecioBase()){
                        cuadricula.innerHTML += `<div class="imprimir-codigo"><p>${producto.getCodigo()}</p></div>
                                                <div class="imprimir-nombre"><p>${producto.getNombre()}</p></div>
                                                <div class="imprimir-ganancia"><p>${producto.getExistencia()}</p></div>
                                                <div class="imprimir-precio"><p>${producto.getPrecioBase()}</p></div>`;
                    }
                }
                cuadricula.nextElementSibling.addEventListener("click",()=>{
                    limpiarContainer();
                });
            });
        }else{
            texto = `Lo sentimos no hay productos registrados por ahora`;
            TerminarFuncion(texto);
        }
    }

    cuantasUnidadesSeHanVendidoDelProducto(){
        if(this.getCantidad()<=this.getTotal() && this.getCantidad()>0){
            let cuadricula;
            texto = `Digite el codigo del producto que desea saber cuantas unidades han sido vendidas:`; 
            formsPedirProducto(texto);

            let btnPedirProducto = document.querySelector(".btn-eliminar"); 
            btnPedirProducto.addEventListener("click",()=>{
                try {
                    let prod = AveriguarProductoPorCodigo(RegistrarCodigo());
                    texto = `Se han vendido un total de ${prod.getCantidadVendida()} unidades del producto ${prod.getNombre()}`;
                    TerminarFuncion(texto);
                } catch (e) {
                    texto = `Lo sentimos no se ha encontrado ningun producto con ese codigo`;
                    TerminarFuncion(texto);
                    console.log(e);
                }
            });

        }else{
            texto = `Lo sentimos no hay productos registrados por ahora`;
            TerminarFuncion(texto);
        }
    }

    costoDelInventario(){   //costo de todos los productos que hay en el supermecado
        if(this.getCantidad()<=this.getTotal() && this.getCantidad()>0){
            let costoInvt = 0;
            for(var producto of productos){
                costoInvt += (getCostoProducto(producto) * producto.getExistencia());
            }
            texto = `El costo total del inventario actual (lo que invirtio el supermercado) es de ${costoInvt}`;
            TerminarFuncion(texto);
        }else{
            texto = `Lo sentimos no hay productos registrados por ahora`;
            TerminarFuncion(texto);
        }
    }  
 
     costoDeLasVentas(){   //cuanto le ha costado en total al super los productos que se han vendido 
        if(this.getCantidad()<=this.getTotal() && this.getCantidad()>0){
            let costoVent = 0;
            for(var producto of productos){
                costoVent += getCostoProducto(producto) * producto.getCantidadVendida();
            }
            texto = `El costo total de los productos vendidos (lo que invirtio el supermercado en ventas) es de ${costoVent}`;
            TerminarFuncion(texto);
        }else{
            texto = `Lo sentimos no hay productos registrados por ahora`;
            TerminarFuncion(texto);
        }
     } 

     valorDeLasVentas(){  //Cuanto en valor de precio de venta se ha vendido 
        if(this.getCantidad()<=this.getTotal() && this.getCantidad()>0){
            let valorVentas = 0;
            for(var producto of productos){
                valorVentas += (producto.getPrecioBase() * producto.getCantidadVendida());
            }
            texto = `El valor total de los productos vendidos (precio de venta * ventas) es de ${valorVentas}`;
            TerminarFuncion(texto);
        }else{
            texto = `Lo sentimos no hay productos registrados por ahora`;
            TerminarFuncion(texto);
        }
    }   

     ganaciaDelSuperMercadoPorVentas(){  //Cuanto dinero ha recibido el supermercado por cada venta 
        if(this.getCantidad()<=this.getTotal() && this.getCantidad()>0){
            let gananVentas = 0;
            for(var producto of productos){
                gananVentas += (getGananciaProducto(producto) * producto.getCantidadVendida());
            }
            texto = `La ganancia total de los productos vendidos (ganancia de ventas para el supermercado) es de ${gananVentas}`;
            TerminarFuncion(texto);
        }else{
            texto = `Lo sentimos no hay productos registrados por ahora`;
            TerminarFuncion(texto);
        }
    }

     graficoDeVentasDeLos5ProductsMasVendidos(){
        if(this.getCantidad()<=this.getTotal() && this.getCantidad()>0){
            let infoMayor= [0,0,0];
            let mayorVentas;
            let copiaProductos = [...productos];   //se hace una copia del arreglo con los productos, esto para sacar 5 productos mas altos
            let containerGrafico = imprimirGrafico(); 
            console.log(copiaProductos);
            for(var i=1; i<=5; i++){
                infoMayor = MayorVentas(copiaProductos);
                if(i==1){
                    definirContNumeros(infoMayor[0],containerGrafico);
                    mayorVentas = infoMayor[0];
                }
                copiaProductos.splice(copiaProductos.indexOf(AveriguarProductoPorCodigo(infoMayor[2])),1);

                definirBarras(containerGrafico,infoMayor,mayorVentas,i);
                containerGrafico[2].innerHTML += `<div class="prod-nombre-${i}">${infoMayor[1]}</div>`;  //define los productos
            }

            document.querySelector(".container-grafico").nextElementSibling.addEventListener("click",()=>{
                limpiarContainer();
            });
            console.log(productos);
        }else{
            texto = `Lo sentimos no hay productos registrados por ahora`;
            TerminarFuncion(texto);
        }
     }

     graficoDeVentasDeLos5ProductsMenosVendidos(){
        if(this.getCantidad()<=this.getTotal() && this.getCantidad()>0){
            let infoMenor= [0,0,0];
            let copiaProductos = [...productos];   //se hace una copia del arreglo con los productos, esto para sacar 5 productos mas altos
            let ventaMayor = MayorVentas(copiaProductos)[0];
            let containerGrafico = imprimirGrafico(); 
            console.log(copiaProductos);

            for(var i=1; i<=5; i++){
                infoMenor = MenorVentas(copiaProductos,ventaMayor);
                if(i==1){
                    definirContNumeros(ventaMayor,containerGrafico);
                }
                copiaProductos.splice(copiaProductos.indexOf(AveriguarProductoPorCodigo(infoMenor[2])),1);

                definirBarras(containerGrafico,infoMenor,ventaMayor,i);
                containerGrafico[2].innerHTML += `<div class="prod-nombre-${i}">${infoMenor[1]}</div>`;  //define los productos
            } 

            document.querySelector(".container-grafico").nextElementSibling.addEventListener("click",()=>{
                limpiarContainer();
            });
            console.log(productos);
        }else{
            texto = `Lo sentimos no hay productos registrados por ahora`;
            TerminarFuncion(texto);
        }
     }

     promedioDeLosPreciosDeVenta(){
        if(this.getCantidad()<=this.getTotal() && this.getCantidad()>0){
            let sumaPrecios=0; 
            for(var producto of productos){
                sumaPrecios += producto.getPrecioBase();
            }
            let promedio = sumaPrecios/productos.length;
            texto = `El promedio de precio de productos del supermercado es de ${promedio}`;
            TerminarFuncion(texto);
        }else{
            texto = `Lo sentimos no hay productos registrados por ahora`;
            TerminarFuncion(texto);
        }
     }


}

const supermercado  = new Supermercado(0,200); //Se debe definir el atributo cantidad con valor de cero, ya que cada vez que se ingresa uno este atributo incrementa 

const ProductosDefault = () =>{
    supermercado.IngresarDefault('11100','Arroz',800,0.15,60,95,60,400);
    supermercado.IngresarDefault('20124','Galletas',1000,0.25,95,100,50,90);
    supermercado.IngresarDefault('12456','Macarrones',900,0.25,78,45,40,700);
    supermercado.IngresarDefault('845707','Azucar',5000,0.15,70,89,67,800);
    supermercado.IngresarDefault('670363','Frijoles',500,0.25,80,100,30,10);
    supermercado.IngresarDefault('04566','Jugo de Naranja',2000,0.25,100,71,60,40);
    supermercado.IngresarDefault('540500','Harina',700,0.15,80,80,60,70);
    supermercado.IngresarDefault('365400','Bananos',900,0.25,90,20,90,100);
    console.log(productos);
}

ProductosDefault(); //Se llena el supermercado de productos default

if(window.screen.width <= 600){   //en dispositivos moviles o con 600px de resolucion o menos, se muestra una alerta
    alert(`PRECUACION: esta pagina puede presentar fallos al utilizarse en este dispositivo
Utilizar un ordenador para mejor funcionamiento`);
}
