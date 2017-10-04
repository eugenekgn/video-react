import express from 'express';
import path from 'path';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config.dev.js';
import webpackHotMiddleware from 'webpack-hot-middleware';
import bodyParser from 'body-parser';

const PORT = 9000;

const app = express();
app.use(bodyParser.json());

// import api from './routes/api';
// app.use('/api', api);

const compiler = webpack(webpackConfig);

app.use(webpackMiddleware(compiler, {
  hot: true,
  publicPath: webpackConfig.output.publicPath,
  noInfo: true,
}));
app.use(webpackHotMiddleware(compiler));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(PORT, () => {
  console.log('Running on port', PORT)
});