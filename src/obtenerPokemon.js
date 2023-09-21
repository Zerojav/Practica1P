const {getPokemon} = require ("./functions/getData")

getPokemon(151).then((pokemon)=>{
  console.log(pokemon)
})