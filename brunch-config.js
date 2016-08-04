module.exports = {
  files: {
    javascripts: {
      entryPoints: {
       'web/static/js/account_create.js': 'js/account_create.js',
       'web/static/js/account_show.js': 'js/account_show.js',
       'web/static/js/account_index.js': 'js/account_index.js'
       //'account_create.js',
       //'account_show.js',
       //'account_index.js'
      }
    },
    stylesheets: {
      joinTo: {
        'css/account_index.css': /css\/account_index\.css/,
        'css/account_show.css': /css\/account_show\.css/
      }
    },
  },
  paths: {
    // Which directories to watch
    watched: ["web/static", "test/static"],
    // Where to compile files to
    public: "priv/static"
  },
  conventions: {
    // This option sets where we should place non-css and non-js assets in.
    // By default, we set this to "/web/static/assets". Files in this directory
    // will be copied to `paths.public`, which is "priv/static" by default.
    assets: /^(web\/static\/vendor)/ 
  },
  
  plugins: {
    babel: {
      presets: ['es2015'],
      ignore: [
        /^(node_modules|vendor)/
      ],
      pattern: /\.js$/
    },
    css: {
      modules: false
    }
  },
  npm: {
    styles: {
      'semantic-ui-css': [
      "components/accordion.css",
      "components/ad.css",
      "components/breadcrumb.css",
      "components/button.css",
      "components/card.css",
      "components/checkbox.css",
      "components/comment.css",
      "components/container.css",
      "components/dimmer.css",
      "components/divider.css",
      "components/dropdown.css",
      "components/embed.css",
      "components/feed.css",
      "components/flag.css",
      "components/form.css",
      "components/grid.css",
      "components/header.css",
      "components/icon.css",
      "components/image.css",
      "components/input.css",
      "components/item.css",
      "components/label.css",
      "components/list.css",
      "components/loader.css",
      "components/menu.css",
      "components/message.css",
      "components/modal.css",
      "components/nag.css",
      "components/popup.css",
      "components/progress.css",
      "components/rail.css",
      "components/rating.css",
      "components/reset.css",
      "components/reveal.css",
      "components/search.css",
      "components/segment.css",
      "components/shape.css",
      "components/sidebar.css",
      "components/site.css",
      "components/statistic.css",
      "components/step.css",
      "components/sticky.css",
      "components/tab.css",
      "components/table.css",
      "components/transition.css",
      "components/video.css",
      "components/",
      "components/accordion.css",
      "components/ad.css",
      "components/breadcrumb.css",
      "components/button.css",
      "components/card.css",
      "components/checkbox.css",
      "components/comment.css",
      "components/container.css",
      "components/dimmer.css",
      "components/divider.css",
      "components/dropdown.css",
      "components/embed.css",
      "components/feed.css",
      "components/flag.css",
      "components/form.css",
      "components/grid.css",
      "components/header.css",
      "components/icon.css",
      "components/image.css",
      "components/input.css",
      "components/item.css",
      "components/label.css",
      "components/list.css",
      "components/loader.css",
      "components/menu.css",
      "components/message.css",
      "components/modal.css",
      "components/nag.css",
      "components/popup.css",
      "components/progress.css",
      "components/rail.css",
      "components/rating.css",
      "components/reset.css",
      "components/reveal.css",
      "components/search.css",
      "components/segment.css",
      "components/shape.css",
      "components/sidebar.css",
      "components/site.css",
      "components/statistic.css",
      "components/step.css",
      "components/sticky.css",
      "components/tab.css",
      "components/table.css",
      "components/transition.css",
      "components/video.css"
      ]
    }
  }
};
