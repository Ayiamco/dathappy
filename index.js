//function to check if element is in view port
var isInViewport = function (elem) {
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};


//hide nav links 
document.getElementById("nav-hide").addEventListener("click",()=>{
    document.getElementById("nav-hide").style.display="none";
    document.getElementById("nav-show").style.display="block";
    document.getElementsByTagName("nav")[0].style.display="none";

})

//show nav links
document.getElementById("nav-show").addEventListener("click",()=>{
    document.getElementById("nav-hide").style.display="block";
    document.getElementById("nav-show").style.display="none";
    document.getElementsByTagName("nav")[0].style.display="block";

})


//Event listener to display scroll back to navigation links 
document.addEventListener("scroll",function(){
    var element=document.getElementById("header-nav")
    if(isInViewport(element)){
        document.getElementById("btn-top").style.display="none"
    }
    else{
        document.getElementById("btn-top").style.display="block"
    }
})
window.onload = function() {
    document.getElementById("btn-top").style.display="none"
   }

