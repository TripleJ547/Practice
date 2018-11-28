'use strict';
const Docker = require("dockerode");

var docker = new Docker({
    socketPath: "/var/run/docker.sock"
});

var container = docker.getContainer("gifted_poincare");

container.start()
    .then(function (container) {
        return console.log("Started");
    }).then(function (container) {
        return container.resize({
            h: process.stdout.rows,
            w: process.stdout.columns
        });
    }).then(function (container) {
        return container.stop()
            .then(function (container) {
                return console.log('Stopped');
            });
    });


console.log("Send help");