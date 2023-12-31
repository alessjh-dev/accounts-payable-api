const RequestService = require("../services/request.service");
const service = new RequestService();

const create = async (req, res) => {
  try {
    const response = await service.create(req.body);
    res.json(response);
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};

const get = async (req, res) => {
  try {
    const response = await service.find();
    res.json(response);
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await service.findOne(id);
    res.json(response);
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const response = await service.update(id, body);
    res.json(response);
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};

const _delete = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await service.delete(id);
    res.json(response);
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};

const getByUserId = async (req, res) => {
  try {
    const {userId} = req.params;
    const response = await service.findByUserId(userId);
    res.json(response);
  } catch (error) {
    
  }
}

const getByState = async (req, res) => {
  try {
    const {state} = req.params;
    const response = await service.findByState(state);
    res.json(response);
  } catch (error) {
    
  }
}

module.exports = {
  create,
  get,
  getById,
  update,
  _delete,
  getByUserId,
  getByState
};
