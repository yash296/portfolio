<template>
  <div class="portfolio-page">
    <!-- Section masthead -->
    <div class="section-header">
      <v-container>
        <div class="mast-row">
          <span class="editorial-eyebrow reveal" data-delay="0">CHAPTER 03 &middot; SELECTED WORKS</span>
          <hr class="editorial-rule reveal" data-delay="30" />
        </div>
        <h1 class="section-title font-display reveal" data-delay="80">
          Selected works<span class="period">.</span>
        </h1>
        <p class="section-desc font-serif reveal" data-delay="150">
          From quick side projects to full production systems &mdash; the work,
          shown without varnish. Each entry links to the live site or the source,
          where it's mine to share.
        </p>
      </v-container>
    </div>

    <!-- Project index -->
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
          <article
            class="project-card"
            :class="isDark ? 'project-card-dark' : 'project-card-light'"
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

              <!-- Category eyebrow over image -->
              <span class="project-badge font-mono">{{ project.category }}</span>
            </div>

            <!-- Content -->
            <div class="project-content">
              <div class="project-meta font-mono">
                <span>ENTRY &middot; {{ String(index + 1).padStart(2, '0') }}</span>
                <span class="project-meta-rule"></span>
                <span>{{ project.year || '2024' }}</span>
              </div>

              <div class="project-header">
                <h3 class="project-title font-display">{{ project.title }}<span class="period">.</span></h3>
                <button
                  class="project-link-btn"
                  :class="{ disabled: !project.link }"
                  :title="project.linkLabel"
                  :disabled="!project.link"
                  @click="project.link ? openLink(project.link) : null"
                  type="button"
                  aria-label="Open project"
                >
                  <v-icon small>{{ project.link ? 'mdi-arrow-top-right' : 'mdi-lock-outline' }}</v-icon>
                </button>
              </div>

              <p class="project-desc font-serif">{{ project.description }}</p>

              <div class="project-tags">
                <span
                  v-for="tag in project.tags"
                  :key="tag"
                  class="tech-tag font-mono"
                >{{ tag }}</span>
              </div>
            </div>
          </article>
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
            "An AI editorial system that proofreads, copy-edits, and developmentally edits long-form writing — paragraph by paragraph, never silently. Nothing changes unless the writer says yes.",
          category: "STARTUP · LIVE",
          year: "2026",
          mediaType: "image",
          mediaSrc: require("../assets/wordsmith.png"),
          tags: ["Next.js", "AI", "TypeScript"],
          link: "https://www.wordsmith.page",
          linkLabel: "Visit Wordsmith"
        },
        {
          title: "ythopper",
          description:
            "Drop in a YouTube link or podcast and ask what you want to learn — ythopper edits the long-form down to a tight reel of only the moments that answer you, bridges and all, in the speaker's own voice.",
          category: "STARTUP · LIVE",
          year: "2026",
          mediaType: "image",
          mediaSrc: require("../assets/ythopper.png"),
          tags: ["Next.js", "AI", "Whisper", "Chrome Extension"],
          link: "https://www.ythopper.com/",
          linkLabel: "Visit ythopper"
        },
        {
          title: "Claude Terminal",
          description:
            "A desktop workspace that pairs a code viewer with an embedded Claude CLI — stage code selections, dropped images, and file references, then hand them to Claude without ever leaving the window.",
          category: "OPEN SOURCE",
          year: "2026",
          mediaType: "image",
          mediaSrc: require("../assets/claude-terminal.png"),
          tags: ["Electron", "React", "TypeScript", "Tailwind"],
          link: "https://github.com/yash296/claude-terminal",
          linkLabel: "View on GitHub"
        },
        {
          title: "Paw Search",
          description:
            "Founder and developer. A one-stop platform simplifying pet adoption across India — connecting adopters with shelters and breeders in their city.",
          category: "NON-PROFIT · LIVE",
          year: "2024",
          mediaType: "image",
          mediaSrc: require("../assets/paw-search.gif"),
          tags: ["Next.js", "React", "PostgreSQL", "GCP"],
          link: "https://pawsearch.in/about",
          linkLabel: "Visit Paw Search"
        },
        {
          title: "Lazy Sloth",
          description:
            "A direct-to-consumer storefront for a loungewear brand — \"high-performance loungewear for low-performance days.\" Custom catalog, cart, and checkout flow.",
          category: "CLIENT · LIVE",
          year: "2024",
          mediaType: "image",
          mediaSrc: require("../assets/lazysloth.png"),
          tags: ["Next.js", "React", "E-commerce"],
          link: "https://www.lazysloth.in/",
          linkLabel: "Visit Lazy Sloth"
        },
        {
          title: "Origa Labs",
          description:
            "A seamless web interface for an industrial machinery leasing platform. End-to-end dashboard for managing equipment, clients, and business workflows.",
          category: "CLIENT · PRIVATE",
          year: "2023",
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
          category: "CLIENT · PRIVATE",
          year: "2023",
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
          category: "R&D · OPEN SOURCE",
          year: "2022",
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
          category: "CLIENT · PRIVATE",
          year: "2022",
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
          category: "OPEN SOURCE",
          year: "2021",
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
          category: "GAME · OPEN SOURCE",
          year: "2021",
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
          category: "SIDE PROJECT",
          year: "2020",
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
          category: "SIDE PROJECT",
          year: "2020",
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
    }
  }
};
</script>

