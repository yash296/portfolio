import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: "#6366f1",
        secondary: "#6366f1",
        accent: "#f59e0b",
        error: "#ef4444",
        info: "#3b82f6",
        success: "#22c55e",
        warning: "#f59e0b"
      },
      dark: {
        primary: "#818cf8",
        secondary: "#818cf8",
        accent: "#fbbf24",
        error: "#f87171",
        info: "#60a5fa",
        success: "#4ade80",
        warning: "#fbbf24"
      }
    }
  },
  icons: {
    iconfont: "mdi"
  }
});
