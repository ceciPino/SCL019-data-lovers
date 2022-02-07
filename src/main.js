// import { filterDirectors } from './data.js';
import * as all from "./data.js";
import data from "./data/ghibli/ghibli.js";

//Acceder a data de las peliculas
const dataghibli = data.films;

const sectionAfiche = document.getElementById("root");
// const sectionDirectores = document.getElementById("dirContainer")
// const persContainer = document.getElementById("persContainer");

// PERSONAJES
const charImage = (characters, name) => {
  return `
<div>
<h4 class="nombre-personaje">${name}</h4>
<img src="${characters}">
</div>`;
};

const showCharacters = (dataghibli) => {
  sectionAfiche.innerHTML = "";
  for (let i = 0; i < dataghibli.length; i++) {
    let characters = dataghibli[i].people;
    for (let j = 0; j < characters.length; j++) {
      sectionAfiche.innerHTML += charImage(
        characters[j].img,
        characters[j].name
      );
    }
  }
};

//UFNCION PARA MOSTRAR PELICULAS
const showFilms = (dataghibli) => {
  sectionAfiche.innerHTML = "";
  sectionAfiche.style.display = "grid";
  // document.getElementById('filter-section').style.display='block';
  for (let i = 0; i < dataghibli.length; i++) {
    let image = document.createElement("img");
    let divImagen = document.createElement("div");
    let nombre = document.createElement("p");

    image.setAttribute("src", dataghibli[i].poster);
    image.setAttribute("class", "imgfilm")
    divImagen.setAttribute("class", "divimagen");
    nombre.setAttribute("class", "titulo");

    nombre.innerHTML = dataghibli[i].title;

    divImagen.appendChild(image);
    sectionAfiche.appendChild(divImagen);
    divImagen.appendChild(nombre);
    //    sectionAfiche.appendChild(filterandsort);
  }
};

//FUNCION PARA MOSTRAR DIRECTORES
const showDirectors = (dataghibli) => {
  sectionAfiche.innerHTML = "";
  for (let i = 0; i < dataghibli.length; i++) {
    let directors = document.createElement("p");

    directors.setAttribute("id", dataghibli[i].director);
    directors.setAttribute("class", "directoris");

    directors.innerHTML = dataghibli[i].director;

    sectionAfiche.appendChild(directors);

    /*let directorsFilt = directors.filter((item,index)=> {
        return directors.indexOf(item) === index;
    })*/
  }
};

// SECCIÓN FILTRAR
const filterandsort = document.getElementsByClassName("filterandsort-section");

// EL evento change se  usa con elementos "section", "input" y "textarea", su estructura es la sgte:
const filterSection = document.getElementById("filter-section"); // se declara la variable asociada al fitro y se agrega el evento a esa variable
filterSection.addEventListener("change", (e) => {
  let filterItem = e.currentTarget.value; //se llama a los valores de los elementos asociados al evento
  // console.log(filterItem)//
  let directorsByFilms = all.filterDirectors(filterItem, dataghibli); //se llaman a todos los elementos dentro de la función creada en data.js
  showFilms(directorsByFilms); // se muestran las peliculas asociadas a los directores 
  sectionAfiche.style.display = "flex"; // se muestran las peliculas ordenadas en flex
});

//SECCIÓN ORDENAR

//BOTONES Y SUS EVENTOS
document.getElementById("personajes").addEventListener("click", () => {
  showCharacters(dataghibli);
  filterandsort[0].style.display = "none";
});

document.getElementById("peliculas").addEventListener("click", () => {
  showFilms(dataghibli);
  filterandsort[0].style.display = "flex";
});

document.getElementById("directores").addEventListener("click", () => {
  showDirectors(dataghibli);
  filterandsort[0].style.display = "none";
});

document.getElementById("inicio").addEventListener("click", () => {
  sectionAfiche.innerHTML = "";
  filterandsort[0].style.display = "none";
});

