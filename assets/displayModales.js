import { clearInputFile } from "./addProjectModale.js";

const modal2 = document.getElementById('modal2');
const modal1 = document.getElementById('modal1');
const modal = document.getElementById('modal');

function showEditModal(e) {
    e.preventDefault();
    modal.style.display = null;
    modal.removeAttribute('aria-hidden');
    modal.setAttribute('aria-modal', 'true')
};
function handleShowEditModal() {
    const editButton = document.getElementById('edit_button');
    editButton.addEventListener("click", showEditModal);
};


// fermeture de la modal globale

function closeAllModal(e) {
    e.preventDefault();
    modal.style.display = "none";
    modal.removeAttribute('aria-modal');
    modal.setAttribute('aria-hidden', 'true');
    modal2.style.display = "none";
    modal1.style.display = null;
    //   for (let i = 0; i < works.length; i++) {
    //       const removed = document.querySelector('.js_figure_edit');
    //       removed.remove();
    //     };
};

// appel de la fonction a l'ecoute de levenement click 
function handleCloseAllModal() {
    const closeModalButton = document.querySelectorAll('.close_modal_button');
    closeModalButton.forEach(i => {
        i.addEventListener("click", closeAllModal);
        i.addEventListener("click", clearInputFile);
        clearInputFile();
    });
};
// ouverture de la modal d'ajout de works

function showAddProjectModal(e) {
    e.preventDefault();
    modal1.style.display = "none";
    modal2.style.display = null;
};

// appel de la fonction a l'ecoute de levenement click 
function handleShowAddProjectModal() {
    const modalAddButton = document.querySelector('.modal_add_button');
    modalAddButton.addEventListener("click", showAddProjectModal);
};

function returnToEditModal(e) {
    const arrowLeft = document.getElementById('return_modal_button');
    if (e.target === modal || e.target == arrowLeft) {
        modal2.style.display = "none";
        modal1.style.display = null;
        clearInputFile();
    };
};


export function displayModalesMain(){
    handleShowEditModal();
    handleCloseAllModal();
    handleShowAddProjectModal();
    window.addEventListener("click", returnToEditModal);
}