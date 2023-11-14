

let divstella=document.querySelectorAll("#stellina")


li.addEventListener('click',IlluminaStella);


function IlluminaStella(event){
    
    event.preventDefault();
   
    li.style.color = "red"
    li.style.textDecoration="line-through";
    
    }