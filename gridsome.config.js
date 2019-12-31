module.exports = {
  siteName: `Jarkko Tervonen`,
  titleTemplate: `%s - Jarkko Tervonen`,
  icon: "./src/favicon.png",
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "blog/*.md",
        typeName: "BlogPost",
        route: "/:year/:month/:day/:title"
      }
    },
    {
      use: "gridsome-plugin-pwa",
      options: {
        title: "Jarkko Tervonen",
        startUrl: "/",
        display: "standalone",
        statusBarStyle: "default",
        manifestPath: "manifest.json",
        serviceWorkerPath: "service-worker.js",
        shortName: "Jarkko Tervonen",
        themeColor: "#273e4d",
        backgroundColor: "#273e4d",
        icon: "./src/assets/images/logo-512.png"
      }
    },
    {
      use: "gridsome-plugin-rss",
      options: {
        contentTypeName: "BlogPost",
        feedOptions: {
          title: "Jarkko Tervonen",
          feed_url: "https://jarkkotervonen.com/feed.xml",
          site_url: "https://jarkkotervonen.com"
        },
        feedItemOptions: node => ({
          title: node.title,
          description: node.description,
          url: "https://jarkkotervonen.com/" + node.slug,
          author: "Jarkko Tervonen"
        }),
        output: {
          dir: "./static",
          name: "feed.xml"
        }
      }
    },
    { use: "@gridsome/plugin-google-analytics", options: { id: "UA-639843-5" } }
  ]
};
