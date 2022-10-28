const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu"); 

hamburger.addEventListener("click",() => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})


// increase padding size
function top_padding(){
    document.getElementById("details_container").style.paddingTop = "50px"
    document.getElementById("details_container").style.paddingBottom= "40px"
}