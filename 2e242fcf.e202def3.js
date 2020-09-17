(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{65:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return s}));var n=r(2),a=r(6),o=(r(0),r(88)),i={id:"observe",title:"Observe",sidebar_label:"Observe"},c={unversionedId:"api/observe",id:"api/observe",isDocsHomePage:!1,title:"Observe",description:'Observe gives the ability to observe values from global state. To get a "live"',source:"@site/docs/api/observe.md",permalink:"/engine/docs/api/observe",editUrl:"https://github.com/code11/engine/edit/master/docs/docs/api/observe.md",sidebar_label:"Observe",sidebar:"docs",previous:{title:"view",permalink:"/engine/docs/api/view"},next:{title:"Get",permalink:"/engine/docs/api/get"}},p=[],b={rightToc:p};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Observe"),' gives the ability to observe values from global state. To get a "live"\nversion of a value from Engine\'s global state, state properties can be directly\naccessed from imported ',Object(o.b)("inlineCode",{parentName:"p"},"Observe"),"."),Object(o.b)("p",null,"e.g if the state looks like:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "foo": {\n    "bar": "baz"\n  }\n}\n')),Object(o.b)("p",null,"value of ",Object(o.b)("inlineCode",{parentName:"p"},"bar")," can be obtained by assigning ",Object(o.b)("inlineCode",{parentName:"p"},"Observe.foo.bar")," in header of the\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/view"}),"view")," or ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/producer"}),"producer"),". For example,"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"const MyView: view = ({ barVal: Observe.foo.bar }) => { ... }\n")),Object(o.b)("p",null,"Whenever an ",Object(o.b)("inlineCode",{parentName:"p"},"Observe"),"d value in state is changed (e.g with\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/update"}),"Update"),"), the view or producer using it is re-triggered."))}s.isMDXComponent=!0},88:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=a.a.createContext({}),s=function(e){var t=a.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=s(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),l=s(r),d=n,f=l["".concat(i,".").concat(d)]||l[d]||u[d]||o;return r?a.a.createElement(f,c(c({ref:t},b),{},{components:r})):a.a.createElement(f,c({ref:t},b))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var b=2;b<o;b++)i[b]=r[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);