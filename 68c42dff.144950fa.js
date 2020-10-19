(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{74:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(6),i=(n(0),n(99)),o={id:"update",title:"Update",sidebar_label:"Update"},p={unversionedId:"api/update",id:"api/update",isDocsHomePage:!1,title:"Update",description:"`ts",source:"@site/docs/api/update.md",permalink:"/engine/docs/api/update",editUrl:"https://github.com/code11/engine/edit/master/docs/docs/api/update.md",sidebar_label:"Update",sidebar:"docs",previous:{title:"Get",permalink:"/engine/docs/api/get"},next:{title:"Prop",permalink:"/engine/docs/api/prop"}},c=[{value:"Overview",id:"overview",children:[]},{value:"API",id:"api",children:[]},{value:"Example",id:"example",children:[]}],l={rightToc:c};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),'import { Update } from "@c11/engine.macro"\n')),Object(i.b)("h2",{id:"overview"},"Overview"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Update")," provides the ability to update values in the global state. ",Object(i.b)("inlineCode",{parentName:"p"},"Update")," is\nthe dual of ",Object(i.b)("inlineCode",{parentName:"p"},"Observe"),". ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/observe"}),"Observe")," enables reading live values\nfrom state, ",Object(i.b)("inlineCode",{parentName:"p"},"Update")," allows changing values in state."),Object(i.b)("h2",{id:"api"},"API"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Update.<path>")," returns an object with following properties:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},".set(val: any)")," to replace the value of ",Object(i.b)("inlineCode",{parentName:"li"},"<path>")," in state, or create it if it\ndoesn't exist yet."),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},".merge(val: any)")," accepts an object, and merge it with existing object value\nof ",Object(i.b)("inlineCode",{parentName:"li"},"<path>")," in state"),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},".remove()")," removes the ",Object(i.b)("inlineCode",{parentName:"li"},"<path>")," from state")),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("p",null,"If the state looks like:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "foo": {\n    "bar": "baz"\n  }\n}\n')),Object(i.b)("p",null,"Operations to change the value of ",Object(i.b)("inlineCode",{parentName:"p"},"bar")," can be obtained by assigning\n",Object(i.b)("inlineCode",{parentName:"p"},"Update.foo.bar")," in the header of a ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/view"}),"view"),". e.g"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"const MyComponent = ({ bar: Update.foo.bar }) => {\n  bar.set('qux');\n  ...\n}\n")))}b.isMDXComponent=!0},99:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},d=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=b(n),s=a,m=d["".concat(o,".").concat(s)]||d[s]||u[s]||i;return n?r.a.createElement(m,p(p({ref:t},l),{},{components:n})):r.a.createElement(m,p({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=s;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);