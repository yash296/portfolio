<template>
  <div class="about-section">
    <!-- Section eyebrow -->
    <p class="about-eyebrow font-accent reveal" data-delay="0">a little about me</p>
    <h2 class="about-title font-heading reveal" data-delay="80">The person behind the code</h2>

    <v-row class="mt-8">
      <!-- Bio text -->
      <v-col cols="12" md="7">
        <div class="about-text reveal" data-delay="140">
          <p>
            I'm a <strong>Senior Full-Stack Developer</strong> with over 6 years of experience building
            web applications — from rough MVPs to production systems serving thousands of users.
            I specialize in the full stack: designing databases, building APIs, and crafting interfaces
            that feel intuitive and fast.
          </p>
          <p class="mt-5">
            I care about more than just making things work. I care about making them <em>right</em> —
            clean architecture, thoughtful UX, and code the next developer will actually enjoy reading.
            I've led engineering teams, mentored juniors, and built products from zero to production.
          </p>
          <p class="mt-5">
            When I'm not shipping code, you'll find me photographing Bangalore's chaotic beauty,
            gaming way past midnight, or working on
            <a href="https://pawsearch.in/about" target="_blank" class="inline-link">Paw Search</a> —
            my attempt to make pet adoption easier in India.
          </p>
        </div>
      </v-col>

      <!-- Quick facts sidebar -->
      <v-col cols="12" md="5">
        <div class="quick-facts reveal" data-delay="200" :class="isDark ? 'quick-facts-dark' : 'quick-facts-light'">
          <p class="quick-facts-title font-accent">Quick facts</p>
          <div v-for="fact in facts" :key="fact.label" class="fact-row">
            <v-icon small color="primary" class="mr-2 fact-icon">{{ fact.icon }}</v-icon>
            <span class="fact-label">{{ fact.label }}:</span>
            <span class="ml-1 fact-value">{{ fact.value }}</span>
          </div>
        </div>
      </v-col>
    </v-row>

    <!-- Currently building indicators -->
    <v-row class="mt-6">
      <v-col cols="12">
        <div class="currently-wrapper reveal" data-delay="100">
          <div
            v-for="project in currentProjects"
            :key="project.name"
            class="currently-block"
            :class="isDark ? 'currently-dark' : 'currently-light'"
          >
            <span class="currently-dot"></span>
            <span class="currently-label font-heading">Currently building:</span>
            <a :href="project.url" target="_blank" class="currently-project">
              {{ project.name }} &mdash; {{ project.desc }}
            </a>
          </div>
        </div>
      </v-col>
    </v-row>

    <!-- Bangalore card -->
    <v-row class="mt-8">
      <v-col cols="12" class="reveal" data-delay="60">
        <v-card class="bangalore-card" rounded="lg" elevation="0">
          <v-img
            :src="isDark ? require('../assets/bangaloreDark.png') : require('../assets/bangaloreLight.png')"
            height="240"
          >
            <v-row align="end" justify="start" class="fill-height pa-6">
              <div class="bangalore-text">
                <p class="bangalore-eyebrow font-accent">Originally from</p>
                <p class="bangalore-city font-heading">Bangalore, India</p>
                <p class="bangalore-sub">B.E. Information Science &middot; CMR Institute of Technology</p>
              </div>
            </v-row>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    facts: [
      { icon: 'mdi-map-marker', label: 'Based in', value: 'Bangalore, India' },
      { icon: 'mdi-briefcase-outline', label: 'Role', value: 'Senior Full-Stack Dev' },
      { icon: 'mdi-code-braces', label: 'Focus', value: 'Vue · React · Node.js' },
      { icon: 'mdi-rocket-launch-outline', label: 'Building', value: 'Wordsmith · Paw Search' },
      { icon: 'mdi-camera-outline', label: 'Hobbies', value: 'Photography · Gaming' }
    ],
    currentProjects: [
      { name: 'Wordsmith', desc: 'AI writing assistant', url: 'https://www.wordsmith.page' },
      { name: 'Paw Search', desc: 'pet adoption platform for India', url: 'https://pawsearch.in/about' }
    ]
  }),
  computed: {
    isDark() {
      return this.$store.getters.getColor === 'dark';
    }
  },
  mounted() {
    this._setupReveal();
  },
  beforeDestroy() {
    if (this._observer) this._observer.disconnect();
  },
  methods: {
    _setupReveal() {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        this.$el.querySelectorAll('.reveal').forEach(el => el.classList.add('is-visible'));
        return;
      }
      this._observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const delay = parseInt(entry.target.dataset.delay || 0);
            setTimeout(() => entry.target.classList.add('is-visible'), delay);
            this._observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });
      this.$el.querySelectorAll('.reveal').forEach(el => this._observer.observe(el));
    }
  }
};
</script>

