import { getAllWorks,getAllCategories} from "./callApi.js";
// import {  handleShowAll, handleShowAppartements, handleShowHotelsRestaurants, handleShowObject } from "./filter.js";
import { handleFilters } from "./filter.js";
import { showWorks } from "./create.js";
import { editModeMain } from "./editMode.js";
import { handleShowEditWorks } from "./editModale.js";
import { displayModalesMain } from "./displayModales.js";
import { addProjectMain } from "./addProjectModale.js"

async function main() {
  // recuperation de l'ensemble des projets
  const works = await getAllWorks();
  // recuperation de l'ensemble des categories
  const categories = await getAllCategories();
  //affichage des projet sur la page d'acceuil
  showWorks(works);
  // creation des filtre + filtrage des projets
  handleFilters(categories, works);
  // changement de l'affichage en fonction de la connexion/deconnexion
  editModeMain();
  // ouverture et fermeture des differentes modales
  displayModalesMain();
  // affichages des projet dans la modale d'édition
  handleShowEditWorks(works);
  // ensemble des fonctions qui traite la modale d'ajout de nouveau projet
 addProjectMain();
  
};
main();
