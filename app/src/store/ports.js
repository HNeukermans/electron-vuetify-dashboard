var portastic = require('portastic');
var tcpPortUsed = require('tcp-port-used');
var rx = require('rxjs');
//var monitor = new portastic.Monitor([8080, 8081, 8082]);

export const state = {
    // ports: [{
    //         icon: "folder",
    //         iconClass: "grey lighten-1 white--text",
    //         title: "3500",
    //         subtitle: "Jan 9, 2014"
    //     },
    //     {
    //         icon: "folder",
    //         iconClass: "grey lighten-1 white--text",
    //         title: "4500",
    //         subtitle: "Jan 9, 2014"
    //     }
    // ],
    ports: []
}

export const mutations = {
    addPort(state, { text }) {
        state.ports.push({
            text,
            done: false
        })
    }, 
    updatePorts(state, { ports }) {        
        state.ports = ports;
    }
}

export const actions = {
    listen({ commit }) {
        console.log('startListening...');

        rx.Observable.timer(0, 1000).flatMap(() => {
            debugger;
            const o1 = rx.Observable.fromPromise(tcpPortUsed.check(3500));
            const o2 = rx.Observable.fromPromise(tcpPortUsed.check(3536));
            // .map(inUse => {
            //     debugger;
            //     return  { number: 3500, inUse };
            // });
            // const o2 = rx.Observable.from(tcpPortUsed.check(4748)).map(inUse => { number: 4748, inUse });
            return rx.Observable.forkJoin([o1, o2]);
        }).subscribe((values) => {
            debugger;
        });

        Promise.all([
            tcpPortUsed.check(3500).then((inUse) => { return { number: 3536, inUse }}),
            tcpPortUsed.check(4748).then((inUse) => { return { number: 4748, inUse }}),
            tcpPortUsed.check(4749).then((inUse) => { return { number: 4749, inUse }}),
            tcpPortUsed.check(4750).then((inUse) => { return { number: 4750, inUse }})
        ])
        .then(function(ports) {
            commit('updatePorts', { ports });
        }, function(err) {
            console.error('Error on check:', err.message);
        });
    }
}

export const getters = {
    ports(state) {
        return state.ports
    }
}