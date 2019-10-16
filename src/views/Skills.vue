<template>
  <div>
    <v-container>
      <v-card flat tile>
        <v-col cols="12" class="display-1">Languages</v-col>
        <v-divider></v-divider>
        <v-row justify="center" align="center">
          <v-col cols="6" md="2" v-for="(image,i) in languageImages" :key="i">
            <v-row no-gutters align="center" justify="center">
              <v-hover v-slot:default="{ hover }">
                <v-card
                  @click="openInNewTab(image.link)"
                  tile
                  :elevation="hover ? 3 : 0"
                  class="mx-auto pa-2"
                  height="95"
                  max-width="95"
                >
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                      <v-img
                        :src="image.logo"
                        v-on="on"
                        style="cursor:pointer"
                        width="100%"
                        height="100%"
                      ></v-img>
                    </template>
                    <span>{{image.name}}</span>
                  </v-tooltip>
                </v-card>
              </v-hover>
            </v-row>
          </v-col>
        </v-row>
      </v-card>
      <v-card flat tile class="pt-4">
        <v-col cols="12" class="display-1">Frameworks</v-col>
        <v-divider></v-divider>
        <v-row justify="center" align="center">
          <v-col cols="6" md="3" v-for="(image,i) in frameworkImages" :key="i">
            <v-row no-gutters align="center" justify="center">
              <v-hover v-slot:default="{ hover }">
                <v-card
                  tile
                  :elevation="hover ? 3 : 0"
                  class="mx-auto pa-2"
                  @click="openInNewTab(image.link)"
                  :height="image.height"
                  :max-width="image.width"
                >
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                      <v-img
                        :src="image.logo"
                        v-on="on"
                        style="cursor:pointer"
                        width="100%"
                        height="100%"
                      ></v-img>
                    </template>
                    <span>{{image.name}}</span>
                  </v-tooltip>
                </v-card>
              </v-hover>
            </v-row>
          </v-col>
        </v-row>
      </v-card>
      <v-card flat tile class="pt-4">
        <v-col cols="12" class="display-1">Platforms, IDEs & Other Technologies</v-col>
        <v-divider></v-divider>
        <v-row justify="center" align="center">
          <v-col cols="6" md="3" v-for="(image,i) in otherImages" :key="i">
            <v-row no-gutters align="center" justify="center">
              <v-hover v-slot:default="{ hover }">
                <v-card
                  tile
                  :elevation="hover ? 3 : 0"
                  @click="openInNewTab(image.link)"
                  class="mx-auto pa-2"
                  :height="image.height"
                  :max-width="image.width"
                >
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                      <v-img
                        :src="image.logo"
                        v-on="on"
                        style="cursor:pointer"
                        width="100%"
                        height="100%"
                      ></v-img>
                    </template>
                    <span>{{image.name}}</span>
                  </v-tooltip>
                </v-card>
              </v-hover>
            </v-row>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  methods: {
    openInNewTab(link) {
      window.open(link);
    }
  },
  data: () => ({
    languageImages: [
      {
        logo:
          "http://pluspng.com/img-png/logo-javascript-png-html-code-allows-to-embed-javascript-logo-in-your-website-587.png",
        name: "JavaScript",
        link: "https://developer.mozilla.org/bm/docs/Web/JavaScript"
      },
      {
        logo:
          "https://icons-for-free.com/iconfiles/png/512/award+badge+html+html5+reward+trophy+icon-1320184828635374270.png",
        name: "HTML5",
        link: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5"
      },
      {
        logo:
          "https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-css-3-512.png",
        name: "CSS3",
        link: "https://www.w3schools.com/css/"
      },
      {
        logo:
          "https://skillvalue.com/jobs/wp-content/uploads/sites/7/2019/01/csharp_logo.png",
        name: "C#",
        link: "https://docs.microsoft.com/en-us/dotnet/csharp/"
      },
      {
        logo:
          "https://png2.cleanpng.com/sh/6c48a7a475fc464a66bfc50dc057311a/L0KzQYm3WMI6N6h5kJH0aYP2gLBuTgB6fJl0hp95cnBqgrL0jflvb15xedDwdXHqdX7qjB1xfaVqip95cnBqgrL0jflvb154Rdc2ZT38hbzzhb10d6N6iAd3YT34icb1TfVscZ1xfeRyLYD4fMT8mr16c146eqoBZEK0RIG8g8I5OF84TqYCN0e1QoK8U8U2PmM3TqI5MkO5PsH1h5==/kisspng-python-programming-language-computer-programming-s-e-e-yukle-sorusuna-uyun-ekilleri-pulsuz-yk-5b86d21405c280.3647772215355622600236.png",
        name: "Python",
        link: "https://docs.python.org/3/"
      }
    ],
    frameworkImages: [
      {
        logo:
          "https://www.stickpng.com/assets/images/58482acecef1014c0b5e4a1e.png",
        name: "Vue",
        width: "95",
        height: "85",
        link: "https://vuejs.org"
      },
      {
        logo:
          "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
        name: "React / React Native",
        width: "95",
        height: "85",
        link: "https://reactjs.org"
      },
      {
        logo: "https://pacewisdom.com/img/services/express/logo_Express.png",
        name: "Express",
        width: "",
        height: "",
        link: "https://expressjs.com"
      },
      {
        logo: "https://www.eng-its.de/app/uploads/2018/08/cordova_bot.png",
        name: "Cordova",
        width: "95",
        height: "85",
        link: "https://cordova.apache.org"
      }
    ],
    otherImages: [
      {
        logo:
          "https://code.visualstudio.com/assets/updates/1_35/logo-stable.png",
        name: "Visual Studio Code",
        width: "95",
        height: "95",
        link: "https://code.visualstudio.com"
      },
      {
        logo:
          "http://pluspng.com/img-png/nodejs-logo-png-create-a-model-to-persist-data-in-a-node-js-loopback-api-from-beeman-nl-on-eggheadio-1200.png",
        name: "Node Js",
        width: "95",
        height: "95",
        link: "https://nodejs.org/en/"
      },
      {
        logo: "https://cdn.iconscout.com/icon/free/png-512/mongodb-226029.png",
        name: "mongoDb",
        width: "95",
        height: "95",
        link: "https://www.mongodb.com"
      },

      {
        logo: "https://miro.medium.com/max/512/1*fVBL9mtLJmHIH6YpU7WvHQ.png",
        name: "Postman",
        width: "95",
        height: "95",
        link: "https://www.getpostman.com"
      },
      {
        logo:
          "https://about.gitlab.com/images/press/logo/png/gitlab-icon-rgb.png",
        name: "Gitlab",
        width: "95",
        height: "95",
        link: "https://gitlab.com"
      },
      {
        logo:
          "https://icon-library.net/images/github-icon-png/github-icon-png-26.jpg",
        name: "Github",
        width: "95",
        height: "95",
        link: "https://github.com"
      },
      {
        logo:
          "https://dwglogo.com/wp-content/uploads/2017/09/1300px-Docker_container_engine_logo.png",
        name: "Docker",
        width: "125",
        height: "95",
        link: "https://www.docker.com"
      },
      {
        logo:
          "https://lever-client-logos.s3.amazonaws.com/aea3a05c-2bc1-4112-a066-a003dc78b95c-1523996663450.png",
        name: "Figma",
        width: "95",
        height: "95",
        link: "https://www.figma.com"
      },
      {
        logo:
          "https://www.stickpng.com/assets/images/58482b92cef1014c0b5e4a2d.png",
        name: "Unity",
        width: "95",
        height: "95",
        link: "https://unity.com"
      },
      {
        logo:
          "https://cdn.freebiesupply.com/logos/large/2x/visual-studio-code-logo-png-transparent.png",
        name: "Visual Studio",
        width: "95",
        height: "95",
        link: "https://visualstudio.microsoft.com"
      },
      {
        logo:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Adobe_XD_CC_icon.svg/1050px-Adobe_XD_CC_icon.svg.png",
        name: "Adobe XD",
        width: "95",
        height: "95",
        link: "https://www.adobe.com/in/products/xd.html"
      }
    ]
  })
};
</script>