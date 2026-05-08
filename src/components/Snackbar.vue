<template>
  <v-snackbar v-model="snackbar" bottom right :timeout="0" style="display:none">
  </v-snackbar>
</template>

<script>
export default {
  data: () => ({
    snackbar: false
  }),
  computed: {
    color() {
      return this.$store.getters.getColor;
    }
  }
};
</script>
