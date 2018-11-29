<template>
  <div id="app">
    <Home />
    <Albums />
  </div>
</template>

<script>
import Home from './home/Home';
import Albums from './albums/Albums';

export default {
  name: 'app',
  components: {
    Home,
    Albums
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
