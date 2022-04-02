<template>
  <div class="stats">
    <div class="pokemons" v-for="pokemon in pokemons" :key="pokemon.id">
      <div class="image">
        <img v-bind:src=pokemon.image>
      </div>

      <div class="info">
        <h1>Name: {{pokemon.name}} </h1>
        <h3>Type: {{pokemon.type}}</h3>
        <h3>Height: {{pokemon.height}}</h3>
        <h3>Ability: {{pokemon.ability}}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StatsView',
  props: {
    pokemons: Array
  }
}
</script>


