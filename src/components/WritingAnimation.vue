<template>
  <div class="suggestion-frame" :class="isDark ? 'frame-dark' : 'frame-light'">
    <!-- Editorial header -->
    <div class="frame-header">
      <span class="frame-tag font-mono">
        <span class="dot"></span>
        MANUSCRIPT · CH 01 · ¶ {{ paragraphLabel }} / 04
      </span>
      <span class="frame-mode font-mono">{{ currentMode }}</span>
    </div>

    <hr class="frame-rule" />

    <!-- Manuscript body -->
    <div class="manuscript">
      <!-- Accepted paragraphs -->
      <p
        v-for="(s, i) in accepted"
        :key="'acc-' + i + '-' + cycleKey"
        class="ms-line is-accepted"
      >
        <span class="ms-num font-mono">¶ {{ String(i + 1).padStart(2, '0') }}</span>
        <span class="ms-text">
          <span>{{ s.prefix }}</span><span class="ms-old">{{ s.old }}</span><span class="ms-new">{{ s.new }}</span><span>{{ s.suffix }}</span>
        </span>
      </p>

      <!-- Currently editing paragraph -->
      <p v-if="!complete" class="ms-line is-active">
        <span class="ms-num font-mono">¶ {{ paragraphLabel }}</span>
        <span class="ms-text">
          <span>{{ currentPrefix }}</span><span class="body-old" :class="{ struck: struck, gone: gone }">{{ typedOld }}<span v-if="typingOld" class="caret">|</span></span><span v-if="showNew" class="body-new">{{ typedNew }}<span v-if="typingNew" class="caret caret-new">|</span></span><span v-if="showSuffix">{{ currentSuffix }}</span>
        </span>
      </p>

      <!-- Upcoming paragraph hints -->
      <p
        v-for="i in upcomingCount"
        :key="'upcoming-' + i + '-' + cycleKey"
        class="ms-line is-upcoming"
      >
        <span class="ms-num font-mono">¶ {{ formattedUpcomingNum(i) }}</span>
        <span class="ms-text upcoming-text">{{ upcomingPreview[i - 1] }}</span>
      </p>
    </div>

    <!-- Editor's note — always rendered to reserve space, fades on/off -->
    <div class="frame-note font-mono" :class="{ 'is-visible': !!currentNote }">
      <span class="note-rule"></span>
      <span class="note-text">{{ currentNote || '—' }}</span>
    </div>

    <!-- Action affordances -->
    <div class="frame-actions">
      <button
        class="action-btn action-accept"
        :class="{ visible: showActions, flash: acceptedFlash }"
        type="button"
        @click="skipToNext"
        aria-label="Accept suggestion"
      >Accept</button>
      <button
        class="action-btn action-reject"
        :class="{ visible: showActions }"
        type="button"
        @click="skipToNext"
        aria-label="Reject suggestion"
      >Reject</button>
      <button
        class="action-btn action-explain"
        :class="{ visible: showActions }"
        type="button"
        @click="skipToNext"
        aria-label="Explain suggestion"
      >Explain</button>
      <span class="action-spacer"></span>
      <span class="action-hint font-mono" v-show="!showActions && phase">
        <span class="hint-dot"></span>
        <span>{{ phase }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "WritingAnimation",
  data() {
    return {
      index: 0,
      cycleKey: 0,
      suggestions: [
        {
          prefix: "I'm a developer who ",
          old: "makes websites",
          new: "ships production systems",
          suffix: ".",
          mode: "COPY-EDIT",
          note: "verb stronger; specificity over generic"
        },
        {
          prefix: "Currently building ",
          old: "an AI thing for writers",
          new: "Wordsmith — an editor that proofreads, never silently",
          suffix: ".",
          mode: "LINE EDIT",
          note: "say what it does; trust the reader"
        },
        {
          prefix: "I lead teams and ",
          old: "do the technical stuff",
          new: "ship products from zero to production",
          suffix: ".",
          mode: "COPY-EDIT",
          note: "cut the hedge; lead with the verb"
        },
        {
          prefix: "On the side I run ",
          old: "a side project for pets",
          new: "Paw Search — making pet adoption easier across India",
          suffix: ".",
          mode: "DEVELOP",
          note: "name the work; name the scope"
        }
      ],
      upcomingPreview: [
        "Currently building …",
        "I lead teams and …",
        "On the side I run …",
        ""
      ],
      paragraphLabel: "01",
      currentMode: "COPY-EDIT",
      currentPrefix: "",
      currentSuffix: "",
      currentNote: "",
      typedOld: "",
      typedNew: "",
      typingOld: false,
      typingNew: false,
      struck: false,
      gone: false,
      showNew: false,
      showSuffix: false,
      showActions: false,
      acceptedFlash: false,
      complete: false,
      accepted: [],
      phase: "Reading…",
      cancelled: false,
      timerIds: [],
      kickoffId: null
    };
  },
  computed: {
    isDark() {
      return this.$store.getters.getColor === "dark";
    },
    upcomingCount() {
      if (this.complete) return 0;
      const left = this.suggestions.length - this.index - 1;
      return Math.max(0, left);
    }
  },
  mounted() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      this.renderStaticState();
      return;
    }
    this.kickoffId = setTimeout(() => this.runLoop(), 400);
  },
  beforeDestroy() {
    this.cancelled = true;
    if (this.kickoffId) clearTimeout(this.kickoffId);
    this.timerIds.forEach(clearTimeout);
  },
  methods: {
    formattedUpcomingNum(offset) {
      return String(this.index + offset + 1).padStart(2, "0");
    },
    wait(ms) {
      return new Promise(resolve => {
        const id = setTimeout(resolve, ms);
        this.timerIds.push(id);
      });
    },
    typeOld(text, baseSpeed) {
      return this._type(text, baseSpeed, "old");
    },
    typeNew(text, baseSpeed) {
      return this._type(text, baseSpeed, "new");
    },
    _type(text, baseSpeed, which) {
      return new Promise(resolve => {
        if (which === "old") this.typingOld = true;
        else this.typingNew = true;
        let i = 0;
        const step = () => {
          if (this.cancelled) {
            if (which === "old") this.typingOld = false;
            else this.typingNew = false;
            resolve();
            return;
          }
          const sliced = text.slice(0, i);
          if (which === "old") this.typedOld = sliced;
          else this.typedNew = sliced;
          if (i >= text.length) {
            if (which === "old") this.typingOld = false;
            else this.typingNew = false;
            resolve();
            return;
          }
          i += 1;
          const jitter = (Math.random() * 28) | 0;
          const id = setTimeout(step, baseSpeed + jitter);
          this.timerIds.push(id);
        };
        step();
      });
    },
    async runCycle(s) {
      this.currentMode = s.mode;
      this.currentPrefix = s.prefix;
      this.currentSuffix = s.suffix;
      this.currentNote = "";
      this.typedOld = "";
      this.typedNew = "";
      this.showNew = false;
      this.showSuffix = false;
      this.showActions = false;
      this.struck = false;
      this.gone = false;
      this.acceptedFlash = false;

      this.phase = "Reading the paragraph…";
      await this.typeOld(s.old, 38);
      if (this.cancelled) return;
      this.showSuffix = true;
      await this.wait(500);
      if (this.cancelled) return;

      this.phase = "Drafting suggestion…";
      this.currentNote = s.note;
      await this.wait(420);
      if (this.cancelled) return;

      this.struck = true;
      await this.wait(520);
      if (this.cancelled) return;

      this.showNew = true;
      await this.typeNew(s.new, 30);
      if (this.cancelled) return;

      this.phase = "";
      await this.wait(260);
      this.showActions = true;
      await this.wait(1700);
      if (this.cancelled) return;

      this.acceptedFlash = true;
      await this.wait(360);
      if (this.cancelled) return;
    },
    async runLoop() {
      while (!this.cancelled) {
        this.complete = false;
        const s = this.suggestions[this.index];
        this.paragraphLabel = String(this.index + 1).padStart(2, "0");
        await this.runCycle(s);
        if (this.cancelled) return;

        const isLast = this.index === this.suggestions.length - 1;

        // Push to accepted AND advance index in the same synchronous tick so
        // Vue commits a single DOM update — no duplicate paragraph rendered
        // between push and the next runCycle clearing active state.
        const acceptedEntry = {
          prefix: s.prefix,
          old: s.old,
          new: s.new,
          suffix: s.suffix
        };

        if (isLast) {
          // Final paragraph — push and mark complete so active is hidden
          this.accepted.push(acceptedEntry);
          this.showActions = false;
          this.currentNote = "";
          this.complete = true;
          this.phase = "Manuscript finished. Resetting…";
          await this.wait(2400);
          if (this.cancelled) return;
          this.resetManuscript();
        } else {
          // Atomic transition: push + advance + clear active state, then the
          // next iteration of runCycle will synchronously set the new prefix
          // and reset typing fields before Vue paints.
          this.accepted.push(acceptedEntry);
          this.index += 1;
          this.showActions = false;
          this.currentNote = "";
          // Pre-clear typing state so the brand-new active row renders fresh
          // in the same tick the accepted entry is committed.
          this.typedOld = "";
          this.typedNew = "";
          this.typingOld = false;
          this.typingNew = false;
          this.struck = false;
          this.gone = false;
          this.acceptedFlash = false;
          this.showNew = false;
          this.showSuffix = false;
        }
      }
    },
    resetManuscript() {
      this.accepted = [];
      this.index = 0;
      this.cycleKey += 1;
      this.complete = false;
    },
    skipToNext() {
      this.timerIds.forEach(clearTimeout);
      this.timerIds = [];
      this.cancelled = true;
      const wasLast = this.index === this.suggestions.length - 1;
      const wasIdx = this.index;
      this.$nextTick(() => {
        this.cancelled = false;
        if (wasLast) {
          this.resetManuscript();
        } else {
          const s = this.suggestions[wasIdx];
          this.accepted.push({ prefix: s.prefix, old: s.old, new: s.new, suffix: s.suffix });
          this.index = wasIdx + 1;
        }
        this.runLoop();
      });
    },
    renderStaticState() {
      this.accepted = this.suggestions.map(s => ({
        prefix: s.prefix,
        old: s.old,
        new: s.new,
        suffix: s.suffix
      }));
      this.complete = true;
      this.paragraphLabel = "04";
      this.phase = "";
    }
  }
};
</script>

