let checkbox = document.getElementById("BTN-opciones"); 
let opciones = document.querySelector(".opciones");

checkbox.addEventListener("click",()=>{
    if(checkbox.checked){
        opciones.style.marginTop = "5px";
        opciones.style.padding = "5px 0 5px 0";
    }else{
        opciones.style.display = "none";
    }
})
