var portastic = require('portastic');
var tcpPortUsed = require('tcp-port-used');
var rx = require('rxjs');

export const state = {
    processes: []
}

export const mutations = {
    update(state, { processes }) {        
        state.processes = processes;
    }
}

export const actions = {
    listen({ commit, getters, rootState, rootGetters }) {
        console.log('startListening...');
        var apps = rootGetters['app/sort']();
        const portWatchers = apps.map(app => rx.Observable.fromPromise(tcpPortUsed.check(app.port)));

        rx.Observable.timer(0, 1500)
            .flatMap(() => rx.Observable.forkJoin(portWatchers))
            .subscribe((values) => {
                const processes = apps.map((app, i) => Object.assign(app, { inUse: values[i] }));
                commit('update', { processes });          
            });
    }
}

export const getters = {
    sort: (state) => (field) => {
        field = lodash.isEmpty(field) ? 'name' : field;
        return lodash.sortBy(state.apps, field);
    }
}