<style scoped>
.suggestion-frame {
  position: relative;
  width: 100%;
  max-width: 620px;
  padding: 22px 26px 18px;
  border-radius: 6px;
  font-family: var(--font-serif);
  transition: background 0.25s ease, border-color 0.25s ease;
}

.frame-light,
.frame-dark {
  background: var(--paper-warm);
  border: 1px solid var(--rule);
}

.frame-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.66rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--text-soft);
  margin-bottom: 12px;
  flex-wrap: wrap;
  gap: 8px;
}

.frame-tag {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;
}

.frame-mode {
  font-weight: 600;
  color: var(--text-muted);
}

.dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--suggest-fg);
  display: inline-block;
  animation: pulse-dot 2.4s ease-in-out infinite;
}

@keyframes pulse-dot {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.35; transform: scale(0.85); }
}

.frame-rule {
  border: 0;
  border-top: 1px solid var(--rule-soft);
  margin: 0 0 14px;
}

.manuscript {
  font-family: var(--font-serif);
  font-size: clamp(0.97rem, 1.7vw, 1.08rem);
  line-height: 1.65;
  color: var(--text);
  letter-spacing: -0.005em;
  /* lock the manuscript area's height so the frame doesn't grow/shrink
     as paragraphs are accepted, upcoming, or actively typing */
  min-height: 17em;
}

