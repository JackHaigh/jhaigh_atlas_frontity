const settings = {
  "name": "frontity-main",
  "state": {
    "frontity": {
      "url": "https://frontity.jackhaigh.com",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "Development",
              "/category/development/"
            ],
            [
              "Research",
              "/research/"
            ],
            [
              "Blog",
              "/category/blog/"
            ],
            [
              "About",
              "/about/"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://jhaighfrontity.wpengine.com"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
