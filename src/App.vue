<template>
  <div id="app">
    <v-app>
      <AppBar />
      <v-content id="router" :style="color == 'dark' ? 'background:#424242' : 'background:#fff' ">
        <v-card flat tile :dark="color == 'dark' ? true : false ">
          <transition name="fade" mode="out-in">
            <router-view />
          </transition>
        </v-card>
        <Snackbar />
      </v-content>
      <Footer />
    </v-app>
  </div>
</template>

<script>
import AppBar from "./components/AppBar";
import Footer from "./components/Footer";
import Snackbar from "./components/Snackbar";
export default {
  components: {
    AppBar,
    Footer,
    Snackbar
  },
  data: () => ({}),
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
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.5s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
