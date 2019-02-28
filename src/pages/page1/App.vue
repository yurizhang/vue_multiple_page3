<template>
  <div id="app">
    <div id="nav">
       |{{this.$store.state.count}}|
      <router-link to="/test">test</router-link> |
      <router-link to="/home">home</router-link> |

      <br><br><br>
      <router-link to="/page2">page2</router-link>|
      <router-link to="/index">index</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
