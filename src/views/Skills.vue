<template>
  <div class="skills-page">
    <!-- Section header -->
    <div class="section-header">
      <v-container>
        <p class="section-eyebrow font-accent reveal" data-delay="0">tools of the trade</p>
        <h1 class="section-title font-heading reveal" data-delay="80">Skills</h1>
        <p class="section-desc reveal" data-delay="150">Technologies I've worked with professionally and shipped to production.</p>
      </v-container>
    </div>

    <v-container class="pb-16">
      <div
        v-for="(category, ci) in skillCategories"
        :key="category.name"
        class="skill-category"
        :class="ci < skillCategories.length - 1 ? 'mb-12' : ''"
      >
        <!-- Category heading -->
        <div class="category-header mb-6 reveal" data-delay="0">
          <v-icon color="primary" class="mr-2">{{ category.icon }}</v-icon>
          <h2 class="category-title font-heading">{{ category.name }}</h2>
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
            :data-delay="si * 60"
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
              <span class="skill-name">{{ skill.name }}</span>
            </div>
          </v-col>
        </v-row>

        <v-divider
          v-if="ci < skillCategories.length - 1"
          class="mt-10"
          :style="isDark ? 'opacity: 0.07' : 'opacity: 0.1'"
        />
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
        icon: "mdi-code-braces",
        skills: [
          {
            name: "JavaScript",
            icon: di("javascript"),
            link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          },
          {
            name: "TypeScript",
            icon: di("typescript"),
            link: "https://www.typescriptlang.org"
          },
          {
            name: "HTML5",
            icon: di("html5"),
            link: "https://developer.mozilla.org/en-US/docs/Web/HTML"
          },
          {
            name: "CSS3",
            icon: di("css3"),
            link: "https://developer.mozilla.org/en-US/docs/Web/CSS"
          },
          {
            name: "C#",
            icon: di("csharp"),
            link: "https://docs.microsoft.com/en-us/dotnet/csharp/"
          }
        ]
      },
      {
        name: "Frameworks & Libraries",
        icon: "mdi-layers-outline",
        skills: [
          {
            name: "Vue.js",
            icon: di("vuejs"),
            link: "https://vuejs.org"
          },
          {
            name: "React",
            icon: di("react"),
            link: "https://reactjs.org"
          },
          {
            name: "Next.js",
            icon: di("nextjs", "original-wordmark"),
            link: "https://nextjs.org"
          },
          {
            name: "Node.js",
            icon: di("nodejs"),
            link: "https://nodejs.org"
          },
          {
            name: "Express",
            icon: di("express", "original-wordmark"),
            link: "https://expressjs.com"
          }
        ]
      },
      {
        name: "Databases & Cloud",
        icon: "mdi-database-outline",
        skills: [
          {
            name: "MongoDB",
            icon: di("mongodb"),
            link: "https://www.mongodb.com"
          },
          {
            name: "PostgreSQL",
            icon: di("postgresql"),
            link: "https://www.postgresql.org"
          },
          {
            name: "Google Cloud",
            icon: di("googlecloud"),
            link: "https://cloud.google.com"
          },
          {
            name: "Docker",
            icon: di("docker"),
            link: "https://www.docker.com"
          }
        ]
      },
      {
        name: "Tools & Workflow",
        icon: "mdi-wrench-outline",
        skills: [
          {
            name: "Git",
            icon: di("git"),
            link: "https://git-scm.com"
          },
          {
            name: "VS Code",
            icon: di("vscode"),
            link: "https://code.visualstudio.com"
          },
          {
            name: "Postman",
            icon: di("postman"),
            link: "https://www.postman.com"
          },
          {
            name: "Unity",
            icon: di("unity"),
            link: "https://unity.com"
          }
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
}

/* Section header */
.section-header {
  padding: 5rem 0 2.5rem;
  text-align: center;
}

.section-eyebrow {
  font-family: 'Caveat', cursive !important;
  font-size: 1.4rem;
  color: #6366f1;
  line-height: 1;
  margin-bottom: 0.5rem;
}

.section-title {
  font-family: 'Space Grotesk', sans-serif !important;
  font-size: clamp(2rem, 5vw, 3.2rem);
  font-weight: 700;
  letter-spacing: -0.04em;
  margin-bottom: 0.75rem;
}

.section-desc {
  font-size: 0.95rem;
  opacity: 0.55;
  max-width: 480px;
  margin: 0 auto;
  line-height: 1.6;
}

/* Category */
.category-header {
  display: flex;
  align-items: center;
}

.category-title {
  font-family: 'Space Grotesk', sans-serif !important;
  font-size: 1.15rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  margin: 0;
}

/* Skill card */
.skill-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 1.1rem 0.75rem;
  border-radius: 14px;
  transition: transform 0.22s ease, box-shadow 0.22s ease;
  text-align: center;
  aspect-ratio: 1;
}

.skill-card-light {
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.07);
}

.skill-card-dark {
  background: #16161f;
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.skill-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.1);
}

.skill-card-dark:hover {
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.35);
}

.skill-icon {
  width: 44px;
  height: 44px;
  object-fit: contain;
  transition: transform 0.22s ease;
}

.skill-card:hover .skill-icon {
  transform: scale(1.08);
}

.skill-name {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.72rem;
  font-weight: 600;
  opacity: 0.7;
  line-height: 1.2;
}

/* Responsive */
@media (max-width: 960px) {
  .section-header {
    padding: 3.5rem 0 2rem;
    text-align: left;
  }
}
</style>
