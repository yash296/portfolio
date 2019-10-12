<template>
  <div id="app">
    <v-app>
      <AppBar />
      <v-content id="router" :style="color == 'dark' ? 'background:#424242' : 'background:#fff' ">
        <v-card flat tile :dark="color == 'dark' ? true : false ">
          <router-view />
        </v-card>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import AppBar from "./components/AppBar";
export default {
  components: {
    AppBar
  },
  computed: {
    color() {
      return this.$store.getters.getColor;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
