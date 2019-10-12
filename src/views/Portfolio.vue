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
                  <v-icon color="#fff">mdi-code-tags</v-icon>
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
                  <v-icon color="#fff">mdi-code-tags</v-icon>
                </v-btn>
              </template>
              <span>Sorry, the source code is private</span>
            </v-tooltip>
            <div class="flex-grow-1"></div>
            <h2 class="display-1 white--text font-weight-light mr-4">Dashboard</h2>
            <v-icon dark size="42">mdi-desktop-mac-dashboard</v-icon>
          </v-card-title>
          <v-container>
            <v-row>
              <v-col cols="12">
                <video muted loop autoplay width="100%">
                  <source src="../assets/dasboard-reports.mp4" />
                </video>
              </v-col>

              <v-col cols="12">Real time dashboard for a client. Made with Vue.</v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-timeline-item>

      <v-timeline-item color="green lighten-1" fill-dot right>
        <v-card tile>
          <v-card-title class="green lighten-1">
            <v-icon class="mr-4" dark size="42">mdi-camera</v-icon>
            <h2 class="display-1 white--text font-weight-light">Photography Blog</h2>
            <div class="flex-grow-1"></div>

            <v-tooltip top>
              <template v-slot:activator="{ on }">
                <v-btn
                  @click="openInNewTab('https://github.com/yash296/photographyBlog')"
                  fab
                  icon
                  v-on="on"
                >
                  <v-icon color="#fff">mdi-code-tags</v-icon>
                </v-btn>
              </template>
              <span>View source code</span>
            </v-tooltip>
          </v-card-title>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-img src="../assets/photography-blog.gif"></v-img>
              </v-col>
              <v-col cols="12">A simple photography blog. Made with Vue, Node, Express and MongoDb</v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-timeline-item>

      <v-timeline-item color="red lighten-1" fill-dot left small>
        <v-card tile>
          <v-card-title class="red lighten-1 justify-end">
            <v-tooltip top>
              <template v-slot:activator="{ on }">
                <v-btn fab icon v-on="on" style="cursor:not-allowed">
                  <v-icon color="#fff">mdi-code-tags</v-icon>
                </v-btn>
              </template>
              <span>Sorry, the source code is private</span>
            </v-tooltip>
            <div class="flex-grow-1"></div>
            <h2 class="display-1 mr-4 white--text font-weight-light text-truncate">Quality Checks</h2>
            <v-icon dark size="42">mdi-format-list-checks</v-icon>
          </v-card-title>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-img src="../assets/qc.gif" width="100%"></v-img>
              </v-col>
              <v-col
                cols="12"
              >A quality check and assurance portal developed for a client. Made with Vue, Node, Express and MongoDb</v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-timeline-item>
      <v-timeline-item color="cyan lighten-1" fill-dot right>
        <v-card tile>
          <v-card-title class="cyan lighten-1">
            <v-icon class="mr-4" dark size="42">mdi-account-switch</v-icon>
            <h2 class="display-1 white--text font-weight-light">Dev-Connector</h2>
            <div class="flex-grow-1"></div>

            <v-tooltip top>
              <template v-slot:activator="{ on }">
                <v-btn
                  @click="openInNewTab('https://github.com/yash296/DevConnector')"
                  fab
                  icon
                  v-on="on"
                >
                  <v-icon color="#fff">mdi-code-tags</v-icon>
                </v-btn>
              </template>
              <span>View source code</span>
            </v-tooltip>
          </v-card-title>
          <v-container>
            <v-row>
              <v-col cols="12">
                <video muted loop autoplay width="100%">
                  <source src="../assets/dev-connector.mp4" />
                </video>
              </v-col>
              <v-col
                cols="12"
              >A portfolio sharing, social web app for developers! Made with React, Node, Express, MongoDb.</v-col>
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
                  <v-icon color="#fff">mdi-code-tags</v-icon>
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
  data: () => ({}),
  methods: {
    openInNewTab(link) {
      window.open(link);
    }
  }
};
</script>