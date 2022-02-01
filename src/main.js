import data from './data/ghibli/ghibli.js';

// console.log(data);

//TRAER DATA DE PELÍCULAS
const dataghibli = data.films;
console.log(dataghibli);
const sectionAfiche = document.getElementById("root")

const showFilms = (dataghibli) => {
for(let i=0;i<dataghibli.length;i++){
   //document.getElementById("afiche").innerHTML+=dataghibli[i].poster;
   let image = document.createElement("img");
//    image.setAttribute("class", "cartel");
   image.setAttribute("src", dataghibli[i].poster);
   let divImagen = document.createElement("divimg");
//    let flexbox1 = document.createElement("flexbox");
    divImagen.appendChild(image);
    sectionAfiche.appendChild(divImagen);
}
};

document.getElementById("peliculas").addEventListener('click', () => {
    showFilms(dataghibli)
});





