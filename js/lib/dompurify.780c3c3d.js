var e=Object.hasOwnProperty,t=Object.setPrototypeOf,r=Object.isFrozen,n=Object.keys,o=Object.freeze,i=Object.seal,a="undefined"!=typeof Reflect&&Reflect,l=a.apply,c=a.construct;l||(l=function(e,t,r){return e.apply(t,r)}),o||(o=function(e){return e}),i||(i=function(e){return e}),c||(c=function(e,t){return new(Function.prototype.bind.apply(e,[null].concat(function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}(t))))});var s=S(Array.prototype.forEach),u=S(Array.prototype.indexOf),d=S(Array.prototype.join),f=S(Array.prototype.pop),p=S(Array.prototype.push),m=S(Array.prototype.slice),y=S(String.prototype.toLowerCase),g=S(String.prototype.match),h=S(String.prototype.replace),v=S(String.prototype.indexOf),b=S(String.prototype.trim),T=S(RegExp.prototype.test),A=L(RegExp),x=L(TypeError);function S(e){return function(t){for(var r=arguments.length,n=Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return l(e,t,n)}}function L(e){return function(){for(var t=arguments.length,r=Array(t),n=0;n<t;n++)r[n]=arguments[n];return c(e,r)}}function E(e,n){t&&t(e,null);for(var o=n.length;o--;){var i=n[o];if("string"==typeof i){var a=y(i);a!==i&&(r(n)||(n[o]=a),i=a)}e[i]=!0}return e}function k(t){var r={},n=void 0;for(n in t)l(e,t,[n])&&(r[n]=t[n]);return r}var M=o(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),_=o(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","audio","canvas","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","video","view","vkern"]),N=o(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),w=o(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),D=o(["#text"]),O=o(["accept","action","align","alt","autocomplete","background","bgcolor","border","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","coords","crossorigin","datetime","default","dir","disabled","download","enctype","face","for","headers","height","hidden","high","href","hreflang","id","integrity","ismap","label","lang","list","loop","low","max","maxlength","media","method","min","minlength","multiple","name","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","type","usemap","valign","value","width","xmlns"]),R=o(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","tabindex","targetx","targety","transform","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),H=o(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),C=o(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),F=i(/\{\{[\s\S]*|[\s\S]*\}\}/gm),z=i(/<%[\s\S]*|[\s\S]*%>/gm),I=i(/^data-[\-\w.\u00B7-\uFFFF]/),U=i(/^aria-[\-\w]+$/),j=i(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),P=i(/^(?:\w+script|data):/i),W=i(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205f\u3000]/g),B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function q(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}var G=function(){return"undefined"==typeof window?null:window},K=function(e,t){if("object"!==(void 0===e?"undefined":B(e))||"function"!=typeof e.createPolicy)return null;var r=null;t.currentScript&&t.currentScript.hasAttribute("data-tt-policy-suffix")&&(r=t.currentScript.getAttribute("data-tt-policy-suffix"));var n="dompurify"+(r?"#"+r:"");try{return e.createPolicy(n,{createHTML:function(e){return e}})}catch(e){return console.warn("TrustedTypes policy "+n+" could not be created."),null}};var V=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G(),r=function(t){return e(t)};if(r.version="2.0.8",r.removed=[],!t||!t.document||9!==t.document.nodeType)return r.isSupported=!1,r;var i=t.document,a=!1,l=!1,c=t.document,S=t.DocumentFragment,L=t.HTMLTemplateElement,V=t.Node,Y=t.NodeFilter,X=t.NamedNodeMap,$=void 0===X?t.NamedNodeMap||t.MozNamedAttrMap:X,J=t.Text,Q=t.Comment,Z=t.DOMParser,ee=t.trustedTypes;if("function"==typeof L){var te=c.createElement("template");te.content&&te.content.ownerDocument&&(c=te.content.ownerDocument)}var re=K(ee,i),ne=re?re.createHTML(""):"",oe=c,ie=oe.implementation,ae=oe.createNodeIterator,le=oe.getElementsByTagName,ce=oe.createDocumentFragment,se=i.importNode,ue={};r.isSupported=ie&&void 0!==ie.createHTMLDocument&&9!==c.documentMode;var de=F,fe=z,pe=I,me=U,ye=P,ge=W,he=j,ve=null,be=E({},[].concat(q(M),q(_),q(N),q(w),q(D))),Te=null,Ae=E({},[].concat(q(O),q(R),q(H),q(C))),xe=null,Se=null,Le=!0,Ee=!0,ke=!1,Me=!1,_e=!1,Ne=!1,we=!1,De=!1,Oe=!1,Re=!1,He=!1,Ce=!1,Fe=!0,ze=!0,Ie=!1,Ue={},je=E({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","plaintext","script","style","svg","template","thead","title","video","xmp"]),Pe=E({},["audio","video","img","source","image"]),We=null,Be=E({},["alt","class","for","id","label","name","pattern","placeholder","summary","title","value","style","xmlns"]),qe=null,Ge=c.createElement("form"),Ke=function(e){qe&&qe===e||(e&&"object"===(void 0===e?"undefined":B(e))||(e={}),ve="ALLOWED_TAGS"in e?E({},e.ALLOWED_TAGS):be,Te="ALLOWED_ATTR"in e?E({},e.ALLOWED_ATTR):Ae,We="ADD_URI_SAFE_ATTR"in e?E(k(Be),e.ADD_URI_SAFE_ATTR):Be,xe="FORBID_TAGS"in e?E({},e.FORBID_TAGS):{},Se="FORBID_ATTR"in e?E({},e.FORBID_ATTR):{},Ue="USE_PROFILES"in e&&e.USE_PROFILES,Le=!1!==e.ALLOW_ARIA_ATTR,Ee=!1!==e.ALLOW_DATA_ATTR,ke=e.ALLOW_UNKNOWN_PROTOCOLS||!1,Me=e.SAFE_FOR_JQUERY||!1,_e=e.SAFE_FOR_TEMPLATES||!1,Ne=e.WHOLE_DOCUMENT||!1,Oe=e.RETURN_DOM||!1,Re=e.RETURN_DOM_FRAGMENT||!1,He=e.RETURN_DOM_IMPORT||!1,Ce=e.RETURN_TRUSTED_TYPE||!1,De=e.FORCE_BODY||!1,Fe=!1!==e.SANITIZE_DOM,ze=!1!==e.KEEP_CONTENT,Ie=e.IN_PLACE||!1,he=e.ALLOWED_URI_REGEXP||he,_e&&(Ee=!1),Re&&(Oe=!0),Ue&&(ve=E({},[].concat(q(D))),Te=[],!0===Ue.html&&(E(ve,M),E(Te,O)),!0===Ue.svg&&(E(ve,_),E(Te,R),E(Te,C)),!0===Ue.svgFilters&&(E(ve,N),E(Te,R),E(Te,C)),!0===Ue.mathMl&&(E(ve,w),E(Te,H),E(Te,C))),e.ADD_TAGS&&(ve===be&&(ve=k(ve)),E(ve,e.ADD_TAGS)),e.ADD_ATTR&&(Te===Ae&&(Te=k(Te)),E(Te,e.ADD_ATTR)),e.ADD_URI_SAFE_ATTR&&E(We,e.ADD_URI_SAFE_ATTR),ze&&(ve["#text"]=!0),Ne&&E(ve,["html","head","body"]),ve.table&&(E(ve,["tbody"]),delete xe.tbody),o&&o(e),qe=e)},Ve=function(e){p(r.removed,{element:e});try{e.parentNode.removeChild(e)}catch(t){e.outerHTML=ne}},Ye=function(e,t){try{p(r.removed,{attribute:t.getAttributeNode(e),from:t})}catch(e){p(r.removed,{attribute:null,from:t})}t.removeAttribute(e)},Xe=function(e){var t=void 0,r=void 0;if(De)e="<remove></remove>"+e;else{var n=g(e,/^[\s]+/);r=n&&n[0]}var o=re?re.createHTML(e):e;if(a)try{t=(new Z).parseFromString(o,"text/html")}catch(e){}if(l&&E(xe,["title"]),!t||!t.documentElement){var i=(t=ie.createHTMLDocument("")).body;i.parentNode.removeChild(i.parentNode.firstElementChild),i.outerHTML=o}return e&&r&&t.body.insertBefore(c.createTextNode(r),t.body.childNodes[0]||null),le.call(t,Ne?"html":"body")[0]};r.isSupported&&(function(){try{Xe('<svg><p><textarea><img src="</textarea><img src=x abc=1//">').querySelector("svg img")&&(a=!0)}catch(e){}}(),function(){try{var e=Xe("<x/><title>&lt;/title&gt;&lt;img&gt;");T(/<\/title/,e.querySelector("title").innerHTML)&&(l=!0)}catch(e){}}());var $e=function(e){return ae.call(e.ownerDocument||e,e,Y.SHOW_ELEMENT|Y.SHOW_COMMENT|Y.SHOW_TEXT,(function(){return Y.FILTER_ACCEPT}),!1)},Je=function(e){return!(e instanceof J||e instanceof Q)&&!("string"==typeof e.nodeName&&"string"==typeof e.textContent&&"function"==typeof e.removeChild&&e.attributes instanceof $&&"function"==typeof e.removeAttribute&&"function"==typeof e.setAttribute&&"string"==typeof e.namespaceURI)},Qe=function(e){return"object"===(void 0===V?"undefined":B(V))?e instanceof V:e&&"object"===(void 0===e?"undefined":B(e))&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},Ze=function(e,t,n){ue[e]&&s(ue[e],(function(e){e.call(r,t,n,qe)}))},et=function(e){var t=void 0;if(Ze("beforeSanitizeElements",e,null),Je(e))return Ve(e),!0;var n=y(e.nodeName);if(Ze("uponSanitizeElement",e,{tagName:n,allowedTags:ve}),("svg"===n||"math"===n)&&0!==e.querySelectorAll("p, br").length)return Ve(e),!0;if(!ve[n]||xe[n]){if(ze&&!je[n]&&"function"==typeof e.insertAdjacentHTML)try{var o=e.innerHTML;e.insertAdjacentHTML("AfterEnd",re?re.createHTML(o):o)}catch(e){}return Ve(e),!0}return"noscript"===n&&T(/<\/noscript/i,e.innerHTML)||"noembed"===n&&T(/<\/noembed/i,e.innerHTML)?(Ve(e),!0):(!Me||e.firstElementChild||e.content&&e.content.firstElementChild||!T(/</g,e.textContent)||(p(r.removed,{element:e.cloneNode()}),e.innerHTML?e.innerHTML=h(e.innerHTML,/</g,"&lt;"):e.innerHTML=h(e.textContent,/</g,"&lt;")),_e&&3===e.nodeType&&(t=e.textContent,t=h(t,de," "),t=h(t,fe," "),e.textContent!==t&&(p(r.removed,{element:e.cloneNode()}),e.textContent=t)),Ze("afterSanitizeElements",e,null),!1)},tt=function(e,t,r){if(Fe&&("id"===t||"name"===t)&&(r in c||r in Ge))return!1;if(Ee&&T(pe,t));else if(Le&&T(me,t));else{if(!Te[t]||Se[t])return!1;if(We[t]);else if(T(he,h(r,ge,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==v(r,"data:")||!Pe[e]){if(ke&&!T(ye,h(r,ge,"")));else if(r)return!1}else;}return!0},rt=function(e){var t=void 0,o=void 0,i=void 0,a=void 0,l=void 0;Ze("beforeSanitizeAttributes",e,null);var c=e.attributes;if(c){var s={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:Te};for(l=c.length;l--;){var p=t=c[l],g=p.name,v=p.namespaceURI;if(o=b(t.value),i=y(g),s.attrName=i,s.attrValue=o,s.keepAttr=!0,s.forceKeepAttr=void 0,Ze("uponSanitizeAttribute",e,s),o=s.attrValue,!s.forceKeepAttr){if("name"===i&&"IMG"===e.nodeName&&c.id)a=c.id,c=m(c,[]),Ye("id",e),Ye(g,e),u(c,a)>l&&e.setAttribute("id",a.value);else{if("INPUT"===e.nodeName&&"type"===i&&"file"===o&&s.keepAttr&&(Te[i]||!Se[i]))continue;"id"===g&&e.setAttribute(g,""),Ye(g,e)}if(s.keepAttr)if(Me&&T(/\/>/i,o))Ye(g,e);else if(T(/svg|math/i,e.namespaceURI)&&T(A("</("+d(n(je),"|")+")","i"),o))Ye(g,e);else{_e&&(o=h(o,de," "),o=h(o,fe," "));var x=e.nodeName.toLowerCase();if(tt(x,i,o))try{v?e.setAttributeNS(v,g,o):e.setAttribute(g,o),f(r.removed)}catch(e){}}}}Ze("afterSanitizeAttributes",e,null)}},nt=function e(t){var r=void 0,n=$e(t);for(Ze("beforeSanitizeShadowDOM",t,null);r=n.nextNode();)Ze("uponSanitizeShadowNode",r,null),et(r)||(r.content instanceof S&&e(r.content),rt(r));Ze("afterSanitizeShadowDOM",t,null)};return r.sanitize=function(e,n){var o=void 0,a=void 0,l=void 0,c=void 0,s=void 0;if(e||(e="\x3c!--\x3e"),"string"!=typeof e&&!Qe(e)){if("function"!=typeof e.toString)throw x("toString is not a function");if("string"!=typeof(e=e.toString()))throw x("dirty is not a string, aborting")}if(!r.isSupported){if("object"===B(t.toStaticHTML)||"function"==typeof t.toStaticHTML){if("string"==typeof e)return t.toStaticHTML(e);if(Qe(e))return t.toStaticHTML(e.outerHTML)}return e}if(we||Ke(n),r.removed=[],"string"==typeof e&&(Ie=!1),Ie);else if(e instanceof V)1===(a=(o=Xe("\x3c!--\x3e")).ownerDocument.importNode(e,!0)).nodeType&&"BODY"===a.nodeName||"HTML"===a.nodeName?o=a:o.appendChild(a);else{if(!Oe&&!_e&&!Ne&&Ce&&-1===e.indexOf("<"))return re?re.createHTML(e):e;if(!(o=Xe(e)))return Oe?null:ne}o&&De&&Ve(o.firstChild);for(var u=$e(Ie?e:o);l=u.nextNode();)3===l.nodeType&&l===c||et(l)||(l.content instanceof S&&nt(l.content),rt(l),c=l);if(c=null,Ie)return e;if(Oe){if(Re)for(s=ce.call(o.ownerDocument);o.firstChild;)s.appendChild(o.firstChild);else s=o;return He&&(s=se.call(i,s,!0)),s}var d=Ne?o.outerHTML:o.innerHTML;return _e&&(d=h(d,de," "),d=h(d,fe," ")),re&&Ce?re.createHTML(d):d},r.setConfig=function(e){Ke(e),we=!0},r.clearConfig=function(){qe=null,we=!1},r.isValidAttribute=function(e,t,r){qe||Ke({});var n=y(e),o=y(t);return tt(n,o,r)},r.addHook=function(e,t){"function"==typeof t&&(ue[e]=ue[e]||[],p(ue[e],t))},r.removeHook=function(e){ue[e]&&f(ue[e])},r.removeHooks=function(e){ue[e]&&(ue[e]=[])},r.removeAllHooks=function(){ue={}},r}();export{V as D};//# sourceMappingURL=dompurify.780c3c3d.js.map
