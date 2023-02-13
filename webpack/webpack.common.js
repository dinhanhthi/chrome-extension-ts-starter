const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')
const srcDir = path.join(__dirname, '..', 'src')

module.exports = {
  entry: {
    popup: path.join(srcDir, 'scripts/popup.ts'),
    options: path.join(srcDir, 'scripts/options.ts'),
    background: path.join(srcDir, 'scripts/background.ts'),
    content: path.join(srcDir, 'scripts/content.ts'),
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(scss|css)$/,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                ident: 'postcss',
                plugins: ['tailwindcss', 'autoprefixer']
              }
            }
          },
          // Compiles Sass to CSS
          'sass-loader'
        ]
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-inline-loader'
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: path.resolve('src/static'), to: path.resolve('dist') },
        { from: path.resolve('src/styles'), to: path.resolve('dist/styles') },
        { from: path.resolve('src/html'), to: path.resolve('dist') }
      ],
      options: {}
    })
  ]
}
