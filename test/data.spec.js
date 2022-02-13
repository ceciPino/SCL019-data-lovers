import { describe, it } from 'eslint/lib/rule-tester/rule-tester';
import {filterbyFilms, filterDirectors} from '../src/data.js';

const datatest = [ //data que vamos a usar para probar primer test
{
  "title": "Castle in the Sky",
  "director": "Hayao Miyazaki",
  "release_date": "1986",
},

{
  "title": "My Neighbor Totoro",
  "director": "Hayao Miyazaki",
  "release_date": "1988",
}

]

const datafilms = [ //data para probar segundo test
{
  "title": "Castle in the Sky",
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
    {
      "id": "598f7048-74ff-41e0-92ef-87dc1ad980a9",
      "name": "Lusheeta Toel Ul Laputa",
      "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c3/Sheeta.jpg",
      "gender": "Female",
      "age": "13",
      "eye_color": "Black",
      "hair_color": "Black",
      "specie": "Human"
    },
    {
      "id": "3bc0b41e-3569-4d20-ae73-2da329bf0786",
      "name": "Dola",
      "img": "https://static.wikia.nocookie.net/studio-ghibli/images/b/b3/Dola.png",
      "gender": "Female",
      "age": "60",
      "eye_color": "Black",
      "hair_color": "Peach",
      "specie": "Human"
    },
    {
      "id": "abe886e7-30c8-4c19-aaa5-d666e60d14de",
      "name": "Romska Palo Ul Laputa",
      "img": "https://static.wikia.nocookie.net/studio-ghibli/images/d/d5/Muska.jpg",
      "gender": "Male",
      "age": "33",
      "eye_color": "Black",
      "hair_color": "Brown",
      "specie": "Human"
    },
    {
      "id": "e08880d0-6938-44f3-b179-81947e7873fc",
      "name": "Uncle Pom",
      "img": "https://static.wikia.nocookie.net/studio-ghibli/images/d/de/Uncle_Pom.png",
      "gender": "Male",
      "age": "Unspecified/Elderly",
      "eye_color": "Black",
      "hair_color": "White",
      "specie": "Human"
    },
    {
      "id": "5c83c12a-62d5-4e92-8672-33ac76ae1fa0",
      "name": "General Muoro",
      "img": "https://static.wikia.nocookie.net/studio-ghibli/images/1/12/Muoro.jpg",
      "gender": "Male",
      "age": "Unspecified/Adult",
      "eye_color": "Black",
      "hair_color": "None",
      "specie": "Human"
    },
    {
      "id": "3f4c408b-0bcc-45a0-bc8b-20ffc67a2ede",
      "name": "Duffi",
      "img": "https://static.wikia.nocookie.net/studio-ghibli/images/0/0a/Duffi.png",
      "gender": "Male",
      "age": "Unspecified/Adult",
      "eye_color": "Dark brown",
      "hair_color": "Dark brown",
      "specie": "Human"
    },
    {
      "id": "fcb4a2ac-5e41-4d54-9bba-33068db083ca",
      "name": "Louis",
      "img": "https://static.wikia.nocookie.net/studio-ghibli/images/2/28/Charlies.jpg",
      "gender": "Male",
      "age": "30",
      "eye_color": "Dark brown",
      "hair_color": "Dark brown",
      "specie": "Human"
    },
    {
      "id": "2cb76c15-772a-4cb3-9919-3652f56611d0",
      "name": "Charles",
      "img": "https://static.wikia.nocookie.net/studio-ghibli/images/f/f0/Charlie.jpg",
      "gender": "Male",
      "age": "Unspecified/Adult",
      "eye_color": "Dark brown",
      "hair_color": "Light brown",
      "specie": "Human"
    },
    {
      "id": "f6f2c477-98aa-4796-b9aa-8209fdeed6b9",
      "name": "Henri",
      "img": "https://static.wikia.nocookie.net/studio-ghibli/images/1/15/Henri.jpg",
      "gender": "Male",
      "age": "Unspecified/Adult",
      "eye_color": "Dark brown",
      "hair_color": "Reddish brown",
      "specie": "Human"
    },
    {
      "id": "05d8d01b-0c2f-450e-9c55-aa0daa34838e",
      "name": "Motro",
      "img": "https://static.wikia.nocookie.net/studio-ghibli/images/1/17/Eggman_laputa.jpg",
      "gender": "Male",
      "age": "Unspecified/Adult",
      "eye_color": "Dark brown",
      "hair_color": "None",
      "specie": "Human"
    },
    {
      "id": "b22a684f-1819-40c8-94a6-d40c3b5e18eb",
      "name": "Okami",
      "img": "https://static.wikia.nocookie.net/studio-ghibli/images/6/65/Okami.jpg",
      "gender": "Female",
      "age": "50",
      "eye_color": "Dark brown",
      "hair_color": "Orange",
      "specie": "Human"
    },
    {
      "id": "40c005ce-3725-4f15-8409-3e1b1b14b583",
      "name": "Colonel Muska",
      "img": "https://static.wikia.nocookie.net/studio-ghibli/images/d/d3/Colonelmuska2bodyguards.JPG",
      "gender": "Male",
      "age": "33",
      "eye_color": "Grey",
      "hair_color": "Brown",
      "specie": "Human"
    }
  ]
},

