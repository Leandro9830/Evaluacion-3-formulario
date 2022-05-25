function validar() {
    var resultado_validacion_email = validar_email();
    var resultado_passwrd = validar_password();
    var resultado_passwrd2 = validar_password2();
    var resultado_validacion_direccion = validar_direccion();
    var resultado_codigo = validar_codigo();
    var resultado_celular = numeros();
    var resultado_check = checkbox();
    var resultado_ciudad = ciudad();
    return (resultado_validacion_email && resultado_validacion_direccion && resultado_passwrd 
        && resultado_passwrd2 && resultado_codigo && resultado_celular && resultado_check && resultado_ciudad
         ); 
    
}

   

function validar_fto_email(email){
    var idx_arroba = email.indexOf("@");
    if(idx_arroba < 1) {
        
        return false;
    }
    else{
        var idx_punto = email.indexOf(".");
        if(idx_punto <= idx_arroba + 2 || idx_punto == email.length - 1){
            return false;
        }
        return true;
    }
}


function validar_email() {
    var email = document.getElementById("Email").value;
    var div = document.getElementById("msj-email");
    if (email != "") {
        if (validar_fto_email(email)){
            div.innerHTML="";
            return true;
        }
        else
        { div.innerHTML = "El formato del email no es valido";
        div.className ="text-danger"
        return false;
 
        }
        
    } else {
        div.innerHTML ="El email no puede estar en blanco"
        div.className="text-danger"
        return false;
    }

}


function buscar_let(passwrd){
        
    let letra = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A" , "B" , "C" , "D" , "E" , "F" , "G" , "H" , "I" , "J" , "K" , "L" , "M" , "N" , "Ñ" , 
    "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; 
    
    let cont = 0;   
    for (i of letra){
        if(passwrd.indexOf(i) > -1 ) {
        cont += 1
        }
        else{ cont += 0}}
    
    if (cont > 0){
        return true;
    }
    else {return false;}
}

function buscar_num(passwrd){
    let num = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    let cont = 0;
    for(i of num){
        if (passwrd.indexOf(i) > -1){
        cont += 1}
        else{cont += 0
            }
        }
    if (cont > 0) {
        return true;
    }
    else {return false;}
}

function validar_password() {
    var passwrd = document.getElementById("Pass").value;
    var div = document.getElementById("msj-pass");
    if (passwrd.length > 2 && passwrd.length < 7 ) {
        if (buscar_let(passwrd)){
            if (buscar_num(passwrd)){
                div.innerHTML=""
    
                return true;}
            else {
                div.innerHTML = "Debe contener al menos una numero"
                div.className = "text-danger"
                return false;
            }
        }else{
            div.innerHTML = "Debe contener al menos una letra"
            div.className = "text-danger"
        }
    }

    else {
        div.innerHTML = "La contraseña debe ser mínimo de 3 caracteres y máximo de 6 caracteres"
        div.className = "text-danger"
        return false;
    }

}

function validar_password2(){
    var passwrd = document.getElementById("Pass").value;
    var passwrd2 = document.getElementById("Pass2").value;
    var div = document.getElementById("msj2");
    if (passwrd == passwrd2){
        div.innerHTML =  ""
        return true;
    } 
    else {
        div.innerHTML ="Las contraseñas no coinciden"
        div.className ="text-danger"
        return false;
    }
}

function validar_direccion() {
    var dire = document.getElementById("direccion").value;
    var div = document.getElementById("msj-dir");
    if(dire.length < 2){
        div.innerHTML = "Debe ingresar una dirección correcta"
        div.className = "text-danger"

        return false;
    }else{
        div.innerHTML=""
        return true;}
}

