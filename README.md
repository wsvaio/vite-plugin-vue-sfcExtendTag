# vite-plugin-vue-sfcextendtag

## 使用

1. 
```
npm i vite-plugin-vue-sfcextendtag
```

2. 

```typescript
// viteConfig.ts
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

3. 

```html
<!-- xxx.vue -->

<script>...</script>

<template tag="div" class="root">
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
  <div class="root">
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

## 注意
1. template 标签不能设置lang为其它类型，只允许普通标签写法