(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{75:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),i=(n(0),n(99)),c={id:"wildcard",title:"Wildcard",sidebar_label:"Wildcard"},o={unversionedId:"api/wildcard",id:"api/wildcard",isDocsHomePage:!1,title:"Wildcard",description:"`ts",source:"@site/docs/api/wildcard.md",permalink:"/engine/docs/api/wildcard",editUrl:"https://github.com/code11/engine/edit/master/docs/docs/api/wildcard.md",sidebar_label:"Wildcard",sidebar:"docs",previous:{title:"Param",permalink:"/engine/docs/api/param"},next:{title:"Path",permalink:"/engine/docs/api/path"}},l=[{value:"Overview",id:"overview",children:[]},{value:"Example",id:"example",children:[{value:"What changed?",id:"what-changed",children:[]}]}],d={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),'import { Wildcard } from "@c11/engine.macro"\n')),Object(i.b)("h2",{id:"overview"},"Overview"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Wildcard")," allow selecting arbitrarily deep paths from state."),Object(i.b)("p",null,"They are meant to be used by ",Object(i.b)("inlineCode",{parentName:"p"},"producer")," to obtain more powerful triggers."),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("p",null,"For example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"cons titleWatchProducer: producer = ({\n  title = Observe.todos[Wildcard].title\n}) => { ... }\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"titleWatchProducer")," will re-run whenever any todo's title changes."),Object(i.b)("h3",{id:"what-changed"},"What changed?"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Wildcard")," triggers producer whenever anything on the matching path changes, but\n",Object(i.b)("inlineCode",{parentName:"p"},"producer")," won't know what exactly has changed. To get information about exactly\nwhat has changed, ",Object(i.b)("inlineCode",{parentName:"p"},"Wildcard")," can be assigned to another\n",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/arg"}),"Arg"),", to get information about exactly which path\nhas received the change. For example,"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"const prod: producer = ({\n  id = Wildcard,\n  title = Observe.todos[Arg.id].title\n}) => { ... }\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"id")," will contain the changed todo's ID."),Object(i.b)("p",null,"Assign the ",Object(i.b)("inlineCode",{parentName:"p"},"Wildcard")," to an ",Object(i.b)("inlineCode",{parentName:"p"},"Arg")," is also the only way to use ",Object(i.b)("inlineCode",{parentName:"p"},"Wildcard")," with\n",Object(i.b)("inlineCode",{parentName:"p"},"Update")," operator. Only ",Object(i.b)("inlineCode",{parentName:"p"},"Observe")," can make use of ",Object(i.b)("inlineCode",{parentName:"p"},"Wildcard")," directly in its\npath."))}p.isMDXComponent=!0},99:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=a.a.createContext({}),p=function(e){var t=a.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),b=p(n),s=r,m=b["".concat(c,".").concat(s)]||b[s]||u[s]||i;return n?a.a.createElement(m,o(o({ref:t},d),{},{components:n})):a.a.createElement(m,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=s;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var d=2;d<i;d++)c[d]=n[d];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);