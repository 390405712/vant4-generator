# 基于vant3封装的表单生成器

使用文档：[vant3-generator](https://qq390405712.gitee.io/vant3-generator-docs)

## 安装

- **步骤 1：** 安装依赖

  ```bash
    # 选择一个你喜欢的包管理器

    # NPM
    $ npm install vant@3.6.11 vant3-generator --save

    # Yarn
    $ yarn add vant@3.6.11 vant3-generator

    # pnpm
    $ pnpm install vant@3.6.11 vant3-generator
  ```

- **步骤 2：** 引入依赖

全局注册
```ts
import App from './App.vue'
import 'vant/lib/index.css';

import { FormGenerator } from 'vant3-generator'

const app = createApp(App)

app.component('FormGenerator', FormGenerator);

app.mount('#app')
```
按需引入
```vue
<template>
  <FormGenerator :model="form" :formOption="formOption" />
</template>
<script lang="tsx" setup>
import { FormGenerator } from 'vant3-generator'
// ...
</script>
```