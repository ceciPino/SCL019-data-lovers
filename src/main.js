// import { filterDirectors } from './data.js';
import * as all from "./data.js";
import data from "./data/ghibli/ghibli.js";
// import modalBox from "./modal.js";

//Acceder a data de las peliculas
const dataghibli = data.films;
const sectionAfiche = document.getElementById("root");

//HOME
const casita = document.getElementsByClassName("sec-2");
sectionAfiche.innerHTML = "";

let sinCara = document.createElement("img");
sinCara.setAttribute("src", '/Copia de icono ghibli 2.png');
sinCara.setAttribute("class", "foto2");
sectionAfiche.appendChild(sinCara);

let funFact = document.createElement("p")
funFact.setAttribute("class", "funfacts")
funFact.innerHTML = "The term Ghibli is an Italian word for a summer wind coming from the Sahara, affecting several countries in North Africa and Southern European countries. There was also a World War II aircraft from the same country which garnered the same nickname. Its name indicated the studio's ambitions to be a force within the animation industry. Judging by their catalog of respected works, it is safe to say they accomplished their goal.";
sinCara.appendChild(funFact);

let sinCara1 = document.createElement("img");
sinCara1.setAttribute("src", '/Copia de icono ghibli 3.png');
sinCara1.setAttribute("class", "foto2");
sectionAfiche.appendChild(sinCara1);

let sinCara2 = document.createElement("img");
sinCara2.setAttribute("src", '/Copia de icono ghibli 4.png');
sinCara2.setAttribute("class", "foto2");
sectionAfiche.appendChild(sinCara2);

let sinCara3 = document.createElement("img");
sinCara3.setAttribute("src", '/Copia de icono ghibli 5.png');
sinCara3.setAttribute("class", "foto2");
sectionAfiche.appendChild(sinCara3);

let sinCara4 = document.createElement("img");
sinCara4.setAttribute("src", '/Copia de icono ghibli.png');
sinCara4.setAttribute("class", "foto2");
sectionAfiche.appendChild(sinCara4);

let sinCara5 = document.createElement("img");
sinCara5.setAttribute("src", '/icono ghibli.png');
sinCara5.setAttribute("class", "foto2");
sectionAfiche.appendChild(sinCara5);


