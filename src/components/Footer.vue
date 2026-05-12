<template>
  <v-footer padless :dark="color === 'dark'" :class="color === 'dark' ? 'footer-dark' : 'footer-light'">
    <v-container>
      <!-- Sign-off block -->
      <div class="signoff">
        <p class="editorial-eyebrow signoff-eyebrow">SIGN-OFF</p>
        <p class="signoff-line font-display">
          A portfolio is a conversation between the work and a careful reader<span class="period">.</span>
        </p>
      </div>

      <hr class="editorial-rule" />

      <v-row align="center" class="py-5">
        <!-- Name + tagline -->
        <v-col cols="12" md="4" class="text-center text-md-left mb-3 mb-md-0">
          <div class="footer-name font-display">Yash Wanvari</div>
          <div class="footer-tagline font-mono">SENIOR FULL-STACK &middot; BANGALORE</div>
        </v-col>

        <!-- Nav links -->
        <v-col cols="12" md="4" class="d-flex justify-center mb-3 mb-md-0">
          <div class="footer-nav">
            <router-link
              v-for="link in navLinks"
              :key="link.path"
              :to="link.path"
              exact
              class="footer-nav-btn"
            >{{ link.label }}</router-link>
          </div>
        </v-col>

        <!-- Social icons -->
        <v-col cols="12" md="4" class="d-flex justify-center justify-md-end align-center">
          <button
            v-for="social in socialLinks"
            :key="social.title"
            class="social-btn"
            :title="social.title"
            @click="openLink(social.url)"
            type="button"
            :aria-label="social.title"
          >
            <v-icon small>{{ social.icon }}</v-icon>
          </button>
        </v-col>
      </v-row>

      <hr class="editorial-rule" />

      <v-row class="py-3">
        <v-col cols="12" class="text-center">
          <span class="footer-copyright font-mono">
            &copy; {{ new Date().getFullYear() }} YASH WANVARI &middot; PORTFOLIO V1.0 &middot; ALL RIGHTS RESERVED
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
      { label: 'Works', path: '/portfolio' },
      { label: 'Tools', path: '/skills' }
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
  background: var(--paper) !important;
  border-top: 1px solid var(--rule) !important;
}

.footer-light {
  background: var(--paper-warm) !important;
  border-top: 1px solid var(--rule) !important;
}

.signoff {
  padding: 36px 0 22px;
  max-width: 720px;
}

.signoff-eyebrow {
  margin-bottom: 14px;
}

.signoff-line {
  font-family: var(--font-serif) !important;
  font-size: clamp(1.3rem, 3vw, 1.8rem);
  font-weight: 400;
  font-style: italic;
  line-height: 1.3;
  letter-spacing: -0.018em;
  color: var(--text);
  margin: 0;
}

.period {
  color: var(--suggest-fg);
  font-style: normal;
}

.footer-name {
  font-family: var(--font-serif) !important;
  font-size: 1.2rem;
  font-weight: 500;
  letter-spacing: -0.015em;
  color: var(--text);
  margin-bottom: 4px;
}

.footer-tagline {
  font-family: var(--font-mono) !important;
  font-size: 0.66rem;
  letter-spacing: 0.14em;
  color: var(--text-soft);
}

.footer-nav {
  display: flex;
  gap: 18px;
}

.footer-nav-btn {
  font-family: var(--font-sans);
  font-weight: 500;
  font-size: 0.85rem;
  letter-spacing: -0.005em;
  color: var(--text-muted);
  text-decoration: none;
  transition: color 0.2s ease;
  padding: 4px 0;
}

.footer-nav-btn:hover {
  color: var(--text);
}

.social-btn {
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
  margin: 0 4px;
  transition: color 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
  outline: none;
}

.social-btn:hover {
  color: var(--text);
  border-color: var(--text-muted);
  transform: translateY(-2px);
}

.social-btn:focus-visible {
  border-color: var(--suggest-fg);
  box-shadow: 0 0 0 2px var(--suggest-bg);
}

.footer-copyright {
  font-family: var(--font-mono) !important;
  font-size: 0.62rem;
  letter-spacing: 0.14em;
  color: var(--text-soft);
}

@media (max-width: 600px) {
  .signoff {
    padding: 28px 0 18px;
  }
  .signoff-line {
    font-size: clamp(1.15rem, 5vw, 1.4rem);
    line-height: 1.35;
  }
  .footer-nav {
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px 18px;
  }
  .footer-copyright {
    font-size: 0.56rem;
    letter-spacing: 0.1em;
  }
}
</style>
