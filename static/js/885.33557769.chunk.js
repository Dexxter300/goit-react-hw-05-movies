"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[885],{577:function(t,e,n){n.r(e),n.d(e,{findMovie:function(){return o},findMovieByName:function(){return m},getCast:function(){return h},getReviews:function(){return l},getTrends:function(){return u}});var r=n(861),a=n(757),c=n.n(a),s={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNzg0N2E3MTExZDQ5MTIxMjk4ZDA0ZDU2ZWM5NDYwYSIsInN1YiI6IjY0ZGM3OWQ0ZDEwMGI2MTRiNWY2YjlmZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.P2495hNu_tPV7ATn8vHZ3gQxpzZA5UQFueIAJcgSG4A"}};function u(){return i.apply(this,arguments)}function i(){return(i=(0,r.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/trending/all/week",s);case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function o(t){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(e,"?language=en-US"),s);case 2:return n=t.sent,t.next=5,n.json();case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(e,"/credits?language=en-US"),s);case 2:return n=t.sent,t.next=5,n.json();case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?language=en-US&page=1"),s);case 2:return n=t.sent,t.next=5,n.json();case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/search/movie?query=".concat(e,"&include_adult=false&language=en-US&page=1"),s);case 2:return n=t.sent,t.next=5,n.json();case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},885:function(t,e,n){n.r(e),n.d(e,{default:function(){return m}});var r=n(439),a="castItem_card__Keaaq",c="castItem_photo__oEW9i",s="castItem_text__fdQBU",u=n(184),i=function(t){var e=t.el;return(0,u.jsxs)("li",{className:a,children:[(0,u.jsx)("h3",{children:e.name}),(0,u.jsx)("img",{src:e.profile_path?"https://image.tmdb.org/t/p/w500/".concat(e.profile_path):"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",alt:"actor",width:"250",className:c}),(0,u.jsxs)("p",{className:s,children:["Character: ",e.character]})]})},o=n(689),p="cast_list__6F4cJ",h=n(577).getCast,f=n(791),l=f.useEffect,d=f.useState,m=function(){var t=(0,o.UO)().id,e=d(null),n=(0,r.Z)(e,2),a=n[0],c=n[1];return l((function(){h(t).then((function(t){c(t)}))}),[t]),(0,u.jsx)("div",{children:(0,u.jsx)("ul",{className:p,children:a&&a.cast.map((function(t){return(0,u.jsx)(i,{el:t},t.id)}))})})}}}]);
//# sourceMappingURL=885.33557769.chunk.js.map