.ms-line {
  display: grid;
  grid-template-columns: 44px 1fr;
  gap: 14px;
  margin: 0 0 10px;
  padding: 4px 0;
  align-items: baseline;
  transition: opacity 0.4s ease;
  /* each row reserves 2 wrapped lines of serif body so the manuscript
     doesn't jump when a 1-line "upcoming …" placeholder becomes a
     2-line accepted paragraph */
  min-height: 4em;
}

.ms-line:last-child {
  margin-bottom: 0;
}

.ms-num {
  font-size: 0.66rem;
  letter-spacing: 0.08em;
  color: var(--text-soft);
  font-weight: 500;
  padding-top: 4px;
}

.ms-text {
  display: block;
}

/* Accepted paragraphs */
.is-accepted {
  opacity: 0.86;
  animation: accept-settle 0.5s ease both;
}

@keyframes accept-settle {
  from { opacity: 0; transform: translateY(-4px); }
  to   { opacity: 0.86; transform: translateY(0); }
}

.is-accepted .ms-old {
  color: var(--strike);
  text-decoration: line-through;
  text-decoration-color: var(--strike);
  text-decoration-thickness: 1px;
  margin-right: 0.3ch;
}

.is-accepted .ms-new {
  background: var(--suggest-bg);
  color: var(--suggest-ink);
  padding: 0.04em 0.28em;
  border-radius: 2px;
  font-style: italic;
}

