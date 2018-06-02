const path = require('path');

module.exports = {
	module: {
		rules: [
			{
				test: /\.css?$/,
				use: ['style-loader', 'raw-loader'],
				include: path.resolve(__dirname, '../')
			},
			{
				test: /\.less/,
				use: [
					{ loader: 'style-loader' },
					{ loader: 'css-loader' },
					{ loader: 'less-loader' }
				]
			},
			{
				test: /\.md$/,
				use: 'raw-loader'
			}
		]
	}
};
