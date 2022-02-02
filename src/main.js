import data from './data/ghibli/ghibli.js';

// console.log(data);

//TRAER DATA DE PELÍCULAS Y DIRECTORES
const dataghibli = data.films;
const sectionAfiche = document.getElementById("root")
const sectionDirectores = document.getElementById("root")
const showFilms = (dataghibli) => {

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

for(let i=0;i<dataghibli.length;i++){

    let directors = document.createElement("p");

    directors.setAttribute("id", dataghibli[i].director);
    directors.setAttribute("class", "directoris");

    directors.innerHTML = dataghibli[i].director;

    sectionDirectores.appendChild(directors);

}
};


document.getElementById("peliculas").addEventListener('click', () => {
    showFilms(dataghibli)
});

document.getElementById("directores").addEventListener('click', () => { 
    showDirectors(dataghibli)
});









