module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/portfolio/" : "/",
  transpileDependencies: ["vuetify"],
  pwa: {
    name: "Yash Wanvari",
    themeColor: "#0B0F17",
    msTileColor: "#0B0F17",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black",
    // The PWA plugin injects references to PNG icons by default. The project
    // only ships favicon.ico, so blank these paths to stop 404s.
    iconPaths: {
      favicon32: "favicon.ico",
      favicon16: "favicon.ico",
      appleTouchIcon: "favicon.ico",
      maskIcon: null,
      msTileImage: null
    }
  }
};
