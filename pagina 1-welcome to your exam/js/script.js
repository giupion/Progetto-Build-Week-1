let botton = document.querySelector("button")
let checkbox = document.querySelector("input")
console.log(checkbox)
function checked () {
if(checkbox.checked){
   botton.disabled=false;
}else{
   botton.disabled=true;
}

}

checkbox.addEventListener("click",()=>{
   checked();
})

