class User{
    constructor(username,password) {
        this.username = username;
        this.password   = password;
    }
    login(){
    	let message="Ha habido un error";
    	if(this.username=="admin" && this.password=="123"){
        	message="Ha iniciado sesión correctamente";
	    }else{
	        message="No se encontró registro de un usuario "+this.username+" con la clave ingresada";
	    }
    	alert(message);
    }
}

function login(){
    let user   = prompt("Ingresar usuario");
    let pass   = prompt("Ingresar clave");
	const user1 = new User(user,pass);
	user1.login();
} 
login();