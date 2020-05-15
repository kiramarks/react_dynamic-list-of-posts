(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],{14:function(e,t,a){e.exports=a(30)},19:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(10),s=a.n(r),o=(a(19),function(e){var t=e.name,a=e.email,n=e.address;return c.a.createElement("section",{className:"user post__user"},c.a.createElement("p",{className:"user__name"},t),c.a.createElement("a",{href:"mailto:".concat(a),className:"user__email"},a),c.a.createElement("address",{className:"user__address"},c.a.createElement("div",null,"".concat(n.street,", ").concat(n.suite)),c.a.createElement("div",null,n.city)))}),l=function(e){var t=e.comments;return c.a.createElement(c.a.Fragment,null,t.map((function(e){var t=e.id,a=e.name,n=e.body,r=e.email;return c.a.createElement("section",{className:"post__comment",key:t},c.a.createElement("p",{className:"comment__name"},a),c.a.createElement("p",{className:"comment__body"},n),c.a.createElement("a",{href:"mailto:".concat(r),className:"comment__email"},r))})))},m=function(e){var t=e.onSearch,a=e.query;return c.a.createElement("div",{className:"row"},c.a.createElement("form",{className:"col s12"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"input-field col s12"},c.a.createElement("textarea",{id:"textarea1",value:a,className:"materialize-textarea",onChange:function(e){return t(e)}}),c.a.createElement("label",{htmlFor:"textarea1"},"Type something to search post...")))))},u=a(13),i=a(1),p=a(11),d=a.n(p),f=function(e){var t=function(e){var t=e.posts,a=Object(n.useState)(""),c=Object(i.a)(a,2),r=c[0],s=c[1],o=Object(n.useState)(""),l=Object(i.a)(o,2),m=l[0],p=l[1],f=Object(n.useMemo)((function(){return Object(u.a)(t).filter((function(e){return(e.title.toLowerCase()+e.body.toLowerCase()).includes(m.toLowerCase())}))}),[t,m]),b=Object(n.useCallback)(d()(p,1e3),[]);return{handleSearch:Object(n.useCallback)((function(e){var t=e.target.value;s(t),b(t)}),[b]),query:r,visiblePosts:f}}(e),a=t.query,r=t.handleSearch,s=t.visiblePosts;return c.a.createElement(c.a.Fragment,null,c.a.createElement(m,{onSearch:r,query:a}),c.a.createElement("article",{className:"app__post-list"},s.map((function(e){var t=e.id,a=e.title,n=e.user,r=e.body,s=e.comments;return c.a.createElement("section",{className:"post",key:t},c.a.createElement("h5",{className:"post__title"},a),c.a.createElement("p",{className:"post__body"},r),c.a.createElement(o,n),c.a.createElement("p",{className:"comment__heading"},"Comments"),c.a.createElement(l,{comments:s}))}))))},b=a(4),E=a.n(b),h=a(5),_=a(12),v="https://jsonplaceholder.typicode.com",j=function(){var e=Object(_.a)(E.a.mark((function e(){var t,a,n,c,r,s;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([fetch("".concat(v,"/posts")).then((function(e){return e.json()})),fetch("".concat(v,"/users")).then((function(e){return e.json()})),fetch("".concat(v,"/comments")).then((function(e){return e.json()}))]);case 2:return t=e.sent,a=Object(i.a)(t,3),n=a[0],c=a[1],r=a[2],s=n.map((function(e){return Object(h.a)(Object(h.a)({},e),{},{user:c.find((function(t){return t.id===e.userId})),comments:r.filter((function(t){return t.postId===e.id}))})})),e.abrupt("return",s);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!1),s=Object(i.a)(r,2),o=s[0],l=s[1],m=Object(n.useState)(!1),u=Object(i.a)(m,2),p=u[0],d=u[1];return{posts:a,isLoaded:p,isLoading:o,loadPosts:Object(n.useCallback)((function(){l(!0),j().then((function(e){return c(e)})),l(!1),d(!0)}),[])}}(),t=e.posts,a=e.isLoaded,r=e.isLoading,s=e.loadPosts;return c.a.createElement("main",{className:"app"},c.a.createElement("div",{className:"app__header"},c.a.createElement("h2",{className:"app__heading"},"Dynamic list of posts"),!r&&!a&&c.a.createElement("button",{type:"button",className:"waves-effect waves-light btn deep-purple accent-3",onClick:s},"load data"),r&&c.a.createElement("p",null,"Loading...")),a&&c.a.createElement(f,{posts:t}))};s.a.render(c.a.createElement(N,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.55250174.chunk.js.map