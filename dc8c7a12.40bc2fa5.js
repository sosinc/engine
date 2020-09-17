(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{81:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return d})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var o=n(2),a=n(6),i=(n(0),n(88)),r={id:"updating-state-from-components",title:"Updating State from Components",sidebar_label:"Updating State"},d={unversionedId:"quick-start-tutorial/updating-state-from-components",id:"quick-start-tutorial/updating-state-from-components",isDocsHomePage:!1,title:"Updating State from Components",description:"Rendering our state in components is one piece of the puzzle, another piece is",source:"@site/docs/quick-start-tutorial/updating-state-from-components.md",permalink:"/engine/docs/quick-start-tutorial/updating-state-from-components",editUrl:"https://github.com/code11/engine/edit/master/docs/docs/quick-start-tutorial/updating-state-from-components.md",sidebar_label:"Updating State",sidebar:"docs",previous:{title:"Accessing State in Components",permalink:"/engine/docs/quick-start-tutorial/accessing-state-in-components"},next:{title:"Introducing Producers",permalink:"/engine/docs/quick-start-tutorial/introducing-producers"}},s=[{value:"Many faced component",id:"many-faced-component",children:[]}],c={rightToc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Rendering our state in components is one piece of the puzzle, another piece is\nmanipulating state from components. Changes below make it possible to toggle the\nstatus of ",Object(i.b)("inlineCode",{parentName:"p"},"Todo"),"s."),Object(i.b)("p",null,"In ",Object(i.b)("inlineCode",{parentName:"p"},"src/Todo.tsx"),","),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-diff"}),'import React from "react";\n- import { view, Observe, Prop } from "@c11/engine.macro";\n+ import { view, Observe, Prop, Update } from "@c11/engine.macro";\n\n- const Todo: view = ({ title = Observe.todosById[Prop.id].title }) => (\n+ const Todo: view = ({\n+   title = Observe.todosById[Prop.id].title,\n+   updateStatus = Update.todosyById[Prop.id].status\n+ }) => (\n  <li>\n    <div className="view">\n-      <input className="toggle" type="checkbox" />\n+       <input\n+         className="toggle"\n+         type="checkbox"\n+         checked={status === TodoStatuses.done}\n+         onChange={() =>\n+           updateStatus.set(\n+             status === TodoStatuses.done\n+               ? TodoStatuses.pending\n+               : TodoStatuses.done\n+           )\n+         }\n+       />\n      <label>{title}</label>\n      <button className="destroy" />\n    </div>\n  </li>\n);\n\nexport default Todo;\n')),Object(i.b)("p",null,"Above snippet:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Uses ",Object(i.b)("inlineCode",{parentName:"li"},"Observe.todosById<todoId>.status")," for deciding whether the checkbox for\nthe ",Object(i.b)("inlineCode",{parentName:"li"},"Todo")," is checked or not"),Object(i.b)("li",{parentName:"ol"},"Uses ",Object(i.b)("inlineCode",{parentName:"li"},"Update.todosById<todoId>.status")," to change status of the TodoItem.\n",Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/api/update"}),"Update")," is the dual of ",Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/api/observe"}),"Observe"),".\nObserve allows reading any value from the global state, Update allows\nchanging them. ",Object(i.b)("inlineCode",{parentName:"li"},"Update.<path>")," returns an object with a number of methods to\nconveniently work with our state. You can read ",Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/api/update"}),"more about Update in api\ndocs"),".")),Object(i.b)("h2",{id:"many-faced-component"},"Many faced component"),Object(i.b)("p",null,"To make the ",Object(i.b)("inlineCode",{parentName:"p"},"Todo"),"s editable, the HTML elements that are used to display the\nTodoItem need to be changed. Instead of rendering ",Object(i.b)("inlineCode",{parentName:"p"},"title")," in a ",Object(i.b)("inlineCode",{parentName:"p"},"<label>"),", an\n",Object(i.b)("inlineCode",{parentName:"p"},"<input>")," serves the purpose of editing the title better. It's fair to say that\n",Object(i.b)("inlineCode",{parentName:"p"},"Todo"),' can be in one of two modes at a time: "viewing" or "editing".'),Object(i.b)("p",null,"Create an enum for all different modes a Todo can be in. In ",Object(i.b)("inlineCode",{parentName:"p"},"src/types.tsx"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-diff"}),'+ export enum TodoModes {\n+   viewing = "viewing",\n+   editing = "editing"\n+ }\n')),Object(i.b)("p",null,"Also update the type for ",Object(i.b)("inlineCode",{parentName:"p"},"TodoItem")," to support TodoMode. In ",Object(i.b)("inlineCode",{parentName:"p"},"src/types.tsx"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-diff"}),"export interface TodoItem {\n  id: string;\n  title: string;\n  status: TodoStatuses;\n+ mode: TodoModes;\n}\n")),Object(i.b)("p",null,"In such scenarios, Engine recommends that views should be split into different\nStates. Go ahead and create two versions for our ",Object(i.b)("inlineCode",{parentName:"p"},"Todo")," component for the two\nstates it can be in. For better separation of related code, different states of\n",Object(i.b)("inlineCode",{parentName:"p"},"Todo")," component are put in their own files."),Object(i.b)("p",null,"Rename ",Object(i.b)("inlineCode",{parentName:"p"},"src/Todo.tsx")," to ",Object(i.b)("inlineCode",{parentName:"p"},"src/Todo/index.tsx")),Object(i.b)("p",null,"This will not need a change in other components which import ",Object(i.b)("inlineCode",{parentName:"p"},"Todo")," (i.e ",Object(i.b)("inlineCode",{parentName:"p"},"App"),"),\nand gives a directory to nicely keep ",Object(i.b)("inlineCode",{parentName:"p"},"Todo.View")," and ",Object(i.b)("inlineCode",{parentName:"p"},"Todo.Edit")," close together."),Object(i.b)("p",null,"Create ",Object(i.b)("inlineCode",{parentName:"p"},"src/Todo/View.tsx")," with following contents"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx"}),'import React from "react";\nimport { view, Observe, Prop, Update } from "@c11/engine.macro";\nimport { TodoStatuses } from "../types";\n\nconst View: view = ({\n  title = Observe.todosById[Prop.id].title,\n  status = Observe.todosById[Prop.id].status,\n  updateStatus = Update.todosById[Prop.id].status\n}) => (\n    <li>\n      <div className="view">\n        <input\n          className="toggle"\n          type="checkbox"\n          checked={status === TodoStatuses.done}\n          onChange={() =>\n            updateStatus.set(\n              status === TodoStatuses.done\n                ? TodoStatuses.pending\n                : TodoStatuses.done\n            )\n          }\n        />\n        <label>{title}</label>\n        <button className="destroy" />\n      </div>\n    </li>\n  );\n\nexport default View;\n')),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Todo.tsx")," view is practically renamed to ",Object(i.b)("inlineCode",{parentName:"p"},"Todo/View.tsx")),Object(i.b)("p",null,"For the editing mode of ",Object(i.b)("inlineCode",{parentName:"p"},"Todo"),", create ",Object(i.b)("inlineCode",{parentName:"p"},"src/Todo/Edit.tsx"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx"}),'import React from "react";\nimport { view, Observe, Prop, Update } from "@c11/engine.macro";\n\nconst Edit: view = ({\n  title = Observe.todosById[Prop.id].title,\n  updateTodo = Update.todosById[Prop.id]\n}) => (\n    <li className="editing">\n      <input\n        className="edit"\n        value={title}\n        onChange={e => updateTodo.merge({ title: e.currentTarget.value })}\n      />\n    </li>\n  );\n\nexport default Edit;\n')),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"src/Todo/index.tsx")," can simply be a logical component which decides the\nappropriate view based on Todo's state. In ",Object(i.b)("inlineCode",{parentName:"p"},"src/Todo/index.tsx")),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx"}),'import React from "react";\nimport { view, Observe, Prop } from "@c11/engine.macro";\nimport View from "./View";\nimport Edit from "./Edit";\nimport { TodoModes } from "../types";\n\nconst uiStates = {\n [TodoModes.editing]: Edit,\n [TodoModes.viewing]: View\n};\n\nconst Fallback = ({ id }: { id: string }) => {\n console.warn("Invalid UI State for Todo with Id", id);\n\n return null;\n};\n\nconst Todo: view = ({ id, mode = Observe.todosById[Prop.id].mode }) => {\n const Component = uiStates[mode as TodoModes] || Fallback;\n\n return <Component id={id} />;\n};\n\nexport default Todo;\n')),Object(i.b)("p",null,"This explicitly calls out how different todo modes correspond to different\ncomponents, and adds a safe fallback in case our Todo is in an invalid state.\nSafest fallback is one which is least error prone. In this case, it is simply to\nrender nothing."),Object(i.b)("p",null,"Update todo items in initial state to also have a mode. In ",Object(i.b)("inlineCode",{parentName:"p"},"src/index.tsx")),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-diff"}),'      todosById: {\n        todo1: {\n          id: "todo1",\n          title: "Add initial state to engine",\n          isDone: false,\n+         mode: "viewing"\n        },\n        todo2: {\n          id: "todo2",\n          title: "Use initial state in components",\n          isDone: false,\n+         mode: "viewing"\n        }\n      },\n')),Object(i.b)("p",null,"Change ",Object(i.b)("inlineCode",{parentName:"p"},"TodoItem.mode")," of todos in state whenever user double clicks a\n",Object(i.b)("inlineCode",{parentName:"p"},"Todo.View"),". In ",Object(i.b)("inlineCode",{parentName:"p"},"src/Todo/View.tsx"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-diff"}),'+ import { TodoModes } from "../types";\n...\nconst View: view = ({\n  title = Observe.todosById[Prop.id].title,\n  status = Observe.todosById[Prop.id].status,\n- updateStatus = Update.todosById[Prop.id].status\n+ updateTodo = Update.todosById[Prop.id]\n}) => (\n    <li>\n      <div className="view">\n        <input\n          className="toggle"\n          type="checkbox"\n          checked={status === TodoStatuses.done}\n          onChange={() =>\n-           updateStatus.set(\n-             status === TodoStatuses.done\n-               ? TodoStatuses.pending\n-               : TodoStatuses.done\n-           )\n+           updateTodo.merge({\n+             status:\n+               status === TodoStatuses.done\n+                 ? TodoStatuses.pending\n+                 : TodoStatuses.done\n+           })\n          }\n        />\n-       <label>{title}</label>\n+       <label\n+         onDoubleClick={() => updateTodo.merge({ mode: TodoModes.editing })}\n+       >\n+         {title}\n+       </label>\n')),Object(i.b)("p",null,"Above snippet:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Changed ",Object(i.b)("inlineCode",{parentName:"li"},"Update")," from ",Object(i.b)("inlineCode",{parentName:"li"},"Update.todosById[Prop.id].status")," to\n",Object(i.b)("inlineCode",{parentName:"li"},"Update.todosById[Prop.id]"),". Since we want to update more than just status of\na Todo, it's better to minimize our component's API surface and get an\n",Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/api/update"}),"Update")," for the whole Todo item"),Object(i.b)("li",{parentName:"ol"},"Updates the method of changing status of the todo is updated as a consequence of #1"),Object(i.b)("li",{parentName:"ol"},"Adds an event-listener to change the mode of Todo when user double-clicks\nthe todo title")),Object(i.b)("p",null,"Update ",Object(i.b)("inlineCode",{parentName:"p"},"src/Todo/Edit.tsx")," so Todo can switch back to ",Object(i.b)("inlineCode",{parentName:"p"},"viewing")," mode:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-diff"}),'+ import { TodoModes } from "../types";\n...\n      <input\n        className="edit"\n        value={title}\n        onChange={e => updateTodo.merge({ title: e.currentTarget.value })}\n+       onBlur={() => updateTodo.merge({ mode: TodoModes.viewing })}\n      />\n')),Object(i.b)("p",null,"Next section introduces ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/api/producer"}),"Producer"),"s, which are another core\nconcept of Engine."))}p.isMDXComponent=!0},88:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var o=n(0),a=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},l=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),l=p(n),u=o,m=l["".concat(r,".").concat(u)]||l[u]||b[u]||i;return n?a.a.createElement(m,d(d({ref:t},c),{},{components:n})):a.a.createElement(m,d({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d.mdxType="string"==typeof e?e:o,r[1]=d;for(var c=2;c<i;c++)r[c]=n[c];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);