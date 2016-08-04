module.exports = {
  files: {
    javascripts: {
      entryPoints: {
       'web/static/js/account_create.js': 'js/account_create.js',
       'web/static/js/account_show.js': 'js/account_show.js',
       'web/static/js/account_index.js': 'js/account_index.js',
       'web/static/js/account_edit.js': 'js/account_edit.js'
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
    assets: /^(web\/static\/assets)/ 
  },
  modules: {
    wrapper: false
  },
  plugins: {
    babel: {
      presets: ['es2015'],
      ignore: [
        /^(node_modules|vendor|assets)/
      ],
      pattern: /\.js$/
    }  }

};
