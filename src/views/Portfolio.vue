<template>
  <v-container fluid class="px-5">
    <v-timeline :dense="$vuetify.breakpoint.smAndDown">
      <v-timeline-item v-for="(item, index) in timelineItems" :key="index" :color="item.color" :fill-dot="item.fillDot" :left="item.left" :right="item.right" :small="item.small">
        <v-card tile>
          <v-card-title :class="item.cardTitleClass">
            <v-icon :class="item.iconClass" dark size="42">{{ item.icon }}</v-icon>
            <h2 class="display-1 white--text font-weight-light">{{ item.title }}</h2>
            <div class="flex-grow-1"></div>
            <v-tooltip top>
              <template v-slot:activator="{ on }">
                <v-btn fab icon v-on="on" :style="item.buttonStyle" @click="item.buttonAction">
                  <v-icon color="#fff">mdi-code-tags</v-icon>
                </v-btn>
              </template>
              <span>{{ item.tooltipText }}</span>
            </v-tooltip>
          </v-card-title>
          <v-container>
            <v-row>
              <v-col cols="12">
                <component :is="item.mediaComponent" :src="item.mediaSrc" width="100%"></component>
              </v-col>
              <v-col cols="12">{{ item.description }}</v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      timelineItems: [
        {
          color: 'orange lighten-2',
          fillDot: true,
          right: true,
          title: 'Paw Search',
          icon: 'mdi-earth',
          cardTitleClass: 'orange lighten-2',
          buttonAction: () => this.openInNewTab('https://pawsearch.in/about'),
          tooltipText: 'Go to Paw Search',
          mediaComponent: 'v-img',
          mediaSrc: '../assets/paw-search.gif',
          description: 'Founder and developer. I aim to simplify the process of finding a pet companion by creating a one-stop platform for pet adoption. https://pawsearch.in/about'
        },
        {
          color: 'purple lighten-2',
          fillDot: true,
          right: true,
          title: 'Origa Labs',
          icon: 'mdi-earth',
          cardTitleClass: 'purple lighten-2',
          buttonStyle: 'cursor:not-allowed',
          tooltipText: 'Sorry, the source code is private',
          mediaComponent: 'v-img',
          mediaSrc: '../assets/origa-gif.gif',
          description: 'A seamless web interface for Origa Labs. Made with Vue, Node, Express and MongoDb.'
        },
        {
          color: 'purple lighten-1',
          fillDot: true,
          left: true,
          small: true,
          title: 'Dashboard',
          icon: 'mdi-desktop-mac-dashboard',
          cardTitleClass: 'purple lighten-1',
          buttonStyle: 'cursor:not-allowed',
          tooltipText: 'Sorry, the source code is private',
          mediaComponent: 'v-img',
          mediaSrc: '../assets/dashboard-gif.gif',
          description: 'Real time dashboard for a client. Made with Vue.'
        },
        {
          color: 'brown lighten-1',
          fillDot: true,
          right: true,
          title: 'AR Website',
          icon: 'mdi-augmented-reality',
          cardTitleClass: 'brown lighten-1',
          buttonStyle: 'cursor:not-allowed',
          tooltipText: 'View source code',
          buttonAction: () => this.openInNewTab('https://github.com/yash296/ar-website'),
          mediaComponent: 'v-img',
          mediaSrc: '../assets/ar.gif',
          description: 'AR website with video calling, image editor and workflow designer! This is used to communicate directly with our AR device. Made with Vue, Node, Express, MongoDb, Socket, Docker.'
        },
        {
          color: 'red lighten-1',
          fillDot: true,
          left: true,
          small: true,
          title: 'Quality Checks',
          icon: 'mdi-format-list-checks',
          cardTitleClass: 'red lighten-1',
          buttonStyle: 'cursor:not-allowed',
          tooltipText: 'Sorry, the source code is private',
          mediaComponent: 'v-img',
          mediaSrc: '../assets/qc.gif',
          description: 'A quality check and assurance portal developed for a client. Made with Vue, Node, Express and MongoDb.'
        },
        {
          color: 'grey darken-1',
          fillDot: true,
          right: true,
          title: 'Packing Station',
          icon: 'mdi-package-variant',
          cardTitleClass: 'grey darken-1',
          buttonStyle: 'cursor:not-allowed',
          tooltipText: 'View source code',
          buttonAction: () => this.openInNewTab('https://github.com/yash296/packing-station'),
          mediaComponent: 'video',
          mediaSrc: '../assets/packingstation.mp4',
          description: 'Intelligent box tracking application with a packing station to store the box barcodes and item values that can be searched directly through the website! Made with Vue, Node, Express, MongoDb, Socket, Docker.'
        },
        {
          color: 'amber darken-1',
          fillDot: true,
          left: true,
          small: true,
          title: 'Project-boost',
          icon: 'mdi-rocket',
          cardTitleClass: 'amber darken-1',
          buttonAction: () => this.openInNewTab('https://github.com/yash296/project-boost'),
          mediaComponent: 'video',
          mediaSrc: '../assets/project-boost.mp4',
          description: 'A level based game with physics involved. Made with Unity.'
        },
        {
          color: 'green lighten-1',
          fillDot: true,
          right: true,
          title: 'Photography Blog',
          icon: 'mdi-camera',
          cardTitleClass: 'green lighten-1',
          buttonAction: () => this.openInNewTab('https://github.com/yash296/photographyBlog'),
          mediaComponent: 'v-img',
          mediaSrc: '../assets/photography-blog.gif',
          description: 'A simple photography blog. Made with Vue, Node, Express and MongoDb.'
        },
        {
          color: 'cyan lighten-1',
          fillDot: true,
          left: true,
          title: 'Dev-Connector',
          icon: 'mdi-account-switch',
          cardTitleClass: 'cyan lighten-1',
          buttonAction: () => this.openInNewTab('https://github.com/yash296/DevConnector'),
          mediaComponent: 'video',
          mediaSrc: '../assets/dev-connector.mp4',
          description: 'A portfolio sharing, social web app for developers! Made with React, Node, Express, MongoDb.'
        }
      ]
    };
  },
  methods: {
    openInNewTab(link) {
      window.open(link, '_blank');
    }
  }
};
</script>
