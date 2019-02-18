---
category: 基础
order: 10
title: ref使用方式
---

```
  constructor(props) {
    super(props)
    this.recorder = null
  }
<general ref={(ref) => { this.recorder = ref }} />
```
