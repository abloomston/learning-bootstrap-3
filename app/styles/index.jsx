window.jQuery = window.$ = require('jquery/dist/jquery.min');  // hack for providing jquery to boostrap, from http://stackoverflow.com/a/29450184/5327056
require("bootstrap-webpack");

module.exports = {
  bpad: {
    paddingBottom: '30px'
  },
  tpad: {
    paddingTop: '20px'
  }
};
