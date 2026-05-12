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
        primary: "#0B0F17",
        secondary: "#0D1320",
        accent: "#173B2E",
        error: "#7A1F1F",
        info: "#0D1320",
        success: "#173B2E",
        warning: "#7A1F1F"
      },
      dark: {
        primary: "#E8EDF6",
        secondary: "#FFFFFF",
        accent: "#B8E6C2",
        error: "#E8B4B4",
        info: "#E8EDF6",
        success: "#B8E6C2",
        warning: "#E8B4B4"
      }
    }
  },
  icons: {
    iconfont: "mdi"
  }
});
