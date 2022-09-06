let checkbox = document.getElementById("BTN-opciones"); 
let opciones = document.querySelector(".opciones");

checkbox.addEventListener("click",()=>{
    if(checkbox.checked){
        let opciones = document.querySelector(".opciones");
        opciones.style.padding = "5px 0 5px 0";
        for(var i=1;i<20;i++){
            opciones.innerHTML += `<h1 class="opcion">${i}. Lorem ipsum dolor sit.</h1>`; 
        }
    }else{
        opciones.innerHTML = ` `;
        opciones.style.removeProperty("padding");
    }
})
