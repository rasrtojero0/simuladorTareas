

boton = document.getElementById("boton45");
boton.addEventListener("click",mostrar);
realizado = document.getElementById("realizado45")
norealizado = document.getElementById("norealizado45")

info = document.getElementById("info");

var opno = document.getElementById("opno45");
var opsi = document.getElementById("opsi45");



// function mostrar(){
//     if (boton.checked == true){
//      realizado.style.visibility = "visible";
//      norealizado.style.visibility = "hidden";
//      norealizado.style.display = "block";
//      document.getElementById("info").innerHTML =  "";
//      document.getElementById("nota").innerHTML = "";
//     }
//     if(boton.checked == false){
//      norealizado.style.visibility = "visible"
 
//      realizado.style.visibility = "hidden";
//      document.getElementById("info").innerHTML = "";
//      document.getElementById("nota").innerHTML = "";
//      }
//  }
 
 function mostrar(){
    if (boton.checked == true){
     
     norealizado.style.display = "none";
     realizado.style.display = "block"
     document.getElementById("info").innerHTML =  "";
     document.getElementById("nota").innerHTML = "";
    }
    if(boton.checked == false){
    
     norealizado.style.display = "block";
     realizado.style.display = "none";
     document.getElementById("info").innerHTML = "";
     document.getElementById("nota").innerHTML = "";
     }
 }
 