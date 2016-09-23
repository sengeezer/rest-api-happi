var bedwetterOptions = {}

module.exports = [{
  // return all items
  path: '/word',
  method: 'GET',
  config: {
      handler: {
          bedwetter: bedwetterOptions
      }
  }
}, {
  // return a specific item by id
  path: '/word/{id}',
  method: 'GET',
  config: {
      handler: {
          bedwetter: bedwetterOptions
      }
  }
}, {
  // create a new item
  path: '/word',
  method: 'POST',
  config: {
      handler: {
          bedwetter: bedwetterOptions
      }
  }
}, {
  // udpate an item by id
  path: '/word/{id}',
  method: ['PATCH', 'POST'],
  config: {
      handler: {
          bedwetter: bedwetterOptions
      }
  }
}, {
  // remove an item by id
  path: '/word/{id}',
  method: 'DELETE',
  config: {
      handler: {
          bedwetter: bedwetterOptions
      }
  }
}];
