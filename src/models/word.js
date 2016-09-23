var shortid = require('shortid');

module.exports = {
  identity: 'word',
  connection: 'wordDB',
  attributes: {
    id: {
      type: 'string',
      primaryKey: true,
      unique: true,
      defaultsTo: function() {
        return shortid.generate();
      }
    },
    name: {
      type : 'string',
      required : true
    },
    groups: {
      type : 'array',
      required : false
    }
  }
};
