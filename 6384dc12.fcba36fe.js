(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{60:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return o})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return s}));var a=t(2),i=t(6),r=(t(0),t(72)),c={id:"react-quick-start",title:"Quick Start",sidebar_label:"Quick Start"},o={unversionedId:"react-quick-start",id:"react-quick-start",isDocsHomePage:!1,title:"Quick Start",description:"Although Engine itself is platform neutral, Engine's reactive features really",source:"@site/docs/react-quick-start.md",permalink:"/engine/docs/react-quick-start",editUrl:"https://github.com/code11/engine/edit/master/docs/docs/react-quick-start.md",sidebar_label:"Quick Start",sidebar:"someSidebar",previous:{title:"Usage",permalink:"/engine/docs/usage"},next:{title:"Packages",permalink:"/engine/docs/packages"}},l=[{value:"Building a React Engine App",id:"building-a-react-engine-app",children:[{value:"Install Engine",id:"install-engine",children:[]},{value:"Create an Engine",id:"create-an-engine",children:[]}]}],p={rightToc:l};function s(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Although Engine itself is platform neutral, Engine's reactive features really\nshine in context of boilerplate laden world of React. So let's get started with:"),Object(r.b)("h2",{id:"building-a-react-engine-app"},"Building a React Engine App"),Object(r.b)("p",null,"We are going to build a Todo","\u2122"," app. That's why todo apps exist, to be built\nin introductory tutorials. Let's use ",Object(r.b)("inlineCode",{parentName:"p"},"create-react-app")," to set up a vanilla\nreact app for us."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"yarn create react-app engine-todos --template typescript\n")),Object(r.b)("p",null,"We are using the typescript template here. Engine itself is written in Ts, and\nwe highly recommend using it."),Object(r.b)("p",null,"Doing a ",Object(r.b)("inlineCode",{parentName:"p"},"yarn start")," will start a vanilla react app on\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"http://localhost:3000"}),"localhost:3000"),". Before we start building our glorious\ntodos app, let's port the vanilla app to Engine."),Object(r.b)("h3",{id:"install-engine"},"Install Engine"),Object(r.b)("p",null,"Following command will install engine dependencies for us:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"yarn add @c11/engine.macro @c11/engine.react\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"@c11/engine.macros")," contain the platform agnostic core of Engine, and\n",Object(r.b)("inlineCode",{parentName:"p"},"@c11/engine.react")," contain the React bindings. You can read more about these,\nand more engine packages on ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"packages"}),"packages")," page."),Object(r.b)("h3",{id:"create-an-engine"},"Create an Engine"),Object(r.b)("p",null,"First thing we need to do is create an ",Object(r.b)("inlineCode",{parentName:"p"},"Engine")," instance, and let it take\ncontrol of our app. In the ",Object(r.b)("inlineCode",{parentName:"p"},"src/index.tsx")," file:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-diff"}),"import React from 'react';\n- import ReactDOM from 'react-dom';\n+ import { Engine } from \"@c11/engine.react\";\nimport './index.css';\nimport App from './App';\n\n- ReactDOM.render(\n-   <React.StrictMode>\n-     <App />\n-   </React.StrictMode>,\n-   document.getElementById(\"root\")\n- );\n+ const engine = new Engine({\n+   view: {\n+     element: <App />,\n+     root: \"#root\"\n+   }\n+ });\n+\n+ engine.start();\n")),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"We import and instantiate an ",Object(r.b)("inlineCode",{parentName:"li"},"Engine")," instance"),Object(r.b)("li",{parentName:"ol"},"Instead of having ",Object(r.b)("inlineCode",{parentName:"li"},"react-dom")," mounting our app to DOM, we give that honor to\nEngine")),Object(r.b)("p",null,"That's it! We are running an Engine app now."))}s.isMDXComponent=!0}}]);