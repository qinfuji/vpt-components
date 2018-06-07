const path = require('path');
const TSDocgenPlugin = require('react-docgen-typescript-webpack-plugin');
const { CheckerPlugin } = require('awesome-typescript-loader');
module.exports = {
	module: {
		rules: [
			{
				test: /\.css?$/,
				use: ['style-loader', 'raw-loader'],
				include: path.resolve(__dirname, '../'),
			},
			{
				test: /\.less/,
				use: [
					{ loader: 'style-loader' },
					{
						loader:
							'css-loader' /*,
						options: {
							modules: true,
							localIndexName: '[name]__[local]___[hash:base64:5]'
						}*/,
					},
					{ loader: 'less-loader' },
				],
			},
			{
				test: /\.md$/,
				use: 'raw-loader',
			},
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				include: path.resolve(__dirname, '../src'),
				use: [
					//require.resolve('ts-loader'),
					require.resolve('awesome-typescript-loader'),
					require.resolve('react-docgen-typescript-loader'),
				],
			},
		],
	},
	//plugins: [new TSDocgenPlugin(), new CheckerPlugin()],
	resolve: { extensions: ['.tsx', 'ts', '.js', '.jsx'] },
};
