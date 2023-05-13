const { Provider, ProviderSchema } = require('./providers.model');
const { Request, RequestSchema } = require('./request.model');

function setupModels(sequelize) {
    Provider.init(ProviderSchema, Provider.config(sequelize));
    Request.init(RequestSchema, Request.config(sequelize));
}

module.exports = setupModels;