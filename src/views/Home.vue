<template>
  <div class="home-page" :class="isDark ? 'home-dark' : 'home-light'">
    <!-- Hero -->
    <section class="hero">
      <v-container class="hero-container">
        <v-row align="center" class="hero-row">
          <!-- Left: Text -->
          <v-col cols="12" md="7" class="hero-text">
            <p class="hero-greeting font-accent">Hi there, I'm</p>

            <h1 class="hero-name font-heading">
              <span class="name-highlight">Yash</span> Wanvari
            </h1>

            <h2 class="hero-role font-heading">Senior Full-Stack Developer</h2>

            <p class="hero-bio">
              I build scalable systems and craft experiences users love. Currently
              making pet adoption easier across India with
              <a href="https://pawsearch.in/about" target="_blank" class="hero-link">Paw Search</a>.
            </p>

            <div class="hero-actions">
              <v-btn
                large
                color="primary"
                to="/portfolio"
                class="hero-btn-primary"
                elevation="0"
              >
                View My Work
                <v-icon right small>mdi-arrow-right</v-icon>
              </v-btn>
              <v-btn
                large
                outlined
                color="primary"
                href="mailto:wanvari.yash@gmail.com"
                class="hero-btn-secondary ml-3"
                elevation="0"
              >
                Get In Touch
              </v-btn>
            </div>
          </v-col>

          <!-- Right: Avatar (desktop only) -->
          <v-col cols="12" md="5" class="d-none d-md-flex justify-center align-center">
            <div class="hero-avatar-wrap">
              <div class="hero-avatar-glow"></div>
              <img
                src="../assets/profile.jpg"
                alt="Yash Wanvari"
                class="hero-avatar-img"
              />
            </div>
          </v-col>
        </v-row>

        <!-- Stats bar -->
        <v-row class="stats-row" no-gutters ref="statsRow">
          <v-col
            v-for="(stat, i) in stats"
            :key="stat.label"
            cols="4"
            class="stat-item"
          >
            <div class="stat-number font-heading">{{ statDisplays[i] }}</div>
            <div class="stat-label">{{ stat.label }}</div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- About section -->
    <v-container>
      <About />
    </v-container>
  </div>
</template>

<script>
import About from "../components/About";
export default {
  name: "home",
  components: { About },
  data: () => ({
    stats: [
      { target: 6, suffix: "+", label: "Years Experience" },
      { target: 10, suffix: "+", label: "Projects Shipped" },
      { target: 1, suffix: "", label: "Startup Founded" }
    ],
    statDisplays: ["0", "0", "0"]
  }),
  computed: {
    isDark() {
      return this.$store.getters.getColor === "dark";
    }
  },
  mounted() {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      this.stats.forEach((s, i) => this.$set(this.statDisplays, i, s.target + s.suffix));
      return;
    }
    setTimeout(() => this._animateCounters(), 700);
  },
  methods: {
    _animateCounters() {
      this.stats.forEach((stat, i) => {
        const duration = 1000;
        const start = performance.now();
        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = Math.round(eased * stat.target);
          this.$set(this.statDisplays, i, current + (progress >= 1 ? stat.suffix : ""));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      });
    }
  }
};
</script>

<style scoped>
.home-page {
  min-height: 100vh;
}

