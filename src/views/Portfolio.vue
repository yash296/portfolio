<template>
  <v-container>
    <v-timeline :dense="$vuetify.breakpoint.smAndDown">
      <v-timeline-item color="purple lighten-2" fill-dot right>
        <v-card tile>
          <v-card-title class="purple lighten-2">
            <v-icon dark size="42" class="mr-4">mdi-earth</v-icon>
            <h2 class="display-1 white--text font-weight-light">Origa Labs</h2>
            <div class="flex-grow-1"></div>

            <v-tooltip top>
              <template v-slot:activator="{ on }">
                <v-btn fab icon v-on="on" style="cursor:not-allowed">
                  <v-icon>mdi-code-tags</v-icon>
                </v-btn>
              </template>
              <span>Sorry, the source code is private</span>
            </v-tooltip>
          </v-card-title>
          <v-container>
            <v-row>
              <v-col cols="12">
                <video muted loop autoplay width="100%">
                  <source src="../assets/origa-video.mp4" />
                </video>
              </v-col>
              <v-col
                cols="12"
              >A seemless web interface for Origa Labs. Made with Vue, Node, Express and MongoDb</v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-timeline-item>

      <v-timeline-item color="purple lighten-1" fill-dot left small>
        <v-card tile>
          <v-card-title class="purple lighten-1">
            <v-tooltip top>
              <template v-slot:activator="{ on }">
                <v-btn fab icon v-on="on" style="cursor:not-allowed">
                  <v-icon>mdi-code-tags</v-icon>
                </v-btn>
              </template>
              <span>Sorry, the source code is private</span>
            </v-tooltip>
            <div class="flex-grow-1"></div>
            <h2 class="display-1 white--text font-weight-light mr-4">Yard Management</h2>
            <v-icon dark size="42">mdi-truck</v-icon>
          </v-card-title>
          <v-container>
            <v-row>
              <v-col>Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.</v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-timeline-item>

      <v-timeline-item color="cyan lighten-1" fill-dot right>
        <v-card tile>
          <v-card-title class="cyan lighten-1">
            <v-icon class="mr-4" dark size="42">mdi-feature-search</v-icon>
            <h2 class="display-1 white--text font-weight-light">Intelligent Tracking</h2>
          </v-card-title>
          <v-container>
            <v-row>
              <v-col
                v-for="n in 3"
                :key="n"
                cols="12"
                md="4"
              >Lorem ipsum dolor sit amet, no nam oblique veritus no nam oblique.</v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-timeline-item>

      <v-timeline-item color="red lighten-1" fill-dot left small>
        <v-card tile>
          <v-card-title class="red lighten-1 justify-end">
            <h2 class="display-1 mr-4 white--text font-weight-light">Dev Connecter</h2>
            <v-icon dark size="42">mdi-account-switch</v-icon>
          </v-card-title>
          <v-container>
            <v-row>
              <v-col class="hidden-sm-and-down" md="2">
                <v-icon size="64">mdi-server-network</v-icon>
              </v-col>
              <v-col
                cols="12"
                md="10"
              >Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus.</v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-timeline-item>

      <v-timeline-item color="green lighten-1" fill-dot right>
        <v-card tile>
          <v-card-title class="green lighten-1">
            <v-icon class="mr-4" dark size="42">mdi-augmented-reality</v-icon>
            <h2 class="display-1 white--text font-weight-light">AR</h2>
          </v-card-title>
          <v-container>
            <v-row>
              <v-col>Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.</v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-timeline-item>
      <v-timeline-item color="amber darken-1" fill-dot left small>
        <v-card tile>
          <v-card-title class="amber darken-1 justify-end">
            <v-tooltip top>
              <template v-slot:activator="{ on }">
                <v-btn
                  @click="openInNewTab('https://github.com/yash296/project-boost')"
                  fab
                  icon
                  v-on="on"
                >
                  <v-icon>mdi-code-tags</v-icon>
                </v-btn>
              </template>
              <span>View source code</span>
            </v-tooltip>
            <div class="flex-grow-1"></div>
            <h2 class="display-1 mr-4 white--text font-weight-light">Project-boost</h2>
            <v-icon dark size="42">mdi-rocket</v-icon>
          </v-card-title>
          <v-container>
            <v-row>
              <v-col cols="12">
                <video muted loop autoplay width="100%">
                  <source src="../assets/project-boost.mp4" />
                </video>
              </v-col>
              <v-col cols="12">A level based game with physics involved. Made with Unity.</v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script>
export default {
  methods: {
    openInNewTab(link) {
      window.open(link);
    }
  }
};
</script>