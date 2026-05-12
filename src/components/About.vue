<template>
  <div class="about-section">
    <!-- Section eyebrow -->
    <div class="section-mast">
      <span class="editorial-eyebrow reveal" data-delay="0">CHAPTER 02 &middot; ABOUT</span>
      <hr class="editorial-rule reveal" data-delay="20" />
    </div>

    <h2 class="about-title font-display reveal" data-delay="80">
      The author, in his own words<span class="period">.</span>
    </h2>

    <v-row class="mt-8">
      <!-- Bio text -->
      <v-col cols="12" md="7">
        <div class="about-text reveal" data-delay="140">
          <p class="lede">
            I'm a <em>senior full-stack developer</em> with six years
            of experience building web applications &mdash; from rough MVPs
            to production systems serving thousands of users.
          </p>
          <p>
            I specialize in the full stack: designing databases, building APIs,
            and crafting interfaces that feel intuitive and fast. I care about
            more than making things work &mdash; I care about making them
            <em>right</em>. Clean architecture, thoughtful UX, and code the next
            developer will actually enjoy reading.
          </p>
          <p>
            I've led engineering teams, mentored juniors, and built products
            from zero to production. When I'm not shipping code, I'm on a
            football pitch, chasing a trail somewhere outside Bangalore,
            gaming way past midnight, or working on
            <a href="https://pawsearch.in/about" target="_blank" class="inline-link">Paw Search</a>
            &mdash; my attempt to make pet adoption easier in India.
          </p>
        </div>
      </v-col>

      <!-- Quick facts sidebar — colophon -->
      <v-col cols="12" md="5">
        <aside class="colophon reveal" data-delay="200">
          <p class="colophon-title font-mono">COLOPHON</p>
          <dl class="colophon-list">
            <template v-for="fact in facts">
              <dt :key="fact.label + '-dt'" class="font-mono">{{ fact.label }}</dt>
              <dd :key="fact.label + '-dd'">{{ fact.value }}</dd>
            </template>
          </dl>
        </aside>
      </v-col>
    </v-row>

    <!-- Currently building — editorial dispatch -->
    <div class="dispatch-wrap reveal" data-delay="100">
      <p class="editorial-eyebrow dispatch-eyebrow">
        <span class="signal-dot" />
        IN PROGRESS &middot; DISPATCHED FROM THE DESK
      </p>
      <ul class="dispatch-list">
        <li
          v-for="project in currentProjects"
          :key="project.name"
          class="dispatch-item"
        >
          <a :href="project.url" target="_blank" class="dispatch-link">
            <span class="dispatch-name font-display">{{ project.name }}</span>
            <span class="dispatch-rule"></span>
            <span class="dispatch-desc">{{ project.desc }}</span>
          </a>
        </li>
      </ul>
    </div>

    <!-- Bangalore card — editorial postcard -->
    <div class="postcard reveal" data-delay="60">
      <div class="postcard-image">
        <img
          :src="isDark ? require('../assets/bangaloreDark.png') : require('../assets/bangaloreLight.png')"
          alt="Bangalore"
        />
      </div>
      <div class="postcard-meta">
        <p class="editorial-eyebrow">DISPATCH &middot; ORIGIN</p>
        <p class="postcard-city font-display">Bangalore, India<span class="period">.</span></p>
        <p class="postcard-sub font-serif">
          B.E. Information Science &middot; CMR Institute of Technology
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    facts: [
      { label: "BASED IN", value: "Bangalore, India" },
      { label: "ROLE", value: "Senior Full-Stack Developer" },
      { label: "STACK", value: "Vue · React · Node.js" },
      { label: "BUILDING", value: "Wordsmith · Paw Search" },
      { label: "OFF HOURS", value: "Football · Trails · Gaming" }
    ],
    currentProjects: [
      { name: "Wordsmith", desc: "AI editor that proofreads, never silently", url: "https://www.wordsmith.page" },
      { name: "Paw Search", desc: "pet adoption platform for India", url: "https://pawsearch.in/about" }
    ]
  }),
  computed: {
    isDark() {
      return this.$store.getters.getColor === "dark";
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
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        this.$el.querySelectorAll(".reveal").forEach(el => el.classList.add("is-visible"));
        return;
      }
      this._observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const delay = parseInt(entry.target.dataset.delay || 0);
            setTimeout(() => entry.target.classList.add("is-visible"), delay);
            this._observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -30px 0px" });
      this.$el.querySelectorAll(".reveal").forEach(el => this._observer.observe(el));
    }
  }
};
</script>

<style scoped>
.about-section {
  padding: 4rem 0 3rem;
  max-width: 920px;
  margin: 0 auto;
}

.section-mast {
  margin-bottom: 12px;
}

.section-mast .editorial-rule {
  margin-top: 8px;
}

.about-title {
  font-family: var(--font-serif) !important;
  font-size: clamp(1.8rem, 4vw, 2.6rem);
  font-weight: 500;
  letter-spacing: -0.028em;
  line-height: 1.15;
  color: var(--text);
  margin: 0;
}

.period {
  color: var(--suggest-fg);
}

