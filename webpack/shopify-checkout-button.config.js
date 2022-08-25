
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        "sezzle-checkout-button-asset": ['./src/sezzle-checkout-button/sezzle-checkout-button-asset.js'],
        "sezzle-checkout-button-asset.min": ['./src/sezzle-checkout-button/sezzle-checkout-button-asset.js'],
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js',
        libraryTarget: 'var',
        library: 'SezzleCheckoutButton',
        libraryExport: 'default',
        publicPath: '/build/',
    },
    target: ['web', 'es5'],
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                '@babel/preset-env',
                                {
                                    modules: false,
                                    targets: {
                                        ie: '11',
                                    },
                                },
                            ],
                        ],
                    },
                },
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
    ],
    optimization: {
        minimize: true,
    },
    devServer: {
        static: './',
    },
};
