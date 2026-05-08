<template>
  <div class="portfolio-page">
    <!-- Section header -->
    <div class="section-header">
      <v-container>
        <p class="section-eyebrow font-accent reveal" data-delay="0">things I've built</p>
        <h1 class="section-title font-heading reveal" data-delay="80">My Work</h1>
        <p class="section-desc reveal" data-delay="150">From quick side projects to full production systems — here's what I've been building.</p>
      </v-container>
    </div>

    <!-- Project grid -->
    <v-container class="pb-16">
      <v-row>
        <v-col
          v-for="(project, index) in projects"
          :key="index"
          cols="12"
          md="6"
          class="project-col reveal"
          :data-delay="(index % 2) * 100"
        >
          <div
            class="project-card"
            :class="isDark ? 'project-card-dark' : 'project-card-light'"
            @mousemove="onCardMove"
            @mouseleave="onCardLeave"
          >
            <!-- Media -->
            <div class="project-media">
              <img
                v-if="project.mediaType === 'image'"
                :src="project.mediaSrc"
                :alt="project.title"
                class="project-media-img"
              />
              <video
                v-else-if="project.mediaType === 'video'"
                :src="project.mediaSrc"
                class="project-media-img"
                muted
                loop
                playsinline
                @mouseenter="e => e.target.play()"
                @mouseleave="e => e.target.pause()"
              ></video>
              <div
                v-else-if="project.mediaType === 'gradient'"
                class="project-media-gradient"
                :style="{ background: `linear-gradient(135deg, ${project.accent}28 0%, ${project.accent}14 60%, transparent 100%)` }"
              >
                <div class="gradient-icon">
                  <v-icon x-large :color="project.accent">mdi-pencil-outline</v-icon>
                </div>
                <div class="gradient-title font-heading" :style="{ color: project.accent }">{{ project.title }}</div>
                <div class="gradient-sub">Visit live site</div>
              </div>

              <!-- Category badge -->
              <div class="project-badge-wrap">
                <span
                  class="project-badge"
                  :style="{
                    background: project.accent + '20',
                    color: project.accent,
                    borderColor: project.accent + '40'
                  }"
                >{{ project.category }}</span>
              </div>
            </div>

            <!-- Content -->
            <div class="project-content">
              <div class="project-header">
                <h3 class="project-title font-heading">{{ project.title }}</h3>
                <v-btn
                  icon
                  small
                  :color="project.link ? 'primary' : 'grey lighten-1'"
                  :title="project.linkLabel"
                  :disabled="!project.link"
                  :style="project.link ? 'cursor:pointer' : 'cursor:not-allowed'"
                  @click="project.link ? openLink(project.link) : null"
                >
                  <v-icon small>{{ project.link ? 'mdi-open-in-new' : 'mdi-lock-outline' }}</v-icon>
                </v-btn>
              </div>

              <p class="project-desc">{{ project.description }}</p>

              <div class="project-tags">
                <span
                  v-for="tag in project.tags"
                  :key="tag"
                  class="tech-tag"
                  :class="isDark ? 'tech-tag-dark' : 'tech-tag-light'"
                >{{ tag }}</span>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          title: "Wordsmith",
          description:
            "An AI-powered writing assistant designed to help you write better, faster, and more clearly. Distraction-free and built for people who take their words seriously.",
          category: "Live Product",
          accent: "#6366f1",
          mediaType: "gradient",
          mediaSrc: null,
          tags: ["Next.js", "AI", "TypeScript"],
          link: "https://www.wordsmith.page",
          linkLabel: "Visit Wordsmith"
        },
        {
          title: "Paw Search",
          description:
            "Founder and developer. A one-stop platform simplifying pet adoption across India — connecting adopters with shelters and breeders in their city.",
          category: "Startup",
          accent: "#f59e0b",
          mediaType: "image",
          mediaSrc: require("../assets/paw-search.gif"),
          tags: ["Next.js", "React", "PostgreSQL", "GCP"],
          link: "https://pawsearch.in/about",
          linkLabel: "Visit Paw Search"
        },
        {
          title: "Origa Labs",
          description:
            "A seamless web interface for an industrial machinery leasing platform. End-to-end dashboard for managing equipment, clients, and business workflows.",
          category: "Client Work",
          accent: "#8b5cf6",
          mediaType: "image",
          mediaSrc: require("../assets/origa-gif.gif"),
          tags: ["Vue", "Node.js", "Express", "MongoDB"],
          link: null,
          linkLabel: "Source code is private"
        },
        {
          title: "Real-Time Dashboard",
          description:
            "A live monitoring dashboard built for a client. Displays real-time KPIs, metrics, and alerts with smooth chart animations and instant updates.",
          category: "Client Work",
          accent: "#8b5cf6",
          mediaType: "image",
          mediaSrc: require("../assets/dashboard-gif.gif"),
          tags: ["Vue", "WebSocket", "Chart.js"],
          link: null,
          linkLabel: "Source code is private"
        },
        {
          title: "AR Website",
          description:
            "AR interface with video calling, image editor, and workflow designer — used to communicate with AR hardware in the field. Built with real-time sync.",
          category: "Innovative Tech",
          accent: "#06b6d4",
          mediaType: "image",
          mediaSrc: require("../assets/ar.gif"),
          tags: ["Vue", "Node.js", "Socket.io", "Docker"],
          link: "https://github.com/yash296/ar-website",
          linkLabel: "View on GitHub"
        },
        {
          title: "Quality Check Portal",
          description:
            "A QC and assurance portal for a manufacturing client. Streamlines quality inspections, defect tracking, and sign-off workflows across production lines.",
          category: "Client Work",
          accent: "#ef4444",
          mediaType: "image",
          mediaSrc: require("../assets/qc.gif"),
          tags: ["Vue", "Node.js", "Express", "MongoDB"],
          link: null,
          linkLabel: "Source code is private"
        },
        {
          title: "Packing Station",
          description:
            "Intelligent box tracking with barcode scanning. Manages packing workflows and lets teams search box contents and item values directly from the web.",
          category: "Open Source",
          accent: "#6b7280",
          mediaType: "video",
          mediaSrc: require("../assets/packingstation.mp4"),
          tags: ["Vue", "Node.js", "MongoDB", "Socket.io", "Docker"],
          link: "https://github.com/yash296/packing-station",
          linkLabel: "View on GitHub"
        },
        {
          title: "Project Boost",
          description:
            "A level-based puzzle game with realistic physics. Launch rockets through obstacles to reach the landing pad — simple premise, addictive gameplay.",
          category: "Game Dev",
          accent: "#f59e0b",
          mediaType: "video",
          mediaSrc: require("../assets/project-boost.mp4"),
          tags: ["Unity", "C#", "Game Physics"],
          link: "https://github.com/yash296/project-boost",
          linkLabel: "View on GitHub"
        },
        {
          title: "Photography Blog",
          description:
            "A clean, image-first blog for photographers. Features user accounts, photo uploads, albums, and a distraction-free reading experience.",
          category: "Side Project",
          accent: "#22c55e",
          mediaType: "image",
          mediaSrc: require("../assets/photography-blog.gif"),
          tags: ["Vue", "Node.js", "Express", "MongoDB"],
          link: "https://github.com/yash296/photographyBlog",
          linkLabel: "View on GitHub"
        },
        {
          title: "Dev Connector",
          description:
            "A social platform for developers to share portfolios, connect with peers, and post developer updates. Think LinkedIn but actually fun to use.",
          category: "Side Project",
          accent: "#06b6d4",
          mediaType: "video",
          mediaSrc: require("../assets/dev-connector.mp4"),
          tags: ["React", "Node.js", "Express", "MongoDB"],
          link: "https://github.com/yash296/DevConnector",
          linkLabel: "View on GitHub"
        }
      ]
    };
  },
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
      }, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });
      this.$el.querySelectorAll(".reveal").forEach(el => this._observer.observe(el));
    },
    onCardMove(e) {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const card = e.currentTarget;
      card.style.transition = "box-shadow 0.25s ease";
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(900px) rotateX(${-y * 4}deg) rotateY(${x * 4}deg) translateY(-5px)`;
    },
    onCardLeave(e) {
      const card = e.currentTarget;
      card.style.transition = "";
      card.style.transform = "";
    }
  }
};
</script>

<style scoped>
.portfolio-page {
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

/* Project grid */
.project-col {
  padding: 10px;
}

.project-card {
  border-radius: 18px;
  overflow: hidden;
  transition: transform 0.28s cubic-bezier(0.4, 0, 0.2, 1),
              box-shadow 0.28s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.project-card-light {
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.07);
  box-shadow: 0 2px 14px rgba(0, 0, 0, 0.055);
}

.project-card-dark {
  background: #16161f;
  border: 1px solid rgba(255, 255, 255, 0.055);
  box-shadow: 0 2px 14px rgba(0, 0, 0, 0.28);
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.14) !important;
}

.project-card-dark:hover {
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.4) !important;
}

/* Media */
.project-media {
  position: relative;
  overflow: hidden;
  background: #000;
}

.project-media-img {
  width: 100%;
  height: 210px;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;
}

.project-card:hover .project-media-img {
  transform: scale(1.04);
}

/* Gradient placeholder */
.project-media-gradient {
  width: 100%;
  height: 210px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.gradient-icon {
  opacity: 0.7;
}

.gradient-title {
  font-family: 'Space Grotesk', sans-serif !important;
  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: -0.03em;
}

.gradient-sub {
  font-size: 0.75rem;
  opacity: 0.45;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.project-badge-wrap {
  position: absolute;
  top: 11px;
  right: 11px;
}

.project-badge {
  display: inline-block;
  padding: 3px 10px;
  border-radius: 100px;
  font-size: 0.68rem;
  font-weight: 700;
  font-family: 'Space Grotesk', sans-serif;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  border: 1px solid;
  backdrop-filter: blur(6px);
}

/* Card content */
.project-content {
  padding: 1.1rem 1.2rem 1.2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.project-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.project-title {
  font-family: 'Space Grotesk', sans-serif !important;
  font-size: 1.08rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.3;
  flex: 1;
  margin-right: 8px;
}

.project-desc {
  font-size: 0.845rem;
  line-height: 1.65;
  opacity: 0.65;
  margin-bottom: 1rem;
  flex: 1;
}

/* Tags */
.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: auto;
}

.tech-tag {
  display: inline-block;
  padding: 3px 9px;
  border-radius: 6px;
  font-size: 0.7rem;
  font-weight: 600;
  font-family: 'Space Grotesk', sans-serif;
  letter-spacing: 0.01em;
}

.tech-tag-light {
  background: rgba(99, 102, 241, 0.08);
  color: #6366f1;
}

.tech-tag-dark {
  background: rgba(129, 140, 248, 0.13);
  color: #a5b4fc;
}

/* Responsive */
@media (max-width: 960px) {
  .section-header {
    padding: 3.5rem 0 2rem;
    text-align: left;
  }
}
</style>
