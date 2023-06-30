const token = localStorage.getItem('token');
const aside = document.querySelector('.modify_tool_bar');
const filter = document.querySelector('.filtres');
const modifyButton = document.querySelectorAll('.modify_button');
const loginButton = document.getElementById('login_button');
const logoutButton = document.getElementById('disconnect');

function editMode() {
    if ((token === null) == false) {
        aside.style.display = 'flex';
        filter.style.display = "none";
        logoutButton.style.display = null;
        loginButton.style.display = "none";
        modifyButton.forEach(a => {
            a.style.display = null;
        });
    }
    else {
        aside.style.display = "none";
        filter.style.display = null;
        logoutButton.style.display = "none";
        loginButton.style.display = null;
        modifyButton.forEach(a => {
            a.style.display = "none";
        });
    };
};

// deconnection et suppression du token de la memoire

function logOut() {
    localStorage.removeItem('token');
    editMode();
};

export function editModeMain(){
    editMode();
    logoutButton.addEventListener("click", logOut);
};