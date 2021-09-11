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

		let msg_element = document.createElement("div");
		msg_element.innerHTML = "<p style='color:brown'>"+message+"</p>"; 
		document.body.appendChild(msg_element);

    	if(message=="Ha iniciado sesión correctamente"){
	    	let form_element      = document.getElementsByTagName("form")[0];
			form_element.parentNode.removeChild(form_element);
		}
    }
}
function login(){
    let user   = prompt("Ingresar usuario");
    let pass   = prompt("Ingresar clave");
	const user1 = new User(user,pass);
	user1.login();
} 
login();