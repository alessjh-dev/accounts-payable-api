const { models } = require("../libs/sequelize");

class BillsService {
  constructor() {}

  async find() {
    const res = await models.Bills.findAll();
    return res;
  }

  async findOne(id) {
    const res = await models.Bills.findByPk(id);
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
}

module.exports = BillsService;