{
  "title": "My neighbor Totoro",
  "people": [
    {
      "id": "986faac6-67e3-4fb8-a9ee-bad077c2e7fe",
      "name": "Satsuki Kusakabe",
      "img": "https://static.wikia.nocookie.net/studio-ghibli/images/f/f2/Satsuki_Kusakabe.jpg",
      "gender": "Female",
      "age": "11",
      "eye_color": "Dark Brown/Black",
      "hair_color": "Dark Brown",
      "specie": "Human"
    },
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
    {
      "id": "3031caa8-eb1a-41c6-ab93-dd091b541e11",
      "name": "Tatsuo Kusakabe",
      "img": "https://static.wikia.nocookie.net/studio-ghibli/images/d/d6/Tatsuo_Kusakabe.jpg",
      "gender": "Male",
      "age": "37",
      "eye_color": "Brown",
      "hair_color": "Dark Brown",
      "specie": "Human"
    },
    {
      "id": "87b68b97-3774-495b-bf80-495a5f3e672d",
      "name": "Yasuko Kusakabe",
      "img": "https://static.wikia.nocookie.net/studio-ghibli/images/7/7b/Yasuko_Kusakabe.png",
      "gender": "Female",
      "age": "36",
      "eye_color": "Brown",
      "hair_color": "Dark Brown",
      "specie": "Human"
    },
    {
      "id": "08ffbce4-7f94-476a-95bc-76d3c3969c19",
      "name": "Granny",
      "img": "https://static.wikia.nocookie.net/studio-ghibli/images/d/d9/Granny.png",
      "gender": "Female",
      "age": "Elder",
      "eye_color": "Black",
      "hair_color": "Grey",
      "specie": "Human"
    },
    {
      "id": "0f8ef701-b4c7-4f15-bd15-368c7fe38d0a",
      "name": "Kanta Ogaki",
      "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c3/Kanta.jpg",
      "gender": "Male",
      "age": "11",
      "eye_color": "Brown",
      "hair_color": "Brown",
      "specie": "Human"
    },
    {
      "id": "d39deecb-2bd0-4770-8b45-485f26e1381f",
      "name": "Totoro",
      "img": "https://static.wikia.nocookie.net/studio-ghibli/images/d/df/Totoro_in_the_rain.png",
      "gender": "Male",
      "age": "1300",
      "eye_color": "Grey",
      "hair_color": "Grey",
      "specie": "Totoro"
    },
    {
      "id": "591524bc-04fe-4e60-8d61-2425e42ffb2a",
      "name": "Chu Totoro",
      "img": "https://www.ghibli.jp/gallery/thumb-totoro019.png",
      "gender": "NA",
      "age": "",
      "eye_color": "Black",
      "hair_color": "Blue",
      "specie": "Totoro"
    },
    {
      "id": "c491755a-407d-4d6e-b58a-240ec78b5061",
      "name": "Chibi Totoro",
      "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c5/Little_Totoro_spirit_moving.gif",
      "gender": "NA",
      "age": "",
      "eye_color": "Black",
      "hair_color": "White",
      "specie": "Totoro"
    },
    {
      "id": "f467e18e-3694-409f-bdb3-be891ade1106",
      "name": "Catbus",
      "img": "https://static.wikia.nocookie.net/studio-ghibli/images/3/30/Catbus.jpg",
      "gender": "Male",
      "age": "NA",
      "eye_color": "Yellow",
      "hair_color": "Brown",
      "specie": "Cat"
    }
  ]

}

]

//test filtrado director

describe("filterDirectors", () => {
it("deberia ser una funcion", () => {
  expect(typeof filterDirectors).toBe("function");
})
it("deberia retornar para Hayao Miyazaki la pelicula [Castle in the Sky]", () => {
  let dataDirectores = filterDirectors("directedByHayao", datatest);
  expect(dataDirectores[0].title).toBe('Castle in the Sky');
})
it("deberia retornar el director seleccionado Hayao Miyazaki", () => {
  let dataDirectores = filterDirectors("directedByHayao", datatest);
  expect(dataDirectores[0].director).toBe('Hayao Miyazaki');
})
it("deberia retornar el año para la pelicula [My Neighbor Totoro]", () => {
  let dataDirectores = filterDirectors("directedByHayao", datatest);
  expect(dataDirectores[1].release_date).toBe('1988');
})
it("deberia retornar para Castle in the Sky el personaje [Pazu]", () => {
  let dataPersonajes = filterbyFilms('castle-in-the-sky', datafilms);
  expect(dataPersonajes[0].people[0].name).toBe('Pazu');
})
it("deberia retornar para My Neighbor Totoro el personaje [Satsuki Kusakabe]", () => {
  let dataPersonajes = filterbyFilms('my-neighbor-totoro', datafilms);
  expect(dataPersonajes[1].people[0].name).toBe('Satsuki Kusakabe');
})
})






// describe('example', () => {
//   it('is a function', () => {
//     expect(typeof example).toBe('function');
//   });

//   it('returns `example`', () => {
//     expect(example()).toBe('example');
//   });
// });


// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });
