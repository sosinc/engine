(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{84:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var a=n(2),r=n(6),o=(n(0),n(91)),i={id:"best-practices",title:"Best Practices",sidebar_label:"Best Practices"},s={unversionedId:"best-practices",id:"best-practices",isDocsHomePage:!1,title:"Best Practices",description:"Use Global state as a single source of truth",source:"@site/docs/best-practices.md",permalink:"/engine/docs/best-practices",editUrl:"https://github.com/code11/engine/edit/master/docs/docs/best-practices.md",sidebar_label:"Best Practices",sidebar:"docs",previous:{title:"Packages",permalink:"/engine/docs/packages"},next:{title:"Debugging",permalink:"/engine/docs/guides/debugging"}},c=[{value:"Use Global state as a single source of truth",id:"use-global-state-as-a-single-source-of-truth",children:[]},{value:"Keep a normalized state",id:"keep-a-normalized-state",children:[]},{value:"Pass minimal data to children",id:"pass-minimal-data-to-children",children:[]},{value:"Component which needs the data, maintains the data",id:"component-which-needs-the-data-maintains-the-data",children:[]},{value:"Use Object to store domain objects instead of Array",id:"use-object-to-store-domain-objects-instead-of-array",children:[]},{value:"Prefer explicit types over boolean flags",id:"prefer-explicit-types-over-boolean-flags",children:[]}],d={rightToc:c};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"use-global-state-as-a-single-source-of-truth"},"Use Global state as a single source of truth"),Object(o.b)("p",null,"An instance of ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/engine"}),"Engine")," can have a single\nglobal state, and it is recommended to use that as the single source of truth\nfor all the data required by all components of an application."),Object(o.b)("h3",{id:"keep-a-normalized-state"},"Keep a normalized state"),Object(o.b)("p",null,"Same data should not be kept in more than one paths in state."),Object(o.b)("h3",{id:"pass-minimal-data-to-children"},"Pass minimal data to children"),Object(o.b)("p",null,"Parent component should pass minimum amount of data to its children. Ideally, no\ndata should be passed to a component's children. Children are responsible for\nobserving the data they need from global state."),Object(o.b)("h3",{id:"component-which-needs-the-data-maintains-the-data"},"Component which needs the data, maintains the data"),Object(o.b)("p",null,"When different components need same data in different shapes, e.g ",Object(o.b)("inlineCode",{parentName:"p"},"TodoFooter"),"\nneeds a to show number of pending ",Object(o.b)("inlineCode",{parentName:"p"},"TodoItem"),"s, it is the responsibility of\n",Object(o.b)("inlineCode",{parentName:"p"},"TodoFooter")," to have a producer which provides ",Object(o.b)("inlineCode",{parentName:"p"},"pendingCount")," by counting\n",Object(o.b)("inlineCode",{parentName:"p"},"TodoItem.status === 'pending'")," from state."),Object(o.b)("h3",{id:"use-object-to-store-domain-objects-instead-of-array"},"Use Object to store domain objects instead of Array"),Object(o.b)("p",null,"Domain objects are the critical business objects we have modeled to solve the\nbusiness problems with our software. It is recommended to keep domain objects in\n",Object(o.b)("inlineCode",{parentName:"p"},"Object")," e.g ",Object(o.b)("inlineCode",{parentName:"p"},"todosById: { [id: string]: TodoItem }"),"."),Object(o.b)("p",null,"This is a good practice in general, and Engine provides nice optimizations for\nthis pattern. When a list of such objects is needed, a producer should be\ncreated to create and update a list of ",Object(o.b)("inlineCode",{parentName:"p"},"id"),"s."),Object(o.b)("h3",{id:"prefer-explicit-types-over-boolean-flags"},"Prefer explicit types over boolean flags"),Object(o.b)("p",null,"Instead of using boolean flags, e.g ",Object(o.b)("inlineCode",{parentName:"p"},"isDone")," and ",Object(o.b)("inlineCode",{parentName:"p"},"isEditing"),", prefer using\nexplicit types, e.g"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),'enum Statuses {\n  done: "done",\n  pending: "pending"\n}\n\nenum Modes {\n  viewing: "viewing",\n  editing: "editing"\n}\n')),Object(o.b)("p",null,"When using an ",Object(o.b)("inlineCode",{parentName:"p"},"Enum"),", prefer using a string Enum."))}l.isMDXComponent=!0},91:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=r.a.createContext({}),l=function(e){var t=r.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(n),u=a,m=p["".concat(i,".").concat(u)]||p[u]||b[u]||o;return n?r.a.createElement(m,s(s({ref:t},d),{},{components:n})):r.a.createElement(m,s({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);