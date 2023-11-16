

let stellina = document.querySelectorAll("span")
console.log(stellina)

for(let i =0;i<stellina.length;i++){
    stellina[i].addEventListener("click",()=>{
        for(let c=i;c>=0;c--){
            stellina[c].style.color= "#00FFFF"
        }

    })
}
