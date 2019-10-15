<template>
  <div>
    <v-app-bar :dark="color=='dark' ? true:false" app :elevate-on-scroll="true">
      <v-app-bar-nav-icon class="d-flex d-md-none" @click="drawer =true"></v-app-bar-nav-icon>
      <div class="flex-grow-1 d-flex d-md-none"></div>

      <v-toolbar-title style="padding-top:10px">
        <v-img
          v-if="color=='dark'"
          src="../assets/ywDark.png"
          height="120"
          width="145"
          aspect-ratio="1"
          style="cursor:pointer"
          @click="openInNewTab('https://github.com/yash296/portfolio')"
        ></v-img>
        <v-img
          v-else
          @click="openInNewTab('https://github.com/yash296/portfolio')"
          style="cursor:pointer"
          src="../assets/ywLight.png"
          height="120"
          width="145"
          aspect-ratio="1"
        ></v-img>
      </v-toolbar-title>
      <div class="flex-grow-1 d-none d-md-flex"></div>
      <v-btn text small class="d-none d-md-flex" to="/">About</v-btn>
      <v-btn text small class="d-none d-md-flex" to="/portfolio">Portfolio</v-btn>
      <v-btn text small class="d-none d-md-flex" to="/skills">Skills</v-btn>
      <div class="flex-grow-1"></div>
      <div style="width:145px" class="d-none d-md-flex">
        <v-row no-gutters justify="end">
          <v-btn
            :title="SwitchColor == false?'Switch to light theme':'Switch to dark theme'"
            depressed
            small
            fab
            text
            @click="SwitchColor = !SwitchColor"
          >
            <v-icon>mdi-invert-colors</v-icon>
          </v-btn>
        </v-row>
      </div>
      <div class="d-flex d-md-none">
        <v-btn
          :title="SwitchColor == false?'Switch to light theme':'Switch to dark theme'"
          depressed
          small
          fab
          text
          @click="SwitchColor = !SwitchColor"
        >
          <v-icon>mdi-invert-colors</v-icon>
        </v-btn>
      </div>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app bottom temporary :dark="color=='dark' ? true:false">
      <v-list nav>
        <v-list-item-group>
          <v-list-item to="/">
            <v-list-item-title>About</v-list-item-title>
          </v-list-item>
          <v-list-item to="/portfolio">
            <v-list-item-title>Portfolio</v-list-item-title>
          </v-list-item>
          <v-list-item to="/skills">
            <v-list-item-title>Skills</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    SwitchColor: false,
    drawer: false
  }),
  methods: {
    openInNewTab(link) {
      window.open(link);
    }
  },
  computed: {
    color() {
      return this.$store.getters.getColor;
    }
  },
  watch: {
    SwitchColor(newValue) {
      if (newValue) {
        this.$store.dispatch("changeColor", "dark");
      } else {
        this.$store.dispatch("changeColor", "light");
      }
    }
  }
};
</script>