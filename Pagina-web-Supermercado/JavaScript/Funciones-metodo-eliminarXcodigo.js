const formsEliminarXcodigo = () =>{
    containerFunciones.innerHTML = `<div class="container-eliminar">
                                        <h2>ELIMINAR PRODUCTO POR CODIGO</h2>
                                        <form>
                                            <p>Digite el codigo del producto que desea eliminar: </p><input class="codigo-eliminar" type="text">
                                        </form>
                                        <button class="btn-eliminar">ELIMINAR</button>
                                    </div>`; 
}

const RegistrarCodigoEliminar = ()=>{
    return document.querySelector(".codigo-eliminar").value; 
}