function validar_check(){
    var check = document.getElementsById("gridCheck");
    var divmsj= document.getElementById("msj-check");
    for(i = 0; i < check.length ; i++){
    if(check[i].checked){
    return true;
    }
    else{
        divmsj.innerHTML = "Al menos debes marcar 2"
        div.className="text-danger"}}
    return false;
     }
     
     function buscar_letra1(codigo){
        
        let letra = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "!", "#", "$", "%", "&", "/", "(", ")", "=", "´", "¨", "+","*", "~", "{", "}", "[", "]", "^",
        "<", ">", "-", "_" , ".", ":" , "," , ";" , "A" , "B" , "C" , "D" , "E" , "F" , "G" , "H" , "I" , "J" , "K" , "L" , "M" , "N" , "Ñ" , 
        "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; 
        let cont = 0   
        for (i of letra){
            if(codigo.indexOf(i) > -1 ) {
            cont += 1
            }
            else{ cont += 0}}
        if (cont>0){
            return false;
        }
        else {return true;}
    }

     function validar_codigo() {
         var cod = document.getElementById("codigo").value;
         var div = document.getElementById("msj-cod");
         if (cod.length != 7){
             div.innerHTML= "El codigo postal no es correcto"
             div.className = "text-danger"
             return false;
         }
         else {if(buscar_letra1(cod)){
            div.innerHTML = ""
            return true;}
        else {
            div.innerHTML = "Debe ingresar solo numeros"
            div.className = "text-danger"
            
            return false;
        }

           
         }
     }


function ciudad(){
    var ciudad = document.getElementById("Ciudad").value;
    var div = document.getElementById("msj-ciudad");
    if(ciudad.length < 1){
        div.innerHTML = "Debe ingresar una ciudad"
        div.className = "text-danger"
        return false;
    }else{
        div.innerHTML = ""
        return true;
    }
}     


function buscar_letra(celular,telefono){
    let letra = ["a", "b", "c", "d", "e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","!","#","$","%","&","/","(",")","=","´","¨","+","*","~","{","}","[","]","^","<",">","-","_",".",":",",",";","A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    let cont = 0
    for (value of letra){
        
        if(celular.indexOf(value) > -1 || telefono.indexOf(value) > -1) {cont +=1
        }
        else{ cont += 0}}
    if (cont>0){
        return false;
    }
    else {return true;}
    
}

     
function numeros(){
    var celular = document.getElementById("celular").value;
    var telefono = document.getElementById("Telefono").value;
    var div = document.getElementById("msj-tel");
    if(celular.length > 8 || telefono.length > 7){
        if(buscar_letra(celular, telefono)){
            div.innerHTML = ""
            return true;}
        else {
            div.innerHTML = "Debe ingresar solo numeros"
            div.className = "text-danger"
            return false;
        }
           
    }
    
    else { div.innerHTML = "Debe ingresar algún número de telefono"
        div.className = "text-danger"
    return false;}


}


function checkbox(){
    var check1= document.getElementById("Check1");
    var check2= document.getElementById("Check2");
    var check3= document.getElementById("Check3");
    var check4= document.getElementById("Check4");
    var check5= document.getElementById("Check5");
    var check6= document.getElementById("Check6");
    var check7= document.getElementById("Check7");
    var check8= document.getElementById("Check8");
    var check9= document.getElementById("Check9");
    var div = document.getElementById("msj-check")
    cont = 0
    if(check1.checked){
        cont=+1
    }else {cont += 0}
    if (check2.checked){
        cont+=1
    }else {cont += 0}
    if (check3.checked){
        cont+=1
    }else {cont += 0}

    if (check4.checked){
        cont+=1
    }else {cont += 0}

    if (check5.checked){
        cont+=1
    }else {cont += 0}
    
    if (check6.checked){
        cont+=1
    }else {cont += 0}

    if (check7.checked){
        cont+=1
    }else {cont += 0}

    if (check8.checked){
        cont+=1
    }else {cont += 0}

    if (check9.checked){
        cont+=1
    }else {cont += 0}
    
    if (cont < 2){
        div.innerHTML = "Debe seleccionar al menos dos pasatiempos"
        div.className = "text-danger"
        return false;
    }else{div.innerHTML=""
        return true;
        
    }
}
