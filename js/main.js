// let navLink = document.querySelectorAll(".nav-link")
// navLink.forEach(element => {
    
//     element.addEventListener('mouseenter', () =>{
//         element.classList.add("actived")
//     })
//     element.addEventListener("mouseleave",() =>{
//         element.classList.remove("actived")  
//     })
    
// });
let main = document.getElementsByClassName("v-container")[0]
let aside = document.querySelectorAll("aside")[0]
let btn = document.querySelectorAll("header .left-section i")[0]
btn.onclick = ()=>{
    if(aside.className == "shown"){
        aside.classList.remove("shown")
    }else{
        aside.classList.add("shown")
    }
}
main.onclick = ()=>{
    aside.classList.remove("shown")

}