export function createFigure(work) {
    const figure = document.createElement("figure");
    const image = document.createElement("img");
    const figcaption = document.createElement("figcaption");
    image.src = work.imageUrl;
    figure.appendChild(image);
    figure.appendChild(figcaption);
  
    return figure;
  };

  function addCaptionTofigure(figure, caption){
    const figcaption = figure.querySelector("figcaption");
    figcaption.innerHTML = caption;
    figcaption.className = "js_figure";
  };

  export function showWorks(works) {
    const gallery = document.querySelector(".gallery");
    gallery.innerHTML = "";
    for (let i = 0; i < works.length; i++) {
      const galleryElement = createFigure(works[i]);
      addCaptionTofigure(galleryElement, works[i].title);
      gallery.appendChild(galleryElement);
    };
  };