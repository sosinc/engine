(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{66:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var o=n(2),a=n(6),i=(n(0),n(82)),r={id:"accessing-state-in-components",title:"Accessing State in Components",sidebar_label:"Accessing State in Components"},c={unversionedId:"quick-start-tutorial/accessing-state-in-components",id:"quick-start-tutorial/accessing-state-in-components",isDocsHomePage:!1,title:"Accessing State in Components",description:"First we'll check if we can access todos from our state in src/App.tsx:",source:"@site/docs/quick-start-tutorial/accessing-state-in-components.md",permalink:"/engine/docs/quick-start-tutorial/accessing-state-in-components",editUrl:"https://github.com/code11/engine/edit/master/docs/docs/quick-start-tutorial/accessing-state-in-components.md",sidebar_label:"Accessing State in Components",sidebar:"docs",previous:{title:"State is King!",permalink:"/engine/docs/quick-start-tutorial/state"},next:{title:"Updating State from Components",permalink:"/engine/docs/quick-start-tutorial/updating-state-from-components"}},s=[],p={rightToc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"First we'll check if we can access todos from our state in ",Object(i.b)("inlineCode",{parentName:"p"},"src/App.tsx"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-diff"}),'import React from "react";\n+ import { view, Observe } from "@c11/engine.macro";\n+\n- const App = () => (\n+ const App: view = ({ todoIds = Observe.visibleTodoIds }) => (\n  <section className="todoapp">\n+     {console.log("TODOS", todoIds)}\n')),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"We labeled our",Object(i.b)("inlineCode",{parentName:"li"},"App")," component as a ",Object(i.b)("inlineCode",{parentName:"li"},"view")),Object(i.b)("li",{parentName:"ol"},"We assigned",Object(i.b)("inlineCode",{parentName:"li"},"Observe.visibileTodoIds")," in first argument of",Object(i.b)("inlineCode",{parentName:"li"},"App")," view")),Object(i.b)("p",null,"We can see todos ids from our state printed in console! Engine allow us to\nobserve any part of our state by assigning it as ",Object(i.b)("inlineCode",{parentName:"p"},"Observe.<path>")," in ",Object(i.b)("inlineCode",{parentName:"p"},"view"),"\nargument."),Object(i.b)("p",null,"Time to put these todos in jsx.In",Object(i.b)("inlineCode",{parentName:"p"},"src/App.tsx"),", let's extract the ",Object(i.b)("inlineCode",{parentName:"p"},"<Todo>"),"\ncomponent out of",Object(i.b)("inlineCode",{parentName:"p"},"<App>")," so that we can easily do ",Object(i.b)("inlineCode",{parentName:"p"},"map")," these ids to",Object(i.b)("inlineCode",{parentName:"p"},"Todo"),"\ncomponents.We'll put ",Object(i.b)("inlineCode",{parentName:"p"},"Todo")," in its own file. In ",Object(i.b)("inlineCode",{parentName:"p"},"src/Todo.tsx"),", add"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx"}),'import React from "react";\n\nconst Todo = ({ id }) => (\n<li>\n  <div className="view">\n    <input className="toggle" type="checkbox" />\n    <label>{id}</label>\n    <button className="destroy" />\n  </div>\n</li>\n);\n\nexport default Todo;\n')),Object(i.b)("p",null,"Now we can update our",Object(i.b)("inlineCode",{parentName:"p"},"App")," component with:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-diff"}),'+ import Todo from \'./Todo\';\n...\n      <ul className="todo-list">\n-       <li>\n-         <div className="view">\n-           <input className="toggle" type="checkbox" />\n-           <label>Give life to my TODOs</label>\n-           <button className="destroy" />\n-         </div>\n-       </li>\n+       {todoIds.map((id: string) => (\n+         <Todo id={id} key={id} />\n+       ))}\n      </ul>\n')),Object(i.b)("p",null,"As per our implementation of",Object(i.b)("inlineCode",{parentName:"p"},"Todo"),", we can now see todo ids(i.e",Object(i.b)("inlineCode",{parentName:"p"},"todo1"),",\n",Object(i.b)("inlineCode",{parentName:"p"},"todo2"),") in browser.But we want to show",Object(i.b)("inlineCode",{parentName:"p"},"TodoItem.title")," in ",Object(i.b)("inlineCode",{parentName:"p"},"Todo")," component,\nnot their id."),Object(i.b)("p",null,"This is where Engine differs from traditional React apps.Engine recommends that\n","[parent component should pass minimal data to its\nchildren]","(docs / best - practices#pass - minimal - data - to - children).Minimum amount of\ndata needed to render a",Object(i.b)("inlineCode",{parentName:"p"},"Todo")," is its",Object(i.b)("inlineCode",{parentName:"p"},"id"),".We can find the right todo from\nglobal state if we know its id.Let's modify our ",Object(i.b)("inlineCode",{parentName:"p"},"Todo")," component to follow the\nEngine way:"),Object(i.b)("p",null,"In",Object(i.b)("inlineCode",{parentName:"p"},"src/Todo.tsx")),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-diff"}),'+ import { view, Observe, Prop } from "@c11/engine.macro";\n+\n- const Todo = ({ id }) => (\n+ const Todo: view = ({ title = Observe.todosById[Prop.id].title }) => (\n<li>\n  <div className="view">\n    <input className="toggle" type="checkbox" />\n-     <label>{id}</label>\n+     <label>{title}</label>\n    <button className="destroy" />\n  </div>\n</li>\n);\n')),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"We labeled",Object(i.b)("inlineCode",{parentName:"p"},"Todo")," as a","[view]","(/docs/api / view)")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"We assigned",Object(i.b)("inlineCode",{parentName:"p"},"title")," to",Object(i.b)("inlineCode",{parentName:"p"},"Observe.todosById[Prop.id].title"),", which gave us\naccess to the title of todos from our global state."),Object(i.b)("p",{parentName:"li"},"   ","[Prop]","(/docs/api / input - macros / prop) is one of few features exported by\nEngine, which allow us to compose paths for accessing data from global state.\n",Object(i.b)("inlineCode",{parentName:"p"},"Prop.<key>")," gives us access to all the",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://reactjs.org/docs/components-and-props.html"}),"React\nprops")," passed to our\ncomponent by its parent."),Object(i.b)("p",{parentName:"li"},"  Every ",Object(i.b)("inlineCode",{parentName:"p"},"view")," in Engine can access any data path from Engine's global state.\nTrick is how to get the right thing.The input macros help to achieve clever\nways of ",Object(i.b)("strong",{parentName:"p"}," path composition ")," to get the right data into our components."))),Object(i.b)("p",null,"When we do ",Object(i.b)("inlineCode",{parentName:"p"},"Observe.todosById[Prop.id].title"),", we are telling Engine to\nlook - up a todo with ",Object(i.b)("inlineCode",{parentName:"p"},"Prop.id")," on",Object(i.b)("inlineCode",{parentName:"p"},"todosById")," object of our global state, and\nobserve its",Object(i.b)("inlineCode",{parentName:"p"},"title")," property.This gives us read - only access to",Object(i.b)("inlineCode",{parentName:"p"},"title"),"."),Object(i.b)("p",null,"This will also ensure that our component gets re - rendered whenever",Object(i.b)("inlineCode",{parentName:"p"},"title"),"\nproperty of todo with id",Object(i.b)("inlineCode",{parentName:"p"},"Prop.id")," changes.Any other changes that happen in\nthe state, ",Object(i.b)("inlineCode",{parentName:"p"},"todosById"),", or even the todo with id",Object(i.b)("inlineCode",{parentName:"p"},"Prop.id")," won't affect our\ncomponent."))}l.isMDXComponent=!0},82:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var o=n(0),a=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=l(n),m=o,u=b["".concat(r,".").concat(m)]||b[m]||d[m]||i;return n?a.a.createElement(u,c(c({ref:t},p),{},{components:n})):a.a.createElement(u,c({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,r[1]=c;for(var p=2;p<i;p++)r[p]=n[p];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);