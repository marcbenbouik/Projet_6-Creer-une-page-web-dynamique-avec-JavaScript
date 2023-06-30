import { addWorks } from "./callApi.js";

// fonction d'apercu de la nouvelle photo
const pictureIcone = document.getElementById('picture_icone');
const fileInput = document.getElementById('new_picture');

function apercuPicture() {
  const fileInputFiles = fileInput.files
  const previewDiv = document.querySelector('.add_picture_div');
  const preview = document.createElement('img');
  previewDiv.appendChild(preview);
  preview.src = window.URL.createObjectURL(fileInputFiles[0]);
  preview.className = "preview";
  pictureIcone.style.display = "none";
};

export function clearInputFile() {
  const resetForm = document.getElementById('add_new_work');
  resetForm.reset();
  const preview = document.querySelector('.preview');
  if ((preview == null) == false) {
    preview.remove();
    pictureIcone.style.display = null;
  };
};


// fonction d'ajout de nouveau works
async function testFormAddNewWork(e) {
  e.preventDefault();
  const image = document.getElementById('new_picture');
  const titre = document.getElementById('titre');
  if (image.value == "") {
    alert("Veuillez selectionner une image");
  }
  else if (titre.value == "") {
    alert("Veuillez saisir un titre");
  }
  else {
    var formData2 = new FormData(e.target);
    await addWorks(formData2);
  };
};

function handleAddWorks() {
  const addNewWorksForm = document.getElementById('add_new_work');
  addNewWorksForm.addEventListener('submit', testFormAddNewWork);
};

export function addProjectMain(){
    fileInput.addEventListener('change', apercuPicture);
    handleAddWorks();
}