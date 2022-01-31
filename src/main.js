import data from './data/ghibli/ghibli.js';

console.log(data);

const dataghibli = data.films;

console.log(dataghibli);

const sectionAfiche = document.getElementById("root")

for(let i=0;i<dataghibli.length;i++){
   //document.getElementById("afiche").innerHTML+=dataghibli[i].poster;
   let image = document.createElement("img");
//    image.setAttribute("class", "cartel");
   image.setAttribute("src", dataghibli[i].poster);
   let divImagen = document.createElement("div");
//    let flexbox1 = document.createElement("flexbox");
    

    divImagen.appendChild(image);
    sectionAfiche.appendChild(divImagen);

    
   
}

