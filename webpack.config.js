// entry -> output
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (process.env.NODE_ENV === 'test') {
  require('dotenv').config({ path: '.env.test' });
} else if (process.env.NODE_ENV === 'development') {
  require('dotenv').config({ path: '.env.development' });
}

module.exports = (env) => {
    const isProduction = env === 'production';

    return {
   
        entry: ['babel-polyfill','./src/app.js'],
        output: {
            path: path.join(__dirname, 'public', 'dist'),
            filename:"bundle.js"
        },
        mode: 'production',
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },{
                test: /\.s?css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }]
        },
        performance: {
                 hints: process.env.NODE_ENV === 'production' ? "warning" : false
            },
          plugins: [
              new MiniCssExtractPlugin({
                  filename: 'styles.css'
              }),
              new webpack.DefinePlugin({
                'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
                'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
                'process.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL),
                'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
                'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
                'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID)
              })
          ],
          devtool: isProduction ? 'source-map' : 'inline-source-map',
          devServer: {
                contentBase: path.join(__dirname, 'public'),
                historyApiFallback: true,
                publicPath: '/dist/'
          }
    }
};




// // entry -> output
// const path = require('path');

// // console.log(__dirname);
// // console.log(path.join(__dirname, 'public'));

// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// module.exports = (env) => {
//     const isProduction = env === 'production';
//     // console.log('env', env);
//     const CSSExtract = new ExtractTextPlugin('styles.css');

//     return {
   
//         entry: './src/app.js' /*'./src/playground/redux-101.js'*/ /*'./src/playground/destructuring'*/ /*'./src/playground/redux-expensify.js'*/ /*'./src/playground/hoc.js'*/ /*'./src/playground/redux-hamam.js'*/,
//         output: {
//             path: path.join(__dirname, 'public'),
//             filename:"bundle.js"
//         },
//         // mode: 'production',
//         module: {
//             rules: [{
//                 loader: 'babel-loader',
//                 test: /\.js$/,
//                 exclude: /node_modules/
//             },{
//                 test: /\.s?css$/,
//                 use: CSSExtract.extract({
//                     use: [
//                         'css-loader',
//                         'sass-loader'
//                     ]
//                 })
//             }]
//         },/*
//           performance: {
//             hints: process.env.NODE_ENV === 'production' ? "warning" : false
//           },*/
//           plugins: [
//               CSSExtract
//           ],
//           devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
//           devServer: {
//                 contentBase: path.join(__dirname, 'public'),
//                 historyApiFallback: true
//           }
//     }
// };