import data from './data/ghibli/ghibli.js';

// console.log(data);

//Acceder a data de las peliculas
const dataghibli = data.films;

//
const sectionAfiche = document.getElementById("root")
// const sectionDirectores = document.getElementById("dirContainer")
// const persContainer = document.getElementById("persContainer");

const charImage = (characters, name) => {
return` 
<div>
<h4 class="nombre-personaje">${name}</h4>
<img src="${characters}">
</div>`;

};

const showCharacters = (dataghibli) => {
sectionAfiche.innerHTML= ""
for (let i= 0; i <dataghibli.length; i++) {
 let characters = dataghibli[i].people;
  for (let j=0; j <characters.length; j++) {
      sectionAfiche.innerHTML += charImage(characters[j].img, characters[j].name);
  }

    }
};

const showFilms = (dataghibli) => {
sectionAfiche.innerHTML= ""
for(let i=0;i<dataghibli.length;i++){

   let image = document.createElement("img");
   let divImagen = document.createElement("div");
   let nombre = document.createElement("p")


   image.setAttribute("src", dataghibli[i].poster);
   nombre.setAttribute("id", "titulo");
   
   nombre.innerHTML = dataghibli[i].title;

   divImagen.appendChild(image);
   sectionAfiche.appendChild(divImagen);
   divImagen.appendChild(nombre);
}
};

const showDirectors = (dataghibli) => {
sectionAfiche.innerHTML= ""
for(let i=0;i<dataghibli.length;i++){

    let directors = document.createElement("p");

    directors.setAttribute("id", dataghibli[i].director);
    directors.setAttribute("class", "directoris");

    directors.innerHTML = dataghibli[i].director;

    sectionAfiche.appendChild(directors);

}
};

document.getElementById("personajes").addEventListener('click', () => { 
    showCharacters(dataghibli)
});

document.getElementById("peliculas").addEventListener('click', () => {
    showFilms(dataghibli)
});

document.getElementById("directores").addEventListener('click', () => { 
    showDirectors(dataghibli)
});









