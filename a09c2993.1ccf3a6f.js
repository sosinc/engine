(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{71:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var o=n(2),i=n(6),r=(n(0),n(82)),a={id:"introduction",title:"Introduction",sidebar_label:"Introduction"},c={unversionedId:"introduction",id:"introduction",isDocsHomePage:!0,title:"Introduction",description:"What is Code11 Engine?",source:"@site/docs/introduction.md",permalink:"/engine/docs/",editUrl:"https://github.com/code11/engine/edit/master/docs/docs/introduction.md",sidebar_label:"Introduction",sidebar:"docs",next:{title:"Usage",permalink:"/engine/docs/usage"}},l=[{value:"What is Code<sup>11</sup> Engine?",id:"what-is-code11-engine",children:[]},{value:"Goals",id:"goals",children:[]},{value:"Principles",id:"principles",children:[]}],s={rightToc:l};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h3",{id:"what-is-code11-engine"},"What is Code",Object(r.b)("sup",null,"11")," Engine?"),Object(r.b)("p",null,"Engine is a web development framework which keenly focuses on developer\nproductivity. It lets you create robust web applications with unprecedented\nsimplicity."),Object(r.b)("h3",{id:"goals"},"Goals"),Object(r.b)("p",null,"Engine strives to build applications with"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Small codebase. Less code, less bugs, more hairs still on head"),Object(r.b)("li",{parentName:"ul"},"Less work for computer. Only compute what is needed for faster applications"),Object(r.b)("li",{parentName:"ul"},"Less work for developer. Minimal API which gets out of developers way. Allows\nyou to focus on the business problems, not Engine problems")),Object(r.b)("h3",{id:"principles"},"Principles"),Object(r.b)("p",null,'Instead of creating perfect bricks and sticking them together into "the perfect\napplication", ',Object(r.b)("strong",{parentName:"p"},"mold your application just like you would do with clay"),". Let it\ngradually evolve over time without any friction or constraints."),Object(r.b)("p",null,"Engine is built with keeping real-world, evolving requirements in mind, and all\nthe challenges that come with it."),Object(r.b)("h4",{id:"dumb-as-brick-components"},"Dumb as brick Components"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"A view is another representation of some data")),Object(r.b)("p",null,"Components are bricks of an Engine view as well, and they should be as dumb as\nbricks. A component does not do anything except:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Render the view it is supposed to display"),Object(r.b)("li",{parentName:"ol"},"Change the data it is supposed to represent")),Object(r.b)("h4",{id:"evolving-data"},"Evolving Data"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"At the core of every UI is a state")),Object(r.b)("p",null,"The clay of our applications is state. Although the core of the application,\nstate in engine is simply a plain old Javascript Object."),Object(r.b)("h4",{id:"reactive-computations"},"Reactive Computations"),Object(r.b)("p",null,"Dumb components, plain data, and computations capable of reacting to changes in\nthe data makes an Engine app."),Object(r.b)("p",null,"Engine apps are reactive. We start with:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"an initial state (which can be empty as well)"),Object(r.b)("li",{parentName:"ul"},"declare dumb components that represent some part(s) of state e.g a\n",Object(r.b)("inlineCode",{parentName:"li"},"TodoListItem")," component which needs a ",Object(r.b)("inlineCode",{parentName:"li"},"TodoItem")," object from state"),Object(r.b)("li",{parentName:"ul"},"declare computations that depend on some part(s) of state, e.g a ",Object(r.b)("inlineCode",{parentName:"li"},"doneCounter"),"\nfunction which depends on all ",Object(r.b)("inlineCode",{parentName:"li"},"TodoItems")," in state")),Object(r.b)("p",null,"Engine takes care of updating the view, and re-running the computations only\nwhen their dependencies from state change."),Object(r.b)("p",null,"This is all the plumbing needed to build an Engine app!"))}p.isMDXComponent=!0},82:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var o=n(0),i=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),p=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,m=u["".concat(a,".").concat(d)]||u[d]||b[d]||r;return n?i.a.createElement(m,c(c({ref:t},s),{},{components:n})):i.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<r;s++)a[s]=n[s];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);