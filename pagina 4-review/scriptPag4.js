

let stellina = document.querySelectorAll("span")
console.log(stellina)
for(let i =0;i<stellina.length;i++){
    stellina[i].addEventListener("mouseover",()=>{
        for(let l=i;l>=0;l--){    
        stellina[l].className="stellina2"}
        })
    stellina[i].addEventListener("mouseout",() => {
        for(let k=i;k>=0;k--){
        stellina[k].className = "stellina"}
    })
    stellina[i].addEventListener("click",()=>{     
        for(let c=i;c>=0;c--){
            stellina[c].style.color= "#00FFFF"
        }
        for(let j=i+1;j<stellina.length;j++){
            stellina[j].style.color=" rgb(0, 0, 0,0.6)"
        }
    })
}

let button = document.querySelector("button")
button.addEventListener("click",(e)=>{
    e.preventDefault()
    window.open("https://epicode.com/it/corso-web-developer/")
})
