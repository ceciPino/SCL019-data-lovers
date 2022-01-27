import data from './data/ghibli/ghibli.js';

console.log(data);

const dataghibli = data.films;

console.log(dataghibli);

for(let i=0;i<dataghibli.length;i++){
    document.getElementById("root").innerHTML+=dataghibli[i].poster 
    console.log(dataghibli[i].title)
    console.log(dataghibli[i].director)
    console.log(dataghibli[i].poster)
}

