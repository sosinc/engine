(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{63:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return o})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return s}));var r=t(2),a=t(6),i=(t(0),t(78)),c={id:"packages",title:"Packages",sidebar_label:"Packages"},o={unversionedId:"packages",id:"packages",isDocsHomePage:!1,title:"Packages",description:"Engine code is divided up into multiple npm packages, which can be imported",source:"@site/docs/packages.md",permalink:"/engine/docs/packages",editUrl:"https://github.com/code11/engine/edit/master/docs/docs/packages.md",sidebar_label:"Packages",sidebar:"docs",previous:{title:"Recommended Architecture",permalink:"/engine/docs/quick-start-tutorial/mature-architecture"},next:{title:"Best Practices",permalink:"/engine/docs/best-practices"}},p=[],l={rightToc:p};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Engine code is divided up into multiple npm packages, which can be imported\nindependently on-need basis."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"@c11/engine.macro")),Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"@c11/engine.macro")," is the core of Engine. It contains all the magic that makes\nEngine so productive. Every engine app depends on this package."),Object(i.b)("p",{parentName:"li"},"This package contains ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/kentcdodds/babel-plugin-macros"}),"Babel\nMacros"),". Engine makes use\nbabel-macros of to save us from a lot of boilerplate.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"@c11/engine.types")),Object(i.b)("p",{parentName:"li"},"Typescript type-definitions for working with Engine applications???")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"@c11/engine.producer")),Object(i.b)("p",{parentName:"li"},"Used internally by @c11/macros")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"@c11/engine.react")),Object(i.b)("p",{parentName:"li"},"Contains react bindings for Engine. Whenever we are creating a React\napplication, we are going to need this one."))))}s.isMDXComponent=!0},78:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),s=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},b=function(e){var n=s(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=s(t),d=r,m=b["".concat(c,".").concat(d)]||b[d]||u[d]||i;return t?a.a.createElement(m,o(o({ref:n},l),{},{components:t})):a.a.createElement(m,o({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,c=new Array(i);c[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var l=2;l<i;l++)c[l]=t[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);