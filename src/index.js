var Hapi = require('hapi');

var server = new Hapi.Server();
server.connection({ port: 8080, host: 'localhost' });

var dogwaterOptions = {
  connections: {
    wordDB : {
      adapter: 'wordDisk'
    }
  },
  adapters:{
     wordDisk : 'sails-disk'
  },
  models: [require('./models/word')]
};

server.register([{
    register : require('blipp')
  },{
    register: require('dogwater'),
    options: dogwaterOptions
  },{
    register: require('bedwetter'),
    options: {}
  }
], function (err) {
    if (err) { return console.log(err); }

    server.route(require('./routes/word'));

    server.start(function () {
      console.log('Word API up and running at:', server.info.uri);
    });
});
