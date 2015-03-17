module.exports = {
  entry: './index.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      localforageSerializer: 'localforage/src/utils/serializer'
    }
  }
};
