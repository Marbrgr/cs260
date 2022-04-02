<template>
  <div class="home">
    <img alt="Vue logo" src="/images/pokeball.webp">
    <HelloWorld msg="Gotta catch 'em all!"/>
    <StatsView :pokemons="getAllPokemon"/>
    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import StatsView from '@/components/PokemonStats.vue' 

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    StatsView
  },
  computed: {
    getAllPokemon() {
      return this.$root.$data.monList;
    }
  }
}
</script>

<style scoped>
img {
  width: 20%;
}
</style>