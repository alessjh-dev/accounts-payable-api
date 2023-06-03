const { models } = require("../libs/sequelize");

class RequestService {
  constructor() {}

  async find() {
    const res = await models.Request.findAll({ order: [["id", "DESC"]] });
    return res;
  }

  async findOne(id) {
    const res = await models.Request.findByPk(id);
    return res;
  }

  async create(data) {
    const res = await models.Request.create(data);
    return res;
  }

  async update(id, data) {
    const model = await this.findOne(id);
    const res = await model.update(data);
    return res;
  }

  async delete(id) {
    const model = await this.findOne(id);
    await model.destroy();
    return { deleted: true };
  }

  async findByUserId(userId) {
    const res = await models.Request.findAll({
      where: {
        userId: userId,
      },
      order: [["id", "DESC"]],
    });
    return res;
  }

  async findByState(state) {
    const res = await models.Request.findAll({
      where: {
        state: state,
      },
      order: [["id", "DESC"]],
    });
    console.log(res);
    return res;
  }
}

module.exports = RequestService;
