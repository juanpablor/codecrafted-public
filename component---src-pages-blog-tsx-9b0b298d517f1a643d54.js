"use strict";(self.webpackChunkcorpo_code_crafted_studios=self.webpackChunkcorpo_code_crafted_studios||[]).push([[663],{2495:function(e,t,l){l.r(t);var a=l(6540),s=l(4794),c=l(2389),r=l(3714),n=l(8526),o=l(3568),u=l(6308),d=l(9308),m=l(7812),g=l(8608);const i=n[0];t.default=e=>{let{data:t}=e;const l=t.allPostsJson.nodes,{t:n,i18n:f}=(0,c.useTranslation)(),x=e=>{switch(e){case"es":return u.A;case"fr":return d.A;default:return m.A}};return a.createElement(r.default,{data:i},a.createElement("h1",{className:"text-3xl text-center my-4"},n("blog.title")),a.createElement("ul",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"},l.map((e=>a.createElement("li",{className:"text-center border-2 bg-darkBg/50 rounded-lg p-2 flex-1 flex flex-col",key:e.slug},a.createElement(s.Link,{to:`/blog/${e.slug}`},a.createElement("h2",null,n(`blog.${e.slug}-title`)),a.createElement("p",{className:"text-sm text-secondary"},(0,o.A)(new Date(e.date),"MMMM dd, yyyy",{locale:x(f.language)})),a.createElement("img",{className:"thumbnail mx-auto my-4",src:g.A[e.slug].src,alt:g.A[e.slug].alt})))))))}}}]);
//# sourceMappingURL=component---src-pages-blog-tsx-9b0b298d517f1a643d54.js.map