(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[0],{30:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),r=c(25),s=c.n(r),i=(c(30),c(8)),o=c(1),l=function(){return Object(o.jsxs)("header",{className:"app__header",children:[Object(o.jsx)("h1",{className:"app__title",children:Object(o.jsxs)(i.b,{to:"/",children:[Object(o.jsx)("span",{children:"Marvel"})," information portal"]})}),Object(o.jsx)("nav",{className:"app__menu",children:Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)(i.c,{end:!0,style:function(e){return{color:e.isActive?"blue":"inherit"}},to:"/",children:"Characters"})}),"/",Object(o.jsx)("li",{children:Object(o.jsx)(i.c,{style:function(e){return{color:e.isActive?"blue":"inherit"}},to:"/comics",children:"Comics"})})]})})]})},j=c(3),u=c(5),b=(c(32),c.p+"static/media/mjolnir.61f31e18.png"),d=c(4),m=c(6),h=function(){var e=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(null),s=Object(u.a)(r,2),i=s[0],o=s[1],l=Object(n.useCallback)(function(){var e=Object(m.a)(Object(d.a)().mark((function e(t){var c,n,r,s,i,l=arguments;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=l.length>1&&void 0!==l[1]?l[1]:"GET",n=l.length>2&&void 0!==l[2]?l[2]:null,r=l.length>3&&void 0!==l[3]?l[3]:{"Content-Type":"application/json"},a(!0),e.prev=4,e.next=7,fetch(t,{method:c,body:n,headers:r});case 7:if((s=e.sent).ok){e.next=10;break}throw new Error("Could not fetch ".concat(t,", status: ").concat(s.status));case 10:return e.next=12,s.json();case 12:return i=e.sent,a(!1),e.abrupt("return",i);case 17:throw e.prev=17,e.t0=e.catch(4),a(!1),o(e.t0.message),e.t0;case 22:case"end":return e.stop()}}),e,null,[[4,17]])})));return function(t){return e.apply(this,arguments)}}(),[]);return{loading:c,request:l,error:i,clearError:Object(n.useCallback)((function(){o(null)}),[])}}(),t=e.loading,c=e.request,a=e.error,r=e.clearError,s="https://gateway.marvel.com:443/v1/public/",i="apikey=ee08e659fe8dbd136caf78ed92338ca2",o=function(){var e=Object(m.a)(Object(d.a)().mark((function e(){var t,n,a=arguments;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:"291",e.next=3,c("".concat(s,"characters?limit=9&offset=").concat(t,"&").concat(i));case 3:return n=e.sent,e.abrupt("return",n.data.results.map(O));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=Object(m.a)(Object(d.a)().mark((function e(t){var n;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("".concat(s,"characters/").concat(t,"?").concat(i));case 2:return n=e.sent,e.abrupt("return",O(n.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(m.a)(Object(d.a)().mark((function e(t){var n;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("".concat(s,"comics/").concat(t,"?").concat(i));case 2:return n=e.sent,e.abrupt("return",h(n.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(m.a)(Object(d.a)().mark((function e(){var t,n,a=arguments;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:"33",e.next=3,c("".concat(s,"comics?limit=8&offset=").concat(t,"&").concat(i));case 3:return n=e.sent,e.abrupt("return",n.data.results.map(h));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(e){var t;return{pageCount:e.pageCount?"".concat(e.pageCount," p."):"No info about number of pages",id:e.id,title:e.title,description:e.description||"Theres no description",price:e.prices[0].price?"".concat(e.prices[0].price,"$"):"not available",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,language:(null===(t=e.textObjects[0])||void 0===t?void 0:t.language)||"en-us"}},O=function(e){return""===e.description&&(e.description="This person has no description"),e.description.length>200&&(e.description=e.description.slice(0,220)+"..."),{id:e.id,name:e.name,description:e.description,thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items}};return{loading:t,error:a,clearError:r,getAllCharacters:o,getCharacter:l,getAllComics:b,getComic:j}},O=c.p+"static/media/load.65c3f468.gif",p=function(){return Object(o.jsx)("div",{className:"spinner",children:Object(o.jsx)("img",{src:O,style:{margin:"0 auto",background:"none",display:"block"}})})},x=c.p+"static/media/error.42292aa1.gif",f=function(){return Object(o.jsx)("img",{src:x,style:{display:"block",width:"250px",height:"250px",margin:"0 auto"}})},_=function(e){var t=e.person,c={objectFit:"cover"},n=t.name,a=t.description,r=t.thumbnail,s=t.homepage,i=t.wiki;return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===r&&(c={objectFit:"contain"}),Object(o.jsxs)("div",{className:"randomchar__block",children:[Object(o.jsx)("img",{src:r,alt:"Random character",className:"randomchar__img",style:c}),Object(o.jsxs)("div",{className:"randomchar__info",children:[Object(o.jsx)("p",{className:"randomchar__name",children:n}),Object(o.jsx)("p",{className:"randomchar__descr",children:a}),Object(o.jsxs)("div",{className:"randomchar__btns",children:[Object(o.jsx)("a",{href:s,className:"button button__main",children:Object(o.jsx)("div",{className:"inner",children:"homepage"})}),Object(o.jsx)("a",{href:i,className:"button button__secondary",children:Object(o.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})},v=function(){var e=Object(n.useState)({}),t=Object(u.a)(e,2),c=t[0],a=t[1],r=h(),s=r.loading,i=r.error,l=r.getCharacter,j=r.clearError;Object(n.useEffect)((function(){m()}),[]);var d=function(e){console.log("update"),a(e)},m=function(){j();var e=Math.floor(400*Math.random()+1011e3);l(e).then(d)},O=i?Object(o.jsx)(f,{}):null,x=s?Object(o.jsx)(p,{}):null,v=s||i?null:Object(o.jsx)(_,{person:c});return Object(o.jsxs)("div",{className:"randomchar",children:[O,x,v,Object(o.jsxs)("div",{className:"randomchar__static",children:[Object(o.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",Object(o.jsx)("br",{}),"Do you want to get to know him better?"]}),Object(o.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),Object(o.jsx)("button",{onClick:m,className:"button button__main",children:Object(o.jsx)("div",{className:"inner",children:"try it"})}),Object(o.jsx)("img",{src:b,alt:"mjolnir",className:"randomchar__decoration"})]})]})},g=c(7),N=(c(33),function(e){var t=Object(n.useState)([]),c=Object(u.a)(t,2),a=c[0],r=c[1],s=Object(n.useState)(!1),i=Object(u.a)(s,2),l=i[0],j=i[1],b=Object(n.useState)(200),d=Object(u.a)(b,2),m=d[0],O=d[1],x=Object(n.useState)(!1),_=Object(u.a)(x,2),v=_[0],N=_[1],k=h(),y=k.loading,C=k.error,w=k.getAllCharacters;h();Object(n.useEffect)((function(){S(m,!0)}),[]);var S=function(e,t){j(!t),w(e).then(E)},E=function(e){var t=!1;e.length<9&&(t=!0),console.log("update"),r((function(t){return[].concat(Object(g.a)(t),Object(g.a)(e))})),j((function(e){return!1})),O((function(e){return e+9})),N((function(e){return t}))};console.log("CharList!");var A=Object(n.useRef)([]),F=function(e){A.current.forEach((function(e){return e.classList.remove("char__item_selected")})),A.current[e].classList.add("char__item_selected"),A.current[e].focus()};var I=function(t){var c=t.map((function(t,c){var n={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===t.thumbnail&&(n={objectFit:"unset"}),Object(o.jsxs)("li",{className:"char__item",tabIndex:0,ref:function(e){return A.current[c]=e},onClick:function(){e.onCharacterSelected(t.id),F(c)},onKeyDown:function(n){" "!==n.key&&"Enter"!==n.key||(e.onCharacterSelected(t.id),F(c))},children:[Object(o.jsx)("img",{src:t.thumbnail,alt:t.name,style:n}),Object(o.jsx)("div",{className:"char__name",children:t.name})]},t.id)}));return Object(o.jsx)("ul",{className:"char__grid",children:c})}(a),T=C?Object(o.jsx)(f,{}):null,M=y&&!l?Object(o.jsx)(p,{}):null;return Object(o.jsxs)("div",{className:"char__list",children:[T,M,I,Object(o.jsx)("button",{onClick:function(){return S(m)},className:"button button__main button__long",disabled:l,style:{display:v?"none":"block"},children:Object(o.jsx)("div",{className:"inner",children:"load more"})})]})}),k=(c(34),c(35),function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),Object(o.jsxs)("div",{className:"skeleton",children:[Object(o.jsxs)("div",{className:"pulse skeleton__header",children:[Object(o.jsx)("div",{className:"pulse skeleton__circle"}),Object(o.jsx)("div",{className:"pulse skeleton__mini"})]}),Object(o.jsx)("div",{className:"pulse skeleton__block"}),Object(o.jsx)("div",{className:"pulse skeleton__block"}),Object(o.jsx)("div",{className:"pulse skeleton__block"})]})]})}),y=function(e){var t=e.char,c=t.name,n=t.description,a=t.thumbnail,r=t.homepage,s=t.wiki,i=t.comics;i.length;var l={objectFit:"contain"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===a&&(l={objectFit:"contain"}),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"char__basics",children:[Object(o.jsx)("img",{src:a,alt:c,style:l}),Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"char__info-name",children:c}),Object(o.jsxs)("div",{className:"char__btns",children:[Object(o.jsx)("a",{href:r,className:"button button__main",children:Object(o.jsx)("div",{className:"inner",children:"homepage"})}),Object(o.jsx)("a",{href:s,className:"button button__secondary",children:Object(o.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),Object(o.jsx)("div",{className:"char__descr",children:n}),Object(o.jsx)("div",{className:"char__comics",children:"Comics:"}),Object(o.jsxs)("ul",{className:"char__comics-list",children:[i.length>0?null:Object(o.jsx)("li",{className:"char__comics-item",children:"Sorry. There is no comics with this character. U can create it :|"}),i.map((function(e,t){if(!(t>4))return Object(o.jsx)("li",{className:"char__comics-item",children:e.name},t)}))]})]})},C=function(e){var t=Object(n.useState)(null),c=Object(u.a)(t,2),a=c[0],r=c[1],s=h(),i=s.loading,l=s.error,j=s.getCharacter,b=s.clearError;Object(n.useEffect)((function(){d()}),[e.characterId]);var d=function(){var t=e.characterId;t&&(b(),j(t).then(m))},m=function(e){console.log("update"),r(e)},O=a||i||l?null:Object(o.jsx)(k,{}),x=l?Object(o.jsx)(f,{}):null,_=i?Object(o.jsx)(p,{}):null,v=i||l||!a?null:Object(o.jsx)(y,{char:a});return Object(o.jsxs)("div",{className:"char__info",children:[O,x,_,v]})},w=c.p+"static/media/vision.067d4ae1.png",S=c(12),E=c(11),A=c(14),F=c(15),I=function(e){Object(A.a)(c,e);var t=Object(F.a)(c);function c(){var e;Object(S.a)(this,c);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={error:!1},e}return Object(E.a)(c,[{key:"componentDidCatch",value:function(e,t){this.setState({error:!0}),console.log(t)}},{key:"render",value:function(){return this.state.error?Object(o.jsx)("h2",{children:"Somth went wrong "}):this.props.children}}]),c}(n.Component),T=I,M=function(){var e=Object(n.useState)(null),t=Object(u.a)(e,2),c=t[0],a=t[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(v,{}),Object(o.jsxs)("div",{className:"char__content",children:[Object(o.jsx)(N,{onCharacterSelected:function(e){a(e)}}),Object(o.jsx)(T,{children:Object(o.jsx)(C,{characterId:c})})]}),Object(o.jsx)("img",{className:"bg-decoration",src:w,alt:"vision"})]})},W=(c(36),c.p+"static/media/Avengers.4065c8f9.png"),q=c.p+"static/media/Avengers_logo.9eaf2193.png",B=function(){return Object(o.jsxs)("div",{className:"app__banner",children:[Object(o.jsx)("img",{src:W,alt:"Avengers"}),Object(o.jsxs)("div",{className:"app__banner-text",children:["New comics every week!",Object(o.jsx)("br",{}),"Stay tuned!"]}),Object(o.jsx)("img",{src:q,alt:"Avengers logo"})]})},D=(c(37),function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(55),s=Object(u.a)(r,2),l=s[0],j=s[1],b=Object(n.useState)(!1),d=Object(u.a)(b,2),m=d[0],O=d[1],x=Object(n.useState)(!1),_=Object(u.a)(x,2),v=_[0],N=_[1],k=h(),y=k.loading,C=k.error,w=k.getAllComics;Object(n.useEffect)((function(){S(l)}),[]);var S=function(e,t){O(!t),w(e).then(E).then((function(e){return console.log(e)}))},E=function(e){var t=!1;e.length<8&&(t=!0),a((function(t){return[].concat(Object(g.a)(t),Object(g.a)(e))})),O(!1),j((function(e){return e+4})),N(t)};var A=function(e){var t=e.map((function(e,t){var c={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===e.thumbnail&&(c={objectFit:"unset"}),Object(o.jsx)("li",{className:"comics__item",tabIndex:0,children:Object(o.jsxs)(i.b,{to:"/comics/".concat(e.id),children:[Object(o.jsx)("img",{src:e.thumbnail,style:c,alt:"ultimate war",className:"comics__item-img"}),Object(o.jsx)("div",{className:"comics__item-name",children:e.title}),Object(o.jsx)("div",{className:"comics__item-price",children:e.price})]})},t)}));return Object(o.jsx)("ul",{className:"comics__grid",children:t})}(c),F=C?Object(o.jsx)(f,{}):null,I=y&&!m?Object(o.jsx)(p,{}):null;return Object(o.jsxs)("div",{className:"comics__list",children:[F,I,A,Object(o.jsx)("button",{className:"button button__main button__long",onClick:function(){return S(l)},style:{display:v?"none":"block"},children:Object(o.jsx)("div",{className:"inner",children:"load more"})})]})}),L=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(B,{}),Object(o.jsx)(D,{})]})},R=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)(f,{}),Object(o.jsx)("p",{style:{textAlign:"center",fontWeight:"bold",fontSize:"24px"},children:"Page doesnt exist "}),Object(o.jsx)(i.b,{style:{display:"block",textAlign:"center",fontWeight:"bold",fontSize:"24px"},to:"/",children:"Back to main page"})]})},z=(c(38),c.p,function(e){var t=e.comic,c=t.title,n=t.description,a=t.pageCount,r=t.language,s=t.thumbnail,l=t.price,u=Object(j.n)();return Object(o.jsxs)("div",{className:"single-comic",children:[Object(o.jsx)("img",{src:s,alt:c,className:"single-comic__img"}),Object(o.jsxs)("div",{className:"single-comic__info",children:[Object(o.jsx)("h2",{className:"single-comic__name",children:c}),Object(o.jsx)("p",{className:"single-comic__descr",children:n}),Object(o.jsx)("p",{className:"single-comic__descr",children:a}),Object(o.jsx)("p",{className:"single-comic__descr",children:r}),Object(o.jsx)("div",{className:"single-comic__price",children:l})]}),Object(o.jsx)(i.b,{to:"/comics",className:"single-comic__back",children:"Back to all"}),Object(o.jsx)("button",{onClick:function(){return u(-1)},children:"Go back"})]})}),G=function(){var e=Object(j.p)().comicId,t=Object(n.useState)(null),c=Object(u.a)(t,2),a=c[0],r=c[1],s=h(),i=s.loading,l=(s.request,s.error),b=s.getComic,d=s.clearError;Object(n.useEffect)((function(){m()}),[e]);var m=function(){d(),b(e).then(O)},O=function(e){console.log("updateComic"),r(e)},x=l?Object(o.jsx)(f,{}):null,_=i?Object(o.jsx)(p,{}):null,v=i||l||!a?null:Object(o.jsx)(z,{comic:a});return Object(o.jsxs)(o.Fragment,{children:[x,_,v]})},J=function(){return Object(o.jsx)(i.a,{children:Object(o.jsxs)("div",{className:"app",children:[Object(o.jsx)(l,{}),Object(o.jsx)("main",{children:Object(o.jsxs)(j.c,{children:[Object(o.jsx)(j.a,{path:"/",element:Object(o.jsx)(M,{})}),Object(o.jsx)(j.a,{path:"/comics",element:Object(o.jsx)(L,{})}),Object(o.jsx)(j.a,{path:"/comics/:comicId",element:Object(o.jsx)(G,{})}),Object(o.jsx)(j.a,{path:"*",element:Object(o.jsx)(R,{})})]})})]})})};c(39);s.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(J,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.573a22dd.chunk.js.map