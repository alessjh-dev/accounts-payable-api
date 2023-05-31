const { Provider, ProviderSchema } = require('./providers.model');
const { Request, RequestSchema } = require('./request.model');
const { Users, UsersSchema } = require('./users.model');

function setupModels(sequelize) {
    Provider.init(ProviderSchema, Provider.config(sequelize));
    Request.init(RequestSchema, Request.config(sequelize));
    Users.init(UsersSchema, Users.config(sequelize));
}

module.exports = setupModels;