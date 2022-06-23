'use strict';

module.exports = {
  index(ctx) {
    ctx.body = strapi
      .plugin('cpia')
      .service('cpia')
      .getWelcomeMessage();
  },
};
