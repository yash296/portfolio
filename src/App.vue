<template>
  <div id="app">
    <v-app>
      <AppBar />
      <v-content
        id="router"
        :style="color === 'dark' ? 'background: #0f0f14' : 'background: #fafafa'"
      >
        <v-card flat tile :dark="color === 'dark'" color="transparent">
          <transition name="page-fade" mode="out-in">
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
  components: { AppBar, Footer, Snackbar },
  computed: {
    color() {
      return this.$store.getters.getColor;
    }
  }
};
</script>

<style>
:root {
  --font-heading: 'Space Grotesk', 'Avenir', sans-serif;
  --font-body: 'Inter', 'Avenir', sans-serif;
  --font-accent: 'Caveat', cursive;
  --accent: #6366f1;
}

html {
  scroll-behavior: smooth;
}

#app {
  font-family: var(--font-body);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.font-heading,
.v-application h1,
.v-application h2,
.v-application h3 {
  font-family: var(--font-heading) !important;
}

.font-accent {
  font-family: var(--font-accent) !important;
}

/* Page transitions */
.page-fade-enter-active,
.page-fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.page-fade-enter {
  opacity: 0;
  transform: translateY(10px);
}
.page-fade-leave-active {
  opacity: 0;
  transform: translateY(-8px);
}

/* Scroll reveal */
.reveal {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.65s cubic-bezier(0.4, 0, 0.2, 1), transform 0.65s cubic-bezier(0.4, 0, 0.2, 1);
}
.reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Text gradient utility */
.text-gradient {
  background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
</style>
