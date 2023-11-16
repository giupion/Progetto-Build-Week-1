

let stellina = document.querySelectorAll("span")
console.log(stellina)

for(let i =0;i<stellina.length;i++){
    stellina[i].addEventListener("click",()=>{
        for(let c=i;c>=0;c--){
            stellina[c].style.color= "#00FFFF"
        }

    })
}














/*stellina.forEach(ele=>{
    ele.addEventListener("click" ,() => {
      //console.log(eve.target )
        ele.style.color= "#00FFFF"
        //console.log(e.target)
        colora
    })
    
})*/

/*function colora (){
    let i=0
    let boolean= true
    while(boolean && i<stellina.length ){
        if(stellina[i].style.color!== "#00FFFF"){
            stellina[i].style.color="#00FFFF"
        }
        else{
            boolean=false
        }
        i++
        console.log(i)
    }
}*/
