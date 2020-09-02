(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{60:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return b}));var r=t(2),a=t(6),i=(t(0),t(78)),o={id:"engine",title:"Engine",sidebar_label:"Engine"},c={unversionedId:"api/engine",id:"api/engine",isDocsHomePage:!1,title:"Engine",description:"Engine class is platform dependent part of the Engine framework. Every Engine app starts with a new instance of Engine class, which accepts different arguments depending on the platform.",source:"@site/docs/api/engine.md",permalink:"/engine/docs/api/engine",editUrl:"https://github.com/code11/engine/edit/master/docs/docs/api/engine.md",sidebar_label:"Engine",sidebar:"docs",previous:{title:"Anti Patterns",permalink:"/engine/docs/anti-patterns"},next:{title:"view",permalink:"/engine/docs/api/view"}},l=[{value:"React",id:"react",children:[]}],p={rightToc:l};function b(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Engine")," class is platform dependent part of the Engine framework. Every Engine app starts with a new instance of ",Object(i.b)("inlineCode",{parentName:"p"},"Engine")," class, which accepts different arguments depending on the platform."),Object(i.b)("h2",{id:"react"},"React"),Object(i.b)("p",null,"In case of React, an ",Object(i.b)("inlineCode",{parentName:"p"},"Engine")," instance looks like:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),'const engine = new Engine({\n  state: {\n    initial: {}\n  },\n  view: {\n    element: <App />,\n    root: "#root"\n  }\n});\n\nengine.start();\n')),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"view")),Object(i.b)("p",{parentName:"li"},"Engine React likes to take full control of the application, including how the\napplication is mounted no DOM. We accepts:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"A root react ",Object(i.b)("inlineCode",{parentName:"li"},"element")," which will be mounted to DOM"),Object(i.b)("li",{parentName:"ul"},"A query-selector on which the ",Object(i.b)("inlineCode",{parentName:"li"},"element")," will be mounted"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"state")),Object(i.b)("p",{parentName:"li"},"Engine, like Redux, keeps a global state. This global state can be very simply\ndefined by providing a plain object to ",Object(i.b)("inlineCode",{parentName:"p"},"Engine"),"'s ",Object(i.b)("inlineCode",{parentName:"p"},"state")," option."),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"state.initial")," becomes the initial state for our application. To get the\nmagic macros like ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/observe"}),"Observe")," to work, our state state\nhas to be an object.")))))}b.isMDXComponent=!0},78:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),b=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=b(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=b(t),m=r,d=s["".concat(o,".").concat(m)]||s[m]||u[m]||i;return t?a.a.createElement(d,c(c({ref:n},p),{},{components:t})):a.a.createElement(d,c({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<i;p++)o[p]=t[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);