/* Body text — editorial */
.about-text {
  font-family: var(--font-serif);
  font-size: 1.06rem;
  line-height: 1.78;
  color: var(--text);
  letter-spacing: -0.003em;
}

.about-text p {
  margin-bottom: 1rem;
}

.about-text p:last-child {
  margin-bottom: 0;
}

.lede::first-letter {
  font-family: var(--font-serif);
  font-size: 3.2em;
  float: left;
  line-height: 0.86;
  padding-right: 8px;
  padding-top: 4px;
  font-weight: 500;
  color: var(--text);
}

.inline-link {
  color: var(--text);
  text-decoration: none;
  background-image: linear-gradient(currentColor, currentColor);
  background-size: 100% 1px;
  background-repeat: no-repeat;
  background-position: 0 95%;
  transition: color 0.2s ease;
}

.inline-link:hover {
  color: var(--suggest-fg);
}

/* Colophon */
.colophon {
  background: var(--paper-warm);
  border: 1px solid var(--rule);
  padding: 1.4rem 1.4rem 1.2rem;
  border-radius: 4px;
  height: 100%;
}

.colophon-title {
  font-size: 0.66rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--text-soft);
  margin-bottom: 14px;
}

.colophon-list {
  margin: 0;
  display: grid;
  grid-template-columns: minmax(80px, auto) 1fr;
  column-gap: 14px;
  row-gap: 9px;
  font-size: 0.86rem;
}

.colophon-list dt {
  font-family: var(--font-mono);
  font-size: 0.66rem;
  letter-spacing: 0.12em;
  color: var(--text-soft);
  text-transform: uppercase;
  align-self: baseline;
  padding-top: 3px;
}

.colophon-list dd {
  margin: 0;
  font-family: var(--font-serif);
  color: var(--text);
  font-size: 0.96rem;
  line-height: 1.4;
}

/* Dispatch */
.dispatch-wrap {
  margin-top: 56px;
  padding-top: 28px;
  border-top: 1px solid var(--rule);
}

.dispatch-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 18px;
}

.signal-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--suggest-fg);
  animation: signal-pulse 2.4s ease-in-out infinite;
}

@keyframes signal-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}

.dispatch-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.dispatch-item {
  border-bottom: 1px solid var(--rule-soft);
  padding: 0;
}

.dispatch-item:first-child {
  border-top: 1px solid var(--rule-soft);
}

.dispatch-link {
  display: flex;
  align-items: baseline;
  gap: 14px;
  padding: 14px 0;
  text-decoration: none;
  color: var(--text);
  transition: color 0.2s ease;
}

.dispatch-link:hover {
  color: var(--suggest-fg);
}

.dispatch-name {
  font-family: var(--font-serif) !important;
  font-size: 1.4rem;
  font-weight: 500;
  letter-spacing: -0.018em;
  white-space: nowrap;
}

.dispatch-rule {
  flex: 1;
  height: 1px;
  background: var(--rule);
  align-self: center;
  min-width: 12px;
}

.dispatch-desc {
  font-family: var(--font-serif);
  font-size: 0.92rem;
  color: var(--text-muted);
  font-style: italic;
  text-align: right;
}

/* Postcard */
.postcard {
  margin-top: 56px;
  display: grid;
  grid-template-columns: minmax(220px, 0.9fr) 1fr;
  gap: 24px;
  background: var(--paper-warm);
  border: 1px solid var(--rule);
  border-radius: 4px;
  overflow: hidden;
}

.postcard-image {
  position: relative;
  min-height: 220px;
}

.postcard-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  filter: grayscale(0.2) contrast(1.02);
}

.postcard-meta {
  padding: 22px 26px 22px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.postcard-city {
  font-family: var(--font-serif) !important;
  font-size: clamp(1.5rem, 3.4vw, 2rem);
  font-weight: 500;
  letter-spacing: -0.02em;
  line-height: 1.1;
  color: var(--text);
  margin: 6px 0 8px;
}

.postcard-sub {
  font-family: var(--font-serif) !important;
  font-style: italic;
  font-size: 0.95rem;
  color: var(--text-muted);
  margin: 0;
}

@media (max-width: 720px) {
  .postcard {
    grid-template-columns: 1fr;
  }
  .postcard-meta {
    padding: 18px 20px 22px;
  }
  .dispatch-link {
    flex-wrap: wrap;
    gap: 4px 14px;
  }
  .dispatch-desc {
    text-align: left;
    flex-basis: 100%;
  }
}

@media (max-width: 600px) {
  .about-section {
    padding: 2.5rem 0 2rem;
  }
  .about-title {
    font-size: clamp(1.6rem, 7vw, 2rem);
  }
  .about-text {
    font-size: 1rem;
    line-height: 1.7;
  }
  .lede::first-letter {
    font-size: 2.8em;
    padding-right: 6px;
    padding-top: 3px;
  }
  .colophon {
    padding: 1.1rem 1.2rem;
  }
  .colophon-list {
    grid-template-columns: 1fr;
    row-gap: 4px;
  }
  .colophon-list dt {
    padding-top: 6px;
  }
  .colophon-list dd {
    font-size: 0.95rem;
  }
  .dispatch-name {
    font-size: 1.2rem;
  }
}
</style>
