<template>
  <div id="app" :class="color === 'dark' ? 'theme-ink' : 'theme-paper'">
    <v-app>
      <AppBar />
      <v-content
        id="router"
        :style="color === 'dark' ? 'background: #0B0F17' : 'background: #FFFFFF'"
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
  /* Wordsmith type system */
  --font-serif: 'Newsreader', 'Iowan Old Style', 'Hoefler Text', Garamond, Georgia, serif;
  --font-sans: 'Inter', ui-sans-serif, system-ui, 'SF Pro Text', 'Segoe UI', Roboto, sans-serif;
  --font-mono: 'JetBrains Mono', ui-monospace, 'SF Mono', Menlo, Consolas, monospace;

  /* Wordsmith palette — light (Paper) */
  --ink: #0B0F17;
  --text: #0D1320;
  --text-muted: #4A5468;
  --text-soft: #6B7385;
  --paper: #FFFFFF;
  --paper-warm: #F5EFE6;
  --rule: rgba(13, 19, 32, 0.10);
  --rule-soft: rgba(13, 19, 32, 0.06);
  --strike: #9AA0AC;

  /* Functional accent — one green */
  --suggest-bg: #E8F5E9;
  --suggest-fg: #1E5631;
  --suggest-ink: #173B2E;
}

#app.theme-ink {
  /* Wordsmith palette — dark */
  --ink: #FFFFFF;
  --text: #E8EDF6;
  --text-muted: #98A0B3;
  --text-soft: #6F7689;
  --paper: #0B0F17;
  --paper-warm: #15191F;
  --rule: rgba(232, 237, 246, 0.10);
  --rule-soft: rgba(232, 237, 246, 0.06);
  --strike: #5C6273;

  --suggest-bg: #173B2E;
  --suggest-fg: #B8E6C2;
  --suggest-ink: #E8F5E9;
}

html {
  scroll-behavior: smooth;
}

#app {
  font-family: var(--font-sans);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Vuetify .container default mobile padding is too tight (12px).
   Bump it so editorial layouts breathe on small screens. */
.v-application .container {
  padding-left: 22px;
  padding-right: 22px;
}

@media (min-width: 600px) {
  .v-application .container {
    padding-left: 28px;
    padding-right: 28px;
  }
}

@media (min-width: 960px) {
  .v-application .container {
    padding-left: 36px;
    padding-right: 36px;
  }
}

/* Editorial display + body uses serif */
.font-display,
.v-application h1,
.v-application h2 {
  font-family: var(--font-serif) !important;
  font-feature-settings: "kern" 1, "liga" 1, "calt" 1;
}

.font-serif {
  font-family: var(--font-serif) !important;
}

.font-sans {
  font-family: var(--font-sans) !important;
}

.font-mono {
  font-family: var(--font-mono) !important;
  font-feature-settings: "kern" 1;
}

/* Editorial eyebrow — small caps, mono, used across pages */
.editorial-eyebrow {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--text-soft);
}

.editorial-rule {
  border: 0;
  border-top: 1px solid var(--rule);
  margin: 0;
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
  transform: translateY(24px);
  transition: opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1), transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
}
.reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Selection — paper marginalia feel */
::selection {
  background: var(--suggest-bg);
  color: var(--suggest-ink);
}
</style>
