(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{45:function(e,t,a){e.exports=a(80)},50:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var n=a(9),r=a(10),l=a(12),c=a(11),i=a(1),o=a.n(i),s=a(38),m=a.n(s),u=(a(50),a(2)),d=Object(u.f)((function(e){return Object(i.useEffect)((function(){window.scrollTo(0,0)})),e.children})),p=a(40),v=a.n(p),f=a(7),h=a(44),E=a(16),g=a(14),b=a(41),y=a.n(b),w=[{Social:o.a.createElement(g.b,null),link:"http://www.linkedin.com/in/elliotscotto/"},{Social:o.a.createElement(g.a,null),link:"http://github.com/ElliotScotto?tab=repositories"},{Social:o.a.createElement(g.c,null),link:"https://slack.com/get-started#/createnew"}],N=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).menuTrigger=r.menuTrigger.bind(Object(E.a)(r)),r.CLoseMenuTrigger=r.CLoseMenuTrigger.bind(Object(E.a)(r)),r.stickyHeader=r.stickyHeader.bind(Object(E.a)(r)),window.addEventListener("load",(function(){console.log("All assets are loaded")})),r}return Object(r.a)(a,[{key:"menuTrigger",value:function(){document.querySelector(".header-wrapper").classList.toggle("menu-open")}},{key:"CLoseMenuTrigger",value:function(){document.querySelector(".header-wrapper").classList.remove("menu-open")}},{key:"stickyHeader",value:function(){}},{key:"render",value:function(){window.addEventListener("scroll",(function(){window.scrollY>100?document.querySelector(".header--fixed").classList.add("sticky"):document.querySelector(".header--fixed").classList.remove("sticky")}));var e=document.querySelectorAll(".has-droupdown > a");for(var t in e)e.hasOwnProperty(t)&&(e[t].onclick=function(){this.parentElement.querySelector(".submenu").classList.toggle("active"),this.classList.toggle("open")});var a=this.props.color,n=void 0===a?"default-color":a;return o.a.createElement("header",{className:"header-area header-style-two header--fixed ".concat(n)},o.a.createElement("div",{className:"header-wrapper"},o.a.createElement("div",{className:"header-left d-flex align-items-center"},o.a.createElement("nav",{className:"mainmenunav d-lg-block ml--50"},o.a.createElement(y.a,{className:"mainmenu",items:["home","about","service","projets","contact"],currentClassName:"is-current",offset:-200},o.a.createElement("li",null,o.a.createElement("a",{href:"#home"},"Elliot")),o.a.createElement("li",null,o.a.createElement("a",{href:"#about"},"A Propos")),o.a.createElement("li",null,o.a.createElement("a",{href:"#service"},"Service")),o.a.createElement("li",null,o.a.createElement("a",{href:"#projets"},"Projets")),o.a.createElement("li",null,o.a.createElement("a",{href:"#contact"},"Contact"))))),o.a.createElement("div",{className:"header-right"},o.a.createElement("div",{className:"social-share-inner"},o.a.createElement("ul",{className:"social-share social-style--2 color-black d-flex justify-content-start liststyle"},w.map((function(e,t){return o.a.createElement("li",{key:t},o.a.createElement("a",{href:"".concat(e.link)},e.Social))})))),o.a.createElement("div",{className:"humberger-menu d-block d-lg-none pl--20"},o.a.createElement("span",{onClick:this.menuTrigger,className:"menutrigger text-white"},o.a.createElement(f.b,null))),o.a.createElement("div",{className:"close-menu d-block d-lg-none"},o.a.createElement("span",{onClick:this.CLoseMenuTrigger,className:"closeTrigger"},o.a.createElement(f.i,null))))))}}]),a}(i.Component),j=[{Social:o.a.createElement(g.b,null),link:"http://www.linkedin.com/in/elliotscotto/"},{Social:o.a.createElement(g.a,null),link:"http://github.com/ElliotScotto?tab=repositories"},{Social:o.a.createElement(g.c,null),link:"https://slack.com/get-started#/createnew"}],x=function(){return o.a.createElement("div",{className:"footer-style-2 ptb--30 bg_image bg_image--1","data-black-overlay":"6"},o.a.createElement("div",{className:"wrapper plr--50 plr_sm--20"},o.a.createElement("div",{className:"row align-items-center justify-content-between"},o.a.createElement("div",{className:"col-lg-4 col-md-6 col-sm-6 col-12"},o.a.createElement("div",{className:"inner"},o.a.createElement("div",{className:"logo text-center text-sm-left mb_sm--20 text"},o.a.createElement("p",null,"Fabriqu\xe9 en ao\xfbt 2023 - ElliotScottoEI - SIRET : 750897 18 00022")))),o.a.createElement("div",{className:"col-lg-4 col-md-6 col-sm-6 col-12"},o.a.createElement("div",{className:"inner text-center"},o.a.createElement("ul",{className:"social-share rn-lg-size d-flex justify-content-center liststyle"},j.map((function(e,t){return o.a.createElement("li",{key:t},o.a.createElement("a",{href:"".concat(e.link)},e.Social))}))))),o.a.createElement("div",{className:"col-lg-4 col-md-12 col-sm-12 col-12"},o.a.createElement("div",{className:"inner text-lg-right text-center mt_md--20 mt_sm--20"},o.a.createElement("div",{className:"text"}))))))},k=a(13),S=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props.tabStyle;return o.a.createElement("div",null,o.a.createElement("div",{className:"tabs-area"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-12"},o.a.createElement(k.d,null,o.a.createElement(k.b,{className:"".concat(e)},o.a.createElement(k.a,null,"Capacit\xe9s"),o.a.createElement(k.a,null,"Experience"),o.a.createElement(k.a,null,"Education & Certification")),o.a.createElement(k.c,null,o.a.createElement("div",{className:"single-tab-content"},o.a.createElement("ul",null,o.a.createElement("li",null,"- Travail en projet collaboratif (AGILE kanban)"," ",o.a.createElement("span",null," - Jira"),o.a.createElement("br",null),"Communication, Suivi et maintenance du code"),o.a.createElement("li",null,"- Developpement Web & Mobile",o.a.createElement("span",null," - Javascript"),o.a.createElement("br",null),"ReactJS, React-Native..."),o.a.createElement("li",null,"- Tests unitaires et fonctionnels du code",o.a.createElement("span",null," - Jest")),o.a.createElement("li",null,"- Stack",o.a.createElement("br",null),"ReactJS, React-Native, Expo, NodeJS, Express, Redux, Tailwind, Git, Jest, Stripe...")))),o.a.createElement(k.c,null,o.a.createElement("div",{className:"single-tab-content"},o.a.createElement("ul",null,o.a.createElement("li",null,"- Developpeur Front-end (cr\xe9ation d'un MVP en React-Native)",o.a.createElement("span",null," ","- Near Field Services, Cleveland US (remote)"),o.a.createElement("br",null),"De f\xe9vrier 2023 \xe0 Juillet 2023"),o.a.createElement("li",null,"- Concepteur-d\xe9veloppeur App. Mobile (projet en cours)",o.a.createElement("span",null," - ElliotScottoEI"),o.a.createElement("br",null),"Ao\xfbt 2023 \xe0 maintenant")))),o.a.createElement(k.c,null,o.a.createElement("div",{className:"single-tab-content"},o.a.createElement("ul",null,o.a.createElement("li",null,'Formation Bootcamp "Concepteur-developpeur d\'applications mobile & sites web"',o.a.createElement("span",null," - Le Reacteur, Paris, FR")," 2022"))))))))))}}]),a}(i.Component),O=a(42),L=a(18);function C(){C=function(){return t};var e,t={},a=Object.prototype,n=a.hasOwnProperty,r=Object.defineProperty||function(e,t,a){e[t]=a.value},l="function"==typeof Symbol?Symbol:{},c=l.iterator||"@@iterator",i=l.asyncIterator||"@@asyncIterator",o=l.toStringTag||"@@toStringTag";function s(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(e){s=function(e,t,a){return e[t]=a}}function m(e,t,a,n){var l=t&&t.prototype instanceof h?t:h,c=Object.create(l.prototype),i=new T(n||[]);return r(c,"_invoke",{value:k(e,a,i)}),c}function u(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(e){return{type:"throw",arg:e}}}t.wrap=m;var d="suspendedStart",p="executing",v="completed",f={};function h(){}function E(){}function g(){}var b={};s(b,c,(function(){return this}));var y=Object.getPrototypeOf,w=y&&y(y(_([])));w&&w!==a&&n.call(w,c)&&(b=w);var N=g.prototype=h.prototype=Object.create(b);function j(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function x(e,t){function a(r,l,c,i){var o=u(e[r],e,l);if("throw"!==o.type){var s=o.arg,m=s.value;return m&&"object"==typeof m&&n.call(m,"__await")?t.resolve(m.__await).then((function(e){a("next",e,c,i)}),(function(e){a("throw",e,c,i)})):t.resolve(m).then((function(e){s.value=e,c(s)}),(function(e){return a("throw",e,c,i)}))}i(o.arg)}var l;r(this,"_invoke",{value:function(e,n){function r(){return new t((function(t,r){a(e,n,t,r)}))}return l=l?l.then(r,r):r()}})}function k(t,a,n){var r=d;return function(l,c){if(r===p)throw new Error("Generator is already running");if(r===v){if("throw"===l)throw c;return{value:e,done:!0}}for(n.method=l,n.arg=c;;){var i=n.delegate;if(i){var o=S(i,n);if(o){if(o===f)continue;return o}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var s=u(t,a,n);if("normal"===s.type){if(r=n.done?v:"suspendedYield",s.arg===f)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=v,n.method="throw",n.arg=s.arg)}}}function S(t,a){var n=a.method,r=t.iterator[n];if(r===e)return a.delegate=null,"throw"===n&&t.iterator.return&&(a.method="return",a.arg=e,S(t,a),"throw"===a.method)||"return"!==n&&(a.method="throw",a.arg=new TypeError("The iterator does not provide a '"+n+"' method")),f;var l=u(r,t.iterator,a.arg);if("throw"===l.type)return a.method="throw",a.arg=l.arg,a.delegate=null,f;var c=l.arg;return c?c.done?(a[t.resultName]=c.value,a.next=t.nextLoc,"return"!==a.method&&(a.method="next",a.arg=e),a.delegate=null,f):c:(a.method="throw",a.arg=new TypeError("iterator result is not an object"),a.delegate=null,f)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function T(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function _(t){if(t||""===t){var a=t[c];if(a)return a.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,l=function a(){for(;++r<t.length;)if(n.call(t,r))return a.value=t[r],a.done=!1,a;return a.value=e,a.done=!0,a};return l.next=l}}throw new TypeError(typeof t+" is not iterable")}return E.prototype=g,r(N,"constructor",{value:g,configurable:!0}),r(g,"constructor",{value:E,configurable:!0}),E.displayName=s(g,o,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===E||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,s(e,o,"GeneratorFunction")),e.prototype=Object.create(N),e},t.awrap=function(e){return{__await:e}},j(x.prototype),s(x.prototype,i,(function(){return this})),t.AsyncIterator=x,t.async=function(e,a,n,r,l){void 0===l&&(l=Promise);var c=new x(m(e,a,n,r),l);return t.isGeneratorFunction(a)?c:c.next().then((function(e){return e.done?e.value:c.next()}))},j(N),s(N,o,"Generator"),s(N,c,(function(){return this})),s(N,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),a=[];for(var n in t)a.push(n);return a.reverse(),function e(){for(;a.length;){var n=a.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=_,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(L),!t)for(var a in this)"t"===a.charAt(0)&&n.call(this,a)&&!isNaN(+a.slice(1))&&(this[a]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var a=this;function r(n,r){return i.type="throw",i.arg=t,a.next=n,r&&(a.method="next",a.arg=e),!!r}for(var l=this.tryEntries.length-1;l>=0;--l){var c=this.tryEntries[l],i=c.completion;if("root"===c.tryLoc)return r("end");if(c.tryLoc<=this.prev){var o=n.call(c,"catchLoc"),s=n.call(c,"finallyLoc");if(o&&s){if(this.prev<c.catchLoc)return r(c.catchLoc,!0);if(this.prev<c.finallyLoc)return r(c.finallyLoc)}else if(o){if(this.prev<c.catchLoc)return r(c.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return r(c.finallyLoc)}}}},abrupt:function(e,t){for(var a=this.tryEntries.length-1;a>=0;--a){var r=this.tryEntries[a];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var l=r;break}}l&&("break"===e||"continue"===e)&&l.tryLoc<=t&&t<=l.finallyLoc&&(l=null);var c=l?l.completion:{};return c.type=e,c.arg=t,l?(this.method="next",this.next=l.finallyLoc,f):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),L(a),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var n=a.completion;if("throw"===n.type){var r=n.arg;L(a)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,a,n){return this.delegate={iterator:_(t),resultName:a,nextLoc:n},"next"===this.method&&(this.arg=e),f}},t}var T=function(e){var t=e.message;return o.a.createElement("h6",{style:{marginTop:20,color:"#ffffff"}},t)};function _(){var e=Object(i.useState)(""),t=Object(L.a)(e,2),a=t[0],n=t[1],r=Object(i.useState)(""),l=Object(L.a)(r,2),c=l[0],s=l[1],m=Object(i.useState)(""),u=Object(L.a)(m,2),d=u[0],p=u[1],v=Object(i.useState)(""),f=Object(L.a)(v,2),h=f[0],E=f[1],g=Object(i.useState)(""),b=Object(L.a)(g,2),y=b[0],w=b[1],N=Object(i.useCallback)(function(){var e=Object(O.a)(C().mark((function e(t){var n,r,l;return C().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={name:a,email:c,subject:d,message:h},e.next=4,fetch("https://site--backend-portfolio--cpx4vl465khg.code.run/send-email",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 4:return r=e.sent,e.next=7,r.json();case 7:"success"===(l=e.sent)?(w("Mail envoy\xe9 \xe0 Elliot !"),setTimeout((function(){w("")}),5e3)):"error"===l&&(w("Erreur lors de l'envoi du mail"),setTimeout((function(){w("")}),5e3));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[a,c,d,h]);return o.a.createElement("div",{className:"contact-form--1"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row row--35 align-items-start"},o.a.createElement("div",{className:"col-lg-6 order-2 order-lg-1"},o.a.createElement("div",{className:"section-title text-left mb--50"},o.a.createElement("h2",{className:"title"},"Contact"),o.a.createElement("p",{className:"description"},"Je suis disponible pour un travail en freelance et autres contrats (CDD, CDI...). Joignez-moi via"," ",o.a.createElement("a",{href:"http://www.linkedin.com/in/elliotscotto/"},"linkedIn")," ","ou par mail :"," ",o.a.createElement("a",{href:"mailto:scotto.elliot@gmail.com"},"scotto.elliot@gmail.com"))),o.a.createElement("div",{className:"form-wrapper"},o.a.createElement("form",{onSubmit:N},o.a.createElement("label",{htmlFor:"item01"},o.a.createElement("input",{type:"text",name:"name",id:"item01",value:a,onChange:function(e){n(e.target.value)},placeholder:"Votre Nom *"})),o.a.createElement("label",{htmlFor:"item02"},o.a.createElement("input",{type:"text",name:"email",id:"item02",value:c,onChange:function(e){s(e.target.value)},placeholder:"Votre Email *"})),o.a.createElement("label",{htmlFor:"item03"},o.a.createElement("input",{type:"text",name:"subject",id:"item03",value:d,onChange:function(e){p(e.target.value)},placeholder:"Objet"})),o.a.createElement("label",{htmlFor:"item04"},o.a.createElement("textarea",{type:"text",id:"item04",name:"message",value:h,onChange:function(e){E(e.target.value)},placeholder:"Votre Message"})),o.a.createElement("button",{className:"rn-button-style--2 btn-solid",type:"submit",value:"submit",name:"submit",id:"mc-embedded-subscribe"},"Envoyer"),o.a.createElement(T,{message:y})))))))}var A=a(19),F=[{image:"barTapThumbnail",category:"App mobile",description:"Front-end [React-Native]",title:"BarTap",details:"https://drive.google.com/file/d/1Q_7BYsDTwj7RuobudVVYTH413aP59j-K/view?usp=sharing",explications:'Con\xe7ue par "Near Field Services" (Cleveland, US), les clients disposant du NFC acc\xe8dent aux informations et gagnent des r\xe9compenses provenant d\'\xe9tablissements partenaires : bars, restaurants... Elle offre aussi aux g\xe9rants une meilleure connaissance et gestion de leur client\xe8le.',role:"Mon R\xf4le : l'Interface Utilisateur MVP : cr\xe9ation/connexion comptes, gestion des \xe9v\xe9nements NFC, gestion des push-notifications, tutoriel, animations du Tap scan, traitement des donn\xe9es du serveur..."},{image:"marvelThumbnail",category:"Site web",description:"FullStack [ReactJS & Express]",title:"Marvel",details:"http://elliotscottomarvelapp.netlify.app/",explications:"Cl\xf4ne du site web Marvel",role:"Mon R\xf4le : Cr\xe9ation/Connexion de compte utilisateur, Traitement et affichage des donn\xe9es de l'API Marvel, cr\xe9ation d'un serveur Express avec APIs et BDD MongoDB..."},{image:"happyCowThumbnail",category:"App mobile",description:"[React-Native]",title:"Happy Cow",details:"https://drive.google.com/file/d/1RjdoJOXhNIQmyDA-73YdcGSNLPTAXcey/view?usp=sharing",explications:"Cl\xf4ne de l'appli mobile Happy Cow r\xe9pertoriant des \xe9tablissements de restauration vegan et v\xe9g\xe9tarien",role:"Mon R\xf4le : Cr\xe9ation de l'appli gr\xe2ce \xe0 l'API OpenFoodFacts, geolocalisation des \xe9tablissements r\xe9pertori\xe9s, compte-utilisateur, mise en favoris..."}],P=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props,t=e.column,a=e.styeVariation,n=F.slice(0,this.props.item);return o.a.createElement(o.a.Fragment,null,n.map((function(e,n){return o.a.createElement("div",{className:"".concat(t),key:n},o.a.createElement("div",{className:"portfolio ".concat(a)},o.a.createElement("div",{className:"thumbnail-inner"},o.a.createElement("div",{className:"thumbnail ".concat(e.image)}),o.a.createElement("div",{className:"bg-blr-image ".concat(e.image)})),o.a.createElement("div",{className:"content"},o.a.createElement("div",{className:"inner"},o.a.createElement("h4",null,o.a.createElement("a",null,e.title),o.a.createElement("p",null,e.category)),o.a.createElement("div",{className:"allDetails"},o.a.createElement("h5",null,e.description),o.a.createElement("p",null,e.explications),o.a.createElement("h6",null,e.role)),e.details?o.a.createElement("div",{className:"portfolio-button"},o.a.createElement("a",{className:"rn-btn",href:e.details},"D\xe9couvrir")):null)),o.a.createElement(A.b,{className:"link-overlay",to:"/portfolio-details"})),o.a.createElement("br",null))})))}}]),a}(i.Component),M=[{icon:o.a.createElement(f.c,null),title:"Site Internet",description:"Je con\xe7ois un site internet responsive complet d\xe9di\xe9 \xe0 votre activit\xe9."},{icon:o.a.createElement(f.g,null),title:"Application Mobile",description:"J'int\xe8gre les fonctionnalit\xe9s n\xe9cessaires \xe0 votre activit\xe9 compatibles avec iOS et Android."},{icon:o.a.createElement(f.d,null),title:"Sur mesure",description:"Selon la complexit\xe9 du projet, j'int\xe8gre une base de donn\xe9es et cr\xe9e les API n\xe9cessaires."},{icon:o.a.createElement(f.e,null),title:"Garantie & Maintenance"},{icon:o.a.createElement(f.h,null),title:"Echange & Transparence"},{icon:o.a.createElement(f.f,null),title:"Prix",description:"Ma tarification moyenne journali\xe8re est de 250\u20ac/jour."}],R=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props.column,t=M.slice(0,this.props.item);return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"row"},t.map((function(t,a){return o.a.createElement("div",{className:"".concat(e),key:a},o.a.createElement("div",{className:"service service__style--2"},o.a.createElement("div",{className:"icon"},t.icon),o.a.createElement("div",{className:"content"},o.a.createElement("h3",{className:"title"},t.title),o.a.createElement("p",null,"Garantie & Maintenance"===t.title?o.a.createElement(o.a.Fragment,null,"Je m'engage \xe0 vous fournir un code fonctionnel et test\xe9."," ",o.a.createElement("br",null),"Selon votre souhait, je prend en consid\xe9ration les \xe9ventuels changements d\xe9sir\xe9s pendant le projet.",o.a.createElement("br",null),"Je propose une assistance apr\xe8s le rendu du projet si besoin."):"Echange & Transparence"===t.title?o.a.createElement(o.a.Fragment,null,"Echange & Transparence"===t.title&&o.a.createElement(o.a.Fragment,null,"Regardez l'avanc\xe9e de votre projet en cours via un tableau de bord (Jira - Agile)")):t.description))))}))))}}]),a}(i.Component),J=[{textPosition:"text-left",category:"",description:"",buttonText:"",buttonLink:""}],I=function(){return o.a.createElement("div",{className:"active-dark"},o.a.createElement(N,{homeLink:"/",logo:"symbol-dark",color:"color-black"}),o.a.createElement("div",{id:"home",className:"fix"},o.a.createElement("div",{className:"slider-wrapper"},J.map((function(e,t){return o.a.createElement("div",{className:"slide personal-portfolio-slider slider-paralax slider-style-3 d-flex align-items-center justify-content-center bg_image bg_image--25",key:t},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-12"},o.a.createElement("div",{className:"inner ".concat(e.textPosition)},e.category?o.a.createElement("span",null,e.category):"",o.a.createElement("h1",{className:"title"},"Je m'appelle ",o.a.createElement("br",null),"Elliot Scotto ",o.a.createElement("br",null),o.a.createElement(h.a,null,o.a.createElement("span",null," Developpeur"),o.a.createElement("span",null," FullStack"),o.a.createElement("span",null," Freelance"),o.a.createElement("span",null," Javascript"))," "),o.a.createElement("h3",null,"Rosny-sur-Seine (78)"),o.a.createElement("h3",null,"France"),e.description?o.a.createElement("p",{className:"description"},e.description):"",e.buttonText?o.a.createElement("div",{className:"slide-btn"},o.a.createElement("a",{className:"rn-button-style--2 btn-primary-color",href:"".concat(e.buttonLink)},e.buttonText)):"")))))})))),o.a.createElement("div",{id:"about",className:"fix"},o.a.createElement("div",{className:"about-area ptb--120  bg_color--1"},o.a.createElement("div",{className:"about-wrapper"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row row--35 align-items-center"},o.a.createElement("div",{className:"col-lg-5"},o.a.createElement("div",{className:"thumbnail"},o.a.createElement("img",{className:"w-100",src:"/assets/images/about/about_es.jpg",alt:"About Images"}))),o.a.createElement("div",{className:"col-lg-7"},o.a.createElement("div",{className:"about-inner inner"},o.a.createElement("div",{className:"section-title"},o.a.createElement("h2",{className:"title"},"A propos de Moi"),o.a.createElement("p",{className:"description"},"\"Apr\xe8s 7 belles ann\xe9es de r\xe9ussite comme responsable dans une grande enseigne de bricolage, j'ai pris conscience que je pouvais donner un autre sens \xe0 ma carri\xe8re.",o.a.createElement("br",null)," Si mon app\xe9tence pour le d\xe9veloppement a commenc\xe9 il y a longtemps, la pand\xe9mie de Covid et le confinement m'ont donn\xe9 simplement le \"push\" psychologique que j'attendais.",o.a.createElement("br",null),"Aujourd'hui, c'est un vrai nouveau d\xe9part initi\xe9 avec le Bootcamp du",o.a.createElement("a",{href:"https://www.lereacteur.io/",style:{color:"rgb(198, 201, 216)"}}," ","R\xe9acteur"," "),"(Paris) que j'ai pu me former aux technologies web et mobiles pour r\xe9pondre aux besoins des particuliers et des entreprises.\"")),o.a.createElement("div",{className:"row mt--30"},o.a.createElement(S,{tabStyle:"tab-style--1"}))))))))),o.a.createElement("div",{id:"service",className:"fix"},o.a.createElement("div",{className:"service-area creative-service-wrapper ptb--120 bg_color--5"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-12"},o.a.createElement("div",{className:"section-title text-center service-style--3 mb--30 mb_sm--0"},o.a.createElement("h2",{className:"title"},"Ce que je propose*"),o.a.createElement("p",null,"*Sur la base d'un devis avec \xe9ch\xe9ancier (gratuit).")))),o.a.createElement("div",{className:"row creative-service"},o.a.createElement("div",{className:"col-lg-12"},o.a.createElement(R,{item:"6",column:"col-lg-4 col-md-6 col-sm-6 col-12 text-left"})))))),o.a.createElement("div",{id:"projets",className:"fix"},o.a.createElement("div",{className:"portfolio-area ptb--120 bg_color--1"},o.a.createElement("div",{className:"portfolio-sacousel-inner"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-12"},o.a.createElement("div",{className:"section-title text-center service-style--3 mb--30 mb_sm--0"},o.a.createElement("h2",{className:"title"},"Mes Derniers Projets"),o.a.createElement("p",null,"Acc\xe9dez \xe0 mon activit\xe9 et mon code sur"," ",o.a.createElement("a",{href:"http://github.com/ElliotScotto?tab=repositories"},"GitHub")),o.a.createElement("br",null)))),o.a.createElement("div",{className:"row"},o.a.createElement(P,{styevariation:"text-center mt--40",column:"col-lg-4 col-md-6 col-sm-6 col-12",item:"6"})))))),o.a.createElement("div",{id:"contact",className:"fix"},o.a.createElement("div",{className:"rn-contact-area ptb--120 bg_color--1"},o.a.createElement(_,{contactImages:"/assets/images/about/about-9.jpg",contactTitle:"Hire Me."}))),o.a.createElement(x,null),o.a.createElement("div",{className:"backto-top"},o.a.createElement(v.a,{showUnder:160},o.a.createElement(f.a,null))))},D=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function G(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var q=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return o.a.createElement(A.a,{basename:"/"},o.a.createElement(d,null,o.a.createElement(u.c,null,o.a.createElement(u.a,{exact:!0,path:"".concat("","/"),component:I}))))}}]),a}(i.Component);m.a.render(o.a.createElement(q,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");D?(!function(e,t){fetch(e).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):G(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):G(t,e)}))}}()}},[[45,1,2]]]);
//# sourceMappingURL=main.d081d641.chunk.js.map