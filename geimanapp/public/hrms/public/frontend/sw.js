var Dt=Object.defineProperty,Ot=Object.defineProperties;var Nt=Object.getOwnPropertyDescriptors;var ke=Object.getOwnPropertySymbols;var Mt=Object.prototype.hasOwnProperty,Lt=Object.prototype.propertyIsEnumerable;var Re=(t,e,n)=>e in t?Dt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Ae=(t,e)=>{for(var n in e||(e={}))Mt.call(e,n)&&Re(t,n,e[n]);if(ke)for(var n of ke(e))Lt.call(e,n)&&Re(t,n,e[n]);return t},De=(t,e)=>Ot(t,Nt(e));var c=(t,e,n)=>new Promise((r,s)=>{var i=l=>{try{o(n.next(l))}catch(h){s(h)}},a=l=>{try{o(n.throw(l))}catch(h){s(h)}},o=l=>l.done?r(l.value):Promise.resolve(l.value).then(i,a);o((n=n.apply(t,e)).next())});try{self["workbox:core:7.2.0"]&&_()}catch(t){}const Pt=(t,...e)=>{let n=t;return e.length>0&&(n+=` :: ${JSON.stringify(e)}`),n},Bt=Pt;class p extends Error{constructor(e,n){const r=Bt(e,n);super(r),this.name=e,this.details=n}}const w={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:typeof registration!="undefined"?registration.scope:""},J=t=>[w.prefix,t,w.suffix].filter(e=>e&&e.length>0).join("-"),xt=t=>{for(const e of Object.keys(w))t(e)},V={updateDetails:t=>{xt(e=>{typeof t[e]=="string"&&(w[e]=t[e])})},getGoogleAnalyticsName:t=>t||J(w.googleAnalytics),getPrecacheName:t=>t||J(w.precache),getPrefix:()=>w.prefix,getRuntimeName:t=>t||J(w.runtime),getSuffix:()=>w.suffix};function Oe(t,e){const n=e();return t.waitUntil(n),n}try{self["workbox:precaching:7.2.0"]&&_()}catch(t){}const Ut="__WB_REVISION__";function $t(t){if(!t)throw new p("add-to-cache-list-unexpected-type",{entry:t});if(typeof t=="string"){const i=new URL(t,location.href);return{cacheKey:i.href,url:i.href}}const{revision:e,url:n}=t;if(!n)throw new p("add-to-cache-list-unexpected-type",{entry:t});if(!e){const i=new URL(n,location.href);return{cacheKey:i.href,url:i.href}}const r=new URL(n,location.href),s=new URL(n,location.href);return r.searchParams.set(Ut,e),{cacheKey:r.href,url:s.href}}class Ft{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=r=>c(this,[r],function*({request:e,state:n}){n&&(n.originalRequest=e)}),this.cachedResponseWillBeUsed=s=>c(this,[s],function*({event:e,state:n,cachedResponse:r}){if(e.type==="install"&&n&&n.originalRequest&&n.originalRequest instanceof Request){const i=n.originalRequest.url;r?this.notUpdatedURLs.push(i):this.updatedURLs.push(i)}return r})}}class jt{constructor({precacheController:e}){this.cacheKeyWillBeUsed=s=>c(this,[s],function*({request:n,params:r}){const i=(r==null?void 0:r.cacheKey)||this._precacheController.getCacheKeyForURL(n.url);return i?new Request(i,{headers:n.headers}):n}),this._precacheController=e}}let M;function Ht(){if(M===void 0){const t=new Response("");if("body"in t)try{new Response(t.body),M=!0}catch(e){M=!1}M=!1}return M}function Kt(t,e){return c(this,null,function*(){let n=null;if(t.url&&(n=new URL(t.url).origin),n!==self.location.origin)throw new p("cross-origin-copy-response",{origin:n});const r=t.clone(),s={headers:new Headers(r.headers),status:r.status,statusText:r.statusText},i=e?e(s):s,a=Ht()?r.body:yield r.blob();return new Response(a,i)})}const Vt=t=>new URL(String(t),location.href).href.replace(new RegExp(`^${location.origin}`),"");function Ne(t,e){const n=new URL(t);for(const r of e)n.searchParams.delete(r);return n.href}function Wt(t,e,n,r){return c(this,null,function*(){const s=Ne(e.url,n);if(e.url===s)return t.match(e,r);const i=Object.assign(Object.assign({},r),{ignoreSearch:!0}),a=yield t.keys(e,i);for(const o of a){const l=Ne(o.url,n);if(s===l)return t.match(o,r)}})}let qt=class{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}};const zt=new Set;function Gt(){return c(this,null,function*(){for(const t of zt)yield t()})}function Jt(t){return new Promise(e=>setTimeout(e,t))}try{self["workbox:strategies:7.2.0"]&&_()}catch(t){}function U(t){return typeof t=="string"?new Request(t):t}class Yt{constructor(e,n){this._cacheKeys={},Object.assign(this,n),this.event=n.event,this._strategy=e,this._handlerDeferred=new qt,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const r of this._plugins)this._pluginStateMap.set(r,{});this.event.waitUntil(this._handlerDeferred.promise)}fetch(e){return c(this,null,function*(){const{event:n}=this;let r=U(e);if(r.mode==="navigate"&&n instanceof FetchEvent&&n.preloadResponse){const a=yield n.preloadResponse;if(a)return a}const s=this.hasCallback("fetchDidFail")?r.clone():null;try{for(const a of this.iterateCallbacks("requestWillFetch"))r=yield a({request:r.clone(),event:n})}catch(a){if(a instanceof Error)throw new p("plugin-error-request-will-fetch",{thrownErrorMessage:a.message})}const i=r.clone();try{let a;a=yield fetch(r,r.mode==="navigate"?void 0:this._strategy.fetchOptions);for(const o of this.iterateCallbacks("fetchDidSucceed"))a=yield o({event:n,request:i,response:a});return a}catch(a){throw s&&(yield this.runCallbacks("fetchDidFail",{error:a,event:n,originalRequest:s.clone(),request:i.clone()})),a}})}fetchAndCachePut(e){return c(this,null,function*(){const n=yield this.fetch(e),r=n.clone();return this.waitUntil(this.cachePut(e,r)),n})}cacheMatch(e){return c(this,null,function*(){const n=U(e);let r;const{cacheName:s,matchOptions:i}=this._strategy,a=yield this.getCacheKey(n,"read"),o=Object.assign(Object.assign({},i),{cacheName:s});r=yield caches.match(a,o);for(const l of this.iterateCallbacks("cachedResponseWillBeUsed"))r=(yield l({cacheName:s,matchOptions:i,cachedResponse:r,request:a,event:this.event}))||void 0;return r})}cachePut(e,n){return c(this,null,function*(){const r=U(e);yield Jt(0);const s=yield this.getCacheKey(r,"write");if(!n)throw new p("cache-put-with-no-response",{url:Vt(s.url)});const i=yield this._ensureResponseSafeToCache(n);if(!i)return!1;const{cacheName:a,matchOptions:o}=this._strategy,l=yield self.caches.open(a),h=this.hasCallback("cacheDidUpdate"),u=h?yield Wt(l,s.clone(),["__WB_REVISION__"],o):null;try{yield l.put(s,h?i.clone():i)}catch(f){if(f instanceof Error)throw f.name==="QuotaExceededError"&&(yield Gt()),f}for(const f of this.iterateCallbacks("cacheDidUpdate"))yield f({cacheName:a,oldResponse:u,newResponse:i.clone(),request:s,event:this.event});return!0})}getCacheKey(e,n){return c(this,null,function*(){const r=`${e.url} | ${n}`;if(!this._cacheKeys[r]){let s=e;for(const i of this.iterateCallbacks("cacheKeyWillBeUsed"))s=U(yield i({mode:n,request:s,event:this.event,params:this.params}));this._cacheKeys[r]=s}return this._cacheKeys[r]})}hasCallback(e){for(const n of this._strategy.plugins)if(e in n)return!0;return!1}runCallbacks(e,n){return c(this,null,function*(){for(const r of this.iterateCallbacks(e))yield r(n)})}*iterateCallbacks(e){for(const n of this._strategy.plugins)if(typeof n[e]=="function"){const r=this._pluginStateMap.get(n);yield i=>{const a=Object.assign(Object.assign({},i),{state:r});return n[e](a)}}}waitUntil(e){return this._extendLifetimePromises.push(e),e}doneWaiting(){return c(this,null,function*(){let e;for(;e=this._extendLifetimePromises.shift();)yield e})}destroy(){this._handlerDeferred.resolve(null)}_ensureResponseSafeToCache(e){return c(this,null,function*(){let n=e,r=!1;for(const s of this.iterateCallbacks("cacheWillUpdate"))if(n=(yield s({request:this.request,response:n,event:this.event}))||void 0,r=!0,!n)break;return r||n&&n.status!==200&&(n=void 0),n})}}class Xt{constructor(e={}){this.cacheName=V.getRuntimeName(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[n]=this.handleAll(e);return n}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const n=e.event,r=typeof e.request=="string"?new Request(e.request):e.request,s="params"in e?e.params:void 0,i=new Yt(this,{event:n,request:r,params:s}),a=this._getResponse(i,r,n),o=this._awaitComplete(a,i,r,n);return[a,o]}_getResponse(e,n,r){return c(this,null,function*(){yield e.runCallbacks("handlerWillStart",{event:r,request:n});let s;try{if(s=yield this._handle(n,e),!s||s.type==="error")throw new p("no-response",{url:n.url})}catch(i){if(i instanceof Error){for(const a of e.iterateCallbacks("handlerDidError"))if(s=yield a({error:i,event:r,request:n}),s)break}if(!s)throw i}for(const i of e.iterateCallbacks("handlerWillRespond"))s=yield i({event:r,request:n,response:s});return s})}_awaitComplete(e,n,r,s){return c(this,null,function*(){let i,a;try{i=yield e}catch(o){}try{yield n.runCallbacks("handlerDidRespond",{event:s,request:r,response:i}),yield n.doneWaiting()}catch(o){o instanceof Error&&(a=o)}if(yield n.runCallbacks("handlerDidComplete",{event:s,request:r,response:i,error:a}),n.destroy(),a)throw a})}}class I extends Xt{constructor(e={}){e.cacheName=V.getPrecacheName(e.cacheName),super(e),this._fallbackToNetwork=e.fallbackToNetwork!==!1,this.plugins.push(I.copyRedirectedCacheableResponsesPlugin)}_handle(e,n){return c(this,null,function*(){const r=yield n.cacheMatch(e);return r||(n.event&&n.event.type==="install"?yield this._handleInstall(e,n):yield this._handleFetch(e,n))})}_handleFetch(e,n){return c(this,null,function*(){let r;const s=n.params||{};if(this._fallbackToNetwork){const i=s.integrity,a=e.integrity,o=!a||a===i;r=yield n.fetch(new Request(e,{integrity:e.mode!=="no-cors"?a||i:void 0})),i&&o&&e.mode!=="no-cors"&&(this._useDefaultCacheabilityPluginIfNeeded(),yield n.cachePut(e,r.clone()))}else throw new p("missing-precache-entry",{cacheName:this.cacheName,url:e.url});return r})}_handleInstall(e,n){return c(this,null,function*(){this._useDefaultCacheabilityPluginIfNeeded();const r=yield n.fetch(e);if(!(yield n.cachePut(e,r.clone())))throw new p("bad-precaching-response",{url:e.url,status:r.status});return r})}_useDefaultCacheabilityPluginIfNeeded(){let e=null,n=0;for(const[r,s]of this.plugins.entries())s!==I.copyRedirectedCacheableResponsesPlugin&&(s===I.defaultPrecacheCacheabilityPlugin&&(e=r),s.cacheWillUpdate&&n++);n===0?this.plugins.push(I.defaultPrecacheCacheabilityPlugin):n>1&&e!==null&&this.plugins.splice(e,1)}}I.defaultPrecacheCacheabilityPlugin={cacheWillUpdate(e){return c(this,arguments,function*({response:t}){return!t||t.status>=400?null:t})}};I.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate(e){return c(this,arguments,function*({response:t}){return t.redirected?yield Kt(t):t})}};class Qt{constructor({cacheName:e,plugins:n=[],fallbackToNetwork:r=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new I({cacheName:V.getPrecacheName(e),plugins:[...n,new jt({precacheController:this})],fallbackToNetwork:r}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const n=[];for(const r of e){typeof r=="string"?n.push(r):r&&r.revision===void 0&&n.push(r.url);const{cacheKey:s,url:i}=$t(r),a=typeof r!="string"&&r.revision?"reload":"default";if(this._urlsToCacheKeys.has(i)&&this._urlsToCacheKeys.get(i)!==s)throw new p("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(i),secondEntry:s});if(typeof r!="string"&&r.integrity){if(this._cacheKeysToIntegrities.has(s)&&this._cacheKeysToIntegrities.get(s)!==r.integrity)throw new p("add-to-cache-list-conflicting-integrities",{url:i});this._cacheKeysToIntegrities.set(s,r.integrity)}if(this._urlsToCacheKeys.set(i,s),this._urlsToCacheModes.set(i,a),n.length>0){const o=`Workbox is precaching URLs without revision info: ${n.join(", ")}
This is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(o)}}}install(e){return Oe(e,()=>c(this,null,function*(){const n=new Ft;this.strategy.plugins.push(n);for(const[i,a]of this._urlsToCacheKeys){const o=this._cacheKeysToIntegrities.get(a),l=this._urlsToCacheModes.get(i),h=new Request(i,{integrity:o,cache:l,credentials:"same-origin"});yield Promise.all(this.strategy.handleAll({params:{cacheKey:a},request:h,event:e}))}const{updatedURLs:r,notUpdatedURLs:s}=n;return{updatedURLs:r,notUpdatedURLs:s}}))}activate(e){return Oe(e,()=>c(this,null,function*(){const n=yield self.caches.open(this.strategy.cacheName),r=yield n.keys(),s=new Set(this._urlsToCacheKeys.values()),i=[];for(const a of r)s.has(a.url)||(yield n.delete(a),i.push(a.url));return{deletedURLs:i}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const n=new URL(e,location.href);return this._urlsToCacheKeys.get(n.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}matchPrecache(e){return c(this,null,function*(){const n=e instanceof Request?e.url:e,r=this.getCacheKeyForURL(n);if(r)return(yield self.caches.open(this.strategy.cacheName)).match(r)})}createHandlerBoundToURL(e){const n=this.getCacheKeyForURL(e);if(!n)throw new p("non-precached-url",{url:e});return r=>(r.request=new Request(e),r.params=Object.assign({cacheKey:n},r.params),this.strategy.handle(r))}}let Y;const We=()=>(Y||(Y=new Qt),Y);try{self["workbox:routing:7.2.0"]&&_()}catch(t){}const qe="GET",$=t=>t&&typeof t=="object"?t:{handle:t};class P{constructor(e,n,r=qe){this.handler=$(n),this.match=e,this.method=r}setCatchHandler(e){this.catchHandler=$(e)}}class Zt extends P{constructor(e,n,r){const s=({url:i})=>{const a=e.exec(i.href);if(a&&!(i.origin!==location.origin&&a.index!==0))return a.slice(1)};super(s,n,r)}}class en{constructor(){this._routes=new Map,this._defaultHandlerMap=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",e=>{const{request:n}=e,r=this.handleRequest({request:n,event:e});r&&e.respondWith(r)})}addCacheListener(){self.addEventListener("message",e=>{if(e.data&&e.data.type==="CACHE_URLS"){const{payload:n}=e.data,r=Promise.all(n.urlsToCache.map(s=>{typeof s=="string"&&(s=[s]);const i=new Request(...s);return this.handleRequest({request:i,event:e})}));e.waitUntil(r),e.ports&&e.ports[0]&&r.then(()=>e.ports[0].postMessage(!0))}})}handleRequest({request:e,event:n}){const r=new URL(e.url,location.href);if(!r.protocol.startsWith("http"))return;const s=r.origin===location.origin,{params:i,route:a}=this.findMatchingRoute({event:n,request:e,sameOrigin:s,url:r});let o=a&&a.handler;const l=e.method;if(!o&&this._defaultHandlerMap.has(l)&&(o=this._defaultHandlerMap.get(l)),!o)return;let h;try{h=o.handle({url:r,request:e,event:n,params:i})}catch(f){h=Promise.reject(f)}const u=a&&a.catchHandler;return h instanceof Promise&&(this._catchHandler||u)&&(h=h.catch(f=>c(this,null,function*(){if(u)try{return yield u.handle({url:r,request:e,event:n,params:i})}catch(m){m instanceof Error&&(f=m)}if(this._catchHandler)return this._catchHandler.handle({url:r,request:e,event:n});throw f}))),h}findMatchingRoute({url:e,sameOrigin:n,request:r,event:s}){const i=this._routes.get(r.method)||[];for(const a of i){let o;const l=a.match({url:e,sameOrigin:n,request:r,event:s});if(l)return o=l,(Array.isArray(o)&&o.length===0||l.constructor===Object&&Object.keys(l).length===0||typeof l=="boolean")&&(o=void 0),{route:a,params:o}}return{}}setDefaultHandler(e,n=qe){this._defaultHandlerMap.set(n,$(e))}setCatchHandler(e){this._catchHandler=$(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new p("unregister-route-but-not-found-with-method",{method:e.method});const n=this._routes.get(e.method).indexOf(e);if(n>-1)this._routes.get(e.method).splice(n,1);else throw new p("unregister-route-route-not-registered")}}let L;const tn=()=>(L||(L=new en,L.addFetchListener(),L.addCacheListener()),L);function nn(t,e,n){let r;if(typeof t=="string"){const i=new URL(t,location.href),a=({url:o})=>o.href===i.href;r=new P(a,e,n)}else if(t instanceof RegExp)r=new Zt(t,e,n);else if(typeof t=="function")r=new P(t,e,n);else if(t instanceof P)r=t;else throw new p("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});return tn().registerRoute(r),r}function rn(t,e=[]){for(const n of[...t.searchParams.keys()])e.some(r=>r.test(n))&&t.searchParams.delete(n);return t}function*sn(t,{ignoreURLParametersMatching:e=[/^utm_/,/^fbclid$/],directoryIndex:n="index.html",cleanURLs:r=!0,urlManipulation:s}={}){const i=new URL(t,location.href);i.hash="",yield i.href;const a=rn(i,e);if(yield a.href,n&&a.pathname.endsWith("/")){const o=new URL(a.href);o.pathname+=n,yield o.href}if(r){const o=new URL(a.href);o.pathname+=".html",yield o.href}if(s){const o=s({url:i});for(const l of o)yield l.href}}class an extends P{constructor(e,n){const r=({request:s})=>{const i=e.getURLsToCacheKeys();for(const a of sn(s.url,n)){const o=i.get(a);if(o){const l=e.getIntegrityForCacheKey(o);return{cacheKey:o,integrity:l}}}};super(r,e.strategy)}}function on(t){const e=We(),n=new an(e,t);nn(n)}const cn="-precache-",ln=(n,...r)=>c(void 0,[n,...r],function*(t,e=cn){const i=(yield self.caches.keys()).filter(a=>a.includes(e)&&a.includes(self.registration.scope)&&a!==t);return yield Promise.all(i.map(a=>self.caches.delete(a))),i});function un(){self.addEventListener("activate",t=>{const e=V.getPrecacheName();t.waitUntil(ln(e).then(n=>{}))})}function hn(t){We().precache(t)}function fn(t,e){hn(t),on(e)}function dn(){self.addEventListener("activate",()=>self.clients.claim())}/**
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
 */const ze=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},pn=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],a=t[n++],o=t[n++],l=((s&7)<<18|(i&63)<<12|(a&63)<<6|o&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],a=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Ge={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],a=s+1<t.length,o=a?t[s+1]:0,l=s+2<t.length,h=l?t[s+2]:0,u=i>>2,f=(i&3)<<4|o>>4;let m=(o&15)<<2|h>>6,x=h&63;l||(x=64,a||(m=64)),r.push(n[u],n[f],n[m],n[x])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ze(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):pn(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],o=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const f=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||o==null||h==null||f==null)throw new gn;const m=i<<2|o>>4;if(r.push(m),h!==64){const x=o<<4&240|h>>2;if(r.push(x),f!==64){const At=h<<6&192|f;r.push(At)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class gn extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const mn=function(t){const e=ze(t);return Ge.encodeByteArray(e,!0)},Je=function(t){return mn(t).replace(/\./g,"")},bn=function(t){try{return Ge.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function wn(){if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof global!="undefined")return global;throw new Error("Unable to locate global object.")}/**
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
 */const yn=()=>wn().__FIREBASE_DEFAULTS__,_n=()=>{if(typeof process=="undefined"||typeof process.env=="undefined")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},In=()=>{if(typeof document=="undefined")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const e=t&&bn(t[1]);return e&&JSON.parse(e)},En=()=>{try{return yn()||_n()||In()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ye=()=>{var t;return(t=En())===null||t===void 0?void 0:t.config};/**
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
 */class Cn{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}function Xe(){try{return typeof indexedDB=="object"}catch(t){return!1}}function Qe(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const vn="FirebaseError";class N extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=vn,Object.setPrototypeOf(this,N.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,W.prototype.create)}}class W{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?Sn(i,r):"Error",o=`${this.serviceName}: ${a} (${s}).`;return new N(s,o,r)}}function Sn(t,e){return t.replace(Tn,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Tn=/\{\$([^}]+)}/g;function oe(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],a=e[s];if(Me(i)&&Me(a)){if(!oe(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Me(t){return t!==null&&typeof t=="object"}/**
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
 */function Ze(t){return t&&t._delegate?t._delegate:t}class S{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const C="[DEFAULT]";/**
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
 */class kn{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Cn;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch(s){}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(An(e))try{this.getOrInitializeService({instanceIdentifier:C})}catch(n){}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch(i){}}}}clearInstance(e=C){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}delete(){return c(this,null,function*(){const e=Array.from(this.instances.values());yield Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])})}isComponentSet(){return this.component!=null}isInitialized(e=C){return this.instances.has(e)}getOptions(e=C){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,a]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(i);r===o&&a.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch(i){}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Rn(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch(s){}return r||null}normalizeInstanceIdentifier(e=C){return this.component?this.component.multipleInstances?e:C:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Rn(t){return t===C?void 0:t}function An(t){return t.instantiationMode==="EAGER"}/**
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
 */class Dn{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new kn(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var d;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(d||(d={}));const On={debug:d.DEBUG,verbose:d.VERBOSE,info:d.INFO,warn:d.WARN,error:d.ERROR,silent:d.SILENT},Nn=d.INFO,Mn={[d.DEBUG]:"log",[d.VERBOSE]:"log",[d.INFO]:"info",[d.WARN]:"warn",[d.ERROR]:"error"},Ln=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Mn[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Pn{constructor(e){this.name=e,this._logLevel=Nn,this._logHandler=Ln,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in d))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?On[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,d.DEBUG,...e),this._logHandler(this,d.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,d.VERBOSE,...e),this._logHandler(this,d.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,d.INFO,...e),this._logHandler(this,d.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,d.WARN,...e),this._logHandler(this,d.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,d.ERROR,...e),this._logHandler(this,d.ERROR,...e)}}const Bn=(t,e)=>e.some(n=>t instanceof n);let Le,Pe;function xn(){return Le||(Le=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Un(){return Pe||(Pe=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const et=new WeakMap,ce=new WeakMap,tt=new WeakMap,X=new WeakMap,ge=new WeakMap;function $n(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",a)},i=()=>{n(y(t.result)),s()},a=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&et.set(n,t)}).catch(()=>{}),ge.set(e,t),e}function Fn(t){if(ce.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",a),t.removeEventListener("abort",a)},i=()=>{n(),s()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",a),t.addEventListener("abort",a)});ce.set(t,e)}let le={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ce.get(t);if(e==="objectStoreNames")return t.objectStoreNames||tt.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return y(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function jn(t){le=t(le)}function Hn(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Q(this),e,...n);return tt.set(r,e.sort?e.sort():[e]),y(r)}:Un().includes(t)?function(...e){return t.apply(Q(this),e),y(et.get(this))}:function(...e){return y(t.apply(Q(this),e))}}function Kn(t){return typeof t=="function"?Hn(t):(t instanceof IDBTransaction&&Fn(t),Bn(t,xn())?new Proxy(t,le):t)}function y(t){if(t instanceof IDBRequest)return $n(t);if(X.has(t))return X.get(t);const e=Kn(t);return e!==t&&(X.set(t,e),ge.set(e,t)),e}const Q=t=>ge.get(t);function q(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(t,e),o=y(a);return r&&a.addEventListener("upgradeneeded",l=>{r(y(a.result),l.oldVersion,l.newVersion,y(a.transaction),l)}),n&&a.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),o.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),o}function Z(t,{blocked:e}={}){const n=indexedDB.deleteDatabase(t);return e&&n.addEventListener("blocked",r=>e(r.oldVersion,r)),y(n).then(()=>{})}const Vn=["get","getKey","getAll","getAllKeys","count"],Wn=["put","add","delete","clear"],ee=new Map;function Be(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ee.get(e))return ee.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Wn.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Vn.includes(n)))return;const i=function(a,...o){return c(this,null,function*(){const l=this.transaction(a,s?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(o.shift())),(yield Promise.all([h[n](...o),s&&l.done]))[0]})};return ee.set(e,i),i}jn(t=>De(Ae({},t),{get:(e,n,r)=>Be(e,n)||t.get(e,n,r),has:(e,n)=>!!Be(e,n)||t.has(e,n)}));/**
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
 */class qn{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(zn(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function zn(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ue="@firebase/app",xe="0.9.27";/**
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
 */const T=new Pn("@firebase/app"),Gn="@firebase/app-compat",Jn="@firebase/analytics-compat",Yn="@firebase/analytics",Xn="@firebase/app-check-compat",Qn="@firebase/app-check",Zn="@firebase/auth",er="@firebase/auth-compat",tr="@firebase/database",nr="@firebase/database-compat",rr="@firebase/functions",sr="@firebase/functions-compat",ir="@firebase/installations",ar="@firebase/installations-compat",or="@firebase/messaging",cr="@firebase/messaging-compat",lr="@firebase/performance",ur="@firebase/performance-compat",hr="@firebase/remote-config",fr="@firebase/remote-config-compat",dr="@firebase/storage",pr="@firebase/storage-compat",gr="@firebase/firestore",mr="@firebase/firestore-compat",br="firebase";/**
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
 */const he="[DEFAULT]",wr={[ue]:"fire-core",[Gn]:"fire-core-compat",[Yn]:"fire-analytics",[Jn]:"fire-analytics-compat",[Qn]:"fire-app-check",[Xn]:"fire-app-check-compat",[Zn]:"fire-auth",[er]:"fire-auth-compat",[tr]:"fire-rtdb",[nr]:"fire-rtdb-compat",[rr]:"fire-fn",[sr]:"fire-fn-compat",[ir]:"fire-iid",[ar]:"fire-iid-compat",[or]:"fire-fcm",[cr]:"fire-fcm-compat",[lr]:"fire-perf",[ur]:"fire-perf-compat",[hr]:"fire-rc",[fr]:"fire-rc-compat",[dr]:"fire-gcs",[pr]:"fire-gcs-compat",[gr]:"fire-fst",[mr]:"fire-fst-compat","fire-js":"fire-js",[br]:"fire-js-all"};/**
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
 */const F=new Map,fe=new Map;function yr(t,e){try{t.container.addComponent(e)}catch(n){T.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function O(t){const e=t.name;if(fe.has(e))return T.debug(`There were multiple attempts to register component ${e}.`),!1;fe.set(e,t);for(const n of F.values())yr(n,t);return!0}function me(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const _r={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},E=new W("app","Firebase",_r);/**
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
 */class Ir{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new S("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw E.create("app-deleted",{appName:this._name})}}function nt(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:he,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw E.create("bad-app-name",{appName:String(s)});if(n||(n=Ye()),!n)throw E.create("no-options");const i=F.get(s);if(i){if(oe(n,i.options)&&oe(r,i.config))return i;throw E.create("duplicate-app",{appName:s})}const a=new Dn(s);for(const l of fe.values())a.addComponent(l);const o=new Ir(n,r,a);return F.set(s,o),o}function Er(t=he){const e=F.get(t);if(!e&&t===he&&Ye())return nt();if(!e)throw E.create("no-app",{appName:t});return e}function D(t,e,n){var r;let s=(r=wr[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const o=[`Unable to register library "${s}" with version "${e}":`];i&&o.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&o.push("and"),a&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),T.warn(o.join(" "));return}O(new S(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Cr="firebase-heartbeat-database",vr=1,B="firebase-heartbeat-store";let te=null;function rt(){return te||(te=q(Cr,vr,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(B)}catch(n){console.warn(n)}}}}).catch(t=>{throw E.create("idb-open",{originalErrorMessage:t.message})})),te}function Sr(t){return c(this,null,function*(){try{const n=(yield rt()).transaction(B),r=yield n.objectStore(B).get(st(t));return yield n.done,r}catch(e){if(e instanceof N)T.warn(e.message);else{const n=E.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});T.warn(n.message)}}})}function Ue(t,e){return c(this,null,function*(){try{const r=(yield rt()).transaction(B,"readwrite");yield r.objectStore(B).put(e,st(t)),yield r.done}catch(n){if(n instanceof N)T.warn(n.message);else{const r=E.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});T.warn(r.message)}}})}function st(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Tr=1024,kr=30*24*60*60*1e3;class Rr{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Dr(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}triggerHeartbeat(){return c(this,null,function*(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=$e();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=yield this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const o=new Date(a.date).valueOf();return Date.now()-o<=kr}),this._storage.overwrite(this._heartbeatsCache)})}getHeartbeatsHeader(){return c(this,null,function*(){var e;if(this._heartbeatsCache===null&&(yield this._heartbeatsCachePromise),((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=$e(),{heartbeatsToSend:r,unsentEntries:s}=Ar(this._heartbeatsCache.heartbeats),i=Je(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,yield this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i})}}function $e(){return new Date().toISOString().substring(0,10)}function Ar(t,e=Tr){const n=[];let r=t.slice();for(const s of t){const i=n.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Fe(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Fe(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Dr{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}runIndexedDBEnvironmentCheck(){return c(this,null,function*(){return Xe()?Qe().then(()=>!0).catch(()=>!1):!1})}read(){return c(this,null,function*(){if(yield this._canUseIndexedDBPromise){const n=yield Sr(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}})}overwrite(e){return c(this,null,function*(){var n;if(yield this._canUseIndexedDBPromise){const s=yield this.read();return Ue(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return})}add(e){return c(this,null,function*(){var n;if(yield this._canUseIndexedDBPromise){const s=yield this.read();return Ue(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return})}}function Fe(t){return Je(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Or(t){O(new S("platform-logger",e=>new qn(e),"PRIVATE")),O(new S("heartbeat",e=>new Rr(e),"PRIVATE")),D(ue,xe,t),D(ue,xe,"esm2017"),D("fire-js","")}Or("");var Nr="firebase",Mr="10.8.0";/**
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
 */D(Nr,Mr,"app");const it="@firebase/installations",be="0.6.5";/**
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
 */const at=1e4,ot=`w:${be}`,ct="FIS_v2",Lr="https://firebaseinstallations.googleapis.com/v1",Pr=60*60*1e3,Br="installations",xr="Installations";/**
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
 */const Ur={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},k=new W(Br,xr,Ur);function lt(t){return t instanceof N&&t.code.includes("request-failed")}/**
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
 */function ut({projectId:t}){return`${Lr}/projects/${t}/installations`}function ht(t){return{token:t.token,requestStatus:2,expiresIn:Fr(t.expiresIn),creationTime:Date.now()}}function ft(t,e){return c(this,null,function*(){const r=(yield e.json()).error;return k.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})})}function dt({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function $r(t,{refreshToken:e}){const n=dt(t);return n.append("Authorization",jr(e)),n}function pt(t){return c(this,null,function*(){const e=yield t();return e.status>=500&&e.status<600?t():e})}function Fr(t){return Number(t.replace("s","000"))}function jr(t){return`${ct} ${t}`}/**
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
 */function Hr(r,s){return c(this,arguments,function*({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const i=ut(t),a=dt(t),o=e.getImmediate({optional:!0});if(o){const f=yield o.getHeartbeatsHeader();f&&a.append("x-firebase-client",f)}const l={fid:n,authVersion:ct,appId:t.appId,sdkVersion:ot},h={method:"POST",headers:a,body:JSON.stringify(l)},u=yield pt(()=>fetch(i,h));if(u.ok){const f=yield u.json();return{fid:f.fid||n,registrationStatus:2,refreshToken:f.refreshToken,authToken:ht(f.authToken)}}else throw yield ft("Create Installation",u)})}/**
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
 */function gt(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function Kr(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Vr=/^[cdef][\w-]{21}$/,de="";function Wr(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=qr(t);return Vr.test(n)?n:de}catch(t){return de}}function qr(t){return Kr(t).substr(0,22)}/**
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
 */function z(t){return`${t.appName}!${t.appId}`}/**
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
 */const mt=new Map;function bt(t,e){const n=z(t);wt(n,e),zr(n,e)}function wt(t,e){const n=mt.get(t);if(n)for(const r of n)r(e)}function zr(t,e){const n=Gr();n&&n.postMessage({key:t,fid:e}),Jr()}let v=null;function Gr(){return!v&&"BroadcastChannel"in self&&(v=new BroadcastChannel("[Firebase] FID Change"),v.onmessage=t=>{wt(t.data.key,t.data.fid)}),v}function Jr(){mt.size===0&&v&&(v.close(),v=null)}/**
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
 */const Yr="firebase-installations-database",Xr=1,R="firebase-installations-store";let ne=null;function we(){return ne||(ne=q(Yr,Xr,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(R)}}})),ne}function j(t,e){return c(this,null,function*(){const n=z(t),s=(yield we()).transaction(R,"readwrite"),i=s.objectStore(R),a=yield i.get(n);return yield i.put(e,n),yield s.done,(!a||a.fid!==e.fid)&&bt(t,e.fid),e})}function yt(t){return c(this,null,function*(){const e=z(t),r=(yield we()).transaction(R,"readwrite");yield r.objectStore(R).delete(e),yield r.done})}function G(t,e){return c(this,null,function*(){const n=z(t),s=(yield we()).transaction(R,"readwrite"),i=s.objectStore(R),a=yield i.get(n),o=e(a);return o===void 0?yield i.delete(n):yield i.put(o,n),yield s.done,o&&(!a||a.fid!==o.fid)&&bt(t,o.fid),o})}/**
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
 */function ye(t){return c(this,null,function*(){let e;const n=yield G(t.appConfig,r=>{const s=Qr(r),i=Zr(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===de?{installationEntry:yield e}:{installationEntry:n,registrationPromise:e}})}function Qr(t){const e=t||{fid:Wr(),registrationStatus:0};return _t(e)}function Zr(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(k.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=es(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:ts(t)}:{installationEntry:e}}function es(t,e){return c(this,null,function*(){try{const n=yield Hr(t,e);return j(t.appConfig,n)}catch(n){throw lt(n)&&n.customData.serverCode===409?yield yt(t.appConfig):yield j(t.appConfig,{fid:e.fid,registrationStatus:0}),n}})}function ts(t){return c(this,null,function*(){let e=yield je(t.appConfig);for(;e.registrationStatus===1;)yield gt(100),e=yield je(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=yield ye(t);return r||n}return e})}function je(t){return G(t,e=>{if(!e)throw k.create("installation-not-found");return _t(e)})}function _t(t){return ns(t)?{fid:t.fid,registrationStatus:0}:t}function ns(t){return t.registrationStatus===1&&t.registrationTime+at<Date.now()}/**
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
 */function rs(r,s){return c(this,arguments,function*({appConfig:t,heartbeatServiceProvider:e},n){const i=ss(t,n),a=$r(t,n),o=e.getImmediate({optional:!0});if(o){const f=yield o.getHeartbeatsHeader();f&&a.append("x-firebase-client",f)}const l={installation:{sdkVersion:ot,appId:t.appId}},h={method:"POST",headers:a,body:JSON.stringify(l)},u=yield pt(()=>fetch(i,h));if(u.ok){const f=yield u.json();return ht(f)}else throw yield ft("Generate Auth Token",u)})}function ss(t,{fid:e}){return`${ut(t)}/${e}/authTokens:generate`}/**
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
 */function _e(t,e=!1){return c(this,null,function*(){let n;const r=yield G(t.appConfig,i=>{if(!It(i))throw k.create("not-registered");const a=i.authToken;if(!e&&os(a))return i;if(a.requestStatus===1)return n=is(t,e),i;{if(!navigator.onLine)throw k.create("app-offline");const o=ls(i);return n=as(t,o),o}});return n?yield n:r.authToken})}function is(t,e){return c(this,null,function*(){let n=yield He(t.appConfig);for(;n.authToken.requestStatus===1;)yield gt(100),n=yield He(t.appConfig);const r=n.authToken;return r.requestStatus===0?_e(t,e):r})}function He(t){return G(t,e=>{if(!It(e))throw k.create("not-registered");const n=e.authToken;return us(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}function as(t,e){return c(this,null,function*(){try{const n=yield rs(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return yield j(t.appConfig,r),n}catch(n){if(lt(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))yield yt(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});yield j(t.appConfig,r)}throw n}})}function It(t){return t!==void 0&&t.registrationStatus===2}function os(t){return t.requestStatus===2&&!cs(t)}function cs(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Pr}function ls(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function us(t){return t.requestStatus===1&&t.requestTime+at<Date.now()}/**
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
 */function hs(t){return c(this,null,function*(){const e=t,{installationEntry:n,registrationPromise:r}=yield ye(e);return r?r.catch(console.error):_e(e).catch(console.error),n.fid})}/**
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
 */function fs(t,e=!1){return c(this,null,function*(){const n=t;return yield ds(n),(yield _e(n,e)).token})}function ds(t){return c(this,null,function*(){const{registrationPromise:e}=yield ye(t);e&&(yield e)})}/**
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
 */function ps(t){if(!t||!t.options)throw re("App Configuration");if(!t.name)throw re("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw re(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function re(t){return k.create("missing-app-config-values",{valueName:t})}/**
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
 */const Et="installations",gs="installations-internal",ms=t=>{const e=t.getProvider("app").getImmediate(),n=ps(e),r=me(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},bs=t=>{const e=t.getProvider("app").getImmediate(),n=me(e,Et).getImmediate();return{getId:()=>hs(n),getToken:s=>fs(n,s)}};function ws(){O(new S(Et,ms,"PUBLIC")),O(new S(gs,bs,"PRIVATE"))}ws();D(it,be);D(it,be,"esm2017");/**
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
 */const Ct="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",ys="https://fcmregistrations.googleapis.com/v1",vt="FCM_MSG",_s="google.c.a.c_id",Is=3,Es=1;var H;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(H||(H={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var K;(function(t){t.PUSH_RECEIVED="push-received",t.NOTIFICATION_CLICKED="notification-clicked"})(K||(K={}));/**
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
 */function b(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function Cs(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),s=new Uint8Array(r.length);for(let i=0;i<r.length;++i)s[i]=r.charCodeAt(i);return s}/**
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
 */const se="fcm_token_details_db",vs=5,Ke="fcm_token_object_Store";function Ss(t){return c(this,null,function*(){if("databases"in indexedDB&&!(yield indexedDB.databases()).map(i=>i.name).includes(se))return null;let e=null;return(yield q(se,vs,{upgrade:(r,s,i,a)=>c(this,null,function*(){var o;if(s<2||!r.objectStoreNames.contains(Ke))return;const l=a.objectStore(Ke),h=yield l.index("fcmSenderId").get(t);if(yield l.clear(),!!h){if(s===2){const u=h;if(!u.auth||!u.p256dh||!u.endpoint)return;e={token:u.fcmToken,createTime:(o=u.createTime)!==null&&o!==void 0?o:Date.now(),subscriptionOptions:{auth:u.auth,p256dh:u.p256dh,endpoint:u.endpoint,swScope:u.swScope,vapidKey:typeof u.vapidKey=="string"?u.vapidKey:b(u.vapidKey)}}}else if(s===3){const u=h;e={token:u.fcmToken,createTime:u.createTime,subscriptionOptions:{auth:b(u.auth),p256dh:b(u.p256dh),endpoint:u.endpoint,swScope:u.swScope,vapidKey:b(u.vapidKey)}}}else if(s===4){const u=h;e={token:u.fcmToken,createTime:u.createTime,subscriptionOptions:{auth:b(u.auth),p256dh:b(u.p256dh),endpoint:u.endpoint,swScope:u.swScope,vapidKey:b(u.vapidKey)}}}}})})).close(),yield Z(se),yield Z("fcm_vapid_details_db"),yield Z("undefined"),Ts(e)?e:null})}function Ts(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const ks="firebase-messaging-database",Rs=1,A="firebase-messaging-store";let ie=null;function Ie(){return ie||(ie=q(ks,Rs,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(A)}}})),ie}function Ee(t){return c(this,null,function*(){const e=ve(t),r=yield(yield Ie()).transaction(A).objectStore(A).get(e);if(r)return r;{const s=yield Ss(t.appConfig.senderId);if(s)return yield Ce(t,s),s}})}function Ce(t,e){return c(this,null,function*(){const n=ve(t),s=(yield Ie()).transaction(A,"readwrite");return yield s.objectStore(A).put(e,n),yield s.done,e})}function As(t){return c(this,null,function*(){const e=ve(t),r=(yield Ie()).transaction(A,"readwrite");yield r.objectStore(A).delete(e),yield r.done})}function ve({appConfig:t}){return t.appId}/**
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
 */const Ds={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},g=new W("messaging","Messaging",Ds);/**
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
 */function Os(t,e){return c(this,null,function*(){const n=yield Te(t),r=Tt(e),s={method:"POST",headers:n,body:JSON.stringify(r)};let i;try{i=yield(yield fetch(Se(t.appConfig),s)).json()}catch(a){throw g.create("token-subscribe-failed",{errorInfo:a==null?void 0:a.toString()})}if(i.error){const a=i.error.message;throw g.create("token-subscribe-failed",{errorInfo:a})}if(!i.token)throw g.create("token-subscribe-no-token");return i.token})}function Ns(t,e){return c(this,null,function*(){const n=yield Te(t),r=Tt(e.subscriptionOptions),s={method:"PATCH",headers:n,body:JSON.stringify(r)};let i;try{i=yield(yield fetch(`${Se(t.appConfig)}/${e.token}`,s)).json()}catch(a){throw g.create("token-update-failed",{errorInfo:a==null?void 0:a.toString()})}if(i.error){const a=i.error.message;throw g.create("token-update-failed",{errorInfo:a})}if(!i.token)throw g.create("token-update-no-token");return i.token})}function St(t,e){return c(this,null,function*(){const r={method:"DELETE",headers:yield Te(t)};try{const i=yield(yield fetch(`${Se(t.appConfig)}/${e}`,r)).json();if(i.error){const a=i.error.message;throw g.create("token-unsubscribe-failed",{errorInfo:a})}}catch(s){throw g.create("token-unsubscribe-failed",{errorInfo:s==null?void 0:s.toString()})}})}function Se({projectId:t}){return`${ys}/projects/${t}/registrations`}function Te(n){return c(this,arguments,function*({appConfig:t,installations:e}){const r=yield e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${r}`})})}function Tt({p256dh:t,auth:e,endpoint:n,vapidKey:r}){const s={web:{endpoint:n,auth:e,p256dh:t}};return r!==Ct&&(s.web.applicationPubKey=r),s}/**
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
 */const Ms=7*24*60*60*1e3;function Ls(t){return c(this,null,function*(){const e=yield Bs(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:b(e.getKey("auth")),p256dh:b(e.getKey("p256dh"))},r=yield Ee(t.firebaseDependencies);if(r){if(xs(r.subscriptionOptions,n))return Date.now()>=r.createTime+Ms?Ps(t,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{yield St(t.firebaseDependencies,r.token)}catch(s){console.warn(s)}return Ve(t.firebaseDependencies,n)}else return Ve(t.firebaseDependencies,n)})}function pe(t){return c(this,null,function*(){const e=yield Ee(t.firebaseDependencies);e&&(yield St(t.firebaseDependencies,e.token),yield As(t.firebaseDependencies));const n=yield t.swRegistration.pushManager.getSubscription();return n?n.unsubscribe():!0})}function Ps(t,e){return c(this,null,function*(){try{const n=yield Ns(t.firebaseDependencies,e),r=Object.assign(Object.assign({},e),{token:n,createTime:Date.now()});return yield Ce(t.firebaseDependencies,r),n}catch(n){throw yield pe(t),n}})}function Ve(t,e){return c(this,null,function*(){const r={token:yield Os(t,e),createTime:Date.now(),subscriptionOptions:e};return yield Ce(t,r),r.token})}function Bs(t,e){return c(this,null,function*(){const n=yield t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Cs(e)})})}function xs(t,e){const n=e.vapidKey===t.vapidKey,r=e.endpoint===t.endpoint,s=e.auth===t.auth,i=e.p256dh===t.p256dh;return n&&r&&s&&i}/**
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
 */function Us(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return $s(e,t),Fs(e,t),js(e,t),e}function $s(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const r=e.notification.body;r&&(t.notification.body=r);const s=e.notification.image;s&&(t.notification.image=s);const i=e.notification.icon;i&&(t.notification.icon=i)}function Fs(t,e){e.data&&(t.data=e.data)}function js(t,e){var n,r,s,i,a;if(!e.fcmOptions&&!(!((n=e.notification)===null||n===void 0)&&n.click_action))return;t.fcmOptions={};const o=(s=(r=e.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&s!==void 0?s:(i=e.notification)===null||i===void 0?void 0:i.click_action;o&&(t.fcmOptions.link=o);const l=(a=e.fcmOptions)===null||a===void 0?void 0:a.analytics_label;l&&(t.fcmOptions.analyticsLabel=l)}/**
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
 */function Hs(t){return typeof t=="object"&&!!t&&_s in t}/**
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
 */function Ks(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */kt("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o");kt("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");function Vs(t,e){return c(this,null,function*(){const n=Ws(e,yield t.firebaseDependencies.installations.getId());qs(t,n,e.productId)})}function Ws(t,e){var n,r;const s={};return t.from&&(s.project_number=t.from),t.fcmMessageId&&(s.message_id=t.fcmMessageId),s.instance_id=e,t.notification?s.message_type=H.DISPLAY_NOTIFICATION.toString():s.message_type=H.DATA_MESSAGE.toString(),s.sdk_platform=Is.toString(),s.package_name=self.origin.replace(/(^\w+:|^)\/\//,""),t.collapse_key&&(s.collapse_key=t.collapse_key),s.event=Es.toString(),!((n=t.fcmOptions)===null||n===void 0)&&n.analytics_label&&(s.analytics_label=(r=t.fcmOptions)===null||r===void 0?void 0:r.analytics_label),s}function qs(t,e,n){const r={};r.event_time_ms=Math.floor(Date.now()).toString(),r.source_extension_json_proto3=JSON.stringify(e),n&&(r.compliance_data=zs(n)),t.logEvents.push(r)}function zs(t){return{privacy_context:{prequest:{origin_associated_product_id:t}}}}function kt(t,e){const n=[];for(let r=0;r<t.length;r++)n.push(t.charAt(r)),r<e.length&&n.push(e.charAt(r));return n.join("")}/**
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
 */function Gs(t,e){return c(this,null,function*(){var n,r;const{newSubscription:s}=t;if(!s){yield pe(e);return}const i=yield Ee(e.firebaseDependencies);yield pe(e),e.vapidKey=(r=(n=i==null?void 0:i.subscriptionOptions)===null||n===void 0?void 0:n.vapidKey)!==null&&r!==void 0?r:Ct,yield Ls(e)})}function Js(t,e){return c(this,null,function*(){const n=Qs(t);if(!n)return;e.deliveryMetricsExportedToBigQueryEnabled&&(yield Vs(e,n));const r=yield Rt();if(ei(r))return ti(r,n);if(n.notification&&(yield ni(Xs(n))),!!e&&e.onBackgroundMessageHandler){const s=Us(n);typeof e.onBackgroundMessageHandler=="function"?yield e.onBackgroundMessageHandler(s):e.onBackgroundMessageHandler.next(s)}})}function Ys(t){return c(this,null,function*(){var e,n;const r=(n=(e=t.notification)===null||e===void 0?void 0:e.data)===null||n===void 0?void 0:n[vt];if(r){if(t.action)return}else return;t.stopImmediatePropagation(),t.notification.close();const s=ri(r);if(!s)return;const i=new URL(s,self.location.href),a=new URL(self.location.origin);if(i.host!==a.host)return;let o=yield Zs(i);if(o?o=yield o.focus():(o=yield self.clients.openWindow(s),yield Ks(3e3)),!!o)return r.messageType=K.NOTIFICATION_CLICKED,r.isFirebaseMessaging=!0,o.postMessage(r)})}function Xs(t){const e=Object.assign({},t.notification);return e.data={[vt]:t},e}function Qs({data:t}){if(!t)return null;try{return t.json()}catch(e){return null}}function Zs(t){return c(this,null,function*(){const e=yield Rt();for(const n of e){const r=new URL(n.url,self.location.href);if(t.host===r.host)return n}return null})}function ei(t){return t.some(e=>e.visibilityState==="visible"&&!e.url.startsWith("chrome-extension://"))}function ti(t,e){e.isFirebaseMessaging=!0,e.messageType=K.PUSH_RECEIVED;for(const n of t)n.postMessage(e)}function Rt(){return self.clients.matchAll({type:"window",includeUncontrolled:!0})}function ni(t){var e;const{actions:n}=t,{maxActions:r}=Notification;return n&&r&&n.length>r&&console.warn(`This browser only supports ${r} actions. The remaining actions will not be displayed.`),self.registration.showNotification((e=t.title)!==null&&e!==void 0?e:"",t)}function ri(t){var e,n,r;const s=(n=(e=t.fcmOptions)===null||e===void 0?void 0:e.link)!==null&&n!==void 0?n:(r=t.notification)===null||r===void 0?void 0:r.click_action;return s||(Hs(t.data)?self.location.origin:null)}/**
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
 */function si(t){if(!t||!t.options)throw ae("App Configuration Object");if(!t.name)throw ae("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const r of e)if(!n[r])throw ae(r);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function ae(t){return g.create("missing-app-config-values",{valueName:t})}/**
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
 */class ii{constructor(e,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const s=si(e);this.firebaseDependencies={app:e,appConfig:s,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
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
 */const ai=t=>{const e=new ii(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return self.addEventListener("push",n=>{n.waitUntil(Js(n,e))}),self.addEventListener("pushsubscriptionchange",n=>{n.waitUntil(Gs(n,e))}),self.addEventListener("notificationclick",n=>{n.waitUntil(Ys(n))}),e};function oi(){O(new S("messaging-sw",ai,"PUBLIC"))}/**
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
 */function ci(){return c(this,null,function*(){return Xe()&&(yield Qe())&&"PushManager"in self&&"Notification"in self&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")})}/**
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
 */function li(t,e){if(self.document!==void 0)throw g.create("only-available-in-sw");return t.onBackgroundMessageHandler=e,()=>{t.onBackgroundMessageHandler=null}}/**
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
 */function ui(t=Er()){return ci().then(e=>{if(!e)throw g.create("unsupported-browser")},e=>{throw g.create("indexed-db-unsupported")}),me(Ze(t),"messaging-sw").getImmediate()}function hi(t,e){return t=Ze(t),li(t,e)}/**
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
 */oi();fn([{"revision":null,"url":"assets/AppSettings-2ced8fb4.js"},{"revision":null,"url":"assets/attendance-496ae3d9.js"},{"revision":null,"url":"assets/AttendanceCalendar-1bd93db6.js"},{"revision":null,"url":"assets/AttendanceRequestForm-c4e0a66e.js"},{"revision":null,"url":"assets/AttendanceRequestItem-78e3d3ff.js"},{"revision":null,"url":"assets/AttendanceRequestList-02b6bbcb.js"},{"revision":null,"url":"assets/BaseLayout-5eccbb01.js"},{"revision":null,"url":"assets/CheckInPanel-8591def9.js"},{"revision":null,"url":"assets/claims-b52c8fde.js"},{"revision":null,"url":"assets/CustomIonModal-599f147f.js"},{"revision":null,"url":"assets/Dashboard-2316ba79.js"},{"revision":null,"url":"assets/Dashboard-362e6b4c.js"},{"revision":null,"url":"assets/Dashboard-cefa2a58.js"},{"revision":null,"url":"assets/Dashboard-e8a9656d.js"},{"revision":null,"url":"assets/Detail-fb5622f1.js"},{"revision":null,"url":"assets/employee-399cdb46.js"},{"revision":null,"url":"assets/EmployeeAdvanceBalance-7f2ab5bf.js"},{"revision":null,"url":"assets/EmployeeAdvanceIcon-d86105a7.js"},{"revision":null,"url":"assets/EmployeeAdvanceItem-6824eccb.js"},{"revision":null,"url":"assets/EmployeeAvatar-6acab2d7.js"},{"revision":null,"url":"assets/EmployeeCheckinItem-2e9e28fe.js"},{"revision":null,"url":"assets/EmployeeCheckinList-bd6d6c88.js"},{"revision":null,"url":"assets/EmptyState-3bef2d7a.js"},{"revision":null,"url":"assets/ExpenseAdvancesTable-157fe56a.js"},{"revision":null,"url":"assets/ExpenseClaimItem-9e9315fa.js"},{"revision":null,"url":"assets/ExpenseClaimSummary-6febfcff.js"},{"revision":null,"url":"assets/ExpenseItems-c4ce8c5c.js"},{"revision":null,"url":"assets/ExpensesTable-9be124e2.js"},{"revision":null,"url":"assets/ExpenseTaxesTable-81cf2cd4.js"},{"revision":null,"url":"assets/FileUploaderView-2c05c13e.js"},{"revision":null,"url":"assets/FileUploaderView-6dfe5540.css"},{"revision":null,"url":"assets/focus-visible-9c13edeb.js"},{"revision":null,"url":"assets/Form-0b26621e.js"},{"revision":null,"url":"assets/Form-668cee65.js"},{"revision":null,"url":"assets/Form-a76a097d.js"},{"revision":null,"url":"assets/FormattedField-abf651f5.js"},{"revision":null,"url":"assets/formatters-c2abf875.js"},{"revision":null,"url":"assets/FormField-1058c29b.js"},{"revision":null,"url":"assets/FormView-3bc2cd59.js"},{"revision":null,"url":"assets/frappe-ui-02049d65.js"},{"revision":null,"url":"assets/frappe-ui-70b1a156.css"},{"revision":null,"url":"assets/Holidays-6bc17ca7.js"},{"revision":null,"url":"assets/Home-c88bef36.js"},{"revision":null,"url":"assets/index-1b959967.js"},{"revision":null,"url":"assets/index-6fe0fb3d.css"},{"revision":null,"url":"assets/index9-9e403191.js"},{"revision":null,"url":"assets/input-shims-4496b983.js"},{"revision":null,"url":"assets/InvalidEmployee-42a15c4e.js"},{"revision":null,"url":"assets/ios.transition-64f93da0.js"},{"revision":null,"url":"assets/LeaveBalance-c6955d5d.js"},{"revision":null,"url":"assets/LeaveRequestItem-1f5fc8cd.js"},{"revision":null,"url":"assets/leaves-750319ca.js"},{"revision":null,"url":"assets/Link-cfd1cc27.js"},{"revision":null,"url":"assets/List-2e27643d.js"},{"revision":null,"url":"assets/List-36d52bcd.js"},{"revision":null,"url":"assets/List-3a4f77c7.js"},{"revision":null,"url":"assets/ListFiltersActionSheet-b4601211.js"},{"revision":null,"url":"assets/ListItem-3fa63396.js"},{"revision":null,"url":"assets/ListView-5e52b8c5.js"},{"revision":null,"url":"assets/Login-5e93a7c5.js"},{"revision":null,"url":"assets/md.transition-0c819664.js"},{"revision":null,"url":"assets/notifications-85a1fb4f.js"},{"revision":null,"url":"assets/Notifications-91c7c958.js"},{"revision":null,"url":"assets/Profile-d2c075fc.js"},{"revision":null,"url":"assets/ProfileInfoModal-a08138ed.js"},{"revision":null,"url":"assets/QuickLinks-7cdcacc3.js"},{"revision":null,"url":"assets/realtime-14e47ccc.js"},{"revision":null,"url":"assets/RequestList-0f4f1ccb.js"},{"revision":null,"url":"assets/RequestPanel-e73ff4a0.js"},{"revision":null,"url":"assets/requestSummaryFields-1385ed96.css"},{"revision":null,"url":"assets/requestSummaryFields-7e2c6adb.js"},{"revision":null,"url":"assets/SalaryDetailTable-a07cdd7a.js"},{"revision":null,"url":"assets/SalarySlipItem-c9b0b090.js"},{"revision":null,"url":"assets/SemicircleChart-7f7323e4.js"},{"revision":null,"url":"assets/ShiftAssignmentForm-2d5e1fd5.js"},{"revision":null,"url":"assets/ShiftAssignmentItem-43cca346.js"},{"revision":null,"url":"assets/ShiftAssignmentList-38bba31c.js"},{"revision":null,"url":"assets/ShiftIcon-e9518345.js"},{"revision":null,"url":"assets/ShiftRequestForm-ae4bb3d5.js"},{"revision":null,"url":"assets/ShiftRequestItem-3d1d2b10.js"},{"revision":null,"url":"assets/ShiftRequestList-a9c6e01d.js"},{"revision":null,"url":"assets/status-tap-f5da01aa.js"},{"revision":null,"url":"assets/swipe-back-6c45dca2.js"},{"revision":null,"url":"assets/TabButtons-2d61a943.js"},{"revision":null,"url":"assets/user-9e8700ad.js"},{"revision":null,"url":"assets/workflow-0b2a2f3b.js"},{"revision":null,"url":"assets/workflow-c80717ff.css"},{"revision":"2f97d86dd8bd2c8c822b997a3ac570ad","url":"frappe-push-notification.js"},{"revision":"fd2b6929f6ca2a6e41ef90420c72dd12","url":"index.html"},{"revision":"1976746defd75678588c5e8b1c0a17c9","url":"manifest.webmanifest"}]);un();const fi=new URL(location).searchParams.get("config");try{let n=function(){return navigator.userAgent.toLowerCase().includes("chrome")};const t=nt(JSON.parse(fi)),e=ui(t);hi(e,r=>{const s=r.data.title;let i={body:r.data.body||""};r.data.notification_icon&&(i.icon=r.data.notification_icon),n()?i.data={url:r.data.click_action}:r.data.click_action&&(i.actions=[{action:r.data.click_action,title:"View Details"}]),self.registration.showNotification(s,i)}),n()&&self.addEventListener("notificationclick",r=>{r.stopImmediatePropagation(),r.notification.close(),r.notification.data&&r.notification.data.url&&clients.openWindow(r.notification.data.url)})}catch(t){console.log("Failed to initialize Firebase",t)}self.skipWaiting();dn();console.log("Service Worker Initialized");
//# sourceMappingURL=sw.js.map
