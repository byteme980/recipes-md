(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[678],{48:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return u}});var n=r(7294),a=r(5444),c=function(e){var t=e.recipe;return n.createElement("div",{className:"recipe-link"},t.frontmatter.imageUrl&&n.createElement("img",{src:t.frontmatter.imageUrl}),n.createElement(a.Link,{to:t.frontmatter.slug},t.frontmatter.title))},l=r(5127),i=r(3751),u=function(e){var t=e.data.allMarkdownRemark.edges,r=(0,n.useMemo)((function(){var e={breakfast:[],lunch:[],dinner:[],snacks:[],dessert:[]};return t.forEach((function(t){var r=t.node.frontmatter.mealType;Object.keys(e).includes(r)?e[r].push(t):console.error("unknown mealType for recipe "+t.node.frontmatter.mealType)})),e}),[t]),a=Object.keys(r).filter((function(e){return r[e].length>0}));return n.createElement(l.Z,null,n.createElement(i.Z,{title:"All recipes"}),n.createElement("div",{className:"recipes-index"},a.map((function(e){return n.createElement("section",{key:e},n.createElement("h2",null,e),r[e].map((function(e){return n.createElement(c,{key:e.node.id,recipe:e.node})})))}))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-13feaefa6f26b6a6f5c1.js.map