const form = document.getElementById("input");
const mail = document.getElementById("email");
const password = document.getElementById("password");
let token;
async function testConnexion(e) {
    e.preventDefault();
    if (mail.value == "") {
        e.preventDefault();
        alert('pas de mail');
    }
    else if (password.value == "") {
        e.preventDefault();
        alert('pas de mot de passe');
    }
    else {
        let user = {
            "email": mail.value,
            "password": password.value
        };


        const response = await fetch("http://localhost:5678/api/users/login", {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        const data = await response.json();
        console.log(data)
        let reponseAPI;
        if (data.userId === undefined) {
            reponseAPI = data.message;
            if (data.message === "user not found") {
                alert("Adresse e-mail éronnée!");
            }
            else {
                alert("mot de passe éronné !");
            };
        }
        else {
            reponseAPI = data.token;
            localStorage.setItem('token', data.token);
            localStorage.setItem('userId', data.userId)
            document.location.href = ".././index.html";
        };
    };
};
const button = document.querySelector('.connect');
button.addEventListener("click", testConnexion);



