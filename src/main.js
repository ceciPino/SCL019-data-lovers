import data from './data/ghibli/ghibli.js';

// console.log(data);

//TRAER DATA DE PELÍCULAS
const dataghibli = data.films;
const sectionAfiche = document.getElementById("root")
// const containerPoster = document.getElementById("poster")
const showFilms = (dataghibli) => {

for(let i=0;i<dataghibli.length;i++){

   let image = document.createElement("img");
   let divImagen = document.createElement("div");
   let nombre = document.createElement("p")


   image.setAttribute("src", dataghibli[i].poster);
   nombre.setAttribute("id", "titulo")
   nombre.innerHTML = dataghibli[i].title;

   divImagen.appendChild(image);
   sectionAfiche.appendChild(divImagen);
   divImagen.appendChild(nombre);
//    containerPoster.appendChild(image);



}
};

document.getElementById("peliculas").addEventListener('click', () => {
    showFilms(dataghibli)
});

for(let i=0;i<dataghibli.length;i++){

    let directors = document.createElement("p");

    directors.setAttribute("id", dataghibli[i].director);

    console.log(directors)
    

}

document.getElementById("directors").addEventListener('click', () => { showFilms(dataghibli)
});





