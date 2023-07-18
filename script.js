

boton = document.getElementById("boton");
boton.addEventListener("click",mostrar);
realizado = document.getElementById("realizado")
norealizado = document.getElementById("norealizado")

info = document.getElementById("info");

var opno = document.getElementById("opno");
var opsi = document.getElementById("opsi");

// OPCCIONES NO REALIZADO 

opno.addEventListener("change", function() {
    mensaje = opno.value
    document.getElementById("nota").innerHTML = "<b>NOTA:</b> Solo se puede colocar 1 acción de cierre en tarea no realizada"
    switch(mensaje){
        case "1": //REJA
            document.getElementById("info").innerHTML = "Corresponde cuando la tarea no se puede realizar porqué hay una reja que lo impide";
            break
        case "2": //INTERNO
            document.getElementById("info").innerHTML = "Corresponde cuando el medidor es interno y no se pudo ingresar";
            break
        case "3": //CLIENTE SE NIEGA
            document.getElementById("info").innerHTML = "Corresponde cuando por algún motivo el cliente impide que se ralice la tarea";
            break
        case "4": //A REVIASAR CONTROL
            document.getElementById("info").innerHTML = "Corresponde cuando el operario se encuentra con una acción <br> no contemplada en la app";
            break
        case "5": //NO EXISTE DOMICILIO
            document.getElementById("info").innerHTML = "Corresponde cuando no se ubica el domicilio";
            break
        case "6": //NO EXISTE MEDIDOR
            document.getElementById("info").innerHTML = "Corresponde cuando se ubica el domicilio pero no existe el medidor (nicho vacio)";
            break
        case "7": //BARRIO CARENCIADO
            document.getElementById("info").innerHTML = "Corresponde cuando el operario considera que la zona es peligrosa";
            break
        case "8": //MEDIDOR NUEVO COLOCADO
            document.getElementById("info").innerHTML = "Corresponde cuando la tarea ya fue realizada y se encuentra un medidor nuevo";
            break
    }
    
});
 
// OPCIONES DE REALIZADO

