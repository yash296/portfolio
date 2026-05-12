<template>
  <div>
    <v-app-bar
      app
      flat
      :dark="color === 'dark'"
      :style="barStyle"
      height="68"
    >
      <!-- Mobile hamburger -->
      <v-app-bar-nav-icon class="d-flex d-md-none" @click="drawer = true" />
      <div class="flex-grow-1 d-flex d-md-none"></div>

      <!-- Logo -->
      <v-toolbar-title class="pa-0 logo-wrapper">
        <v-img
          :src="color === 'dark' ? require('../assets/ywDark.png') : require('../assets/ywLight.png')"
          height="110"
          width="130"
          contain
          class="logo-img"
          @click="$router.push('/')"
        />
      </v-toolbar-title>

      <div class="flex-grow-1 d-none d-md-flex"></div>

      <!-- Desktop nav — numbered chapters -->
      <nav class="d-none d-md-flex align-center nav-links">
        <router-link
          v-for="(link, idx) in navLinks"
          :key="link.path"
          :to="link.path"
          exact
          class="nav-btn"
          active-class="nav-btn-active"
        >
          <span class="nav-num font-mono">{{ String(idx + 1).padStart(2, '0') }}</span>
          <span class="nav-label">{{ link.label }}</span>
        </router-link>
      </nav>

      <!-- Desktop right controls -->
      <div class="d-none d-md-flex align-center ml-5 nav-right">
        <button
          class="theme-btn"
          type="button"
          :title="color === 'dark' ? 'Switch to light' : 'Switch to dark'"
          @click="toggleTheme"
          aria-label="Toggle theme"
        >
          <v-icon small>{{ color === 'dark' ? 'mdi-weather-sunny' : 'mdi-weather-night' }}</v-icon>
        </button>

        <a
          href="mailto:wanvari.yash@gmail.com"
          class="contact-cta font-sans"
        >
          Say Hello
          <span class="contact-arrow">&rarr;</span>
        </a>
      </div>

      <!-- Mobile theme toggle -->
      <div class="d-flex d-md-none">
        <v-btn icon small @click="toggleTheme">
          <v-icon small>{{ color === 'dark' ? 'mdi-weather-sunny' : 'mdi-weather-night' }}</v-icon>
        </v-btn>
      </div>
    </v-app-bar>

    <!-- Mobile drawer -->
    <v-navigation-drawer v-model="drawer" app bottom temporary :dark="color === 'dark'">
      <div class="drawer-header pa-6 pb-3">
        <p class="editorial-eyebrow drawer-eyebrow">CONTENTS</p>
      </div>
      <v-list nav class="px-4">
        <v-list-item-group>
          <v-list-item
            v-for="(link, idx) in navLinks"
            :key="link.path"
            :to="link.path"
            exact
            class="drawer-item"
          >
            <span class="drawer-num font-mono mr-3">{{ String(idx + 1).padStart(2, '0') }}</span>
            <v-list-item-title class="drawer-label font-display">{{ link.label }}</v-list-item-title>
          </v-list-item>
          <v-divider class="my-3" style="opacity: 0.1" />
          <v-list-item href="mailto:wanvari.yash@gmail.com">
            <v-list-item-title class="drawer-cta font-sans">Say Hello &rarr;</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    navLinks: [
      { label: 'About', path: '/' },
      { label: 'Works', path: '/portfolio' },
      { label: 'Tools', path: '/skills' }
    ]
  }),
  computed: {
    color() {
      return this.$store.getters.getColor;
    },
    barStyle() {
      if (this.color === 'dark') {
        return 'background: rgba(11,15,23,0.92) !important; backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px); border-bottom: 1px solid rgba(232,237,246,0.08);';
      }
      return 'background: rgba(255,255,255,0.92) !important; backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px); border-bottom: 1px solid rgba(13,19,32,0.08);';
    }
  },
  methods: {
    toggleTheme() {
      const next = this.color === 'dark' ? 'light' : 'dark';
      this.$store.dispatch('changeColor', next);
    }
  }
};
</script>

<style scoped>
.logo-wrapper {
  cursor: pointer;
}

.logo-img {
  cursor: pointer;
}

.nav-links {
  gap: 24px;
}

.nav-btn {
  display: inline-flex;
  align-items: baseline;
  gap: 6px;
  text-decoration: none;
  color: var(--text-muted);
  padding: 6px 2px;
  position: relative;
  transition: color 0.2s ease;
}

.nav-num {
  font-family: var(--font-mono);
  font-size: 0.62rem;
  letter-spacing: 0.06em;
  opacity: 0.55;
}

.nav-label {
  font-family: var(--font-sans);
  font-size: 0.92rem;
  font-weight: 500;
  letter-spacing: -0.005em;
  position: relative;
}

.nav-label::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: -4px;
  height: 1px;
  background: currentColor;
  transform: scaleX(0);
  transform-origin: left center;
  transition: transform 0.25s ease;
}

.nav-btn:hover {
  color: var(--text);
}

.nav-btn:hover .nav-label::after {
  transform: scaleX(1);
}

.nav-btn-active {
  color: var(--text);
}

.nav-btn-active .nav-label::after {
  transform: scaleX(1);
  background: var(--suggest-fg);
}

.nav-right {
  gap: 14px;
}

.theme-btn {
  background: transparent;
  border: 1px solid var(--rule);
  width: 34px;
  height: 34px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--text-muted);
  cursor: pointer;
  transition: color 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
  outline: none;
}

.theme-btn:hover {
  color: var(--text);
  border-color: var(--text-muted);
  transform: rotate(-12deg);
}

.theme-btn:focus-visible {
  border-color: var(--suggest-fg);
  box-shadow: 0 0 0 2px var(--suggest-bg);
}

.contact-cta {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-sans);
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text);
  text-decoration: none;
  padding: 8px 16px;
  border: 1px solid var(--text);
  border-radius: 3px;
  transition: background 0.2s ease, color 0.2s ease;
}

.contact-cta:hover {
  background: var(--text);
  color: var(--paper);
}

.contact-cta:hover .contact-arrow {
  transform: translateX(2px);
}

.contact-arrow {
  display: inline-block;
  transition: transform 0.2s ease;
}

.drawer-eyebrow {
  margin: 0;
}

.drawer-item {
  border-radius: 3px !important;
  margin-bottom: 4px;
  padding: 8px 14px !important;
}

.drawer-num {
  font-family: var(--font-mono);
  font-size: 0.68rem;
  letter-spacing: 0.08em;
  color: var(--text-soft);
}

.drawer-label {
  font-family: var(--font-serif) !important;
  font-size: 1.2rem !important;
  font-weight: 500 !important;
  letter-spacing: -0.02em !important;
  color: var(--text) !important;
}

.drawer-cta {
  font-family: var(--font-sans) !important;
  font-size: 0.92rem !important;
  font-weight: 600 !important;
  color: var(--text) !important;
}

@media (max-width: 600px) {
  .logo-img {
    max-width: 100px;
  }
}
</style>