.home-light {
  background: linear-gradient(160deg, #fafafa 0%, #f0f0ff 55%, #eef0ff 100%);
}

.home-dark {
  background: linear-gradient(160deg, #0f0f14 0%, #10101e 55%, #0d0f1e 100%);
}

/* Hero */
.hero {
  min-height: 90vh;
  display: flex;
  align-items: center;
}

.hero-container {
  padding-top: 80px;
  padding-bottom: 48px;
}

.hero-row {
  min-height: 65vh;
}

.hero-text {
  padding: 32px 0;
}

/* Text */
.hero-greeting {
  font-family: 'Caveat', cursive !important;
  font-size: 1.7rem;
  font-weight: 600;
  color: #6366f1;
  line-height: 1;
  margin-bottom: 0.5rem;
  animation: fadeUp 0.5s ease both;
}

.hero-name {
  font-family: 'Space Grotesk', sans-serif !important;
  font-size: clamp(2.8rem, 6vw, 5rem);
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: -0.04em;
  margin-bottom: 0.5rem;
  animation: fadeUp 0.55s 0.08s ease both;
}

.name-highlight {
  color: #6366f1;
}

.hero-role {
  font-family: 'Space Grotesk', sans-serif !important;
  font-size: clamp(1rem, 2.5vw, 1.35rem);
  font-weight: 400;
  opacity: 0.55;
  letter-spacing: -0.01em;
  margin-bottom: 1.5rem;
  animation: fadeUp 0.55s 0.15s ease both;
}

.hero-bio {
  font-size: 1rem;
  line-height: 1.75;
  opacity: 0.72;
  max-width: 480px;
  margin-bottom: 2.5rem;
  animation: fadeUp 0.6s 0.22s ease both;
}

.hero-link {
  color: #6366f1;
  text-decoration: none;
  border-bottom: 1px dashed #6366f1;
  transition: border-bottom-style 0.15s;
}

.hero-link:hover {
  border-bottom-style: solid;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  animation: fadeUp 0.6s 0.3s ease both;
}

.hero-btn-primary {
  border-radius: 10px !important;
  text-transform: none !important;
  font-family: 'Space Grotesk', sans-serif !important;
  font-weight: 600 !important;
  letter-spacing: -0.01em !important;
  font-size: 0.95rem !important;
}

.hero-btn-secondary {
  border-radius: 10px !important;
  text-transform: none !important;
  font-family: 'Space Grotesk', sans-serif !important;
  font-weight: 500 !important;
  letter-spacing: -0.01em !important;
  font-size: 0.95rem !important;
}

/* Avatar */
.hero-avatar-wrap {
  position: relative;
  width: 280px;
  height: 280px;
  animation: fadeIn 0.8s 0.2s ease both, float 7s 1.2s ease-in-out infinite;
}

.hero-avatar-glow {
  position: absolute;
  inset: -16px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.35) 0%, rgba(79, 70, 229, 0.12) 70%, transparent 100%);
  filter: blur(20px);
}

.hero-avatar-img {
  width: 280px;
  height: 280px;
  border-radius: 50%;
  object-fit: cover;
  position: relative;
  z-index: 1;
  border: 3px solid rgba(99, 102, 241, 0.3);
}

/* Stats */
.stats-row {
  margin-top: 3.5rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(128, 128, 128, 0.12);
  animation: fadeUp 0.6s 0.4s ease both;
}

.stat-item {
  text-align: center;
  padding: 8px 0;
}

.stat-number {
  font-family: 'Space Grotesk', sans-serif !important;
  font-size: 2.2rem;
  font-weight: 700;
  color: #6366f1;
  line-height: 1;
  margin-bottom: 6px;
}

.stat-label {
  font-size: 0.72rem;
  font-weight: 500;
  opacity: 0.48;
  text-transform: uppercase;
  letter-spacing: 0.07em;
}

/* Animations */
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(18px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.94);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-14px); }
}

@media (prefers-reduced-motion: reduce) {
  .hero-avatar-wrap,
  .hero-greeting,
  .hero-name,
  .hero-role,
  .hero-bio,
  .hero-actions,
  .stats-row {
    animation: none;
    opacity: 1;
    transform: none;
  }
}

/* Mobile */
@media (max-width: 960px) {
  .hero {
    min-height: auto;
    padding: 20px 0 40px;
  }
  .hero-container {
    padding-top: 40px;
  }
  .hero-row {
    min-height: auto;
  }
  .hero-text {
    text-align: center;
    padding: 16px 0;
  }
  .hero-bio {
    margin-left: auto;
    margin-right: auto;
  }
  .hero-actions {
    justify-content: center;
  }
  .stats-row {
    margin-top: 2rem;
  }
}
</style>
