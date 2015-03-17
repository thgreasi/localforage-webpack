module.exports = {
  entry: './index.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      localforage: 'localforage/dist/localforage.min'
    }
  }
};
