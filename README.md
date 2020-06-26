# 原生 js 实现 9宫格 FLIP 效果

## Demo

![效果](./FLIP.gif)

[codepen](https://codepen.io/claviering/pen/MWKoXMx)

## Usage

```html
<div class="button-content">
  <button id="play" class="play-button">乱序</button>
</div>
<div id="app"></div>
```

```js
const flipNumber = require('flip-number-9-squares');
import "flip-number-9-squares/index.css";
const config = {
  app: 'app', // 容器 id
  play: 'play', // 按钮 id
  time: 1, // 动画时间 单位 s
  timingFunction: 'linear', // transition-timing-function: 动画速度函数
};
flipNumber.flip(config);
```

## 浏览器

使用 dist 目录

## 参考

> https://zhuanlan.zhihu.com/p/146641652

> https://github.com/sl1673495/flip-animation

> http://sl1673495.gitee.io/flip-animation/