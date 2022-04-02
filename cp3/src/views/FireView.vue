<template>
  <div class="fire">
    <h1>Fire Pokemon</h1>
    <StatsView :pokemons="getFirePokemon"/>
  </div>
</template>

<script>
import StatsView from '@/components/PokemonStats.vue'

export default {
  name: 'FireView',
  components: {
      StatsView
  },
  computed: {
    getFirePokemon() {
      return this.$root.$data.monList.filter(pokemon => pokemon.type === "fire");
    },
  },
}
</script>

<style scoped> 
@font-face {
  font-family: pokemonDark;
  src: url(../assets/fonts/pokemon/pokemonDark.ttf);
}

h1 {
  font-family: pokemonDark;
  color: red;
  
}
</style>