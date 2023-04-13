# 基于vant4封装的表单生成器

使用文档：[vant4-generator](https://qq390405712.gitee.io/vant4-generator-docs)

## 安装

- **步骤 1：** 安装依赖

  ```bash
    # 选择一个你喜欢的包管理器

    # NPM
    $ npm install vant vant4-generator --save

    # Yarn
    $ yarn add vant vant4-generator

    # pnpm
    $ pnpm install vant vant4-generator
  ```

- **步骤 2：** 引入依赖

全局注册
```ts
import App from './App.vue'
import 'vant/lib/index.css';

import { FormGenerator } from 'vant4-generator'

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
import { FormGenerator } from 'vant4-generator'
// ...
</script>
```