const lodash = require('lodash');
// var monitor = new portastic.Monitor([8080, 8081, 8082]);

const state = {
  apps: [{
    port: 3536,
    name: 'reporting-web' },
  {
    port: 4748,
    name: 'reporting-gateway' },
  ],
};

const getters = {
  sort: state => (field) => {
    field = lodash.isEmpty(field) ? 'name' : field;
    return lodash.sortBy(state.apps, field);
  },
};


export default {
  namespaced: true,
  state,
  getters,
};

