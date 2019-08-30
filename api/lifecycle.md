---
id: lifecycle
title: 组件的生命周期（lifecycle）
layout: docs
category: Reference
---

## 生命周期概览

React 的组件可以定义为 class 或函数的形式。class 组件目前提供了更多的功能，这些功能将在此章节中详细介绍。如需定义 class 组件，需要继承 `React.Component`：

```js
class Shudong extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

在 `React.Component` 的子类中有个必须定义的 [`render()`](#render) 函数。本章节介绍其他方法均为可选。

**我们强烈建议你不要创建自己的组件基类。** 在 React 组件中，[代码重用的主要方式是组合而不是继承](/docs/composition-vs-inheritance.html)。

>注意:
>
>React 并不会强制你使用 ES6 的 class 语法。如果你倾向于不使用它，你可以使用 `create-react-class` 模块或类似的自定义抽象来代替。请查阅[不使用 ES6](/docs/react-without-es6.html) 了解更多。

### 组件的生命周期
> {#the-component-lifecycle}
每个组件都包含“生命周期方法”，你可以重写这些方法，以便于在运行过程中特定的阶段执行这些方法。**你可以使用此[生命周期图谱](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)作为速查表**。在下述列表中，常用的生命周期方法会被加粗。其余生命周期函数的使用则相对罕见。

#### 挂载

当组件实例被创建并插入 DOM 中时，其生命周期调用顺序如下：

- [**`constructor()`**](#constructor)
- [`static getDerivedStateFromProps()`](#static-getderivedstatefromprops)
- [**`render()`**](#render)
- [**`componentDidMount()`**](#componentdidmount)

>注意:
>
>下述生命周期方法即将过时，在新代码中应该[避免使用它们](/blog/2018/03/27/update-on-async-rendering.html)：
>
>- [`UNSAFE_componentWillMount()`](#unsafe_componentwillmount)

#### 更新
> {#updating}
当组件的 props 或 state 发生变化时会触发更新。组件更新的生命周期调用顺序如下：

- [`static getDerivedStateFromProps()`](#static-getderivedstatefromprops)
- [`shouldComponentUpdate()`](#shouldcomponentupdate)
- [**`render()`**](#render)
- [`getSnapshotBeforeUpdate()`](#getsnapshotbeforeupdate)
- [**`componentDidUpdate()`**](#componentdidupdate)

>注意:
>
>下述方法即将过时，在新代码中应该[避免使用它们](/blog/2018/03/27/update-on-async-rendering.html)：
>
>- [`UNSAFE_componentWillUpdate()`](#unsafe_componentwillupdate)
>- [`UNSAFE_componentWillReceiveProps()`](#unsafe_componentwillreceiveprops)

#### 卸载
> unmounting
当组件从 DOM 中移除时会调用如下方法：

- [**`componentWillUnmount()`**](#componentwillunmount)

#### 错误处理
> error-handling
当渲染过程，生命周期，或子组件的构造函数中抛出错误时，会调用如下方法：

- [`static getDerivedStateFromError()`](#static-getderivedstatefromerror)
- [`componentDidCatch()`](#componentdidcatch)

### 其他APIs
> other-apis
组件还提供了一些额外的 API：

  - [`setState()`](#setstate)
  - [`forceUpdate()`](#forceupdate)

### class属性
> class-properties
  - [`defaultProps`](#defaultprops)
  - [`displayName`](#displayname)

### 实例属性
> instance-properties
  - [`props`](#props)
  - [`state`](#state)
