import { describe, it } from 'eslint/lib/rule-tester/rule-tester';
import {filterDirectors, filterbyFilms, sortNewest, sortOldest, sortAZ, sortZA} from '../src/data.js';

const datatest = [ //Data que vamos a usar para probar los tests
{
  "title": "Castle in the Sky",
  "director": "Hayao Miyazaki",
  "release_date": "1986",
  "people": [
    {
      "id": "fe93adf2-2f3a-4ec4-9f68-5422f1b87c01",
      "name": "Pazu",
      "img": "https://static.wikia.nocookie.net/studio-ghibli/images/8/8b/Pazu.jpg",
      "gender": "Male",
      "age": "13",
      "eye_color": "Black",
      "hair_color": "Brown",
      "specie": "Human"
    },
  ]
},

{
  "title": "My Neighbor Totoro",
  "director": "Hayao Miyazaki",
  "release_date": "1988",
  "people": [
    {
      "id": "d5df3c04-f355-4038-833c-83bd3502b6b9",
      "name": "Mei Kusakabe",
      "img": "https://static.wikia.nocookie.net/studio-ghibli/images/b/b5/God_Jul_Mei_%C3%B6nskar_fr%C3%A5n_Tomten.jpg",
      "gender": "Female",
      "age": "4",
      "eye_color": "Brown",
      "hair_color": "Light Brown",
      "specie": "Human"
    },
  ]
},

{
  "title": "Spirited Away",
  "director": "Hayao Miyazaki",
  "release_date": "2001",
  "people": [
    {
      "id": "134a568b-ac18-4696-a53e-4f0757d1c037",
      "name": "Chihiro Ogino/Sen",
      "img": "https://static.wikia.nocookie.net/studio-ghibli/images/8/8e/Chihiro_Ogino.jpg",
      "gender": "Female",
      "age": "10",
      "eye_color": "Black",
      "hair_color": "Brown",
      "specie": "Human"
    },
  ]
},

{
  "title": "From Up on Poppy Hill",
  "director": "Gorō Miyazaki",
  "release_date": "2011",
  "people": [
    {
      "id": "6a486237-c503-4221-b834-1862f200e939",
      "name": "Umi Matsuzaki",
      "img": "https://static.wikia.nocookie.net/studio-ghibli/images/9/93/Umi_Matsuzaki.jpg",
      "gender": "Female",
      "age": "16",
      "eye_color": "Hazel",
      "hair_color": "Brown",
      "specie": "Human"
    },
  ]
},

]

//Test filtrado peliculas por director

describe("filterDirectors devuelve las peliculas segun el director que se elija", () => {
it("Deberia ser una funcion", () => {
  expect(typeof filterDirectors).toBe("function");
});

it("Deberia retornar para el director Hayao Miyazaki la pelicula [Castle in the Sky]", () => {
  let dataDirectores = filterDirectors("directedByHayao", datatest);
  expect(dataDirectores[0].title).toEqual('Castle in the Sky');
});

it("Deberia retornar el director seleccionado Hayao Miyazaki", () => {
  let dataDirectores = filterDirectors("directedByHayao", datatest);
  expect(dataDirectores[0].director).toEqual('Hayao Miyazaki');
});

it("Deberia retornar el año para la pelicula [My Neighbor Totoro]", () => {
  let dataDirectores = filterDirectors("directedByHayao", datatest);
  expect(dataDirectores[1].release_date).toEqual('1988');
});
})

//Test filtrado personajes por peliculas

describe("filterbyFilms devuelve los personajes de la pelicula que se elija", () => {
  it("Deberia ser una funcion", () => {
    expect(typeof filterbyFilms).toBe("function");
  });

  it("Deberia retornar para Castle in the Sky el personaje [Pazu]", () => {
    let dataPersonajes = filterbyFilms('castle-in-the-sky', datatest);
    expect(dataPersonajes[0].people[0].name).toEqual('Pazu');
  });

  it("Deberia retornar para My Neighbor Totoro el personaje [Mei Kusakabe]", () => {
    let dataPersonajes = filterbyFilms('my-neighbor-totoro', datatest);
    console.log(datatest[1].people)
    expect(dataPersonajes[1].people[0].name).toEqual('Mei Kusakabe');
  });
})

//Test filtrado por orden de año

describe('sortNewest retorna las peliculas ordenadas desde la mas reciente a la mas antigua', () => {
  it('Debería retornar una función', () => {
    expect(typeof sortNewest).toBe('function');
  });

  it('Debería retornar peliculas en orden [From Up on Poppy Hill],[Spirited Away], [My Neighbor Totoro], [Castle in the Sky]', () => {

    let dataYear = sortNewest(datatest);

    expect(dataYear[0].title).toEqual('From Up on Poppy Hill');
    expect(dataYear[1].title).toEqual('Spirited Away');
    expect(dataYear[2].title).toEqual('My Neighbor Totoro');
    expect(dataYear[3].title).toEqual('Castle in the Sky');
  });
})

describe('sortOldest retorna las peliculas desde la mas antigua a la mas reciente', () => {
  it('Debería retornar una función', () => {
    expect(typeof sortOldest).toBe('function');
  });

  it('Debería retornar peliculas en orden [Castle in the Sky],[My Neighbor Totoro],[Spirited Away],[From Up on Poppy Hill] ', () => {

    let dataYear = sortOldest(datatest);

    expect(dataYear[0].title).toEqual('Castle in the Sky');
    expect(dataYear[1].title).toEqual('My Neighbor Totoro');
    expect(dataYear[2].title).toEqual('Spirited Away');
    expect(dataYear[3].title).toEqual('From Up on Poppy Hill');
  });
})

//Test filtrado orden alfabetico

describe('sortAZ ordena todas las peliculas en orden de la A a la Z', () => {
  it('Debería retornar una función', () => {
    expect(typeof sortAZ).toBe('function');
  });

  it('Debería retornar las peliculas en orden ascendente [Castle in the Sky],[From Up on Poppy Hill],[My Neighbor Totoro],[Spirited Away]', () => {
    let dataAscendente = sortAZ(datatest);
    expect(dataAscendente[0].title).toEqual('Castle in the Sky');
    expect(dataAscendente[1].title).toEqual('From Up on Poppy Hill');
    expect(dataAscendente[2].title).toEqual('My Neighbor Totoro');
    expect(dataAscendente[3].title).toEqual('Spirited Away');
  });
})

describe('sortZA ordena todas las peliculas en orden de la Z a la A', () => {
  it('Debería retornar una función', () => {
    expect(typeof sortZA).toBe('function');
  });

  it('Debería retornar todas las peliculas en forma descendente [Spirited Away],[My Neighbor Totoro],[From Up on Poppy Hill],[Castle in the Sky]', () => {

    let dataDescendente = sortZA(datatest);

    expect(dataDescendente[3].title).toEqual('Castle in the Sky');
    expect(dataDescendente[2].title).toEqual('From Up on Poppy Hill');
    expect(dataDescendente[1].title).toEqual('My Neighbor Totoro');
    expect(dataDescendente[0].title).toEqual('Spirited Away');
  });
})


