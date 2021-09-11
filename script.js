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
    	alert(message)

    }
}
function login(e){	
    e.preventDefault();
    let user   = document.getElementById("InputUsername").value;
    let pass   = document.getElementById("InputPassword").value;
	const user1 = new User(user,pass);
	user1.login();
} 
let miFormulario      = document.getElementById("formulario");
miFormulario.addEventListener("submit", login);