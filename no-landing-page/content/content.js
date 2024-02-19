function lt(t){const e=document.createElement(t.tagName);return e.innerHTML=t.innerHTML,e}async function Z(){const t=await ut();return t?{count:1,mails:[t]}:null}function ct(t){try{return new Date(t).toISOString()}catch{return null}}function Y(t,e,n=document.body){return t===n?!1:t.matches(e)?!0:t.parentElement?Y(t.parentElement,e,n):!1}async function ut(){var h;const t=[...document.querySelectorAll("[data-message-id]")],e=t[t.length-1];if(!e)return null;const n=document.querySelector("[role=main] .ha h2").textContent??"",o=e.getAttribute("data-message-id"),i=e.querySelector("img[jid]"),r=i.getAttribute("data-name"),a=i.getAttribute("jid"),s=i.getAttribute("src"),p=ct(((h=e.querySelector(".gK .g3"))==null?void 0:h.getAttribute("title"))??""),c=dt(e.querySelector("div.ii.gt")??e.querySelector(".adP")),m=e.querySelector(".ajA");let f;return m?f=[...e.querySelectorAll(".ajA tbody span[email]")].filter(y=>!Y(y,".ajA tbody > tr:first-child",m)).map(y=>y.getAttribute("email")).join(", "):f=[...e.querySelectorAll(".ady > .ajw span[email]")].map(y=>y.getAttribute("email")).join(", "),{id:o,subject:n,authorName:r,authorEmail:a,authorAvatar:s,createdAt:p,recipients:f,content:c}}function dt(t){const e=lt(t);return ft(e),e.innerHTML}function ft(t){[...t.querySelectorAll("img[data-emoji]")].forEach(e=>{const n=e.getAttribute("data-emoji"),o=document.createElement("span");o.textContent=n,e.replaceWith(o)})}const mt=Object.freeze(Object.defineProperty({__proto__:null,loadGmail:Z},Symbol.toStringTag,{value:"Module"})),gt="modulepreload",pt=function(t){return"/"+t},W={},ht=function(e,n,o){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(r=>{if(r=pt(r),r in W)return;W[r]=!0;const a=r.endsWith(".css"),s=a?'[rel="stylesheet"]':"";if(!!o)for(let m=i.length-1;m>=0;m--){const f=i[m];if(f.href===r&&(!a||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${s}`))return;const c=document.createElement("link");if(c.rel=a?"stylesheet":gt,a||(c.as="script",c.crossOrigin=""),c.href=r,document.head.appendChild(c),a)return new Promise((m,f)=>{c.addEventListener("load",m),c.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())};function j(t,e){return new Promise(n=>{chrome.runtime.sendMessage({event:t,props:e,destination:"background",v2:!0},o=>{n(o)})})}function _(t){t.backdrop&&(document.getElementById(`${t.id}-style`)||wt(`${t.id}-style`,`
        #${t.id}::backdrop {
          background: rgba(15, 15, 15, 0.6) !important;
        }
      `));const e=document.getElementById(`${t.id}`);if(e)if(t.overrideAlreadyExists)e.remove();else return;const n=document.createElement("dialog");n.id=`${t.id}`,n.setAttribute("style",`
    all: unset;
    inset-block-start: 0px;
    inset-block-end: 0px;
    max-width: calc((100% - 6px) - 2em);
    max-height: calc((100% - 6px) - 2em);
    user-select: text;
    visibility: visible;
    overflow: auto;
    position: fixed;
    ${t.position=="bottom"?`
    bottom: 30px;
    left: auto;
    top: auto;
    right:auto;
    `:""}
    border: none;
    background-color: white;
    position: fixed;
    /* display: block; */
    inset-inline-start: 0px;
    inset-inline-end: 0px;
    width: fit-content;
    height: fit-content;
    background-color: canvas;
    color: canvastext;
    margin: auto;
    border-width: initial;
    border-style: solid;
    border-color: initial;
    border-image: initial;
    border: none;
    background-color:transparent !important;
    color-scheme: none !important;
    position: fixed; 
    
    z-index: ${2147483640+t.zLevel};
  `),n.innerHTML=`
  <iframe id="${t.id}-iframe" src="${t.url}" 
  sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
  style="all:unset; 
  border: 0px;clip: auto;display: block;
  color-scheme: none !important;
  ${t.dimension?`
  height: ${t.dimension.height}px !important;
  width: ${t.dimension.width}px !important; 
  `:""}
  background: transparent !important;opacity:1;transition: opacity 0.4s ease 0s;"></iframe>
`,document.body.appendChild(n);const o=document.getElementById(t.id);t.position==="center"?o.showModal():t.position=="bottom"&&o.show()}class yt{constructor(){this.status="closed",this.watchClickOutsideFn=null,this._closeTooltipFn=null}async closeTooltip(){const e="stn-quick-tooltip",n=document.getElementById(e);n&&n.remove(),this._closeTooltipFn&&(this._closeTooltipFn=null)}async closeToast(){const e="stn-toast",n=document.getElementById(e);n&&n.remove()}async close(){if(this.status==="closed")return;this.status="closed";const e="stn-quick-modal",n=document.getElementById(e);n&&n.remove(),document.removeEventListener("click",this.watchClickOutsideFn)}async open(e="main"){if(this.status==="opened")return;this.status="opened";const n=await j("getExtensionContext",{});_({id:"stn-quick-modal",url:n.modalUrl,position:"center",backdrop:!0,overrideAlreadyExists:!1,dimension:{width:500,height:450},zLevel:1});const o=document.getElementById("stn-quick-modal-iframe");this.watchClickOutsideFn=i=>{o.contains(i.target)||this.clickedOutside()},document.addEventListener("click",this.watchClickOutsideFn)}async clickedOutside(){if(document.getElementById("stn-quick-modal").style.display==="none")return;await Q("canCloseDirectly",{})?this.close():Q("showDiscardDialog",{})}autoResize(e){let n=document.getElementById("stn-quick-modal-iframe");e.height&&(n.style.height=`${e.height}px`),e.width&&(n.style.width=`${e.width}px`)}async showTooltip(){const e=await j("getExtensionContext",{});_({id:"stn-quick-tooltip",url:e.tooltipUrl,position:"bottom",backdrop:!1,dimension:{width:200,height:44},overrideAlreadyExists:!0,zLevel:2}),this._closeTooltipFn=vt({id:"stn-quick-tooltip",duration:3e3,onClose:()=>{this.closeTooltip()}})}async showToast(){const e="stn-toast";if(document.getElementById(e))return;const o=await j("getExtensionContext",{});_({id:"stn-toast",url:o.toastUrl,position:"bottom",backdrop:!1,dimension:{width:380,height:60},zLevel:2})}}function wt(t,e){if(document.getElementById(t))return;let n=document.createElement("style");n.type="text/css",n.id=t,n.appendChild(document.createTextNode(e)),document.getElementsByTagName("head")[0].appendChild(n)}function vt({id:t,duration:e,onClose:n}){const o=document.getElementById(t);let i=null;function r(s){o.contains(s.target)?(clearTimeout(i),i=null):i||(i=setTimeout(()=>{a()},e))}document.addEventListener("mousemove",r),i=setTimeout(()=>{a()},e);function a(){document.removeEventListener("mousemove",r),n()}return()=>{a()}}function bt(){return navigator.platform.indexOf("Mac")>-1}var q=typeof navigator<"u"?navigator.userAgent.toLowerCase().indexOf("firefox")>0:!1;function I(t,e,n,o){t.addEventListener?t.addEventListener(e,n,o):t.attachEvent&&t.attachEvent("on".concat(e),function(){n(window.event)})}function J(t,e){for(var n=e.slice(0,e.length-1),o=0;o<n.length;o++)n[o]=t[n[o].toLowerCase()];return n}function tt(t){typeof t!="string"&&(t=""),t=t.replace(/\s/g,"");for(var e=t.split(","),n=e.lastIndexOf("");n>=0;)e[n-1]+=",",e.splice(n,1),n=e.lastIndexOf("");return e}function xt(t,e){for(var n=t.length>=e.length?t:e,o=t.length>=e.length?e:t,i=!0,r=0;r<n.length;r++)o.indexOf(n[r])===-1&&(i=!1);return i}var E={backspace:8,"⌫":8,tab:9,clear:12,enter:13,"↩":13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,num_0:96,num_1:97,num_2:98,num_3:99,num_4:100,num_5:101,num_6:102,num_7:103,num_8:104,num_9:105,num_multiply:106,num_add:107,num_enter:108,num_subtract:109,num_decimal:110,num_divide:111,"⇪":20,",":188,".":190,"/":191,"`":192,"-":q?173:189,"=":q?61:187,";":q?59:186,"'":222,"[":219,"]":221,"\\":220},v={"⇧":16,shift:16,"⌥":18,alt:18,option:18,"⌃":17,ctrl:17,control:17,"⌘":91,cmd:91,command:91},z={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey",shiftKey:16,ctrlKey:17,altKey:18,metaKey:91},g={16:!1,18:!1,17:!1,91:!1},u={};for(var O=1;O<20;O++)E["f".concat(O)]=111+O;var l=[],U=!1,et="all",nt=[],K=function(e){return E[e.toLowerCase()]||v[e.toLowerCase()]||e.toUpperCase().charCodeAt(0)},Ct=function(e){return Object.keys(E).find(function(n){return E[n]===e})},Et=function(e){return Object.keys(v).find(function(n){return v[n]===e})};function ot(t){et=t||"all"}function k(){return et||"all"}function kt(){return l.slice(0)}function Lt(){return l.map(function(t){return Ct(t)||Et(t)||String.fromCharCode(t)})}function Mt(t){var e=t.target||t.srcElement,n=e.tagName,o=!0;return(e.isContentEditable||(n==="INPUT"||n==="TEXTAREA"||n==="SELECT")&&!e.readOnly)&&(o=!1),o}function Ot(t){return typeof t=="string"&&(t=K(t)),l.indexOf(t)!==-1}function Tt(t,e){var n,o;t||(t=k());for(var i in u)if(Object.prototype.hasOwnProperty.call(u,i))for(n=u[i],o=0;o<n.length;)n[o].scope===t?n.splice(o,1):o++;k()===t&&ot(e||"all")}function St(t){var e=t.keyCode||t.which||t.charCode,n=l.indexOf(e);if(n>=0&&l.splice(n,1),t.key&&t.key.toLowerCase()==="meta"&&l.splice(0,l.length),(e===93||e===224)&&(e=91),e in g){g[e]=!1;for(var o in v)v[o]===e&&(w[o]=!1)}}function $t(t){if(typeof t>"u")Object.keys(u).forEach(function(a){return delete u[a]});else if(Array.isArray(t))t.forEach(function(a){a.key&&P(a)});else if(typeof t=="object")t.key&&P(t);else if(typeof t=="string"){for(var e=arguments.length,n=new Array(e>1?e-1:0),o=1;o<e;o++)n[o-1]=arguments[o];var i=n[0],r=n[1];typeof i=="function"&&(r=i,i=""),P({key:t,scope:i,method:r,splitKey:"+"})}}var P=function(e){var n=e.key,o=e.scope,i=e.method,r=e.splitKey,a=r===void 0?"+":r,s=tt(n);s.forEach(function(p){var c=p.split(a),m=c.length,f=c[m-1],h=f==="*"?"*":K(f);if(u[h]){o||(o=k());var y=m>1?J(v,c):[];u[h]=u[h].filter(function(b){var x=i?b.method===i:!0;return!(x&&b.scope===o&&xt(b.mods,y))})}})};function V(t,e,n,o){if(e.element===o){var i;if(e.scope===n||e.scope==="all"){i=e.mods.length>0;for(var r in g)Object.prototype.hasOwnProperty.call(g,r)&&(!g[r]&&e.mods.indexOf(+r)>-1||g[r]&&e.mods.indexOf(+r)===-1)&&(i=!1);(e.mods.length===0&&!g[16]&&!g[18]&&!g[17]&&!g[91]||i||e.shortcut==="*")&&e.method(t,e)===!1&&(t.preventDefault?t.preventDefault():t.returnValue=!1,t.stopPropagation&&t.stopPropagation(),t.cancelBubble&&(t.cancelBubble=!0))}}}function N(t,e){var n=u["*"],o=t.keyCode||t.which||t.charCode;if(w.filter.call(this,t)){if((o===93||o===224)&&(o=91),l.indexOf(o)===-1&&o!==229&&l.push(o),["ctrlKey","altKey","shiftKey","metaKey"].forEach(function(b){var x=z[b];t[b]&&l.indexOf(x)===-1?l.push(x):!t[b]&&l.indexOf(x)>-1?l.splice(l.indexOf(x),1):b==="metaKey"&&t[b]&&l.length===3&&(t.ctrlKey||t.shiftKey||t.altKey||(l=l.slice(l.indexOf(x))))}),o in g){g[o]=!0;for(var i in v)v[i]===o&&(w[i]=!0);if(!n)return}for(var r in g)Object.prototype.hasOwnProperty.call(g,r)&&(g[r]=t[z[r]]);t.getModifierState&&!(t.altKey&&!t.ctrlKey)&&t.getModifierState("AltGraph")&&(l.indexOf(17)===-1&&l.push(17),l.indexOf(18)===-1&&l.push(18),g[17]=!0,g[18]=!0);var a=k();if(n)for(var s=0;s<n.length;s++)n[s].scope===a&&(t.type==="keydown"&&n[s].keydown||t.type==="keyup"&&n[s].keyup)&&V(t,n[s],a,e);if(o in u){for(var p=0;p<u[o].length;p++)if((t.type==="keydown"&&u[o][p].keydown||t.type==="keyup"&&u[o][p].keyup)&&u[o][p].key){for(var c=u[o][p],m=c.splitKey,f=c.key.split(m),h=[],y=0;y<f.length;y++)h.push(K(f[y]));h.sort().join("")===l.sort().join("")&&V(t,c,a,e)}}}}function At(t){return nt.indexOf(t)>-1}function w(t,e,n){l=[];var o=tt(t),i=[],r="all",a=document,s=0,p=!1,c=!0,m="+",f=!1;for(n===void 0&&typeof e=="function"&&(n=e),Object.prototype.toString.call(e)==="[object Object]"&&(e.scope&&(r=e.scope),e.element&&(a=e.element),e.keyup&&(p=e.keyup),e.keydown!==void 0&&(c=e.keydown),e.capture!==void 0&&(f=e.capture),typeof e.splitKey=="string"&&(m=e.splitKey)),typeof e=="string"&&(r=e);s<o.length;s++)t=o[s].split(m),i=[],t.length>1&&(i=J(v,t)),t=t[t.length-1],t=t==="*"?"*":K(t),t in u||(u[t]=[]),u[t].push({keyup:p,keydown:c,scope:r,mods:i,shortcut:o[s],method:n,key:o[s],splitKey:m,element:a});typeof a<"u"&&!At(a)&&window&&(nt.push(a),I(a,"keydown",function(h){N(h,a)},f),U||(U=!0,I(window,"focus",function(){l=[]},f)),I(a,"keyup",function(h){N(h,a),St(h)},f))}function Bt(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"all";Object.keys(u).forEach(function(n){var o=u[n].filter(function(i){return i.scope===e&&i.shortcut===t});o.forEach(function(i){i&&i.method&&i.method()})})}var F={getPressedKeyString:Lt,setScope:ot,getScope:k,deleteScope:Tt,getPressedKeyCodes:kt,isPressed:Ot,filter:Mt,trigger:Bt,unbind:$t,keyMap:E,modifier:v,modifierMap:z};for(var D in F)Object.prototype.hasOwnProperty.call(F,D)&&(w[D]=F[D]);if(typeof window<"u"){var Kt=window.hotkeys;w.noConflict=function(t){return t&&window.hotkeys===w&&(window.hotkeys=Kt),w},window.hotkeys=w}const jt={css:({idName:t})=>`
    #floating-button-${t} {
    }
    #floating-button-open-${t}:hover {
    }
    #floating-button-close-${t} {
        opacity: 0 !important;
        transition: opacity 0.1s ease-in-out !important;
    }
    #floating-button-${t}:hover #floating-button-close-${t} {
        opacity: 1 !important;
    }
    `,html:({idName:t})=>`
    <div id="floating-${t}" style="all:unset; position:fixed; z-index: 2147483646;">
  </div>`},G={html:({idName:t})=>`
  <div id="floating-button-${t}" style="all:unset; border: 0px; border-radius: 999px; box-shadow: rgba(0, 0, 0, 0.25) 0px 0px 0px 5px;
  position:relative;
  display: flex;
  transition: opacity 0.1s ease-in-out;
  align-items: center;
  width: fit-content;
  ">
  <button 
  id="floating-button-close-${t}"
  style="
  all:unset;
  position: absolute;
  z-index: 2;
  color:'white';
  display: flex;
  top:-3px;
  left:-3px;
  padding: 3px;
  justify-content: center;
  align-items: center;border-radius: 19px;
  background-color: rgba(0, 0, 0, 0.7);
  text-align: left;
  cursor: pointer;
  ">
    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.77767 8.3565L12.2082 11.7871C12.2615 11.8434 12.2909 11.9182 12.2902 11.9957C12.2895 12.0744 12.2579 12.1496 12.2023 12.2052C12.1467 12.2609 12.0715 12.2924 11.9928 12.2931C11.9152 12.2938 11.8405 12.2644 11.7842 12.2112L8.35358 8.78059L8.00002 8.42704L7.64647 8.78059L4.21589 12.2112C4.15957 12.2644 4.08481 12.2938 4.00725 12.2931C3.92859 12.2924 3.85335 12.2609 3.79772 12.2052C3.7421 12.1496 3.71055 12.0744 3.70987 11.9957C3.70919 11.9182 3.73858 11.8434 3.7918 11.7871L7.22238 8.3565L7.57593 8.00295L7.22238 7.64939L3.78803 4.21505C3.78801 4.21503 3.788 4.21501 3.78798 4.21499C3.73177 4.15874 3.7002 4.08247 3.7002 4.00295C3.7002 3.92345 3.73175 3.8472 3.78792 3.79095C3.78794 3.79093 3.78796 3.79092 3.78798 3.7909C3.788 3.79088 3.78801 3.79086 3.78803 3.79085C3.84428 3.73467 3.92053 3.70312 4.00002 3.70312C4.07955 3.70312 4.15582 3.73469 4.21207 3.7909C4.21209 3.79092 4.21211 3.79093 4.21212 3.79095L7.64647 7.2253L8.00002 7.57885L8.35358 7.2253L11.788 3.7909L11.788 3.79095L11.7941 3.7847C11.8217 3.75605 11.8548 3.73319 11.8914 3.71747C11.928 3.70175 11.9674 3.69347 12.0072 3.69313C12.0471 3.69278 12.0866 3.70037 12.1235 3.71546C12.1603 3.73054 12.1938 3.75281 12.222 3.78098C12.2502 3.80915 12.2724 3.84265 12.2875 3.87952C12.3026 3.91639 12.3102 3.95589 12.3098 3.99572C12.3095 4.03556 12.3012 4.07492 12.2855 4.11152C12.2698 4.14812 12.2469 4.18123 12.2183 4.2089L12.2182 4.20885L12.2121 4.21499L8.77767 7.64939L8.42412 8.00295L8.77767 8.3565Z" fill="white" stroke="white"/>
</svg>
  </button>
  <div id="floating-button-open-${t}" style="
  all:unset;
  cursor: pointer; 
  justify-items: center;
  transition: opacity 0.1s ease-in-out;
  display: flex;
  align-items: center;
  width: fit-content;
  background-color:#fff;
  padding: 16px; 
  border-radius:999px;
  ">
  <svg width="24" height="24" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.275 17.55L6.46262 20.722L21.0876 14.222L9.75 23.1579V34.125C9.75034 34.4581 9.85305 34.7831 10.0442 35.0559C10.2354 35.3287 10.5058 35.5361 10.8188 35.6501C11.1318 35.7642 11.4722 35.7792 11.7941 35.6933C12.1159 35.6074 12.4036 35.4247 12.6181 35.1699L17.7044 29.1265L28.275 37.05C28.4942 37.2149 28.7517 37.3216 29.0233 37.3601C29.2949 37.3987 29.5718 37.3679 29.8283 37.2705C30.0847 37.1732 30.3124 37.0125 30.49 36.8035C30.6677 36.5944 30.7895 36.3438 30.8441 36.075L37.3441 3.57498C37.4017 3.28788 37.3806 2.99056 37.2831 2.71446C37.1856 2.43836 37.0153 2.19373 36.7902 2.00644C36.5651 1.81915 36.2936 1.69615 36.0044 1.65046C35.7152 1.60477 35.419 1.63807 35.1471 1.74686L2.64712 14.7469C2.38051 14.8544 2.14721 15.0308 1.97103 15.258C1.79484 15.4851 1.68208 15.755 1.64424 16.04C1.60641 16.325 1.64486 16.6149 1.75567 16.8802C1.86648 17.1455 2.04569 17.3766 2.275 17.55V17.55Z" fill="#44403C" />
  </svg>
  </div>
</div>`},d="stn";function _t(t){let e=document.createElement("style");e.type="text/css",e.appendChild(document.createTextNode(t)),document.getElementsByTagName("head")[0].appendChild(e)}function qt(t){var e=document.createElement("div");return e.innerHTML=t,e.children[0]}function L(t,e){const n=qt(t.html(e));return Object.keys(e).map(o=>{let i=n.querySelector(`#btn-${o}`);i&&i.addEventListener("click",()=>{e[o]()})}),t.css&&_t(t.css),n}const It={css:"",html:({})=>'<div style="width:20px;height:20px; background-color:red; border-radius:4px;gap: 4px;"></div>'},Pt={css:"",html:({idName:t})=>`<div id="top-left-box-${t}" style="
    all:unset;
    cursor: pointer; 
    justify-items: center;
    display: flex;
    position:absolute;
    align-items: center;
    width: fit-content;
    background-color:transparent;
    left:10px;
    top:10px;
    ">
    </div>
`};function Ft(){document.getElementById(`floating-button-${d}`)&&R(`#floating-button-${d}`)}function Dt(){document.getElementById(`floating-dialog-${d}`)&&R(`#floating-dialog-${d}`)}let A;async function it(){A==null||A(),M.turnOffShowAnimation()}function T(t){return typeof t=="number"?`${t}px`:t}async function H(t){document.getElementById(`floating-button-${d}`)||rt(t)}function rt(t,e){var r,a;const n=document.getElementById(`floating-${d}`);if(!n)throw"Can't find floating element";t&&(t.left&&(n.style.left=T(t.left)),t.right&&(n.style.right=T(t.right)),t.top&&(n.style.top=T(t.top)),t.bottom&&(n.style.bottom=T(t.bottom)));let o=document.getElementById(`floating-button-${d}`);if(!o)o=L(G,{idName:d}),n.appendChild(o);else{const s=L(G,{idName:d});o.innerHTML=s.innerHTML}const i=o.querySelector(`#floating-button-open-${d}`);i&&(e||(i.style.opacity="0",setTimeout(()=>{i.style.opacity="1"},20)),(r=document.querySelector(`#floating-button-close-${d}`))==null||r.addEventListener("click",function(s){s.stopPropagation(),s.preventDefault(),Ft()}),(a=document.querySelector(`#floating-button-open-${d}`))==null||a.addEventListener("click",function(s){s.stopPropagation(),s.preventDefault(),it()}))}const M={open(){H({left:"20px",bottom:"50px"})},close(){const t=document.getElementById(`floating-button-${d}`);if(t){const e=t.querySelector(`#floating-button-open-${d}`);if(!e)return;e.style.opacity="0",setTimeout(()=>{t.remove()},250)}},closeDialog(){Dt(),H({left:"20px",bottom:"50px"}),rt({left:"20px",bottom:"50px"})},openDialog(){return M.open(),it()},turnOnShowAnimation(){console.log("turnOnShowAnimation"),H({left:"20px",bottom:"50px"})},turnOffShowAnimation(){if(document.getElementById(`floating-dialog-${d}`))return!1;M.close()},addTopLeftBox(){let t=document.getElementById(`top-left-box-${d}`)||L(Pt,{idName:d});const e=L(It,{});t.appendChild(e),document.body.appendChild(t)}};function R(t){var n;const e=document.querySelector(t);if(!e)throw`el '${t}' not found`;(n=e.parentNode)==null||n.removeChild(e)}let S=!1,C=null;const at=t=>{if(t.clientX<=80&&t.clientY>=window.innerHeight-150){if(S){C&&(clearTimeout(C),C=null);return}S=!0,M.turnOnShowAnimation()}else{if(!S||C)return;C=setTimeout(()=>{M.turnOffShowAnimation(),C=null,S=!1},500)}};function Ht(){window.addEventListener("mousemove",at)}function zt(){window.removeEventListener("mousemove",at)}class st{constructor(){this.state="closed"}initFloating(e){A=e;let n=document.getElementById(`floating-${d}`);return n||(n=L(jt,{idName:d}),document.body.appendChild(n),Ht(),this.state="opened"),n}stopFloating(){R(`#floating-${d}`),zt(),this.state="closed"}}function Q(t,e){return new Promise(n=>{chrome.runtime.sendMessage({v2:!0,destination:"modal",event:t,props:e},o=>{n(o)})})}class Rt{constructor(e){this.status="stopped",this.macintosh=bt(),this.clicked=!1,this.onTriggerFn=e.onTrigger}stop(){this.status="stopped",w.unbind("ctrl+j,cmd+j")}start(){this.status="running",w("ctrl+j,cmd+j",e=>{this.onTriggerFn(),e.preventDefault(),e.stopPropagation(),this.clicked=!0})}}async function $(t){if(t in window.__stnModule)return window.__stnModule[t];const n=await{gmail:()=>ht(()=>Promise.resolve().then(()=>mt),void 0)}[t]();return window.__stnModule[t]=n,n}async function X(t,e,n){if(t.destination=="content")return new Promise(async o=>{var r;const i=await((r=B[t.event])==null?void 0:r.call(B,t.props));n(i)}),!0}function Wt(){chrome.runtime.onMessage.hasListener(X)||chrome.runtime.onMessage.addListener(X),!window.quickCaptureWatcher&&(window.modalManager=new yt,window.quickCaptureWatcher=new Rt({onTrigger:()=>{B.showModal()}}),window.floatingManager=new st)}window.floatingManager=new st;const B={getHighlightRange:async()=>(await $("highlight")).getHighlightRange(),closeModal:async()=>{window.modalManager.close()},closeTooltip:async()=>{window.modalManager.closeTooltip()},closeToast:async()=>{window.modalManager.closeToast()},clickedOutside:async()=>{window.modalManager.clickedOutside()},resizeIframe:async t=>{window.modalManager.autoResize(t)},showTooltip:async t=>{window.modalManager.showTooltip()},showToast:async()=>{window.modalManager.showToast()},ping:async()=>!0,showModal:async()=>{window.modalManager.open()},startWatch:async t=>{window.quickCaptureWatcher.start(),console.log("init floating",t)},stopWatch:async()=>{window.quickCaptureWatcher.stop()},harvestWebPageContent:async()=>{},pickImageOnPage:async()=>(await $("image")).pickImageOnPage(),takeCustomAreaScreenshot:async()=>(await $("image")).takeCustomAreaScreenshot(),takeFullPageScreenshot:async()=>(await $("image")).takeFullPageScreenshot(),loadGmail:async()=>await Z()};function Ut(){Wt()}window.__stnModule={};Ut();
