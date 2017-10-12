import * as Koa from 'koa';
import * as koaBetterStatic from 'koa-better-static2';
import * as koaViews from 'koa-views';

import * as webpack from 'webpack';
import { devMiddleware } from 'koa-webpack-middleware'

import config from './config';
import * as webpackConfig from '../../src/client/webpack.config.js';
import winston from './services/winston';

import router from './routes';

const app = new Koa();

if (!config.IS_PRODUCTION) {
  app.use(devMiddleware(webpack(webpackConfig), {
    noInfo: false,
    quiet: false,
    lazy: true,

    publicPath: '/assets/',

    stats: {
      colors: true
    }
  }));
}

app.use(koaBetterStatic('public'));
app.use(koaViews('views'));
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(config.SERVER_PORT, () => {
  winston.info(`Service is listening at port ${config.SERVER_PORT}`);
});
