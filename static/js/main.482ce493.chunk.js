(this["webpackJsonpequation-calc"]=this["webpackJsonpequation-calc"]||[]).push([[0],{198:function(e,t,a){e.exports=a(303)},303:function(e,t,a){"use strict";a.r(t);a(199),a(225),a(227),a(228),a(230),a(231),a(232),a(233),a(234),a(235),a(236),a(237),a(239),a(240),a(241),a(242),a(243),a(244),a(245),a(246),a(247),a(248),a(250),a(251),a(252),a(253),a(254),a(255),a(256),a(257),a(258),a(259),a(260),a(261),a(262),a(263),a(264),a(265),a(266),a(267);var n=a(0),r=a.n(n),o=a(65),c=a.n(o),i=a(66),l=a.n(i),u=a(114),s=a(113),d=a.n(s),m=(a(275),a(47)),h=a.n(m),f=a(48),v=a.n(f),g=a(100),b=a.n(g),E=a(103),p=a.n(E),w=a(101),N=a.n(w),k=a(102),q=a.n(k),O=void 0,y=function(e){var t=e.id;e.go;return r.a.createElement(h.a,{id:t},r.a.createElement(v.a,null,"\u041a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440 \u0443\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u0439"),r.a.createElement(b.a,{header:r.a.createElement(N.a,{mode:"secondary"},"\u0423\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u044f")},r.a.createElement(q.a,null,r.a.createElement(p.a,{expandable:!0,onClick:function(){return O.setState({activePanel:"quadratic"})}},"\u041a\u0432\u0430\u0434\u0440\u0430\u0442\u0438\u0447\u043d\u044b\u0435 \u0443\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u044f"))))},j=a(115),C=a(104),I=a(105),S=a(116),x=a(106),W=a(49),P=a(117),L=a(109),M=a.n(L),V=a(67),D=a(107),J=a.n(D),T=a(108),A=a.n(T),B=a(112),_=a.n(B),K=a(50),Q=a.n(K),R=a(110),U=a.n(R),$=a(111),z=a.n($),F=a(24),G=a.n(F),H=(a(98),Object(V.b)()),X=function(e){function t(e){var a;return Object(C.a)(this,t),(a=Object(S.a)(this,Object(x.a)(t).call(this,e))).state={a:2,b:4,c:-3,error:""},a.handleChange=a.handleChange.bind(Object(W.a)(a)),a}return Object(P.a)(t,e),Object(I.a)(t,[{key:"handleChange",value:function(e,t){var a=!1;isNaN(e)&&(a="\u041d\u0435 \u0447\u0438\u0441\u043b\u043e");var n=Object(j.a)({},this.state);n[t]=e;var r=[n.a,n.b,n.c],o=r[1],c=o*o-4*r[0]*r[2];c<0&&(a="\u0414\u0438\u0441\u043a\u0440\u0438\u043c\u0438\u043d\u0430\u043d\u0442 \u043c\u0435\u043d\u044c\u0448\u0435 0"),n.d=c,n.error=a,this.setState(n)}},{key:"roundNumber",value:function(e){return Math.round(100*e+Number.EPSILON)/100}},{key:"render",value:function(){var e=this;console.log("new state: "+JSON.stringify(this.state));var t=[this.state.a,this.state.b,this.state.c,this.state.error],a=t[0],n=t[1],o=t[2],c=t[3],i=n*n-4*a*o,l=(Math.abs(i),Number.EPSILON,this.roundNumber(-n+Math.sqrt(i))/(2*a)),u=this.roundNumber(-n-Math.sqrt(i))/(2*a);return r.a.createElement(h.a,{id:this.props.id},r.a.createElement(v.a,{left:r.a.createElement(M.a,{onClick:this.props.go,"data-to":"home"},H===V.a?r.a.createElement(J.a,null):r.a.createElement(A.a,null))},"\u041a\u0432\u0430\u0434\u0440\u0430\u0442\u043d\u043e\u0435 \u0443\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u0435"),r.a.createElement(U.a,null,r.a.createElement(Q.a,{type:"number",defaultValue:"2",onInput:function(t){return e.handleChange(t.target.value,"a")}}),r.a.createElement(Q.a,{type:"number",defaultValue:"-4",onInput:function(t){return e.handleChange(t.target.value,"b")}}),r.a.createElement(Q.a,{type:"number",defaultValue:"3",onInput:function(t){return e.handleChange(t.target.value,"c")}}),c&&r.a.createElement(z.a,{header:"\u0414\u0438\u0441\u043a\u0440\u0438\u043c\u0438\u043d\u0430\u043d\u0442 \u043c\u0435\u043d\u044c\u0448\u0435 0",mode:"error"},"\u0414\u0438\u0441\u043a\u0440\u0438\u043c\u0438\u043d\u0430\u043d\u0442 \u043c\u0435\u043d\u044c\u0448\u0435 0, \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u043a\u043e\u0440\u043d\u0435\u0439 \u043d\u0435\u0442")),!c&&r.a.createElement(_.a,null,r.a.createElement(G.a.Provider,null,r.a.createElement("p",null,"\u0420\u0435\u0448\u0435\u043d\u0438\u0435:"),r.a.createElement(G.a.Node,{formula:"x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}."}),r.a.createElement("p",null,"\u041d\u0430\u0439\u0434\u0451\u043c \u0434\u0438\u0441\u043a\u0440\u0438\u043c\u0438\u043d\u0430\u043d\u0442:"),r.a.createElement(G.a.Node,{formula:"D = b^2 - 4ac"}),r.a.createElement(G.a.Node,{formula:"D = ".concat(n,"^2 - 4\\cdot").concat(a,"\\cdot").concat(o)}),r.a.createElement(G.a.Node,{formula:"D = ".concat(i)}),r.a.createElement("p",null,"\u0414\u0438\u0441\u043a\u0440\u0438\u043c\u0438\u043d\u0430\u043d\u0442 \u043d\u0435 \u043e\u0442\u0440\u0438\u0446\u0430\u0442\u0435\u043b\u0435\u043d, \u043d\u0430\u0439\u0434\u0451\u043c \u043a\u043e\u0440\u043d\u0438:"),r.a.createElement(G.a.Node,{formula:"x_1 = {-b + \\sqrt{d} \\over{2a}} = {-".concat(n," + \\sqrt{").concat(i,"} \\over{2\\cdot").concat(a,"}} = ").concat(l)}),r.a.createElement(G.a.Node,{formula:"x_2 = {-b - \\sqrt{d} \\over{2a}} = {-".concat(n," - \\sqrt{").concat(i,"} \\over{2\\cdot").concat(a,"}} = ").concat(u)}))))}}]),t}(r.a.Component),Y=function(){var e=Object(n.useState)("quadratic"),t=Object(u.a)(e,2),a=t[0],o=t[1],c=function(e){o(e.currentTarget.dataset.to)};return r.a.createElement(d.a,{activePanel:a},r.a.createElement(y,{id:"home",go:c}),r.a.createElement(X,{id:"quadratic",go:c}))};function Z(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var ee=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.send("VKWebAppInit"),function(){if("serviceWorker"in navigator){if(new URL("/react-equation-solver",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/react-equation-solver","/service-worker.js");ee?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Z(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):Z(e)}))}}(),c.a.render(r.a.createElement(Y,null),document.getElementById("root"))}},[[198,1,2]]]);
//# sourceMappingURL=main.482ce493.chunk.js.map