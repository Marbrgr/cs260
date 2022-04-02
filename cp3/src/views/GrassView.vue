<template>
  <div class="grass">
    <h1>Grass Pokemon</h1>
    <StatsView :pokemons="getGrassPokemon"/>
  </div>
</template>

<script>
import StatsView from '../components/PokemonStats.vue'

export default {
    name: 'GrassView',
    components: {
        StatsView
    },
    computed: {
      getGrassPokemon() {
        return this.$root.$data.monList.filter(pokemon => pokemon.type === "grass");
      }
    }
}
</script>

<style scoped> 
@font-face {
  font-family: pokemonDark;
  src: url(../assets/fonts/pokemon/pokemonDark.ttf);
}

h1 {
  font-family: pokemonDark;
  color: green;
  
}
</style>