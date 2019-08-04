(window.webpackJsonp=window.webpackJsonp||[]).push([[8,7],{211:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return u});a(17);var n=a(226),A=a(0),r=a.n(A),i=a(228),o=a.n(i),c=a(229);function l(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n"]);return l=function(){return e},e}var s=Object(c.a)(o.a)(l(),function(e){return e.align?"float: "+e.align:""},function(e){return e.width?"width: "+e.width:""},function(e){return e.maxWidth?"max-width: "+e.maxWidth:""},function(e){return e.height?"height: "+e.height:""},function(e){return e.maxHeight?"max-height: "+e.maxHeight:""},function(e){return e.margin?"margin: "+e.margin:""});function u(e){var t=Object.assign({},e),a=n.data;return r.a.createElement(s,Object.assign({fluid:a.placeholderImage.childImageSharp.fluid},t))}},216:function(e,t,a){"use strict";a.r(t);var n=a(0),A=a.n(n),r=(a(218),a(221)),i=a(222),o=a(211),c=[{title:"",authors:"",intro:"",image:""}];function l(){return A.a.createElement(A.a.Fragment,null,A.a.createElement("h2",null,"Publications"),A.a.createElement("p",null,"My current research focus lie at the intersection between unsupervised representation learning, reinforcement learning, meta-learning and robotics. Specifically I am working on unsupervised representation learning via RL, and unsupervised RL."),A.a.createElement("p",null,"In my past life I did atomic physics and quantum computing. You can see more of these work ",A.a.createElement("a",{href:"https://scholar.google.com/citations?user=vaQcF6kAAAAJ"},"here"),"."),c.map(function(e){return A.a.createElement("div",null,e.title,e.authors,e.intro,e.image)}))}a(245);t.default=function(){return A.a.createElement(r.a,null,A.a.createElement(i.a,{title:"Ge Yang | episodeyang.com"}),A.a.createElement(o.default,{width:"40%",maxWidth:"250px",align:"right",margin:"0 -40px 10px 20px"}),A.a.createElement("h1",null,"Ge Yang"),A.a.createElement("p",null,"I am doing my Ph.D. in Physics at the University of Chicago."),A.a.createElement("p",null,"For the past year, I interned at ",A.a.createElement("a",{href:"https://bair.berkeley.edu/"},"Berkeley Artificial Intelligence Research")," with ",A.a.createElement("a",{href:"https://people.eecs.berkeley.edu/~pabbeel/"},"Pieter Abbeel"),", and the ",A.a.createElement("a",{href:"https://ai.facebook.com/blog/advancing-ai-by-teaching-robots-to-learn/"},"robotics lab")," at Facebook AI Research (FAIR) with ",A.a.createElement("a",{href:"https://www.robertocalandra.com/about/"},"Roberto Calandra"),"."),A.a.createElement("p",null,"At the moment I'm interning at Google DeepMind with ",A.a.createElement("a",{href:"https://scholar.google.co.uk/citations?user=rLdfJ1gAAAAJ"},"Vlad Mnih"),"."),A.a.createElement(l,null))}},217:function(e,t,a){var n;e.exports=(n=a(220))&&n.default||n},218:function(e,t,a){"use strict";var n=a(0),A=a.n(n),r=a(77),i=a.n(r);a.d(t,"a",function(){return i.a});a(217),a(12).default.enqueue,A.a.createContext({})},219:function(e){e.exports={data:{site:{siteMetadata:{title:"Ge Yang"}}}}},220:function(e,t,a){"use strict";a.r(t);a(57),a(16),a(14),a(15),a(9),a(19);var n=a(0),A=a.n(n),r=a(107);function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}t.default=function(e){var t=e.location,a=e.pageResources;return a?A.a.createElement(r.a,function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(a,!0).forEach(function(t){o(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({location:t,pageResources:a},a.json)):null}},221:function(e,t,a){"use strict";var n=a(219),A=a(0),r=a.n(A),i=(a(218),function(e){e.siteTitle;return r.a.createElement("header",null,r.a.createElement("nav",{className:"group"},r.a.createElement("a",{href:"https://scholar.google.com/citations?user=vaQcF6kAAAAJ&hl=en&oi=sra"},"Google Scholar"),r.a.createElement("a",{href:"https://github.com/episodeyang"},"GitHub"),r.a.createElement("a",{href:"https://twitter.com/episodeyang"},"Twitter")))});i.defaultProps={siteTitle:""};var o=i;a(224),t.a=function(e){var t=e.children,a=n.data;return r.a.createElement(r.a.Fragment,null,r.a.createElement(o,{siteTitle:a.site.siteMetadata.title}),r.a.createElement("article",{className:"group"},t,r.a.createElement("footer",null,"© ",r.a.createElement("a",{href:"https://www.episodeyang.com"},"Ge Yang"),", all rights reserved ",(new Date).getFullYear())))}},222:function(e,t,a){"use strict";var n=a(223),A=a(0),r=a.n(A),i=a(225),o=a.n(i);function c(e){var t=e.description,a=e.lang,A=e.meta,i=e.title,c=n.data.site,l=t||c.siteMetadata.description;return r.a.createElement(o.a,{htmlAttributes:{lang:a},title:i,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:i},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:l}].concat(A)})}c.defaultProps={lang:"en",meta:[],description:""},t.a=c},223:function(e){e.exports={data:{site:{siteMetadata:{title:"Ge Yang",description:"Research Blog",author:"@episodeyang"}}}}},226:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAbABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAwAEAf/EABYBAQEBAAAAAAAAAAAAAAAAAAECA//aAAwDAQACEAMQAAABTDsCKzXZlEHUpzWW3//EABsQAAIDAAMAAAAAAAAAAAAAAAECAAMREjEy/9oACAEBAAEFArcrpSzSwjAOpRcszXdoDzU1mHseJ//EABoRAAICAwAAAAAAAAAAAAAAAAABEBETIWH/2gAIAQMBAT8B7Ce6MZ//xAAXEQEAAwAAAAAAAAAAAAAAAAAAEBES/9oACAECAQE/AYpp/8QAHxAAAgEEAgMAAAAAAAAAAAAAAAERAiExQRASQlFh/9oACAEBAAY/Auvk9DypMSUVbUoyWxB89GyzQ+f/xAAaEAEAAwEBAQAAAAAAAAAAAAABABExIUFx/9oACAEBAAE/IXUArYvkfU8cIVl4asy8qL7Ow074QUiaCoFKw4g9gHkRXDXszQAPpCf/2gAMAwEAAgADAAAAEA/wM//EABgRAQEBAQEAAAAAAAAAAAAAAAEAEUFR/9oACAEDAQE/EAcmyoXWz7f/xAAYEQEBAAMAAAAAAAAAAAAAAAABACExcf/aAAgBAgEBPxDGoJAKXN//xAAeEAEBAAMAAQUAAAAAAAAAAAABEQAhMWFBUaGx4f/aAAgBAQABPxAkpCElFfvBUIylUPQXQ8zYVNu27e5H6cioLMhtELvRR/MAqgJIp5xFRcqQb5xhAQ2KXr7YhpgNY6M2dwkMUwBh8Zxn/9k=",aspectRatio:.7512953367875648,src:"/static/b8299d171ad77a32e8d82ff14662517f/775d9/ge_at_facebook.jpg",srcSet:"/static/b8299d171ad77a32e8d82ff14662517f/cb3d3/ge_at_facebook.jpg 150w,\n/static/b8299d171ad77a32e8d82ff14662517f/c83a6/ge_at_facebook.jpg 300w,\n/static/b8299d171ad77a32e8d82ff14662517f/775d9/ge_at_facebook.jpg 600w,\n/static/b8299d171ad77a32e8d82ff14662517f/2b1a3/ge_at_facebook.jpg 900w,\n/static/b8299d171ad77a32e8d82ff14662517f/81ef8/ge_at_facebook.jpg 1200w,\n/static/b8299d171ad77a32e8d82ff14662517f/b6059/ge_at_facebook.jpg 2320w",sizes:"(max-width: 600px) 100vw, 600px"}}}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-f3bbc8aeba679a9f56bc.js.map