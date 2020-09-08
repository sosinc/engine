(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{79:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(2),o=n(6),i=(n(0),n(82)),r={id:"state",title:"State is King!",sidebar_label:"State"},s={unversionedId:"quick-start-tutorial/state",id:"quick-start-tutorial/state",isDocsHomePage:!1,title:"State is King!",description:"Purpose of every software is to solve some real world problem. Data that we use",source:"@site/docs/quick-start-tutorial/state.md",permalink:"/engine/docs/quick-start-tutorial/state",editUrl:"https://github.com/code11/engine/edit/master/docs/docs/quick-start-tutorial/state.md",sidebar_label:"State",sidebar:"docs",previous:{title:"Static UI",permalink:"/engine/docs/quick-start-tutorial/static-ui"},next:{title:"Accessing State in Components",permalink:"/engine/docs/quick-start-tutorial/accessing-state-in-components"}},c=[],l={rightToc:c};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Purpose of every software is to solve some real world problem. Data that we use\nto represent the objects involved in the problem and the solution, are sometimes\ncalled ",Object(i.b)("strong",{parentName:"p"},"Domain Objects"),"."),Object(i.b)("p",null,"Every UI is just a representation of some data. Its purpose is to show this\ndata, and enable the user to intuitively make sense of, and change it. This data\nthat UI stores, operates on and represents, is called its ",Object(i.b)("strong",{parentName:"p"},"State"),". A part of\nthe state is made up of Domain objects, and is refereed to as ",Object(i.b)("strong",{parentName:"p"},"essential\nstate"),". Rest of the state is needed by the UI itself, and is called\n",Object(i.b)("strong",{parentName:"p"},"accidental state"),". e.g storage of Todo items in a todo app is essential\nstate; data like which filter is active makes the accidental state."),Object(i.b)("p",null,"Engine strongly recommends keeping a single source of truth for our\napplication's state. State of the app when it has just started up (aka initial\nstate) can be given to ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/engine"}),"Engine")," when it is instantiated:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-diff"}),'const engine = new Engine({\n+ state: {\n+   initial: { }\n+ },\n  view: {\n    element: <App />,\n    root: "#root"\n  }\n});\n')),Object(i.b)("p",null,"Careful consideration must be given for what the shape of our state is going to\nbe, even for smaller applications. After all, habits maketh man."),Object(i.b)("p",null,"Engine recommends storing our domain objects in some sort of indexed data\nstructure (e.g an ",Object(i.b)("inlineCode",{parentName:"p"},"Object"),"), so we can have instant access to any domain object\nusing just its identifier. Later in this chapter we'll see that Engine has a\nunique way to very efficiently utilize such state."),Object(i.b)("p",null,"Domain objects often cross boundaries of different components of a software\nproduct. For example, going from database to a backend application, to a\nserialized form for network transfer (e.g JSON), to UIs. It is advisable to keep\nthem in a consistent representation across different components of our system.\nDoing so builds intuition and confidence in the system."),Object(i.b)("p",null,"Usually we would have a unique ",Object(i.b)("inlineCode",{parentName:"p"},"id")," field in our database, which can uniquely\nidentify a todo. Since we are building the UI only, we don't really have any\nidentifier for our todos. We'll fake that, and add a fake ",Object(i.b)("inlineCode",{parentName:"p"},"id")," into every todo\nitem our application creates."),Object(i.b)("p",null,"Types are immensely helpful in modeling our domain objects. Let's create a\n",Object(i.b)("inlineCode",{parentName:"p"},"src/types.ts")," file, and add how our ",Object(i.b)("inlineCode",{parentName:"p"},"TodoItem")," is going to be shaped like:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),'export enum TodoStatuses {\n  pending = "pending",\n  done = "done"\n}\n\nexport interface TodoItem {\n  id: string;\n  title: string;\n  status: TodoStatuses;\n}\n')),Object(i.b)("p",null,"Notice that for the status of our ",Object(i.b)("inlineCode",{parentName:"p"},"TodoItem"),"s, we are using an enum of statuses\ninstead of a boolean flag (e.g ",Object(i.b)("inlineCode",{parentName:"p"},"isDone")," or ",Object(i.b)("inlineCode",{parentName:"p"},"isPending"),"). It is an ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/best-practices#prefer-explicit-types-over-boolean-flags"}),"Engine best\npractice")," to\nprefer explicit types over boolean flags."),Object(i.b)("p",null,"Now that we know how our ",Object(i.b)("inlineCode",{parentName:"p"},"TodoItem"),"s are going to look like, let's add some\ninitial todos for our app. In ",Object(i.b)("inlineCode",{parentName:"p"},"src/index.tsx")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-diff"}),"const engine = new Engine({\n  state: {\n-   initial: { }\n+   initial: {\n+     todosById: {\n+       todo1: { id: 'todo1', title: 'Add initial state to engine', isDone: false },\n+       todo2: { id: 'todo2', title: 'Use initial state in components', isDone: false }\n+     },\n+     visibleTodoIds: ['todo1', 'todo2']\n+   }\n+ },\n  view: {\n    element: <App />,\n    root: \"#root\"\n  }\n});\n")),Object(i.b)("p",null,"We have kept our todo items in very explicitly named ",Object(i.b)("inlineCode",{parentName:"p"},"todosById")," key, and have\nalso added a ",Object(i.b)("inlineCode",{parentName:"p"},"visibleTodoIds")," array. One of our app components (Todo listing)\nhappen to show a list of todo items. These shown todos might (and will) end up\nbeing different from our ",Object(i.b)("inlineCode",{parentName:"p"},"todosById"),". So we are keeping them in their own path\nin state. Notice that instead of copying the entire todo item, we only keep the\n",Object(i.b)("inlineCode",{parentName:"p"},"id")," in ",Object(i.b)("inlineCode",{parentName:"p"},"visibileTodoIds"),". It's crucial for maintainability that we always\nmaintain a single source of truth for our data."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"todosById")," will often be referred to in our app. Let's create a type alias for\nit so we won't have to repeat it over and over again. In ",Object(i.b)("inlineCode",{parentName:"p"},"src/types.ts"),", add:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"export type TodosById = { [id: string]: TodoItem };\n")),Object(i.b)("p",null,"It's time to show the ",Object(i.b)("inlineCode",{parentName:"p"},"TodoItem"),"s from state in our component."))}p.isMDXComponent=!0},82:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,m=d["".concat(r,".").concat(u)]||d[u]||b[u]||i;return n?o.a.createElement(m,s(s({ref:t},l),{},{components:n})):o.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var l=2;l<i;l++)r[l]=n[l];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);