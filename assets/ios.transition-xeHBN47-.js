import{m as r,o as Z}from"./index-2uN30RQJ.js";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const j=540,z=o=>document.querySelector("".concat(o,".ion-cloned-element")),b=o=>o.shadowRoot||o,P=o=>{const s=o.tagName==="ION-TABS"?o:o.querySelector("ion-tabs"),c="ion-content ion-header:not(.header-collapse-condense-inactive) ion-title.title-large";if(s!=null){const e=s.querySelector("ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)");return e!=null?e.querySelector(c):null}return o.querySelector(c)},D=(o,s)=>{const c=o.tagName==="ION-TABS"?o:o.querySelector("ion-tabs");let e=[];if(c!=null){const t=c.querySelector("ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)");t!=null&&(e=t.querySelectorAll("ion-buttons"))}else e=o.querySelectorAll("ion-buttons");for(const t of e){const p=t.closest("ion-header"),i=p&&!p.classList.contains("header-collapse-condense-inactive"),u=t.querySelector("ion-back-button"),l=t.classList.contains("buttons-collapse"),y=t.slot==="start"||t.slot==="";if(u!==null&&y&&(l&&i&&s||!l))return u}return null},J=(o,s,c,e,t)=>{const p=D(e,c),i=P(t),u=P(e),l=D(t,c),y=p!==null&&i!==null&&!c,E=u!==null&&l!==null&&c;if(y){const _=i.getBoundingClientRect(),f=p.getBoundingClientRect(),m=b(p).querySelector(".button-text"),R=m.getBoundingClientRect(),v=b(i).querySelector(".toolbar-title").getBoundingClientRect();G(o,s,c,i,_,v,m,R),k(o,s,c,p,f,m,R,i,v)}else if(E){const _=u.getBoundingClientRect(),f=l.getBoundingClientRect(),m=b(l).querySelector(".button-text"),R=m.getBoundingClientRect(),v=b(u).querySelector(".toolbar-title").getBoundingClientRect();G(o,s,c,u,_,v,m,R),k(o,s,c,l,f,m,R,u,v)}return{forward:y,backward:E}},k=(o,s,c,e,t,p,i,u,l)=>{var y,E;const _=s?"calc(100% - ".concat(t.right+4,"px)"):"".concat(t.left-4,"px"),f=s?"right":"left",m=s?"left":"right",R=s?"right":"left",q=((y=p.textContent)===null||y===void 0?void 0:y.trim())===((E=u.textContent)===null||E===void 0?void 0:E.trim()),v=l.width/i.width,g=(l.height-U)/i.height,X=q?"scale(".concat(v,", ").concat(g,")"):"scale(".concat(g,")"),W="scale(1)",x=b(e).querySelector("ion-icon").getBoundingClientRect(),n=s?"".concat(x.width/2-(x.right-t.right),"px"):"".concat(t.left-x.width/2,"px"),S=s?"-".concat(window.innerWidth-t.right,"px"):"".concat(t.left,"px"),h="".concat(l.top,"px"),C="".concat(t.top,"px"),a=[{offset:0,transform:"translate3d(".concat(n,", ").concat(h,", 0)")},{offset:1,transform:"translate3d(".concat(S,", ").concat(C,", 0)")}],d=[{offset:0,transform:"translate3d(".concat(S,", ").concat(C,", 0)")},{offset:1,transform:"translate3d(".concat(n,", ").concat(h,", 0)")}],N=c?d:a,A=c?[{offset:0,opacity:1,transform:W},{offset:1,opacity:0,transform:X}]:[{offset:0,opacity:0,transform:X},{offset:1,opacity:1,transform:W}],I=c?[{offset:0,opacity:1,transform:"scale(1)"},{offset:.2,opacity:0,transform:"scale(0.6)"},{offset:1,opacity:0,transform:"scale(0.6)"}]:[{offset:0,opacity:0,transform:"scale(0.6)"},{offset:.6,opacity:0,transform:"scale(0.6)"},{offset:1,opacity:1,transform:"scale(1)"}],L=r(),F=r(),w=r(),T=z("ion-back-button"),M=b(T).querySelector(".button-text"),K=b(T).querySelector("ion-icon");T.text=e.text,T.mode=e.mode,T.icon=e.icon,T.color=e.color,T.disabled=e.disabled,T.style.setProperty("display","block"),T.style.setProperty("position","fixed"),F.addElement(K),L.addElement(M),w.addElement(T),w.beforeStyles({position:"absolute",top:"0px",[R]:"0px"}).keyframes(N),L.beforeStyles({"transform-origin":"".concat(f," top")}).beforeAddWrite(()=>{e.style.setProperty("display","none"),T.style.setProperty(f,_)}).afterAddWrite(()=>{e.style.setProperty("display",""),T.style.setProperty("display","none"),T.style.removeProperty(f)}).keyframes(A),F.beforeStyles({"transform-origin":"".concat(m," center")}).keyframes(I),o.addAnimation([L,F,w])},G=(o,s,c,e,t,p,i,u)=>{var l,y;const E=s?"right":"left",_=s?"calc(100% - ".concat(t.right,"px)"):"".concat(t.left,"px"),f="0px",m="".concat(t.top,"px"),R=8,q=s?"-".concat(window.innerWidth-u.right-R,"px"):"".concat(u.x-R,"px"),v=2,g="".concat(u.y-v,"px"),X=((l=i.textContent)===null||l===void 0?void 0:l.trim())===((y=e.textContent)===null||y===void 0?void 0:y.trim()),W=u.width/p.width,H=u.height/(p.height-U),x="scale(1)",n=X?"scale(".concat(W,", ").concat(H,")"):"scale(".concat(H,")"),S=[{offset:0,opacity:0,transform:"translate3d(".concat(q,", ").concat(g,", 0) ").concat(n)},{offset:.1,opacity:0},{offset:1,opacity:1,transform:"translate3d(".concat(f,", ").concat(m,", 0) ").concat(x)}],h=[{offset:0,opacity:.99,transform:"translate3d(".concat(f,", ").concat(m,", 0) ").concat(x)},{offset:.6,opacity:0},{offset:1,opacity:0,transform:"translate3d(".concat(q,", ").concat(g,", 0) ").concat(n)}],C=c?S:h,a=z("ion-title"),d=r();a.innerText=e.innerText,a.size=e.size,a.color=e.color,d.addElement(a),d.beforeStyles({"transform-origin":"".concat(E," top"),height:"".concat(t.height,"px"),display:"",position:"relative",[E]:_}).beforeAddWrite(()=>{e.style.setProperty("opacity","0")}).afterAddWrite(()=>{e.style.setProperty("opacity",""),a.style.setProperty("display","none")}).keyframes(C),o.addAnimation(d)},V=(o,s)=>{var c;try{const e="cubic-bezier(0.32,0.72,0,1)",t="opacity",p="transform",i="0%",l=o.ownerDocument.dir==="rtl",y=l?"-99.5%":"99.5%",E=l?"33%":"-33%",_=s.enteringEl,f=s.leavingEl,m=s.direction==="back",R=_.querySelector(":scope > ion-content"),q=_.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *"),v=_.querySelectorAll(":scope > ion-header > ion-toolbar"),g=r(),X=r();if(g.addElement(_).duration(((c=s.duration)!==null&&c!==void 0?c:0)||j).easing(s.easing||e).fill("both").beforeRemoveClass("ion-page-invisible"),f&&o!==null&&o!==void 0){const n=r();n.addElement(o),g.addAnimation(n)}if(!R&&v.length===0&&q.length===0?X.addElement(_.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")):(X.addElement(R),X.addElement(q)),g.addAnimation(X),m?X.beforeClearStyles([t]).fromTo("transform","translateX(".concat(E,")"),"translateX(".concat(i,")")).fromTo(t,.8,1):X.beforeClearStyles([t]).fromTo("transform","translateX(".concat(y,")"),"translateX(".concat(i,")")),R){const n=b(R).querySelector(".transition-effect");if(n){const S=n.querySelector(".transition-cover"),h=n.querySelector(".transition-shadow"),C=r(),a=r(),d=r();C.addElement(n).beforeStyles({opacity:"1",display:"block"}).afterStyles({opacity:"",display:""}),a.addElement(S).beforeClearStyles([t]).fromTo(t,0,.1),d.addElement(h).beforeClearStyles([t]).fromTo(t,.03,.7),C.addAnimation([a,d]),X.addAnimation([C])}}const W=_.querySelector("ion-header.header-collapse-condense"),{forward:H,backward:x}=J(g,l,m,_,f);if(v.forEach(n=>{const S=r();S.addElement(n),g.addAnimation(S);const h=r();h.addElement(n.querySelector("ion-title"));const C=r(),a=Array.from(n.querySelectorAll("ion-buttons,[menuToggle]")),d=n.closest("ion-header"),N=d==null?void 0:d.classList.contains("header-collapse-condense-inactive");let $;m?$=a.filter(I=>{const L=I.classList.contains("buttons-collapse");return L&&!N||!L}):$=a.filter(I=>!I.classList.contains("buttons-collapse")),C.addElement($);const B=r();B.addElement(n.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])"));const A=r();A.addElement(b(n).querySelector(".toolbar-background"));const O=r(),Y=n.querySelector("ion-back-button");if(Y&&O.addElement(Y),S.addAnimation([h,C,B,A,O]),C.fromTo(t,.01,1),B.fromTo(t,.01,1),m)N||h.fromTo("transform","translateX(".concat(E,")"),"translateX(".concat(i,")")).fromTo(t,.01,1),B.fromTo("transform","translateX(".concat(E,")"),"translateX(".concat(i,")")),O.fromTo(t,.01,1);else if(W||h.fromTo("transform","translateX(".concat(y,")"),"translateX(".concat(i,")")).fromTo(t,.01,1),B.fromTo("transform","translateX(".concat(y,")"),"translateX(".concat(i,")")),A.beforeClearStyles([t,"transform"]),(d==null?void 0:d.translucent)?A.fromTo("transform",l?"translateX(-100%)":"translateX(100%)","translateX(0px)"):A.fromTo(t,.01,"var(--opacity)"),H||O.fromTo(t,.01,1),Y&&!H){const L=r();L.addElement(b(Y).querySelector(".button-text")).fromTo("transform",l?"translateX(-100px)":"translateX(100px)","translateX(0px)"),S.addAnimation(L)}}),f){const n=r(),S=f.querySelector(":scope > ion-content"),h=f.querySelectorAll(":scope > ion-header > ion-toolbar"),C=f.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *");if(!S&&h.length===0&&C.length===0?n.addElement(f.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")):(n.addElement(S),n.addElement(C)),g.addAnimation(n),m){n.beforeClearStyles([t]).fromTo("transform","translateX(".concat(i,")"),l?"translateX(-100%)":"translateX(100%)");const a=Z(f);g.afterAddWrite(()=>{g.getDirection()==="normal"&&a.style.setProperty("display","none")})}else n.fromTo("transform","translateX(".concat(i,")"),"translateX(".concat(E,")")).fromTo(t,1,.8);if(S){const a=b(S).querySelector(".transition-effect");if(a){const d=a.querySelector(".transition-cover"),N=a.querySelector(".transition-shadow"),$=r(),B=r(),A=r();$.addElement(a).beforeStyles({opacity:"1",display:"block"}).afterStyles({opacity:"",display:""}),B.addElement(d).beforeClearStyles([t]).fromTo(t,.1,0),A.addElement(N).beforeClearStyles([t]).fromTo(t,.7,.03),$.addAnimation([B,A]),n.addAnimation([$])}}h.forEach(a=>{const d=r();d.addElement(a);const N=r();N.addElement(a.querySelector("ion-title"));const $=r(),B=a.querySelectorAll("ion-buttons,[menuToggle]"),A=a.closest("ion-header"),O=A==null?void 0:A.classList.contains("header-collapse-condense-inactive"),Y=Array.from(B).filter(M=>{const K=M.classList.contains("buttons-collapse");return K&&!O||!K});$.addElement(Y);const I=r(),L=a.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])");L.length>0&&I.addElement(L);const F=r();F.addElement(b(a).querySelector(".toolbar-background"));const w=r(),T=a.querySelector("ion-back-button");if(T&&w.addElement(T),d.addAnimation([N,$,I,w,F]),g.addAnimation(d),w.fromTo(t,.99,0),$.fromTo(t,.99,0),I.fromTo(t,.99,0),m){if(O||N.fromTo("transform","translateX(".concat(i,")"),l?"translateX(-100%)":"translateX(100%)").fromTo(t,.99,0),I.fromTo("transform","translateX(".concat(i,")"),l?"translateX(-100%)":"translateX(100%)"),F.beforeClearStyles([t,"transform"]),(A==null?void 0:A.translucent)?F.fromTo("transform","translateX(0px)",l?"translateX(-100%)":"translateX(100%)"):F.fromTo(t,"var(--opacity)",0),T&&!x){const K=r();K.addElement(b(T).querySelector(".button-text")).fromTo("transform","translateX(".concat(i,")"),"translateX(".concat((l?-124:124)+"px",")")),d.addAnimation(K)}}else O||N.fromTo("transform","translateX(".concat(i,")"),"translateX(".concat(E,")")).fromTo(t,.99,0).afterClearStyles([p,t]),I.fromTo("transform","translateX(".concat(i,")"),"translateX(".concat(E,")")).afterClearStyles([p,t]),w.afterClearStyles([t]),N.afterClearStyles([t]),$.afterClearStyles([t])})}return g}catch(e){throw e}},U=10;export{V as iosTransitionAnimation,b as shadow};
