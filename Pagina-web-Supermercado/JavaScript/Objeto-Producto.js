class Producto{

    constructor(codigo,nombre,precioBase,porcentajeGanancia,cantidadVendida,existencia,pesoUnitario,existenciaMinima){
        this.codigo = codigo; 
        this.nombre = nombre; 
        this.precioBase = precioBase; 
        this.porcentajeGanancia = porcentajeGanancia; 
        this.cantidadVendida = cantidadVendida; 
        this.existencia = existencia; 
        this.pesoUnitario = pesoUnitario; 
        this.existenciaMinima = existenciaMinima; 
    }

    setNombre(nombre_){
        this.nombre = nombre_; 
    }

    setPorcentajeGanancia(porcentajeGanancia_){
        this.porcentajeGanancia = porcentajeGanancia_; 
    }

    setCantidadVendida(cantidadVendida_){
        this.cantidadVendida = cantidadVendida_; 
    }

    setExistencia(existencia_){
        this.existencia = existencia_; 
    }

    setPesoUnitario(pesoUnitario_){
        this.pesoUnitario = pesoUnitario_; 
    }

    setExistenciaMininma(existenciaMinima_){
        this.existenciaMinima = existenciaMinima_; 
    }

    getCodigo(){
        return this.codigo;
    }

    getNombre (){
        return this.nombre; 
    }

    getPrecioBase(){
        return this.precioBase; 
    }

    getPorcentajeGanancia(){
        return this.porcentajeGanancia ; 
    }

    getCantidadVendida(){
        return this.cantidadVendida; 
    }

    getExistencia(){
        return this.existencia 
    }

    getPesoUnitario(){
        return this.pesoUnitario; 
    }

    getExistenciaMininma(){
        return this.existenciaMinima 
    }
}