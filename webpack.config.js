const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'main-bundle-[hash].js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@': path.join(__dirname, 'src'),
    },
  },
  devServer: {
    contentBase: './public',
    writeToDisk: true,
    historyApiFallback: true,
    port: 3000,
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
  plugins: [new CleanWebpackPlugin()],
};
