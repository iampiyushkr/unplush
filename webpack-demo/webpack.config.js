 const path = require('path');

 module.exports = {
  
  mode: 'development',
  entry: {
    index: './src/index.js',
    electronics: './src/electronics.js',
    unplushHome: './src/unplushHome.js',
  },
   output: {
  
    filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist'),
   },
 };