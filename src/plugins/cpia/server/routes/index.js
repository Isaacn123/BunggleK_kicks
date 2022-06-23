module.exports = [
  {
    method: 'GET',
    path: '/',
    handler:'cpia.index',
    config: {
      policies: [],
      auth:false
    },
  },
];
