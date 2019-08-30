---
id: getDerivedStateFromProps
title: getDerivedStateFromProps
layout: docs
category: Reference
---

### static getDerivedStateFromProps()

* * *

```js
static getDerivedStateFromProps(props, state)
```

`getDerivedStateFromProps` 会在调用 render 方法之前调用，并且在初始挂载及后续更新时都会被调用。它应返回一个对象来更新 state，如果返回 null 则不更新任何内容。

此方法适用于[罕见的用例](/blog/2018/06/07/you-probably-dont-need-derived-state.html#when-to-use-derived-state)，即 state 的值在任何时候都取决于 props。例如，实现 `<Transition>` 组件可能很方便，该组件会比较当前组件与下一组件，以决定针对哪些组件进行转场动画。

派生状态会导致代码冗余，并使组件难以维护。
[确保你已熟悉这些简单的替代方案：](/blog/2018/06/07/you-probably-dont-need-derived-state.html)

* 如果你需要**执行副作用**（例如，数据提取或动画）以响应 props 中的更改，请改用 [`componentDidUpdate`](#componentdidupdate)。

* 如果只想在 **prop 更改时重新计算某些数据**，[请使用 memoization helper 代替](/blog/2018/06/07/you-probably-dont-need-derived-state.html#what-about-memoization)。

* 如果你想**在 prop 更改时“重置”某些 state**，请考虑使组件[完全受控](/blog/2018/06/07/you-probably-dont-need-derived-state.html#recommendation-fully-controlled-component)或[使用 `key` 使组件完全不受控](/blog/2018/06/07/you-probably-dont-need-derived-state.html#recommendation-fully-uncontrolled-component-with-a-key) 代替。

此方法无权访问组件实例。如果你需要，可以通过提取组件 props 的纯函数及 class 之外的状态，在`getDerivedStateFromProps()`和其他 class 方法之间重用代码。

请注意，不管原因是什么，都会在*每次*渲染前触发此方法。这与 `UNSAFE_componentWillReceiveProps` 形成对比，后者仅在父组件重新渲染时触发，而不是在内部调用 `setState` 时。

* * *
