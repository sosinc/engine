(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{74:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(6),o=(n(0),n(89)),i={id:"update",title:"Update",sidebar_label:"Update"},p={unversionedId:"api/update",id:"api/update",isDocsHomePage:!1,title:"Update",description:"Update provides the ability to update values in the global state. Update is",source:"@site/docs/api/update.md",permalink:"/engine/docs/api/update",editUrl:"https://github.com/code11/engine/edit/master/docs/docs/api/update.md",sidebar_label:"Update",sidebar:"docs",previous:{title:"Get",permalink:"/engine/docs/api/get"},next:{title:"Prop",permalink:"/engine/docs/api/path-composers/prop"}},c=[],l={rightToc:c};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Update")," provides the ability to update values in the global state. ",Object(o.b)("inlineCode",{parentName:"p"},"Update")," is\nthe dual of ",Object(o.b)("inlineCode",{parentName:"p"},"Observe"),". ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/observe"}),"Observe")," enables reading live values\nfrom state, ",Object(o.b)("inlineCode",{parentName:"p"},"Update")," allows changing values in state."),Object(o.b)("p",null,"e.g if the state looks like:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "foo": {\n    "bar": "baz"\n  }\n}\n')),Object(o.b)("p",null,"Operations to change the value of ",Object(o.b)("inlineCode",{parentName:"p"},"bar")," can be obtained by assigning\n",Object(o.b)("inlineCode",{parentName:"p"},"Update.foo.bar")," in the header of a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/view"}),"view"),". e.g"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"const MyComponent = ({ bar: Update.foo.bar }) => {\n  bar.set('qux');\n  ...\n}\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Update.<path>")," returns an object with following properties:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},".set(val: any)")," to replace the value of ",Object(o.b)("inlineCode",{parentName:"li"},"<path>")," in state, or create it if it\ndoesn't exist yet."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},".merge(val: any)")," accepts an object, and merge it with existing object value\nof ",Object(o.b)("inlineCode",{parentName:"li"},"<path>")," in state"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},".remove()")," removes the ",Object(o.b)("inlineCode",{parentName:"li"},"<path>")," from state")))}b.isMDXComponent=!0},89:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=b(n),u=a,m=s["".concat(i,".").concat(u)]||s[u]||d[u]||o;return n?r.a.createElement(m,p(p({ref:t},l),{},{components:n})):r.a.createElement(m,p({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);