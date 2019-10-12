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
        ></v-img>
        <v-img v-else src="../assets/ywLight.png" height="120" width="145" aspect-ratio="1"></v-img>
      </v-toolbar-title>
      <div class="flex-grow-1 d-none d-md-flex"></div>
      <v-btn text small class="d-none d-md-flex">About</v-btn>
      <v-btn text small class="d-none d-md-flex">Portfolio</v-btn>
      <v-btn text small class="d-none d-md-flex">Skills</v-btn>
      <v-btn text small class="d-none d-md-flex">Contact</v-btn>
      <div class="flex-grow-1"></div>

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
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app bottom temporary :dark="color=='dark' ? true:false">
      <v-list nav>
        <v-list-item-group>
          <v-list-item>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Portfolio</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Skills</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Contact</v-list-item-title>
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
  computed: {
    color() {
      return this.$store.getters.getColor;
    }
  },
  watch: {
    SwitchColor(newValue) {
      if (newValue) {
        this.$store.dispatch("changeColor", "light");
      } else {
        this.$store.dispatch("changeColor", "dark");
      }
    }
  }
};
</script>