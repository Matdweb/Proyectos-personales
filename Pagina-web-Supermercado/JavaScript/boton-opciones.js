let checkbox = document.getElementById("BTN-opciones"); 
let opciones = document.querySelector(".opciones");

checkbox.addEventListener("click",()=>{
    if(checkbox.checked){
        opciones.style.height = "fit-content"; 
    }else{
        opciones.style.height = "0";
    }
})
