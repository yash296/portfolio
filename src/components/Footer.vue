<template>
  <v-footer padless :dark="color === 'dark'" :class="color === 'dark' ? 'footer-dark' : 'footer-light'">
    <v-container>
      <v-row align="center" class="py-5">
        <!-- Name + tagline -->
        <v-col cols="12" md="4" class="text-center text-md-left mb-3 mb-md-0">
          <div class="footer-name font-heading">Yash Wanvari</div>
          <div class="footer-tagline">Building things with love and coffee ☕</div>
        </v-col>

        <!-- Nav links -->
        <v-col cols="12" md="4" class="d-flex justify-center mb-3 mb-md-0">
          <div class="footer-nav">
            <v-btn
              v-for="link in navLinks"
              :key="link.path"
              text
              x-small
              :to="link.path"
              exact
              class="footer-nav-btn"
            >
              {{ link.label }}
            </v-btn>
          </div>
        </v-col>

        <!-- Social icons -->
        <v-col cols="12" md="4" class="d-flex justify-center justify-md-end align-center">
          <v-btn
            v-for="social in socialLinks"
            :key="social.title"
            icon
            :title="social.title"
            @click="openLink(social.url)"
            class="social-btn"
          >
            <v-icon>{{ social.icon }}</v-icon>
          </v-btn>
        </v-col>
      </v-row>

      <v-divider :style="color === 'dark' ? 'opacity: 0.08' : 'opacity: 0.12'" />

      <v-row class="py-3">
        <v-col cols="12" class="text-center">
          <span class="footer-copyright">
            &copy; {{ new Date().getFullYear() }} Yash Wanvari &mdash; All rights reserved
          </span>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    navLinks: [
      { label: 'About', path: '/' },
      { label: 'Portfolio', path: '/portfolio' },
      { label: 'Skills', path: '/skills' }
    ],
    socialLinks: [
      { title: 'GitHub', icon: 'mdi-github-circle', url: 'https://github.com/yash296' },
      { title: 'LinkedIn', icon: 'mdi-linkedin-box', url: 'https://www.linkedin.com/in/yash-wanvari-b8a8b4157/' },
      { title: 'Email', icon: 'mdi-email-outline', url: 'mailto:wanvari.yash@gmail.com' }
    ]
  }),
  computed: {
    color() {
      return this.$store.getters.getColor;
    }
  },
  methods: {
    openLink(url) {
      window.open(url, '_blank');
    }
  }
};
</script>

<style scoped>
.footer-dark {
  background: #09090e !important;
  border-top: 1px solid rgba(255, 255, 255, 0.06) !important;
}

.footer-light {
  background: #f0f0f5 !important;
  border-top: 1px solid rgba(0, 0, 0, 0.06) !important;
}

.footer-name {
  font-family: 'Space Grotesk', sans-serif !important;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  margin-bottom: 3px;
}

.footer-tagline {
  font-size: 0.78rem;
  opacity: 0.45;
}

.footer-nav {
  display: flex;
  gap: 4px;
}

.footer-nav-btn {
  font-family: 'Space Grotesk', sans-serif !important;
  font-weight: 500 !important;
  font-size: 0.8rem !important;
  text-transform: none !important;
  letter-spacing: 0 !important;
  opacity: 0.55;
  transition: opacity 0.2s !important;
}

.footer-nav-btn:hover {
  opacity: 1;
}

.social-btn {
  opacity: 0.6;
  transition: opacity 0.2s ease, transform 0.2s ease !important;
}

.social-btn:hover {
  opacity: 1;
  transform: translateY(-2px);
}

.footer-copyright {
  font-size: 0.75rem;
  opacity: 0.38;
}
</style>
