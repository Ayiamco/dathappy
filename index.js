document.getElementById("nav-hide").addEventListener("click",()=>{
    document.getElementById("nav-hide").style.display="none";
    document.getElementById("nav-show").style.display="block";
    document.getElementsByTagName("nav")[0].style.display="none";

})

document.getElementById("nav-show").addEventListener("click",()=>{
    document.getElementById("nav-hide").style.display="block";
    document.getElementById("nav-show").style.display="none";
    document.getElementsByTagName("nav")[0].style.display="block";

})