<template>
  <div class="py-4 mt-4">
    <v-card class="mx-auto px-2" max-width="800" tile flat>
      <div class="text-center display-1">About</div>
      <v-divider></v-divider>
      <v-card-text
        class="headline"
      >My career began developing functional front-end user interfaces which soon transitioned to building full-stack applcations. Apart from this I also work on game development for fun!</v-card-text>
      <v-row no-gutters>
        <v-col cols="12">
          <v-card tile flat>
            <v-img v-if="color == 'dark'" src="../assets/bangaloreDark.png">
              <v-row align="center" justify="center" class="fill-height" style="color:#fff; ">
                <div style="background:#212121AA" class="pa-3 elevation-2">
                  Born in Bangalore, India; where I attended
                  <br />CMR Institute of Technology and graduated with a degree in
                  <br />Information Science and Engineering.
                </div>
              </v-row>
            </v-img>
            <v-img v-else src="../assets/bangaloreLight.png">
              <v-row align="center" justify="center" class="fill-height" style="color:#fff; ">
                <div style="background:#212121AA" class="pa-3 elevation-2">
                  Born in Bangalore, India; where I attended
                  <br />CMR Institute of Technology and graduated with a degree in
                  <br />Information Science and Engineering.
                </div>
              </v-row>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>
<script>
export default {
  computed: {
    color() {
      return this.$store.getters.getColor;
    }
  }
};
</script>