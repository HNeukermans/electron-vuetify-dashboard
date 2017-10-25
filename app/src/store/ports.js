var portastic = require('portastic');
var tcpPortUsed = require('tcp-port-used');
//var monitor = new portastic.Monitor([8080, 8081, 8082]);

export const state = {
    ports: [{
            icon: "folder",
            iconClass: "grey lighten-1 white--text",
            title: "3500",
            subtitle: "Jan 9, 2014"
        },
        {
            icon: "folder",
            iconClass: "grey lighten-1 white--text",
            title: "4500",
            subtitle: "Jan 9, 2014"
        }
    ]
}

export const mutations = {
    addPort(state, {
        text
    }) {
        state.ports.push({
            text,
            done: false
        })
    }
}

export const actions = {
    startListening({state}) {
        console.log('startListening...');
        // portastic.filter([8080, 8081, 8082])
        //     .then(function (ports) {
        //         console.log('The available ports are: %s', ports.join(', '));
        //     });

        Promise.all([
            tcpPortUsed.check(3500),
            tcpPortUsed.check(8081),
            tcpPortUsed.check(8080),
        ])
        //tcpPortUsed.check(44201)
        .then(function(inUse) {
            console.log('Port 44201 usage: '+inUse);
        }, function(err) {
            console.error('Error on check:', err.message);
        });

        // monitor.on('open', function(port){
        //     console.log('Port %s is open', port);
        //   });

        //   monitor.on('close', function(port){
        //     console.log('Port %s is closed', port);
        //   });

    }
}

export const getters = {
    ports(state) {
        return state.ports
    }
}