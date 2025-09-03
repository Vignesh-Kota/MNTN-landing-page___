document.getElementById("loginForm").addEventListener("submit",((event)=>{

event.preventDefault()

let username = document.getElementById("username").value

let password = document.getElementById("password").value

const web_usr_name = "samiul"

const web_pw = "123456"

if (username === web_usr_name && password === web_pw ){

window.location.href="Successful.html"

}

else

document.getElementById("error-message").style.display="block"
document.getElementById("error-message").style.color="red"


}

))