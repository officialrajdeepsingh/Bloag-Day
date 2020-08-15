'use strict';
<<<<<<< HEAD
const { sanitizeEntity } = require('strapi-utils');
=======
>>>>>>> 1078d2f0caf60f632a0b256bf331af68bcadae16

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

<<<<<<< HEAD
module.exports = {
    async find(ctx) {
        let entities;

        
        ctx.query = {
          ...ctx.query,
          status: 'published',
        };
        

        if (ctx.query._q) {
          entities = await strapi.services.pages.search(ctx.query);
        } else {
          entities = await strapi.services.pages.find(ctx.query);
        }
    
        return entities.map(entity => sanitizeEntity(entity, { model: strapi.models.pages }));
      },
};
=======
module.exports = {};
>>>>>>> 1078d2f0caf60f632a0b256bf331af68bcadae16
