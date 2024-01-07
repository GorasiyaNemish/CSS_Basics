let btn = document.getElementById("nav-btn");
let nav_ul = document.getElementById("nav-ul");
btn.addEventListener("click",()=>{
    if(nav_ul.style.display == "none"){
        nav_ul.style.display = "block";
    }else{
        nav_ul.style.display = "none";
    }
})