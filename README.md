# vite-plugin-vue-sfcextendtag

## 说明😮
vue3 组件现在支持多个根元素了，
但是在某些特殊场景，比如想为页面切换时添加过渡动画：
```vue
<tempalte>
  // transition 不支持多个元素过渡
  <transition>
    <router-view></router-view>
  </transition>
</tempalte>
```
但你又不想添加一级嵌套（🐱），
你只需在template根标签上添加tag属性，
这样看起来似乎就没有多一级嵌套了（插件会在vue处理之前帮你格式化好）


## 使用🙃
1. 安装
```
npm i vite-plugin-vue-sfcextendtag
```

2. 配置

```typescript
// vite.config.ts
...
import sfcExtendTag from "vite-plugin-vue-sfcextendtag"
...
{
  ...
  plugins: [
    ...
    // 必须在vue插件之前
    sfcExtendTag(),
    vue(...),
    ...
  ]

  ...
}


```

3. 使用

```html
<!-- xxx.vue -->

<script>...</script>
<!-- 不要设置lang属性 -->
<template tag="div" class="root" a="1" @click="handlerClick">
  <h1>hello</h1>
  <h2>world</h2>
</tempalte>

<style>
  .root {
    ...
  }
</style>

<!-- 插件会解析template根标签的属性，并转换成： -->
<script>...</script>

<template>
  <div class="root" a="1" @click="handlerClick">
    <h1>hello</h1>
    <h2>world</h2>
  </div>
</tempalte>

<style>
  .root {
    ...
  }
</style>

```

## 注意😱
<!-- 1. template 标签不能设置lang为其它类型，只允许普通标签写法 -->
1. template 原生有个lang属性（pug），不要设置！不要设置！不要设置！