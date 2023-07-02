(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function F_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var U_={exports:{}},Bh={},V_={exports:{}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nl=Symbol.for("react.element"),rx=Symbol.for("react.portal"),ix=Symbol.for("react.fragment"),sx=Symbol.for("react.strict_mode"),ox=Symbol.for("react.profiler"),ax=Symbol.for("react.provider"),ux=Symbol.for("react.context"),lx=Symbol.for("react.forward_ref"),cx=Symbol.for("react.suspense"),hx=Symbol.for("react.memo"),dx=Symbol.for("react.lazy"),ww=Symbol.iterator;function fx(t){return t===null||typeof t!="object"?null:(t=ww&&t[ww]||t["@@iterator"],typeof t=="function"?t:null)}var z_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j_=Object.assign,B_={};function Wo(t,e,n){this.props=t,this.context=e,this.refs=B_,this.updater=n||z_}Wo.prototype.isReactComponent={};Wo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Wo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function q_(){}q_.prototype=Wo.prototype;function wg(t,e,n){this.props=t,this.context=e,this.refs=B_,this.updater=n||z_}var _g=wg.prototype=new q_;_g.constructor=wg;j_(_g,Wo.prototype);_g.isPureReactComponent=!0;var _w=Array.isArray,G_=Object.prototype.hasOwnProperty,Ig={current:null},H_={key:!0,ref:!0,__self:!0,__source:!0};function W_(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)G_.call(e,r)&&!H_.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),l=0;l<a;l++)u[l]=arguments[l+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:nl,type:t,key:s,ref:o,props:i,_owner:Ig.current}}function px(t,e){return{$$typeof:nl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Eg(t){return typeof t=="object"&&t!==null&&t.$$typeof===nl}function mx(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Iw=/\/+/g;function Ef(t,e){return typeof t=="object"&&t!==null&&t.key!=null?mx(""+t.key):e.toString(36)}function gc(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case nl:case rx:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Ef(o,0):r,_w(i)?(n="",t!=null&&(n=t.replace(Iw,"$&/")+"/"),gc(i,e,n,"",function(l){return l})):i!=null&&(Eg(i)&&(i=px(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Iw,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",_w(t))for(var a=0;a<t.length;a++){s=t[a];var u=r+Ef(s,a);o+=gc(s,e,n,u,i)}else if(u=fx(t),typeof u=="function")for(t=u.call(t),a=0;!(s=t.next()).done;)s=s.value,u=r+Ef(s,a++),o+=gc(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Fl(t,e,n){if(t==null)return t;var r=[],i=0;return gc(t,r,"","",function(s){return e.call(n,s,i++)}),r}function gx(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var qt={current:null},yc={transition:null},yx={ReactCurrentDispatcher:qt,ReactCurrentBatchConfig:yc,ReactCurrentOwner:Ig};re.Children={map:Fl,forEach:function(t,e,n){Fl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Fl(t,function(){e++}),e},toArray:function(t){return Fl(t,function(e){return e})||[]},only:function(t){if(!Eg(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};re.Component=Wo;re.Fragment=ix;re.Profiler=ox;re.PureComponent=wg;re.StrictMode=sx;re.Suspense=cx;re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yx;re.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=j_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Ig.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)G_.call(e,u)&&!H_.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var l=0;l<u;l++)a[l]=arguments[l+2];r.children=a}return{$$typeof:nl,type:t.type,key:i,ref:s,props:r,_owner:o}};re.createContext=function(t){return t={$$typeof:ux,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:ax,_context:t},t.Consumer=t};re.createElement=W_;re.createFactory=function(t){var e=W_.bind(null,t);return e.type=t,e};re.createRef=function(){return{current:null}};re.forwardRef=function(t){return{$$typeof:lx,render:t}};re.isValidElement=Eg;re.lazy=function(t){return{$$typeof:dx,_payload:{_status:-1,_result:t},_init:gx}};re.memo=function(t,e){return{$$typeof:hx,type:t,compare:e===void 0?null:e}};re.startTransition=function(t){var e=yc.transition;yc.transition={};try{t()}finally{yc.transition=e}};re.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};re.useCallback=function(t,e){return qt.current.useCallback(t,e)};re.useContext=function(t){return qt.current.useContext(t)};re.useDebugValue=function(){};re.useDeferredValue=function(t){return qt.current.useDeferredValue(t)};re.useEffect=function(t,e){return qt.current.useEffect(t,e)};re.useId=function(){return qt.current.useId()};re.useImperativeHandle=function(t,e,n){return qt.current.useImperativeHandle(t,e,n)};re.useInsertionEffect=function(t,e){return qt.current.useInsertionEffect(t,e)};re.useLayoutEffect=function(t,e){return qt.current.useLayoutEffect(t,e)};re.useMemo=function(t,e){return qt.current.useMemo(t,e)};re.useReducer=function(t,e,n){return qt.current.useReducer(t,e,n)};re.useRef=function(t){return qt.current.useRef(t)};re.useState=function(t){return qt.current.useState(t)};re.useSyncExternalStore=function(t,e,n){return qt.current.useSyncExternalStore(t,e,n)};re.useTransition=function(){return qt.current.useTransition()};re.version="18.2.0";V_.exports=re;var de=V_.exports;const ln=F_(de);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vx=de,wx=Symbol.for("react.element"),_x=Symbol.for("react.fragment"),Ix=Object.prototype.hasOwnProperty,Ex=vx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Sx={key:!0,ref:!0,__self:!0,__source:!0};function K_(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Ix.call(e,r)&&!Sx.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:wx,type:t,key:s,ref:o,props:i,_owner:Ex.current}}Bh.Fragment=_x;Bh.jsx=K_;Bh.jsxs=K_;U_.exports=Bh;var j=U_.exports,Ep={},Q_={exports:{}},pn={},Y_={exports:{}},X_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,H){var K=D.length;D.push(H);e:for(;0<K;){var Ie=K-1>>>1,$=D[Ie];if(0<i($,H))D[Ie]=H,D[K]=$,K=Ie;else break e}}function n(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var H=D[0],K=D.pop();if(K!==H){D[0]=K;e:for(var Ie=0,$=D.length,F=$>>>1;Ie<F;){var V=2*(Ie+1)-1,Q=D[V],E=V+1,ie=D[E];if(0>i(Q,K))E<$&&0>i(ie,Q)?(D[Ie]=ie,D[E]=K,Ie=E):(D[Ie]=Q,D[V]=K,Ie=V);else if(E<$&&0>i(ie,K))D[Ie]=ie,D[E]=K,Ie=E;else break e}}return H}function i(D,H){var K=D.sortIndex-H.sortIndex;return K!==0?K:D.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var u=[],l=[],c=1,h=null,d=3,p=!1,y=!1,v=!1,S=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(D){for(var H=n(l);H!==null;){if(H.callback===null)r(l);else if(H.startTime<=D)r(l),H.sortIndex=H.expirationTime,e(u,H);else break;H=n(l)}}function _(D){if(v=!1,g(D),!y)if(n(u)!==null)y=!0,lr(T);else{var H=n(l);H!==null&&Lt(_,H.startTime-D)}}function T(D,H){y=!1,v&&(v=!1,m(P),P=-1),p=!0;var K=d;try{for(g(H),h=n(u);h!==null&&(!(h.expirationTime>H)||D&&!nt());){var Ie=h.callback;if(typeof Ie=="function"){h.callback=null,d=h.priorityLevel;var $=Ie(h.expirationTime<=H);H=t.unstable_now(),typeof $=="function"?h.callback=$:h===n(u)&&r(u),g(H)}else r(u);h=n(u)}if(h!==null)var F=!0;else{var V=n(l);V!==null&&Lt(_,V.startTime-H),F=!1}return F}finally{h=null,d=K,p=!1}}var A=!1,b=null,P=-1,te=5,W=-1;function nt(){return!(t.unstable_now()-W<te)}function Je(){if(b!==null){var D=t.unstable_now();W=D;var H=!0;try{H=b(!0,D)}finally{H?ft():(A=!1,b=null)}}else A=!1}var ft;if(typeof f=="function")ft=function(){f(Je)};else if(typeof MessageChannel<"u"){var rn=new MessageChannel,Ct=rn.port2;rn.port1.onmessage=Je,ft=function(){Ct.postMessage(null)}}else ft=function(){S(Je,0)};function lr(D){b=D,A||(A=!0,ft())}function Lt(D,H){P=S(function(){D(t.unstable_now())},H)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){y||p||(y=!0,lr(T))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):te=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(D){switch(d){case 1:case 2:case 3:var H=3;break;default:H=d}var K=d;d=H;try{return D()}finally{d=K}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,H){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var K=d;d=D;try{return H()}finally{d=K}},t.unstable_scheduleCallback=function(D,H,K){var Ie=t.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?Ie+K:Ie):K=Ie,D){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=K+$,D={id:c++,callback:H,priorityLevel:D,startTime:K,expirationTime:$,sortIndex:-1},K>Ie?(D.sortIndex=K,e(l,D),n(u)===null&&D===n(l)&&(v?(m(P),P=-1):v=!0,Lt(_,K-Ie))):(D.sortIndex=$,e(u,D),y||p||(y=!0,lr(T))),D},t.unstable_shouldYield=nt,t.unstable_wrapCallback=function(D){var H=d;return function(){var K=d;d=H;try{return D.apply(this,arguments)}finally{d=K}}}})(X_);Y_.exports=X_;var Tx=Y_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J_=de,hn=Tx;function x(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Z_=new Set,lu={};function xs(t,e){To(t,e),To(t+"Capture",e)}function To(t,e){for(lu[t]=e,t=0;t<e.length;t++)Z_.add(e[t])}var Er=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Sp=Object.prototype.hasOwnProperty,kx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ew={},Sw={};function Cx(t){return Sp.call(Sw,t)?!0:Sp.call(Ew,t)?!1:kx.test(t)?Sw[t]=!0:(Ew[t]=!0,!1)}function Ax(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function xx(t,e,n,r){if(e===null||typeof e>"u"||Ax(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Gt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var St={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){St[t]=new Gt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];St[e]=new Gt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){St[t]=new Gt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){St[t]=new Gt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){St[t]=new Gt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){St[t]=new Gt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){St[t]=new Gt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){St[t]=new Gt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){St[t]=new Gt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Sg=/[\-:]([a-z])/g;function Tg(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Sg,Tg);St[e]=new Gt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Sg,Tg);St[e]=new Gt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Sg,Tg);St[e]=new Gt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){St[t]=new Gt(t,1,!1,t.toLowerCase(),null,!1,!1)});St.xlinkHref=new Gt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){St[t]=new Gt(t,1,!1,t.toLowerCase(),null,!0,!0)});function kg(t,e,n,r){var i=St.hasOwnProperty(e)?St[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(xx(e,n,i,r)&&(n=null),r||i===null?Cx(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Nr=J_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ul=Symbol.for("react.element"),Hs=Symbol.for("react.portal"),Ws=Symbol.for("react.fragment"),Cg=Symbol.for("react.strict_mode"),Tp=Symbol.for("react.profiler"),eI=Symbol.for("react.provider"),tI=Symbol.for("react.context"),Ag=Symbol.for("react.forward_ref"),kp=Symbol.for("react.suspense"),Cp=Symbol.for("react.suspense_list"),xg=Symbol.for("react.memo"),zr=Symbol.for("react.lazy"),nI=Symbol.for("react.offscreen"),Tw=Symbol.iterator;function fa(t){return t===null||typeof t!="object"?null:(t=Tw&&t[Tw]||t["@@iterator"],typeof t=="function"?t:null)}var Pe=Object.assign,Sf;function Da(t){if(Sf===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Sf=e&&e[1]||""}return`
`+Sf+t}var Tf=!1;function kf(t,e){if(!t||Tf)return"";Tf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(l){var r=l}Reflect.construct(t,[],e)}else{try{e.call()}catch(l){r=l}t.call(e.prototype)}else{try{throw Error()}catch(l){r=l}t()}}catch(l){if(l&&r&&typeof l.stack=="string"){for(var i=l.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=a);break}}}finally{Tf=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Da(t):""}function Nx(t){switch(t.tag){case 5:return Da(t.type);case 16:return Da("Lazy");case 13:return Da("Suspense");case 19:return Da("SuspenseList");case 0:case 2:case 15:return t=kf(t.type,!1),t;case 11:return t=kf(t.type.render,!1),t;case 1:return t=kf(t.type,!0),t;default:return""}}function Ap(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ws:return"Fragment";case Hs:return"Portal";case Tp:return"Profiler";case Cg:return"StrictMode";case kp:return"Suspense";case Cp:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case tI:return(t.displayName||"Context")+".Consumer";case eI:return(t._context.displayName||"Context")+".Provider";case Ag:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case xg:return e=t.displayName||null,e!==null?e:Ap(t.type)||"Memo";case zr:e=t._payload,t=t._init;try{return Ap(t(e))}catch{}}return null}function bx(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ap(e);case 8:return e===Cg?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function li(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function rI(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Rx(t){var e=rI(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Vl(t){t._valueTracker||(t._valueTracker=Rx(t))}function iI(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=rI(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function zc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function xp(t,e){var n=e.checked;return Pe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function kw(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=li(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function sI(t,e){e=e.checked,e!=null&&kg(t,"checked",e,!1)}function Np(t,e){sI(t,e);var n=li(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?bp(t,e.type,n):e.hasOwnProperty("defaultValue")&&bp(t,e.type,li(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Cw(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function bp(t,e,n){(e!=="number"||zc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Pa=Array.isArray;function lo(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+li(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Rp(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(x(91));return Pe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Aw(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(x(92));if(Pa(n)){if(1<n.length)throw Error(x(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:li(n)}}function oI(t,e){var n=li(e.value),r=li(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function xw(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function aI(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Dp(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?aI(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var zl,uI=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(zl=zl||document.createElement("div"),zl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=zl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function cu(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ba={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Dx=["Webkit","ms","Moz","O"];Object.keys(Ba).forEach(function(t){Dx.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ba[e]=Ba[t]})});function lI(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ba.hasOwnProperty(t)&&Ba[t]?(""+e).trim():e+"px"}function cI(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=lI(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Px=Pe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Pp(t,e){if(e){if(Px[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(x(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(x(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(x(61))}if(e.style!=null&&typeof e.style!="object")throw Error(x(62))}}function Op(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $p=null;function Ng(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Lp=null,co=null,ho=null;function Nw(t){if(t=sl(t)){if(typeof Lp!="function")throw Error(x(280));var e=t.stateNode;e&&(e=Kh(e),Lp(t.stateNode,t.type,e))}}function hI(t){co?ho?ho.push(t):ho=[t]:co=t}function dI(){if(co){var t=co,e=ho;if(ho=co=null,Nw(t),e)for(t=0;t<e.length;t++)Nw(e[t])}}function fI(t,e){return t(e)}function pI(){}var Cf=!1;function mI(t,e,n){if(Cf)return t(e,n);Cf=!0;try{return fI(t,e,n)}finally{Cf=!1,(co!==null||ho!==null)&&(pI(),dI())}}function hu(t,e){var n=t.stateNode;if(n===null)return null;var r=Kh(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(x(231,e,typeof n));return n}var Mp=!1;if(Er)try{var pa={};Object.defineProperty(pa,"passive",{get:function(){Mp=!0}}),window.addEventListener("test",pa,pa),window.removeEventListener("test",pa,pa)}catch{Mp=!1}function Ox(t,e,n,r,i,s,o,a,u){var l=Array.prototype.slice.call(arguments,3);try{e.apply(n,l)}catch(c){this.onError(c)}}var qa=!1,jc=null,Bc=!1,Fp=null,$x={onError:function(t){qa=!0,jc=t}};function Lx(t,e,n,r,i,s,o,a,u){qa=!1,jc=null,Ox.apply($x,arguments)}function Mx(t,e,n,r,i,s,o,a,u){if(Lx.apply(this,arguments),qa){if(qa){var l=jc;qa=!1,jc=null}else throw Error(x(198));Bc||(Bc=!0,Fp=l)}}function Ns(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function gI(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function bw(t){if(Ns(t)!==t)throw Error(x(188))}function Fx(t){var e=t.alternate;if(!e){if(e=Ns(t),e===null)throw Error(x(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return bw(i),t;if(s===r)return bw(i),e;s=s.sibling}throw Error(x(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(x(189))}}if(n.alternate!==r)throw Error(x(190))}if(n.tag!==3)throw Error(x(188));return n.stateNode.current===n?t:e}function yI(t){return t=Fx(t),t!==null?vI(t):null}function vI(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=vI(t);if(e!==null)return e;t=t.sibling}return null}var wI=hn.unstable_scheduleCallback,Rw=hn.unstable_cancelCallback,Ux=hn.unstable_shouldYield,Vx=hn.unstable_requestPaint,Be=hn.unstable_now,zx=hn.unstable_getCurrentPriorityLevel,bg=hn.unstable_ImmediatePriority,_I=hn.unstable_UserBlockingPriority,qc=hn.unstable_NormalPriority,jx=hn.unstable_LowPriority,II=hn.unstable_IdlePriority,qh=null,er=null;function Bx(t){if(er&&typeof er.onCommitFiberRoot=="function")try{er.onCommitFiberRoot(qh,t,void 0,(t.current.flags&128)===128)}catch{}}var On=Math.clz32?Math.clz32:Hx,qx=Math.log,Gx=Math.LN2;function Hx(t){return t>>>=0,t===0?32:31-(qx(t)/Gx|0)|0}var jl=64,Bl=4194304;function Oa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Gc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Oa(a):(s&=o,s!==0&&(r=Oa(s)))}else o=n&~i,o!==0?r=Oa(o):s!==0&&(r=Oa(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-On(e),i=1<<n,r|=t[n],e&=~i;return r}function Wx(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Kx(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-On(s),a=1<<o,u=i[o];u===-1?(!(a&n)||a&r)&&(i[o]=Wx(a,e)):u<=e&&(t.expiredLanes|=a),s&=~a}}function Up(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function EI(){var t=jl;return jl<<=1,!(jl&4194240)&&(jl=64),t}function Af(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function rl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-On(e),t[e]=n}function Qx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-On(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Rg(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-On(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ye=0;function SI(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var TI,Dg,kI,CI,AI,Vp=!1,ql=[],Xr=null,Jr=null,Zr=null,du=new Map,fu=new Map,Br=[],Yx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Dw(t,e){switch(t){case"focusin":case"focusout":Xr=null;break;case"dragenter":case"dragleave":Jr=null;break;case"mouseover":case"mouseout":Zr=null;break;case"pointerover":case"pointerout":du.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":fu.delete(e.pointerId)}}function ma(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=sl(e),e!==null&&Dg(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Xx(t,e,n,r,i){switch(e){case"focusin":return Xr=ma(Xr,t,e,n,r,i),!0;case"dragenter":return Jr=ma(Jr,t,e,n,r,i),!0;case"mouseover":return Zr=ma(Zr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return du.set(s,ma(du.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,fu.set(s,ma(fu.get(s)||null,t,e,n,r,i)),!0}return!1}function xI(t){var e=Wi(t.target);if(e!==null){var n=Ns(e);if(n!==null){if(e=n.tag,e===13){if(e=gI(n),e!==null){t.blockedOn=e,AI(t.priority,function(){kI(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function vc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=zp(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);$p=r,n.target.dispatchEvent(r),$p=null}else return e=sl(n),e!==null&&Dg(e),t.blockedOn=n,!1;e.shift()}return!0}function Pw(t,e,n){vc(t)&&n.delete(e)}function Jx(){Vp=!1,Xr!==null&&vc(Xr)&&(Xr=null),Jr!==null&&vc(Jr)&&(Jr=null),Zr!==null&&vc(Zr)&&(Zr=null),du.forEach(Pw),fu.forEach(Pw)}function ga(t,e){t.blockedOn===e&&(t.blockedOn=null,Vp||(Vp=!0,hn.unstable_scheduleCallback(hn.unstable_NormalPriority,Jx)))}function pu(t){function e(i){return ga(i,t)}if(0<ql.length){ga(ql[0],t);for(var n=1;n<ql.length;n++){var r=ql[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Xr!==null&&ga(Xr,t),Jr!==null&&ga(Jr,t),Zr!==null&&ga(Zr,t),du.forEach(e),fu.forEach(e),n=0;n<Br.length;n++)r=Br[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Br.length&&(n=Br[0],n.blockedOn===null);)xI(n),n.blockedOn===null&&Br.shift()}var fo=Nr.ReactCurrentBatchConfig,Hc=!0;function Zx(t,e,n,r){var i=ye,s=fo.transition;fo.transition=null;try{ye=1,Pg(t,e,n,r)}finally{ye=i,fo.transition=s}}function eN(t,e,n,r){var i=ye,s=fo.transition;fo.transition=null;try{ye=4,Pg(t,e,n,r)}finally{ye=i,fo.transition=s}}function Pg(t,e,n,r){if(Hc){var i=zp(t,e,n,r);if(i===null)Mf(t,e,r,Wc,n),Dw(t,r);else if(Xx(i,t,e,n,r))r.stopPropagation();else if(Dw(t,r),e&4&&-1<Yx.indexOf(t)){for(;i!==null;){var s=sl(i);if(s!==null&&TI(s),s=zp(t,e,n,r),s===null&&Mf(t,e,r,Wc,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Mf(t,e,r,null,n)}}var Wc=null;function zp(t,e,n,r){if(Wc=null,t=Ng(r),t=Wi(t),t!==null)if(e=Ns(t),e===null)t=null;else if(n=e.tag,n===13){if(t=gI(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Wc=t,null}function NI(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(zx()){case bg:return 1;case _I:return 4;case qc:case jx:return 16;case II:return 536870912;default:return 16}default:return 16}}var Wr=null,Og=null,wc=null;function bI(){if(wc)return wc;var t,e=Og,n=e.length,r,i="value"in Wr?Wr.value:Wr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return wc=i.slice(t,1<r?1-r:void 0)}function _c(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Gl(){return!0}function Ow(){return!1}function mn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Gl:Ow,this.isPropagationStopped=Ow,this}return Pe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Gl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Gl)},persist:function(){},isPersistent:Gl}),e}var Ko={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$g=mn(Ko),il=Pe({},Ko,{view:0,detail:0}),tN=mn(il),xf,Nf,ya,Gh=Pe({},il,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Lg,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ya&&(ya&&t.type==="mousemove"?(xf=t.screenX-ya.screenX,Nf=t.screenY-ya.screenY):Nf=xf=0,ya=t),xf)},movementY:function(t){return"movementY"in t?t.movementY:Nf}}),$w=mn(Gh),nN=Pe({},Gh,{dataTransfer:0}),rN=mn(nN),iN=Pe({},il,{relatedTarget:0}),bf=mn(iN),sN=Pe({},Ko,{animationName:0,elapsedTime:0,pseudoElement:0}),oN=mn(sN),aN=Pe({},Ko,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),uN=mn(aN),lN=Pe({},Ko,{data:0}),Lw=mn(lN),cN={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hN={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dN={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fN(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=dN[t])?!!e[t]:!1}function Lg(){return fN}var pN=Pe({},il,{key:function(t){if(t.key){var e=cN[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=_c(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?hN[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Lg,charCode:function(t){return t.type==="keypress"?_c(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?_c(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),mN=mn(pN),gN=Pe({},Gh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mw=mn(gN),yN=Pe({},il,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Lg}),vN=mn(yN),wN=Pe({},Ko,{propertyName:0,elapsedTime:0,pseudoElement:0}),_N=mn(wN),IN=Pe({},Gh,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),EN=mn(IN),SN=[9,13,27,32],Mg=Er&&"CompositionEvent"in window,Ga=null;Er&&"documentMode"in document&&(Ga=document.documentMode);var TN=Er&&"TextEvent"in window&&!Ga,RI=Er&&(!Mg||Ga&&8<Ga&&11>=Ga),Fw=String.fromCharCode(32),Uw=!1;function DI(t,e){switch(t){case"keyup":return SN.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function PI(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ks=!1;function kN(t,e){switch(t){case"compositionend":return PI(e);case"keypress":return e.which!==32?null:(Uw=!0,Fw);case"textInput":return t=e.data,t===Fw&&Uw?null:t;default:return null}}function CN(t,e){if(Ks)return t==="compositionend"||!Mg&&DI(t,e)?(t=bI(),wc=Og=Wr=null,Ks=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return RI&&e.locale!=="ko"?null:e.data;default:return null}}var AN={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vw(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!AN[t.type]:e==="textarea"}function OI(t,e,n,r){hI(r),e=Kc(e,"onChange"),0<e.length&&(n=new $g("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ha=null,mu=null;function xN(t){GI(t,0)}function Hh(t){var e=Xs(t);if(iI(e))return t}function NN(t,e){if(t==="change")return e}var $I=!1;if(Er){var Rf;if(Er){var Df="oninput"in document;if(!Df){var zw=document.createElement("div");zw.setAttribute("oninput","return;"),Df=typeof zw.oninput=="function"}Rf=Df}else Rf=!1;$I=Rf&&(!document.documentMode||9<document.documentMode)}function jw(){Ha&&(Ha.detachEvent("onpropertychange",LI),mu=Ha=null)}function LI(t){if(t.propertyName==="value"&&Hh(mu)){var e=[];OI(e,mu,t,Ng(t)),mI(xN,e)}}function bN(t,e,n){t==="focusin"?(jw(),Ha=e,mu=n,Ha.attachEvent("onpropertychange",LI)):t==="focusout"&&jw()}function RN(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Hh(mu)}function DN(t,e){if(t==="click")return Hh(e)}function PN(t,e){if(t==="input"||t==="change")return Hh(e)}function ON(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ln=typeof Object.is=="function"?Object.is:ON;function gu(t,e){if(Ln(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Sp.call(e,i)||!Ln(t[i],e[i]))return!1}return!0}function Bw(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function qw(t,e){var n=Bw(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Bw(n)}}function MI(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?MI(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function FI(){for(var t=window,e=zc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=zc(t.document)}return e}function Fg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function $N(t){var e=FI(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&MI(n.ownerDocument.documentElement,n)){if(r!==null&&Fg(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=qw(n,s);var o=qw(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var LN=Er&&"documentMode"in document&&11>=document.documentMode,Qs=null,jp=null,Wa=null,Bp=!1;function Gw(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Bp||Qs==null||Qs!==zc(r)||(r=Qs,"selectionStart"in r&&Fg(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Wa&&gu(Wa,r)||(Wa=r,r=Kc(jp,"onSelect"),0<r.length&&(e=new $g("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Qs)))}function Hl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ys={animationend:Hl("Animation","AnimationEnd"),animationiteration:Hl("Animation","AnimationIteration"),animationstart:Hl("Animation","AnimationStart"),transitionend:Hl("Transition","TransitionEnd")},Pf={},UI={};Er&&(UI=document.createElement("div").style,"AnimationEvent"in window||(delete Ys.animationend.animation,delete Ys.animationiteration.animation,delete Ys.animationstart.animation),"TransitionEvent"in window||delete Ys.transitionend.transition);function Wh(t){if(Pf[t])return Pf[t];if(!Ys[t])return t;var e=Ys[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in UI)return Pf[t]=e[n];return t}var VI=Wh("animationend"),zI=Wh("animationiteration"),jI=Wh("animationstart"),BI=Wh("transitionend"),qI=new Map,Hw="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ti(t,e){qI.set(t,e),xs(e,[t])}for(var Of=0;Of<Hw.length;Of++){var $f=Hw[Of],MN=$f.toLowerCase(),FN=$f[0].toUpperCase()+$f.slice(1);Ti(MN,"on"+FN)}Ti(VI,"onAnimationEnd");Ti(zI,"onAnimationIteration");Ti(jI,"onAnimationStart");Ti("dblclick","onDoubleClick");Ti("focusin","onFocus");Ti("focusout","onBlur");Ti(BI,"onTransitionEnd");To("onMouseEnter",["mouseout","mouseover"]);To("onMouseLeave",["mouseout","mouseover"]);To("onPointerEnter",["pointerout","pointerover"]);To("onPointerLeave",["pointerout","pointerover"]);xs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));xs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));xs("onBeforeInput",["compositionend","keypress","textInput","paste"]);xs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));xs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));xs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $a="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),UN=new Set("cancel close invalid load scroll toggle".split(" ").concat($a));function Ww(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Mx(r,e,void 0,t),t.currentTarget=null}function GI(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,l=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;Ww(i,a,l),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,l=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;Ww(i,a,l),s=u}}}if(Bc)throw t=Fp,Bc=!1,Fp=null,t}function Se(t,e){var n=e[Kp];n===void 0&&(n=e[Kp]=new Set);var r=t+"__bubble";n.has(r)||(HI(e,t,2,!1),n.add(r))}function Lf(t,e,n){var r=0;e&&(r|=4),HI(n,t,r,e)}var Wl="_reactListening"+Math.random().toString(36).slice(2);function yu(t){if(!t[Wl]){t[Wl]=!0,Z_.forEach(function(n){n!=="selectionchange"&&(UN.has(n)||Lf(n,!1,t),Lf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Wl]||(e[Wl]=!0,Lf("selectionchange",!1,e))}}function HI(t,e,n,r){switch(NI(e)){case 1:var i=Zx;break;case 4:i=eN;break;default:i=Pg}n=i.bind(null,e,n,t),i=void 0,!Mp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Mf(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Wi(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}mI(function(){var l=s,c=Ng(n),h=[];e:{var d=qI.get(t);if(d!==void 0){var p=$g,y=t;switch(t){case"keypress":if(_c(n)===0)break e;case"keydown":case"keyup":p=mN;break;case"focusin":y="focus",p=bf;break;case"focusout":y="blur",p=bf;break;case"beforeblur":case"afterblur":p=bf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=$w;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=rN;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=vN;break;case VI:case zI:case jI:p=oN;break;case BI:p=_N;break;case"scroll":p=tN;break;case"wheel":p=EN;break;case"copy":case"cut":case"paste":p=uN;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Mw}var v=(e&4)!==0,S=!v&&t==="scroll",m=v?d!==null?d+"Capture":null:d;v=[];for(var f=l,g;f!==null;){g=f;var _=g.stateNode;if(g.tag===5&&_!==null&&(g=_,m!==null&&(_=hu(f,m),_!=null&&v.push(vu(f,_,g)))),S)break;f=f.return}0<v.length&&(d=new p(d,y,null,n,c),h.push({event:d,listeners:v}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==$p&&(y=n.relatedTarget||n.fromElement)&&(Wi(y)||y[Sr]))break e;if((p||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,p?(y=n.relatedTarget||n.toElement,p=l,y=y?Wi(y):null,y!==null&&(S=Ns(y),y!==S||y.tag!==5&&y.tag!==6)&&(y=null)):(p=null,y=l),p!==y)){if(v=$w,_="onMouseLeave",m="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(v=Mw,_="onPointerLeave",m="onPointerEnter",f="pointer"),S=p==null?d:Xs(p),g=y==null?d:Xs(y),d=new v(_,f+"leave",p,n,c),d.target=S,d.relatedTarget=g,_=null,Wi(c)===l&&(v=new v(m,f+"enter",y,n,c),v.target=g,v.relatedTarget=S,_=v),S=_,p&&y)t:{for(v=p,m=y,f=0,g=v;g;g=Fs(g))f++;for(g=0,_=m;_;_=Fs(_))g++;for(;0<f-g;)v=Fs(v),f--;for(;0<g-f;)m=Fs(m),g--;for(;f--;){if(v===m||m!==null&&v===m.alternate)break t;v=Fs(v),m=Fs(m)}v=null}else v=null;p!==null&&Kw(h,d,p,v,!1),y!==null&&S!==null&&Kw(h,S,y,v,!0)}}e:{if(d=l?Xs(l):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var T=NN;else if(Vw(d))if($I)T=PN;else{T=RN;var A=bN}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(T=DN);if(T&&(T=T(t,l))){OI(h,T,n,c);break e}A&&A(t,d,l),t==="focusout"&&(A=d._wrapperState)&&A.controlled&&d.type==="number"&&bp(d,"number",d.value)}switch(A=l?Xs(l):window,t){case"focusin":(Vw(A)||A.contentEditable==="true")&&(Qs=A,jp=l,Wa=null);break;case"focusout":Wa=jp=Qs=null;break;case"mousedown":Bp=!0;break;case"contextmenu":case"mouseup":case"dragend":Bp=!1,Gw(h,n,c);break;case"selectionchange":if(LN)break;case"keydown":case"keyup":Gw(h,n,c)}var b;if(Mg)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Ks?DI(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(RI&&n.locale!=="ko"&&(Ks||P!=="onCompositionStart"?P==="onCompositionEnd"&&Ks&&(b=bI()):(Wr=c,Og="value"in Wr?Wr.value:Wr.textContent,Ks=!0)),A=Kc(l,P),0<A.length&&(P=new Lw(P,t,null,n,c),h.push({event:P,listeners:A}),b?P.data=b:(b=PI(n),b!==null&&(P.data=b)))),(b=TN?kN(t,n):CN(t,n))&&(l=Kc(l,"onBeforeInput"),0<l.length&&(c=new Lw("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:l}),c.data=b))}GI(h,e)})}function vu(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Kc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=hu(t,n),s!=null&&r.unshift(vu(t,s,i)),s=hu(t,e),s!=null&&r.push(vu(t,s,i))),t=t.return}return r}function Fs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Kw(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,l=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&l!==null&&(a=l,i?(u=hu(n,s),u!=null&&o.unshift(vu(n,u,a))):i||(u=hu(n,s),u!=null&&o.push(vu(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var VN=/\r\n?/g,zN=/\u0000|\uFFFD/g;function Qw(t){return(typeof t=="string"?t:""+t).replace(VN,`
`).replace(zN,"")}function Kl(t,e,n){if(e=Qw(e),Qw(t)!==e&&n)throw Error(x(425))}function Qc(){}var qp=null,Gp=null;function Hp(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Wp=typeof setTimeout=="function"?setTimeout:void 0,jN=typeof clearTimeout=="function"?clearTimeout:void 0,Yw=typeof Promise=="function"?Promise:void 0,BN=typeof queueMicrotask=="function"?queueMicrotask:typeof Yw<"u"?function(t){return Yw.resolve(null).then(t).catch(qN)}:Wp;function qN(t){setTimeout(function(){throw t})}function Ff(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),pu(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);pu(e)}function ei(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Xw(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Qo=Math.random().toString(36).slice(2),jn="__reactFiber$"+Qo,wu="__reactProps$"+Qo,Sr="__reactContainer$"+Qo,Kp="__reactEvents$"+Qo,GN="__reactListeners$"+Qo,HN="__reactHandles$"+Qo;function Wi(t){var e=t[jn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Sr]||n[jn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Xw(t);t!==null;){if(n=t[jn])return n;t=Xw(t)}return e}t=n,n=t.parentNode}return null}function sl(t){return t=t[jn]||t[Sr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Xs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(x(33))}function Kh(t){return t[wu]||null}var Qp=[],Js=-1;function ki(t){return{current:t}}function Ce(t){0>Js||(t.current=Qp[Js],Qp[Js]=null,Js--)}function Ee(t,e){Js++,Qp[Js]=t.current,t.current=e}var ci={},Ot=ki(ci),Zt=ki(!1),us=ci;function ko(t,e){var n=t.type.contextTypes;if(!n)return ci;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function en(t){return t=t.childContextTypes,t!=null}function Yc(){Ce(Zt),Ce(Ot)}function Jw(t,e,n){if(Ot.current!==ci)throw Error(x(168));Ee(Ot,e),Ee(Zt,n)}function WI(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(x(108,bx(t)||"Unknown",i));return Pe({},n,r)}function Xc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ci,us=Ot.current,Ee(Ot,t),Ee(Zt,Zt.current),!0}function Zw(t,e,n){var r=t.stateNode;if(!r)throw Error(x(169));n?(t=WI(t,e,us),r.__reactInternalMemoizedMergedChildContext=t,Ce(Zt),Ce(Ot),Ee(Ot,t)):Ce(Zt),Ee(Zt,n)}var dr=null,Qh=!1,Uf=!1;function KI(t){dr===null?dr=[t]:dr.push(t)}function WN(t){Qh=!0,KI(t)}function Ci(){if(!Uf&&dr!==null){Uf=!0;var t=0,e=ye;try{var n=dr;for(ye=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}dr=null,Qh=!1}catch(i){throw dr!==null&&(dr=dr.slice(t+1)),wI(bg,Ci),i}finally{ye=e,Uf=!1}}return null}var Zs=[],eo=0,Jc=null,Zc=0,yn=[],vn=0,ls=null,fr=1,pr="";function Fi(t,e){Zs[eo++]=Zc,Zs[eo++]=Jc,Jc=t,Zc=e}function QI(t,e,n){yn[vn++]=fr,yn[vn++]=pr,yn[vn++]=ls,ls=t;var r=fr;t=pr;var i=32-On(r)-1;r&=~(1<<i),n+=1;var s=32-On(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,fr=1<<32-On(e)+i|n<<i|r,pr=s+t}else fr=1<<s|n<<i|r,pr=t}function Ug(t){t.return!==null&&(Fi(t,1),QI(t,1,0))}function Vg(t){for(;t===Jc;)Jc=Zs[--eo],Zs[eo]=null,Zc=Zs[--eo],Zs[eo]=null;for(;t===ls;)ls=yn[--vn],yn[vn]=null,pr=yn[--vn],yn[vn]=null,fr=yn[--vn],yn[vn]=null}var cn=null,an=null,xe=!1,Rn=null;function YI(t,e){var n=_n(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function e0(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,cn=t,an=ei(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,cn=t,an=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ls!==null?{id:fr,overflow:pr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=_n(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,cn=t,an=null,!0):!1;default:return!1}}function Yp(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Xp(t){if(xe){var e=an;if(e){var n=e;if(!e0(t,e)){if(Yp(t))throw Error(x(418));e=ei(n.nextSibling);var r=cn;e&&e0(t,e)?YI(r,n):(t.flags=t.flags&-4097|2,xe=!1,cn=t)}}else{if(Yp(t))throw Error(x(418));t.flags=t.flags&-4097|2,xe=!1,cn=t}}}function t0(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;cn=t}function Ql(t){if(t!==cn)return!1;if(!xe)return t0(t),xe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Hp(t.type,t.memoizedProps)),e&&(e=an)){if(Yp(t))throw XI(),Error(x(418));for(;e;)YI(t,e),e=ei(e.nextSibling)}if(t0(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(x(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){an=ei(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}an=null}}else an=cn?ei(t.stateNode.nextSibling):null;return!0}function XI(){for(var t=an;t;)t=ei(t.nextSibling)}function Co(){an=cn=null,xe=!1}function zg(t){Rn===null?Rn=[t]:Rn.push(t)}var KN=Nr.ReactCurrentBatchConfig;function Nn(t,e){if(t&&t.defaultProps){e=Pe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var eh=ki(null),th=null,to=null,jg=null;function Bg(){jg=to=th=null}function qg(t){var e=eh.current;Ce(eh),t._currentValue=e}function Jp(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function po(t,e){th=t,jg=to=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Yt=!0),t.firstContext=null)}function Sn(t){var e=t._currentValue;if(jg!==t)if(t={context:t,memoizedValue:e,next:null},to===null){if(th===null)throw Error(x(308));to=t,th.dependencies={lanes:0,firstContext:t}}else to=to.next=t;return e}var Ki=null;function Gg(t){Ki===null?Ki=[t]:Ki.push(t)}function JI(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Gg(e)):(n.next=i.next,i.next=n),e.interleaved=n,Tr(t,r)}function Tr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var jr=!1;function Hg(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ZI(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function wr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ti(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,le&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Tr(t,n)}return i=r.interleaved,i===null?(e.next=e,Gg(r)):(e.next=i.next,i.next=e),r.interleaved=e,Tr(t,n)}function Ic(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Rg(t,n)}}function n0(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function nh(t,e,n,r){var i=t.updateQueue;jr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,l=u.next;u.next=null,o===null?s=l:o.next=l,o=u;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=l:a.next=l,c.lastBaseUpdate=u))}if(s!==null){var h=i.baseState;o=0,c=l=u=null,a=s;do{var d=a.lane,p=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,v=a;switch(d=e,p=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){h=y.call(p,h,d);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,d=typeof y=="function"?y.call(p,h,d):y,d==null)break e;h=Pe({},h,d);break e;case 2:jr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(l=c=p,u=h):c=c.next=p,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(u=h),i.baseState=u,i.firstBaseUpdate=l,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);hs|=o,t.lanes=o,t.memoizedState=h}}function r0(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(x(191,i));i.call(r)}}}var eE=new J_.Component().refs;function Zp(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Pe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Yh={isMounted:function(t){return(t=t._reactInternals)?Ns(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=zt(),i=ri(t),s=wr(r,i);s.payload=e,n!=null&&(s.callback=n),e=ti(t,s,i),e!==null&&($n(e,t,i,r),Ic(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=zt(),i=ri(t),s=wr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ti(t,s,i),e!==null&&($n(e,t,i,r),Ic(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=zt(),r=ri(t),i=wr(n,r);i.tag=2,e!=null&&(i.callback=e),e=ti(t,i,r),e!==null&&($n(e,t,r,n),Ic(e,t,r))}};function i0(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!gu(n,r)||!gu(i,s):!0}function tE(t,e,n){var r=!1,i=ci,s=e.contextType;return typeof s=="object"&&s!==null?s=Sn(s):(i=en(e)?us:Ot.current,r=e.contextTypes,s=(r=r!=null)?ko(t,i):ci),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Yh,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function s0(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Yh.enqueueReplaceState(e,e.state,null)}function em(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=eE,Hg(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Sn(s):(s=en(e)?us:Ot.current,i.context=ko(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Zp(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Yh.enqueueReplaceState(i,i.state,null),nh(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function va(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(x(309));var r=n.stateNode}if(!r)throw Error(x(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===eE&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(x(284));if(!n._owner)throw Error(x(290,t))}return t}function Yl(t,e){throw t=Object.prototype.toString.call(e),Error(x(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function o0(t){var e=t._init;return e(t._payload)}function nE(t){function e(m,f){if(t){var g=m.deletions;g===null?(m.deletions=[f],m.flags|=16):g.push(f)}}function n(m,f){if(!t)return null;for(;f!==null;)e(m,f),f=f.sibling;return null}function r(m,f){for(m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function i(m,f){return m=ii(m,f),m.index=0,m.sibling=null,m}function s(m,f,g){return m.index=g,t?(g=m.alternate,g!==null?(g=g.index,g<f?(m.flags|=2,f):g):(m.flags|=2,f)):(m.flags|=1048576,f)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,f,g,_){return f===null||f.tag!==6?(f=Hf(g,m.mode,_),f.return=m,f):(f=i(f,g),f.return=m,f)}function u(m,f,g,_){var T=g.type;return T===Ws?c(m,f,g.props.children,_,g.key):f!==null&&(f.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===zr&&o0(T)===f.type)?(_=i(f,g.props),_.ref=va(m,f,g),_.return=m,_):(_=Ac(g.type,g.key,g.props,null,m.mode,_),_.ref=va(m,f,g),_.return=m,_)}function l(m,f,g,_){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=Wf(g,m.mode,_),f.return=m,f):(f=i(f,g.children||[]),f.return=m,f)}function c(m,f,g,_,T){return f===null||f.tag!==7?(f=ns(g,m.mode,_,T),f.return=m,f):(f=i(f,g),f.return=m,f)}function h(m,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Hf(""+f,m.mode,g),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Ul:return g=Ac(f.type,f.key,f.props,null,m.mode,g),g.ref=va(m,null,f),g.return=m,g;case Hs:return f=Wf(f,m.mode,g),f.return=m,f;case zr:var _=f._init;return h(m,_(f._payload),g)}if(Pa(f)||fa(f))return f=ns(f,m.mode,g,null),f.return=m,f;Yl(m,f)}return null}function d(m,f,g,_){var T=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return T!==null?null:a(m,f,""+g,_);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ul:return g.key===T?u(m,f,g,_):null;case Hs:return g.key===T?l(m,f,g,_):null;case zr:return T=g._init,d(m,f,T(g._payload),_)}if(Pa(g)||fa(g))return T!==null?null:c(m,f,g,_,null);Yl(m,g)}return null}function p(m,f,g,_,T){if(typeof _=="string"&&_!==""||typeof _=="number")return m=m.get(g)||null,a(f,m,""+_,T);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ul:return m=m.get(_.key===null?g:_.key)||null,u(f,m,_,T);case Hs:return m=m.get(_.key===null?g:_.key)||null,l(f,m,_,T);case zr:var A=_._init;return p(m,f,g,A(_._payload),T)}if(Pa(_)||fa(_))return m=m.get(g)||null,c(f,m,_,T,null);Yl(f,_)}return null}function y(m,f,g,_){for(var T=null,A=null,b=f,P=f=0,te=null;b!==null&&P<g.length;P++){b.index>P?(te=b,b=null):te=b.sibling;var W=d(m,b,g[P],_);if(W===null){b===null&&(b=te);break}t&&b&&W.alternate===null&&e(m,b),f=s(W,f,P),A===null?T=W:A.sibling=W,A=W,b=te}if(P===g.length)return n(m,b),xe&&Fi(m,P),T;if(b===null){for(;P<g.length;P++)b=h(m,g[P],_),b!==null&&(f=s(b,f,P),A===null?T=b:A.sibling=b,A=b);return xe&&Fi(m,P),T}for(b=r(m,b);P<g.length;P++)te=p(b,m,P,g[P],_),te!==null&&(t&&te.alternate!==null&&b.delete(te.key===null?P:te.key),f=s(te,f,P),A===null?T=te:A.sibling=te,A=te);return t&&b.forEach(function(nt){return e(m,nt)}),xe&&Fi(m,P),T}function v(m,f,g,_){var T=fa(g);if(typeof T!="function")throw Error(x(150));if(g=T.call(g),g==null)throw Error(x(151));for(var A=T=null,b=f,P=f=0,te=null,W=g.next();b!==null&&!W.done;P++,W=g.next()){b.index>P?(te=b,b=null):te=b.sibling;var nt=d(m,b,W.value,_);if(nt===null){b===null&&(b=te);break}t&&b&&nt.alternate===null&&e(m,b),f=s(nt,f,P),A===null?T=nt:A.sibling=nt,A=nt,b=te}if(W.done)return n(m,b),xe&&Fi(m,P),T;if(b===null){for(;!W.done;P++,W=g.next())W=h(m,W.value,_),W!==null&&(f=s(W,f,P),A===null?T=W:A.sibling=W,A=W);return xe&&Fi(m,P),T}for(b=r(m,b);!W.done;P++,W=g.next())W=p(b,m,P,W.value,_),W!==null&&(t&&W.alternate!==null&&b.delete(W.key===null?P:W.key),f=s(W,f,P),A===null?T=W:A.sibling=W,A=W);return t&&b.forEach(function(Je){return e(m,Je)}),xe&&Fi(m,P),T}function S(m,f,g,_){if(typeof g=="object"&&g!==null&&g.type===Ws&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Ul:e:{for(var T=g.key,A=f;A!==null;){if(A.key===T){if(T=g.type,T===Ws){if(A.tag===7){n(m,A.sibling),f=i(A,g.props.children),f.return=m,m=f;break e}}else if(A.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===zr&&o0(T)===A.type){n(m,A.sibling),f=i(A,g.props),f.ref=va(m,A,g),f.return=m,m=f;break e}n(m,A);break}else e(m,A);A=A.sibling}g.type===Ws?(f=ns(g.props.children,m.mode,_,g.key),f.return=m,m=f):(_=Ac(g.type,g.key,g.props,null,m.mode,_),_.ref=va(m,f,g),_.return=m,m=_)}return o(m);case Hs:e:{for(A=g.key;f!==null;){if(f.key===A)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){n(m,f.sibling),f=i(f,g.children||[]),f.return=m,m=f;break e}else{n(m,f);break}else e(m,f);f=f.sibling}f=Wf(g,m.mode,_),f.return=m,m=f}return o(m);case zr:return A=g._init,S(m,f,A(g._payload),_)}if(Pa(g))return y(m,f,g,_);if(fa(g))return v(m,f,g,_);Yl(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(n(m,f.sibling),f=i(f,g),f.return=m,m=f):(n(m,f),f=Hf(g,m.mode,_),f.return=m,m=f),o(m)):n(m,f)}return S}var Ao=nE(!0),rE=nE(!1),ol={},tr=ki(ol),_u=ki(ol),Iu=ki(ol);function Qi(t){if(t===ol)throw Error(x(174));return t}function Wg(t,e){switch(Ee(Iu,e),Ee(_u,t),Ee(tr,ol),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Dp(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Dp(e,t)}Ce(tr),Ee(tr,e)}function xo(){Ce(tr),Ce(_u),Ce(Iu)}function iE(t){Qi(Iu.current);var e=Qi(tr.current),n=Dp(e,t.type);e!==n&&(Ee(_u,t),Ee(tr,n))}function Kg(t){_u.current===t&&(Ce(tr),Ce(_u))}var Re=ki(0);function rh(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Vf=[];function Qg(){for(var t=0;t<Vf.length;t++)Vf[t]._workInProgressVersionPrimary=null;Vf.length=0}var Ec=Nr.ReactCurrentDispatcher,zf=Nr.ReactCurrentBatchConfig,cs=0,De=null,Ze=null,it=null,ih=!1,Ka=!1,Eu=0,QN=0;function xt(){throw Error(x(321))}function Yg(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Ln(t[n],e[n]))return!1;return!0}function Xg(t,e,n,r,i,s){if(cs=s,De=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ec.current=t===null||t.memoizedState===null?ZN:eb,t=n(r,i),Ka){s=0;do{if(Ka=!1,Eu=0,25<=s)throw Error(x(301));s+=1,it=Ze=null,e.updateQueue=null,Ec.current=tb,t=n(r,i)}while(Ka)}if(Ec.current=sh,e=Ze!==null&&Ze.next!==null,cs=0,it=Ze=De=null,ih=!1,e)throw Error(x(300));return t}function Jg(){var t=Eu!==0;return Eu=0,t}function zn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return it===null?De.memoizedState=it=t:it=it.next=t,it}function Tn(){if(Ze===null){var t=De.alternate;t=t!==null?t.memoizedState:null}else t=Ze.next;var e=it===null?De.memoizedState:it.next;if(e!==null)it=e,Ze=t;else{if(t===null)throw Error(x(310));Ze=t,t={memoizedState:Ze.memoizedState,baseState:Ze.baseState,baseQueue:Ze.baseQueue,queue:Ze.queue,next:null},it===null?De.memoizedState=it=t:it=it.next=t}return it}function Su(t,e){return typeof e=="function"?e(t):e}function jf(t){var e=Tn(),n=e.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=t;var r=Ze,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,l=s;do{var c=l.lane;if((cs&c)===c)u!==null&&(u=u.next={lane:0,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null}),r=l.hasEagerState?l.eagerState:t(r,l.action);else{var h={lane:c,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null};u===null?(a=u=h,o=r):u=u.next=h,De.lanes|=c,hs|=c}l=l.next}while(l!==null&&l!==s);u===null?o=r:u.next=a,Ln(r,e.memoizedState)||(Yt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,De.lanes|=s,hs|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Bf(t){var e=Tn(),n=e.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Ln(s,e.memoizedState)||(Yt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function sE(){}function oE(t,e){var n=De,r=Tn(),i=e(),s=!Ln(r.memoizedState,i);if(s&&(r.memoizedState=i,Yt=!0),r=r.queue,Zg(lE.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||it!==null&&it.memoizedState.tag&1){if(n.flags|=2048,Tu(9,uE.bind(null,n,r,i,e),void 0,null),ot===null)throw Error(x(349));cs&30||aE(n,e,i)}return i}function aE(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=De.updateQueue,e===null?(e={lastEffect:null,stores:null},De.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function uE(t,e,n,r){e.value=n,e.getSnapshot=r,cE(e)&&hE(t)}function lE(t,e,n){return n(function(){cE(e)&&hE(t)})}function cE(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Ln(t,n)}catch{return!0}}function hE(t){var e=Tr(t,1);e!==null&&$n(e,t,1,-1)}function a0(t){var e=zn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Su,lastRenderedState:t},e.queue=t,t=t.dispatch=JN.bind(null,De,t),[e.memoizedState,t]}function Tu(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=De.updateQueue,e===null?(e={lastEffect:null,stores:null},De.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function dE(){return Tn().memoizedState}function Sc(t,e,n,r){var i=zn();De.flags|=t,i.memoizedState=Tu(1|e,n,void 0,r===void 0?null:r)}function Xh(t,e,n,r){var i=Tn();r=r===void 0?null:r;var s=void 0;if(Ze!==null){var o=Ze.memoizedState;if(s=o.destroy,r!==null&&Yg(r,o.deps)){i.memoizedState=Tu(e,n,s,r);return}}De.flags|=t,i.memoizedState=Tu(1|e,n,s,r)}function u0(t,e){return Sc(8390656,8,t,e)}function Zg(t,e){return Xh(2048,8,t,e)}function fE(t,e){return Xh(4,2,t,e)}function pE(t,e){return Xh(4,4,t,e)}function mE(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function gE(t,e,n){return n=n!=null?n.concat([t]):null,Xh(4,4,mE.bind(null,e,t),n)}function ey(){}function yE(t,e){var n=Tn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Yg(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function vE(t,e){var n=Tn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Yg(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function wE(t,e,n){return cs&21?(Ln(n,e)||(n=EI(),De.lanes|=n,hs|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Yt=!0),t.memoizedState=n)}function YN(t,e){var n=ye;ye=n!==0&&4>n?n:4,t(!0);var r=zf.transition;zf.transition={};try{t(!1),e()}finally{ye=n,zf.transition=r}}function _E(){return Tn().memoizedState}function XN(t,e,n){var r=ri(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},IE(t))EE(e,n);else if(n=JI(t,e,n,r),n!==null){var i=zt();$n(n,t,r,i),SE(n,e,r)}}function JN(t,e,n){var r=ri(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(IE(t))EE(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Ln(a,o)){var u=e.interleaved;u===null?(i.next=i,Gg(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=JI(t,e,i,r),n!==null&&(i=zt(),$n(n,t,r,i),SE(n,e,r))}}function IE(t){var e=t.alternate;return t===De||e!==null&&e===De}function EE(t,e){Ka=ih=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function SE(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Rg(t,n)}}var sh={readContext:Sn,useCallback:xt,useContext:xt,useEffect:xt,useImperativeHandle:xt,useInsertionEffect:xt,useLayoutEffect:xt,useMemo:xt,useReducer:xt,useRef:xt,useState:xt,useDebugValue:xt,useDeferredValue:xt,useTransition:xt,useMutableSource:xt,useSyncExternalStore:xt,useId:xt,unstable_isNewReconciler:!1},ZN={readContext:Sn,useCallback:function(t,e){return zn().memoizedState=[t,e===void 0?null:e],t},useContext:Sn,useEffect:u0,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Sc(4194308,4,mE.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Sc(4194308,4,t,e)},useInsertionEffect:function(t,e){return Sc(4,2,t,e)},useMemo:function(t,e){var n=zn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=zn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=XN.bind(null,De,t),[r.memoizedState,t]},useRef:function(t){var e=zn();return t={current:t},e.memoizedState=t},useState:a0,useDebugValue:ey,useDeferredValue:function(t){return zn().memoizedState=t},useTransition:function(){var t=a0(!1),e=t[0];return t=YN.bind(null,t[1]),zn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=De,i=zn();if(xe){if(n===void 0)throw Error(x(407));n=n()}else{if(n=e(),ot===null)throw Error(x(349));cs&30||aE(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,u0(lE.bind(null,r,s,t),[t]),r.flags|=2048,Tu(9,uE.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=zn(),e=ot.identifierPrefix;if(xe){var n=pr,r=fr;n=(r&~(1<<32-On(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Eu++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=QN++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},eb={readContext:Sn,useCallback:yE,useContext:Sn,useEffect:Zg,useImperativeHandle:gE,useInsertionEffect:fE,useLayoutEffect:pE,useMemo:vE,useReducer:jf,useRef:dE,useState:function(){return jf(Su)},useDebugValue:ey,useDeferredValue:function(t){var e=Tn();return wE(e,Ze.memoizedState,t)},useTransition:function(){var t=jf(Su)[0],e=Tn().memoizedState;return[t,e]},useMutableSource:sE,useSyncExternalStore:oE,useId:_E,unstable_isNewReconciler:!1},tb={readContext:Sn,useCallback:yE,useContext:Sn,useEffect:Zg,useImperativeHandle:gE,useInsertionEffect:fE,useLayoutEffect:pE,useMemo:vE,useReducer:Bf,useRef:dE,useState:function(){return Bf(Su)},useDebugValue:ey,useDeferredValue:function(t){var e=Tn();return Ze===null?e.memoizedState=t:wE(e,Ze.memoizedState,t)},useTransition:function(){var t=Bf(Su)[0],e=Tn().memoizedState;return[t,e]},useMutableSource:sE,useSyncExternalStore:oE,useId:_E,unstable_isNewReconciler:!1};function No(t,e){try{var n="",r=e;do n+=Nx(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function qf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function tm(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var nb=typeof WeakMap=="function"?WeakMap:Map;function TE(t,e,n){n=wr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ah||(ah=!0,hm=r),tm(t,e)},n}function kE(t,e,n){n=wr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){tm(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){tm(t,e),typeof r!="function"&&(ni===null?ni=new Set([this]):ni.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function l0(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new nb;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=gb.bind(null,t,e,n),e.then(t,t))}function c0(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function h0(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=wr(-1,1),e.tag=2,ti(n,e,1))),n.lanes|=1),t)}var rb=Nr.ReactCurrentOwner,Yt=!1;function Mt(t,e,n,r){e.child=t===null?rE(e,null,n,r):Ao(e,t.child,n,r)}function d0(t,e,n,r,i){n=n.render;var s=e.ref;return po(e,i),r=Xg(t,e,n,r,s,i),n=Jg(),t!==null&&!Yt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,kr(t,e,i)):(xe&&n&&Ug(e),e.flags|=1,Mt(t,e,r,i),e.child)}function f0(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!uy(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,CE(t,e,s,r,i)):(t=Ac(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:gu,n(o,r)&&t.ref===e.ref)return kr(t,e,i)}return e.flags|=1,t=ii(s,r),t.ref=e.ref,t.return=e,e.child=t}function CE(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(gu(s,r)&&t.ref===e.ref)if(Yt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Yt=!0);else return e.lanes=t.lanes,kr(t,e,i)}return nm(t,e,n,r,i)}function AE(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ee(ro,sn),sn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ee(ro,sn),sn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Ee(ro,sn),sn|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Ee(ro,sn),sn|=r;return Mt(t,e,i,n),e.child}function xE(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function nm(t,e,n,r,i){var s=en(n)?us:Ot.current;return s=ko(e,s),po(e,i),n=Xg(t,e,n,r,s,i),r=Jg(),t!==null&&!Yt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,kr(t,e,i)):(xe&&r&&Ug(e),e.flags|=1,Mt(t,e,n,i),e.child)}function p0(t,e,n,r,i){if(en(n)){var s=!0;Xc(e)}else s=!1;if(po(e,i),e.stateNode===null)Tc(t,e),tE(e,n,r),em(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,l=n.contextType;typeof l=="object"&&l!==null?l=Sn(l):(l=en(n)?us:Ot.current,l=ko(e,l));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==l)&&s0(e,o,r,l),jr=!1;var d=e.memoizedState;o.state=d,nh(e,r,o,i),u=e.memoizedState,a!==r||d!==u||Zt.current||jr?(typeof c=="function"&&(Zp(e,n,c,r),u=e.memoizedState),(a=jr||i0(e,n,a,r,d,u,l))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=l,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,ZI(t,e),a=e.memoizedProps,l=e.type===e.elementType?a:Nn(e.type,a),o.props=l,h=e.pendingProps,d=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Sn(u):(u=en(n)?us:Ot.current,u=ko(e,u));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==u)&&s0(e,o,r,u),jr=!1,d=e.memoizedState,o.state=d,nh(e,r,o,i);var y=e.memoizedState;a!==h||d!==y||Zt.current||jr?(typeof p=="function"&&(Zp(e,n,p,r),y=e.memoizedState),(l=jr||i0(e,n,l,r,d,y,u)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=u,r=l):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return rm(t,e,n,r,s,i)}function rm(t,e,n,r,i,s){xE(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Zw(e,n,!1),kr(t,e,s);r=e.stateNode,rb.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ao(e,t.child,null,s),e.child=Ao(e,null,a,s)):Mt(t,e,a,s),e.memoizedState=r.state,i&&Zw(e,n,!0),e.child}function NE(t){var e=t.stateNode;e.pendingContext?Jw(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Jw(t,e.context,!1),Wg(t,e.containerInfo)}function m0(t,e,n,r,i){return Co(),zg(i),e.flags|=256,Mt(t,e,n,r),e.child}var im={dehydrated:null,treeContext:null,retryLane:0};function sm(t){return{baseLanes:t,cachePool:null,transitions:null}}function bE(t,e,n){var r=e.pendingProps,i=Re.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Ee(Re,i&1),t===null)return Xp(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ed(o,r,0,null),t=ns(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=sm(n),e.memoizedState=im,t):ty(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return ib(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=ii(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=ii(a,s):(s=ns(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?sm(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=im,r}return s=t.child,t=s.sibling,r=ii(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function ty(t,e){return e=ed({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Xl(t,e,n,r){return r!==null&&zg(r),Ao(e,t.child,null,n),t=ty(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function ib(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=qf(Error(x(422))),Xl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=ed({mode:"visible",children:r.children},i,0,null),s=ns(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ao(e,t.child,null,o),e.child.memoizedState=sm(o),e.memoizedState=im,s);if(!(e.mode&1))return Xl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(x(419)),r=qf(s,r,void 0),Xl(t,e,o,r)}if(a=(o&t.childLanes)!==0,Yt||a){if(r=ot,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Tr(t,i),$n(r,t,i,-1))}return ay(),r=qf(Error(x(421))),Xl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=yb.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,an=ei(i.nextSibling),cn=e,xe=!0,Rn=null,t!==null&&(yn[vn++]=fr,yn[vn++]=pr,yn[vn++]=ls,fr=t.id,pr=t.overflow,ls=e),e=ty(e,r.children),e.flags|=4096,e)}function g0(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Jp(t.return,e,n)}function Gf(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function RE(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Mt(t,e,r.children,n),r=Re.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&g0(t,n,e);else if(t.tag===19)g0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ee(Re,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&rh(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Gf(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&rh(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Gf(e,!0,n,null,s);break;case"together":Gf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Tc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function kr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),hs|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(x(153));if(e.child!==null){for(t=e.child,n=ii(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ii(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function sb(t,e,n){switch(e.tag){case 3:NE(e),Co();break;case 5:iE(e);break;case 1:en(e.type)&&Xc(e);break;case 4:Wg(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Ee(eh,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ee(Re,Re.current&1),e.flags|=128,null):n&e.child.childLanes?bE(t,e,n):(Ee(Re,Re.current&1),t=kr(t,e,n),t!==null?t.sibling:null);Ee(Re,Re.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return RE(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ee(Re,Re.current),r)break;return null;case 22:case 23:return e.lanes=0,AE(t,e,n)}return kr(t,e,n)}var DE,om,PE,OE;DE=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};om=function(){};PE=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Qi(tr.current);var s=null;switch(n){case"input":i=xp(t,i),r=xp(t,r),s=[];break;case"select":i=Pe({},i,{value:void 0}),r=Pe({},r,{value:void 0}),s=[];break;case"textarea":i=Rp(t,i),r=Rp(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Qc)}Pp(n,r);var o;n=null;for(l in i)if(!r.hasOwnProperty(l)&&i.hasOwnProperty(l)&&i[l]!=null)if(l==="style"){var a=i[l];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else l!=="dangerouslySetInnerHTML"&&l!=="children"&&l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(lu.hasOwnProperty(l)?s||(s=[]):(s=s||[]).push(l,null));for(l in r){var u=r[l];if(a=i!=null?i[l]:void 0,r.hasOwnProperty(l)&&u!==a&&(u!=null||a!=null))if(l==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(l,n)),n=u;else l==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(l,u)):l==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(l,""+u):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&(lu.hasOwnProperty(l)?(u!=null&&l==="onScroll"&&Se("scroll",t),s||a===u||(s=[])):(s=s||[]).push(l,u))}n&&(s=s||[]).push("style",n);var l=s;(e.updateQueue=l)&&(e.flags|=4)}};OE=function(t,e,n,r){n!==r&&(e.flags|=4)};function wa(t,e){if(!xe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Nt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function ob(t,e,n){var r=e.pendingProps;switch(Vg(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Nt(e),null;case 1:return en(e.type)&&Yc(),Nt(e),null;case 3:return r=e.stateNode,xo(),Ce(Zt),Ce(Ot),Qg(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ql(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Rn!==null&&(pm(Rn),Rn=null))),om(t,e),Nt(e),null;case 5:Kg(e);var i=Qi(Iu.current);if(n=e.type,t!==null&&e.stateNode!=null)PE(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(x(166));return Nt(e),null}if(t=Qi(tr.current),Ql(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[jn]=e,r[wu]=s,t=(e.mode&1)!==0,n){case"dialog":Se("cancel",r),Se("close",r);break;case"iframe":case"object":case"embed":Se("load",r);break;case"video":case"audio":for(i=0;i<$a.length;i++)Se($a[i],r);break;case"source":Se("error",r);break;case"img":case"image":case"link":Se("error",r),Se("load",r);break;case"details":Se("toggle",r);break;case"input":kw(r,s),Se("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Se("invalid",r);break;case"textarea":Aw(r,s),Se("invalid",r)}Pp(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Kl(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Kl(r.textContent,a,t),i=["children",""+a]):lu.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Se("scroll",r)}switch(n){case"input":Vl(r),Cw(r,s,!0);break;case"textarea":Vl(r),xw(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Qc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=aI(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[jn]=e,t[wu]=r,DE(t,e,!1,!1),e.stateNode=t;e:{switch(o=Op(n,r),n){case"dialog":Se("cancel",t),Se("close",t),i=r;break;case"iframe":case"object":case"embed":Se("load",t),i=r;break;case"video":case"audio":for(i=0;i<$a.length;i++)Se($a[i],t);i=r;break;case"source":Se("error",t),i=r;break;case"img":case"image":case"link":Se("error",t),Se("load",t),i=r;break;case"details":Se("toggle",t),i=r;break;case"input":kw(t,r),i=xp(t,r),Se("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Pe({},r,{value:void 0}),Se("invalid",t);break;case"textarea":Aw(t,r),i=Rp(t,r),Se("invalid",t);break;default:i=r}Pp(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?cI(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&uI(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&cu(t,u):typeof u=="number"&&cu(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(lu.hasOwnProperty(s)?u!=null&&s==="onScroll"&&Se("scroll",t):u!=null&&kg(t,s,u,o))}switch(n){case"input":Vl(t),Cw(t,r,!1);break;case"textarea":Vl(t),xw(t);break;case"option":r.value!=null&&t.setAttribute("value",""+li(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?lo(t,!!r.multiple,s,!1):r.defaultValue!=null&&lo(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Qc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Nt(e),null;case 6:if(t&&e.stateNode!=null)OE(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(x(166));if(n=Qi(Iu.current),Qi(tr.current),Ql(e)){if(r=e.stateNode,n=e.memoizedProps,r[jn]=e,(s=r.nodeValue!==n)&&(t=cn,t!==null))switch(t.tag){case 3:Kl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Kl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[jn]=e,e.stateNode=r}return Nt(e),null;case 13:if(Ce(Re),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(xe&&an!==null&&e.mode&1&&!(e.flags&128))XI(),Co(),e.flags|=98560,s=!1;else if(s=Ql(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(x(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(x(317));s[jn]=e}else Co(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Nt(e),s=!1}else Rn!==null&&(pm(Rn),Rn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Re.current&1?et===0&&(et=3):ay())),e.updateQueue!==null&&(e.flags|=4),Nt(e),null);case 4:return xo(),om(t,e),t===null&&yu(e.stateNode.containerInfo),Nt(e),null;case 10:return qg(e.type._context),Nt(e),null;case 17:return en(e.type)&&Yc(),Nt(e),null;case 19:if(Ce(Re),s=e.memoizedState,s===null)return Nt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)wa(s,!1);else{if(et!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=rh(t),o!==null){for(e.flags|=128,wa(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ee(Re,Re.current&1|2),e.child}t=t.sibling}s.tail!==null&&Be()>bo&&(e.flags|=128,r=!0,wa(s,!1),e.lanes=4194304)}else{if(!r)if(t=rh(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),wa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!xe)return Nt(e),null}else 2*Be()-s.renderingStartTime>bo&&n!==1073741824&&(e.flags|=128,r=!0,wa(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Be(),e.sibling=null,n=Re.current,Ee(Re,r?n&1|2:n&1),e):(Nt(e),null);case 22:case 23:return oy(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?sn&1073741824&&(Nt(e),e.subtreeFlags&6&&(e.flags|=8192)):Nt(e),null;case 24:return null;case 25:return null}throw Error(x(156,e.tag))}function ab(t,e){switch(Vg(e),e.tag){case 1:return en(e.type)&&Yc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return xo(),Ce(Zt),Ce(Ot),Qg(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Kg(e),null;case 13:if(Ce(Re),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(x(340));Co()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ce(Re),null;case 4:return xo(),null;case 10:return qg(e.type._context),null;case 22:case 23:return oy(),null;case 24:return null;default:return null}}var Jl=!1,Rt=!1,ub=typeof WeakSet=="function"?WeakSet:Set,z=null;function no(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Me(t,e,r)}else n.current=null}function am(t,e,n){try{n()}catch(r){Me(t,e,r)}}var y0=!1;function lb(t,e){if(qp=Hc,t=FI(),Fg(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,l=0,c=0,h=t,d=null;t:for(;;){for(var p;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(u=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)d=h,h=p;for(;;){if(h===t)break t;if(d===n&&++l===i&&(a=o),d===s&&++c===r&&(u=o),(p=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=p}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Gp={focusedElem:t,selectionRange:n},Hc=!1,z=e;z!==null;)if(e=z,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,z=t;else for(;z!==null;){e=z;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,S=y.memoizedState,m=e.stateNode,f=m.getSnapshotBeforeUpdate(e.elementType===e.type?v:Nn(e.type,v),S);m.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(x(163))}}catch(_){Me(e,e.return,_)}if(t=e.sibling,t!==null){t.return=e.return,z=t;break}z=e.return}return y=y0,y0=!1,y}function Qa(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&am(e,n,s)}i=i.next}while(i!==r)}}function Jh(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function um(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function $E(t){var e=t.alternate;e!==null&&(t.alternate=null,$E(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[jn],delete e[wu],delete e[Kp],delete e[GN],delete e[HN])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function LE(t){return t.tag===5||t.tag===3||t.tag===4}function v0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||LE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function lm(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Qc));else if(r!==4&&(t=t.child,t!==null))for(lm(t,e,n),t=t.sibling;t!==null;)lm(t,e,n),t=t.sibling}function cm(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(cm(t,e,n),t=t.sibling;t!==null;)cm(t,e,n),t=t.sibling}var yt=null,bn=!1;function Lr(t,e,n){for(n=n.child;n!==null;)ME(t,e,n),n=n.sibling}function ME(t,e,n){if(er&&typeof er.onCommitFiberUnmount=="function")try{er.onCommitFiberUnmount(qh,n)}catch{}switch(n.tag){case 5:Rt||no(n,e);case 6:var r=yt,i=bn;yt=null,Lr(t,e,n),yt=r,bn=i,yt!==null&&(bn?(t=yt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):yt.removeChild(n.stateNode));break;case 18:yt!==null&&(bn?(t=yt,n=n.stateNode,t.nodeType===8?Ff(t.parentNode,n):t.nodeType===1&&Ff(t,n),pu(t)):Ff(yt,n.stateNode));break;case 4:r=yt,i=bn,yt=n.stateNode.containerInfo,bn=!0,Lr(t,e,n),yt=r,bn=i;break;case 0:case 11:case 14:case 15:if(!Rt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&am(n,e,o),i=i.next}while(i!==r)}Lr(t,e,n);break;case 1:if(!Rt&&(no(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Me(n,e,a)}Lr(t,e,n);break;case 21:Lr(t,e,n);break;case 22:n.mode&1?(Rt=(r=Rt)||n.memoizedState!==null,Lr(t,e,n),Rt=r):Lr(t,e,n);break;default:Lr(t,e,n)}}function w0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new ub),e.forEach(function(r){var i=vb.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function xn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:yt=a.stateNode,bn=!1;break e;case 3:yt=a.stateNode.containerInfo,bn=!0;break e;case 4:yt=a.stateNode.containerInfo,bn=!0;break e}a=a.return}if(yt===null)throw Error(x(160));ME(s,o,i),yt=null,bn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(l){Me(i,e,l)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)FE(e,t),e=e.sibling}function FE(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(xn(e,t),Vn(t),r&4){try{Qa(3,t,t.return),Jh(3,t)}catch(v){Me(t,t.return,v)}try{Qa(5,t,t.return)}catch(v){Me(t,t.return,v)}}break;case 1:xn(e,t),Vn(t),r&512&&n!==null&&no(n,n.return);break;case 5:if(xn(e,t),Vn(t),r&512&&n!==null&&no(n,n.return),t.flags&32){var i=t.stateNode;try{cu(i,"")}catch(v){Me(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&sI(i,s),Op(a,o);var l=Op(a,s);for(o=0;o<u.length;o+=2){var c=u[o],h=u[o+1];c==="style"?cI(i,h):c==="dangerouslySetInnerHTML"?uI(i,h):c==="children"?cu(i,h):kg(i,c,h,l)}switch(a){case"input":Np(i,s);break;case"textarea":oI(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?lo(i,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?lo(i,!!s.multiple,s.defaultValue,!0):lo(i,!!s.multiple,s.multiple?[]:"",!1))}i[wu]=s}catch(v){Me(t,t.return,v)}}break;case 6:if(xn(e,t),Vn(t),r&4){if(t.stateNode===null)throw Error(x(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){Me(t,t.return,v)}}break;case 3:if(xn(e,t),Vn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{pu(e.containerInfo)}catch(v){Me(t,t.return,v)}break;case 4:xn(e,t),Vn(t);break;case 13:xn(e,t),Vn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(iy=Be())),r&4&&w0(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Rt=(l=Rt)||c,xn(e,t),Rt=l):xn(e,t),Vn(t),r&8192){if(l=t.memoizedState!==null,(t.stateNode.isHidden=l)&&!c&&t.mode&1)for(z=t,c=t.child;c!==null;){for(h=z=c;z!==null;){switch(d=z,p=d.child,d.tag){case 0:case 11:case 14:case 15:Qa(4,d,d.return);break;case 1:no(d,d.return);var y=d.stateNode;if(typeof y.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(v){Me(r,n,v)}}break;case 5:no(d,d.return);break;case 22:if(d.memoizedState!==null){I0(h);continue}}p!==null?(p.return=d,z=p):I0(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,l?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,u=h.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=lI("display",o))}catch(v){Me(t,t.return,v)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=l?"":h.memoizedProps}catch(v){Me(t,t.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:xn(e,t),Vn(t),r&4&&w0(t);break;case 21:break;default:xn(e,t),Vn(t)}}function Vn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(LE(n)){var r=n;break e}n=n.return}throw Error(x(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(cu(i,""),r.flags&=-33);var s=v0(t);cm(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=v0(t);lm(t,a,o);break;default:throw Error(x(161))}}catch(u){Me(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function cb(t,e,n){z=t,UE(t)}function UE(t,e,n){for(var r=(t.mode&1)!==0;z!==null;){var i=z,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Jl;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||Rt;a=Jl;var l=Rt;if(Jl=o,(Rt=u)&&!l)for(z=i;z!==null;)o=z,u=o.child,o.tag===22&&o.memoizedState!==null?E0(i):u!==null?(u.return=o,z=u):E0(i);for(;s!==null;)z=s,UE(s),s=s.sibling;z=i,Jl=a,Rt=l}_0(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,z=s):_0(t)}}function _0(t){for(;z!==null;){var e=z;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Rt||Jh(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Rt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Nn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&r0(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}r0(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var l=e.alternate;if(l!==null){var c=l.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&pu(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(x(163))}Rt||e.flags&512&&um(e)}catch(d){Me(e,e.return,d)}}if(e===t){z=null;break}if(n=e.sibling,n!==null){n.return=e.return,z=n;break}z=e.return}}function I0(t){for(;z!==null;){var e=z;if(e===t){z=null;break}var n=e.sibling;if(n!==null){n.return=e.return,z=n;break}z=e.return}}function E0(t){for(;z!==null;){var e=z;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Jh(4,e)}catch(u){Me(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Me(e,i,u)}}var s=e.return;try{um(e)}catch(u){Me(e,s,u)}break;case 5:var o=e.return;try{um(e)}catch(u){Me(e,o,u)}}}catch(u){Me(e,e.return,u)}if(e===t){z=null;break}var a=e.sibling;if(a!==null){a.return=e.return,z=a;break}z=e.return}}var hb=Math.ceil,oh=Nr.ReactCurrentDispatcher,ny=Nr.ReactCurrentOwner,En=Nr.ReactCurrentBatchConfig,le=0,ot=null,Ye=null,_t=0,sn=0,ro=ki(0),et=0,ku=null,hs=0,Zh=0,ry=0,Ya=null,Qt=null,iy=0,bo=1/0,hr=null,ah=!1,hm=null,ni=null,Zl=!1,Kr=null,uh=0,Xa=0,dm=null,kc=-1,Cc=0;function zt(){return le&6?Be():kc!==-1?kc:kc=Be()}function ri(t){return t.mode&1?le&2&&_t!==0?_t&-_t:KN.transition!==null?(Cc===0&&(Cc=EI()),Cc):(t=ye,t!==0||(t=window.event,t=t===void 0?16:NI(t.type)),t):1}function $n(t,e,n,r){if(50<Xa)throw Xa=0,dm=null,Error(x(185));rl(t,n,r),(!(le&2)||t!==ot)&&(t===ot&&(!(le&2)&&(Zh|=n),et===4&&qr(t,_t)),tn(t,r),n===1&&le===0&&!(e.mode&1)&&(bo=Be()+500,Qh&&Ci()))}function tn(t,e){var n=t.callbackNode;Kx(t,e);var r=Gc(t,t===ot?_t:0);if(r===0)n!==null&&Rw(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Rw(n),e===1)t.tag===0?WN(S0.bind(null,t)):KI(S0.bind(null,t)),BN(function(){!(le&6)&&Ci()}),n=null;else{switch(SI(r)){case 1:n=bg;break;case 4:n=_I;break;case 16:n=qc;break;case 536870912:n=II;break;default:n=qc}n=WE(n,VE.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function VE(t,e){if(kc=-1,Cc=0,le&6)throw Error(x(327));var n=t.callbackNode;if(mo()&&t.callbackNode!==n)return null;var r=Gc(t,t===ot?_t:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=lh(t,r);else{e=r;var i=le;le|=2;var s=jE();(ot!==t||_t!==e)&&(hr=null,bo=Be()+500,ts(t,e));do try{pb();break}catch(a){zE(t,a)}while(1);Bg(),oh.current=s,le=i,Ye!==null?e=0:(ot=null,_t=0,e=et)}if(e!==0){if(e===2&&(i=Up(t),i!==0&&(r=i,e=fm(t,i))),e===1)throw n=ku,ts(t,0),qr(t,r),tn(t,Be()),n;if(e===6)qr(t,r);else{if(i=t.current.alternate,!(r&30)&&!db(i)&&(e=lh(t,r),e===2&&(s=Up(t),s!==0&&(r=s,e=fm(t,s))),e===1))throw n=ku,ts(t,0),qr(t,r),tn(t,Be()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(x(345));case 2:Ui(t,Qt,hr);break;case 3:if(qr(t,r),(r&130023424)===r&&(e=iy+500-Be(),10<e)){if(Gc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){zt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Wp(Ui.bind(null,t,Qt,hr),e);break}Ui(t,Qt,hr);break;case 4:if(qr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-On(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Be()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*hb(r/1960))-r,10<r){t.timeoutHandle=Wp(Ui.bind(null,t,Qt,hr),r);break}Ui(t,Qt,hr);break;case 5:Ui(t,Qt,hr);break;default:throw Error(x(329))}}}return tn(t,Be()),t.callbackNode===n?VE.bind(null,t):null}function fm(t,e){var n=Ya;return t.current.memoizedState.isDehydrated&&(ts(t,e).flags|=256),t=lh(t,e),t!==2&&(e=Qt,Qt=n,e!==null&&pm(e)),t}function pm(t){Qt===null?Qt=t:Qt.push.apply(Qt,t)}function db(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Ln(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function qr(t,e){for(e&=~ry,e&=~Zh,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-On(e),r=1<<n;t[n]=-1,e&=~r}}function S0(t){if(le&6)throw Error(x(327));mo();var e=Gc(t,0);if(!(e&1))return tn(t,Be()),null;var n=lh(t,e);if(t.tag!==0&&n===2){var r=Up(t);r!==0&&(e=r,n=fm(t,r))}if(n===1)throw n=ku,ts(t,0),qr(t,e),tn(t,Be()),n;if(n===6)throw Error(x(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ui(t,Qt,hr),tn(t,Be()),null}function sy(t,e){var n=le;le|=1;try{return t(e)}finally{le=n,le===0&&(bo=Be()+500,Qh&&Ci())}}function ds(t){Kr!==null&&Kr.tag===0&&!(le&6)&&mo();var e=le;le|=1;var n=En.transition,r=ye;try{if(En.transition=null,ye=1,t)return t()}finally{ye=r,En.transition=n,le=e,!(le&6)&&Ci()}}function oy(){sn=ro.current,Ce(ro)}function ts(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,jN(n)),Ye!==null)for(n=Ye.return;n!==null;){var r=n;switch(Vg(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Yc();break;case 3:xo(),Ce(Zt),Ce(Ot),Qg();break;case 5:Kg(r);break;case 4:xo();break;case 13:Ce(Re);break;case 19:Ce(Re);break;case 10:qg(r.type._context);break;case 22:case 23:oy()}n=n.return}if(ot=t,Ye=t=ii(t.current,null),_t=sn=e,et=0,ku=null,ry=Zh=hs=0,Qt=Ya=null,Ki!==null){for(e=0;e<Ki.length;e++)if(n=Ki[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Ki=null}return t}function zE(t,e){do{var n=Ye;try{if(Bg(),Ec.current=sh,ih){for(var r=De.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ih=!1}if(cs=0,it=Ze=De=null,Ka=!1,Eu=0,ny.current=null,n===null||n.return===null){et=1,ku=e,Ye=null;break}e:{var s=t,o=n.return,a=n,u=e;if(e=_t,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var l=u,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=c0(o);if(p!==null){p.flags&=-257,h0(p,o,a,s,e),p.mode&1&&l0(s,l,e),e=p,u=l;var y=e.updateQueue;if(y===null){var v=new Set;v.add(u),e.updateQueue=v}else y.add(u);break e}else{if(!(e&1)){l0(s,l,e),ay();break e}u=Error(x(426))}}else if(xe&&a.mode&1){var S=c0(o);if(S!==null){!(S.flags&65536)&&(S.flags|=256),h0(S,o,a,s,e),zg(No(u,a));break e}}s=u=No(u,a),et!==4&&(et=2),Ya===null?Ya=[s]:Ya.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=TE(s,u,e);n0(s,m);break e;case 1:a=u;var f=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(ni===null||!ni.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var _=kE(s,a,e);n0(s,_);break e}}s=s.return}while(s!==null)}qE(n)}catch(T){e=T,Ye===n&&n!==null&&(Ye=n=n.return);continue}break}while(1)}function jE(){var t=oh.current;return oh.current=sh,t===null?sh:t}function ay(){(et===0||et===3||et===2)&&(et=4),ot===null||!(hs&268435455)&&!(Zh&268435455)||qr(ot,_t)}function lh(t,e){var n=le;le|=2;var r=jE();(ot!==t||_t!==e)&&(hr=null,ts(t,e));do try{fb();break}catch(i){zE(t,i)}while(1);if(Bg(),le=n,oh.current=r,Ye!==null)throw Error(x(261));return ot=null,_t=0,et}function fb(){for(;Ye!==null;)BE(Ye)}function pb(){for(;Ye!==null&&!Ux();)BE(Ye)}function BE(t){var e=HE(t.alternate,t,sn);t.memoizedProps=t.pendingProps,e===null?qE(t):Ye=e,ny.current=null}function qE(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=ab(n,e),n!==null){n.flags&=32767,Ye=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{et=6,Ye=null;return}}else if(n=ob(n,e,sn),n!==null){Ye=n;return}if(e=e.sibling,e!==null){Ye=e;return}Ye=e=t}while(e!==null);et===0&&(et=5)}function Ui(t,e,n){var r=ye,i=En.transition;try{En.transition=null,ye=1,mb(t,e,n,r)}finally{En.transition=i,ye=r}return null}function mb(t,e,n,r){do mo();while(Kr!==null);if(le&6)throw Error(x(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(x(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Qx(t,s),t===ot&&(Ye=ot=null,_t=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Zl||(Zl=!0,WE(qc,function(){return mo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=En.transition,En.transition=null;var o=ye;ye=1;var a=le;le|=4,ny.current=null,lb(t,n),FE(n,t),$N(Gp),Hc=!!qp,Gp=qp=null,t.current=n,cb(n),Vx(),le=a,ye=o,En.transition=s}else t.current=n;if(Zl&&(Zl=!1,Kr=t,uh=i),s=t.pendingLanes,s===0&&(ni=null),Bx(n.stateNode),tn(t,Be()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ah)throw ah=!1,t=hm,hm=null,t;return uh&1&&t.tag!==0&&mo(),s=t.pendingLanes,s&1?t===dm?Xa++:(Xa=0,dm=t):Xa=0,Ci(),null}function mo(){if(Kr!==null){var t=SI(uh),e=En.transition,n=ye;try{if(En.transition=null,ye=16>t?16:t,Kr===null)var r=!1;else{if(t=Kr,Kr=null,uh=0,le&6)throw Error(x(331));var i=le;for(le|=4,z=t.current;z!==null;){var s=z,o=s.child;if(z.flags&16){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var l=a[u];for(z=l;z!==null;){var c=z;switch(c.tag){case 0:case 11:case 15:Qa(8,c,s)}var h=c.child;if(h!==null)h.return=c,z=h;else for(;z!==null;){c=z;var d=c.sibling,p=c.return;if($E(c),c===l){z=null;break}if(d!==null){d.return=p,z=d;break}z=p}}}var y=s.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var S=v.sibling;v.sibling=null,v=S}while(v!==null)}}z=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,z=o;else e:for(;z!==null;){if(s=z,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Qa(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,z=m;break e}z=s.return}}var f=t.current;for(z=f;z!==null;){o=z;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,z=g;else e:for(o=f;z!==null;){if(a=z,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Jh(9,a)}}catch(T){Me(a,a.return,T)}if(a===o){z=null;break e}var _=a.sibling;if(_!==null){_.return=a.return,z=_;break e}z=a.return}}if(le=i,Ci(),er&&typeof er.onPostCommitFiberRoot=="function")try{er.onPostCommitFiberRoot(qh,t)}catch{}r=!0}return r}finally{ye=n,En.transition=e}}return!1}function T0(t,e,n){e=No(n,e),e=TE(t,e,1),t=ti(t,e,1),e=zt(),t!==null&&(rl(t,1,e),tn(t,e))}function Me(t,e,n){if(t.tag===3)T0(t,t,n);else for(;e!==null;){if(e.tag===3){T0(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ni===null||!ni.has(r))){t=No(n,t),t=kE(e,t,1),e=ti(e,t,1),t=zt(),e!==null&&(rl(e,1,t),tn(e,t));break}}e=e.return}}function gb(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=zt(),t.pingedLanes|=t.suspendedLanes&n,ot===t&&(_t&n)===n&&(et===4||et===3&&(_t&130023424)===_t&&500>Be()-iy?ts(t,0):ry|=n),tn(t,e)}function GE(t,e){e===0&&(t.mode&1?(e=Bl,Bl<<=1,!(Bl&130023424)&&(Bl=4194304)):e=1);var n=zt();t=Tr(t,e),t!==null&&(rl(t,e,n),tn(t,n))}function yb(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),GE(t,n)}function vb(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(x(314))}r!==null&&r.delete(e),GE(t,n)}var HE;HE=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Zt.current)Yt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Yt=!1,sb(t,e,n);Yt=!!(t.flags&131072)}else Yt=!1,xe&&e.flags&1048576&&QI(e,Zc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Tc(t,e),t=e.pendingProps;var i=ko(e,Ot.current);po(e,n),i=Xg(null,e,r,t,i,n);var s=Jg();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,en(r)?(s=!0,Xc(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Hg(e),i.updater=Yh,e.stateNode=i,i._reactInternals=e,em(e,r,t,n),e=rm(null,e,r,!0,s,n)):(e.tag=0,xe&&s&&Ug(e),Mt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Tc(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=_b(r),t=Nn(r,t),i){case 0:e=nm(null,e,r,t,n);break e;case 1:e=p0(null,e,r,t,n);break e;case 11:e=d0(null,e,r,t,n);break e;case 14:e=f0(null,e,r,Nn(r.type,t),n);break e}throw Error(x(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Nn(r,i),nm(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Nn(r,i),p0(t,e,r,i,n);case 3:e:{if(NE(e),t===null)throw Error(x(387));r=e.pendingProps,s=e.memoizedState,i=s.element,ZI(t,e),nh(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=No(Error(x(423)),e),e=m0(t,e,r,n,i);break e}else if(r!==i){i=No(Error(x(424)),e),e=m0(t,e,r,n,i);break e}else for(an=ei(e.stateNode.containerInfo.firstChild),cn=e,xe=!0,Rn=null,n=rE(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Co(),r===i){e=kr(t,e,n);break e}Mt(t,e,r,n)}e=e.child}return e;case 5:return iE(e),t===null&&Xp(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Hp(r,i)?o=null:s!==null&&Hp(r,s)&&(e.flags|=32),xE(t,e),Mt(t,e,o,n),e.child;case 6:return t===null&&Xp(e),null;case 13:return bE(t,e,n);case 4:return Wg(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ao(e,null,r,n):Mt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Nn(r,i),d0(t,e,r,i,n);case 7:return Mt(t,e,e.pendingProps,n),e.child;case 8:return Mt(t,e,e.pendingProps.children,n),e.child;case 12:return Mt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Ee(eh,r._currentValue),r._currentValue=o,s!==null)if(Ln(s.value,o)){if(s.children===i.children&&!Zt.current){e=kr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=wr(-1,n&-n),u.tag=2;var l=s.updateQueue;if(l!==null){l=l.shared;var c=l.pending;c===null?u.next=u:(u.next=c.next,c.next=u),l.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Jp(s.return,n,e),a.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(x(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Jp(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Mt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,po(e,n),i=Sn(i),r=r(i),e.flags|=1,Mt(t,e,r,n),e.child;case 14:return r=e.type,i=Nn(r,e.pendingProps),i=Nn(r.type,i),f0(t,e,r,i,n);case 15:return CE(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Nn(r,i),Tc(t,e),e.tag=1,en(r)?(t=!0,Xc(e)):t=!1,po(e,n),tE(e,r,i),em(e,r,i,n),rm(null,e,r,!0,t,n);case 19:return RE(t,e,n);case 22:return AE(t,e,n)}throw Error(x(156,e.tag))};function WE(t,e){return wI(t,e)}function wb(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _n(t,e,n,r){return new wb(t,e,n,r)}function uy(t){return t=t.prototype,!(!t||!t.isReactComponent)}function _b(t){if(typeof t=="function")return uy(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ag)return 11;if(t===xg)return 14}return 2}function ii(t,e){var n=t.alternate;return n===null?(n=_n(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ac(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")uy(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ws:return ns(n.children,i,s,e);case Cg:o=8,i|=8;break;case Tp:return t=_n(12,n,e,i|2),t.elementType=Tp,t.lanes=s,t;case kp:return t=_n(13,n,e,i),t.elementType=kp,t.lanes=s,t;case Cp:return t=_n(19,n,e,i),t.elementType=Cp,t.lanes=s,t;case nI:return ed(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case eI:o=10;break e;case tI:o=9;break e;case Ag:o=11;break e;case xg:o=14;break e;case zr:o=16,r=null;break e}throw Error(x(130,t==null?t:typeof t,""))}return e=_n(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ns(t,e,n,r){return t=_n(7,t,r,e),t.lanes=n,t}function ed(t,e,n,r){return t=_n(22,t,r,e),t.elementType=nI,t.lanes=n,t.stateNode={isHidden:!1},t}function Hf(t,e,n){return t=_n(6,t,null,e),t.lanes=n,t}function Wf(t,e,n){return e=_n(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Ib(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Af(0),this.expirationTimes=Af(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Af(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ly(t,e,n,r,i,s,o,a,u){return t=new Ib(t,e,n,a,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=_n(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Hg(s),t}function Eb(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Hs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function KE(t){if(!t)return ci;t=t._reactInternals;e:{if(Ns(t)!==t||t.tag!==1)throw Error(x(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(en(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(x(171))}if(t.tag===1){var n=t.type;if(en(n))return WI(t,n,e)}return e}function QE(t,e,n,r,i,s,o,a,u){return t=ly(n,r,!0,t,i,s,o,a,u),t.context=KE(null),n=t.current,r=zt(),i=ri(n),s=wr(r,i),s.callback=e??null,ti(n,s,i),t.current.lanes=i,rl(t,i,r),tn(t,r),t}function td(t,e,n,r){var i=e.current,s=zt(),o=ri(i);return n=KE(n),e.context===null?e.context=n:e.pendingContext=n,e=wr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=ti(i,e,o),t!==null&&($n(t,i,o,s),Ic(t,i,o)),o}function ch(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function k0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function cy(t,e){k0(t,e),(t=t.alternate)&&k0(t,e)}function Sb(){return null}var YE=typeof reportError=="function"?reportError:function(t){console.error(t)};function hy(t){this._internalRoot=t}nd.prototype.render=hy.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(x(409));td(t,e,null,null)};nd.prototype.unmount=hy.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ds(function(){td(null,t,null,null)}),e[Sr]=null}};function nd(t){this._internalRoot=t}nd.prototype.unstable_scheduleHydration=function(t){if(t){var e=CI();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Br.length&&e!==0&&e<Br[n].priority;n++);Br.splice(n,0,t),n===0&&xI(t)}};function dy(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function rd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function C0(){}function Tb(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var l=ch(o);s.call(l)}}var o=QE(e,r,t,0,null,!1,!1,"",C0);return t._reactRootContainer=o,t[Sr]=o.current,yu(t.nodeType===8?t.parentNode:t),ds(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var l=ch(u);a.call(l)}}var u=ly(t,0,!1,null,null,!1,!1,"",C0);return t._reactRootContainer=u,t[Sr]=u.current,yu(t.nodeType===8?t.parentNode:t),ds(function(){td(e,u,n,r)}),u}function id(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=ch(o);a.call(u)}}td(e,o,t,i)}else o=Tb(n,e,t,i,r);return ch(o)}TI=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Oa(e.pendingLanes);n!==0&&(Rg(e,n|1),tn(e,Be()),!(le&6)&&(bo=Be()+500,Ci()))}break;case 13:ds(function(){var r=Tr(t,1);if(r!==null){var i=zt();$n(r,t,1,i)}}),cy(t,1)}};Dg=function(t){if(t.tag===13){var e=Tr(t,134217728);if(e!==null){var n=zt();$n(e,t,134217728,n)}cy(t,134217728)}};kI=function(t){if(t.tag===13){var e=ri(t),n=Tr(t,e);if(n!==null){var r=zt();$n(n,t,e,r)}cy(t,e)}};CI=function(){return ye};AI=function(t,e){var n=ye;try{return ye=t,e()}finally{ye=n}};Lp=function(t,e,n){switch(e){case"input":if(Np(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Kh(r);if(!i)throw Error(x(90));iI(r),Np(r,i)}}}break;case"textarea":oI(t,n);break;case"select":e=n.value,e!=null&&lo(t,!!n.multiple,e,!1)}};fI=sy;pI=ds;var kb={usingClientEntryPoint:!1,Events:[sl,Xs,Kh,hI,dI,sy]},_a={findFiberByHostInstance:Wi,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Cb={bundleType:_a.bundleType,version:_a.version,rendererPackageName:_a.rendererPackageName,rendererConfig:_a.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Nr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=yI(t),t===null?null:t.stateNode},findFiberByHostInstance:_a.findFiberByHostInstance||Sb,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ec=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ec.isDisabled&&ec.supportsFiber)try{qh=ec.inject(Cb),er=ec}catch{}}pn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kb;pn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!dy(e))throw Error(x(200));return Eb(t,e,null,n)};pn.createRoot=function(t,e){if(!dy(t))throw Error(x(299));var n=!1,r="",i=YE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=ly(t,1,!1,null,null,n,!1,r,i),t[Sr]=e.current,yu(t.nodeType===8?t.parentNode:t),new hy(e)};pn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(x(188)):(t=Object.keys(t).join(","),Error(x(268,t)));return t=yI(e),t=t===null?null:t.stateNode,t};pn.flushSync=function(t){return ds(t)};pn.hydrate=function(t,e,n){if(!rd(e))throw Error(x(200));return id(null,t,e,!0,n)};pn.hydrateRoot=function(t,e,n){if(!dy(t))throw Error(x(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=YE;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=QE(e,null,t,1,n??null,i,!1,s,o),t[Sr]=e.current,yu(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new nd(e)};pn.render=function(t,e,n){if(!rd(e))throw Error(x(200));return id(null,t,e,!1,n)};pn.unmountComponentAtNode=function(t){if(!rd(t))throw Error(x(40));return t._reactRootContainer?(ds(function(){id(null,null,t,!1,function(){t._reactRootContainer=null,t[Sr]=null})}),!0):!1};pn.unstable_batchedUpdates=sy;pn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!rd(n))throw Error(x(200));if(t==null||t._reactInternals===void 0)throw Error(x(38));return id(t,e,n,!1,r)};pn.version="18.2.0-next-9e3b772b8-20220608";function XE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(XE)}catch(t){console.error(t)}}XE(),Q_.exports=pn;var Ab=Q_.exports,A0=Ab;Ep.createRoot=A0.createRoot,Ep.hydrateRoot=A0.hydrateRoot;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},xb=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},ZE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,l=u?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|l>>6,p=l&63;u||(p=64,o||(d=64)),r.push(n[c],n[h],n[d],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(JE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):xb(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const l=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||l==null||h==null)throw new Nb;const d=s<<2|a>>4;if(r.push(d),l!==64){const p=a<<4&240|l>>2;if(r.push(p),h!==64){const y=l<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Nb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const bb=function(t){const e=JE(t);return ZE.encodeByteArray(e,!0)},hh=function(t){return bb(t).replace(/\./g,"")},eS=function(t){try{return ZE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function dh(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Rb(n)||(t[n]=dh(t[n],e[n]));return t}function Rb(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Db(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pb=()=>Db().__FIREBASE_DEFAULTS__,Ob=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},$b=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&eS(t[1]);return e&&JSON.parse(e)},fy=()=>{try{return Pb()||Ob()||$b()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},tS=()=>{var t;return(t=fy())===null||t===void 0?void 0:t.config},Lb=t=>{var e;return(e=fy())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mb{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fb(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[hh(JSON.stringify(n)),hh(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ub(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Oe())}function py(){var t;const e=(t=fy())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Vb(){return typeof self=="object"&&self.self===self}function nS(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function my(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function rS(){const t=Oe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function zb(){return!py()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Cu(){try{return typeof indexedDB=="object"}catch{return!1}}function jb(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bb="FirebaseError";class jt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Bb,Object.setPrototypeOf(this,jt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,bs.prototype.create)}}class bs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?qb(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new jt(i,a,r)}}function qb(t,e){return t.replace(Gb,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Gb=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x0(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Hb(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function mm(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(N0(s)&&N0(o)){if(!mm(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function N0(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function io(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function La(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function iS(t,e){const n=new Wb(t,e);return n.subscribe.bind(n)}class Wb{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Kb(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Kf),i.error===void 0&&(i.error=Kf),i.complete===void 0&&(i.complete=Kf);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Kb(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Kf(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(t){return t&&t._delegate?t._delegate:t}class sr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qb{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Mb;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Xb(e))try{this.getOrInitializeService({instanceIdentifier:Vi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Vi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Vi){return this.instances.has(e)}getOptions(e=Vi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Yb(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Vi){return this.component?this.component.multipleInstances?e:Vi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Yb(t){return t===Vi?void 0:t}function Xb(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Qb(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gy=[];var oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(oe||(oe={}));const sS={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},Zb=oe.INFO,eR={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},tR=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=eR[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class sd{constructor(e){this.name=e,this._logLevel=Zb,this._logHandler=tR,this._userLogHandler=null,gy.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?sS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...e),this._logHandler(this,oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...e),this._logHandler(this,oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...e),this._logHandler(this,oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...e),this._logHandler(this,oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...e),this._logHandler(this,oe.ERROR,...e)}}function nR(t){gy.forEach(e=>{e.setLogLevel(t)})}function rR(t,e){for(const n of gy){let r=null;e&&e.level&&(r=sS[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...o)=>{const a=o.map(u=>{if(u==null)return null;if(typeof u=="string")return u;if(typeof u=="number"||typeof u=="boolean")return u.toString();if(u instanceof Error)return u.message;try{return JSON.stringify(u)}catch{return null}}).filter(u=>u).join(" ");s>=(r??i.logLevel)&&t({level:oe[s].toLowerCase(),message:a,args:o,type:i.name})}}}const iR=(t,e)=>e.some(n=>t instanceof n);let b0,R0;function sR(){return b0||(b0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function oR(){return R0||(R0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const oS=new WeakMap,gm=new WeakMap,aS=new WeakMap,Qf=new WeakMap,yy=new WeakMap;function aR(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(si(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&oS.set(n,t)}).catch(()=>{}),yy.set(e,t),e}function uR(t){if(gm.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});gm.set(t,e)}let ym={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return gm.get(t);if(e==="objectStoreNames")return t.objectStoreNames||aS.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return si(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function lR(t){ym=t(ym)}function cR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Yf(this),e,...n);return aS.set(r,e.sort?e.sort():[e]),si(r)}:oR().includes(t)?function(...e){return t.apply(Yf(this),e),si(oS.get(this))}:function(...e){return si(t.apply(Yf(this),e))}}function hR(t){return typeof t=="function"?cR(t):(t instanceof IDBTransaction&&uR(t),iR(t,sR())?new Proxy(t,ym):t)}function si(t){if(t instanceof IDBRequest)return aR(t);if(Qf.has(t))return Qf.get(t);const e=hR(t);return e!==t&&(Qf.set(t,e),yy.set(e,t)),e}const Yf=t=>yy.get(t);function dR(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=si(o);return r&&o.addEventListener("upgradeneeded",u=>{r(si(o.result),u.oldVersion,u.newVersion,si(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const fR=["get","getKey","getAll","getAllKeys","count"],pR=["put","add","delete","clear"],Xf=new Map;function D0(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Xf.get(e))return Xf.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=pR.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||fR.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let l=u.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&u.done]))[0]};return Xf.set(e,s),s}lR(t=>({...t,get:(e,n,r)=>D0(e,n)||t.get(e,n,r),has:(e,n)=>!!D0(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(gR(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function gR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const vm="@firebase/app",P0="0.9.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fs=new sd("@firebase/app"),yR="@firebase/app-compat",vR="@firebase/analytics-compat",wR="@firebase/analytics",_R="@firebase/app-check-compat",IR="@firebase/app-check",ER="@firebase/auth",SR="@firebase/auth-compat",TR="@firebase/database",kR="@firebase/database-compat",CR="@firebase/functions",AR="@firebase/functions-compat",xR="@firebase/installations",NR="@firebase/installations-compat",bR="@firebase/messaging",RR="@firebase/messaging-compat",DR="@firebase/performance",PR="@firebase/performance-compat",OR="@firebase/remote-config",$R="@firebase/remote-config-compat",LR="@firebase/storage",MR="@firebase/storage-compat",FR="@firebase/firestore",UR="@firebase/firestore-compat",VR="firebase",zR="9.23.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hi="[DEFAULT]",jR={[vm]:"fire-core",[yR]:"fire-core-compat",[wR]:"fire-analytics",[vR]:"fire-analytics-compat",[IR]:"fire-app-check",[_R]:"fire-app-check-compat",[ER]:"fire-auth",[SR]:"fire-auth-compat",[TR]:"fire-rtdb",[kR]:"fire-rtdb-compat",[CR]:"fire-fn",[AR]:"fire-fn-compat",[xR]:"fire-iid",[NR]:"fire-iid-compat",[bR]:"fire-fcm",[RR]:"fire-fcm-compat",[DR]:"fire-perf",[PR]:"fire-perf-compat",[OR]:"fire-rc",[$R]:"fire-rc-compat",[LR]:"fire-gcs",[MR]:"fire-gcs-compat",[FR]:"fire-fst",[UR]:"fire-fst-compat","fire-js":"fire-js",[VR]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const di=new Map,Au=new Map;function fh(t,e){try{t.container.addComponent(e)}catch(n){fs.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function uS(t,e){t.container.addOrOverwriteComponent(e)}function fi(t){const e=t.name;if(Au.has(e))return fs.debug(`There were multiple attempts to register component ${e}.`),!1;Au.set(e,t);for(const n of di.values())fh(n,t);return!0}function lS(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function BR(t,e,n=hi){lS(t,e).clearInstance(n)}function qR(){Au.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GR={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},_r=new bs("app","Firebase",GR);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let HR=class{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new sr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw _r.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ai=zR;function vy(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:hi,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw _r.create("bad-app-name",{appName:String(i)});if(n||(n=tS()),!n)throw _r.create("no-options");const s=di.get(i);if(s){if(mm(n,s.options)&&mm(r,s.config))return s;throw _r.create("duplicate-app",{appName:i})}const o=new Jb(i);for(const u of Au.values())o.addComponent(u);const a=new HR(n,r,o);return di.set(i,a),a}function WR(t=hi){const e=di.get(t);if(!e&&t===hi&&tS())return vy();if(!e)throw _r.create("no-app",{appName:t});return e}function KR(){return Array.from(di.values())}async function cS(t){const e=t.name;di.has(e)&&(di.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function nr(t,e,n){var r;let i=(r=jR[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),fs.warn(a.join(" "));return}fi(new sr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function hS(t,e){if(t!==null&&typeof t!="function")throw _r.create("invalid-log-argument");rR(t,e)}function dS(t){nR(t)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QR="firebase-heartbeat-database",YR=1,xu="firebase-heartbeat-store";let Jf=null;function fS(){return Jf||(Jf=dR(QR,YR,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(xu)}}}).catch(t=>{throw _r.create("idb-open",{originalErrorMessage:t.message})})),Jf}async function XR(t){try{return await(await fS()).transaction(xu).objectStore(xu).get(pS(t))}catch(e){if(e instanceof jt)fs.warn(e.message);else{const n=_r.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});fs.warn(n.message)}}}async function O0(t,e){try{const r=(await fS()).transaction(xu,"readwrite");await r.objectStore(xu).put(e,pS(t)),await r.done}catch(n){if(n instanceof jt)fs.warn(n.message);else{const r=_r.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});fs.warn(r.message)}}}function pS(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JR=1024,ZR=30*24*60*60*1e3;class e2{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new n2(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=$0();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=ZR}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=$0(),{heartbeatsToSend:n,unsentEntries:r}=t2(this._heartbeatsCache.heartbeats),i=hh(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function $0(){return new Date().toISOString().substring(0,10)}function t2(t,e=JR){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),L0(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),L0(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class n2{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Cu()?jb().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await XR(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return O0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return O0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function L0(t){return hh(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r2(t){fi(new sr("platform-logger",e=>new mR(e),"PRIVATE")),fi(new sr("heartbeat",e=>new e2(e),"PRIVATE")),nr(vm,P0,t),nr(vm,P0,"esm2017"),nr("fire-js","")}r2("");const i2=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:jt,SDK_VERSION:Ai,_DEFAULT_ENTRY_NAME:hi,_addComponent:fh,_addOrOverwriteComponent:uS,_apps:di,_clearComponents:qR,_components:Au,_getProvider:lS,_registerComponent:fi,_removeServiceInstance:BR,deleteApp:cS,getApp:WR,getApps:KR,initializeApp:vy,onLog:hS,registerVersion:nr,setLogLevel:dS},Symbol.toStringTag,{value:"Module"}));function wy(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}const Ia={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},Us={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s2(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-password"]:"A non-empty password must be provided",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.",["missing-recaptcha-token"]:"The reCAPTCHA token is missing when sending request to the backend.",["invalid-recaptcha-token"]:"The reCAPTCHA token is invalid when sending request to the backend.",["invalid-recaptcha-action"]:"The reCAPTCHA action is invalid when sending request to the backend.",["recaptcha-not-enabled"]:"reCAPTCHA Enterprise integration is not enabled for this project.",["missing-client-type"]:"The reCAPTCHA client type is missing when sending request to the backend.",["missing-recaptcha-version"]:"The reCAPTCHA version is missing when sending request to the backend.",["invalid-req-type"]:"Invalid request parameters.",["invalid-recaptcha-version"]:"The reCAPTCHA version is invalid when sending request to the backend."}}function mS(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const o2=s2,a2=mS,gS=new bs("auth","Firebase",mS());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ph=new sd("@firebase/auth");function u2(t,...e){ph.logLevel<=oe.WARN&&ph.warn(`Auth (${Ai}): ${t}`,...e)}function xc(t,...e){ph.logLevel<=oe.ERROR&&ph.error(`Auth (${Ai}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(t,...e){throw _y(t,...e)}function It(t,...e){return _y(t,...e)}function yS(t,e,n){const r=Object.assign(Object.assign({},a2()),{[e]:n});return new bs("auth","Firebase",r).create(e,{appName:t.name})}function Xo(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Tt(t,"argument-error"),yS(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function _y(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return gS.create(t,...e)}function N(t,e,...n){if(!t)throw _y(e,...n)}function Kn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw xc(e),new Error(e)}function Mn(t,e){t||Kn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Iy(){return M0()==="http:"||M0()==="https:"}function M0(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Iy()||nS()||"connection"in navigator)?navigator.onLine:!0}function c2(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(e,n){this.shortDelay=e,this.longDelay=n,Mn(n>e,"Short delay should be less than long delay!"),this.isMobile=Ub()||my()}get(){return l2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ey(t,e){Mn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vS{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Kn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Kn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Kn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h2={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d2=new al(3e4,6e4);function Xe(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function tt(t,e,n,r,i={}){return wS(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Yo(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),vS.fetch()(_S(t,t.config.apiHost,n,a),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function wS(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},h2),e);try{const i=new f2(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ma(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,l]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ma(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Ma(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Ma(t,"user-disabled",o);const c=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw yS(t,c,l);Tt(t,c)}}catch(i){if(i instanceof jt)throw i;Tt(t,"network-request-failed",{message:String(i)})}}async function br(t,e,n,r,i={}){const s=await tt(t,e,n,r,i);return"mfaPendingCredential"in s&&Tt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function _S(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Ey(t.config,i):`${t.config.apiScheme}://${i}`}class f2{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(It(this.auth,"network-request-failed")),d2.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ma(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=It(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function p2(t,e){return tt(t,"POST","/v1/accounts:delete",e)}async function m2(t,e){return tt(t,"POST","/v1/accounts:update",e)}async function g2(t,e){return tt(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ja(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function y2(t,e=!1){const n=G(t),r=await n.getIdToken(e),i=od(r);N(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ja(Zf(i.auth_time)),issuedAtTime:Ja(Zf(i.iat)),expirationTime:Ja(Zf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Zf(t){return Number(t)*1e3}function od(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return xc("JWT malformed, contained fewer than 3 sections"),null;try{const i=eS(n);return i?JSON.parse(i):(xc("Failed to decode base64 JWT payload"),null)}catch(i){return xc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function v2(t){const e=od(t);return N(e,"internal-error"),N(typeof e.exp<"u","internal-error"),N(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof jt&&w2(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function w2({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _2{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IS{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ja(this.lastLoginAt),this.creationTime=Ja(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Cr(t,g2(n,{idToken:r}));N(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?S2(s.providerUserInfo):[],a=E2(t.providerData,o),u=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=u?l:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new IS(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function I2(t){const e=G(t);await bu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function E2(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function S2(t){return t.map(e=>{var{providerId:n}=e,r=wy(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function T2(t,e){const n=await wS(t,{},async()=>{const r=Yo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=_S(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",vS.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){N(e.idToken,"internal-error"),N(typeof e.idToken<"u","internal-error"),N(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):v2(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return N(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await T2(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ru;return r&&(N(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(N(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(N(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ru,this.toJSON())}_performRefresh(){return Kn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mr(t,e){N(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class rs{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=wy(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new _2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new IS(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Cr(this,this.stsTokenManager.getToken(this.auth,e));return N(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return y2(this,e)}reload(){return I2(this)}_assign(e){this!==e&&(N(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new rs(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){N(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await bu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Cr(this,p2(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,u,l,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,S=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,m=(l=n.createdAt)!==null&&l!==void 0?l:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:g,emailVerified:_,isAnonymous:T,providerData:A,stsTokenManager:b}=n;N(g&&b,e,"internal-error");const P=Ru.fromJSON(this.name,b);N(typeof g=="string",e,"internal-error"),Mr(h,e.name),Mr(d,e.name),N(typeof _=="boolean",e,"internal-error"),N(typeof T=="boolean",e,"internal-error"),Mr(p,e.name),Mr(y,e.name),Mr(v,e.name),Mr(S,e.name),Mr(m,e.name),Mr(f,e.name);const te=new rs({uid:g,auth:e,email:d,emailVerified:_,displayName:h,isAnonymous:T,photoURL:y,phoneNumber:p,tenantId:v,stsTokenManager:P,createdAt:m,lastLoginAt:f});return A&&Array.isArray(A)&&(te.providerData=A.map(W=>Object.assign({},W))),S&&(te._redirectEventId=S),te}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ru;i.updateFromServerResponse(n);const s=new rs({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await bu(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F0=new Map;function un(t){Mn(t instanceof Function,"Expected a class definition");let e=F0.get(t);return e?(Mn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,F0.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ES{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ES.type="NONE";const Ro=ES;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function is(t,e,n){return`firebase:${t}:${e}:${n}`}class go{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=is(this.userKey,i.apiKey,s),this.fullPersistenceKey=is("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?rs._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new go(un(Ro),e,r);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||un(Ro);const o=is(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const c=await l._get(o);if(c){const h=rs._fromJSON(e,c);l!==s&&(a=h),s=l;break}}catch{}const u=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new go(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new go(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U0(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(kS(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(SS(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(CS(e))return"Blackberry";if(AS(e))return"Webos";if(Sy(e))return"Safari";if((e.includes("chrome/")||TS(e))&&!e.includes("edge/"))return"Chrome";if(ul(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function SS(t=Oe()){return/firefox\//i.test(t)}function Sy(t=Oe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function TS(t=Oe()){return/crios\//i.test(t)}function kS(t=Oe()){return/iemobile/i.test(t)}function ul(t=Oe()){return/android/i.test(t)}function CS(t=Oe()){return/blackberry/i.test(t)}function AS(t=Oe()){return/webos/i.test(t)}function Jo(t=Oe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function k2(t=Oe()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function C2(t=Oe()){var e;return Jo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function A2(){return rS()&&document.documentMode===10}function xS(t=Oe()){return Jo(t)||ul(t)||AS(t)||CS(t)||/windows phone/i.test(t)||kS(t)}function x2(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NS(t,e=[]){let n;switch(t){case"Browser":n=U0(Oe());break;case"Worker":n=`${U0(Oe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ai}/${r}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function N2(t){return(await tt(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function bS(t,e){return tt(t,"GET","/v2/recaptchaConfig",Xe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V0(t){return t!==void 0&&t.getResponse!==void 0}function z0(t){return t!==void 0&&t.enterprise!==void 0}class RS{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b2(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Ty(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=It("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",b2().appendChild(r)})}function DS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const R2="https://www.google.com/recaptcha/enterprise.js?render=",D2="recaptcha-enterprise",P2="NO_RECAPTCHA";class PS{constructor(e){this.type=D2,this.auth=We(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{bS(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new RS(u);return s.tenantId==null?s._agentRecaptchaConfig=l:s._tenantRecaptchaConfigs[s.tenantId]=l,o(l.siteKey)}}).catch(u=>{a(u)})})}function i(s,o,a){const u=window.grecaptcha;z0(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(l=>{o(l)}).catch(()=>{o(P2)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&z0(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Ty(R2+a).then(()=>{i(a,s,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function pi(t,e,n,r=!1){const i=new PS(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O2{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const u=e(s);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $2{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new j0(this),this.idTokenSubscription=new j0(this),this.beforeStateQueue=new O2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=gS,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=un(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await go.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return N(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await bu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=c2()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?G(e):null;return n&&N(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&N(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(un(e))})}async initializeRecaptchaConfig(){const e=await bS(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new RS(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new PS(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new bs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&un(e)||this._popupRedirectResolver;N(n,this,"argument-error"),this.redirectPersistenceManager=await go.create(this,[un(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return N(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return N(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=NS(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&u2(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function We(t){return G(t)}class j0{constructor(e){this.auth=e,this.observer=null,this.addObserver=iS(n=>this.observer=n)}get next(){return N(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function L2(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(un);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function M2(t,e,n){const r=We(t);N(r._canInitEmulator,r,"emulator-config-failed"),N(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=OS(e),{host:o,port:a}=F2(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||U2()}function OS(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function F2(t){const e=OS(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:B0(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:B0(o)}}}function B0(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function U2(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Kn("not implemented")}_getIdTokenResponse(e){return Kn("not implemented")}_linkToIdToken(e,n){return Kn("not implemented")}_getReauthenticationResolver(e){return Kn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $S(t,e){return tt(t,"POST","/v1/accounts:resetPassword",Xe(t,e))}async function LS(t,e){return tt(t,"POST","/v1/accounts:update",e)}async function V2(t,e){return tt(t,"POST","/v1/accounts:update",Xe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ep(t,e){return br(t,"POST","/v1/accounts:signInWithPassword",Xe(t,e))}async function ad(t,e){return tt(t,"POST","/v1/accounts:sendOobCode",Xe(t,e))}async function z2(t,e){return ad(t,e)}async function tp(t,e){return ad(t,e)}async function np(t,e){return ad(t,e)}async function j2(t,e){return ad(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B2(t,e){return br(t,"POST","/v1/accounts:signInWithEmailLink",Xe(t,e))}async function q2(t,e){return br(t,"POST","/v1/accounts:signInWithEmailLink",Xe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du extends Zo{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Du(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Du(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await pi(e,r,"signInWithPassword");return ep(e,i)}else return ep(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await pi(e,r,"signInWithPassword");return ep(e,s)}else return Promise.reject(i)});case"emailLink":return B2(e,{email:this._email,oobCode:this._password});default:Tt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return LS(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return q2(e,{idToken:n,email:this._email,oobCode:this._password});default:Tt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ir(t,e){return br(t,"POST","/v1/accounts:signInWithIdp",Xe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G2="http://localhost";class or extends Zo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new or(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Tt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=wy(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new or(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ir(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ir(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ir(e,n)}buildRequest(){const e={requestUri:G2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Yo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H2(t,e){return tt(t,"POST","/v1/accounts:sendVerificationCode",Xe(t,e))}async function W2(t,e){return br(t,"POST","/v1/accounts:signInWithPhoneNumber",Xe(t,e))}async function K2(t,e){const n=await br(t,"POST","/v1/accounts:signInWithPhoneNumber",Xe(t,e));if(n.temporaryProof)throw Ma(t,"account-exists-with-different-credential",n);return n}const Q2={USER_NOT_FOUND:"user-not-found"};async function Y2(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return br(t,"POST","/v1/accounts:signInWithPhoneNumber",Xe(t,n),Q2)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss extends Zo{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new ss({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new ss({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return W2(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return K2(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return Y2(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new ss({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X2(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function J2(t){const e=io(La(t)).link,n=e?io(La(e)).deep_link_id:null,r=io(La(t)).deep_link_id;return(r?io(La(r)).link:null)||r||n||e||t}class ud{constructor(e){var n,r,i,s,o,a;const u=io(La(e)),l=(n=u.apiKey)!==null&&n!==void 0?n:null,c=(r=u.oobCode)!==null&&r!==void 0?r:null,h=X2((i=u.mode)!==null&&i!==void 0?i:null);N(l&&c&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=c,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=u.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=J2(e);try{return new ud(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(){this.providerId=xi.PROVIDER_ID}static credential(e,n){return Du._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=ud.parseLink(n);return N(r,"argument-error"),Du._fromEmailAndCode(e,r.code,r.tenantId)}}xi.PROVIDER_ID="password";xi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";xi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea extends Rr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class yo extends ea{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return N("providerId"in n&&"signInMethod"in n,"argument-error"),or._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return N(e.idToken||e.accessToken,"argument-error"),or._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return yo.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return yo.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!n&&!s||!a)return null;try{return new yo(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn extends ea{constructor(){super("facebook.com")}static credential(e){return or._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Bn.credentialFromTaggedObject(e)}static credentialFromError(e){return Bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Bn.credential(e.oauthAccessToken)}catch{return null}}}Bn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Bn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn extends ea{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return or._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return qn.credential(n,r)}catch{return null}}}qn.GOOGLE_SIGN_IN_METHOD="google.com";qn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn extends ea{constructor(){super("github.com")}static credential(e){return or._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gn.credential(e.oauthAccessToken)}catch{return null}}}Gn.GITHUB_SIGN_IN_METHOD="github.com";Gn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z2="http://localhost";class Do extends Zo{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return Ir(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ir(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ir(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=n;return!r||!i||!s||r!==i?null:new Do(r,s)}static _create(e,n){return new Do(e,n)}buildRequest(){return{requestUri:Z2,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eD="saml.";class mh extends Rr{constructor(e){N(e.startsWith(eD),"argument-error"),super(e)}static credentialFromResult(e){return mh.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return mh.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=Do.fromJSON(e);return N(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return Do._create(r,n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn extends ea{constructor(){super("twitter.com")}static credential(e,n){return or._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Hn.credential(n,r)}catch{return null}}}Hn.TWITTER_SIGN_IN_METHOD="twitter.com";Hn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nc(t,e){return br(t,"POST","/v1/accounts:signUp",Xe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await rs._fromIdTokenResponse(e,r,i),o=q0(r);return new kn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=q0(r);return new kn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function q0(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tD(t){var e;const n=We(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new kn({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await Nc(n,{returnSecureToken:!0}),i=await kn._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh extends jt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,gh.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new gh(e,n,r,i)}}function MS(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?gh._fromErrorAndOperation(t,s,e,r):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FS(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nD(t,e){const n=G(t);await ld(!0,n,e);const{providerUserInfo:r}=await m2(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=FS(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function ky(t,e,n=!1){const r=await Cr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return kn._forOperation(t,"link",r)}async function ld(t,e,n){await bu(e);const r=FS(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";N(r.has(n)===t,e.auth,i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function US(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Cr(t,MS(r,i,e,t),n);N(s.idToken,r,"internal-error");const o=od(s.idToken);N(o,r,"internal-error");const{sub:a}=o;return N(t.uid===a,r,"user-mismatch"),kn._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Tt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VS(t,e,n=!1){const r="signIn",i=await MS(t,r,e),s=await kn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function cd(t,e){return VS(We(t),e)}async function zS(t,e){const n=G(t);return await ld(!1,n,e.providerId),ky(n,e)}async function jS(t,e){return US(G(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rD(t,e){return br(t,"POST","/v1/accounts:signInWithCustomToken",Xe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iD(t,e){const n=We(t),r=await rD(n,{token:e,returnSecureToken:!0}),i=await kn._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?Cy._fromServerResponse(e,n):"totpInfo"in n?Ay._fromServerResponse(e,n):Tt(e,"internal-error")}}class Cy extends ll{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new Cy(n)}}class Ay extends ll{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new Ay(n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vo(t,e,n){var r;N(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),N(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(N(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(N(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sD(t,e,n){var r;const i=We(t),s={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const o=await pi(i,s,"getOobCode",!0);n&&vo(i,o,n),await tp(i,o)}else n&&vo(i,s,n),await tp(i,s).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const a=await pi(i,s,"getOobCode",!0);n&&vo(i,a,n),await tp(i,a)}else return Promise.reject(o)})}async function oD(t,e,n){await $S(G(t),{oobCode:e,newPassword:n})}async function aD(t,e){await V2(G(t),{oobCode:e})}async function BS(t,e){const n=G(t),r=await $S(n,{oobCode:e}),i=r.requestType;switch(N(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":N(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":N(r.mfaInfo,n,"internal-error");default:N(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=ll._fromServerResponse(We(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function uD(t,e){const{data:n}=await BS(G(t),e);return n.email}async function lD(t,e,n){var r;const i=We(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const l=await pi(i,s,"signUpPassword");o=Nc(i,l)}else o=Nc(i,s).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const c=await pi(i,s,"signUpPassword");return Nc(i,c)}else return Promise.reject(l)});const a=await o.catch(l=>Promise.reject(l)),u=await kn._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(u.user),u}function cD(t,e,n){return cd(G(t),xi.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hD(t,e,n){var r;const i=We(t),s={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function o(a,u){N(u.handleCodeInApp,i,"argument-error"),u&&vo(i,a,u)}if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const a=await pi(i,s,"getOobCode",!0);o(a,n),await np(i,a)}else o(s,n),await np(i,s).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const u=await pi(i,s,"getOobCode",!0);o(u,n),await np(i,u)}else return Promise.reject(a)})}function dD(t,e){const n=ud.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function fD(t,e,n){const r=G(t),i=xi.credentialWithLink(e,n||Nu());return N(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),cd(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pD(t,e){return tt(t,"POST","/v1/accounts:createAuthUri",Xe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mD(t,e){const n=Iy()?Nu():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await pD(G(t),r);return i||[]}async function gD(t,e){const n=G(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&vo(n.auth,i,e);const{email:s}=await z2(n.auth,i);s!==t.email&&await t.reload()}async function yD(t,e,n){const r=G(t),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&vo(r.auth,s,n);const{email:o}=await j2(r.auth,s);o!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vD(t,e){return tt(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wD(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=G(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Cr(r,vD(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:u})=>u==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function _D(t,e){return qS(G(t),e,null)}function ID(t,e){return qS(G(t),null,e)}async function qS(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await Cr(t,LS(r,s));await t._updateTokensIfNecessary(o,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ED(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t!=null&&t.idToken)){const o=(n=(e=od(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new wo(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new SD(s,i);case"github.com":return new TD(s,i);case"google.com":return new kD(s,i);case"twitter.com":return new CD(s,i,t.screenName||null);case"custom":case"anonymous":return new wo(s,null);default:return new wo(s,r,i)}}class wo{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class GS extends wo{constructor(e,n,r,i){super(e,n,r),this.username=i}}class SD extends wo{constructor(e,n){super(e,"facebook.com",n)}}class TD extends GS{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class kD extends wo{constructor(e,n){super(e,"google.com",n)}}class CD extends GS{constructor(e,n,r){super(e,"twitter.com",n,r)}}function AD(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:ED(n)}function xD(t,e,n,r){return G(t).onAuthStateChanged(e,n,r)}class Yi{constructor(e,n,r){this.type=e,this.credential=n,this.auth=r}static _fromIdtoken(e,n){return new Yi("enroll",e,n)}static _fromMfaPendingCredential(e){return new Yi("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return Yi._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return Yi._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xy{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=We(e),i=n.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>ll._fromServerResponse(r,a));N(i.mfaPendingCredential,r,"internal-error");const o=Yi._fromMfaPendingCredential(i.mfaPendingCredential);return new xy(o,s,async a=>{const u=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const l=Object.assign(Object.assign({},i),{idToken:u.idToken,refreshToken:u.refreshToken});switch(n.operationType){case"signIn":const c=await kn._fromIdTokenResponse(r,n.operationType,l);return await r._updateCurrentUser(c.user),c;case"reauthenticate":return N(n.user,r,"internal-error"),kn._forOperation(n.user,n.operationType,l);default:Tt(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function ND(t,e){var n;const r=G(t),i=e;return N(e.customData.operationType,r,"argument-error"),N((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),xy._fromError(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bD(t,e){return tt(t,"POST","/v2/accounts/mfaEnrollment:start",Xe(t,e))}function RD(t,e){return tt(t,"POST","/v2/accounts/mfaEnrollment:finalize",Xe(t,e))}function DD(t,e){return tt(t,"POST","/v2/accounts/mfaEnrollment:withdraw",Xe(t,e))}class Ny{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>ll._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new Ny(e)}async getSession(){return Yi._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,n){const r=e,i=await this.getSession(),s=await Cr(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await Cr(this.user,DD(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==n),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const rp=new WeakMap;function PD(t){const e=G(t);return rp.has(e)||rp.set(e,Ny._fromUser(e)),rp.get(e)}const yh="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HS{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(yh,"1"),this.storage.removeItem(yh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OD(){const t=Oe();return Sy(t)||Jo(t)}const $D=1e3,LD=10;class WS extends HS{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=OD()&&x2(),this.fallbackToPolling=xS(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);A2()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,LD):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},$D)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}WS.type="LOCAL";const by=WS;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KS extends HS{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}KS.type="SESSION";const ps=KS;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MD(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new hd(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async l=>l(n.origin,s)),u=await MD(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}hd.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cl(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FD{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const l=cl("",20);i.port1.start();const c=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(){return window}function UD(t){Qe().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ry(){return typeof Qe().WorkerGlobalScope<"u"&&typeof Qe().importScripts=="function"}async function VD(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function zD(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function jD(){return Ry()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QS="firebaseLocalStorageDb",BD=1,vh="firebaseLocalStorage",YS="fbase_key";class hl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function dd(t,e){return t.transaction([vh],e?"readwrite":"readonly").objectStore(vh)}function qD(){const t=indexedDB.deleteDatabase(QS);return new hl(t).toPromise()}function wm(){const t=indexedDB.open(QS,BD);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(vh,{keyPath:YS})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(vh)?e(r):(r.close(),await qD(),e(await wm()))})})}async function G0(t,e,n){const r=dd(t,!0).put({[YS]:e,value:n});return new hl(r).toPromise()}async function GD(t,e){const n=dd(t,!1).get(e),r=await new hl(n).toPromise();return r===void 0?null:r.value}function H0(t,e){const n=dd(t,!0).delete(e);return new hl(n).toPromise()}const HD=800,WD=3;class XS{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await wm(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>WD)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ry()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=hd._getInstance(jD()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await VD(),!this.activeServiceWorker)return;this.sender=new FD(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||zD()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await wm();return await G0(e,yh,"1"),await H0(e,yh),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>G0(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>GD(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>H0(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=dd(i,!1).getAll();return new hl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),HD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}XS.type="LOCAL";const Pu=XS;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KD(t,e){return tt(t,"POST","/v2/accounts/mfaSignIn:start",Xe(t,e))}function QD(t,e){return tt(t,"POST","/v2/accounts/mfaSignIn:finalize",Xe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YD=500,XD=6e4,tc=1e12;class JD{constructor(e){this.auth=e,this.counter=tc,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new ZD(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||tc;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||tc;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||tc;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class ZD{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;N(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=eP(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},XD)},YD))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function eP(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ip=DS("rcb"),tP=new al(3e4,6e4),nP="https://www.google.com/recaptcha/api.js?";class rP{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=Qe().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return N(iP(n),e,"argument-error"),this.shouldResolveImmediately(n)&&V0(Qe().grecaptcha)?Promise.resolve(Qe().grecaptcha):new Promise((r,i)=>{const s=Qe().setTimeout(()=>{i(It(e,"network-request-failed"))},tP.get());Qe()[ip]=()=>{Qe().clearTimeout(s),delete Qe()[ip];const a=Qe().grecaptcha;if(!a||!V0(a)){i(It(e,"internal-error"));return}const u=a.render;a.render=(l,c)=>{const h=u(l,c);return this.counter++,h},this.hostLanguage=n,r(a)};const o=`${nP}?${Yo({onload:ip,render:"explicit",hl:n})}`;Ty(o).catch(()=>{clearTimeout(s),i(It(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=Qe().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function iP(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class sP{async load(e){return new JD(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JS="recaptcha",oP={theme:"light",type:"image"};let aP=class{constructor(e,n=Object.assign({},oP),r){this.parameters=n,this.type=JS,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=We(r),this.isInvisible=this.parameters.size==="invisible",N(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof e=="string"?document.getElementById(e):e;N(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new sP:new rP,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){N(!this.parameters.sitekey,this.auth,"argument-error"),N(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),N(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=Qe()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){N(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){N(Iy()&&!Ry(),this.auth,"internal-error"),await uP(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await N2(this.auth);N(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return N(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function uP(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dy{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=ss._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function lP(t,e,n){const r=We(t),i=await fd(r,e,G(n));return new Dy(i,s=>cd(r,s))}async function cP(t,e,n){const r=G(t);await ld(!1,r,"phone");const i=await fd(r.auth,e,G(n));return new Dy(i,s=>zS(r,s))}async function hP(t,e,n){const r=G(t),i=await fd(r.auth,e,G(n));return new Dy(i,s=>jS(r,s))}async function fd(t,e,n){var r;const i=await n.verify();try{N(typeof i=="string",t,"argument-error"),N(n.type===JS,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return N(o.type==="enroll",t,"internal-error"),(await bD(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{N(o.type==="signin",t,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return N(a,t,"missing-multi-factor-info"),(await KD(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await H2(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{n._reset()}}async function dP(t,e){await ky(G(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ms=class bc{constructor(e){this.providerId=bc.PROVIDER_ID,this.auth=We(e)}verifyPhoneNumber(e,n){return fd(this.auth,e,G(n))}static credential(e,n){return ss._fromVerification(e,n)}static credentialFromResult(e){const n=e;return bc.credentialFromTaggedObject(n)}static credentialFromError(e){return bc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?ss._fromTokenResponse(n,r):null}};ms.PROVIDER_ID="phone";ms.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rs(t,e){return e?un(e):(N(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Py extends Zo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ir(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ir(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ir(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function fP(t){return VS(t.auth,new Py(t),t.bypassAuthState)}function pP(t){const{auth:e,user:n}=t;return N(n,e,"internal-error"),US(n,new Py(t),t.bypassAuthState)}async function mP(t){const{auth:e,user:n}=t;return N(n,e,"internal-error"),ky(n,new Py(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZS{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return fP;case"linkViaPopup":case"linkViaRedirect":return mP;case"reauthViaPopup":case"reauthViaRedirect":return pP;default:Tt(this.auth,"internal-error")}}resolve(e){Mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gP=new al(2e3,1e4);async function yP(t,e,n){const r=We(t);Xo(t,e,Rr);const i=Rs(r,n);return new mr(r,"signInViaPopup",e,i).executeNotNull()}async function vP(t,e,n){const r=G(t);Xo(r.auth,e,Rr);const i=Rs(r.auth,n);return new mr(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function wP(t,e,n){const r=G(t);Xo(r.auth,e,Rr);const i=Rs(r.auth,n);return new mr(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class mr extends ZS{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,mr.currentPopupAction&&mr.currentPopupAction.cancel(),mr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return N(e,this.auth,"internal-error"),e}async onExecution(){Mn(this.filter.length===1,"Popup operations only handle one event");const e=cl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(It(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(It(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,mr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(It(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,gP.get())};e()}}mr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _P="pendingRedirect",Za=new Map;class IP extends ZS{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Za.get(this.auth._key());if(!e){try{const r=await EP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Za.set(this.auth._key(),e)}return this.bypassAuthState||Za.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function EP(t,e){const n=tT(e),r=eT(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function Oy(t,e){return eT(t)._set(tT(e),"true")}function SP(){Za.clear()}function $y(t,e){Za.set(t._key(),e)}function eT(t){return un(t._redirectPersistence)}function tT(t){return is(_P,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TP(t,e,n){return kP(t,e,n)}async function kP(t,e,n){const r=We(t);Xo(t,e,Rr),await r._initializationPromise;const i=Rs(r,n);return await Oy(i,r),i._openRedirect(r,e,"signInViaRedirect")}function CP(t,e,n){return AP(t,e,n)}async function AP(t,e,n){const r=G(t);Xo(r.auth,e,Rr),await r.auth._initializationPromise;const i=Rs(r.auth,n);await Oy(i,r.auth);const s=await nT(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function xP(t,e,n){return NP(t,e,n)}async function NP(t,e,n){const r=G(t);Xo(r.auth,e,Rr),await r.auth._initializationPromise;const i=Rs(r.auth,n);await ld(!1,r,e.providerId),await Oy(i,r.auth);const s=await nT(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function bP(t,e){return await We(t)._initializationPromise,pd(t,e,!1)}async function pd(t,e,n=!1){const r=We(t),i=Rs(r,e),o=await new IP(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function nT(t){const e=cl(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RP=10*60*1e3;class rT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!DP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!iT(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(It(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=RP&&this.cachedEventUids.clear(),this.cachedEventUids.has(W0(e))}saveEventToCache(e){this.cachedEventUids.add(W0(e)),this.lastProcessedEventTime=Date.now()}}function W0(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function iT({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function DP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return iT(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sT(t,e={}){return tt(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,OP=/^https?/;async function $P(t){if(t.config.emulator)return;const{authorizedDomains:e}=await sT(t);for(const n of e)try{if(LP(n))return}catch{}Tt(t,"unauthorized-domain")}function LP(t){const e=Nu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!OP.test(n))return!1;if(PP.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MP=new al(3e4,6e4);function K0(){const t=Qe().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function FP(t){return new Promise((e,n)=>{var r,i,s;function o(){K0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{K0(),n(It(t,"network-request-failed"))},timeout:MP.get()})}if(!((i=(r=Qe().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Qe().gapi)===null||s===void 0)&&s.load)o();else{const a=DS("iframefcb");return Qe()[a]=()=>{gapi.load?o():n(It(t,"network-request-failed"))},Ty(`https://apis.google.com/js/api.js?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw Rc=null,e})}let Rc=null;function UP(t){return Rc=Rc||FP(t),Rc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VP=new al(5e3,15e3),zP="__/auth/iframe",jP="emulator/auth/iframe",BP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},qP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function GP(t){const e=t.config;N(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ey(e,jP):`https://${t.config.authDomain}/${zP}`,r={apiKey:e.apiKey,appName:t.name,v:Ai},i=qP.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Yo(r).slice(1)}`}async function HP(t){const e=await UP(t),n=Qe().gapi;return N(n,t,"internal-error"),e.open({where:document.body,url:GP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:BP,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=It(t,"network-request-failed"),a=Qe().setTimeout(()=>{s(o)},VP.get());function u(){Qe().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},KP=500,QP=600,YP="_blank",XP="http://localhost";class Q0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function JP(t,e,n,r=KP,i=QP){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},WP),{width:r.toString(),height:i.toString(),top:s,left:o}),l=Oe().toLowerCase();n&&(a=TS(l)?YP:n),SS(l)&&(e=e||XP,u.scrollbars="yes");const c=Object.entries(u).reduce((d,[p,y])=>`${d}${p}=${y},`,"");if(C2(l)&&a!=="_self")return ZP(e||"",a),new Q0(null);const h=window.open(e||"",a,c);N(h,t,"popup-blocked");try{h.focus()}catch{}return new Q0(h)}function ZP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eO="__/auth/handler",tO="emulator/auth/handler",nO=encodeURIComponent("fac");async function _m(t,e,n,r,i,s){N(t.config.authDomain,t,"auth-domain-config-required"),N(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ai,eventId:i};if(e instanceof Rr){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Hb(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,h]of Object.entries(s||{}))o[c]=h}if(e instanceof ea){const c=e.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const u=await t._getAppCheckToken(),l=u?`#${nO}=${encodeURIComponent(u)}`:"";return`${rO(t)}?${Yo(a).slice(1)}${l}`}function rO({config:t}){return t.emulator?Ey(t,tO):`https://${t.authDomain}/${eO}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sp="webStorageSupport";class iO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ps,this._completeRedirectFn=pd,this._overrideRedirectResult=$y}async _openPopup(e,n,r,i){var s;Mn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await _m(e,n,r,Nu(),i);return JP(e,o,cl())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await _m(e,n,r,Nu(),i);return UD(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Mn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await HP(e),r=new rT(e);return n.register("authEvent",i=>(N(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(sp,{type:sp},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[sp];o!==void 0&&n(!!o),Tt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=$P(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return xS()||Sy()||Jo()}}const sO=iO;class oO{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return Kn("unexpected MultiFactorSessionType")}}}class Ly extends oO{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Ly(e)}_finalizeEnroll(e,n,r){return RD(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return QD(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class oT{constructor(){}static assertion(e){return Ly._fromCredential(e)}}oT.FACTOR_ID="phone";var Y0="@firebase/auth",X0="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aO{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){N(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uO(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function lO(t){fi(new sr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;N(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:NS(t)},l=new $2(r,i,s,u);return L2(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),fi(new sr("auth-internal",e=>{const n=We(e.getProvider("auth").getImmediate());return(r=>new aO(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),nr(Y0,X0,uO(t)),nr(Y0,X0,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cO=5*60;Lb("authIdTokenMaxAge");lO("Browser");/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function hO(t,e,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function a(c){try{l(r.next(c))}catch(h){o(h)}}function u(c){try{l(r.throw(c))}catch(h){o(h)}}function l(c){c.done?s(c.value):i(c.value).then(a,u)}l((r=r.apply(t,e||[])).next())})}function dO(t,e){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,i,s,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(l){return function(c){return u([l,c])}}function u(l){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(s=l[0]&2?i.return:l[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,l[1])).done)return s;switch(i=0,s&&(l=[l[0]&2,s.value]),l[0]){case 0:case 1:s=l;break;case 4:return n.label++,{value:l[1],done:!1};case 5:n.label++,i=l[1],l=[0];continue;case 7:l=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(l[0]===6||l[0]===2)){n=0;continue}if(l[0]===3&&(!s||l[1]>s[0]&&l[1]<s[3])){n.label=l[1];break}if(l[0]===6&&n.label<s[1]){n.label=s[1],s=l;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(l);break}s[2]&&n.ops.pop(),n.trys.pop();continue}l=e.call(t,n)}catch(c){l=[6,c],i=0}finally{r=s=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var so=function(){return so=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},so.apply(this,arguments)},aT=function(t){return{loading:t==null,value:t}},fO=function(){return function(t,e){switch(e.type){case"error":return so(so({},t),{error:e.error,loading:!1,value:void 0});case"reset":return aT(e.defaultValue);case"value":return so(so({},t),{error:void 0,loading:!1,value:e.value});default:return t}}},pO=function(t){var e=t?t():void 0,n=de.useReducer(fO(),aT(e)),r=n[0],i=n[1],s=de.useCallback(function(){var u=t?t():void 0;i({type:"reset",defaultValue:u})},[t]),o=de.useCallback(function(u){i({type:"error",error:u})},[]),a=de.useCallback(function(u){i({type:"value",value:u})},[]);return de.useMemo(function(){return{error:r.error,loading:r.loading,reset:s,setError:o,setValue:a,value:r.value}},[r.error,r.loading,s,o,a,r.value])},dl=function(t,e){var n=pO(function(){return t.currentUser}),r=n.error,i=n.loading,s=n.setError,o=n.setValue,a=n.value;return de.useEffect(function(){var u=xD(t,function(l){return hO(void 0,void 0,void 0,function(){var c;return dO(this,function(h){switch(h.label){case 0:if(!(e!=null&&e.onUserChanged))return[3,4];h.label=1;case 1:return h.trys.push([1,3,,4]),[4,e.onUserChanged(l)];case 2:return h.sent(),[3,4];case 3:return c=h.sent(),s(c),[3,4];case 4:return o(l),[2]}})})},s);return function(){u()}},[t]),[a,i,r]};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mO{constructor(e,n){this._delegate=e,this.firebase=n,fh(e,new sr("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),cS(this._delegate)))}_getService(e,n=hi){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=hi){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){fh(this._delegate,e)}_addOrOverwriteComponent(e){uS(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gO={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},J0=new bs("app-compat","Firebase",gO);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yO(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:nr,setLogLevel:dS,onLog:hS,apps:null,SDK_VERSION:Ai,INTERNAL:{registerComponent:a,removeApp:r,useAsService:u,modularAPIs:i2}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(l){delete e[l]}function i(l){if(l=l||hi,!x0(e,l))throw J0.create("no-app",{appName:l});return e[l]}i.App=t;function s(l,c={}){const h=vy(l,c);if(x0(e,h.name))return e[h.name];const d=new t(h,n);return e[h.name]=d,d}function o(){return Object.keys(e).map(l=>e[l])}function a(l){const c=l.name,h=c.replace("-compat","");if(fi(l)&&l.type==="PUBLIC"){const d=(p=i())=>{if(typeof p[h]!="function")throw J0.create("invalid-app-argument",{appName:c});return p[h]()};l.serviceProps!==void 0&&dh(d,l.serviceProps),n[h]=d,t.prototype[h]=function(...p){return this._getService.bind(this,c).apply(this,l.multipleInstances?p:[])}}return l.type==="PUBLIC"?n[h]:null}function u(l,c){return c==="serverAuth"?null:c}return n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uT(){const t=yO(mO);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:uT,extendNamespace:e,createSubscribe:iS,ErrorFactory:bs,deepExtend:dh});function e(n){dh(t,n)}return t}const vO=uT();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z0=new sd("@firebase/app-compat"),wO="@firebase/app-compat",_O="0.2.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IO(t){nr(wO,_O,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(Vb()&&self.firebase!==void 0){Z0.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&Z0.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const Ni=vO;IO();var EO="firebase",SO="9.23.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ni.registerVersion(EO,SO,"app-compat");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gs(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TO=2e3;async function kO(t,e,n){var r;const{BuildInfo:i}=gs();Mn(e.sessionId,"AuthEvent did not contain a session ID");const s=await bO(e.sessionId),o={};return Jo()?o.ibi=i.packageName:ul()?o.apn=i.packageName:Tt(t,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,_m(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function CO(t){const{BuildInfo:e}=gs(),n={};Jo()?n.iosBundleId=e.packageName:ul()?n.androidPackageName=e.packageName:Tt(t,"operation-not-supported-in-this-environment"),await sT(t,n)}function AO(t){const{cordova:e}=gs();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,k2()?"_blank":"_system","location=yes"),n(i)})})}async function xO(t,e,n){const{cordova:r}=gs();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function u(){var h;s();const d=(h=r.plugins.browsertab)===null||h===void 0?void 0:h.close;typeof d=="function"&&d(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function l(){a||(a=window.setTimeout(()=>{o(It(t,"redirect-cancelled-by-user"))},TO))}function c(){(document==null?void 0:document.visibilityState)==="visible"&&l()}e.addPassiveListener(u),document.addEventListener("resume",l,!1),ul()&&document.addEventListener("visibilitychange",c,!1),i=()=>{e.removePassiveListener(u),document.removeEventListener("resume",l,!1),document.removeEventListener("visibilitychange",c,!1),a&&window.clearTimeout(a)}})}finally{i()}}function NO(t){var e,n,r,i,s,o,a,u,l,c;const h=gs();N(typeof((e=h==null?void 0:h.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),N(typeof((n=h==null?void 0:h.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),N(typeof((s=(i=(r=h==null?void 0:h.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),N(typeof((u=(a=(o=h==null?void 0:h.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||u===void 0?void 0:u.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),N(typeof((c=(l=h==null?void 0:h.cordova)===null||l===void 0?void 0:l.InAppBrowser)===null||c===void 0?void 0:c.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function bO(t){const e=RO(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function RO(t){if(Mn(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DO=20;class PO extends rT{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function OO(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:MO(),postBody:null,tenantId:t.tenantId,error:It(t,"no-auth-event")}}function $O(t,e){return Im()._set(Em(t),e)}async function e1(t){const e=await Im()._get(Em(t));return e&&await Im()._remove(Em(t)),e}function LO(t,e){var n,r;const i=UO(e);if(i.includes("/__/auth/callback")){const s=Dc(i),o=s.firebaseError?FO(decodeURIComponent(s.firebaseError)):null,a=(r=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],u=a?It(a):null;return u?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:u,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function MO(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<DO;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function Im(){return un(by)}function Em(t){return is("authEvent",t.config.apiKey,t.name)}function FO(t){try{return JSON.parse(t)}catch{return null}}function UO(t){const e=Dc(t),n=e.link?decodeURIComponent(e.link):void 0,r=Dc(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return Dc(i).link||i||r||n||t}function Dc(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return io(n.join("?"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VO=500;class zO{constructor(){this._redirectPersistence=ps,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=pd,this._overrideRedirectResult=$y}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new PO(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){Tt(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){NO(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),SP(),await this._originValidation(e);const o=OO(e,r,i);await $O(e,o);const a=await kO(e,o,n),u=await AO(a);return xO(e,s,u)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=CO(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=gs(),o=setTimeout(async()=>{await e1(e),n.onEvent(t1())},VO),a=async c=>{clearTimeout(o);const h=await e1(e);let d=null;h&&(c!=null&&c.url)&&(d=LO(h,c.url)),n.onEvent(d||t1())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const u=i,l=`${s.packageName.toLowerCase()}://`;gs().handleOpenURL=async c=>{if(c.toLowerCase().startsWith(l)&&a({url:c}),typeof u=="function")try{u(c)}catch(h){console.error(h)}}}}const jO=zO;function t1(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:It("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BO(t,e){We(t)._logFramework(e)}var qO="@firebase/auth-compat",GO="0.4.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HO=1e3;function eu(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function WO(){return eu()==="http:"||eu()==="https:"}function lT(t=Oe()){return!!((eu()==="file:"||eu()==="ionic:"||eu()==="capacitor:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function KO(){return my()||py()}function QO(){return rS()&&(document==null?void 0:document.documentMode)===11}function YO(t=Oe()){return/Edge\/\d+/.test(t)}function XO(t=Oe()){return QO()||YO(t)}function cT(){try{const t=self.localStorage,e=cl();if(t)return t.setItem(e,"1"),t.removeItem(e),XO()?Cu():!0}catch{return My()&&Cu()}return!1}function My(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function op(){return(WO()||nS()||lT())&&!KO()&&cT()&&!My()}function hT(){return lT()&&typeof document<"u"}async function JO(){return hT()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},HO);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function ZO(){return typeof window<"u"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const on={LOCAL:"local",NONE:"none",SESSION:"session"},Ea=N,dT="persistence";function e$(t,e){if(Ea(Object.values(on).includes(e),t,"invalid-persistence-type"),my()){Ea(e!==on.SESSION,t,"unsupported-persistence-type");return}if(py()){Ea(e===on.NONE,t,"unsupported-persistence-type");return}if(My()){Ea(e===on.NONE||e===on.LOCAL&&Cu(),t,"unsupported-persistence-type");return}Ea(e===on.NONE||cT(),t,"unsupported-persistence-type")}async function Sm(t){await t._initializationPromise;const e=fT(),n=is(dT,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function t$(t,e){const n=fT();if(!n)return[];const r=is(dT,t,e);switch(n.getItem(r)){case on.NONE:return[Ro];case on.LOCAL:return[Pu,ps];case on.SESSION:return[ps];default:return[]}}function fT(){var t;try{return((t=ZO())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n$=N;class Qr{constructor(){this.browserResolver=un(sO),this.cordovaResolver=un(jO),this.underlyingResolver=null,this._redirectPersistence=ps,this._completeRedirectFn=pd,this._overrideRedirectResult=$y}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return hT()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return n$(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await JO();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pT(t){return t.unwrap()}function r$(t){return t.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i$(t){return mT(t)}function s$(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new o$(t,ND(t,e))}else if(r){const i=mT(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function mT(t){const{_tokenResponse:e}=t instanceof jt?t.customData:t;if(!e)return null;if(!(t instanceof jt)&&"temporaryProof"in e&&"phoneNumber"in e)return ms.credentialFromResult(t);const n=e.providerId;if(!n||n===Ia.PASSWORD)return null;let r;switch(n){case Ia.GOOGLE:r=qn;break;case Ia.FACEBOOK:r=Bn;break;case Ia.GITHUB:r=Gn;break;case Ia.TWITTER:r=Hn;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:u}=e;return!s&&!o&&!i&&!a?null:a?n.startsWith("saml.")?Do._create(n,a):or._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:i,accessToken:s}):new yo(n).credential({idToken:i,accessToken:s,rawNonce:u})}return t instanceof jt?r.credentialFromError(t):r.credentialFromResult(t)}function Wt(t,e){return e.catch(n=>{throw n instanceof jt&&s$(t,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:i$(n),additionalUserInfo:AD(n),user:gr.getOrCreate(i)}})}async function Tm(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>Wt(t,n.confirm(r))}}class o${constructor(e,n){this.resolver=n,this.auth=r$(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Wt(pT(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(e){this._delegate=e,this.multiFactor=PD(e)}static getOrCreate(e){return gr.USER_MAP.has(e)||gr.USER_MAP.set(e,new gr(e)),gr.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Wt(this.auth,zS(this._delegate,e))}async linkWithPhoneNumber(e,n){return Tm(this.auth,cP(this._delegate,e,n))}async linkWithPopup(e){return Wt(this.auth,wP(this._delegate,e,Qr))}async linkWithRedirect(e){return await Sm(We(this.auth)),xP(this._delegate,e,Qr)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Wt(this.auth,jS(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return Tm(this.auth,hP(this._delegate,e,n))}reauthenticateWithPopup(e){return Wt(this.auth,vP(this._delegate,e,Qr))}async reauthenticateWithRedirect(e){return await Sm(We(this.auth)),CP(this._delegate,e,Qr)}sendEmailVerification(e){return gD(this._delegate,e)}async unlink(e){return await nD(this._delegate,e),this}updateEmail(e){return _D(this._delegate,e)}updatePassword(e){return ID(this._delegate,e)}updatePhoneNumber(e){return dP(this._delegate,e)}updateProfile(e){return wD(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return yD(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}gr.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sa=N;class km{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;Sa(r,"invalid-api-key",{appName:e.name}),Sa(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?Qr:void 0;this._delegate=n.initialize({options:{persistence:a$(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(o2),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?gr.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){M2(this._delegate,e,n)}applyActionCode(e){return aD(this._delegate,e)}checkActionCode(e){return BS(this._delegate,e)}confirmPasswordReset(e,n){return oD(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return Wt(this._delegate,lD(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return mD(this._delegate,e)}isSignInWithEmailLink(e){return dD(this._delegate,e)}async getRedirectResult(){Sa(op(),this._delegate,"operation-not-supported-in-this-environment");const e=await bP(this._delegate,Qr);return e?Wt(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){BO(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:s,complete:o}=n1(e,n,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,n,r){const{next:i,error:s,complete:o}=n1(e,n,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,n){return hD(this._delegate,e,n)}sendPasswordResetEmail(e,n){return sD(this._delegate,e,n||void 0)}async setPersistence(e){e$(this._delegate,e);let n;switch(e){case on.SESSION:n=ps;break;case on.LOCAL:n=await un(Pu)._isAvailable()?Pu:by;break;case on.NONE:n=Ro;break;default:return Tt("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Wt(this._delegate,tD(this._delegate))}signInWithCredential(e){return Wt(this._delegate,cd(this._delegate,e))}signInWithCustomToken(e){return Wt(this._delegate,iD(this._delegate,e))}signInWithEmailAndPassword(e,n){return Wt(this._delegate,cD(this._delegate,e,n))}signInWithEmailLink(e,n){return Wt(this._delegate,fD(this._delegate,e,n))}signInWithPhoneNumber(e,n){return Tm(this._delegate,lP(this._delegate,e,n))}async signInWithPopup(e){return Sa(op(),this._delegate,"operation-not-supported-in-this-environment"),Wt(this._delegate,yP(this._delegate,e,Qr))}async signInWithRedirect(e){return Sa(op(),this._delegate,"operation-not-supported-in-this-environment"),await Sm(this._delegate),TP(this._delegate,e,Qr)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return uD(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}km.Persistence=on;function n1(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:o=>i(o&&gr.getOrCreate(o)),error:e,complete:n}}function a$(t,e){const n=t$(t,e);if(typeof self<"u"&&!n.includes(Pu)&&n.push(Pu),typeof window<"u")for(const r of[by,ps])n.includes(r)||n.push(r);return n.includes(Ro)||n.push(Ro),n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fy{constructor(){this.providerId="phone",this._delegate=new ms(pT(Ni.auth()))}static credential(e,n){return ms.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}Fy.PHONE_SIGN_IN_METHOD=ms.PHONE_SIGN_IN_METHOD;Fy.PROVIDER_ID=ms.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u$=N;class l${constructor(e,n,r=Ni.app()){var i;u$((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new aP(e,n,r.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c$="auth-compat";function h$(t){t.INTERNAL.registerComponent(new sr(c$,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new km(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Us.EMAIL_SIGNIN,PASSWORD_RESET:Us.PASSWORD_RESET,RECOVER_EMAIL:Us.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Us.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Us.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Us.VERIFY_EMAIL}},EmailAuthProvider:xi,FacebookAuthProvider:Bn,GithubAuthProvider:Gn,GoogleAuthProvider:qn,OAuthProvider:yo,SAMLAuthProvider:mh,PhoneAuthProvider:Fy,PhoneMultiFactorGenerator:oT,RecaptchaVerifier:l$,TwitterAuthProvider:Hn,Auth:km,AuthCredential:Zo,Error:jt}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(qO,GO)}h$(Ni);var d$=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},M,Uy=Uy||{},Y=d$||self;function md(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function fl(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function f$(t){return Object.prototype.hasOwnProperty.call(t,ap)&&t[ap]||(t[ap]=++p$)}var ap="closure_uid_"+(1e9*Math.random()>>>0),p$=0;function m$(t,e,n){return t.call.apply(t.bind,arguments)}function g$(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Dt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Dt=m$:Dt=g$,Dt.apply(null,arguments)}function nc(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function lt(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function bi(){this.s=this.s,this.o=this.o}var y$=0;bi.prototype.s=!1;bi.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),y$!=0)&&f$(this)};bi.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const gT=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Vy(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function r1(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(md(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function Pt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Pt.prototype.h=function(){this.defaultPrevented=!0};var v$=function(){if(!Y.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Y.addEventListener("test",()=>{},e),Y.removeEventListener("test",()=>{},e)}catch{}return t}();function Ou(t){return/^[\s\xa0]*$/.test(t)}function gd(){var t=Y.navigator;return t&&(t=t.userAgent)?t:""}function Wn(t){return gd().indexOf(t)!=-1}function zy(t){return zy[" "](t),t}zy[" "]=function(){};function w$(t,e){var n=hL;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var _$=Wn("Opera"),Po=Wn("Trident")||Wn("MSIE"),yT=Wn("Edge"),Cm=yT||Po,vT=Wn("Gecko")&&!(gd().toLowerCase().indexOf("webkit")!=-1&&!Wn("Edge"))&&!(Wn("Trident")||Wn("MSIE"))&&!Wn("Edge"),I$=gd().toLowerCase().indexOf("webkit")!=-1&&!Wn("Edge");function wT(){var t=Y.document;return t?t.documentMode:void 0}var Am;e:{var up="",lp=function(){var t=gd();if(vT)return/rv:([^\);]+)(\)|;)/.exec(t);if(yT)return/Edge\/([\d\.]+)/.exec(t);if(Po)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(I$)return/WebKit\/(\S+)/.exec(t);if(_$)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(lp&&(up=lp?lp[1]:""),Po){var cp=wT();if(cp!=null&&cp>parseFloat(up)){Am=String(cp);break e}}Am=up}var xm;if(Y.document&&Po){var i1=wT();xm=i1||parseInt(Am,10)||void 0}else xm=void 0;var E$=xm;function $u(t,e){if(Pt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(vT){e:{try{zy(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:S$[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&$u.$.h.call(this)}}lt($u,Pt);var S$={2:"touch",3:"pen",4:"mouse"};$u.prototype.h=function(){$u.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var pl="closure_listenable_"+(1e6*Math.random()|0),T$=0;function k$(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++T$,this.fa=this.ia=!1}function yd(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function jy(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function C$(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function _T(t){const e={};for(const n in t)e[n]=t[n];return e}const s1="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function IT(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<s1.length;s++)n=s1[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function vd(t){this.src=t,this.g={},this.h=0}vd.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=bm(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new k$(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function Nm(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=gT(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(yd(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function bm(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var By="closure_lm_"+(1e6*Math.random()|0),hp={};function ET(t,e,n,r,i){if(r&&r.once)return TT(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)ET(t,e[s],n,r,i);return null}return n=Hy(n),t&&t[pl]?t.O(e,n,fl(r)?!!r.capture:!!r,i):ST(t,e,n,!1,r,i)}function ST(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=fl(i)?!!i.capture:!!i,a=Gy(t);if(a||(t[By]=a=new vd(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=A$(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)v$||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(CT(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function A$(){function t(n){return e.call(t.src,t.listener,n)}const e=x$;return t}function TT(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)TT(t,e[s],n,r,i);return null}return n=Hy(n),t&&t[pl]?t.P(e,n,fl(r)?!!r.capture:!!r,i):ST(t,e,n,!0,r,i)}function kT(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)kT(t,e[s],n,r,i);else r=fl(r)?!!r.capture:!!r,n=Hy(n),t&&t[pl]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=bm(s,n,r,i),-1<n&&(yd(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Gy(t))&&(e=t.g[e.toString()],t=-1,e&&(t=bm(e,n,r,i)),(n=-1<t?e[t]:null)&&qy(n))}function qy(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[pl])Nm(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(CT(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Gy(e))?(Nm(n,t),n.h==0&&(n.src=null,e[By]=null)):yd(t)}}}function CT(t){return t in hp?hp[t]:hp[t]="on"+t}function x$(t,e){if(t.fa)t=!0;else{e=new $u(e,this);var n=t.listener,r=t.la||t.src;t.ia&&qy(t),t=n.call(r,e)}return t}function Gy(t){return t=t[By],t instanceof vd?t:null}var dp="__closure_events_fn_"+(1e9*Math.random()>>>0);function Hy(t){return typeof t=="function"?t:(t[dp]||(t[dp]=function(e){return t.handleEvent(e)}),t[dp])}function ut(){bi.call(this),this.i=new vd(this),this.S=this,this.J=null}lt(ut,bi);ut.prototype[pl]=!0;ut.prototype.removeEventListener=function(t,e,n,r){kT(this,t,e,n,r)};function Et(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new Pt(e,t);else if(e instanceof Pt)e.target=e.target||t;else{var i=e;e=new Pt(r,t),IT(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=rc(o,r,!0,e)&&i}if(o=e.g=t,i=rc(o,r,!0,e)&&i,i=rc(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=rc(o,r,!1,e)&&i}ut.prototype.N=function(){if(ut.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)yd(n[r]);delete t.g[e],t.h--}}this.J=null};ut.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};ut.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function rc(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,u=o.la||o.src;o.ia&&Nm(t.i,o),i=a.call(u,r)!==!1&&i}}return i&&!r.defaultPrevented}var Wy=Y.JSON.stringify;class N${constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function b$(){var t=Ky;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class R${constructor(){this.h=this.g=null}add(e,n){const r=AT.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var AT=new N$(()=>new D$,t=>t.reset());class D${constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function P$(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function O$(t){Y.setTimeout(()=>{throw t},0)}let Lu,Mu=!1,Ky=new R$,xT=()=>{const t=Y.Promise.resolve(void 0);Lu=()=>{t.then($$)}};var $$=()=>{for(var t;t=b$();){try{t.h.call(t.g)}catch(n){O$(n)}var e=AT;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Mu=!1};function wd(t,e){ut.call(this),this.h=t||1,this.g=e||Y,this.j=Dt(this.qb,this),this.l=Date.now()}lt(wd,ut);M=wd.prototype;M.ga=!1;M.T=null;M.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Et(this,"tick"),this.ga&&(Qy(this),this.start()))}};M.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Qy(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}M.N=function(){wd.$.N.call(this),Qy(this),delete this.g};function Yy(t,e,n){if(typeof t=="function")n&&(t=Dt(t,n));else if(t&&typeof t.handleEvent=="function")t=Dt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Y.setTimeout(t,e||0)}function NT(t){t.g=Yy(()=>{t.g=null,t.i&&(t.i=!1,NT(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class L$ extends bi{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:NT(this)}N(){super.N(),this.g&&(Y.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Fu(t){bi.call(this),this.h=t,this.g={}}lt(Fu,bi);var o1=[];function bT(t,e,n,r){Array.isArray(n)||(n&&(o1[0]=n.toString()),n=o1);for(var i=0;i<n.length;i++){var s=ET(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function RT(t){jy(t.g,function(e,n){this.g.hasOwnProperty(n)&&qy(e)},t),t.g={}}Fu.prototype.N=function(){Fu.$.N.call(this),RT(this)};Fu.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function _d(){this.g=!0}_d.prototype.Ea=function(){this.g=!1};function M$(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),u=0;u<a.length;u++){var l=a[u].split("=");if(1<l.length){var c=l[0];l=l[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+l+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function F$(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function oo(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+V$(t,n)+(r?" "+r:"")})}function U$(t,e){t.info(function(){return"TIMEOUT: "+e})}_d.prototype.info=function(){};function V$(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Wy(n)}catch{return e}}var Ds={},a1=null;function Id(){return a1=a1||new ut}Ds.Ta="serverreachability";function DT(t){Pt.call(this,Ds.Ta,t)}lt(DT,Pt);function Uu(t){const e=Id();Et(e,new DT(e))}Ds.STAT_EVENT="statevent";function PT(t,e){Pt.call(this,Ds.STAT_EVENT,t),this.stat=e}lt(PT,Pt);function Vt(t){const e=Id();Et(e,new PT(e,t))}Ds.Ua="timingevent";function OT(t,e){Pt.call(this,Ds.Ua,t),this.size=e}lt(OT,Pt);function ml(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Y.setTimeout(function(){t()},e)}var Ed={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},$T={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Xy(){}Xy.prototype.h=null;function u1(t){return t.h||(t.h=t.i())}function LT(){}var gl={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Jy(){Pt.call(this,"d")}lt(Jy,Pt);function Zy(){Pt.call(this,"c")}lt(Zy,Pt);var Rm;function Sd(){}lt(Sd,Xy);Sd.prototype.g=function(){return new XMLHttpRequest};Sd.prototype.i=function(){return{}};Rm=new Sd;function yl(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Fu(this),this.P=z$,t=Cm?125:void 0,this.V=new wd(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new MT}function MT(){this.i=null,this.g="",this.h=!1}var z$=45e3,Dm={},wh={};M=yl.prototype;M.setTimeout=function(t){this.P=t};function Pm(t,e,n){t.L=1,t.v=kd(Ar(e)),t.s=n,t.S=!0,FT(t,null)}function FT(t,e){t.G=Date.now(),vl(t),t.A=Ar(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),HT(n.i,"t",r),t.C=0,n=t.l.J,t.h=new MT,t.g=fk(t.l,n?e:null,!t.s),0<t.O&&(t.M=new L$(Dt(t.Pa,t,t.g),t.O)),bT(t.U,t.g,"readystatechange",t.nb),e=t.I?_T(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Uu(),M$(t.j,t.u,t.A,t.m,t.W,t.s)}M.nb=function(t){t=t.target;const e=this.M;e&&Qn(t)==3?e.l():this.Pa(t)};M.Pa=function(t){try{if(t==this.g)e:{const c=Qn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||Cm||this.g&&(this.h.h||this.g.ja()||d1(this.g)))){this.J||c!=4||e==7||(e==8||0>=h?Uu(3):Uu(2)),Td(this);var n=this.g.da();this.ca=n;t:if(UT(this)){var r=d1(this.g);t="";var i=r.length,s=Qn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Xi(this),tu(this);var o="";break t}this.h.i=new Y.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,F$(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ou(a)){var l=a;break t}}l=null}if(n=l)oo(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Om(this,n);else{this.i=!1,this.o=3,Vt(12),Xi(this),tu(this);break e}}this.S?(VT(this,c,o),Cm&&this.i&&c==3&&(bT(this.U,this.V,"tick",this.mb),this.V.start())):(oo(this.j,this.m,o,null),Om(this,o)),c==4&&Xi(this),this.i&&!this.J&&(c==4?lk(this.l,this):(this.i=!1,vl(this)))}else uL(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Vt(12)):(this.o=0,Vt(13)),Xi(this),tu(this)}}}catch{}finally{}};function UT(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function VT(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=j$(t,n),i==wh){e==4&&(t.o=4,Vt(14),r=!1),oo(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Dm){t.o=4,Vt(15),oo(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else oo(t.j,t.m,i,null),Om(t,i);UT(t)&&i!=wh&&i!=Dm&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Vt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),sv(e),e.M=!0,Vt(11))):(oo(t.j,t.m,n,"[Invalid Chunked Response]"),Xi(t),tu(t))}M.mb=function(){if(this.g){var t=Qn(this.g),e=this.g.ja();this.C<e.length&&(Td(this),VT(this,t,e),this.i&&t!=4&&vl(this))}};function j$(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?wh:(n=Number(e.substring(n,r)),isNaN(n)?Dm:(r+=1,r+n>e.length?wh:(e=e.slice(r,r+n),t.C=r+n,e)))}M.cancel=function(){this.J=!0,Xi(this)};function vl(t){t.Y=Date.now()+t.P,zT(t,t.P)}function zT(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=ml(Dt(t.lb,t),e)}function Td(t){t.B&&(Y.clearTimeout(t.B),t.B=null)}M.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(U$(this.j,this.A),this.L!=2&&(Uu(),Vt(17)),Xi(this),this.o=2,tu(this)):zT(this,this.Y-t)};function tu(t){t.l.H==0||t.J||lk(t.l,t)}function Xi(t){Td(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Qy(t.V),RT(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Om(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||$m(n.i,t))){if(!t.K&&$m(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Eh(n),xd(n);else break e;iv(n),Vt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=ml(Dt(n.ib,n),6e3));if(1>=QT(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Ji(n,11)}else if((t.K||n.g==t)&&Eh(n),!Ou(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let l=i[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const c=l[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const y=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.i;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(ev(s,s.h),s.h=null))}if(r.F){const v=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.Da=v,Te(r.I,r.F,v))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=dk(r,r.J?r.pa:null,r.Y),o.K){YT(r.i,o);var a=o,u=r.L;u&&a.setTimeout(u),a.B&&(Td(a),vl(a)),r.g=o}else ak(r);0<n.j.length&&Nd(n)}else l[0]!="stop"&&l[0]!="close"||Ji(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Ji(n,7):rv(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}Uu(4)}catch{}}function B$(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(md(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function q$(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(md(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function jT(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(md(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=q$(t),r=B$(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var BT=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function G$(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function os(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof os){this.h=t.h,_h(this,t.j),this.s=t.s,this.g=t.g,Ih(this,t.m),this.l=t.l;var e=t.i,n=new Vu;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),l1(this,n),this.o=t.o}else t&&(e=String(t).match(BT))?(this.h=!1,_h(this,e[1]||"",!0),this.s=Fa(e[2]||""),this.g=Fa(e[3]||"",!0),Ih(this,e[4]),this.l=Fa(e[5]||"",!0),l1(this,e[6]||"",!0),this.o=Fa(e[7]||"")):(this.h=!1,this.i=new Vu(null,this.h))}os.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ua(e,c1,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ua(e,c1,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Ua(n,n.charAt(0)=="/"?K$:W$,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ua(n,Y$)),t.join("")};function Ar(t){return new os(t)}function _h(t,e,n){t.j=n?Fa(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ih(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function l1(t,e,n){e instanceof Vu?(t.i=e,X$(t.i,t.h)):(n||(e=Ua(e,Q$)),t.i=new Vu(e,t.h))}function Te(t,e,n){t.i.set(e,n)}function kd(t){return Te(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Fa(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ua(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,H$),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function H$(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var c1=/[#\/\?@]/g,W$=/[#\?:]/g,K$=/[#\?]/g,Q$=/[#\?@]/g,Y$=/#/g;function Vu(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ri(t){t.g||(t.g=new Map,t.h=0,t.i&&G$(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}M=Vu.prototype;M.add=function(t,e){Ri(this),this.i=null,t=ta(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function qT(t,e){Ri(t),e=ta(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function GT(t,e){return Ri(t),e=ta(t,e),t.g.has(e)}M.forEach=function(t,e){Ri(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};M.ta=function(){Ri(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};M.Z=function(t){Ri(this);let e=[];if(typeof t=="string")GT(this,t)&&(e=e.concat(this.g.get(ta(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};M.set=function(t,e){return Ri(this),this.i=null,t=ta(this,t),GT(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};M.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function HT(t,e,n){qT(t,e),0<n.length&&(t.i=null,t.g.set(ta(t,e),Vy(n)),t.h+=n.length)}M.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function ta(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function X$(t,e){e&&!t.j&&(Ri(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(qT(this,r),HT(this,i,n))},t)),t.j=e}var J$=class{constructor(t,e){this.g=t,this.map=e}};function WT(t){this.l=t||Z$,Y.PerformanceNavigationTiming?(t=Y.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Y.g&&Y.g.Ka&&Y.g.Ka()&&Y.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Z$=10;function KT(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function QT(t){return t.h?1:t.g?t.g.size:0}function $m(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function ev(t,e){t.g?t.g.add(e):t.h=e}function YT(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}WT.prototype.cancel=function(){if(this.i=XT(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function XT(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Vy(t.i)}var eL=class{stringify(t){return Y.JSON.stringify(t,void 0)}parse(t){return Y.JSON.parse(t,void 0)}};function tL(){this.g=new eL}function nL(t,e,n){const r=n||"";try{jT(t,function(i,s){let o=i;fl(i)&&(o=Wy(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function rL(t,e){const n=new _d;if(Y.Image){const r=new Image;r.onload=nc(ic,n,r,"TestLoadImage: loaded",!0,e),r.onerror=nc(ic,n,r,"TestLoadImage: error",!1,e),r.onabort=nc(ic,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=nc(ic,n,r,"TestLoadImage: timeout",!1,e),Y.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function ic(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function wl(t){this.l=t.fc||null,this.j=t.ob||!1}lt(wl,Xy);wl.prototype.g=function(){return new Cd(this.l,this.j)};wl.prototype.i=function(t){return function(){return t}}({});function Cd(t,e){ut.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=tv,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}lt(Cd,ut);var tv=0;M=Cd.prototype;M.open=function(t,e){if(this.readyState!=tv)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,zu(this)};M.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||Y).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};M.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,_l(this)),this.readyState=tv};M.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,zu(this)),this.g&&(this.readyState=3,zu(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof Y.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;JT(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function JT(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}M.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?_l(this):zu(this),this.readyState==3&&JT(this)}};M.Za=function(t){this.g&&(this.response=this.responseText=t,_l(this))};M.Ya=function(t){this.g&&(this.response=t,_l(this))};M.ka=function(){this.g&&_l(this)};function _l(t){t.readyState=4,t.l=null,t.j=null,t.A=null,zu(t)}M.setRequestHeader=function(t,e){this.v.append(t,e)};M.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};M.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function zu(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Cd.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var iL=Y.JSON.parse;function Ve(t){ut.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=ZT,this.L=this.M=!1}lt(Ve,ut);var ZT="",sL=/^https?$/i,oL=["POST","PUT"];M=Ve.prototype;M.Oa=function(t){this.M=t};M.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Rm.g(),this.C=this.u?u1(this.u):u1(Rm),this.g.onreadystatechange=Dt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){h1(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=Y.FormData&&t instanceof Y.FormData,!(0<=gT(oL,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{nk(this),0<this.B&&((this.L=aL(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Dt(this.ua,this)):this.A=Yy(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){h1(this,s)}};function aL(t){return Po&&typeof t.timeout=="number"&&t.ontimeout!==void 0}M.ua=function(){typeof Uy<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Et(this,"timeout"),this.abort(8))};function h1(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,ek(t),Ad(t)}function ek(t){t.F||(t.F=!0,Et(t,"complete"),Et(t,"error"))}M.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Et(this,"complete"),Et(this,"abort"),Ad(this))};M.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ad(this,!0)),Ve.$.N.call(this)};M.La=function(){this.s||(this.G||this.v||this.l?tk(this):this.kb())};M.kb=function(){tk(this)};function tk(t){if(t.h&&typeof Uy<"u"&&(!t.C[1]||Qn(t)!=4||t.da()!=2)){if(t.v&&Qn(t)==4)Yy(t.La,0,t);else if(Et(t,"readystatechange"),Qn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(BT)[1]||null;!i&&Y.self&&Y.self.location&&(i=Y.self.location.protocol.slice(0,-1)),r=!sL.test(i?i.toLowerCase():"")}n=r}if(n)Et(t,"complete"),Et(t,"success");else{t.m=6;try{var s=2<Qn(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",ek(t)}}finally{Ad(t)}}}}function Ad(t,e){if(t.g){nk(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Et(t,"ready");try{n.onreadystatechange=r}catch{}}}function nk(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(Y.clearTimeout(t.A),t.A=null)}M.isActive=function(){return!!this.g};function Qn(t){return t.g?t.g.readyState:0}M.da=function(){try{return 2<Qn(this)?this.g.status:-1}catch{return-1}};M.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};M.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),iL(e)}};function d1(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case ZT:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function uL(t){const e={};t=(t.g&&2<=Qn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Ou(t[r]))continue;var n=P$(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}C$(e,function(r){return r.join(", ")})}M.Ia=function(){return this.m};M.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function rk(t){let e="";return jy(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function nv(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=rk(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Te(t,e,n))}function Ta(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function ik(t){this.Ga=0,this.j=[],this.l=new _d,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Ta("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Ta("baseRetryDelayMs",5e3,t),this.hb=Ta("retryDelaySeedMs",1e4,t),this.eb=Ta("forwardChannelMaxRetries",2,t),this.xa=Ta("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new WT(t&&t.concurrentRequestLimit),this.Ja=new tL,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}M=ik.prototype;M.ra=8;M.H=1;function rv(t){if(sk(t),t.H==3){var e=t.W++,n=Ar(t.I);if(Te(n,"SID",t.K),Te(n,"RID",e),Te(n,"TYPE","terminate"),Il(t,n),e=new yl(t,t.l,e),e.L=2,e.v=kd(Ar(n)),n=!1,Y.navigator&&Y.navigator.sendBeacon)try{n=Y.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&Y.Image&&(new Image().src=e.v,n=!0),n||(e.g=fk(e.l,null),e.g.ha(e.v)),e.G=Date.now(),vl(e)}hk(t)}function xd(t){t.g&&(sv(t),t.g.cancel(),t.g=null)}function sk(t){xd(t),t.u&&(Y.clearTimeout(t.u),t.u=null),Eh(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&Y.clearTimeout(t.m),t.m=null)}function Nd(t){if(!KT(t.i)&&!t.m){t.m=!0;var e=t.Na;Lu||xT(),Mu||(Lu(),Mu=!0),Ky.add(e,t),t.C=0}}function lL(t,e){return QT(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=ml(Dt(t.Na,t,e),ck(t,t.C)),t.C++,!0)}M.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new yl(this,this.l,t);let s=this.s;if(this.U&&(s?(s=_T(s),IT(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=ok(this,i,e),n=Ar(this.I),Te(n,"RID",t),Te(n,"CVER",22),this.F&&Te(n,"X-HTTP-Session-Id",this.F),Il(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(rk(s)))+"&"+e:this.o&&nv(n,this.o,s)),ev(this.i,i),this.bb&&Te(n,"TYPE","init"),this.P?(Te(n,"$req",e),Te(n,"SID","null"),i.aa=!0,Pm(i,n,null)):Pm(i,n,e),this.H=2}}else this.H==3&&(t?f1(this,t):this.j.length==0||KT(this.i)||f1(this))};function f1(t,e){var n;e?n=e.m:n=t.W++;const r=Ar(t.I);Te(r,"SID",t.K),Te(r,"RID",n),Te(r,"AID",t.V),Il(t,r),t.o&&t.s&&nv(r,t.o,t.s),n=new yl(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=ok(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),ev(t.i,n),Pm(n,r,e)}function Il(t,e){t.na&&jy(t.na,function(n,r){Te(e,r,n)}),t.h&&jT({},function(n,r){Te(e,r,n)})}function ok(t,e,n){n=Math.min(t.j.length,n);var r=t.h?Dt(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let u=0;u<n;u++){let l=i[u].g;const c=i[u].map;if(l-=s,0>l)s=Math.max(0,i[u].g-100),a=!1;else try{nL(c,o,"req"+l+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function ak(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Lu||xT(),Mu||(Lu(),Mu=!0),Ky.add(e,t),t.A=0}}function iv(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=ml(Dt(t.Ma,t),ck(t,t.A)),t.A++,!0)}M.Ma=function(){if(this.u=null,uk(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=ml(Dt(this.jb,this),t)}};M.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Vt(10),xd(this),uk(this))};function sv(t){t.B!=null&&(Y.clearTimeout(t.B),t.B=null)}function uk(t){t.g=new yl(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Ar(t.wa);Te(e,"RID","rpc"),Te(e,"SID",t.K),Te(e,"AID",t.V),Te(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Te(e,"TO",t.qa),Te(e,"TYPE","xmlhttp"),Il(t,e),t.o&&t.s&&nv(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=kd(Ar(e)),n.s=null,n.S=!0,FT(n,t)}M.ib=function(){this.v!=null&&(this.v=null,xd(this),iv(this),Vt(19))};function Eh(t){t.v!=null&&(Y.clearTimeout(t.v),t.v=null)}function lk(t,e){var n=null;if(t.g==e){Eh(t),sv(t),t.g=null;var r=2}else if($m(t.i,e))n=e.F,YT(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=Id(),Et(r,new OT(r,n)),Nd(t)}else ak(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&lL(t,e)||r==2&&iv(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Ji(t,5);break;case 4:Ji(t,10);break;case 3:Ji(t,6);break;default:Ji(t,2)}}}function ck(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Ji(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=Dt(t.pb,t);n||(n=new os("//www.google.com/images/cleardot.gif"),Y.location&&Y.location.protocol=="http"||_h(n,"https"),kd(n)),rL(n.toString(),r)}else Vt(2);t.H=0,t.h&&t.h.za(e),hk(t),sk(t)}M.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Vt(2)):(this.l.info("Failed to ping google.com"),Vt(1))};function hk(t){if(t.H=0,t.ma=[],t.h){const e=XT(t.i);(e.length!=0||t.j.length!=0)&&(r1(t.ma,e),r1(t.ma,t.j),t.i.i.length=0,Vy(t.j),t.j.length=0),t.h.ya()}}function dk(t,e,n){var r=n instanceof os?Ar(n):new os(n);if(r.g!="")e&&(r.g=e+"."+r.g),Ih(r,r.m);else{var i=Y.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new os(null);r&&_h(s,r),e&&(s.g=e),i&&Ih(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&Te(r,n,e),Te(r,"VER",t.ra),Il(t,r),r}function fk(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Ve(new wl({ob:!0})):new Ve(t.va),e.Oa(t.J),e}M.isActive=function(){return!!this.h&&this.h.isActive(this)};function pk(){}M=pk.prototype;M.Ba=function(){};M.Aa=function(){};M.za=function(){};M.ya=function(){};M.isActive=function(){return!0};M.Va=function(){};function Sh(){if(Po&&!(10<=Number(E$)))throw Error("Environmental error: no available transport.")}Sh.prototype.g=function(t,e){return new dn(t,e)};function dn(t,e){ut.call(this),this.g=new ik(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Ou(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ou(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new na(this)}lt(dn,ut);dn.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Vt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=dk(t,null,t.Y),Nd(t)};dn.prototype.close=function(){rv(this.g)};dn.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Wy(t),t=n);e.j.push(new J$(e.fb++,t)),e.H==3&&Nd(e)};dn.prototype.N=function(){this.g.h=null,delete this.j,rv(this.g),delete this.g,dn.$.N.call(this)};function mk(t){Jy.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}lt(mk,Jy);function gk(){Zy.call(this),this.status=1}lt(gk,Zy);function na(t){this.g=t}lt(na,pk);na.prototype.Ba=function(){Et(this.g,"a")};na.prototype.Aa=function(t){Et(this.g,new mk(t))};na.prototype.za=function(t){Et(this.g,new gk)};na.prototype.ya=function(){Et(this.g,"b")};function cL(){this.blockSize=-1}function Fn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}lt(Fn,cL);Fn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function fp(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}Fn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)fp(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){fp(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){fp(this,r),i=0;break}}this.h=i,this.i+=e};Fn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function ve(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var hL={};function ov(t){return-128<=t&&128>t?w$(t,function(e){return new ve([e|0],0>e?-1:0)}):new ve([t|0],0>t?-1:0)}function Yn(t){if(isNaN(t)||!isFinite(t))return _o;if(0>t)return vt(Yn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Lm;return new ve(e,0)}function yk(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return vt(yk(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Yn(Math.pow(e,8)),r=_o,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=Yn(Math.pow(e,s)),r=r.R(s).add(Yn(o))):(r=r.R(n),r=r.add(Yn(o)))}return r}var Lm=4294967296,_o=ov(0),Mm=ov(1),p1=ov(16777216);M=ve.prototype;M.ea=function(){if(wn(this))return-vt(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Lm+r)*e,e*=Lm}return t};M.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(yr(this))return"0";if(wn(this))return"-"+vt(this).toString(t);for(var e=Yn(Math.pow(t,6)),n=this,r="";;){var i=kh(n,e).g;n=Th(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,yr(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};M.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function yr(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function wn(t){return t.h==-1}M.X=function(t){return t=Th(this,t),wn(t)?-1:yr(t)?0:1};function vt(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new ve(n,~t.h).add(Mm)}M.abs=function(){return wn(this)?vt(this):this};M.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new ve(n,n[n.length-1]&-2147483648?-1:0)};function Th(t,e){return t.add(vt(e))}M.R=function(t){if(yr(this)||yr(t))return _o;if(wn(this))return wn(t)?vt(this).R(vt(t)):vt(vt(this).R(t));if(wn(t))return vt(this.R(vt(t)));if(0>this.X(p1)&&0>t.X(p1))return Yn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,u=t.D(i)&65535;n[2*r+2*i]+=o*u,sc(n,2*r+2*i),n[2*r+2*i+1]+=s*u,sc(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,sc(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,sc(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new ve(n,0)};function sc(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function ka(t,e){this.g=t,this.h=e}function kh(t,e){if(yr(e))throw Error("division by zero");if(yr(t))return new ka(_o,_o);if(wn(t))return e=kh(vt(t),e),new ka(vt(e.g),vt(e.h));if(wn(e))return e=kh(t,vt(e)),new ka(vt(e.g),e.h);if(30<t.g.length){if(wn(t)||wn(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Mm,r=e;0>=r.X(t);)n=m1(n),r=m1(r);var i=Vs(n,1),s=Vs(r,1);for(r=Vs(r,2),n=Vs(n,2);!yr(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=Vs(r,1),n=Vs(n,1)}return e=Th(t,i.R(e)),new ka(i,e)}for(i=_o;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Yn(n),o=s.R(e);wn(o)||0<o.X(t);)n-=r,s=Yn(n),o=s.R(e);yr(s)&&(s=Mm),i=i.add(s),t=Th(t,o)}return new ka(i,t)}M.gb=function(t){return kh(this,t).h};M.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new ve(n,this.h&t.h)};M.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new ve(n,this.h|t.h)};M.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new ve(n,this.h^t.h)};function m1(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new ve(n,t.h)}function Vs(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new ve(i,t.h)}Sh.prototype.createWebChannel=Sh.prototype.g;dn.prototype.send=dn.prototype.u;dn.prototype.open=dn.prototype.m;dn.prototype.close=dn.prototype.close;Ed.NO_ERROR=0;Ed.TIMEOUT=8;Ed.HTTP_ERROR=6;$T.COMPLETE="complete";LT.EventType=gl;gl.OPEN="a";gl.CLOSE="b";gl.ERROR="c";gl.MESSAGE="d";ut.prototype.listen=ut.prototype.O;Ve.prototype.listenOnce=Ve.prototype.P;Ve.prototype.getLastError=Ve.prototype.Sa;Ve.prototype.getLastErrorCode=Ve.prototype.Ia;Ve.prototype.getStatus=Ve.prototype.da;Ve.prototype.getResponseJson=Ve.prototype.Wa;Ve.prototype.getResponseText=Ve.prototype.ja;Ve.prototype.send=Ve.prototype.ha;Ve.prototype.setWithCredentials=Ve.prototype.Oa;Fn.prototype.digest=Fn.prototype.l;Fn.prototype.reset=Fn.prototype.reset;Fn.prototype.update=Fn.prototype.j;ve.prototype.add=ve.prototype.add;ve.prototype.multiply=ve.prototype.R;ve.prototype.modulo=ve.prototype.gb;ve.prototype.compare=ve.prototype.X;ve.prototype.toNumber=ve.prototype.ea;ve.prototype.toString=ve.prototype.toString;ve.prototype.getBits=ve.prototype.D;ve.fromNumber=Yn;ve.fromString=yk;var dL=function(){return new Sh},fL=function(){return Id()},pp=Ed,pL=$T,mL=Ds,g1={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},gL=wl,oc=LT,yL=Ve,vL=Fn,Io=ve;const y1="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let st=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};st.UNAUTHENTICATED=new st(null),st.GOOGLE_CREDENTIALS=new st("google-credentials-uid"),st.FIRST_PARTY=new st("first-party-uid"),st.MOCK_USER=new st("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ra="9.23.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mi=new sd("@firebase/firestore");function Fm(){return mi.logLevel}function wL(t){mi.setLogLevel(t)}function C(t,...e){if(mi.logLevel<=oe.DEBUG){const n=e.map(av);mi.debug(`Firestore (${ra}): ${t}`,...n)}}function qe(t,...e){if(mi.logLevel<=oe.ERROR){const n=e.map(av);mi.error(`Firestore (${ra}): ${t}`,...n)}}function Un(t,...e){if(mi.logLevel<=oe.WARN){const n=e.map(av);mi.warn(`Firestore (${ra}): ${t}`,...n)}}function av(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(t="Unexpected state"){const e=`FIRESTORE (${ra}) INTERNAL ASSERTION FAILED: `+t;throw qe(e),new Error(e)}function q(t,e){t||U()}function _L(t,e){t||U()}function L(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};let k=class extends jt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let at=class{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vk=class{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}},IL=class{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(st.UNAUTHENTICATED))}shutdown(){}},EL=class{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}},SL=class{constructor(e){this.t=e,this.currentUser=st.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new at;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new at,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{C("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(C("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new at)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(C("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(q(typeof r.accessToken=="string"),new vk(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return q(e===null||typeof e=="string"),new st(e)}},TL=class{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=st.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}},kL=class{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new TL(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(st.FIRST_PARTY))}shutdown(){}invalidateToken(){}},CL=class{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}},AL=class{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const r=s=>{s.error!=null&&C("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,C("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{C("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?i(s):C("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(q(typeof n.token=="string"),this.T=n.token,new CL(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xL(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wk{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=xL(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function J(t,e){return t<e?-1:t>e?1:0}function Oo(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}function _k(t){return t+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new k(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new k(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new k(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new k(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return be.fromMillis(Date.now())}static fromDate(e){return be.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new be(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?J(this.nanoseconds,e.nanoseconds):J(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this.timestamp=e}static fromTimestamp(e){return new B(e)}static min(){return new B(new be(0,0))}static max(){return new B(new be(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(e,n,r){n===void 0?n=0:n>e.length&&U(),r===void 0?r=e.length-n:r>e.length-n&&U(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ju.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ju?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ae extends ju{construct(e,n,r){return new ae(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new k(I.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ae(n)}static emptyPath(){return new ae([])}}const NL=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ge extends ju{construct(e,n,r){return new Ge(e,n,r)}static isValidIdentifier(e){return NL.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ge.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ge(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new k(I.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new k(I.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new k(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new k(I.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ge(n)}static emptyPath(){return new Ge([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(e){this.path=e}static fromPath(e){return new R(ae.fromString(e))}static fromName(e){return new R(ae.fromString(e).popFirst(5))}static empty(){return new R(ae.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ae.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ae.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new R(new ae(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ik{constructor(e,n,r,i){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=i}}function Um(t){return t.fields.find(e=>e.kind===2)}function zi(t){return t.fields.filter(e=>e.kind!==2)}Ik.UNKNOWN_ID=-1;class bL{constructor(e,n){this.fieldPath=e,this.kind=n}}class Ch{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new Ch(0,fn.min())}}function Ek(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=B.fromTimestamp(r===1e9?new be(n+1,0):new be(n,r));return new fn(i,R.empty(),e)}function Sk(t){return new fn(t.readTime,t.key,-1)}class fn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new fn(B.min(),R.empty(),-1)}static max(){return new fn(B.max(),R.empty(),-1)}}function uv(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=R.comparator(t.documentKey,e.documentKey),n!==0?n:J(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tk="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class kk{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Di(t){if(t.code!==I.FAILED_PRECONDITION||t.message!==Tk)throw t;C("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&U(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new w((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof w?n:w.resolve(n)}catch(n){return w.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):w.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):w.reject(n)}static resolve(e){return new w((n,r)=>{n(e)})}static reject(e){return new w((n,r)=>{r(e)})}static waitFor(e){return new w((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=w.resolve(!1);for(const r of e)n=n.next(i=>i?w.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new w((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const l=u;n(e[l]).next(c=>{o[l]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new w((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.v=new at,this.transaction.oncomplete=()=>{this.v.resolve()},this.transaction.onabort=()=>{n.error?this.v.reject(new nu(e,n.error)):this.v.resolve()},this.transaction.onerror=r=>{const i=lv(r.target.error);this.v.reject(new nu(e,i))}}static open(e,n,r,i){try{return new bd(n,e.transaction(i,r))}catch(s){throw new nu(n,s)}}get R(){return this.v.promise}abort(e){e&&this.v.reject(e),this.aborted||(C("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}P(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new DL(n)}}class Dn{constructor(e,n,r){this.name=e,this.version=n,this.V=r,Dn.S(Oe())===12.2&&qe("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return C("SimpleDb","Removing database:",e),ji(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!Cu())return!1;if(Dn.C())return!0;const e=Oe(),n=Dn.S(e),r=0<n&&n<10,i=Dn.N(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static C(){var e;return typeof process<"u"&&((e=process.env)===null||e===void 0?void 0:e.k)==="YES"}static M(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static N(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async $(e){return this.db||(C("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new nu(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new k(I.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new k(I.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new nu(e,o))},i.onupgradeneeded=s=>{C("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.V.O(o,i.transaction,s.oldVersion,this.version).next(()=>{C("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.F&&(this.db.onversionchange=n=>this.F(n)),this.db}B(e){this.F=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.$(e);const a=bd.open(this.db,e,s?"readonly":"readwrite",r),u=i(a).next(l=>(a.P(),l)).catch(l=>(a.abort(l),w.reject(l))).toPromise();return u.catch(()=>{}),await a.R,u}catch(a){const u=a,l=u.name!=="FirebaseError"&&o<3;if(C("SimpleDb","Transaction failed with error:",u.message,"Retrying:",l),this.close(),!l)return Promise.reject(u)}}}close(){this.db&&this.db.close(),this.db=void 0}}class RL{constructor(e){this.L=e,this.q=!1,this.U=null}get isDone(){return this.q}get K(){return this.U}set cursor(e){this.L=e}done(){this.q=!0}G(e){this.U=e}delete(){return ji(this.L.delete())}}class nu extends k{constructor(e,n){super(I.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function Pi(t){return t.name==="IndexedDbTransactionError"}class DL{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(C("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(C("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),ji(r)}add(e){return C("SimpleDb","ADD",this.store.name,e,e),ji(this.store.add(e))}get(e){return ji(this.store.get(e)).next(n=>(n===void 0&&(n=null),C("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return C("SimpleDb","DELETE",this.store.name,e),ji(this.store.delete(e))}count(){return C("SimpleDb","COUNT",this.store.name),ji(this.store.count())}j(e,n){const r=this.options(e,n);if(r.index||typeof this.store.getAll!="function"){const i=this.cursor(r),s=[];return this.W(i,(o,a)=>{s.push(a)}).next(()=>s)}{const i=this.store.getAll(r.range);return new w((s,o)=>{i.onerror=a=>{o(a.target.error)},i.onsuccess=a=>{s(a.target.result)}})}}H(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new w((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}J(e,n){C("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.Y=!1;const i=this.cursor(r);return this.W(i,(s,o,a)=>a.delete())}X(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.W(i,n)}Z(e){const n=this.cursor({});return new w((r,i)=>{n.onerror=s=>{const o=lv(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}W(e,n){const r=[];return new w((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const u=new RL(a),l=n(a.primaryKey,a.value,u);if(l instanceof w){const c=l.catch(h=>(u.done(),w.reject(h)));r.push(c)}u.isDone?i():u.K===null?a.continue():a.continue(u.K)}}).next(()=>w.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.Y?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function ji(t){return new w((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=lv(r.target.error);n(i)}})}let v1=!1;function lv(t){const e=Dn.S(Oe());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new k("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return v1||(v1=!0,setTimeout(()=>{throw r},0)),r}}return t}class PL{constructor(e,n){this.asyncQueue=e,this.tt=n,this.task=null}start(){this.et(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}et(e){C("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{C("IndexBackiller",`Documents written: ${await this.tt.nt()}`)}catch(n){Pi(n)?C("IndexBackiller","Ignoring IndexedDB error during index backfill: ",n):await Di(n)}await this.et(6e4)})}}class OL{constructor(e,n){this.localStore=e,this.persistence=n}async nt(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.st(n,e))}st(e,n){const r=new Set;let i=n,s=!0;return w.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return C("IndexBackiller",`Processing collection: ${o}`),this.it(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>n-i)}it(e,n,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(i=>this.localStore.localDocuments.getNextDocuments(e,n,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.rt(i,s)).next(a=>(C("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,n,a))).next(()=>o.size)}))}rt(e,n){let r=e;return n.changes.forEach((i,s)=>{const o=Sk(s);uv(o,r)>0&&(r=o)}),new fn(r.readTime,r.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>n.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}Xt.ct=-1;function El(t){return t==null}function Bu(t){return t===0&&1/t==-1/0}function Ck(t){return typeof t=="number"&&Number.isInteger(t)&&!Bu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=w1(e)),e=$L(t.get(n),e);return w1(e)}function $L(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function w1(t){return t+""}function Xn(t){const e=t.length;if(q(e>=2),e===2)return q(t.charAt(0)===""&&t.charAt(1)===""),ae.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const o=t.indexOf("",s);switch((o<0||o>n)&&U(),t.charAt(o+1)){case"":const a=t.substring(s,o);let u;i.length===0?u=a:(i+=a,u=i,i=""),r.push(u);break;case"":i+=t.substring(s,o),i+="\0";break;case"":i+=t.substring(s,o+1);break;default:U()}s=o+2}return new ae(r)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _1=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pc(t,e){return[t,Bt(e)]}function Ak(t,e,n){return[t,Bt(e),n]}const LL={},ML=["prefixPath","collectionGroup","readTime","documentId"],FL=["prefixPath","collectionGroup","documentId"],UL=["collectionGroup","readTime","prefixPath","documentId"],VL=["canonicalId","targetId"],zL=["targetId","path"],jL=["path","targetId"],BL=["collectionId","parent"],qL=["indexId","uid"],GL=["uid","sequenceNumber"],HL=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],WL=["indexId","uid","orderedDocumentKey"],KL=["userId","collectionPath","documentId"],QL=["userId","collectionPath","largestBatchId"],YL=["userId","collectionGroup","largestBatchId"],xk=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],XL=[...xk,"documentOverlays"],Nk=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],bk=Nk,JL=[...bk,"indexConfiguration","indexState","indexEntries"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vm=class extends kk{constructor(e,n){super(),this.ht=e,this.currentSequenceNumber=n}};function ct(t,e){const n=L(t);return Dn.M(n.ht,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I1(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ps(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Rk(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $e=class zm{constructor(e,n){this.comparator=e,this.root=n||oi.EMPTY}insert(e,n){return new zm(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,oi.BLACK,null,null))}remove(e){return new zm(this.comparator,this.root.remove(e,this.comparator).copy(null,null,oi.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ac(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ac(this.root,e,this.comparator,!1)}getReverseIterator(){return new ac(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ac(this.root,e,this.comparator,!0)}};class ac{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}let oi=class cr{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??cr.RED,this.left=i??cr.EMPTY,this.right=s??cr.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new cr(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return cr.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return cr.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,cr.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,cr.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw U();const e=this.left.check();if(e!==this.right.check())throw U();return e+(this.isRed()?0:1)}};oi.EMPTY=null,oi.RED=!0,oi.BLACK=!1;oi.EMPTY=new class{constructor(){this.size=0}get key(){throw U()}get value(){throw U()}get color(){throw U()}get left(){throw U()}get right(){throw U()}copy(t,e,n,r,i){return this}insert(t,e,n){return new oi(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ue=class jm{constructor(e){this.comparator=e,this.data=new $e(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new E1(this.data.getIterator())}getIteratorFrom(e){return new E1(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof jm)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new jm(this.comparator);return n.data=e,n}},E1=class{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}};function zs(t){return t.hasNext()?t.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pn=class Bm{constructor(e){this.fields=e,e.sort(Ge.comparator)}static empty(){return new Bm([])}unionWith(e){let n=new Ue(Ge.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Bm(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Oo(this.fields,e.fields,(n,r)=>n.isEqual(r))}};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dk extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZL(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $t=class qm{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Dk("Invalid base64 string: "+i):i}}(e);return new qm(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new qm(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return J(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}};$t.EMPTY_BYTE_STRING=new $t("");const eM=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function gi(t){if(q(!!t),typeof t=="string"){let e=0;const n=eM.exec(t);if(q(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Fe(t.seconds),nanos:Fe(t.nanos)}}function Fe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function yi(t){return typeof t=="string"?$t.fromBase64String(t):$t.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rd(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function cv(t){const e=t.mapValue.fields.__previous_value__;return Rd(e)?cv(e):e}function qu(t){const e=gi(t.mapValue.fields.__local_write_time__.timestampValue);return new be(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tM=class{constructor(e,n,r,i,s,o,a,u,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=l}},Sl=class Gm{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Gm("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Gm&&e.projectId===this.projectId&&e.database===this.database}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Oc={nullValue:"NULL_VALUE"};function ys(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Rd(t)?4:Pk(t)?9007199254740991:10:U()}function ar(t,e){if(t===e)return!0;const n=ys(t);if(n!==ys(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return qu(t).isEqual(qu(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=gi(r.timestampValue),o=gi(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return yi(r.bytesValue).isEqual(yi(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return Fe(r.geoPointValue.latitude)===Fe(i.geoPointValue.latitude)&&Fe(r.geoPointValue.longitude)===Fe(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Fe(r.integerValue)===Fe(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=Fe(r.doubleValue),o=Fe(i.doubleValue);return s===o?Bu(s)===Bu(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return Oo(t.arrayValue.values||[],e.arrayValue.values||[],ar);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(I1(s)!==I1(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!ar(s[a],o[a])))return!1;return!0}(t,e);default:return U()}}function Gu(t,e){return(t.values||[]).find(n=>ar(n,e))!==void 0}function vi(t,e){if(t===e)return 0;const n=ys(t),r=ys(e);if(n!==r)return J(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return J(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=Fe(i.integerValue||i.doubleValue),a=Fe(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return S1(t.timestampValue,e.timestampValue);case 4:return S1(qu(t),qu(e));case 5:return J(t.stringValue,e.stringValue);case 6:return function(i,s){const o=yi(i),a=yi(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let u=0;u<o.length&&u<a.length;u++){const l=J(o[u],a[u]);if(l!==0)return l}return J(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=J(Fe(i.latitude),Fe(s.latitude));return o!==0?o:J(Fe(i.longitude),Fe(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let u=0;u<o.length&&u<a.length;++u){const l=vi(o[u],a[u]);if(l)return l}return J(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===Yr.mapValue&&s===Yr.mapValue)return 0;if(i===Yr.mapValue)return 1;if(s===Yr.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),u=s.fields||{},l=Object.keys(u);a.sort(),l.sort();for(let c=0;c<a.length&&c<l.length;++c){const h=J(a[c],l[c]);if(h!==0)return h;const d=vi(o[a[c]],u[l[c]]);if(d!==0)return d}return J(a.length,l.length)}(t.mapValue,e.mapValue);default:throw U()}}function S1(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return J(t,e);const n=gi(t),r=gi(e),i=J(n.seconds,r.seconds);return i!==0?i:J(n.nanos,r.nanos)}function $o(t){return Hm(t)}function Hm(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=gi(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?yi(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,R.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=Hm(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${Hm(r.fields[a])}`;return s+"}"}(t.mapValue):U();var e,n}function vs(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Wm(t){return!!t&&"integerValue"in t}function Hu(t){return!!t&&"arrayValue"in t}function T1(t){return!!t&&"nullValue"in t}function k1(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function $c(t){return!!t&&"mapValue"in t}function ru(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ps(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ru(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ru(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Pk(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function nM(t){return"nullValue"in t?Oc:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?vs(Sl.empty(),R.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?{mapValue:{}}:U()}function rM(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?vs(Sl.empty(),R.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?{mapValue:{}}:"mapValue"in t?Yr:U()}function C1(t,e){const n=vi(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function A1(t,e){const n=vi(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e){this.value=e}static empty(){return new wt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!$c(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ru(n)}setAll(e){let n=Ge.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=ru(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());$c(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return ar(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];$c(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Ps(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new wt(ru(this.value))}}function Ok(t){const e=[];return Ps(t.fields,(n,r)=>{const i=new Ge([n]);if($c(r)){const s=Ok(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Pn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ke(e,0,B.min(),B.min(),B.min(),wt.empty(),0)}static newFoundDocument(e,n,r,i){return new ke(e,1,n,B.min(),r,i,0)}static newNoDocument(e,n){return new ke(e,2,n,B.min(),B.min(),wt.empty(),0)}static newUnknownDocument(e,n){return new ke(e,3,n,B.min(),B.min(),wt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(B.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=wt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=B.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ke&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ke(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(e,n){this.position=e,this.inclusive=n}}function x1(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=R.comparator(R.fromName(o.referenceValue),n.key):r=vi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function N1(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ar(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(e,n="asc"){this.field=e,this.dir=n}}function iM(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $k{}class ne extends $k{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new sM(e,n,r):n==="array-contains"?new uM(e,r):n==="in"?new zk(e,r):n==="not-in"?new lM(e,r):n==="array-contains-any"?new cM(e,r):new ne(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new oM(e,r):new aM(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(vi(n,this.value)):n!==null&&ys(this.value)===ys(n)&&this.matchesComparison(vi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return U()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class ge extends $k{constructor(e,n){super(),this.filters=e,this.op=n,this.lt=null}static create(e,n){return new ge(e,n)}matches(e){return Lo(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(n=>n.isInequality());return e!==null?e.field:null}ft(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Lo(t){return t.op==="and"}function Km(t){return t.op==="or"}function hv(t){return Lk(t)&&Lo(t)}function Lk(t){for(const e of t.filters)if(e instanceof ge)return!1;return!0}function Qm(t){if(t instanceof ne)return t.field.canonicalString()+t.op.toString()+$o(t.value);if(hv(t))return t.filters.map(e=>Qm(e)).join(",");{const e=t.filters.map(n=>Qm(n)).join(",");return`${t.op}(${e})`}}function Mk(t,e){return t instanceof ne?function(n,r){return r instanceof ne&&n.op===r.op&&n.field.isEqual(r.field)&&ar(n.value,r.value)}(t,e):t instanceof ge?function(n,r){return r instanceof ge&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&Mk(s,r.filters[o]),!0):!1}(t,e):void U()}function Fk(t,e){const n=t.filters.concat(e);return ge.create(n,t.op)}function Uk(t){return t instanceof ne?function(e){return`${e.field.canonicalString()} ${e.op} ${$o(e.value)}`}(t):t instanceof ge?function(e){return e.op.toString()+" {"+e.getFilters().map(Uk).join(" ,")+"}"}(t):"Filter"}class sM extends ne{constructor(e,n,r){super(e,n,r),this.key=R.fromName(r.referenceValue)}matches(e){const n=R.comparator(e.key,this.key);return this.matchesComparison(n)}}class oM extends ne{constructor(e,n){super(e,"in",n),this.keys=Vk("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class aM extends ne{constructor(e,n){super(e,"not-in",n),this.keys=Vk("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Vk(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>R.fromName(r.referenceValue))}class uM extends ne{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Hu(n)&&Gu(n.arrayValue,this.value)}}class zk extends ne{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Gu(this.value.arrayValue,n)}}class lM extends ne{constructor(e,n){super(e,"not-in",n)}matches(e){if(Gu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Gu(this.value.arrayValue,n)}}class cM extends ne{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Hu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Gu(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hM{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.dt=null}}function Ym(t,e=null,n=[],r=[],i=null,s=null,o=null){return new hM(t,e,n,r,i,s,o)}function ws(t){const e=L(t);if(e.dt===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Qm(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),El(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>$o(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>$o(r)).join(",")),e.dt=n}return e.dt}function Tl(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!iM(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Mk(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!N1(t.startAt,e.startAt)&&N1(t.endAt,e.endAt)}function Ah(t){return R.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function xh(t,e){return t.filters.filter(n=>n instanceof ne&&n.field.isEqual(e))}function b1(t,e,n){let r=Oc,i=!0;for(const s of xh(t,e)){let o=Oc,a=!0;switch(s.op){case"<":case"<=":o=nM(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=Oc}C1({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];C1({value:r,inclusive:i},{value:o,inclusive:n.inclusive})<0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}function R1(t,e,n){let r=Yr,i=!0;for(const s of xh(t,e)){let o=Yr,a=!0;switch(s.op){case">=":case">":o=rM(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=Yr}A1({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];A1({value:r,inclusive:i},{value:o,inclusive:n.inclusive})>0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.wt=null,this._t=null,this.startAt,this.endAt}}function jk(t,e,n,r,i,s,o,a){return new Dr(t,e,n,r,i,s,o,a)}function ia(t){return new Dr(t)}function D1(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function dv(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Dd(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function fv(t){return t.collectionGroup!==null}function as(t){const e=L(t);if(e.wt===null){e.wt=[];const n=Dd(e),r=dv(e);if(n!==null&&r===null)n.isKeyField()||e.wt.push(new Eo(n)),e.wt.push(new Eo(Ge.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.wt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new Eo(Ge.keyField(),s))}}}return e.wt}function nn(t){const e=L(t);if(!e._t)if(e.limitType==="F")e._t=Ym(e.path,e.collectionGroup,as(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of as(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Eo(s.field,o))}const r=e.endAt?new wi(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new wi(e.startAt.position,e.startAt.inclusive):null;e._t=Ym(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e._t}function Xm(t,e){e.getFirstInequalityField(),Dd(t);const n=t.filters.concat([e]);return new Dr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Nh(t,e,n){return new Dr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function kl(t,e){return Tl(nn(t),nn(e))&&t.limitType===e.limitType}function Bk(t){return`${ws(nn(t))}|lt:${t.limitType}`}function Jm(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>Uk(r)).join(", ")}]`),El(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>$o(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>$o(r)).join(",")),`Target(${n})`}(nn(t))}; limitType=${t.limitType})`}function Cl(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):R.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of as(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=x1(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,as(n),r)||n.endAt&&!function(i,s,o){const a=x1(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,as(n),r))}(t,e)}function qk(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Gk(t){return(e,n)=>{let r=!1;for(const i of as(t)){const s=dM(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function dM(t,e,n){const r=t.field.isKeyField()?R.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),u=o.data.field(i);return a!==null&&u!==null?vi(a,u):U()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return U()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ps(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Rk(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fM=new $e(R.comparator);function Jt(){return fM}const Hk=new $e(R.comparator);function Va(...t){let e=Hk;for(const n of t)e=e.insert(n.key,n);return e}function Wk(t){let e=Hk;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Jn(){return iu()}function Kk(){return iu()}function iu(){return new Oi(t=>t.toString(),(t,e)=>t.isEqual(e))}const pM=new $e(R.comparator),mM=new Ue(R.comparator);function Z(...t){let e=mM;for(const n of t)e=e.add(n);return e}const gM=new Ue(J);function pv(){return gM}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qk(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Bu(e)?"-0":e}}function Yk(t){return{integerValue:""+t}}function Xk(t,e){return Ck(e)?Yk(e):Qk(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd{constructor(){this._=void 0}}function yM(t,e,n){return t instanceof Mo?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&Rd(i)&&(i=cv(i)),i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof _s?Zk(t,e):t instanceof Is?eC(t,e):function(r,i){const s=Jk(r,i),o=P1(s)+P1(r.gt);return Wm(s)&&Wm(r.gt)?Yk(o):Qk(r.serializer,o)}(t,e)}function vM(t,e,n){return t instanceof _s?Zk(t,e):t instanceof Is?eC(t,e):n}function Jk(t,e){return t instanceof Fo?Wm(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Mo extends Pd{}class _s extends Pd{constructor(e){super(),this.elements=e}}function Zk(t,e){const n=tC(e);for(const r of t.elements)n.some(i=>ar(i,r))||n.push(r);return{arrayValue:{values:n}}}class Is extends Pd{constructor(e){super(),this.elements=e}}function eC(t,e){let n=tC(e);for(const r of t.elements)n=n.filter(i=>!ar(i,r));return{arrayValue:{values:n}}}class Fo extends Pd{constructor(e,n){super(),this.serializer=e,this.gt=n}}function P1(t){return Fe(t.integerValue||t.doubleValue)}function tC(t){return Hu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(e,n){this.field=e,this.transform=n}}function wM(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof _s&&r instanceof _s||n instanceof Is&&r instanceof Is?Oo(n.elements,r.elements,ar):n instanceof Fo&&r instanceof Fo?ar(n.gt,r.gt):n instanceof Mo&&r instanceof Mo}(t.transform,e.transform)}class _M{constructor(e,n){this.version=e,this.transformResults=n}}class Ne{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ne}static exists(e){return new Ne(void 0,e)}static updateTime(e){return new Ne(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Lc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Od{}function nC(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new oa(t.key,Ne.none()):new sa(t.key,t.data,Ne.none());{const n=t.data,r=wt.empty();let i=new Ue(Ge.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Pr(t.key,r,new Pn(i.toArray()),Ne.none())}}function IM(t,e,n){t instanceof sa?function(r,i,s){const o=r.value.clone(),a=$1(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Pr?function(r,i,s){if(!Lc(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=$1(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(rC(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function su(t,e,n,r){return t instanceof sa?function(i,s,o,a){if(!Lc(i.precondition,s))return o;const u=i.value.clone(),l=L1(i.fieldTransforms,a,s);return u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Pr?function(i,s,o,a){if(!Lc(i.precondition,s))return o;const u=L1(i.fieldTransforms,a,s),l=s.data;return l.setAll(rC(i)),l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return Lc(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function EM(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=Jk(r.transform,i||null);s!=null&&(n===null&&(n=wt.empty()),n.set(r.field,s))}return n||null}function O1(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Oo(n,r,(i,s)=>wM(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class sa extends Od{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Pr extends Od{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function rC(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function $1(t,e,n){const r=new Map;q(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,vM(o,a,n[i]))}return r}function L1(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,yM(s,o,e))}return r}class oa extends Od{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class mv extends Od{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gv{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&IM(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=su(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=su(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Kk();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=nC(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(B.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Z())}isEqual(e){return this.batchId===e.batchId&&Oo(this.mutations,e.mutations,(n,r)=>O1(n,r))&&Oo(this.baseMutations,e.baseMutations,(n,r)=>O1(n,r))}}class yv{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){q(e.mutations.length===r.length);let i=pM;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new yv(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vv{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SM{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ke,se;function iC(t){switch(t){default:return U();case I.CANCELLED:case I.UNKNOWN:case I.DEADLINE_EXCEEDED:case I.RESOURCE_EXHAUSTED:case I.INTERNAL:case I.UNAVAILABLE:case I.UNAUTHENTICATED:return!1;case I.INVALID_ARGUMENT:case I.NOT_FOUND:case I.ALREADY_EXISTS:case I.PERMISSION_DENIED:case I.FAILED_PRECONDITION:case I.ABORTED:case I.OUT_OF_RANGE:case I.UNIMPLEMENTED:case I.DATA_LOSS:return!0}}function sC(t){if(t===void 0)return qe("GRPC error has no .code"),I.UNKNOWN;switch(t){case Ke.OK:return I.OK;case Ke.CANCELLED:return I.CANCELLED;case Ke.UNKNOWN:return I.UNKNOWN;case Ke.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case Ke.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case Ke.INTERNAL:return I.INTERNAL;case Ke.UNAVAILABLE:return I.UNAVAILABLE;case Ke.UNAUTHENTICATED:return I.UNAUTHENTICATED;case Ke.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case Ke.NOT_FOUND:return I.NOT_FOUND;case Ke.ALREADY_EXISTS:return I.ALREADY_EXISTS;case Ke.PERMISSION_DENIED:return I.PERMISSION_DENIED;case Ke.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case Ke.ABORTED:return I.ABORTED;case Ke.OUT_OF_RANGE:return I.OUT_OF_RANGE;case Ke.UNIMPLEMENTED:return I.UNIMPLEMENTED;case Ke.DATA_LOSS:return I.DATA_LOSS;default:return U()}}(se=Ke||(Ke={}))[se.OK=0]="OK",se[se.CANCELLED=1]="CANCELLED",se[se.UNKNOWN=2]="UNKNOWN",se[se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",se[se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",se[se.NOT_FOUND=5]="NOT_FOUND",se[se.ALREADY_EXISTS=6]="ALREADY_EXISTS",se[se.PERMISSION_DENIED=7]="PERMISSION_DENIED",se[se.UNAUTHENTICATED=16]="UNAUTHENTICATED",se[se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",se[se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",se[se.ABORTED=10]="ABORTED",se[se.OUT_OF_RANGE=11]="OUT_OF_RANGE",se[se.UNIMPLEMENTED=12]="UNIMPLEMENTED",se[se.INTERNAL=13]="INTERNAL",se[se.UNAVAILABLE=14]="UNAVAILABLE",se[se.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wv{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return uc}static getOrCreateInstance(){return uc===null&&(uc=new wv),uc}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let uc=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oC(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TM=new Io([4294967295,4294967295],0);function M1(t){const e=oC().encode(t),n=new vL;return n.update(e),new Uint8Array(n.digest())}function F1(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Io([n,r],0),new Io([i,s],0)]}class _v{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new za(`Invalid padding: ${n}`);if(r<0)throw new za(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new za(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new za(`Invalid padding when bitmap length is 0: ${n}`);this.It=8*e.length-n,this.Tt=Io.fromNumber(this.It)}Et(e,n,r){let i=e.add(n.multiply(Io.fromNumber(r)));return i.compare(TM)===1&&(i=new Io([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Tt).toNumber()}At(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}vt(e){if(this.It===0)return!1;const n=M1(e),[r,i]=F1(n);for(let s=0;s<this.hashCount;s++){const o=this.Et(r,i,s);if(!this.At(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new _v(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.It===0)return;const n=M1(e),[r,i]=F1(n);for(let s=0;s<this.hashCount;s++){const o=this.Et(r,i,s);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class za extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Nl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new xl(B.min(),i,new $e(J),Jt(),Z())}}class Nl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Nl(r,n,Z(),Z(),Z())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(e,n,r,i){this.Pt=e,this.removedTargetIds=n,this.key=r,this.bt=i}}class aC{constructor(e,n){this.targetId=e,this.Vt=n}}class uC{constructor(e,n,r=$t.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class U1{constructor(){this.St=0,this.Dt=z1(),this.Ct=$t.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=Z(),n=Z(),r=Z();return this.Dt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:U()}}),new Nl(this.Ct,this.xt,e,n,r)}Ft(){this.Nt=!1,this.Dt=z1()}Bt(e,n){this.Nt=!0,this.Dt=this.Dt.insert(e,n)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class kM{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=Jt(),this.zt=V1(),this.Wt=new $e(J)}Ht(e){for(const n of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(n,e.bt):this.Yt(n,e.key,e.bt);for(const n of e.removedTargetIds)this.Yt(n,e.key,e.bt)}Xt(e){this.forEachTarget(e,n=>{const r=this.Zt(n);switch(e.state){case 0:this.te(n)&&r.$t(e.resumeToken);break;case 1:r.Ut(),r.kt||r.Ft(),r.$t(e.resumeToken);break;case 2:r.Ut(),r.kt||this.removeTarget(n);break;case 3:this.te(n)&&(r.Kt(),r.$t(e.resumeToken));break;case 4:this.te(n)&&(this.ee(n),r.$t(e.resumeToken));break;default:U()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qt.forEach((r,i)=>{this.te(i)&&n(i)})}ne(e){var n;const r=e.targetId,i=e.Vt.count,s=this.se(r);if(s){const o=s.target;if(Ah(o))if(i===0){const a=new R(o.path);this.Yt(r,a,ke.newNoDocument(a,B.min()))}else q(i===1);else{const a=this.ie(r);if(a!==i){const u=this.re(e,a);if(u!==0){this.ee(r);const l=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(r,l)}(n=wv.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(l,c,h){var d,p,y,v,S,m;const f={localCacheCount:c,existenceFilterCount:h.count},g=h.unchangedNames;return g&&(f.bloomFilter={applied:l===0,hashCount:(d=g==null?void 0:g.hashCount)!==null&&d!==void 0?d:0,bitmapLength:(v=(y=(p=g==null?void 0:g.bits)===null||p===void 0?void 0:p.bitmap)===null||y===void 0?void 0:y.length)!==null&&v!==void 0?v:0,padding:(m=(S=g==null?void 0:g.bits)===null||S===void 0?void 0:S.padding)!==null&&m!==void 0?m:0}),f}(u,a,e.Vt))}}}}re(e,n){const{unchangedNames:r,count:i}=e.Vt;if(!r||!r.bits)return 1;const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let u,l;try{u=yi(s).toUint8Array()}catch(c){if(c instanceof Dk)return Un("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw c}try{l=new _v(u,o,a)}catch(c){return Un(c instanceof za?"BloomFilter error: ":"Applying bloom filter failed: ",c),1}return l.It===0?1:i!==n-this.oe(e.targetId,l)?2:0}oe(e,n){const r=this.Gt.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;n.vt(a)||(this.Yt(e,s,null),i++)}),i}ce(e){const n=new Map;this.Qt.forEach((s,o)=>{const a=this.se(o);if(a){if(s.current&&Ah(a.target)){const u=new R(a.target.path);this.jt.get(u)!==null||this.ae(o,u)||this.Yt(o,u,ke.newNoDocument(u,e))}s.Mt&&(n.set(o,s.Ot()),s.Ft())}});let r=Z();this.zt.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const l=this.se(u);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.jt.forEach((s,o)=>o.setReadTime(e));const i=new xl(e,n,this.Wt,this.jt,r);return this.jt=Jt(),this.zt=V1(),this.Wt=new $e(J),i}Jt(e,n){if(!this.te(e))return;const r=this.ae(e,n.key)?2:0;this.Zt(e).Bt(n.key,r),this.jt=this.jt.insert(n.key,n),this.zt=this.zt.insert(n.key,this.he(n.key).add(e))}Yt(e,n,r){if(!this.te(e))return;const i=this.Zt(e);this.ae(e,n)?i.Bt(n,1):i.Lt(n),this.zt=this.zt.insert(n,this.he(n).delete(e)),r&&(this.jt=this.jt.insert(n,r))}removeTarget(e){this.Qt.delete(e)}ie(e){const n=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let n=this.Qt.get(e);return n||(n=new U1,this.Qt.set(e,n)),n}he(e){let n=this.zt.get(e);return n||(n=new Ue(J),this.zt=this.zt.insert(e,n)),n}te(e){const n=this.se(e)!==null;return n||C("WatchChangeAggregator","Detected inactive target",e),n}se(e){const n=this.Qt.get(e);return n&&n.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new U1),this.Gt.getRemoteKeysForTarget(e).forEach(n=>{this.Yt(e,n,null)})}ae(e,n){return this.Gt.getRemoteKeysForTarget(e).has(n)}}function V1(){return new $e(R.comparator)}function z1(){return new $e(R.comparator)}const CM=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),AM=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),xM=(()=>({and:"AND",or:"OR"}))();class NM{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Zm(t,e){return t.useProto3Json||El(e)?e:{value:e}}function Uo(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function lC(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function bM(t,e){return Uo(t,e.toTimestamp())}function He(t){return q(!!t),B.fromTimestamp(function(e){const n=gi(e);return new be(n.seconds,n.nanos)}(t))}function Iv(t,e){return function(n){return new ae(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function cC(t){const e=ae.fromString(t);return q(wC(e)),e}function Wu(t,e){return Iv(t.databaseId,e.path)}function rr(t,e){const n=cC(e);if(n.get(1)!==t.databaseId.projectId)throw new k(I.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new k(I.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new R(dC(n))}function eg(t,e){return Iv(t.databaseId,e)}function hC(t){const e=cC(t);return e.length===4?ae.emptyPath():dC(e)}function Ku(t){return new ae(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function dC(t){return q(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function j1(t,e,n){return{name:Wu(t,e),fields:n.value.mapValue.fields}}function fC(t,e,n){const r=rr(t,e.name),i=He(e.updateTime),s=e.createTime?He(e.createTime):B.min(),o=new wt({mapValue:{fields:e.fields}}),a=ke.newFoundDocument(r,i,s,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function RM(t,e){return"found"in e?function(n,r){q(!!r.found),r.found.name,r.found.updateTime;const i=rr(n,r.found.name),s=He(r.found.updateTime),o=r.found.createTime?He(r.found.createTime):B.min(),a=new wt({mapValue:{fields:r.found.fields}});return ke.newFoundDocument(i,s,o,a)}(t,e):"missing"in e?function(n,r){q(!!r.missing),q(!!r.readTime);const i=rr(n,r.missing),s=He(r.readTime);return ke.newNoDocument(i,s)}(t,e):U()}function DM(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:U()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,l){return u.useProto3Json?(q(l===void 0||typeof l=="string"),$t.fromBase64String(l||"")):(q(l===void 0||l instanceof Uint8Array),$t.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const l=u.code===void 0?I.UNKNOWN:sC(u.code);return new k(l,u.message||"")}(o);n=new uC(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=rr(t,r.document.name),s=He(r.document.updateTime),o=r.document.createTime?He(r.document.createTime):B.min(),a=new wt({mapValue:{fields:r.document.fields}}),u=ke.newFoundDocument(i,s,o,a),l=r.targetIds||[],c=r.removedTargetIds||[];n=new Mc(l,c,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=rr(t,r.document),s=r.readTime?He(r.readTime):B.min(),o=ke.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Mc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=rr(t,r.document),s=r.removedTargetIds||[];n=new Mc([],s,i,null)}else{if(!("filter"in e))return U();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new SM(i,s),a=r.targetId;n=new aC(a,o)}}return n}function Qu(t,e){let n;if(e instanceof sa)n={update:j1(t,e.key,e.value)};else if(e instanceof oa)n={delete:Wu(t,e.key)};else if(e instanceof Pr)n={update:j1(t,e.key,e.data),updateMask:FM(e.fieldMask)};else{if(!(e instanceof mv))return U();n={verify:Wu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof Mo)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof _s)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Is)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Fo)return{fieldPath:s.field.canonicalString(),increment:o.gt};throw U()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:bM(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:U()}(t,e.precondition)),n}function tg(t,e){const n=e.currentDocument?function(i){return i.updateTime!==void 0?Ne.updateTime(He(i.updateTime)):i.exists!==void 0?Ne.exists(i.exists):Ne.none()}(e.currentDocument):Ne.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(s,o){let a=null;if("setToServerValue"in o)q(o.setToServerValue==="REQUEST_TIME"),a=new Mo;else if("appendMissingElements"in o){const l=o.appendMissingElements.values||[];a=new _s(l)}else if("removeAllFromArray"in o){const l=o.removeAllFromArray.values||[];a=new Is(l)}else"increment"in o?a=new Fo(s,o.increment):U();const u=Ge.fromServerFormat(o.fieldPath);return new Al(u,a)}(t,i)):[];if(e.update){e.update.name;const i=rr(t,e.update.name),s=new wt({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(a){const u=a.fieldPaths||[];return new Pn(u.map(l=>Ge.fromServerFormat(l)))}(e.updateMask);return new Pr(i,s,o,n,r)}return new sa(i,s,n,r)}if(e.delete){const i=rr(t,e.delete);return new oa(i,n)}if(e.verify){const i=rr(t,e.verify);return new mv(i,n)}return U()}function PM(t,e){return t&&t.length>0?(q(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?He(r.updateTime):He(i);return s.isEqual(B.min())&&(s=He(i)),new _M(s,r.transformResults||[])}(n,e))):[]}function pC(t,e){return{documents:[eg(t,e.path)]}}function mC(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=eg(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=eg(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(u){if(u.length!==0)return vC(ge.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(u){if(u.length!==0)return u.map(l=>function(c){return{field:Bs(c.field),direction:$M(c.dir)}}(l))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Zm(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),n}function gC(t){let e=hC(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){q(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(c){const h=yC(c);return h instanceof ge&&hv(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new Eo(qs(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,El(h)?null:h}(n.limit));let u=null;n.startAt&&(u=function(c){const h=!!c.before,d=c.values||[];return new wi(d,h)}(n.startAt));let l=null;return n.endAt&&(l=function(c){const h=!c.before,d=c.values||[];return new wi(d,h)}(n.endAt)),jk(e,i,o,s,a,"F",u,l)}function OM(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return U()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function yC(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=qs(e.unaryFilter.field);return ne.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=qs(e.unaryFilter.field);return ne.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=qs(e.unaryFilter.field);return ne.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=qs(e.unaryFilter.field);return ne.create(s,"!=",{nullValue:"NULL_VALUE"});default:return U()}}(t):t.fieldFilter!==void 0?function(e){return ne.create(qs(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return U()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return ge.create(e.compositeFilter.filters.map(n=>yC(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return U()}}(e.compositeFilter.op))}(t):U()}function $M(t){return CM[t]}function LM(t){return AM[t]}function MM(t){return xM[t]}function Bs(t){return{fieldPath:t.canonicalString()}}function qs(t){return Ge.fromServerFormat(t.fieldPath)}function vC(t){return t instanceof ne?function(e){if(e.op==="=="){if(k1(e.value))return{unaryFilter:{field:Bs(e.field),op:"IS_NAN"}};if(T1(e.value))return{unaryFilter:{field:Bs(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(k1(e.value))return{unaryFilter:{field:Bs(e.field),op:"IS_NOT_NAN"}};if(T1(e.value))return{unaryFilter:{field:Bs(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Bs(e.field),op:LM(e.op),value:e.value}}}(t):t instanceof ge?function(e){const n=e.getFilters().map(r=>vC(r));return n.length===1?n[0]:{compositeFilter:{op:MM(e.op),filters:n}}}(t):U()}function FM(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function wC(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(e,n,r,i,s=B.min(),o=B.min(),a=$t.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new vr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new vr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new vr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new vr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _C{constructor(e){this.fe=e}}function UM(t,e){let n;if(e.document)n=fC(t.fe,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=R.fromSegments(e.noDocument.path),i=Ss(e.noDocument.readTime);n=ke.newNoDocument(r,i),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return U();{const r=R.fromSegments(e.unknownDocument.path),i=Ss(e.unknownDocument.version);n=ke.newUnknownDocument(r,i)}}return e.readTime&&n.setReadTime(function(r){const i=new be(r[0],r[1]);return B.fromTimestamp(i)}(e.readTime)),n}function B1(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:bh(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(i,s){return{name:Wu(i,s.key),fields:s.data.value.mapValue.fields,updateTime:Uo(i,s.version.toTimestamp()),createTime:Uo(i,s.createTime.toTimestamp())}}(t.fe,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:Es(e.version)};else{if(!e.isUnknownDocument())return U();r.unknownDocument={path:n.path.toArray(),version:Es(e.version)}}return r}function bh(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function Es(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Ss(t){const e=new be(t.seconds,t.nanoseconds);return B.fromTimestamp(e)}function Bi(t,e){const n=(e.baseMutations||[]).map(s=>tg(t.fe,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>tg(t.fe,s)),i=be.fromMillis(e.localWriteTimeMs);return new gv(e.batchId,i,n,r)}function ja(t){const e=Ss(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?Ss(t.lastLimboFreeSnapshotVersion):B.min();let r;var i;return t.query.documents!==void 0?(q((i=t.query).documents.length===1),r=nn(ia(hC(i.documents[0])))):r=function(s){return nn(gC(s))}(t.query),new vr(r,t.targetId,"TargetPurposeListen",t.lastListenSequenceNumber,e,n,$t.fromBase64String(t.resumeToken))}function IC(t,e){const n=Es(e.snapshotVersion),r=Es(e.lastLimboFreeSnapshotVersion);let i;i=Ah(e.target)?pC(t.fe,e.target):mC(t.fe,e.target);const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:ws(e.target),readTime:n,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function Ev(t){const e=gC({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Nh(e,e.limit,"L"):e}function mp(t,e){return new vv(e.largestBatchId,tg(t.fe,e.overlayMutation))}function q1(t,e){const n=e.path.lastSegment();return[t,Bt(e.path.popLast()),n]}function G1(t,e,n,r){return{indexId:t,uid:e.uid||"",sequenceNumber:n,readTime:Es(r.readTime),documentKey:Bt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VM{getBundleMetadata(e,n){return H1(e).get(n).next(r=>{if(r)return{id:(i=r).bundleId,createTime:Ss(i.createTime),version:i.version};var i})}saveBundleMetadata(e,n){return H1(e).put({bundleId:(r=n).id,createTime:Es(He(r.createTime)),version:r.version});var r}getNamedQuery(e,n){return W1(e).get(n).next(r=>{if(r)return{name:(i=r).name,query:Ev(i.bundledQuery),readTime:Ss(i.readTime)};var i})}saveNamedQuery(e,n){return W1(e).put(function(r){return{name:r.name,readTime:Es(He(r.readTime)),bundledQuery:r.bundledQuery}}(n))}}function H1(t){return ct(t,"bundles")}function W1(t){return ct(t,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{constructor(e,n){this.serializer=e,this.userId=n}static de(e,n){const r=n.uid||"";return new $d(e,r)}getOverlay(e,n){return Ca(e).get(q1(this.userId,n)).next(r=>r?mp(this.serializer,r):null)}getOverlays(e,n){const r=Jn();return w.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){const i=[];return r.forEach((s,o)=>{const a=new vv(n,o);i.push(this.we(e,a))}),w.waitFor(i)}removeOverlaysForBatchId(e,n,r){const i=new Set;n.forEach(o=>i.add(Bt(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(Ca(e).J("collectionPathOverlayIndex",a))}),w.waitFor(s)}getOverlaysForCollection(e,n,r){const i=Jn(),s=Bt(n),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return Ca(e).j("collectionPathOverlayIndex",o).next(a=>{for(const u of a){const l=mp(this.serializer,u);i.set(l.getKey(),l)}return i})}getOverlaysForCollectionGroup(e,n,r,i){const s=Jn();let o;const a=IDBKeyRange.bound([this.userId,n,r],[this.userId,n,Number.POSITIVE_INFINITY],!0);return Ca(e).X({index:"collectionGroupOverlayIndex",range:a},(u,l,c)=>{const h=mp(this.serializer,l);s.size()<i||h.largestBatchId===o?(s.set(h.getKey(),h),o=h.largestBatchId):c.done()}).next(()=>s)}we(e,n){return Ca(e).put(function(r,i,s){const[o,a,u]=q1(i,s.mutation.key);return{userId:i,collectionPath:a,documentId:u,collectionGroup:s.mutation.key.getCollectionGroup(),largestBatchId:s.largestBatchId,overlayMutation:Qu(r.fe,s.mutation)}}(this.serializer,this.userId,n))}}function Ca(t){return ct(t,"documentOverlays")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(){}_e(e,n){this.me(e,n),n.ge()}me(e,n){if("nullValue"in e)this.ye(n,5);else if("booleanValue"in e)this.ye(n,10),n.pe(e.booleanValue?1:0);else if("integerValue"in e)this.ye(n,15),n.pe(Fe(e.integerValue));else if("doubleValue"in e){const r=Fe(e.doubleValue);isNaN(r)?this.ye(n,13):(this.ye(n,15),Bu(r)?n.pe(0):n.pe(r))}else if("timestampValue"in e){const r=e.timestampValue;this.ye(n,20),typeof r=="string"?n.Ie(r):(n.Ie(`${r.seconds||""}`),n.pe(r.nanos||0))}else if("stringValue"in e)this.Te(e.stringValue,n),this.Ee(n);else if("bytesValue"in e)this.ye(n,30),n.Ae(yi(e.bytesValue)),this.Ee(n);else if("referenceValue"in e)this.ve(e.referenceValue,n);else if("geoPointValue"in e){const r=e.geoPointValue;this.ye(n,45),n.pe(r.latitude||0),n.pe(r.longitude||0)}else"mapValue"in e?Pk(e)?this.ye(n,Number.MAX_SAFE_INTEGER):(this.Re(e.mapValue,n),this.Ee(n)):"arrayValue"in e?(this.Pe(e.arrayValue,n),this.Ee(n)):U()}Te(e,n){this.ye(n,25),this.be(e,n)}be(e,n){n.Ie(e)}Re(e,n){const r=e.fields||{};this.ye(n,55);for(const i of Object.keys(r))this.Te(i,n),this.me(r[i],n)}Pe(e,n){const r=e.values||[];this.ye(n,50);for(const i of r)this.me(i,n)}ve(e,n){this.ye(n,37),R.fromName(e).path.forEach(r=>{this.ye(n,60),this.be(r,n)})}ye(e,n){e.pe(n)}Ee(e){e.pe(2)}}qi.Ve=new qi;function zM(t){if(t===0)return 8;let e=0;return!(t>>4)&&(e+=4,t<<=4),!(t>>6)&&(e+=2,t<<=2),!(t>>7)&&(e+=1),e}function K1(t){const e=64-function(n){let r=0;for(let i=0;i<8;++i){const s=zM(255&n[i]);if(r+=s,s!==8)break}return r}(t);return Math.ceil(e/8)}class jM{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Se(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.De(r.value),r=n.next();this.Ce()}xe(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ne(r.value),r=n.next();this.ke()}Me(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.De(r);else if(r<2048)this.De(960|r>>>6),this.De(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.De(480|r>>>12),this.De(128|63&r>>>6),this.De(128|63&r);else{const i=n.codePointAt(0);this.De(240|i>>>18),this.De(128|63&i>>>12),this.De(128|63&i>>>6),this.De(128|63&i)}}this.Ce()}$e(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ne(r);else if(r<2048)this.Ne(960|r>>>6),this.Ne(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ne(480|r>>>12),this.Ne(128|63&r>>>6),this.Ne(128|63&r);else{const i=n.codePointAt(0);this.Ne(240|i>>>18),this.Ne(128|63&i>>>12),this.Ne(128|63&i>>>6),this.Ne(128|63&i)}}this.ke()}Oe(e){const n=this.Fe(e),r=K1(n);this.Be(1+r),this.buffer[this.position++]=255&r;for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=255&n[i]}Le(e){const n=this.Fe(e),r=K1(n);this.Be(1+r),this.buffer[this.position++]=~(255&r);for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=~(255&n[i])}qe(){this.Ue(255),this.Ue(255)}Ke(){this.Ge(255),this.Ge(255)}reset(){this.position=0}seed(e){this.Be(e.length),this.buffer.set(e,this.position),this.position+=e.length}Qe(){return this.buffer.slice(0,this.position)}Fe(e){const n=function(i){const s=new DataView(new ArrayBuffer(8));return s.setFloat64(0,i,!1),new Uint8Array(s.buffer)}(e),r=(128&n[0])!=0;n[0]^=r?255:128;for(let i=1;i<n.length;++i)n[i]^=r?255:0;return n}De(e){const n=255&e;n===0?(this.Ue(0),this.Ue(255)):n===255?(this.Ue(255),this.Ue(0)):this.Ue(n)}Ne(e){const n=255&e;n===0?(this.Ge(0),this.Ge(255)):n===255?(this.Ge(255),this.Ge(0)):this.Ge(e)}Ce(){this.Ue(0),this.Ue(1)}ke(){this.Ge(0),this.Ge(1)}Ue(e){this.Be(1),this.buffer[this.position++]=e}Ge(e){this.Be(1),this.buffer[this.position++]=~e}Be(e){const n=e+this.position;if(n<=this.buffer.length)return;let r=2*this.buffer.length;r<n&&(r=n);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class BM{constructor(e){this.je=e}Ae(e){this.je.Se(e)}Ie(e){this.je.Me(e)}pe(e){this.je.Oe(e)}ge(){this.je.qe()}}class qM{constructor(e){this.je=e}Ae(e){this.je.xe(e)}Ie(e){this.je.$e(e)}pe(e){this.je.Le(e)}ge(){this.je.Ke()}}class Aa{constructor(){this.je=new jM,this.ze=new BM(this.je),this.We=new qM(this.je)}seed(e){this.je.seed(e)}He(e){return e===0?this.ze:this.We}Qe(){return this.je.Qe()}reset(){this.je.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e,n,r,i){this.indexId=e,this.documentKey=n,this.arrayValue=r,this.directionalValue=i}Je(){const e=this.directionalValue.length,n=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(n);return r.set(this.directionalValue,0),n!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new Gi(this.indexId,this.documentKey,this.arrayValue,r)}}function Fr(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=Q1(t.arrayValue,e.arrayValue),n!==0?n:(n=Q1(t.directionalValue,e.directionalValue),n!==0?n:R.comparator(t.documentKey,e.documentKey)))}function Q1(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(r!==0)return r}return t.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GM{constructor(e){this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Ye=e.orderBy,this.Xe=[];for(const n of e.filters){const r=n;r.isInequality()?this.Ze=r:this.Xe.push(r)}}tn(e){q(e.collectionGroup===this.collectionId);const n=Um(e);if(n!==void 0&&!this.en(n))return!1;const r=zi(e);let i=new Set,s=0,o=0;for(;s<r.length&&this.en(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Ze!==void 0){if(!i.has(this.Ze.field.canonicalString())){const a=r[s];if(!this.nn(this.Ze,a)||!this.sn(this.Ye[o++],a))return!1}++s}for(;s<r.length;++s){const a=r[s];if(o>=this.Ye.length||!this.sn(this.Ye[o++],a))return!1}return!0}en(e){for(const n of this.Xe)if(this.nn(n,e))return!0;return!1}nn(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===r}sn(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EC(t){var e,n;if(q(t instanceof ne||t instanceof ge),t instanceof ne){if(t instanceof zk){const i=((n=(e=t.value.arrayValue)===null||e===void 0?void 0:e.values)===null||n===void 0?void 0:n.map(s=>ne.create(t.field,"==",s)))||[];return ge.create(i,"or")}return t}const r=t.filters.map(i=>EC(i));return ge.create(r,t.op)}function HM(t){if(t.getFilters().length===0)return[];const e=ig(EC(t));return q(SC(e)),ng(e)||rg(e)?[e]:e.getFilters()}function ng(t){return t instanceof ne}function rg(t){return t instanceof ge&&hv(t)}function SC(t){return ng(t)||rg(t)||function(e){if(e instanceof ge&&Km(e)){for(const n of e.getFilters())if(!ng(n)&&!rg(n))return!1;return!0}return!1}(t)}function ig(t){if(q(t instanceof ne||t instanceof ge),t instanceof ne)return t;if(t.filters.length===1)return ig(t.filters[0]);const e=t.filters.map(r=>ig(r));let n=ge.create(e,t.op);return n=Rh(n),SC(n)?n:(q(n instanceof ge),q(Lo(n)),q(n.filters.length>1),n.filters.reduce((r,i)=>Sv(r,i)))}function Sv(t,e){let n;return q(t instanceof ne||t instanceof ge),q(e instanceof ne||e instanceof ge),n=t instanceof ne?e instanceof ne?function(r,i){return ge.create([r,i],"and")}(t,e):Y1(t,e):e instanceof ne?Y1(e,t):function(r,i){if(q(r.filters.length>0&&i.filters.length>0),Lo(r)&&Lo(i))return Fk(r,i.getFilters());const s=Km(r)?r:i,o=Km(r)?i:r,a=s.filters.map(u=>Sv(u,o));return ge.create(a,"or")}(t,e),Rh(n)}function Y1(t,e){if(Lo(e))return Fk(e,t.getFilters());{const n=e.filters.map(r=>Sv(t,r));return ge.create(n,"or")}}function Rh(t){if(q(t instanceof ne||t instanceof ge),t instanceof ne)return t;const e=t.getFilters();if(e.length===1)return Rh(e[0]);if(Lk(t))return t;const n=e.map(i=>Rh(i)),r=[];return n.forEach(i=>{i instanceof ne?r.push(i):i instanceof ge&&(i.op===t.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:ge.create(r,t.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WM{constructor(){this.rn=new Tv}addToCollectionParentIndex(e,n){return this.rn.add(n),w.resolve()}getCollectionParents(e,n){return w.resolve(this.rn.getEntries(n))}addFieldIndex(e,n){return w.resolve()}deleteFieldIndex(e,n){return w.resolve()}getDocumentsMatchingTarget(e,n){return w.resolve(null)}getIndexType(e,n){return w.resolve(0)}getFieldIndexes(e,n){return w.resolve([])}getNextCollectionGroupToUpdate(e){return w.resolve(null)}getMinOffset(e,n){return w.resolve(fn.min())}getMinOffsetFromCollectionGroup(e,n){return w.resolve(fn.min())}updateCollectionGroup(e,n,r){return w.resolve()}updateIndexEntries(e,n){return w.resolve()}}class Tv{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ue(ae.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ue(ae.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lc=new Uint8Array(0);class KM{constructor(e,n){this.user=e,this.databaseId=n,this.on=new Tv,this.un=new Oi(r=>ws(r),(r,i)=>Tl(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.on.has(n)){const r=n.lastSegment(),i=n.popLast();e.addOnCommittedListener(()=>{this.on.add(n)});const s={collectionId:r,parent:Bt(i)};return X1(e).put(s)}return w.resolve()}getCollectionParents(e,n){const r=[],i=IDBKeyRange.bound([n,""],[_k(n),""],!1,!0);return X1(e).j(i).next(s=>{for(const o of s){if(o.collectionId!==n)break;r.push(Xn(o.parent))}return r})}addFieldIndex(e,n){const r=cc(e),i=function(o){return{indexId:o.indexId,collectionGroup:o.collectionGroup,fields:o.fields.map(a=>[a.fieldPath.canonicalString(),a.kind])}}(n);delete i.indexId;const s=r.add(i);if(n.indexState){const o=Na(e);return s.next(a=>{o.put(G1(a,this.user,n.indexState.sequenceNumber,n.indexState.offset))})}return s.next()}deleteFieldIndex(e,n){const r=cc(e),i=Na(e),s=xa(e);return r.delete(n.indexId).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,n){const r=xa(e);let i=!0;const s=new Map;return w.forEach(this.cn(n),o=>this.an(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=Z();const a=[];return w.forEach(s,(u,l)=>{var c;C("IndexedDbIndexManager",`Using index ${c=u,`id=${c.indexId}|cg=${c.collectionGroup}|f=${c.fields.map(g=>`${g.fieldPath}:${g.kind}`).join(",")}`} to execute ${ws(n)}`);const h=function(g,_){const T=Um(_);if(T===void 0)return null;for(const A of xh(g,T.fieldPath))switch(A.op){case"array-contains-any":return A.value.arrayValue.values||[];case"array-contains":return[A.value]}return null}(l,u),d=function(g,_){const T=new Map;for(const A of zi(_))for(const b of xh(g,A.fieldPath))switch(b.op){case"==":case"in":T.set(A.fieldPath.canonicalString(),b.value);break;case"not-in":case"!=":return T.set(A.fieldPath.canonicalString(),b.value),Array.from(T.values())}return null}(l,u),p=function(g,_){const T=[];let A=!0;for(const b of zi(_)){const P=b.kind===0?b1(g,b.fieldPath,g.startAt):R1(g,b.fieldPath,g.startAt);T.push(P.value),A&&(A=P.inclusive)}return new wi(T,A)}(l,u),y=function(g,_){const T=[];let A=!0;for(const b of zi(_)){const P=b.kind===0?R1(g,b.fieldPath,g.endAt):b1(g,b.fieldPath,g.endAt);T.push(P.value),A&&(A=P.inclusive)}return new wi(T,A)}(l,u),v=this.hn(u,l,p),S=this.hn(u,l,y),m=this.ln(u,l,d),f=this.fn(u.indexId,h,v,p.inclusive,S,y.inclusive,m);return w.forEach(f,g=>r.H(g,n.limit).next(_=>{_.forEach(T=>{const A=R.fromSegments(T.documentKey);o.has(A)||(o=o.add(A),a.push(A))})}))}).next(()=>a)}return w.resolve(null)})}cn(e){let n=this.un.get(e);return n||(e.filters.length===0?n=[e]:n=HM(ge.create(e.filters,"and")).map(r=>Ym(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.un.set(e,n),n)}fn(e,n,r,i,s,o,a){const u=(n!=null?n.length:1)*Math.max(r.length,s.length),l=u/(n!=null?n.length:1),c=[];for(let h=0;h<u;++h){const d=n?this.dn(n[h/l]):lc,p=this.wn(e,d,r[h%l],i),y=this._n(e,d,s[h%l],o),v=a.map(S=>this.wn(e,d,S,!0));c.push(...this.createRange(p,y,v))}return c}wn(e,n,r,i){const s=new Gi(e,R.empty(),n,r);return i?s:s.Je()}_n(e,n,r,i){const s=new Gi(e,R.empty(),n,r);return i?s.Je():s}an(e,n){const r=new GM(n),i=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.tn(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,n){let r=2;const i=this.cn(n);return w.forEach(i,s=>this.an(e,s).next(o=>{o?r!==0&&o.fields.length<function(a){let u=new Ue(Ge.comparator),l=!1;for(const c of a.filters)for(const h of c.getFlattenedFilters())h.field.isKeyField()||(h.op==="array-contains"||h.op==="array-contains-any"?l=!0:u=u.add(h.field));for(const c of a.orderBy)c.field.isKeyField()||(u=u.add(c.field));return u.size+(l?1:0)}(s)&&(r=1):r=0})).next(()=>function(s){return s.limit!==null}(n)&&i.length>1&&r===2?1:r)}mn(e,n){const r=new Aa;for(const i of zi(e)){const s=n.data.field(i.fieldPath);if(s==null)return null;const o=r.He(i.kind);qi.Ve._e(s,o)}return r.Qe()}dn(e){const n=new Aa;return qi.Ve._e(e,n.He(0)),n.Qe()}gn(e,n){const r=new Aa;return qi.Ve._e(vs(this.databaseId,n),r.He(function(i){const s=zi(i);return s.length===0?0:s[s.length-1].kind}(e))),r.Qe()}ln(e,n,r){if(r===null)return[];let i=[];i.push(new Aa);let s=0;for(const o of zi(e)){const a=r[s++];for(const u of i)if(this.yn(n,o.fieldPath)&&Hu(a))i=this.pn(i,o,a);else{const l=u.He(o.kind);qi.Ve._e(a,l)}}return this.In(i)}hn(e,n,r){return this.ln(e,n,r.position)}In(e){const n=[];for(let r=0;r<e.length;++r)n[r]=e[r].Qe();return n}pn(e,n,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const u=new Aa;u.seed(a.Qe()),qi.Ve._e(o,u.He(n.kind)),s.push(u)}return s}yn(e,n){return!!e.filters.find(r=>r instanceof ne&&r.field.isEqual(n)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,n){const r=cc(e),i=Na(e);return(n?r.j("collectionGroupIndex",IDBKeyRange.bound(n,n)):r.j()).next(s=>{const o=[];return w.forEach(s,a=>i.get([a.indexId,this.uid]).next(u=>{o.push(function(l,c){const h=c?new Ch(c.sequenceNumber,new fn(Ss(c.readTime),new R(Xn(c.documentKey)),c.largestBatchId)):Ch.empty(),d=l.fields.map(([p,y])=>new bL(Ge.fromServerFormat(p),y));return new Ik(l.indexId,l.collectionGroup,d,h)}(a,u))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:J(r.collectionGroup,i.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,r){const i=cc(e),s=Na(e);return this.Tn(e).next(o=>i.j("collectionGroupIndex",IDBKeyRange.bound(n,n)).next(a=>w.forEach(a,u=>s.put(G1(u.indexId,this.user,o,r)))))}updateIndexEntries(e,n){const r=new Map;return w.forEach(n,(i,s)=>{const o=r.get(i.collectionGroup);return(o?w.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),w.forEach(a,u=>this.En(e,i,u).next(l=>{const c=this.An(s,u);return l.isEqual(c)?w.resolve():this.vn(e,s,u,l,c)}))))})}Rn(e,n,r,i){return xa(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.gn(r,n.key),documentKey:n.key.path.toArray()})}Pn(e,n,r,i){return xa(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.gn(r,n.key),n.key.path.toArray()])}En(e,n,r){const i=xa(e);let s=new Ue(Fr);return i.X({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.gn(r,n)])},(o,a)=>{s=s.add(new Gi(r.indexId,n,a.arrayValue,a.directionalValue))}).next(()=>s)}An(e,n){let r=new Ue(Fr);const i=this.mn(n,e);if(i==null)return r;const s=Um(n);if(s!=null){const o=e.data.field(s.fieldPath);if(Hu(o))for(const a of o.arrayValue.values||[])r=r.add(new Gi(n.indexId,e.key,this.dn(a),i))}else r=r.add(new Gi(n.indexId,e.key,lc,i));return r}vn(e,n,r,i,s){C("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const o=[];return function(a,u,l,c,h){const d=a.getIterator(),p=u.getIterator();let y=zs(d),v=zs(p);for(;y||v;){let S=!1,m=!1;if(y&&v){const f=l(y,v);f<0?m=!0:f>0&&(S=!0)}else y!=null?m=!0:S=!0;S?(c(v),v=zs(p)):m?(h(y),y=zs(d)):(y=zs(d),v=zs(p))}}(i,s,Fr,a=>{o.push(this.Rn(e,n,r,a))},a=>{o.push(this.Pn(e,n,r,a))}),w.waitFor(o)}Tn(e){let n=1;return Na(e).X({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),n=i.sequenceNumber+1}).next(()=>n)}createRange(e,n,r){r=r.sort((o,a)=>Fr(o,a)).filter((o,a,u)=>!a||Fr(o,u[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=Fr(o,e),u=Fr(o,n);if(a===0)i[0]=e.Je();else if(a>0&&u<0)i.push(o),i.push(o.Je());else if(u>0)break}i.push(n);const s=[];for(let o=0;o<i.length;o+=2){if(this.bn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,lc,[]],u=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,lc,[]];s.push(IDBKeyRange.bound(a,u))}return s}bn(e,n){return Fr(e,n)>0}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(J1)}getMinOffset(e,n){return w.mapArray(this.cn(n),r=>this.an(e,r).next(i=>i||U())).next(J1)}}function X1(t){return ct(t,"collectionParents")}function xa(t){return ct(t,"indexEntries")}function cc(t){return ct(t,"indexConfiguration")}function Na(t){return ct(t,"indexState")}function J1(t){q(t.length!==0);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const i=t[r].indexState.offset;uv(i,e)<0&&(e=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new fn(e.readTime,e.documentKey,n)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z1={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Kt{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Kt(e,Kt.DEFAULT_COLLECTION_PERCENTILE,Kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TC(t,e,n){const r=t.store("mutations"),i=t.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const u=r.X({range:o},(c,h,d)=>(a++,d.delete()));s.push(u.next(()=>{q(a===1)}));const l=[];for(const c of n.mutations){const h=Ak(e,c.key.path,n.batchId);s.push(i.delete(h)),l.push(c.key)}return w.waitFor(s).next(()=>l)}function Dh(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw U();e=t.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Kt.DEFAULT_COLLECTION_PERCENTILE=10,Kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Kt.DEFAULT=new Kt(41943040,Kt.DEFAULT_COLLECTION_PERCENTILE,Kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Kt.DISABLED=new Kt(-1,0,0);class Ld{constructor(e,n,r,i){this.userId=e,this.serializer=n,this.indexManager=r,this.referenceDelegate=i,this.Vn={}}static de(e,n,r,i){q(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new Ld(s,n,r,i)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Ur(e).X({index:"userMutationsIndex",range:r},(i,s,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,i){const s=Gs(e),o=Ur(e);return o.add({}).next(a=>{q(typeof a=="number");const u=new gv(a,n,r,i),l=function(d,p,y){const v=y.baseMutations.map(m=>Qu(d.fe,m)),S=y.mutations.map(m=>Qu(d.fe,m));return{userId:p,batchId:y.batchId,localWriteTimeMs:y.localWriteTime.toMillis(),baseMutations:v,mutations:S}}(this.serializer,this.userId,u),c=[];let h=new Ue((d,p)=>J(d.canonicalString(),p.canonicalString()));for(const d of i){const p=Ak(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),c.push(o.put(l)),c.push(s.put(p,LL))}return h.forEach(d=>{c.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.Vn[a]=u.keys()}),w.waitFor(c).next(()=>u)})}lookupMutationBatch(e,n){return Ur(e).get(n).next(r=>r?(q(r.userId===this.userId),Bi(this.serializer,r)):null)}Sn(e,n){return this.Vn[n]?w.resolve(this.Vn[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const i=r.keys();return this.Vn[n]=i,i}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return Ur(e).X({index:"userMutationsIndex",range:i},(o,a,u)=>{a.userId===this.userId&&(q(a.batchId>=r),s=Bi(this.serializer,a)),u.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return Ur(e).X({index:"userMutationsIndex",range:n,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Ur(e).j("userMutationsIndex",n).next(r=>r.map(i=>Bi(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=Pc(this.userId,n.path),i=IDBKeyRange.lowerBound(r),s=[];return Gs(e).X({range:i},(o,a,u)=>{const[l,c,h]=o,d=Xn(c);if(l===this.userId&&n.path.isEqual(d))return Ur(e).get(h).next(p=>{if(!p)throw U();q(p.userId===this.userId),s.push(Bi(this.serializer,p))});u.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ue(J);const i=[];return n.forEach(s=>{const o=Pc(this.userId,s.path),a=IDBKeyRange.lowerBound(o),u=Gs(e).X({range:a},(l,c,h)=>{const[d,p,y]=l,v=Xn(p);d===this.userId&&s.path.isEqual(v)?r=r.add(y):h.done()});i.push(u)}),w.waitFor(i).next(()=>this.Dn(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1,s=Pc(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new Ue(J);return Gs(e).X({range:o},(u,l,c)=>{const[h,d,p]=u,y=Xn(d);h===this.userId&&r.isPrefixOf(y)?y.length===i&&(a=a.add(p)):c.done()}).next(()=>this.Dn(e,a))}Dn(e,n){const r=[],i=[];return n.forEach(s=>{i.push(Ur(e).get(s).next(o=>{if(o===null)throw U();q(o.userId===this.userId),r.push(Bi(this.serializer,o))}))}),w.waitFor(i).next(()=>r)}removeMutationBatch(e,n){return TC(e.ht,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.Cn(n.batchId)}),w.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}Cn(e){delete this.Vn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return w.resolve();const r=IDBKeyRange.lowerBound([this.userId]),i=[];return Gs(e).X({range:r},(s,o,a)=>{if(s[0]===this.userId){const u=Xn(s[1]);i.push(u)}else a.done()}).next(()=>{q(i.length===0)})})}containsKey(e,n){return kC(e,this.userId,n)}xn(e){return CC(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function kC(t,e,n){const r=Pc(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return Gs(t).X({range:s,Y:!0},(a,u,l)=>{const[c,h,d]=a;c===e&&h===i&&(o=!0),l.done()}).next(()=>o)}function Ur(t){return ct(t,"mutations")}function Gs(t){return ct(t,"documentMutations")}function CC(t){return ct(t,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new Ts(0)}static Mn(){return new Ts(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QM{constructor(e,n){this.referenceDelegate=e,this.serializer=n}allocateTargetId(e){return this.$n(e).next(n=>{const r=new Ts(n.highestTargetId);return n.highestTargetId=r.next(),this.On(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.$n(e).next(n=>B.fromTimestamp(new be(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.$n(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.$n(e).next(i=>(i.highestListenSequenceNumber=n,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),n>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=n),this.On(e,i)))}addTargetData(e,n){return this.Fn(e,n).next(()=>this.$n(e).next(r=>(r.targetCount+=1,this.Bn(n,r),this.On(e,r))))}updateTargetData(e,n){return this.Fn(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>js(e).delete(n.targetId)).next(()=>this.$n(e)).next(r=>(q(r.targetCount>0),r.targetCount-=1,this.On(e,r)))}removeTargets(e,n,r){let i=0;const s=[];return js(e).X((o,a)=>{const u=ja(a);u.sequenceNumber<=n&&r.get(u.targetId)===null&&(i++,s.push(this.removeTargetData(e,u)))}).next(()=>w.waitFor(s)).next(()=>i)}forEachTarget(e,n){return js(e).X((r,i)=>{const s=ja(i);n(s)})}$n(e){return e_(e).get("targetGlobalKey").next(n=>(q(n!==null),n))}On(e,n){return e_(e).put("targetGlobalKey",n)}Fn(e,n){return js(e).put(IC(this.serializer,n))}Bn(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.$n(e).next(n=>n.targetCount)}getTargetData(e,n){const r=ws(n),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return js(e).X({range:i,index:"queryTargetsIndex"},(o,a,u)=>{const l=ja(a);Tl(n,l.target)&&(s=l,u.done())}).next(()=>s)}addMatchingKeys(e,n,r){const i=[],s=Gr(e);return n.forEach(o=>{const a=Bt(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),w.waitFor(i)}removeMatchingKeys(e,n,r){const i=Gr(e);return w.forEach(n,s=>{const o=Bt(s.path);return w.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,n){const r=Gr(e),i=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),i=Gr(e);let s=Z();return i.X({range:r,Y:!0},(o,a,u)=>{const l=Xn(o[1]),c=new R(l);s=s.add(c)}).next(()=>s)}containsKey(e,n){const r=Bt(n.path),i=IDBKeyRange.bound([r],[_k(r)],!1,!0);let s=0;return Gr(e).X({index:"documentTargetsIndex",Y:!0,range:i},([o,a],u,l)=>{o!==0&&(s++,l.done())}).next(()=>s>0)}le(e,n){return js(e).get(n).next(r=>r?ja(r):null)}}function js(t){return ct(t,"targets")}function e_(t){return ct(t,"targetGlobal")}function Gr(t){return ct(t,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t_([t,e],[n,r]){const i=J(t,n);return i===0?J(e,r):i}class YM{constructor(e){this.Ln=e,this.buffer=new Ue(t_),this.qn=0}Un(){return++this.qn}Kn(e){const n=[e,this.Un()];if(this.buffer.size<this.Ln)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();t_(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class XM{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Gn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Qn(6e4)}stop(){this.Gn&&(this.Gn.cancel(),this.Gn=null)}get started(){return this.Gn!==null}Qn(e){C("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Gn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Gn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Pi(n)?C("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await Di(n)}await this.Qn(3e5)})}}class JM{constructor(e,n){this.jn=e,this.params=n}calculateTargetCount(e,n){return this.jn.zn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return w.resolve(Xt.ct);const r=new YM(n);return this.jn.forEachTarget(e,i=>r.Kn(i.sequenceNumber)).next(()=>this.jn.Wn(e,i=>r.Kn(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.jn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.jn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(C("LruGarbageCollector","Garbage collection skipped; disabled"),w.resolve(Z1)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(C("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Z1):this.Hn(e,n))}getCacheSize(e){return this.jn.getCacheSize(e)}Hn(e,n){let r,i,s,o,a,u,l;const c=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(C("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),i=this.params.maximumSequenceNumbersToCollect):i=h,o=Date.now(),this.nthSequenceNumber(e,i))).next(h=>(r=h,a=Date.now(),this.removeTargets(e,r,n))).next(h=>(s=h,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(h=>(l=Date.now(),Fm()<=oe.DEBUG&&C("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-c}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(u-a)+`ms
	Removed ${h} documents in `+(l-u)+`ms
Total Duration: ${l-c}ms`),w.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:h})))}}function ZM(t,e){return new JM(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eF{constructor(e,n){this.db=e,this.garbageCollector=ZM(this,n)}zn(e){const n=this.Jn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}Jn(e){let n=0;return this.Wn(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}Wn(e,n){return this.Yn(e,(r,i)=>n(i))}addReference(e,n,r){return hc(e,r)}removeReference(e,n,r){return hc(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return hc(e,n)}Xn(e,n){return function(r,i){let s=!1;return CC(r).Z(o=>kC(r,o,i).next(a=>(a&&(s=!0),w.resolve(!a)))).next(()=>s)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Yn(e,(o,a)=>{if(a<=n){const u=this.Xn(e,o).next(l=>{if(!l)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,B.min()),Gr(e).delete([0,Bt(o.path)])))});i.push(u)}}).next(()=>w.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return hc(e,n)}Yn(e,n){const r=Gr(e);let i,s=Xt.ct;return r.X({index:"documentTargetsIndex"},([o,a],{path:u,sequenceNumber:l})=>{o===0?(s!==Xt.ct&&n(new R(Xn(i)),s),s=l,i=u):s=Xt.ct}).next(()=>{s!==Xt.ct&&n(new R(Xn(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function hc(t,e){return Gr(t).put(function(n,r){return{targetId:0,path:Bt(n.path),sequenceNumber:r}}(e,t.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AC{constructor(){this.changes=new Oi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ke.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?w.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tF{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,r){return Mi(e).put(r)}removeEntry(e,n,r){return Mi(e).delete(function(i,s){const o=i.path.toArray();return[o.slice(0,o.length-2),o[o.length-2],bh(s),o[o.length-1]]}(n,r))}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.Zn(e,r)))}getEntry(e,n){let r=ke.newInvalidDocument(n);return Mi(e).X({index:"documentKeyIndex",range:IDBKeyRange.only(ba(n))},(i,s)=>{r=this.ts(n,s)}).next(()=>r)}es(e,n){let r={size:0,document:ke.newInvalidDocument(n)};return Mi(e).X({index:"documentKeyIndex",range:IDBKeyRange.only(ba(n))},(i,s)=>{r={document:this.ts(n,s),size:Dh(s)}}).next(()=>r)}getEntries(e,n){let r=Jt();return this.ns(e,n,(i,s)=>{const o=this.ts(i,s);r=r.insert(i,o)}).next(()=>r)}ss(e,n){let r=Jt(),i=new $e(R.comparator);return this.ns(e,n,(s,o)=>{const a=this.ts(s,o);r=r.insert(s,a),i=i.insert(s,Dh(o))}).next(()=>({documents:r,rs:i}))}ns(e,n,r){if(n.isEmpty())return w.resolve();let i=new Ue(i_);n.forEach(u=>i=i.add(u));const s=IDBKeyRange.bound(ba(i.first()),ba(i.last())),o=i.getIterator();let a=o.getNext();return Mi(e).X({index:"documentKeyIndex",range:s},(u,l,c)=>{const h=R.fromSegments([...l.prefixPath,l.collectionGroup,l.documentId]);for(;a&&i_(a,h)<0;)r(a,null),a=o.getNext();a&&a.isEqual(h)&&(r(a,l),a=o.hasNext()?o.getNext():null),a?c.G(ba(a)):c.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,n,r,i){const s=n.path,o=[s.popLast().toArray(),s.lastSegment(),bh(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],a=[s.popLast().toArray(),s.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Mi(e).j(IDBKeyRange.bound(o,a,!0)).next(u=>{let l=Jt();for(const c of u){const h=this.ts(R.fromSegments(c.prefixPath.concat(c.collectionGroup,c.documentId)),c);h.isFoundDocument()&&(Cl(n,h)||i.has(h.key))&&(l=l.insert(h.key,h))}return l})}getAllFromCollectionGroup(e,n,r,i){let s=Jt();const o=r_(n,r),a=r_(n,fn.max());return Mi(e).X({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(u,l,c)=>{const h=this.ts(R.fromSegments(l.prefixPath.concat(l.collectionGroup,l.documentId)),l);s=s.insert(h.key,h),s.size===i&&c.done()}).next(()=>s)}newChangeBuffer(e){return new nF(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return n_(e).get("remoteDocumentGlobalKey").next(n=>(q(!!n),n))}Zn(e,n){return n_(e).put("remoteDocumentGlobalKey",n)}ts(e,n){if(n){const r=UM(this.serializer,n);if(!(r.isNoDocument()&&r.version.isEqual(B.min())))return r}return ke.newInvalidDocument(e)}}function xC(t){return new tF(t)}class nF extends AC{constructor(e,n){super(),this.os=e,this.trackRemovals=n,this.us=new Oi(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const n=[];let r=0,i=new Ue((s,o)=>J(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.us.get(s);if(n.push(this.os.removeEntry(e,s,a.readTime)),o.isValidDocument()){const u=B1(this.os.serializer,o);i=i.add(s.path.popLast());const l=Dh(u);r+=l-a.size,n.push(this.os.addEntry(e,s,u))}else if(r-=a.size,this.trackRemovals){const u=B1(this.os.serializer,o.convertToNoDocument(B.min()));n.push(this.os.addEntry(e,s,u))}}),i.forEach(s=>{n.push(this.os.indexManager.addToCollectionParentIndex(e,s))}),n.push(this.os.updateMetadata(e,r)),w.waitFor(n)}getFromCache(e,n){return this.os.es(e,n).next(r=>(this.us.set(n,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,n){return this.os.ss(e,n).next(({documents:r,rs:i})=>(i.forEach((s,o)=>{this.us.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function n_(t){return ct(t,"remoteDocumentGlobal")}function Mi(t){return ct(t,"remoteDocumentsV14")}function ba(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function r_(t,e){const n=e.documentKey.path.toArray();return[t,bh(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function i_(t,e){const n=t.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=J(n[s],r[s]),i)return i;return i=J(n.length,r.length),i||(i=J(n[n.length-2],r[r.length-2]),i||J(n[n.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rF{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NC{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&su(r.mutation,i,Pn.empty(),be.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Z()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Z()){const i=Jn();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Va();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Jn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Z()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Jt();const o=iu(),a=iu();return n.forEach((u,l)=>{const c=r.get(l.key);i.has(l.key)&&(c===void 0||c.mutation instanceof Pr)?s=s.insert(l.key,l):c!==void 0?(o.set(l.key,c.mutation.getFieldMask()),su(c.mutation,l,c.mutation.getFieldMask(),be.now())):o.set(l.key,Pn.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((l,c)=>o.set(l,c)),n.forEach((l,c)=>{var h;return a.set(l,new rF(c,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=iu();let i=new $e((o,a)=>o-a),s=Z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const l=n.get(u);if(l===null)return;let c=r.get(u)||Pn.empty();c=a.applyToLocalView(l,c),r.set(u,c);const h=(i.get(a.batchId)||Z()).add(u);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),l=u.key,c=u.value,h=Kk();c.forEach(d=>{if(!s.has(d)){const p=nC(n.get(d),r.get(d));p!==null&&h.set(d,p),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return w.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return R.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):fv(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):w.resolve(Jn());let a=-1,u=s;return o.next(l=>w.forEach(l,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?w.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{u=u.insert(c,d)}))).next(()=>this.populateOverlays(e,l,s)).next(()=>this.computeViews(e,u,l,Z())).next(c=>({batchId:a,changes:Wk(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new R(n)).next(r=>{let i=Va();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=Va();return this.indexManager.getCollectionParents(e,i).next(o=>w.forEach(o,a=>{const u=function(l,c){return new Dr(c,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r).next(l=>{l.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,u)=>{const l=u.getKey();s.get(l)===null&&(s=s.insert(l,ke.newInvalidDocument(l)))});let o=Va();return s.forEach((a,u)=>{const l=i.get(a);l!==void 0&&su(l.mutation,u,Pn.empty(),be.now()),Cl(n,u)&&(o=o.insert(a,u))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iF{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,n){return w.resolve(this.cs.get(n))}saveBundleMetadata(e,n){var r;return this.cs.set(n.id,{id:(r=n).id,version:r.version,createTime:He(r.createTime)}),w.resolve()}getNamedQuery(e,n){return w.resolve(this.hs.get(n))}saveNamedQuery(e,n){return this.hs.set(n.name,function(r){return{name:r.name,query:Ev(r.bundledQuery),readTime:He(r.readTime)}}(n)),w.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sF{constructor(){this.overlays=new $e(R.comparator),this.ls=new Map}getOverlay(e,n){return w.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Jn();return w.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.we(e,n,s)}),w.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.ls.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.ls.delete(r)),w.resolve()}getOverlaysForCollection(e,n,r){const i=Jn(),s=n.length+1,o=new R(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,l=u.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return w.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new $e((l,c)=>l-c);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let c=s.get(l.largestBatchId);c===null&&(c=Jn(),s=s.insert(l.largestBatchId,c)),c.set(l.getKey(),l)}}const a=Jn(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((l,c)=>a.set(l,c)),!(a.size()>=i)););return w.resolve(a)}we(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.ls.get(i.largestBatchId).delete(r.key);this.ls.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new vv(n,r));let s=this.ls.get(n);s===void 0&&(s=Z(),this.ls.set(n,s)),this.ls.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kv{constructor(){this.fs=new Ue(rt.ds),this.ws=new Ue(rt._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,n){const r=new rt(e,n);this.fs=this.fs.add(r),this.ws=this.ws.add(r)}gs(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.ys(new rt(e,n))}ps(e,n){e.forEach(r=>this.removeReference(r,n))}Is(e){const n=new R(new ae([])),r=new rt(n,e),i=new rt(n,e+1),s=[];return this.ws.forEachInRange([r,i],o=>{this.ys(o),s.push(o.key)}),s}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const n=new R(new ae([])),r=new rt(n,e),i=new rt(n,e+1);let s=Z();return this.ws.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new rt(e,0),r=this.fs.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class rt{constructor(e,n){this.key=e,this.As=n}static ds(e,n){return R.comparator(e.key,n.key)||J(e.As,n.As)}static _s(e,n){return J(e.As,n.As)||R.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oF{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.vs=1,this.Rs=new Ue(rt.ds)}checkEmpty(e){return w.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new gv(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.Rs=this.Rs.add(new rt(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return w.resolve(o)}lookupMutationBatch(e,n){return w.resolve(this.Ps(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.bs(r),s=i<0?0:i;return w.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return w.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return w.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new rt(n,0),i=new rt(n,Number.POSITIVE_INFINITY),s=[];return this.Rs.forEachInRange([r,i],o=>{const a=this.Ps(o.As);s.push(a)}),w.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ue(J);return n.forEach(i=>{const s=new rt(i,0),o=new rt(i,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([s,o],a=>{r=r.add(a.As)})}),w.resolve(this.Vs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;R.isDocumentKey(s)||(s=s.child(""));const o=new rt(new R(s),0);let a=new Ue(J);return this.Rs.forEachWhile(u=>{const l=u.key.path;return!!r.isPrefixOf(l)&&(l.length===i&&(a=a.add(u.As)),!0)},o),w.resolve(this.Vs(a))}Vs(e){const n=[];return e.forEach(r=>{const i=this.Ps(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){q(this.Ss(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Rs;return w.forEach(n.mutations,i=>{const s=new rt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Rs=r})}Cn(e){}containsKey(e,n){const r=new rt(n,0),i=this.Rs.firstAfterOrEqual(r);return w.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,w.resolve()}Ss(e,n){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const n=this.bs(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aF{constructor(e){this.Ds=e,this.docs=new $e(R.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ds(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return w.resolve(r?r.document.mutableCopy():ke.newInvalidDocument(n))}getEntries(e,n){let r=Jt();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ke.newInvalidDocument(i))}),w.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Jt();const o=n.path,a=new R(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:l,value:{document:c}}=u.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||uv(Sk(c),r)<=0||(i.has(c.key)||Cl(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return w.resolve(s)}getAllFromCollectionGroup(e,n,r,i){U()}Cs(e,n){return w.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new uF(this)}getSize(e){return w.resolve(this.size)}}class uF extends AC{constructor(e){super(),this.os=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.os.addEntry(e,i)):this.os.removeEntry(r)}),w.waitFor(n)}getFromCache(e,n){return this.os.getEntry(e,n)}getAllFromCache(e,n){return this.os.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lF{constructor(e){this.persistence=e,this.xs=new Oi(n=>ws(n),Tl),this.lastRemoteSnapshotVersion=B.min(),this.highestTargetId=0,this.Ns=0,this.ks=new kv,this.targetCount=0,this.Ms=Ts.kn()}forEachTarget(e,n){return this.xs.forEach((r,i)=>n(i)),w.resolve()}getLastRemoteSnapshotVersion(e){return w.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return w.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),w.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Ns&&(this.Ns=n),w.resolve()}Fn(e){this.xs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ms=new Ts(n),this.highestTargetId=n),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,n){return this.Fn(n),this.targetCount+=1,w.resolve()}updateTargetData(e,n){return this.Fn(n),w.resolve()}removeTargetData(e,n){return this.xs.delete(n.target),this.ks.Is(n.targetId),this.targetCount-=1,w.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.xs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),w.waitFor(s).next(()=>i)}getTargetCount(e){return w.resolve(this.targetCount)}getTargetData(e,n){const r=this.xs.get(n)||null;return w.resolve(r)}addMatchingKeys(e,n,r){return this.ks.gs(n,r),w.resolve()}removeMatchingKeys(e,n,r){this.ks.ps(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),w.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.ks.Is(n),w.resolve()}getMatchingKeysForTargetId(e,n){const r=this.ks.Es(n);return w.resolve(r)}containsKey(e,n){return w.resolve(this.ks.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bC{constructor(e,n){this.$s={},this.overlays={},this.Os=new Xt(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new lF(this),this.indexManager=new WM,this.remoteDocumentCache=function(r){return new aF(r)}(r=>this.referenceDelegate.Ls(r)),this.serializer=new _C(n),this.qs=new iF(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new sF,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.$s[e.toKey()];return r||(r=new oF(n,this.referenceDelegate),this.$s[e.toKey()]=r),r}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,n,r){C("MemoryPersistence","Starting transaction:",e);const i=new cF(this.Os.next());return this.referenceDelegate.Us(),r(i).next(s=>this.referenceDelegate.Ks(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gs(e,n){return w.or(Object.values(this.$s).map(r=>()=>r.containsKey(e,n)))}}class cF extends kk{constructor(e){super(),this.currentSequenceNumber=e}}class Md{constructor(e){this.persistence=e,this.Qs=new kv,this.js=null}static zs(e){return new Md(e)}get Ws(){if(this.js)return this.js;throw U()}addReference(e,n,r){return this.Qs.addReference(r,n),this.Ws.delete(r.toString()),w.resolve()}removeReference(e,n,r){return this.Qs.removeReference(r,n),this.Ws.add(r.toString()),w.resolve()}markPotentiallyOrphaned(e,n){return this.Ws.add(n.toString()),w.resolve()}removeTarget(e,n){this.Qs.Is(n.targetId).forEach(i=>this.Ws.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Ws.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Us(){this.js=new Set}Ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return w.forEach(this.Ws,r=>{const i=R.fromPath(r);return this.Hs(e,i).next(s=>{s||n.removeEntry(i,B.min())})}).next(()=>(this.js=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hs(e,n).next(r=>{r?this.Ws.delete(n.toString()):this.Ws.add(n.toString())})}Ls(e){return 0}Hs(e,n){return w.or([()=>w.resolve(this.Qs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gs(e,n)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hF{constructor(e){this.serializer=e}O(e,n,r,i){const s=new bd("createOrUpgrade",n);r<1&&i>=1&&(function(a){a.createObjectStore("owner")}(e),function(a){a.createObjectStore("mutationQueues",{keyPath:"userId"}),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",_1,{unique:!0}),a.createObjectStore("documentMutations")}(e),s_(e),function(a){a.createObjectStore("remoteDocuments")}(e));let o=w.resolve();return r<3&&i>=3&&(r!==0&&(function(a){a.deleteObjectStore("targetDocuments"),a.deleteObjectStore("targets"),a.deleteObjectStore("targetGlobal")}(e),s_(e)),o=o.next(()=>function(a){const u=a.store("targetGlobal"),l={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:B.min().toTimestamp(),targetCount:0};return u.put("targetGlobalKey",l)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(a,u){return u.store("mutations").j().next(l=>{a.deleteObjectStore("mutations"),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",_1,{unique:!0});const c=u.store("mutations"),h=l.map(d=>c.put(d));return w.waitFor(h)})}(e,s))),o=o.next(()=>{(function(a){a.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.Ys(s))),r<6&&i>=6&&(o=o.next(()=>(function(a){a.createObjectStore("remoteDocumentGlobal")}(e),this.Xs(s)))),r<7&&i>=7&&(o=o.next(()=>this.Zs(s))),r<8&&i>=8&&(o=o.next(()=>this.ti(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(a){a.objectStoreNames.contains("remoteDocumentChanges")&&a.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.ei(s))),r<11&&i>=11&&(o=o.next(()=>{(function(a){a.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(a){a.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(a){const u=a.createObjectStore("documentOverlays",{keyPath:KL});u.createIndex("collectionPathOverlayIndex",QL,{unique:!1}),u.createIndex("collectionGroupOverlayIndex",YL,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(a){const u=a.createObjectStore("remoteDocumentsV14",{keyPath:ML});u.createIndex("documentKeyIndex",FL),u.createIndex("collectionGroupIndex",UL)}(e)).next(()=>this.ni(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.si(e,s))),r<15&&i>=15&&(o=o.next(()=>function(a){a.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),a.createObjectStore("indexState",{keyPath:qL}).createIndex("sequenceNumberIndex",GL,{unique:!1}),a.createObjectStore("indexEntries",{keyPath:HL}).createIndex("documentKeyIndex",WL,{unique:!1})}(e))),o}Xs(e){let n=0;return e.store("remoteDocuments").X((r,i)=>{n+=Dh(i)}).next(()=>{const r={byteSize:n};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}Ys(e){const n=e.store("mutationQueues"),r=e.store("mutations");return n.j().next(i=>w.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.j("userMutationsIndex",o).next(a=>w.forEach(a,u=>{q(u.userId===s.userId);const l=Bi(this.serializer,u);return TC(e,s.userId,l).next(()=>{})}))}))}Zs(e){const n=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.X((o,a)=>{const u=new ae(o),l=function(c){return[0,Bt(c)]}(u);s.push(n.get(l).next(c=>c?w.resolve():(h=>n.put({targetId:0,path:Bt(h),sequenceNumber:i.highestListenSequenceNumber}))(u)))}).next(()=>w.waitFor(s))})}ti(e,n){e.createObjectStore("collectionParents",{keyPath:BL});const r=n.store("collectionParents"),i=new Tv,s=o=>{if(i.add(o)){const a=o.lastSegment(),u=o.popLast();return r.put({collectionId:a,parent:Bt(u)})}};return n.store("remoteDocuments").X({Y:!0},(o,a)=>{const u=new ae(o);return s(u.popLast())}).next(()=>n.store("documentMutations").X({Y:!0},([o,a,u],l)=>{const c=Xn(a);return s(c.popLast())}))}ei(e){const n=e.store("targets");return n.X((r,i)=>{const s=ja(i),o=IC(this.serializer,s);return n.put(o)})}ni(e,n){const r=n.store("remoteDocuments"),i=[];return r.X((s,o)=>{const a=n.store("remoteDocumentsV14"),u=(l=o,l.document?new R(ae.fromString(l.document.name).popFirst(5)):l.noDocument?R.fromSegments(l.noDocument.path):l.unknownDocument?R.fromSegments(l.unknownDocument.path):U()).path.toArray();var l;/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const c={prefixPath:u.slice(0,u.length-2),collectionGroup:u[u.length-2],documentId:u[u.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(c))}).next(()=>w.waitFor(i))}si(e,n){const r=n.store("mutations"),i=xC(this.serializer),s=new bC(Md.zs,this.serializer.fe);return r.j().next(o=>{const a=new Map;return o.forEach(u=>{var l;let c=(l=a.get(u.userId))!==null&&l!==void 0?l:Z();Bi(this.serializer,u).keys().forEach(h=>c=c.add(h)),a.set(u.userId,c)}),w.forEach(a,(u,l)=>{const c=new st(l),h=$d.de(this.serializer,c),d=s.getIndexManager(c),p=Ld.de(c,this.serializer,d,s.referenceDelegate);return new NC(i,p,h,d).recalculateAndSaveOverlaysForDocumentKeys(new Vm(n,Xt.ct),u).next()})})}}function s_(t){t.createObjectStore("targetDocuments",{keyPath:zL}).createIndex("documentTargetsIndex",jL,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",VL,{unique:!0}),t.createObjectStore("targetGlobal")}const gp="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Cv{constructor(e,n,r,i,s,o,a,u,l,c,h=15){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.ii=s,this.window=o,this.document=a,this.ri=l,this.oi=c,this.ui=h,this.Os=null,this.Fs=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ci=null,this.inForeground=!1,this.ai=null,this.hi=null,this.li=Number.NEGATIVE_INFINITY,this.fi=d=>Promise.resolve(),!Cv.D())throw new k(I.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new eF(this,i),this.di=n+"main",this.serializer=new _C(u),this.wi=new Dn(this.di,this.ui,new hF(this.serializer)),this.Bs=new QM(this.referenceDelegate,this.serializer),this.remoteDocumentCache=xC(this.serializer),this.qs=new VM,this.window&&this.window.localStorage?this._i=this.window.localStorage:(this._i=null,c===!1&&qe("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new k(I.FAILED_PRECONDITION,gp);return this.gi(),this.yi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Bs.getHighestSequenceNumber(e))}).then(e=>{this.Os=new Xt(e,this.ri)}).then(()=>{this.Fs=!0}).catch(e=>(this.wi&&this.wi.close(),Promise.reject(e)))}Ii(e){return this.fi=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.wi.B(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ii.enqueueAndForget(async()=>{this.started&&await this.mi()}))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>dc(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Ti(e).next(n=>{n||(this.isPrimary=!1,this.ii.enqueueRetryable(()=>this.fi(!1)))})}).next(()=>this.Ei(e)).next(n=>this.isPrimary&&!n?this.Ai(e).next(()=>!1):!!n&&this.vi(e).next(()=>!0))).catch(e=>{if(Pi(e))return C("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return C("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ii.enqueueRetryable(()=>this.fi(e)),this.isPrimary=e})}Ti(e){return Ra(e).get("owner").next(n=>w.resolve(this.Ri(n)))}Pi(e){return dc(e).delete(this.clientId)}async bi(){if(this.isPrimary&&!this.Vi(this.li,18e5)){this.li=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=ct(n,"clientMetadata");return r.j().next(i=>{const s=this.Si(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return w.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this._i)for(const n of e)this._i.removeItem(this.Di(n.clientId))}}pi(){this.hi=this.ii.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.mi().then(()=>this.bi()).then(()=>this.pi()))}Ri(e){return!!e&&e.ownerId===this.clientId}Ei(e){return this.oi?w.resolve(!0):Ra(e).get("owner").next(n=>{if(n!==null&&this.Vi(n.leaseTimestampMs,5e3)&&!this.Ci(n.ownerId)){if(this.Ri(n)&&this.networkEnabled)return!0;if(!this.Ri(n)){if(!n.allowTabSynchronization)throw new k(I.FAILED_PRECONDITION,gp);return!1}}return!(!this.networkEnabled||!this.inForeground)||dc(e).j().next(r=>this.Si(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&C("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.Fs=!1,this.xi(),this.hi&&(this.hi.cancel(),this.hi=null),this.Ni(),this.ki(),await this.wi.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const n=new Vm(e,Xt.ct);return this.Ai(n).next(()=>this.Pi(n))}),this.wi.close(),this.Mi()}Si(e,n){return e.filter(r=>this.Vi(r.updateTimeMs,n)&&!this.Ci(r.clientId))}$i(){return this.runTransaction("getActiveClients","readonly",e=>dc(e).j().next(n=>this.Si(n,18e5).map(r=>r.clientId)))}get started(){return this.Fs}getMutationQueue(e,n){return Ld.de(e,this.serializer,n,this.referenceDelegate)}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new KM(e,this.serializer.fe.databaseId)}getDocumentOverlayCache(e){return $d.de(this.serializer,e)}getBundleCache(){return this.qs}runTransaction(e,n,r){C("IndexedDbPersistence","Starting transaction:",e);const i=n==="readonly"?"readonly":"readwrite",s=(o=this.ui)===15?JL:o===14?bk:o===13?Nk:o===12?XL:o===11?xk:void U();var o;let a;return this.wi.runTransaction(e,i,s,u=>(a=new Vm(u,this.Os?this.Os.next():Xt.ct),n==="readwrite-primary"?this.Ti(a).next(l=>!!l||this.Ei(a)).next(l=>{if(!l)throw qe(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ii.enqueueRetryable(()=>this.fi(!1)),new k(I.FAILED_PRECONDITION,Tk);return r(a)}).next(l=>this.vi(a).next(()=>l)):this.Oi(a).next(()=>r(a)))).then(u=>(a.raiseOnCommittedEvent(),u))}Oi(e){return Ra(e).get("owner").next(n=>{if(n!==null&&this.Vi(n.leaseTimestampMs,5e3)&&!this.Ci(n.ownerId)&&!this.Ri(n)&&!(this.oi||this.allowTabSynchronization&&n.allowTabSynchronization))throw new k(I.FAILED_PRECONDITION,gp)})}vi(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Ra(e).put("owner",n)}static D(){return Dn.D()}Ai(e){const n=Ra(e);return n.get("owner").next(r=>this.Ri(r)?(C("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):w.resolve())}Vi(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(qe(`Detected an update time that is in the future: ${e} > ${r}`),!1))}gi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.ai=()=>{this.ii.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.mi()))},this.document.addEventListener("visibilitychange",this.ai),this.inForeground=this.document.visibilityState==="visible")}Ni(){this.ai&&(this.document.removeEventListener("visibilitychange",this.ai),this.ai=null)}yi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.ci=()=>{this.xi();const n=/(?:Version|Mobile)\/1[456]/;zb()&&(navigator.appVersion.match(n)||navigator.userAgent.match(n))&&this.ii.enterRestrictedMode(!0),this.ii.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ci))}ki(){this.ci&&(this.window.removeEventListener("pagehide",this.ci),this.ci=null)}Ci(e){var n;try{const r=((n=this._i)===null||n===void 0?void 0:n.getItem(this.Di(e)))!==null;return C("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return qe("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}xi(){if(this._i)try{this._i.setItem(this.Di(this.clientId),String(Date.now()))}catch(e){qe("Failed to set zombie client id.",e)}}Mi(){if(this._i)try{this._i.removeItem(this.Di(this.clientId))}catch{}}Di(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Ra(t){return ct(t,"owner")}function dc(t){return ct(t,"clientMetadata")}function Av(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xv{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Fi=r,this.Bi=i}static Li(e,n){let r=Z(),i=Z();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new xv(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RC{constructor(){this.qi=!1}initialize(e,n){this.Ui=e,this.indexManager=n,this.qi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Ki(e,n).next(s=>s||this.Gi(e,n,i,r)).next(s=>s||this.Qi(e,n))}Ki(e,n){if(D1(n))return w.resolve(null);let r=nn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Nh(n,null,"F"),r=nn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=Z(...s);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const l=this.ji(n,a);return this.zi(n,l,o,u.readTime)?this.Ki(e,Nh(n,null,"F")):this.Wi(e,l,n,u)}))})))}Gi(e,n,r,i){return D1(n)||i.isEqual(B.min())?this.Qi(e,n):this.Ui.getDocuments(e,r).next(s=>{const o=this.ji(n,s);return this.zi(n,o,r,i)?this.Qi(e,n):(Fm()<=oe.DEBUG&&C("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Jm(n)),this.Wi(e,o,n,Ek(i,-1)))})}ji(e,n){let r=new Ue(Gk(e));return n.forEach((i,s)=>{Cl(e,s)&&(r=r.add(s))}),r}zi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Qi(e,n){return Fm()<=oe.DEBUG&&C("QueryEngine","Using full collection scan to execute query:",Jm(n)),this.Ui.getDocumentsMatchingQuery(e,n,fn.min())}Wi(e,n,r,i){return this.Ui.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dF{constructor(e,n,r,i){this.persistence=e,this.Hi=n,this.serializer=i,this.Ji=new $e(J),this.Yi=new Oi(s=>ws(s),Tl),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(r)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new NC(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function DC(t,e,n,r){return new dF(t,e,n,r)}async function PC(t,e){const n=L(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.tr(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=Z();for(const l of i){o.push(l.batchId);for(const c of l.mutations)u=u.add(c.key)}for(const l of s){a.push(l.batchId);for(const c of l.mutations)u=u.add(c.key)}return n.localDocuments.getDocuments(r,u).next(l=>({er:l,removedBatchIds:o,addedBatchIds:a}))})})}function fF(t,e){const n=L(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Zi.newChangeBuffer({trackRemovals:!0});return function(o,a,u,l){const c=u.batch,h=c.keys();let d=w.resolve();return h.forEach(p=>{d=d.next(()=>l.getEntry(a,p)).next(y=>{const v=u.docVersions.get(p);q(v!==null),y.version.compareTo(v)<0&&(c.applyToRemoteDocument(y,u),y.isValidDocument()&&(y.setReadTime(u.commitVersion),l.addEntry(y)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=Z();for(let u=0;u<o.mutationResults.length;++u)o.mutationResults[u].transformResults.length>0&&(a=a.add(o.batch.mutations[u].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function OC(t){const e=L(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Bs.getLastRemoteSnapshotVersion(n))}function pF(t,e){const n=L(t),r=e.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Zi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.Bs.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Bs.addMatchingKeys(s,c.addedDocuments,h)));let p=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?p=p.withResumeToken($t.EMPTY_BYTE_STRING,B.min()).withLastLimboFreeSnapshotVersion(B.min()):c.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(c.resumeToken,r)),i=i.insert(h,p),function(y,v,S){return y.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(d,p,c)&&a.push(n.Bs.updateTargetData(s,p))});let u=Jt(),l=Z();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push($C(s,o,e.documentUpdates).next(c=>{u=c.nr,l=c.sr})),!r.isEqual(B.min())){const c=n.Bs.getLastRemoteSnapshotVersion(s).next(h=>n.Bs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return w.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,l)).next(()=>u)}).then(s=>(n.Ji=i,s))}function $C(t,e,n){let r=Z(),i=Z();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Jt();return n.forEach((a,u)=>{const l=s.get(a);u.isFoundDocument()!==l.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(B.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!l.isValidDocument()||u.version.compareTo(l.version)>0||u.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):C("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",u.version)}),{nr:o,sr:i}})}function mF(t,e){const n=L(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Vo(t,e){const n=L(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Bs.getTargetData(r,e).next(s=>s?(i=s,w.resolve(i)):n.Bs.allocateTargetId(r).next(o=>(i=new vr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Bs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ji.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(r.targetId,r),n.Yi.set(e,r.targetId)),r})}async function zo(t,e,n){const r=L(t),i=r.Ji.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Pi(o))throw o;C("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ji=r.Ji.remove(e),r.Yi.delete(i.target)}function Ph(t,e,n){const r=L(t);let i=B.min(),s=Z();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,u,l){const c=L(a),h=c.Yi.get(l);return h!==void 0?w.resolve(c.Ji.get(h)):c.Bs.getTargetData(u,l)}(r,o,nn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Bs.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,e,n?i:B.min(),n?s:Z())).next(a=>(FC(r,qk(e),a),{documents:a,ir:s})))}function LC(t,e){const n=L(t),r=L(n.Bs),i=n.Ji.get(e);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",s=>r.le(s,e).next(o=>o?o.target:null))}function MC(t,e){const n=L(t),r=n.Xi.get(e)||B.min();return n.persistence.runTransaction("Get new document changes","readonly",i=>n.Zi.getAllFromCollectionGroup(i,e,Ek(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(FC(n,e,i),i))}function FC(t,e,n){let r=t.Xi.get(e)||B.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Xi.set(e,r)}async function gF(t,e,n,r){const i=L(t);let s=Z(),o=Jt();for(const l of n){const c=e.rr(l.metadata.name);l.document&&(s=s.add(c));const h=e.ur(l);h.setReadTime(e.cr(l.metadata.readTime)),o=o.insert(c,h)}const a=i.Zi.newChangeBuffer({trackRemovals:!0}),u=await Vo(i,function(l){return nn(ia(ae.fromString(`__bundle__/docs/${l}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",l=>$C(l,a,o).next(c=>(a.apply(l),c)).next(c=>i.Bs.removeMatchingKeysForTargetId(l,u.targetId).next(()=>i.Bs.addMatchingKeys(l,s,u.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(l,c.nr,c.sr)).next(()=>c.nr)))}async function yF(t,e,n=Z()){const r=await Vo(t,nn(Ev(e.bundledQuery))),i=L(t);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=He(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.qs.saveNamedQuery(s,e);const a=r.withResumeToken($t.EMPTY_BYTE_STRING,o);return i.Ji=i.Ji.insert(a.targetId,a),i.Bs.updateTargetData(s,a).next(()=>i.Bs.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.Bs.addMatchingKeys(s,n,r.targetId)).next(()=>i.qs.saveNamedQuery(s,e))})}function o_(t,e){return`firestore_clients_${t}_${e}`}function a_(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function yp(t,e){return`firestore_targets_${t}_${e}`}class Oh{constructor(e,n,r,i){this.user=e,this.batchId=n,this.state=r,this.error=i}static ar(e,n,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new k(i.error.code,i.error.message))),o?new Oh(e,n,i.state,s):(qe("SharedClientState",`Failed to parse mutation state for ID '${n}': ${r}`),null)}hr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class ou{constructor(e,n,r){this.targetId=e,this.state=n,this.error=r}static ar(e,n){const r=JSON.parse(n);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new k(r.error.code,r.error.message))),s?new ou(e,r.state,i):(qe("SharedClientState",`Failed to parse target state for ID '${e}': ${n}`),null)}hr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class $h{constructor(e,n){this.clientId=e,this.activeTargetIds=n}static ar(e,n){const r=JSON.parse(n);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=pv();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=Ck(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new $h(e,s):(qe("SharedClientState",`Failed to parse client data for instance '${e}': ${n}`),null)}}class Nv{constructor(e,n){this.clientId=e,this.onlineState=n}static ar(e){const n=JSON.parse(e);return typeof n=="object"&&["Unknown","Online","Offline"].indexOf(n.onlineState)!==-1&&typeof n.clientId=="string"?new Nv(n.clientId,n.onlineState):(qe("SharedClientState",`Failed to parse online state: ${e}`),null)}}class sg{constructor(){this.activeTargetIds=pv()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class vp{constructor(e,n,r,i,s){this.window=e,this.ii=n,this.persistenceKey=r,this.wr=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this._r=this.mr.bind(this),this.gr=new $e(J),this.started=!1,this.yr=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.pr=o_(this.persistenceKey,this.wr),this.Ir=function(a){return`firestore_sequence_number_${a}`}(this.persistenceKey),this.gr=this.gr.insert(this.wr,new sg),this.Tr=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Er=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Ar=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.vr=function(a){return`firestore_online_state_${a}`}(this.persistenceKey),this.Rr=function(a){return`firestore_bundle_loaded_v2_${a}`}(this.persistenceKey),this.window.addEventListener("storage",this._r)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.$i();for(const r of e){if(r===this.wr)continue;const i=this.getItem(o_(this.persistenceKey,r));if(i){const s=$h.ar(r,i);s&&(this.gr=this.gr.insert(s.clientId,s))}}this.Pr();const n=this.storage.getItem(this.vr);if(n){const r=this.br(n);r&&this.Vr(r)}for(const r of this.yr)this.mr(r);this.yr=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Ir,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Sr(this.gr)}isActiveQueryTarget(e){let n=!1;return this.gr.forEach((r,i)=>{i.activeTargetIds.has(e)&&(n=!0)}),n}addPendingMutation(e){this.Dr(e,"pending")}updateMutationState(e,n,r){this.Dr(e,n,r),this.Cr(e)}addLocalQueryTarget(e){let n="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(yp(this.persistenceKey,e));if(r){const i=ou.ar(e,r);i&&(n=i.state)}}return this.Nr.lr(e),this.Pr(),n}removeLocalQueryTarget(e){this.Nr.dr(e),this.Pr()}isLocalQueryTarget(e){return this.Nr.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(yp(this.persistenceKey,e))}updateQueryState(e,n,r){this.kr(e,n,r)}handleUserChange(e,n,r){n.forEach(i=>{this.Cr(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Mr(e)}notifyBundleLoaded(e){this.$r(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this._r),this.removeItem(this.pr),this.started=!1)}getItem(e){const n=this.storage.getItem(e);return C("SharedClientState","READ",e,n),n}setItem(e,n){C("SharedClientState","SET",e,n),this.storage.setItem(e,n)}removeItem(e){C("SharedClientState","REMOVE",e),this.storage.removeItem(e)}mr(e){const n=e;if(n.storageArea===this.storage){if(C("SharedClientState","EVENT",n.key,n.newValue),n.key===this.pr)return void qe("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.ii.enqueueRetryable(async()=>{if(this.started){if(n.key!==null){if(this.Tr.test(n.key)){if(n.newValue==null){const r=this.Or(n.key);return this.Fr(r,null)}{const r=this.Br(n.key,n.newValue);if(r)return this.Fr(r.clientId,r)}}else if(this.Er.test(n.key)){if(n.newValue!==null){const r=this.Lr(n.key,n.newValue);if(r)return this.qr(r)}}else if(this.Ar.test(n.key)){if(n.newValue!==null){const r=this.Ur(n.key,n.newValue);if(r)return this.Kr(r)}}else if(n.key===this.vr){if(n.newValue!==null){const r=this.br(n.newValue);if(r)return this.Vr(r)}}else if(n.key===this.Ir){const r=function(i){let s=Xt.ct;if(i!=null)try{const o=JSON.parse(i);q(typeof o=="number"),s=o}catch(o){qe("SharedClientState","Failed to read sequence number from WebStorage",o)}return s}(n.newValue);r!==Xt.ct&&this.sequenceNumberHandler(r)}else if(n.key===this.Rr){const r=this.Gr(n.newValue);await Promise.all(r.map(i=>this.syncEngine.Qr(i)))}}}else this.yr.push(n)})}}get Nr(){return this.gr.get(this.wr)}Pr(){this.setItem(this.pr,this.Nr.hr())}Dr(e,n,r){const i=new Oh(this.currentUser,e,n,r),s=a_(this.persistenceKey,this.currentUser,e);this.setItem(s,i.hr())}Cr(e){const n=a_(this.persistenceKey,this.currentUser,e);this.removeItem(n)}Mr(e){const n={clientId:this.wr,onlineState:e};this.storage.setItem(this.vr,JSON.stringify(n))}kr(e,n,r){const i=yp(this.persistenceKey,e),s=new ou(e,n,r);this.setItem(i,s.hr())}$r(e){const n=JSON.stringify(Array.from(e));this.setItem(this.Rr,n)}Or(e){const n=this.Tr.exec(e);return n?n[1]:null}Br(e,n){const r=this.Or(e);return $h.ar(r,n)}Lr(e,n){const r=this.Er.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return Oh.ar(new st(s),i,n)}Ur(e,n){const r=this.Ar.exec(e),i=Number(r[1]);return ou.ar(i,n)}br(e){return Nv.ar(e)}Gr(e){return JSON.parse(e)}async qr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.jr(e.batchId,e.state,e.error);C("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Kr(e){return this.syncEngine.zr(e.targetId,e.state,e.error)}Fr(e,n){const r=n?this.gr.insert(e,n):this.gr.remove(e),i=this.Sr(this.gr),s=this.Sr(r),o=[],a=[];return s.forEach(u=>{i.has(u)||o.push(u)}),i.forEach(u=>{s.has(u)||a.push(u)}),this.syncEngine.Wr(o,a).then(()=>{this.gr=r})}Vr(e){this.gr.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Sr(e){let n=pv();return e.forEach((r,i)=>{n=n.unionWith(i.activeTargetIds)}),n}}class UC{constructor(){this.Hr=new sg,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,n,r){this.Jr[e]=n}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new sg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vF{Yr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){C("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){C("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fc=null;function wp(){return fc===null?fc=268435456+Math.round(2147483648*Math.random()):fc++,"0x"+fc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wF={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _F{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bt="WebChannelConnection";class IF extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.mo=n+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,n,r,i,s){const o=wp(),a=this.To(e,n);C("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const u={};return this.Eo(u,i,s),this.Ao(e,a,u,r).then(l=>(C("RestConnection",`Received RPC '${e}' ${o}: `,l),l),l=>{throw Un("RestConnection",`RPC '${e}' ${o} failed with error: `,l,"url: ",a,"request:",r),l})}vo(e,n,r,i,s,o){return this.Io(e,n,r,i,s)}Eo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+ra,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}To(e,n){const r=wF[e];return`${this.mo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,n,r,i){const s=wp();return new Promise((o,a)=>{const u=new yL;u.setWithCredentials(!0),u.listenOnce(pL.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case pp.NO_ERROR:const c=u.getResponseJson();C(bt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case pp.TIMEOUT:C(bt,`RPC '${e}' ${s} timed out`),a(new k(I.DEADLINE_EXCEEDED,"Request time out"));break;case pp.HTTP_ERROR:const h=u.getStatus();if(C(bt,`RPC '${e}' ${s} failed with status:`,h,"response text:",u.getResponseText()),h>0){let d=u.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=d==null?void 0:d.error;if(p&&p.status&&p.message){const y=function(v){const S=v.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(S)>=0?S:I.UNKNOWN}(p.status);a(new k(y,p.message))}else a(new k(I.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new k(I.UNAVAILABLE,"Connection failed."));break;default:U()}}finally{C(bt,`RPC '${e}' ${s} completed.`)}});const l=JSON.stringify(i);C(bt,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",l,r,15)})}Ro(e,n,r){const i=wp(),s=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=dL(),a=fL(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(u.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(u.xmlHttpFactory=new gL({})),this.Eo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const c=s.join("");C(bt,`Creating RPC '${e}' stream ${i}: ${c}`,u);const h=o.createWebChannel(c,u);let d=!1,p=!1;const y=new _F({ro:S=>{p?C(bt,`Not sending because RPC '${e}' stream ${i} is closed:`,S):(d||(C(bt,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),C(bt,`RPC '${e}' stream ${i} sending:`,S),h.send(S))},oo:()=>h.close()}),v=(S,m,f)=>{S.listen(m,g=>{try{f(g)}catch(_){setTimeout(()=>{throw _},0)}})};return v(h,oc.EventType.OPEN,()=>{p||C(bt,`RPC '${e}' stream ${i} transport opened.`)}),v(h,oc.EventType.CLOSE,()=>{p||(p=!0,C(bt,`RPC '${e}' stream ${i} transport closed`),y.wo())}),v(h,oc.EventType.ERROR,S=>{p||(p=!0,Un(bt,`RPC '${e}' stream ${i} transport errored:`,S),y.wo(new k(I.UNAVAILABLE,"The operation could not be completed")))}),v(h,oc.EventType.MESSAGE,S=>{var m;if(!p){const f=S.data[0];q(!!f);const g=f,_=g.error||((m=g[0])===null||m===void 0?void 0:m.error);if(_){C(bt,`RPC '${e}' stream ${i} received error:`,_);const T=_.status;let A=function(P){const te=Ke[P];if(te!==void 0)return sC(te)}(T),b=_.message;A===void 0&&(A=I.INTERNAL,b="Unknown error status: "+T+" with message "+_.message),p=!0,y.wo(new k(A,b)),h.close()}else C(bt,`RPC '${e}' stream ${i} received:`,f),y._o(f)}}),v(a,mL.STAT_EVENT,S=>{S.stat===g1.PROXY?C(bt,`RPC '${e}' stream ${i} detected buffering proxy`):S.stat===g1.NOPROXY&&C(bt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{y.fo()},0),y}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VC(){return typeof window<"u"?window:null}function Fc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bl(t){return new NM(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bv{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ii=e,this.timerId=n,this.Po=r,this.bo=i,this.Vo=s,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const n=Math.floor(this.So+this.ko()),r=Math.max(0,Date.now()-this.Co),i=Math.max(0,n-r);i>0&&C("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zC{constructor(e,n,r,i,s,o,a,u){this.ii=e,this.$o=r,this.Oo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new bv(e,n)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,n){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():n&&n.code===I.RESOURCE_EXHAUSTED?(qe(n.toString()),qe("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):n&&n.code===I.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(n)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),n=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Fo===n&&this.Zo(r,i)},r=>{e(()=>{const i=new k(I.UNKNOWN,"Fetching auth token failed: "+r.message);return this.tu(i)})})}Zo(e,n){const r=this.Xo(this.Fo);this.stream=this.eu(e,n),this.stream.uo(()=>{r(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(i=>{r(()=>this.tu(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return C("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.Fo===e?n():(C("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class EF extends zC{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}eu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.qo.reset();const n=DM(this.serializer,e),r=function(i){if(!("targetChange"in i))return B.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?B.min():s.readTime?He(s.readTime):B.min()}(e);return this.listener.nu(n,r)}su(e){const n={};n.database=Ku(this.serializer),n.addTarget=function(i,s){let o;const a=s.target;if(o=Ah(a)?{documents:pC(i,a)}:{query:mC(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){o.resumeToken=lC(i,s.resumeToken);const u=Zm(i,s.expectedCount);u!==null&&(o.expectedCount=u)}else if(s.snapshotVersion.compareTo(B.min())>0){o.readTime=Uo(i,s.snapshotVersion.toTimestamp());const u=Zm(i,s.expectedCount);u!==null&&(o.expectedCount=u)}return o}(this.serializer,e);const r=OM(this.serializer,e);r&&(n.labels=r),this.Wo(n)}iu(e){const n={};n.database=Ku(this.serializer),n.removeTarget=e,this.Wo(n)}}class SF extends zC{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,n){return this.connection.Ro("Write",e,n)}onMessage(e){if(q(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const n=PM(e.writeResults,e.commitTime),r=He(e.commitTime);return this.listener.cu(r,n)}return q(!e.writeResults||e.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const e={};e.database=Ku(this.serializer),this.Wo(e)}uu(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Qu(this.serializer,r))};this.Wo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TF extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.lu=!1}fu(){if(this.lu)throw new k(I.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,n,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Io(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new k(I.UNKNOWN,i.toString())})}vo(e,n,r,i){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.vo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new k(I.UNKNOWN,s.toString())})}terminate(){this.lu=!0}}class kF{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(qe(n),this.mu=!1):C("OnlineStateTracker",n)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CF{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=s,this.Pu.Yr(o=>{r.enqueueAndForget(async()=>{$i(this)&&(C("RemoteStore","Restarting streams for network reachability change."),await async function(a){const u=L(a);u.vu.add(4),await aa(u),u.bu.set("Unknown"),u.vu.delete(4),await Rl(u)}(this))})}),this.bu=new kF(r,i)}}async function Rl(t){if($i(t))for(const e of t.Ru)await e(!0)}async function aa(t){for(const e of t.Ru)await e(!1)}function Fd(t,e){const n=L(t);n.Au.has(e.targetId)||(n.Au.set(e.targetId,e),Pv(n)?Dv(n):la(n).Ko()&&Rv(n,e))}function Yu(t,e){const n=L(t),r=la(n);n.Au.delete(e),r.Ko()&&jC(n,e),n.Au.size===0&&(r.Ko()?r.jo():$i(n)&&n.bu.set("Unknown"))}function Rv(t,e){if(t.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(B.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}la(t).su(e)}function jC(t,e){t.Vu.qt(e),la(t).iu(e)}function Dv(t){t.Vu=new kM({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),le:e=>t.Au.get(e)||null,ue:()=>t.datastore.serializer.databaseId}),la(t).start(),t.bu.gu()}function Pv(t){return $i(t)&&!la(t).Uo()&&t.Au.size>0}function $i(t){return L(t).vu.size===0}function BC(t){t.Vu=void 0}async function AF(t){t.Au.forEach((e,n)=>{Rv(t,e)})}async function xF(t,e){BC(t),Pv(t)?(t.bu.Iu(e),Dv(t)):t.bu.set("Unknown")}async function NF(t,e,n){if(t.bu.set("Online"),e instanceof uC&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.Au.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.Au.delete(o),r.Vu.removeTarget(o))}(t,e)}catch(r){C("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Lh(t,r)}else if(e instanceof Mc?t.Vu.Ht(e):e instanceof aC?t.Vu.ne(e):t.Vu.Xt(e),!n.isEqual(B.min()))try{const r=await OC(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.Vu.ce(s);return o.targetChanges.forEach((a,u)=>{if(a.resumeToken.approximateByteSize()>0){const l=i.Au.get(u);l&&i.Au.set(u,l.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach((a,u)=>{const l=i.Au.get(a);if(!l)return;i.Au.set(a,l.withResumeToken($t.EMPTY_BYTE_STRING,l.snapshotVersion)),jC(i,a);const c=new vr(l.target,a,u,l.sequenceNumber);Rv(i,c)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){C("RemoteStore","Failed to raise snapshot:",r),await Lh(t,r)}}async function Lh(t,e,n){if(!Pi(e))throw e;t.vu.add(1),await aa(t),t.bu.set("Offline"),n||(n=()=>OC(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{C("RemoteStore","Retrying IndexedDB access"),await n(),t.vu.delete(1),await Rl(t)})}function qC(t,e){return e().catch(n=>Lh(t,n,e))}async function ua(t){const e=L(t),n=_i(e);let r=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;bF(e);)try{const i=await mF(e.localStore,r);if(i===null){e.Eu.length===0&&n.jo();break}r=i.batchId,RF(e,i)}catch(i){await Lh(e,i)}GC(e)&&HC(e)}function bF(t){return $i(t)&&t.Eu.length<10}function RF(t,e){t.Eu.push(e);const n=_i(t);n.Ko()&&n.ou&&n.uu(e.mutations)}function GC(t){return $i(t)&&!_i(t).Uo()&&t.Eu.length>0}function HC(t){_i(t).start()}async function DF(t){_i(t).hu()}async function PF(t){const e=_i(t);for(const n of t.Eu)e.uu(n.mutations)}async function OF(t,e,n){const r=t.Eu.shift(),i=yv.from(r,e,n);await qC(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await ua(t)}async function $F(t,e){e&&_i(t).ou&&await async function(n,r){if(i=r.code,iC(i)&&i!==I.ABORTED){const s=n.Eu.shift();_i(n).Qo(),await qC(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await ua(n)}var i}(t,e),GC(t)&&HC(t)}async function l_(t,e){const n=L(t);n.asyncQueue.verifyOperationInProgress(),C("RemoteStore","RemoteStore received new credentials");const r=$i(n);n.vu.add(3),await aa(n),r&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.vu.delete(3),await Rl(n)}async function og(t,e){const n=L(t);e?(n.vu.delete(2),await Rl(n)):e||(n.vu.add(2),await aa(n),n.bu.set("Unknown"))}function la(t){return t.Su||(t.Su=function(e,n,r){const i=L(e);return i.fu(),new EF(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{uo:AF.bind(null,t),ao:xF.bind(null,t),nu:NF.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Qo(),Pv(t)?Dv(t):t.bu.set("Unknown")):(await t.Su.stop(),BC(t))})),t.Su}function _i(t){return t.Du||(t.Du=function(e,n,r){const i=L(e);return i.fu(),new SF(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{uo:DF.bind(null,t),ao:$F.bind(null,t),au:PF.bind(null,t),cu:OF.bind(null,t)}),t.Ru.push(async e=>{e?(t.Du.Qo(),await ua(t)):(await t.Du.stop(),t.Eu.length>0&&(C("RemoteStore",`Stopping write stream with ${t.Eu.length} pending writes`),t.Eu=[]))})),t.Du}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ov{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new at,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Ov(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new k(I.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ca(t,e){if(qe("AsyncQueue",`${e}: ${t}`),Pi(t))return new k(I.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(e){this.comparator=e?(n,r)=>e(n,r)||R.comparator(n.key,r.key):(n,r)=>R.comparator(n.key,r.key),this.keyedMap=Va(),this.sortedSet=new $e(this.comparator)}static emptySet(e){return new So(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof So)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new So;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c_{constructor(){this.Cu=new $e(R.comparator)}track(e){const n=e.doc.key,r=this.Cu.get(n);r?e.type!==0&&r.type===3?this.Cu=this.Cu.insert(n,e):e.type===3&&r.type!==1?this.Cu=this.Cu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Cu=this.Cu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Cu=this.Cu.remove(n):e.type===1&&r.type===2?this.Cu=this.Cu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):U():this.Cu=this.Cu.insert(n,e)}xu(){const e=[];return this.Cu.inorderTraversal((n,r)=>{e.push(r)}),e}}class jo{constructor(e,n,r,i,s,o,a,u,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=l}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new jo(e,n,So.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&kl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LF{constructor(){this.Nu=void 0,this.listeners=[]}}class MF{constructor(){this.queries=new Oi(e=>Bk(e),kl),this.onlineState="Unknown",this.ku=new Set}}async function $v(t,e){const n=L(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new LF),i)try{s.Nu=await n.onListen(r)}catch(o){const a=ca(o,`Initialization of query '${Jm(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Mu(n.onlineState),s.Nu&&e.$u(s.Nu)&&Mv(n)}async function Lv(t,e){const n=L(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function FF(t,e){const n=L(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.$u(i)&&(r=!0);o.Nu=i}}r&&Mv(n)}function UF(t,e,n){const r=L(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Mv(t){t.ku.forEach(e=>{e.next()})}class Fv{constructor(e,n,r){this.query=e,this.Ou=n,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=r||{}}$u(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new jo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),n=!0):this.qu(e,this.onlineState)&&(this.Uu(e),n=!0),this.Bu=e,n}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let n=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),n=!0),n}qu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Ku||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Lu(e){if(e.docChanges.length>0)return!0;const n=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Uu(e){e=jo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VF{constructor(e,n){this.Gu=e,this.byteLength=n}Qu(){return"metadata"in this.Gu}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h_{constructor(e){this.serializer=e}rr(e){return rr(this.serializer,e)}ur(e){return e.metadata.exists?fC(this.serializer,e.document,!1):ke.newNoDocument(this.rr(e.metadata.name),this.cr(e.metadata.readTime))}cr(e){return He(e)}}class zF{constructor(e,n,r){this.ju=e,this.localStore=n,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=WC(e)}zu(e){this.progress.bytesLoaded+=e.byteLength;let n=this.progress.documentsLoaded;if(e.Gu.namedQuery)this.queries.push(e.Gu.namedQuery);else if(e.Gu.documentMetadata){this.documents.push({metadata:e.Gu.documentMetadata}),e.Gu.documentMetadata.exists||++n;const r=ae.fromString(e.Gu.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.Gu.document&&(this.documents[this.documents.length-1].document=e.Gu.document,++n);return n!==this.progress.documentsLoaded?(this.progress.documentsLoaded=n,Object.assign({},this.progress)):null}Wu(e){const n=new Map,r=new h_(this.serializer);for(const i of e)if(i.metadata.queries){const s=r.rr(i.metadata.name);for(const o of i.metadata.queries){const a=(n.get(o)||Z()).add(s);n.set(o,a)}}return n}async complete(){const e=await gF(this.localStore,new h_(this.serializer),this.documents,this.ju.id),n=this.Wu(this.documents);for(const r of this.queries)await yF(this.localStore,r,n.get(r.name));return this.progress.taskState="Success",{progress:this.progress,Hu:this.collectionGroups,Ju:e}}}function WC(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KC{constructor(e){this.key=e}}class QC{constructor(e){this.key=e}}class YC{constructor(e,n){this.query=e,this.Yu=n,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=Z(),this.mutatedKeys=Z(),this.tc=Gk(e),this.ec=new So(this.tc)}get nc(){return this.Yu}sc(e,n){const r=n?n.ic:new c_,i=n?n.ec:this.ec;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,l=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),p=Cl(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),v=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let S=!1;d&&p?d.data.isEqual(p.data)?y!==v&&(r.track({type:3,doc:p}),S=!0):this.rc(d,p)||(r.track({type:2,doc:p}),S=!0,(u&&this.tc(p,u)>0||l&&this.tc(p,l)<0)&&(a=!0)):!d&&p?(r.track({type:0,doc:p}),S=!0):d&&!p&&(r.track({type:1,doc:d}),S=!0,(u||l)&&(a=!0)),S&&(p?(o=o.add(p),s=v?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{ec:o,ic:r,zi:a,mutatedKeys:s}}rc(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const s=e.ic.xu();s.sort((l,c)=>function(h,d){const p=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return U()}};return p(h)-p(d)}(l.type,c.type)||this.tc(l.doc,c.doc)),this.oc(r);const o=n?this.uc():[],a=this.Zu.size===0&&this.current?1:0,u=a!==this.Xu;return this.Xu=a,s.length!==0||u?{snapshot:new jo(this.query,e.ec,i,s,e.mutatedKeys,a===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new c_,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(n=>this.Yu=this.Yu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Yu=this.Yu.delete(n)),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=Z(),this.ec.forEach(r=>{this.ac(r.key)&&(this.Zu=this.Zu.add(r.key))});const n=[];return e.forEach(r=>{this.Zu.has(r)||n.push(new QC(r))}),this.Zu.forEach(r=>{e.has(r)||n.push(new KC(r))}),n}hc(e){this.Yu=e.ir,this.Zu=Z();const n=this.sc(e.documents);return this.applyChanges(n,!0)}lc(){return jo.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class jF{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class BF{constructor(e){this.key=e,this.fc=!1}}class qF{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new Oi(a=>Bk(a),kl),this._c=new Map,this.mc=new Set,this.gc=new $e(R.comparator),this.yc=new Map,this.Ic=new kv,this.Tc={},this.Ec=new Map,this.Ac=Ts.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function GF(t,e){const n=Bv(t);let r,i;const s=n.wc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.lc();else{const o=await Vo(n.localStore,nn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await Uv(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&Fd(n.remoteStore,o)}return i}async function Uv(t,e,n,r,i){t.Rc=(h,d,p)=>async function(y,v,S,m){let f=v.view.sc(S);f.zi&&(f=await Ph(y.localStore,v.query,!1).then(({documents:T})=>v.view.sc(T,f)));const g=m&&m.targetChanges.get(v.targetId),_=v.view.applyChanges(f,y.isPrimaryClient,g);return ag(y,v.targetId,_.cc),_.snapshot}(t,h,d,p);const s=await Ph(t.localStore,e,!0),o=new YC(e,s.ir),a=o.sc(s.documents),u=Nl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),l=o.applyChanges(a,t.isPrimaryClient,u);ag(t,n,l.cc);const c=new jF(e,n,o);return t.wc.set(e,c),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),l.snapshot}async function HF(t,e){const n=L(t),r=n.wc.get(e),i=n._c.get(r.targetId);if(i.length>1)return n._c.set(r.targetId,i.filter(s=>!kl(s,e))),void n.wc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await zo(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Yu(n.remoteStore,r.targetId),Bo(n,r.targetId)}).catch(Di)):(Bo(n,r.targetId),await zo(n.localStore,r.targetId,!0))}async function WF(t,e,n){const r=qv(t);try{const i=await function(s,o){const a=L(s),u=be.now(),l=o.reduce((d,p)=>d.add(p.key),Z());let c,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let p=Jt(),y=Z();return a.Zi.getEntries(d,l).next(v=>{p=v,p.forEach((S,m)=>{m.isValidDocument()||(y=y.add(S))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,p)).next(v=>{c=v;const S=[];for(const m of o){const f=EM(m,c.get(m.key).overlayedDocument);f!=null&&S.push(new Pr(m.key,f,Ok(f.value.mapValue),Ne.exists(!0)))}return a.mutationQueue.addMutationBatch(d,u,S,o)}).next(v=>{h=v;const S=v.applyToLocalDocumentSet(c,y);return a.documentOverlayCache.saveOverlays(d,v.batchId,S)})}).then(()=>({batchId:h.batchId,changes:Wk(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let u=s.Tc[s.currentUser.toKey()];u||(u=new $e(J)),u=u.insert(o,a),s.Tc[s.currentUser.toKey()]=u}(r,i.batchId,n),await Or(r,i.changes),await ua(r.remoteStore)}catch(i){const s=ca(i,"Failed to persist write");n.reject(s)}}async function XC(t,e){const n=L(t);try{const r=await pF(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.yc.get(s);o&&(q(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.fc=!0:i.modifiedDocuments.size>0?q(o.fc):i.removedDocuments.size>0&&(q(o.fc),o.fc=!1))}),await Or(n,r,e)}catch(r){await Di(r)}}function d_(t,e,n){const r=L(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.wc.forEach((s,o)=>{const a=o.view.Mu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=L(s);a.onlineState=o;let u=!1;a.queries.forEach((l,c)=>{for(const h of c.listeners)h.Mu(o)&&(u=!0)}),u&&Mv(a)}(r.eventManager,e),i.length&&r.dc.nu(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function KF(t,e,n){const r=L(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.yc.get(e),s=i&&i.key;if(s){let o=new $e(R.comparator);o=o.insert(s,ke.newNoDocument(s,B.min()));const a=Z().add(s),u=new xl(B.min(),new Map,new $e(J),o,a);await XC(r,u),r.gc=r.gc.remove(s),r.yc.delete(e),jv(r)}else await zo(r.localStore,e,!1).then(()=>Bo(r,e,n)).catch(Di)}async function QF(t,e){const n=L(t),r=e.batch.batchId;try{const i=await fF(n.localStore,e);zv(n,r,null),Vv(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Or(n,i)}catch(i){await Di(i)}}async function YF(t,e,n){const r=L(t);try{const i=await function(s,o){const a=L(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let l;return a.mutationQueue.lookupMutationBatch(u,o).next(c=>(q(c!==null),l=c.keys(),a.mutationQueue.removeMutationBatch(u,c))).next(()=>a.mutationQueue.performConsistencyCheck(u)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(u,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,l)).next(()=>a.localDocuments.getDocuments(u,l))})}(r.localStore,e);zv(r,e,n),Vv(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Or(r,i)}catch(i){await Di(i)}}async function XF(t,e){const n=L(t);$i(n.remoteStore)||C("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(s){const o=L(s);return o.persistence.runTransaction("Get highest unacknowledged batch id","readonly",a=>o.mutationQueue.getHighestUnacknowledgedBatchId(a))}(n.localStore);if(r===-1)return void e.resolve();const i=n.Ec.get(r)||[];i.push(e),n.Ec.set(r,i)}catch(r){const i=ca(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function Vv(t,e){(t.Ec.get(e)||[]).forEach(n=>{n.resolve()}),t.Ec.delete(e)}function zv(t,e,n){const r=L(t);let i=r.Tc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Tc[r.currentUser.toKey()]=i}}function Bo(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t._c.get(e))t.wc.delete(r),n&&t.dc.Pc(r,n);t._c.delete(e),t.isPrimaryClient&&t.Ic.Is(e).forEach(r=>{t.Ic.containsKey(r)||JC(t,r)})}function JC(t,e){t.mc.delete(e.path.canonicalString());const n=t.gc.get(e);n!==null&&(Yu(t.remoteStore,n),t.gc=t.gc.remove(e),t.yc.delete(n),jv(t))}function ag(t,e,n){for(const r of n)r instanceof KC?(t.Ic.addReference(r.key,e),JF(t,r)):r instanceof QC?(C("SyncEngine","Document no longer in limbo: "+r.key),t.Ic.removeReference(r.key,e),t.Ic.containsKey(r.key)||JC(t,r.key)):U()}function JF(t,e){const n=e.key,r=n.path.canonicalString();t.gc.get(n)||t.mc.has(r)||(C("SyncEngine","New document in limbo: "+n),t.mc.add(r),jv(t))}function jv(t){for(;t.mc.size>0&&t.gc.size<t.maxConcurrentLimboResolutions;){const e=t.mc.values().next().value;t.mc.delete(e);const n=new R(ae.fromString(e)),r=t.Ac.next();t.yc.set(r,new BF(n)),t.gc=t.gc.insert(n,r),Fd(t.remoteStore,new vr(nn(ia(n.path)),r,"TargetPurposeLimboResolution",Xt.ct))}}async function Or(t,e,n){const r=L(t),i=[],s=[],o=[];r.wc.isEmpty()||(r.wc.forEach((a,u)=>{o.push(r.Rc(u,e,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(u.targetId,l!=null&&l.fromCache?"not-current":"current"),l){i.push(l);const c=xv.Li(u.targetId,l);s.push(c)}}))}),await Promise.all(o),r.dc.nu(i),await async function(a,u){const l=L(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>w.forEach(u,h=>w.forEach(h.Fi,d=>l.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>w.forEach(h.Bi,d=>l.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!Pi(c))throw c;C("LocalStore","Failed to update sequence numbers: "+c)}for(const c of u){const h=c.targetId;if(!c.fromCache){const d=l.Ji.get(h),p=d.snapshotVersion,y=d.withLastLimboFreeSnapshotVersion(p);l.Ji=l.Ji.insert(h,y)}}}(r.localStore,s))}async function ZF(t,e){const n=L(t);if(!n.currentUser.isEqual(e)){C("SyncEngine","User change. New user:",e.toKey());const r=await PC(n.localStore,e);n.currentUser=e,function(i,s){i.Ec.forEach(o=>{o.forEach(a=>{a.reject(new k(I.CANCELLED,s))})}),i.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Or(n,r.er)}}function e4(t,e){const n=L(t),r=n.yc.get(e);if(r&&r.fc)return Z().add(r.key);{let i=Z();const s=n._c.get(e);if(!s)return i;for(const o of s){const a=n.wc.get(o);i=i.unionWith(a.view.nc)}return i}}async function t4(t,e){const n=L(t),r=await Ph(n.localStore,e.query,!0),i=e.view.hc(r);return n.isPrimaryClient&&ag(n,e.targetId,i.cc),i}async function n4(t,e){const n=L(t);return MC(n.localStore,e).then(r=>Or(n,r))}async function r4(t,e,n,r){const i=L(t),s=await function(o,a){const u=L(o),l=L(u.mutationQueue);return u.persistence.runTransaction("Lookup mutation documents","readonly",c=>l.Sn(c,a).next(h=>h?u.localDocuments.getDocuments(c,h):w.resolve(null)))}(i.localStore,e);s!==null?(n==="pending"?await ua(i.remoteStore):n==="acknowledged"||n==="rejected"?(zv(i,e,r||null),Vv(i,e),function(o,a){L(L(o).mutationQueue).Cn(a)}(i.localStore,e)):U(),await Or(i,s)):C("SyncEngine","Cannot apply mutation batch with id: "+e)}async function i4(t,e){const n=L(t);if(Bv(n),qv(n),e===!0&&n.vc!==!0){const r=n.sharedClientState.getAllActiveQueryTargets(),i=await f_(n,r.toArray());n.vc=!0,await og(n.remoteStore,!0);for(const s of i)Fd(n.remoteStore,s)}else if(e===!1&&n.vc!==!1){const r=[];let i=Promise.resolve();n._c.forEach((s,o)=>{n.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(Bo(n,o),zo(n.localStore,o,!0))),Yu(n.remoteStore,o)}),await i,await f_(n,r),function(s){const o=L(s);o.yc.forEach((a,u)=>{Yu(o.remoteStore,u)}),o.Ic.Ts(),o.yc=new Map,o.gc=new $e(R.comparator)}(n),n.vc=!1,await og(n.remoteStore,!1)}}async function f_(t,e,n){const r=L(t),i=[],s=[];for(const o of e){let a;const u=r._c.get(o);if(u&&u.length!==0){a=await Vo(r.localStore,nn(u[0]));for(const l of u){const c=r.wc.get(l),h=await t4(r,c);h.snapshot&&s.push(h.snapshot)}}else{const l=await LC(r.localStore,o);a=await Vo(r.localStore,l),await Uv(r,ZC(l),o,!1,a.resumeToken)}i.push(a)}return r.dc.nu(s),i}function ZC(t){return jk(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function s4(t){const e=L(t);return L(L(e.localStore).persistence).$i()}async function o4(t,e,n,r){const i=L(t);if(i.vc)return void C("SyncEngine","Ignoring unexpected query state notification.");const s=i._c.get(e);if(s&&s.length>0)switch(n){case"current":case"not-current":{const o=await MC(i.localStore,qk(s[0])),a=xl.createSynthesizedRemoteEventForCurrentChange(e,n==="current",$t.EMPTY_BYTE_STRING);await Or(i,o,a);break}case"rejected":await zo(i.localStore,e,!0),Bo(i,e,r);break;default:U()}}async function a4(t,e,n){const r=Bv(t);if(r.vc){for(const i of e){if(r._c.has(i)){C("SyncEngine","Adding an already active target "+i);continue}const s=await LC(r.localStore,i),o=await Vo(r.localStore,s);await Uv(r,ZC(s),o.targetId,!1,o.resumeToken),Fd(r.remoteStore,o)}for(const i of n)r._c.has(i)&&await zo(r.localStore,i,!1).then(()=>{Yu(r.remoteStore,i),Bo(r,i)}).catch(Di)}}function Bv(t){const e=L(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=XC.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=e4.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=KF.bind(null,e),e.dc.nu=FF.bind(null,e.eventManager),e.dc.Pc=UF.bind(null,e.eventManager),e}function qv(t){const e=L(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=QF.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=YF.bind(null,e),e}function u4(t,e,n){const r=L(t);(async function(i,s,o){try{const a=await s.getMetadata();if(await function(h,d){const p=L(h),y=He(d.createTime);return p.persistence.runTransaction("hasNewerBundle","readonly",v=>p.qs.getBundleMetadata(v,d.id)).then(v=>!!v&&v.createTime.compareTo(y)>=0)}(i.localStore,a))return await s.close(),o._completeWith(function(h){return{taskState:"Success",documentsLoaded:h.totalDocuments,bytesLoaded:h.totalBytes,totalDocuments:h.totalDocuments,totalBytes:h.totalBytes}}(a)),Promise.resolve(new Set);o._updateProgress(WC(a));const u=new zF(a,i.localStore,s.serializer);let l=await s.bc();for(;l;){const h=await u.zu(l);h&&o._updateProgress(h),l=await s.bc()}const c=await u.complete();return await Or(i,c.Ju,void 0),await function(h,d){const p=L(h);return p.persistence.runTransaction("Save bundle","readwrite",y=>p.qs.saveBundleMetadata(y,d))}(i.localStore,a),o._completeWith(c.progress),Promise.resolve(c.Hu)}catch(a){return Un("SyncEngine",`Loading bundle failed with ${a}`),o._failWith(a),Promise.resolve(new Set)}})(r,e,n).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class ug{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=bl(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return DC(this.persistence,new RC,e.initialUser,this.serializer)}createPersistence(e){return new bC(Md.zs,this.serializer)}createSharedClientState(e){return new UC}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class eA extends ug{constructor(e,n,r){super(),this.Vc=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Vc.initialize(this,e),await qv(this.Vc.syncEngine),await ua(this.Vc.remoteStore),await this.persistence.Ii(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){return DC(this.persistence,new RC,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,n){const r=this.persistence.referenceDelegate.garbageCollector;return new XM(r,e.asyncQueue,n)}createIndexBackfillerScheduler(e,n){const r=new OL(n,this.persistence);return new PL(e.asyncQueue,r)}createPersistence(e){const n=Av(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Kt.withCacheSize(this.cacheSizeBytes):Kt.DEFAULT;return new Cv(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,VC(),Fc(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new UC}}class l4 extends eA{constructor(e,n){super(e,n,!1),this.Vc=e,this.cacheSizeBytes=n,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const n=this.Vc.syncEngine;this.sharedClientState instanceof vp&&(this.sharedClientState.syncEngine={jr:r4.bind(null,n),zr:o4.bind(null,n),Wr:a4.bind(null,n),$i:s4.bind(null,n),Qr:n4.bind(null,n)},await this.sharedClientState.start()),await this.persistence.Ii(async r=>{await i4(this.Vc.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){const n=VC();if(!vp.D(n))throw new k(I.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=Av(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new vp(n,e.asyncQueue,r,e.clientId,e.initialUser)}}class Gv{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>d_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=ZF.bind(null,this.syncEngine),await og(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new MF}createDatastore(e){const n=bl(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new IF(i));var i;return function(s,o,a,u){return new TF(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>d_(this.syncEngine,a,0),o=u_.D()?new u_:new vF,new CF(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,u,l){const c=new qF(r,i,s,o,a,u);return l&&(c.vc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=L(e);C("RemoteStore","RemoteStore shutting down."),n.vu.add(5),await aa(n),n.Pu.shutdown(),n.bu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p_(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):qe("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c4{constructor(e,n){this.Cc=e,this.serializer=n,this.metadata=new at,this.buffer=new Uint8Array,this.xc=new TextDecoder("utf-8"),this.Nc().then(r=>{r&&r.Qu()?this.metadata.resolve(r.Gu.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.Gu)}`))},r=>this.metadata.reject(r))}close(){return this.Cc.cancel()}async getMetadata(){return this.metadata.promise}async bc(){return await this.getMetadata(),this.Nc()}async Nc(){const e=await this.kc();if(e===null)return null;const n=this.xc.decode(e),r=Number(n);isNaN(r)&&this.Mc(`length string (${n}) is not valid number`);const i=await this.$c(r);return new VF(JSON.parse(i),e.length+r)}Oc(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async kc(){for(;this.Oc()<0&&!await this.Fc(););if(this.buffer.length===0)return null;const e=this.Oc();e<0&&this.Mc("Reached the end of bundle when a length string is expected.");const n=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),n}async $c(e){for(;this.buffer.length<e;)await this.Fc()&&this.Mc("Reached the end of bundle when more is expected.");const n=this.xc.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),n}Mc(e){throw this.Cc.cancel(),new Error(`Invalid bundle format: ${e}`)}async Fc(){const e=await this.Cc.read();if(!e.done){const n=new Uint8Array(this.buffer.length+e.value.length);n.set(this.buffer),n.set(e.value,this.buffer.length),this.buffer=n}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h4{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new k(I.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const n=await async function(r,i){const s=L(r),o=Ku(s.serializer)+"/documents",a={documents:i.map(h=>Wu(s.serializer,h))},u=await s.vo("BatchGetDocuments",o,a,i.length),l=new Map;u.forEach(h=>{const d=RM(s.serializer,h);l.set(d.key.toString(),d)});const c=[];return i.forEach(h=>{const d=l.get(h.toString());q(!!d),c.push(d)}),c}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new oa(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=R.fromPath(r);this.mutations.push(new mv(i,this.precondition(i)))}),await async function(n,r){const i=L(n),s=Ku(i.serializer)+"/documents",o={writes:r.map(a=>Qu(i.serializer,a))};await i.Io("Commit",s,o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw U();n=B.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new k(I.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(B.min())?Ne.exists(!1):Ne.updateTime(n):Ne.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(B.min()))throw new k(I.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Ne.updateTime(n)}return Ne.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d4{constructor(e,n,r,i,s){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=i,this.deferred=s,this.Bc=r.maxAttempts,this.qo=new bv(this.asyncQueue,"transaction_retry")}run(){this.Bc-=1,this.Lc()}Lc(){this.qo.No(async()=>{const e=new h4(this.datastore),n=this.qc(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.Uc(i)}))}).catch(r=>{this.Uc(r)})})}qc(e){try{const n=this.updateFunction(e);return!El(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}Uc(e){this.Bc>0&&this.Kc(e)?(this.Bc-=1,this.asyncQueue.enqueueAndForget(()=>(this.Lc(),Promise.resolve()))):this.deferred.reject(e)}Kc(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!iC(n)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f4{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=st.UNAUTHENTICATED,this.clientId=wk.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{C("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(C("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new k(I.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new at;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=ca(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Uc(t,e){t.asyncQueue.verifyOperationInProgress(),C("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await PC(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function lg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Hv(t);C("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>l_(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>l_(e.remoteStore,s)),t._onlineComponents=e}function tA(t){return t.name==="FirebaseError"?t.code===I.FAILED_PRECONDITION||t.code===I.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function Hv(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){C("FirestoreClient","Using user provided OfflineComponentProvider");try{await Uc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!tA(n))throw n;Un("Error using user provided cache. Falling back to memory cache: "+n),await Uc(t,new ug)}}else C("FirestoreClient","Using default OfflineComponentProvider"),await Uc(t,new ug);return t._offlineComponents}async function Vd(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(C("FirestoreClient","Using user provided OnlineComponentProvider"),await lg(t,t._uninitializedComponentsProvider._online)):(C("FirestoreClient","Using default OnlineComponentProvider"),await lg(t,new Gv))),t._onlineComponents}function nA(t){return Hv(t).then(e=>e.persistence)}function Wv(t){return Hv(t).then(e=>e.localStore)}function rA(t){return Vd(t).then(e=>e.remoteStore)}function Kv(t){return Vd(t).then(e=>e.syncEngine)}function p4(t){return Vd(t).then(e=>e.datastore)}async function qo(t){const e=await Vd(t),n=e.eventManager;return n.onListen=GF.bind(null,e.syncEngine),n.onUnlisten=HF.bind(null,e.syncEngine),n}function m4(t){return t.asyncQueue.enqueue(async()=>{const e=await nA(t),n=await rA(t);return e.setNetworkEnabled(!0),function(r){const i=L(r);return i.vu.delete(0),Rl(i)}(n)})}function g4(t){return t.asyncQueue.enqueue(async()=>{const e=await nA(t),n=await rA(t);return e.setNetworkEnabled(!1),async function(r){const i=L(r);i.vu.add(0),await aa(i),i.bu.set("Offline")}(n)})}function y4(t,e){const n=new at;return t.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await function(a,u){const l=L(a);return l.persistence.runTransaction("read document","readonly",c=>l.localDocuments.getDocument(c,u))}(r,i);o.isFoundDocument()?s.resolve(o):o.isNoDocument()?s.resolve(null):s.reject(new k(I.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(o){const a=ca(o,`Failed to get document '${i} from cache`);s.reject(a)}}(await Wv(t),e,n)),n.promise}function iA(t,e,n={}){const r=new at;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,u){const l=new Ud({next:h=>{s.enqueueAndForget(()=>Lv(i,c));const d=h.docs.has(o);!d&&h.fromCache?u.reject(new k(I.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?u.reject(new k(I.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(h)},error:h=>u.reject(h)}),c=new Fv(ia(o.path),l,{includeMetadataChanges:!0,Ku:!0});return $v(i,c)}(await qo(t),t.asyncQueue,e,n,r)),r.promise}function v4(t,e){const n=new at;return t.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await Ph(r,i,!0),a=new YC(i,o.ir),u=a.sc(o.documents),l=a.applyChanges(u,!1);s.resolve(l.snapshot)}catch(o){const a=ca(o,`Failed to execute query '${i} against cache`);s.reject(a)}}(await Wv(t),e,n)),n.promise}function sA(t,e,n={}){const r=new at;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,u){const l=new Ud({next:h=>{s.enqueueAndForget(()=>Lv(i,c)),h.fromCache&&a.source==="server"?u.reject(new k(I.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(h)},error:h=>u.reject(h)}),c=new Fv(o,l,{includeMetadataChanges:!0,Ku:!0});return $v(i,c)}(await qo(t),t.asyncQueue,e,n,r)),r.promise}function w4(t,e){const n=new Ud(e);return t.asyncQueue.enqueueAndForget(async()=>function(r,i){L(r).ku.add(i),i.next()}(await qo(t),n)),()=>{n.Dc(),t.asyncQueue.enqueueAndForget(async()=>function(r,i){L(r).ku.delete(i)}(await qo(t),n))}}function _4(t,e,n,r){const i=function(s,o){let a;return a=typeof s=="string"?oC().encode(s):s,function(u,l){return new c4(u,l)}(function(u,l){if(u instanceof Uint8Array)return p_(u,l);if(u instanceof ArrayBuffer)return p_(new Uint8Array(u),l);if(u instanceof ReadableStream)return u.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(a),o)}(n,bl(e));t.asyncQueue.enqueueAndForget(async()=>{u4(await Kv(t),i,r)})}function I4(t,e){return t.asyncQueue.enqueue(async()=>function(n,r){const i=L(n);return i.persistence.runTransaction("Get named query","readonly",s=>i.qs.getNamedQuery(s,r))}(await Wv(t),e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oA(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m_=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qv(t,e,n){if(!n)throw new k(I.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function aA(t,e,n,r){if(e===!0&&r===!0)throw new k(I.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function g_(t){if(!R.isDocumentKey(t))throw new k(I.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function y_(t){if(R.isDocumentKey(t))throw new k(I.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function zd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":U()}function ce(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new k(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=zd(t);throw new k(I.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function uA(t,e){if(e<=0)throw new k(I.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new k(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new k(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}aA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=oA((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new k(I.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new k(I.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new k(I.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,r=e.experimentalLongPollingOptions,n.timeoutSeconds===r.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var n,r}}class Dl{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new v_({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new k(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new k(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new v_(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new IL;switch(n.type){case"firstParty":return new kL(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new k(I.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=m_.get(e);n&&(C("ComponentProvider","Removing Datastore"),m_.delete(e),n.terminate())}(this),Promise.resolve()}}function E4(t,e,n,r={}){var i;const s=(t=ce(t,Dl))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Un("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=st.MOCK_USER;else{a=Fb(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new k(I.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new st(l)}t._authCredentials=new EL(new vk(a,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ir(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ae(this.firestore,e,this._key)}}class kt{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new kt(this.firestore,e,this._query)}}class ir extends kt{constructor(e,n,r){super(e,n,ia(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ae(this.firestore,null,new R(e))}withConverter(e){return new ir(this.firestore,e,this._path)}}function lA(t,e,...n){if(t=G(t),Qv("collection","path",e),t instanceof Dl){const r=ae.fromString(e,...n);return y_(r),new ir(t,null,r)}{if(!(t instanceof Ae||t instanceof ir))throw new k(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ae.fromString(e,...n));return y_(r),new ir(t.firestore,null,r)}}function S4(t,e){if(t=ce(t,Dl),Qv("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new k(I.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new kt(t,null,function(n){return new Dr(ae.emptyPath(),n)}(e))}function Mh(t,e,...n){if(t=G(t),arguments.length===1&&(e=wk.A()),Qv("doc","path",e),t instanceof Dl){const r=ae.fromString(e,...n);return g_(r),new Ae(t,null,new R(r))}{if(!(t instanceof Ae||t instanceof ir))throw new k(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ae.fromString(e,...n));return g_(r),new Ae(t.firestore,t instanceof ir?t.converter:null,new R(r))}}function cA(t,e){return t=G(t),e=G(e),(t instanceof Ae||t instanceof ir)&&(e instanceof Ae||e instanceof ir)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function Yv(t,e){return t=G(t),e=G(e),t instanceof kt&&e instanceof kt&&t.firestore===e.firestore&&kl(t._query,e._query)&&t.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T4{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new bv(this,"async_queue_retry"),this.Xc=()=>{const n=Fc();n&&C("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const e=Fc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const n=Fc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new at;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!Pi(e))throw e;C("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const n=this.Gc.then(()=>(this.Hc=!0,e().catch(r=>{this.Wc=r,this.Hc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw qe("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Hc=!1,r))));return this.Gc=n,n}enqueueAfterDelay(e,n,r){this.Zc(),this.Yc.indexOf(e)>-1&&(n=0);const i=Ov.createAndSchedule(this,e,n,r,s=>this.na(s));return this.zc.push(i),i}Zc(){this.Wc&&U()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const n of this.zc)if(n.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const n=this.zc.indexOf(e);this.zc.splice(n,1)}}function cg(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class k4{constructor(){this._progressObserver={},this._taskCompletionResolver=new at,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,n,r){this._progressObserver={next:e,error:n,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,n){return this._taskCompletionResolver.promise.then(e,n)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C4=-1;class ze extends Dl{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new T4,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||hA(this),this._firestoreClient.terminate()}}function ht(t){return t._firestoreClient||hA(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function hA(t){var e,n,r;const i=t._freezeSettings(),s=function(o,a,u,l){return new tM(o,a,u,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,oA(l.experimentalLongPollingOptions),l.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new f4(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.cache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}function A4(t,e){fA(t=ce(t,ze));const n=ht(t);if(n._uninitializedComponentsProvider)throw new k(I.FAILED_PRECONDITION,"SDK cache is already specified.");Un("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=t._freezeSettings(),i=new Gv;return dA(n,i,new eA(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function x4(t){fA(t=ce(t,ze));const e=ht(t);if(e._uninitializedComponentsProvider)throw new k(I.FAILED_PRECONDITION,"SDK cache is already specified.");Un("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const n=t._freezeSettings(),r=new Gv;return dA(e,r,new l4(r,n.cacheSizeBytes))}function dA(t,e,n){const r=new at;return t.asyncQueue.enqueue(async()=>{try{await Uc(t,n),await lg(t,e),r.resolve()}catch(i){const s=i;if(!tA(s))throw s;Un("Error enabling indexeddb cache. Falling back to memory cache: "+s),r.reject(s)}}).then(()=>r.promise)}function N4(t){if(t._initialized&&!t._terminated)throw new k(I.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new at;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(n){if(!Dn.D())return Promise.resolve();const r=n+"main";await Dn.delete(r)}(Av(t._databaseId,t._persistenceKey)),e.resolve()}catch(n){e.reject(n)}}),e.promise}function b4(t){return function(e){const n=new at;return e.asyncQueue.enqueueAndForget(async()=>XF(await Kv(e),n)),n.promise}(ht(t=ce(t,ze)))}function R4(t){return m4(ht(t=ce(t,ze)))}function D4(t){return g4(ht(t=ce(t,ze)))}function P4(t,e){const n=ht(t=ce(t,ze)),r=new k4;return _4(n,t._databaseId,e,r),r}function O4(t,e){return I4(ht(t=ce(t,ze)),e).then(n=>n?new kt(t,null,n.query):null)}function fA(t){if(t._initialized||t._terminated)throw new k(I.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ur($t.fromBase64String(e))}catch(n){throw new k(I.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ur($t.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new k(I.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ge(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new k(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new k(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return J(this._lat,e._lat)||J(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $4=/^__.*__$/;class L4{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Pr(e,this.data,this.fieldMask,n,this.fieldTransforms):new sa(e,this.data,n,this.fieldTransforms)}}class pA{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Pr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function mA(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw U()}}class Bd{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.ua(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new Bd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.aa({path:r,la:!1});return i.fa(e),i}da(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.aa({path:r,la:!1});return i.ua(),i}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return Fh(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(e.length===0)throw this._a("Document fields must not be empty");if(mA(this.ca)&&$4.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class M4{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||bl(e)}ya(e,n,r,i=!1){return new Bd({ca:e,methodName:n,ga:r,path:Ge.emptyPath(),la:!1,ma:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function $s(t){const e=t._freezeSettings(),n=bl(t._databaseId);return new M4(t._databaseId,!!e.ignoreUndefinedProperties,n)}function qd(t,e,n,r,i,s={}){const o=t.ya(s.merge||s.mergeFields?2:0,e,n,i);ew("Data must be an object, but it was:",o,r);const a=vA(r,o);let u,l;if(s.merge)u=new Pn(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=hg(e,h,n);if(!o.contains(d))throw new k(I.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);_A(c,d)||c.push(d)}u=new Pn(c),l=o.fieldTransforms.filter(h=>u.covers(h.field))}else u=null,l=o.fieldTransforms;return new L4(new wt(a),u,l)}class Pl extends Os{_toFieldTransform(e){if(e.ca!==2)throw e.ca===1?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Pl}}function gA(t,e,n){return new Bd({ca:3,ga:e.settings.ga,methodName:t._methodName,la:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Xv extends Os{_toFieldTransform(e){return new Al(e.path,new Mo)}isEqual(e){return e instanceof Xv}}class F4 extends Os{constructor(e,n){super(e),this.pa=n}_toFieldTransform(e){const n=gA(this,e,!0),r=this.pa.map(s=>Ls(s,n)),i=new _s(r);return new Al(e.path,i)}isEqual(e){return this===e}}class U4 extends Os{constructor(e,n){super(e),this.pa=n}_toFieldTransform(e){const n=gA(this,e,!0),r=this.pa.map(s=>Ls(s,n)),i=new Is(r);return new Al(e.path,i)}isEqual(e){return this===e}}class V4 extends Os{constructor(e,n){super(e),this.Ia=n}_toFieldTransform(e){const n=new Fo(e.serializer,Xk(e.serializer,this.Ia));return new Al(e.path,n)}isEqual(e){return this===e}}function Jv(t,e,n,r){const i=t.ya(1,e,n);ew("Data must be an object, but it was:",i,r);const s=[],o=wt.empty();Ps(r,(u,l)=>{const c=tw(e,u,n);l=G(l);const h=i.da(c);if(l instanceof Pl)s.push(c);else{const d=Ls(l,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new Pn(s);return new pA(o,a,i.fieldTransforms)}function Zv(t,e,n,r,i,s){const o=t.ya(1,e,n),a=[hg(e,r,n)],u=[i];if(s.length%2!=0)throw new k(I.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(hg(e,s[d])),u.push(s[d+1]);const l=[],c=wt.empty();for(let d=a.length-1;d>=0;--d)if(!_A(l,a[d])){const p=a[d];let y=u[d];y=G(y);const v=o.da(p);if(y instanceof Pl)l.push(p);else{const S=Ls(y,v);S!=null&&(l.push(p),c.set(p,S))}}const h=new Pn(l);return new pA(c,h,o.fieldTransforms)}function yA(t,e,n,r=!1){return Ls(n,t.ya(r?4:3,e))}function Ls(t,e){if(wA(t=G(t)))return ew("Unsupported field value:",e,t),vA(t,e);if(t instanceof Os)return function(n,r){if(!mA(r.ca))throw r._a(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r._a(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.la&&e.ca!==4)throw e._a("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=Ls(o,r.wa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=G(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Xk(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=be.fromDate(n);return{timestampValue:Uo(r.serializer,i)}}if(n instanceof be){const i=new be(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Uo(r.serializer,i)}}if(n instanceof jd)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof ur)return{bytesValue:lC(r.serializer,n._byteString)};if(n instanceof Ae){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r._a(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Iv(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r._a(`Unsupported field value: ${zd(n)}`)}(t,e)}function vA(t,e){const n={};return Rk(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ps(t,(r,i)=>{const s=Ls(i,e.ha(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function wA(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof be||t instanceof jd||t instanceof ur||t instanceof Ae||t instanceof Os)}function ew(t,e,n){if(!wA(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=zd(n);throw r==="an object"?e._a(t+" a custom object"):e._a(t+" "+r)}}function hg(t,e,n){if((e=G(e))instanceof Ii)return e._internalPath;if(typeof e=="string")return tw(t,e);throw Fh("Field path arguments must be of type string or ",t,!1,void 0,n)}const z4=new RegExp("[~\\*/\\[\\]]");function tw(t,e,n){if(e.search(z4)>=0)throw Fh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ii(...e.split("."))._internalPath}catch{throw Fh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Fh(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new k(I.INVALID_ARGUMENT,a+t+u)}function _A(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ae(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new j4(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Gd("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class j4 extends Xu{data(){return super.data()}}function Gd(t,e){return typeof e=="string"?tw(t,e):e instanceof Ii?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IA(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new k(I.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class nw{}class Ol extends nw{}function Vr(t,e,...n){let r=[];e instanceof nw&&r.push(e),r=r.concat(n),function(i){const s=i.filter(a=>a instanceof rw).length,o=i.filter(a=>a instanceof Hd).length;if(s>1||s>0&&o>0)throw new k(I.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Hd extends Ol{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Hd(e,n,r)}_apply(e){const n=this._parse(e);return SA(e._query,n),new kt(e.firestore,e.converter,Xm(e._query,n))}_parse(e){const n=$s(e.firestore);return function(i,s,o,a,u,l,c){let h;if(u.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new k(I.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){__(c,l);const d=[];for(const p of c)d.push(w_(a,i,p));h={arrayValue:{values:d}}}else h=w_(a,i,c)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||__(c,l),h=yA(o,s,c,l==="in"||l==="not-in");return ne.create(u,l,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function B4(t,e,n){const r=e,i=Gd("where",t);return Hd._create(i,r,n)}class rw extends nw{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new rw(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:ge.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,i){let s=r;const o=i.getFlattenedFilters();for(const a of o)SA(s,a),s=Xm(s,a)}(e._query,n),new kt(e.firestore,e.converter,Xm(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class iw extends Ol{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new iw(e,n)}_apply(e){const n=function(r,i,s){if(r.startAt!==null)throw new k(I.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new k(I.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Eo(i,s);return function(a,u){if(dv(a)===null){const l=Dd(a);l!==null&&TA(a,l,u.field)}}(r,o),o}(e._query,this._field,this._direction);return new kt(e.firestore,e.converter,function(r,i){const s=r.explicitOrderBy.concat([i]);return new Dr(r.path,r.collectionGroup,s,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function q4(t,e="asc"){const n=e,r=Gd("orderBy",t);return iw._create(r,n)}class Wd extends Ol{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Wd(e,n,r)}_apply(e){return new kt(e.firestore,e.converter,Nh(e._query,this._limit,this._limitType))}}function G4(t){return uA("limit",t),Wd._create("limit",t,"F")}function H4(t){return uA("limitToLast",t),Wd._create("limitToLast",t,"L")}class Kd extends Ol{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new Kd(e,n,r)}_apply(e){const n=EA(e,this.type,this._docOrFields,this._inclusive);return new kt(e.firestore,e.converter,function(r,i){return new Dr(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,i,r.endAt)}(e._query,n))}}function W4(...t){return Kd._create("startAt",t,!0)}function K4(...t){return Kd._create("startAfter",t,!1)}class Qd extends Ol{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new Qd(e,n,r)}_apply(e){const n=EA(e,this.type,this._docOrFields,this._inclusive);return new kt(e.firestore,e.converter,function(r,i){return new Dr(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,r.startAt,i)}(e._query,n))}}function Q4(...t){return Qd._create("endBefore",t,!1)}function Y4(...t){return Qd._create("endAt",t,!0)}function EA(t,e,n,r){if(n[0]=G(n[0]),n[0]instanceof Xu)return function(i,s,o,a,u){if(!a)throw new k(I.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const l=[];for(const c of as(i))if(c.field.isKeyField())l.push(vs(s,a.key));else{const h=a.data.field(c.field);if(Rd(h))throw new k(I.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+c.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const d=c.field.canonicalString();throw new k(I.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${d}' (used as the orderBy) does not exist.`)}l.push(h)}return new wi(l,u)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=$s(t.firestore);return function(s,o,a,u,l,c){const h=s.explicitOrderBy;if(l.length>h.length)throw new k(I.INVALID_ARGUMENT,`Too many arguments provided to ${u}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const d=[];for(let p=0;p<l.length;p++){const y=l[p];if(h[p].field.isKeyField()){if(typeof y!="string")throw new k(I.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${u}(), but got a ${typeof y}`);if(!fv(s)&&y.indexOf("/")!==-1)throw new k(I.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${u}() must be a plain document ID, but '${y}' contains a slash.`);const v=s.path.child(ae.fromString(y));if(!R.isDocumentKey(v))throw new k(I.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${u}() must result in a valid document path, but '${v}' is not because it contains an odd number of segments.`);const S=new R(v);d.push(vs(o,S))}else{const v=yA(a,u,y);d.push(v)}}return new wi(d,c)}(t._query,t.firestore._databaseId,i,e,n,r)}}function w_(t,e,n){if(typeof(n=G(n))=="string"){if(n==="")throw new k(I.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!fv(e)&&n.indexOf("/")!==-1)throw new k(I.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ae.fromString(n));if(!R.isDocumentKey(r))throw new k(I.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return vs(t,new R(r))}if(n instanceof Ae)return vs(t,n._key);throw new k(I.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${zd(n)}.`)}function __(t,e){if(!Array.isArray(t)||t.length===0)throw new k(I.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function SA(t,e){if(e.isInequality()){const r=Dd(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new k(I.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=dv(t);s!==null&&TA(t,i,s)}const n=function(r,i){for(const s of r)for(const o of s.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new k(I.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new k(I.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function TA(t,e,n){if(!n.isEqual(e))throw new k(I.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class sw{convertValue(e,n="none"){switch(ys(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Fe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(yi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw U()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ps(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new jd(Fe(e.latitude),Fe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=cv(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(qu(e));default:return null}}convertTimestamp(e){const n=gi(e);return new be(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ae.fromString(e);q(wC(r));const i=new Sl(r.get(1),r.get(3)),s=new R(r.popFirst(5));return i.isEqual(n)||qe(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yd(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class X4 extends sw{constructor(e){super(),this.firestore=e}convertBytes(e){return new ur(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ae(this.firestore,null,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class xr extends Xu{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new au(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Gd("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class au extends xr{data(e={}){return super.data(e)}}class Ei{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Zi(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new au(this._firestore,this._userDataWriter,r.key,r,new Zi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new k(I.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new au(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Zi(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new au(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Zi(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let u=-1,l=-1;return o.type!==0&&(u=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),l=s.indexOf(o.doc.key)),{type:J4(o.type),doc:a,oldIndex:u,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function J4(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return U()}}function kA(t,e){return t instanceof xr&&e instanceof xr?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(t._document===null?e._document===null:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof Ei&&e instanceof Ei&&t._firestore===e._firestore&&Yv(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z4(t){t=ce(t,Ae);const e=ce(t.firestore,ze);return iA(ht(e),t._key).then(n=>ow(e,t,n))}class Ms extends sw{constructor(e){super(),this.firestore=e}convertBytes(e){return new ur(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ae(this.firestore,null,n)}}function eU(t){t=ce(t,Ae);const e=ce(t.firestore,ze),n=ht(e),r=new Ms(e);return y4(n,t._key).then(i=>new xr(e,r,t._key,i,new Zi(i!==null&&i.hasLocalMutations,!0),t.converter))}function tU(t){t=ce(t,Ae);const e=ce(t.firestore,ze);return iA(ht(e),t._key,{source:"server"}).then(n=>ow(e,t,n))}function nU(t){t=ce(t,kt);const e=ce(t.firestore,ze),n=ht(e),r=new Ms(e);return IA(t._query),sA(n,t._query).then(i=>new Ei(e,r,t,i))}function rU(t){t=ce(t,kt);const e=ce(t.firestore,ze),n=ht(e),r=new Ms(e);return v4(n,t._query).then(i=>new Ei(e,r,t,i))}function iU(t){t=ce(t,kt);const e=ce(t.firestore,ze),n=ht(e),r=new Ms(e);return sA(n,t._query,{source:"server"}).then(i=>new Ei(e,r,t,i))}function I_(t,e,n){t=ce(t,Ae);const r=ce(t.firestore,ze),i=Yd(t.converter,e,n);return $l(r,[qd($s(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Ne.none())])}function E_(t,e,n,...r){t=ce(t,Ae);const i=ce(t.firestore,ze),s=$s(i);let o;return o=typeof(e=G(e))=="string"||e instanceof Ii?Zv(s,"updateDoc",t._key,e,n,r):Jv(s,"updateDoc",t._key,e),$l(i,[o.toMutation(t._key,Ne.exists(!0))])}function sU(t){return $l(ce(t.firestore,ze),[new oa(t._key,Ne.none())])}function oU(t,e){const n=ce(t.firestore,ze),r=Mh(t),i=Yd(t.converter,e);return $l(n,[qd($s(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Ne.exists(!1))]).then(()=>r)}function Uh(t,...e){var n,r,i;t=G(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||cg(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(cg(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let u,l,c;if(t instanceof Ae)l=ce(t.firestore,ze),c=ia(t._key.path),u={next:h=>{e[o]&&e[o](ow(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=ce(t,kt);l=ce(h.firestore,ze),c=h._query;const d=new Ms(l);u={next:p=>{e[o]&&e[o](new Ei(l,d,h,p))},error:e[o+1],complete:e[o+2]},IA(t._query)}return function(h,d,p,y){const v=new Ud(y),S=new Fv(d,v,p);return h.asyncQueue.enqueueAndForget(async()=>$v(await qo(h),S)),()=>{v.Dc(),h.asyncQueue.enqueueAndForget(async()=>Lv(await qo(h),S))}}(ht(l),c,a,u)}function aU(t,e){return w4(ht(t=ce(t,ze)),cg(e)?e:{next:e})}function $l(t,e){return function(n,r){const i=new at;return n.asyncQueue.enqueueAndForget(async()=>WF(await Kv(n),r,i)),i.promise}(ht(t),e)}function ow(t,e,n){const r=n.docs.get(e._key),i=new Ms(t);return new xr(t,i,e._key,r,new Zi(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uU={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lU{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=$s(e)}set(e,n,r){this._verifyNotCommitted();const i=Hr(e,this._firestore),s=Yd(i.converter,n,r),o=qd(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,Ne.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=Hr(e,this._firestore);let o;return o=typeof(n=G(n))=="string"||n instanceof Ii?Zv(this._dataReader,"WriteBatch.update",s._key,n,r,i):Jv(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,Ne.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Hr(e,this._firestore);return this._mutations=this._mutations.concat(new oa(n._key,Ne.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new k(I.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Hr(t,e){if((t=G(t)).firestore!==e)throw new k(I.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cU extends class{constructor(e,n){this._firestore=e,this._transaction=n,this._dataReader=$s(e)}get(e){const n=Hr(e,this._firestore),r=new X4(this._firestore);return this._transaction.lookup([n._key]).then(i=>{if(!i||i.length!==1)return U();const s=i[0];if(s.isFoundDocument())return new Xu(this._firestore,r,s.key,s,n.converter);if(s.isNoDocument())return new Xu(this._firestore,r,n._key,null,n.converter);throw U()})}set(e,n,r){const i=Hr(e,this._firestore),s=Yd(i.converter,n,r),o=qd(this._dataReader,"Transaction.set",i._key,s,i.converter!==null,r);return this._transaction.set(i._key,o),this}update(e,n,r,...i){const s=Hr(e,this._firestore);let o;return o=typeof(n=G(n))=="string"||n instanceof Ii?Zv(this._dataReader,"Transaction.update",s._key,n,r,i):Jv(this._dataReader,"Transaction.update",s._key,n),this._transaction.update(s._key,o),this}delete(e){const n=Hr(e,this._firestore);return this._transaction.delete(n._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=Hr(e,this._firestore),r=new Ms(this._firestore);return super.get(e).then(i=>new xr(this._firestore,r,n._key,i._document,new Zi(!1,!1),n.converter))}}function hU(t,e,n){t=ce(t,ze);const r=Object.assign(Object.assign({},uU),n);return function(i){if(i.maxAttempts<1)throw new k(I.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(i,s,o){const a=new at;return i.asyncQueue.enqueueAndForget(async()=>{const u=await p4(i);new d4(i.asyncQueue,u,o,s,a).run()}),a.promise}(ht(t),i=>e(new cU(t,i)),r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dU(){return new Pl("deleteField")}function fU(){return new Xv("serverTimestamp")}function pU(...t){return new F4("arrayUnion",t)}function mU(...t){return new U4("arrayRemove",t)}function gU(t){return new V4("increment",t)}(function(t,e=!0){(function(n){ra=n})(Ai),fi(new sr("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new ze(new SL(n.getProvider("auth-internal")),new AL(n.getProvider("app-check-internal")),function(a,u){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new k(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Sl(a.options.projectId,u)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),nr(y1,"3.13.0",t),nr(y1,"3.13.0","esm2017")})();const yU="@firebase/firestore-compat",vU="0.3.12";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aw(t,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new k("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S_(){if(typeof Uint8Array>"u")throw new k("unimplemented","Uint8Arrays are not available in this environment.")}function T_(){if(!ZL())throw new k("unimplemented","Blobs are unavailable in Firestore in this environment.")}class Ju{constructor(e){this._delegate=e}static fromBase64String(e){return T_(),new Ju(ur.fromBase64String(e))}static fromUint8Array(e){return S_(),new Ju(ur.fromUint8Array(e))}toBase64(){return T_(),this._delegate.toBase64()}toUint8Array(){return S_(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dg(t){return wU(t,["next","error","complete"])}function wU(t,e){if(typeof t!="object"||t===null)return!1;const n=t;for(const r of e)if(r in n&&typeof n[r]=="function")return!0;return!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _U{enableIndexedDbPersistence(e,n){return A4(e._delegate,{forceOwnership:n})}enableMultiTabIndexedDbPersistence(e){return x4(e._delegate)}clearIndexedDbPersistence(e){return N4(e._delegate)}}class CA{constructor(e,n,r){this._delegate=n,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof Sl||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const n=this._delegate._getSettings();!e.merge&&n.host!==e.host&&Un("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},n),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,n,r={}){E4(this._delegate,e,n,r)}enableNetwork(){return R4(this._delegate)}disableNetwork(){return D4(this._delegate)}enablePersistence(e){let n=!1,r=!1;return e&&(n=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,aA("synchronizeTabs",n,"experimentalForceOwningTab",r)),n?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return b4(this._delegate)}onSnapshotsInSync(e){return aU(this._delegate,e)}get app(){if(!this._appCompat)throw new k("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new Go(this,lA(this._delegate,e))}catch(n){throw Ut(n,"collection()","Firestore.collection()")}}doc(e){try{return new In(this,Mh(this._delegate,e))}catch(n){throw Ut(n,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Ft(this,S4(this._delegate,e))}catch(n){throw Ut(n,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return hU(this._delegate,n=>e(new AA(this,n)))}batch(){return ht(this._delegate),new xA(new lU(this._delegate,e=>$l(this._delegate,e)))}loadBundle(e){return P4(this._delegate,e)}namedQuery(e){return O4(this._delegate,e).then(n=>n?new Ft(this,n):null)}}class Xd extends sw{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ju(new ur(e))}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return In.forKey(n,this.firestore,null)}}function IU(t){wL(t)}class AA{constructor(e,n){this._firestore=e,this._delegate=n,this._userDataWriter=new Xd(e)}get(e){const n=es(e);return this._delegate.get(n).then(r=>new Zu(this._firestore,new xr(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,n.converter)))}set(e,n,r){const i=es(e);return r?(aw("Transaction.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=es(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=es(e);return this._delegate.delete(n),this}}class xA{constructor(e){this._delegate=e}set(e,n,r){const i=es(e);return r?(aw("WriteBatch.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=es(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=es(e);return this._delegate.delete(n),this}commit(){return this._delegate.commit()}}class ks{constructor(e,n,r){this._firestore=e,this._userDataWriter=n,this._delegate=r}fromFirestore(e,n){const r=new au(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new el(this._firestore,r),n??{})}toFirestore(e,n){return n?this._delegate.toFirestore(e,n):this._delegate.toFirestore(e)}static getInstance(e,n){const r=ks.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(n);return s||(s=new ks(e,new Xd(e),n),i.set(n,s)),s}}ks.INSTANCES=new WeakMap;class In{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new Xd(e)}static forPath(e,n,r){if(e.length%2!==0)throw new k("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new In(n,new Ae(n._delegate,r,new R(e)))}static forKey(e,n,r){return new In(n,new Ae(n._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new Go(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new Go(this.firestore,lA(this._delegate,e))}catch(n){throw Ut(n,"collection()","DocumentReference.collection()")}}isEqual(e){return e=G(e),e instanceof Ae?cA(this._delegate,e):!1}set(e,n){n=aw("DocumentReference.set",n);try{return n?I_(this._delegate,e,n):I_(this._delegate,e)}catch(r){throw Ut(r,"setDoc()","DocumentReference.set()")}}update(e,n,...r){try{return arguments.length===1?E_(this._delegate,e):E_(this._delegate,e,n,...r)}catch(i){throw Ut(i,"updateDoc()","DocumentReference.update()")}}delete(){return sU(this._delegate)}onSnapshot(...e){const n=NA(e),r=bA(e,i=>new Zu(this.firestore,new xr(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return Uh(this._delegate,n,r)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=eU(this._delegate):(e==null?void 0:e.source)==="server"?n=tU(this._delegate):n=Z4(this._delegate),n.then(r=>new Zu(this.firestore,new xr(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new In(this.firestore,e?this._delegate.withConverter(ks.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Ut(t,e,n){return t.message=t.message.replace(e,n),t}function NA(t){for(const e of t)if(typeof e=="object"&&!dg(e))return e;return{}}function bA(t,e){var n,r;let i;return dg(t[0])?i=t[0]:dg(t[1])?i=t[1]:typeof t[0]=="function"?i={next:t[0],error:t[1],complete:t[2]}:i={next:t[1],error:t[2],complete:t[3]},{next:s=>{i.next&&i.next(e(s))},error:(n=i.error)===null||n===void 0?void 0:n.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class Zu{constructor(e,n){this._firestore=e,this._delegate=n}get ref(){return new In(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,n){return this._delegate.get(e,n)}isEqual(e){return kA(this._delegate,e._delegate)}}class el extends Zu{data(e){const n=this._delegate.data(e);return _L(n!==void 0),n}}class Ft{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new Xd(e)}where(e,n,r){try{return new Ft(this.firestore,Vr(this._delegate,B4(e,n,r)))}catch(i){throw Ut(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,n){try{return new Ft(this.firestore,Vr(this._delegate,q4(e,n)))}catch(r){throw Ut(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Ft(this.firestore,Vr(this._delegate,G4(e)))}catch(n){throw Ut(n,"limit()","Query.limit()")}}limitToLast(e){try{return new Ft(this.firestore,Vr(this._delegate,H4(e)))}catch(n){throw Ut(n,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Ft(this.firestore,Vr(this._delegate,W4(...e)))}catch(n){throw Ut(n,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Ft(this.firestore,Vr(this._delegate,K4(...e)))}catch(n){throw Ut(n,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Ft(this.firestore,Vr(this._delegate,Q4(...e)))}catch(n){throw Ut(n,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Ft(this.firestore,Vr(this._delegate,Y4(...e)))}catch(n){throw Ut(n,"endAt()","Query.endAt()")}}isEqual(e){return Yv(this._delegate,e._delegate)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=rU(this._delegate):(e==null?void 0:e.source)==="server"?n=iU(this._delegate):n=nU(this._delegate),n.then(r=>new fg(this.firestore,new Ei(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const n=NA(e),r=bA(e,i=>new fg(this.firestore,new Ei(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return Uh(this._delegate,n,r)}withConverter(e){return new Ft(this.firestore,e?this._delegate.withConverter(ks.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class EU{constructor(e,n){this._firestore=e,this._delegate=n}get type(){return this._delegate.type}get doc(){return new el(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class fg{constructor(e,n){this._firestore=e,this._delegate=n}get query(){return new Ft(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new el(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(n=>new EU(this._firestore,n))}forEach(e,n){this._delegate.forEach(r=>{e.call(n,new el(this._firestore,r))})}isEqual(e){return kA(this._delegate,e._delegate)}}class Go extends Ft{constructor(e,n){super(e,n),this.firestore=e,this._delegate=n}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new In(this.firestore,e):null}doc(e){try{return e===void 0?new In(this.firestore,Mh(this._delegate)):new In(this.firestore,Mh(this._delegate,e))}catch(n){throw Ut(n,"doc()","CollectionReference.doc()")}}add(e){return oU(this._delegate,e).then(n=>new In(this.firestore,n))}isEqual(e){return cA(this._delegate,e._delegate)}withConverter(e){return new Go(this.firestore,e?this._delegate.withConverter(ks.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function es(t){return ce(t,Ae)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uw{constructor(...e){this._delegate=new Ii(...e)}static documentId(){return new uw(Ge.keyField().canonicalString())}isEqual(e){return e=G(e),e instanceof Ii?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e){this._delegate=e}static serverTimestamp(){const e=fU();return e._methodName="FieldValue.serverTimestamp",new Hi(e)}static delete(){const e=dU();return e._methodName="FieldValue.delete",new Hi(e)}static arrayUnion(...e){const n=pU(...e);return n._methodName="FieldValue.arrayUnion",new Hi(n)}static arrayRemove(...e){const n=mU(...e);return n._methodName="FieldValue.arrayRemove",new Hi(n)}static increment(e){const n=gU(e);return n._methodName="FieldValue.increment",new Hi(n)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SU={Firestore:CA,GeoPoint:jd,Timestamp:be,Blob:Ju,Transaction:AA,WriteBatch:xA,DocumentReference:In,DocumentSnapshot:Zu,Query:Ft,QueryDocumentSnapshot:el,QuerySnapshot:fg,CollectionReference:Go,FieldPath:uw,FieldValue:Hi,setLogLevel:IU,CACHE_SIZE_UNLIMITED:C4};function TU(t,e){t.INTERNAL.registerComponent(new sr("firestore-compat",n=>{const r=n.getProvider("app-compat").getImmediate(),i=n.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},SU)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kU(t){TU(t,(e,n)=>new CA(e,n,new _U)),t.registerVersion(yU,vU)}kU(Ni);const CU={apiKey:"AIzaSyD7TaNvUYIIpUflL9XDDmH4Fay6KiZzFek",authDomain:"chat-app-12690.firebaseapp.com",projectId:"chat-app-12690",storageBucket:"chat-app-12690.appspot.com",messagingSenderId:"57508434154",appId:"1:57508434154:web:80f8b1887aaf6e800cc793"},RA=Ni.initializeApp(CU),Si=RA.firestore(),Cs=RA.auth(),AU=new Ni.auth.GoogleAuthProvider;var DA={exports:{}},we={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lw=Symbol.for("react.element"),cw=Symbol.for("react.portal"),Jd=Symbol.for("react.fragment"),Zd=Symbol.for("react.strict_mode"),ef=Symbol.for("react.profiler"),tf=Symbol.for("react.provider"),nf=Symbol.for("react.context"),xU=Symbol.for("react.server_context"),rf=Symbol.for("react.forward_ref"),sf=Symbol.for("react.suspense"),of=Symbol.for("react.suspense_list"),af=Symbol.for("react.memo"),uf=Symbol.for("react.lazy"),NU=Symbol.for("react.offscreen"),PA;PA=Symbol.for("react.module.reference");function Cn(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case lw:switch(t=t.type,t){case Jd:case ef:case Zd:case sf:case of:return t;default:switch(t=t&&t.$$typeof,t){case xU:case nf:case rf:case uf:case af:case tf:return t;default:return e}}case cw:return e}}}we.ContextConsumer=nf;we.ContextProvider=tf;we.Element=lw;we.ForwardRef=rf;we.Fragment=Jd;we.Lazy=uf;we.Memo=af;we.Portal=cw;we.Profiler=ef;we.StrictMode=Zd;we.Suspense=sf;we.SuspenseList=of;we.isAsyncMode=function(){return!1};we.isConcurrentMode=function(){return!1};we.isContextConsumer=function(t){return Cn(t)===nf};we.isContextProvider=function(t){return Cn(t)===tf};we.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===lw};we.isForwardRef=function(t){return Cn(t)===rf};we.isFragment=function(t){return Cn(t)===Jd};we.isLazy=function(t){return Cn(t)===uf};we.isMemo=function(t){return Cn(t)===af};we.isPortal=function(t){return Cn(t)===cw};we.isProfiler=function(t){return Cn(t)===ef};we.isStrictMode=function(t){return Cn(t)===Zd};we.isSuspense=function(t){return Cn(t)===sf};we.isSuspenseList=function(t){return Cn(t)===of};we.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Jd||t===ef||t===Zd||t===sf||t===of||t===NU||typeof t=="object"&&t!==null&&(t.$$typeof===uf||t.$$typeof===af||t.$$typeof===tf||t.$$typeof===nf||t.$$typeof===rf||t.$$typeof===PA||t.getModuleId!==void 0)};we.typeOf=Cn;DA.exports=we;var OA=DA.exports;function bU(t){function e($,F,V,Q,E){for(var ie=0,O=0,Le=0,fe=0,me,ee,pt=0,Ht=0,he,At=he=me=0,pe=0,mt=0,ha=0,gt=0,Ml=V.length,da=Ml-1,An,X="",je="",_f="",If="",$r;pe<Ml;){if(ee=V.charCodeAt(pe),pe===da&&O+fe+Le+ie!==0&&(O!==0&&(ee=O===47?10:47),fe=Le=ie=0,Ml++,da++),O+fe+Le+ie===0){if(pe===da&&(0<mt&&(X=X.replace(d,"")),0<X.trim().length)){switch(ee){case 32:case 9:case 59:case 13:case 10:break;default:X+=V.charAt(pe)}ee=59}switch(ee){case 123:for(X=X.trim(),me=X.charCodeAt(0),he=1,gt=++pe;pe<Ml;){switch(ee=V.charCodeAt(pe)){case 123:he++;break;case 125:he--;break;case 47:switch(ee=V.charCodeAt(pe+1)){case 42:case 47:e:{for(At=pe+1;At<da;++At)switch(V.charCodeAt(At)){case 47:if(ee===42&&V.charCodeAt(At-1)===42&&pe+2!==At){pe=At+1;break e}break;case 10:if(ee===47){pe=At+1;break e}}pe=At}}break;case 91:ee++;case 40:ee++;case 34:case 39:for(;pe++<da&&V.charCodeAt(pe)!==ee;);}if(he===0)break;pe++}switch(he=V.substring(gt,pe),me===0&&(me=(X=X.replace(h,"").trim()).charCodeAt(0)),me){case 64:switch(0<mt&&(X=X.replace(d,"")),ee=X.charCodeAt(1),ee){case 100:case 109:case 115:case 45:mt=F;break;default:mt=lr}if(he=e(F,mt,he,ee,E+1),gt=he.length,0<D&&(mt=n(lr,X,ha),$r=a(3,he,mt,F,ft,Je,gt,ee,E,Q),X=mt.join(""),$r!==void 0&&(gt=(he=$r.trim()).length)===0&&(ee=0,he="")),0<gt)switch(ee){case 115:X=X.replace(A,o);case 100:case 109:case 45:he=X+"{"+he+"}";break;case 107:X=X.replace(f,"$1 $2"),he=X+"{"+he+"}",he=Ct===1||Ct===2&&s("@"+he,3)?"@-webkit-"+he+"@"+he:"@"+he;break;default:he=X+he,Q===112&&(he=(je+=he,""))}else he="";break;default:he=e(F,n(F,X,ha),he,Q,E+1)}_f+=he,he=ha=mt=At=me=0,X="",ee=V.charCodeAt(++pe);break;case 125:case 59:if(X=(0<mt?X.replace(d,""):X).trim(),1<(gt=X.length))switch(At===0&&(me=X.charCodeAt(0),me===45||96<me&&123>me)&&(gt=(X=X.replace(" ",":")).length),0<D&&($r=a(1,X,F,$,ft,Je,je.length,Q,E,Q))!==void 0&&(gt=(X=$r.trim()).length)===0&&(X="\0\0"),me=X.charCodeAt(0),ee=X.charCodeAt(1),me){case 0:break;case 64:if(ee===105||ee===99){If+=X+V.charAt(pe);break}default:X.charCodeAt(gt-1)!==58&&(je+=i(X,me,ee,X.charCodeAt(2)))}ha=mt=At=me=0,X="",ee=V.charCodeAt(++pe)}}switch(ee){case 13:case 10:O===47?O=0:1+me===0&&Q!==107&&0<X.length&&(mt=1,X+="\0"),0<D*K&&a(0,X,F,$,ft,Je,je.length,Q,E,Q),Je=1,ft++;break;case 59:case 125:if(O+fe+Le+ie===0){Je++;break}default:switch(Je++,An=V.charAt(pe),ee){case 9:case 32:if(fe+ie+O===0)switch(pt){case 44:case 58:case 9:case 32:An="";break;default:ee!==32&&(An=" ")}break;case 0:An="\\0";break;case 12:An="\\f";break;case 11:An="\\v";break;case 38:fe+O+ie===0&&(mt=ha=1,An="\f"+An);break;case 108:if(fe+O+ie+rn===0&&0<At)switch(pe-At){case 2:pt===112&&V.charCodeAt(pe-3)===58&&(rn=pt);case 8:Ht===111&&(rn=Ht)}break;case 58:fe+O+ie===0&&(At=pe);break;case 44:O+Le+fe+ie===0&&(mt=1,An+="\r");break;case 34:case 39:O===0&&(fe=fe===ee?0:fe===0?ee:fe);break;case 91:fe+O+Le===0&&ie++;break;case 93:fe+O+Le===0&&ie--;break;case 41:fe+O+ie===0&&Le--;break;case 40:if(fe+O+ie===0){if(me===0)switch(2*pt+3*Ht){case 533:break;default:me=1}Le++}break;case 64:O+Le+fe+ie+At+he===0&&(he=1);break;case 42:case 47:if(!(0<fe+ie+Le))switch(O){case 0:switch(2*ee+3*V.charCodeAt(pe+1)){case 235:O=47;break;case 220:gt=pe,O=42}break;case 42:ee===47&&pt===42&&gt+2!==pe&&(V.charCodeAt(gt+2)===33&&(je+=V.substring(gt,pe+1)),An="",O=0)}}O===0&&(X+=An)}Ht=pt,pt=ee,pe++}if(gt=je.length,0<gt){if(mt=F,0<D&&($r=a(2,je,mt,$,ft,Je,gt,Q,E,Q),$r!==void 0&&(je=$r).length===0))return If+je+_f;if(je=mt.join(",")+"{"+je+"}",Ct*rn!==0){switch(Ct!==2||s(je,2)||(rn=0),rn){case 111:je=je.replace(_,":-moz-$1")+je;break;case 112:je=je.replace(g,"::-webkit-input-$1")+je.replace(g,"::-moz-$1")+je.replace(g,":-ms-input-$1")+je}rn=0}}return If+je+_f}function n($,F,V){var Q=F.trim().split(S);F=Q;var E=Q.length,ie=$.length;switch(ie){case 0:case 1:var O=0;for($=ie===0?"":$[0]+" ";O<E;++O)F[O]=r($,F[O],V).trim();break;default:var Le=O=0;for(F=[];O<E;++O)for(var fe=0;fe<ie;++fe)F[Le++]=r($[fe]+" ",Q[O],V).trim()}return F}function r($,F,V){var Q=F.charCodeAt(0);switch(33>Q&&(Q=(F=F.trim()).charCodeAt(0)),Q){case 38:return F.replace(m,"$1"+$.trim());case 58:return $.trim()+F.replace(m,"$1"+$.trim());default:if(0<1*V&&0<F.indexOf("\f"))return F.replace(m,($.charCodeAt(0)===58?"":"$1")+$.trim())}return $+F}function i($,F,V,Q){var E=$+";",ie=2*F+3*V+4*Q;if(ie===944){$=E.indexOf(":",9)+1;var O=E.substring($,E.length-1).trim();return O=E.substring(0,$).trim()+O+";",Ct===1||Ct===2&&s(O,1)?"-webkit-"+O+O:O}if(Ct===0||Ct===2&&!s(E,1))return E;switch(ie){case 1015:return E.charCodeAt(10)===97?"-webkit-"+E+E:E;case 951:return E.charCodeAt(3)===116?"-webkit-"+E+E:E;case 963:return E.charCodeAt(5)===110?"-webkit-"+E+E:E;case 1009:if(E.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+E+E;case 978:return"-webkit-"+E+"-moz-"+E+E;case 1019:case 983:return"-webkit-"+E+"-moz-"+E+"-ms-"+E+E;case 883:if(E.charCodeAt(8)===45)return"-webkit-"+E+E;if(0<E.indexOf("image-set(",11))return E.replace(nt,"$1-webkit-$2")+E;break;case 932:if(E.charCodeAt(4)===45)switch(E.charCodeAt(5)){case 103:return"-webkit-box-"+E.replace("-grow","")+"-webkit-"+E+"-ms-"+E.replace("grow","positive")+E;case 115:return"-webkit-"+E+"-ms-"+E.replace("shrink","negative")+E;case 98:return"-webkit-"+E+"-ms-"+E.replace("basis","preferred-size")+E}return"-webkit-"+E+"-ms-"+E+E;case 964:return"-webkit-"+E+"-ms-flex-"+E+E;case 1023:if(E.charCodeAt(8)!==99)break;return O=E.substring(E.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+O+"-webkit-"+E+"-ms-flex-pack"+O+E;case 1005:return y.test(E)?E.replace(p,":-webkit-")+E.replace(p,":-moz-")+E:E;case 1e3:switch(O=E.substring(13).trim(),F=O.indexOf("-")+1,O.charCodeAt(0)+O.charCodeAt(F)){case 226:O=E.replace(T,"tb");break;case 232:O=E.replace(T,"tb-rl");break;case 220:O=E.replace(T,"lr");break;default:return E}return"-webkit-"+E+"-ms-"+O+E;case 1017:if(E.indexOf("sticky",9)===-1)break;case 975:switch(F=(E=$).length-10,O=(E.charCodeAt(F)===33?E.substring(0,F):E).substring($.indexOf(":",7)+1).trim(),ie=O.charCodeAt(0)+(O.charCodeAt(7)|0)){case 203:if(111>O.charCodeAt(8))break;case 115:E=E.replace(O,"-webkit-"+O)+";"+E;break;case 207:case 102:E=E.replace(O,"-webkit-"+(102<ie?"inline-":"")+"box")+";"+E.replace(O,"-webkit-"+O)+";"+E.replace(O,"-ms-"+O+"box")+";"+E}return E+";";case 938:if(E.charCodeAt(5)===45)switch(E.charCodeAt(6)){case 105:return O=E.replace("-items",""),"-webkit-"+E+"-webkit-box-"+O+"-ms-flex-"+O+E;case 115:return"-webkit-"+E+"-ms-flex-item-"+E.replace(P,"")+E;default:return"-webkit-"+E+"-ms-flex-line-pack"+E.replace("align-content","").replace(P,"")+E}break;case 973:case 989:if(E.charCodeAt(3)!==45||E.charCodeAt(4)===122)break;case 931:case 953:if(W.test($)===!0)return(O=$.substring($.indexOf(":")+1)).charCodeAt(0)===115?i($.replace("stretch","fill-available"),F,V,Q).replace(":fill-available",":stretch"):E.replace(O,"-webkit-"+O)+E.replace(O,"-moz-"+O.replace("fill-",""))+E;break;case 962:if(E="-webkit-"+E+(E.charCodeAt(5)===102?"-ms-"+E:"")+E,V+Q===211&&E.charCodeAt(13)===105&&0<E.indexOf("transform",10))return E.substring(0,E.indexOf(";",27)+1).replace(v,"$1-webkit-$2")+E}return E}function s($,F){var V=$.indexOf(F===1?":":"{"),Q=$.substring(0,F!==3?V:10);return V=$.substring(V+1,$.length-1),H(F!==2?Q:Q.replace(te,"$1"),V,F)}function o($,F){var V=i(F,F.charCodeAt(0),F.charCodeAt(1),F.charCodeAt(2));return V!==F+";"?V.replace(b," or ($1)").substring(4):"("+F+")"}function a($,F,V,Q,E,ie,O,Le,fe,me){for(var ee=0,pt=F,Ht;ee<D;++ee)switch(Ht=Lt[ee].call(c,$,pt,V,Q,E,ie,O,Le,fe,me)){case void 0:case!1:case!0:case null:break;default:pt=Ht}if(pt!==F)return pt}function u($){switch($){case void 0:case null:D=Lt.length=0;break;default:if(typeof $=="function")Lt[D++]=$;else if(typeof $=="object")for(var F=0,V=$.length;F<V;++F)u($[F]);else K=!!$|0}return u}function l($){return $=$.prefix,$!==void 0&&(H=null,$?typeof $!="function"?Ct=1:(Ct=2,H=$):Ct=0),l}function c($,F){var V=$;if(33>V.charCodeAt(0)&&(V=V.trim()),Ie=V,V=[Ie],0<D){var Q=a(-1,F,V,V,ft,Je,0,0,0,0);Q!==void 0&&typeof Q=="string"&&(F=Q)}var E=e(lr,V,F,0,0);return 0<D&&(Q=a(-2,E,V,V,ft,Je,E.length,0,0,0),Q!==void 0&&(E=Q)),Ie="",rn=0,Je=ft=1,E}var h=/^\0+/g,d=/[\0\r\f]/g,p=/: */g,y=/zoo|gra/,v=/([,: ])(transform)/g,S=/,\r+?/g,m=/([\t\r\n ])*\f?&/g,f=/@(k\w+)\s*(\S*)\s*/,g=/::(place)/g,_=/:(read-only)/g,T=/[svh]\w+-[tblr]{2}/,A=/\(\s*(.*)\s*\)/g,b=/([\s\S]*?);/g,P=/-self|flex-/g,te=/[^]*?(:[rp][el]a[\w-]+)[^]*/,W=/stretch|:\s*\w+\-(?:conte|avail)/,nt=/([^-])(image-set\()/,Je=1,ft=1,rn=0,Ct=1,lr=[],Lt=[],D=0,H=null,K=0,Ie="";return c.use=u,c.set=l,t!==void 0&&l(t),c}var RU={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function DU(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var PU=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,k_=DU(function(t){return PU.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91}),$A={exports:{}},_e={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dt=typeof Symbol=="function"&&Symbol.for,hw=dt?Symbol.for("react.element"):60103,dw=dt?Symbol.for("react.portal"):60106,lf=dt?Symbol.for("react.fragment"):60107,cf=dt?Symbol.for("react.strict_mode"):60108,hf=dt?Symbol.for("react.profiler"):60114,df=dt?Symbol.for("react.provider"):60109,ff=dt?Symbol.for("react.context"):60110,fw=dt?Symbol.for("react.async_mode"):60111,pf=dt?Symbol.for("react.concurrent_mode"):60111,mf=dt?Symbol.for("react.forward_ref"):60112,gf=dt?Symbol.for("react.suspense"):60113,OU=dt?Symbol.for("react.suspense_list"):60120,yf=dt?Symbol.for("react.memo"):60115,vf=dt?Symbol.for("react.lazy"):60116,$U=dt?Symbol.for("react.block"):60121,LU=dt?Symbol.for("react.fundamental"):60117,MU=dt?Symbol.for("react.responder"):60118,FU=dt?Symbol.for("react.scope"):60119;function gn(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case hw:switch(t=t.type,t){case fw:case pf:case lf:case hf:case cf:case gf:return t;default:switch(t=t&&t.$$typeof,t){case ff:case mf:case vf:case yf:case df:return t;default:return e}}case dw:return e}}}function LA(t){return gn(t)===pf}_e.AsyncMode=fw;_e.ConcurrentMode=pf;_e.ContextConsumer=ff;_e.ContextProvider=df;_e.Element=hw;_e.ForwardRef=mf;_e.Fragment=lf;_e.Lazy=vf;_e.Memo=yf;_e.Portal=dw;_e.Profiler=hf;_e.StrictMode=cf;_e.Suspense=gf;_e.isAsyncMode=function(t){return LA(t)||gn(t)===fw};_e.isConcurrentMode=LA;_e.isContextConsumer=function(t){return gn(t)===ff};_e.isContextProvider=function(t){return gn(t)===df};_e.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===hw};_e.isForwardRef=function(t){return gn(t)===mf};_e.isFragment=function(t){return gn(t)===lf};_e.isLazy=function(t){return gn(t)===vf};_e.isMemo=function(t){return gn(t)===yf};_e.isPortal=function(t){return gn(t)===dw};_e.isProfiler=function(t){return gn(t)===hf};_e.isStrictMode=function(t){return gn(t)===cf};_e.isSuspense=function(t){return gn(t)===gf};_e.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===lf||t===pf||t===hf||t===cf||t===gf||t===OU||typeof t=="object"&&t!==null&&(t.$$typeof===vf||t.$$typeof===yf||t.$$typeof===df||t.$$typeof===ff||t.$$typeof===mf||t.$$typeof===LU||t.$$typeof===MU||t.$$typeof===FU||t.$$typeof===$U)};_e.typeOf=gn;$A.exports=_e;var UU=$A.exports,pw=UU,VU={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},zU={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},jU={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},MA={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},mw={};mw[pw.ForwardRef]=jU;mw[pw.Memo]=MA;function C_(t){return pw.isMemo(t)?MA:mw[t.$$typeof]||VU}var BU=Object.defineProperty,qU=Object.getOwnPropertyNames,A_=Object.getOwnPropertySymbols,GU=Object.getOwnPropertyDescriptor,HU=Object.getPrototypeOf,x_=Object.prototype;function FA(t,e,n){if(typeof e!="string"){if(x_){var r=HU(e);r&&r!==x_&&FA(t,r,n)}var i=qU(e);A_&&(i=i.concat(A_(e)));for(var s=C_(t),o=C_(e),a=0;a<i.length;++a){var u=i[a];if(!zU[u]&&!(n&&n[u])&&!(o&&o[u])&&!(s&&s[u])){var l=GU(e,u);try{BU(t,u,l)}catch{}}}}return t}var WU=FA;const KU=F_(WU);function Zn(){return(Zn=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var N_=function(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n},pg=function(t){return t!==null&&typeof t=="object"&&(t.toString?t.toString():Object.prototype.toString.call(t))==="[object Object]"&&!OA.typeOf(t)},Vh=Object.freeze([]),ai=Object.freeze({});function tl(t){return typeof t=="function"}function b_(t){return t.displayName||t.name||"Component"}function gw(t){return t&&typeof t.styledComponentId=="string"}var Ho=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",yw=typeof window<"u"&&"HTMLElement"in window,QU=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY)),YU={};function Ll(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+t+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var XU=function(){function t(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var e=t.prototype;return e.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},e.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,s=i.length,o=s;n>=o;)(o<<=1)<0&&Ll(16,""+n);this.groupSizes=new Uint32Array(o),this.groupSizes.set(i),this.length=o;for(var a=s;a<o;a++)this.groupSizes[a]=0}for(var u=this.indexOfGroup(n+1),l=0,c=r.length;l<c;l++)this.tag.insertRule(u,r[l])&&(this.groupSizes[n]++,u++)},e.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),s=i+r;this.groupSizes[n]=0;for(var o=i;o<s;o++)this.tag.deleteRule(i)}},e.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],s=this.indexOfGroup(n),o=s+i,a=s;a<o;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},t}(),Vc=new Map,zh=new Map,uu=1,pc=function(t){if(Vc.has(t))return Vc.get(t);for(;zh.has(uu);)uu++;var e=uu++;return Vc.set(t,e),zh.set(e,t),e},JU=function(t){return zh.get(t)},ZU=function(t,e){e>=uu&&(uu=e+1),Vc.set(t,e),zh.set(e,t)},eV="style["+Ho+'][data-styled-version="5.3.11"]',tV=new RegExp("^"+Ho+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),nV=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},rV=function(t,e){for(var n=(e.textContent||"").split(`/*!sc*/
`),r=[],i=0,s=n.length;i<s;i++){var o=n[i].trim();if(o){var a=o.match(tV);if(a){var u=0|parseInt(a[1],10),l=a[2];u!==0&&(ZU(l,u),nV(t,l,a[3]),t.getTag().insertRules(u,r)),r.length=0}else r.push(o)}}},iV=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},UA=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){for(var u=a.childNodes,l=u.length;l>=0;l--){var c=u[l];if(c&&c.nodeType===1&&c.hasAttribute(Ho))return c}}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(Ho,"active"),r.setAttribute("data-styled-version","5.3.11");var o=iV();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},sV=function(){function t(n){var r=this.element=UA(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var s=document.styleSheets,o=0,a=s.length;o<a;o++){var u=s[o];if(u.ownerNode===i)return u}Ll(17)}(r),this.length=0}var e=t.prototype;return e.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},e.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},e.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},t}(),oV=function(){function t(n){var r=this.element=UA(n);this.nodes=r.childNodes,this.length=0}var e=t.prototype;return e.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),s=this.nodes[n];return this.element.insertBefore(i,s||null),this.length++,!0}return!1},e.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},e.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},t}(),aV=function(){function t(n){this.rules=[],this.length=0}var e=t.prototype;return e.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},e.deleteRule=function(n){this.rules.splice(n,1),this.length--},e.getRule=function(n){return n<this.length?this.rules[n]:""},t}(),R_=yw,uV={isServer:!yw,useCSSOMInjection:!QU},jh=function(){function t(n,r,i){n===void 0&&(n=ai),r===void 0&&(r={}),this.options=Zn({},uV,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&yw&&R_&&(R_=!1,function(s){for(var o=document.querySelectorAll(eV),a=0,u=o.length;a<u;a++){var l=o[a];l&&l.getAttribute(Ho)!=="active"&&(rV(s,l),l.parentNode&&l.parentNode.removeChild(l))}}(this))}t.registerId=function(n){return pc(n)};var e=t.prototype;return e.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new t(Zn({},this.options,{},n),this.gs,r&&this.names||void 0)},e.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},e.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,s=r.useCSSOMInjection,o=r.target,n=i?new aV(o):s?new sV(o):new oV(o),new XU(n)));var n,r,i,s,o},e.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},e.registerName=function(n,r){if(pc(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},e.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(pc(n),i)},e.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},e.clearRules=function(n){this.getTag().clearGroup(pc(n)),this.clearNames(n)},e.clearTag=function(){this.tag=void 0},e.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,s="",o=0;o<i;o++){var a=JU(o);if(a!==void 0){var u=n.names.get(a),l=r.getGroup(o);if(u&&l&&u.size){var c=Ho+".g"+o+'[id="'+a+'"]',h="";u!==void 0&&u.forEach(function(d){d.length>0&&(h+=d+",")}),s+=""+l+c+'{content:"'+h+`"}/*!sc*/
`}}}return s}(this)},t}(),lV=/(a)(d)/gi,D_=function(t){return String.fromCharCode(t+(t>25?39:97))};function mg(t){var e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=D_(e%52)+n;return(D_(e%52)+n).replace(lV,"$1-$2")}var ao=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},VA=function(t){return ao(5381,t)};function zA(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(tl(n)&&!gw(n))return!1}return!0}var cV=VA("5.3.11"),hV=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&zA(e),this.componentId=n,this.baseHash=ao(cV,n),this.baseStyle=r,jh.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(e,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))s.push(this.staticRulesId);else{var o=As(this.rules,e,n,r).join(""),a=mg(ao(this.baseHash,o)>>>0);if(!n.hasNameForId(i,a)){var u=r(o,"."+a,void 0,i);n.insertRules(i,a,u)}s.push(a),this.staticRulesId=a}else{for(var l=this.rules.length,c=ao(this.baseHash,r.hash),h="",d=0;d<l;d++){var p=this.rules[d];if(typeof p=="string")h+=p;else if(p){var y=As(p,e,n,r),v=Array.isArray(y)?y.join(""):y;c=ao(c,v+d),h+=v}}if(h){var S=mg(c>>>0);if(!n.hasNameForId(i,S)){var m=r(h,"."+S,void 0,i);n.insertRules(i,S,m)}s.push(S)}}return s.join(" ")},t}(),dV=/^\s*\/\/.*$/gm,fV=[":","[",".","#"];function pV(t){var e,n,r,i,s=t===void 0?ai:t,o=s.options,a=o===void 0?ai:o,u=s.plugins,l=u===void 0?Vh:u,c=new bU(a),h=[],d=function(v){function S(m){if(m)try{v(m+"}")}catch{}}return function(m,f,g,_,T,A,b,P,te,W){switch(m){case 1:if(te===0&&f.charCodeAt(0)===64)return v(f+";"),"";break;case 2:if(P===0)return f+"/*|*/";break;case 3:switch(P){case 102:case 112:return v(g[0]+f),"";default:return f+(W===0?"/*|*/":"")}case-2:f.split("/*|*/}").forEach(S)}}}(function(v){h.push(v)}),p=function(v,S,m){return S===0&&fV.indexOf(m[n.length])!==-1||m.match(i)?v:"."+e};function y(v,S,m,f){f===void 0&&(f="&");var g=v.replace(dV,""),_=S&&m?m+" "+S+" { "+g+" }":g;return e=f,n=S,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),c(m||!S?"":S,_)}return c.use([].concat(l,[function(v,S,m){v===2&&m.length&&m[0].lastIndexOf(n)>0&&(m[0]=m[0].replace(r,p))},d,function(v){if(v===-2){var S=h;return h=[],S}}])),y.hash=l.length?l.reduce(function(v,S){return S.name||Ll(15),ao(v,S.name)},5381).toString():"",y}var jA=ln.createContext();jA.Consumer;var BA=ln.createContext(),mV=(BA.Consumer,new jh),gg=pV();function qA(){return de.useContext(jA)||mV}function GA(){return de.useContext(BA)||gg}var gV=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=gg);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.toString=function(){return Ll(12,String(r.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=n}return t.prototype.getName=function(e){return e===void 0&&(e=gg),this.name+e.hash},t}(),yV=/([A-Z])/,vV=/([A-Z])/g,wV=/^ms-/,_V=function(t){return"-"+t.toLowerCase()};function P_(t){return yV.test(t)?t.replace(vV,_V).replace(wV,"-ms-"):t}var O_=function(t){return t==null||t===!1||t===""};function As(t,e,n,r){if(Array.isArray(t)){for(var i,s=[],o=0,a=t.length;o<a;o+=1)(i=As(t[o],e,n,r))!==""&&(Array.isArray(i)?s.push.apply(s,i):s.push(i));return s}if(O_(t))return"";if(gw(t))return"."+t.styledComponentId;if(tl(t)){if(typeof(l=t)!="function"||l.prototype&&l.prototype.isReactComponent||!e)return t;var u=t(e);return As(u,e,n,r)}var l;return t instanceof gV?n?(t.inject(n,r),t.getName(r)):t:pg(t)?function c(h,d){var p,y,v=[];for(var S in h)h.hasOwnProperty(S)&&!O_(h[S])&&(Array.isArray(h[S])&&h[S].isCss||tl(h[S])?v.push(P_(S)+":",h[S],";"):pg(h[S])?v.push.apply(v,c(h[S],S)):v.push(P_(S)+": "+(p=S,(y=h[S])==null||typeof y=="boolean"||y===""?"":typeof y!="number"||y===0||p in RU||p.startsWith("--")?String(y).trim():y+"px")+";"));return d?[d+" {"].concat(v,["}"]):v}(t):t.toString()}var $_=function(t){return Array.isArray(t)&&(t.isCss=!0),t};function HA(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return tl(t)||pg(t)?$_(As(N_(Vh,[t].concat(n)))):n.length===0&&t.length===1&&typeof t[0]=="string"?t:$_(As(N_(t,n)))}var WA=function(t,e,n){return n===void 0&&(n=ai),t.theme!==n.theme&&t.theme||e||n.theme},IV=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,EV=/(^-|-$)/g;function _p(t){return t.replace(IV,"-").replace(EV,"")}var KA=function(t){return mg(VA(t)>>>0)};function mc(t){return typeof t=="string"&&!0}var yg=function(t){return typeof t=="function"||typeof t=="object"&&t!==null&&!Array.isArray(t)},SV=function(t){return t!=="__proto__"&&t!=="constructor"&&t!=="prototype"};function TV(t,e,n){var r=t[n];yg(e)&&yg(r)?QA(r,e):t[n]=e}function QA(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];for(var i=0,s=n;i<s.length;i++){var o=s[i];if(yg(o))for(var a in o)SV(a)&&TV(t,o[a],a)}return t}var vw=ln.createContext();vw.Consumer;var Ip={};function YA(t,e,n){var r=gw(t),i=!mc(t),s=e.attrs,o=s===void 0?Vh:s,a=e.componentId,u=a===void 0?function(f,g){var _=typeof f!="string"?"sc":_p(f);Ip[_]=(Ip[_]||0)+1;var T=_+"-"+KA("5.3.11"+_+Ip[_]);return g?g+"-"+T:T}(e.displayName,e.parentComponentId):a,l=e.displayName,c=l===void 0?function(f){return mc(f)?"styled."+f:"Styled("+b_(f)+")"}(t):l,h=e.displayName&&e.componentId?_p(e.displayName)+"-"+e.componentId:e.componentId||u,d=r&&t.attrs?Array.prototype.concat(t.attrs,o).filter(Boolean):o,p=e.shouldForwardProp;r&&t.shouldForwardProp&&(p=e.shouldForwardProp?function(f,g,_){return t.shouldForwardProp(f,g,_)&&e.shouldForwardProp(f,g,_)}:t.shouldForwardProp);var y,v=new hV(n,h,r?t.componentStyle:void 0),S=v.isStatic&&o.length===0,m=function(f,g){return function(_,T,A,b){var P=_.attrs,te=_.componentStyle,W=_.defaultProps,nt=_.foldedComponentIds,Je=_.shouldForwardProp,ft=_.styledComponentId,rn=_.target,Ct=function(Q,E,ie){Q===void 0&&(Q=ai);var O=Zn({},E,{theme:Q}),Le={};return ie.forEach(function(fe){var me,ee,pt,Ht=fe;for(me in tl(Ht)&&(Ht=Ht(O)),Ht)O[me]=Le[me]=me==="className"?(ee=Le[me],pt=Ht[me],ee&&pt?ee+" "+pt:ee||pt):Ht[me]}),[O,Le]}(WA(T,de.useContext(vw),W)||ai,T,P),lr=Ct[0],Lt=Ct[1],D=function(Q,E,ie,O){var Le=qA(),fe=GA(),me=E?Q.generateAndInjectStyles(ai,Le,fe):Q.generateAndInjectStyles(ie,Le,fe);return me}(te,b,lr),H=A,K=Lt.$as||T.$as||Lt.as||T.as||rn,Ie=mc(K),$=Lt!==T?Zn({},T,{},Lt):T,F={};for(var V in $)V[0]!=="$"&&V!=="as"&&(V==="forwardedAs"?F.as=$[V]:(Je?Je(V,k_,K):!Ie||k_(V))&&(F[V]=$[V]));return T.style&&Lt.style!==T.style&&(F.style=Zn({},T.style,{},Lt.style)),F.className=Array.prototype.concat(nt,ft,D!==ft?D:null,T.className,Lt.className).filter(Boolean).join(" "),F.ref=H,de.createElement(K,F)}(y,f,g,S)};return m.displayName=c,(y=ln.forwardRef(m)).attrs=d,y.componentStyle=v,y.displayName=c,y.shouldForwardProp=p,y.foldedComponentIds=r?Array.prototype.concat(t.foldedComponentIds,t.styledComponentId):Vh,y.styledComponentId=h,y.target=r?t.target:t,y.withComponent=function(f){var g=e.componentId,_=function(A,b){if(A==null)return{};var P,te,W={},nt=Object.keys(A);for(te=0;te<nt.length;te++)P=nt[te],b.indexOf(P)>=0||(W[P]=A[P]);return W}(e,["componentId"]),T=g&&g+"-"+(mc(f)?f:_p(b_(f)));return YA(f,Zn({},_,{attrs:d,componentId:T}),n)},Object.defineProperty(y,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(f){this._foldedDefaultProps=r?QA({},t.defaultProps,f):f}}),Object.defineProperty(y,"toString",{value:function(){return"."+y.styledComponentId}}),i&&KU(y,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),y}var vg=function(t){return function e(n,r,i){if(i===void 0&&(i=ai),!OA.isValidElementType(r))return Ll(1,String(r));var s=function(){return n(r,i,HA.apply(void 0,arguments))};return s.withConfig=function(o){return e(n,r,Zn({},i,{},o))},s.attrs=function(o){return e(n,r,Zn({},i,{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},s}(YA,t)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(t){vg[t]=vg(t)});var kV=function(){function t(n,r){this.rules=n,this.componentId=r,this.isStatic=zA(n),jh.registerId(this.componentId+1)}var e=t.prototype;return e.createStyles=function(n,r,i,s){var o=s(As(this.rules,r,i,s).join(""),""),a=this.componentId+n;i.insertRules(a,a,o)},e.removeStyles=function(n,r){r.clearRules(this.componentId+n)},e.renderStyles=function(n,r,i,s){n>2&&jh.registerId(this.componentId+n),this.removeStyles(n,i),this.createStyles(n,r,i,s)},t}();function CV(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=HA.apply(void 0,[t].concat(n)),s="sc-global-"+KA(JSON.stringify(i)),o=new kV(i,s);function a(l){var c=qA(),h=GA(),d=de.useContext(vw),p=de.useRef(c.allocateGSInstance(s)).current;return c.server&&u(p,l,c,d,h),de.useLayoutEffect(function(){if(!c.server)return u(p,l,c,d,h),function(){return o.removeStyles(p,c)}},[p,l,c,d,h]),null}function u(l,c,h,d,p){if(o.isStatic)o.renderStyles(l,YU,h,p);else{var y=Zn({},c,{theme:WA(c,d,a.defaultProps)});o.renderStyles(l,y,h,p)}}return ln.memo(a)}const ue=vg,AV=ue.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
`,xV=ue.button`
  outline: none;
  font-size: 18px;
  padding: 14px 18px;
  cursor: pointer;
`,NV=()=>{const t=()=>{Cs.signInWithPopup(AU).catch(alert)};return j.jsx(AV,{children:j.jsx(xV,{onClick:t,children:"Login com Google"})})},bV=ue.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
`,RV=()=>j.jsx(bV,{children:j.jsxs("div",{className:"lds-ring",children:[j.jsx("div",{}),j.jsx("div",{}),j.jsx("div",{}),j.jsx("div",{})]})}),DV=ue.div`
  width: 35%;
  max-width: 415px;
  border-right: 1px solid #ddd;
  height: 100vh;
`;var XA={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},L_=ln.createContext&&ln.createContext(XA),ui=globalThis&&globalThis.__assign||function(){return ui=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},ui.apply(this,arguments)},PV=globalThis&&globalThis.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n};function JA(t){return t&&t.map(function(e,n){return ln.createElement(e.tag,ui({key:n},e.attr),JA(e.child))})}function Li(t){return function(e){return ln.createElement(OV,ui({attr:ui({},t.attr)},e),JA(t.child))}}function OV(t){var e=function(n){var r=t.attr,i=t.size,s=t.title,o=PV(t,["attr","size","title"]),a=i||n.size||"1em",u;return n.className&&(u=n.className),t.className&&(u=(u?u+" ":"")+t.className),ln.createElement("svg",ui({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:u,style:ui(ui({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&ln.createElement("title",null,s),t.children)};return L_!==void 0?ln.createElement(L_.Consumer,null,function(n){return e(n)}):e(XA)}function ZA(t){return Li({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}}]})(t)}function $V(t){return Li({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M11 5.08V2c-5 .5-9 4.81-9 10s4 9.5 9 10v-3.08c-3-.48-6-3.4-6-6.92s3-6.44 6-6.92zM18.97 11H22c-.47-5-4-8.53-9-9v3.08C16 5.51 18.54 8 18.97 11zM13 18.92V22c5-.47 8.53-4 9-9h-3.03c-.43 3-2.97 5.49-5.97 5.92z"}}]})(t)}function LV(t){return Li({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}}]})(t)}function MV(t){return Li({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"}}]})(t)}function FV(t){return Li({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"}}]})(t)}function UV(t){return Li({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"}}]})(t)}function ex(t){return Li({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}}]})(t)}function tx(t){return Li({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}}]})(t)}const VV=ue.div`
  height: 59px;
  background-color: #f0f2f5;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
  box-shadow: 0 1px 2px #0003;
`,zV=ue.img`
  width: 35px;
  height: 35px;
  cursor: pointer;
  border-radius: 50%;
`,jV=ue.div`
  display: flex;
  gap: 10px;

  svg {
    width: 24px;
    height: 24px;
    color: #54656f;
    cursor: pointer;
  }
`;ue(ZA)`
  color: red;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;var BV=/^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/,qV=function(t){if(!t||t.length>254)return!1;var e=BV.test(t);if(!e)return!1;var n=t.split("@");if(n[0].length>64)return!1;var r=n[1].split(".");return!r.some(function(i){return i.length>63})};/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var uo=function(){return uo=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},uo.apply(this,arguments)},nx=function(t){return{loading:t==null,value:t}},GV=function(){return function(t,e){switch(e.type){case"error":return uo(uo({},t),{error:e.error,loading:!1,value:void 0});case"reset":return nx(e.defaultValue);case"value":return uo(uo({},t),{error:void 0,loading:!1,value:e.value});default:return t}}},HV=function(t){var e=t?t():void 0,n=de.useReducer(GV(),nx(e)),r=n[0],i=n[1],s=de.useCallback(function(){var u=t?t():void 0;i({type:"reset",defaultValue:u})},[t]),o=de.useCallback(function(u){i({type:"error",error:u})},[]),a=de.useCallback(function(u){i({type:"value",value:u})},[]);return de.useMemo(function(){return{error:r.error,loading:r.loading,reset:s,setError:o,setValue:a,value:r.value}},[r.error,r.loading,s,o,a,r.value])},WV=function(t,e,n){var r=de.useRef(t);return de.useEffect(function(){e(t,r.current)||(r.current=t,n&&n())}),r},KV=function(t,e){var n=!t&&!e,r=!!t&&!!e&&Yv(t,e);return n||r},QV=function(t,e){return WV(t,KV,e)},wf=function(t,e){var n=HV(),r=n.error,i=n.loading,s=n.reset,o=n.setError,a=n.setValue,u=n.value,l=QV(t,s);return de.useEffect(function(){if(!l.current){a(void 0);return}var c=e!=null&&e.snapshotListenOptions?Uh(l.current,e.snapshotListenOptions,a,o):Uh(l.current,a,o);return function(){c()}},[l.current]),[u,i,r]};const YV=({setUserChat:t})=>{const[e]=dl(Cs),n=Si.collection("chats").where("users","array-contains",e.email),[r]=wf(n),i=()=>{const o=prompt("Digite o email desejado.");if(o){if(qV(o)){if(o===e.email)return alert("Insira um e-mail diferente do seu.");if(s(o))return alert("Chat já existe!")}else return alert("Email inválido!");Si.collection("chats").add({users:[e.email,o]})}},s=o=>!!(r!=null&&r.docs.find(a=>{var u;return((u=a.data().users.find(l=>l===o))==null?void 0:u.length)>0}));return j.jsxs(VV,{children:[j.jsx(zV,{src:e==null?void 0:e.photoURL,onClick:()=>[Cs.signOut(),t(null)]}),j.jsxs(jV,{children:[j.jsx($V,{}),j.jsx(MV,{onClick:i}),j.jsx(ex,{})]})]})},XV=ue.div`
  height: calc(100vh - 70px);
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 6px;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.2);
  }
`,JV=ue.div``;ue.div`
  margin: 0 10px;
  border-top: solid 1px #ddd;
`;const ZV=ue.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
  cursor: pointer;

  &:hover {
    background-color: #f0f2f5;
  }

  svg {
    width: 30px;
    height: 30px;
    background-color: #ccc;
    border-radius: 50%;
    margin-right: 10px;
    min-width: fit-content;
  }

  &.active {
    background-color: #f0f2f5;
  }
`,e9=ue.span`
  font-size: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
`,t9=ue.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
  min-width: fit-content;
`,M_=(t,e)=>t==null?void 0:t.filter(n=>n!==(e==null?void 0:e.email))[0],n9=({id:t,users:e,user:n,setUserChat:r,active:i,setDeletedChat:s})=>{var h,d;const[o]=wf(Si.collection("users").where("email","==",M_(e,n))),a=(d=(h=o==null?void 0:o.docs)==null?void 0:h[0])==null?void 0:d.data(),u=M_(e,n),l=()=>{const p={chatId:t,name:u.split("@")[0],photoURL:a==null?void 0:a.photoURL};r(p)},c=p=>{window.confirm("Tem certeza de que deseja remover este chat?")&&Si.collection("chats").doc(p).delete().then(()=>{console.log("Chat removido com sucesso!"),s(!0)}).catch(y=>{console.error("Erro ao remover o chat: ",y)})};return j.jsxs(ZV,{onClick:l,className:i,children:[j.jsxs("div",{className:"centralize",children:[a?j.jsx(t9,{src:a==null?void 0:a.photoURL}):j.jsx(tx,{}),j.jsx(e9,{children:u.split("@")[0]})]}),j.jsx("div",{className:"trash",children:j.jsx(ZA,{style:{backgroundColor:"transparent"},onClick:()=>c(t)})})]})},r9=({setUserChat:t,userChat:e})=>{const[n]=dl(Cs),r=Si.collection("chats").where("users","array-contains",n.email),[i]=wf(r);return j.jsx(XV,{children:i==null?void 0:i.docs.map((s,o)=>j.jsx(JV,{children:j.jsx(n9,{id:s.id,users:s.data().users,user:n,setUserChat:t,active:(e==null?void 0:e.chatId)===s.id?"active":""})},o))})},i9=({setUserChat:t,userChat:e})=>j.jsxs(DV,{children:[j.jsx(YV,{setUserChat:t}),j.jsx(r9,{setUserChat:t,userChat:e})]}),s9=ue.div`
  display: flex;
  width: 100%;
  height: 100vh;
`,o9=ue.div`
  height: 59px;
  background-color: #f0f2f5;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 1px 2px #0003;
  z-index: 1;
`,a9=ue.div`
  display: flex;
  align-items: center;

  svg {
    width: 30px;
    height: 30px;
    background-color: #ccc;
    border-radius: 50%;
    margin-right: 10px;
    min-width: fit-content;
  }
`,u9=ue.div`
  display: grid;
`,l9=ue.span`
  font-size: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
`,c9=ue.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
  min-width: fit-content;
`,h9=ue.div`
  display: flex;
  gap: 10px;

  svg {
    width: 24px;
    height: 24px;
    color: #54656f;
    cursor: pointer;
  }
`,d9=({photoURL:t,name:e})=>j.jsxs(o9,{children:[j.jsxs(a9,{children:[t?j.jsx(c9,{src:t,alt:"Avatar"}):j.jsx(tx,{}),j.jsx(u9,{children:j.jsx(l9,{children:e})})]}),j.jsxs(h9,{children:[j.jsx(LV,{}),j.jsx(ex,{})]})]}),f9=ue.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,p9=ue.div`
  flex: 1;
  background-color: #efeae2;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 6px;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.2);
  }
`,m9=ue.div``,g9=ue.div`
  margin: 10px;
  display: flex;

  &.me {
    > div {
      background-color: #dcf8c6;
    }
    justify-content: right;
  }
`,y9=ue.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 1px 1px #ccc;
  display: flex;
  flex-direction: column;
  padding: 3px;
  max-width: 80%;
`,v9=ue.span`
  font-size: 14px;
  margin: 5px 40px 5px 5px;
`,w9=ue.span`
  font-size: 11px;
  color: #999;
  text-align: right;
  height: 15px;
  margin: -5px 5px 0;
`,_9=({user:t,message:e})=>{const[n]=dl(Cs);return j.jsx(m9,{children:j.jsx(g9,{className:(n==null?void 0:n.email)===t?"me":"",children:j.jsxs(y9,{children:[j.jsx(v9,{children:e.message}),j.jsx(w9,{children:new Date(e==null?void 0:e.timestamp).toLocaleString()})]})})})},I9=({chatId:t})=>{const[e]=wf(Si.collection("chats").doc(t).collection("messages").orderBy("timestamp","asc")),n=de.useRef("");return de.useEffect(()=>{n.current.scrollHeight>n.current.offsetHeight&&(n.current.scrollTop=n.current.scrollHeight-n.current.offsetHeight)},[e]),j.jsx(p9,{ref:n,children:e==null?void 0:e.docs.map(r=>{var i;return j.jsx(_9,{user:r.data().user,message:{message:r.data().message,timestamp:(i=r.data().timestamp)==null?void 0:i.toDate().getTime()}},r.id)})})},E9=ue.div`
  height: 62px;
  bottom: 0;
  width: 100%;
  padding: 10px 20px;
  background-color: #f0f2f5;
  display: flex;
  box-shadow: 2px 1px 3px 1px #0003;

  svg {
    width: 25px;
    height: 25px;
    color: #54656f;
  }
`,S9=ue.form`
  display: flex;
  align-items: center;
  gap: 5px;
  width: 100%;
`,T9=ue.input`
  padding: 10px;
  outline: none;
  border: none;
  border-radius: 5px;
  width: 100%;
  box-shadow: inset 0 0 1px 1px #0003;
`,k9=({chatId:t})=>{const[e]=dl(Cs),[n,r]=de.useState(""),i=s=>{s.preventDefault(),Si.collection("chats").doc(t).collection("messages").add({message:n,user:e.email,photoURL:e.photoURL,timestamp:Ni.firestore.FieldValue.serverTimestamp()}),r("")};return j.jsx(E9,{children:j.jsxs(S9,{onSubmit:i,children:[j.jsx(T9,{placeholder:"Mensagem",onChange:s=>r(s.target.value),value:n}),j.jsx(UV,{onClick:i})]})})},C9=ue.div`
  width: 100%;
  background-color: #f1f3ed;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  padding: 20px;

  svg {
    width: 100px;
    height: 100px;
    color: green;
  }
`,A9=ue.h1`
  text-align: center;
`,x9=ue.span`
  font-size: 18px;
  text-align: center;
  max-width: 500px;
`,N9=()=>j.jsxs(C9,{children:[j.jsx(FV,{}),j.jsx(A9,{children:"Chat App"}),j.jsx(x9,{children:"Agora você pode enviar e receber mensagens sem precisar manter seu celular conectado à internet."})]}),b9=({userChat:t})=>t?j.jsxs(f9,{children:[j.jsx(d9,{photoURL:t==null?void 0:t.photoURL,name:t==null?void 0:t.name}),j.jsx(I9,{chatId:t==null?void 0:t.chatId}),j.jsx(k9,{chatId:t==null?void 0:t.chatId})]}):j.jsx(N9,{});function R9(){const[t,e]=dl(Cs),[n,r]=de.useState(null),[i,s]=de.useState(!1);return de.useEffect(()=>{t&&Si.collection("users").doc(t.uid).set({email:t.email,photoURL:t.photoURL})},[t]),de.useEffect(()=>{i&&(r(null),s(!1))},[i]),e?j.jsx(RV,{}):t?j.jsxs(s9,{children:[j.jsx(i9,{setUserChat:r,userChat:n,setDeletedChat:s}),j.jsx(b9,{userChat:n,deletedChat:i})]}):j.jsx(NV,{})}const D9=CV`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 100vw;
    height: 100vh;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
`;Ep.createRoot(document.getElementById("root")).render(j.jsxs(ln.StrictMode,{children:[j.jsx(R9,{}),j.jsx(D9,{})]}));
