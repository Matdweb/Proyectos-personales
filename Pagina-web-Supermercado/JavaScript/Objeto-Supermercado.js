let productos = []; 

class Supermercado{
    constructor(cantidad,total){
        this.cantidad = cantidad; 
        this.total = total;
    }

    //metodos set y get 

    setcantidad(cantidad_){
        cantidad = cantidad_; 
    }

    getCantidad(){
        return this.cantidad; 
    }

    getTotal(){
        return this.cantidad; 
    }

    //metodos Supermercado
    IngresarProducto(){
        FormsNuevoProducto()
        let btnRegistrar = document.querySelector(".btn-registrar");
        btnRegistrar.addEventListener("click",()=>{
            let infoProducto = RegistrarDatos(); 
            let nuevoProducto = new Producto(infoProducto[1],infoProducto[0],infoProducto[2],infoProducto[3],infoProducto[4],infoProducto[5],infoProducto[6],infoProducto[7]); 
            productos.push(nuevoProducto); 
            console.log(productos);
        })
    }

    eliminarProductoPorCodigo(){
        
    }

}

const supermercado  = new Supermercado(0,200); 
supermercado.IngresarProducto(); 