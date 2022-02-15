'use strict';

module.exports = {
  migrationsRepo: process.env.MIGRATIONS_REPO || 'hof-example-app-schema',
  port: process.env.PORT || 3000,
  tableName: process.env.TABLE_NAME || 'forms',
  serviceType: process.env.SERVICE_TYPE || 'home-office-forms-demo'
};
