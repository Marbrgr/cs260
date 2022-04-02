<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link id='water' to="/water">Water</router-link> |
      <router-link id='fire' to="/fire">Fire</router-link> |
      <router-link id='grass' to="/grass">Grass</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
@font-face {
  font-family: pokemonDark;
  src: url(assets/fonts/pokemon/pokemonDark.ttf);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  color: #2c3e50;
  font-family: pokemonDark;
  font-size: 2em;
}

nav a.router-link-exact-active {
  color: black;
}

#water {
  color: blue;
}
#fire {
  color: red;
}
#grass {
  color: green;
}
</style>
