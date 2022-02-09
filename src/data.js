import data from './data/ghibli/ghibli.js'
console.log(data)


//FUNCION PARA FILTRAR PELICULAS POR DIRECTORES
export const filterDirectors = (filterItem, data) => { //filterItem se declara en main.js
  switch (filterItem) { //se utiliza un switch para evaluar los datos de filterItem y compararlos con diferentes casos
    case 'allthefilms':
      {
        const allTheFilms= data.filter(all => all.director !== 'none');

        return allTheFilms
      }
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

//FUNCION PARA FILTRAR PERSONAJES POR PELICULAS
export const filterbyFilms= (filterCharacter, data) => {
  switch(filterCharacter) {
    case 'allcharacters':
      {
        const allTheCharacters= data.filter(all => all.title !== 'none');
        return allTheCharacters
      }
    case 'castle-in-the-sky':
      {
        const castleInTheSky= data.filter(a => a.title === 'Castle in the Sky');
        return castleInTheSky
      }
    case 'my-neighbor-totoro':
      {
        const totoro= data.filter(b => b.title === 'My Neighbor Totoro');
        return totoro
      }
    case 'kikis-delivery-service':
      {
        const kikisDeliveryService= data.filter(c => c.title === "Kiki's Delivery Service");
        return kikisDeliveryService
      }
    case 'grave-of-the-fireflies':
      {
        const graveOfTheFireflies= data.filter(d => d.title === 'Grave of the Fireflies');
        return graveOfTheFireflies
      }
    case 'only-yesterday':
      {
        const onlyYesterday=data.filter(e => e.title === 'Only Yesterday');
        return onlyYesterday
      }
    case 'porco-rosso':
      {
        const porcoRosso= data.filter(f => f.title === 'Porco Rosso');
        return porcoRosso
      }
    case 'pom-poko':
      {
        const pomPoko= data.filter(g => g.title === 'Pom Poko');
        return pomPoko
      }
    case 'whisper-of-the-heart':
      {
        const whisperOfTheHeart= data.filter(h => h.title === 'Whisper of the Heart');
        return whisperOfTheHeart
      }
    case 'princess-mononoke':
      {
        const mononoke= data.filter(i => i.title === 'Princess Mononoke');
        return mononoke
      }
    case 'my-neighbors-the-yamadas':
      {
        const theYamadas= data.filter(j => j.title === 'My Neighbors the Yamadas');
        return theYamadas
      }
    case 'spirited-away':
      {
        const spiritedAway= data.filter(k => k.title === 'Spirited Away');
        return spiritedAway
      }
    case 'the-cat-returns':
      {
        const theCatreturns= data.filter(l => l.title === 'The Cat Returns');
        return theCatreturns
      }
    case 'howls-moving-castle':
      {
        const howlsMovingCastle= data.filter(m => m.title === "Howl's Moving Castle");
        return howlsMovingCastle
      }
    case 'tales-from-earthsea':
      {
        const talesFromEarthsea= data.filter(n => n.title === 'Tales from Earthsea');
        return talesFromEarthsea
      }
    case 'ponyo':
      {
        const ponyoOnTheCliff= data.filter(o => o.title === 'Ponyo on the Cliff by the Sea');
        return ponyoOnTheCliff
      }
    case 'arriety':
      {
        const theSecretWorld= data.filter(p => p.title === 'The Secret World of Arrietty');
        return theSecretWorld
      }
    case 'from-up-on-poppy-hill':
      {
        const poppyHill= data.filter(q => q.title === 'From Up on Poppy Hill');
        return poppyHill
      }
    case 'the-wind-rises':
      {
        const theWindRises= data.filter(r => r.title === 'The Wind Rises');
        return theWindRises
      }
    case 'kaguya':
      {
        const princessKaguya= data.filter(s => s.title === 'The Tale of the Princess Kaguya');
        return princessKaguya
      }
    case 'when-marnie-was-there':
      {
        const marnie= data.filter(t => t.title === 'When Marnie Was There');
        return marnie
      }
    default:
      {
        break
      }
  }
};





//FUNCION  SORT PARA ORDENAR PERSONAJES

export const sortDataYear = (data) => {
    const sortedYear = data.sort((a,b) => {
        return b.release_date - a.release_date;
    });
return sortedYear;
}

export const sortOldest = (data) => {
    const sortedOld = data.sort((a,b) => {
        return a.release_date - b.release_date;
    });
return sortedOld;
} 

export const sortAZ = (data) => {
  let sortedData=[];
  sortedData = data.sort((a,b) => {
      return a.title.localeCompare(b.title);
  });
  return sortedData;
}

export const sortZA = (data) => {
  let sortedRev=[];
  sortedRev = data.sort((a,b) => {
      return b.title.localeCompare(a.title);
  });
  return sortedRev;
}
