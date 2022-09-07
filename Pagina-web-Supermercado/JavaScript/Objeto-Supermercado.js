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
                for(var producto in productos){
                    console.log(producto["codigo"]);
                    if(producto["codigo"]==codigoEliminar){
                        productos.slice(i,1);
                        texto = `<div class="texto-final"><h2>Se elimino el producto de codigo ${producto["codigo"]} con exito</h2>`;
                    }else{
                        i++; 
                        console.log(i);
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

}

// const supermercado  = new Supermercado(0,200); 
// supermercado.IngresarProducto(); 