<style scoped>
.portfolio-page {
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

/* Project grid */
.project-col {
  padding: 12px;
}

.project-card {
  border-radius: 4px;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: var(--paper);
  border: 1px solid var(--rule);
  transition: border-color 0.25s ease, transform 0.28s cubic-bezier(0.4, 0, 0.2, 1),
              box-shadow 0.28s ease;
}

.project-card-light {
  background: var(--paper);
}

.project-card-dark {
  background: var(--paper-warm);
}

.project-card:hover {
  border-color: var(--text-muted);
  transform: translateY(-3px);
}

/* Media */
.project-media {
  position: relative;
  overflow: hidden;
  background: var(--paper-warm);
}

.project-media-img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease, filter 0.4s ease;
  filter: grayscale(0.1) contrast(1.02);
}

.project-card:hover .project-media-img {
  transform: scale(1.025);
  filter: grayscale(0) contrast(1);
}

.project-badge {
  position: absolute;
  top: 12px;
  left: 12px;
  display: inline-block;
  padding: 4px 10px;
  background: var(--paper);
  color: var(--text);
  font-size: 0.62rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  border: 1px solid var(--rule);
  border-radius: 2px;
}

/* Card content */
.project-content {
  padding: 18px 22px 22px;
  flex: 1;
  display: flex;
  flex-direction: column;
  border-top: 1px solid var(--rule-soft);
}

.project-meta {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.6rem;
  letter-spacing: 0.16em;
  color: var(--text-soft);
  margin-bottom: 10px;
  text-transform: uppercase;
}

.project-meta-rule {
  flex: 1;
  height: 1px;
  background: var(--rule);
  max-width: 60px;
}

.project-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 0.6rem;
  gap: 8px;
}

.project-title {
  font-family: var(--font-serif) !important;
  font-size: 1.55rem;
  font-weight: 500;
  letter-spacing: -0.022em;
  line-height: 1.15;
  color: var(--text);
  flex: 1;
  margin: 0;
}

.project-link-btn {
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: transparent;
  border: 1px solid var(--rule);
  color: var(--text);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.18s ease, color 0.18s ease, border-color 0.18s ease;
  outline: none;
}

.project-link-btn:hover:not(:disabled) {
  background: var(--text);
  color: var(--paper);
  border-color: var(--text);
}

.project-link-btn:focus-visible {
  border-color: var(--suggest-fg);
  box-shadow: 0 0 0 2px var(--suggest-bg);
}

.project-link-btn.disabled,
.project-link-btn:disabled {
  color: var(--text-soft);
  cursor: not-allowed;
}

.project-desc {
  font-family: var(--font-serif) !important;
  font-size: 0.96rem;
  line-height: 1.6;
  color: var(--text-muted);
  margin-bottom: 1rem;
  flex: 1;
  letter-spacing: -0.002em;
}

/* Tags */
.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: auto;
}

.tech-tag {
  display: inline-block;
  padding: 3px 8px;
  border-radius: 2px;
  font-size: 0.64rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  background: transparent;
  color: var(--text-soft);
  border: 1px solid var(--rule);
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
  .project-col {
    padding: 8px 0;
  }
  .project-content {
    padding: 16px 18px 18px;
  }
  .project-title {
    font-size: 1.35rem;
  }
  .project-desc {
    font-size: 0.94rem;
    line-height: 1.55;
  }
  .project-media-img {
    height: 180px;
  }
}
</style>
