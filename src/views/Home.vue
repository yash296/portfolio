<template>
  <v-container fluid class="pa-0">
    <v-card tile>
      <transition name="fade" mode="out-in">
        <v-img dark src="../assets/profile.jpg">
          <v-row
            align="center"
            justify="center"
            :class="color == 'dark'? 'fill-height dark-gradient' : 'fill-height light-gradient'"
            style="color:rgba(240, 240, 255, 0.9)"
          >
            <transition name="fade" mode="out-in">
              <h1 class="display-4 d-none d-md-flex font-weight-light mt-5">Full-Stack Developer</h1>
            </transition>
            <transition name="fade" mode="out-in">
              <h2 class="d-flex d-md-none display-1 font-weight-light mt-4">Full-Stack Developer</h2>
            </transition>
            <transition name="fade" mode="out-in">
              <h4 class="title d-none d-md-flex pl-2 mb-3">YASH WANVARI</h4>
            </transition>
            <transition name="fade" mode="out-in">
              <h5 class="subheading d-flex d-md-none pl-0 mt-1">YASH WANVARI</h5>
            </transition>
          </v-row>
        </v-img>
      </transition>
    </v-card>
    <v-container>
      <About />
    </v-container>
  </v-container>
</template>

<script>
// @ is an alias to /src
import About from "../components/About";
export default {
  name: "home",
  components: {
    About
  },
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