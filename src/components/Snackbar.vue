<template>
  <v-snackbar
    v-model="snackbar"
    bottom
    :color="color == 'dark' ? '' : '#fff'"
    multi-line
    right
    :timeout="0"
    :style="color == 'dark' ? 'color:#fff' : 'color:#000'"
  >
    Click
    <v-icon
      :style="color == 'dark' ? 'font-size:30px;color:#fff': 'font-size:30px;color:#000'"
      class="mx-1"
    >mdi-invert-colors</v-icon>
    to switch to {{color == 'dark'? 'light': 'dark'}} theme!
    <v-btn
      text
      @click="snackbar = false"
      :style="color == 'dark' ? 'color:#fff' : 'color:#000'"
    >Close</v-btn>
  </v-snackbar>
</template>

<script>
export default {
  data: () => ({
    snackbar: true
  }),
  computed: {
    color() {
      return this.$store.getters.getColor;
    }
  }
};
</script>