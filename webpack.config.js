// const path = require('path')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
// const dotenv = require('dotenv')
// const webpack = require('webpack')

// module.exports = (env) => {
//   // Загружаем .env файл, основанный на текущем окружении
//   const currentEnv = dotenv.config({
//     path: `./.env.${env.ENVIRONMENT || 'development'}`,
//   }).parsed

//   // Преобразуем переменные окружения для DefinePlugin
//   const envKeys = Object.keys(currentEnv).reduce((prev, next) => {
//     prev[`process.env.${next}`] = JSON.stringify(currentEnv[next])
//     return prev
//   }, {})

//   return {
//     entry: './src/index.tsx',
//     output: {
//       path: path.resolve(__dirname, 'dist'),
//       filename: 'bundle.js',
//       publicPath: '/',
//     },
//     devServer: {
//       port: process.env.PORT || 3000, //  <-  Добавлен порт по умолчанию
//       historyApiFallback: true,
//       hot: true,
//     },
//     resolve: {
//       extensions: ['.tsx', '.ts', '.js', '.jsx'],
//       //  Убираем fallback для 'path', так как он нужен только во время сборки
//     },
//     module: {
//       rules: [
//         // ... (правила для tsx, scss, изображений и шрифтов - остаются без изменений)
//       ],
//     },
//     plugins: [
//       new HtmlWebpackPlugin({
//         template: './public/index.html',
//       }),
//       new webpack.DefinePlugin(envKeys), //  <- Используем DefinePlugin
//     ],
//   }
// }

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const dotenv = require('dotenv')
const webpack = require('webpack')

module.exports = (env) => {
  const currentEnv = dotenv.config({ path: `./.env.${env.ENVIRONMENT}` }).parsed

  const envKeys = Object.keys(currentEnv).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(currentEnv[next])
    return prev
  }, {})

  return {
    entry: './src/index.tsx',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      publicPath: '/',
    },
    devServer: {
      port: process.env.PORT,
      historyApiFallback: true,
      hot: true,
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.jsx', '.svg'],
    },

    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react',
                '@babel/preset-typescript',
              ],
              plugins: [
                [
                  '@babel/plugin-transform-runtime',
                  {
                    definitions: {
                      'process.env': {},
                    },
                  },
                ],
              ],
            },
          },
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader',
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [['autoprefixer', {}]],
                },
              },
            },
          ],
        },
        {
          test: /\.(png|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.svg$/,
          include: path.resolve(__dirname, 'src/assets'),
          use: ['@svgr/webpack'],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
      }),
      new webpack.DefinePlugin(envKeys),
    ],
  }
}
