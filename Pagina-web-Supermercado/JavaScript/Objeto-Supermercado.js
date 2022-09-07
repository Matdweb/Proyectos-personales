let productos = []; 
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
        productos.push(ProductosDefault);
    }

    IngresarProducto(){
        if(this.getCantidad()<=this.getTotal()){
            FormsNuevoProducto();  
            let btnRegistrar = document.querySelector(".btn-registrar");

            btnRegistrar.addEventListener("click",()=>{
                let infoProducto = RegistrarDatos(); 
                let nuevoProducto = new Producto(infoProducto[1],infoProducto[0],infoProducto[2],infoProducto[3],infoProducto[4],infoProducto[5],infoProducto[6],infoProducto[7]); 
                texto = `<div class="texto-final"><h2>Se registro el nuevo producto de codigo ${infoProducto[1]} con exito</h2>`;

                productos.push(nuevoProducto); 
                this.setCantidad((this.getCantidad())+1); 

                TerminarFuncion(texto);
                console.log(productos);
            })
        }else{
            texto = `<div class="texto-final"><h2>Lo sentimos pero el limite total de productos creados ha sido alcanzado, no pude registrar mas productos</h2>`; 
            TerminarFuncion(texto); 
        }
    }
    

    eliminarProductoPorCodigo(){
        if(this.getCantidad()<=this.getTotal()){
            formsEliminarXcodigo(); 
            let btnEliminar = document.querySelector(".btn-eliminar"); 

            btnEliminar.addEventListener("click",()=>{
                let codigoEliminar = RegistrarCodigoEliminar(); 
                var i = 0;
                texto = `<div class="texto-final"><h2>Lo sentimos no se encontró el producto con el codigo ${codigoEliminar}</h2>`;
                for(var producto of productos){
                    if(producto.getCodigo()==codigoEliminar){
                        productos.splice(i,1);
                        texto = `<div class="texto-final"><h2>Se elimino el producto de codigo ${producto["codigo"]} con exito</h2>`;
                        this.setCantidad((this.getCantidad)-1);
                        i++;
                    }else{
                        i++; 
                    }
                } 
                TerminarFuncion(texto);
                console.log(productos);
            });

        }else{
            texto = `<div class="texto-final"><h2>Disculpa la cantidad de productos existentes hace imposible poder borrar un producto en este momento</h2>`;
            TerminarFuncion(texto);
            console.log(productos);
        }
    }

    obtenerProducMayorValor(){
        let max = [0,0,0]; 
        for(var producto of productos){
            if(producto.getPrecioBase()>=max[0]){
                console.log(producto.getPrecioBase());
                max = [producto.getPrecioBase(),producto.getNombre(),producto.getCodigo()]; 
            }
        }
        console.log(max);
        texto = `<div class="texto-final"><h2>EL producto de mayor valor (precio de venta) es ${max[1]} con el codigo ${max[2]}</h2>`;
        TerminarFuncion(texto);
    }

}

const supermercado  = new Supermercado(0,200); 

const ProductosDefault = () =>{
    IngresarDefault('111AA','Arroz',800,0.15,90,200,60,400);
    IngresarDefault('2q124','Galletas',1000,0.25,95,100,50,900);
    IngresarDefault('12456','Macarrones',900,0.25,90,200,40,700);
    IngresarDefault('8457u7','Azucar',5000,0.15,90,200,70,800);
    IngresarDefault('67f363','Frijoles',500,0.25,90,100,30,100);
    IngresarDefault('v4566','Jugo de Naranja',2000,0.25,90,70,60,400);
    IngresarDefault('54f5yv','Harina',700,0.15,90,80,60,200);
    IngresarDefault('3654vb','Bananos',900,0.25,90,20,90,100);
}

ProductosDefault();