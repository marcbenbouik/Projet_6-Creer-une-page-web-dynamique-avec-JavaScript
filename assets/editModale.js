import { createFigure } from "./create.js";
import { deleteWorks } from "./callApi.js";

let deleteWorkButton = [];

function CreateEditElements(works) {
    const figureDiv = document.querySelector(".modal_picture");
    figureDiv.innerHTML = "";
    for (let i = 0; i < works.length; i++) {
        const trashIcone = document.createElement("i");
        const trashButton = document.createElement("button");

        const editElement = createFigure(works[i]);
        const figcaption = editElement.querySelector("figcaption");
        editElement.className = "js_figure_edit";
        figcaption.innerHTML = "éditer";
        trashIcone.className = "fa-sharp fa-solid fa-trash-can fa-2xs"
        trashButton.className = "trash_button"
        trashButton.setAttribute('id', works[i].id);

        figureDiv.appendChild(editElement);
        editElement.appendChild(trashButton);
        trashButton.appendChild(trashIcone);
        deleteWorkButton.push(trashButton);
    };
    handleForEachTrashButton();
};


// appel de la fonction a l'ecoute de levenement click 
export function handleShowEditWorks(works) {
    const picture_edit = document.getElementById('edit_button');
    picture_edit.addEventListener("click", CreateEditElements(works));
};
// let clickedImage;

async function handleForEachTrashButton() {
    deleteWorkButton.forEach(button => {
        button.addEventListener("click", function (e) {
            e.preventDefault();
            // let clickedImage = this;
            const idDeletedWork = this.id;
            // handleDeleteWorks(button);
            deleteWorks(idDeletedWork);
        });
    });
};



