import data from './data/ghibli/ghibli.js'
console.log(data)

//FUNCION PARA FILTRAR PELICULAS POR DIRECTORES
export const filterDirectors = (filterItem, data) => { //filterItem se declara en main.js
  switch (filterItem) { //se utiliza un switch para evaluar los datos de filterItem y compararlos con diferentes casos

    case 'directedByHayao': // se ejecutan declaraciones asociadas a cada case
      {
        const hayaoDirector= data.filter(a => a.director === 'Hayao Miyazaki');// dentro de cada declaracion se usa .filter para encontrar los nombres de los directores
        // console.log(hayaoDirector)
        return hayaoDirector
      }

    case 'directedByGoro':
      {
        const goroDirector= data.filter(b => b.director === 'Gorō Miyazaki');
        return goroDirector
      }

    case 'directedByKondo':
      {
         const kondoDirector= data.filter(c => c.director === 'Yoshifumi Kondō');
         return kondoDirector
      }
    case 'directedByMorita':
      {
        const moritaDirector= data.filter(d => d.director === 'Hiroyuki Morita');
        return moritaDirector
      }
    case 'directedByTakahata':
      {
        const takahataDirector= data.filter(e => e.director === 'Isao Takahata');
        return takahataDirector
      }
    case 'directedByYonebayashi':
      {
        const yonebayashiDirector= data.filter(f => f.director === 'Hiromasa Yonebayashi');
        return yonebayashiDirector
      }
    default:
      {
        break // Cuando se encuentra un break, el programa sale del condicional switch y ejecuta la declaración siguiente
      }
  }
};



