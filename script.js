function login(){
    var message="Ha habido un error";
    let user   = prompt("Ingresar usuario");
    let pass   = prompt("Ingresar clave");
    if(user=="admin" && pass=="123"){
        message="Ha iniciado sesión correctamente";
    }else{
        message="No se encontró registro de un usuario "+user+" con la clave ingresada";
    }
    alert(message);
} 
login();