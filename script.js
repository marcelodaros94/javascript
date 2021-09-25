//JSON
var Users=[];
$.getJSON("users.json", function (respuesta, estado) {
    if(estado === "success"){
      Users = respuesta;
    }
});

//clases
class User{
    constructor(username,password) {
        this.username = username;
        this.password   = password;
    }
    login(){
    	let message="Intente más tarde";
    	let access=0;
		for (const user of Users) {			
	    	if(this.username==user.username && this.password==user.password){
	        	access=1;
		    }
		}
		if(access>0){
			message="Ha iniciado sesión correctamente";
			sessionStorage.clear();
			sessionStorage.setItem("user", this.username);
			message="<strong>Bienvenido "+
			sessionStorage.getItem("user")+"</strong>";
			$("#exitomsg p").html(message);
			$("#exitomsg").show();
		}else{
			$("#errormsg").show();
		}
    }
}
//funciones
function login(){	
    let user   = $("#InputUsername").val();
    let pass   = $("#InputPassword").val();
	const user1 = new User(user,pass);
	user1.login();
} 
//eventos en el DOM
$("#formulario").submit(function (e) {
	e.preventDefault();//evitamos que se refresque la pag
	login();
});