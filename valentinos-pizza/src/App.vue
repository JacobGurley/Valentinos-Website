<template>
  <div id="app">
    <TheHeader />
    <HomePage />
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import HomePage from './components/HomePage.vue'

export default {
  name: 'App',
  components: {
    TheHeader,
    HomePage
  
}
}
</script>

<style>
html, body, #app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Ensure that all child elements also take the full width */
#app > * {
  width: 100%;
}
</style>
