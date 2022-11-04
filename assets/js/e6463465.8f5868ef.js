"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2359],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>d});var r=a(7294);function s(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function c(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){s(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,s=function(t,e){if(null==t)return{};var a,r,s={},n=Object.keys(t);for(r=0;r<n.length;r++)a=n[r],e.indexOf(a)>=0||(s[a]=t[a]);return s}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(r=0;r<n.length;r++)a=n[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(s[a]=t[a])}return s}var i=r.createContext({}),p=function(t){var e=r.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):c(c({},e),t)),a},u=function(t){var e=p(t.components);return r.createElement(i.Provider,{value:e},t.children)},f={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},l=r.forwardRef((function(t,e){var a=t.components,s=t.mdxType,n=t.originalType,i=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),l=p(a),d=s,m=l["".concat(i,".").concat(d)]||l[d]||f[d]||n;return a?r.createElement(m,c(c({ref:e},u),{},{components:a})):r.createElement(m,c({ref:e},u))}));function d(t,e){var a=arguments,s=e&&e.mdxType;if("string"==typeof t||s){var n=a.length,c=new Array(n);c[0]=l;var o={};for(var i in e)hasOwnProperty.call(e,i)&&(o[i]=e[i]);o.originalType=t,o.mdxType="string"==typeof t?t:s,c[1]=o;for(var p=2;p<n;p++)c[p]=a[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,a)}l.displayName="MDXCreateElement"},9109:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>c,default:()=>f,frontMatter:()=>n,metadata:()=>o,toc:()=>p});var r=a(7462),s=(a(7294),a(3905));const n={sidebar_position:1},c="Output Statistics Facet",o={unversionedId:"spec/facets/dataset-facets/output-dataset-facets/output_statistics",id:"spec/facets/dataset-facets/output-dataset-facets/output_statistics",title:"Output Statistics Facet",description:"Example:",source:"@site/docs/spec/facets/dataset-facets/output-dataset-facets/output_statistics.md",sourceDirName:"spec/facets/dataset-facets/output-dataset-facets",slug:"/spec/facets/dataset-facets/output-dataset-facets/output_statistics",permalink:"/docs/spec/facets/dataset-facets/output-dataset-facets/output_statistics",draft:!1,editUrl:"https://github.com/OpenLineage/docs/tree/main/docs/spec/facets/dataset-facets/output-dataset-facets/output_statistics.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Data Quality Metrics Facet",permalink:"/docs/spec/facets/dataset-facets/input-dataset-facets/data_quality_metrics"},next:{title:"Producers",permalink:"/docs/spec/producers"}},i={},p=[],u={toc:p};function f(t){let{components:e,...a}=t;return(0,s.kt)("wrapper",(0,r.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"output-statistics-facet"},"Output Statistics Facet"),(0,s.kt)("p",null,"Example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'"outputStatistics": {\n    "_producer": "https://some.producer.com/version/1.0",\n    "_schemaURL": "https://openlineage.io/spec/facets/1-0-0/OutputStatisticsOutputDatasetFacet.json",\n    "rowCount": 123,\n    "size": 35602\n}\n')),(0,s.kt)("p",null,"The facet specification can be found ",(0,s.kt)("a",{parentName:"p",href:"https://openlineage.io/spec/facets/1-0-0/OutputStatisticsOutputDatasetFacet.json"},"here"),"."))}f.isMDXComponent=!0}}]);