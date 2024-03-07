"use strict";

/**
 * news-feed controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

// module.exports = createCoreController('api::news-feed.news-feed');
module.exports = createCoreController(
  "api::news-feed.news-feed",
  // @ts-ignore
  ({ strapi }) => ({
    async findOne(ctx) {
      const { id } = ctx.params;

      // sanitizeQuery to remove any query params that are invalid or the user does not have access to
      // It is strongly recommended to use sanitizeQuery even if validateQuery is used
      const entity = await strapi.db.query("api::news-feed.news-feed").findOne({
        where: { slug: id },
        populate: ["image", "seo"],
      });
      const sanitizedResults = await this.sanitizeOutput(entity, ctx);

      return this.transformResponse(sanitizedResults);
    },
  })
);
