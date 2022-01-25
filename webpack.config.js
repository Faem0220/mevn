const {VueLoaderPlugin} = require('vue-loader');
module.exports = {
    entry: './src/app/index.js',//Archivo de entrada a traducir
    output: {
        path: __dirname + '/src/public/js',//Salida del archivo convertido
        filename: 'bundle.js'//Nombre del archivo final
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test:/\.vue$/,
                loader:'vue-loader'
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
};