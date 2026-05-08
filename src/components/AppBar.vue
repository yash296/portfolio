<template>
  <div>
    <v-app-bar
      app
      flat
      :dark="color === 'dark'"
      :style="barStyle"
      height="64"
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

      <!-- Desktop nav -->
      <nav class="d-none d-md-flex align-center nav-links">
        <v-btn
          v-for="link in navLinks"
          :key="link.path"
          text
          :to="link.path"
          exact
          class="nav-btn"
          :ripple="false"
        >
          {{ link.label }}
        </v-btn>
      </nav>

      <!-- Desktop right controls -->
      <div class="d-none d-md-flex align-center ml-4" style="gap: 8px">
        <v-btn
          icon
          small
          :title="color === 'dark' ? 'Switch to light' : 'Switch to dark'"
          @click="toggleTheme"
          class="theme-btn"
        >
          <v-icon small>{{ color === 'dark' ? 'mdi-weather-sunny' : 'mdi-weather-night' }}</v-icon>
        </v-btn>

        <v-btn
          small
          outlined
          color="primary"
          href="mailto:wanvari.yash@gmail.com"
          class="contact-cta"
          elevation="0"
        >
          Say Hello
        </v-btn>
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
        <p class="drawer-greeting font-accent mb-0">hey there!</p>
      </div>
      <v-list nav class="px-4">
        <v-list-item-group>
          <v-list-item
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            exact
            class="drawer-item"
          >
            <v-list-item-title class="font-weight-medium">{{ link.label }}</v-list-item-title>
          </v-list-item>
          <v-divider class="my-3" style="opacity: 0.1" />
          <v-list-item href="mailto:wanvari.yash@gmail.com">
            <v-list-item-title class="primary--text font-weight-semibold">Say Hello</v-list-item-title>
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
      { label: 'Portfolio', path: '/portfolio' },
      { label: 'Skills', path: '/skills' }
    ]
  }),
  computed: {
    color() {
      return this.$store.getters.getColor;
    },
    barStyle() {
      if (this.color === 'dark') {
        return 'background: rgba(15,15,20,0.88) !important; backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); border-bottom: 1px solid rgba(255,255,255,0.06);';
      }
      return 'background: rgba(250,250,250,0.88) !important; backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); border-bottom: 1px solid rgba(0,0,0,0.06);';
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
  gap: 4px;
}

.nav-btn {
  font-family: 'Space Grotesk', sans-serif !important;
  font-weight: 500 !important;
  font-size: 0.875rem !important;
  text-transform: none !important;
  letter-spacing: 0 !important;
  border-radius: 8px !important;
  transition: opacity 0.2s ease !important;
}

.nav-btn:hover {
  opacity: 0.65;
}

.nav-btn.v-btn--active {
  font-weight: 700 !important;
}

.theme-btn {
  opacity: 0.7;
  transition: opacity 0.2s ease !important;
}

.theme-btn:hover {
  opacity: 1;
}

.contact-cta {
  font-family: 'Space Grotesk', sans-serif !important;
  font-weight: 600 !important;
  text-transform: none !important;
  letter-spacing: 0 !important;
  border-radius: 8px !important;
  font-size: 0.8rem !important;
}

.drawer-greeting {
  font-family: 'Caveat', cursive !important;
  font-size: 1.4rem;
  color: #6366f1;
}

.drawer-item {
  border-radius: 8px !important;
  margin-bottom: 2px;
}
</style>
