<template>
  <div class="home-page" :class="isDark ? 'home-dark' : 'home-light'">
    <!-- Hero -->
    <section class="hero">
      <v-container class="hero-container">
        <!-- Editorial masthead -->
        <div class="masthead">
          <span class="masthead-tag font-mono">PORTFOLIO &middot; V3.0 &middot; 2026</span>
          <span class="masthead-rule"></span>
          <span class="masthead-tag font-mono">BANGALORE</span>
        </div>

        <v-row align="center" class="hero-row">
          <!-- Left: editorial type + writing animation -->
          <v-col cols="12" md="7" class="hero-text">
            <p class="editorial-eyebrow hero-greeting">FROM THE DESK OF &mdash;</p>

            <h1 class="hero-name font-display">
              Yash Wanvari<span class="period">.</span>
            </h1>

            <p class="hero-role font-mono">
              SENIOR FULL-STACK DEVELOPER &middot; SHIPPING SINCE 2019
            </p>

            <p class="hero-bio font-serif">
              I build scalable systems and craft experiences users love.
              Currently making pet adoption easier across India with
              <a href="https://pawsearch.in/about" target="_blank" class="hero-link">Paw&nbsp;Search</a>,
              and editing prose paragraph-by-paragraph at
              <a href="https://www.wordsmith.page" target="_blank" class="hero-link">Wordsmith</a>.
            </p>

            <!-- The signature suggestion-pattern animation -->
            <div class="hero-animation">
              <WritingAnimation />
            </div>

            <div class="hero-actions">
              <v-btn
                large
                color="primary"
                to="/portfolio"
                class="hero-btn-primary"
                elevation="0"
                :dark="!isDark"
              >
                View My Work
                <v-icon right small>mdi-arrow-right</v-icon>
              </v-btn>
              <v-btn
                large
                outlined
                to="/skills"
                class="hero-btn-secondary ml-2"
                elevation="0"
              >
                Skills &amp; Tools
              </v-btn>
            </div>
          </v-col>

          <!-- Right: portrait, editorial frame -->
          <v-col cols="12" md="5" class="d-none d-md-flex justify-center align-center">
            <figure class="portrait-figure">
              <div class="portrait-frame">
                <img
                  src="../assets/profile.png"
                  alt="Yash Wanvari"
                  class="portrait-img"
                />
              </div>
              <figcaption class="portrait-caption font-mono">
                FIG. 01 &mdash; The author, photographed in Bangalore.
              </figcaption>
            </figure>
          </v-col>
        </v-row>

        <!-- Stats bar — editorial ledger -->
        <div class="stats-row" ref="statsRow">
          <div
            v-for="(stat, i) in stats"
            :key="stat.label"
            class="stat-item"
          >
            <div class="stat-number font-display">{{ statDisplays[i] }}</div>
            <div class="stat-label font-mono">{{ stat.label }}</div>
          </div>
        </div>
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
import WritingAnimation from "../components/WritingAnimation";
export default {
  name: "home",
  components: { About, WritingAnimation },
  data: () => ({
    stats: [
      { target: 6, suffix: "+", label: "YEARS · PROFESSIONAL" },
      { target: 10, suffix: "+", label: "PROJECTS · SHIPPED" },
      { target: 1, suffix: "", label: "STARTUP · FOUNDED" }
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
        const duration = 1100;
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
  background: var(--paper);
}

.home-dark {
  background: var(--paper);
}

/* Hero */
.hero {
  min-height: 90vh;
  display: flex;
  align-items: flex-start;
  padding-top: 8px;
}

.hero-container {
  padding-top: 56px;
  padding-bottom: 48px;
}

.hero-row {
  min-height: 60vh;
}

/* Masthead */
.masthead {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 40px;
  font-size: 0.66rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--text-soft);
  animation: fadeUp 0.5s ease both;
}

.masthead-tag {
  font-family: var(--font-mono);
  white-space: nowrap;
}

.masthead-rule {
  flex: 1;
  height: 1px;
  background: var(--rule);
}

.hero-text {
  padding: 8px 0;
}

/* Headlines */
.hero-greeting {
  margin-bottom: 12px;
  animation: fadeUp 0.5s ease both;
}

.hero-name {
  font-family: var(--font-serif) !important;
  font-size: clamp(3.2rem, 7vw, 6rem);
  font-weight: 500;
  line-height: 0.98;
  letter-spacing: -0.035em;
  color: var(--text);
  margin-bottom: 14px;
  animation: fadeUp 0.55s 0.08s ease both;
}

.period {
  color: var(--suggest-fg);
}

.hero-role {
  font-family: var(--font-mono) !important;
  font-size: 0.78rem;
  letter-spacing: 0.16em;
  color: var(--text-muted);
  margin-bottom: 22px;
  animation: fadeUp 0.55s 0.15s ease both;
}

.hero-bio {
  font-family: var(--font-serif) !important;
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--text);
  max-width: 540px;
  margin-bottom: 32px;
  animation: fadeUp 0.6s 0.22s ease both;
  letter-spacing: -0.005em;
}

.hero-link {
  color: var(--text);
  text-decoration: none;
  background-image: linear-gradient(currentColor, currentColor);
  background-size: 100% 1px;
  background-repeat: no-repeat;
  background-position: 0 95%;
  transition: background-position 0.25s ease, color 0.2s ease;
  white-space: nowrap;
}

.hero-link:hover {
  color: var(--suggest-fg);
}

.hero-animation {
  margin-bottom: 36px;
  animation: fadeUp 0.65s 0.32s ease both;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  animation: fadeUp 0.6s 0.4s ease both;
}

.hero-btn-primary {
  border-radius: 4px !important;
  text-transform: none !important;
  font-family: var(--font-sans) !important;
  font-weight: 600 !important;
  letter-spacing: 0 !important;
  font-size: 0.92rem !important;
  height: 46px !important;
  padding: 0 22px !important;
}

.hero-btn-secondary {
  border-radius: 4px !important;
  text-transform: none !important;
  font-family: var(--font-sans) !important;
  font-weight: 500 !important;
  letter-spacing: 0 !important;
  font-size: 0.92rem !important;
  height: 46px !important;
  padding: 0 20px !important;
  border-color: var(--rule) !important;
  color: var(--text) !important;
}

/* Portrait */
.portrait-figure {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  animation: fadeIn 0.8s 0.2s ease both;
}

.portrait-frame {
  position: relative;
  width: 280px;
  height: 340px;
  padding: 14px 14px 18px;
  background: var(--paper-warm);
  border: 1px solid var(--rule);
  box-shadow: 0 1px 0 var(--rule);
}

.portrait-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  filter: grayscale(0.18) contrast(1.02);
  transition: filter 0.4s ease;
}

