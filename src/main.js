import data from './data/ghibli/ghibli.js';

console.log(data);

const dataghibli = data.films;

console.log(dataghibli);

for(let i=0;i<dataghibli.length;i++){
   //document.getElementById("afiche").innerHTML+=dataghibli[i].poster;
   let image = document.createElement("img");
   let flexbox1 = document.createElement("flexbox");
    image.setAttribute("src", dataghibli[i].poster);

    afiche.appendChild(image);
    image.appendChild(flexbox);

    image.setAttribute("class", "cartel");
   
}

