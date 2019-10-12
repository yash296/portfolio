<template>
  <v-footer padless :dark="color == 'dark'? true:false">
    <v-col class="text-center" cols="12">
      <div>
        <v-btn fab small title="GitHub" icon @click="openInNewTab('https://github.com/yash296')">
          <v-icon>mdi-github-box</v-icon>
        </v-btn>
        <v-btn fab small title="Email" icon @click="openInNewTab('mailto:wanvari.yash@gmail.com')">
          <v-icon>mdi-email</v-icon>
        </v-btn>
      </div>
      <div>
        <v-icon>mdi-copyright</v-icon>
        {{ new Date().getFullYear() }}
        <strong>Yash Wanvari</strong>
      </div>
    </v-col>
  </v-footer>
</template>

<script>
export default {
  computed: {
    color() {
      return this.$store.getters.getColor;
    }
  },
  methods: {
    openInNewTab(link) {
      window.open(link);
    }
  }
};
</script>