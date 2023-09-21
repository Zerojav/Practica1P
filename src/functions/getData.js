const { httpClient } = require("../plugins");

const getPokemon = async (idPokemon) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${idPokemon}`;
    const pokemon = await httpClient.get(url);
    return pokemon.name;
}

module.exports = { getPokemon };