let checkbox = document.getElementById("BTN-opciones"); 
let opciones = document.querySelector(".opciones");
console.log(checkbox);

checkbox.addEventListener("click",()=>{
    if(checkbox.checked){
        let opciones = document.querySelector(".opciones");
        for(var i=0;i<17;i++){
            opciones.style.padding = "5px 0 5px 0";
            opciones.innerHTML += `<h1 class="opcion">${i}. Lorem ipsum dolor sit.</h1>`; 
        }
    }else{
        opciones.innerHTML = ` `;
        opciones.style.removeProperty("padding");
    }
})
