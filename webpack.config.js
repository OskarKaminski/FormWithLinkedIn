module.exports = {
    entry: './src/index.js',
    output: {
        path: './',
        filename: 'bundle.js'
    },
    devServer: {
        inline: true,
        port: 3333
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'stage-2', 'react']
                }
            },
            {
                test: /\.css$/,
                loaders: ["style", "css"]
            },
            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            }
        ]
    }
};