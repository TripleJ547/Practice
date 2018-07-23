//Simple WebServer

// var http = require('http');
// var url = require('url');

// var server = http.createServer(function (req, res) {
//     var page = url.parse(req.url).pathname;

//     console.log(page);
//     res.end('Hello orld!');
// });

// console.log('Listening on port 8080');
// server.listen(8080);

//-----------------------------------------------------------------------------

//Learning about functions

// function Person(name, age) {
//     this.name = name;
//     this.age = age;

// }

// var you = new Person("James", 20);

// console.log(you);

//-----------------------------------------------------------------------------

//Learning about objects
var Computer = {
    name: 'MacBook Pro',
    _for: 'Me',
    details: {
        size: '15',
        year: '2018',
        color: 'Space Gray'
    }
};

console.log(Computer.name, Computer.details.year);
console.log(Computer.details.size);