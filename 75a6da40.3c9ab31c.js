(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{68:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return l}));var r=t(2),o=t(6),a=(t(0),t(82)),i={id:"introducing-producers",title:"Introducing Producers",sidebar_label:"Producers"},c={unversionedId:"quick-start-tutorial/introducing-producers",id:"quick-start-tutorial/introducing-producers",isDocsHomePage:!1,title:"Introducing Producers",description:"Producers are the central entity of Engine. Engine",source:"@site/docs/quick-start-tutorial/introducing-producers.md",permalink:"/engine/docs/quick-start-tutorial/introducing-producers",editUrl:"https://github.com/code11/engine/edit/master/docs/docs/quick-start-tutorial/introducing-producers.md",sidebar_label:"Producers",sidebar:"docs",previous:{title:"Updating State from Components",permalink:"/engine/docs/quick-start-tutorial/updating-state-from-components"},next:{title:"Packages",permalink:"/engine/docs/packages"}},s=[],p={rightToc:s};function l(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/producer"}),"Producer"),"s are the central entity of Engine. Engine\nrecommends that our components should only represent the view, and have as\nlittle logic as possible (ideally components should have no logic at all).\nProducers are where logic lives in an Engine app."),Object(a.b)("p",null,"Simplest place to see producers in action can be our Todo list's footer. We'll\nuse a producer to count the number of pending todos, and show them in our view.\nAs we've done so far, let's first extract ",Object(a.b)("inlineCode",{parentName:"p"},"Footer")," out of ",Object(a.b)("inlineCode",{parentName:"p"},"src/App.tsx"),", into\nits own component. Create ",Object(a.b)("inlineCode",{parentName:"p"},"src/Footer.tsx")," with following contents:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),'import React from "react";\n\nconst Footer = () => (\n  <footer className="footer">\n    <span className="todo-count">\n      <strong>1</strong> items left\n    </span>\n    <ul className="filters">\n      <li>\n        <a href="#/" className="selected">\n          All\n        </a>\n      </li>\n      <li>\n        <a href="#/active">Active</a>\n      </li>\n      <li>\n        <a href="#/completed">Completed</a>\n      </li>\n    </ul>\n    <button className="clear-completed">Clear completed</button>\n  </footer>\n);\n\nexport default Footer;\n')),Object(a.b)("p",null,"Update ",Object(a.b)("inlineCode",{parentName:"p"},"src/App.tsx")," to use ",Object(a.b)("inlineCode",{parentName:"p"},"Footer"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-diff"}),'+ import Footer from "./Footer";\n...\n-    <footer className="footer">\n-      <span className="todo-count">\n-        <strong>1</strong> items left\n-      </span>\n-      <ul className="filters">\n-        <li>\n-          <a href="#/" className="selected">\n-            All\n-          </a>\n-        </li>\n-        <li>\n-          <a href="#/active">Active</a>\n-        </li>\n-        <li>\n-          <a href="#/completed">Completed</a>\n-        </li>\n-      </ul>\n-      <button className="clear-completed">Clear completed</button>{" "}\n-    </footer>\n+    <Footer />\n')),Object(a.b)("p",null,"We'll believe in ourselves, and trust that ",Object(a.b)("inlineCode",{parentName:"p"},"pendingCount")," is going to be\navailable in our state, and it'll always contain the correct number of pending\ntodo items. Update our ",Object(a.b)("inlineCode",{parentName:"p"},"src/Footer.tsx")," based on this assumption:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-diff"}),'+ import { view, Observe } from "@c11/engine.macro";\n- const Footer = () => (\n+ const Footer: view = ({ pendingCount = Observe.pendingCount }) => (\n  <footer className="footer">\n    <span className="todo-count">\n-     <strong>1</strong> items left\n+     <strong>{pendingCount}</strong> items left\n    </span>\n    <ul className="filters">\n')),Object(a.b)("p",null,"We could write the logic for counting pending items in the ",Object(a.b)("inlineCode",{parentName:"p"},"Footer")," itself, in\nfact, in a traditional React app that's exactly what we would have done. But\nEngine strongly recommends that we keep our logic out of our ",Object(a.b)("inlineCode",{parentName:"p"},"view"),"s, and put it\nin ",Object(a.b)("inlineCode",{parentName:"p"},"producer"),"s. Let's add a ",Object(a.b)("inlineCode",{parentName:"p"},"producer")," to our Footer. In ",Object(a.b)("inlineCode",{parentName:"p"},"src/Footer.tsx"),", add\n",Object(a.b)("inlineCode",{parentName:"p"},"pendingCounter")," producer:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-diff"}),"+ const pendingCounter: producer = ({\n+   updatePendingCount = Update.pendingCount,\n+   todosById = Observe.todosById\n+ }) => {\n+   const pendingCount = Object.values(\n+     todosById as { [id: string]: TodoItem }\n+   ).reduce(\n+     (accum: number, todo) =>\n+       todo.status === TodoStatuses.done ? accum : accum + 1,\n+     0\n+   );\n+\n+   updatePendingCount.set(pendingCount);\n+ };\n+\n+ (Footer as any).producers = [pendingCounter];\n\nexport default Footer;\n")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"producer"),"s are just normal functions which are labeled with\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/producer"}),"producer")," macro. They can access the state the same way as\n",Object(a.b)("inlineCode",{parentName:"p"},"view"),"s; they even have access to ",Object(a.b)("inlineCode",{parentName:"p"},"Prop"),"s that a view might get from its parent."),Object(a.b)("p",null,"To add a producer to a component, we assign a ",Object(a.b)("inlineCode",{parentName:"p"},".producers")," property to the\ncomponent, and pass it an array of producers."),Object(a.b)("p",null,"Similar to ",Object(a.b)("inlineCode",{parentName:"p"},"view"),"s, a producer is triggered whenever anything that it ",Object(a.b)("inlineCode",{parentName:"p"},"Observe"),"s\nchanges. Our ",Object(a.b)("inlineCode",{parentName:"p"},"pendingCounter")," producer Observes ",Object(a.b)("inlineCode",{parentName:"p"},"todosById")," object, so whenever\nanything in todosById changes, our producer is executed. Whenever status of any\ntodo item is updated, we see our ",Object(a.b)("inlineCode",{parentName:"p"},"pendingCount")," to have updated accordingly."))}l.isMDXComponent=!0},82:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),l=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=l(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(t),b=r,m=d["".concat(i,".").concat(b)]||d[b]||u[b]||a;return t?o.a.createElement(m,c(c({ref:n},p),{},{components:t})):o.a.createElement(m,c({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=b;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<a;p++)i[p]=t[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);