// FUNCION PARA MOSTRAR PERSONAJES
const charImage = (characters, name) => {
  return `
<div>
<img class="img-personaje" src="${characters}">
<p class="nombre-personaje">${name}</p>
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

//FUNCION PARA MOSTRAR PELICULAS
const showFilms = (dataghibli) => {
  sectionAfiche.innerHTML = "";
  sectionAfiche.style.display = "grid";

  for (let i = 0; i < dataghibli.length; i++) {
    let image = document.createElement("img");
    let divImagen = document.createElement("div");
    let nombre = document.createElement("p");

    image.setAttribute("src", dataghibli[i].poster);
    image.setAttribute("class", "imgfilm");
    divImagen.setAttribute("class", "divimagen");
    nombre.setAttribute("class", "titulo");

    nombre.innerHTML = dataghibli[i].title;
    // divImagen.addEventListener("click", () => {
    //  modalBox()
    // });

    divImagen.appendChild(image);
    sectionAfiche.appendChild(divImagen);
    divImagen.appendChild(nombre);

  }
};

//FUNCION PARA MOSTRAR DIRECTORES

  const sectionDirectores = (dataghibli) => {
    sectionAfiche.innerHTML = "";

    let showDirectors = new Set();
    for (let i = 0; i < dataghibli.length; i++) {
    let pelis = dataghibli[i];
    showDirectors.add(pelis.director);
    }

    let arrayDirectoris = Array.from(showDirectors); // convertimos set en array
    for (let i = 0; i < arrayDirectoris.length; i++){

    let directors = document.createElement("p");
    directors.setAttribute("id", arrayDirectoris[i]);
    directors.setAttribute("class", "directoris");

    directors.innerHTML = arrayDirectoris[i];

    sectionAfiche.appendChild(directors);

  }

  //FOTOS DIRECTORES

  let hayaoMiyazaki = document.getElementById("Hayao Miyazaki");
  let hayaoFoto = document.createElement("img");
  hayaoFoto.setAttribute("src", 'hayaomiyasakici.JPEG');
  hayaoFoto.setAttribute("class", "foto1");
  hayaoMiyazaki.appendChild(hayaoFoto);

  let isaoTakahata = document.getElementById("Isao Takahata");
  let isaoFoto = document.createElement("img");
  isaoFoto.setAttribute("src", 'isao takahata.PNG');
  isaoFoto.setAttribute("class", "foto1");
  isaoTakahata.appendChild(isaoFoto);

  let yoshifumiKondo = document.getElementById("Yoshifumi Kondō")
  let yoshifumiFoto = document.createElement("img");
  yoshifumiFoto.setAttribute("src", 'a yoshifumi kondo.jpeg');
  yoshifumiFoto.setAttribute("class", "foto1");
  yoshifumiKondo.appendChild(yoshifumiFoto);

  let hiroyukiMorita = document.getElementById("Hiroyuki Morita")
  let hiroyukiFoto = document.createElement("img");
  hiroyukiFoto.setAttribute("src", 'hiroyuki morita.JPEG');
  hiroyukiFoto.setAttribute("class", "foto1");
  hiroyukiMorita.appendChild(hiroyukiFoto);

  let goroMiyazaki = document.getElementById("Gorō Miyazaki")
  let goroFoto = document.createElement("img");
  goroFoto.setAttribute("src", 'goro miyasaki.JPEG');
  goroFoto.setAttribute("class", "foto1");
  goroMiyazaki.appendChild(goroFoto);

  let hiromasaYonebayashi = document.getElementById("Hiromasa Yonebayashi")
  let hiromasaFoto = document.createElement("img");
  hiromasaFoto.setAttribute("src", 'hiromasa yonebayashi.PNG');
  hiromasaFoto.setAttribute("class", "foto1");
  hiromasaYonebayashi.appendChild(hiromasaFoto);


  }


// SECCIÓN FILTRAR
//filtrar peliculas por directores
const filterandsort = document.getElementsByClassName("filterandsort-section");
const charactersSection = document.getElementsByClassName("characters-section");
// EL evento change se  usa con elementos "section", "input" y "textarea", su estructura es la sgte:
const filterSection = document.getElementById("filter-section"); // se declara la variable asociada al fitro y se agrega el evento a esa variable
filterSection.addEventListener("change", (e) => {
  let filterItem = e.currentTarget.value; //se llama a los valores de los elementos asociados al evento
  // console.log(filterItem)//
  let directorsByFilms = all.filterDirectors(filterItem, dataghibli); //se llaman a todos los elementos dentro de la función creada en data.js
  showFilms(directorsByFilms); // se muestran las peliculas asociadas a los directores
  sectionAfiche.style.display = "flex"; // se muestran las peliculas ordenadas en flex
});
//filtrar personajes por peliculas
const characterFilter = document.getElementById("persByFilm");
characterFilter.addEventListener("change", (e) => {
  let filterCharacter = e.currentTarget.value;
  let charactersByFilms = all.filterbyFilms(filterCharacter, dataghibli);
  showCharacters(charactersByFilms);
  sectionAfiche.style.display = "flex";
});


//SECCIÓN ORDENAR
let sortedPelis = document.getElementById("selectSort");
sortedPelis.addEventListener('change', function () {
    let valueSort = sortedPelis.value;
        if (valueSort === "Newest") { // Ordena por año descendente
            let infoSorted = all.sortNewest(dataghibli);
            sectionAfiche.style.display="flex"
            showFilms(infoSorted);
        }
        if (valueSort === "Oldest") { // Ordena por año ascendente
            let OldestYear = all.sortOldest(dataghibli);
            sectionAfiche.style.display="flex"
            showFilms(OldestYear);
        }

        if (valueSort === "A_Z") { // Ordena alfabéticamente de A a Z
            let infoSort = all.sortAZ(dataghibli);
            sectionAfiche.style.display="flex"
            showFilms(infoSort);
        }
        if (valueSort === "Z_A") { // Ordena alfabéticamente de Z a A
            let infoSortR = all.sortZA(dataghibli);
            sectionAfiche.style.display="flex"
            showFilms(infoSortR);
        }
});


//BOTONES Y SUS EVENTOS
document.getElementById("personajes").addEventListener("click", () => {
  showCharacters(dataghibli);
  filterandsort[0].style.display = "none";
  charactersSection[0].style.display = "flex";
  sectionAfiche.style.display = "grid";
});

document.getElementById("peliculas").addEventListener("click", () => {
  showFilms(dataghibli);
  filterandsort[0].style.display = "flex";
  charactersSection[0].style.display = 'none';
});

document.getElementById("directores").addEventListener("click", () => {
  sectionDirectores(dataghibli);
  filterandsort[0].style.display = "none";
  charactersSection[0].style.display = 'none';
});

document.getElementById("inicio").addEventListener("click", () => {
  sectionAfiche.innerHTML= "";
  filterandsort[0].style.display = "none";
  charactersSection[0].style.display = 'none';

});



