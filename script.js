const Users = [ { username: "admin", password: "666" },  { username: "admin", password: "123" }]
class User{
    constructor(username,password) {
        this.username = username;
        this.password   = password;
    }
    login(){
    	let message="No se encontró registro de un usuario "+this.username+" con la clave ingresada";
		for (const user of Users) {			
	    	if(this.username==user.username && this.password==user.password){
	        	message="Ha iniciado sesión correctamente";
		    }
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