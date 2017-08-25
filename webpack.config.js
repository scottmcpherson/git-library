const path = require('path')
const SRC_DIR = path.resolve(__dirname, 'src')
const DIST_DIR = path.resolve(__dirname, 'dist')

module.exports = {
  entry: SRC_DIR + '/index.js',
  output: {
    path: DIST_DIR,
    filename: 'index.js',
    libraryTarget: 'umd'
  },
  resolve: {
    alias: {
      'react' : path.resolve(__dirname, 'node_modules/react'),
    },
    modules: [path.join(__dirname, 'node_modules')],
    extensions: [".js", ".jsx"]
  },
  resolveLoader: {
    modules: [path.join(__dirname, 'node_modules')]
  },
  externals: {
    'ReactCSSTransitionGroup': 'react/lib/ReactCSSTransitionGroup',
    'react': {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      umd: 'react',
      root: 'React'
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'react-dom',
      umd: 'react-dom',
      root: 'ReactDOM'
    }
  },
  module: {
    loaders: [
        { test: /\.css$/, loader: 'style-loader!css-loader' },
        {
          test: /\.js?/,
          include: SRC_DIR,
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: {
            presets: ['es2015', 'react', 'stage-0'],
            plugins: [
              'transform-class-properties',
              'transform-object-rest-spread'
            ]
          }
        }
    ]
  }
};