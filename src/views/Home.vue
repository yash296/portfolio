<template>
  <v-container>
    <v-card tile>
      <v-img dark src="../assets/profile.jpg">
        <v-row
          align="center"
          justify="center"
          :class="color == 'dark'? 'fill-height dark-gradient' : 'fill-height light-gradient'"
          style="color:#fff"
        >
          <h1 class="display-2 d-none d-md-flex font-weight-light mt-4">Full-Stack Developer</h1>
          <h2 class="d-flex d-md-none headline font-weight-light mt-4">Full-Stack Developer</h2>
          <h4 class="subheading">YASH WANVARI</h4>
        </v-row>
      </v-img>
    </v-card>
  </v-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  components: {},
  computed: {
    color() {
      return this.$store.getters.getColor;
    }
  }
};
</script>

<style >
.dark-gradient {
  background-image: repeating-linear-gradient(
    45deg,
    rgba(255, 0, 0, 0.171) 5px,
    rgba(104, 104, 143, 0.171) 10px,
    rgba(255, 0, 0, 0.185),
    rgba(112, 173, 243, 0.158) 5px
  );
}
.light-gradient {
  background-image: repeating-linear-gradient(
    -45deg,
    rgba(104, 104, 143, 0.171) 5px,
    rgba(112, 173, 243, 0.158) 10px,
    rgba(255, 0, 0, 0.185),
    rgba(255, 0, 0, 0.171) 5px
  );
}
</style>