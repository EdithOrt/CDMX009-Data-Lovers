import pokemon from './data/pokemon/pokemon.js';
import data from './data/pokemon/pokemon.js';
//Mostrar la data
export const dataPokemon= data.pokemon;
//Orden por numero de Pokedex
export const orderNumberPokedexDescendent= () => {
  return data.pokemon.sort((a,b) => b.id - a.id)
}



console.log(orderNumberPokedexDescendent())
// Filtración
export const newList= (dataPokemon,type) => dataPokemon.filter(pokemon => pokemon.type.includes(type));

