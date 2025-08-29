let usuario = document.getElementById("usuario");
let contrasena = document.getElementById("contrasena");
let btnLogin = document.getElementById("btnLogin");


const user = "Admin";
const pass = "123456";

btnLogin.addEventListener("click", () => {
    if (usuario.value == user && contrasena.value == pass ) {
        
        window.location.href = "index.html";
        let txtLogin = document.getElementById("txtLogin");
        let txtRegistrarse = document.getElementById("txtRegistrarse");
        txtLogin.innerText = "";
        txtRegistrarse.innerText = "";

    } else {
        //alert("Usuario o contraseña incorrecta")
        const modal = new bootstrap.Modal(document.getElementById("loginError"));
        modal.show();
    }
});