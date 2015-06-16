Package.describe({
  name: 'telescope:singleweek',
  summary: 'Telescope Single Week package',
  version: '0.20.5',
  git: "https://github.com/TelescopeJS/Telescope.git"
});

Npm.depends({
  // NPM package dependencies
});

Package.onUse(function (api) {

  api.versionsFrom(['METEOR@1.0']);

  // --------------------------- 1. Meteor packages dependencies ---------------------------

  api.use(['telescope:core@0.20.5']);

  // ---------------------------------- 2. Files to include ----------------------------------

  // i18n config (must come first)

  api.addFiles([
    'package-tap.i18n'
  ], ['client', 'server']);

  // both

  api.addFiles([
    'lib/routes.js',
    'lib/singleweek.js'
  ], ['client', 'server']);

  // client

  api.addFiles([
    'lib/client/templates/single_week.html',
    'lib/client/templates/single_week.js',
    'lib/client/templates/single_week_nav.html',
    'lib/client/templates/single_week_nav.js'
  ], ['client']);

  // server

  api.addFiles([
  ], ['server']);

  // i18n languages (must come last)

  api.addFiles([
    'i18n/bg.i18n.json',
    'i18n/de.i18n.json',
    'i18n/nl.i18n.json',
    'i18n/en.i18n.json',
    'i18n/es.i18n.json',
    'i18n/fr.i18n.json',
    'i18n/it.i18n.json',
    'i18n/tr.i18n.json',
    'i18n/zh-CN.i18n.json'
  ], ['client', 'server']);

});
