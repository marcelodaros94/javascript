//JSON
const Users = [ { username: "admin", password: "666" },  { username: "admin", password: "123" }]

$.getJSON("users.json", function (respuesta, estado) {
    if(estado === "success"){
      Users = respuesta;/*
      for (const dato of misDatos) {
        $("body").prepend(`<div>
                                <h3>${dato.name}</h3>
                                <p> ${dato.email}</p>
                            </div>`)
      }  */
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
		}else{
    		message="Hay un error en su usuario o clave";
    	}
		//Aquí usaremos el user llamandolo del storage, 
		//pero tambien en paginas futuras podriamos capturarlo 
		//ya que esta almacenado en el navegador
		$('body').append("<div><p style='color:brown'>"+message+"</p></div>");
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