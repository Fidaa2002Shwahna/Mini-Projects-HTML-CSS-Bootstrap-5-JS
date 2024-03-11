let bar=document.querySelector("nav i");
let barTwo=document.querySelector(".headertit");
let links=document.querySelector(".links");


bar.onclick=()=>{
    links.style.left="0";
}

barTwo.onclick=()=>{
    links.style.left="-200px";
}