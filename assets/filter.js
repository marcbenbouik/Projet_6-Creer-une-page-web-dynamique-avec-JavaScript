// import { setPortfolio, works } from "./script.js";
import { showWorks } from "./create.js";

 export function deleteAll() {
    const removed = document.querySelectorAll(".js_figure");
    removed.forEach(figure => {
      figure.remove();
    })
  };

  let activeFilter = document.getElementById("0");
  
  export function colorFilter() {
    for (let i = 0; i < 4; i++) {
      let unactiveFilter = document.getElementById(i);
      if (unactiveFilter == activeFilter) {
        activeFilter.classList.add("selected_filter");
      }
      else {
        unactiveFilter.classList.remove("selected_filter");
      };
    };
  };

  function generateFilter(category){
    const filterElement = document.createElement("div");
    filterElement.id = category.id;
    filterElement.innerHTML = category.name;

    if(category.selected === true){
      filterElement.classList.add("selected_filter");
    };

    return filterElement;
  };

  function handleFilterEvents (works){
    const filterElements = document.querySelectorAll(".filtres div");
    filterElements.forEach(filterElement => {
      filterElement.addEventListener("click", () => {
        filterElements.forEach(element => element.classList.remove("selected_filter"));
        filterElement.classList.add("selected_filter");
        if(filterElement.id === "0"){
          showWorks(works);
        }
        else{
          const filteredWorks = works.filter(work => work.categoryId.toString() === filterElement.id);
          showWorks(filteredWorks);
        };
      });
    });

  };

  export function handleFilters(categories, works){
    const filtersDiv = document.querySelector(".filtres");
    const allFilter = generateFilter({id: 0, name: "Tous", selected: true});
    filtersDiv.appendChild(allFilter);

    for(let i=0; i < categories.length; i++){
      const category = categories[i];
      const filter = generateFilter(category);
      filtersDiv.appendChild(filter);
    };

  handleFilterEvents(works);
  };

