import fs from 'fs'
import path from 'path'

import Koa from 'koa'
// import Router from 'koa-router'
import koaStatic from 'koa-static'

import React from 'react'
import { renderToString } from 'react-dom/server'

// import AssetRequireHook from 'asset-require-hook'

// AssetRequireHook({
//   extensions: [
//     'css', 'sass', 'scss',
//     'svg', 'jpg', 'jpeg', 'png', 'gif',
//     'eot', 'ttf', 'otf', 'woff2'
//   ],
//   name: 'public/[name].[ext]',
// })
import App from '../src/App'

const appConfig = {
  port: 30001
};

const koa = new Koa();

// set static
const staticDirectory = path.resolve('./dist/')
console.log('staticDirectory: ', staticDirectory)
koa.use(
 koaStatic(staticDirectory, {
   // maxage: 365 * 24 * 60 * 1000,
   // dont use 'index', otherwise accessing static resources directory will return the template directly
   index: 'root'
 })
);

const renderContent = renderToString(<div id="root"><App /></div>)
const renderTag = `<div id="root"></div>`
const templatePath = path.resolve('./dist/index.html')
console.log('templatePath: ', templatePath)
const template = fs.readFileSync(templatePath).toString()
const html = template.replace(renderTag, renderContent)

koa.use(async ctx => {
  ctx.body = html;
});

koa.listen(appConfig.port, function() {
  console.log(`server is running, listen port: ${appConfig.port} `);
});
