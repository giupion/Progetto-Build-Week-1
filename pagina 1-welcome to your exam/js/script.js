let botton = document.querySelector("button")
let checkbox = document.querySelector("input")
console.log(checkbox)
function checked () {
if(checkbox.checked){
   botton.disabled=false;
}
}

checkbox.addEventListener("click",()=>{
   checked();
})

