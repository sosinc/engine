(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{76:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var o=n(2),a=n(6),r=(n(0),n(88)),l={id:"wrapping-up",title:"Wrapping Up",sidebar_label:"Wrapping Up"},i={unversionedId:"quick-start-tutorial/wrapping-up",id:"quick-start-tutorial/wrapping-up",isDocsHomePage:!1,title:"Wrapping Up",description:"We have learned almost all the concepts needed to build Engine apps. There is a",source:"@site/docs/quick-start-tutorial/wrapping-up.md",permalink:"/engine/docs/quick-start-tutorial/wrapping-up",editUrl:"https://github.com/code11/engine/edit/master/docs/docs/quick-start-tutorial/wrapping-up.md",sidebar_label:"Wrapping Up",sidebar:"docs",previous:{title:"State as Communication Channel",permalink:"/engine/docs/quick-start-tutorial/state-as-communication-channel"},next:{title:"Packages",permalink:"/engine/docs/packages"}},c=[{value:"Clearing completed Todos",id:"clearing-completed-todos",children:[]},{value:"Toggling status of all Todos",id:"toggling-status-of-all-todos",children:[]},{value:"Removing Todos",id:"removing-todos",children:[]}],s={rightToc:c};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"We have learned almost all the concepts needed to build Engine apps. There is a\nbit more to Engine API, about which you can read in the ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/api/engine"}),"API\nsection"),"."),Object(r.b)("p",null,"Let's wrap up by finishing our Todos app. Three last UI elements that left putting\nlife in are:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Clearing completed Todos"),Object(r.b)("li",{parentName:"ol"},"Toggling status of all Todos"),Object(r.b)("li",{parentName:"ol"},'Removing a todo item when "X" button in ',Object(r.b)("inlineCode",{parentName:"li"},"Todo")," is clicked")),Object(r.b)("p",null,"All these operations will follow the principles we have learned so far. A ",Object(r.b)("inlineCode",{parentName:"p"},"view"),"\nwill accept user's input, and store it in our state, a ",Object(r.b)("inlineCode",{parentName:"p"},"producer")," will get\ntriggered and perform the actual operation."),Object(r.b)("h2",{id:"clearing-completed-todos"},"Clearing completed Todos"),Object(r.b)("p",null,"Since removing Todo's is a new operation (i.e isn't an instance of deriving our\nstate to shape it differently), we'll keep the producer responsible for it\ncloser to the view that will trigger the producer."),Object(r.b)("p",null,"In ",Object(r.b)("inlineCode",{parentName:"p"},"src/Footer.tsx"),', let\'s add a click event listener for "Clear Completed"\ntodos button. Our view is going to use state as a communication channel to\ntrigger the producer (as discussed in ',Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/quick-start-tutorial/state-as-communication-channel"}),"last\nchapter"),")."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-diff"}),'const Footer: view = ({\n  pendingCount = Observe.pendingCount,\n  filter = Observe.filter,\n  updateFilter = Update.filter,\n+ updateClearRequest = Update.clearRequest\n}) => (\n...\n-     <button className="clear-completed">Clear completed</button>\n+     <button\n+       className="clear-completed"\n+       onClick={() => updateClearRequest.set(new Date().getTime())}\n+     >\n        Clear completed\n    </button>\n')),Object(r.b)("p",null,"We have introduced a new path in our state, ",Object(r.b)("inlineCode",{parentName:"p"},"clearRequest"),", which will contain a\nvalue when a clear operation need to be performed. In same file (i.e\n",Object(r.b)("inlineCode",{parentName:"p"},"src/Footer.tsx"),"), we'll now add a new producer which performs the actual\noperation of clearing completed todos."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx"}),"const handleClearRequest: producer = ({\n  clearRequest = Observe.clearRequest,\n  updateClearRequest = Update.clearRequest,\n  getTodosById = Get.todosById,\n  updateTodosById = Update.todosById\n}) => {\n  if (!clearRequest) {\n    return;\n  }\n\n  const todosById = getTodosById();\n  const nextTodos = Object.values(todosById)\n    .filter((todo: any) => todo.status !== TodoStatuses.done)\n    .reduce((accum: any, todo: any) => {\n      accum[todo.id] = todo;\n\n      return accum;\n    }, {});\n\n  updateTodosById.set(nextTodos);\n  updateClearRequest.set(null);\n};\n")),Object(r.b)("p",null,"We'll add it to ",Object(r.b)("inlineCode",{parentName:"p"},"Footer"),"'s producers:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx"}),"- (Footer as any).producers = [pendingCounter];\n+ (Footer as any).producers = [pendingCounter, handleClearRequest];\n")),Object(r.b)("p",null,"Notice how ",Object(r.b)("inlineCode",{parentName:"p"},"handleClearRequest")," producer is changing the value that acts as its\ntrigger. This is also a common pattern in Engine apps."),Object(r.b)("h2",{id:"toggling-status-of-all-todos"},"Toggling status of all Todos"),Object(r.b)("p",null,"Similarly, to toggle status of all Todos, we'll store a new path in state to\nwhen the \"Toggle All\" checkbox is clicked, and we'll create a producer that gets\ntriggered to do the actual work."),Object(r.b)("p",null,"In ",Object(r.b)("inlineCode",{parentName:"p"},"src/App.tsx"),", let's create store the value in state:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-diff"}),'- const App: view = ({ todoIds = Observe.visibleTodoIds }) => (\n+ const App: view = ({\n+   pendingCount = Observe.pendingCount,\n+   todoIds = Observe.visibleTodoIds,\n+   updateToggleAllRequest = Update.toggleAllRequest\n+ }) => (\n...\n-       <input id="toggle-all" className="toggle-all" type="checkbox" />\n+       <input\n+         id="toggle-all"\n+         className="toggle-all"\n+         type="checkbox"\n+         checked={pendingCount === 0}\n+         onChange={() => updateToggleAllRequest.set(new Date().getTime())}\n+       />\n')),Object(r.b)("p",null,"Add a new producer ",Object(r.b)("inlineCode",{parentName:"p"},"handleToggleAllRequest"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx"}),"const handleToggleAllRequest: producer = ({\n  toggleAllRequest = Observe.toggleAllRequest,\n  updateToggleAllRequest = Update.toggleAllRequest,\n  getTodosById = Get.todosById,\n  getPendingCount = Get.pendingCount,\n  updateTodosById = Update.todosById\n}) => {\n  if (!toggleAllRequest) {\n    return;\n  }\n\n  const todosById = getTodosById() as TodosById;\n  const pendingCount = getPendingCount();\n\n  const nextTodos = Object.values(todosById)\n    .map(todo => {\n      return {\n        ...todo,\n        status: pendingCount !== 0 ? TodoStatuses.done : TodoStatuses.pending\n      };\n    })\n    .reduce((accum, todo) => {\n      accum[todo.id] = todo;\n\n      return accum;\n    }, {} as TodosById);\n\n  updateTodosById.set(nextTodos);\n  updateToggleAllRequest.set(null);\n};\n")),Object(r.b)("p",null,"Add it to ",Object(r.b)("inlineCode",{parentName:"p"},"App"),"'s producers:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-diff"}),"- (App as any).producers = [syncVisibleTodoIds];\n+ (App as any).producers = [syncVisibleTodoIds, handleToggleAllRequest];\n")),Object(r.b)("h2",{id:"removing-todos"},"Removing Todos"),Object(r.b)("p",null,"Check out the documentation for ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/api/update"}),"Update"),", and try to implement\nthis feature in by yourself \ud83d\ude42"),Object(r.b)("details",null,Object(r.b)("summary",null,"Solution"),Object(r.b)("p",null,"In ",Object(r.b)("inlineCode",{parentName:"p"},"src/Todo/View.tsx"),","),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-diff"}),'-       <button className="destroy" />\n+       <button className="destroy" onClick={() => updateTodo.remove()} />\n'))))}d.isMDXComponent=!0},88:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return g}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),d=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=d(n),b=o,g=p["".concat(l,".").concat(b)]||p[b]||u[b]||r;return n?a.a.createElement(g,i(i({ref:t},s),{},{components:n})):a.a.createElement(g,i({ref:t},s))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<r;s++)l[s]=n[s];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);