
const GLOBALS = {
    'process.env.NODE_ENV': JSON.stringify('production')
};


const webpack =  require('webpack');
module.exports = {

    devtool: 'source-map',
    entry: './src/index',
    output: {
        path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
        publicPath: '/',
        filename: 'bundle.js'
    },

    plugins: [

        new webpack.DefinePlugin(GLOBALS),

    ],
    module: {
        loaders: [
            {   test: /\.js$/,   exclude:  /node_modules/,  loaders: ['babel-loader'] },
        ]
    }
};