opsi.addEventListener("change", function() {
    document.getElementById("nota").innerHTML = "<b>NOTA:</b> Las acciones de cierre están en letra mayúscula.<br>Las acciones adicionales comienzan con: a -"
    mensaje = opsi.value
    switch(mensaje){
        case "1": //VERIFICADO FUNCIONA CORRECTO
            document.getElementById("info").innerHTML = "Corresponde cuando se verificó con el litrador el funcionamiento <br>correcto del medidor y el mismo no posee ilicito y tampoco defecto técnico";
            break
        case "2": //POSIBLE ILICITO ENTERRADO
            document.getElementById("info").innerHTML = "Corresponde cuando hay indicios de un ilicito enterrado";
            break
        case "3": //NICHO TAPIADO SE PUEDE CORTAR
            document.getElementById("info").innerHTML = "Corresponde cuando el nicho está tapiado y se verifico que no existe <br> otro medidor en el domicilio";
            break
        case "4": //NICHO TAPIADO NO SE PUEDE CORTAR
            document.getElementById("info").innerHTML = "Corresponde cuando el nicho está tapiado pero el servicio es compartido";
            break
        case "5": //SE ENCONTRO CONEXION DIRECTA - DERIVAR
            document.getElementById("info").innerHTML = "Se encontró una conexión directa";
            break
        case "6": //a - revisar por control
            document.getElementById("info").innerHTML = "Corresponde cuando el operario se encuentra con una acción <br> no contemplada en la app";
            break
        case "7": //a - se dejo 1022 y gas cerrado
            document.getElementById("info").innerHTML = "Corresponde por fuga interna, fuga en regulador o riesgo inmediato";
            break
        case "8": //a - se dejo 1022 y gas abierto nicho nag226
            document.getElementById("info").innerHTML = "Corresponde cuando el nicho no está en condicones, falta la puerta, <br>una modificación hecha por el cliente no permite que la llave accione, etc.";
            break
        case "9": //a - adcional uso indebido 
            document.getElementById("info").innerHTML = "Corresponde cuando se detecta que un medidor abastece a más de una vivienda ";
            break
        case "10": //a - adicional fuga para el cau
            document.getElementById("info").innerHTML = "Corresponde cuando se encuentra una fuga que no es de rápida resolución";
            break
        case "11": //a - adicional cambio de llave
            document.getElementById("info").innerHTML = "Corresponde cuando se realizó un cambio de llave (solo equipos dobles) ";
            break
        case "12": //VERIFICADO CON VISOR ADULTERADO - SIN CAMBIO
            document.getElementById("info").innerHTML = "Corresponde cuando se encontró una adulterción en el visor <br>, la misma debe quedar registrada en las fotos";
            break
        case "13": //a - adicional bypass parcial
            document.getElementById("info").innerHTML = "Corresponde cuando se encuentra una derivación previa al medidor";
            break
        case "14": //SE ENCONTRO TOMAS INVERTIDAS - NORMALIZADAS
            document.getElementById("info").innerHTML = "Corresponde cuando se encontraron tomas invertidas y se pudo normalizar. <br>Es una acción de cierre.";
            break
        case "15": //SE ENCONTRO TOMAS INVERTIDAS + CAMBIO ADULTERADO
            document.getElementById("info").innerHTML = "Corresponde cuando se encontraron tomas invertidas,se pudo normalizar y el <br>medidor estaba adulterado (solo equipos que realicen cambios de medidor adulterado)  .";
            break
        case "16": //SE ENCONTRO TOMAS INVERTIDAS + CAMBIO TECNICO
            document.getElementById("info").innerHTML = "Corresponde cuando se encontraron tomas invertidas,se pudo normalizar y el <br>medidor tenía un problema técnico";
            break
        case "17": //SE RETIRO DIRECTA Y SE PUSO CEMENTO
            document.getElementById("info").innerHTML = "Tarea de equipo de ilicitos";
            break
        case "18": //SE RETIRO DIRECTA Y SE PUSO TAPON GIRATORIO O 3 PUNTOS
            document.getElementById("info").innerHTML = "Tarea de equipo de ilicitos";
            break
        case "19": //VERIFICADO CON CAMARA PERFORADA - SIN CAMBIO
            document.getElementById("info").innerHTML = "Corresponde cuando se encontró la cámara perforada <br>, la adulteración debe quedar registrada en las fotos";
            break
        case "20": //SE CAMBIO MEDIDOR TRABADO
            document.getElementById("info").innerHTML = "Corresponde cuando el medidor estaba trabado (problema técnico) y se realizó <br> el cambio";
            break
        case "21": //VERIFICADO TRABADO - SIN CAMBIO POR REJA
            document.getElementById("info").innerHTML = "Corresponde cuando el medidor estaba trabado (problema técnico) y NO se realizó <br> el cambio porqué no se pudo retirar las rejas"
            break
        case "22": //SE CAMBIO MEDIDOR VISOR CON DEFECTO TECNICO
            document.getElementById("info").innerHTML = "Corresponde cuando se encuentra visor empañado, digitos desalineados,etc. ";
            break
        case "23": //VERIFICADO TRABADO - SIN CAMBIO
            document.getElementById("info").innerHTML = "Corresponde cuando se verifico trabado por defecto técnico, pero por algún <br> motivo no se puede realizar el cambio (no se puede cortar el suministro porqué al día siguiente no se realizan <br> urgencias, falta de stock, etc) ";
            break
        case "24": //CAMARA PERFORADA - SE LACRO MEDIDOR
            document.getElementById("info").innerHTML = "Tarea posterior a la verificación (solo equipos que realicen cambios de medidor adulterado)";
            break
        case "25": //VISOR ADULTERADO - SE LACRO MEDIDOR
            document.getElementById("info").innerHTML = "Tarea posterior a la verificación (solo equipos que realicen cambios de medidor adulterado)";
            break
        case "26": //a - adicional cambio de med de 25m3 a 40m3<
            document.getElementById("info").innerHTML = "Solo equipos dobles";
            break
        case "27": //a - adicional cambio de med mayor a 40m3
            document.getElementById("info").innerHTML = "Solo equipos dobles";
            break
        case "28": //a - se dejo 1022 y gas abierto - artefacto nag226
            document.getElementById("info").innerHTML = "Corresponde cuando se encuentra cualquier defecto en el que tenga que <br> intervenir un matriculado y no exista un riesgo inmediato (cañería sin declarar, regulación mal ejecutada, etc) ";
            break
        case "29": //VISOR CON PROBLEMA TECNICO - SIN CAMBIO
            document.getElementById("info").innerHTML = "Corresponde cuando se verifico defecto técnico en visor, pero por algún <br> motivo no se puede realizar el cambio (no se puede cortar el suministro porqué al día siguiente no se realizan <br> urgencias, falta de stock, etc) ";
            break
        case "30": //SE ENCONTRO GAS CERRADO
            document.getElementById("info").innerHTML = "Corresponde cuando se encuentra el gas cerrado y se verifica el <br> funcionamiento correcto del medidor";
            break

    }
    
});



// function mostrar(){
//    if (boton.checked == true){
//     realizado.style.visibility = "visible";
//     norealizado.style.visibility = "hidden";
//     norealizado.style.display = "block";
//     document.getElementById("info").innerHTML =  "";
//     document.getElementById("nota").innerHTML = "";
//    }
//    if(boton.checked == false){
//     norealizado.style.visibility = "visible"

//     realizado.style.visibility = "hidden";
//     document.getElementById("info").innerHTML = "";
//     document.getElementById("nota").innerHTML = "";
//     }
// }


 
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