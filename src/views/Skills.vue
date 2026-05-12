<template>
  <div class="skills-page">
    <!-- Section masthead -->
    <div class="section-header">
      <v-container>
        <div class="mast-row">
          <span class="editorial-eyebrow reveal" data-delay="0">CHAPTER 04 &middot; APPENDIX</span>
          <hr class="editorial-rule reveal" data-delay="30" />
        </div>
        <h1 class="section-title font-display reveal" data-delay="80">
          Tools of the trade<span class="period">.</span>
        </h1>
        <p class="section-desc font-serif reveal" data-delay="150">
          Technologies I've worked with professionally and shipped to production.
          Not every line I've ever written &mdash; just the things I reach for first.
        </p>
      </v-container>
    </div>

    <v-container class="pb-16">
      <div
        v-for="(category, ci) in skillCategories"
        :key="category.name"
        class="skill-category"
      >
        <!-- Category heading -->
        <div class="category-header reveal" data-delay="0">
          <span class="category-num font-mono">§ {{ String(ci + 1).padStart(2, '0') }}</span>
          <h2 class="category-title font-display">{{ category.name }}</h2>
          <span class="category-rule"></span>
        </div>

        <v-row>
          <v-col
            v-for="(skill, si) in category.skills"
            :key="skill.name"
            cols="6"
            sm="4"
            md="3"
            lg="2"
            class="reveal"
            :data-delay="si * 50"
          >
            <div
              class="skill-card"
              :class="isDark ? 'skill-card-dark' : 'skill-card-light'"
              :style="skill.link ? 'cursor:pointer' : ''"
              @click="skill.link && openLink(skill.link)"
            >
              <img
                :src="skill.icon"
                :alt="skill.name"
                class="skill-icon"
                @error="e => (e.target.style.opacity = '0.3')"
              />
              <span class="skill-name font-mono">{{ skill.name }}</span>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>
const di = (name, variant = "original") =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/${name}/${name}-${variant}.svg`;

export default {
  data: () => ({
    skillCategories: [
      {
        name: "Languages",
        skills: [
          { name: "JavaScript", icon: di("javascript"), link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
          { name: "TypeScript", icon: di("typescript"), link: "https://www.typescriptlang.org" },
          { name: "HTML5", icon: di("html5"), link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
          { name: "CSS3", icon: di("css3"), link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
          { name: "C#", icon: di("csharp"), link: "https://docs.microsoft.com/en-us/dotnet/csharp/" }
        ]
      },
      {
        name: "Frameworks & Libraries",
        skills: [
          { name: "Vue.js", icon: di("vuejs"), link: "https://vuejs.org" },
          { name: "React", icon: di("react"), link: "https://reactjs.org" },
          { name: "Next.js", icon: di("nextjs", "original-wordmark"), link: "https://nextjs.org" },
          { name: "Node.js", icon: di("nodejs"), link: "https://nodejs.org" },
          { name: "Express", icon: di("express", "original-wordmark"), link: "https://expressjs.com" }
        ]
      },
      {
        name: "Databases & Cloud",
        skills: [
          { name: "MongoDB", icon: di("mongodb"), link: "https://www.mongodb.com" },
          { name: "PostgreSQL", icon: di("postgresql"), link: "https://www.postgresql.org" },
          { name: "Google Cloud", icon: di("googlecloud"), link: "https://cloud.google.com" },
          { name: "Docker", icon: di("docker"), link: "https://www.docker.com" }
        ]
      },
      {
        name: "Tools & Workflow",
        skills: [
          { name: "Git", icon: di("git"), link: "https://git-scm.com" },
          { name: "VS Code", icon: di("vscode"), link: "https://code.visualstudio.com" },
          { name: "Postman", icon: di("postman"), link: "https://www.postman.com" },
          { name: "Unity", icon: di("unity"), link: "https://unity.com" }
        ]
      }
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
    openLink(url) {
      window.open(url, "_blank");
    },
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
      }, { threshold: 0.1, rootMargin: "0px 0px -30px 0px" });
      this.$el.querySelectorAll(".reveal").forEach(el => this._observer.observe(el));
    }
  }
};
</script>

<style scoped>
.skills-page {
  min-height: 100vh;
  background: var(--paper);
}

/* Section masthead */
.section-header {
  padding: 4.5rem 0 2.5rem;
}

.mast-row {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 18px;
}

.mast-row .editorial-eyebrow {
  white-space: nowrap;
}

.mast-row .editorial-rule {
  flex: 1;
  margin: 0;
}

.section-title {
  font-family: var(--font-serif) !important;
  font-size: clamp(2.2rem, 5.4vw, 3.8rem);
  font-weight: 500;
  letter-spacing: -0.032em;
  line-height: 1.05;
  color: var(--text);
  margin: 0 0 16px;
}

.period {
  color: var(--suggest-fg);
}

.section-desc {
  font-family: var(--font-serif) !important;
  font-size: 1.05rem;
  line-height: 1.65;
  color: var(--text-muted);
  max-width: 580px;
  margin: 0;
}

/* Category */
.skill-category {
  margin-bottom: 3rem;
}

.category-header {
  display: flex;
  align-items: baseline;
  gap: 14px;
  margin-bottom: 22px;
}

.category-num {
  font-family: var(--font-mono) !important;
  font-size: 0.74rem;
  letter-spacing: 0.12em;
  color: var(--text-soft);
}

.category-title {
  font-family: var(--font-serif) !important;
  font-size: 1.4rem;
  font-weight: 500;
  letter-spacing: -0.02em;
  color: var(--text);
  margin: 0;
}

.category-rule {
  flex: 1;
  height: 1px;
  background: var(--rule);
  align-self: center;
  min-width: 12px;
}

/* Skill card */
.skill-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 1.2rem 0.75rem;
  border-radius: 4px;
  transition: border-color 0.22s ease, transform 0.22s ease;
  text-align: center;
  aspect-ratio: 1;
  background: var(--paper);
  border: 1px solid var(--rule);
}

.skill-card-dark {
  background: var(--paper-warm);
}

.skill-card:hover {
  border-color: var(--text-muted);
  transform: translateY(-2px);
}

.skill-icon {
  width: 42px;
  height: 42px;
  object-fit: contain;
  transition: transform 0.22s ease;
  filter: grayscale(0.15);
}

.skill-card:hover .skill-icon {
  transform: scale(1.06);
  filter: grayscale(0);
}

.skill-name {
  font-family: var(--font-mono) !important;
  font-size: 0.68rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  color: var(--text-muted);
  line-height: 1.2;
}

@media (max-width: 960px) {
  .section-header {
    padding: 3rem 0 1.5rem;
  }
}

@media (max-width: 600px) {
  .section-header {
    padding: 2.5rem 0 1.5rem;
  }
  .mast-row {
    gap: 10px;
    margin-bottom: 14px;
  }
  .section-title {
    font-size: clamp(2rem, 9vw, 2.8rem);
  }
  .section-desc {
    font-size: 0.98rem;
    line-height: 1.55;
  }
  .category-header {
    gap: 10px;
    margin-bottom: 16px;
  }
  .category-title {
    font-size: 1.25rem;
  }
  .skill-card {
    padding: 0.9rem 0.5rem;
    gap: 8px;
  }
  .skill-icon {
    width: 36px;
    height: 36px;
  }
}
</style>
