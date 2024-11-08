<template>
  <div class="py-4 mt-4">
    <v-card class="mx-auto px-2" max-width="800" tile flat>
      <div class="text-center display-1">About</div>
      <v-divider></v-divider>
      <v-card-text
        class="headline"
      >
      👋 Hi, I’m Yash Wanvari, a Senior Full Stack Developer with over 6 years of experience specializing in fullstack engineering and team leadership. I’m passionate about creating seamless user experiences and architecting robust solutions from scratch. I enjoy building scalable systems, mentoring others, and crafting efficient, user-friendly applications that make an impact.


    
    </v-card-text>
      <v-row no-gutters>
        <v-col cols="12">
          <v-card tile flat>
            <v-img v-if="color == 'dark'" src="../assets/bangaloreDark.png">
              <v-row align="center" justify="center" class="fill-height" style="color:#fff; ">
                <div style="background:#212121AA" class="pa-3 elevation-2">
                  Originally from Bangalore, India,
                  <br />I completed my studies at CMR Institute of Technology,
                  <br />earning a Bachelor's degree in Information Science and Engineering
                </div>
              </v-row>
            </v-img>
            <v-img v-else src="../assets/bangaloreLight.png">
              <v-row align="center" justify="center" class="fill-height" style="color:#fff; ">
                <div style="background:#212121AA" class="pa-3 elevation-2">
                  Originally from Bangalore, India,
                  <br />I completed my studies at CMR Institute of Technology,
                  <br />earning a Bachelor's degree in Information Science and Engineering
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