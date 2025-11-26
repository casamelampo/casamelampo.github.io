/*!
* reveal.js 4.3.1
* https://revealjs.com
* MIT licensed
*
* Copyright (C) 2011-2022 Hakim El Hattab, https://hakim.se
*/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).Reveal=t()}(this,(function(){"use strict";const e=(e,t)=>{for(let i in t)e[i]=t[i];return e},t=(e,t)=>Array.from(e.querySelectorAll(t)),i=(e,t,i)=>{i?e.classList.add(t):e.classList.remove(t)},a=e=>{if("string"==typeof e){if("null"===e)return null;if("true"===e)return!0;if("false"===e)return!1;if(e.match(/^-?[\d\.]+$/))return parseFloat(e)}return e},n=(e,t)=>{e.style.transform=t},s=(e,t)=>{let i=e.matches||e.matchesSelector||e.msMatchesSelector;return!(!i||!i.call(e,t))},r=(e,t)=>{if("function"==typeof e.closest)return e.closest(t);for(;e;){if(s(e,t))return e;e=e.parentNode}return null},o=(e,t,i,a="")=>{let n=e.querySelectorAll("."+i);for(let t=0;t<n.length;t++){let i=n[t];if(i.parentNode===e)return i}let s=document.createElement(t);return s.className=i,s.innerHTML=a,e.appendChild(s),s},l=e=>{let t=document.createElement("style");return t.type="text/css",e&&e.length>0&&(t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e))),document.head.appendChild(t),t},d=()=>{let e={};location.search.replace(/[A-Z0-9]+?=([\w\.%-]*)/gi,(t=>{e[t.split("=").shift()]=t.split("=").pop()}));for(let t in e){let i=e[t];e[t]=a(unescape(i))}return void 0!==e.dependencies&&delete e.dependencies,e},c=(e,t=0)=>{if(e){let i,a=e.style.height;return e.style.height="0px",e.parentNode.style.height="auto",i=t-e.parentNode.offsetHeight,e.style.height=a+"px",e.parentNode.style.removeProperty("height"),i}return t},h={mp4:"video/mp4",m4a:"video/mp4",ogv:"video/ogg",mpeg:"video/mpeg",webm:"video/webm"},u=navigator.userAgent,g=/(iphone|ipod|ipad|android)/gi.test(u)||"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1;/chrome/i.test(u)&&/edge/i.test(u);const v=/android/gi.test(u);var p={};Object.defineProperty(p,"__esModule",{value:!0});var m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e},f=p.default=function(e){if(e){var t=function(e){return[].slice.call(e)},i=0,a=1,n=2,s=3,r=[],o=null,l="requestAnimationFrame"in e?function(){e.cancelAnimationFrame(o),o=e.requestAnimationFrame((function(){return c(r.filter((function(e){return e.dirty&&e.active})))}))}:function(){},d=function(e){return function(){r.forEach((function(t){return t.dirty=e})),l()}},c=function(e){e.filter((function(e){return!e.styleComputed})).forEach((function(e){e.styleComputed=v(e)})),e.filter(p).forEach(f);var t=e.filter(g);t.forEach(u),t.forEach((function(e){f(e),h(e)})),t.forEach(b)},h=function(e){return e.dirty=i},u=function(e){e.availableWidth=e.element.parentNode.clientWidth,e.currentWidth=e.element.scrollWidth,e.previousFontSize=e.currentFontSize,e.currentFontSize=Math.min(Math.max(e.minSize,e.availableWidth/e.currentWidth*e.previousFontSize),e.maxSize),e.whiteSpace=e.multiLine&&e.currentFontSize===e.minSize?"normal":"nowrap"},g=function(e){return e.dirty!==n||e.dirty===n&&e.element.parentNode.clientWidth!==e.availableWidth},v=function(t){var i=e.getComputedStyle(t.element,null);t.currentFontSize=parseFloat(i.getPropertyValue("font-size")),t.display=i.getPropertyValue("display"),t.whiteSpace=i.getPropertyValue("white-space")},p=function(e){var t=!1;return!e.preStyleTestCompleted&&(/inline-/.test(e.display)||(t=!0,e.display="inline-block"),"nowrap"!==e.whiteSpace&&(t=!0,e.whiteSpace="nowrap"),e.preStyleTestCompleted=!0,t)},f=function(e){e.element.style.whiteSpace=e.whiteSpace,e.element.style.display=e.display,e.element.style.fontSize=e.currentFontSize+"px"},b=function(e){e.element.dispatchEvent(new CustomEvent("fit",{detail:{oldValue:e.previousFontSize,newValue:e.currentFontSize,scaleFactor:e.currentFontSize/e.previousFontSize}}))},y=function(e,t){return function(){e.dirty=t,e.active&&l()}},w=function(e){return function(){r=r.filter((function(t){return t.element!==e.element})),e.observeMutations&&e.observer.disconnect(),e.element.style.whiteSpace=e.originalStyle.whiteSpace,e.element.style.display=e.originalStyle.display,e.element.style.fontSize=e.originalStyle.fontSize}},E=function(e){return function(){e.active||(e.active=!0,l())}},R=function(e){return function(){return e.active=!1}},S=function(e){e.observeMutations&&(e.observer=new MutationObserver(y(e,a)),e.observer.observe(e.element,e.observeMutations))},A={minSize:16,maxSize:512,multiLine:!0,observeMutations:"MutationObserver"in e&&{subtree:!0,childList:!0,characterData:!0}},k=null,L=function(){e.clearTimeout(k),k=e.setTimeout(d(n),P.observeWindowDelay)},C=["resize","orientationchange"];return Object.defineProperty(P,"observeWindow",{set:function(t){var i=(t?"add":"remove")+"EventListener";C.forEach((function(t){e[i](t,L)}))}}),P.observeWindow=!0,P.observeWindowDelay=100,P.fitAll=d(s),P}function x(e,t){var i=m({},A,t),a=e.map((function(e){var t=m({},i,{element:e,active:!0});return function(e){e.originalStyle={whiteSpace:e.element.style.whiteSpace,display:e.element.style.display,fontSize:e.element.style.fontSize},S(e),e.newbie=!0,e.dirty=!0,r.push(e)}(t),{element:e,fit:y(t,s),unfreeze:E(t),freeze:R(t),unsubscribe:w(t)}}));return l(),a}function P(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"string"==typeof e?x(t(document.querySelectorAll(e)),i):x([e],i)[0]}}("undefined"==typeof window?null:window);class b{constructor(e){this.Reveal=e,this.startEmbeddedIframe=this.startEmbeddedIframe.bind(this)}shouldPreload(e){let t=this.Reveal.getConfig().preloadIframes;return"boolean"!=typeof t&&(t=e.hasAttribute("data-preload")),t}load(e,i={}){e.style.display=this.Reveal.getConfig().display,t(e,"img[data-src], video[data-src], audio[data-src], iframe[data-src]").forEach((e=>{("IFRAME"!==e.tagName||this.shouldPreload(e))&&(e.setAttribute("src",e.getAttribute("data-src")),e.setAttribute("data-lazy-loaded",""),e.removeAttribute("data-src"))})),t(e,"video, audio").forEach((e=>{let i=0;t(e,"source[data-src]").forEach((e=>{e.setAttribute("src",e.getAttribute("data-src")),e.removeAttribute("data-src"),e.setAttribute("data-lazy-loaded",""),i+=1})),g&&"VIDEO"===e.tagName&&e.setAttribute("playsinline",""),i>0&&e.load()}));let a=e.slideBackgroundElement;if(a){a.style.display="block";let t=e.slideBackgroundContentElement,n=e.getAttribute("data-background-iframe");if(!1===a.hasAttribute("data-loaded")){a.setAttribute("data-loaded","true");let s=e.getAttribute("data-background-image"),r=e.getAttribute("data-background-video"),o=e.hasAttribute("data-background-video-loop"),l=e.hasAttribute("data-background-video-muted");if(s)/^data:/.test(s.trim())?t.style.backgroundImage=`url(${s.trim()})`:t.style.backgroundImage=s.split(",").map((e=>`url(${encodeURI(e.trim())})`)).join(",");else if(r&&!this.Reveal.isSpeakerNotes()){let e=document.createElement("video");o&&e.setAttribute("loop",""),l&&(e.muted=!0),g&&(e.muted=!0,e.setAttribute("playsinline","")),r.split(",").forEach((t=>{let i=((e="")=>h[e.split(".").pop()])(t);e.innerHTML+=i?`<source src="${t}" type="${i}">`:`<source src="${t}">`})),t.appendChild(e)}else if(n&&!0!==i.excludeIframes){let e=document.createElement("iframe");e.setAttribute("allowfullscreen",""),e.setAttribute("mozallowfullscreen",""),e.setAttribute("webkitallowfullscreen",""),e.setAttribute("allow","autoplay"),e.setAttribute("data-src",n),e.style.width="100%",e.style.height="100%",e.style.maxHeight="100%",e.style.maxWidth="100%",t.appendChild(e)}}let s=t.querySelector("iframe[data-src]");s&&this.shouldPreload(a)&&!/autoplay=(1|true|yes)/gi.test(n)&&s.getAttribute("src")!==n&&s.setAttribute("src",n)}this.layout(e)}layout(e){Array.from(e.querySelectorAll(".r-fit-text")).forEach((e=>{f(e,{minSize:24,maxSize:.8*this.Reveal.getConfig().height,observeMutations:!1,observeWindow:!1})}))}unload(e){e.style.display="none";let i=this.Reveal.getSlideBackground(e);i&&(i.style.display="none",t(i,"iframe[src]").forEach((e=>{e.removeAttribute("src")}))),t(e,"video[data-lazy-loaded][src], audio[data-lazy-loaded][src], iframe[data-lazy-loaded][src]").forEach((e=>{e.setAttribute("data-src",e.getAttribute("src")),e.removeAttribute("src")})),t(e,"video[data-lazy-loaded] source[src], audio source[src]").forEach((e=>{e.setAttribute("data-src",e.getAttribute("src")),e.removeAttribute("src")}))}formatEmbeddedContent(){let e=(e,i,a)=>{t(this.Reveal.getSlidesElement(),"iframe["+e+'*="'+i+'"]').forEach((t=>{let i=t.getAttribute(e);i&&-1===i.indexOf(a)&&t.setAttribute(e,i+(/\?/.test(i)?"&":"?")+a)}))};e("src","youtube.com/embed/","enablejsapi=1"),e("data-src","youtube.com/embed/","enablejsapi=1"),e("src","player.vimeo.com/","api=1"),e("data-src","player.vimeo.com/","api=1")}startEmbeddedContent(e){e&&!this.Reveal.isSpeakerNotes()&&(t(e,'img[src$=".gif"]').forEach((e=>{e.setAttribute("src",e.getAttribute("src"))})),t(e,"video, audio").forEach((e=>{if(r(e,".fragment")&&!r(e,".fragment.visible"))return;let t=this.Reveal.getConfig().autoPlayMedia;if("boolean"!=typeof t&&(t=e.hasAttribute("data-autoplay")||!!r(e,".slide-background")),t&&"function"==typeof e.play)if(e.readyState>1)this.startEmbeddedMedia({target:e});else if(g){let t=e.play();t&&"function"==typeof t.catch&&!1===e.controls&&t.catch((()=>{e.controls=!0,e.addEventListener("play",(()=>{e.controls=!1}))}))}else e.removeEventListener("loadeddata",this.startEmbeddedMedia),e.addEventListener("loadeddata",this.startEmbeddedMedia)})),t(e,"iframe[src]").forEach((e=>{r(e,".fragment")&&!r(e,".fragment.visible")||this.startEmbeddedIframe({target:e})})),t(e,"iframe[data-src]").forEach((e=>{r(e,".fragment")&&!r(e,".fragment.visible")||e.getAttribute("src")!==e.getAttribute("data-src")&&(e.removeEventListener("load",this.startEmbeddedIframe),e.addEventListener("load",this.startEmbeddedIframe),e.setAttribute("src",e.getAttribute("data-src")))})))}startEmbeddedMedia(e){let t=!!r(e.target,"html"),i=!!r(e.target,".present");t&&i&&(e.target.currentTime=0,e.target.play()),e.target.removeEventListener("loadeddata",this.startEmbeddedMedia)}startEmbeddedIframe(e){let t=e.target;if(t&&t.contentWindow){let i=!!r(e.target,"html"),a=!!r(e.target,".present");if(i&&a){let e=this.Reveal.getConfig().autoPlayMedia;"boolean"!=typeof e&&(e=t.hasAttribute("data-autoplay")||!!r(t,".slide-background")),/youtube\.com\/embed\//.test(t.getAttribute("src"))&&e?t.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*"):/player\.vimeo\.com\//.test(t.getAttribute("src"))&&e?t.contentWindow.postMessage('{"method":"play"}',"*"):t.contentWindow.postMessage("slide:start","*")}}}stopEmbeddedContent(i,a={}){a=e({unloadIframes:!0},a),i&&i.parentNode&&(t(i,"video, audio").forEach((e=>{e.hasAttribute("data-ignore")||"function"!=typeof e.pause||(e.setAttribute("data-paused-by-reveal",""),e.pause())})),t(i,"iframe").forEach((e=>{e.contentWindow&&e.contentWindow.postMessage("slide:stop","*"),e.removeEventListener("load",this.startEmbeddedIframe)})),t(i,'iframe[src*="youtube.com/embed/"]').forEach((e=>{!e.hasAttribute("data-ignore")&&e.contentWindow&&"function"==typeof e.contentWindow.postMessage&&e.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")})),t(i,'iframe[src*="player.vimeo.com/"]').forEach((e=>{!e.hasAttribute("data-ignore")&&e.contentWindow&&"function"==typeof e.contentWindow.postMessage&&e.contentWindow.postMessage('{"method":"pause"}',"*")})),!0===a.unloadIframes&&t(i,"iframe[data-src]").forEach((e=>{e.setAttribute("src","about:blank"),e.removeAttribute("src")})))}}class y{constructor(e){this.Reveal=e}render(){this.element=document.createElement("div"),this.element.className="slide-number",this.Reveal.getRevealElement().appendChild(this.element)}configure(e,t){let i="none";e.slideNumber&&!this.Reveal.isPrintingPDF()&&("all"===e.showSlideNumber||"speaker"===e.showSlideNumber&&this.Reveal.isSpeakerNotes())&&(i="block"),this.element.style.display=i}update(){this.Reveal.getConfig().slideNumber&&this.element&&(this.element.innerHTML=this.getSlideNumber())}getSlideNumber(e=this.Reveal.getCurrentSlide()){let t,i=this.Reveal.getConfig(),a="h.v";if("function"==typeof i.slideNumber)t=i.slideNumber(e);else{"string"==typeof i.slideNumber&&(a=i.slideNumber),/c/.test(a)||1!==this.Reveal.getHorizontalSlides().length||(a="c");let n=e&&"uncounted"===e.dataset.visibility?0:1;switch(t=[],a){case"c":t.push(this.Reveal.getSlidePastCount(e)+n);break;case"c/t":t.push(this.Reveal.getSlidePastCount(e)+n,"/",this.Reveal.getTotalSlides());break;default:let i=this.Reveal.getIndices(e);t.push(i.h+n);let s="h/v"===a?"/":".";this.Reveal.isVerticalSlide(e)&&t.push(s,i.v+1)}}let n="#"+this.Reveal.location.getHash(e);return this.formatNumber(t[0],t[1],t[2],n)}formatNumber(e,t,i,a="#"+this.Reveal.location.getHash()){return"number"!=typeof i||isNaN(i)?`<a href="${a}">\n\t\t\t\t\t<span class="slide-number-a">${e}</span>\n\t\t\t\t\t</a>`:`<a href="${a}">\n\t\t\t\t\t<span class="slide-number-a">${e}</span>\n\t\t\t\t\t<span class="slide-number-delimiter">${t}</span>\n\t\t\t\t\t<span class="slide-number-b">${i}</span>\n\t\t\t\t\t</a>`}destroy(){this.element.remove()}}const w=e=>{let t=e.match(/^#([0-9a-f]{3})$/i);if(t&&t[1])return t=t[1],{r:17*parseInt(t.charAt(0),16),g:17*parseInt(t.charAt(1),16),b:17*parseInt(t.charAt(2),16)};let i=e.match(/^#([0-9a-f]{6})$/i);if(i&&i[1])return i=i[1],{r:parseInt(i.slice(0,2),16),g:parseInt(i.slice(2,4),16),b:parseInt(i.slice(4,6),16)};let a=e.match(/^rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i);if(a)return{r:parseInt(a[1],10),g:parseInt(a[2],10),b:parseInt(a[3],10)};let n=e.match(/^rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\,\s*([\d]+|[\d]*.[\d]+)\s*\)$/i);return n?{r:parseInt(n[1],10),g:parseInt(n[2],10),b:parseInt(n[3],10),a:parseFloat(n[4])}:null};class E{constructor(e){this.Reveal=e}render(){this.element=document.createElement("div"),this.element.className="backgrounds",this.Reveal.getRevealElement().appendChild(this.element)}create(){this.element.innerHTML="",this.element.classList.add("no-transition"),this.Reveal.getHorizontalSlides().forEach((e=>{let i=this.createBackground(e,this.element);t(e,"section").forEach((e=>{this.createBackground(e,i),i.classList.add("stack")}))})),this.Reveal.getConfig().parallaxBackgroundImage?(this.element.style.backgroundImage='url("'+this.Reveal.getConfig().parallaxBackgroundImage+'")',this.element.style.backgroundSize=this.Reveal.getConfig().parallaxBackgroundSize,this.element.style.backgroundRepeat=this.Reveal.getConfig().parallaxBackgroundRepeat,this.element.style.backgroundPosition=this.Reveal.getConfig().parallaxBackgroundPosition,setTimeout((()=>{this.Reveal.getRevealElement().classList.add("has-parallax-background")}),1)):(this.element.style.backgroundImage="",this.Reveal.getRevealElement().classList.remove("has-parallax-background"))}createBackground(e,t){let i=document.createElement("div");i.className="slide-background "+e.className.replace(/present|past|future/,"");let a=document.createElement("div");return a.className="slide-background-content",i.appendChild(a),t.appendChild(i),e.slideBackgroundElement=i,e.slideBackgroundContentElement=a,this.sync(e),i}sync(e){const t=e.slideBackgroundElement,i=e.slideBackgroundContentElement,a={background:e.getAttribute("data-background"),backgroundSize:e.getAttribute("data-background-size"),backgroundImage:e.getAttribute("data-background-image"),backgroundVideo:e.getAttribute("data-background-video"),backgroundIframe:e.getAttribute("data-background-iframe"),backgroundColor:e.getAttribute("data-background-color"),backgroundGradient:e.getAttribute("data-background-gradient"),backgroundRepeat:e.getAttribute("data-background-repeat"),backgroundPosition:e.getAttribute("data-background-position"),backgroundTransition:e.getAttribute("data-background-transition"),backgroundOpacity:e.getAttribute("data-background-opacity")},n=e.hasAttribute("data-preload");e.classList.remove("has-dark-background"),e.classList.remove("has-light-background"),t.removeAttribute("data-loaded"),t.removeAttribute("data-background-hash"),t.removeAttribute("data-background-size"),t.removeAttribute("data-background-transition"),t.style.backgroundColor="",i.style.backgroundSize="",i.style.backgroundRepeat="",i.style.backgroundPosition="",i.style.backgroundImage="",i.style.opacity="",i.innerHTML="",a.background&&(/^(http|file|\/\/)/gi.test(a.background)||/\.(svg|png|jpg|jpeg|gif|bmp|webp)([?#\s]|$)/gi.test(a.background)?e.setAttribute("data-background-image",a.background):t.style.background=a.background),(a.background||a.backgroundColor||a.backgroundGradient||a.backgroundImage||a.backgroundVideo||a.backgroundIframe)&&t.setAttribute("data-background-hash",a.background+a.backgroundSize+a.backgroundImage+a.backgroundVideo+a.backgroundIframe+a.backgroundColor+a.backgroundGradient+a.backgroundRepeat+a.backgroundPosition+a.backgroundTransition+a.backgroundOpacity),a.backgroundSize&&t.setAttribute("data-background-size",a.backgroundSize),a.backgroundColor&&(t.style.backgroundColor=a.backgroundColor),a.backgroundGradient&&(t.style.backgroundImage=a.backgroundGradient),a.backgroundTransition&&t.setAttribute("data-background-transition",a.backgroundTransition),n&&t.setAttribute("data-preload",""),a.backgroundSize&&(i.style.backgroundSize=a.backgroundSize),a.backgroundRepeat&&(i.style.backgroundRepeat=a.backgroundRepeat),a.backgroundPosition&&(i.style.backgroundPosition=a.backgroundPosition),a.backgroundOpacity&&(i.style.opacity=a.backgroundOpacity);let s=a.backgroundColor;if(!s||!w(s)){let e=window.getComputedStyle(t);e&&e.backgroundColor&&(s=e.backgroundColor)}if(s){const t=w(s);t&&0!==t.a&&("string"==typeof(r=s)&&(r=w(r)),(r?(299*r.r+587*r.g+114*r.b)/1e3:null)<128?e.classList.add("has-dark-background"):e.classList.add("has-light-background"))}var r}update(e=!1){let i=this.Reveal.getCurrentSlide(),a=this.Reveal.getIndices(),n=null,s=this.Reveal.getConfig().rtl?"future":"past",r=this.Reveal.getConfig().rtl?"past":"future";if(Array.from(this.element.childNodes).forEach(((i,o)=>{i.classList.remove("past","present","future"),o<a.h?i.classList.add(s):o>a.h?i.classList.add(r):(i.classList.add("present"),n=i),(e||o===a.h)&&t(i,".slide-background").forEach(((e,t)=>{e.classList.remove("past","present","future"),t<a.v?e.classList.add("past"):t>a.v?e.classList.add("future"):(e.classList.add("present"),o===a.h&&(n=e))}))})),this.previousBackground&&this.Reveal.slideContent.stopEmbeddedContent(this.previousBackground,{unloadIframes:!this.Reveal.slideContent.shouldPreload(this.previousBackground)}),n){this.Reveal.slideContent.startEmbeddedContent(n);let e=n.querySelector(".slide-background-content");if(e){let t=e.style.backgroundImage||"";/\.gif/i.test(t)&&(e.style.backgroundImage="",window.getComputedStyle(e).opacity,e.style.backgroundImage=t)}let t=this.previousBackground?this.previousBackground.getAttribute("data-background-hash"):null,i=n.getAttribute("data-background-hash");i&&i===t&&n!==this.previousBackground&&this.element.classList.add("no-transition"),this.previousBackground=n}i&&["has-light-background","has-dark-background"].forEach((e=>{i.classList.contains(e)?this.Reveal.getRevealElement().classList.add(e):this.Reveal.getRevealElement().classList.remove(e)}),this),setTimeout((()=>{this.element.classList.remove("no-transition")}),1)}updateParallax(){let e=this.Reveal.getIndices();if(this.Reveal.getConfig().parallaxBackgroundImage){let t,i,a=this.Reveal.getHorizontalSlides(),n=this.Reveal.getVerticalSlides(),s=this.element.style.backgroundSize.split(" ");1===s.length?t=i=parseInt(s[0],10):(t=parseInt(s[0],10),i=parseInt(s[1],10));let r,o,l=this.element.offsetWidth,d=a.length;r="number"==typeof this.Reveal.getConfig().parallaxBackgroundHorizontal?this.Reveal.getConfig().parallaxBackgroundHorizontal:d>1?(t-l)/(d-1):0,o=r*e.h*-1;let c,h,u=this.element.offsetHeight,g=n.length;c="number"==typeof this.Reveal.getConfig().parallaxBackgroundVertical?this.Reveal.getConfig().parallaxBackgroundVertical:(i-u)/(g-1),h=g>0?c*e.v:0,this.element.style.backgroundPosition=o+"px "+-h+"px"}}destroy(){this.element.remove()}}const R=".slides section",S=".slides>section",A=".slides>section.present>section",k=/registerPlugin|registerKeyboardShortcut|addKeyBinding|addEventListener|showPreview/,L=/fade-(down|up|right|left|out|in-then-out|in-then-semi-out)|semi-fade-out|current-visible|shrink|grow/;let C=0;class x{constructor(e){this.Reveal=e}run(e,t){this.reset();let i=this.Reveal.getSlides(),a=i.indexOf(t),n=i.indexOf(e);if(e.hasAttribute("data-auto-animate")&&t.hasAttribute("data-auto-animate")&&e.getAttribute("data-auto-animate-id")===t.getAttribute("data-auto-animate-id")&&!(a>n?t:e).hasAttribute("data-auto-animate-restart")){this.autoAnimateStyleSheet=this.autoAnimateStyleSheet||l();let i=this.getAutoAnimateOptions(t);e.dataset.autoAnimate="pending",t.dataset.autoAnimate="pending",i.slideDirection=a>n?"forward":"backward";let s="none"===e.style.display;s&&(e.style.display=this.Reveal.getConfig().display);let r=this.getAutoAnimatableElements(e,t).map((e=>this.autoAnimateElements(e.from,e.to,e.options||{},i,C++)));if(s&&(e.style.display="none"),"false"!==t.dataset.autoAnimateUnmatched&&!0===this.Reveal.getConfig().autoAnimateUnmatched){let e=.8*i.duration,a=.2*i.duration;this.getUnmatchedAutoAnimateElements(t).forEach((e=>{let t=this.getAutoAnimateOptions(e,i),a="unmatched";t.duration===i.duration&&t.delay===i.delay||(a="unmatched-"+C++,r.push(`[data-auto-animate="running"] [data-auto-animate-target="${a}"] { transition: opacity ${t.duration}s ease ${t.delay}s; }`)),e.dataset.autoAnimateTarget=a}),this),r.push(`[data-auto-animate="running"] [data-auto-animate-target="unmatched"] { transition: opacity ${e}s ease ${a}s; }`)}this.autoAnimateStyleSheet.innerHTML=r.join(""),requestAnimationFrame((()=>{this.autoAnimateStyleSheet&&(getComputedStyle(this.autoAnimateStyleSheet).fontWeight,t.dataset.autoAnimate="running")})),this.Reveal.dispatchEvent({type:"autoanimate",data:{fromSlide:e,toSlide:t,sheet:this.autoAnimateStyleSheet}})}}reset(){t(this.Reveal.getRevealElement(),'[data-auto-animate]:not([data-auto-animate=""])').forEach((e=>{e.dataset.autoAnimate=""})),t(this.Reveal.getRevealElement(),"[data-auto-animate-target]").forEach((e=>{delete e.dataset.autoAnimateTarget})),this.autoAnimateStyleSheet&&this.autoAnimateStyleSheet.parentNode&&(this.autoAnimateStyleSheet.parentNode.removeChild(this.autoAnimateStyleSheet),this.autoAnimateStyleSheet=null)}autoAnimateElements(e,t,i,a,n){e.dataset.autoAnimateTarget="",t.dataset.autoAnimateTarget=n;let s=this.getAutoAnimateOptions(t,a);void 0!==i.delay&&(s.delay=i.delay),void 0!==i.duration&&(s.duration=i.duration),void 0!==i.easing&&(s.easing=i.easing);let r=this.getAutoAnimatableProperties("from",e,i),o=this.getAutoAnimatableProperties("to",t,i);if(t.classList.contains("fragment")&&(delete o.styles.opacity,e.classList.contains("fragment"))){(e.className.match(L)||[""])[0]===(t.className.match(L)||[""])[0]&&"forward"===a.slideDirection&&t.classList.add("visible","disabled")}if(!1!==i.translate||!1!==i.scale){let e=this.Reveal.getScale(),t={x:(r.x-o.x)/e,y:(r.y-o.y)/e,scaleX:r.width/o.width,scaleY:r.height/o.height};t.x=Math.round(1e3*t.x)/1e3,t.y=Math.round(1e3*t.y)/1e3,t.scaleX=Math.round(1e3*t.scaleX)/1e3,t.scaleX=Math.round(1e3*t.scaleX)/1e3;let a=!1!==i.translate&&(0!==t.x||0!==t.y),n=!1!==i.scale&&(0!==t.scaleX||0!==t.scaleY);if(a||n){let e=[];a&&e.push(`translate(${t.x}px, ${t.y}px)`),n&&e.push(`scale(${t.scaleX}, ${t.scaleY})`),r.styles.transform=e.join(" "),r.styles["transform-origin"]="top left",o.styles.transform="none"}}for(let e in o.styles){const t=o.styles[e],i=r.styles[e];t===i?delete o.styles[e]:(!0===t.explicitValue&&(o.styles[e]=t.value),!0===i.explicitValue&&(r.styles[e]=i.value))}let l="",d=Object.keys(o.styles);if(d.length>0){r.styles.transition="none",o.styles.transition=`all ${s.duration}s ${s.easing} ${s.delay}s`,o.styles["transition-property"]=d.join(", "),o.styles["will-change"]=d.join(", "),l='[data-auto-animate-target="'+n+'"] {'+Object.keys(r.styles).map((e=>e+": "+r.styles[e]+" !important;")).join("")+'}[data-auto-animate="running"] [data-auto-animate-target="'+n+'"] {'+Object.keys(o.styles).map((e=>e+": "+o.styles[e]+" !important;")).join("")+"}"}return l}getAutoAnimateOptions(t,i){let a={easing:this.Reveal.getConfig().autoAnimateEasing,duration:this.Reveal.getConfig().autoAnimateDuration,delay:0};if(a=e(a,i),t.parentNode){let e=r(t.parentNode,"[data-auto-animate-target]");e&&(a=this.getAutoAnimateOptions(e,a))}return t.dataset.autoAnimateEasing&&(a.easing=t.dataset.autoAnimateEasing),t.dataset.autoAnimateDuration&&(a.duration=parseFloat(t.dataset.autoAnimateDuration)),t.dataset.autoAnimateDelay&&(a.delay=parseFloat(t.dataset.autoAnimateDelay)),a}getAutoAnimatableProperties(e,t,i){let a=this.Reveal.getConfig(),n={styles:[]};if(!1!==i.translate||!1!==i.scale){let e;if("function"==typeof i.measure)e=i.measure(t);else if(a.center)e=t.getBoundingClientRect();else{let i=this.Reveal.getScale();e={x:t.offsetLeft*i,y:t.offsetTop*i,width:t.offsetWidth*i,height:t.offsetHeight*i}}n.x=e.x,n.y=e.y,n.width=e.width,n.height=e.height}const s=getComputedStyle(t);return(i.styles||a.autoAnimateStyles).forEach((t=>{let i;"string"==typeof t&&(t={property:t}),void 0!==t.from&&"from"===e?i={value:t.from,explicitValue:!0}:void 0!==t.to&&"to"===e?i={value:t.to,explicitValue:!0}:("line-height"===t.property&&(i=parseFloat(s["line-height"])/parseFloat(s["font-size"])),isNaN(i)&&(i=s[t.property])),""!==i&&(n.styles[t.property]=i)})),n}getAutoAnimatableElements(e,t){let i=("function"==typeof this.Reveal.getConfig().autoAnimateMatcher?this.Reveal.getConfig().autoAnimateMatcher:this.getAutoAnimatePairs).call(this,e,t),a=[];return i.filter(((e,t)=>{if(-1===a.indexOf(e.to))return a.push(e.to),!0}))}getAutoAnimatePairs(e,t){let i=[];const a="h1, h2, h3, h4, h5, h6, p, li";return this.findAutoAnimateMatches(i,e,t,"[data-id]",(e=>e.nodeName+":::"+e.getAttribute("data-id"))),this.findAutoAnimateMatches(i,e,t,a,(e=>e.nodeName+":::"+e.innerText)),this.findAutoAnimateMatches(i,e,t,"img, video, iframe",(e=>e.nodeName+":::"+(e.getAttribute("src")||e.getAttribute("data-src")))),this.findAutoAnimateMatches(i,e,t,"pre",(e=>e.nodeName+":::"+e.innerText)),i.forEach((e=>{s(e.from,a)?e.options={scale:!1}:s(e.from,"pre")&&(e.options={scale:!1,styles:["width","height"]},this.findAutoAnimateMatches(i,e.from,e.to,".hljs .hljs-ln-code",(e=>e.textContent),{scale:!1,styles:[],measure:this.getLocalBoundingBox.bind(this)}),this.findAutoAnimateMatches(i,e.from,e.to,".hljs .hljs-ln-line[data-line-number]",(e=>e.getAttribute("data-line-number")),{scale:!1,styles:["width"],measure:this.getLocalBoundingBox.bind(this)}))}),this),i}getLocalBoundingBox(e){const t=this.Reveal.getScale();return{x:Math.round(e.offsetLeft*t*100)/100,y:Math.round(e.offsetTop*t*100)/100,width:Math.round(e.offsetWidth*t*100)/100,height:Math.round(e.offsetHeight*t*100)/100}}findAutoAnimateMatches(e,t,i,a,n,s){let r={},o={};[].slice.call(t.querySelectorAll(a)).forEach(((e,t)=>{const i=n(e);"string"==typeof i&&i.length&&(r[i]=r[i]||[],r[i].push(e))})),[].slice.call(i.querySelectorAll(a)).forEach(((t,i)=>{const a=n(t);let l;if(o[a]=o[a]||[],o[a].push(t),r[a]){const e=o[a].length-1,t=r[a].length-1;r[a][e]?(l=r[a][e],r[a][e]=null):r[a][t]&&(l=r[a][t],r[a][t]=null)}l&&e.push({from:l,to:t,options:s})}))}getUnmatchedAutoAnimateElements(e){return[].slice.call(e.children).reduce(((e,t)=>{const i=t.querySelector("[data-auto-animate-target]");return t.hasAttribute("data-auto-animate-target")||i||e.push(t),t.querySelector("[data-auto-animate-target]")&&(e=e.concat(this.getUnmatchedAutoAnimateElements(t))),e}),[])}}class P{constructor(e){this.Reveal=e}configure(e,t){!1===e.fragments?this.disable():!1===t.fragments&&this.enable()}disable(){t(this.Reveal.getSlidesElement(),".fragment").forEach((e=>{e.classList.add("visible"),e.classList.remove("current-fragment")}))}enable(){t(this.Reveal.getSlidesElement(),".fragment").forEach((e=>{e.classList.remove("visible"),e.classList.remove("current-fragment")}))}availableRoutes(){let e=this.Reveal.getCurrentSlide();if(e&&this.Reveal.getConfig().fragments){let t=e.querySelectorAll(".fragment:not(.disabled)"),i=e.querySelectorAll(".fragment:not(.disabled):not(.visible)");return{prev:t.length-i.length>0,next:!!i.length}}return{prev:!1,next:!1}}sort(e,t=!1){e=Array.from(e);let i=[],a=[],n=[];e.forEach((e=>{if(e.hasAttribute("data-fragment-index")){let t=parseInt(e.getAttribute("data-fragment-index"),10);i[t]||(i[t]=[]),i[t].push(e)}else a.push([e])})),i=i.concat(a);let s=0;return i.forEach((e=>{e.forEach((e=>{n.push(e),e.setAttribute("data-fragment-index",s)})),s++})),!0===t?i:n}sortAll(){this.Reveal.getHorizontalSlides().forEach((e=>{let i=t(e,"section");i.forEach(((e,t)=>{this.sort(e.querySelectorAll(".fragment"))}),this),0===i.length&&this.sort(e.querySelectorAll(".fragment"))}))}update(e,t){let i={shown:[],hidden:[]},a=this.Reveal.getCurrentSlide();if(a&&this.Reveal.getConfig().fragments&&(t=t||this.sort(a.querySelectorAll(".fragment"))).length){let n=0;if("number"!=typeof e){let t=this.sort(a.querySelectorAll(".fragment.visible")).pop();t&&(e=parseInt(t.getAttribute("data-fragment-index")||0,10))}Array.from(t).forEach(((t,a)=>{if(t.hasAttribute("data-fragment-index")&&(a=parseInt(t.getAttribute("data-fragment-index"),10)),n=Math.max(n,a),a<=e){let n=t.classList.contains("visible");t.classList.add("visible"),t.classList.remove("current-fragment"),a===e&&(this.Reveal.announceStatus(this.Reveal.getStatusText(t)),t.classList.add("current-fragment"),this.Reveal.slideContent.startEmbeddedContent(t)),n||(i.shown.push(t),this.Reveal.dispatchEvent({target:t,type:"visible",bubbles:!1}))}else{let e=t.classList.contains("visible");t.classList.remove("visible"),t.classList.remove("current-fragment"),e&&(this.Reveal.slideContent.stopEmbeddedContent(t),i.hidden.push(t),this.Reveal.dispatchEvent({target:t,type:"hidden",bubbles:!1}))}})),e="number"==typeof e?e:-1,e=Math.max(Math.min(e,n),-1),a.setAttribute("data-fragment",e)}return i}sync(e=this.Reveal.getCurrentSlide()){return this.sort(e.querySelectorAll(".fragment"))}goto(e,t=0){let i=this.Reveal.getCurrentSlide();if(i&&this.Reveal.getConfig().fragments){let a=this.sort(i.querySelectorAll(".fragment:not(.disabled)"));if(a.length){if("number"!=typeof e){let t=this.sort(i.querySelectorAll(".fragment:not(.disabled).visible")).pop();e=t?parseInt(t.getAttribute("data-fragment-index")||0,10):-1}e+=t;let n=this.update(e,a);return n.hidden.length&&this.Reveal.dispatchEvent({type:"fragmenthidden",data:{fragment:n.hidden[0],fragments:n.hidden}}),n.shown.length&&this.Reveal.dispatchEvent({type:"fragmentshown",data:{fragment:n.shown[0],fragments:n.shown}}),this.Reveal.controls.update(),this.Reveal.progress.update(),this.Reveal.getConfig().fragmentInURL&&this.Reveal.location.writeURL(),!(!n.shown.length&&!n.hidden.length)}}return!1}next(){return this.goto(null,1)}prev(){return this.goto(null,-1)}}class N{constructor(e){this.Reveal=e,this.active=!1,this.onSlideClicked=this.onSlideClicked.bind(this)}activate(){if(this.Reveal.getConfig().overview&&!this.isActive()){this.active=!0,this.Reveal.getRevealElement().classList.add("overview"),this.Reveal.cancelAutoSlide(),this.Reveal.getSlidesElement().appendChild(this.Reveal.getBackgroundsElement()),t(this.Reveal.getRevealElement(),R).forEach((e=>{e.classList.contains("stack")||e.addEventListener("click",this.onSlideClicked,!0)}));const e=70,i=this.Reveal.getComputedSlideSize();this.overviewSlideWidth=i.width+e,this.overviewSlideHeight=i.height+e,this.Reveal.getConfig().rtl&&(this.overviewSlideWidth=-this.overviewSlideWidth),this.Reveal.updateSlidesVisibility(),this.layout(),this.update(),this.Reveal.layout();const a=this.Reveal.getIndices();this.Reveal.dispatchEvent({type:"overviewshown",data:{indexh:a.h,indexv:a.v,currentSlide:this.Reveal.getCurrentSlide()}})}}layout(){this.Reveal.getHorizontalSlides().forEach(((e,i)=>{e.setAttribute("data-index-h",i),n(e,"translate3d("+i*this.overviewSlideWidth+"px, 0, 0)"),e.classList.contains("stack")&&t(e,"section").forEach(((e,t)=>{e.setAttribute("data-index-h",i),e.setAttribute("data-index-v",t),n(e,"translate3d(0, "+t*this.overviewSlideHeight+"px, 0)")}))})),Array.from(this.Reveal.getBackgroundsElement().childNodes).forEach(((e,i)=>{n(e,"translate3d("+i*this.overviewSlideWidth+"px, 0, 0)"),t(e,".slide-background").forEach(((e,t)=>{n(e,"translate3d(0, "+t*this.overviewSlideHeight+"px, 0)")}))}))}update(){const e=Math.min(window.innerWidth,window.innerHeight),t=Math.max(e/5,150)/e,i=this.Reveal.getIndices();this.Reveal.transformSlides({overview:["scale("+t+")","translateX("+-i.h*this.overviewSlideWidth+"px)","translateY("+-i.v*this.overviewSlideHeight+"px)"].join(" ")})}deactivate(){if(this.Reveal.getConfig().overview){this.active=!1,this.Reveal.getRevealElement().classList.remove("overview"),this.Reveal.getRevealElement().classList.add("overview-deactivating"),setTimeout((()=>{this.Reveal.getRevealElement().classList.remove("overview-deactivating")}),1),this.Reveal.getRevealElement().appendChild(this.Reveal.getBackgroundsElement()),t(this.Reveal.getRevealElement(),R).forEach((e=>{n(e,""),e.removeEventListener("click",this.onSlideClicked,!0)})),t(this.Reveal.getBackgroundsElement(),".slide-background").forEach((e=>{n(e,"")})),this.Reveal.transformSlides({overview:""});const e=this.Reveal.getIndices();this.Reveal.slide(e.h,e.v),this.Reveal.layout(),this.Reveal.cueAutoSlide(),this.Reveal.dispatchEvent({type:"overviewhidden",data:{indexh:e.h,indexv:e.v,currentSlide:this.Reveal.getCurrentSlide()}})}}toggle(e){"boolean"==typeof e?e?this.activate():this.deactivate():this.isActive()?this.deactivate():this.activate()}isActive(){return this.active}onSlideClicked(e){if(this.isActive()){e.preventDefault();let t=e.target;for(;t&&!t.nodeName.match(/section/gi);)t=t.parentNode;if(t&&!t.classList.contains("disabled")&&(this.deactivate(),t.nodeName.match(/section/gi))){let e=parseInt(t.getAttribute("data-index-h"),10),i=parseInt(t.getAttribute("data-index-v"),10);this.Reveal.slide(e,i)}}}}class M{constructor(e){this.Reveal=e,this.shortcuts={},this.bindings={},this.onDocumentKeyDown=this.onDocumentKeyDown.bind(this),this.onDocumentKeyPress=this.onDocumentKeyPress.bind(this)}configure(e,t){"linear"===e.navigationMode?(this.shortcuts["&#8594;  ,  &#8595;  ,  SPACE  ,  N  ,  L  ,  J"]="Next slide",this.shortcuts["&#8592;  ,  &#8593;  ,  P  ,  H  ,  K"]="Previous slide"):(this.shortcuts["N  ,  SPACE"]="Next slide",this.shortcuts["P  ,  Shift SPACE"]="Previous slide",this.shortcuts["&#8592;  ,  H"]="Navigate left",this.shortcuts["&#8594;  ,  L"]="Navigate right",this.shortcuts["&#8593;  ,  K"]="Navigate up",this.shortcuts["&#8595;  ,  J"]="Navigate down"),this.shortcuts["Alt + &#8592;/&#8593/&#8594;/&#8595;"]="Navigate without fragments",this.shortcuts["Shift + &#8592;/&#8593/&#8594;/&#8595;"]="Jump to first/last slide",this.shortcuts["B  ,  ."]="Pause",this.shortcuts.F="Fullscreen",this.shortcuts["ESC, O"]="Slide overview"}bind(){document.addEventListener("keydown",this.onDocumentKeyDown,!1),document.addEventListener("keypress",this.onDocumentKeyPress,!1)}unbind(){document.removeEventListener("keydown",this.onDocumentKeyDown,!1),document.removeEventListener("keypress",this.onDocumentKeyPress,!1)}addKeyBinding(e,t){"object"==typeof e&&e.keyCode?this.bindings[e.keyCode]={callback:t,key:e.key,description:e.description}:this.bindings[e]={callback:t,key:null,description:null}}removeKeyBinding(e){delete this.bindings[e]}triggerKey(e){this.onDocumentKeyDown({keyCode:e})}registerKeyboardShortcut(e,t){this.shortcuts[e]=t}getShortcuts(){return this.shortcuts}getBindings(){return this.bindings}onDocumentKeyPress(e){e.shiftKey&&63===e.charCode&&this.Reveal.toggleHelp()}onDocumentKeyDown(e){let t=this.Reveal.getConfig();if("function"==typeof t.keyboardCondition&&!1===t.keyboardCondition(e))return!0;if("focused"===t.keyboardCondition&&!this.Reveal.isFocused())return!0;let i=e.keyCode,a=!this.Reveal.isAutoSliding();this.Reveal.onUserInput(e);let n=document.activeElement&&!0===document.activeElement.isContentEditable,s=document.activeElement&&document.activeElement.tagName&&/input|textarea/i.test(document.activeElement.tagName),r=document.activeElement&&document.activeElement.className&&/speaker-notes/i.test(document.activeElement.className),o=!(-1!==[32,37,38,39,40,78,80].indexOf(e.keyCode)&&e.shiftKey||e.altKey)&&(e.shiftKey||e.altKey||e.ctrlKey||e.metaKey);if(n||s||r||o)return;let l,d=[66,86,190,191];if("object"==typeof t.keyboard)for(l in t.keyboard)"togglePause"===t.keyboard[l]&&d.push(parseInt(l,10));if(this.Reveal.isPaused()&&-1===d.indexOf(i))return!1;let c="linear"===t.navigationMode||!this.Reveal.hasHorizontalSlides()||!this.Reveal.hasVerticalSlides(),h=!1;if("object"==typeof t.keyboard)for(l in t.keyboard)if(parseInt(l,10)===i){let i=t.keyboard[l];"function"==typeof i?i.apply(null,[e]):"string"==typeof i&&"function"==typeof this.Reveal[i]&&this.Reveal[i].call(),h=!0}if(!1===h)for(l in this.bindings)if(parseInt(l,10)===i){let t=this.bindings[l].callback;"function"==typeof t?t.apply(null,[e]):"string"==typeof t&&"function"==typeof this.Reveal[t]&&this.Reveal[t].call(),h=!0}!1===h&&(h=!0,80===i||33===i?this.Reveal.prev({skipFragments:e.altKey}):78===i||34===i?this.Reveal.next({skipFragments:e.altKey}):72===i||37===i?e.shiftKey?this.Reveal.slide(0):!this.Reveal.overview.isActive()&&c?this.Reveal.prev({skipFragments:e.altKey}):this.Reveal.left({skipFragments:e.altKey}):76===i||39===i?e.shiftKey?this.Reveal.slide(this.Reveal.getHorizontalSlides().length-1):!this.Reveal.overview.isActive()&&c?this.Reveal.next({skipFragments:e.altKey}):this.Reveal.right({skipFragments:e.altKey}):75===i||38===i?e.shiftKey?this.Reveal.slide(void 0,0):!this.Reveal.overview.isActive()&&c?this.Reveal.prev({skipFragments:e.altKey}):this.Reveal.up({skipFragments:e.altKey}):74===i||40===i?e.shiftKey?this.Reveal.slide(void 0,Number.MAX_VALUE):!this.Reveal.overview.isActive()&&c?this.Reveal.next({skipFragments:e.altKey}):this.Reveal.down({skipFragments:e.altKey}):36===i?this.Reveal.slide(0):35===i?this.Reveal.slide(this.Reveal.getHorizontalSlides().length-1):32===i?(this.Reveal.overview.isActive()&&this.Reveal.overview.deactivate(),e.shiftKey?this.Reveal.prev({skipFragments:e.altKey}):this.Reveal.next({skipFragments:e.altKey})):58===i||59===i||66===i||86===i||190===i||191===i?this.Reveal.togglePause():70===i?(e=>{let t=(e=e||document.documentElement).requestFullscreen||e.webkitRequestFullscreen||e.webkitRequestFullScreen||e.mozRequestFullScreen||e.msRequestFullscreen;t&&t.apply(e)})(t.embedded?this.Reveal.getViewportElement():document.documentElement):65===i?t.autoSlideStoppable&&this.Reveal.toggleAutoSlide(a):h=!1),h?e.preventDefault&&e.preventDefault():27!==i&&79!==i||(!1===this.Reveal.closeOverlay()&&this.Reveal.overview.toggle(),e.preventDefault&&e.preventDefault()),this.Reveal.cueAutoSlide()}}class D{constructor(e){var t,i,a;a=1e3,(i="MAX_REPLACE_STATE_FREQUENCY")in(t=this)?Object.defineProperty(t,i,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[i]=a,this.Reveal=e,this.writeURLTimeout=0,this.replaceStateTimestamp=0,this.onWindowHashChange=this.onWindowHashChange.bind(this)}bind(){window.addEventListener("hashchange",this.onWindowHashChange,!1)}unbind(){window.removeEventListener("hashchange",this.onWindowHashChange,!1)}getIndicesFromHash(e=window.location.hash){let t=e.replace(/^#\/?/,""),i=t.split("/");if(/^[0-9]*$/.test(i[0])||!t.length){const e=this.Reveal.getConfig();let t,a=e.hashOneBasedIndex?1:0,n=parseInt(i[0],10)-a||0,s=parseInt(i[1],10)-a||0;return e.fragmentInURL&&(t=parseInt(i[2],10),isNaN(t)&&(t=void 0)),{h:n,v:s,f:t}}{let e,i;/\/[-\d]+$/g.test(t)&&(i=parseInt(t.split("/").pop(),10),i=isNaN(i)?void 0:i,t=t.split("/").shift());try{e=document.getElementById(decodeURIComponent(t))}catch(e){}if(e)return{...this.Reveal.getIndices(e),f:i}}return null}readURL(){const e=this.Reveal.getIndices(),t=this.getIndicesFromHash();t?t.h===e.h&&t.v===e.v&&void 0===t.f||this.Reveal.slide(t.h,t.v,t.f):this.Reveal.slide(e.h||0,e.v||0)}writeURL(e){let t=this.Reveal.getConfig(),i=this.Reveal.getCurrentSlide();if(clearTimeout(this.writeURLTimeout),"number"==typeof e)this.writeURLTimeout=setTimeout(this.writeURL,e);else if(i){let e=this.getHash();t.history?window.location.hash=e:t.hash&&("/"===e?this.debouncedReplaceState(window.location.pathname+window.location.search):this.debouncedReplaceState("#"+e))}}replaceState(e){window.history.replaceState(null,null,e),this.replaceStateTimestamp=Date.now()}debouncedReplaceState(e){clearTimeout(this.replaceStateTimeout),Date.now()-this.replaceStateTimestamp>this.MAX_REPLACE_STATE_FREQUENCY?this.replaceState(e):this.replaceStateTimeout=setTimeout((()=>this.replaceState(e)),this.MAX_REPLACE_STATE_FREQUENCY)}getHash(e){let t="/",i=e||this.Reveal.getCurrentSlide(),a=i?i.getAttribute("id"):null;a&&(a=encodeURIComponent(a));let n=this.Reveal.getIndices(e);if(this.Reveal.getConfig().fragmentInURL||(n.f=void 0),"string"==typeof a&&a.length)t="/"+a,n.f>=0&&(t+="/"+n.f);else{let e=this.Reveal.getConfig().hashOneBasedIndex?1:0;(n.h>0||n.v>0||n.f>=0)&&(t+=n.h+e),(n.v>0||n.f>=0)&&(t+="/"+(n.v+e)),n.f>=0&&(t+="/"+n.f)}return t}onWindowHashChange(e){this.readURL()}}class I{constructor(e){this.Reveal=e,this.onNavigateLeftClicked=this.onNavigateLeftClicked.bind(this),this.onNavigateRightClicked=this.onNavigateRightClicked.bind(this),this.onNavigateUpClicked=this.onNavigateUpClicked.bind(this),this.onNavigateDownClicked=this.onNavigateDownClicked.bind(this),this.onNavigatePrevClicked=this.onNavigatePrevClicked.bind(this),this.onNavigateNextClicked=this.onNavigateNextClicked.bind(this)}render(){const e=this.Reveal.getConfig().rtl,i=this.Reveal.getRevealElement();this.element=document.createElement("aside"),this.element.className="controls",this.element.innerHTML=`<button class="navigate-left" aria-label="${e?"next slide":"previous slide"}"><div class="controls-arrow"></div></button>\n\t\t\t<button class="navigate-right" aria-label="${e?"previous slide":"next slide"}"><div class="controls-arrow"></div></button>\n\t\t\t<button class="navigate-up" aria-label="above slide"><div class="controls-arrow"></div></button>\n\t\t\t<button class="navigate-down" aria-label="below slide"><div class="controls-arrow"></div></button>`,this.Reveal.getRevealElement().appendChild(this.element),this.controlsLeft=t(i,".navigate-left"),this.controlsRight=t(i,".navigate-right"),this.controlsUp=t(i,".navigate-up"),this.controlsDown=t(i,".navigate-down"),this.controlsPrev=t(i,".navigate-prev"),this.controlsNext=t(i,".navigate-next"),this.controlsRightArrow=this.element.querySelector(".navigate-right"),this.controlsLeftArrow=this.element.querySelector(".navigate-left"),this.controlsDownArrow=this.element.querySelector(".navigate-down")}configure(e,t){this.element.style.display=e.controls?"block":"none",this.element.setAttribute("data-controls-layout",e.controlsLayout),this.element.setAttribute("data-controls-back-arrows",e.controlsBackArrows)}bind(){let e=["touchstart","click"];v&&(e=["touchstart"]),e.forEach((e=>{this.controlsLeft.forEach((t=>t.addEventListener(e,this.onNavigateLeftClicked,!1))),this.controlsRight.forEach((t=>t.addEventListener(e,this.onNavigateRightClicked,!1))),this.controlsUp.forEach((t=>t.addEventListener(e,this.onNavigateUpClicked,!1))),this.controlsDown.forEach((t=>t.addEventListener(e,this.onNavigateDownClicked,!1))),this.controlsPrev.forEach((t=>t.addEventListener(e,this.onNavigatePrevClicked,!1))),this.controlsNext.forEach((t=>t.addEventListener(e,this.onNavigateNextClicked,!1)))}))}unbind(){["touchstart","click"].forEach((e=>{this.controlsLeft.forEach((t=>t.removeEventListener(e,this.onNavigateLeftClicked,!1))),this.controlsRight.forEach((t=>t.removeEventListener(e,this.onNavigateRightClicked,!1))),this.controlsUp.forEach((t=>t.removeEventListener(e,this.onNavigateUpClicked,!1))),this.controlsDown.forEach((t=>t.removeEventListener(e,this.onNavigateDownClicked,!1))),this.controlsPrev.forEach((t=>t.removeEventListener(e,this.onNavigatePrevClicked,!1))),this.controlsNext.forEach((t=>t.removeEventListener(e,this.onNavigateNextClicked,!1)))}))}update(){let e=this.Reveal.availableRoutes();[...this.controlsLeft,...this.controlsRight,...this.controlsUp,...this.controlsDown,...this.controlsPrev,...this.controlsNext].forEach((e=>{e.classList.remove("enabled","fragmented"),e.setAttribute("disabled","disabled")})),e.left&&this.controlsLeft.forEach((e=>{e.classList.add("enabled"),e.removeAttribute("disabled")})),e.right&&this.controlsRight.forEach((e=>{e.classList.add("enabled"),e.removeAttribute("disabled")})),e.up&&this.controlsUp.forEach((e=>{e.classList.add("enabled"),e.removeAttribute("disabled")})),e.down&&this.controlsDown.forEach((e=>{e.classList.add("enabled"),e.removeAttribute("disabled")})),(e.left||e.up)&&this.controlsPrev.forEach((e=>{e.classList.add("enabled"),e.removeAttribute("disabled")})),(e.right||e.down)&&this.controlsNext.forEach((e=>{e.classList.add("enabled"),e.removeAttribute("disabled")}));let t=this.Reveal.getCurrentSlide();if(t){let e=this.Reveal.fragments.availableRoutes();e.prev&&this.controlsPrev.forEach((e=>{e.classList.add("fragmented","enabled"),e.removeAttribute("disabled")})),e.next&&this.controlsNext.forEach((e=>{e.classList.add("fragmented","enabled"),e.removeAttribute("disabled")})),this.Reveal.isVerticalSlide(t)?(e.prev&&this.controlsUp.forEach((e=>{e.classList.add("fragmented","enabled"),e.removeAttribute("disabled")})),e.next&&this.controlsDown.forEach((e=>{e.classList.add("fragmented","enabled"),e.removeAttribute("disabled")}))):(e.prev&&this.controlsLeft.forEach((e=>{e.classList.add("fragmented","enabled"),e.removeAttribute("disabled")})),e.next&&this.controlsRight.forEach((e=>{e.classList.add("fragmented","enabled"),e.removeAttribute("disabled")})))}if(this.Reveal.getConfig().controlsTutorial){let t=this.Reveal.getIndices();!this.Reveal.hasNavigatedVertically()&&e.down?this.controlsDownArrow.classList.add("highlight"):(this.controlsDownArrow.classList.remove("highlight"),this.Reveal.getConfig().rtl?!this.Reveal.hasNavigatedHorizontally()&&e.left&&0===t.v?this.controlsLeftArrow.classList.add("highlight"):this.controlsLeftArrow.classList.remove("highlight"):!this.Reveal.hasNavigatedHorizontally()&&e.right&&0===t.v?this.controlsRightArrow.classList.add("highlight"):this.controlsRightArrow.classList.remove("highlight"))}}destroy(){this.unbind(),this.element.remove()}onNavigateLeftClicked(e){e.preventDefault(),this.Reveal.onUserInput(),"linear"===this.Reveal.getConfig().navigationMode?this.Reveal.prev():this.Reveal.left()}onNavigateRightClicked(e){e.preventDefault(),this.Reveal.onUserInput(),"linear"===this.Reveal.getConfig().navigationMode?this.Reveal.next():this.Reveal.right()}onNavigateUpClicked(e){e.preventDefault(),this.Reveal.onUserInput(),this.Reveal.up()}onNavigateDownClicked(e){e.preventDefault(),this.Reveal.onUserInput(),this.Reveal.down()}onNavigatePrevClicked(e){e.preventDefault(),this.Reveal.onUserInput(),this.Reveal.prev()}onNavigateNextClicked(e){e.preventDefault(),this.Reveal.onUserInput(),this.Reveal.next()}}class T{constructor(e){this.Reveal=e,this.onProgressClicked=this.onProgressClicked.bind(this)}render(){this.element=document.createElement("div"),this.element.className="progress",this.Reveal.getRevealElement().appendChild(this.element),this.bar=document.createElement("span"),this.element.appendChild(this.bar)}configure(e,t){this.element.style.display=e.progress?"block":"none"}bind(){this.Reveal.getConfig().progress&&this.element&&this.element.addEventListener("click",this.onProgressClicked,!1)}unbind(){this.Reveal.getConfig().progress&&this.element&&this.element.removeEventListener("click",this.onProgressClicked,!1)}update(){if(this.Reveal.getConfig().progress&&this.bar){let e=this.Reveal.getProgress();this.Reveal.getTotalSlides()<2&&(e=0),this.bar.style.transform="scaleX("+e+")"}}getMaxWidth(){return this.Reveal.getRevealElement().offsetWidth}onProgressClicked(e){this.Reveal.onUserInput(e),e.preventDefault();let t=this.Reveal.getSlides(),i=t.length,a=Math.floor(e.clientX/this.getMaxWidth()*i);this.Reveal.getConfig().rtl&&(a=i-a);let n=this.Reveal.getIndices(t[a]);this.Reveal.slide(n.h,n.v)}destroy(){this.element.remove()}}class F{constructor(e){this.Reveal=e,this.lastMouseWheelStep=0,this.cursorHidden=!1,this.cursorInactiveTimeout=0,this.onDocumentCursorActive=this.onDocumentCursorActive.bind(this),this.onDocumentMouseScroll=this.onDocumentMouseScroll.bind(this)}configure(e,t){e.mouseWheel?(document.addEventListener("DOMMouseScroll",this.onDocumentMouseScroll,!1),document.addEventListener("mousewheel",this.onDocumentMouseScroll,!1)):(document.removeEventListener("DOMMouseScroll",this.onDocumentMouseScroll,!1),document.removeEventListener("mousewheel",this.onDocumentMouseScroll,!1)),e.hideInactiveCursor?(document.addEventListener("mousemove",this.onDocumentCursorActive,!1),document.addEventListener("mousedown",this.onDocumentCursorActive,!1)):(this.showCursor(),document.removeEventListener("mousemove",this.onDocumentCursorActive,!1),document.removeEventListener("mousedown",this.onDocumentCursorActive,!1))}showCursor(){this.cursorHidden&&(this.cursorHidden=!1,this.Reveal.getRevealElement().style.cursor="")}hideCursor(){!1===this.cursorHidden&&(this.cursorHidden=!0,this.Reveal.getRevealElement().style.cursor="none")}destroy(){this.showCursor(),document.removeEventListener("DOMMouseScroll",this.onDocumentMouseScroll,!1),document.removeEventListener("mousewheel",this.onDocumentMouseScroll,!1),document.removeEventListener("mousemove",this.onDocumentCursorActive,!1),document.removeEventListener("mousedown",this.onDocumentCursorActive,!1)}onDocumentCursorActive(e){this.showCursor(),clearTimeout(this.cursorInactiveTimeout),this.cursorInactiveTimeout=setTimeout(this.hideCursor.bind(this),this.Reveal.getConfig().hideCursorTime)}onDocumentMouseScroll(e){if(Date.now()-this.lastMouseWheelStep>1e3){this.lastMouseWheelStep=Date.now();let t=e.detail||-e.wheelDelta;t>0?this.Reveal.next():t<0&&this.Reveal.prev()}}}const z=(e,t)=>{const i=document.createElement("script");i.type="text/javascript",i.async=!1,i.defer=!1,i.src=e,"function"==typeof t&&(i.onload=i.onreadystatechange=e=>{("load"===e.type||/loaded|complete/.test(i.readyState))&&(i.onload=i.onreadystatechange=i.onerror=null,t())},i.onerror=e=>{i.onload=i.onreadystatechange=i.onerror=null,t(new Error("Failed loading script: "+i.src+"\n"+e))});const a=document.querySelector("head");a.insertBefore(i,a.lastChild)};class H{constructor(e){this.Reveal=e,this.state="idle",this.registeredPlugins={},this.asyncDependencies=[]}load(e,t){return this.state="loading",e.forEach(this.registerPlugin.bind(this)),new Promise((e=>{let i=[],a=0;if(t.forEach((e=>{e.condition&&!e.condition()||(e.async?this.asyncDependencies.push(e):i.push(e))})),i.length){a=i.length;const t=t=>{t&&"function"==typeof t.callback&&t.callback(),0==--a&&this.initPlugins().then(e)};i.forEach((e=>{"string"==typeof e.id?(this.registerPlugin(e),t(e)):"string"==typeof e.src?z(e.src,(()=>t(e))):(console.warn("Unrecognized plugin format",e),t())}))}else this.initPlugins().then(e)}))}initPlugins(){return new Promise((e=>{let t=Object.values(this.registeredPlugins),i=t.length;if(0===i)this.loadAsync().then(e);else{let a,n=()=>{0==--i?this.loadAsync().then(e):a()},s=0;a=()=>{let e=t[s++];if("function"==typeof e.init){let t=e.init(this.Reveal);t&&"function"==typeof t.then?t.then(n):n()}else n()},a()}}))}loadAsync(){return this.state="loaded",this.asyncDependencies.length&&this.asyncDependencies.forEach((e=>{z(e.src,e.callback)})),Promise.resolve()}registerPlugin(e){2===arguments.length&&"string"==typeof arguments[0]?(e=arguments[1]).id=arguments[0]:"function"==typeof e&&(e=e());let t=e.id;"string"!=typeof t?console.warn("Unrecognized plugin format; can't find plugin.id",e):void 0===this.registeredPlugins[t]?(this.registeredPlugins[t]=e,"loaded"===this.state&&"function"==typeof e.init&&e.init(this.Reveal)):console.warn('reveal.js: "'+t+'" plugin has already been registered')}hasPlugin(e){return!!this.registeredPlugins[e]}getPlugin(e){return this.registeredPlugins[e]}getRegisteredPlugins(){return this.registeredPlugins}destroy(){Object.values(this.registeredPlugins).forEach((e=>{"function"==typeof e.destroy&&e.destroy()})),this.registeredPlugins={},this.asyncDependencies=[]}}class q{constructor(e){this.Reveal=e}async setupPDF(){const e=this.Reveal.getConfig(),i=t(this.Reveal.getRevealElement(),R),a=e.slideNumber&&/all|print/i.test(e.showSlideNumber),n=this.Reveal.getComputedSlideSize(window.innerWidth,window.innerHeight),s=Math.floor(n.width*(1+e.margin)),r=Math.floor(n.height*(1+e.margin)),o=n.width,d=n.height;await new Promise(requestAnimationFrame),l("@page{size:"+s+"px "+r+"px; margin: 0px;}"),l(".reveal section>img, .reveal section>video, .reveal section>iframe{max-width: "+o+"px; max-height:"+d+"px}"),document.documentElement.classList.add("print-pdf"),document.body.style.width=s+"px",document.body.style.height=r+"px";const c=document.querySelector(".reveal-viewport");let h;if(c){const e=window.getComputedStyle(c);e&&e.background&&(h=e.background)}await new Promise(requestAnimationFrame),this.Reveal.layoutSlideContents(o,d),await new Promise(requestAnimationFrame);const u=i.map((e=>e.scrollHeight)),g=[],v=i[0].parentNode;let p=1;i.forEach((function(i,n){if(!1===i.classList.contains("stack")){let l=(s-o)/2,c=(r-d)/2;const v=u[n];let m=Math.max(Math.ceil(v/r),1);m=Math.min(m,e.pdfMaxPagesPerSlide),(1===m&&e.center||i.classList.contains("center"))&&(c=Math.max((r-v)/2,0));const f=document.createElement("div");if(g.push(f),f.className="pdf-page",f.style.height=(r+e.pdfPageHeightOffset)*m+"px",h&&(f.style.background=h),f.appendChild(i),i.style.left=l+"px",i.style.top=c+"px",i.style.width=o+"px",this.Reveal.slideContent.layout(i),i.slideBackgroundElement&&f.insertBefore(i.slideBackgroundElement,i),e.showNotes){const t=this.Reveal.getSlideNotes(i);if(t){const i=8,a="string"==typeof e.showNotes?e.showNotes:"inline",n=document.createElement("div");n.classList.add("speaker-notes"),n.classList.add("speaker-notes-pdf"),n.setAttribute("data-layout",a),n.innerHTML=t,"separate-page"===a?g.push(n):(n.style.left=i+"px",n.style.bottom=i+"px",n.style.width=s-2*i+"px",f.appendChild(n))}}if(a){const e=document.createElement("div");e.classList.add("slide-number"),e.classList.add("slide-number-pdf"),e.innerHTML=p++,f.appendChild(e)}if(e.pdfSeparateFragments){const e=this.Reveal.fragments.sort(f.querySelectorAll(".fragment"),!0);let t;e.forEach((function(e,i){t&&t.forEach((function(e){e.classList.remove("current-fragment")})),e.forEach((function(e){e.classList.add("visible","current-fragment")}),this);const n=f.cloneNode(!0);if(a){const e=i+1;n.querySelector(".slide-number-pdf").innerHTML+="."+e}g.push(n),t=e}),this),e.forEach((function(e){e.forEach((function(e){e.classList.remove("visible","current-fragment")}))}))}else t(f,".fragment:not(.fade-out)").forEach((function(e){e.classList.add("visible")}))}}),this),await new Promise(requestAnimationFrame),g.forEach((e=>v.appendChild(e))),this.Reveal.slideContent.layout(this.Reveal.getSlidesElement()),this.Reveal.dispatchEvent({type:"pdf-ready"})}isPrintingPDF(){return/print-pdf/gi.test(window.location.search)}}class B{constructor(e){this.Reveal=e,this.touchStartX=0,this.touchStartY=0,this.touchStartCount=0,this.touchCaptured=!1,this.onPointerDown=this.onPointerDown.bind(this),this.onPointerMove=this.onPointerMove.bind(this),this.onPointerUp=this.onPointerUp.bind(this),this.onTouchStart=this.onTouchStart.bind(this),this.onTouchMove=this.onTouchMove.bind(this),this.onTouchEnd=this.onTouchEnd.bind(this)}bind(){let e=this.Reveal.getRevealElement();"onpointerdown"in window?(e.addEventListener("pointerdown",this.onPointerDown,!1),e.addEventListener("pointermove",this.onPointerMove,!1),e.addEventListener("pointerup",this.onPointerUp,!1)):window.navigator.msPointerEnabled?(e.addEventListener("MSPointerDown",this.onPointerDown,!1),e.addEventListener("MSPointerMove",this.onPointerMove,!1),e.addEventListener("MSPointerUp",this.onPointerUp,!1)):(e.addEventListener("touchstart",this.onTouchStart,!1),e.addEventListener("touchmove",this.onTouchMove,!1),e.addEventListener("touchend",this.onTouchEnd,!1))}unbind(){let e=this.Reveal.getRevealElement();e.removeEventListener("pointerdown",this.onPointerDown,!1),e.removeEventListener("pointermove",this.onPointerMove,!1),e.removeEventListener("pointerup",this.onPointerUp,!1),e.removeEventListener("MSPointerDown",this.onPointerDown,!1),e.removeEventListener("MSPointerMove",this.onPointerMove,!1),e.removeEventListener("MSPointerUp",this.onPointerUp,!1),e.removeEventListener("touchstart",this.onTouchStart,!1),e.removeEventListener("touchmove",this.onTouchMove,!1),e.removeEventListener("touchend",this.onTouchEnd,!1)}isSwipePrevented(e){if(s(e,"video, audio"))return!0;for(;e&&"function"==typeof e.hasAttribute;){if(e.hasAttribute("data-prevent-swipe"))return!0;e=e.parentNode}return!1}onTouchStart(e){if(this.isSwipePrevented(e.target))return!0;this.touchStartX=e.touches[0].clientX,this.touchStartY=e.touches[0].clientY,this.touchStartCount=e.touches.length}onTouchMove(e){if(this.isSwipePrevented(e.target))return!0;let t=this.Reveal.getConfig();if(this.touchCaptured)v&&e.preventDefault();else{this.Reveal.onUserInput(e);let i=e.touches[0].clientX,a=e.touches[0].clientY;if(1===e.touches.length&&2!==this.touchStartCount){let n=this.Reveal.availableRoutes({includeFragments:!0}),s=i-this.touchStartX,r=a-this.touchStartY;s>40&&Math.abs(s)>Math.abs(r)?(this.touchCaptured=!0,"linear"===t.navigationMode?t.rtl?this.Reveal.next():this.Reveal.prev():this.Reveal.left()):s<-40&&Math.abs(s)>Math.abs(r)?(this.touchCaptured=!0,"linear"===t.navigationMode?t.rtl?this.Reveal.prev():this.Reveal.next():this.Reveal.right()):r>40&&n.up?(this.touchCaptured=!0,"linear"===t.navigationMode?this.Reveal.prev():this.Reveal.up()):r<-40&&n.down&&(this.touchCaptured=!0,"linear"===t.navigationMode?this.Reveal.next():this.Reveal.down()),t.embedded?(this.touchCaptured||this.Reveal.isVerticalSlide())&&e.preventDefault():e.preventDefault()}}}onTouchEnd(e){this.touchCaptured=!1}onPointerDown(e){e.pointerType!==e.MSPOINTER_TYPE_TOUCH&&"touch"!==e.pointerType||(e.touches=[{clientX:e.clientX,clientY:e.clientY}],this.onTouchStart(e))}onPointerMove(e){e.pointerType!==e.MSPOINTER_TYPE_TOUCH&&"touch"!==e.pointerType||(e.touches=[{clientX:e.clientX,clientY:e.clientY}],this.onTouchMove(e))}onPointerUp(e){e.pointerType!==e.MSPOINTER_TYPE_TOUCH&&"touch"!==e.pointerType||(e.touches=[{clientX:e.clientX,clientY:e.clientY}],this.onTouchEnd(e))}}const O="focus",U="blur";class W{constructor(e){this.Reveal=e,this.onRevealPointerDown=this.onRevealPointerDown.bind(this),this.onDocumentPointerDown=this.onDocumentPointerDown.bind(this)}configure(e,t){e.embedded?this.blur():(this.focus(),this.unbind())}bind(){this.Reveal.getConfig().embedded&&this.Reveal.getRevealElement().addEventListener("pointerdown",this.onRevealPointerDown,!1)}unbind(){this.Reveal.getRevealElement().removeEventListener("pointerdown",this.onRevealPointerDown,!1),document.removeEventListener("pointerdown",this.onDocumentPointerDown,!1)}focus(){this.state!==O&&(this.Reveal.getRevealElement().classList.add("focused"),document.addEventListener("pointerdown",this.onDocumentPointerDown,!1)),this.state=O}blur(){this.state!==U&&(this.Reveal.getRevealElement().classList.remove("focused"),document.removeEventListener("pointerdown",this.onDocumentPointerDown,!1)),this.state=U}isFocused(){return this.state===O}destroy(){this.Reveal.getRevealElement().classList.remove("focused")}onRevealPointerDown(e){this.focus()}onDocumentPointerDown(e){let t=r(e.target,".reveal");t&&t===this.Reveal.getRevealElement()||this.blur()}}class K{constructor(e){this.Reveal=e}render(){this.element=document.createElement("div"),this.element.className="speaker-notes",this.element.setAttribute("data-prevent-swipe",""),this.element.setAttribute("tabindex","0"),this.Reveal.getRevealElement().appendChild(this.element)}configure(e,t){e.showNotes&&this.element.setAttribute("data-layout","string"==typeof e.showNotes?e.showNotes:"inline")}update(){this.Reveal.getConfig().showNotes&&this.element&&this.Reveal.getCurrentSlide()&&!this.Reveal.print.isPrintingPDF()&&(this.element.innerHTML=this.getSlideNotes()||'<span class="notes-placeholder">No notes on this slide.</span>')}updateVisibility(){this.Reveal.getConfig().showNotes&&this.hasNotes()&&!this.Reveal.print.isPrintingPDF()?this.Reveal.getRevealElement().classList.add("show-notes"):this.Reveal.getRevealElement().classList.remove("show-notes")}hasNotes(){return this.Reveal.getSlidesElement().querySelectorAll("[data-notes], aside.notes").length>0}isSpeakerNotesWindow(){return!!window.location.search.match(/receiver/gi)}getSlideNotes(e=this.Reveal.getCurrentSlide()){if(e.hasAttribute("data-notes"))return e.getAttribute("data-notes");let t=e.querySelector("aside.notes");return t?t.innerHTML:null}destroy(){this.element.remove()}}class V{constructor(e,t){this.diameter=100,this.diameter2=this.diameter/2,this.thickness=6,this.playing=!1,this.progress=0,this.progressOffset=1,this.container=e,this.progressCheck=t,this.canvas=document.createElement("canvas"),this.canvas.className="playback",this.canvas.width=this.diameter,this.canvas.height=this.diameter,this.canvas.style.width=this.diameter2+"px",this.canvas.style.height=this.diameter2+"px",this.context=this.canvas.getContext("2d"),this.container.appendChild(this.canvas),this.render()}setPlaying(e){const t=this.playing;this.playing=e,!t&&this.playing?this.animate():this.render()}animate(){const e=this.progress;this.progress=this.progressCheck(),e>.8&&this.progress<.2&&(this.progressOffset=this.progress),this.render(),this.playing&&requestAnimationFrame(this.animate.bind(this))}render(){let e=this.playing?this.progress:0,t=this.diameter2-this.thickness,i=this.diameter2,a=this.diameter2,n=28;this.progressOffset+=.1*(1-this.progressOffset);const s=-Math.PI/2+e*(2*Math.PI),r=-Math.PI/2+this.progressOffset*(2*Math.PI);this.context.save(),this.context.clearRect(0,0,this.diameter,this.diameter),this.context.beginPath(),this.context.arc(i,a,t+4,0,2*Math.PI,!1),this.context.fillStyle="rgba( 0, 0, 0, 0.4 )",this.context.fill(),this.context.beginPath(),this.context.arc(i,a,t,0,2*Math.PI,!1),this.context.lineWidth=this.thickness,this.context.strokeStyle="rgba( 255, 255, 255, 0.2 )",this.context.stroke(),this.playing&&(this.context.beginPath(),this.context.arc(i,a,t,r,s,!1),this.context.lineWidth=this.thickness,this.context.strokeStyle="#fff",this.context.stroke()),this.context.translate(i-14,a-14),this.playing?(this.context.fillStyle="#fff",this.context.fillRect(0,0,10,n),this.context.fillRect(18,0,10,n)):(this.context.beginPath(),this.context.translate(4,0),this.context.moveTo(0,0),this.context.lineTo(24,14),this.context.lineTo(0,n),this.context.fillStyle="#fff",this.context.fill()),this.context.restore()}on(e,t){this.canvas.addEventListener(e,t,!1)}off(e,t){this.canvas.removeEventListener(e,t,!1)}destroy(){this.playing=!1,this.canvas.parentNode&&this.container.removeChild(this.canvas)}}var $={width:960,height:700,margin:.04,minScale:.2,maxScale:2,controls:!0,controlsTutorial:!0,controlsLayout:"bottom-right",controlsBackArrows:"faded",progress:!0,slideNumber:!1,showSlideNumber:"all",hashOneBasedIndex:!1,hash:!1,respondToHashChanges:!0,history:!1,keyboard:!0,keyboardCondition:null,disableLayout:!1,overview:!0,center:!0,touch:!0,loop:!1,rtl:!1,navigationMode:"default",shuffle:!1,fragments:!0,fragmentInURL:!0,embedded:!1,help:!0,pause:!0,showNotes:!1,showHiddenSlides:!1,autoPlayMedia:null,preloadIframes:null,autoAnimate:!0,autoAnimateMatcher:null,autoAnimateEasing:"ease",autoAnimateDuration:1,autoAnimateUnmatched:!0,autoAnimateStyles:["opacity","color","background-color","padding","font-size","line-height","letter-spacing","border-width","border-color","border-radius","outline","outline-offset"],autoSlide:0,autoSlideStoppable:!0,autoSlideMethod:null,defaultTiming:null,mouseWheel:!1,previewLinks:!1,postMessage:!0,postMessageEvents:!1,focusBodyOnPageVisibilityChange:!0,transition:"slide",transitionSpeed:"default",backgroundTransition:"fade",parallaxBackgroundImage:"",parallaxBackgroundSize:"",parallaxBackgroundRepeat:"",parallaxBackgroundPosition:"",parallaxBackgroundHorizontal:null,parallaxBackgroundVertical:null,pdfMaxPagesPerSlide:Number.POSITIVE_INFINITY,pdfSeparateFragments:!0,pdfPageHeightOffset:-1,viewDistance:3,mobileViewDistance:2,display:"block",hideInactiveCursor:!0,hideCursorTime:5e3,dependencies:[],plugins:[]};const j="4.3.1";function X(s,l){arguments.length<2&&(l=arguments[0],s=document.querySelector(".reveal"));const h={};let u,v,p,m,f,w={},L=!1,C={hasNavigatedHorizontally:!1,hasNavigatedVertically:!1},z=[],O=1,U={layout:"",overview:""},X={},Y="idle",_=0,G=0,J=-1,Q=!1,Z=new b(h),ee=new y(h),te=new x(h),ie=new E(h),ae=new P(h),ne=new N(h),se=new M(h),re=new D(h),oe=new I(h),le=new T(h),de=new F(h),ce=new H(h),he=new q(h),ue=new W(h),ge=new B(h),ve=new K(h);function pe(e){if(!s)throw'Unable to find presentation root (<div class="reveal">).';if(X.wrapper=s,X.slides=s.querySelector(".slides"),!X.slides)throw'Unable to find slides container (<div class="slides">).';return w={...$,...w,...l,...e,...d()},me(),window.addEventListener("load",Ue,!1),ce.load(w.plugins,w.dependencies).then(fe),new Promise((e=>h.on("ready",e)))}function me(){!0===w.embedded?X.viewport=r(s,".reveal-viewport")||s:(X.viewport=document.body,document.documentElement.classList.add("reveal-full-page")),X.viewport.classList.add("reveal-viewport")}function fe(){L=!0,be(),ye(),ke(),Se(),Ae(),st(),Le(),re.readURL(),ie.update(!0),setTimeout((()=>{X.slides.classList.remove("no-transition"),X.wrapper.classList.add("ready"),Ie({type:"ready",data:{indexh:u,indexv:v,currentSlide:m}})}),1),he.isPrintingPDF()&&(xe(),"complete"===document.readyState?he.setupPDF():window.addEventListener("load",(()=>{he.setupPDF()})))}function be(){w.showHiddenSlides||t(X.wrapper,'section[data-visibility="hidden"]').forEach((e=>{e.parentNode.removeChild(e)}))}function ye(){X.slides.classList.add("no-transition"),g?X.wrapper.classList.add("no-hover"):X.wrapper.classList.remove("no-hover"),ie.render(),ee.render(),oe.render(),le.render(),ve.render(),X.pauseOverlay=o(X.wrapper,"div","pause-overlay",w.controls?'<button class="resume-button">Resume presentation</button>':null),X.statusElement=we(),X.wrapper.setAttribute("role","application")}function we(){let e=X.wrapper.querySelector(".aria-status");return e||(e=document.createElement("div"),e.style.position="absolute",e.style.height="1px",e.style.width="1px",e.style.overflow="hidden",e.style.clip="rect( 1px, 1px, 1px, 1px )",e.classList.add("aria-status"),e.setAttribute("aria-live","polite"),e.setAttribute("aria-atomic","true"),X.wrapper.appendChild(e)),e}function Ee(e){X.statusElement.textContent=e}function Re(e){let t="";if(3===e.nodeType)t+=e.textContent;else if(1===e.nodeType){let i=e.getAttribute("aria-hidden"),a="none"===window.getComputedStyle(e).display;"true"===i||a||Array.from(e.childNodes).forEach((e=>{t+=Re(e)}))}return t=t.trim(),""===t?"":t+" "}function Se(){setInterval((()=>{0===X.wrapper.scrollTop&&0===X.wrapper.scrollLeft||(X.wrapper.scrollTop=0,X.wrapper.scrollLeft=0)}),1e3)}function Ae(){document.addEventListener("fullscreenchange",Kt),document.addEventListener("webkitfullscreenchange",Kt)}function ke(){w.postMessage&&window.addEventListener("message",qt,!1)}function Le(t){const a={...w};if("object"==typeof t&&e(w,t),!1===h.isReady())return;const n=X.wrapper.querySelectorAll(R).length;X.wrapper.classList.remove(a.transition),X.wrapper.classList.add(w.transition),X.wrapper.setAttribute("data-transition-speed",w.transitionSpeed),X.wrapper.setAttribute("data-background-transition",w.backgroundTransition),X.viewport.style.setProperty("--slide-width",w.width+"px"),X.viewport.style.setProperty("--slide-height",w.height+"px"),w.shuffle&&rt(),i(X.wrapper,"embedded",w.embedded),i(X.wrapper,"rtl",w.rtl),i(X.wrapper,"center",w.center),!1===w.pause&&Je(),w.previewLinks?(Fe(),ze("[data-preview-link=false]")):(ze(),Fe("[data-preview-link]:not([data-preview-link=false])")),te.reset(),f&&(f.destroy(),f=null),n>1&&w.autoSlide&&w.autoSlideStoppable&&(f=new V(X.wrapper,(()=>Math.min(Math.max((Date.now()-J)/_,0),1))),f.on("click",$t),Q=!1),"default"!==w.navigationMode?X.wrapper.setAttribute("data-navigation-mode",w.navigationMode):X.wrapper.removeAttribute("data-navigation-mode"),ve.configure(w,a),ue.configure(w,a),de.configure(w,a),oe.configure(w,a),le.configure(w,a),se.configure(w,a),ae.configure(w,a),ee.configure(w,a),at()}function Ce(){window.addEventListener("resize",Ut,!1),w.touch&&ge.bind(),w.keyboard&&se.bind(),w.progress&&le.bind(),w.respondToHashChanges&&re.bind(),oe.bind(),ue.bind(),X.slides.addEventListener("click",Ot,!1),X.slides.addEventListener("transitionend",Bt,!1),X.pauseOverlay.addEventListener("click",Je,!1),w.focusBodyOnPageVisibilityChange&&document.addEventListener("visibilitychange",Wt,!1)}function xe(){ge.unbind(),ue.unbind(),se.unbind(),oe.unbind(),le.unbind(),re.unbind(),window.removeEventListener("resize",Ut,!1),X.slides.removeEventListener("click",Ot,!1),X.slides.removeEventListener("transitionend",Bt,!1),X.pauseOverlay.removeEventListener("click",Je,!1)}function Pe(){xe(),xt(),ze(),ve.destroy(),ue.destroy(),ce.destroy(),de.destroy(),oe.destroy(),le.destroy(),ie.destroy(),ee.destroy(),document.removeEventListener("fullscreenchange",Kt),document.removeEventListener("webkitfullscreenchange",Kt),document.removeEventListener("visibilitychange",Wt,!1),window.removeEventListener("message",qt,!1),window.removeEventListener("load",Ue,!1),X.pauseOverlay&&X.pauseOverlay.remove(),X.statusElement&&X.statusElement.remove(),document.documentElement.classList.remove("reveal-full-page"),X.wrapper.classList.remove("ready","center","has-horizontal-slides","has-vertical-slides"),X.wrapper.removeAttribute("data-transition-speed"),X.wrapper.removeAttribute("data-background-transition"),X.viewport.classList.remove("reveal-viewport"),X.viewport.style.removeProperty("--slide-width"),X.viewport.style.removeProperty("--slide-height"),X.slides.style.removeProperty("width"),X.slides.style.removeProperty("height"),X.slides.style.removeProperty("zoom"),X.slides.style.removeProperty("left"),X.slides.style.removeProperty("top"),X.slides.style.removeProperty("bottom"),X.slides.style.removeProperty("right"),X.slides.style.removeProperty("transform"),Array.from(X.wrapper.querySelectorAll(R)).forEach((e=>{e.style.removeProperty("display"),e.style.removeProperty("top"),e.removeAttribute("hidden"),e.removeAttribute("aria-hidden")}))}function Ne(e,t,i){s.addEventListener(e,t,i)}function Me(e,t,i){s.removeEventListener(e,t,i)}function De(e){"string"==typeof e.layout&&(U.layout=e.layout),"string"==typeof e.overview&&(U.overview=e.overview),U.layout?n(X.slides,U.layout+" "+U.overview):n(X.slides,U.overview)}function Ie({target:t=X.wrapper,type:i,data:a,bubbles:n=!0}){let s=document.createEvent("HTMLEvents",1,2);return s.initEvent(i,n,!0),e(s,a),t.dispatchEvent(s),t===X.wrapper&&Te(i),s}function Te(t,i){if(w.postMessageEvents&&window.parent!==window.self){let a={namespace:"reveal",eventName:t,state:kt()};e(a,i),window.parent.postMessage(JSON.stringify(a),"*")}}function Fe(e="a"){Array.from(X.wrapper.querySelectorAll(e)).forEach((e=>{/^(http|www)/gi.test(e.getAttribute("href"))&&e.addEventListener("click",Vt,!1)}))}function ze(e="a"){Array.from(X.wrapper.querySelectorAll(e)).forEach((e=>{/^(http|www)/gi.test(e.getAttribute("href"))&&e.removeEventListener("click",Vt,!1)}))}function He(e){Oe(),X.overlay=document.createElement("div"),X.overlay.classList.add("overlay"),X.overlay.classList.add("overlay-preview"),X.wrapper.appendChild(X.overlay),X.overlay.innerHTML=`<header>\n\t\t\t\t<a class="close" href="#"><span class="icon"></span></a>\n\t\t\t\t<a class="external" href="${e}" target="_blank"><span class="icon"></span></a>\n\t\t\t</header>\n\t\t\t<div class="spinner"></div>\n\t\t\t<div class="viewport">\n\t\t\t\t<iframe src="${e}"></iframe>\n\t\t\t\t<small class="viewport-inner">\n\t\t\t\t\t<span class="x-frame-error">Unable to load iframe. This is likely due to the site's policy (x-frame-options).</span>\n\t\t\t\t</small>\n\t\t\t</div>`,X.overlay.querySelector("iframe").addEventListener("load",(e=>{X.overlay.classList.add("loaded")}),!1),X.overlay.querySelector(".close").addEventListener("click",(e=>{Oe(),e.preventDefault()}),!1),X.overlay.querySelector(".external").addEventListener("click",(e=>{Oe()}),!1)}function qe(e){"boolean"==typeof e?e?Be():Oe():X.overlay?Oe():Be()}function Be(){if(w.help){Oe(),X.overlay=document.createElement("div"),X.overlay.classList.add("overlay"),X.overlay.classList.add("overlay-help"),X.wrapper.appendChild(X.overlay);let e='<p class="title">Keyboard Shortcuts</p><br/>',t=se.getShortcuts(),i=se.getBindings();e+="<table><th>KEY</th><th>ACTION</th>";for(let i in t)e+=`<tr><td>${i}</td><td>${t[i]}</td></tr>`;for(let t in i)i[t].key&&i[t].description&&(e+=`<tr><td>${i[t].key}</td><td>${i[t].description}</td></tr>`);e+="</table>",X.overlay.innerHTML=`\n\t\t\t\t<header>\n\t\t\t\t\t<a class="close" href="#"><span class="icon"></span></a>\n\t\t\t\t</header>\n\t\t\t\t<div class="viewport">\n\t\t\t\t\t<div class="viewport-inner">${e}</div>\n\t\t\t\t</div>\n\t\t\t`,X.overlay.querySelector(".close").addEventListener("click",(e=>{Oe(),e.preventDefault()}),!1)}}function Oe(){return!!X.overlay&&(X.overlay.parentNode.removeChild(X.overlay),X.overlay=null,!0)}function Ue(){if(X.wrapper&&!he.isPrintingPDF()){if(!w.disableLayout){g&&!w.embedded&&document.documentElement.style.setProperty("--vh",.01*window.innerHeight+"px");const e=Ke(),t=O;We(w.width,w.height),X.slides.style.width=e.width+"px",X.slides.style.height=e.height+"px",O=Math.min(e.presentationWidth/e.width,e.presentationHeight/e.height),O=Math.max(O,w.minScale),O=Math.min(O,w.maxScale),1===O?(X.slides.style.zoom="",X.slides.style.left="",X.slides.style.top="",X.slides.style.bottom="",X.slides.style.right="",De({layout:""})):(X.slides.style.zoom="",X.slides.style.left="50%",X.slides.style.top="50%",X.slides.style.bottom="auto",X.slides.style.right="auto",De({layout:"translate(-50%, -50%) scale("+O+")"}));const i=Array.from(X.wrapper.querySelectorAll(R));for(let t=0,a=i.length;t<a;t++){const a=i[t];"none"!==a.style.display&&(w.center||a.classList.contains("center")?a.classList.contains("stack")?a.style.top=0:a.style.top=Math.max((e.height-a.scrollHeight)/2,0)+"px":a.style.top="")}t!==O&&Ie({type:"resize",data:{oldScale:t,scale:O,size:e}})}X.viewport.style.setProperty("--slide-scale",O),le.update(),ie.updateParallax(),ne.isActive()&&ne.update()}}function We(e,i){t(X.slides,"section > .stretch, section > .r-stretch").forEach((t=>{let a=c(t,i);if(/(img|video)/gi.test(t.nodeName)){const i=t.naturalWidth||t.videoWidth,n=t.naturalHeight||t.videoHeight,s=Math.min(e/i,a/n);t.style.width=i*s+"px",t.style.height=n*s+"px"}else t.style.width=e+"px",t.style.height=a+"px"}))}function Ke(e,t){const i={width:w.width,height:w.height,presentationWidth:e||X.wrapper.offsetWidth,presentationHeight:t||X.wrapper.offsetHeight};return i.presentationWidth-=i.presentationWidth*w.margin,i.presentationHeight-=i.presentationHeight*w.margin,"string"==typeof i.width&&/%$/.test(i.width)&&(i.width=parseInt(i.width,10)/100*i.presentationWidth),"string"==typeof i.height&&/%$/.test(i.height)&&(i.height=parseInt(i.height,10)/100*i.presentationHeight),i}function Ve(e,t){"object"==typeof e&&"function"==typeof e.setAttribute&&e.setAttribute("data-previous-indexv",t||0)}function $e(e){if("object"==typeof e&&"function"==typeof e.setAttribute&&e.classList.contains("stack")){const t=e.hasAttribute("data-start-indexv")?"data-start-indexv":"data-previous-indexv";return parseInt(e.getAttribute(t)||0,10)}return 0}function je(e=m){return e&&e.parentNode&&!!e.parentNode.nodeName.match(/section/i)}function Xe(){return!(!m||!je(m))&&!m.nextElementSibling}function Ye(){return 0===u&&0===v}function _e(){return!!m&&(!m.nextElementSibling&&(!je(m)||!m.parentNode.nextElementSibling))}function Ge(){if(w.pause){const e=X.wrapper.classList.contains("paused");xt(),X.wrapper.classList.add("paused"),!1===e&&Ie({type:"paused"})}}function Je(){const e=X.wrapper.classList.contains("paused");X.wrapper.classList.remove("paused"),Ct(),e&&Ie({type:"resumed"})}function Qe(e){"boolean"==typeof e?e?Ge():Je():Ze()?Je():Ge()}function Ze(){return X.wrapper.classList.contains("paused")}function et(e){"boolean"==typeof e?e?Nt():Pt():Q?Nt():Pt()}function tt(){return!(!_||Q)}function it(e,t,i,a){if(Ie({type:"beforeslidechange",data:{indexh:void 0===e?u:e,indexv:void 0===t?v:t,origin:a}}).defaultPrevented)return;p=m;const n=X.wrapper.querySelectorAll(S);if(0===n.length)return;void 0!==t||ne.isActive()||(t=$e(n[e])),p&&p.parentNode&&p.parentNode.classList.contains("stack")&&Ve(p.parentNode,v);const s=z.concat();z.length=0;let r=u||0,o=v||0;u=ot(S,void 0===e?u:e),v=ot(A,void 0===t?v:t);let l=u!==r||v!==o;l||(p=null);let d=n[u],c=d.querySelectorAll("section");m=c[v]||d;let h=!1;l&&p&&m&&!ne.isActive()&&(p.hasAttribute("data-auto-animate")&&m.hasAttribute("data-auto-animate")&&p.getAttribute("data-auto-animate-id")===m.getAttribute("data-auto-animate-id")&&!(u>r||v>o?m:p).hasAttribute("data-auto-animate-restart")&&(h=!0,X.slides.classList.add("disable-slide-transitions")),Y="running"),ct(),Ue(),ne.isActive()&&ne.update(),void 0!==i&&ae.goto(i),p&&p!==m&&(p.classList.remove("present"),p.setAttribute("aria-hidden","true"),Ye()&&setTimeout((()=>{bt().forEach((e=>{Ve(e,0)}))}),0));e:for(let e=0,t=z.length;e<t;e++){for(let t=0;t<s.length;t++)if(s[t]===z[e]){s.splice(t,1);continue e}X.viewport.classList.add(z[e]),Ie({type:z[e]})}for(;s.length;)X.viewport.classList.remove(s.pop());l&&Ie({type:"slidechanged",data:{indexh:u,indexv:v,previousSlide:p,currentSlide:m,origin:a}}),!l&&p||(Z.stopEmbeddedContent(p),Z.startEmbeddedContent(m)),requestAnimationFrame((()=>{Ee(Re(m))})),le.update(),oe.update(),ve.update(),ie.update(),ie.updateParallax(),ee.update(),ae.update(),re.writeURL(),Ct(),h&&(setTimeout((()=>{X.slides.classList.remove("disable-slide-transitions")}),0),w.autoAnimate&&te.run(p,m))}function at(){xe(),Ce(),Ue(),_=w.autoSlide,Ct(),ie.create(),re.writeURL(),ae.sortAll(),oe.update(),le.update(),ct(),ve.update(),ve.updateVisibility(),ie.update(!0),ee.update(),Z.formatEmbeddedContent(),!1===w.autoPlayMedia?Z.stopEmbeddedContent(m,{unloadIframes:!1}):Z.startEmbeddedContent(m),ne.isActive()&&ne.layout()}function nt(e=m){ie.sync(e),ae.sync(e),Z.load(e),ie.update(),ve.update()}function st(){mt().forEach((e=>{t(e,"section").forEach(((e,t)=>{t>0&&(e.classList.remove("present"),e.classList.remove("past"),e.classList.add("future"),e.setAttribute("aria-hidden","true"))}))}))}function rt(e=mt()){e.forEach(((t,i)=>{let a=e[Math.floor(Math.random()*e.length)];a.parentNode===t.parentNode&&t.parentNode.insertBefore(t,a);let n=t.querySelectorAll("section");n.length&&rt(n)}))}function ot(e,i){let a=t(X.wrapper,e),n=a.length,s=he.isPrintingPDF(),r=!1,o=!1;if(n){w.loop&&(i>=n&&(r=!0),(i%=n)<0&&(i=n+i,o=!0)),i=Math.max(Math.min(i,n-1),0);for(let e=0;e<n;e++){let t=a[e],n=w.rtl&&!je(t);t.classList.remove("past"),t.classList.remove("present"),t.classList.remove("future"),t.setAttribute("hidden",""),t.setAttribute("aria-hidden","true"),t.querySelector("section")&&t.classList.add("stack"),s?t.classList.add("present"):e<i?(t.classList.add(n?"future":"past"),w.fragments&&lt(t)):e>i?(t.classList.add(n?"past":"future"),w.fragments&&dt(t)):e===i&&w.fragments&&(r?dt(t):o&&lt(t))}let e=a[i],t=e.classList.contains("present");e.classList.add("present"),e.removeAttribute("hidden"),e.removeAttribute("aria-hidden"),t||Ie({target:e,type:"visible",bubbles:!1});let l=e.getAttribute("data-state");l&&(z=z.concat(l.split(" ")))}else i=0;return i}function lt(e){t(e,".fragment").forEach((e=>{e.classList.add("visible"),e.classList.remove("current-fragment")}))}function dt(e){t(e,".fragment.visible").forEach((e=>{e.classList.remove("visible","current-fragment")}))}function ct(){let e,i,a=mt(),n=a.length;if(n&&void 0!==u){let s=ne.isActive()?10:w.viewDistance;g&&(s=ne.isActive()?6:w.mobileViewDistance),he.isPrintingPDF()&&(s=Number.MAX_VALUE);for(let r=0;r<n;r++){let o=a[r],l=t(o,"section"),d=l.length;if(e=Math.abs((u||0)-r)||0,w.loop&&(e=Math.abs(((u||0)-r)%(n-s))||0),e<s?Z.load(o):Z.unload(o),d){let t=$e(o);for(let a=0;a<d;a++){let n=l[a];i=r===(u||0)?Math.abs((v||0)-a):Math.abs(a-t),e+i<s?Z.load(n):Z.unload(n)}}}wt()?X.wrapper.classList.add("has-vertical-slides"):X.wrapper.classList.remove("has-vertical-slides"),yt()?X.wrapper.classList.add("has-horizontal-slides"):X.wrapper.classList.remove("has-horizontal-slides")}}function ht({includeFragments:e=!1}={}){let t=X.wrapper.querySelectorAll(S),i=X.wrapper.querySelectorAll(A),a={left:u>0,right:u<t.length-1,up:v>0,down:v<i.length-1};if(w.loop&&(t.length>1&&(a.left=!0,a.right=!0),i.length>1&&(a.up=!0,a.down=!0)),t.length>1&&"linear"===w.navigationMode&&(a.right=a.right||a.down,a.left=a.left||a.up),!0===e){let e=ae.availableRoutes();a.left=a.left||e.prev,a.up=a.up||e.prev,a.down=a.down||e.next,a.right=a.right||e.next}if(w.rtl){let e=a.left;a.left=a.right,a.right=e}return a}function ut(e=m){let t=mt(),i=0;e:for(let a=0;a<t.length;a++){let n=t[a],s=n.querySelectorAll("section");for(let t=0;t<s.length;t++){if(s[t]===e)break e;"uncounted"!==s[t].dataset.visibility&&i++}if(n===e)break;!1===n.classList.contains("stack")&&"uncounted"!==n.dataset.visibility&&i++}return i}function gt(){let e=Rt(),t=ut();if(m){let e=m.querySelectorAll(".fragment");if(e.length>0){let i=.9;t+=m.querySelectorAll(".fragment.visible").length/e.length*i}}return Math.min(t/(e-1),1)}function vt(e){let i,a=u,n=v;if(e){let i=je(e),s=i?e.parentNode:e,r=mt();a=Math.max(r.indexOf(s),0),n=void 0,i&&(n=Math.max(t(e.parentNode,"section").indexOf(e),0))}if(!e&&m){if(m.querySelectorAll(".fragment").length>0){let e=m.querySelector(".current-fragment");i=e&&e.hasAttribute("data-fragment-index")?parseInt(e.getAttribute("data-fragment-index"),10):m.querySelectorAll(".fragment.visible").length-1}}return{h:a,v:n,f:i}}function pt(){return t(X.wrapper,'.slides section:not(.stack):not([data-visibility="uncounted"])')}function mt(){return t(X.wrapper,S)}function ft(){return t(X.wrapper,".slides>section>section")}function bt(){return t(X.wrapper,".slides>section.stack")}function yt(){return mt().length>1}function wt(){return ft().length>1}function Et(){return pt().map((e=>{let t={};for(let i=0;i<e.attributes.length;i++){let a=e.attributes[i];t[a.name]=a.value}return t}))}function Rt(){return pt().length}function St(e,t){let i=mt()[e],a=i&&i.querySelectorAll("section");return a&&a.length&&"number"==typeof t?a?a[t]:void 0:i}function At(e,t){let i="number"==typeof e?St(e,t):e;if(i)return i.slideBackgroundElement}function kt(){let e=vt();return{indexh:e.h,indexv:e.v,indexf:e.f,paused:Ze(),overview:ne.isActive()}}function Lt(e){if("object"==typeof e){it(a(e.indexh),a(e.indexv),a(e.indexf));let t=a(e.paused),i=a(e.overview);"boolean"==typeof t&&t!==Ze()&&Qe(t),"boolean"==typeof i&&i!==ne.isActive()&&ne.toggle(i)}}function Ct(){if(xt(),m&&!1!==w.autoSlide){let e=m.querySelector(".current-fragment");e||(e=m.querySelector(".fragment"));let i=e?e.getAttribute("data-autoslide"):null,a=m.parentNode?m.parentNode.getAttribute("data-autoslide"):null,n=m.getAttribute("data-autoslide");i?_=parseInt(i,10):n?_=parseInt(n,10):a?_=parseInt(a,10):(_=w.autoSlide,0===m.querySelectorAll(".fragment").length&&t(m,"video, audio").forEach((e=>{e.hasAttribute("data-autoplay")&&_&&1e3*e.duration/e.playbackRate>_&&(_=1e3*e.duration/e.playbackRate+1e3)}))),!_||Q||Ze()||ne.isActive()||_e()&&!ae.availableRoutes().next&&!0!==w.loop||(G=setTimeout((()=>{"function"==typeof w.autoSlideMethod?w.autoSlideMethod():zt(),Ct()}),_),J=Date.now()),f&&f.setPlaying(-1!==G)}}function xt(){clearTimeout(G),G=-1}function Pt(){_&&!Q&&(Q=!0,Ie({type:"autoslidepaused"}),clearTimeout(G),f&&f.setPlaying(!1))}function Nt(){_&&Q&&(Q=!1,Ie({type:"autoslideresumed"}),Ct())}function Mt({skipFragments:e=!1}={}){C.hasNavigatedHorizontally=!0,w.rtl?(ne.isActive()||e||!1===ae.next())&&ht().left&&it(u+1,"grid"===w.navigationMode?v:void 0):(ne.isActive()||e||!1===ae.prev())&&ht().left&&it(u-1,"grid"===w.navigationMode?v:void 0)}function Dt({skipFragments:e=!1}={}){C.hasNavigatedHorizontally=!0,w.rtl?(ne.isActive()||e||!1===ae.prev())&&ht().right&&it(u-1,"grid"===w.navigationMode?v:void 0):(ne.isActive()||e||!1===ae.next())&&ht().right&&it(u+1,"grid"===w.navigationMode?v:void 0)}function It({skipFragments:e=!1}={}){(ne.isActive()||e||!1===ae.prev())&&ht().up&&it(u,v-1)}function Tt({skipFragments:e=!1}={}){C.hasNavigatedVertically=!0,(ne.isActive()||e||!1===ae.next())&&ht().down&&it(u,v+1)}function Ft({skipFragments:e=!1}={}){if(e||!1===ae.prev())if(ht().up)It({skipFragments:e});else{let i;if(i=w.rtl?t(X.wrapper,".slides>section.future").pop():t(X.wrapper,".slides>section.past").pop(),i&&i.classList.contains("stack")){let e=i.querySelectorAll("section").length-1||void 0;it(u-1,e)}else Mt({skipFragments:e})}}function zt({skipFragments:e=!1}={}){if(C.hasNavigatedHorizontally=!0,C.hasNavigatedVertically=!0,e||!1===ae.next()){let t=ht();t.down&&t.right&&w.loop&&Xe()&&(t.down=!1),t.down?Tt({skipFragments:e}):w.rtl?Mt({skipFragments:e}):Dt({skipFragments:e})}}function Ht(e){w.autoSlideStoppable&&Pt()}function qt(e){let t=e.data;if("string"==typeof t&&"{"===t.charAt(0)&&"}"===t.charAt(t.length-1)&&(t=JSON.parse(t),t.method&&"function"==typeof h[t.method]))if(!1===k.test(t.method)){const e=h[t.method].apply(h,t.args);Te("callback",{method:t.method,result:e})}else console.warn('reveal.js: "'+t.method+'" is is blacklisted from the postMessage API')}function Bt(e){"running"===Y&&/section/gi.test(e.target.nodeName)&&(Y="idle",Ie({type:"slidetransitionend",data:{indexh:u,indexv:v,previousSlide:p,currentSlide:m}}))}function Ot(e){const t=r(e.target,'a[href^="#"]');if(t){const i=t.getAttribute("href"),a=re.getIndicesFromHash(i);a&&(h.slide(a.h,a.v,a.f),e.preventDefault())}}function Ut(e){Ue()}function Wt(e){!1===document.hidden&&document.activeElement!==document.body&&("function"==typeof document.activeElement.blur&&document.activeElement.blur(),document.body.focus())}function Kt(e){(document.fullscreenElement||document.webkitFullscreenElement)===X.wrapper&&(e.stopImmediatePropagation(),setTimeout((()=>{h.layout(),h.focus.focus()}),1))}function Vt(e){if(e.currentTarget&&e.currentTarget.hasAttribute("href")){let t=e.currentTarget.getAttribute("href");t&&(He(t),e.preventDefault())}}function $t(e){_e()&&!1===w.loop?(it(0,0),Nt()):Q?Nt():Pt()}const jt={VERSION:j,initialize:pe,configure:Le,destroy:Pe,sync:at,syncSlide:nt,syncFragments:ae.sync.bind(ae),slide:it,left:Mt,right:Dt,up:It,down:Tt,prev:Ft,next:zt,navigateLeft:Mt,navigateRight:Dt,navigateUp:It,navigateDown:Tt,navigatePrev:Ft,navigateNext:zt,navigateFragment:ae.goto.bind(ae),prevFragment:ae.prev.bind(ae),nextFragment:ae.next.bind(ae),on:Ne,off:Me,addEventListener:Ne,removeEventListener:Me,layout:Ue,shuffle:rt,availableRoutes:ht,availableFragments:ae.availableRoutes.bind(ae),toggleHelp:qe,toggleOverview:ne.toggle.bind(ne),togglePause:Qe,toggleAutoSlide:et,isFirstSlide:Ye,isLastSlide:_e,isLastVerticalSlide:Xe,isVerticalSlide:je,isPaused:Ze,isAutoSliding:tt,isSpeakerNotes:ve.isSpeakerNotesWindow.bind(ve),isOverview:ne.isActive.bind(ne),isFocused:ue.isFocused.bind(ue),isPrintingPDF:he.isPrintingPDF.bind(he),isReady:()=>L,loadSlide:Z.load.bind(Z),unloadSlide:Z.unload.bind(Z),showPreview:He,hidePreview:Oe,addEventListeners:Ce,removeEventListeners:xe,dispatchEvent:Ie,getState:kt,setState:Lt,getProgress:gt,getIndices:vt,getSlidesAttributes:Et,getSlidePastCount:ut,getTotalSlides:Rt,getSlide:St,getPreviousSlide:()=>p,getCurrentSlide:()=>m,getSlideBackground:At,getSlideNotes:ve.getSlideNotes.bind(ve),getSlides:pt,getHorizontalSlides:mt,getVerticalSlides:ft,hasHorizontalSlides:yt,hasVerticalSlides:wt,hasNavigatedHorizontally:()=>C.hasNavigatedHorizontally,hasNavigatedVertically:()=>C.hasNavigatedVertically,addKeyBinding:se.addKeyBinding.bind(se),removeKeyBinding:se.removeKeyBinding.bind(se),triggerKey:se.triggerKey.bind(se),registerKeyboardShortcut:se.registerKeyboardShortcut.bind(se),getComputedSlideSize:Ke,getScale:()=>O,getConfig:()=>w,getQueryHash:d,getSlidePath:re.getHash.bind(re),getRevealElement:()=>s,getSlidesElement:()=>X.slides,getViewportElement:()=>X.viewport,getBackgroundsElement:()=>ie.element,registerPlugin:ce.registerPlugin.bind(ce),hasPlugin:ce.hasPlugin.bind(ce),getPlugin:ce.getPlugin.bind(ce),getPlugins:ce.getRegisteredPlugins.bind(ce)};return e(h,{...jt,announceStatus:Ee,getStatusText:Re,print:he,focus:ue,progress:le,controls:oe,location:re,overview:ne,fragments:ae,slideContent:Z,slideNumber:ee,onUserInput:Ht,closeOverlay:Oe,updateSlidesVisibility:ct,layoutSlideContents:We,transformSlides:De,cueAutoSlide:Ct,cancelAutoSlide:xt}),jt}let Y=X,_=[];return Y.initialize=e=>(Object.assign(Y,new X(document.querySelector(".reveal"),e)),_.map((e=>e(Y))),Y.initialize()),["configure","on","off","addEventListener","removeEventListener","registerPlugin"].forEach((e=>{Y[e]=(...t)=>{_.push((i=>i[e].call(null,...t)))}})),Y.isReady=()=>!1,Y.VERSION=j,Y}));
//# sourceMappingURL=reveal.js.map
/*!
 * reveal.js
 * http://lab.hakim.se/reveal-js
 * MIT licensed
 *
 * Copyright (C) 2016 Hakim El Hattab, http://hakim.se
 */
(function( root, factory ) {
	if( typeof define === 'function' && define.amd ) {
		// AMD. Register as an anonymous module.
		define( function() {
			root.Reveal = factory();
			return root.Reveal;
		} );
	} else if( typeof exports === 'object' ) {
		// Node. Does not work with strict CommonJS.
		module.exports = factory();
	} else {
		// Browser globals.
		root.Reveal = factory();
	}
}( this, function() {

	'use strict';

	var Reveal;

	// The reveal.js version
	var VERSION = '3.3.0';

	var SLIDES_SELECTOR = '.slides section',
		HORIZONTAL_SLIDES_SELECTOR = '.slides>section',
		VERTICAL_SLIDES_SELECTOR = '.slides>section.present>section',
		HOME_SLIDE_SELECTOR = '.slides>section:first-of-type',
		UA = navigator.userAgent,

		// Configuration defaults, can be overridden at initialization time
		config = {

			// The "normal" size of the presentation, aspect ratio will be preserved
			// when the presentation is scaled to fit different resolutions
			width: 960,
			height: 700,

			// Factor of the display size that should remain empty around the content
			margin: 0.1,

			// Bounds for smallest/largest possible scale to apply to content
			minScale: 0.2,
			maxScale: 1.5,

			// Display controls in the bottom right corner
			controls: true,

			// Display a presentation progress bar
			progress: true,

			// Display the page number of the current slide
			slideNumber: false,

			// Push each slide change to the browser history
			history: false,

			// Enable keyboard shortcuts for navigation
			keyboard: true,

			// Optional function that blocks keyboard events when retuning false
			keyboardCondition: null,

			// Enable the slide overview mode
			overview: true,

			// Vertical centering of slides
			center: true,

			// Enables touch navigation on devices with touch input
			touch: true,

			// Loop the presentation
			loop: false,

			// Change the presentation direction to be RTL
			rtl: false,

			// Randomizes the order of slides each time the presentation loads
			shuffle: false,

			// Turns fragments on and off globally
			fragments: true,

			// Flags if the presentation is running in an embedded mode,
			// i.e. contained within a limited portion of the screen
			embedded: false,

			// Flags if we should show a help overlay when the questionmark
			// key is pressed
			help: true,

			// Flags if it should be possible to pause the presentation (blackout)
			pause: true,

			// Flags if speaker notes should be visible to all viewers
			showNotes: false,

			// Number of milliseconds between automatically proceeding to the
			// next slide, disabled when set to 0, this value can be overwritten
			// by using a data-autoslide attribute on your slides
			autoSlide: 0,

			// Stop auto-sliding after user input
			autoSlideStoppable: true,

			// Use this method for navigation when auto-sliding (defaults to navigateNext)
			autoSlideMethod: null,

			// Enable slide navigation via mouse wheel
			mouseWheel: false,

			// Apply a 3D roll to links on hover
			rollingLinks: false,

			// Hides the address bar on mobile devices
			hideAddressBar: true,

			// Opens links in an iframe preview overlay
			previewLinks: false,

			// Exposes the reveal.js API through window.postMessage
			postMessage: true,

			// Dispatches all reveal.js events to the parent window through postMessage
			postMessageEvents: false,

			// Focuses body when page changes visiblity to ensure keyboard shortcuts work
			focusBodyOnPageVisibilityChange: true,

			// Transition style
			transition: 'slide', // none/fade/slide/convex/concave/zoom

			// Transition speed
			transitionSpeed: 'default', // default/fast/slow

			// Transition style for full page slide backgrounds
			backgroundTransition: 'fade', // none/fade/slide/convex/concave/zoom

			// Parallax background image
			parallaxBackgroundImage: '', // CSS syntax, e.g. "a.jpg"

			// Parallax background size
			parallaxBackgroundSize: '', // CSS syntax, e.g. "3000px 2000px"

			// Amount of pixels to move the parallax background per slide step
			parallaxBackgroundHorizontal: null,
			parallaxBackgroundVertical: null,

			// Number of slides away from the current that are visible
			viewDistance: 3,

			// Script dependencies to load
			dependencies: []

		},

		// Flags if reveal.js is loaded (has dispatched the 'ready' event)
		loaded = false,

		// Flags if the overview mode is currently active
		overview = false,

		// Holds the dimensions of our overview slides, including margins
		overviewSlideWidth = null,
		overviewSlideHeight = null,

		// The horizontal and vertical index of the currently active slide
		indexh,
		indexv,

		// The previous and current slide HTML elements
		previousSlide,
		currentSlide,

		previousBackground,

		// Slides may hold a data-state attribute which we pick up and apply
		// as a class to the body. This list contains the combined state of
		// all current slides.
		state = [],

		// The current scale of the presentation (see width/height config)
		scale = 1,

		// CSS transform that is currently applied to the slides container,
		// split into two groups
		slidesTransform = { layout: '', overview: '' },

		// Cached references to DOM elements
		dom = {},

		// Features supported by the browser, see #checkCapabilities()
		features = {},

		// Client is a mobile device, see #checkCapabilities()
		isMobileDevice,

		// Client is a desktop Chrome, see #checkCapabilities()
		isChrome,

		// Throttles mouse wheel navigation
		lastMouseWheelStep = 0,

		// Delays updates to the URL due to a Chrome thumbnailer bug
		writeURLTimeout = 0,

		// Flags if the interaction event listeners are bound
		eventsAreBound = false,

		// The current auto-slide duration
		autoSlide = 0,

		// Auto slide properties
		autoSlidePlayer,
		autoSlideTimeout = 0,
		autoSlideStartTime = -1,
		autoSlidePaused = false,

		// Holds information about the currently ongoing touch input
		touch = {
			startX: 0,
			startY: 0,
			startSpan: 0,
			startCount: 0,
			captured: false,
			threshold: 40
		},

		// Holds information about the keyboard shortcuts
		keyboardShortcuts = {
			'N  ,  SPACE':			'Next slide',
			'P':					'Previous slide',
			'&#8592;  ,  H':		'Navigate left',
			'&#8594;  ,  L':		'Navigate right',
			'&#8593;  ,  K':		'Navigate up',
			'&#8595;  ,  J':		'Navigate down',
			'Home':					'First slide',
			'End':					'Last slide',
			'B  ,  .':				'Pause',
			'F':					'Fullscreen',
			'ESC, O':				'Slide overview'
		};

	/**
	 * Starts up the presentation if the client is capable.
	 */
	function initialize( options ) {

		checkCapabilities();

		if( !features.transforms2d && !features.transforms3d ) {
			document.body.setAttribute( 'class', 'no-transforms' );

			// Since JS won't be running any further, we load all lazy
			// loading elements upfront
			var images = toArray( document.getElementsByTagName( 'img' ) ),
				iframes = toArray( document.getElementsByTagName( 'iframe' ) );

			var lazyLoadable = images.concat( iframes );

			for( var i = 0, len = lazyLoadable.length; i < len; i++ ) {
				var element = lazyLoadable[i];
				if( element.getAttribute( 'data-src' ) ) {
					element.setAttribute( 'src', element.getAttribute( 'data-src' ) );
					element.removeAttribute( 'data-src' );
				}
			}

			// If the browser doesn't support core features we won't be
			// using JavaScript to control the presentation
			return;
		}

		// Cache references to key DOM elements
		dom.wrapper = document.querySelector( '.reveal' );
		dom.slides = document.querySelector( '.reveal .slides' );

		// Force a layout when the whole page, incl fonts, has loaded
		window.addEventListener( 'load', layout, false );

		var query = Reveal.getQueryHash();

		// Do not accept new dependencies via query config to avoid
		// the potential of malicious script injection
		if( typeof query['dependencies'] !== 'undefined' ) delete query['dependencies'];

		// Copy options over to our config object
		extend( config, options );
		extend( config, query );

		// Hide the address bar in mobile browsers
		hideAddressBar();

		// Loads the dependencies and continues to #start() once done
		load();

	}

	/**
	 * Inspect the client to see what it's capable of, this
	 * should only happens once per runtime.
	 */
	function checkCapabilities() {

		isMobileDevice = /(iphone|ipod|ipad|android)/gi.test( UA );
		isChrome = /chrome/i.test( UA ) && !/edge/i.test( UA );

		var testElement = document.createElement( 'div' );

		features.transforms3d = 'WebkitPerspective' in testElement.style ||
								'MozPerspective' in testElement.style ||
								'msPerspective' in testElement.style ||
								'OPerspective' in testElement.style ||
								'perspective' in testElement.style;

		features.transforms2d = 'WebkitTransform' in testElement.style ||
								'MozTransform' in testElement.style ||
								'msTransform' in testElement.style ||
								'OTransform' in testElement.style ||
								'transform' in testElement.style;

		features.requestAnimationFrameMethod = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;
		features.requestAnimationFrame = typeof features.requestAnimationFrameMethod === 'function';

		features.canvas = !!document.createElement( 'canvas' ).getContext;

		// Transitions in the overview are disabled in desktop and
		// Safari due to lag
		features.overviewTransitions = !/Version\/[\d\.]+.*Safari/.test( UA );

		// Flags if we should use zoom instead of transform to scale
		// up slides. Zoom produces crisper results but has a lot of
		// xbrowser quirks so we only use it in whitelsited browsers.
		features.zoom = 'zoom' in testElement.style && !isMobileDevice &&
						( isChrome || /Version\/[\d\.]+.*Safari/.test( UA ) );

	}

    /**
     * Loads the dependencies of reveal.js. Dependencies are
     * defined via the configuration option 'dependencies'
     * and will be loaded prior to starting/binding reveal.js.
     * Some dependencies may have an 'async' flag, if so they
     * will load after reveal.js has been started up.
     */
	function load() {

		var scripts = [],
			scriptsAsync = [],
			scriptsToPreload = 0;

		// Called once synchronous scripts finish loading
		function proceed() {
			if( scriptsAsync.length ) {
				// Load asynchronous scripts
				head.js.apply( null, scriptsAsync );
			}

			start();
		}

		function loadScript( s ) {
			head.ready( s.src.match( /([\w\d_\-]*)\.?js$|[^\\\/]*$/i )[0], function() {
				// Extension may contain callback functions
				if( typeof s.callback === 'function' ) {
					s.callback.apply( this );
				}

				if( --scriptsToPreload === 0 ) {
					proceed();
				}
			});
		}

		for( var i = 0, len = config.dependencies.length; i < len; i++ ) {
			var s = config.dependencies[i];

			// Load if there's no condition or the condition is truthy
			if( !s.condition || s.condition() ) {
				if( s.async ) {
					scriptsAsync.push( s.src );
				}
				else {
					scripts.push( s.src );
				}

				loadScript( s );
			}
		}

		if( scripts.length ) {
			scriptsToPreload = scripts.length;

			// Load synchronous scripts
			head.js.apply( null, scripts );
		}
		else {
			proceed();
		}

	}

	/**
	 * Starts up reveal.js by binding input events and navigating
	 * to the current URL deeplink if there is one.
	 */
	function start() {

		// Make sure we've got all the DOM elements we need
		setupDOM();

		// Listen to messages posted to this window
		setupPostMessage();

		// Prevent the slides from being scrolled out of view
		setupScrollPrevention();

		// Resets all vertical slides so that only the first is visible
		resetVerticalSlides();

		// Updates the presentation to match the current configuration values
		configure();

		// Read the initial hash
		readURL();

		// Update all backgrounds
		updateBackground( true );

		// Notify listeners that the presentation is ready but use a 1ms
		// timeout to ensure it's not fired synchronously after #initialize()
		setTimeout( function() {
			// Enable transitions now that we're loaded
			dom.slides.classList.remove( 'no-transition' );

			loaded = true;

			dispatchEvent( 'ready', {
				'indexh': indexh,
				'indexv': indexv,
				'currentSlide': currentSlide
			} );
		}, 1 );

		// Special setup and config is required when printing to PDF
		if( isPrintingPDF() ) {
			removeEventListeners();

			// The document needs to have loaded for the PDF layout
			// measurements to be accurate
			if( document.readyState === 'complete' ) {
				setupPDF();
			}
			else {
				window.addEventListener( 'load', setupPDF );
			}
		}

	}

	/**
	 * Finds and stores references to DOM elements which are
	 * required by the presentation. If a required element is
	 * not found, it is created.
	 */
	function setupDOM() {

		// Prevent transitions while we're loading
		dom.slides.classList.add( 'no-transition' );

		// Background element
		dom.background = createSingletonNode( dom.wrapper, 'div', 'backgrounds', null );

		// Progress bar
		dom.progress = createSingletonNode( dom.wrapper, 'div', 'progress', '<span></span>' );
		dom.progressbar = dom.progress.querySelector( 'span' );

		// Arrow controls
		createSingletonNode( dom.wrapper, 'aside', 'controls',
			'<button class="navigate-left" aria-label="previous slide"></button>' +
			'<button class="navigate-right" aria-label="next slide"></button>' +
			'<button class="navigate-up" aria-label="above slide"></button>' +
			'<button class="navigate-down" aria-label="below slide"></button>' );

		// Slide number
		dom.slideNumber = createSingletonNode( dom.wrapper, 'div', 'slide-number', '' );

		// Element containing notes that are visible to the audience
		dom.speakerNotes = createSingletonNode( dom.wrapper, 'div', 'speaker-notes', null );
		dom.speakerNotes.setAttribute( 'data-prevent-swipe', '' );

		// Overlay graphic which is displayed during the paused mode
		createSingletonNode( dom.wrapper, 'div', 'pause-overlay', null );

		// Cache references to elements
		dom.controls = document.querySelector( '.reveal .controls' );
		dom.theme = document.querySelector( '#theme' );

		dom.wrapper.setAttribute( 'role', 'application' );

		// There can be multiple instances of controls throughout the page
		dom.controlsLeft = toArray( document.querySelectorAll( '.navigate-left' ) );
		dom.controlsRight = toArray( document.querySelectorAll( '.navigate-right' ) );
		dom.controlsUp = toArray( document.querySelectorAll( '.navigate-up' ) );
		dom.controlsDown = toArray( document.querySelectorAll( '.navigate-down' ) );
		dom.controlsPrev = toArray( document.querySelectorAll( '.navigate-prev' ) );
		dom.controlsNext = toArray( document.querySelectorAll( '.navigate-next' ) );

		dom.statusDiv = createStatusDiv();
	}

	/**
	 * Creates a hidden div with role aria-live to announce the
	 * current slide content. Hide the div off-screen to make it
	 * available only to Assistive Technologies.
	 */
	function createStatusDiv() {

		var statusDiv = document.getElementById( 'aria-status-div' );
		if( !statusDiv ) {
			statusDiv = document.createElement( 'div' );
			statusDiv.style.position = 'absolute';
			statusDiv.style.height = '1px';
			statusDiv.style.width = '1px';
			statusDiv.style.overflow ='hidden';
			statusDiv.style.clip = 'rect( 1px, 1px, 1px, 1px )';
			statusDiv.setAttribute( 'id', 'aria-status-div' );
			statusDiv.setAttribute( 'aria-live', 'polite' );
			statusDiv.setAttribute( 'aria-atomic','true' );
			dom.wrapper.appendChild( statusDiv );
		}
		return statusDiv;

	}

	/**
	 * Configures the presentation for printing to a static
	 * PDF.
	 */
	function setupPDF() {

		var slideSize = getComputedSlideSize( window.innerWidth, window.innerHeight );

		// Dimensions of the PDF pages
		var pageWidth = Math.floor( slideSize.width * ( 1 + config.margin ) ),
			pageHeight = Math.floor( slideSize.height * ( 1 + config.margin  ) );

		// Dimensions of slides within the pages
		var slideWidth = slideSize.width,
			slideHeight = slideSize.height;

		// Let the browser know what page size we want to print
		injectStyleSheet( '@page{size:'+ pageWidth +'px '+ pageHeight +'px; margin: 0;}' );

		// Limit the size of certain elements to the dimensions of the slide
		injectStyleSheet( '.reveal section>img, .reveal section>video, .reveal section>iframe{max-width: '+ slideWidth +'px; max-height:'+ slideHeight +'px}' );

		document.body.classList.add( 'print-pdf' );
		document.body.style.width = pageWidth + 'px';
		document.body.style.height = pageHeight + 'px';

		// Add each slide's index as attributes on itself, we need these
		// indices to generate slide numbers below
		toArray( dom.wrapper.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ) ).forEach( function( hslide, h ) {
			hslide.setAttribute( 'data-index-h', h );

			if( hslide.classList.contains( 'stack' ) ) {
				toArray( hslide.querySelectorAll( 'section' ) ).forEach( function( vslide, v ) {
					vslide.setAttribute( 'data-index-h', h );
					vslide.setAttribute( 'data-index-v', v );
				} );
			}
		} );

		// Slide and slide background layout
		toArray( dom.wrapper.querySelectorAll( SLIDES_SELECTOR ) ).forEach( function( slide ) {

			// Vertical stacks are not centred since their section
			// children will be
			if( slide.classList.contains( 'stack' ) === false ) {
				// Center the slide inside of the page, giving the slide some margin
				var left = ( pageWidth - slideWidth ) / 2,
					top = ( pageHeight - slideHeight ) / 2;

				var contentHeight = getAbsoluteHeight( slide );
				var numberOfPages = Math.max( Math.ceil( contentHeight / pageHeight ), 1 );

				// Center slides vertically
				if( numberOfPages === 1 && config.center || slide.classList.contains( 'center' ) ) {
					top = Math.max( ( pageHeight - contentHeight ) / 2, 0 );
				}

				// Position the slide inside of the page
				slide.style.left = left + 'px';
				slide.style.top = top + 'px';
				slide.style.width = slideWidth + 'px';

				// TODO Backgrounds need to be multiplied when the slide
				// stretches over multiple pages
				var background = slide.querySelector( '.slide-background' );
				if( background ) {
					background.style.width = pageWidth + 'px';
					background.style.height = ( pageHeight * numberOfPages ) + 'px';
					background.style.top = -top + 'px';
					background.style.left = -left + 'px';
				}

				// Inject notes if `showNotes` is enabled
				if( config.showNotes ) {
					var notes = getSlideNotes( slide );
					if( notes ) {
						var notesSpacing = 8;
						var notesElement = document.createElement( 'div' );
						notesElement.classList.add( 'speaker-notes' );
						notesElement.classList.add( 'speaker-notes-pdf' );
						notesElement.innerHTML = notes;
						notesElement.style.left = ( notesSpacing - left ) + 'px';
						notesElement.style.bottom = ( notesSpacing - top ) + 'px';
						notesElement.style.width = ( pageWidth - notesSpacing*2 ) + 'px';
						slide.appendChild( notesElement );
					}
				}

				// Inject slide numbers if `slideNumbers` are enabled
				if( config.slideNumber ) {
					var slideNumberH = parseInt( slide.getAttribute( 'data-index-h' ), 10 ) + 1,
						slideNumberV = parseInt( slide.getAttribute( 'data-index-v' ), 10 ) + 1;

					var numberElement = document.createElement( 'div' );
					numberElement.classList.add( 'slide-number' );
					numberElement.classList.add( 'slide-number-pdf' );
					numberElement.innerHTML = formatSlideNumber( slideNumberH, '.', slideNumberV );
					background.appendChild( numberElement );
				}
			}

		} );

		// Show all fragments
		toArray( dom.wrapper.querySelectorAll( SLIDES_SELECTOR + ' .fragment' ) ).forEach( function( fragment ) {
			fragment.classList.add( 'visible' );
		} );

	}

	/**
	 * This is an unfortunate necessity. Some actions – such as
	 * an input field being focused in an iframe or using the
	 * keyboard to expand text selection beyond the bounds of
	 * a slide – can trigger our content to be pushed out of view.
	 * This scrolling can not be prevented by hiding overflow in
	 * CSS (we already do) so we have to resort to repeatedly
	 * checking if the slides have been offset :(
	 */
	function setupScrollPrevention() {

		setInterval( function() {
			if( dom.wrapper.scrollTop !== 0 || dom.wrapper.scrollLeft !== 0 ) {
				dom.wrapper.scrollTop = 0;
				dom.wrapper.scrollLeft = 0;
			}
		}, 1000 );

	}

	/**
	 * Creates an HTML element and returns a reference to it.
	 * If the element already exists the existing instance will
	 * be returned.
	 */
	function createSingletonNode( container, tagname, classname, innerHTML ) {

		// Find all nodes matching the description
		var nodes = container.querySelectorAll( '.' + classname );

		// Check all matches to find one which is a direct child of
		// the specified container
		for( var i = 0; i < nodes.length; i++ ) {
			var testNode = nodes[i];
			if( testNode.parentNode === container ) {
				return testNode;
			}
		}

		// If no node was found, create it now
		var node = document.createElement( tagname );
		node.classList.add( classname );
		if( typeof innerHTML === 'string' ) {
			node.innerHTML = innerHTML;
		}
		container.appendChild( node );

		return node;

	}

	/**
	 * Creates the slide background elements and appends them
	 * to the background container. One element is created per
	 * slide no matter if the given slide has visible background.
	 */
	function createBackgrounds() {

		var printMode = isPrintingPDF();

		// Clear prior backgrounds
		dom.background.innerHTML = '';
		dom.background.classList.add( 'no-transition' );

		// Iterate over all horizontal slides
		toArray( dom.wrapper.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ) ).forEach( function( slideh ) {

			var backgroundStack;

			if( printMode ) {
				backgroundStack = createBackground( slideh, slideh );
			}
			else {
				backgroundStack = createBackground( slideh, dom.background );
			}

			// Iterate over all vertical slides
			toArray( slideh.querySelectorAll( 'section' ) ).forEach( function( slidev ) {

				if( printMode ) {
					createBackground( slidev, slidev );
				}
				else {
					createBackground( slidev, backgroundStack );
				}

				backgroundStack.classList.add( 'stack' );

			} );

		} );

		// Add parallax background if specified
		if( config.parallaxBackgroundImage ) {

			dom.background.style.backgroundImage = 'url("' + config.parallaxBackgroundImage + '")';
			dom.background.style.backgroundSize = config.parallaxBackgroundSize;

			// Make sure the below properties are set on the element - these properties are
			// needed for proper transitions to be set on the element via CSS. To remove
			// annoying background slide-in effect when the presentation starts, apply
			// these properties after short time delay
			setTimeout( function() {
				dom.wrapper.classList.add( 'has-parallax-background' );
			}, 1 );

		}
		else {

			dom.background.style.backgroundImage = '';
			dom.wrapper.classList.remove( 'has-parallax-background' );

		}

	}

	/**
	 * Creates a background for the given slide.
	 *
	 * @param {HTMLElement} slide
	 * @param {HTMLElement} container The element that the background
	 * should be appended to
	 */
	function createBackground( slide, container ) {

		var data = {
			background: slide.getAttribute( 'data-background' ),
			backgroundSize: slide.getAttribute( 'data-background-size' ),
			backgroundImage: slide.getAttribute( 'data-background-image' ),
			backgroundVideo: slide.getAttribute( 'data-background-video' ),
			backgroundIframe: slide.getAttribute( 'data-background-iframe' ),
			backgroundColor: slide.getAttribute( 'data-background-color' ),
			backgroundRepeat: slide.getAttribute( 'data-background-repeat' ),
			backgroundPosition: slide.getAttribute( 'data-background-position' ),
			backgroundTransition: slide.getAttribute( 'data-background-transition' )
		};

		var element = document.createElement( 'div' );

		// Carry over custom classes from the slide to the background
		element.className = 'slide-background ' + slide.className.replace( /present|past|future/, '' );

		if( data.background ) {
			// Auto-wrap image urls in url(...)
			if( /^(http|file|\/\/)/gi.test( data.background ) || /\.(svg|png|jpg|jpeg|gif|bmp)$/gi.test( data.background ) ) {
				slide.setAttribute( 'data-background-image', data.background );
			}
			else {
				element.style.background = data.background;
			}
		}

		// Create a hash for this combination of background settings.
		// This is used to determine when two slide backgrounds are
		// the same.
		if( data.background || data.backgroundColor || data.backgroundImage || data.backgroundVideo || data.backgroundIframe ) {
			element.setAttribute( 'data-background-hash', data.background +
															data.backgroundSize +
															data.backgroundImage +
															data.backgroundVideo +
															data.backgroundIframe +
															data.backgroundColor +
															data.backgroundRepeat +
															data.backgroundPosition +
															data.backgroundTransition );
		}

		// Additional and optional background properties
		if( data.backgroundSize ) element.style.backgroundSize = data.backgroundSize;
		if( data.backgroundColor ) element.style.backgroundColor = data.backgroundColor;
		if( data.backgroundRepeat ) element.style.backgroundRepeat = data.backgroundRepeat;
		if( data.backgroundPosition ) element.style.backgroundPosition = data.backgroundPosition;
		if( data.backgroundTransition ) element.setAttribute( 'data-background-transition', data.backgroundTransition );

		container.appendChild( element );

		// If backgrounds are being recreated, clear old classes
		slide.classList.remove( 'has-dark-background' );
		slide.classList.remove( 'has-light-background' );

		// If this slide has a background color, add a class that
		// signals if it is light or dark. If the slide has no background
		// color, no class will be set
		var computedBackgroundColor = window.getComputedStyle( element ).backgroundColor;
		if( computedBackgroundColor ) {
			var rgb = colorToRgb( computedBackgroundColor );

			// Ignore fully transparent backgrounds. Some browsers return
			// rgba(0,0,0,0) when reading the computed background color of
			// an element with no background
			if( rgb && rgb.a !== 0 ) {
				if( colorBrightness( computedBackgroundColor ) < 128 ) {
					slide.classList.add( 'has-dark-background' );
				}
				else {
					slide.classList.add( 'has-light-background' );
				}
			}
		}

		return element;

	}

	/**
	 * Registers a listener to postMessage events, this makes it
	 * possible to call all reveal.js API methods from another
	 * window. For example:
	 *
	 * revealWindow.postMessage( JSON.stringify({
	 *   method: 'slide',
	 *   args: [ 2 ]
	 * }), '*' );
	 */
	function setupPostMessage() {

		if( config.postMessage ) {
			window.addEventListener( 'message', function ( event ) {
				var data = event.data;

				// Make sure we're dealing with JSON
				if( typeof data === 'string' && data.charAt( 0 ) === '{' && data.charAt( data.length - 1 ) === '}' ) {
					data = JSON.parse( data );

					// Check if the requested method can be found
					if( data.method && typeof Reveal[data.method] === 'function' ) {
						Reveal[data.method].apply( Reveal, data.args );
					}
				}
			}, false );
		}

	}

	/**
	 * Applies the configuration settings from the config
	 * object. May be called multiple times.
	 */
	function configure( options ) {

		var numberOfSlides = dom.wrapper.querySelectorAll( SLIDES_SELECTOR ).length;

		dom.wrapper.classList.remove( config.transition );

		// New config options may be passed when this method
		// is invoked through the API after initialization
		if( typeof options === 'object' ) extend( config, options );

		// Force linear transition based on browser capabilities
		if( features.transforms3d === false ) config.transition = 'linear';

		dom.wrapper.classList.add( config.transition );

		dom.wrapper.setAttribute( 'data-transition-speed', config.transitionSpeed );
		dom.wrapper.setAttribute( 'data-background-transition', config.backgroundTransition );

		dom.controls.style.display = config.controls ? 'block' : 'none';
		dom.progress.style.display = config.progress ? 'block' : 'none';
		dom.slideNumber.style.display = config.slideNumber && !isPrintingPDF() ? 'block' : 'none';

		if( config.shuffle ) {
			shuffle();
		}

		if( config.rtl ) {
			dom.wrapper.classList.add( 'rtl' );
		}
		else {
			dom.wrapper.classList.remove( 'rtl' );
		}

		if( config.center ) {
			dom.wrapper.classList.add( 'center' );
		}
		else {
			dom.wrapper.classList.remove( 'center' );
		}

		// Exit the paused mode if it was configured off
		if( config.pause === false ) {
			resume();
		}

		if( config.showNotes ) {
			dom.speakerNotes.classList.add( 'visible' );
		}
		else {
			dom.speakerNotes.classList.remove( 'visible' );
		}

		if( config.mouseWheel ) {
			document.addEventListener( 'DOMMouseScroll', onDocumentMouseScroll, false ); // FF
			document.addEventListener( 'mousewheel', onDocumentMouseScroll, false );
		}
		else {
			document.removeEventListener( 'DOMMouseScroll', onDocumentMouseScroll, false ); // FF
			document.removeEventListener( 'mousewheel', onDocumentMouseScroll, false );
		}

		// Rolling 3D links
		if( config.rollingLinks ) {
			enableRollingLinks();
		}
		else {
			disableRollingLinks();
		}

		// Iframe link previews
		if( config.previewLinks ) {
			enablePreviewLinks();
		}
		else {
			disablePreviewLinks();
			enablePreviewLinks( '[data-preview-link]' );
		}

		// Remove existing auto-slide controls
		if( autoSlidePlayer ) {
			autoSlidePlayer.destroy();
			autoSlidePlayer = null;
		}

		// Generate auto-slide controls if needed
		if( numberOfSlides > 1 && config.autoSlide && config.autoSlideStoppable && features.canvas && features.requestAnimationFrame ) {
			autoSlidePlayer = new Playback( dom.wrapper, function() {
				return Math.min( Math.max( ( Date.now() - autoSlideStartTime ) / autoSlide, 0 ), 1 );
			} );

			autoSlidePlayer.on( 'click', onAutoSlidePlayerClick );
			autoSlidePaused = false;
		}

		// When fragments are turned off they should be visible
		if( config.fragments === false ) {
			toArray( dom.slides.querySelectorAll( '.fragment' ) ).forEach( function( element ) {
				element.classList.add( 'visible' );
				element.classList.remove( 'current-fragment' );
			} );
		}

		sync();

	}

	/**
	 * Binds all event listeners.
	 */
	function addEventListeners() {

		eventsAreBound = true;

		window.addEventListener( 'hashchange', onWindowHashChange, false );
		window.addEventListener( 'resize', onWindowResize, false );

		if( config.touch ) {
			dom.wrapper.addEventListener( 'touchstart', onTouchStart, false );
			dom.wrapper.addEventListener( 'touchmove', onTouchMove, false );
			dom.wrapper.addEventListener( 'touchend', onTouchEnd, false );

			// Support pointer-style touch interaction as well
			if( window.navigator.pointerEnabled ) {
				// IE 11 uses un-prefixed version of pointer events
				dom.wrapper.addEventListener( 'pointerdown', onPointerDown, false );
				dom.wrapper.addEventListener( 'pointermove', onPointerMove, false );
				dom.wrapper.addEventListener( 'pointerup', onPointerUp, false );
			}
			else if( window.navigator.msPointerEnabled ) {
				// IE 10 uses prefixed version of pointer events
				dom.wrapper.addEventListener( 'MSPointerDown', onPointerDown, false );
				dom.wrapper.addEventListener( 'MSPointerMove', onPointerMove, false );
				dom.wrapper.addEventListener( 'MSPointerUp', onPointerUp, false );
			}
		}

		if( config.keyboard ) {
			document.addEventListener( 'keydown', onDocumentKeyDown, false );
			document.addEventListener( 'keypress', onDocumentKeyPress, false );
		}

		if( config.progress && dom.progress ) {
			dom.progress.addEventListener( 'click', onProgressClicked, false );
		}

		if( config.focusBodyOnPageVisibilityChange ) {
			var visibilityChange;

			if( 'hidden' in document ) {
				visibilityChange = 'visibilitychange';
			}
			else if( 'msHidden' in document ) {
				visibilityChange = 'msvisibilitychange';
			}
			else if( 'webkitHidden' in document ) {
				visibilityChange = 'webkitvisibilitychange';
			}

			if( visibilityChange ) {
				document.addEventListener( visibilityChange, onPageVisibilityChange, false );
			}
		}

		// Listen to both touch and click events, in case the device
		// supports both
		var pointerEvents = [ 'touchstart', 'click' ];

		// Only support touch for Android, fixes double navigations in
		// stock browser
		if( UA.match( /android/gi ) ) {
			pointerEvents = [ 'touchstart' ];
		}

		pointerEvents.forEach( function( eventName ) {
			dom.controlsLeft.forEach( function( el ) { el.addEventListener( eventName, onNavigateLeftClicked, false ); } );
			dom.controlsRight.forEach( function( el ) { el.addEventListener( eventName, onNavigateRightClicked, false ); } );
			dom.controlsUp.forEach( function( el ) { el.addEventListener( eventName, onNavigateUpClicked, false ); } );
			dom.controlsDown.forEach( function( el ) { el.addEventListener( eventName, onNavigateDownClicked, false ); } );
			dom.controlsPrev.forEach( function( el ) { el.addEventListener( eventName, onNavigatePrevClicked, false ); } );
			dom.controlsNext.forEach( function( el ) { el.addEventListener( eventName, onNavigateNextClicked, false ); } );
		} );

	}

	/**
	 * Unbinds all event listeners.
	 */
	function removeEventListeners() {

		eventsAreBound = false;

		document.removeEventListener( 'keydown', onDocumentKeyDown, false );
		document.removeEventListener( 'keypress', onDocumentKeyPress, false );
		window.removeEventListener( 'hashchange', onWindowHashChange, false );
		window.removeEventListener( 'resize', onWindowResize, false );

		dom.wrapper.removeEventListener( 'touchstart', onTouchStart, false );
		dom.wrapper.removeEventListener( 'touchmove', onTouchMove, false );
		dom.wrapper.removeEventListener( 'touchend', onTouchEnd, false );

		// IE11
		if( window.navigator.pointerEnabled ) {
			dom.wrapper.removeEventListener( 'pointerdown', onPointerDown, false );
			dom.wrapper.removeEventListener( 'pointermove', onPointerMove, false );
			dom.wrapper.removeEventListener( 'pointerup', onPointerUp, false );
		}
		// IE10
		else if( window.navigator.msPointerEnabled ) {
			dom.wrapper.removeEventListener( 'MSPointerDown', onPointerDown, false );
			dom.wrapper.removeEventListener( 'MSPointerMove', onPointerMove, false );
			dom.wrapper.removeEventListener( 'MSPointerUp', onPointerUp, false );
		}

		if ( config.progress && dom.progress ) {
			dom.progress.removeEventListener( 'click', onProgressClicked, false );
		}

		[ 'touchstart', 'click' ].forEach( function( eventName ) {
			dom.controlsLeft.forEach( function( el ) { el.removeEventListener( eventName, onNavigateLeftClicked, false ); } );
			dom.controlsRight.forEach( function( el ) { el.removeEventListener( eventName, onNavigateRightClicked, false ); } );
			dom.controlsUp.forEach( function( el ) { el.removeEventListener( eventName, onNavigateUpClicked, false ); } );
			dom.controlsDown.forEach( function( el ) { el.removeEventListener( eventName, onNavigateDownClicked, false ); } );
			dom.controlsPrev.forEach( function( el ) { el.removeEventListener( eventName, onNavigatePrevClicked, false ); } );
			dom.controlsNext.forEach( function( el ) { el.removeEventListener( eventName, onNavigateNextClicked, false ); } );
		} );

	}

	/**
	 * Extend object a with the properties of object b.
	 * If there's a conflict, object b takes precedence.
	 */
	function extend( a, b ) {

		for( var i in b ) {
			a[ i ] = b[ i ];
		}

	}

	/**
	 * Converts the target object to an array.
	 */
	function toArray( o ) {

		return Array.prototype.slice.call( o );

	}

	/**
	 * Utility for deserializing a value.
	 */
	function deserialize( value ) {

		if( typeof value === 'string' ) {
			if( value === 'null' ) return null;
			else if( value === 'true' ) return true;
			else if( value === 'false' ) return false;
			else if( value.match( /^\d+$/ ) ) return parseFloat( value );
		}

		return value;

	}

	/**
	 * Measures the distance in pixels between point a
	 * and point b.
	 *
	 * @param {Object} a point with x/y properties
	 * @param {Object} b point with x/y properties
	 */
	function distanceBetween( a, b ) {

		var dx = a.x - b.x,
			dy = a.y - b.y;

		return Math.sqrt( dx*dx + dy*dy );

	}

	/**
	 * Applies a CSS transform to the target element.
	 */
	function transformElement( element, transform ) {

		element.style.WebkitTransform = transform;
		element.style.MozTransform = transform;
		element.style.msTransform = transform;
		element.style.transform = transform;

	}

	/**
	 * Applies CSS transforms to the slides container. The container
	 * is transformed from two separate sources: layout and the overview
	 * mode.
	 */
	function transformSlides( transforms ) {

		// Pick up new transforms from arguments
		if( typeof transforms.layout === 'string' ) slidesTransform.layout = transforms.layout;
		if( typeof transforms.overview === 'string' ) slidesTransform.overview = transforms.overview;

		// Apply the transforms to the slides container
		if( slidesTransform.layout ) {
			transformElement( dom.slides, slidesTransform.layout + ' ' + slidesTransform.overview );
		}
		else {
			transformElement( dom.slides, slidesTransform.overview );
		}

	}

	/**
	 * Injects the given CSS styles into the DOM.
	 */
	function injectStyleSheet( value ) {

		var tag = document.createElement( 'style' );
		tag.type = 'text/css';
		if( tag.styleSheet ) {
			tag.styleSheet.cssText = value;
		}
		else {
			tag.appendChild( document.createTextNode( value ) );
		}
		document.getElementsByTagName( 'head' )[0].appendChild( tag );

	}

	/**
	 * Converts various color input formats to an {r:0,g:0,b:0} object.
	 *
	 * @param {String} color The string representation of a color,
	 * the following formats are supported:
	 * - #000
	 * - #000000
	 * - rgb(0,0,0)
	 */
	function colorToRgb( color ) {

		var hex3 = color.match( /^#([0-9a-f]{3})$/i );
		if( hex3 && hex3[1] ) {
			hex3 = hex3[1];
			return {
				r: parseInt( hex3.charAt( 0 ), 16 ) * 0x11,
				g: parseInt( hex3.charAt( 1 ), 16 ) * 0x11,
				b: parseInt( hex3.charAt( 2 ), 16 ) * 0x11
			};
		}

		var hex6 = color.match( /^#([0-9a-f]{6})$/i );
		if( hex6 && hex6[1] ) {
			hex6 = hex6[1];
			return {
				r: parseInt( hex6.substr( 0, 2 ), 16 ),
				g: parseInt( hex6.substr( 2, 2 ), 16 ),
				b: parseInt( hex6.substr( 4, 2 ), 16 )
			};
		}

		var rgb = color.match( /^rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i );
		if( rgb ) {
			return {
				r: parseInt( rgb[1], 10 ),
				g: parseInt( rgb[2], 10 ),
				b: parseInt( rgb[3], 10 )
			};
		}

		var rgba = color.match( /^rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\,\s*([\d]+|[\d]*.[\d]+)\s*\)$/i );
		if( rgba ) {
			return {
				r: parseInt( rgba[1], 10 ),
				g: parseInt( rgba[2], 10 ),
				b: parseInt( rgba[3], 10 ),
				a: parseFloat( rgba[4] )
			};
		}

		return null;

	}

	/**
	 * Calculates brightness on a scale of 0-255.
	 *
	 * @param color See colorStringToRgb for supported formats.
	 */
	function colorBrightness( color ) {

		if( typeof color === 'string' ) color = colorToRgb( color );

		if( color ) {
			return ( color.r * 299 + color.g * 587 + color.b * 114 ) / 1000;
		}

		return null;

	}

	/**
	 * Retrieves the height of the given element by looking
	 * at the position and height of its immediate children.
	 */
	function getAbsoluteHeight( element ) {

		var height = 0;

		if( element ) {
			var absoluteChildren = 0;

			toArray( element.childNodes ).forEach( function( child ) {

				if( typeof child.offsetTop === 'number' && child.style ) {
					// Count # of abs children
					if( window.getComputedStyle( child ).position === 'absolute' ) {
						absoluteChildren += 1;
					}

					height = Math.max( height, child.offsetTop + child.offsetHeight );
				}

			} );

			// If there are no absolute children, use offsetHeight
			if( absoluteChildren === 0 ) {
				height = element.offsetHeight;
			}

		}

		return height;

	}

	/**
	 * Returns the remaining height within the parent of the
	 * target element.
	 *
	 * remaining height = [ configured parent height ] - [ current parent height ]
	 */
	function getRemainingHeight( element, height ) {

		height = height || 0;

		if( element ) {
			var newHeight, oldHeight = element.style.height;

			// Change the .stretch element height to 0 in order find the height of all
			// the other elements
			element.style.height = '0px';
			newHeight = height - element.parentNode.offsetHeight;

			// Restore the old height, just in case
			element.style.height = oldHeight + 'px';

			return newHeight;
		}

		return height;

	}

	/**
	 * Checks if this instance is being used to print a PDF.
	 */
	function isPrintingPDF() {

		return ( /print-pdf/gi ).test( window.location.search );

	}

	/**
	 * Hides the address bar if we're on a mobile device.
	 */
	function hideAddressBar() {

		if( config.hideAddressBar && isMobileDevice ) {
			// Events that should trigger the address bar to hide
			window.addEventListener( 'load', removeAddressBar, false );
			window.addEventListener( 'orientationchange', removeAddressBar, false );
		}

	}

	/**
	 * Causes the address bar to hide on mobile devices,
	 * more vertical space ftw.
	 */
	function removeAddressBar() {

		setTimeout( function() {
			window.scrollTo( 0, 1 );
		}, 10 );

	}

	/**
	 * Dispatches an event of the specified type from the
	 * reveal DOM element.
	 */
	function dispatchEvent( type, args ) {

		var event = document.createEvent( 'HTMLEvents', 1, 2 );
		event.initEvent( type, true, true );
		extend( event, args );
		dom.wrapper.dispatchEvent( event );

		// If we're in an iframe, post each reveal.js event to the
		// parent window. Used by the notes plugin
		if( config.postMessageEvents && window.parent !== window.self ) {
			window.parent.postMessage( JSON.stringify({ namespace: 'reveal', eventName: type, state: getState() }), '*' );
		}

	}

	/**
	 * Wrap all links in 3D goodness.
	 */
	function enableRollingLinks() {

		if( features.transforms3d && !( 'msPerspective' in document.body.style ) ) {
			var anchors = dom.wrapper.querySelectorAll( SLIDES_SELECTOR + ' a' );

			for( var i = 0, len = anchors.length; i < len; i++ ) {
				var anchor = anchors[i];

				if( anchor.textContent && !anchor.querySelector( '*' ) && ( !anchor.className || !anchor.classList.contains( anchor, 'roll' ) ) ) {
					var span = document.createElement('span');
					span.setAttribute('data-title', anchor.text);
					span.innerHTML = anchor.innerHTML;

					anchor.classList.add( 'roll' );
					anchor.innerHTML = '';
					anchor.appendChild(span);
				}
			}
		}

	}

	/**
	 * Unwrap all 3D links.
	 */
	function disableRollingLinks() {

		var anchors = dom.wrapper.querySelectorAll( SLIDES_SELECTOR + ' a.roll' );

		for( var i = 0, len = anchors.length; i < len; i++ ) {
			var anchor = anchors[i];
			var span = anchor.querySelector( 'span' );

			if( span ) {
				anchor.classList.remove( 'roll' );
				anchor.innerHTML = span.innerHTML;
			}
		}

	}

	/**
	 * Bind preview frame links.
	 */
	function enablePreviewLinks( selector ) {

		var anchors = toArray( document.querySelectorAll( selector ? selector : 'a' ) );

		anchors.forEach( function( element ) {
			if( /^(http|www)/gi.test( element.getAttribute( 'href' ) ) ) {
				element.addEventListener( 'click', onPreviewLinkClicked, false );
			}
		} );

	}

	/**
	 * Unbind preview frame links.
	 */
	function disablePreviewLinks() {

		var anchors = toArray( document.querySelectorAll( 'a' ) );

		anchors.forEach( function( element ) {
			if( /^(http|www)/gi.test( element.getAttribute( 'href' ) ) ) {
				element.removeEventListener( 'click', onPreviewLinkClicked, false );
			}
		} );

	}

	/**
	 * Opens a preview window for the target URL.
	 */
	function showPreview( url ) {

		closeOverlay();

		dom.overlay = document.createElement( 'div' );
		dom.overlay.classList.add( 'overlay' );
		dom.overlay.classList.add( 'overlay-preview' );
		dom.wrapper.appendChild( dom.overlay );

		dom.overlay.innerHTML = [
			'<header>',
				'<a class="close" href="#"><span class="icon"></span></a>',
				'<a class="external" href="'+ url +'" target="_blank"><span class="icon"></span></a>',
			'</header>',
			'<div class="spinner"></div>',
			'<div class="viewport">',
				'<iframe src="'+ url +'"></iframe>',
			'</div>'
		].join('');

		dom.overlay.querySelector( 'iframe' ).addEventListener( 'load', function( event ) {
			dom.overlay.classList.add( 'loaded' );
		}, false );

		dom.overlay.querySelector( '.close' ).addEventListener( 'click', function( event ) {
			closeOverlay();
			event.preventDefault();
		}, false );

		dom.overlay.querySelector( '.external' ).addEventListener( 'click', function( event ) {
			closeOverlay();
		}, false );

		setTimeout( function() {
			dom.overlay.classList.add( 'visible' );
		}, 1 );

	}

	/**
	 * Opens a overlay window with help material.
	 */
	function showHelp() {

		if( config.help ) {

			closeOverlay();

			dom.overlay = document.createElement( 'div' );
			dom.overlay.classList.add( 'overlay' );
			dom.overlay.classList.add( 'overlay-help' );
			dom.wrapper.appendChild( dom.overlay );

			var html = '<p class="title">Keyboard Shortcuts</p><br/>';

			html += '<table><th>KEY</th><th>ACTION</th>';
			for( var key in keyboardShortcuts ) {
				html += '<tr><td>' + key + '</td><td>' + keyboardShortcuts[ key ] + '</td></tr>';
			}

			html += '</table>';

			dom.overlay.innerHTML = [
				'<header>',
					'<a class="close" href="#"><span class="icon"></span></a>',
				'</header>',
				'<div class="viewport">',
					'<div class="viewport-inner">'+ html +'</div>',
				'</div>'
			].join('');

			dom.overlay.querySelector( '.close' ).addEventListener( 'click', function( event ) {
				closeOverlay();
				event.preventDefault();
			}, false );

			setTimeout( function() {
				dom.overlay.classList.add( 'visible' );
			}, 1 );

		}

	}

	/**
	 * Closes any currently open overlay.
	 */
	function closeOverlay() {

		if( dom.overlay ) {
			dom.overlay.parentNode.removeChild( dom.overlay );
			dom.overlay = null;
		}

	}

	/**
	 * Applies JavaScript-controlled layout rules to the
	 * presentation.
	 */
	function layout() {

		if( dom.wrapper && !isPrintingPDF() ) {

			var size = getComputedSlideSize();

			var slidePadding = 20; // TODO Dig this out of DOM

			// Layout the contents of the slides
			layoutSlideContents( config.width, config.height, slidePadding );

			dom.slides.style.width = size.width + 'px';
			dom.slides.style.height = size.height + 'px';

			// Determine scale of content to fit within available space
			scale = Math.min( size.presentationWidth / size.width, size.presentationHeight / size.height );

			// Respect max/min scale settings
			scale = Math.max( scale, config.minScale );
			scale = Math.min( scale, config.maxScale );

			// Don't apply any scaling styles if scale is 1
			if( scale === 1 ) {
				dom.slides.style.zoom = '';
				dom.slides.style.left = '';
				dom.slides.style.top = '';
				dom.slides.style.bottom = '';
				dom.slides.style.right = '';
				transformSlides( { layout: '' } );
			}
			else {
				// Prefer zoom for scaling up so that content remains crisp.
				// Don't use zoom to scale down since that can lead to shifts
				// in text layout/line breaks.
				if( scale > 1 && features.zoom ) {
					dom.slides.style.zoom = scale;
					dom.slides.style.left = '';
					dom.slides.style.top = '';
					dom.slides.style.bottom = '';
					dom.slides.style.right = '';
					transformSlides( { layout: '' } );
				}
				// Apply scale transform as a fallback
				else {
					dom.slides.style.zoom = '';
					dom.slides.style.left = '50%';
					dom.slides.style.top = '50%';
					dom.slides.style.bottom = 'auto';
					dom.slides.style.right = 'auto';
					transformSlides( { layout: 'translate(-50%, -50%) scale('+ scale +')' } );
				}
			}

			// Select all slides, vertical and horizontal
			var slides = toArray( dom.wrapper.querySelectorAll( SLIDES_SELECTOR ) );

			for( var i = 0, len = slides.length; i < len; i++ ) {
				var slide = slides[ i ];

				// Don't bother updating invisible slides
				if( slide.style.display === 'none' ) {
					continue;
				}

				if( config.center || slide.classList.contains( 'center' ) ) {
					// Vertical stacks are not centred since their section
					// children will be
					if( slide.classList.contains( 'stack' ) ) {
						slide.style.top = 0;
					}
					else {
						slide.style.top = Math.max( ( ( size.height - getAbsoluteHeight( slide ) ) / 2 ) - slidePadding, 0 ) + 'px';
					}
				}
				else {
					slide.style.top = '';
				}

			}

			updateProgress();
			updateParallax();

		}

	}

	/**
	 * Applies layout logic to the contents of all slides in
	 * the presentation.
	 */
	function layoutSlideContents( width, height, padding ) {

		// Handle sizing of elements with the 'stretch' class
		toArray( dom.slides.querySelectorAll( 'section > .stretch' ) ).forEach( function( element ) {

			// Determine how much vertical space we can use
			var remainingHeight = getRemainingHeight( element, height );

			// Consider the aspect ratio of media elements
			if( /(img|video)/gi.test( element.nodeName ) ) {
				var nw = element.naturalWidth || element.videoWidth,
					nh = element.naturalHeight || element.videoHeight;

				var es = Math.min( width / nw, remainingHeight / nh );

				element.style.width = ( nw * es ) + 'px';
				element.style.height = ( nh * es ) + 'px';

			}
			else {
				element.style.width = width + 'px';
				element.style.height = remainingHeight + 'px';
			}

		} );

	}

	/**
	 * Calculates the computed pixel size of our slides. These
	 * values are based on the width and height configuration
	 * options.
	 */
	function getComputedSlideSize( presentationWidth, presentationHeight ) {

		var size = {
			// Slide size
			width: config.width,
			height: config.height,

			// Presentation size
			presentationWidth: presentationWidth || dom.wrapper.offsetWidth,
			presentationHeight: presentationHeight || dom.wrapper.offsetHeight
		};

		// Reduce available space by margin
		size.presentationWidth -= ( size.presentationWidth * config.margin );
		size.presentationHeight -= ( size.presentationHeight * config.margin );

		// Slide width may be a percentage of available width
		if( typeof size.width === 'string' && /%$/.test( size.width ) ) {
			size.width = parseInt( size.width, 10 ) / 100 * size.presentationWidth;
		}

		// Slide height may be a percentage of available height
		if( typeof size.height === 'string' && /%$/.test( size.height ) ) {
			size.height = parseInt( size.height, 10 ) / 100 * size.presentationHeight;
		}

		return size;

	}

	/**
	 * Stores the vertical index of a stack so that the same
	 * vertical slide can be selected when navigating to and
	 * from the stack.
	 *
	 * @param {HTMLElement} stack The vertical stack element
	 * @param {int} v Index to memorize
	 */
	function setPreviousVerticalIndex( stack, v ) {

		if( typeof stack === 'object' && typeof stack.setAttribute === 'function' ) {
			stack.setAttribute( 'data-previous-indexv', v || 0 );
		}

	}

	/**
	 * Retrieves the vertical index which was stored using
	 * #setPreviousVerticalIndex() or 0 if no previous index
	 * exists.
	 *
	 * @param {HTMLElement} stack The vertical stack element
	 */
	function getPreviousVerticalIndex( stack ) {

		if( typeof stack === 'object' && typeof stack.setAttribute === 'function' && stack.classList.contains( 'stack' ) ) {
			// Prefer manually defined start-indexv
			var attributeName = stack.hasAttribute( 'data-start-indexv' ) ? 'data-start-indexv' : 'data-previous-indexv';

			return parseInt( stack.getAttribute( attributeName ) || 0, 10 );
		}

		return 0;

	}

	/**
	 * Displays the overview of slides (quick nav) by scaling
	 * down and arranging all slide elements.
	 */
	function activateOverview() {

		// Only proceed if enabled in config
		if( config.overview && !isOverview() ) {

			overview = true;

			dom.wrapper.classList.add( 'overview' );
			dom.wrapper.classList.remove( 'overview-deactivating' );

			if( features.overviewTransitions ) {
				setTimeout( function() {
					dom.wrapper.classList.add( 'overview-animated' );
				}, 1 );
			}

			// Don't auto-slide while in overview mode
			cancelAutoSlide();

			// Move the backgrounds element into the slide container to
			// that the same scaling is applied
			dom.slides.appendChild( dom.background );

			// Clicking on an overview slide navigates to it
			toArray( dom.wrapper.querySelectorAll( SLIDES_SELECTOR ) ).forEach( function( slide ) {
				if( !slide.classList.contains( 'stack' ) ) {
					slide.addEventListener( 'click', onOverviewSlideClicked, true );
				}
			} );

			// Calculate slide sizes
			var margin = 70;
			var slideSize = getComputedSlideSize();
			overviewSlideWidth = slideSize.width + margin;
			overviewSlideHeight = slideSize.height + margin;

			// Reverse in RTL mode
			if( config.rtl ) {
				overviewSlideWidth = -overviewSlideWidth;
			}

			updateSlidesVisibility();
			layoutOverview();
			updateOverview();

			layout();

			// Notify observers of the overview showing
			dispatchEvent( 'overviewshown', {
				'indexh': indexh,
				'indexv': indexv,
				'currentSlide': currentSlide
			} );

		}

	}

	/**
	 * Uses CSS transforms to position all slides in a grid for
	 * display inside of the overview mode.
	 */
	function layoutOverview() {

		// Layout slides
		toArray( dom.wrapper.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ) ).forEach( function( hslide, h ) {
			hslide.setAttribute( 'data-index-h', h );
			transformElement( hslide, 'translate3d(' + ( h * overviewSlideWidth ) + 'px, 0, 0)' );

			if( hslide.classList.contains( 'stack' ) ) {

				toArray( hslide.querySelectorAll( 'section' ) ).forEach( function( vslide, v ) {
					vslide.setAttribute( 'data-index-h', h );
					vslide.setAttribute( 'data-index-v', v );

					transformElement( vslide, 'translate3d(0, ' + ( v * overviewSlideHeight ) + 'px, 0)' );
				} );

			}
		} );

		// Layout slide backgrounds
		toArray( dom.background.childNodes ).forEach( function( hbackground, h ) {
			transformElement( hbackground, 'translate3d(' + ( h * overviewSlideWidth ) + 'px, 0, 0)' );

			toArray( hbackground.querySelectorAll( '.slide-background' ) ).forEach( function( vbackground, v ) {
				transformElement( vbackground, 'translate3d(0, ' + ( v * overviewSlideHeight ) + 'px, 0)' );
			} );
		} );

	}

	/**
	 * Moves the overview viewport to the current slides.
	 * Called each time the current slide changes.
	 */
	function updateOverview() {

		transformSlides( {
			overview: [
				'translateX('+ ( -indexh * overviewSlideWidth ) +'px)',
				'translateY('+ ( -indexv * overviewSlideHeight ) +'px)',
				'translateZ('+ ( window.innerWidth < 400 ? -1000 : -2500 ) +'px)'
			].join( ' ' )
		} );

	}

	/**
	 * Exits the slide overview and enters the currently
	 * active slide.
	 */
	function deactivateOverview() {

		// Only proceed if enabled in config
		if( config.overview ) {

			overview = false;

			dom.wrapper.classList.remove( 'overview' );
			dom.wrapper.classList.remove( 'overview-animated' );

			// Temporarily add a class so that transitions can do different things
			// depending on whether they are exiting/entering overview, or just
			// moving from slide to slide
			dom.wrapper.classList.add( 'overview-deactivating' );

			setTimeout( function () {
				dom.wrapper.classList.remove( 'overview-deactivating' );
			}, 1 );

			// Move the background element back out
			dom.wrapper.appendChild( dom.background );

			// Clean up changes made to slides
			toArray( dom.wrapper.querySelectorAll( SLIDES_SELECTOR ) ).forEach( function( slide ) {
				transformElement( slide, '' );

				slide.removeEventListener( 'click', onOverviewSlideClicked, true );
			} );

			// Clean up changes made to backgrounds
			toArray( dom.background.querySelectorAll( '.slide-background' ) ).forEach( function( background ) {
				transformElement( background, '' );
			} );

			transformSlides( { overview: '' } );

			slide( indexh, indexv );

			layout();

			cueAutoSlide();

			// Notify observers of the overview hiding
			dispatchEvent( 'overviewhidden', {
				'indexh': indexh,
				'indexv': indexv,
				'currentSlide': currentSlide
			} );

		}
	}

	/**
	 * Toggles the slide overview mode on and off.
	 *
	 * @param {Boolean} override Optional flag which overrides the
	 * toggle logic and forcibly sets the desired state. True means
	 * overview is open, false means it's closed.
	 */
	function toggleOverview( override ) {

		if( typeof override === 'boolean' ) {
			override ? activateOverview() : deactivateOverview();
		}
		else {
			isOverview() ? deactivateOverview() : activateOverview();
		}

	}

	/**
	 * Checks if the overview is currently active.
	 *
	 * @return {Boolean} true if the overview is active,
	 * false otherwise
	 */
	function isOverview() {

		return overview;

	}

	/**
	 * Checks if the current or specified slide is vertical
	 * (nested within another slide).
	 *
	 * @param {HTMLElement} slide [optional] The slide to check
	 * orientation of
	 */
	function isVerticalSlide( slide ) {

		// Prefer slide argument, otherwise use current slide
		slide = slide ? slide : currentSlide;

		return slide && slide.parentNode && !!slide.parentNode.nodeName.match( /section/i );

	}

	/**
	 * Handling the fullscreen functionality via the fullscreen API
	 *
	 * @see http://fullscreen.spec.whatwg.org/
	 * @see https://developer.mozilla.org/en-US/docs/DOM/Using_fullscreen_mode
	 */
	function enterFullscreen() {

		var element = document.body;

		// Check which implementation is available
		var requestMethod = element.requestFullScreen ||
							element.webkitRequestFullscreen ||
							element.webkitRequestFullScreen ||
							element.mozRequestFullScreen ||
							element.msRequestFullscreen;

		if( requestMethod ) {
			requestMethod.apply( element );
		}

	}

	/**
	 * Enters the paused mode which fades everything on screen to
	 * black.
	 */
	function pause() {

		if( config.pause ) {
			var wasPaused = dom.wrapper.classList.contains( 'paused' );

			cancelAutoSlide();
			dom.wrapper.classList.add( 'paused' );

			if( wasPaused === false ) {
				dispatchEvent( 'paused' );
			}
		}

	}

	/**
	 * Exits from the paused mode.
	 */
	function resume() {

		var wasPaused = dom.wrapper.classList.contains( 'paused' );
		dom.wrapper.classList.remove( 'paused' );

		cueAutoSlide();

		if( wasPaused ) {
			dispatchEvent( 'resumed' );
		}

	}

	/**
	 * Toggles the paused mode on and off.
	 */
	function togglePause( override ) {

		if( typeof override === 'boolean' ) {
			override ? pause() : resume();
		}
		else {
			isPaused() ? resume() : pause();
		}

	}

	/**
	 * Checks if we are currently in the paused mode.
	 */
	function isPaused() {

		return dom.wrapper.classList.contains( 'paused' );

	}

	/**
	 * Toggles the auto slide mode on and off.
	 *
	 * @param {Boolean} override Optional flag which sets the desired state.
	 * True means autoplay starts, false means it stops.
	 */

	function toggleAutoSlide( override ) {

		if( typeof override === 'boolean' ) {
			override ? resumeAutoSlide() : pauseAutoSlide();
		}

		else {
			autoSlidePaused ? resumeAutoSlide() : pauseAutoSlide();
		}

	}

	/**
	 * Checks if the auto slide mode is currently on.
	 */
	function isAutoSliding() {

		return !!( autoSlide && !autoSlidePaused );

	}

	/**
	 * Steps from the current point in the presentation to the
	 * slide which matches the specified horizontal and vertical
	 * indices.
	 *
	 * @param {int} h Horizontal index of the target slide
	 * @param {int} v Vertical index of the target slide
	 * @param {int} f Optional index of a fragment within the
	 * target slide to activate
	 * @param {int} o Optional origin for use in multimaster environments
	 */
	function slide( h, v, f, o ) {

		// Remember where we were at before
		previousSlide = currentSlide;

		// Query all horizontal slides in the deck
		var horizontalSlides = dom.wrapper.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR );

		// If no vertical index is specified and the upcoming slide is a
		// stack, resume at its previous vertical index
		if( v === undefined && !isOverview() ) {
			v = getPreviousVerticalIndex( horizontalSlides[ h ] );
		}

		// If we were on a vertical stack, remember what vertical index
		// it was on so we can resume at the same position when returning
		if( previousSlide && previousSlide.parentNode && previousSlide.parentNode.classList.contains( 'stack' ) ) {
			setPreviousVerticalIndex( previousSlide.parentNode, indexv );
		}

		// Remember the state before this slide
		var stateBefore = state.concat();

		// Reset the state array
		state.length = 0;

		var indexhBefore = indexh || 0,
			indexvBefore = indexv || 0;

		// Activate and transition to the new slide
		indexh = updateSlides( HORIZONTAL_SLIDES_SELECTOR, h === undefined ? indexh : h );
		indexv = updateSlides( VERTICAL_SLIDES_SELECTOR, v === undefined ? indexv : v );

		// Update the visibility of slides now that the indices have changed
		updateSlidesVisibility();

		layout();

		// Apply the new state
		stateLoop: for( var i = 0, len = state.length; i < len; i++ ) {
			// Check if this state existed on the previous slide. If it
			// did, we will avoid adding it repeatedly
			for( var j = 0; j < stateBefore.length; j++ ) {
				if( stateBefore[j] === state[i] ) {
					stateBefore.splice( j, 1 );
					continue stateLoop;
				}
			}

			document.documentElement.classList.add( state[i] );

			// Dispatch custom event matching the state's name
			dispatchEvent( state[i] );
		}

		// Clean up the remains of the previous state
		while( stateBefore.length ) {
			document.documentElement.classList.remove( stateBefore.pop() );
		}

		// Update the overview if it's currently active
		if( isOverview() ) {
			updateOverview();
		}

		// Find the current horizontal slide and any possible vertical slides
		// within it
		var currentHorizontalSlide = horizontalSlides[ indexh ],
			currentVerticalSlides = currentHorizontalSlide.querySelectorAll( 'section' );

		// Store references to the previous and current slides
		currentSlide = currentVerticalSlides[ indexv ] || currentHorizontalSlide;

		// Show fragment, if specified
		if( typeof f !== 'undefined' ) {
			navigateFragment( f );
		}

		// Dispatch an event if the slide changed
		var slideChanged = ( indexh !== indexhBefore || indexv !== indexvBefore );
		if( slideChanged ) {
			dispatchEvent( 'slidechanged', {
				'indexh': indexh,
				'indexv': indexv,
				'previousSlide': previousSlide,
				'currentSlide': currentSlide,
				'origin': o
			} );
		}
		else {
			// Ensure that the previous slide is never the same as the current
			previousSlide = null;
		}

		// Solves an edge case where the previous slide maintains the
		// 'present' class when navigating between adjacent vertical
		// stacks
		if( previousSlide ) {
			previousSlide.classList.remove( 'present' );
			previousSlide.setAttribute( 'aria-hidden', 'true' );

			// Reset all slides upon navigate to home
			// Issue: #285
			if ( dom.wrapper.querySelector( HOME_SLIDE_SELECTOR ).classList.contains( 'present' ) ) {
				// Launch async task
				setTimeout( function () {
					var slides = toArray( dom.wrapper.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR + '.stack') ), i;
					for( i in slides ) {
						if( slides[i] ) {
							// Reset stack
							setPreviousVerticalIndex( slides[i], 0 );
						}
					}
				}, 0 );
			}
		}

		// Handle embedded content
		if( slideChanged || !previousSlide ) {
			stopEmbeddedContent( previousSlide );
			startEmbeddedContent( currentSlide );
		}

		// Announce the current slide contents, for screen readers
		dom.statusDiv.textContent = currentSlide.textContent;

		updateControls();
		updateProgress();
		updateBackground();
		updateParallax();
		updateSlideNumber();
		updateNotes();

		// Update the URL hash
		writeURL();

		cueAutoSlide();

	}

	/**
	 * Syncs the presentation with the current DOM. Useful
	 * when new slides or control elements are added or when
	 * the configuration has changed.
	 */
	function sync() {

		// Subscribe to input
		removeEventListeners();
		addEventListeners();

		// Force a layout to make sure the current config is accounted for
		layout();

		// Reflect the current autoSlide value
		autoSlide = config.autoSlide;

		// Start auto-sliding if it's enabled
		cueAutoSlide();

		// Re-create the slide backgrounds
		createBackgrounds();

		// Write the current hash to the URL
		writeURL();

		sortAllFragments();

		updateControls();
		updateProgress();
		updateBackground( true );
		updateSlideNumber();
		updateSlidesVisibility();
		updateNotes();

		formatEmbeddedContent();
		startEmbeddedContent( currentSlide );

		if( isOverview() ) {
			layoutOverview();
		}

	}

	/**
	 * Resets all vertical slides so that only the first
	 * is visible.
	 */
	function resetVerticalSlides() {

		var horizontalSlides = toArray( dom.wrapper.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ) );
		horizontalSlides.forEach( function( horizontalSlide ) {

			var verticalSlides = toArray( horizontalSlide.querySelectorAll( 'section' ) );
			verticalSlides.forEach( function( verticalSlide, y ) {

				if( y > 0 ) {
					verticalSlide.classList.remove( 'present' );
					verticalSlide.classList.remove( 'past' );
					verticalSlide.classList.add( 'future' );
					verticalSlide.setAttribute( 'aria-hidden', 'true' );
				}

			} );

		} );

	}

	/**
	 * Sorts and formats all of fragments in the
	 * presentation.
	 */
	function sortAllFragments() {

		var horizontalSlides = toArray( dom.wrapper.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ) );
		horizontalSlides.forEach( function( horizontalSlide ) {

			var verticalSlides = toArray( horizontalSlide.querySelectorAll( 'section' ) );
			verticalSlides.forEach( function( verticalSlide, y ) {

				sortFragments( verticalSlide.querySelectorAll( '.fragment' ) );

			} );

			if( verticalSlides.length === 0 ) sortFragments( horizontalSlide.querySelectorAll( '.fragment' ) );

		} );

	}

	/**
	 * Randomly shuffles all slides in the deck.
	 */
	function shuffle() {

		var slides = toArray( dom.wrapper.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ) );

		slides.forEach( function( slide ) {

			// Insert this slide next to another random slide. This may
			// cause the slide to insert before itself but that's fine.
			dom.slides.insertBefore( slide, slides[ Math.floor( Math.random() * slides.length ) ] );

		} );

	}

	/**
	 * Updates one dimension of slides by showing the slide
	 * with the specified index.
	 *
	 * @param {String} selector A CSS selector that will fetch
	 * the group of slides we are working with
	 * @param {Number} index The index of the slide that should be
	 * shown
	 *
	 * @return {Number} The index of the slide that is now shown,
	 * might differ from the passed in index if it was out of
	 * bounds.
	 */
	function updateSlides( selector, index ) {

		// Select all slides and convert the NodeList result to
		// an array
		var slides = toArray( dom.wrapper.querySelectorAll( selector ) ),
			slidesLength = slides.length;

		var printMode = isPrintingPDF();

		if( slidesLength ) {

			// Should the index loop?
			if( config.loop ) {
				index %= slidesLength;

				if( index < 0 ) {
					index = slidesLength + index;
				}
			}

			// Enforce max and minimum index bounds
			index = Math.max( Math.min( index, slidesLength - 1 ), 0 );

			for( var i = 0; i < slidesLength; i++ ) {
				var element = slides[i];

				var reverse = config.rtl && !isVerticalSlide( element );

				element.classList.remove( 'past' );
				element.classList.remove( 'present' );
				element.classList.remove( 'future' );

				// http://www.w3.org/html/wg/drafts/html/master/editing.html#the-hidden-attribute
				element.setAttribute( 'hidden', '' );
				element.setAttribute( 'aria-hidden', 'true' );

				// If this element contains vertical slides
				if( element.querySelector( 'section' ) ) {
					element.classList.add( 'stack' );
				}

				// If we're printing static slides, all slides are "present"
				if( printMode ) {
					element.classList.add( 'present' );
					continue;
				}

				if( i < index ) {
					// Any element previous to index is given the 'past' class
					element.classList.add( reverse ? 'future' : 'past' );

					if( config.fragments ) {
						var pastFragments = toArray( element.querySelectorAll( '.fragment' ) );

						// Show all fragments on prior slides
						while( pastFragments.length ) {
							var pastFragment = pastFragments.pop();
							pastFragment.classList.add( 'visible' );
							pastFragment.classList.remove( 'current-fragment' );
						}
					}
				}
				else if( i > index ) {
					// Any element subsequent to index is given the 'future' class
					element.classList.add( reverse ? 'past' : 'future' );

					if( config.fragments ) {
						var futureFragments = toArray( element.querySelectorAll( '.fragment.visible' ) );

						// No fragments in future slides should be visible ahead of time
						while( futureFragments.length ) {
							var futureFragment = futureFragments.pop();
							futureFragment.classList.remove( 'visible' );
							futureFragment.classList.remove( 'current-fragment' );
						}
					}
				}
			}

			// Mark the current slide as present
			slides[index].classList.add( 'present' );
			slides[index].removeAttribute( 'hidden' );
			slides[index].removeAttribute( 'aria-hidden' );

			// If this slide has a state associated with it, add it
			// onto the current state of the deck
			var slideState = slides[index].getAttribute( 'data-state' );
			if( slideState ) {
				state = state.concat( slideState.split( ' ' ) );
			}

		}
		else {
			// Since there are no slides we can't be anywhere beyond the
			// zeroth index
			index = 0;
		}

		return index;

	}

	/**
	 * Optimization method; hide all slides that are far away
	 * from the present slide.
	 */
	function updateSlidesVisibility() {

		// Select all slides and convert the NodeList result to
		// an array
		var horizontalSlides = toArray( dom.wrapper.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ) ),
			horizontalSlidesLength = horizontalSlides.length,
			distanceX,
			distanceY;

		if( horizontalSlidesLength && typeof indexh !== 'undefined' ) {

			// The number of steps away from the present slide that will
			// be visible
			var viewDistance = isOverview() ? 10 : config.viewDistance;

			// Limit view distance on weaker devices
			if( isMobileDevice ) {
				viewDistance = isOverview() ? 6 : 2;
			}

			// All slides need to be visible when exporting to PDF
			if( isPrintingPDF() ) {
				viewDistance = Number.MAX_VALUE;
			}

			for( var x = 0; x < horizontalSlidesLength; x++ ) {
				var horizontalSlide = horizontalSlides[x];

				var verticalSlides = toArray( horizontalSlide.querySelectorAll( 'section' ) ),
					verticalSlidesLength = verticalSlides.length;

				// Determine how far away this slide is from the present
				distanceX = Math.abs( ( indexh || 0 ) - x ) || 0;

				// If the presentation is looped, distance should measure
				// 1 between the first and last slides
				if( config.loop ) {
					distanceX = Math.abs( ( ( indexh || 0 ) - x ) % ( horizontalSlidesLength - viewDistance ) ) || 0;
				}

				// Show the horizontal slide if it's within the view distance
				if( distanceX < viewDistance ) {
					showSlide( horizontalSlide );
				}
				else {
					hideSlide( horizontalSlide );
				}

				if( verticalSlidesLength ) {

					var oy = getPreviousVerticalIndex( horizontalSlide );

					for( var y = 0; y < verticalSlidesLength; y++ ) {
						var verticalSlide = verticalSlides[y];

						distanceY = x === ( indexh || 0 ) ? Math.abs( ( indexv || 0 ) - y ) : Math.abs( y - oy );

						if( distanceX + distanceY < viewDistance ) {
							showSlide( verticalSlide );
						}
						else {
							hideSlide( verticalSlide );
						}
					}

				}
			}

		}

	}

	/**
	 * Pick up notes from the current slide and display tham
	 * to the viewer.
	 *
	 * @see `showNotes` config value
	 */
	function updateNotes() {

		if( config.showNotes && dom.speakerNotes && currentSlide && !isPrintingPDF() ) {

			dom.speakerNotes.innerHTML = getSlideNotes() || '';

		}

	}

	/**
	 * Updates the progress bar to reflect the current slide.
	 */
	function updateProgress() {

		// Update progress if enabled
		if( config.progress && dom.progressbar ) {

			dom.progressbar.style.width = getProgress() * dom.wrapper.offsetWidth + 'px';

		}

	}

	/**
	 * Updates the slide number div to reflect the current slide.
	 *
	 * The following slide number formats are available:
	 *  "h.v": 	horizontal . vertical slide number (default)
	 *  "h/v": 	horizontal / vertical slide number
	 *    "c": 	flattened slide number
	 *  "c/t": 	flattened slide number / total slides
	 */
	function updateSlideNumber() {

		// Update slide number if enabled
		if( config.slideNumber && dom.slideNumber ) {

			var value = [];
			var format = 'h.v';

			// Check if a custom number format is available
			if( typeof config.slideNumber === 'string' ) {
				format = config.slideNumber;
			}

			switch( format ) {
				case 'c':
					value.push( getSlidePastCount() + 1 );
					break;
				case 'c/t':
					value.push( getSlidePastCount() + 1, '/', getTotalSlides() );
					break;
				case 'h/v':
					value.push( indexh + 1 );
					if( isVerticalSlide() ) value.push( '/', indexv + 1 );
					break;
				default:
					value.push( indexh + 1 );
					if( isVerticalSlide() ) value.push( '.', indexv + 1 );
			}

			dom.slideNumber.innerHTML = formatSlideNumber( value[0], value[1], value[2] );
		}

	}

	/**
	 * Applies HTML formatting to a slide number before it's
	 * written to the DOM.
	 */
	function formatSlideNumber( a, delimiter, b ) {

		if( typeof b === 'number' && !isNaN( b ) ) {
			return  '<span class="slide-number-a">'+ a +'</span>' +
					'<span class="slide-number-delimiter">'+ delimiter +'</span>' +
					'<span class="slide-number-b">'+ b +'</span>';
		}
		else {
			return '<span class="slide-number-a">'+ a +'</span>';
		}

	}

	/**
	 * Updates the state of all control/navigation arrows.
	 */
	function updateControls() {

		var routes = availableRoutes();
		var fragments = availableFragments();

		// Remove the 'enabled' class from all directions
		dom.controlsLeft.concat( dom.controlsRight )
						.concat( dom.controlsUp )
						.concat( dom.controlsDown )
						.concat( dom.controlsPrev )
						.concat( dom.controlsNext ).forEach( function( node ) {
			node.classList.remove( 'enabled' );
			node.classList.remove( 'fragmented' );
		} );

		// Add the 'enabled' class to the available routes
		if( routes.left ) dom.controlsLeft.forEach( function( el ) { el.classList.add( 'enabled' );	} );
		if( routes.right ) dom.controlsRight.forEach( function( el ) { el.classList.add( 'enabled' ); } );
		if( routes.up ) dom.controlsUp.forEach( function( el ) { el.classList.add( 'enabled' );	} );
		if( routes.down ) dom.controlsDown.forEach( function( el ) { el.classList.add( 'enabled' ); } );

		// Prev/next buttons
		if( routes.left || routes.up ) dom.controlsPrev.forEach( function( el ) { el.classList.add( 'enabled' ); } );
		if( routes.right || routes.down ) dom.controlsNext.forEach( function( el ) { el.classList.add( 'enabled' ); } );

		// Highlight fragment directions
		if( currentSlide ) {

			// Always apply fragment decorator to prev/next buttons
			if( fragments.prev ) dom.controlsPrev.forEach( function( el ) { el.classList.add( 'fragmented', 'enabled' ); } );
			if( fragments.next ) dom.controlsNext.forEach( function( el ) { el.classList.add( 'fragmented', 'enabled' ); } );

			// Apply fragment decorators to directional buttons based on
			// what slide axis they are in
			if( isVerticalSlide( currentSlide ) ) {
				if( fragments.prev ) dom.controlsUp.forEach( function( el ) { el.classList.add( 'fragmented', 'enabled' ); } );
				if( fragments.next ) dom.controlsDown.forEach( function( el ) { el.classList.add( 'fragmented', 'enabled' ); } );
			}
			else {
				if( fragments.prev ) dom.controlsLeft.forEach( function( el ) { el.classList.add( 'fragmented', 'enabled' ); } );
				if( fragments.next ) dom.controlsRight.forEach( function( el ) { el.classList.add( 'fragmented', 'enabled' ); } );
			}

		}

	}

	/**
	 * Updates the background elements to reflect the current
	 * slide.
	 *
	 * @param {Boolean} includeAll If true, the backgrounds of
	 * all vertical slides (not just the present) will be updated.
	 */
	function updateBackground( includeAll ) {

		var currentBackground = null;

		// Reverse past/future classes when in RTL mode
		var horizontalPast = config.rtl ? 'future' : 'past',
			horizontalFuture = config.rtl ? 'past' : 'future';

		// Update the classes of all backgrounds to match the
		// states of their slides (past/present/future)
		toArray( dom.background.childNodes ).forEach( function( backgroundh, h ) {

			backgroundh.classList.remove( 'past' );
			backgroundh.classList.remove( 'present' );
			backgroundh.classList.remove( 'future' );

			if( h < indexh ) {
				backgroundh.classList.add( horizontalPast );
			}
			else if ( h > indexh ) {
				backgroundh.classList.add( horizontalFuture );
			}
			else {
				backgroundh.classList.add( 'present' );

				// Store a reference to the current background element
				currentBackground = backgroundh;
			}

			if( includeAll || h === indexh ) {
				toArray( backgroundh.querySelectorAll( '.slide-background' ) ).forEach( function( backgroundv, v ) {

					backgroundv.classList.remove( 'past' );
					backgroundv.classList.remove( 'present' );
					backgroundv.classList.remove( 'future' );

					if( v < indexv ) {
						backgroundv.classList.add( 'past' );
					}
					else if ( v > indexv ) {
						backgroundv.classList.add( 'future' );
					}
					else {
						backgroundv.classList.add( 'present' );

						// Only if this is the present horizontal and vertical slide
						if( h === indexh ) currentBackground = backgroundv;
					}

				} );
			}

		} );

		// Stop any currently playing video background
		if( previousBackground ) {

			var previousVideo = previousBackground.querySelector( 'video' );
			if( previousVideo ) previousVideo.pause();

		}

		if( currentBackground ) {

			// Start video playback
			var currentVideo = currentBackground.querySelector( 'video' );
			if( currentVideo ) {

				var startVideo = function() {
					currentVideo.currentTime = 0;
					currentVideo.play();
					currentVideo.removeEventListener( 'loadeddata', startVideo );
				};

				if( currentVideo.readyState > 1 ) {
					startVideo();
				}
				else {
					currentVideo.addEventListener( 'loadeddata', startVideo );
				}

			}

			var backgroundImageURL = currentBackground.style.backgroundImage || '';

			// Restart GIFs (doesn't work in Firefox)
			if( /\.gif/i.test( backgroundImageURL ) ) {
				currentBackground.style.backgroundImage = '';
				window.getComputedStyle( currentBackground ).opacity;
				currentBackground.style.backgroundImage = backgroundImageURL;
			}

			// Don't transition between identical backgrounds. This
			// prevents unwanted flicker.
			var previousBackgroundHash = previousBackground ? previousBackground.getAttribute( 'data-background-hash' ) : null;
			var currentBackgroundHash = currentBackground.getAttribute( 'data-background-hash' );
			if( currentBackgroundHash && currentBackgroundHash === previousBackgroundHash && currentBackground !== previousBackground ) {
				dom.background.classList.add( 'no-transition' );
			}

			previousBackground = currentBackground;

		}

		// If there's a background brightness flag for this slide,
		// bubble it to the .reveal container
		if( currentSlide ) {
			[ 'has-light-background', 'has-dark-background' ].forEach( function( classToBubble ) {
				if( currentSlide.classList.contains( classToBubble ) ) {
					dom.wrapper.classList.add( classToBubble );
				}
				else {
					dom.wrapper.classList.remove( classToBubble );
				}
			} );
		}

		// Allow the first background to apply without transition
		setTimeout( function() {
			dom.background.classList.remove( 'no-transition' );
		}, 1 );

	}

	/**
	 * Updates the position of the parallax background based
	 * on the current slide index.
	 */
	function updateParallax() {

		if( config.parallaxBackgroundImage ) {

			var horizontalSlides = dom.wrapper.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ),
				verticalSlides = dom.wrapper.querySelectorAll( VERTICAL_SLIDES_SELECTOR );

			var backgroundSize = dom.background.style.backgroundSize.split( ' ' ),
				backgroundWidth, backgroundHeight;

			if( backgroundSize.length === 1 ) {
				backgroundWidth = backgroundHeight = parseInt( backgroundSize[0], 10 );
			}
			else {
				backgroundWidth = parseInt( backgroundSize[0], 10 );
				backgroundHeight = parseInt( backgroundSize[1], 10 );
			}

			var slideWidth = dom.background.offsetWidth,
				horizontalSlideCount = horizontalSlides.length,
				horizontalOffsetMultiplier,
				horizontalOffset;

			if( typeof config.parallaxBackgroundHorizontal === 'number' ) {
				horizontalOffsetMultiplier = config.parallaxBackgroundHorizontal;
			}
			else {
				horizontalOffsetMultiplier = horizontalSlideCount > 1 ? ( backgroundWidth - slideWidth ) / ( horizontalSlideCount-1 ) : 0;
			}

			horizontalOffset = horizontalOffsetMultiplier * indexh * -1;

			var slideHeight = dom.background.offsetHeight,
				verticalSlideCount = verticalSlides.length,
				verticalOffsetMultiplier,
				verticalOffset;

			if( typeof config.parallaxBackgroundVertical === 'number' ) {
				verticalOffsetMultiplier = config.parallaxBackgroundVertical;
			}
			else {
				verticalOffsetMultiplier = ( backgroundHeight - slideHeight ) / ( verticalSlideCount-1 );
			}

			verticalOffset = verticalSlideCount > 0 ?  verticalOffsetMultiplier * indexv * 1 : 0;

			dom.background.style.backgroundPosition = horizontalOffset + 'px ' + -verticalOffset + 'px';

		}

	}

	/**
	 * Called when the given slide is within the configured view
	 * distance. Shows the slide element and loads any content
	 * that is set to load lazily (data-src).
	 */
	function showSlide( slide ) {

		// Show the slide element
		slide.style.display = 'block';

		// Media elements with data-src attributes
		toArray( slide.querySelectorAll( 'img[data-src], video[data-src], audio[data-src]' ) ).forEach( function( element ) {
			element.setAttribute( 'src', element.getAttribute( 'data-src' ) );
			element.removeAttribute( 'data-src' );
		} );

		// Media elements with <source> children
		toArray( slide.querySelectorAll( 'video, audio' ) ).forEach( function( media ) {
			var sources = 0;

			toArray( media.querySelectorAll( 'source[data-src]' ) ).forEach( function( source ) {
				source.setAttribute( 'src', source.getAttribute( 'data-src' ) );
				source.removeAttribute( 'data-src' );
				sources += 1;
			} );

			// If we rewrote sources for this video/audio element, we need
			// to manually tell it to load from its new origin
			if( sources > 0 ) {
				media.load();
			}
		} );


		// Show the corresponding background element
		var indices = getIndices( slide );
		var background = getSlideBackground( indices.h, indices.v );
		if( background ) {
			background.style.display = 'block';

			// If the background contains media, load it
			if( background.hasAttribute( 'data-loaded' ) === false ) {
				background.setAttribute( 'data-loaded', 'true' );

				var backgroundImage = slide.getAttribute( 'data-background-image' ),
					backgroundVideo = slide.getAttribute( 'data-background-video' ),
					backgroundVideoLoop = slide.hasAttribute( 'data-background-video-loop' ),
					backgroundVideoMuted = slide.hasAttribute( 'data-background-video-muted' ),
					backgroundIframe = slide.getAttribute( 'data-background-iframe' );

				// Images
				if( backgroundImage ) {
					background.style.backgroundImage = 'url('+ backgroundImage +')';
				}
				// Videos
				else if ( backgroundVideo && !isSpeakerNotes() ) {
					var video = document.createElement( 'video' );

					if( backgroundVideoLoop ) {
						video.setAttribute( 'loop', '' );
					}

					if( backgroundVideoMuted ) {
						video.muted = true;
					}

					// Support comma separated lists of video sources
					backgroundVideo.split( ',' ).forEach( function( source ) {
						video.innerHTML += '<source src="'+ source +'">';
					} );

					background.appendChild( video );
				}
				// Iframes
				else if( backgroundIframe ) {
					var iframe = document.createElement( 'iframe' );
						iframe.setAttribute( 'src', backgroundIframe );
						iframe.style.width  = '100%';
						iframe.style.height = '100%';
						iframe.style.maxHeight = '100%';
						iframe.style.maxWidth = '100%';

					background.appendChild( iframe );
				}
			}
		}

	}

	/**
	 * Called when the given slide is moved outside of the
	 * configured view distance.
	 */
	function hideSlide( slide ) {

		// Hide the slide element
		slide.style.display = 'none';

		// Hide the corresponding background element
		var indices = getIndices( slide );
		var background = getSlideBackground( indices.h, indices.v );
		if( background ) {
			background.style.display = 'none';
		}

	}

	/**
	 * Determine what available routes there are for navigation.
	 *
	 * @return {Object} containing four booleans: left/right/up/down
	 */
	function availableRoutes() {

		var horizontalSlides = dom.wrapper.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ),
			verticalSlides = dom.wrapper.querySelectorAll( VERTICAL_SLIDES_SELECTOR );

		var routes = {
			left: indexh > 0 || config.loop,
			right: indexh < horizontalSlides.length - 1 || config.loop,
			up: indexv > 0,
			down: indexv < verticalSlides.length - 1
		};

		// reverse horizontal controls for rtl
		if( config.rtl ) {
			var left = routes.left;
			routes.left = routes.right;
			routes.right = left;
		}

		return routes;

	}

	/**
	 * Returns an object describing the available fragment
	 * directions.
	 *
	 * @return {Object} two boolean properties: prev/next
	 */
	function availableFragments() {

		if( currentSlide && config.fragments ) {
			var fragments = currentSlide.querySelectorAll( '.fragment' );
			var hiddenFragments = currentSlide.querySelectorAll( '.fragment:not(.visible)' );

			return {
				prev: fragments.length - hiddenFragments.length > 0,
				next: !!hiddenFragments.length
			};
		}
		else {
			return { prev: false, next: false };
		}

	}

	/**
	 * Enforces origin-specific format rules for embedded media.
	 */
	function formatEmbeddedContent() {

		var _appendParamToIframeSource = function( sourceAttribute, sourceURL, param ) {
			toArray( dom.slides.querySelectorAll( 'iframe['+ sourceAttribute +'*="'+ sourceURL +'"]' ) ).forEach( function( el ) {
				var src = el.getAttribute( sourceAttribute );
				if( src && src.indexOf( param ) === -1 ) {
					el.setAttribute( sourceAttribute, src + ( !/\?/.test( src ) ? '?' : '&' ) + param );
				}
			});
		};

		// YouTube frames must include "?enablejsapi=1"
		_appendParamToIframeSource( 'src', 'youtube.com/embed/', 'enablejsapi=1' );
		_appendParamToIframeSource( 'data-src', 'youtube.com/embed/', 'enablejsapi=1' );

		// Vimeo frames must include "?api=1"
		_appendParamToIframeSource( 'src', 'player.vimeo.com/', 'api=1' );
		_appendParamToIframeSource( 'data-src', 'player.vimeo.com/', 'api=1' );

	}

	/**
	 * Start playback of any embedded content inside of
	 * the targeted slide.
	 */
	function startEmbeddedContent( slide ) {

		if( slide && !isSpeakerNotes() ) {
			// Restart GIFs
			toArray( slide.querySelectorAll( 'img[src$=".gif"]' ) ).forEach( function( el ) {
				// Setting the same unchanged source like this was confirmed
				// to work in Chrome, FF & Safari
				el.setAttribute( 'src', el.getAttribute( 'src' ) );
			} );

			// HTML5 media elements
			toArray( slide.querySelectorAll( 'video, audio' ) ).forEach( function( el ) {
				if( el.hasAttribute( 'data-autoplay' ) && typeof el.play === 'function' ) {
					el.play();
				}
			} );

			// Normal iframes
			toArray( slide.querySelectorAll( 'iframe[src]' ) ).forEach( function( el ) {
				startEmbeddedIframe( { target: el } );
			} );

			// Lazy loading iframes
			toArray( slide.querySelectorAll( 'iframe[data-src]' ) ).forEach( function( el ) {
				if( el.getAttribute( 'src' ) !== el.getAttribute( 'data-src' ) ) {
					el.removeEventListener( 'load', startEmbeddedIframe ); // remove first to avoid dupes
					el.addEventListener( 'load', startEmbeddedIframe );
					el.setAttribute( 'src', el.getAttribute( 'data-src' ) );
				}
			} );
		}

	}

	/**
	 * "Starts" the content of an embedded iframe using the
	 * postmessage API.
	 */
	function startEmbeddedIframe( event ) {

		var iframe = event.target;

		// YouTube postMessage API
		if( /youtube\.com\/embed\//.test( iframe.getAttribute( 'src' ) ) && iframe.hasAttribute( 'data-autoplay' ) ) {
			iframe.contentWindow.postMessage( '{"event":"command","func":"playVideo","args":""}', '*' );
		}
		// Vimeo postMessage API
		else if( /player\.vimeo\.com\//.test( iframe.getAttribute( 'src' ) ) && iframe.hasAttribute( 'data-autoplay' ) ) {
			iframe.contentWindow.postMessage( '{"method":"play"}', '*' );
		}
		// Generic postMessage API
		else {
			iframe.contentWindow.postMessage( 'slide:start', '*' );
		}

	}

	/**
	 * Stop playback of any embedded content inside of
	 * the targeted slide.
	 */
	function stopEmbeddedContent( slide ) {

		if( slide && slide.parentNode ) {
			// HTML5 media elements
			toArray( slide.querySelectorAll( 'video, audio' ) ).forEach( function( el ) {
				if( !el.hasAttribute( 'data-ignore' ) && typeof el.pause === 'function' ) {
					el.pause();
				}
			} );

			// Generic postMessage API for non-lazy loaded iframes
			toArray( slide.querySelectorAll( 'iframe' ) ).forEach( function( el ) {
				el.contentWindow.postMessage( 'slide:stop', '*' );
				el.removeEventListener( 'load', startEmbeddedIframe );
			});

			// YouTube postMessage API
			toArray( slide.querySelectorAll( 'iframe[src*="youtube.com/embed/"]' ) ).forEach( function( el ) {
				if( !el.hasAttribute( 'data-ignore' ) && typeof el.contentWindow.postMessage === 'function' ) {
					el.contentWindow.postMessage( '{"event":"command","func":"pauseVideo","args":""}', '*' );
				}
			});

			// Vimeo postMessage API
			toArray( slide.querySelectorAll( 'iframe[src*="player.vimeo.com/"]' ) ).forEach( function( el ) {
				if( !el.hasAttribute( 'data-ignore' ) && typeof el.contentWindow.postMessage === 'function' ) {
					el.contentWindow.postMessage( '{"method":"pause"}', '*' );
				}
			});

			// Lazy loading iframes
			toArray( slide.querySelectorAll( 'iframe[data-src]' ) ).forEach( function( el ) {
				// Only removing the src doesn't actually unload the frame
				// in all browsers (Firefox) so we set it to blank first
				el.setAttribute( 'src', 'about:blank' );
				el.removeAttribute( 'src' );
			} );
		}

	}

	/**
	 * Returns the number of past slides. This can be used as a global
	 * flattened index for slides.
	 */
	function getSlidePastCount() {

		var horizontalSlides = toArray( dom.wrapper.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ) );

		// The number of past slides
		var pastCount = 0;

		// Step through all slides and count the past ones
		mainLoop: for( var i = 0; i < horizontalSlides.length; i++ ) {

			var horizontalSlide = horizontalSlides[i];
			var verticalSlides = toArray( horizontalSlide.querySelectorAll( 'section' ) );

			for( var j = 0; j < verticalSlides.length; j++ ) {

				// Stop as soon as we arrive at the present
				if( verticalSlides[j].classList.contains( 'present' ) ) {
					break mainLoop;
				}

				pastCount++;

			}

			// Stop as soon as we arrive at the present
			if( horizontalSlide.classList.contains( 'present' ) ) {
				break;
			}

			// Don't count the wrapping section for vertical slides
			if( horizontalSlide.classList.contains( 'stack' ) === false ) {
				pastCount++;
			}

		}

		return pastCount;

	}

	/**
	 * Returns a value ranging from 0-1 that represents
	 * how far into the presentation we have navigated.
	 */
	function getProgress() {

		// The number of past and total slides
		var totalCount = getTotalSlides();
		var pastCount = getSlidePastCount();

		if( currentSlide ) {

			var allFragments = currentSlide.querySelectorAll( '.fragment' );

			// If there are fragments in the current slide those should be
			// accounted for in the progress.
			if( allFragments.length > 0 ) {
				var visibleFragments = currentSlide.querySelectorAll( '.fragment.visible' );

				// This value represents how big a portion of the slide progress
				// that is made up by its fragments (0-1)
				var fragmentWeight = 0.9;

				// Add fragment progress to the past slide count
				pastCount += ( visibleFragments.length / allFragments.length ) * fragmentWeight;
			}

		}

		return pastCount / ( totalCount - 1 );

	}

	/**
	 * Checks if this presentation is running inside of the
	 * speaker notes window.
	 */
	function isSpeakerNotes() {

		return !!window.location.search.match( /receiver/gi );

	}

	/**
	 * Reads the current URL (hash) and navigates accordingly.
	 */
	function readURL() {

		var hash = window.location.hash;

		// Attempt to parse the hash as either an index or name
		var bits = hash.slice( 2 ).split( '/' ),
			name = hash.replace( /#|\//gi, '' );

		// If the first bit is invalid and there is a name we can
		// assume that this is a named link
		if( isNaN( parseInt( bits[0], 10 ) ) && name.length ) {
			var element;

			// Ensure the named link is a valid HTML ID attribute
			if( /^[a-zA-Z][\w:.-]*$/.test( name ) ) {
				// Find the slide with the specified ID
				element = document.getElementById( name );
			}

			if( element ) {
				// Find the position of the named slide and navigate to it
				var indices = Reveal.getIndices( element );
				slide( indices.h, indices.v );
			}
			// If the slide doesn't exist, navigate to the current slide
			else {
				slide( indexh || 0, indexv || 0 );
			}
		}
		else {
			// Read the index components of the hash
			var h = parseInt( bits[0], 10 ) || 0,
				v = parseInt( bits[1], 10 ) || 0;

			if( h !== indexh || v !== indexv ) {
				slide( h, v );
			}
		}

	}

	/**
	 * Updates the page URL (hash) to reflect the current
	 * state.
	 *
	 * @param {Number} delay The time in ms to wait before
	 * writing the hash
	 */
	function writeURL( delay ) {

		if( config.history ) {

			// Make sure there's never more than one timeout running
			clearTimeout( writeURLTimeout );

			// If a delay is specified, timeout this call
			if( typeof delay === 'number' ) {
				writeURLTimeout = setTimeout( writeURL, delay );
			}
			else if( currentSlide ) {
				var url = '/';

				// Attempt to create a named link based on the slide's ID
				var id = currentSlide.getAttribute( 'id' );
				if( id ) {
					id = id.replace( /[^a-zA-Z0-9\-\_\:\.]/g, '' );
				}

				// If the current slide has an ID, use that as a named link
				if( typeof id === 'string' && id.length ) {
					url = '/' + id;
				}
				// Otherwise use the /h/v index
				else {
					if( indexh > 0 || indexv > 0 ) url += indexh;
					if( indexv > 0 ) url += '/' + indexv;
				}

				window.location.hash = url;
			}
		}

	}

	/**
	 * Retrieves the h/v location of the current, or specified,
	 * slide.
	 *
	 * @param {HTMLElement} slide If specified, the returned
	 * index will be for this slide rather than the currently
	 * active one
	 *
	 * @return {Object} { h: <int>, v: <int>, f: <int> }
	 */
	function getIndices( slide ) {

		// By default, return the current indices
		var h = indexh,
			v = indexv,
			f;

		// If a slide is specified, return the indices of that slide
		if( slide ) {
			var isVertical = isVerticalSlide( slide );
			var slideh = isVertical ? slide.parentNode : slide;

			// Select all horizontal slides
			var horizontalSlides = toArray( dom.wrapper.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ) );

			// Now that we know which the horizontal slide is, get its index
			h = Math.max( horizontalSlides.indexOf( slideh ), 0 );

			// Assume we're not vertical
			v = undefined;

			// If this is a vertical slide, grab the vertical index
			if( isVertical ) {
				v = Math.max( toArray( slide.parentNode.querySelectorAll( 'section' ) ).indexOf( slide ), 0 );
			}
		}

		if( !slide && currentSlide ) {
			var hasFragments = currentSlide.querySelectorAll( '.fragment' ).length > 0;
			if( hasFragments ) {
				var currentFragment = currentSlide.querySelector( '.current-fragment' );
				if( currentFragment && currentFragment.hasAttribute( 'data-fragment-index' ) ) {
					f = parseInt( currentFragment.getAttribute( 'data-fragment-index' ), 10 );
				}
				else {
					f = currentSlide.querySelectorAll( '.fragment.visible' ).length - 1;
				}
			}
		}

		return { h: h, v: v, f: f };

	}

	/**
	 * Retrieves the total number of slides in this presentation.
	 */
	function getTotalSlides() {

		return dom.wrapper.querySelectorAll( SLIDES_SELECTOR + ':not(.stack)' ).length;

	}

	/**
	 * Returns the slide element matching the specified index.
	 */
	function getSlide( x, y ) {

		var horizontalSlide = dom.wrapper.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR )[ x ];
		var verticalSlides = horizontalSlide && horizontalSlide.querySelectorAll( 'section' );

		if( verticalSlides && verticalSlides.length && typeof y === 'number' ) {
			return verticalSlides ? verticalSlides[ y ] : undefined;
		}

		return horizontalSlide;

	}

	/**
	 * Returns the background element for the given slide.
	 * All slides, even the ones with no background properties
	 * defined, have a background element so as long as the
	 * index is valid an element will be returned.
	 */
	function getSlideBackground( x, y ) {

		// When printing to PDF the slide backgrounds are nested
		// inside of the slides
		if( isPrintingPDF() ) {
			var slide = getSlide( x, y );
			if( slide ) {
				var background = slide.querySelector( '.slide-background' );
				if( background && background.parentNode === slide ) {
					return background;
				}
			}

			return undefined;
		}

		var horizontalBackground = dom.wrapper.querySelectorAll( '.backgrounds>.slide-background' )[ x ];
		var verticalBackgrounds = horizontalBackground && horizontalBackground.querySelectorAll( '.slide-background' );

		if( verticalBackgrounds && verticalBackgrounds.length && typeof y === 'number' ) {
			return verticalBackgrounds ? verticalBackgrounds[ y ] : undefined;
		}

		return horizontalBackground;

	}

	/**
	 * Retrieves the speaker notes from a slide. Notes can be
	 * defined in two ways:
	 * 1. As a data-notes attribute on the slide <section>
	 * 2. As an <aside class="notes"> inside of the slide
	 */
	function getSlideNotes( slide ) {

		// Default to the current slide
		slide = slide || currentSlide;

		// Notes can be specified via the data-notes attribute...
		if( slide.hasAttribute( 'data-notes' ) ) {
			return slide.getAttribute( 'data-notes' );
		}

		// ... or using an <aside class="notes"> element
		var notesElement = slide.querySelector( 'aside.notes' );
		if( notesElement ) {
			return notesElement.innerHTML;
		}

		return null;

	}

	/**
	 * Retrieves the current state of the presentation as
	 * an object. This state can then be restored at any
	 * time.
	 */
	function getState() {

		var indices = getIndices();

		return {
			indexh: indices.h,
			indexv: indices.v,
			indexf: indices.f,
			paused: isPaused(),
			overview: isOverview()
		};

	}

	/**
	 * Restores the presentation to the given state.
	 *
	 * @param {Object} state As generated by getState()
	 */
	function setState( state ) {

		if( typeof state === 'object' ) {
			slide( deserialize( state.indexh ), deserialize( state.indexv ), deserialize( state.indexf ) );

			var pausedFlag = deserialize( state.paused ),
				overviewFlag = deserialize( state.overview );

			if( typeof pausedFlag === 'boolean' && pausedFlag !== isPaused() ) {
				togglePause( pausedFlag );
			}

			if( typeof overviewFlag === 'boolean' && overviewFlag !== isOverview() ) {
				toggleOverview( overviewFlag );
			}
		}

	}

	/**
	 * Return a sorted fragments list, ordered by an increasing
	 * "data-fragment-index" attribute.
	 *
	 * Fragments will be revealed in the order that they are returned by
	 * this function, so you can use the index attributes to control the
	 * order of fragment appearance.
	 *
	 * To maintain a sensible default fragment order, fragments are presumed
	 * to be passed in document order. This function adds a "fragment-index"
	 * attribute to each node if such an attribute is not already present,
	 * and sets that attribute to an integer value which is the position of
	 * the fragment within the fragments list.
	 */
	function sortFragments( fragments ) {

		fragments = toArray( fragments );

		var ordered = [],
			unordered = [],
			sorted = [];

		// Group ordered and unordered elements
		fragments.forEach( function( fragment, i ) {
			if( fragment.hasAttribute( 'data-fragment-index' ) ) {
				var index = parseInt( fragment.getAttribute( 'data-fragment-index' ), 10 );

				if( !ordered[index] ) {
					ordered[index] = [];
				}

				ordered[index].push( fragment );
			}
			else {
				unordered.push( [ fragment ] );
			}
		} );

		// Append fragments without explicit indices in their
		// DOM order
		ordered = ordered.concat( unordered );

		// Manually count the index up per group to ensure there
		// are no gaps
		var index = 0;

		// Push all fragments in their sorted order to an array,
		// this flattens the groups
		ordered.forEach( function( group ) {
			group.forEach( function( fragment ) {
				sorted.push( fragment );
				fragment.setAttribute( 'data-fragment-index', index );
			} );

			index ++;
		} );

		return sorted;

	}

	/**
	 * Navigate to the specified slide fragment.
	 *
	 * @param {Number} index The index of the fragment that
	 * should be shown, -1 means all are invisible
	 * @param {Number} offset Integer offset to apply to the
	 * fragment index
	 *
	 * @return {Boolean} true if a change was made in any
	 * fragments visibility as part of this call
	 */
	function navigateFragment( index, offset ) {

		if( currentSlide && config.fragments ) {

			var fragments = sortFragments( currentSlide.querySelectorAll( '.fragment' ) );
			if( fragments.length ) {

				// If no index is specified, find the current
				if( typeof index !== 'number' ) {
					var lastVisibleFragment = sortFragments( currentSlide.querySelectorAll( '.fragment.visible' ) ).pop();

					if( lastVisibleFragment ) {
						index = parseInt( lastVisibleFragment.getAttribute( 'data-fragment-index' ) || 0, 10 );
					}
					else {
						index = -1;
					}
				}

				// If an offset is specified, apply it to the index
				if( typeof offset === 'number' ) {
					index += offset;
				}

				var fragmentsShown = [],
					fragmentsHidden = [];

				toArray( fragments ).forEach( function( element, i ) {

					if( element.hasAttribute( 'data-fragment-index' ) ) {
						i = parseInt( element.getAttribute( 'data-fragment-index' ), 10 );
					}

					// Visible fragments
					if( i <= index ) {
						if( !element.classList.contains( 'visible' ) ) fragmentsShown.push( element );
						element.classList.add( 'visible' );
						element.classList.remove( 'current-fragment' );

						// Announce the fragments one by one to the Screen Reader
						dom.statusDiv.textContent = element.textContent;

						if( i === index ) {
							element.classList.add( 'current-fragment' );
						}
					}
					// Hidden fragments
					else {
						if( element.classList.contains( 'visible' ) ) fragmentsHidden.push( element );
						element.classList.remove( 'visible' );
						element.classList.remove( 'current-fragment' );
					}


				} );

				if( fragmentsHidden.length ) {
					dispatchEvent( 'fragmenthidden', { fragment: fragmentsHidden[0], fragments: fragmentsHidden } );
				}

				if( fragmentsShown.length ) {
					dispatchEvent( 'fragmentshown', { fragment: fragmentsShown[0], fragments: fragmentsShown } );
				}

				updateControls();
				updateProgress();

				return !!( fragmentsShown.length || fragmentsHidden.length );

			}

		}

		return false;

	}

	/**
	 * Navigate to the next slide fragment.
	 *
	 * @return {Boolean} true if there was a next fragment,
	 * false otherwise
	 */
	function nextFragment() {

		return navigateFragment( null, 1 );

	}

	/**
	 * Navigate to the previous slide fragment.
	 *
	 * @return {Boolean} true if there was a previous fragment,
	 * false otherwise
	 */
	function previousFragment() {

		return navigateFragment( null, -1 );

	}

	/**
	 * Cues a new automated slide if enabled in the config.
	 */
	function cueAutoSlide() {

		cancelAutoSlide();

		if( currentSlide ) {

			var currentFragment = currentSlide.querySelector( '.current-fragment' );

			var fragmentAutoSlide = currentFragment ? currentFragment.getAttribute( 'data-autoslide' ) : null;
			var parentAutoSlide = currentSlide.parentNode ? currentSlide.parentNode.getAttribute( 'data-autoslide' ) : null;
			var slideAutoSlide = currentSlide.getAttribute( 'data-autoslide' );

			// Pick value in the following priority order:
			// 1. Current fragment's data-autoslide
			// 2. Current slide's data-autoslide
			// 3. Parent slide's data-autoslide
			// 4. Global autoSlide setting
			if( fragmentAutoSlide ) {
				autoSlide = parseInt( fragmentAutoSlide, 10 );
			}
			else if( slideAutoSlide ) {
				autoSlide = parseInt( slideAutoSlide, 10 );
			}
			else if( parentAutoSlide ) {
				autoSlide = parseInt( parentAutoSlide, 10 );
			}
			else {
				autoSlide = config.autoSlide;
			}

			// If there are media elements with data-autoplay,
			// automatically set the autoSlide duration to the
			// length of that media. Not applicable if the slide
			// is divided up into fragments.
			if( currentSlide.querySelectorAll( '.fragment' ).length === 0 ) {
				toArray( currentSlide.querySelectorAll( 'video, audio' ) ).forEach( function( el ) {
					if( el.hasAttribute( 'data-autoplay' ) ) {
						if( autoSlide && el.duration * 1000 > autoSlide ) {
							autoSlide = ( el.duration * 1000 ) + 1000;
						}
					}
				} );
			}

			// Cue the next auto-slide if:
			// - There is an autoSlide value
			// - Auto-sliding isn't paused by the user
			// - The presentation isn't paused
			// - The overview isn't active
			// - The presentation isn't over
			if( autoSlide && !autoSlidePaused && !isPaused() && !isOverview() && ( !Reveal.isLastSlide() || availableFragments().next || config.loop === true ) ) {
				autoSlideTimeout = setTimeout( function() {
					typeof config.autoSlideMethod === 'function' ? config.autoSlideMethod() : navigateNext();
					cueAutoSlide();
				}, autoSlide );
				autoSlideStartTime = Date.now();
			}

			if( autoSlidePlayer ) {
				autoSlidePlayer.setPlaying( autoSlideTimeout !== -1 );
			}

		}

	}

	/**
	 * Cancels any ongoing request to auto-slide.
	 */
	function cancelAutoSlide() {

		clearTimeout( autoSlideTimeout );
		autoSlideTimeout = -1;

	}

	function pauseAutoSlide() {

		if( autoSlide && !autoSlidePaused ) {
			autoSlidePaused = true;
			dispatchEvent( 'autoslidepaused' );
			clearTimeout( autoSlideTimeout );

			if( autoSlidePlayer ) {
				autoSlidePlayer.setPlaying( false );
			}
		}

	}

	function resumeAutoSlide() {

		if( autoSlide && autoSlidePaused ) {
			autoSlidePaused = false;
			dispatchEvent( 'autoslideresumed' );
			cueAutoSlide();
		}

	}

	function navigateLeft() {

		// Reverse for RTL
		if( config.rtl ) {
			if( ( isOverview() || nextFragment() === false ) && availableRoutes().left ) {
				slide( indexh + 1 );
			}
		}
		// Normal navigation
		else if( ( isOverview() || previousFragment() === false ) && availableRoutes().left ) {
			slide( indexh - 1 );
		}

	}

	function navigateRight() {

		// Reverse for RTL
		if( config.rtl ) {
			if( ( isOverview() || previousFragment() === false ) && availableRoutes().right ) {
				slide( indexh - 1 );
			}
		}
		// Normal navigation
		else if( ( isOverview() || nextFragment() === false ) && availableRoutes().right ) {
			slide( indexh + 1 );
		}

	}

	function navigateUp() {

		// Prioritize hiding fragments
		if( ( isOverview() || previousFragment() === false ) && availableRoutes().up ) {
			slide( indexh, indexv - 1 );
		}

	}

	function navigateDown() {

		// Prioritize revealing fragments
		if( ( isOverview() || nextFragment() === false ) && availableRoutes().down ) {
			slide( indexh, indexv + 1 );
		}

	}

	/**
	 * Navigates backwards, prioritized in the following order:
	 * 1) Previous fragment
	 * 2) Previous vertical slide
	 * 3) Previous horizontal slide
	 */
	function navigatePrev() {

		// Prioritize revealing fragments
		if( previousFragment() === false ) {
			if( availableRoutes().up ) {
				navigateUp();
			}
			else {
				// Fetch the previous horizontal slide, if there is one
				var previousSlide;

				if( config.rtl ) {
					previousSlide = toArray( dom.wrapper.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR + '.future' ) ).pop();
				}
				else {
					previousSlide = toArray( dom.wrapper.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR + '.past' ) ).pop();
				}

				if( previousSlide ) {
					var v = ( previousSlide.querySelectorAll( 'section' ).length - 1 ) || undefined;
					var h = indexh - 1;
					slide( h, v );
				}
			}
		}

	}

	/**
	 * The reverse of #navigatePrev().
	 */
	function navigateNext() {

		// Prioritize revealing fragments
		if( nextFragment() === false ) {
			if( availableRoutes().down ) {
				navigateDown();
			}
			else if( config.rtl ) {
				navigateLeft();
			}
			else {
				navigateRight();
			}
		}

	}

	/**
	 * Checks if the target element prevents the triggering of
	 * swipe navigation.
	 */
	function isSwipePrevented( target ) {

		while( target && typeof target.hasAttribute === 'function' ) {
			if( target.hasAttribute( 'data-prevent-swipe' ) ) return true;
			target = target.parentNode;
		}

		return false;

	}


	// --------------------------------------------------------------------//
	// ----------------------------- EVENTS -------------------------------//
	// --------------------------------------------------------------------//

	/**
	 * Called by all event handlers that are based on user
	 * input.
	 */
	function onUserInput( event ) {

		if( config.autoSlideStoppable ) {
			pauseAutoSlide();
		}

	}

	/**
	 * Handler for the document level 'keypress' event.
	 */
	function onDocumentKeyPress( event ) {

		// Check if the pressed key is question mark
		if( event.shiftKey && event.charCode === 63 ) {
			if( dom.overlay ) {
				closeOverlay();
			}
			else {
				showHelp( true );
			}
		}

	}

	/**
	 * Handler for the document level 'keydown' event.
	 */
	function onDocumentKeyDown( event ) {

		// If there's a condition specified and it returns false,
		// ignore this event
		if( typeof config.keyboardCondition === 'function' && config.keyboardCondition() === false ) {
			return true;
		}

		// Remember if auto-sliding was paused so we can toggle it
		var autoSlideWasPaused = autoSlidePaused;

		onUserInput( event );

		// Check if there's a focused element that could be using
		// the keyboard
		var activeElementIsCE = document.activeElement && document.activeElement.contentEditable !== 'inherit';
		var activeElementIsInput = document.activeElement && document.activeElement.tagName && /input|textarea/i.test( document.activeElement.tagName );

		// Disregard the event if there's a focused element or a
		// keyboard modifier key is present
		if( activeElementIsCE || activeElementIsInput || (event.shiftKey && event.keyCode !== 32) || event.altKey || event.ctrlKey || event.metaKey ) return;

		// While paused only allow resume keyboard events; 'b', '.''
		var resumeKeyCodes = [66,190,191];
		var key;

		// Custom key bindings for togglePause should be able to resume
		if( typeof config.keyboard === 'object' ) {
			for( key in config.keyboard ) {
				if( config.keyboard[key] === 'togglePause' ) {
					resumeKeyCodes.push( parseInt( key, 10 ) );
				}
			}
		}

		if( isPaused() && resumeKeyCodes.indexOf( event.keyCode ) === -1 ) {
			return false;
		}

		var triggered = false;

		// 1. User defined key bindings
		if( typeof config.keyboard === 'object' ) {

			for( key in config.keyboard ) {

				// Check if this binding matches the pressed key
				if( parseInt( key, 10 ) === event.keyCode ) {

					var value = config.keyboard[ key ];

					// Callback function
					if( typeof value === 'function' ) {
						value.apply( null, [ event ] );
					}
					// String shortcuts to reveal.js API
					else if( typeof value === 'string' && typeof Reveal[ value ] === 'function' ) {
						Reveal[ value ].call();
					}

					triggered = true;

				}

			}

		}

		// 2. System defined key bindings
		if( triggered === false ) {

			// Assume true and try to prove false
			triggered = true;

			switch( event.keyCode ) {
				// p, page up
				case 80: case 33: navigatePrev(); break;
				// n, page down
				case 78: case 34: navigateNext(); break;
				// h, left
				case 72: case 37: navigateLeft(); break;
				// l, right
				case 76: case 39: navigateRight(); break;
				// k, up
				case 75: case 38: navigateUp(); break;
				// j, down
				case 74: case 40: navigateDown(); break;
				// home
				case 36: slide( 0 ); break;
				// end
				case 35: slide( Number.MAX_VALUE ); break;
				// space
				case 32: isOverview() ? deactivateOverview() : event.shiftKey ? navigatePrev() : navigateNext(); break;
				// return
				case 13: isOverview() ? deactivateOverview() : triggered = false; break;
				// two-spot, semicolon, b, period, Logitech presenter tools "black screen" button
				case 58: case 59: case 66: case 190: case 191: togglePause(); break;
				// f
				case 70: enterFullscreen(); break;
				// a
				case 65: if ( config.autoSlideStoppable ) toggleAutoSlide( autoSlideWasPaused ); break;
				default:
					triggered = false;
			}

		}

		// If the input resulted in a triggered action we should prevent
		// the browsers default behavior
		if( triggered ) {
			event.preventDefault && event.preventDefault();
		}
		// ESC or O key
		else if ( ( event.keyCode === 27 || event.keyCode === 79 ) && features.transforms3d ) {
			if( dom.overlay ) {
				closeOverlay();
			}
			else {
				toggleOverview();
			}

			event.preventDefault && event.preventDefault();
		}

		// If auto-sliding is enabled we need to cue up
		// another timeout
		cueAutoSlide();

	}

	/**
	 * Handler for the 'touchstart' event, enables support for
	 * swipe and pinch gestures.
	 */
	function onTouchStart( event ) {

		if( isSwipePrevented( event.target ) ) return true;

		touch.startX = event.touches[0].clientX;
		touch.startY = event.touches[0].clientY;
		touch.startCount = event.touches.length;

		// If there's two touches we need to memorize the distance
		// between those two points to detect pinching
		if( event.touches.length === 2 && config.overview ) {
			touch.startSpan = distanceBetween( {
				x: event.touches[1].clientX,
				y: event.touches[1].clientY
			}, {
				x: touch.startX,
				y: touch.startY
			} );
		}

	}

	/**
	 * Handler for the 'touchmove' event.
	 */
	function onTouchMove( event ) {

		if( isSwipePrevented( event.target ) ) return true;

		// Each touch should only trigger one action
		if( !touch.captured ) {
			onUserInput( event );

			var currentX = event.touches[0].clientX;
			var currentY = event.touches[0].clientY;

			// If the touch started with two points and still has
			// two active touches; test for the pinch gesture
			if( event.touches.length === 2 && touch.startCount === 2 && config.overview ) {

				// The current distance in pixels between the two touch points
				var currentSpan = distanceBetween( {
					x: event.touches[1].clientX,
					y: event.touches[1].clientY
				}, {
					x: touch.startX,
					y: touch.startY
				} );

				// If the span is larger than the desire amount we've got
				// ourselves a pinch
				if( Math.abs( touch.startSpan - currentSpan ) > touch.threshold ) {
					touch.captured = true;

					if( currentSpan < touch.startSpan ) {
						activateOverview();
					}
					else {
						deactivateOverview();
					}
				}

				event.preventDefault();

			}
			// There was only one touch point, look for a swipe
			else if( event.touches.length === 1 && touch.startCount !== 2 ) {

				var deltaX = currentX - touch.startX,
					deltaY = currentY - touch.startY;

				if( deltaX > touch.threshold && Math.abs( deltaX ) > Math.abs( deltaY ) ) {
					touch.captured = true;
					navigateLeft();
				}
				else if( deltaX < -touch.threshold && Math.abs( deltaX ) > Math.abs( deltaY ) ) {
					touch.captured = true;
					navigateRight();
				}
				else if( deltaY > touch.threshold ) {
					touch.captured = true;
					navigateUp();
				}
				else if( deltaY < -touch.threshold ) {
					touch.captured = true;
					navigateDown();
				}

				// If we're embedded, only block touch events if they have
				// triggered an action
				if( config.embedded ) {
					if( touch.captured || isVerticalSlide( currentSlide ) ) {
						event.preventDefault();
					}
				}
				// Not embedded? Block them all to avoid needless tossing
				// around of the viewport in iOS
				else {
					event.preventDefault();
				}

			}
		}
		// There's a bug with swiping on some Android devices unless
		// the default action is always prevented
		else if( UA.match( /android/gi ) ) {
			event.preventDefault();
		}

	}

	/**
	 * Handler for the 'touchend' event.
	 */
	function onTouchEnd( event ) {

		touch.captured = false;

	}

	/**
	 * Convert pointer down to touch start.
	 */
	function onPointerDown( event ) {

		if( event.pointerType === event.MSPOINTER_TYPE_TOUCH || event.pointerType === "touch" ) {
			event.touches = [{ clientX: event.clientX, clientY: event.clientY }];
			onTouchStart( event );
		}

	}

	/**
	 * Convert pointer move to touch move.
	 */
	function onPointerMove( event ) {

		if( event.pointerType === event.MSPOINTER_TYPE_TOUCH || event.pointerType === "touch" )  {
			event.touches = [{ clientX: event.clientX, clientY: event.clientY }];
			onTouchMove( event );
		}

	}

	/**
	 * Convert pointer up to touch end.
	 */
	function onPointerUp( event ) {

		if( event.pointerType === event.MSPOINTER_TYPE_TOUCH || event.pointerType === "touch" )  {
			event.touches = [{ clientX: event.clientX, clientY: event.clientY }];
			onTouchEnd( event );
		}

	}

	/**
	 * Handles mouse wheel scrolling, throttled to avoid skipping
	 * multiple slides.
	 */
	function onDocumentMouseScroll( event ) {

		if( Date.now() - lastMouseWheelStep > 600 ) {

			lastMouseWheelStep = Date.now();

			var delta = event.detail || -event.wheelDelta;
			if( delta > 0 ) {
				navigateNext();
			}
			else {
				navigatePrev();
			}

		}

	}

	/**
	 * Clicking on the progress bar results in a navigation to the
	 * closest approximate horizontal slide using this equation:
	 *
	 * ( clickX / presentationWidth ) * numberOfSlides
	 */
	function onProgressClicked( event ) {

		onUserInput( event );

		event.preventDefault();

		var slidesTotal = toArray( dom.wrapper.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ) ).length;
		var slideIndex = Math.floor( ( event.clientX / dom.wrapper.offsetWidth ) * slidesTotal );

		if( config.rtl ) {
			slideIndex = slidesTotal - slideIndex;
		}

		slide( slideIndex );

	}

	/**
	 * Event handler for navigation control buttons.
	 */
	function onNavigateLeftClicked( event ) { event.preventDefault(); onUserInput(); navigateLeft(); }
	function onNavigateRightClicked( event ) { event.preventDefault(); onUserInput(); navigateRight(); }
	function onNavigateUpClicked( event ) { event.preventDefault(); onUserInput(); navigateUp(); }
	function onNavigateDownClicked( event ) { event.preventDefault(); onUserInput(); navigateDown(); }
	function onNavigatePrevClicked( event ) { event.preventDefault(); onUserInput(); navigatePrev(); }
	function onNavigateNextClicked( event ) { event.preventDefault(); onUserInput(); navigateNext(); }

	/**
	 * Handler for the window level 'hashchange' event.
	 */
	function onWindowHashChange( event ) {

		readURL();

	}

	/**
	 * Handler for the window level 'resize' event.
	 */
	function onWindowResize( event ) {

		layout();

	}

	/**
	 * Handle for the window level 'visibilitychange' event.
	 */
	function onPageVisibilityChange( event ) {

		var isHidden =  document.webkitHidden ||
						document.msHidden ||
						document.hidden;

		// If, after clicking a link or similar and we're coming back,
		// focus the document.body to ensure we can use keyboard shortcuts
		if( isHidden === false && document.activeElement !== document.body ) {
			// Not all elements support .blur() - SVGs among them.
			if( typeof document.activeElement.blur === 'function' ) {
				document.activeElement.blur();
			}
			document.body.focus();
		}

	}

	/**
	 * Invoked when a slide is and we're in the overview.
	 */
	function onOverviewSlideClicked( event ) {

		// TODO There's a bug here where the event listeners are not
		// removed after deactivating the overview.
		if( eventsAreBound && isOverview() ) {
			event.preventDefault();

			var element = event.target;

			while( element && !element.nodeName.match( /section/gi ) ) {
				element = element.parentNode;
			}

			if( element && !element.classList.contains( 'disabled' ) ) {

				deactivateOverview();

				if( element.nodeName.match( /section/gi ) ) {
					var h = parseInt( element.getAttribute( 'data-index-h' ), 10 ),
						v = parseInt( element.getAttribute( 'data-index-v' ), 10 );

					slide( h, v );
				}

			}
		}

	}

	/**
	 * Handles clicks on links that are set to preview in the
	 * iframe overlay.
	 */
	function onPreviewLinkClicked( event ) {

		if( event.currentTarget && event.currentTarget.hasAttribute( 'href' ) ) {
			var url = event.currentTarget.getAttribute( 'href' );
			if( url ) {
				showPreview( url );
				event.preventDefault();
			}
		}

	}

	/**
	 * Handles click on the auto-sliding controls element.
	 */
	function onAutoSlidePlayerClick( event ) {

		// Replay
		if( Reveal.isLastSlide() && config.loop === false ) {
			slide( 0, 0 );
			resumeAutoSlide();
		}
		// Resume
		else if( autoSlidePaused ) {
			resumeAutoSlide();
		}
		// Pause
		else {
			pauseAutoSlide();
		}

	}


	// --------------------------------------------------------------------//
	// ------------------------ PLAYBACK COMPONENT ------------------------//
	// --------------------------------------------------------------------//


	/**
	 * Constructor for the playback component, which displays
	 * play/pause/progress controls.
	 *
	 * @param {HTMLElement} container The component will append
	 * itself to this
	 * @param {Function} progressCheck A method which will be
	 * called frequently to get the current progress on a range
	 * of 0-1
	 */
	function Playback( container, progressCheck ) {

		// Cosmetics
		this.diameter = 100;
		this.diameter2 = this.diameter/2;
		this.thickness = 6;

		// Flags if we are currently playing
		this.playing = false;

		// Current progress on a 0-1 range
		this.progress = 0;

		// Used to loop the animation smoothly
		this.progressOffset = 1;

		this.container = container;
		this.progressCheck = progressCheck;

		this.canvas = document.createElement( 'canvas' );
		this.canvas.className = 'playback';
		this.canvas.width = this.diameter;
		this.canvas.height = this.diameter;
		this.canvas.style.width = this.diameter2 + 'px';
		this.canvas.style.height = this.diameter2 + 'px';
		this.context = this.canvas.getContext( '2d' );

		this.container.appendChild( this.canvas );

		this.render();

	}

	Playback.prototype.setPlaying = function( value ) {

		var wasPlaying = this.playing;

		this.playing = value;

		// Start repainting if we weren't already
		if( !wasPlaying && this.playing ) {
			this.animate();
		}
		else {
			this.render();
		}

	};

	Playback.prototype.animate = function() {

		var progressBefore = this.progress;

		this.progress = this.progressCheck();

		// When we loop, offset the progress so that it eases
		// smoothly rather than immediately resetting
		if( progressBefore > 0.8 && this.progress < 0.2 ) {
			this.progressOffset = this.progress;
		}

		this.render();

		if( this.playing ) {
			features.requestAnimationFrameMethod.call( window, this.animate.bind( this ) );
		}

	};

	/**
	 * Renders the current progress and playback state.
	 */
	Playback.prototype.render = function() {

		var progress = this.playing ? this.progress : 0,
			radius = ( this.diameter2 ) - this.thickness,
			x = this.diameter2,
			y = this.diameter2,
			iconSize = 28;

		// Ease towards 1
		this.progressOffset += ( 1 - this.progressOffset ) * 0.1;

		var endAngle = ( - Math.PI / 2 ) + ( progress * ( Math.PI * 2 ) );
		var startAngle = ( - Math.PI / 2 ) + ( this.progressOffset * ( Math.PI * 2 ) );

		this.context.save();
		this.context.clearRect( 0, 0, this.diameter, this.diameter );

		// Solid background color
		this.context.beginPath();
		this.context.arc( x, y, radius + 4, 0, Math.PI * 2, false );
		this.context.fillStyle = 'rgba( 0, 0, 0, 0.4 )';
		this.context.fill();

		// Draw progress track
		this.context.beginPath();
		this.context.arc( x, y, radius, 0, Math.PI * 2, false );
		this.context.lineWidth = this.thickness;
		this.context.strokeStyle = '#666';
		this.context.stroke();

		if( this.playing ) {
			// Draw progress on top of track
			this.context.beginPath();
			this.context.arc( x, y, radius, startAngle, endAngle, false );
			this.context.lineWidth = this.thickness;
			this.context.strokeStyle = '#fff';
			this.context.stroke();
		}

		this.context.translate( x - ( iconSize / 2 ), y - ( iconSize / 2 ) );

		// Draw play/pause icons
		if( this.playing ) {
			this.context.fillStyle = '#fff';
			this.context.fillRect( 0, 0, iconSize / 2 - 4, iconSize );
			this.context.fillRect( iconSize / 2 + 4, 0, iconSize / 2 - 4, iconSize );
		}
		else {
			this.context.beginPath();
			this.context.translate( 4, 0 );
			this.context.moveTo( 0, 0 );
			this.context.lineTo( iconSize - 4, iconSize / 2 );
			this.context.lineTo( 0, iconSize );
			this.context.fillStyle = '#fff';
			this.context.fill();
		}

		this.context.restore();

	};

	Playback.prototype.on = function( type, listener ) {
		this.canvas.addEventListener( type, listener, false );
	};

	Playback.prototype.off = function( type, listener ) {
		this.canvas.removeEventListener( type, listener, false );
	};

	Playback.prototype.destroy = function() {

		this.playing = false;

		if( this.canvas.parentNode ) {
			this.container.removeChild( this.canvas );
		}

	};


	// --------------------------------------------------------------------//
	// ------------------------------- API --------------------------------//
	// --------------------------------------------------------------------//


	Reveal = {
		VERSION: VERSION,

		initialize: initialize,
		configure: configure,
		sync: sync,

		// Navigation methods
		slide: slide,
		left: navigateLeft,
		right: navigateRight,
		up: navigateUp,
		down: navigateDown,
		prev: navigatePrev,
		next: navigateNext,

		// Fragment methods
		navigateFragment: navigateFragment,
		prevFragment: previousFragment,
		nextFragment: nextFragment,

		// Deprecated aliases
		navigateTo: slide,
		navigateLeft: navigateLeft,
		navigateRight: navigateRight,
		navigateUp: navigateUp,
		navigateDown: navigateDown,
		navigatePrev: navigatePrev,
		navigateNext: navigateNext,

		// Forces an update in slide layout
		layout: layout,

		// Randomizes the order of slides
		shuffle: shuffle,

		// Returns an object with the available routes as booleans (left/right/top/bottom)
		availableRoutes: availableRoutes,

		// Returns an object with the available fragments as booleans (prev/next)
		availableFragments: availableFragments,

		// Toggles the overview mode on/off
		toggleOverview: toggleOverview,

		// Toggles the "black screen" mode on/off
		togglePause: togglePause,

		// Toggles the auto slide mode on/off
		toggleAutoSlide: toggleAutoSlide,

		// State checks
		isOverview: isOverview,
		isPaused: isPaused,
		isAutoSliding: isAutoSliding,

		// Adds or removes all internal event listeners (such as keyboard)
		addEventListeners: addEventListeners,
		removeEventListeners: removeEventListeners,

		// Facility for persisting and restoring the presentation state
		getState: getState,
		setState: setState,

		// Presentation progress on range of 0-1
		getProgress: getProgress,

		// Returns the indices of the current, or specified, slide
		getIndices: getIndices,

		getTotalSlides: getTotalSlides,

		// Returns the slide element at the specified index
		getSlide: getSlide,

		// Returns the slide background element at the specified index
		getSlideBackground: getSlideBackground,

		// Returns the speaker notes string for a slide, or null
		getSlideNotes: getSlideNotes,

		// Returns the previous slide element, may be null
		getPreviousSlide: function() {
			return previousSlide;
		},

		// Returns the current slide element
		getCurrentSlide: function() {
			return currentSlide;
		},

		// Returns the current scale of the presentation content
		getScale: function() {
			return scale;
		},

		// Returns the current configuration object
		getConfig: function() {
			return config;
		},

		// Helper method, retrieves query string as a key/value hash
		getQueryHash: function() {
			var query = {};

			location.search.replace( /[A-Z0-9]+?=([\w\.%-]*)/gi, function(a) {
				query[ a.split( '=' ).shift() ] = a.split( '=' ).pop();
			} );

			// Basic deserialization
			for( var i in query ) {
				var value = query[ i ];

				query[ i ] = deserialize( unescape( value ) );
			}

			return query;
		},

		// Returns true if we're currently on the first slide
		isFirstSlide: function() {
			return ( indexh === 0 && indexv === 0 );
		},

		// Returns true if we're currently on the last slide
		isLastSlide: function() {
			if( currentSlide ) {
				// Does this slide has next a sibling?
				if( currentSlide.nextElementSibling ) return false;

				// If it's vertical, does its parent have a next sibling?
				if( isVerticalSlide( currentSlide ) && currentSlide.parentNode.nextElementSibling ) return false;

				return true;
			}

			return false;
		},

		// Checks if reveal.js has been loaded and is ready for use
		isReady: function() {
			return loaded;
		},

		// Forward event binding to the reveal DOM element
		addEventListener: function( type, listener, useCapture ) {
			if( 'addEventListener' in window ) {
				( dom.wrapper || document.querySelector( '.reveal' ) ).addEventListener( type, listener, useCapture );
			}
		},
		removeEventListener: function( type, listener, useCapture ) {
			if( 'addEventListener' in window ) {
				( dom.wrapper || document.querySelector( '.reveal' ) ).removeEventListener( type, listener, useCapture );
			}
		},

		// Programatically triggers a keyboard event
		triggerKey: function( keyCode ) {
			onDocumentKeyDown( { keyCode: keyCode } );
		},

		// Registers a new shortcut to include in the help overlay
		registerKeyboardShortcut: function( key, value ) {
			keyboardShortcuts[key] = value;
		}
	};

	return Reveal;

}));
