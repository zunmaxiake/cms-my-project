'use strict';

/**
 * Recommendation.js controller
 *
 * @description: A set of functions called "actions" for managing `Recommendation`.
 */

module.exports = {

  /**
   * Retrieve recommendation records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.recommendation.search(ctx.query);
    } else {
      return strapi.services.recommendation.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a recommendation record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.recommendation.fetch(ctx.params);
  },

  findRecommendationCars: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }
    const recommend = await strapi.services.recommendation.fetch(ctx.params);
    return strapi.services.car.findByRecommend(recommend);
  },

  /**
   * Count recommendation records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.recommendation.count(ctx.query);
  },

  /**
   * Create a/an recommendation record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.recommendation.add(ctx.request.body);
  },

  /**
   * Update a/an recommendation record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.recommendation.edit(ctx.params, ctx.request.body);
  },

  /**
   * Destroy a/an recommendation record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.recommendation.remove(ctx.params);
  }
};
