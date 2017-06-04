'use strict';

var config = require('./config.webgme'),
    validateConfig = require('webgme/config/validator');

// Add/overwrite any additional settings here
config.server.port = 8082;
// config.mongo.uri = 'mongodb://127.0.0.1:27017/webgme_my_app';

// Executors
config.executor.enable = true;

config.core.enableCustomConstraints = true;

// Plugins
config.plugin.allowServerExecution = true;
//config.plugin.allowBrowserExecution = false;

// Seeds
config.seedProjects.enable = true;
config.seedProjects.basePaths = ["./src/seeds/umlBase"]

// Merging config
config.storage.autoMerge.enable = true;


validateConfig(config);
module.exports = config;
