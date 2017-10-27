const lodash = require('lodash');
const tcpPortUsed = require('tcp-port-used');
const rx = require('rxjs');

const state = {
  processes: [],
};

const mutations = {
  update(state, { processes }) {
    state.processes = processes;
  },
};

const actions = {
  listen({ commit, getters, rootState, rootGetters }) { // eslint-disable-line no-unused-vars
    console.log('startListening...');
    const apps = rootGetters['App/sort']();
    const portWatchers = apps.map(app => rx.Observable.fromPromise(tcpPortUsed.check(app.port)));

    rx.Observable.timer(0, 1500)
      .flatMap(() => rx.Observable.forkJoin(portWatchers))
      .subscribe((values) => {
        const processes = apps.map((app, i) => Object.assign(app, { inUse: values[i] }));
        commit('update', { processes });
      });
  },
};

const getters = {
  sort: state => (field) => {
    field = lodash.isEmpty(field) ? 'name' : field;
    const r = lodash.sortBy(state.processes, field);
    return r;
  },
};


export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
