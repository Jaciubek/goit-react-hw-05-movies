"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[290],{881:function(e,t,n){n.d(t,{Z:function(){return p}});n(791);var r=n(731),a=n(739),c="MovieList_movie__list__O3nnX",o="MovieList_movie__item__ybgcw",s="MovieList_movie__title__k5jdk",u="MovieList_movie__link__+IIP7",i=n(180),l=n(184),p=function(e){var t=e.movies,n=o,p=c,m=s,v=u,f=(0,a.TH)();return(0,l.jsx)("ul",{className:p,children:t.map((function(e){var t=e.title,a=e.id,c=e.poster_path;return(0,l.jsx)("li",{className:n,children:(0,l.jsxs)(r.rU,{className:v,to:"/movies/".concat(a),state:{from:f},children:[c?(0,l.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(c),alt:"Poster of ".concat(t)}):(0,l.jsx)("img",{src:i,alt:"Placeholder"}),(0,l.jsx)("p",{className:m,children:t})]})},a)}))})}},290:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var r=n(885),a="MoviesPage_container__jgAeo",c=n(791),o=n(731),s=n(739),u=n(388),i=n(881),l="SearchBar_form__ngDTv",p="SearchBar_input__gMoru",m="SearchBar_button__dOQGn",v="SearchBar_label__gwUyZ",f=n(984),d=n(184),_=function(e){var t=e.onSubmit,n=l,r=p,a=m,c=v;return(0,d.jsx)("form",{className:n,onSubmit:function(e){return t(e)},children:(0,d.jsxs)("div",{children:[(0,d.jsx)("input",{className:r,type:"text",name:"query",autoComplete:"on",placeholder:"Search images..."},(0,f.x0)()),(0,d.jsx)("button",{type:"submit",className:a,children:(0,d.jsx)("span",{className:c,children:"Search"})})]})})},h=function(){var e,t=a,n=(0,s.UO)(),l=(0,c.useState)([]),p=(0,r.Z)(l,2),m=p[0],v=p[1],f=(0,c.useState)(""),h=(0,r.Z)(f,2),g=h[0],x=h[1],y=(0,o.lr)(),j=(0,r.Z)(y,2),b=j[0],w=j[1],k=null!==(e=b.get("query"))&&void 0!==e?e:"";return(0,c.useEffect)((function(){k&&(0,u.mv)(k,v).catch(console.error)}),[k]),(0,d.jsx)("main",{className:t,children:n.movieId?(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(s.j3,{})}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(_,{onSubmit:function(e){e.preventDefault();var t=e.currentTarget,n=t.elements.query.value;if(""===n)return x("The search field cannot be empty");w({query:n}),x(""),t.reset()}}),g?(0,d.jsx)("div",{className:"error",children:g}):(0,d.jsx)(i.Z,{movies:m})]})})}},388:function(e,t,n){n.d(t,{Hx:function(){return m},Mc:function(){return l},_:function(){return i},mv:function(){return v},uV:function(){return p}});var r=n(861),a=n(757),c=n.n(a),o=n(44),s="13376ece24dd3764203e2484d15e71b5",u="https://api.themoviedb.org/3/",i=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("".concat(u,"trending/movie/day?api_key=").concat(s));case 3:return n=e.sent,e.abrupt("return",t(n.data.results));case 7:e.prev=7,e.t0=e.catch(0),console.log("".concat(e.t0.name,": ").concat(e.t0.message));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(t,n){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("".concat(u,"movie/").concat(t,"?api_key=").concat(s,"&language=en-US"));case 3:return r=e.sent,e.abrupt("return",n(r.data));case 7:e.prev=7,e.t0=e.catch(0),console.log("".concat(e.t0.name,": ").concat(e.t0.message));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t,n){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("".concat(u,"movie/").concat(t,"/credits?api_key=").concat(s,"&language=en-US"));case 3:return r=e.sent,e.abrupt("return",n(r.data.cast));case 7:e.prev=7,e.t0=e.catch(0),console.log("".concat(e.t0.name,": ").concat(e.t0.message));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}(),m=function(){var e=(0,r.Z)(c().mark((function e(t,n){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("".concat(u,"movie/").concat(t,"/reviews?api_key=").concat(s,"&language=en-US"));case 3:return r=e.sent,e.abrupt("return",n(r.data.results));case 7:e.prev=7,e.t0=e.catch(0),console.log("".concat(e.t0.name,": ").concat(e.t0.message));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(c().mark((function e(t,n){var r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("".concat(u,"search/movie?api_key=").concat(s,"&query=").concat(t,"&page=1&include_adult=false"));case 3:return r=e.sent,a=r.data.results,e.abrupt("return",n(a));case 8:e.prev=8,e.t0=e.catch(0),console.log("".concat(e.t0.name,": ").concat(e.t0.message));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n){return e.apply(this,arguments)}}()},180:function(e,t,n){e.exports=n.p+"static/media/placeholder.44486ec99d4cdc6c714e.png"},984:function(e,t,n){n.d(t,{x0:function(){return r}});var r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,t){return e+=(t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_"}),"")}}}]);
//# sourceMappingURL=290.3fa65f54.chunk.js.map