# 项目步骤

## 1.创建项目

```powershell
create-react-app airbnb
```

## 2.初始化项目

### 2.1.引入ico图标

### 2.2.修改title

### 2.3.引入jsconfig.json

react项目默认不给创建jsconfig.json文件，从以前写的vue项目中拿一个

### 2.4.划分目录结构

- assets
  - css
  - img
- base-ui
- components
- hooks
- router
- store
- views
- utils
- services

### 2.5.配置别名

vue项目初始化中，默认给配置好了别名，@就是src

react项目需要自己手动配置别名。

方案一：npm run eject（将react的配置文件暴露出去，暴露出去后就不能复原，不建议使用）

方案二：craco => create-react-app config（在外部生成一个新的配置文件，最后会合并进去，建议使用）

`npm i @craco/craco -D` 或 `npm i @craco/craco@alpha -D`

less也跟着一起配置了

`npm i craco-less -D` 或 `npm i craco-less@2.1.0-alpha.0 -D`

将package.json中scripts中的react-scripts改为craco

在项目根目录下创建一个名为craco.config.js的文件

```js
// craco.config.js
const path = require('path')
const resolve = pathname => path.resolve(__dirname, pathname)
const CracoLessPlugin = require("craco-less")

module.exports = {
  plugins: [
    // less
    {
      plugin: CracoLessPlugin
    }
  ],
  // webpack
  webpack: {
    alias: {
      "@": resolve("src"),
      "components": resolve("src/components"),
      "utils": resolve("src/utils")
    }
  }
}
```

### 2.6.样式的初始化

安装normalize.css进行样式的初始化，npm i normalize.css

css文件夹下创建reset.css，variables.css，index.css

如果安装less，可以直接写less

```js
// 在index.js中导入
import 'normalize.css'
import '@/assets/css/index.css'
```

### 2.7.配置路由

#### 2.7.1.安装

`npm i react-router-dom`

#### 2.7.2.在index.js中导入

```js
// index.js
import { Suspense } from 'react'
import { HashRouter } from 'react-router-dom'
// 或
import { BrowserRouter } from 'react-router-dom'

// 因为用到了路由懒加载，所以要用Suspense进行包裹
<Suspense fallback='loading'>
  <HashRouter>
    <App />
  </HashRouter>
</Suspense>
```

#### 2.7.3.配置路由映射表

```js
// router/index.js
import React from 'react'
import { Navigate } from 'react-router-dom'

const Home = React.lazy(() => import('@/views/home'))
const Detail = React.lazy(() => import('@/views/detail'))
const Entire = React.lazy(() => import('@/views/entire'))

const routes = [
  {
    path: '/',
    element: <Navigate to='/home' />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/detail',
    element: <Detail />
  },
  {
    path: '/entire',
    element: <Entire />
  }
]

export default routes
```

#### 2.7.4.在页面中使用

```js
import { useRoutes } from 'react-router-dom'

import routers from './router'

// 占位
{useRoutes(routes)}
```

### 2.8.Redux配置

#### 2.8.1.安装

`npm i @reduxjs/toolkit react-redux`

#### 2.8.2.各个文件的配置

```js
// sotre/index.js

import { configureStore } from "@reduxjs/toolkit"
import homeReducer from "./modules/home"

const store = configureStore({
  reducer: {
    home: homeReducer
  }
})

export default store
```

```js
// index.js

import { Provider } from 'react-redux'

import store from './store'

<Provider store={store}>
  <App />
</Provider>
```

```js
// RTK方式
// store/modules/home.js

import { createSlice } from "@reduxjs/toolkit"

const homeReducer = createSlice({
  name: 'home',
  initialState: {},
  reducers: {
    foo: (state, { payload }) => {}
  }
})

export const { foo } = homeReducer.actions
export default homeReducer.reducer
```

```js
// 普通方式
// store/modules/entire/reducer.js

import { TYPE1 } from "./constants"

const initialState = {}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case TYPE1:
      // 操作派发过来的操作
      return
    default:
      return state
  }
}

export default reducer
```

### 2.9.Axios二次封装

#### 2.9.1.安装

`npm i axios`

#### 2.9.2.二次封装

```js
// services/request/index.js

import axios from "axios"
import { BASE_URL, TIMROUT } from "./config"

class Request {
  constructor(baseURL, timeout = 5000) {
    this.instance = axios.create({
      baseURL,
      timeout
    })

    this.instance.interceptors.request.use(config => {
      return config
    })

    this.instance.interceptors.response.use(res => {
      return res
    }, err => {
      return err
    })
  }

  request(config) {
    return this.instance.request(config)
  }

  get(url, config) {
    return this.request({ ...config, url, method: 'get' })
  }

  post(url, config) {
    return this.request({ ...config, url, method: 'post' })
  }
}

const request = new Request(BASE_URL, TIMROUT)

export default request
```
