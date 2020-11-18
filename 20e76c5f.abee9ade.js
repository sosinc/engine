(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{102:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return g}));var a=t(0),i=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=i.a.createContext({}),s=function(e){var n=i.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},d=function(e){var n=s(e.components);return i.a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},b=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(t),b=a,g=d["".concat(o,".").concat(b)]||d[b]||u[b]||r;return t?i.a.createElement(g,p(p({ref:n},l),{},{components:t})):i.a.createElement(g,p({ref:n},l))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=b;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var l=2;l<r;l++)o[l]=t[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},63:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return p})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return s}));var a=t(2),i=t(6),r=(t(0),t(102)),o={id:"engine",title:"Engine",sidebar_label:"Engine"},p={unversionedId:"api/engine",id:"api/engine",isDocsHomePage:!1,title:"Engine",description:"Engine application are created by invoking engine function:",source:"@site/docs/api/engine.md",permalink:"/engine/docs/api/engine",editUrl:"https://github.com/code11/engine/edit/master/docs/docs/api/engine.md",sidebar_label:"Engine",sidebar:"docs",previous:{title:"Wrapping Up",permalink:"/engine/docs/tutorials/react/wrapping-up"},next:{title:"Engine Modules",permalink:"/engine/docs/api/modules"}},c=[{value:"Configuration",id:"configuration",children:[{value:"<code>state</code>",id:"state",children:[]},{value:"<code>use: EngineModule[]</code>",id:"use-enginemodule",children:[]}]},{value:"Methods",id:"methods",children:[{value:"<code>app.start()</code>",id:"appstart",children:[]},{value:"<code>app.stop()</code>",id:"appstop",children:[]},{value:"<code>app.state: { [key: string]: any; }</code>",id:"appstate--key-string-any-",children:[]},{value:"<code>app.use(module: EngineModule): void</code>",id:"appusemodule-enginemodule-void",children:[]}]}],l={rightToc:c};function s(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Engine application are created by invoking ",Object(r.b)("strong",{parentName:"p"},"engine")," function:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"const app = new engine(config: EngineConfig): EngineInstance\n")),Object(r.b)("h2",{id:"configuration"},"Configuration"),Object(r.b)("p",null,"The configuration object contains the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/concepts/state"}),"initial state")," of\nthe engine app, and ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/modules"}),"Engine Modules")," it is going to use."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"type EngineConfig = {\n  state?: {\n    [key: string]: any;\n  };\n  use: EngineModule[];\n}\n")),Object(r.b)("h3",{id:"state"},Object(r.b)("inlineCode",{parentName:"h3"},"state")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"default:")," ",Object(r.b)("inlineCode",{parentName:"p"},"{}")),Object(r.b)("p",null,"The initial state that will be available to producers and views when the Engine starts."),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/concepts/state"}),"Read more about state")),Object(r.b)("h3",{id:"use-enginemodule"},Object(r.b)("inlineCode",{parentName:"h3"},"use: EngineModule[]")),Object(r.b)("p",null,"An array of Engine modules that the app will start with. These can also be added\nlater, after the ",Object(r.b)("inlineCode",{parentName:"p"},"app")," has been created using ",Object(r.b)("inlineCode",{parentName:"p"},"app.use"),". Engine modules an app\nuses make most decisiosn about it. Including how the app is going to be\nrendered, e.g as a React app."),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/modules"}),"Read more about Engine Modules")),Object(r.b)("h2",{id:"methods"},"Methods"),Object(r.b)("p",null,"The Engine instance exposes some helpful methods for interacting with the Engine runtime."),Object(r.b)("h3",{id:"appstart"},Object(r.b)("inlineCode",{parentName:"h3"},"app.start()")),Object(r.b)("p",null,"Start the Engine app, resulting in mounting all the modules currently in use. It\nis an idempotent function, i.e it can be called multiple times safely. An engine\nmodule is used only once for an engine instance, until ",Object(r.b)("inlineCode",{parentName:"p"},"app.stop()")," is called."),Object(r.b)("h3",{id:"appstop"},Object(r.b)("inlineCode",{parentName:"h3"},"app.stop()")),Object(r.b)("p",null,"Halts pending updates to the state and any other triggering of producers (or\nviews). An ",Object(r.b)("inlineCode",{parentName:"p"},"app.start()")," after a call to ",Object(r.b)("inlineCode",{parentName:"p"},"app.stop()")," will make all the modules\nto be mounted again."),Object(r.b)("h3",{id:"appstate--key-string-any-"},Object(r.b)("inlineCode",{parentName:"h3"},"app.state: { [key: string]: any; }")),Object(r.b)("p",null,"Allows patching the application state at runtime. ",Object(r.b)("inlineCode",{parentName:"p"},"app.state")," takes a new state,\nand merges it with existing state."),Object(r.b)("h3",{id:"appusemodule-enginemodule-void"},Object(r.b)("inlineCode",{parentName:"h3"},"app.use(module: EngineModule): void")),Object(r.b)("p",null,"Adds new modules to running Engine app. If Engine app is already started,\n",Object(r.b)("inlineCode",{parentName:"p"},"app.use(module)")," will do nothing until engine app is stopped and started again."))}s.isMDXComponent=!0}}]);