(this["webpackJsonprock-paper-scissor"]=this["webpackJsonprock-paper-scissor"]||[]).push([[0],{15:function(e,c,s){},16:function(e,c,s){"use strict";s.r(c);var t=s(1),a=s(6),n=s.n(a),i=s(5),r=(s(13),s(3)),o=s(2),l=s(0),j=function(e){var c=e.score;return Object(l.jsxs)("div",{className:"header",children:[Object(l.jsxs)("div",{className:"text",children:[Object(l.jsx)("span",{children:"Rock"}),Object(l.jsx)("span",{children:"Paper"}),Object(l.jsx)("span",{children:"Scissors"})]}),Object(l.jsxs)("div",{className:"score-box",children:[Object(l.jsx)("span",{children:"Score"}),Object(l.jsx)("div",{className:"score-box__score",children:c})]})]})},d=s.p+"static/media/bg-triangle.c0c30b56.svg",b=function(e){var c=e.setMyChoice,s=function(e){var s=e.target.dataset.id;c(s)};return Object(l.jsxs)("div",{className:"play",children:[Object(l.jsx)("img",{src:d,alt:"",className:"traingle"}),Object(l.jsxs)("div",{className:"items",children:[Object(l.jsx)(i.b,{to:"/game",children:Object(l.jsx)("div",{"data-id":"paper",className:"icon icon-paper",onClick:s})}),Object(l.jsx)(i.b,{to:"/game",children:Object(l.jsx)("div",{"data-id":"scissors",className:"icon icon-scissors",onClick:s})}),Object(l.jsx)(i.b,{to:"/game",children:Object(l.jsx)("div",{"data-id":"rock",className:"icon icon-rock",onClick:s})})]})]})},O=function(e){var c=e.score,s=e.myChoice,a=e.setScore,n=Object(t.useState)(""),o=Object(r.a)(n,2),j=o[0],d=o[1],b=Object(t.useState)(""),O=Object(r.a)(b,2),m=O[0],x=O[1],h=Object(t.useState)(3),u=Object(r.a)(h,2),p=u[0],v=u[1];Object(t.useEffect)((function(){d(["rock","paper","scissors"][Math.floor(3*Math.random())])}),[]);return Object(t.useEffect)((function(){var e=p>0?setInterval((function(){v(p-1)}),1e3):void("rock"===s&&"scissors"===j?(x("win"),a(c+1)):"rock"===s&&"paper"===j?(x("lose"),a(c-1)):"scissors"===s&&"paper"===j?(x("win"),a(c+1)):"scissors"===s&&"rock"===j?(x("lose"),a(c-1)):"paper"===s&&"rock"===j?(x("win"),a(c+1)):"paper"===s&&"scissors"===j?(x("lose"),a(c-1)):x("draw"));return function(){clearInterval(e)}}),[p,j]),Object(l.jsxs)("div",{className:"game",children:[Object(l.jsxs)("div",{className:"game__you",children:[Object(l.jsx)("span",{className:"text",children:"You Picked"}),Object(l.jsx)("div",{className:"icon icon--".concat(s," ").concat("win"===m?"icon icon--".concat(s,"--winner"):"")})]}),"win"===m&&Object(l.jsxs)("div",{className:"game__play",children:[Object(l.jsx)("span",{className:"text",children:"You Win"}),Object(l.jsx)(i.b,{to:"/",className:"play-again",onClick:function(){return d()},children:"Play Again"})]}),"lose"===m&&Object(l.jsxs)("div",{className:"game__play",children:[Object(l.jsx)("span",{className:"text",children:"You Lose"}),Object(l.jsx)(i.b,{to:"/",className:"play-again",onClick:function(){return d()},children:"Play Again"})]}),"draw"===m&&Object(l.jsxs)("div",{className:"game__play",children:[Object(l.jsx)("span",{className:"text",children:"Draw"}),Object(l.jsx)(i.b,{to:"/",className:"play-again",onClick:function(){return d()},children:"Play Again"})]}),Object(l.jsxs)("div",{className:"game__house",children:[Object(l.jsx)("span",{className:"text",children:"The House Picked"}),0===p?Object(l.jsx)("div",{className:"icon icon--".concat(j," ").concat("lose"===m?"icon icon--".concat(j,"--winner"):"")}):Object(l.jsx)("div",{className:"counter",children:p})]})]})},m=s.p+"static/media/icon-close.bde602ec.svg",x=s.p+"static/media/image-rules.258b753f.svg",h=function(e){var c=e.toggle;return n.a.createPortal(Object(l.jsx)("div",{className:"modal-container",children:Object(l.jsxs)("div",{className:"modal-box",children:[Object(l.jsxs)("div",{className:"modal-header",children:[Object(l.jsx)("h1",{className:"rule-head",children:"Rules"}),Object(l.jsx)("button",{onClick:c,children:Object(l.jsx)("img",{src:m,alt:"close"})})]}),Object(l.jsx)("img",{src:x,alt:""})]})}),document.getElementById("modal"))},u=function(){var e=Object(t.useState)(!1),c=Object(r.a)(e,2),s=c[0],a=c[1],n=function(){a(!s)};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("footer",{className:"footer",children:[" ",Object(l.jsxs)("div",{className:"attribution",children:["Challenge by ",Object(l.jsx)("a",{href:"https://www.frontendmentor.io?ref=challenge",target:"_blank",children:"Frontend Mentor"}),". Coded by ",Object(l.jsx)("a",{href:"#",children:"Anonymous"}),"."]}),Object(l.jsx)("button",{className:"rules",onClick:n,children:"Rules"})]}),s&&Object(l.jsx)(h,{toggle:n})]})};function p(){var e=Object(t.useState)(""),c=Object(r.a)(e,2),s=c[0],a=c[1],n=Object(t.useState)(0),i=Object(r.a)(n,2),d=i[0],m=i[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(j,{score:d}),Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{path:"/",element:Object(l.jsx)(b,{setMyChoice:a})}),Object(l.jsx)(o.a,{path:"/game",element:Object(l.jsx)(O,{myChoice:s,score:d,setScore:m})})]})]}),Object(l.jsx)(u,{})]})}s(15);var v=document.getElementById("root");n.a.render(Object(l.jsx)(i.a,{children:Object(l.jsx)(p,{})}),v)}},[[16,1,2]]]);
//# sourceMappingURL=main.aa72be6a.chunk.js.map