.portrait-frame:hover .portrait-img {
  filter: grayscale(0) contrast(1);
}

.portrait-caption {
  margin-top: 12px;
  font-size: 0.66rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-soft);
  text-align: center;
  max-width: 280px;
  font-style: normal;
}

/* Stats — editorial ledger */
.stats-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
  margin-top: 64px;
  padding-top: 28px;
  border-top: 1px solid var(--rule);
  animation: fadeUp 0.6s 0.48s ease both;
}

.stat-item {
  padding: 8px 22px;
  border-right: 1px solid var(--rule-soft);
}

.stat-item:last-child {
  border-right: none;
}

.stat-number {
  font-family: var(--font-serif) !important;
  font-size: 2.6rem;
  font-weight: 500;
  letter-spacing: -0.03em;
  color: var(--text);
  line-height: 1;
  margin-bottom: 10px;
}

.stat-label {
  font-family: var(--font-mono) !important;
  font-size: 0.64rem;
  font-weight: 500;
  letter-spacing: 0.16em;
  color: var(--text-soft);
}

/* Animations */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.97); }
  to   { opacity: 1; transform: scale(1); }
}

@media (prefers-reduced-motion: reduce) {
  .masthead,
  .hero-greeting,
  .hero-name,
  .hero-role,
  .hero-bio,
  .hero-animation,
  .hero-actions,
  .portrait-figure,
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
    padding: 8px 0 32px;
  }
  .hero-container {
    padding-top: 32px;
  }
  .hero-row {
    min-height: auto;
  }
  .masthead {
    margin-bottom: 28px;
  }
  .hero-text {
    padding: 8px 0;
  }
  .stats-row {
    margin-top: 40px;
    grid-template-columns: 1fr;
    gap: 0;
  }
  .stat-item {
    border-right: none;
    border-bottom: 1px solid var(--rule-soft);
    padding: 14px 0;
  }
  .stat-item:last-child {
    border-bottom: none;
  }
}

@media (max-width: 600px) {
  .hero-container {
    padding-top: 24px;
  }
  .masthead {
    gap: 10px;
    margin-bottom: 22px;
    font-size: 0.6rem;
    letter-spacing: 0.14em;
  }
  .hero-name {
    font-size: clamp(2.6rem, 11vw, 3.4rem);
    line-height: 1.02;
  }
  .hero-role {
    font-size: 0.7rem;
    letter-spacing: 0.12em;
  }
  .hero-bio {
    font-size: 1rem;
    line-height: 1.6;
  }
  .hero-animation {
    margin-bottom: 28px;
  }
  .hero-actions {
    width: 100%;
  }
  .hero-btn-primary,
  .hero-btn-secondary {
    flex: 1;
    min-width: 0;
    padding: 0 14px !important;
    font-size: 0.86rem !important;
  }
  .hero-actions .ml-2 {
    margin-left: 0 !important;
  }
  .stat-item {
    padding: 14px 4px;
  }
  .stat-number {
    font-size: 2.2rem;
  }
}
</style>
