(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{292:function(t,e,n){"use strict";n.r(e);var a=n(38),s=Object(a.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"_11-拆分state把请求api文章列表，数据渲染到页面上"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_11-拆分state把请求api文章列表，数据渲染到页面上","aria-hidden":"true"}},[t._v("#")]),t._v(" 11.拆分state把请求api文章列表，数据渲染到页面上")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("const initState = {\n  num: 160,\n  list: []\n}\n\n// reducer\nexport const weight = (state = initState , action) => {\n  switch (action.type) {\n    case EAT:\n    return {...state, num: state.num + 10}\n    case HUNGRY:\n    return {...state, num: state.num - 10}\n    case ARTICLE_LIST:\n    console.log('action',action)\n      return {...state, list: action.playload.article}\n    default:\n      return initState\n  }\n}\n")])])]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("export const getArticle = () =>{\n  return dispatch =>{\n    setTimeout(()=>{\n      // dispatch(eat('煎饼')) \n        axios.get('/v1/article/list').then(res=>{\n          console.log('article',res)\n          //做了一个分发\n          dispatch({type:ARTICLE_LIST,playload:res.data})\n        })\n    },2000)\n  }\n}\n")])])]),n("h3",{attrs:{id:"页面渲染"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#页面渲染","aria-hidden":"true"}},[t._v("#")]),t._v(" 页面渲染")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("    const {num, eat, hungry , eatAsync, getArticle, list} = this.props\n\nrender\n          {list.map((item,index)=>{\n            return <div key={index}>\n              {item.title}\n            </div>\n          })}\n          \nexport default connect((state)=>{\n  return {num: state.num,list:state.list}\n},{eat,hungry,eatAsync,getArticle})(App)\n")])])])])},[],!1,null,null,null);e.default=s.exports}}]);