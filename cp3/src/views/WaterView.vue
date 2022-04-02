<template>
  <div class="water">
    <h1>Water Pokemon</h1>
    <StatsView :pokemons="getWaterPokemon"/>
  </div>
</template>

<script>
import StatsView from '../components/PokemonStats.vue'



export default {
    name: 'WaterView',
    components: {
        StatsView
    },
    computed: {
      getWaterPokemon() {
        return this.$root.$data.monList.filter(pokemon => pokemon.type === "water");
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
  color: blue;
}
</style>