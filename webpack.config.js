const path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
const GoogleFontsPlugin = require("google-fonts-webpack-plugin")

module.exports = {
  entry: './src/app/js/whistlepostnet.js',
  output: {
    filename: 'js/whistlepostnet.bundle.js',
    path: path.resolve(__dirname, 'src/app')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
	  {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
		  {
            loader: 'file-loader',
            options: {
            	'outputPath': 'images/',
            	'useRelativePath': true,
            	publicPath: '/apps/whistlepostnet/images/'
			}
          }
	  	]
      },
	  {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
		  {
            loader: 'file-loader',
            options: {
            	'outputPath': 'fonts/',
            	'useRelativePath': true,
				publicPath: '/apps/whistlepostnet/fonts/'
			}
          }
        ]
      },
	  {
        test: require.resolve('jquery'),
        use: [
        	{
			  loader: 'expose-loader',
			  options: 'jQuery'
		    },
		    {
				loader: 'expose-loader',
				options: '$'
			}
		]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("css/whistlepostnet.bundle.css"),
    new GoogleFontsPlugin({
		fonts: [
			{ family: "Roboto" }
		],
		path: 'fonts/',
		filename: 'css/fonts.css'
	})
  ]
};
