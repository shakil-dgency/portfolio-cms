'use strict';

/**
 * schedule-call service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::schedule-call.schedule-call');
