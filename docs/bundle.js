!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){t.exports=n(8)},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";function o(){}n.r(e);function r(t){return t()}function i(){return Object.create(null)}function s(t){t.forEach(r)}function l(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(t){return 0===Object.keys(t).length}new Set;function u(t,e){t.appendChild(e)}function f(t,e,n){t.insertBefore(e,n||null)}function d(t){t.parentNode.removeChild(t)}function p(t){return document.createElement(t)}function $(t){return document.createTextNode(t)}function m(){return $(" ")}function g(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function h(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function k(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function b(t,e,n,o){t.style.setProperty(e,n,o?"important":"")}new Set;let v;function y(t){v=t}function w(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(t=>t(e))}const x=[],_=[],j=[],C=[],T=Promise.resolve();let P=!1;function M(){P||(P=!0,T.then(E))}function O(t){j.push(t)}let S=!1;const A=new Set;function E(){if(!S){S=!0;do{for(let t=0;t<x.length;t+=1){const e=x[t];y(e),q(e.$$)}for(x.length=0;_.length;)_.pop()();for(let t=0;t<j.length;t+=1){const e=j[t];A.has(e)||(A.add(e),e())}j.length=0}while(x.length);for(;C.length;)C.pop()();P=!1,S=!1,A.clear()}}function q(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(O)}}const L=new Set;let H;function N(t,e){t&&t.i&&(L.delete(t),t.i(e))}function D(t,e,n,o){if(t&&t.o){if(L.has(t))return;L.add(t),H.c.push(()=>{L.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}"undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;new Set(["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"]);let I;function B(t){t&&t.c()}function Q(t,e,n){const{fragment:o,on_mount:i,on_destroy:c,after_update:a}=t.$$;o&&o.m(e,n),O(()=>{const e=i.map(r).filter(l);c?c.push(...e):s(e),t.$$.on_mount=[]}),a.forEach(O)}function R(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function W(t,e,n,r,l,c,a=[-1]){const u=v;y(t);const f=e.props||{},p=t.$$={fragment:null,ctx:null,props:c,update:o,not_equal:l,bound:i(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:i(),dirty:a,skip_bound:!1};let $=!1;if(p.ctx=n?n(t,f,(e,n,...o)=>{const r=o.length?o[0]:n;return p.ctx&&l(p.ctx[e],p.ctx[e]=r)&&(!p.skip_bound&&p.bound[e]&&p.bound[e](r),$&&function(t,e){-1===t.$$.dirty[0]&&(x.push(t),M(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(t,e)),n}):[],p.update(),$=!0,s(p.before_update),p.fragment=!!r&&r(p.ctx),e.target){if(e.hydrate){const t=(m=e.target,Array.from(m.childNodes));p.fragment&&p.fragment.l(t),t.forEach(d)}else p.fragment&&p.fragment.c();e.intro&&N(t.$$.fragment),Q(t,e.target,e.anchor),E()}var m;y(u)}"function"==typeof HTMLElement&&(I=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,n){this[t]=n}$destroy(){R(this,1),this.$destroy=o}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){this.$$set&&!a(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});class G{$destroy(){R(this,1),this.$destroy=o}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){this.$$set&&!a(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}n(1);function K(t){let e;return{c(){e=p("div"),e.innerHTML='<img class="shadow svelte-1i456k9" src="images/profile.jpg" height="150" alt="Profile"> \n  <div id="text" class="svelte-1i456k9"><h1 class="svelte-1i456k9">René Antonio</h1> \n    <p class="svelte-1i456k9">aka. idkwhatusernameuse</p> \n    <p class="svelte-1i456k9">I&#39;m a 17 y.o. boy from Mexico that likes programming, After Effects and procrastination.</p></div>',h(e,"id","profile"),h(e,"class","svelte-1i456k9")},m(t,n){f(t,e,n)},p:o,i:o,o:o,d(t){t&&d(e)}}}var U=class extends G{constructor(t){super(),W(this,t,null,K,c,{})}};n(2);function Y(t){let e,n,r,i,s;return{c(){e=p("div"),n=p("p"),r=$(t[0]),h(e,"class","button shadow svelte-akgo9i")},m(o,l){f(o,e,l),u(e,n),u(n,r),i||(s=g(e,"click",t[1]),i=!0)},p(t,[e]){1&e&&k(r,t[0])},i:o,o:o,d(t){t&&d(e),i=!1,s()}}}function z(t,e,n){let{text:o}=e;return t.$$set=t=>{"text"in t&&n(0,o=t.text)},[o,function(e){w(t,e)}]}var F=class extends G{constructor(t){super(),W(this,t,z,Y,c,{text:0})}};n(3);function J(t){let e,n,r,i,s,l,c,a,v,y,w,x;return{c(){e=p("div"),n=p("img"),i=m(),s=p("div"),l=p("h2"),c=$(t[0]),a=m(),v=p("p"),y=$(t[1]),n.src!==(r=t[2])&&h(n,"src",r),h(n,"alt",t[0]),h(n,"class","svelte-ekugkl"),b(l,"color",t[3]),h(l,"class","svelte-ekugkl"),b(v,"color",t[3]),h(v,"class","svelte-ekugkl"),h(s,"class","project-text svelte-ekugkl"),h(e,"class","project shadow svelte-ekugkl")},m(o,r){f(o,e,r),u(e,n),u(e,i),u(e,s),u(s,l),u(l,c),u(s,a),u(s,v),u(v,y),w||(x=g(e,"click",t[4]),w=!0)},p(t,[e]){4&e&&n.src!==(r=t[2])&&h(n,"src",r),1&e&&h(n,"alt",t[0]),1&e&&k(c,t[0]),8&e&&b(l,"color",t[3]),2&e&&k(y,t[1]),8&e&&b(v,"color",t[3])},i:o,o:o,d(t){t&&d(e),w=!1,x()}}}function V(t,e,n){let{title:o}=e,{description:r}=e,{image:i}=e,{textColor:s="black"}=e;return t.$$set=t=>{"title"in t&&n(0,o=t.title),"description"in t&&n(1,r=t.description),"image"in t&&n(2,i=t.image),"textColor"in t&&n(3,s=t.textColor)},[o,r,i,s,function(e){w(t,e)}]}var X=class extends G{constructor(t){super(),W(this,t,V,J,c,{title:0,description:1,image:2,textColor:3})}};n(4);function Z(t){let e,n,r,i,s;return n=new X({props:{title:"Podium",description:"Alles Micro client (WIP)",image:"images/podium.png",textColor:"#3D90CD"}}),n.$on("click",t[0]),i=new X({props:{title:"The A Keyboard",description:"An Android keyboard full of A keys",image:"images/theakeyboard.png"}}),i.$on("click",t[1]),{c(){e=p("div"),B(n.$$.fragment),r=m(),B(i.$$.fragment),h(e,"id","projects"),h(e,"class","svelte-838x6l")},m(t,o){f(t,e,o),Q(n,e,null),u(e,r),Q(i,e,null),s=!0},p:o,i(t){s||(N(n.$$.fragment,t),N(i.$$.fragment,t),s=!0)},o(t){D(n.$$.fragment,t),D(i.$$.fragment,t),s=!1},d(t){t&&d(e),R(n),R(i)}}}function tt(t){return[()=>open("https://github.com/idkwuu/Podium"),()=>open("https://play.google.com/store/apps/details?id=dev.idkwuu.akeyboard")]}var et=class extends G{constructor(t){super(),W(this,t,tt,Z,c,{})}};n(5);function nt(t){let e,n,r,i,s,l,c;return{c(){e=p("a"),n=p("div"),r=p("img"),s=m(),l=p("p"),c=$(t[0]),r.src!==(i=t[1])&&h(r,"src",i),h(r,"alt",t[0]),h(r,"class","svelte-1x8qqum"),h(n,"class","link shadow svelte-1x8qqum"),h(e,"target","_blank"),h(e,"href",t[2])},m(t,o){f(t,e,o),u(e,n),u(n,r),u(n,s),u(n,l),u(l,c)},p(t,[n]){2&n&&r.src!==(i=t[1])&&h(r,"src",i),1&n&&h(r,"alt",t[0]),1&n&&k(c,t[0]),4&n&&h(e,"href",t[2])},i:o,o:o,d(t){t&&d(e)}}}function ot(t,e,n){let{title:o}=e,{src:r}=e,{link:i}=e;return t.$$set=t=>{"title"in t&&n(0,o=t.title),"src"in t&&n(1,r=t.src),"link"in t&&n(2,i=t.link)},[o,r,i]}var rt=class extends G{constructor(t){super(),W(this,t,ot,nt,c,{title:0,src:1,link:2})}};n(6);function it(t){let e,n,r,i,s,l,c,a,$,g,k,b,v,y,w,x,_;return n=new rt({props:{title:"Twitter",src:"images/twitter.svg",link:"https://twitter.com/idkwuu"}}),i=new rt({props:{title:"Telegram",src:"images/telegram.svg",link:"https://t.me/idkwuu"}}),l=new rt({props:{title:"GitHub",src:"images/github.png",link:"https://github.com/idkwuu"}}),a=new rt({props:{title:"Reddit",src:"images/reddit.svg",link:"https://reddit.com/u/idkwhatusernameuse"}}),g=new rt({props:{title:"YouTube",src:"images/youtube.svg",link:"https://www.youtube.com/channel/UCIOQMvPHLcBT7-x2Qx9NW8w"}}),b=new rt({props:{title:"Steam",src:"images/steam.svg",link:"https://steamcommunity.com/id/idkwuu"}}),{c(){e=p("div"),B(n.$$.fragment),r=m(),B(i.$$.fragment),s=m(),B(l.$$.fragment),c=m(),B(a.$$.fragment),$=m(),B(g.$$.fragment),k=m(),B(b.$$.fragment),v=m(),y=p("p"),y.textContent="Mastodon: @idkwhatusernameuse@mastodon.online",w=m(),x=p("p"),x.textContent="Discord: idkwuu#7097",h(e,"id","links"),h(e,"class","svelte-xm3qbc")},m(t,o){f(t,e,o),Q(n,e,null),u(e,r),Q(i,e,null),u(e,s),Q(l,e,null),u(e,c),Q(a,e,null),u(e,$),Q(g,e,null),u(e,k),Q(b,e,null),u(e,v),u(e,y),u(e,w),u(e,x),_=!0},p:o,i(t){_||(N(n.$$.fragment,t),N(i.$$.fragment,t),N(l.$$.fragment,t),N(a.$$.fragment,t),N(g.$$.fragment,t),N(b.$$.fragment,t),_=!0)},o(t){D(n.$$.fragment,t),D(i.$$.fragment,t),D(l.$$.fragment,t),D(a.$$.fragment,t),D(g.$$.fragment,t),D(b.$$.fragment,t),_=!1},d(t){t&&d(e),R(n),R(i),R(l),R(a),R(g),R(b)}}}var st=class extends G{constructor(t){super(),W(this,t,null,it,c,{})}};n(7);function lt(t){let e,n,o,r,i,s,l,c,a,$,g,k,v,y;return n=new U({}),i=new F({props:{text:"Personal projects"}}),i.$on("click",t[2]),l=new F({props:{text:"Links"}}),l.$on("click",t[3]),$=new et({}),v=new st({}),{c(){e=p("div"),B(n.$$.fragment),o=m(),r=p("div"),B(i.$$.fragment),s=m(),B(l.$$.fragment),c=m(),a=p("div"),B($.$$.fragment),g=m(),k=p("div"),B(v.$$.fragment),h(r,"id","buttons"),h(r,"class","svelte-tax30l"),b(a,"display",t[0]),b(k,"display",t[1]),h(e,"id","main"),h(e,"class","svelte-tax30l")},m(t,d){f(t,e,d),Q(n,e,null),u(e,o),u(e,r),Q(i,r,null),u(r,s),Q(l,r,null),u(e,c),u(e,a),Q($,a,null),u(e,g),u(e,k),Q(v,k,null),y=!0},p(t,[e]){(!y||1&e)&&b(a,"display",t[0]),(!y||2&e)&&b(k,"display",t[1])},i(t){y||(N(n.$$.fragment,t),N(i.$$.fragment,t),N(l.$$.fragment,t),N($.$$.fragment,t),N(v.$$.fragment,t),y=!0)},o(t){D(n.$$.fragment,t),D(i.$$.fragment,t),D(l.$$.fragment,t),D($.$$.fragment,t),D(v.$$.fragment,t),y=!1},d(t){t&&d(e),R(n),R(i),R(l),R($),R(v)}}}function ct(t,e,n){let o="none",r="none";return[o,r,function(){n(1,r="none"),n(0,o="none"==o?"inline-grid":"none")},function(){n(0,o="none"),n(1,r="none"==r?"inline-grid":"none")}]}const at=new class extends G{constructor(t){super(),W(this,t,ct,lt,c,{})}}({target:document.body});window.app=at;e.default=at}]);