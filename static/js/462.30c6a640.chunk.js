"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[462],{577:function(e,t,n){n.r(t),n.d(t,{findMovie:function(){return o},findMovieByName:function(){return v},getCast:function(){return f},getReviews:function(){return l},getTrends:function(){return u}});var r=n(861),a=n(757),s=n.n(a),i={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNzg0N2E3MTExZDQ5MTIxMjk4ZDA0ZDU2ZWM5NDYwYSIsInN1YiI6IjY0ZGM3OWQ0ZDEwMGI2MTRiNWY2YjlmZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.P2495hNu_tPV7ATn8vHZ3gQxpzZA5UQFueIAJcgSG4A"}};function u(){return c.apply(this,arguments)}function c(){return(c=(0,r.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/trending/all/week",i);case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function o(e){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(t,"?language=en-US"),i);case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(t,"/credits?language=en-US"),i);case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?language=en-US&page=1"),i);case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/search/movie?query=".concat(t,"&include_adult=false&language=en-US&page=1"),i);case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},658:function(e,t,n){n.d(t,{W:function(){return o}});var r=n(689),a=n(87),s="trends_link__9QnwC",i="trends_li__gbsB2",u="trends_ul__L7HRh",c=n(184),o=function(e){var t=e.trends,n=(0,r.TH)();return(0,c.jsx)("ul",{className:u,children:t.map((function(e){return e.title?(0,c.jsx)("li",{className:i,children:(0,c.jsx)(a.Link,{to:"/movies/".concat(e.id),className:s,state:{from:n},children:e.title})},e.id):(0,c.jsx)("li",{className:i,children:(0,c.jsx)(a.Link,{to:"/movies/".concat(e.id),className:s,state:{from:n},children:e.name})},e.id)}))})}},462:function(e,t,n){n.r(t),n.d(t,{default:function(){return l}});var r=n(439),a=n(577),s=n(658),i=n(87),u="movies_input__1T0o0",c="movies_title__ZsnnO",o=n(184),p=n(791),f=p.useEffect,h=p.useState,l=function(){var e,t=h(""),n=(0,r.Z)(t,2),p=n[0],l=n[1],d=(0,i.useSearchParams)(),v=(0,r.Z)(d,2),m=v[0],g=v[1],x=null!==(e=m.get("name"))&&void 0!==e?e:"";f((function(){(0,a.findMovieByName)(x).then((function(e){0!==e.total_results?l(e.results):l("")}))}),[x]);return(0,o.jsxs)("div",{children:[(0,o.jsx)("h1",{className:c,children:"Find movie"}),(0,o.jsx)("input",{type:"text",className:u,value:x,onChange:function(e){var t=e.target.value;g(""!==t?{name:t}:{})}}),p&&(0,o.jsx)(s.W,{trends:p})]})}}}]);
//# sourceMappingURL=462.30c6a640.chunk.js.map