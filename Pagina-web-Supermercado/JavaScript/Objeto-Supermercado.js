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
    IngresaProducto(){
        let nuevoProducto = FormsNuevoProducto(); 
        let Producto = new Producto(nuevoProducto[1],nuevoProducto[2],nuevoProducto[3],nuevoProducto[4],nuevoProducto[5],nuevoProducto[6],nuevoProducto[7],nuevoProducto[8]);
        productos.push(Producto); 
        console.log(Producto);
    }

}