/* Active paragraph */
.is-active {
  color: var(--text);
}

.body-old {
  display: inline;
  position: relative;
  color: var(--text);
  transition: color 0.45s ease, opacity 0.5s ease;
}

.body-old.struck {
  color: var(--strike);
}

.body-old.struck::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 52%;
  height: 1.5px;
  background: var(--strike);
  transform-origin: left center;
  animation: strike 0.45s cubic-bezier(0.45, 0.05, 0.2, 1) forwards;
}

@keyframes strike {
  from { transform: scaleX(0); }
  to   { transform: scaleX(1); }
}

.body-old.gone {
  opacity: 0;
}

.body-new {
  display: inline;
  margin-left: 0.4ch;
  padding: 0.04em 0.28em;
  background: var(--suggest-bg);
  color: var(--suggest-ink);
  border-radius: 2px;
  animation: flip-in 0.5s cubic-bezier(0.2, 0, 0, 1.05) both;
  transform-origin: left center;
  font-style: italic;
}

@keyframes flip-in {
  0% {
    opacity: 0;
    transform: perspective(600px) rotateX(-90deg) translateY(-3px);
  }
  60% {
    opacity: 1;
    transform: perspective(600px) rotateX(10deg) translateY(0);
  }
  100% {
    opacity: 1;
    transform: perspective(600px) rotateX(0deg);
  }
}

.caret {
  display: inline-block;
  width: 1px;
  margin-left: 1px;
  color: var(--text);
  font-weight: 400;
  animation: blink 1.05s steps(1, end) infinite;
  font-style: normal;
}

.caret-new {
  color: var(--suggest-ink);
}

@keyframes blink {
  0%, 50%  { opacity: 1; }
  51%, 100% { opacity: 0; }
}

/* Upcoming placeholders */
.is-upcoming {
  opacity: 0.32;
}

.upcoming-text {
  color: var(--text-soft);
  font-style: italic;
}

/* Editor's note — always present, fades in/out so the frame keeps its height */
.frame-note {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-top: 10px;
  margin-left: 58px;
  font-size: 0.7rem;
  letter-spacing: 0.03em;
  color: var(--text-soft);
  min-height: 1.6em;
  opacity: 0;
  transform: translateX(-4px);
  transition: opacity 0.32s ease, transform 0.32s ease;
}

.frame-note.is-visible {
  opacity: 1;
  transform: translateX(0);
}

.note-rule {
  display: inline-block;
  width: 14px;
  height: 1px;
  background: var(--text-soft);
  margin-top: 8px;
  flex-shrink: 0;
}

