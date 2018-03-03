var Encore = require('@symfony/webpack-encore');

Encore
    .setOutputPath('assets/build/')
    .setPublicPath('/assets/build')
    .cleanupOutputBeforeBuild()
    .addEntry('site', './assets/js/main.js')
    .addStyleEntry('global-site', './assets/scss/global.scss')
    .enableSassLoader()
    .autoProvidejQuery()
    .enableVersioning(false)
;

module.exports = Encore.getWebpackConfig();