<style scoped>
.about-section {
  padding: 4rem 0 3rem;
  max-width: 900px;
  margin: 0 auto;
}

.about-eyebrow {
  font-family: 'Caveat', cursive !important;
  font-size: 1.4rem;
  color: #6366f1;
  line-height: 1;
  margin-bottom: 0.5rem;
}

.about-title {
  font-family: 'Space Grotesk', sans-serif !important;
  font-size: clamp(1.6rem, 4vw, 2.2rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.2;
  margin-bottom: 0;
}

.about-text {
  font-family: 'Inter', sans-serif;
  font-size: 0.97rem;
  line-height: 1.8;
}

.about-text p {
  margin-bottom: 0;
}

.inline-link {
  color: #6366f1;
  text-decoration: none;
  border-bottom: 1px dashed #6366f1;
  transition: border-bottom-style 0.15s;
}

.inline-link:hover {
  border-bottom-style: solid;
}

/* Quick facts */
.quick-facts {
  border-radius: 14px;
  padding: 1.5rem;
  height: 100%;
}

.quick-facts-light {
  background: rgba(99, 102, 241, 0.04);
  border: 1px solid rgba(99, 102, 241, 0.14);
}

.quick-facts-dark {
  background: rgba(129, 140, 248, 0.06);
  border: 1px solid rgba(129, 140, 248, 0.18);
}

.quick-facts-title {
  font-family: 'Caveat', cursive !important;
  font-size: 1.1rem;
  color: #6366f1;
  margin-bottom: 1rem;
}

.fact-row {
  display: flex;
  align-items: center;
  margin-bottom: 11px;
  font-size: 0.85rem;
}

.fact-icon {
  flex-shrink: 0;
}

.fact-label {
  font-weight: 600;
  opacity: 0.65;
  white-space: nowrap;
}

.fact-value {
  opacity: 0.88;
}

/* Currently building */
.currently-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.currently-block {
  display: inline-flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  padding: 10px 16px;
  border-radius: 100px;
  font-size: 0.85rem;
}

.currently-light {
  background: rgba(34, 197, 94, 0.07);
  border: 1px solid rgba(34, 197, 94, 0.2);
}

.currently-dark {
  background: rgba(74, 222, 128, 0.08);
  border: 1px solid rgba(74, 222, 128, 0.22);
}

.currently-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #22c55e;
  flex-shrink: 0;
  animation: pulse-dot 2.5s ease-in-out infinite;
}

@keyframes pulse-dot {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}

.currently-label {
  font-family: 'Space Grotesk', sans-serif !important;
  font-weight: 600;
  font-size: 0.85rem;
}

.currently-project {
  color: #22c55e;
  text-decoration: none;
  font-size: 0.85rem;
}

.currently-project:hover {
  text-decoration: underline;
}

/* Bangalore card */
.bangalore-card {
  overflow: hidden;
  border-radius: 16px !important;
}

.bangalore-text {
  background: rgba(0, 0, 0, 0.52);
  backdrop-filter: blur(6px);
  border-radius: 10px;
  padding: 14px 18px;
}

.bangalore-eyebrow {
  font-family: 'Caveat', cursive !important;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.65);
  margin-bottom: 2px;
}

.bangalore-city {
  font-family: 'Space Grotesk', sans-serif !important;
  font-size: 1.4rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 4px;
  letter-spacing: -0.02em;
}

.bangalore-sub {
  font-size: 0.78rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0;
}
</style>
