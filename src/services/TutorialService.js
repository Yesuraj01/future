import baseURL from "../http-common";

const getAll = () => {
  return baseURL.get("/tour");
};

const get = id => {
  return baseURL.get(`/tour/${id}`);
};

const create = data => {
  return baseURL.post("/add-tour", data);
};

const update = (id, data) => {
  return baseURL.post(`/edit-tour/${id}`, data);
};

const remove = id => {
  return baseURL.delete(`/tour/${id}`);
};

const removeAll = () => {
  return baseURL.delete(`/tutorials`);
};



export default {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
};
