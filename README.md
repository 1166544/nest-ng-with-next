# Nest & next

## 1.Charles

> 对接接口时借助 Charles 抓包析工具能提升开发效率和快速定位问题,请注意 Charles 端口是否已设置为 8888(默认值)

[Charles Web Debugging Proxy](https://www.charlesproxy.com/)

<br/>
 
## 2.开发环境运行

```js


npm run client:dev				// local start on development mode

visit: http://localhost:8088
```

## 3.生产环境运行

```js
npm run build

and

cross-env NODE_ENV=production npm run start     // server start on production mode

cross-env NODE_ENV=development npm run start    // server start on development mode
```