/* Actions */
.frame-actions {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 14px;
  margin-left: 58px;
  min-height: 32px;
}

.action-btn {
  font-family: var(--font-sans);
  font-size: 0.74rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  padding: 6px 14px;
  border-radius: 3px;
  border: 1px solid transparent;
  background: transparent;
  cursor: pointer;
  opacity: 0;
  transform: translateY(4px);
  transition: opacity 0.32s ease, transform 0.32s ease,
              background 0.18s ease, color 0.18s ease, border-color 0.18s ease;
  outline: none;
}

.action-btn.visible {
  opacity: 1;
  transform: translateY(0);
}

.action-btn:focus-visible {
  box-shadow: 0 0 0 2px var(--suggest-fg);
}

.action-accept {
  background: var(--suggest-ink);
  color: var(--paper);
  border-color: var(--suggest-ink);
}

.frame-dark .action-accept {
  background: var(--suggest-fg);
  color: var(--suggest-ink);
  border-color: var(--suggest-fg);
}

.action-accept:hover {
  background: var(--suggest-fg);
  color: var(--suggest-ink);
}

.action-accept.flash {
  animation: accept-flash 0.34s ease;
}

@keyframes accept-flash {
  0%   { box-shadow: 0 0 0 0 var(--suggest-fg); }
  60%  { box-shadow: 0 0 0 8px transparent; }
  100% { box-shadow: 0 0 0 0 transparent; }
}

.action-reject,
.action-explain {
  color: var(--text-muted);
  border-color: var(--rule);
}

.action-reject:hover,
.action-explain:hover {
  color: var(--text);
  border-color: var(--text-muted);
}

.action-explain {
  border-color: transparent;
}

.action-reject  { transition-delay: 0.04s; }
.action-explain { transition-delay: 0.08s; }

.action-spacer {
  flex: 1;
}

.action-hint {
  font-size: 0.62rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--text-soft);
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.hint-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--text-soft);
  animation: hint-pulse 1.4s ease-in-out infinite;
}

@keyframes hint-pulse {
  0%, 100% { opacity: 0.4; }
  50%      { opacity: 1; }
}

@media (max-width: 600px) {
  .suggestion-frame {
    padding: 16px 14px 14px;
    border-radius: 4px;
  }
  .frame-header {
    font-size: 0.6rem;
    letter-spacing: 0.11em;
    margin-bottom: 10px;
    row-gap: 4px;
  }
  .frame-tag {
    gap: 6px;
  }
  .ms-line {
    grid-template-columns: 30px 1fr;
    gap: 8px;
    padding: 2px 0;
    margin: 0 0 8px;
    /* mobile wraps more — reserve up to 3 lines of body text per paragraph */
    min-height: 5.2em;
  }
  .manuscript {
    font-size: 0.94rem;
    line-height: 1.55;
    min-height: 22em;
  }
  .ms-num {
    font-size: 0.6rem;
    padding-top: 3px;
  }
  .frame-note,
  .frame-actions {
    margin-left: 38px;
  }
  .frame-actions {
    flex-wrap: wrap;
    gap: 6px;
  }
  .action-hint {
    font-size: 0.56rem;
    letter-spacing: 0.1em;
  }
  .action-btn {
    font-size: 0.7rem;
    padding: 5px 10px;
  }
  .frame-note {
    font-size: 0.66rem;
    min-height: 2em;
  }
}

@media (max-width: 380px) {
  .suggestion-frame {
    padding: 14px 12px 12px;
  }
  .ms-line {
    grid-template-columns: 26px 1fr;
    gap: 6px;
    min-height: 6em;
  }
  .frame-note,
  .frame-actions {
    margin-left: 32px;
  }
  .manuscript {
    font-size: 0.9rem;
    min-height: 24em;
  }
}

@media (prefers-reduced-motion: reduce) {
  .body-old.struck::after,
  .body-new,
  .note-text,
  .action-btn,
  .dot,
  .hint-dot,
  .is-accepted {
    animation: none !important;
  }
}
</style>
