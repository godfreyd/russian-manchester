
; /* Start:"a:4:{s:4:"full";s:61:"/local/templates/bitlate_pro/js/jquery.min.js?150885328785578";s:6:"source";s:45:"/local/templates/bitlate_pro/js/jquery.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*! jQuery v2.2.4 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="2.2.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isPlainObject:function(a){var b;if("object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype||{},"isPrototypeOf"))return!1;for(b in a);return void 0===b||k.call(a,b)},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=d.createElement("script"),b.text=a,d.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:h.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(d=e.call(arguments,2),f=function(){return a.apply(b||this,d.concat(e.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=R.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return h.call(b,a)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&f.parentNode&&(this.length=1,this[0]=f),this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?void 0!==c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?h.call(n(a),this[0]):h.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||n.uniqueSort(e),D.test(a)&&e.reverse()),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.removeEventListener("DOMContentLoaded",J),a.removeEventListener("load",J),n.ready()}n.ready.promise=function(b){return I||(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(n.ready):(d.addEventListener("DOMContentLoaded",J),a.addEventListener("load",J))),I.promise(b)},n.ready.promise();var K=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)K(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},L=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function M(){this.expando=n.expando+M.uid++}M.uid=1,M.prototype={register:function(a,b){var c=b||{};return a.nodeType?a[this.expando]=c:Object.defineProperty(a,this.expando,{value:c,writable:!0,configurable:!0}),a[this.expando]},cache:function(a){if(!L(a))return{};var b=a[this.expando];return b||(b={},L(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[b]=c;else for(d in b)e[d]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=a[this.expando];if(void 0!==f){if(void 0===b)this.register(a);else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in f?d=[b,e]:(d=e,d=d in f?[d]:d.match(G)||[])),c=d.length;while(c--)delete f[d[c]]}(void 0===b||n.isEmptyObject(f))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!n.isEmptyObject(b)}};var N=new M,O=new M,P=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Q=/[A-Z]/g;function R(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Q,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:P.test(c)?n.parseJSON(c):c;
}catch(e){}O.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return O.hasData(a)||N.hasData(a)},data:function(a,b,c){return O.access(a,b,c)},removeData:function(a,b){O.remove(a,b)},_data:function(a,b,c){return N.access(a,b,c)},_removeData:function(a,b){N.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=O.get(f),1===f.nodeType&&!N.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),R(f,d,e[d])));N.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){O.set(this,a)}):K(this,function(b){var c,d;if(f&&void 0===b){if(c=O.get(f,a)||O.get(f,a.replace(Q,"-$&").toLowerCase()),void 0!==c)return c;if(d=n.camelCase(a),c=O.get(f,d),void 0!==c)return c;if(c=R(f,d,void 0),void 0!==c)return c}else d=n.camelCase(a),this.each(function(){var c=O.get(this,d);O.set(this,d,b),a.indexOf("-")>-1&&void 0!==c&&O.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){O.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=N.get(a,b),c&&(!d||n.isArray(c)?d=N.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return N.get(a,c)||N.access(a,c,{empty:n.Callbacks("once memory").add(function(){N.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=N.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),U=["Top","Right","Bottom","Left"],V=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function W(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&T.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var X=/^(?:checkbox|radio)$/i,Y=/<([\w:-]+)/,Z=/^$|\/(?:java|ecma)script/i,$={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};$.optgroup=$.option,$.tbody=$.tfoot=$.colgroup=$.caption=$.thead,$.th=$.td;function _(a,b){var c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function aa(a,b){for(var c=0,d=a.length;d>c;c++)N.set(a[c],"globalEval",!b||N.get(b[c],"globalEval"))}var ba=/<|&#?\w+;/;function ca(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],o=0,p=a.length;p>o;o++)if(f=a[o],f||0===f)if("object"===n.type(f))n.merge(m,f.nodeType?[f]:f);else if(ba.test(f)){g=g||l.appendChild(b.createElement("div")),h=(Y.exec(f)||["",""])[1].toLowerCase(),i=$[h]||$._default,g.innerHTML=i[1]+n.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;n.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",o=0;while(f=m[o++])if(d&&n.inArray(f,d)>-1)e&&e.push(f);else if(j=n.contains(f.ownerDocument,f),g=_(l.appendChild(f),"script"),j&&aa(g),c){k=0;while(f=g[k++])Z.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var da=/^key/,ea=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,fa=/^([^.]*)(?:\.(.+)|)/;function ga(){return!0}function ha(){return!1}function ia(){try{return d.activeElement}catch(a){}}function ja(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ja(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=ha;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return"undefined"!=typeof n&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(G)||[""],j=b.length;while(j--)h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.hasData(a)&&N.get(a);if(r&&(i=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&N.remove(a,"handle events")}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(N.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())a.rnamespace&&!a.rnamespace.test(g.namespace)||(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!==this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||d,e=c.documentElement,f=c.body,a.pageX=b.clientX+(e&&e.scrollLeft||f&&f.scrollLeft||0)-(e&&e.clientLeft||f&&f.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||f&&f.scrollTop||0)-(e&&e.clientTop||f&&f.clientTop||0)),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ea.test(f)?this.mouseHooks:da.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=d),3===a.target.nodeType&&(a.target=a.target.parentNode),h.filter?h.filter(a,g):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==ia()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===ia()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ga:ha):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:ha,isPropagationStopped:ha,isImmediatePropagationStopped:ha,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ga,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ga,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ga,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||n.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),n.fn.extend({on:function(a,b,c,d){return ja(this,a,b,c,d)},one:function(a,b,c,d){return ja(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=ha),this.each(function(){n.event.remove(this,a,c,b)})}});var ka=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,la=/<script|<style|<link/i,ma=/checked\s*(?:[^=]|=\s*.checked.)/i,na=/^true\/(.*)/,oa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function pa(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function qa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function ra(a){var b=na.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function sa(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(N.hasData(a)&&(f=N.access(a),g=N.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}O.hasData(a)&&(h=O.access(a),i=n.extend({},h),O.set(b,i))}}function ta(a,b){var c=b.nodeName.toLowerCase();"input"===c&&X.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function ua(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&ma.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),ua(f,b,c,d)});if(o&&(e=ca(b,a[0].ownerDocument,!1,a,d),g=e.firstChild,1===e.childNodes.length&&(e=g),g||d)){for(h=n.map(_(e,"script"),qa),i=h.length;o>m;m++)j=e,m!==p&&(j=n.clone(j,!0,!0),i&&n.merge(h,_(j,"script"))),c.call(a[m],j,m);if(i)for(k=h[h.length-1].ownerDocument,n.map(h,ra),m=0;i>m;m++)j=h[m],Z.test(j.type||"")&&!N.access(j,"globalEval")&&n.contains(k,j)&&(j.src?n._evalUrl&&n._evalUrl(j.src):n.globalEval(j.textContent.replace(oa,"")))}return a}function va(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(_(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&aa(_(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(ka,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=_(h),f=_(a),d=0,e=f.length;e>d;d++)ta(f[d],g[d]);if(b)if(c)for(f=f||_(a),g=g||_(h),d=0,e=f.length;e>d;d++)sa(f[d],g[d]);else sa(a,h);return g=_(h,"script"),g.length>0&&aa(g,!i&&_(a,"script")),h},cleanData:function(a){for(var b,c,d,e=n.event.special,f=0;void 0!==(c=a[f]);f++)if(L(c)){if(b=c[N.expando]){if(b.events)for(d in b.events)e[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);c[N.expando]=void 0}c[O.expando]&&(c[O.expando]=void 0)}}}),n.fn.extend({domManip:ua,detach:function(a){return va(this,a,!0)},remove:function(a){return va(this,a)},text:function(a){return K(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.appendChild(a)}})},prepend:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(_(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return K(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!la.test(a)&&!$[(Y.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(_(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return ua(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(_(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),f=e.length-1,h=0;f>=h;h++)c=h===f?this:this.clone(!0),n(e[h])[b](c),g.apply(d,c.get());return this.pushStack(d)}});var wa,xa={HTML:"block",BODY:"block"};function ya(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function za(a){var b=d,c=xa[a];return c||(c=ya(a,b),"none"!==c&&c||(wa=(wa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=wa[0].contentDocument,b.write(),b.close(),c=ya(a,b),wa.detach()),xa[a]=c),c}var Aa=/^margin/,Ba=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ca=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},Da=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Ea=d.documentElement;!function(){var b,c,e,f,g=d.createElement("div"),h=d.createElement("div");if(h.style){h.style.backgroundClip="content-box",h.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===h.style.backgroundClip,g.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",g.appendChild(h);function i(){h.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",h.innerHTML="",Ea.appendChild(g);var d=a.getComputedStyle(h);b="1%"!==d.top,f="2px"===d.marginLeft,c="4px"===d.width,h.style.marginRight="50%",e="4px"===d.marginRight,Ea.removeChild(g)}n.extend(l,{pixelPosition:function(){return i(),b},boxSizingReliable:function(){return null==c&&i(),c},pixelMarginRight:function(){return null==c&&i(),e},reliableMarginLeft:function(){return null==c&&i(),f},reliableMarginRight:function(){var b,c=h.appendChild(d.createElement("div"));return c.style.cssText=h.style.cssText="-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",h.style.width="1px",Ea.appendChild(g),b=!parseFloat(a.getComputedStyle(c).marginRight),Ea.removeChild(g),h.removeChild(c),b}})}}();function Fa(a,b,c){var d,e,f,g,h=a.style;return c=c||Ca(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Ba.test(g)&&Aa.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0!==g?g+"":g}function Ga(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Ha=/^(none|table(?!-c[ea]).+)/,Ia={position:"absolute",visibility:"hidden",display:"block"},Ja={letterSpacing:"0",fontWeight:"400"},Ka=["Webkit","O","Moz","ms"],La=d.createElement("div").style;function Ma(a){if(a in La)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ka.length;while(c--)if(a=Ka[c]+b,a in La)return a}function Na(a,b,c){var d=T.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Oa(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+U[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+U[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+U[f]+"Width",!0,e))):(g+=n.css(a,"padding"+U[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+U[f]+"Width",!0,e)));return g}function Pa(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ca(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Fa(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ba.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Oa(a,b,c||(g?"border":"content"),d,f)+"px"}function Qa(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=N.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&V(d)&&(f[g]=N.access(d,"olddisplay",za(d.nodeName)))):(e=V(d),"none"===c&&e||N.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Fa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=T.exec(c))&&e[1]&&(c=W(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Fa(a,b,d)),"normal"===e&&b in Ja&&(e=Ja[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Ha.test(n.css(a,"display"))&&0===a.offsetWidth?Da(a,Ia,function(){return Pa(a,b,d)}):Pa(a,b,d):void 0},set:function(a,c,d){var e,f=d&&Ca(a),g=d&&Oa(a,b,d,"border-box"===n.css(a,"boxSizing",!1,f),f);return g&&(e=T.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=n.css(a,b)),Na(a,c,g)}}}),n.cssHooks.marginLeft=Ga(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Fa(a,"marginLeft"))||a.getBoundingClientRect().left-Da(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px":void 0}),n.cssHooks.marginRight=Ga(l.reliableMarginRight,function(a,b){return b?Da(a,{display:"inline-block"},Fa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+U[d]+b]=f[d]||f[d-2]||f[0];return e}},Aa.test(a)||(n.cssHooks[a+b].set=Na)}),n.fn.extend({css:function(a,b){return K(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ca(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Qa(this,!0)},hide:function(){return Qa(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){V(this)?n(this).show():n(this).hide()})}});function Ra(a,b,c,d,e){return new Ra.prototype.init(a,b,c,d,e)}n.Tween=Ra,Ra.prototype={constructor:Ra,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ra.propHooks[this.prop];return a&&a.get?a.get(this):Ra.propHooks._default.get(this)},run:function(a){var b,c=Ra.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ra.propHooks._default.set(this),this}},Ra.prototype.init.prototype=Ra.prototype,Ra.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},Ra.propHooks.scrollTop=Ra.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=Ra.prototype.init,n.fx.step={};var Sa,Ta,Ua=/^(?:toggle|show|hide)$/,Va=/queueHooks$/;function Wa(){return a.setTimeout(function(){Sa=void 0}),Sa=n.now()}function Xa(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=U[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ya(a,b,c){for(var d,e=(_a.tweeners[b]||[]).concat(_a.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Za(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&V(a),q=N.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?N.get(a,"olddisplay")||za(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Ua.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?za(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=N.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;N.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ya(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function $a(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function _a(a,b,c){var d,e,f=0,g=_a.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Sa||Wa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:Sa||Wa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for($a(k,j.opts.specialEasing);g>f;f++)if(d=_a.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,Ya,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(_a,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return W(c.elem,a,T.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],_a.tweeners[c]=_a.tweeners[c]||[],_a.tweeners[c].unshift(b)},prefilters:[Za],prefilter:function(a,b){b?_a.prefilters.unshift(a):_a.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(V).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=_a(this,n.extend({},a),f);(e||N.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=N.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Va.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=N.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Xa(b,!0),a,d,e)}}),n.each({slideDown:Xa("show"),slideUp:Xa("hide"),slideToggle:Xa("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Sa=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Sa=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ta||(Ta=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(Ta),Ta=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",l.checkOn=""!==a.value,l.optSelected=c.selected,b.disabled=!0,l.optDisabled=!c.disabled,a=d.createElement("input"),a.value="t",a.type="radio",l.radioValue="t"===a.value}();var ab,bb=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return K(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ab:void 0)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)}}),ab={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=bb[b]||n.find.attr;bb[b]=function(a,b,d){var e,f;return d||(f=bb[b],bb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,bb[b]=f),e}});var cb=/^(?:input|select|textarea|button)$/i,db=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return K(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),
void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):cb.test(a.nodeName)||db.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var eb=/[\t\r\n\f]/g;function fb(a){return a.getAttribute&&a.getAttribute("class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,fb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,fb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,fb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=fb(this),b&&N.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":N.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+fb(c)+" ").replace(eb," ").indexOf(b)>-1)return!0;return!1}});var gb=/\r/g,hb=/[\x20\t\r\n\f]+/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(gb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a)).replace(hb," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(n.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var ib=/^(?:focusinfocus|focusoutblur)$/;n.extend(n.event,{trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!ib.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),l=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},f||!o.trigger||o.trigger.apply(e,c)!==!1)){if(!f&&!o.noBubble&&!n.isWindow(e)){for(j=o.delegateType||q,ib.test(j+q)||(h=h.parentNode);h;h=h.parentNode)p.push(h),i=h;i===(e.ownerDocument||d)&&p.push(i.defaultView||i.parentWindow||a)}g=0;while((h=p[g++])&&!b.isPropagationStopped())b.type=g>1?j:o.bindType||q,m=(N.get(h,"events")||{})[b.type]&&N.get(h,"handle"),m&&m.apply(h,c),m=l&&h[l],m&&m.apply&&L(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=q,f||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!L(e)||l&&n.isFunction(e[q])&&!n.isWindow(e)&&(i=e[l],i&&(e[l]=null),n.event.triggered=q,e[q](),n.event.triggered=void 0,i&&(e[l]=i)),b.result}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b)}}),n.fn.extend({trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),l.focusin="onfocusin"in a,l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=N.access(d,b);e||d.addEventListener(a,c,!0),N.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=N.access(d,b)-1;e?N.access(d,b,e):(d.removeEventListener(a,c,!0),N.remove(d,b))}}});var jb=a.location,kb=n.now(),lb=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var mb=/#.*$/,nb=/([?&])_=[^&]*/,ob=/^(.*?):[ \t]*([^\r\n]*)$/gm,pb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,qb=/^(?:GET|HEAD)$/,rb=/^\/\//,sb={},tb={},ub="*/".concat("*"),vb=d.createElement("a");vb.href=jb.href;function wb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function xb(a,b,c,d){var e={},f=a===tb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function yb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function zb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Ab(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:jb.href,type:"GET",isLocal:pb.test(jb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":ub,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?yb(yb(a,n.ajaxSettings),b):yb(n.ajaxSettings,a)},ajaxPrefilter:wb(sb),ajaxTransport:wb(tb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m=n.ajaxSetup({},c),o=m.context||m,p=m.context&&(o.nodeType||o.jquery)?n(o):n.event,q=n.Deferred(),r=n.Callbacks("once memory"),s=m.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,getResponseHeader:function(a){var b;if(2===v){if(!h){h={};while(b=ob.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===v?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return v||(a=u[c]=u[c]||a,t[a]=b),this},overrideMimeType:function(a){return v||(m.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>v)for(b in a)s[b]=[s[b],a[b]];else x.always(a[x.status]);return this},abort:function(a){var b=a||w;return e&&e.abort(b),z(0,b),this}};if(q.promise(x).complete=r.add,x.success=x.done,x.error=x.fail,m.url=((b||m.url||jb.href)+"").replace(mb,"").replace(rb,jb.protocol+"//"),m.type=c.method||c.type||m.method||m.type,m.dataTypes=n.trim(m.dataType||"*").toLowerCase().match(G)||[""],null==m.crossDomain){j=d.createElement("a");try{j.href=m.url,j.href=j.href,m.crossDomain=vb.protocol+"//"+vb.host!=j.protocol+"//"+j.host}catch(y){m.crossDomain=!0}}if(m.data&&m.processData&&"string"!=typeof m.data&&(m.data=n.param(m.data,m.traditional)),xb(sb,m,c,x),2===v)return x;k=n.event&&m.global,k&&0===n.active++&&n.event.trigger("ajaxStart"),m.type=m.type.toUpperCase(),m.hasContent=!qb.test(m.type),f=m.url,m.hasContent||(m.data&&(f=m.url+=(lb.test(f)?"&":"?")+m.data,delete m.data),m.cache===!1&&(m.url=nb.test(f)?f.replace(nb,"$1_="+kb++):f+(lb.test(f)?"&":"?")+"_="+kb++)),m.ifModified&&(n.lastModified[f]&&x.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&x.setRequestHeader("If-None-Match",n.etag[f])),(m.data&&m.hasContent&&m.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",m.contentType),x.setRequestHeader("Accept",m.dataTypes[0]&&m.accepts[m.dataTypes[0]]?m.accepts[m.dataTypes[0]]+("*"!==m.dataTypes[0]?", "+ub+"; q=0.01":""):m.accepts["*"]);for(l in m.headers)x.setRequestHeader(l,m.headers[l]);if(m.beforeSend&&(m.beforeSend.call(o,x,m)===!1||2===v))return x.abort();w="abort";for(l in{success:1,error:1,complete:1})x[l](m[l]);if(e=xb(tb,m,c,x)){if(x.readyState=1,k&&p.trigger("ajaxSend",[x,m]),2===v)return x;m.async&&m.timeout>0&&(i=a.setTimeout(function(){x.abort("timeout")},m.timeout));try{v=1,e.send(t,z)}catch(y){if(!(2>v))throw y;z(-1,y)}}else z(-1,"No Transport");function z(b,c,d,h){var j,l,t,u,w,y=c;2!==v&&(v=2,i&&a.clearTimeout(i),e=void 0,g=h||"",x.readyState=b>0?4:0,j=b>=200&&300>b||304===b,d&&(u=zb(m,x,d)),u=Ab(m,u,x,j),j?(m.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(n.lastModified[f]=w),w=x.getResponseHeader("etag"),w&&(n.etag[f]=w)),204===b||"HEAD"===m.type?y="nocontent":304===b?y="notmodified":(y=u.state,l=u.data,t=u.error,j=!t)):(t=y,!b&&y||(y="error",0>b&&(b=0))),x.status=b,x.statusText=(c||y)+"",j?q.resolveWith(o,[l,y,x]):q.rejectWith(o,[x,y,t]),x.statusCode(s),s=void 0,k&&p.trigger(j?"ajaxSuccess":"ajaxError",[x,m,j?l:t]),r.fireWith(o,[x,y]),k&&(p.trigger("ajaxComplete",[x,m]),--n.active||n.event.trigger("ajaxStop")))}return x},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return!n.expr.filters.visible(a)},n.expr.filters.visible=function(a){return a.offsetWidth>0||a.offsetHeight>0||a.getClientRects().length>0};var Bb=/%20/g,Cb=/\[\]$/,Db=/\r?\n/g,Eb=/^(?:submit|button|image|reset|file)$/i,Fb=/^(?:input|select|textarea|keygen)/i;function Gb(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||Cb.test(a)?d(a,e):Gb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Gb(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Gb(c,a[c],b,e);return d.join("&").replace(Bb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Fb.test(this.nodeName)&&!Eb.test(a)&&(this.checked||!X.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(Db,"\r\n")}}):{name:b.name,value:c.replace(Db,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Hb={0:200,1223:204},Ib=n.ajaxSettings.xhr();l.cors=!!Ib&&"withCredentials"in Ib,l.ajax=Ib=!!Ib,n.ajaxTransport(function(b){var c,d;return l.cors||Ib&&!b.crossDomain?{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Hb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=n("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Jb=[],Kb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Jb.pop()||n.expando+"_"+kb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Kb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Kb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Kb,"$1"+e):b.jsonp!==!1&&(b.url+=(lb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Jb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||d;var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ca([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var Lb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Lb)return Lb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function Mb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(e=d.getBoundingClientRect(),c=Mb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ea})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;n.fn[a]=function(d){return K(this,function(a,d,e){var f=Mb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ga(l.pixelPosition,function(a,c){return c?(c=Fa(a,b),Ba.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return K(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)},size:function(){return this.length}}),n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Nb=a.jQuery,Ob=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Ob),b&&a.jQuery===n&&(a.jQuery=Nb),n},b||(a.jQuery=a.$=n),n});

/* End */
;
; /* Start:"a:4:{s:4:"full";s:66:"/local/templates/bitlate_pro/js/foundation.min.js?1508853287108018";s:6:"source";s:49:"/local/templates/bitlate_pro/js/foundation.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}!function(a){"use strict";function e(a){if(void 0===Function.prototype.name){var b=/function\s([^(]{1,})\(/,c=b.exec(a.toString());return c&&c.length>1?c[1].trim():""}return void 0===a.prototype?a.constructor.name:a.prototype.constructor.name}function f(a){return!!/true/.test(a)||!/false/.test(a)&&(isNaN(1*a)?a:parseFloat(a))}function g(a){return a.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}var b="6.2.3",c={version:b,_plugins:{},_uuids:[],rtl:function(){return"rtl"===a("html").attr("dir")},plugin:function(a,b){var c=b||e(a),d=g(c);this._plugins[d]=this[c]=a},registerPlugin:function(a,b){var c=b?g(b):e(a.constructor).toLowerCase();a.uuid=this.GetYoDigits(6,c),a.$element.attr("data-"+c)||a.$element.attr("data-"+c,a.uuid),a.$element.data("zfPlugin")||a.$element.data("zfPlugin",a),a.$element.trigger("init.zf."+c),this._uuids.push(a.uuid)},unregisterPlugin:function(a){var b=g(e(a.$element.data("zfPlugin").constructor));this._uuids.splice(this._uuids.indexOf(a.uuid),1),a.$element.removeAttr("data-"+b).removeData("zfPlugin").trigger("destroyed.zf."+b);for(var c in a)a[c]=null},reInit:function(b){var c=b instanceof a;try{if(c)b.each(function(){a(this).data("zfPlugin")._init()});else{var d=typeof b,e=this,f={object:function(b){b.forEach(function(b){b=g(b),a("[data-"+b+"]").foundation("_init")})},string:function(){b=g(b),a("[data-"+b+"]").foundation("_init")},undefined:function(){this.object(Object.keys(e._plugins))}};f[d](b)}}catch(a){console.error(a)}finally{return b}},GetYoDigits:function(a,b){return a=a||6,Math.round(Math.pow(36,a+1)-Math.random()*Math.pow(36,a)).toString(36).slice(1)+(b?"-"+b:"")},reflow:function(b,c){"undefined"==typeof c?c=Object.keys(this._plugins):"string"==typeof c&&(c=[c]);var d=this;a.each(c,function(c,e){var g=d._plugins[e],h=a(b).find("[data-"+e+"]").addBack("[data-"+e+"]");h.each(function(){var b=a(this),c={};if(b.data("zfPlugin"))return void console.warn("Tried to initialize "+e+" on an element that already has a Foundation plugin.");if(b.attr("data-options")){b.attr("data-options").split(";").forEach(function(a,b){var d=a.split(":").map(function(a){return a.trim()});d[0]&&(c[d[0]]=f(d[1]))})}try{b.data("zfPlugin",new g(a(this),c))}catch(a){console.error(a)}finally{return}})})},getFnName:e,transitionend:function(a){var d,b={transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend"},c=document.createElement("div");for(var e in b)"undefined"!=typeof c.style[e]&&(d=b[e]);return d?d:(d=setTimeout(function(){a.triggerHandler("transitionend",[a])},1),"transitionend")}};c.util={throttle:function(a,b){var c=null;return function(){var d=this,e=arguments;null===c&&(c=setTimeout(function(){a.apply(d,e),c=null},b))}}};var d=function(b){var d=typeof b,f=a("meta.foundation-mq"),g=a(".no-js");if(f.length||a('<meta class="foundation-mq">').appendTo(document.head),g.length&&g.removeClass("no-js"),"undefined"===d)c.MediaQuery._init(),c.reflow(this);else{if("string"!==d)throw new TypeError("We're sorry, "+d+" is not a valid parameter. You must use a string representing the method you wish to invoke.");var h=Array.prototype.slice.call(arguments,1),i=this.data("zfPlugin");if(void 0===i||void 0===i[b])throw new ReferenceError("We're sorry, '"+b+"' is not an available method for "+(i?e(i):"this element")+".");1===this.length?i[b].apply(i,h):this.each(function(c,d){i[b].apply(a(d).data("zfPlugin"),h)})}return this};window.Foundation=c,a.fn.foundation=d,function(){Date.now&&window.Date.now||(window.Date.now=Date.now=function(){return(new Date).getTime()});for(var a=["webkit","moz"],b=0;b<a.length&&!window.requestAnimationFrame;++b){var c=a[b];window.requestAnimationFrame=window[c+"RequestAnimationFrame"],window.cancelAnimationFrame=window[c+"CancelAnimationFrame"]||window[c+"CancelRequestAnimationFrame"]}if(/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent)||!window.requestAnimationFrame||!window.cancelAnimationFrame){var d=0;window.requestAnimationFrame=function(a){var b=Date.now(),c=Math.max(d+16,b);return setTimeout(function(){a(d=c)},c-b)},window.cancelAnimationFrame=clearTimeout}window.performance&&window.performance.now||(window.performance={start:Date.now(),now:function(){return Date.now()-this.start}})}(),Function.prototype.bind||(Function.prototype.bind=function(a){if("function"!=typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var b=Array.prototype.slice.call(arguments,1),c=this,d=function(){},e=function(){return c.apply(this instanceof d?this:a,b.concat(Array.prototype.slice.call(arguments)))};return this.prototype&&(d.prototype=this.prototype),e.prototype=new d,e})}(jQuery),!function(a){function b(a,b,d,e){var g,h,i,j,f=c(a);if(b){var k=c(b);h=f.offset.top+f.height<=k.height+k.offset.top,g=f.offset.top>=k.offset.top,i=f.offset.left>=k.offset.left,j=f.offset.left+f.width<=k.width+k.offset.left}else h=f.offset.top+f.height<=f.windowDims.height+f.windowDims.offset.top,g=f.offset.top>=f.windowDims.offset.top,i=f.offset.left>=f.windowDims.offset.left,j=f.offset.left+f.width<=f.windowDims.width;var l=[h,g,i,j];return d?i===j==!0:e?g===h==!0:l.indexOf(!1)===-1}function c(a,b){if(a=a.length?a[0]:a,a===window||a===document)throw new Error("I'm sorry, Dave. I'm afraid I can't do that.");var c=a.getBoundingClientRect(),d=a.parentNode.getBoundingClientRect(),e=document.body.getBoundingClientRect(),f=window.pageYOffset,g=window.pageXOffset;return{width:c.width,height:c.height,offset:{top:c.top+f,left:c.left+g},parentDims:{width:d.width,height:d.height,offset:{top:d.top+f,left:d.left+g}},windowDims:{width:e.width,height:e.height,offset:{top:f,left:g}}}}function d(a,b,d,e,f,g){var h=c(a),i=b?c(b):null;switch(d){case"top":return{left:Foundation.rtl()?i.offset.left-h.width+i.width:i.offset.left,top:i.offset.top-(h.height+e)};case"left":return{left:i.offset.left-(h.width+f),top:i.offset.top};case"right":return{left:i.offset.left+i.width+f,top:i.offset.top};case"center top":return{left:i.offset.left+i.width/2-h.width/2,top:i.offset.top-(h.height+e)};case"center bottom":return{left:g?f:i.offset.left+i.width/2-h.width/2,top:i.offset.top+i.height+e};case"center left":return{left:i.offset.left-(h.width+f),top:i.offset.top+i.height/2-h.height/2};case"center right":return{left:i.offset.left+i.width+f+1,top:i.offset.top+i.height/2-h.height/2};case"center":return{left:h.windowDims.offset.left+h.windowDims.width/2-h.width/2,top:h.windowDims.offset.top+h.windowDims.height/2-h.height/2};case"reveal":return{left:(h.windowDims.width-h.width)/2,top:h.windowDims.offset.top+e};case"reveal full":return{left:h.windowDims.offset.left,top:h.windowDims.offset.top};case"left bottom":return{left:i.offset.left-(h.width+f),top:i.offset.top+i.height};case"right bottom":return{left:i.offset.left+i.width+f-h.width,top:i.offset.top+i.height};default:return{left:Foundation.rtl()?i.offset.left-h.width+i.width:i.offset.left,top:i.offset.top+i.height+e}}}Foundation.Box={ImNotTouchingYou:b,GetDimensions:c,GetOffsets:d}}(jQuery),!function(a){function e(a){var b={};for(var c in a)b[a[c]]=a[c];return b}var b={9:"TAB",13:"ENTER",27:"ESCAPE",32:"SPACE",37:"ARROW_LEFT",38:"ARROW_UP",39:"ARROW_RIGHT",40:"ARROW_DOWN"},c={},d={keys:e(b),parseKey:function(a){var c=b[a.which||a.keyCode]||String.fromCharCode(a.which).toUpperCase();return a.shiftKey&&(c="SHIFT_"+c),a.ctrlKey&&(c="CTRL_"+c),a.altKey&&(c="ALT_"+c),c},handleKey:function(b,d,e){var h,i,j,f=c[d],g=this.parseKey(b);if(!f)return console.warn("Component not defined!");if(h="undefined"==typeof f.ltr?f:Foundation.rtl()?a.extend({},f.ltr,f.rtl):a.extend({},f.rtl,f.ltr),i=h[g],j=e[i],j&&"function"==typeof j){var k=j.apply();(e.handled||"function"==typeof e.handled)&&e.handled(k)}else(e.unhandled||"function"==typeof e.unhandled)&&e.unhandled()},findFocusable:function(b){return b.find("a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]").filter(function(){return!(!a(this).is(":visible")||a(this).attr("tabindex")<0)})},register:function(a,b){c[a]=b}};Foundation.Keyboard=d}(jQuery),!function(a){function d(a){var b={};return"string"!=typeof a?b:(a=a.trim().slice(1,-1))?b=a.split("&").reduce(function(a,b){var c=b.replace(/\+/g," ").split("="),d=c[0],e=c[1];return d=decodeURIComponent(d),e=void 0===e?null:decodeURIComponent(e),a.hasOwnProperty(d)?Array.isArray(a[d])?a[d].push(e):a[d]=[a[d],e]:a[d]=e,a},{}):b}var c={queries:[],current:"",_init:function(){var e,b=this,c=a(".foundation-mq").css("font-family");e=d(c);for(var f in e)e.hasOwnProperty(f)&&b.queries.push({name:f,value:"only screen and (min-width: "+e[f]+")"});this.current=this._getCurrentSize(),this._watcher()},atLeast:function(a){var b=this.get(a);return!!b&&window.matchMedia(b).matches},get:function(a){for(var b in this.queries)if(this.queries.hasOwnProperty(b)){var c=this.queries[b];if(a===c.name)return c.value}return null},_getCurrentSize:function(){for(var a,b=0;b<this.queries.length;b++){var c=this.queries[b];window.matchMedia(c.value).matches&&(a=c)}return"object"==typeof a?a.name:a},_watcher:function(){var b=this;a(window).on("resize.zf.mediaquery",function(){var c=b._getCurrentSize(),d=b.current;c!==d&&(b.current=c,a(window).trigger("changed.zf.mediaquery",[c,d]))})}};Foundation.MediaQuery=c,window.matchMedia||(window.matchMedia=function(){"use strict";var a=window.styleMedia||window.media;if(!a){var b=document.createElement("style"),c=document.getElementsByTagName("script")[0],d=null;b.type="text/css",b.id="matchmediajs-test",c.parentNode.insertBefore(b,c),d="getComputedStyle"in window&&window.getComputedStyle(b,null)||b.currentStyle,a={matchMedium:function(a){var c="@media "+a+"{ #matchmediajs-test { width: 1px; } }";return b.styleSheet?b.styleSheet.cssText=c:b.textContent=c,"1px"===d.width}}}return function(b){return{matches:a.matchMedium(b||"all"),media:b||"all"}}}()),Foundation.MediaQuery=c}(jQuery),!function(a){function e(a,b,c){function g(h){f||(f=window.performance.now()),e=h-f,c.apply(b),e<a?d=window.requestAnimationFrame(g,b):(window.cancelAnimationFrame(d),b.trigger("finished.zf.animate",[b]).triggerHandler("finished.zf.animate",[b]))}var d,e,f=null;d=window.requestAnimationFrame(g)}function f(d,e,f,g){function j(){d||e.hide(),k(),g&&g.apply(e)}function k(){e[0].style.transitionDuration=0,e.removeClass(h+" "+i+" "+f)}if(e=a(e).eq(0),e.length){var h=d?b[0]:b[1],i=d?c[0]:c[1];k(),e.addClass(f).css("transition","none"),requestAnimationFrame(function(){e.addClass(h),d&&e.show()}),requestAnimationFrame(function(){e[0].offsetWidth,e.css("transition","").addClass(i)}),e.one(Foundation.transitionend(e),j)}}var b=["mui-enter","mui-leave"],c=["mui-enter-active","mui-leave-active"],d={animateIn:function(a,b,c){f(!0,a,b,c)},animateOut:function(a,b,c){f(!1,a,b,c)}};Foundation.Move=e,Foundation.Motion=d}(jQuery),!function(a){var b={Feather:function(b){var c=arguments.length<=1||void 0===arguments[1]?"zf":arguments[1];b.attr("role","menubar");var d=b.find("li").attr({role:"menuitem"}),e="is-"+c+"-submenu",f=e+"-item",g="is-"+c+"-submenu-parent";b.find("a:first").attr("tabindex",0),d.each(function(){var b=a(this),c=b.children("ul");c.length&&(b.addClass(g).attr({"aria-haspopup":!0,"aria-expanded":!1,"aria-label":b.children("a:first").text()}),c.addClass("submenu "+e).attr({"data-submenu":"","aria-hidden":!0,role:"menu"})),b.parent("[data-submenu]").length&&b.addClass("is-submenu-item "+f)})},Burn:function(a,b){var d=(a.find("li").removeAttr("tabindex"),"is-"+b+"-submenu"),e=d+"-item",f="is-"+b+"-submenu-parent";a.find("*").removeClass(d+" "+e+" "+f+" is-submenu-item submenu is-active").removeAttr("data-submenu").css("display","")}};Foundation.Nest=b}(jQuery),!function(a){function b(a,b,c){var h,i,d=this,e=b.duration,f=Object.keys(a.data())[0]||"timer",g=-1;this.isPaused=!1,this.restart=function(){g=-1,clearTimeout(i),this.start()},this.start=function(){this.isPaused=!1,clearTimeout(i),g=g<=0?e:g,a.data("paused",!1),h=Date.now(),i=setTimeout(function(){b.infinite&&d.restart(),c()},g),a.trigger("timerstart.zf."+f)},this.pause=function(){this.isPaused=!0,clearTimeout(i),a.data("paused",!0);var b=Date.now();g-=b-h,a.trigger("timerpaused.zf."+f)}}function c(b,c){function f(){e--,0===e&&c()}var e=b.length;0===e&&c(),b.each(function(){this.complete?f():"undefined"!=typeof this.naturalWidth&&this.naturalWidth>0?f():a(this).one("load",function(){f()})})}Foundation.Timer=b,Foundation.onImagesLoaded=c}(jQuery),function(a){function g(){this.removeEventListener("touchmove",h),this.removeEventListener("touchend",g),f=!1}function h(h){if(a.spotSwipe.preventDefault&&h.preventDefault(),f){var m,i=h.touches[0].pageX,k=(h.touches[0].pageY,b-i);e=(new Date).getTime()-d,Math.abs(k)>=a.spotSwipe.moveThreshold&&e<=a.spotSwipe.timeThreshold&&(m=k>0?"left":"right"),m&&(h.preventDefault(),g.call(this),a(this).trigger("swipe",m).trigger("swipe"+m))}}function i(a){1==a.touches.length&&(b=a.touches[0].pageX,c=a.touches[0].pageY,f=!0,d=(new Date).getTime(),this.addEventListener("touchmove",h,!1),this.addEventListener("touchend",g,!1))}function j(){this.addEventListener&&this.addEventListener("touchstart",i,!1)}a.spotSwipe={version:"1.0.0",enabled:"ontouchstart"in document.documentElement,preventDefault:!1,moveThreshold:75,timeThreshold:200};var b,c,d,e,f=!1;a.event.special.swipe={setup:j},a.each(["left","up","down","right"],function(){a.event.special["swipe"+this]={setup:function(){a(this).on("swipe",a.noop)}}})}(jQuery),!function(a){a.fn.addTouch=function(){this.each(function(c,d){a(d).bind("touchstart touchmove touchend touchcancel",function(){b(event)})});var b=function(a){var f,b=a.changedTouches,c=b[0],d={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup"},e=d[a.type];"MouseEvent"in window&&"function"==typeof window.MouseEvent?f=new window.MouseEvent(e,{bubbles:!0,cancelable:!0,screenX:c.screenX,screenY:c.screenY,clientX:c.clientX,clientY:c.clientY}):(f=document.createEvent("MouseEvent"),f.initMouseEvent(e,!0,!0,window,1,c.screenX,c.screenY,c.clientX,c.clientY,!1,!1,!1,!1,0,null)),c.target.dispatchEvent(f)}}}(jQuery),!function(a){function d(){h(),f(),g(),e()}function e(b){var c=a("[data-yeti-box]"),d=["dropdown","tooltip","reveal"];if(b&&("string"==typeof b?d.push(b):"object"==typeof b&&"string"==typeof b[0]?d.concat(b):console.error("Plugin names must be strings")),c.length){var e=d.map(function(a){return"closeme.zf."+a}).join(" ");a(window).off(e).on(e,function(b,c){var d=b.namespace.split(".")[0],e=a("[data-"+d+"]").not('[data-yeti-box="'+c+'"]');e.each(function(){var b=a(this);b.triggerHandler("close.zf.trigger",[b])})})}}function f(c){var d=void 0,e=a("[data-resize]");e.length&&a(window).off("resize.zf.trigger").on("resize.zf.trigger",function(f){d&&clearTimeout(d),d=setTimeout(function(){b||e.each(function(){a(this).triggerHandler("resizeme.zf.trigger")}),e.attr("data-events","resize")},c||10)})}function g(c){var d=void 0,e=a("[data-scroll]");e.length&&a(window).off("scroll.zf.trigger").on("scroll.zf.trigger",function(f){d&&clearTimeout(d),d=setTimeout(function(){b||e.each(function(){a(this).triggerHandler("scrollme.zf.trigger")}),e.attr("data-events","scroll")},c||10)})}function h(){if(!b)return!1;var c=document.querySelectorAll("[data-resize], [data-scroll], [data-mutate]"),d=function(b){var c=a(b[0].target);switch(c.attr("data-events")){case"resize":c.triggerHandler("resizeme.zf.trigger",[c]);break;case"scroll":c.triggerHandler("scrollme.zf.trigger",[c,window.pageYOffset]);break;default:return!1}};if(c.length)for(var e=0;e<=c.length-1;e++){var f=new b(d);f.observe(c[e],{attributes:!0,childList:!1,characterData:!1,subtree:!1,attributeFilter:["data-events"]})}}var b=function(){for(var a=["WebKit","Moz","O","Ms",""],b=0;b<a.length;b++)if(a[b]+"MutationObserver"in window)return window[a[b]+"MutationObserver"];return!1}(),c=function(b,c){b.data(c).split(" ").forEach(function(d){a("#"+d)["close"===c?"trigger":"triggerHandler"](c+".zf.trigger",[b])})};a(document).on("click.zf.trigger","[data-open]",function(){c(a(this),"open")}),a(document).on("click.zf.trigger","[data-close]",function(){var b=a(this).data("close");b?c(a(this),"close"):a(this).trigger("close.zf.trigger")}),a(document).on("click.zf.trigger","[data-toggle]",function(){c(a(this),"toggle")}),a(document).on("close.zf.trigger","[data-closable]",function(b){b.stopPropagation();var c=a(this).data("closable");""!==c?Foundation.Motion.animateOut(a(this),c,function(){a(this).trigger("closed.zf")}):a(this).fadeOut().trigger("closed.zf")}),a(document).on("focus.zf.trigger blur.zf.trigger","[data-toggle-focus]",function(){var b=a(this).data("toggle-focus");a("#"+b).triggerHandler("toggle.zf.trigger",[a(this)])}),a(window).load(function(){d()}),Foundation.IHearYou=d}(jQuery);var _createClass=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();!function(a){var b=function(){function b(c){var d=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];_classCallCheck(this,b),this.$element=c,this.options=a.extend({},b.defaults,this.$element.data(),d),this._init(),Foundation.registerPlugin(this,"Abide")}return _createClass(b,[{key:"_init",value:function(){this.$inputs=this.$element.find("input, textarea, select"),this._events()}},{key:"_events",value:function(){var c=this;this.$element.off(".abide").on("reset.zf.abide",function(){c.resetForm()}).on("submit.zf.abide",function(){return c.validateForm()}),"fieldChange"===this.options.validateOn&&this.$inputs.off("change.zf.abide").on("change.zf.abide",function(b){c.validateInput(a(b.target))}),this.options.liveValidate&&this.$inputs.off("input.zf.abide").on("input.zf.abide",function(b){c.validateInput(a(b.target))})}},{key:"_reflow",value:function(){this._init()}},{key:"requiredCheck",value:function(b){if(!b.attr("required"))return!0;var c=!0;switch(b[0].type){case"checkbox":c=b[0].checked;break;case"select":case"select-one":case"select-multiple":var d=b.find("option:selected");d.length&&d.val()||(c=!1);break;default:b.val()&&b.val().length||(c=!1)}return c}},{key:"findFormError",value:function(b){var c=b.siblings(this.options.formErrorSelector);return c.length||(c=b.parent().find(this.options.formErrorSelector)),c}},{key:"findLabel",value:function(b){var c=b[0].id,d=this.$element.find('label[for="'+c+'"]');return d.length?d:b.closest("label")}},{key:"findRadioLabels",value:function(c){var d=this,e=c.map(function(b,c){var e=c.id,f=d.$element.find('label[for="'+e+'"]');return f.length||(f=a(c).closest("label")),f[0]});return a(e)}},{key:"addErrorClasses",value:function(b){var c=this.findLabel(b),d=this.findFormError(b);c.length&&c.addClass(this.options.labelErrorClass),d.length&&d.addClass(this.options.formErrorClass),b.addClass(this.options.inputErrorClass).attr("data-invalid","")}},{key:"removeRadioErrorClasses",value:function(b){var c=this.$element.find(':radio[name="'+b+'"]'),d=this.findRadioLabels(c),e=this.findFormError(c);d.length&&d.removeClass(this.options.labelErrorClass),e.length&&e.removeClass(this.options.formErrorClass),c.removeClass(this.options.inputErrorClass).removeAttr("data-invalid")}},{key:"removeErrorClasses",value:function(b){if("radio"==b[0].type)return this.removeRadioErrorClasses(b.attr("name"));var c=this.findLabel(b),d=this.findFormError(b);c.length&&c.removeClass(this.options.labelErrorClass),d.length&&d.removeClass(this.options.formErrorClass),b.removeClass(this.options.inputErrorClass).removeAttr("data-invalid")}},{key:"validateInput",value:function(b){var c=this.requiredCheck(b),d=!1,e=!0,f=b.attr("data-validator"),g=!0;if(b.is("[data-abide-ignore]")||b.is('[type="hidden"]'))return!0;switch(b[0].type){case"radio":d=this.validateRadio(b.attr("name"));break;case"checkbox":d=c;break;case"select":case"select-one":case"select-multiple":d=c;break;default:d=this.validateText(b)}f&&(e=this.matchValidation(b,f,b.attr("required"))),b.attr("data-equalto")&&(g=this.options.validators.equalTo(b));var h=[c,d,e,g].indexOf(!1)===-1,i=(h?"valid":"invalid")+".zf.abide";return this[h?"removeErrorClasses":"addErrorClasses"](b),b.trigger(i,[b]),h}},{key:"validateForm",value:function(){var c=[],d=this;this.$inputs.each(function(){c.push(d.validateInput(a(this)))});var e=c.indexOf(!1)===-1;return this.$element.find("[data-abide-error]").css("display",e?"none":"block"),this.$element.trigger((e?"formvalid":"forminvalid")+".zf.abide",[this.$element]),e}},{key:"validateText",value:function(b,c){c=c||b.attr("pattern")||b.attr("type");var d=b.val(),e=!1;return d.length?e=this.options.patterns.hasOwnProperty(c)?this.options.patterns[c].test(d):c===b.attr("type")||new RegExp(c).test(d):b.prop("required")||(e=!0),e}},{key:"validateRadio",value:function(c){var d=this.$element.find(':radio[name="'+c+'"]'),e=!1,f=!1;return d.each(function(b,c){a(c).attr("required")&&(f=!0)}),f||(e=!0),e||d.each(function(b,c){a(c).prop("checked")&&(e=!0)}),e}},{key:"matchValidation",value:function(b,c,d){var e=this;d=!!d;var f=c.split(" ").map(function(a){return e.options.validators[a](b,d,b.parent())});return f.indexOf(!1)===-1}},{key:"resetForm",value:function(){var c=this.$element,d=this.options;a("."+d.labelErrorClass,c).not("small").removeClass(d.labelErrorClass),a("."+d.inputErrorClass,c).not("small").removeClass(d.inputErrorClass),a(d.formErrorSelector+"."+d.formErrorClass).removeClass(d.formErrorClass),c.find("[data-abide-error]").css("display","none"),a(":input",c).not(":button, :submit, :reset, :hidden, :radio, :checkbox, [data-abide-ignore]").val("").removeAttr("data-invalid"),a(":input:radio",c).not("[data-abide-ignore]").prop("checked",!1).removeAttr("data-invalid"),a(":input:checkbox",c).not("[data-abide-ignore]").prop("checked",!1).removeAttr("data-invalid"),c.trigger("formreset.zf.abide",[c])}},{key:"destroy",value:function(){var c=this;this.$element.off(".abide").find("[data-abide-error]").css("display","none"),this.$inputs.off(".abide").each(function(){c.removeErrorClasses(a(this))}),Foundation.unregisterPlugin(this)}}]),b}();b.defaults={validateOn:"fieldChange",labelErrorClass:"is-invalid-label",inputErrorClass:"is-invalid-input",formErrorSelector:".form-error",formErrorClass:"is-visible",liveValidate:!1,patterns:{alpha:/^[a-zA-Z]+$/,alpha_numeric:/^[a-zA-Z0-9]+$/,integer:/^[-+]?\d+$/,number:/^[-+]?\d*(?:[\.\,]\d+)?$/,card:/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,cvv:/^([0-9]){3,4}$/,email:/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,url:/^(https?|ftp|file|ssh):\/\/(((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/,domain:/^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,8}$/,datetime:/^([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))$/,date:/(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/,time:/^(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}$/,dateISO:/^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/,month_day_year:/^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.]\d{4}$/,day_month_year:/^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.]\d{4}$/,color:/^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/},validators:{equalTo:function(b,c,d){return a("#"+b.attr("data-equalto")).val()===b.val()}}},Foundation.plugin(b,"Abide")}(jQuery);var _createClass=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();!function(a){var b=function(){function b(c,d){_classCallCheck(this,b),this.$element=c,this.options=a.extend({},b.defaults,this.$element.data(),d),this._init(),Foundation.registerPlugin(this,"Accordion"),Foundation.Keyboard.register("Accordion",{ENTER:"toggle",SPACE:"toggle",ARROW_DOWN:"next",ARROW_UP:"previous"})}return _createClass(b,[{key:"_init",value:function(){this.$element.attr("role","tablist"),this.$tabs=this.$element.children("li, [data-accordion-item]"),this.$tabs.each(function(b,c){var d=a(c),e=d.children("[data-tab-content]"),f=e[0].id||Foundation.GetYoDigits(6,"accordion"),g=c.id||f+"-label";d.find("a:first").attr({"aria-controls":f,role:"tab",id:g,"aria-expanded":!1,"aria-selected":!1}),e.attr({role:"tabpanel","aria-labelledby":g,"aria-hidden":!0,id:f})});var c=this.$element.find(".is-active").children("[data-tab-content]");c.length&&this.down(c,!0),this._events()}},{key:"_events",value:function(){var c=this;this.$tabs.each(function(){var b=a(this),d=b.children("[data-tab-content]");d.length&&b.children("a").off("click.zf.accordion keydown.zf.accordion").on("click.zf.accordion",function(a){a.preventDefault(),b.hasClass("is-active")?(c.options.allowAllClosed||b.siblings().hasClass("is-active"))&&c.up(d):c.down(d)}).on("keydown.zf.accordion",function(a){Foundation.Keyboard.handleKey(a,"Accordion",{toggle:function(){c.toggle(d)},next:function(){var a=b.next().find("a").focus();c.options.multiExpand||a.trigger("click.zf.accordion")},previous:function(){var a=b.prev().find("a").focus();c.options.multiExpand||a.trigger("click.zf.accordion")},handled:function(){a.preventDefault(),a.stopPropagation()}})})})}},{key:"toggle",value:function(b){if(b.parent().hasClass("is-active")){if(!this.options.allowAllClosed&&!b.parent().siblings().hasClass("is-active"))return;this.up(b)}else this.down(b)}},{key:"down",value:function(c,d){var e=this;if(!this.options.multiExpand&&!d){var f=this.$element.children(".is-active").children("[data-tab-content]");f.length&&this.up(f)}c.attr("aria-hidden",!1).parent("[data-tab-content]").addBack().parent().addClass("is-active"),c.slideDown(this.options.slideSpeed,function(){e.$element.trigger("down.zf.accordion",[c])}),a("#"+c.attr("aria-labelledby")).attr({"aria-expanded":!0,"aria-selected":!0})}},{key:"up",value:function(c){var d=c.parent().siblings(),e=this,f=this.options.multiExpand?d.hasClass("is-active"):c.parent().hasClass("is-active");(this.options.allowAllClosed||f)&&(c.slideUp(e.options.slideSpeed,function(){e.$element.trigger("up.zf.accordion",[c])}),c.attr("aria-hidden",!0).parent().removeClass("is-active"),a("#"+c.attr("aria-labelledby")).attr({"aria-expanded":!1,"aria-selected":!1}))}},{key:"destroy",value:function(){this.$element.find("[data-tab-content]").stop(!0).slideUp(0).css("display",""),this.$element.find("a").off(".zf.accordion"),Foundation.unregisterPlugin(this)}}]),b}();b.defaults={slideSpeed:250,multiExpand:!1,allowAllClosed:!1},Foundation.plugin(b,"Accordion")}(jQuery);var _createClass=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();!function(a){var b=function(){function b(c,d){_classCallCheck(this,b),this.$element=c,this.options=a.extend({},b.defaults,this.$element.data(),d),Foundation.Nest.Feather(this.$element,"accordion"),this._init(),Foundation.registerPlugin(this,"AccordionMenu"),Foundation.Keyboard.register("AccordionMenu",{ENTER:"toggle",SPACE:"toggle",ARROW_RIGHT:"open",ARROW_UP:"up",ARROW_DOWN:"down",ARROW_LEFT:"close",ESCAPE:"closeAll",TAB:"down",SHIFT_TAB:"up"})}return _createClass(b,[{key:"_init",value:function(){this.$element.find("[data-submenu]").not(".is-active").slideUp(0),this.$element.attr({role:"tablist","aria-multiselectable":this.options.multiOpen}),this.$menuLinks=this.$element.find(".is-accordion-submenu-parent"),this.$menuLinks.each(function(){var b=this.id||Foundation.GetYoDigits(6,"acc-menu-link"),c=a(this),d=c.children("[data-submenu]"),e=d[0].id||Foundation.GetYoDigits(6,"acc-menu"),f=d.hasClass("is-active");c.attr({"aria-controls":e,"aria-expanded":f,role:"tab",id:b}),d.attr({"aria-labelledby":b,"aria-hidden":!f,role:"tabpanel",id:e})});var c=this.$element.find(".is-active");if(c.length){var d=this;c.each(function(){d.down(a(this))})}this._events()}},{key:"_events",value:function(){var c=this;this.$element.find("li").each(function(){var b=a(this).children("[data-submenu]");b.length&&a(this).children("a").off("click.zf.accordionMenu").on("click.zf.accordionMenu",function(a){a.preventDefault(),c.toggle(b)})}).on("keydown.zf.accordionmenu",function(b){var f,g,d=a(this),e=d.parent("ul").children("li"),h=d.children("[data-submenu]");e.each(function(b){if(a(this).is(d))return f=e.eq(Math.max(0,b-1)).find("a").first(),
g=e.eq(Math.min(b+1,e.length-1)).find("a").first(),a(this).children("[data-submenu]:visible").length&&(g=d.find("li:first-child").find("a").first()),a(this).is(":first-child")?f=d.parents("li").first().find("a").first():f.children("[data-submenu]:visible").length&&(f=f.find("li:last-child").find("a").first()),void(a(this).is(":last-child")&&(g=d.parents("li").first().next("li").find("a").first()))}),Foundation.Keyboard.handleKey(b,"AccordionMenu",{open:function(){h.is(":hidden")&&(c.down(h),h.find("li").first().find("a").first().focus())},close:function(){h.length&&!h.is(":hidden")?c.up(h):d.parent("[data-submenu]").length&&(c.up(d.parent("[data-submenu]")),d.parents("li").first().find("a").first().focus())},up:function(){return f.attr("tabindex",-1).focus(),!0},down:function(){return g.attr("tabindex",-1).focus(),!0},toggle:function(){d.children("[data-submenu]").length&&c.toggle(d.children("[data-submenu]"))},closeAll:function(){c.hideAll()},handled:function(a){a&&b.preventDefault(),b.stopImmediatePropagation()}})})}},{key:"hideAll",value:function(){this.$element.find("[data-submenu]").slideUp(this.options.slideSpeed)}},{key:"toggle",value:function(b){b.is(":animated")||(b.is(":hidden")?this.down(b):this.up(b))}},{key:"down",value:function(b){var c=this;this.options.multiOpen||this.up(this.$element.find(".is-active").not(b.parentsUntil(this.$element).add(b))),b.addClass("is-active").attr({"aria-hidden":!1}).parent(".is-accordion-submenu-parent").attr({"aria-expanded":!0}),b.slideDown(c.options.slideSpeed,function(){c.$element.trigger("down.zf.accordionMenu",[b])})}},{key:"up",value:function(b){var c=this;b.slideUp(c.options.slideSpeed,function(){c.$element.trigger("up.zf.accordionMenu",[b])});var d=b.find("[data-submenu]").slideUp(0).addBack().attr("aria-hidden",!0);d.parent(".is-accordion-submenu-parent").attr("aria-expanded",!1)}},{key:"destroy",value:function(){this.$element.find("[data-submenu]").slideDown(0).css("display",""),this.$element.find("a").off("click.zf.accordionMenu"),Foundation.Nest.Burn(this.$element,"accordion"),Foundation.unregisterPlugin(this)}}]),b}();b.defaults={slideSpeed:250,multiOpen:!0},Foundation.plugin(b,"AccordionMenu")}(jQuery);var _createClass=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();!function(a){var b=function(){function b(c,d){_classCallCheck(this,b),this.$element=c,this.options=a.extend({},b.defaults,this.$element.data(),d),Foundation.Nest.Feather(this.$element,"drilldown"),this._init(),Foundation.registerPlugin(this,"Drilldown"),Foundation.Keyboard.register("Drilldown",{ENTER:"open",SPACE:"open",ARROW_RIGHT:"next",ARROW_UP:"up",ARROW_DOWN:"down",ARROW_LEFT:"previous",ESCAPE:"close",TAB:"down",SHIFT_TAB:"up"})}return _createClass(b,[{key:"_init",value:function(){this.$submenuAnchors=this.$element.find("li.is-drilldown-submenu-parent").children("a"),this.$submenus=this.$submenuAnchors.parent("li").children("[data-submenu]"),this.$menuItems=this.$element.find("li").not(".js-drilldown-back").attr("role","menuitem").find("a"),this._prepareMenu(),this._keyboardEvents()}},{key:"_prepareMenu",value:function(){var c=this;this.$submenuAnchors.each(function(){var b=a(this),d=b.parent();c.options.parentLink&&b.clone().prependTo(d.children("[data-submenu]")).wrap('<li class="is-submenu-parent-item is-submenu-item is-drilldown-submenu-item" role="menu-item"></li>'),b.data("savedHref",b.attr("href")).removeAttr("href"),b.children("[data-submenu]").attr({"aria-hidden":!0,tabindex:0,role:"menu"}),c._events(b)}),this.$submenus.each(function(){var b=a(this),d=b.find(".js-drilldown-back");d.length||b.prepend(c.options.backButton),c._back(b)}),this.$element.parent().hasClass("is-drilldown")||(this.$wrapper=a(this.options.wrapper).addClass("is-drilldown"),this.$wrapper=this.$element.wrap(this.$wrapper).parent().css(this._getMaxDims()))}},{key:"_events",value:function(c){var d=this;c.off("click.zf.drilldown").on("click.zf.drilldown",function(b){if(a(b.target).parentsUntil("ul","li").hasClass("is-drilldown-submenu-parent")&&(b.stopImmediatePropagation(),b.preventDefault()),d._show(c.parent("li")),d.options.closeOnClick){var e=a("body");e.off(".zf.drilldown").on("click.zf.drilldown",function(b){b.target===d.$element[0]||a.contains(d.$element[0],b.target)||(b.preventDefault(),d._hideAll(),e.off(".zf.drilldown"))})}})}},{key:"_keyboardEvents",value:function(){var c=this;this.$menuItems.add(this.$element.find(".js-drilldown-back > a")).on("keydown.zf.drilldown",function(b){var f,g,d=a(this),e=d.parent("li").parent("ul").children("li").children("a");e.each(function(b){if(a(this).is(d))return f=e.eq(Math.max(0,b-1)),void(g=e.eq(Math.min(b+1,e.length-1)))}),Foundation.Keyboard.handleKey(b,"Drilldown",{next:function(){if(d.is(c.$submenuAnchors))return c._show(d.parent("li")),d.parent("li").one(Foundation.transitionend(d),function(){d.parent("li").find("ul li a").filter(c.$menuItems).first().focus()}),!0},previous:function(){return c._hide(d.parent("li").parent("ul")),d.parent("li").parent("ul").one(Foundation.transitionend(d),function(){setTimeout(function(){d.parent("li").parent("ul").parent("li").children("a").first().focus()},1)}),!0},up:function(){return f.focus(),!0},down:function(){return g.focus(),!0},close:function(){c._back()},open:function(){return d.is(c.$menuItems)?d.is(c.$submenuAnchors)&&(c._show(d.parent("li")),d.parent("li").one(Foundation.transitionend(d),function(){d.parent("li").find("ul li a").filter(c.$menuItems).first().focus()})):(c._hide(d.parent("li").parent("ul")),d.parent("li").parent("ul").one(Foundation.transitionend(d),function(){setTimeout(function(){d.parent("li").parent("ul").parent("li").children("a").first().focus()},1)})),!0},handled:function(a){a&&b.preventDefault(),b.stopImmediatePropagation()}})})}},{key:"_hideAll",value:function(){var b=this.$element.find(".is-drilldown-submenu.is-active").addClass("is-closing");b.one(Foundation.transitionend(b),function(a){b.removeClass("is-active is-closing")}),this.$element.trigger("closed.zf.drilldown")}},{key:"_back",value:function(b){var c=this;b.off("click.zf.drilldown"),b.children(".js-drilldown-back").on("click.zf.drilldown",function(a){a.stopImmediatePropagation(),c._hide(b)})}},{key:"_menuLinkEvents",value:function(){var b=this;this.$menuItems.not(".is-drilldown-submenu-parent").off("click.zf.drilldown").on("click.zf.drilldown",function(a){setTimeout(function(){b._hideAll()},0)})}},{key:"_show",value:function(b){b.children("[data-submenu]").addClass("is-active"),this.$element.trigger("open.zf.drilldown",[b])}},{key:"_hide",value:function(b){b.addClass("is-closing").one(Foundation.transitionend(b),function(){b.removeClass("is-active is-closing"),b.blur()}),b.trigger("hide.zf.drilldown",[b])}},{key:"_getMaxDims",value:function(){var c=0,d={};return this.$submenus.add(this.$element).each(function(){var b=a(this).children("li").length;c=b>c?b:c}),d["min-height"]=c*this.$menuItems[0].getBoundingClientRect().height+"px",d["max-width"]=this.$element[0].getBoundingClientRect().width+"px",d}},{key:"destroy",value:function(){this._hideAll(),Foundation.Nest.Burn(this.$element,"drilldown"),this.$element.unwrap().find(".js-drilldown-back, .is-submenu-parent-item").remove().end().find(".is-active, .is-closing, .is-drilldown-submenu").removeClass("is-active is-closing is-drilldown-submenu").end().find("[data-submenu]").removeAttr("aria-hidden tabindex role"),this.$submenuAnchors.each(function(){a(this).off(".zf.drilldown")}),this.$element.find("a").each(function(){var b=a(this);b.data("savedHref")&&b.attr("href",b.data("savedHref")).removeData("savedHref")}),Foundation.unregisterPlugin(this)}}]),b}();b.defaults={backButton:'<li class="js-drilldown-back"><a tabindex="0">Back</a></li>',wrapper:"<div></div>",parentLink:!1,closeOnClick:!1},Foundation.plugin(b,"Drilldown")}(jQuery);var _createClass=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();!function(a){var b=function(){function b(c,d){_classCallCheck(this,b),this.$element=c,this.options=a.extend({},b.defaults,this.$element.data(),d),this._init(),Foundation.registerPlugin(this,"Dropdown"),Foundation.Keyboard.register("Dropdown",{ENTER:"open",SPACE:"open",ESCAPE:"close",TAB:"tab_forward",SHIFT_TAB:"tab_backward"})}return _createClass(b,[{key:"_init",value:function(){var c=this.$element.attr("id");this.$anchor=a('[data-toggle="'+c+'"]')||a('[data-open="'+c+'"]'),this.$anchor.attr({"aria-controls":c,"data-is-focus":!1,"data-yeti-box":c,"aria-haspopup":!0,"aria-expanded":!1}),this.options.positionClass=this.getPositionClass(),this.counter=4,this.usedPositions=[],this.$element.attr({"aria-hidden":"true","data-yeti-box":c,"data-resize":c,"aria-labelledby":this.$anchor[0].id||Foundation.GetYoDigits(6,"dd-anchor")}),this._events()}},{key:"getPositionClass",value:function(){var b=this.$element[0].className.match(/(top|left|right|bottom)/g);b=b?b[0]:"";var c=/float-(\S+)\s/.exec(this.$anchor[0].className);c=c?c[1]:"";var d=c?c+" "+b:b;return d}},{key:"_reposition",value:function(b){this.usedPositions.push(b?b:"bottom"),!b&&this.usedPositions.indexOf("top")<0?this.$element.addClass("top"):"top"===b&&this.usedPositions.indexOf("bottom")<0?this.$element.removeClass(b):"left"===b&&this.usedPositions.indexOf("right")<0?this.$element.removeClass(b).addClass("right"):"right"===b&&this.usedPositions.indexOf("left")<0?this.$element.removeClass(b).addClass("left"):!b&&this.usedPositions.indexOf("top")>-1&&this.usedPositions.indexOf("left")<0?this.$element.addClass("left"):"top"===b&&this.usedPositions.indexOf("bottom")>-1&&this.usedPositions.indexOf("left")<0?this.$element.removeClass(b).addClass("left"):"left"===b&&this.usedPositions.indexOf("right")>-1&&this.usedPositions.indexOf("bottom")<0?this.$element.removeClass(b):"right"===b&&this.usedPositions.indexOf("left")>-1&&this.usedPositions.indexOf("bottom")<0?this.$element.removeClass(b):this.$element.removeClass(b),this.classChanged=!0,this.counter--}},{key:"_setPosition",value:function(){if("false"===this.$anchor.attr("aria-expanded"))return!1;var b=this.getPositionClass(),c=Foundation.Box.GetDimensions(this.$element),f=(Foundation.Box.GetDimensions(this.$anchor),"left"===b?"left":"right"===b?"left":"top"),g="top"===f?"height":"width";"height"===g?this.options.vOffset:this.options.hOffset;if(c.width>=c.windowDims.width||!this.counter&&!Foundation.Box.ImNotTouchingYou(this.$element))return this.$element.offset(Foundation.Box.GetOffsets(this.$element,this.$anchor,"center bottom",this.options.vOffset,this.options.hOffset,!0)).css({width:c.windowDims.width-2*this.options.hOffset,height:"auto"}),this.classChanged=!0,!1;for(this.$element.offset(Foundation.Box.GetOffsets(this.$element,this.$anchor,b,this.options.vOffset,this.options.hOffset));!Foundation.Box.ImNotTouchingYou(this.$element,!1,!0)&&this.counter;)this._reposition(b),this._setPosition()}},{key:"_events",value:function(){var c=this;this.$element.on({"open.zf.trigger":this.open.bind(this),"close.zf.trigger":this.close.bind(this),"toggle.zf.trigger":this.toggle.bind(this),"resizeme.zf.trigger":this._setPosition.bind(this)}),this.options.hover&&(this.$anchor.off("mouseenter.zf.dropdown mouseleave.zf.dropdown").on("mouseenter.zf.dropdown",function(){clearTimeout(c.timeout),c.timeout=setTimeout(function(){c.open(),c.$anchor.data("hover",!0)},c.options.hoverDelay)}).on("mouseleave.zf.dropdown",function(){clearTimeout(c.timeout),c.timeout=setTimeout(function(){c.close(),c.$anchor.data("hover",!1)},c.options.hoverDelay)}),this.options.hoverPane&&this.$element.off("mouseenter.zf.dropdown mouseleave.zf.dropdown").on("mouseenter.zf.dropdown",function(){clearTimeout(c.timeout)}).on("mouseleave.zf.dropdown",function(){clearTimeout(c.timeout),c.timeout=setTimeout(function(){c.close(),c.$anchor.data("hover",!1)},c.options.hoverDelay)})),this.$anchor.add(this.$element).on("keydown.zf.dropdown",function(b){var d=a(this),e=Foundation.Keyboard.findFocusable(c.$element);Foundation.Keyboard.handleKey(b,"Dropdown",{tab_forward:function(){c.$element.find(":focus").is(e.eq(-1))&&(c.options.trapFocus?(e.eq(0).focus(),b.preventDefault()):c.close())},tab_backward:function(){(c.$element.find(":focus").is(e.eq(0))||c.$element.is(":focus"))&&(c.options.trapFocus?(e.eq(-1).focus(),b.preventDefault()):c.close())},open:function(){d.is(c.$anchor)&&(c.open(),c.$element.attr("tabindex",-1).focus(),b.preventDefault())},close:function(){c.close(),c.$anchor.focus()}})})}},{key:"_addBodyHandler",value:function(){var c=a(document.body).not(this.$element),d=this;c.off("click.zf.dropdown").on("click.zf.dropdown",function(a){d.$anchor.is(a.target)||d.$anchor.find(a.target).length||d.$element.find(a.target).length||(d.close(),c.off("click.zf.dropdown"))})}},{key:"open",value:function(){if(this.$element.trigger("closeme.zf.dropdown",this.$element.attr("id")),this.$anchor.addClass("hover").attr({"aria-expanded":!0}),this._setPosition(),this.$element.addClass("is-open").attr({"aria-hidden":!1}),this.options.autoFocus){var b=Foundation.Keyboard.findFocusable(this.$element);b.length&&b.eq(0).focus()}this.options.closeOnClick&&this._addBodyHandler(),this.$element.trigger("show.zf.dropdown",[this.$element])}},{key:"close",value:function(){if(!this.$element.hasClass("is-open"))return!1;if(this.$element.removeClass("is-open").attr({"aria-hidden":!0}),this.$anchor.removeClass("hover").attr("aria-expanded",!1),this.classChanged){var b=this.getPositionClass();b&&this.$element.removeClass(b),this.$element.addClass(this.options.positionClass).css({height:"",width:""}),this.classChanged=!1,this.counter=4,this.usedPositions.length=0}this.$element.trigger("hide.zf.dropdown",[this.$element])}},{key:"toggle",value:function(){if(this.$element.hasClass("is-open")){if(this.$anchor.data("hover"))return;this.close()}else this.open()}},{key:"destroy",value:function(){this.$element.off(".zf.trigger").hide(),this.$anchor.off(".zf.dropdown"),Foundation.unregisterPlugin(this)}}]),b}();b.defaults={hoverDelay:250,hover:!1,hoverPane:!1,vOffset:1,hOffset:1,positionClass:"",trapFocus:!1,autoFocus:!1,closeOnClick:!1},Foundation.plugin(b,"Dropdown")}(jQuery);var _createClass=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();!function(a){var b=function(){function b(c,d){_classCallCheck(this,b),this.$element=c,this.options=a.extend({},b.defaults,this.$element.data(),d),Foundation.Nest.Feather(this.$element,"dropdown"),this._init(),Foundation.registerPlugin(this,"DropdownMenu"),Foundation.Keyboard.register("DropdownMenu",{ENTER:"open",SPACE:"open",ARROW_RIGHT:"next",ARROW_UP:"up",ARROW_DOWN:"down",ARROW_LEFT:"previous",ESCAPE:"close"})}return _createClass(b,[{key:"_init",value:function(){var b=this.$element.find("li.is-dropdown-submenu-parent");this.$element.children(".is-dropdown-submenu-parent").children(".is-dropdown-submenu").addClass("first-sub"),this.$menuItems=this.$element.find('[role="menuitem"]'),this.$tabs=this.$element.children('[role="menuitem"]'),this.$tabs.find("ul.is-dropdown-submenu").addClass(this.options.verticalClass),this.$element.hasClass(this.options.rightClass)||"right"===this.options.alignment||Foundation.rtl()||this.$element.parents(".top-bar-right").is("*")?(this.options.alignment="right",b.addClass("opens-left")):b.addClass("opens-right"),this.changed=!1,this._events()}},{key:"_events",value:function(){var c=this,d="ontouchstart"in window||"undefined"!=typeof window.ontouchstart,e="is-dropdown-submenu-parent",f=function(b){var f=a(b.target).parentsUntil("ul","."+e),g=f.hasClass(e),h="true"===f.attr("data-is-click");f.children(".is-dropdown-submenu");if(g)if(h){if(!c.options.closeOnClick||!c.options.clickOpen&&!d||c.options.forceFollow&&d)return;b.stopImmediatePropagation(),b.preventDefault(),c._hide(f)}else b.preventDefault(),b.stopImmediatePropagation(),c._show(f.children(".is-dropdown-submenu")),f.add(f.parentsUntil(c.$element,"."+e)).attr("data-is-click",!0)};(this.options.clickOpen||d)&&this.$menuItems.on("click.zf.dropdownmenu touchstart.zf.dropdownmenu",f),this.options.disableHover||this.$menuItems.on("mouseenter.zf.dropdownmenu",function(b){var d=a(this),f=d.hasClass(e);f&&(clearTimeout(c.delay),c.delay=setTimeout(function(){c._show(d.children(".is-dropdown-submenu"))},c.options.hoverDelay))}).on("mouseleave.zf.dropdownmenu",function(b){var d=a(this),f=d.hasClass(e);if(f&&c.options.autoclose){if("true"===d.attr("data-is-click")&&c.options.clickOpen)return!1;clearTimeout(c.delay),c.delay=setTimeout(function(){c._hide(d)},c.options.closingTime)}}),this.$menuItems.on("keydown.zf.dropdownmenu",function(b){var g,h,d=a(b.target).parentsUntil("ul",'[role="menuitem"]'),e=c.$tabs.index(d)>-1,f=e?c.$tabs:d.siblings("li").add(d);f.each(function(b){if(a(this).is(d))return g=f.eq(b-1),void(h=f.eq(b+1))});var i=function(){d.is(":last-child")||(h.children("a:first").focus(),b.preventDefault())},j=function(){g.children("a:first").focus(),b.preventDefault()},k=function(){var a=d.children("ul.is-dropdown-submenu");a.length&&(c._show(a),d.find("li > a:first").focus(),b.preventDefault())},l=function(){var a=d.parent("ul").parent("li");a.children("a:first").focus(),c._hide(a),b.preventDefault()},m={open:k,close:function(){c._hide(c.$element),c.$menuItems.find("a:first").focus(),b.preventDefault()},handled:function(){b.stopImmediatePropagation()}};e?c.$element.hasClass(c.options.verticalClass)?"left"===c.options.alignment?a.extend(m,{down:i,up:j,next:k,previous:l}):a.extend(m,{down:i,up:j,next:l,previous:k}):a.extend(m,{next:i,previous:j,down:k,up:l}):"left"===c.options.alignment?a.extend(m,{next:k,previous:l,down:i,up:j}):a.extend(m,{next:l,previous:k,down:i,up:j}),Foundation.Keyboard.handleKey(b,"DropdownMenu",m)})}},{key:"_addBodyHandler",value:function(){var c=a(document.body),d=this;c.off("mouseup.zf.dropdownmenu touchend.zf.dropdownmenu").on("mouseup.zf.dropdownmenu touchend.zf.dropdownmenu",function(a){var b=d.$element.find(a.target);b.length||(d._hide(),c.off("mouseup.zf.dropdownmenu touchend.zf.dropdownmenu"))})}},{key:"_show",value:function(c){var d=this.$tabs.index(this.$tabs.filter(function(b,d){return a(d).find(c).length>0})),e=c.parent("li.is-dropdown-submenu-parent").siblings("li.is-dropdown-submenu-parent");this._hide(e,d),c.css("visibility","hidden").addClass("js-dropdown-active").attr({"aria-hidden":!1}).parent("li.is-dropdown-submenu-parent").addClass("is-active").attr({"aria-expanded":!0});var f=Foundation.Box.ImNotTouchingYou(c,null,!0);if(!f){var g="left"===this.options.alignment?"-right":"-left",h=c.parent(".is-dropdown-submenu-parent");h.removeClass("opens"+g).addClass("opens-"+this.options.alignment),f=Foundation.Box.ImNotTouchingYou(c,null,!0),f||h.removeClass("opens-"+this.options.alignment).addClass("opens-inner"),this.changed=!0}c.css("visibility",""),this.options.closeOnClick&&this._addBodyHandler(),this.$element.trigger("show.zf.dropdownmenu",[c])}},{key:"_hide",value:function(b,c){var d;d=b&&b.length?b:void 0!==c?this.$tabs.not(function(a,b){return a===c}):this.$element;var e=d.hasClass("is-active")||d.find(".is-active").length>0;if(e){if(d.find("li.is-active").add(d).attr({"aria-expanded":!1,"data-is-click":!1}).removeClass("is-active"),d.find("ul.js-dropdown-active").attr({"aria-hidden":!0}).removeClass("js-dropdown-active"),this.changed||d.find("opens-inner").length){var f="left"===this.options.alignment?"right":"left";d.find("li.is-dropdown-submenu-parent").add(d).removeClass("opens-inner opens-"+this.options.alignment).addClass("opens-"+f),this.changed=!1}this.$element.trigger("hide.zf.dropdownmenu",[d])}}},{key:"destroy",value:function(){this.$menuItems.off(".zf.dropdownmenu").removeAttr("data-is-click").removeClass("is-right-arrow is-left-arrow is-down-arrow opens-right opens-left opens-inner"),a(document.body).off(".zf.dropdownmenu"),Foundation.Nest.Burn(this.$element,"dropdown"),Foundation.unregisterPlugin(this)}}]),b}();b.defaults={disableHover:!1,autoclose:!0,hoverDelay:50,clickOpen:!1,closingTime:500,alignment:"left",closeOnClick:!0,verticalClass:"vertical",rightClass:"align-right",forceFollow:!0},Foundation.plugin(b,"DropdownMenu")}(jQuery);var _createClass=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();!function(a){var b=function(){function b(c,d){_classCallCheck(this,b),this.$element=c,this.options=a.extend({},b.defaults,this.$element.data(),d),this._init(),Foundation.registerPlugin(this,"Equalizer")}return _createClass(b,[{key:"_init",value:function(){var c=this.$element.attr("data-equalizer")||"",d=this.$element.find('[data-equalizer-watch="'+c+'"]');this.$watched=d.length?d:this.$element.find("[data-equalizer-watch]"),this.$element.attr("data-resize",c||Foundation.GetYoDigits(6,"eq")),this.hasNested=this.$element.find("[data-equalizer]").length>0,this.isNested=this.$element.parentsUntil(document.body,"[data-equalizer]").length>0,this.isOn=!1,this._bindHandler={onResizeMeBound:this._onResizeMe.bind(this),onPostEqualizedBound:this._onPostEqualized.bind(this)};var f,e=this.$element.find("img");this.options.equalizeOn?(f=this._checkMQ(),a(window).on("changed.zf.mediaquery",this._checkMQ.bind(this))):this._events(),(void 0!==f&&f===!1||void 0===f)&&(e.length?Foundation.onImagesLoaded(e,this._reflow.bind(this)):this._reflow())}},{key:"_pauseEvents",value:function(){this.isOn=!1,this.$element.off({".zf.equalizer":this._bindHandler.onPostEqualizedBound,"resizeme.zf.trigger":this._bindHandler.onResizeMeBound})}},{key:"_onResizeMe",value:function(b){this._reflow()}},{key:"_onPostEqualized",value:function(b){b.target!==this.$element[0]&&this._reflow()}},{key:"_events",value:function(){this._pauseEvents(),this.hasNested?this.$element.on("postequalized.zf.equalizer",this._bindHandler.onPostEqualizedBound):this.$element.on("resizeme.zf.trigger",this._bindHandler.onResizeMeBound),this.isOn=!0}},{key:"_checkMQ",value:function(){var b=!Foundation.MediaQuery.atLeast(this.options.equalizeOn);return b?this.isOn&&(this._pauseEvents(),this.$watched.css("height","auto")):this.isOn||this._events(),b}},{key:"_killswitch",value:function(){}},{key:"_reflow",value:function(){return!this.options.equalizeOnStack&&this._isStacked()?(this.$watched.css("height","auto"),!1):void(this.options.equalizeByRow?this.getHeightsByRow(this.applyHeightByRow.bind(this)):this.getHeights(this.applyHeight.bind(this)))}},{key:"_isStacked",value:function(){return this.$watched[0].getBoundingClientRect().top!==this.$watched[1].getBoundingClientRect().top}},{key:"getHeights",value:function(b){for(var c=[],d=0,e=this.$watched.length;d<e;d++)this.$watched[d].style.height="auto",c.push(this.$watched[d].offsetHeight);b(c)}},{key:"getHeightsByRow",value:function(c){var d=this.$watched.length?this.$watched.first().offset().top:0,e=[],f=0;e[f]=[];for(var g=0,h=this.$watched.length;g<h;g++){this.$watched[g].style.height="auto";var i=a(this.$watched[g]).offset().top;i!=d&&(f++,e[f]=[],d=i),e[f].push([this.$watched[g],this.$watched[g].offsetHeight])}for(var j=0,k=e.length;j<k;j++){var l=a(e[j]).map(function(){return this[1]}).get(),m=Math.max.apply(null,l);e[j].push(m)}c(e)}},{key:"applyHeight",value:function(b){var c=Math.max.apply(null,b);this.$element.trigger("preequalized.zf.equalizer"),this.$watched.css("height",c),this.$element.trigger("postequalized.zf.equalizer")}},{key:"applyHeightByRow",value:function(c){this.$element.trigger("preequalized.zf.equalizer");for(var d=0,e=c.length;d<e;d++){var f=c[d].length,g=c[d][f-1];if(f<=2)a(c[d][0][0]).css({height:"auto"});else{this.$element.trigger("preequalizedrow.zf.equalizer");for(var h=0,i=f-1;h<i;h++)a(c[d][h][0]).css({height:g});this.$element.trigger("postequalizedrow.zf.equalizer")}}this.$element.trigger("postequalized.zf.equalizer")}},{key:"destroy",value:function(){this._pauseEvents(),this.$watched.css("height","auto"),Foundation.unregisterPlugin(this)}}]),b}();b.defaults={equalizeOnStack:!0,equalizeByRow:!1,equalizeOn:""},Foundation.plugin(b,"Equalizer")}(jQuery);var _createClass=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();!function(a){var b=function(){function b(c,d){_classCallCheck(this,b),this.$element=c,this.options=a.extend({},b.defaults,d),this.rules=[],this.currentPath="",this._init(),this._events(),Foundation.registerPlugin(this,"Interchange")}return _createClass(b,[{key:"_init",value:function(){this._addBreakpoints(),this._generateRules(),this._reflow()}},{key:"_events",value:function(){a(window).on("resize.zf.interchange",Foundation.util.throttle(this._reflow.bind(this),50))}},{key:"_reflow",value:function(){var b;for(var c in this.rules)if(this.rules.hasOwnProperty(c)){var d=this.rules[c];window.matchMedia(d.query).matches&&(b=d)}b&&this.replace(b.path)}},{key:"_addBreakpoints",value:function(){for(var c in Foundation.MediaQuery.queries)if(Foundation.MediaQuery.queries.hasOwnProperty(c)){var d=Foundation.MediaQuery.queries[c];b.SPECIAL_QUERIES[d.name]=d.value}}},{key:"_generateRules",value:function(c){var e,d=[];e=this.options.rules?this.options.rules:this.$element.data("interchange").match(/\[.*?\]/g);for(var f in e)if(e.hasOwnProperty(f)){var g=e[f].slice(1,-1).split(", "),h=g.slice(0,-1).join(""),i=g[g.length-1];b.SPECIAL_QUERIES[i]&&(i=b.SPECIAL_QUERIES[i]),d.push({path:h,query:i})}this.rules=d}},{key:"replace",value:function(c){if(this.currentPath!==c){var d=this,e="replaced.zf.interchange";"IMG"===this.$element[0].nodeName?this.$element.attr("src",c).load(function(){d.currentPath=c}).trigger(e):c.match(/\.(gif|jpg|jpeg|png|svg|tiff)([?#].*)?/i)?this.$element.css({"background-image":"url("+c+")"}).trigger(e):a.get(c,function(b){d.$element.html(b).trigger(e),a(b).foundation(),d.currentPath=c})}}},{key:"destroy",value:function(){}}]),b}();b.defaults={rules:null},b.SPECIAL_QUERIES={landscape:"screen and (orientation: landscape)",portrait:"screen and (orientation: portrait)",retina:"only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min--moz-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx)"},Foundation.plugin(b,"Interchange")}(jQuery);var _createClass=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();!function(a){var b=function(){function b(c,d){_classCallCheck(this,b),this.$element=c,this.options=a.extend({},b.defaults,this.$element.data(),d),this._init(),Foundation.registerPlugin(this,"Magellan")}return _createClass(b,[{key:"_init",value:function(){var c=this.$element[0].id||Foundation.GetYoDigits(6,"magellan");this.$targets=a("[data-magellan-target]"),this.$links=this.$element.find("a"),this.$element.attr({"data-resize":c,"data-scroll":c,id:c}),this.$active=a(),this.scrollPos=parseInt(window.pageYOffset,10),this._events()}},{key:"calcPoints",value:function(){var c=this,d=document.body,e=document.documentElement;this.points=[],this.winHeight=Math.round(Math.max(window.innerHeight,e.clientHeight)),this.docHeight=Math.round(Math.max(d.scrollHeight,d.offsetHeight,e.clientHeight,e.scrollHeight,e.offsetHeight)),this.$targets.each(function(){var b=a(this),d=Math.round(b.offset().top-c.options.threshold);b.targetPoint=d,c.points.push(d)})}},{key:"_events",value:function(){var c=this;a("html, body"),{duration:c.options.animationDuration,easing:c.options.animationEasing};a(window).one("load",function(){c.options.deepLinking&&location.hash&&c.scrollToLoc(location.hash),c.calcPoints(),c._updateActive()}),this.$element.on({"resizeme.zf.trigger":this.reflow.bind(this),"scrollme.zf.trigger":this._updateActive.bind(this)}).on("click.zf.magellan",'a[href^="#"]',function(a){a.preventDefault();var b=this.getAttribute("href");c.scrollToLoc(b)})}},{key:"scrollToLoc",value:function(c){var d=Math.round(a(c).offset().top-this.options.threshold/2-this.options.barOffset);a("html, body").stop(!0).animate({scrollTop:d},this.options.animationDuration,this.options.animationEasing)}},{key:"reflow",value:function(){this.calcPoints(),this._updateActive()}},{key:"_updateActive",value:function(){var c,b=parseInt(window.pageYOffset,10);if(b+this.winHeight===this.docHeight)c=this.points.length-1;else if(b<this.points[0])c=0;else{var d=this.scrollPos<b,e=this,f=this.points.filter(function(a,c){return d?a-e.options.barOffset<=b:a-e.options.barOffset-e.options.threshold<=b});c=f.length?f.length-1:0}if(this.$active.removeClass(this.options.activeClass),this.$active=this.$links.eq(c).addClass(this.options.activeClass),this.options.deepLinking){var g=this.$active[0].getAttribute("href");window.history.pushState?window.history.pushState(null,null,g):window.location.hash=g}this.scrollPos=b,this.$element.trigger("update.zf.magellan",[this.$active])}},{key:"destroy",value:function(){if(this.$element.off(".zf.trigger .zf.magellan").find("."+this.options.activeClass).removeClass(this.options.activeClass),this.options.deepLinking){var b=this.$active[0].getAttribute("href");window.location.hash.replace(b,"")}Foundation.unregisterPlugin(this)}}]),b}();b.defaults={animationDuration:500,animationEasing:"linear",threshold:50,activeClass:"active",deepLinking:!1,barOffset:0},Foundation.plugin(b,"Magellan")}(jQuery);var _createClass=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();!function(a){var b=function(){function b(c,d){_classCallCheck(this,b),this.$element=c,this.options=a.extend({},b.defaults,this.$element.data(),d),this.$lastTrigger=a(),this.$triggers=a(),this._init(),this._events(),Foundation.registerPlugin(this,"OffCanvas")}return _createClass(b,[{key:"_init",value:function(){var c=this.$element.attr("id");if(this.$element.attr("aria-hidden","true"),this.$triggers=a(document).find('[data-open="'+c+'"], [data-close="'+c+'"], [data-toggle="'+c+'"]').attr("aria-expanded","false").attr("aria-controls",c),this.options.closeOnClick)if(a(".js-off-canvas-exit").length)this.$exiter=a(".js-off-canvas-exit");else{var d=document.createElement("div");d.setAttribute("class","js-off-canvas-exit"),a("[data-off-canvas-content]").append(d),this.$exiter=a(d)}this.options.isRevealed=this.options.isRevealed||new RegExp(this.options.revealClass,"g").test(this.$element[0].className),this.options.isRevealed&&(this.options.revealOn=this.options.revealOn||this.$element[0].className.match(/(reveal-for-medium|reveal-for-large)/g)[0].split("-")[2],this._setMQChecker()),this.options.transitionTime||(this.options.transitionTime=1e3*parseFloat(window.getComputedStyle(a("[data-off-canvas-wrapper]")[0]).transitionDuration))}},{key:"_events",value:function(){this.$element.off(".zf.trigger .zf.offcanvas").on({"open.zf.trigger":this.open.bind(this),"close.zf.trigger":this.close.bind(this),"toggle.zf.trigger":this.toggle.bind(this),"keydown.zf.offcanvas":this._handleKeyboard.bind(this)}),this.options.closeOnClick&&this.$exiter.length&&this.$exiter.on({
"click.zf.offcanvas":this.close.bind(this)})}},{key:"_setMQChecker",value:function(){var c=this;a(window).on("changed.zf.mediaquery",function(){Foundation.MediaQuery.atLeast(c.options.revealOn)?c.reveal(!0):c.reveal(!1)}).one("load.zf.offcanvas",function(){Foundation.MediaQuery.atLeast(c.options.revealOn)&&c.reveal(!0)})}},{key:"reveal",value:function(b){var c=this.$element.find("[data-close]");b?(this.close(),this.isRevealed=!0,this.$element.off("open.zf.trigger toggle.zf.trigger"),c.length&&c.hide()):(this.isRevealed=!1,this.$element.on({"open.zf.trigger":this.open.bind(this),"toggle.zf.trigger":this.toggle.bind(this)}),c.length&&c.show())}},{key:"open",value:function(c,d){if(!this.$element.hasClass("is-open")&&!this.isRevealed){var e=this;a(document.body);this.options.forceTop&&a("body").scrollTop(0),Foundation.Move(this.options.transitionTime,this.$element,function(){a("[data-off-canvas-wrapper]").addClass("is-off-canvas-open is-open-"+e.options.position),e.$element.addClass("is-open")}),this.$triggers.attr("aria-expanded","true"),this.$element.attr("aria-hidden","false").trigger("opened.zf.offcanvas"),this.options.closeOnClick&&this.$exiter.addClass("is-visible"),d&&(this.$lastTrigger=d),this.options.autoFocus&&this.$element.one(Foundation.transitionend(this.$element),function(){e.$element.find("a, button").eq(0).focus()}),this.options.trapFocus&&(a("[data-off-canvas-content]").attr("tabindex","-1"),this._trapFocus())}}},{key:"_trapFocus",value:function(){var b=Foundation.Keyboard.findFocusable(this.$element),c=b.eq(0),d=b.eq(-1);b.off(".zf.offcanvas").on("keydown.zf.offcanvas",function(a){9!==a.which&&9!==a.keycode||(a.target!==d[0]||a.shiftKey||(a.preventDefault(),c.focus()),a.target===c[0]&&a.shiftKey&&(a.preventDefault(),d.focus()))})}},{key:"close",value:function(c){if(this.$element.hasClass("is-open")&&!this.isRevealed){var d=this;a("[data-off-canvas-wrapper]").removeClass("is-off-canvas-open is-open-"+d.options.position),d.$element.removeClass("is-open"),this.$element.attr("aria-hidden","true").trigger("closed.zf.offcanvas"),this.options.closeOnClick&&this.$exiter.removeClass("is-visible"),this.$triggers.attr("aria-expanded","false"),this.options.trapFocus&&a("[data-off-canvas-content]").removeAttr("tabindex")}}},{key:"toggle",value:function(b,c){this.$element.hasClass("is-open")?this.close(b,c):this.open(b,c)}},{key:"_handleKeyboard",value:function(b){27===b.which&&(b.stopPropagation(),b.preventDefault(),this.close(),this.$lastTrigger.focus())}},{key:"destroy",value:function(){this.close(),this.$element.off(".zf.trigger .zf.offcanvas"),this.$exiter.off(".zf.offcanvas"),Foundation.unregisterPlugin(this)}}]),b}();b.defaults={closeOnClick:!0,transitionTime:0,position:"left",forceTop:!0,isRevealed:!1,revealOn:null,autoFocus:!0,revealClass:"reveal-for-",trapFocus:!1},Foundation.plugin(b,"OffCanvas")}(jQuery);var _createClass=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();!function(a){var b=function(){function b(c,d){_classCallCheck(this,b),this.$element=c,this.options=a.extend({},b.defaults,this.$element.data(),d),this._init(),Foundation.registerPlugin(this,"Orbit"),Foundation.Keyboard.register("Orbit",{ltr:{ARROW_RIGHT:"next",ARROW_LEFT:"previous"},rtl:{ARROW_LEFT:"next",ARROW_RIGHT:"previous"}})}return _createClass(b,[{key:"_init",value:function(){this.$wrapper=this.$element.find("."+this.options.containerClass),this.$slides=this.$element.find("."+this.options.slideClass);var b=this.$element.find("img"),c=this.$slides.filter(".is-active");c.length||this.$slides.eq(0).addClass("is-active"),this.options.useMUI||this.$slides.addClass("no-motionui"),b.length?Foundation.onImagesLoaded(b,this._prepareForOrbit.bind(this)):this._prepareForOrbit(),this.options.bullets&&this._loadBullets(),this._events(),this.options.autoPlay&&this.$slides.length>1&&this.geoSync(),this.options.accessible&&this.$wrapper.attr("tabindex",0)}},{key:"_loadBullets",value:function(){this.$bullets=this.$element.find("."+this.options.boxOfBullets).find("button")}},{key:"geoSync",value:function(){var b=this;this.timer=new Foundation.Timer(this.$element,{duration:this.options.timerDelay,infinite:!1},function(){b.changeSlide(!0)}),this.timer.start()}},{key:"_prepareForOrbit",value:function(){var b=this;this._setWrapperHeight(function(a){b._setSlideHeight(a)})}},{key:"_setWrapperHeight",value:function(c){var e,d=0,f=0;this.$slides.each(function(){e=this.getBoundingClientRect().height,a(this).attr("data-slide",f),f&&a(this).css({position:"relative",display:"none"}),d=e>d?e:d,f++}),f===this.$slides.length&&(this.$wrapper.css({height:d}),c(d))}},{key:"_setSlideHeight",value:function(c){this.$slides.each(function(){a(this).css("max-height",c)})}},{key:"_events",value:function(){var c=this;if(this.$slides.length>1){if(this.options.swipe&&this.$slides.off("swipeleft.zf.orbit swiperight.zf.orbit").on("swipeleft.zf.orbit",function(a){a.preventDefault(),c.changeSlide(!0)}).on("swiperight.zf.orbit",function(a){a.preventDefault(),c.changeSlide(!1)}),this.options.autoPlay&&(this.$slides.on("click.zf.orbit",function(){c.$element.data("clickedOn",!c.$element.data("clickedOn")),c.timer[c.$element.data("clickedOn")?"pause":"start"]()}),this.options.pauseOnHover&&this.$element.on("mouseenter.zf.orbit",function(){c.timer.pause()}).on("mouseleave.zf.orbit",function(){c.$element.data("clickedOn")||c.timer.start()})),this.options.navButtons){var d=this.$element.find("."+this.options.nextClass+", ."+this.options.prevClass);d.attr("tabindex",0).on("click.zf.orbit touchend.zf.orbit",function(b){b.preventDefault(),c.changeSlide(a(this).hasClass(c.options.nextClass))})}this.options.bullets&&this.$bullets.on("click.zf.orbit touchend.zf.orbit",function(){if(/is-active/g.test(this.className))return!1;var b=a(this).data("slide"),d=b>c.$slides.filter(".is-active").data("slide"),e=c.$slides.eq(b);c.changeSlide(d,e,b)}),this.$wrapper.add(this.$bullets).on("keydown.zf.orbit",function(b){Foundation.Keyboard.handleKey(b,"Orbit",{next:function(){c.changeSlide(!0)},previous:function(){c.changeSlide(!1)},handled:function(){a(b.target).is(c.$bullets)&&c.$bullets.filter(".is-active").focus()}})})}}},{key:"changeSlide",value:function(b,c,d){var e=this.$slides.filter(".is-active").eq(0);if(/mui/g.test(e[0].className))return!1;var k,f=this.$slides.first(),g=this.$slides.last(),h=b?"Right":"Left",i=b?"Left":"Right",j=this;k=c?c:b?this.options.infiniteWrap?e.next("."+this.options.slideClass).length?e.next("."+this.options.slideClass):f:e.next("."+this.options.slideClass):this.options.infiniteWrap?e.prev("."+this.options.slideClass).length?e.prev("."+this.options.slideClass):g:e.prev("."+this.options.slideClass),k.length&&(this.options.bullets&&(d=d||this.$slides.index(k),this._updateBullets(d)),this.options.useMUI?(Foundation.Motion.animateIn(k.addClass("is-active").css({position:"absolute",top:0}),this.options["animInFrom"+h],function(){k.css({position:"relative",display:"block"}).attr("aria-live","polite")}),Foundation.Motion.animateOut(e.removeClass("is-active"),this.options["animOutTo"+i],function(){e.removeAttr("aria-live"),j.options.autoPlay&&!j.timer.isPaused&&j.timer.restart()})):(e.removeClass("is-active is-in").removeAttr("aria-live").hide(),k.addClass("is-active is-in").attr("aria-live","polite").show(),this.options.autoPlay&&!this.timer.isPaused&&this.timer.restart()),this.$element.trigger("slidechange.zf.orbit",[k]))}},{key:"_updateBullets",value:function(b){var c=this.$element.find("."+this.options.boxOfBullets).find(".is-active").removeClass("is-active").blur(),d=c.find("span:last").detach();this.$bullets.eq(b).addClass("is-active").append(d)}},{key:"destroy",value:function(){this.$element.off(".zf.orbit").find("*").off(".zf.orbit").end().hide(),Foundation.unregisterPlugin(this)}}]),b}();b.defaults={bullets:!0,navButtons:!0,animInFromRight:"slide-in-right",animOutToRight:"slide-out-right",animInFromLeft:"slide-in-left",animOutToLeft:"slide-out-left",autoPlay:!0,timerDelay:5e3,infiniteWrap:!0,swipe:!0,pauseOnHover:!0,accessible:!0,containerClass:"orbit-container",slideClass:"orbit-slide",boxOfBullets:"orbit-bullets",nextClass:"orbit-next",prevClass:"orbit-previous",useMUI:!0},Foundation.plugin(b,"Orbit")}(jQuery);var _createClass=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();!function(a){var b=function(){function b(c,d){_classCallCheck(this,b),this.$element=a(c),this.rules=this.$element.data("responsive-menu"),this.currentMq=null,this.currentPlugin=null,this._init(),this._events(),Foundation.registerPlugin(this,"ResponsiveMenu")}return _createClass(b,[{key:"_init",value:function(){if("string"==typeof this.rules){for(var d={},e=this.rules.split(" "),f=0;f<e.length;f++){var g=e[f].split("-"),h=g.length>1?g[0]:"small",i=g.length>1?g[1]:g[0];null!==c[i]&&(d[h]=c[i])}this.rules=d}a.isEmptyObject(this.rules)||this._checkMediaQueries()}},{key:"_events",value:function(){var c=this;a(window).on("changed.zf.mediaquery",function(){c._checkMediaQueries()})}},{key:"_checkMediaQueries",value:function(){var d,e=this;a.each(this.rules,function(a){Foundation.MediaQuery.atLeast(a)&&(d=a)}),d&&(this.currentPlugin instanceof this.rules[d].plugin||(a.each(c,function(a,b){e.$element.removeClass(b.cssClass)}),this.$element.addClass(this.rules[d].cssClass),this.currentPlugin&&this.currentPlugin.destroy(),this.currentPlugin=new this.rules[d].plugin(this.$element,{})))}},{key:"destroy",value:function(){this.currentPlugin.destroy(),a(window).off(".zf.ResponsiveMenu"),Foundation.unregisterPlugin(this)}}]),b}();b.defaults={};var c={dropdown:{cssClass:"dropdown",plugin:Foundation._plugins["dropdown-menu"]||null},drilldown:{cssClass:"drilldown",plugin:Foundation._plugins.drilldown||null},accordion:{cssClass:"accordion-menu",plugin:Foundation._plugins["accordion-menu"]||null}};Foundation.plugin(b,"ResponsiveMenu")}(jQuery);var _createClass=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();!function(a){var b=function(){function b(c,d){_classCallCheck(this,b),this.$element=a(c),this.options=a.extend({},b.defaults,this.$element.data(),d),this._init(),this._events(),Foundation.registerPlugin(this,"ResponsiveToggle")}return _createClass(b,[{key:"_init",value:function(){var c=this.$element.data("responsive-toggle");c||console.error("Your tab bar needs an ID of a Menu as the value of data-tab-bar."),this.$targetMenu=a("#"+c),this.$toggler=this.$element.find("[data-toggle]"),this._update()}},{key:"_events",value:function(){this._updateMqHandler=this._update.bind(this),a(window).on("changed.zf.mediaquery",this._updateMqHandler),this.$toggler.on("click.zf.responsiveToggle",this.toggleMenu.bind(this))}},{key:"_update",value:function(){Foundation.MediaQuery.atLeast(this.options.hideFor)?(this.$element.hide(),this.$targetMenu.show()):(this.$element.show(),this.$targetMenu.hide())}},{key:"toggleMenu",value:function(){Foundation.MediaQuery.atLeast(this.options.hideFor)||(this.$targetMenu.toggle(0),this.$element.trigger("toggled.zf.responsiveToggle"))}},{key:"destroy",value:function(){this.$element.off(".zf.responsiveToggle"),this.$toggler.off(".zf.responsiveToggle"),a(window).off("changed.zf.mediaquery",this._updateMqHandler),Foundation.unregisterPlugin(this)}}]),b}();b.defaults={hideFor:"medium"},Foundation.plugin(b,"ResponsiveToggle")}(jQuery);var _createClass=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();!function(a){function c(){return/iP(ad|hone|od).*OS/.test(window.navigator.userAgent)}function d(){return/Android/.test(window.navigator.userAgent)}function e(){return c()||d()}var b=function(){function b(c,d){_classCallCheck(this,b),this.$element=c,this.options=a.extend({},b.defaults,this.$element.data(),d),this._init(),Foundation.registerPlugin(this,"Reveal"),Foundation.Keyboard.register("Reveal",{ENTER:"open",SPACE:"open",ESCAPE:"close",TAB:"tab_forward",SHIFT_TAB:"tab_backward"})}return _createClass(b,[{key:"_init",value:function(){this.id=this.$element.attr("id"),this.isActive=!1,this.cached={mq:Foundation.MediaQuery.current},this.isMobile=e(),this.$anchor=a(a('[data-open="'+this.id+'"]').length?'[data-open="'+this.id+'"]':'[data-toggle="'+this.id+'"]'),this.$anchor.attr({"aria-controls":this.id,"aria-haspopup":!0,tabindex:0}),(this.options.fullScreen||this.$element.hasClass("full"))&&(this.options.fullScreen=!0,this.options.overlay=!1),this.options.overlay&&!this.$overlay&&(this.$overlay=this._makeOverlay(this.id)),this.$element.attr({role:"dialog","aria-hidden":!0,"data-yeti-box":this.id,"data-resize":this.id}),this.$overlay?this.$element.detach().appendTo(this.$overlay):(this.$element.detach().appendTo(a("body")),this.$element.addClass("without-overlay")),this._events(),this.options.deepLink&&window.location.hash==="#"+this.id&&a(window).one("load.zf.reveal",this.open.bind(this))}},{key:"_makeOverlay",value:function(c){var d=a("<div></div>").addClass("reveal-overlay").appendTo("body");return d}},{key:"_updatePosition",value:function(){var g,h,c=this.$element.outerWidth(),d=a(window).width(),e=this.$element.outerHeight(),f=a(window).height();g="auto"===this.options.hOffset?parseInt((d-c)/2,10):parseInt(this.options.hOffset,10),h="auto"===this.options.vOffset?e>f?parseInt(Math.min(100,f/10),10):parseInt((f-e)/4,10):parseInt(this.options.vOffset,10),this.$element.css({top:h+"px"}),this.$overlay&&"auto"===this.options.hOffset||(this.$element.css({left:g+"px"}),this.$element.css({margin:"0px"}))}},{key:"_events",value:function(){var c=this,d=this;this.$element.on({"open.zf.trigger":this.open.bind(this),"close.zf.trigger":function(b,e){if(b.target===d.$element[0]||a(b.target).parents("[data-closable]")[0]===e)return c.close.apply(c)},"toggle.zf.trigger":this.toggle.bind(this),"resizeme.zf.trigger":function(){d._updatePosition()}}),this.$anchor.length&&this.$anchor.on("keydown.zf.reveal",function(a){13!==a.which&&32!==a.which||(a.stopPropagation(),a.preventDefault(),d.open())}),this.options.closeOnClick&&this.options.overlay&&this.$overlay.off(".zf.reveal").on("click.zf.reveal",function(b){b.target===d.$element[0]||a.contains(d.$element[0],b.target)||d.close()}),this.options.deepLink&&a(window).on("popstate.zf.reveal:"+this.id,this._handleState.bind(this))}},{key:"_handleState",value:function(b){window.location.hash!=="#"+this.id||this.isActive?this.close():this.open()}},{key:"open",value:function(){var c=this;if(this.options.deepLink){var d="#"+this.id;window.history.pushState?window.history.pushState(null,null,d):window.location.hash=d}if(this.isActive=!0,this.$element.css({visibility:"hidden"}).show().scrollTop(0),this.options.overlay&&this.$overlay.css({visibility:"hidden"}).show(),this._updatePosition(),this.$element.hide().css({visibility:""}),this.$overlay&&(this.$overlay.css({visibility:""}).hide(),this.$element.hasClass("fast")?this.$overlay.addClass("fast"):this.$element.hasClass("slow")&&this.$overlay.addClass("slow")),this.options.multipleOpened||this.$element.trigger("closeme.zf.reveal",this.id),this.options.animationIn){var e;!function(){var a=function(){e.$element.attr({"aria-hidden":!1,tabindex:-1}).focus(),console.log("focus")};e=c,c.options.overlay&&Foundation.Motion.animateIn(c.$overlay,"fade-in"),Foundation.Motion.animateIn(c.$element,c.options.animationIn,function(){c.focusableElements=Foundation.Keyboard.findFocusable(c.$element),a()})}()}else this.options.overlay&&this.$overlay.show(0),this.$element.show(this.options.showDelay);this.$element.attr({"aria-hidden":!1,tabindex:-1}).focus(),this.$element.trigger("open.zf.reveal"),this.isMobile?(this.originalScrollPos=window.pageYOffset,a("html, body").addClass("is-reveal-open")):a("body").addClass("is-reveal-open"),setTimeout(function(){c._extraHandlers()},0)}},{key:"_extraHandlers",value:function(){var c=this;this.focusableElements=Foundation.Keyboard.findFocusable(this.$element),this.options.overlay||!this.options.closeOnClick||this.options.fullScreen||a("body").on("click.zf.reveal",function(b){b.target===c.$element[0]||a.contains(c.$element[0],b.target)||c.close()}),this.options.closeOnEsc&&a(window).on("keydown.zf.reveal",function(a){Foundation.Keyboard.handleKey(a,"Reveal",{close:function(){c.options.closeOnEsc&&(c.close(),c.$anchor.focus())}})}),this.$element.on("keydown.zf.reveal",function(b){var d=a(this);Foundation.Keyboard.handleKey(b,"Reveal",{tab_forward:function(){return c.$element.find(":focus").is(c.focusableElements.eq(-1))?(c.focusableElements.eq(0).focus(),!0):0===c.focusableElements.length||void 0},tab_backward:function(){return c.$element.find(":focus").is(c.focusableElements.eq(0))||c.$element.is(":focus")?(c.focusableElements.eq(-1).focus(),!0):0===c.focusableElements.length||void 0},open:function(){c.$element.find(":focus").is(c.$element.find("[data-close]"))?setTimeout(function(){c.$anchor.focus()},1):d.is(c.focusableElements)&&c.open()},close:function(){c.options.closeOnEsc&&(c.close(),c.$anchor.focus())},handled:function(a){a&&b.preventDefault()}})})}},{key:"close",value:function(){function d(){c.isMobile?(a("html, body").removeClass("is-reveal-open"),c.originalScrollPos&&(a("body").scrollTop(c.originalScrollPos),c.originalScrollPos=null)):a("body").removeClass("is-reveal-open"),c.$element.attr("aria-hidden",!0),c.$element.trigger("closed.zf.reveal")}if(!this.isActive||!this.$element.is(":visible"))return!1;var c=this;this.options.animationOut?(this.options.overlay?Foundation.Motion.animateOut(this.$overlay,"fade-out",d):d(),Foundation.Motion.animateOut(this.$element,this.options.animationOut)):(this.options.overlay?this.$overlay.hide(0,d):d(),this.$element.hide(this.options.hideDelay)),this.options.closeOnEsc&&a(window).off("keydown.zf.reveal"),!this.options.overlay&&this.options.closeOnClick&&a("body").off("click.zf.reveal"),this.$element.off("keydown.zf.reveal"),this.options.resetOnClose&&this.$element.html(this.$element.html()),this.isActive=!1,c.options.deepLink&&(window.history.replaceState?window.history.replaceState("",document.title,window.location.pathname):window.location.hash="")}},{key:"toggle",value:function(){this.isActive?this.close():this.open()}},{key:"destroy",value:function(){this.options.overlay&&(this.$element.appendTo(a("body")),this.$overlay.hide().off().remove()),this.$element.hide().off(),this.$anchor.off(".zf"),a(window).off(".zf.reveal:"+this.id),Foundation.unregisterPlugin(this)}}]),b}();b.defaults={animationIn:"",animationOut:"",showDelay:0,hideDelay:0,closeOnClick:!0,closeOnEsc:!0,multipleOpened:!1,vOffset:"auto",hOffset:"auto",fullScreen:!1,btmOffsetPct:10,overlay:!0,resetOnClose:!1,deepLink:!1},Foundation.plugin(b,"Reveal")}(jQuery);var _createClass=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();!function(a){function c(a,b){return a/b}function d(a,b,c,d){return Math.abs(a.position()[b]+a[d]()/2-c)}var b=function(){function b(c,d){_classCallCheck(this,b),this.$element=c,this.options=a.extend({},b.defaults,this.$element.data(),d),this._init(),Foundation.registerPlugin(this,"Slider"),Foundation.Keyboard.register("Slider",{ltr:{ARROW_RIGHT:"increase",ARROW_UP:"increase",ARROW_DOWN:"decrease",ARROW_LEFT:"decrease",SHIFT_ARROW_RIGHT:"increase_fast",SHIFT_ARROW_UP:"increase_fast",SHIFT_ARROW_DOWN:"decrease_fast",SHIFT_ARROW_LEFT:"decrease_fast"},rtl:{ARROW_LEFT:"increase",ARROW_RIGHT:"decrease",SHIFT_ARROW_LEFT:"increase_fast",SHIFT_ARROW_RIGHT:"decrease_fast"}})}return _createClass(b,[{key:"_init",value:function(){this.inputs=this.$element.find("input"),this.handles=this.$element.find("[data-slider-handle]"),this.$handle=this.handles.eq(0),this.$input=this.inputs.length?this.inputs.eq(0):a("#"+this.$handle.attr("aria-controls")),this.$fill=this.$element.find("[data-slider-fill]").css(this.options.vertical?"height":"width",0);var c=!1,d=this;(this.options.disabled||this.$element.hasClass(this.options.disabledClass))&&(this.options.disabled=!0,this.$element.addClass(this.options.disabledClass)),this.inputs.length||(this.inputs=a().add(this.$input),this.options.binding=!0),this._setInitAttr(0),this._events(this.$handle),this.handles[1]&&(this.options.doubleSided=!0,this.$handle2=this.handles.eq(1),this.$input2=this.inputs.length>1?this.inputs.eq(1):a("#"+this.$handle2.attr("aria-controls")),this.inputs[1]||(this.inputs=this.inputs.add(this.$input2)),c=!0,this._setHandlePos(this.$handle,this.options.initialStart,!0,function(){d._setHandlePos(d.$handle2,d.options.initialEnd,!0)}),this._setInitAttr(1),this._events(this.$handle2)),c||this._setHandlePos(this.$handle,this.options.initialStart,!0)}},{key:"_setHandlePos",value:function(b,d,e,f){if(!this.$element.hasClass(this.options.disabledClass)){d=parseFloat(d),d<this.options.start?d=this.options.start:d>this.options.end&&(d=this.options.end);var g=this.options.doubleSided;if(g)if(0===this.handles.index(b)){var h=parseFloat(this.$handle2.attr("aria-valuenow"));d=d>=h?h-this.options.step:d}else{var i=parseFloat(this.$handle.attr("aria-valuenow"));d=d<=i?i+this.options.step:d}this.options.vertical&&!e&&(d=this.options.end-d);var j=this,k=this.options.vertical,l=k?"height":"width",m=k?"top":"left",n=b[0].getBoundingClientRect()[l],o=this.$element[0].getBoundingClientRect()[l],p=c(d-this.options.start,this.options.end-this.options.start).toFixed(2),q=(o-n)*p,r=(100*c(q,o)).toFixed(this.options.decimal);d=parseFloat(d.toFixed(this.options.decimal));var s={};if(this._setValues(b,d),g){var u,t=0===this.handles.index(b),v=~~(100*c(n,o));if(t){s[m]=r+"%";var w=((o-n)*c(parseFloat(this.$handle2.attr("aria-valuenow"))-this.options.start,this.options.end-this.options.start)/o*100).toFixed(2);u=parseFloat(w)-r+v,f&&"function"==typeof f&&f()}else{var x=parseFloat(this.$handle[0].style[m]);u=r-(isNaN(x)?(this.options.initialStart-this.options.start)/((this.options.end-this.options.start)/100):x)+v}s["min-"+l]=u+"%"}this.$element.one("finished.zf.animate",function(){j.$element.trigger("moved.zf.slider",[b])});var y=this.$element.data("dragging")?1e3/60:this.options.moveTime;Foundation.Move(y,b,function(){b.css(m,r+"%"),j.options.doubleSided?j.$fill.css(s):j.$fill.css(l,100*p+"%")}),clearTimeout(j.timeout),j.timeout=setTimeout(function(){j.$element.trigger("changed.zf.slider",[b])},j.options.changedDelay)}}},{key:"_setInitAttr",value:function(b){var c=this.inputs.eq(b).attr("id")||Foundation.GetYoDigits(6,"slider");this.inputs.eq(b).attr({id:c,max:this.options.end,min:this.options.start,step:this.options.step}),this.handles.eq(b).attr({role:"slider","aria-controls":c,"aria-valuemax":this.options.end,"aria-valuemin":this.options.start,"aria-valuenow":0===b?this.options.initialStart:this.options.initialEnd,"aria-orientation":this.options.vertical?"vertical":"horizontal",tabindex:0})}},{key:"_setValues",value:function(b,c){var d=this.options.doubleSided?this.handles.index(b):0;this.inputs.eq(d).val(c),b.attr("aria-valuenow",c)}},{key:"_handleEvent",value:function(e,f,g){var h,i;if(g)h=this._adjustValue(null,g),i=!0;else{e.preventDefault();var j=this,k=this.options.vertical,l=k?"height":"width",m=k?"top":"left",n=k?e.pageY:e.pageX,p=(this.$handle[0].getBoundingClientRect()[l]/2,this.$element[0].getBoundingClientRect()[l]),q=k?a(window).scrollTop():a(window).scrollLeft(),r=this.$element.offset()[m];e.clientY===e.pageY&&(n+=q);var t,s=n-r;if(t=s<0?0:s>p?p:s,offsetPct=c(t,p),h=(this.options.end-this.options.start)*offsetPct+parseFloat(this.options.start),Foundation.rtl()&&!this.options.vertical&&(h=this.options.end-h),h=j._adjustValue(null,h),i=!1,!f){var u=d(this.$handle,m,t,l),v=d(this.$handle2,m,t,l);f=u<=v?this.$handle:this.$handle2}}this._setHandlePos(f,h,i)}},{key:"_adjustValue",value:function(b,c){var d,g,h,i,e=this.options.step,f=parseFloat(e/2);return d=b?parseFloat(b.attr("aria-valuenow")):c,g=d%e,h=d-g,i=h+e,0===g?d:d=d>=h+f?i:h}},{key:"_events",value:function(c){var e,d=this;if(this.inputs.off("change.zf.slider").on("change.zf.slider",function(b){var c=d.inputs.index(a(this));d._handleEvent(b,d.handles.eq(c),a(this).val())}),this.options.clickSelect&&this.$element.off("click.zf.slider").on("click.zf.slider",function(b){return!d.$element.data("dragging")&&void(a(b.target).is("[data-slider-handle]")||(d.options.doubleSided?d._handleEvent(b):d._handleEvent(b,d.$handle)))}),this.options.draggable){this.handles.addTouch();var g=a("body");c.off("mousedown.zf.slider").on("mousedown.zf.slider",function(b){c.addClass("is-dragging"),d.$fill.addClass("is-dragging"),d.$element.data("dragging",!0),e=a(b.currentTarget),g.on("mousemove.zf.slider",function(a){a.preventDefault(),d._handleEvent(a,e)}).on("mouseup.zf.slider",function(a){d._handleEvent(a,e),c.removeClass("is-dragging"),d.$fill.removeClass("is-dragging"),d.$element.data("dragging",!1),g.off("mousemove.zf.slider mouseup.zf.slider")})}).on("selectstart.zf.slider touchmove.zf.slider",function(a){a.preventDefault()})}c.off("keydown.zf.slider").on("keydown.zf.slider",function(b){var g,c=a(this),e=d.options.doubleSided?d.handles.index(c):0,f=parseFloat(d.inputs.eq(e).val());Foundation.Keyboard.handleKey(b,"Slider",{decrease:function(){g=f-d.options.step},increase:function(){g=f+d.options.step},decrease_fast:function(){g=f-10*d.options.step},increase_fast:function(){g=f+10*d.options.step},handled:function(){b.preventDefault(),d._setHandlePos(c,g,!0)}})})}},{key:"destroy",value:function(){this.handles.off(".zf.slider"),this.inputs.off(".zf.slider"),this.$element.off(".zf.slider"),Foundation.unregisterPlugin(this)}}]),b}();b.defaults={start:0,end:100,step:1,initialStart:0,initialEnd:100,binding:!1,clickSelect:!0,vertical:!1,draggable:!0,disabled:!1,doubleSided:!1,decimal:2,moveTime:200,disabledClass:"disabled",invertVertical:!1,changedDelay:500},Foundation.plugin(b,"Slider")}(jQuery);var _createClass=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();!function(a){function c(a){return parseInt(window.getComputedStyle(document.body,null).fontSize,10)*a}var b=function(){function b(c,d){_classCallCheck(this,b),this.$element=c,this.options=a.extend({},b.defaults,this.$element.data(),d),this._init(),Foundation.registerPlugin(this,"Sticky")}return _createClass(b,[{key:"_init",value:function(){var c=this.$element.parent("[data-sticky-container]"),d=this.$element[0].id||Foundation.GetYoDigits(6,"sticky"),e=this;c.length||(this.wasWrapped=!0),this.$container=c.length?c:a(this.options.container).wrapInner(this.$element),this.$container.addClass(this.options.containerClass),this.$element.addClass(this.options.stickyClass).attr({"data-resize":d}),this.scrollCount=this.options.checkEvery,this.isStuck=!1,a(window).one("load.zf.sticky",function(){""!==e.options.anchor?e.$anchor=a("#"+e.options.anchor):e._parsePoints(),e._setSizes(function(){e._calc(!1)}),e._events(d.split("-").reverse().join("-"))})}},{key:"_parsePoints",value:function(){for(var c=""==this.options.topAnchor?1:this.options.topAnchor,d=""==this.options.btmAnchor?document.documentElement.scrollHeight:this.options.btmAnchor,e=[c,d],f={},g=0,h=e.length;g<h&&e[g];g++){var i;if("number"==typeof e[g])i=e[g];else{var j=e[g].split(":"),k=a("#"+j[0]);i=k.offset().top,j[1]&&"bottom"===j[1].toLowerCase()&&(i+=k[0].getBoundingClientRect().height)}f[g]=i}this.points=f}},{key:"_events",value:function(c){var d=this,e=this.scrollListener="scroll.zf."+c;this.isOn||(this.canStick&&(this.isOn=!0,a(window).off(e).on(e,function(a){0===d.scrollCount?(d.scrollCount=d.options.checkEvery,d._setSizes(function(){d._calc(!1,window.pageYOffset)})):(d.scrollCount--,d._calc(!1,window.pageYOffset))})),this.$element.off("resizeme.zf.trigger").on("resizeme.zf.trigger",function(a,b){d._setSizes(function(){d._calc(!1),d.canStick?d.isOn||d._events(c):d.isOn&&d._pauseListeners(e)})}))}},{key:"_pauseListeners",value:function(c){this.isOn=!1,a(window).off(c),this.$element.trigger("pause.zf.sticky")}},{key:"_calc",value:function(b,c){return b&&this._setSizes(),this.canStick?(c||(c=window.pageYOffset),void(c>=this.topPoint?c<=this.bottomPoint?this.isStuck||this._setSticky():this.isStuck&&this._removeSticky(!1):this.isStuck&&this._removeSticky(!0))):(this.isStuck&&this._removeSticky(!0),!1)}},{key:"_setSticky",value:function(){var b=this,c=this.options.stickTo,d="top"===c?"marginTop":"marginBottom",e="top"===c?"bottom":"top",f={};f[d]=this.options[d]+"em",f[c]=0,f[e]="auto",f.left=this.$container.offset().left+parseInt(window.getComputedStyle(this.$container[0])["padding-left"],10),this.isStuck=!0,this.$element.removeClass("is-anchored is-at-"+e).addClass("is-stuck is-at-"+c).css(f).trigger("sticky.zf.stuckto:"+c),this.$element.on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd",function(){b._setSizes()})}},{key:"_removeSticky",value:function(b){var c=this.options.stickTo,d="top"===c,e={},f=(this.points?this.points[1]-this.points[0]:this.anchorHeight)-this.elemHeight,g=d?"marginTop":"marginBottom",i=b?"top":"bottom";e[g]=0,e.bottom="auto",b?e.top=0:e.top=f,e.left="",this.isStuck=!1,this.$element.removeClass("is-stuck is-at-"+c).addClass("is-anchored is-at-"+i).css(e).trigger("sticky.zf.unstuckfrom:"+i)}},{key:"_setSizes",value:function(b){this.canStick=Foundation.MediaQuery.atLeast(this.options.stickyOn),this.canStick||b();var d=this.$container[0].getBoundingClientRect().width,e=window.getComputedStyle(this.$container[0]),f=parseInt(e["padding-right"],10);this.$anchor&&this.$anchor.length?this.anchorHeight=this.$anchor[0].getBoundingClientRect().height:this._parsePoints(),this.$element.css({"max-width":d-f+"px"});var g=this.$element[0].getBoundingClientRect().height||this.containerHeight;"none"==this.$element.css("display")&&(g=0),this.containerHeight=g,this.$container.css({height:g}),this.elemHeight=g,this.isStuck&&this.$element.css({left:this.$container.offset().left+parseInt(e["padding-left"],10)}),this._setBreakPoints(g,function(){b&&b()})}},{key:"_setBreakPoints",value:function(b,d){if(!this.canStick){if(!d)return!1;d()}var e=c(this.options.marginTop),f=c(this.options.marginBottom),g=this.points?this.points[0]:this.$anchor.offset().top,h=this.points?this.points[1]:g+this.anchorHeight,i=window.innerHeight;"top"===this.options.stickTo?(g-=e,h-=b+e):"bottom"===this.options.stickTo&&(g-=i-(b+f),h-=i-f),this.topPoint=g,this.bottomPoint=h,d&&d()}},{key:"destroy",value:function(){this._removeSticky(!0),this.$element.removeClass(this.options.stickyClass+" is-anchored is-at-top").css({height:"",top:"",bottom:"","max-width":""}).off("resizeme.zf.trigger"),this.$anchor&&this.$anchor.length&&this.$anchor.off("change.zf.sticky"),a(window).off(this.scrollListener),this.wasWrapped?this.$element.unwrap():this.$container.removeClass(this.options.containerClass).css({height:""}),Foundation.unregisterPlugin(this)}}]),b}();b.defaults={container:"<div data-sticky-container></div>",stickTo:"top",anchor:"",topAnchor:"",btmAnchor:"",marginTop:1,marginBottom:1,stickyOn:"medium",stickyClass:"sticky",containerClass:"sticky-container",checkEvery:-1},Foundation.plugin(b,"Sticky")}(jQuery);var _createClass=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];
d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();!function(a){var b=function(){function b(c,d){_classCallCheck(this,b),this.$element=c,this.options=a.extend({},b.defaults,this.$element.data(),d),this._init(),Foundation.registerPlugin(this,"Tabs"),Foundation.Keyboard.register("Tabs",{ENTER:"open",SPACE:"open",ARROW_RIGHT:"next",ARROW_UP:"previous",ARROW_DOWN:"next",ARROW_LEFT:"previous"})}return _createClass(b,[{key:"_init",value:function(){var c=this;if(this.$tabTitles=this.$element.find("."+this.options.linkClass),this.$tabContent=a('[data-tabs-content="'+this.$element[0].id+'"]'),this.$tabTitles.each(function(){var b=a(this),d=b.find("a"),e=b.hasClass("is-active"),f=d[0].hash.slice(1),g=d[0].id?d[0].id:f+"-label",h=a("#"+f);b.attr({role:"presentation"}),d.attr({role:"tab","aria-controls":f,"aria-selected":e,id:g}),h.attr({role:"tabpanel","aria-hidden":!e,"aria-labelledby":g}),e&&c.options.autoFocus&&d.focus()}),this.options.matchHeight){var d=this.$tabContent.find("img");d.length?Foundation.onImagesLoaded(d,this._setHeight.bind(this)):this._setHeight()}this._events()}},{key:"_events",value:function(){this._addKeyHandler(),this._addClickHandler(),this._setHeightMqHandler=null,this.options.matchHeight&&(this._setHeightMqHandler=this._setHeight.bind(this),a(window).on("changed.zf.mediaquery",this._setHeightMqHandler))}},{key:"_addClickHandler",value:function(){var c=this;this.$element.off("click.zf.tabs").on("click.zf.tabs","."+this.options.linkClass,function(b){b.preventDefault(),b.stopPropagation(),a(this).hasClass("is-active")||c._handleTabChange(a(this))})}},{key:"_addKeyHandler",value:function(){var c=this;c.$element.find("li:first-of-type"),c.$element.find("li:last-of-type");this.$tabTitles.off("keydown.zf.tabs").on("keydown.zf.tabs",function(b){if(9!==b.which){var f,g,d=a(this),e=d.parent("ul").children("li");e.each(function(b){if(a(this).is(d))return void(c.options.wrapOnKeys?(f=0===b?e.last():e.eq(b-1),g=b===e.length-1?e.first():e.eq(b+1)):(f=e.eq(Math.max(0,b-1)),g=e.eq(Math.min(b+1,e.length-1))))}),Foundation.Keyboard.handleKey(b,"Tabs",{open:function(){d.find('[role="tab"]').focus(),c._handleTabChange(d)},previous:function(){f.find('[role="tab"]').focus(),c._handleTabChange(f)},next:function(){g.find('[role="tab"]').focus(),c._handleTabChange(g)},handled:function(){b.stopPropagation(),b.preventDefault()}})}})}},{key:"_handleTabChange",value:function(c){var d=c.find('[role="tab"]'),e=d[0].hash,f=this.$tabContent.find(e),g=this.$element.find("."+this.options.linkClass+".is-active").removeClass("is-active").find('[role="tab"]').attr({"aria-selected":"false"});a("#"+g.attr("aria-controls")).removeClass("is-active").attr({"aria-hidden":"true"}),c.addClass("is-active"),d.attr({"aria-selected":"true"}),f.addClass("is-active").attr({"aria-hidden":"false"}),this.$element.trigger("change.zf.tabs",[c])}},{key:"selectTab",value:function(b){var c;c="object"==typeof b?b[0].id:b,c.indexOf("#")<0&&(c="#"+c);var d=this.$tabTitles.find('[href="'+c+'"]').parent("."+this.options.linkClass);this._handleTabChange(d)}},{key:"_setHeight",value:function(){var c=0;this.$tabContent.find("."+this.options.panelClass).css("height","").each(function(){var b=a(this),d=b.hasClass("is-active");d||b.css({visibility:"hidden",display:"block"});var e=this.getBoundingClientRect().height;d||b.css({visibility:"",display:""}),c=e>c?e:c}).css("height",c+"px")}},{key:"destroy",value:function(){this.$element.find("."+this.options.linkClass).off(".zf.tabs").hide().end().find("."+this.options.panelClass).hide(),this.options.matchHeight&&null!=this._setHeightMqHandler&&a(window).off("changed.zf.mediaquery",this._setHeightMqHandler),Foundation.unregisterPlugin(this)}}]),b}();b.defaults={autoFocus:!1,wrapOnKeys:!0,matchHeight:!1,linkClass:"tabs-title",panelClass:"tabs-panel"},Foundation.plugin(b,"Tabs")}(jQuery);var _createClass=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();!function(a){var b=function(){function b(c,d){_classCallCheck(this,b),this.$element=c,this.options=a.extend({},b.defaults,c.data(),d),this.className="",this._init(),this._events(),Foundation.registerPlugin(this,"Toggler")}return _createClass(b,[{key:"_init",value:function(){var c;this.options.animate?(c=this.options.animate.split(" "),this.animationIn=c[0],this.animationOut=c[1]||null):(c=this.$element.data("toggler"),this.className="."===c[0]?c.slice(1):c);var d=this.$element[0].id;a('[data-open="'+d+'"], [data-close="'+d+'"], [data-toggle="'+d+'"]').attr("aria-controls",d),this.$element.attr("aria-expanded",!this.$element.is(":hidden"))}},{key:"_events",value:function(){this.$element.off("toggle.zf.trigger").on("toggle.zf.trigger",this.toggle.bind(this))}},{key:"toggle",value:function(){this[this.options.animate?"_toggleAnimate":"_toggleClass"]()}},{key:"_toggleClass",value:function(){this.$element.toggleClass(this.className);var b=this.$element.hasClass(this.className);b?this.$element.trigger("on.zf.toggler"):this.$element.trigger("off.zf.toggler"),this._updateARIA(b)}},{key:"_toggleAnimate",value:function(){var b=this;this.$element.is(":hidden")?Foundation.Motion.animateIn(this.$element,this.animationIn,function(){b._updateARIA(!0),this.trigger("on.zf.toggler")}):Foundation.Motion.animateOut(this.$element,this.animationOut,function(){b._updateARIA(!1),this.trigger("off.zf.toggler")})}},{key:"_updateARIA",value:function(b){this.$element.attr("aria-expanded",!!b)}},{key:"destroy",value:function(){this.$element.off(".zf.toggler"),Foundation.unregisterPlugin(this)}}]),b}();b.defaults={animate:!1},Foundation.plugin(b,"Toggler")}(jQuery);var _createClass=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();!function(a){var b=function(){function b(c,d){_classCallCheck(this,b),this.$element=c,this.options=a.extend({},b.defaults,this.$element.data(),d),this.isActive=!1,this.isClick=!1,this._init(),Foundation.registerPlugin(this,"Tooltip")}return _createClass(b,[{key:"_init",value:function(){var c=this.$element.attr("aria-describedby")||Foundation.GetYoDigits(6,"tooltip");this.options.positionClass=this.options.positionClass||this._getPositionClass(this.$element),this.options.tipText=this.options.tipText||this.$element.attr("title"),this.template=this.options.template?a(this.options.template):this._buildTemplate(c),this.template.appendTo(document.body).text(this.options.tipText).hide(),this.$element.attr({title:"","aria-describedby":c,"data-yeti-box":c,"data-toggle":c,"data-resize":c}).addClass(this.triggerClass),this.usedPositions=[],this.counter=4,this.classChanged=!1,this._events()}},{key:"_getPositionClass",value:function(b){if(!b)return"";var c=b[0].className.match(/\b(top|left|right)\b/g);return c=c?c[0]:""}},{key:"_buildTemplate",value:function(c){var d=(this.options.tooltipClass+" "+this.options.positionClass+" "+this.options.templateClasses).trim(),e=a("<div></div>").addClass(d).attr({role:"tooltip","aria-hidden":!0,"data-is-active":!1,"data-is-focus":!1,id:c});return e}},{key:"_reposition",value:function(b){this.usedPositions.push(b?b:"bottom"),!b&&this.usedPositions.indexOf("top")<0?this.template.addClass("top"):"top"===b&&this.usedPositions.indexOf("bottom")<0?this.template.removeClass(b):"left"===b&&this.usedPositions.indexOf("right")<0?this.template.removeClass(b).addClass("right"):"right"===b&&this.usedPositions.indexOf("left")<0?this.template.removeClass(b).addClass("left"):!b&&this.usedPositions.indexOf("top")>-1&&this.usedPositions.indexOf("left")<0?this.template.addClass("left"):"top"===b&&this.usedPositions.indexOf("bottom")>-1&&this.usedPositions.indexOf("left")<0?this.template.removeClass(b).addClass("left"):"left"===b&&this.usedPositions.indexOf("right")>-1&&this.usedPositions.indexOf("bottom")<0?this.template.removeClass(b):"right"===b&&this.usedPositions.indexOf("left")>-1&&this.usedPositions.indexOf("bottom")<0?this.template.removeClass(b):this.template.removeClass(b),this.classChanged=!0,this.counter--}},{key:"_setPosition",value:function(){var b=this._getPositionClass(this.template),c=Foundation.Box.GetDimensions(this.template),d=Foundation.Box.GetDimensions(this.$element),e="left"===b?"left":"right"===b?"left":"top",f="top"===e?"height":"width";"height"===f?this.options.vOffset:this.options.hOffset;if(c.width>=c.windowDims.width||!this.counter&&!Foundation.Box.ImNotTouchingYou(this.template))return this.template.offset(Foundation.Box.GetOffsets(this.template,this.$element,"center bottom",this.options.vOffset,this.options.hOffset,!0)).css({width:d.windowDims.width-2*this.options.hOffset,height:"auto"}),!1;for(this.template.offset(Foundation.Box.GetOffsets(this.template,this.$element,"center "+(b||"bottom"),this.options.vOffset,this.options.hOffset));!Foundation.Box.ImNotTouchingYou(this.template)&&this.counter;)this._reposition(b),this._setPosition()}},{key:"show",value:function(){if("all"!==this.options.showOn&&!Foundation.MediaQuery.atLeast(this.options.showOn))return!1;var b=this;this.template.css("visibility","hidden").show(),this._setPosition(),this.$element.trigger("closeme.zf.tooltip",this.template.attr("id")),this.template.attr({"data-is-active":!0,"aria-hidden":!1}),b.isActive=!0,this.template.stop().hide().css("visibility","").fadeIn(this.options.fadeInDuration,function(){}),this.$element.trigger("show.zf.tooltip")}},{key:"hide",value:function(){var b=this;this.template.stop().attr({"aria-hidden":!0,"data-is-active":!1}).fadeOut(this.options.fadeOutDuration,function(){b.isActive=!1,b.isClick=!1,b.classChanged&&(b.template.removeClass(b._getPositionClass(b.template)).addClass(b.options.positionClass),b.usedPositions=[],b.counter=4,b.classChanged=!1)}),this.$element.trigger("hide.zf.tooltip")}},{key:"_events",value:function(){var b=this,d=(this.template,!1);this.options.disableHover||this.$element.on("mouseenter.zf.tooltip",function(a){b.isActive||(b.timeout=setTimeout(function(){b.show()},b.options.hoverDelay))}).on("mouseleave.zf.tooltip",function(a){clearTimeout(b.timeout),(!d||b.isClick&&!b.options.clickOpen)&&b.hide()}),this.options.clickOpen?this.$element.on("mousedown.zf.tooltip",function(a){a.stopImmediatePropagation(),b.isClick||(b.isClick=!0,!b.options.disableHover&&b.$element.attr("tabindex")||b.isActive||b.show())}):this.$element.on("mousedown.zf.tooltip",function(a){a.stopImmediatePropagation(),b.isClick=!0}),this.options.disableForTouch||this.$element.on("tap.zf.tooltip touchend.zf.tooltip",function(a){b.isActive?b.hide():b.show()}),this.$element.on({"close.zf.trigger":this.hide.bind(this)}),this.$element.on("focus.zf.tooltip",function(a){return d=!0,b.isClick?(b.options.clickOpen||(d=!1),!1):void b.show()}).on("focusout.zf.tooltip",function(a){d=!1,b.isClick=!1,b.hide()}).on("resizeme.zf.trigger",function(){b.isActive&&b._setPosition()})}},{key:"toggle",value:function(){this.isActive?this.hide():this.show()}},{key:"destroy",value:function(){this.$element.attr("title",this.template.text()).off(".zf.trigger .zf.tooltip").removeAttr("aria-describedby").removeAttr("data-yeti-box").removeAttr("data-toggle").removeAttr("data-resize"),this.template.remove(),Foundation.unregisterPlugin(this)}}]),b}();b.defaults={disableForTouch:!1,hoverDelay:200,fadeInDuration:150,fadeOutDuration:150,disableHover:!1,templateClasses:"",tooltipClass:"tooltip",triggerClass:"has-tip",showOn:"small",template:"",tipText:"",touchCloseText:"Tap to close.",clickOpen:!0,positionClass:"",vOffset:10,hOffset:12},Foundation.plugin(b,"Tooltip")}(jQuery);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:67:"/local/templates/bitlate_pro/js/isotope.pkgd.min.js?150885328734695";s:6:"source";s:51:"/local/templates/bitlate_pro/js/isotope.pkgd.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*!
 * Isotope PACKAGED v3.0.1
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * http://isotope.metafizzy.co
 * Copyright 2016 Metafizzy
 */

!function(t,e){"use strict";"function"==typeof define&&define.amd?define("jquery-bridget/jquery-bridget",["jquery"],function(i){e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("jquery")):t.jQueryBridget=e(t,t.jQuery)}(window,function(t,e){"use strict";function i(i,s,a){function u(t,e,n){var o,s="$()."+i+'("'+e+'")';return t.each(function(t,u){var h=a.data(u,i);if(!h)return void r(i+" not initialized. Cannot call methods, i.e. "+s);var d=h[e];if(!d||"_"==e.charAt(0))return void r(s+" is not a valid method");var l=d.apply(h,n);o=void 0===o?l:o}),void 0!==o?o:t}function h(t,e){t.each(function(t,n){var o=a.data(n,i);o?(o.option(e),o._init()):(o=new s(n,e),a.data(n,i,o))})}a=a||e||t.jQuery,a&&(s.prototype.option||(s.prototype.option=function(t){a.isPlainObject(t)&&(this.options=a.extend(!0,this.options,t))}),a.fn[i]=function(t){if("string"==typeof t){var e=o.call(arguments,1);return u(this,t,e)}return h(this,t),this},n(a))}function n(t){!t||t&&t.bridget||(t.bridget=i)}var o=Array.prototype.slice,s=t.console,r="undefined"==typeof s?function(){}:function(t){s.error(t)};return n(e||t.jQuery),i}),function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}("undefined"!=typeof window?window:this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},n=i[t]=i[t]||[];return-1==n.indexOf(e)&&n.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{},n=i[t]=i[t]||{};return n[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=i.indexOf(e);return-1!=n&&i.splice(n,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=0,o=i[n];e=e||[];for(var s=this._onceEvents&&this._onceEvents[t];o;){var r=s&&s[o];r&&(this.off(t,o),delete s[o]),o.apply(this,e),n+=r?0:1,o=i[n]}return this}},t}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("get-size/get-size",[],function(){return e()}):"object"==typeof module&&module.exports?module.exports=e():t.getSize=e()}(window,function(){"use strict";function t(t){var e=parseFloat(t),i=-1==t.indexOf("%")&&!isNaN(e);return i&&e}function e(){}function i(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0;h>e;e++){var i=u[e];t[i]=0}return t}function n(t){var e=getComputedStyle(t);return e||a("Style returned "+e+". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),e}function o(){if(!d){d=!0;var e=document.createElement("div");e.style.width="200px",e.style.padding="1px 2px 3px 4px",e.style.borderStyle="solid",e.style.borderWidth="1px 2px 3px 4px",e.style.boxSizing="border-box";var i=document.body||document.documentElement;i.appendChild(e);var o=n(e);s.isBoxSizeOuter=r=200==t(o.width),i.removeChild(e)}}function s(e){if(o(),"string"==typeof e&&(e=document.querySelector(e)),e&&"object"==typeof e&&e.nodeType){var s=n(e);if("none"==s.display)return i();var a={};a.width=e.offsetWidth,a.height=e.offsetHeight;for(var d=a.isBorderBox="border-box"==s.boxSizing,l=0;h>l;l++){var f=u[l],c=s[f],m=parseFloat(c);a[f]=isNaN(m)?0:m}var p=a.paddingLeft+a.paddingRight,y=a.paddingTop+a.paddingBottom,g=a.marginLeft+a.marginRight,v=a.marginTop+a.marginBottom,_=a.borderLeftWidth+a.borderRightWidth,I=a.borderTopWidth+a.borderBottomWidth,z=d&&r,x=t(s.width);x!==!1&&(a.width=x+(z?0:p+_));var S=t(s.height);return S!==!1&&(a.height=S+(z?0:y+I)),a.innerWidth=a.width-(p+_),a.innerHeight=a.height-(y+I),a.outerWidth=a.width+g,a.outerHeight=a.height+v,a}}var r,a="undefined"==typeof console?e:function(t){console.error(t)},u=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],h=u.length,d=!1;return s}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("desandro-matches-selector/matches-selector",e):"object"==typeof module&&module.exports?module.exports=e():t.matchesSelector=e()}(window,function(){"use strict";var t=function(){var t=Element.prototype;if(t.matches)return"matches";if(t.matchesSelector)return"matchesSelector";for(var e=["webkit","moz","ms","o"],i=0;i<e.length;i++){var n=e[i],o=n+"MatchesSelector";if(t[o])return o}}();return function(e,i){return e[t](i)}}),function(t,e){"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["desandro-matches-selector/matches-selector"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("desandro-matches-selector")):t.fizzyUIUtils=e(t,t.matchesSelector)}(window,function(t,e){var i={};i.extend=function(t,e){for(var i in e)t[i]=e[i];return t},i.modulo=function(t,e){return(t%e+e)%e},i.makeArray=function(t){var e=[];if(Array.isArray(t))e=t;else if(t&&"number"==typeof t.length)for(var i=0;i<t.length;i++)e.push(t[i]);else e.push(t);return e},i.removeFrom=function(t,e){var i=t.indexOf(e);-1!=i&&t.splice(i,1)},i.getParent=function(t,i){for(;t!=document.body;)if(t=t.parentNode,e(t,i))return t},i.getQueryElement=function(t){return"string"==typeof t?document.querySelector(t):t},i.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},i.filterFindElements=function(t,n){t=i.makeArray(t);var o=[];return t.forEach(function(t){if(t instanceof HTMLElement){if(!n)return void o.push(t);e(t,n)&&o.push(t);for(var i=t.querySelectorAll(n),s=0;s<i.length;s++)o.push(i[s])}}),o},i.debounceMethod=function(t,e,i){var n=t.prototype[e],o=e+"Timeout";t.prototype[e]=function(){var t=this[o];t&&clearTimeout(t);var e=arguments,s=this;this[o]=setTimeout(function(){n.apply(s,e),delete s[o]},i||100)}},i.docReady=function(t){var e=document.readyState;"complete"==e||"interactive"==e?t():document.addEventListener("DOMContentLoaded",t)},i.toDashed=function(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()};var n=t.console;return i.htmlInit=function(e,o){i.docReady(function(){var s=i.toDashed(o),r="data-"+s,a=document.querySelectorAll("["+r+"]"),u=document.querySelectorAll(".js-"+s),h=i.makeArray(a).concat(i.makeArray(u)),d=r+"-options",l=t.jQuery;h.forEach(function(t){var i,s=t.getAttribute(r)||t.getAttribute(d);try{i=s&&JSON.parse(s)}catch(a){return void(n&&n.error("Error parsing "+r+" on "+t.className+": "+a))}var u=new e(t,i);l&&l.data(t,o,u)})})},i}),function(t,e){"function"==typeof define&&define.amd?define("outlayer/item",["ev-emitter/ev-emitter","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("ev-emitter"),require("get-size")):(t.Outlayer={},t.Outlayer.Item=e(t.EvEmitter,t.getSize))}(window,function(t,e){"use strict";function i(t){for(var e in t)return!1;return e=null,!0}function n(t,e){t&&(this.element=t,this.layout=e,this.position={x:0,y:0},this._create())}function o(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}var s=document.documentElement.style,r="string"==typeof s.transition?"transition":"WebkitTransition",a="string"==typeof s.transform?"transform":"WebkitTransform",u={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[r],h={transform:a,transition:r,transitionDuration:r+"Duration",transitionProperty:r+"Property",transitionDelay:r+"Delay"},d=n.prototype=Object.create(t.prototype);d.constructor=n,d._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},d.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},d.getSize=function(){this.size=e(this.element)},d.css=function(t){var e=this.element.style;for(var i in t){var n=h[i]||i;e[n]=t[i]}},d.getPosition=function(){var t=getComputedStyle(this.element),e=this.layout._getOption("originLeft"),i=this.layout._getOption("originTop"),n=t[e?"left":"right"],o=t[i?"top":"bottom"],s=this.layout.size,r=-1!=n.indexOf("%")?parseFloat(n)/100*s.width:parseInt(n,10),a=-1!=o.indexOf("%")?parseFloat(o)/100*s.height:parseInt(o,10);r=isNaN(r)?0:r,a=isNaN(a)?0:a,r-=e?s.paddingLeft:s.paddingRight,a-=i?s.paddingTop:s.paddingBottom,this.position.x=r,this.position.y=a},d.layoutPosition=function(){var t=this.layout.size,e={},i=this.layout._getOption("originLeft"),n=this.layout._getOption("originTop"),o=i?"paddingLeft":"paddingRight",s=i?"left":"right",r=i?"right":"left",a=this.position.x+t[o];e[s]=this.getXValue(a),e[r]="";var u=n?"paddingTop":"paddingBottom",h=n?"top":"bottom",d=n?"bottom":"top",l=this.position.y+t[u];e[h]=this.getYValue(l),e[d]="",this.css(e),this.emitEvent("layout",[this])},d.getXValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&!e?t/this.layout.size.width*100+"%":t+"px"},d.getYValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&e?t/this.layout.size.height*100+"%":t+"px"},d._transitionTo=function(t,e){this.getPosition();var i=this.position.x,n=this.position.y,o=parseInt(t,10),s=parseInt(e,10),r=o===this.position.x&&s===this.position.y;if(this.setPosition(t,e),r&&!this.isTransitioning)return void this.layoutPosition();var a=t-i,u=e-n,h={};h.transform=this.getTranslate(a,u),this.transition({to:h,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},d.getTranslate=function(t,e){var i=this.layout._getOption("originLeft"),n=this.layout._getOption("originTop");return t=i?t:-t,e=n?e:-e,"translate3d("+t+"px, "+e+"px, 0)"},d.goTo=function(t,e){this.setPosition(t,e),this.layoutPosition()},d.moveTo=d._transitionTo,d.setPosition=function(t,e){this.position.x=parseInt(t,10),this.position.y=parseInt(e,10)},d._nonTransition=function(t){this.css(t.to),t.isCleaning&&this._removeStyles(t.to);for(var e in t.onTransitionEnd)t.onTransitionEnd[e].call(this)},d.transition=function(t){if(!parseFloat(this.layout.options.transitionDuration))return void this._nonTransition(t);var e=this._transn;for(var i in t.onTransitionEnd)e.onEnd[i]=t.onTransitionEnd[i];for(i in t.to)e.ingProperties[i]=!0,t.isCleaning&&(e.clean[i]=!0);if(t.from){this.css(t.from);var n=this.element.offsetHeight;n=null}this.enableTransition(t.to),this.css(t.to),this.isTransitioning=!0};var l="opacity,"+o(a);d.enableTransition=function(){if(!this.isTransitioning){var t=this.layout.options.transitionDuration;t="number"==typeof t?t+"ms":t,this.css({transitionProperty:l,transitionDuration:t,transitionDelay:this.staggerDelay||0}),this.element.addEventListener(u,this,!1)}},d.onwebkitTransitionEnd=function(t){this.ontransitionend(t)},d.onotransitionend=function(t){this.ontransitionend(t)};var f={"-webkit-transform":"transform"};d.ontransitionend=function(t){if(t.target===this.element){var e=this._transn,n=f[t.propertyName]||t.propertyName;if(delete e.ingProperties[n],i(e.ingProperties)&&this.disableTransition(),n in e.clean&&(this.element.style[t.propertyName]="",delete e.clean[n]),n in e.onEnd){var o=e.onEnd[n];o.call(this),delete e.onEnd[n]}this.emitEvent("transitionEnd",[this])}},d.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(u,this,!1),this.isTransitioning=!1},d._removeStyles=function(t){var e={};for(var i in t)e[i]="";this.css(e)};var c={transitionProperty:"",transitionDuration:"",transitionDelay:""};return d.removeTransitionStyles=function(){this.css(c)},d.stagger=function(t){t=isNaN(t)?0:t,this.staggerDelay=t+"ms"},d.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},d.remove=function(){return r&&parseFloat(this.layout.options.transitionDuration)?(this.once("transitionEnd",function(){this.removeElem()}),void this.hide()):void this.removeElem()},d.reveal=function(){delete this.isHidden,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("visibleStyle");e[i]=this.onRevealTransitionEnd,this.transition({from:t.hiddenStyle,to:t.visibleStyle,isCleaning:!0,onTransitionEnd:e})},d.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},d.getHideRevealTransitionEndProperty=function(t){var e=this.layout.options[t];if(e.opacity)return"opacity";for(var i in e)return i},d.hide=function(){this.isHidden=!0,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("hiddenStyle");e[i]=this.onHideTransitionEnd,this.transition({from:t.visibleStyle,to:t.hiddenStyle,isCleaning:!0,onTransitionEnd:e})},d.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},d.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},n}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("outlayer/outlayer",["ev-emitter/ev-emitter","get-size/get-size","fizzy-ui-utils/utils","./item"],function(i,n,o,s){return e(t,i,n,o,s)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter"),require("get-size"),require("fizzy-ui-utils"),require("./item")):t.Outlayer=e(t,t.EvEmitter,t.getSize,t.fizzyUIUtils,t.Outlayer.Item)}(window,function(t,e,i,n,o){"use strict";function s(t,e){var i=n.getQueryElement(t);if(!i)return void(u&&u.error("Bad element for "+this.constructor.namespace+": "+(i||t)));this.element=i,h&&(this.$element=h(this.element)),this.options=n.extend({},this.constructor.defaults),this.option(e);var o=++l;this.element.outlayerGUID=o,f[o]=this,this._create();var s=this._getOption("initLayout");s&&this.layout()}function r(t){function e(){t.apply(this,arguments)}return e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e}function a(t){if("number"==typeof t)return t;var e=t.match(/(^\d*\.?\d*)(\w*)/),i=e&&e[1],n=e&&e[2];if(!i.length)return 0;i=parseFloat(i);var o=m[n]||1;return i*o}var u=t.console,h=t.jQuery,d=function(){},l=0,f={};s.namespace="outlayer",s.Item=o,s.defaults={containerStyle:{position:"relative"},initLayout:!0,originLeft:!0,originTop:!0,resize:!0,resizeContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}};var c=s.prototype;n.extend(c,e.prototype),c.option=function(t){n.extend(this.options,t)},c._getOption=function(t){var e=this.constructor.compatOptions[t];return e&&void 0!==this.options[e]?this.options[e]:this.options[t]},s.compatOptions={initLayout:"isInitLayout",horizontal:"isHorizontal",layoutInstant:"isLayoutInstant",originLeft:"isOriginLeft",originTop:"isOriginTop",resize:"isResizeBound",resizeContainer:"isResizingContainer"},c._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),n.extend(this.element.style,this.options.containerStyle);var t=this._getOption("resize");t&&this.bindResize()},c.reloadItems=function(){this.items=this._itemize(this.element.children)},c._itemize=function(t){for(var e=this._filterFindItemElements(t),i=this.constructor.Item,n=[],o=0;o<e.length;o++){var s=e[o],r=new i(s,this);n.push(r)}return n},c._filterFindItemElements=function(t){return n.filterFindElements(t,this.options.itemSelector)},c.getItemElements=function(){return this.items.map(function(t){return t.element})},c.layout=function(){this._resetLayout(),this._manageStamps();var t=this._getOption("layoutInstant"),e=void 0!==t?t:!this._isLayoutInited;this.layoutItems(this.items,e),this._isLayoutInited=!0},c._init=c.layout,c._resetLayout=function(){this.getSize()},c.getSize=function(){this.size=i(this.element)},c._getMeasurement=function(t,e){var n,o=this.options[t];o?("string"==typeof o?n=this.element.querySelector(o):o instanceof HTMLElement&&(n=o),this[t]=n?i(n)[e]:o):this[t]=0},c.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},c._getItemsForLayout=function(t){return t.filter(function(t){return!t.isIgnored})},c._layoutItems=function(t,e){if(this._emitCompleteOnItems("layout",t),t&&t.length){var i=[];t.forEach(function(t){var n=this._getItemLayoutPosition(t);n.item=t,n.isInstant=e||t.isLayoutInstant,i.push(n)},this),this._processLayoutQueue(i)}},c._getItemLayoutPosition=function(){return{x:0,y:0}},c._processLayoutQueue=function(t){this.updateStagger(),t.forEach(function(t,e){this._positionItem(t.item,t.x,t.y,t.isInstant,e)},this)},c.updateStagger=function(){var t=this.options.stagger;return null===t||void 0===t?void(this.stagger=0):(this.stagger=a(t),this.stagger)},c._positionItem=function(t,e,i,n,o){n?t.goTo(e,i):(t.stagger(o*this.stagger),t.moveTo(e,i))},c._postLayout=function(){this.resizeContainer()},c.resizeContainer=function(){var t=this._getOption("resizeContainer");if(t){var e=this._getContainerSize();e&&(this._setContainerMeasure(e.width,!0),this._setContainerMeasure(e.height,!1))}},c._getContainerSize=d,c._setContainerMeasure=function(t,e){if(void 0!==t){var i=this.size;i.isBorderBox&&(t+=e?i.paddingLeft+i.paddingRight+i.borderLeftWidth+i.borderRightWidth:i.paddingBottom+i.paddingTop+i.borderTopWidth+i.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px"}},c._emitCompleteOnItems=function(t,e){function i(){o.dispatchEvent(t+"Complete",null,[e])}function n(){r++,r==s&&i()}var o=this,s=e.length;if(!e||!s)return void i();var r=0;e.forEach(function(e){e.once(t,n)})},c.dispatchEvent=function(t,e,i){var n=e?[e].concat(i):i;if(this.emitEvent(t,n),h)if(this.$element=this.$element||h(this.element),e){var o=h.Event(e);o.type=t,this.$element.trigger(o,i)}else this.$element.trigger(t,i)},c.ignore=function(t){var e=this.getItem(t);e&&(e.isIgnored=!0)},c.unignore=function(t){var e=this.getItem(t);e&&delete e.isIgnored},c.stamp=function(t){t=this._find(t),t&&(this.stamps=this.stamps.concat(t),t.forEach(this.ignore,this))},c.unstamp=function(t){t=this._find(t),t&&t.forEach(function(t){n.removeFrom(this.stamps,t),this.unignore(t)},this)},c._find=function(t){return t?("string"==typeof t&&(t=this.element.querySelectorAll(t)),t=n.makeArray(t)):void 0},c._manageStamps=function(){this.stamps&&this.stamps.length&&(this._getBoundingRect(),this.stamps.forEach(this._manageStamp,this))},c._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size;this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},c._manageStamp=d,c._getElementOffset=function(t){var e=t.getBoundingClientRect(),n=this._boundingRect,o=i(t),s={left:e.left-n.left-o.marginLeft,top:e.top-n.top-o.marginTop,right:n.right-e.right-o.marginRight,bottom:n.bottom-e.bottom-o.marginBottom};return s},c.handleEvent=n.handleEvent,c.bindResize=function(){t.addEventListener("resize",this),this.isResizeBound=!0},c.unbindResize=function(){t.removeEventListener("resize",this),this.isResizeBound=!1},c.onresize=function(){this.resize()},n.debounceMethod(s,"onresize",100),c.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},c.needsResizeLayout=function(){var t=i(this.element),e=this.size&&t;return e&&t.innerWidth!==this.size.innerWidth},c.addItems=function(t){var e=this._itemize(t);return e.length&&(this.items=this.items.concat(e)),e},c.appended=function(t){var e=this.addItems(t);e.length&&(this.layoutItems(e,!0),this.reveal(e))},c.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps(),this.layoutItems(e,!0),this.reveal(e),this.layoutItems(i)}},c.reveal=function(t){if(this._emitCompleteOnItems("reveal",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.reveal()})}},c.hide=function(t){if(this._emitCompleteOnItems("hide",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.hide()})}},c.revealItemElements=function(t){var e=this.getItems(t);this.reveal(e)},c.hideItemElements=function(t){var e=this.getItems(t);this.hide(e)},c.getItem=function(t){for(var e=0;e<this.items.length;e++){var i=this.items[e];if(i.element==t)return i}},c.getItems=function(t){t=n.makeArray(t);var e=[];return t.forEach(function(t){var i=this.getItem(t);i&&e.push(i)},this),e},c.remove=function(t){var e=this.getItems(t);this._emitCompleteOnItems("remove",e),e&&e.length&&e.forEach(function(t){t.remove(),n.removeFrom(this.items,t)},this)},c.destroy=function(){var t=this.element.style;t.height="",t.position="",t.width="",this.items.forEach(function(t){t.destroy()}),this.unbindResize();var e=this.element.outlayerGUID;delete f[e],delete this.element.outlayerGUID,h&&h.removeData(this.element,this.constructor.namespace)},s.data=function(t){t=n.getQueryElement(t);var e=t&&t.outlayerGUID;return e&&f[e]},s.create=function(t,e){var i=r(s);return i.defaults=n.extend({},s.defaults),n.extend(i.defaults,e),i.compatOptions=n.extend({},s.compatOptions),i.namespace=t,i.data=s.data,i.Item=r(o),n.htmlInit(i,t),h&&h.bridget&&h.bridget(t,i),i};var m={ms:1,s:1e3};return s.Item=o,s}),function(t,e){"function"==typeof define&&define.amd?define("isotope/js/item",["outlayer/outlayer"],e):"object"==typeof module&&module.exports?module.exports=e(require("outlayer")):(t.Isotope=t.Isotope||{},t.Isotope.Item=e(t.Outlayer))}(window,function(t){"use strict";function e(){t.Item.apply(this,arguments)}var i=e.prototype=Object.create(t.Item.prototype),n=i._create;i._create=function(){this.id=this.layout.itemGUID++,n.call(this),this.sortData={}},i.updateSortData=function(){if(!this.isIgnored){this.sortData.id=this.id,this.sortData["original-order"]=this.id,this.sortData.random=Math.random();var t=this.layout.options.getSortData,e=this.layout._sorters;for(var i in t){var n=e[i];this.sortData[i]=n(this.element,this)}}};var o=i.destroy;return i.destroy=function(){o.apply(this,arguments),this.css({display:""})},e}),function(t,e){"function"==typeof define&&define.amd?define("isotope/js/layout-mode",["get-size/get-size","outlayer/outlayer"],e):"object"==typeof module&&module.exports?module.exports=e(require("get-size"),require("outlayer")):(t.Isotope=t.Isotope||{},t.Isotope.LayoutMode=e(t.getSize,t.Outlayer))}(window,function(t,e){"use strict";function i(t){this.isotope=t,t&&(this.options=t.options[this.namespace],this.element=t.element,this.items=t.filteredItems,this.size=t.size)}var n=i.prototype,o=["_resetLayout","_getItemLayoutPosition","_manageStamp","_getContainerSize","_getElementOffset","needsResizeLayout","_getOption"];return o.forEach(function(t){n[t]=function(){return e.prototype[t].apply(this.isotope,arguments)}}),n.needsVerticalResizeLayout=function(){var e=t(this.isotope.element),i=this.isotope.size&&e;return i&&e.innerHeight!=this.isotope.size.innerHeight},n._getMeasurement=function(){this.isotope._getMeasurement.apply(this,arguments)},n.getColumnWidth=function(){this.getSegmentSize("column","Width")},n.getRowHeight=function(){this.getSegmentSize("row","Height")},n.getSegmentSize=function(t,e){var i=t+e,n="outer"+e;if(this._getMeasurement(i,n),!this[i]){var o=this.getFirstItemSize();this[i]=o&&o[n]||this.isotope.size["inner"+e]}},n.getFirstItemSize=function(){var e=this.isotope.filteredItems[0];return e&&e.element&&t(e.element)},n.layout=function(){this.isotope.layout.apply(this.isotope,arguments)},n.getSize=function(){this.isotope.getSize(),this.size=this.isotope.size},i.modes={},i.create=function(t,e){function o(){i.apply(this,arguments)}return o.prototype=Object.create(n),o.prototype.constructor=o,e&&(o.options=e),o.prototype.namespace=t,i.modes[t]=o,o},i}),function(t,e){"function"==typeof define&&define.amd?define("masonry/masonry",["outlayer/outlayer","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("outlayer"),require("get-size")):t.Masonry=e(t.Outlayer,t.getSize)}(window,function(t,e){var i=t.create("masonry");return i.compatOptions.fitWidth="isFitWidth",i.prototype._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns(),this.colYs=[];for(var t=0;t<this.cols;t++)this.colYs.push(0);this.maxY=0},i.prototype.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var t=this.items[0],i=t&&t.element;this.columnWidth=i&&e(i).outerWidth||this.containerWidth}var n=this.columnWidth+=this.gutter,o=this.containerWidth+this.gutter,s=o/n,r=n-o%n,a=r&&1>r?"round":"floor";s=Math[a](s),this.cols=Math.max(s,1)},i.prototype.getContainerWidth=function(){var t=this._getOption("fitWidth"),i=t?this.element.parentNode:this.element,n=e(i);this.containerWidth=n&&n.innerWidth},i.prototype._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth%this.columnWidth,i=e&&1>e?"round":"ceil",n=Math[i](t.size.outerWidth/this.columnWidth);n=Math.min(n,this.cols);for(var o=this._getColGroup(n),s=Math.min.apply(Math,o),r=o.indexOf(s),a={x:this.columnWidth*r,y:s},u=s+t.size.outerHeight,h=this.cols+1-o.length,d=0;h>d;d++)this.colYs[r+d]=u;return a},i.prototype._getColGroup=function(t){if(2>t)return this.colYs;for(var e=[],i=this.cols+1-t,n=0;i>n;n++){var o=this.colYs.slice(n,n+t);e[n]=Math.max.apply(Math,o)}return e},i.prototype._manageStamp=function(t){var i=e(t),n=this._getElementOffset(t),o=this._getOption("originLeft"),s=o?n.left:n.right,r=s+i.outerWidth,a=Math.floor(s/this.columnWidth);a=Math.max(0,a);var u=Math.floor(r/this.columnWidth);u-=r%this.columnWidth?0:1,u=Math.min(this.cols-1,u);for(var h=this._getOption("originTop"),d=(h?n.top:n.bottom)+i.outerHeight,l=a;u>=l;l++)this.colYs[l]=Math.max(d,this.colYs[l])},i.prototype._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var t={height:this.maxY};return this._getOption("fitWidth")&&(t.width=this._getContainerFitWidth()),t},i.prototype._getContainerFitWidth=function(){for(var t=0,e=this.cols;--e&&0===this.colYs[e];)t++;return(this.cols-t)*this.columnWidth-this.gutter},i.prototype.needsResizeLayout=function(){var t=this.containerWidth;return this.getContainerWidth(),t!=this.containerWidth},i}),function(t,e){"function"==typeof define&&define.amd?define("isotope/js/layout-modes/masonry",["../layout-mode","masonry/masonry"],e):"object"==typeof module&&module.exports?module.exports=e(require("../layout-mode"),require("masonry-layout")):e(t.Isotope.LayoutMode,t.Masonry)}(window,function(t,e){"use strict";var i=t.create("masonry"),n=i.prototype,o={_getElementOffset:!0,layout:!0,_getMeasurement:!0};for(var s in e.prototype)o[s]||(n[s]=e.prototype[s]);var r=n.measureColumns;n.measureColumns=function(){this.items=this.isotope.filteredItems,r.call(this)};var a=n._getOption;return n._getOption=function(t){return"fitWidth"==t?void 0!==this.options.isFitWidth?this.options.isFitWidth:this.options.fitWidth:a.apply(this.isotope,arguments)},i}),function(t,e){"function"==typeof define&&define.amd?define("isotope/js/layout-modes/fit-rows",["../layout-mode"],e):"object"==typeof exports?module.exports=e(require("../layout-mode")):e(t.Isotope.LayoutMode)}(window,function(t){"use strict";var e=t.create("fitRows"),i=e.prototype;return i._resetLayout=function(){this.x=0,this.y=0,this.maxY=0,this._getMeasurement("gutter","outerWidth")},i._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth+this.gutter,i=this.isotope.size.innerWidth+this.gutter;0!==this.x&&e+this.x>i&&(this.x=0,this.y=this.maxY);var n={x:this.x,y:this.y};return this.maxY=Math.max(this.maxY,this.y+t.size.outerHeight),this.x+=e,n},i._getContainerSize=function(){return{height:this.maxY}},e}),function(t,e){"function"==typeof define&&define.amd?define("isotope/js/layout-modes/vertical",["../layout-mode"],e):"object"==typeof module&&module.exports?module.exports=e(require("../layout-mode")):e(t.Isotope.LayoutMode)}(window,function(t){"use strict";var e=t.create("vertical",{horizontalAlignment:0}),i=e.prototype;return i._resetLayout=function(){this.y=0},i._getItemLayoutPosition=function(t){t.getSize();var e=(this.isotope.size.innerWidth-t.size.outerWidth)*this.options.horizontalAlignment,i=this.y;return this.y+=t.size.outerHeight,{x:e,y:i}},i._getContainerSize=function(){return{height:this.y}},e}),function(t,e){"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size","desandro-matches-selector/matches-selector","fizzy-ui-utils/utils","isotope/js/item","isotope/js/layout-mode","isotope/js/layout-modes/masonry","isotope/js/layout-modes/fit-rows","isotope/js/layout-modes/vertical"],function(i,n,o,s,r,a){return e(t,i,n,o,s,r,a)}):"object"==typeof module&&module.exports?module.exports=e(t,require("outlayer"),require("get-size"),require("desandro-matches-selector"),require("fizzy-ui-utils"),require("isotope/js/item"),require("isotope/js/layout-mode"),require("isotope/js/layout-modes/masonry"),require("isotope/js/layout-modes/fit-rows"),require("isotope/js/layout-modes/vertical")):t.Isotope=e(t,t.Outlayer,t.getSize,t.matchesSelector,t.fizzyUIUtils,t.Isotope.Item,t.Isotope.LayoutMode)}(window,function(t,e,i,n,o,s,r){function a(t,e){return function(i,n){for(var o=0;o<t.length;o++){var s=t[o],r=i.sortData[s],a=n.sortData[s];if(r>a||a>r){var u=void 0!==e[s]?e[s]:e,h=u?1:-1;return(r>a?1:-1)*h}}return 0}}var u=t.jQuery,h=String.prototype.trim?function(t){return t.trim()}:function(t){return t.replace(/^\s+|\s+$/g,"")},d=e.create("isotope",{layoutMode:"masonry",isJQueryFiltering:!0,sortAscending:!0});d.Item=s,d.LayoutMode=r;var l=d.prototype;l._create=function(){this.itemGUID=0,this._sorters={},this._getSorters(),e.prototype._create.call(this),this.modes={},this.filteredItems=this.items,this.sortHistory=["original-order"];for(var t in r.modes)this._initLayoutMode(t)},l.reloadItems=function(){this.itemGUID=0,e.prototype.reloadItems.call(this)},l._itemize=function(){for(var t=e.prototype._itemize.apply(this,arguments),i=0;i<t.length;i++){var n=t[i];n.id=this.itemGUID++}return this._updateItemsSortData(t),t},l._initLayoutMode=function(t){var e=r.modes[t],i=this.options[t]||{};this.options[t]=e.options?o.extend(e.options,i):i,this.modes[t]=new e(this)},l.layout=function(){return!this._isLayoutInited&&this._getOption("initLayout")?void this.arrange():void this._layout()},l._layout=function(){var t=this._getIsInstant();this._resetLayout(),this._manageStamps(),this.layoutItems(this.filteredItems,t),this._isLayoutInited=!0},l.arrange=function(t){this.option(t),this._getIsInstant();var e=this._filter(this.items);this.filteredItems=e.matches,this._bindArrangeComplete(),this._isInstant?this._noTransition(this._hideReveal,[e]):this._hideReveal(e),this._sort(),this._layout()},l._init=l.arrange,l._hideReveal=function(t){this.reveal(t.needReveal),this.hide(t.needHide)},l._getIsInstant=function(){var t=this._getOption("layoutInstant"),e=void 0!==t?t:!this._isLayoutInited;return this._isInstant=e,e},l._bindArrangeComplete=function(){function t(){e&&i&&n&&o.dispatchEvent("arrangeComplete",null,[o.filteredItems])}var e,i,n,o=this;this.once("layoutComplete",function(){e=!0,t()}),this.once("hideComplete",function(){i=!0,t()}),this.once("revealComplete",function(){n=!0,t()})},l._filter=function(t){var e=this.options.filter;e=e||"*";for(var i=[],n=[],o=[],s=this._getFilterTest(e),r=0;r<t.length;r++){var a=t[r];if(!a.isIgnored){var u=s(a);u&&i.push(a),u&&a.isHidden?n.push(a):u||a.isHidden||o.push(a)}}return{matches:i,needReveal:n,needHide:o}},l._getFilterTest=function(t){return u&&this.options.isJQueryFiltering?function(e){return u(e.element).is(t)}:"function"==typeof t?function(e){return t(e.element)}:function(e){return n(e.element,t)}},l.updateSortData=function(t){var e;t?(t=o.makeArray(t),e=this.getItems(t)):e=this.items,this._getSorters(),this._updateItemsSortData(e)},l._getSorters=function(){var t=this.options.getSortData;for(var e in t){var i=t[e];this._sorters[e]=f(i)}},l._updateItemsSortData=function(t){for(var e=t&&t.length,i=0;e&&e>i;i++){var n=t[i];n.updateSortData()}};var f=function(){function t(t){if("string"!=typeof t)return t;var i=h(t).split(" "),n=i[0],o=n.match(/^\[(.+)\]$/),s=o&&o[1],r=e(s,n),a=d.sortDataParsers[i[1]];
return t=a?function(t){return t&&a(r(t))}:function(t){return t&&r(t)}}function e(t,e){return t?function(e){return e.getAttribute(t)}:function(t){var i=t.querySelector(e);return i&&i.textContent}}return t}();d.sortDataParsers={parseInt:function(t){return parseInt(t,10)},parseFloat:function(t){return parseFloat(t)}},l._sort=function(){var t=this.options.sortBy;if(t){var e=[].concat.apply(t,this.sortHistory),i=a(e,this.options.sortAscending);this.filteredItems.sort(i),t!=this.sortHistory[0]&&this.sortHistory.unshift(t)}},l._mode=function(){var t=this.options.layoutMode,e=this.modes[t];if(!e)throw new Error("No layout mode: "+t);return e.options=this.options[t],e},l._resetLayout=function(){e.prototype._resetLayout.call(this),this._mode()._resetLayout()},l._getItemLayoutPosition=function(t){return this._mode()._getItemLayoutPosition(t)},l._manageStamp=function(t){this._mode()._manageStamp(t)},l._getContainerSize=function(){return this._mode()._getContainerSize()},l.needsResizeLayout=function(){return this._mode().needsResizeLayout()},l.appended=function(t){var e=this.addItems(t);if(e.length){var i=this._filterRevealAdded(e);this.filteredItems=this.filteredItems.concat(i)}},l.prepended=function(t){var e=this._itemize(t);if(e.length){this._resetLayout(),this._manageStamps();var i=this._filterRevealAdded(e);this.layoutItems(this.filteredItems),this.filteredItems=i.concat(this.filteredItems),this.items=e.concat(this.items)}},l._filterRevealAdded=function(t){var e=this._filter(t);return this.hide(e.needHide),this.reveal(e.matches),this.layoutItems(e.matches,!0),e.matches},l.insert=function(t){var e=this.addItems(t);if(e.length){var i,n,o=e.length;for(i=0;o>i;i++)n=e[i],this.element.appendChild(n.element);var s=this._filter(e).matches;for(i=0;o>i;i++)e[i].isLayoutInstant=!0;for(this.arrange(),i=0;o>i;i++)delete e[i].isLayoutInstant;this.reveal(s)}};var c=l.remove;return l.remove=function(t){t=o.makeArray(t);var e=this.getItems(t);c.call(this,t);for(var i=e&&e.length,n=0;i&&i>n;n++){var s=e[n];o.removeFrom(this.filteredItems,s)}},l.shuffle=function(){for(var t=0;t<this.items.length;t++){var e=this.items[t];e.sortData.random=Math.random()}this.options.sortBy="random",this._sort(),this._layout()},l._noTransition=function(t,e){var i=this.options.transitionDuration;this.options.transitionDuration=0;var n=t.apply(this,e);return this.options.transitionDuration=i,n},l.getFilteredItemElements=function(){return this.filteredItems.map(function(t){return t.element})},d});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:72:"/local/templates/bitlate_pro/js/packery-mode.pkgd.min.js?150885328713618";s:6:"source";s:56:"/local/templates/bitlate_pro/js/packery-mode.pkgd.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*!
 * Packery layout mode PACKAGED v2.0.0
 * sub-classes Packery
 */

!function(a,b){"function"==typeof define&&define.amd?define("packery/js/rect",b):"object"==typeof module&&module.exports?module.exports=b():(a.Packery=a.Packery||{},a.Packery.Rect=b())}(window,function(){function a(b){for(var c in a.defaults)this[c]=a.defaults[c];for(c in b)this[c]=b[c]}a.defaults={x:0,y:0,width:0,height:0};var b=a.prototype;return b.contains=function(a){var b=a.width||0,c=a.height||0;return this.x<=a.x&&this.y<=a.y&&this.x+this.width>=a.x+b&&this.y+this.height>=a.y+c},b.overlaps=function(a){var b=this.x+this.width,c=this.y+this.height,d=a.x+a.width,e=a.y+a.height;return this.x<d&&b>a.x&&this.y<e&&c>a.y},b.getMaximalFreeRects=function(b){if(!this.overlaps(b))return!1;var c,d=[],e=this.x+this.width,f=this.y+this.height,g=b.x+b.width,h=b.y+b.height;return this.y<b.y&&(c=new a({x:this.x,y:this.y,width:this.width,height:b.y-this.y}),d.push(c)),e>g&&(c=new a({x:g,y:this.y,width:e-g,height:this.height}),d.push(c)),f>h&&(c=new a({x:this.x,y:h,width:this.width,height:f-h}),d.push(c)),this.x<b.x&&(c=new a({x:this.x,y:this.y,width:b.x-this.x,height:this.height}),d.push(c)),d},b.canFit=function(a){return this.width>=a.width&&this.height>=a.height},a}),function(a,b){if("function"==typeof define&&define.amd)define("packery/js/packer",["./rect"],b);else if("object"==typeof module&&module.exports)module.exports=b(require("./rect"));else{var c=a.Packery=a.Packery||{};c.Packer=b(c.Rect)}}(window,function(a){function b(a,b,c){this.width=a||0,this.height=b||0,this.sortDirection=c||"downwardLeftToRight",this.reset()}var c=b.prototype;c.reset=function(){this.spaces=[];var b=new a({x:0,y:0,width:this.width,height:this.height});this.spaces.push(b),this.sorter=d[this.sortDirection]||d.downwardLeftToRight},c.pack=function(a){for(var b=0;b<this.spaces.length;b++){var c=this.spaces[b];if(c.canFit(a)){this.placeInSpace(a,c);break}}},c.columnPack=function(a){for(var b=0;b<this.spaces.length;b++){var c=this.spaces[b],d=c.x<=a.x&&c.x+c.width>=a.x+a.width&&c.height>=a.height-.01;if(d){a.y=c.y,this.placed(a);break}}},c.rowPack=function(a){for(var b=0;b<this.spaces.length;b++){var c=this.spaces[b],d=c.y<=a.y&&c.y+c.height>=a.y+a.height&&c.width>=a.width-.01;if(d){a.x=c.x,this.placed(a);break}}},c.placeInSpace=function(a,b){a.x=b.x,a.y=b.y,this.placed(a)},c.placed=function(a){for(var b=[],c=0;c<this.spaces.length;c++){var d=this.spaces[c],e=d.getMaximalFreeRects(a);e?b.push.apply(b,e):b.push(d)}this.spaces=b,this.mergeSortSpaces()},c.mergeSortSpaces=function(){b.mergeRects(this.spaces),this.spaces.sort(this.sorter)},c.addSpace=function(a){this.spaces.push(a),this.mergeSortSpaces()},b.mergeRects=function(a){var b=0,c=a[b];a:for(;c;){for(var d=0,e=a[b+d];e;){if(e==c)d++;else{if(e.contains(c)){a.splice(b,1),c=a[b];continue a}c.contains(e)?a.splice(b+d,1):d++}e=a[b+d]}b++,c=a[b]}return a};var d={downwardLeftToRight:function(a,b){return a.y-b.y||a.x-b.x},rightwardTopToBottom:function(a,b){return a.x-b.x||a.y-b.y}};return b}),function(a,b){"function"==typeof define&&define.amd?define("packery/js/item",["outlayer/outlayer","./rect"],b):"object"==typeof module&&module.exports?module.exports=b(require("outlayer"),require("./rect")):a.Packery.Item=b(a.Outlayer,a.Packery.Rect)}(window,function(a,b){var c=document.documentElement.style,d="string"==typeof c.transform?"transform":"WebkitTransform",e=function(){a.Item.apply(this,arguments)},f=e.prototype=Object.create(a.Item.prototype),g=f._create;f._create=function(){g.call(this),this.rect=new b};var h=f.moveTo;return f.moveTo=function(a,b){var c=Math.abs(this.position.x-a),d=Math.abs(this.position.y-b),e=this.layout.dragItemCount&&!this.isPlacing&&!this.isTransitioning&&1>c&&1>d;return e?void this.goTo(a,b):void h.apply(this,arguments)},f.enablePlacing=function(){this.removeTransitionStyles(),this.isTransitioning&&d&&(this.element.style[d]="none"),this.isTransitioning=!1,this.getSize(),this.layout._setRectSize(this.element,this.rect),this.isPlacing=!0},f.disablePlacing=function(){this.isPlacing=!1},f.removeElem=function(){this.element.parentNode.removeChild(this.element),this.layout.packer.addSpace(this.rect),this.emitEvent("remove",[this])},f.showDropPlaceholder=function(){var a=this.dropPlaceholder;a||(a=this.dropPlaceholder=document.createElement("div"),a.className="packery-drop-placeholder",a.style.position="absolute"),a.style.width=this.size.width+"px",a.style.height=this.size.height+"px",this.positionDropPlaceholder(),this.layout.element.appendChild(a)},f.positionDropPlaceholder=function(){this.dropPlaceholder.style[d]="translate("+this.rect.x+"px, "+this.rect.y+"px)"},f.hideDropPlaceholder=function(){this.layout.element.removeChild(this.dropPlaceholder)},e}),function(a,b){"function"==typeof define&&define.amd?define("packery/js/packery",["get-size/get-size","outlayer/outlayer","./rect","./packer","./item"],b):"object"==typeof module&&module.exports?module.exports=b(require("get-size"),require("outlayer"),require("./rect"),require("./packer"),require("./item")):a.Packery=b(a.getSize,a.Outlayer,a.Packery.Rect,a.Packery.Packer,a.Packery.Item)}(window,function(a,b,c,d,e){function f(a,b){return a.position.y-b.position.y||a.position.x-b.position.x}function g(a,b){return a.position.x-b.position.x||a.position.y-b.position.y}function h(a,b){var c=b.x-a.x,d=b.y-a.y;return Math.sqrt(c*c+d*d)}c.prototype.canFit=function(a){return this.width>=a.width-1&&this.height>=a.height-1};var i=b.create("packery");i.Item=e;var j=i.prototype;j._create=function(){b.prototype._create.call(this),this.packer=new d,this.shiftPacker=new d,this.isEnabled=!0,this.dragItemCount=0;var a=this;this.handleDraggabilly={dragStart:function(){a.itemDragStart(this.element)},dragMove:function(){a.itemDragMove(this.element,this.position.x,this.position.y)},dragEnd:function(){a.itemDragEnd(this.element)}},this.handleUIDraggable={start:function(b,c){c&&a.itemDragStart(b.currentTarget)},drag:function(b,c){c&&a.itemDragMove(b.currentTarget,c.position.left,c.position.top)},stop:function(b,c){c&&a.itemDragEnd(b.currentTarget)}}},j._resetLayout=function(){this.getSize(),this._getMeasurements();var a,b,c;this._getOption("horizontal")?(a=1/0,b=this.size.innerHeight+this.gutter,c="rightwardTopToBottom"):(a=this.size.innerWidth+this.gutter,b=1/0,c="downwardLeftToRight"),this.packer.width=this.shiftPacker.width=a,this.packer.height=this.shiftPacker.height=b,this.packer.sortDirection=this.shiftPacker.sortDirection=c,this.packer.reset(),this.maxY=0,this.maxX=0},j._getMeasurements=function(){this._getMeasurement("columnWidth","width"),this._getMeasurement("rowHeight","height"),this._getMeasurement("gutter","width")},j._getItemLayoutPosition=function(a){if(this._setRectSize(a.element,a.rect),this.isShifting||this.dragItemCount>0){var b=this._getPackMethod();this.packer[b](a.rect)}else this.packer.pack(a.rect);return this._setMaxXY(a.rect),a.rect},j.shiftLayout=function(){this.isShifting=!0,this.layout(),delete this.isShifting},j._getPackMethod=function(){return this._getOption("horizontal")?"rowPack":"columnPack"},j._setMaxXY=function(a){this.maxX=Math.max(a.x+a.width,this.maxX),this.maxY=Math.max(a.y+a.height,this.maxY)},j._setRectSize=function(b,c){var d=a(b),e=d.outerWidth,f=d.outerHeight;(e||f)&&(e=this._applyGridGutter(e,this.columnWidth),f=this._applyGridGutter(f,this.rowHeight)),c.width=Math.min(e,this.packer.width),c.height=Math.min(f,this.packer.height)},j._applyGridGutter=function(a,b){if(!b)return a+this.gutter;b+=this.gutter;var c=a%b,d=c&&1>c?"round":"ceil";return a=Math[d](a/b)*b},j._getContainerSize=function(){return this._getOption("horizontal")?{width:this.maxX-this.gutter}:{height:this.maxY-this.gutter}},j._manageStamp=function(a){var b,d=this.getItem(a);if(d&&d.isPlacing)b=d.rect;else{var e=this._getElementOffset(a);b=new c({x:this._getOption("originLeft")?e.left:e.right,y:this._getOption("originTop")?e.top:e.bottom})}this._setRectSize(a,b),this.packer.placed(b),this._setMaxXY(b)},j.sortItemsByPosition=function(){var a=this._getOption("horizontal")?g:f;this.items.sort(a)},j.fit=function(a,b,c){var d=this.getItem(a);d&&(this.stamp(d.element),d.enablePlacing(),this.updateShiftTargets(d),b=void 0===b?d.rect.x:b,c=void 0===c?d.rect.y:c,this.shift(d,b,c),this._bindFitEvents(d),d.moveTo(d.rect.x,d.rect.y),this.shiftLayout(),this.unstamp(d.element),this.sortItemsByPosition(),d.disablePlacing())},j._bindFitEvents=function(a){function b(){d++,2==d&&c.dispatchEvent("fitComplete",null,[a])}var c=this,d=0;a.once("layout",b),this.once("layoutComplete",b)},j.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&(this.options.shiftPercentResize?this.resizeShiftPercentLayout():this.layout())},j.needsResizeLayout=function(){var b=a(this.element),c=this._getOption("horizontal")?"innerHeight":"innerWidth";return b[c]!=this.size[c]},j.resizeShiftPercentLayout=function(){var b=this._getItemsForLayout(this.items),c=this._getOption("horizontal"),d=c?"y":"x",e=c?"height":"width",f=c?"rowHeight":"columnWidth",g=c?"innerHeight":"innerWidth",h=this[f];if(h=h&&h+this.gutter){this._getMeasurements();var i=this[f]+this.gutter;b.forEach(function(a){var b=Math.round(a.rect[d]/h);a.rect[d]=b*i})}else{var j=a(this.element)[g]+this.gutter,k=this.packer[e];b.forEach(function(a){a.rect[d]=a.rect[d]/k*j})}this.shiftLayout()},j.itemDragStart=function(a){if(this.isEnabled){this.stamp(a);var b=this.getItem(a);b&&(b.enablePlacing(),b.showDropPlaceholder(),this.dragItemCount++,this.updateShiftTargets(b))}},j.updateShiftTargets=function(a){this.shiftPacker.reset(),this._getBoundingRect();var b=this._getOption("originLeft"),d=this._getOption("originTop");this.stamps.forEach(function(a){var e=this.getItem(a);if(!e||!e.isPlacing){var f=this._getElementOffset(a),g=new c({x:b?f.left:f.right,y:d?f.top:f.bottom});this._setRectSize(a,g),this.shiftPacker.placed(g)}},this);var e=this._getOption("horizontal"),f=e?"rowHeight":"columnWidth",g=e?"height":"width";this.shiftTargetKeys=[],this.shiftTargets=[];var h,i=this[f];if(i=i&&i+this.gutter){var j=Math.ceil(a.rect[g]/i),k=Math.floor((this.shiftPacker[g]+this.gutter)/i);h=(k-j)*i;for(var l=0;k>l;l++)this._addShiftTarget(l*i,0,h)}else h=this.shiftPacker[g]+this.gutter-a.rect[g],this._addShiftTarget(0,0,h);var m=this._getItemsForLayout(this.items),n=this._getPackMethod();m.forEach(function(a){var b=a.rect;this._setRectSize(a.element,b),this.shiftPacker[n](b),this._addShiftTarget(b.x,b.y,h);var c=e?b.x+b.width:b.x,d=e?b.y:b.y+b.height;if(this._addShiftTarget(c,d,h),i)for(var f=Math.round(b[g]/i),j=1;f>j;j++){var k=e?c:b.x+i*j,l=e?b.y+i*j:d;this._addShiftTarget(k,l,h)}},this)},j._addShiftTarget=function(a,b,c){var d=this._getOption("horizontal")?b:a;if(!(0!==d&&d>c)){var e=a+","+b,f=-1!=this.shiftTargetKeys.indexOf(e);f||(this.shiftTargetKeys.push(e),this.shiftTargets.push({x:a,y:b}))}},j.shift=function(a,b,c){var d,e=1/0,f={x:b,y:c};this.shiftTargets.forEach(function(a){var b=h(a,f);e>b&&(d=a,e=b)}),a.rect.x=d.x,a.rect.y=d.y};var k=120;j.itemDragMove=function(a,b,c){function d(){f.shift(e,b,c),e.positionDropPlaceholder(),f.layout()}var e=this.isEnabled&&this.getItem(a);if(e){b-=this.size.paddingLeft,c-=this.size.paddingTop;var f=this,g=new Date;this._itemDragTime&&g-this._itemDragTime<k?(clearTimeout(this.dragTimeout),this.dragTimeout=setTimeout(d,k)):(d(),this._itemDragTime=g)}},j.itemDragEnd=function(a){function b(){d++,2==d&&(c.element.classList.remove("is-positioning-post-drag"),c.hideDropPlaceholder(),e.dispatchEvent("dragItemPositioned",null,[c]))}var c=this.isEnabled&&this.getItem(a);if(c){clearTimeout(this.dragTimeout),c.element.classList.add("is-positioning-post-drag");var d=0,e=this;c.once("layout",b),this.once("layoutComplete",b),c.moveTo(c.rect.x,c.rect.y),this.layout(),this.dragItemCount=Math.max(0,this.dragItemCount-1),this.sortItemsByPosition(),c.disablePlacing(),this.unstamp(c.element)}},j.bindDraggabillyEvents=function(a){this._bindDraggabillyEvents(a,"on")},j.unbindDraggabillyEvents=function(a){this._bindDraggabillyEvents(a,"off")},j._bindDraggabillyEvents=function(a,b){var c=this.handleDraggabilly;a[b]("dragStart",c.dragStart),a[b]("dragMove",c.dragMove),a[b]("dragEnd",c.dragEnd)},j.bindUIDraggableEvents=function(a){this._bindUIDraggableEvents(a,"on")},j.unbindUIDraggableEvents=function(a){this._bindUIDraggableEvents(a,"off")},j._bindUIDraggableEvents=function(a,b){var c=this.handleUIDraggable;a[b]("dragstart",c.start)[b]("drag",c.drag)[b]("dragstop",c.stop)};var l=j.destroy;return j.destroy=function(){l.apply(this,arguments),this.isEnabled=!1},i.Rect=c,i.Packer=d,i}),function(a,b){"function"==typeof define&&define.amd?define(["isotope/js/layout-mode","packery/js/packery"],b):"object"==typeof module&&module.exports?module.exports=b(require("isotope-layout/js/layout-mode"),require("packery")):b(a.Isotope.LayoutMode,a.Packery)}(window,function(a,b){var c=a.create("packery"),d=c.prototype,e={_getElementOffset:!0,_getMeasurement:!0};for(var f in b.prototype)e[f]||(d[f]=b.prototype[f]);var g=d._resetLayout;d._resetLayout=function(){this.packer=this.packer||new b.Packer,this.shiftPacker=this.shiftPacker||new b.Packer,g.apply(this,arguments)};var h=d._getItemLayoutPosition;d._getItemLayoutPosition=function(a){return a.rect=a.rect||new b.Rect,h.call(this,a)};var i=d.needsResizeLayout;d.needsResizeLayout=function(){return this._getOption("horizontal")?this.needsVerticalResizeLayout():i.call(this)};var j=d._getOption;return d._getOption=function(a){return"horizontal"==a?void 0!==this.options.isHorizontal?this.options.isHorizontal:this.options.horizontal:j.apply(this.isotope,arguments)},c});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:62:"/local/templates/bitlate_pro/js/slideout.min.js?15088532876865";s:6:"source";s:47:"/local/templates/bitlate_pro/js/slideout.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;"undefined"!=typeof window?e=window:"undefined"!=typeof global?e=global:"undefined"!=typeof self&&(e=self),e.Slideout=t()}}(function(){var t,e,n;return function i(t,e,n){function o(r,a){if(!e[r]){if(!t[r]){var u=typeof require=="function"&&require;if(!a&&u)return u(r,!0);if(s)return s(r,!0);var l=new Error("Cannot find module '"+r+"'");throw l.code="MODULE_NOT_FOUND",l}var f=e[r]={exports:{}};t[r][0].call(f.exports,function(e){var n=t[r][1][e];return o(n?n:e)},f,f.exports,i,t,e,n)}return e[r].exports}var s=typeof require=="function"&&require;for(var r=0;r<n.length;r++)o(n[r]);return o}({1:[function(t,e,n){"use strict";var i=t("decouple");var o=t("emitter");var s;var r=false;var a=window.document;var u=a.documentElement;var l=window.navigator.msPointerEnabled;var f={start:l?"MSPointerDown":"touchstart",move:l?"MSPointerMove":"touchmove",end:l?"MSPointerUp":"touchend"};var h=function v(){var t=/^(Webkit|Khtml|Moz|ms|O)(?=[A-Z])/;var e=a.getElementsByTagName("script")[0].style;for(var n in e){if(t.test(n)){return"-"+n.match(t)[0].toLowerCase()+"-"}}if("WebkitOpacity"in e){return"-webkit-"}if("KhtmlOpacity"in e){return"-khtml-"}return""}();function c(t,e){for(var n in e){if(e[n]){t[n]=e[n]}}return t}function p(t,e){t.prototype=c(t.prototype||{},e.prototype)}function d(t){t=t||{};this._startOffsetX=0;this._currentOffsetX=0;this._opening=false;this._moved=false;this._opened=false;this._preventOpen=false;this._touch=t.touch===undefined?true:t.touch&&true;this.panel=t.panel;this.menu=t.menu;if(this.panel.className.search("slideout-panel")===-1){this.panel.className+=" slideout-panel"}if(this.menu.className.search("slideout-menu")===-1){this.menu.className+=" slideout-menu"}this._fx=t.fx||"ease";this._duration=parseInt(t.duration,10)||300;this._tolerance=parseInt(t.tolerance,10)||70;this._padding=this._translateTo=parseInt(t.padding,10)||256;this._orientation=t.side==="right"?-1:1;this._translateTo*=this._orientation;if(this._touch){this._initTouchEvents()}}p(d,o);d.prototype.open=function(){var t=this;this.emit("beforeopen");if(u.className.search("slideout-open")===-1){u.className+=" slideout-open"}this._setTransition();this._translateXTo(this._translateTo);this._opened=true;setTimeout(function(){t.panel.style.transition=t.panel.style["-webkit-transition"]="";t.emit("open")},this._duration+50);return this};d.prototype.close=function(){var t=this;if(!this.isOpen()&&!this._opening){return this}this.emit("beforeclose");this._setTransition();this._translateXTo(0);this._opened=false;setTimeout(function(){u.className=u.className.replace(/ slideout-open/,"");t.panel.style.transition=t.panel.style["-webkit-transition"]=t.panel.style[h+"transform"]=t.panel.style.transform="";t.emit("close")},this._duration+50);return this};d.prototype.toggle=function(){return this.isOpen()?this.close():this.open()};d.prototype.isOpen=function(){return this._opened};d.prototype._translateXTo=function(t){this._currentOffsetX=t;this.panel.style[h+"transform"]=this.panel.style.transform="translateX("+t+"px)";return this};d.prototype._setTransition=function(){this.panel.style[h+"transition"]=this.panel.style.transition=h+"transform "+this._duration+"ms "+this._fx;return this};d.prototype._initTouchEvents=function(){var t=this;this._onScrollFn=i(a,"scroll",function(){if(!t._moved){clearTimeout(s);r=true;s=setTimeout(function(){r=false},250)}});this._preventMove=function(e){if(t._moved){e.preventDefault()}};a.addEventListener(f.move,this._preventMove);this._resetTouchFn=function(e){if(typeof e.touches==="undefined"){return}t._moved=false;t._opening=false;t._startOffsetX=e.touches[0].pageX;t._preventOpen=!t._touch||!t.isOpen()&&t.menu.clientWidth!==0};this.panel.addEventListener(f.start,this._resetTouchFn);this._onTouchCancelFn=function(){t._moved=false;t._opening=false};this.panel.addEventListener("touchcancel",this._onTouchCancelFn);this._onTouchEndFn=function(){if(t._moved){t._opening&&Math.abs(t._currentOffsetX)>t._tolerance?t.open():t.close()}t._moved=false};this.panel.addEventListener(f.end,this._onTouchEndFn);this._onTouchMoveFn=function(e){if(r||t._preventOpen||typeof e.touches==="undefined"){return}var n=e.touches[0].clientX-t._startOffsetX;var i=t._currentOffsetX=n;if(Math.abs(i)>t._padding){return}if(Math.abs(n)>20){t._opening=true;var o=n*t._orientation;if(t._opened&&o>0||!t._opened&&o<0){return}if(o<=0){i=n+t._padding*t._orientation;t._opening=false}if(!t._moved&&u.className.search("slideout-open")===-1){u.className+=" slideout-open"}t.panel.style[h+"transform"]=t.panel.style.transform="translateX("+i+"px)";t.emit("translate",i);t._moved=true}};this.panel.addEventListener(f.move,this._onTouchMoveFn);return this};d.prototype.enableTouch=function(){this._touch=true;return this};d.prototype.disableTouch=function(){this._touch=false;return this};d.prototype.destroy=function(){this.close();a.removeEventListener(f.move,this._preventMove);this.panel.removeEventListener(f.start,this._resetTouchFn);this.panel.removeEventListener("touchcancel",this._onTouchCancelFn);this.panel.removeEventListener(f.end,this._onTouchEndFn);this.panel.removeEventListener(f.move,this._onTouchMoveFn);a.removeEventListener("scroll",this._onScrollFn);this.open=this.close=function(){};return this};e.exports=d},{decouple:2,emitter:3}],2:[function(t,e,n){"use strict";var i=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();function o(t,e,n){var o,s=false;function r(t){o=t;a()}function a(){if(!s){i(u);s=true}}function u(){n.call(t,o);s=false}t.addEventListener(e,r,false);return r}e.exports=o},{}],3:[function(t,e,n){"use strict";var i=function(t,e){if(!(t instanceof e)){throw new TypeError("Cannot call a class as a function")}};n.__esModule=true;var o=function(){function t(){i(this,t)}t.prototype.on=function e(t,n){this._eventCollection=this._eventCollection||{};this._eventCollection[t]=this._eventCollection[t]||[];this._eventCollection[t].push(n);return this};t.prototype.once=function n(t,e){var n=this;function i(){n.off(t,i);e.apply(this,arguments)}i.listener=e;this.on(t,i);return this};t.prototype.off=function o(t,e){var n=undefined;if(!this._eventCollection||!(n=this._eventCollection[t])){return this}n.forEach(function(t,i){if(t===e||t.listener===e){n.splice(i,1)}});if(n.length===0){delete this._eventCollection[t]}return this};t.prototype.emit=function s(t){var e=this;for(var n=arguments.length,i=Array(n>1?n-1:0),o=1;o<n;o++){i[o-1]=arguments[o]}var s=undefined;if(!this._eventCollection||!(s=this._eventCollection[t])){return this}s=s.slice(0);s.forEach(function(t){return t.apply(e,i)});return this};return t}();n["default"]=o;e.exports=n["default"]},{}]},{},[1])(1)});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:67:"/local/templates/bitlate_pro/js/owl.carousel.min.js?150885328742766";s:6:"source";s:51:"/local/templates/bitlate_pro/js/owl.carousel.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/**
 * Owl Carousel v2.2.1
 * Copyright 2013-2017 David Deutsch
 * Licensed under  ()
 */
!function(a,b,c,d){function e(b,c){this.settings=null,this.options=a.extend({},e.Defaults,c),this.$element=a(b),this._handlers={},this._plugins={},this._supress={},this._current=null,this._speed=null,this._coordinates=[],this._breakpoint=null,this._width=null,this._items=[],this._clones=[],this._mergers=[],this._widths=[],this._invalidated={},this._pipe=[],this._drag={time:null,target:null,pointer:null,stage:{start:null,current:null},direction:null},this._states={current:{},tags:{initializing:["busy"],animating:["busy"],dragging:["interacting"]}},a.each(["onResize","onThrottledResize"],a.proxy(function(b,c){this._handlers[c]=a.proxy(this[c],this)},this)),a.each(e.Plugins,a.proxy(function(a,b){this._plugins[a.charAt(0).toLowerCase()+a.slice(1)]=new b(this)},this)),a.each(e.Workers,a.proxy(function(b,c){this._pipe.push({filter:c.filter,run:a.proxy(c.run,this)})},this)),this.setup(),this.initialize()}e.Defaults={items:3,loop:!1,center:!1,rewind:!1,mouseDrag:!0,touchDrag:!0,pullDrag:!0,freeDrag:!1,margin:0,stagePadding:0,merge:!1,mergeFit:!0,autoWidth:!1,startPosition:0,rtl:!1,smartSpeed:250,fluidSpeed:!1,dragEndSpeed:!1,responsive:{},responsiveRefreshRate:200,responsiveBaseElement:b,fallbackEasing:"swing",info:!1,nestedItemSelector:!1,itemElement:"div",stageElement:"div",refreshClass:"owl-refresh",loadedClass:"owl-loaded",loadingClass:"owl-loading",rtlClass:"owl-rtl",responsiveClass:"owl-responsive",dragClass:"owl-drag",itemClass:"owl-item",stageClass:"owl-stage",stageOuterClass:"owl-stage-outer",grabClass:"owl-grab"},e.Width={Default:"default",Inner:"inner",Outer:"outer"},e.Type={Event:"event",State:"state"},e.Plugins={},e.Workers=[{filter:["width","settings"],run:function(){this._width=this.$element.width()}},{filter:["width","items","settings"],run:function(a){a.current=this._items&&this._items[this.relative(this._current)]}},{filter:["items","settings"],run:function(){this.$stage.children(".cloned").remove()}},{filter:["width","items","settings"],run:function(a){var b=this.settings.margin||"",c=!this.settings.autoWidth,d=this.settings.rtl,e={width:"auto","margin-left":d?b:"","margin-right":d?"":b};!c&&this.$stage.children().css(e),a.css=e}},{filter:["width","items","settings"],run:function(a){var b=(this.width()/this.settings.items).toFixed(3)-this.settings.margin,c=null,d=this._items.length,e=!this.settings.autoWidth,f=[];for(a.items={merge:!1,width:b};d--;)c=this._mergers[d],c=this.settings.mergeFit&&Math.min(c,this.settings.items)||c,a.items.merge=c>1||a.items.merge,f[d]=e?b*c:this._items[d].width();this._widths=f}},{filter:["items","settings"],run:function(){var b=[],c=this._items,d=this.settings,e=Math.max(2*d.items,4),f=2*Math.ceil(c.length/2),g=d.loop&&c.length?d.rewind?e:Math.max(e,f):0,h="",i="";for(g/=2;g--;)b.push(this.normalize(b.length/2,!0)),h+=c[b[b.length-1]][0].outerHTML,b.push(this.normalize(c.length-1-(b.length-1)/2,!0)),i=c[b[b.length-1]][0].outerHTML+i;this._clones=b,a(h).addClass("cloned").appendTo(this.$stage),a(i).addClass("cloned").prependTo(this.$stage)}},{filter:["width","items","settings"],run:function(){for(var a=this.settings.rtl?1:-1,b=this._clones.length+this._items.length,c=-1,d=0,e=0,f=[];++c<b;)d=f[c-1]||0,e=this._widths[this.relative(c)]+this.settings.margin,f.push(d+e*a);this._coordinates=f}},{filter:["width","items","settings"],run:function(){var a=this.settings.stagePadding,b=this._coordinates,c={width:Math.ceil(Math.abs(b[b.length-1]))+2*a,"padding-left":a||"","padding-right":a||""};this.$stage.css(c)}},{filter:["width","items","settings"],run:function(a){var b=this._coordinates.length,c=!this.settings.autoWidth,d=this.$stage.children();if(c&&a.items.merge)for(;b--;)a.css.width=this._widths[this.relative(b)],d.eq(b).css(a.css);else c&&(a.css.width=a.items.width,d.css(a.css))}},{filter:["items"],run:function(){this._coordinates.length<1&&this.$stage.removeAttr("style")}},{filter:["width","items","settings"],run:function(a){a.current=a.current?this.$stage.children().index(a.current):0,a.current=Math.max(this.minimum(),Math.min(this.maximum(),a.current)),this.reset(a.current)}},{filter:["position"],run:function(){this.animate(this.coordinates(this._current))}},{filter:["width","position","items","settings"],run:function(){var a,b,c,d,e=this.settings.rtl?1:-1,f=2*this.settings.stagePadding,g=this.coordinates(this.current())+f,h=g+this.width()*e,i=[];for(c=0,d=this._coordinates.length;c<d;c++)a=this._coordinates[c-1]||0,b=Math.abs(this._coordinates[c])+f*e,(this.op(a,"<=",g)&&this.op(a,">",h)||this.op(b,"<",g)&&this.op(b,">",h))&&i.push(c);this.$stage.children(".active").removeClass("active"),this.$stage.children(":eq("+i.join("), :eq(")+")").addClass("active"),this.settings.center&&(this.$stage.children(".center").removeClass("center"),this.$stage.children().eq(this.current()).addClass("center"))}}],e.prototype.initialize=function(){if(this.enter("initializing"),this.trigger("initialize"),this.$element.toggleClass(this.settings.rtlClass,this.settings.rtl),this.settings.autoWidth&&!this.is("pre-loading")){var b,c,e;b=this.$element.find("img"),c=this.settings.nestedItemSelector?"."+this.settings.nestedItemSelector:d,e=this.$element.children(c).width(),b.length&&e<=0&&this.preloadAutoWidthImages(b)}this.$element.addClass(this.options.loadingClass),this.$stage=a("<"+this.settings.stageElement+' class="'+this.settings.stageClass+'"/>').wrap('<div class="'+this.settings.stageOuterClass+'"/>'),this.$element.append(this.$stage.parent()),this.replace(this.$element.children().not(this.$stage.parent())),this.$element.is(":visible")?this.refresh():this.invalidate("width"),this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass),this.registerEventHandlers(),this.leave("initializing"),this.trigger("initialized")},e.prototype.setup=function(){var b=this.viewport(),c=this.options.responsive,d=-1,e=null;c?(a.each(c,function(a){a<=b&&a>d&&(d=Number(a))}),e=a.extend({},this.options,c[d]),"function"==typeof e.stagePadding&&(e.stagePadding=e.stagePadding()),delete e.responsive,e.responsiveClass&&this.$element.attr("class",this.$element.attr("class").replace(new RegExp("("+this.options.responsiveClass+"-)\\S+\\s","g"),"$1"+d))):e=a.extend({},this.options),this.trigger("change",{property:{name:"settings",value:e}}),this._breakpoint=d,this.settings=e,this.invalidate("settings"),this.trigger("changed",{property:{name:"settings",value:this.settings}})},e.prototype.optionsLogic=function(){this.settings.autoWidth&&(this.settings.stagePadding=!1,this.settings.merge=!1)},e.prototype.prepare=function(b){var c=this.trigger("prepare",{content:b});return c.data||(c.data=a("<"+this.settings.itemElement+"/>").addClass(this.options.itemClass).append(b)),this.trigger("prepared",{content:c.data}),c.data},e.prototype.update=function(){for(var b=0,c=this._pipe.length,d=a.proxy(function(a){return this[a]},this._invalidated),e={};b<c;)(this._invalidated.all||a.grep(this._pipe[b].filter,d).length>0)&&this._pipe[b].run(e),b++;this._invalidated={},!this.is("valid")&&this.enter("valid")},e.prototype.width=function(a){switch(a=a||e.Width.Default){case e.Width.Inner:case e.Width.Outer:return this._width;default:return this._width-2*this.settings.stagePadding+this.settings.margin}},e.prototype.refresh=function(){this.enter("refreshing"),this.trigger("refresh"),this.setup(),this.optionsLogic(),this.$element.addClass(this.options.refreshClass),this.update(),this.$element.removeClass(this.options.refreshClass),this.leave("refreshing"),this.trigger("refreshed")},e.prototype.onThrottledResize=function(){b.clearTimeout(this.resizeTimer),this.resizeTimer=b.setTimeout(this._handlers.onResize,this.settings.responsiveRefreshRate)},e.prototype.onResize=function(){return!!this._items.length&&(this._width!==this.$element.width()&&(!!this.$element.is(":visible")&&(this.enter("resizing"),this.trigger("resize").isDefaultPrevented()?(this.leave("resizing"),!1):(this.invalidate("width"),this.refresh(),this.leave("resizing"),void this.trigger("resized")))))},e.prototype.registerEventHandlers=function(){a.support.transition&&this.$stage.on(a.support.transition.end+".owl.core",a.proxy(this.onTransitionEnd,this)),this.settings.responsive!==!1&&this.on(b,"resize",this._handlers.onThrottledResize),this.settings.mouseDrag&&(this.$element.addClass(this.options.dragClass),this.$stage.on("mousedown.owl.core",a.proxy(this.onDragStart,this)),this.$stage.on("dragstart.owl.core selectstart.owl.core",function(){return!1})),this.settings.touchDrag&&(this.$stage.on("touchstart.owl.core",a.proxy(this.onDragStart,this)),this.$stage.on("touchcancel.owl.core",a.proxy(this.onDragEnd,this)))},e.prototype.onDragStart=function(b){var d=null;3!==b.which&&(a.support.transform?(d=this.$stage.css("transform").replace(/.*\(|\)| /g,"").split(","),d={x:d[16===d.length?12:4],y:d[16===d.length?13:5]}):(d=this.$stage.position(),d={x:this.settings.rtl?d.left+this.$stage.width()-this.width()+this.settings.margin:d.left,y:d.top}),this.is("animating")&&(a.support.transform?this.animate(d.x):this.$stage.stop(),this.invalidate("position")),this.$element.toggleClass(this.options.grabClass,"mousedown"===b.type),this.speed(0),this._drag.time=(new Date).getTime(),this._drag.target=a(b.target),this._drag.stage.start=d,this._drag.stage.current=d,this._drag.pointer=this.pointer(b),a(c).on("mouseup.owl.core touchend.owl.core",a.proxy(this.onDragEnd,this)),a(c).one("mousemove.owl.core touchmove.owl.core",a.proxy(function(b){var d=this.difference(this._drag.pointer,this.pointer(b));a(c).on("mousemove.owl.core touchmove.owl.core",a.proxy(this.onDragMove,this)),Math.abs(d.x)<Math.abs(d.y)&&this.is("valid")||(b.preventDefault(),this.enter("dragging"),this.trigger("drag"))},this)))},e.prototype.onDragMove=function(a){var b=null,c=null,d=null,e=this.difference(this._drag.pointer,this.pointer(a)),f=this.difference(this._drag.stage.start,e);this.is("dragging")&&(a.preventDefault(),this.settings.loop?(b=this.coordinates(this.minimum()),c=this.coordinates(this.maximum()+1)-b,f.x=((f.x-b)%c+c)%c+b):(b=this.settings.rtl?this.coordinates(this.maximum()):this.coordinates(this.minimum()),c=this.settings.rtl?this.coordinates(this.minimum()):this.coordinates(this.maximum()),d=this.settings.pullDrag?-1*e.x/5:0,f.x=Math.max(Math.min(f.x,b+d),c+d)),this._drag.stage.current=f,this.animate(f.x))},e.prototype.onDragEnd=function(b){var d=this.difference(this._drag.pointer,this.pointer(b)),e=this._drag.stage.current,f=d.x>0^this.settings.rtl?"left":"right";a(c).off(".owl.core"),this.$element.removeClass(this.options.grabClass),(0!==d.x&&this.is("dragging")||!this.is("valid"))&&(this.speed(this.settings.dragEndSpeed||this.settings.smartSpeed),this.current(this.closest(e.x,0!==d.x?f:this._drag.direction)),this.invalidate("position"),this.update(),this._drag.direction=f,(Math.abs(d.x)>3||(new Date).getTime()-this._drag.time>300)&&this._drag.target.one("click.owl.core",function(){return!1})),this.is("dragging")&&(this.leave("dragging"),this.trigger("dragged"))},e.prototype.closest=function(b,c){var d=-1,e=30,f=this.width(),g=this.coordinates();return this.settings.freeDrag||a.each(g,a.proxy(function(a,h){return"left"===c&&b>h-e&&b<h+e?d=a:"right"===c&&b>h-f-e&&b<h-f+e?d=a+1:this.op(b,"<",h)&&this.op(b,">",g[a+1]||h-f)&&(d="left"===c?a+1:a),d===-1},this)),this.settings.loop||(this.op(b,">",g[this.minimum()])?d=b=this.minimum():this.op(b,"<",g[this.maximum()])&&(d=b=this.maximum())),d},e.prototype.animate=function(b){var c=this.speed()>0;this.is("animating")&&this.onTransitionEnd(),c&&(this.enter("animating"),this.trigger("translate")),a.support.transform3d&&a.support.transition?this.$stage.css({transform:"translate3d("+b+"px,0px,0px)",transition:this.speed()/1e3+"s"}):c?this.$stage.animate({left:b+"px"},this.speed(),this.settings.fallbackEasing,a.proxy(this.onTransitionEnd,this)):this.$stage.css({left:b+"px"})},e.prototype.is=function(a){return this._states.current[a]&&this._states.current[a]>0},e.prototype.current=function(a){if(a===d)return this._current;if(0===this._items.length)return d;if(a=this.normalize(a),this._current!==a){var b=this.trigger("change",{property:{name:"position",value:a}});b.data!==d&&(a=this.normalize(b.data)),this._current=a,this.invalidate("position"),this.trigger("changed",{property:{name:"position",value:this._current}})}return this._current},e.prototype.invalidate=function(b){return"string"===a.type(b)&&(this._invalidated[b]=!0,this.is("valid")&&this.leave("valid")),a.map(this._invalidated,function(a,b){return b})},e.prototype.reset=function(a){a=this.normalize(a),a!==d&&(this._speed=0,this._current=a,this.suppress(["translate","translated"]),this.animate(this.coordinates(a)),this.release(["translate","translated"]))},e.prototype.normalize=function(a,b){var c=this._items.length,e=b?0:this._clones.length;return!this.isNumeric(a)||c<1?a=d:(a<0||a>=c+e)&&(a=((a-e/2)%c+c)%c+e/2),a},e.prototype.relative=function(a){return a-=this._clones.length/2,this.normalize(a,!0)},e.prototype.maximum=function(a){var b,c,d,e=this.settings,f=this._coordinates.length;if(e.loop)f=this._clones.length/2+this._items.length-1;else if(e.autoWidth||e.merge){for(b=this._items.length,c=this._items[--b].width(),d=this.$element.width();b--&&(c+=this._items[b].width()+this.settings.margin,!(c>d)););f=b+1}else f=e.center?this._items.length-1:this._items.length-e.items;return a&&(f-=this._clones.length/2),Math.max(f,0)},e.prototype.minimum=function(a){return a?0:this._clones.length/2},e.prototype.items=function(a){return a===d?this._items.slice():(a=this.normalize(a,!0),this._items[a])},e.prototype.mergers=function(a){return a===d?this._mergers.slice():(a=this.normalize(a,!0),this._mergers[a])},e.prototype.clones=function(b){var c=this._clones.length/2,e=c+this._items.length,f=function(a){return a%2===0?e+a/2:c-(a+1)/2};return b===d?a.map(this._clones,function(a,b){return f(b)}):a.map(this._clones,function(a,c){return a===b?f(c):null})},e.prototype.speed=function(a){return a!==d&&(this._speed=a),this._speed},e.prototype.coordinates=function(b){var c,e=1,f=b-1;return b===d?a.map(this._coordinates,a.proxy(function(a,b){return this.coordinates(b)},this)):(this.settings.center?(this.settings.rtl&&(e=-1,f=b+1),c=this._coordinates[b],c+=(this.width()-c+(this._coordinates[f]||0))/2*e):c=this._coordinates[f]||0,c=Math.ceil(c))},e.prototype.duration=function(a,b,c){return 0===c?0:Math.min(Math.max(Math.abs(b-a),1),6)*Math.abs(c||this.settings.smartSpeed)},e.prototype.to=function(a,b){var c=this.current(),d=null,e=a-this.relative(c),f=(e>0)-(e<0),g=this._items.length,h=this.minimum(),i=this.maximum();this.settings.loop?(!this.settings.rewind&&Math.abs(e)>g/2&&(e+=f*-1*g),a=c+e,d=((a-h)%g+g)%g+h,d!==a&&d-e<=i&&d-e>0&&(c=d-e,a=d,this.reset(c))):this.settings.rewind?(i+=1,a=(a%i+i)%i):a=Math.max(h,Math.min(i,a)),this.speed(this.duration(c,a,b)),this.current(a),this.$element.is(":visible")&&this.update()},e.prototype.next=function(a){a=a||!1,this.to(this.relative(this.current())+1,a)},e.prototype.prev=function(a){a=a||!1,this.to(this.relative(this.current())-1,a)},e.prototype.onTransitionEnd=function(a){if(a!==d&&(a.stopPropagation(),(a.target||a.srcElement||a.originalTarget)!==this.$stage.get(0)))return!1;this.leave("animating"),this.trigger("translated")},e.prototype.viewport=function(){var d;return this.options.responsiveBaseElement!==b?d=a(this.options.responsiveBaseElement).width():b.innerWidth?d=b.innerWidth:c.documentElement&&c.documentElement.clientWidth?d=c.documentElement.clientWidth:console.warn("Can not detect viewport width."),d},e.prototype.replace=function(b){this.$stage.empty(),this._items=[],b&&(b=b instanceof jQuery?b:a(b)),this.settings.nestedItemSelector&&(b=b.find("."+this.settings.nestedItemSelector)),b.filter(function(){return 1===this.nodeType}).each(a.proxy(function(a,b){b=this.prepare(b),this.$stage.append(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)},this)),this.reset(this.isNumeric(this.settings.startPosition)?this.settings.startPosition:0),this.invalidate("items")},e.prototype.add=function(b,c){var e=this.relative(this._current);c=c===d?this._items.length:this.normalize(c,!0),b=b instanceof jQuery?b:a(b),this.trigger("add",{content:b,position:c}),b=this.prepare(b),0===this._items.length||c===this._items.length?(0===this._items.length&&this.$stage.append(b),0!==this._items.length&&this._items[c-1].after(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)):(this._items[c].before(b),this._items.splice(c,0,b),this._mergers.splice(c,0,1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)),this._items[e]&&this.reset(this._items[e].index()),this.invalidate("items"),this.trigger("added",{content:b,position:c})},e.prototype.remove=function(a){a=this.normalize(a,!0),a!==d&&(this.trigger("remove",{content:this._items[a],position:a}),this._items[a].remove(),this._items.splice(a,1),this._mergers.splice(a,1),this.invalidate("items"),this.trigger("removed",{content:null,position:a}))},e.prototype.preloadAutoWidthImages=function(b){b.each(a.proxy(function(b,c){this.enter("pre-loading"),c=a(c),a(new Image).one("load",a.proxy(function(a){c.attr("src",a.target.src),c.css("opacity",1),this.leave("pre-loading"),!this.is("pre-loading")&&!this.is("initializing")&&this.refresh()},this)).attr("src",c.attr("src")||c.attr("data-src")||c.attr("data-src-retina"))},this))},e.prototype.destroy=function(){this.$element.off(".owl.core"),this.$stage.off(".owl.core"),a(c).off(".owl.core"),this.settings.responsive!==!1&&(b.clearTimeout(this.resizeTimer),this.off(b,"resize",this._handlers.onThrottledResize));for(var d in this._plugins)this._plugins[d].destroy();this.$stage.children(".cloned").remove(),this.$stage.unwrap(),this.$stage.children().contents().unwrap(),this.$stage.children().unwrap(),this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class",this.$element.attr("class").replace(new RegExp(this.options.responsiveClass+"-\\S+\\s","g"),"")).removeData("owl.carousel")},e.prototype.op=function(a,b,c){var d=this.settings.rtl;switch(b){case"<":return d?a>c:a<c;case">":return d?a<c:a>c;case">=":return d?a<=c:a>=c;case"<=":return d?a>=c:a<=c}},e.prototype.on=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,d):a.attachEvent&&a.attachEvent("on"+b,c)},e.prototype.off=function(a,b,c,d){a.removeEventListener?a.removeEventListener(b,c,d):a.detachEvent&&a.detachEvent("on"+b,c)},e.prototype.trigger=function(b,c,d,f,g){var h={item:{count:this._items.length,index:this.current()}},i=a.camelCase(a.grep(["on",b,d],function(a){return a}).join("-").toLowerCase()),j=a.Event([b,"owl",d||"carousel"].join(".").toLowerCase(),a.extend({relatedTarget:this},h,c));return this._supress[b]||(a.each(this._plugins,function(a,b){b.onTrigger&&b.onTrigger(j)}),this.register({type:e.Type.Event,name:b}),this.$element.trigger(j),this.settings&&"function"==typeof this.settings[i]&&this.settings[i].call(this,j)),j},e.prototype.enter=function(b){a.each([b].concat(this._states.tags[b]||[]),a.proxy(function(a,b){this._states.current[b]===d&&(this._states.current[b]=0),this._states.current[b]++},this))},e.prototype.leave=function(b){a.each([b].concat(this._states.tags[b]||[]),a.proxy(function(a,b){this._states.current[b]--},this))},e.prototype.register=function(b){if(b.type===e.Type.Event){if(a.event.special[b.name]||(a.event.special[b.name]={}),!a.event.special[b.name].owl){var c=a.event.special[b.name]._default;a.event.special[b.name]._default=function(a){return!c||!c.apply||a.namespace&&a.namespace.indexOf("owl")!==-1?a.namespace&&a.namespace.indexOf("owl")>-1:c.apply(this,arguments)},a.event.special[b.name].owl=!0}}else b.type===e.Type.State&&(this._states.tags[b.name]?this._states.tags[b.name]=this._states.tags[b.name].concat(b.tags):this._states.tags[b.name]=b.tags,this._states.tags[b.name]=a.grep(this._states.tags[b.name],a.proxy(function(c,d){return a.inArray(c,this._states.tags[b.name])===d},this)))},e.prototype.suppress=function(b){a.each(b,a.proxy(function(a,b){this._supress[b]=!0},this))},e.prototype.release=function(b){a.each(b,a.proxy(function(a,b){delete this._supress[b]},this))},e.prototype.pointer=function(a){var c={x:null,y:null};return a=a.originalEvent||a||b.event,a=a.touches&&a.touches.length?a.touches[0]:a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:a,a.pageX?(c.x=a.pageX,c.y=a.pageY):(c.x=a.clientX,c.y=a.clientY),c},e.prototype.isNumeric=function(a){return!isNaN(parseFloat(a))},e.prototype.difference=function(a,b){return{x:a.x-b.x,y:a.y-b.y}},a.fn.owlCarousel=function(b){var c=Array.prototype.slice.call(arguments,1);return this.each(function(){var d=a(this),f=d.data("owl.carousel");f||(f=new e(this,"object"==typeof b&&b),d.data("owl.carousel",f),a.each(["next","prev","to","destroy","refresh","replace","add","remove"],function(b,c){f.register({type:e.Type.Event,name:c}),f.$element.on(c+".owl.carousel.core",a.proxy(function(a){a.namespace&&a.relatedTarget!==this&&(this.suppress([c]),f[c].apply(this,[].slice.call(arguments,1)),this.release([c]))},f))})),"string"==typeof b&&"_"!==b.charAt(0)&&f[b].apply(f,c)})},a.fn.owlCarousel.Constructor=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._interval=null,this._visible=null,this._handlers={"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoRefresh&&this.watch()},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={autoRefresh:!0,autoRefreshInterval:500},e.prototype.watch=function(){this._interval||(this._visible=this._core.$element.is(":visible"),this._interval=b.setInterval(a.proxy(this.refresh,this),this._core.settings.autoRefreshInterval))},e.prototype.refresh=function(){this._core.$element.is(":visible")!==this._visible&&(this._visible=!this._visible,this._core.$element.toggleClass("owl-hidden",!this._visible),this._visible&&this._core.invalidate("width")&&this._core.refresh())},e.prototype.destroy=function(){var a,c;b.clearInterval(this._interval);for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoRefresh=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._loaded=[],this._handlers={"initialized.owl.carousel change.owl.carousel resized.owl.carousel":a.proxy(function(b){if(b.namespace&&this._core.settings&&this._core.settings.lazyLoad&&(b.property&&"position"==b.property.name||"initialized"==b.type))for(var c=this._core.settings,e=c.center&&Math.ceil(c.items/2)||c.items,f=c.center&&e*-1||0,g=(b.property&&b.property.value!==d?b.property.value:this._core.current())+f,h=this._core.clones().length,i=a.proxy(function(a,b){this.load(b)},this);f++<e;)this.load(h/2+this._core.relative(g)),h&&a.each(this._core.clones(this._core.relative(g)),i),g++},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={lazyLoad:!1},e.prototype.load=function(c){var d=this._core.$stage.children().eq(c),e=d&&d.find(".owl-lazy");!e||a.inArray(d.get(0),this._loaded)>-1||(e.each(a.proxy(function(c,d){var e,f=a(d),g=b.devicePixelRatio>1&&f.attr("data-src-retina")||f.attr("data-src");this._core.trigger("load",{element:f,url:g},"lazy"),f.is("img")?f.one("load.owl.lazy",a.proxy(function(){f.css("opacity",1),this._core.trigger("loaded",{element:f,url:g},"lazy")},this)).attr("src",g):(e=new Image,e.onload=a.proxy(function(){f.css({"background-image":'url("'+g+'")',opacity:"1"}),this._core.trigger("loaded",{element:f,url:g},"lazy")},this),e.src=g)},this)),this._loaded.push(d.get(0)))},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this._core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Lazy=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._handlers={"initialized.owl.carousel refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&this.update()},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&"position"==a.property.name&&this.update()},this),"loaded.owl.lazy":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&a.element.closest("."+this._core.settings.itemClass).index()===this._core.current()&&this.update()},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={autoHeight:!1,autoHeightClass:"owl-height"},e.prototype.update=function(){var b=this._core._current,c=b+this._core.settings.items,d=this._core.$stage.children().toArray().slice(b,c),e=[],f=0;a.each(d,function(b,c){e.push(a(c).height())}),f=Math.max.apply(null,e),this._core.$stage.parent().height(f).addClass(this._core.settings.autoHeightClass)},e.prototype.destroy=function(){var a,b;for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoHeight=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._videos={},this._playing=null,this._handlers={"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.register({type:"state",name:"playing",tags:["interacting"]})},this),"resize.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.video&&this.isInFullScreen()&&a.preventDefault()},this),"refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.is("resizing")&&this._core.$stage.find(".cloned .owl-video-frame").remove()},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&"position"===a.property.name&&this._playing&&this.stop()},this),"prepared.owl.carousel":a.proxy(function(b){if(b.namespace){var c=a(b.content).find(".owl-video");c.length&&(c.css("display","none"),this.fetch(c,a(b.content)))}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers),this._core.$element.on("click.owl.video",".owl-video-play-icon",a.proxy(function(a){this.play(a)},this))};e.Defaults={video:!1,videoHeight:!1,videoWidth:!1},e.prototype.fetch=function(a,b){var c=function(){return a.attr("data-vimeo-id")?"vimeo":a.attr("data-vzaar-id")?"vzaar":"youtube"}(),d=a.attr("data-vimeo-id")||a.attr("data-youtube-id")||a.attr("data-vzaar-id"),e=a.attr("data-width")||this._core.settings.videoWidth,f=a.attr("data-height")||this._core.settings.videoHeight,g=a.attr("href");if(!g)throw new Error("Missing video URL.");if(d=g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/),d[3].indexOf("youtu")>-1)c="youtube";else if(d[3].indexOf("vimeo")>-1)c="vimeo";else{if(!(d[3].indexOf("vzaar")>-1))throw new Error("Video URL not supported.");c="vzaar"}d=d[6],this._videos[g]={type:c,id:d,width:e,height:f},b.attr("data-video",g),this.thumbnail(a,this._videos[g])},e.prototype.thumbnail=function(b,c){var d,e,f,g=c.width&&c.height?'style="width:'+c.width+"px;height:"+c.height+'px;"':"",h=b.find("img"),i="src",j="",k=this._core.settings,l=function(a){e='<div class="owl-video-play-icon"></div>',d=k.lazyLoad?'<div class="owl-video-tn '+j+'" '+i+'="'+a+'"></div>':'<div class="owl-video-tn" style="opacity:1;background-image:url('+a+')"></div>',b.after(d),b.after(e)};if(b.wrap('<div class="owl-video-wrapper"'+g+"></div>"),this._core.settings.lazyLoad&&(i="data-src",j="owl-lazy"),h.length)return l(h.attr(i)),h.remove(),!1;"youtube"===c.type?(f="//img.youtube.com/vi/"+c.id+"/hqdefault.jpg",l(f)):"vimeo"===c.type?a.ajax({type:"GET",url:"//vimeo.com/api/v2/video/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a[0].thumbnail_large,l(f)}}):"vzaar"===c.type&&a.ajax({type:"GET",url:"//vzaar.com/api/videos/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a.framegrab_url,l(f)}})},e.prototype.stop=function(){this._core.trigger("stop",null,"video"),this._playing.find(".owl-video-frame").remove(),this._playing.removeClass("owl-video-playing"),this._playing=null,this._core.leave("playing"),this._core.trigger("stopped",null,"video")},e.prototype.play=function(b){var c,d=a(b.target),e=d.closest("."+this._core.settings.itemClass),f=this._videos[e.attr("data-video")],g=f.width||"100%",h=f.height||this._core.$stage.height();this._playing||(this._core.enter("playing"),this._core.trigger("play",null,"video"),e=this._core.items(this._core.relative(e.index())),this._core.reset(e.index()),"youtube"===f.type?c='<iframe width="'+g+'" height="'+h+'" src="//www.youtube.com/embed/'+f.id+"?autoplay=1&rel=0&v="+f.id+'" frameborder="0" allowfullscreen></iframe>':"vimeo"===f.type?c='<iframe src="//player.vimeo.com/video/'+f.id+'?autoplay=1" width="'+g+'" height="'+h+'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>':"vzaar"===f.type&&(c='<iframe frameborder="0"height="'+h+'"width="'+g+'" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/'+f.id+'/player?autoplay=true"></iframe>'),a('<div class="owl-video-frame">'+c+"</div>").insertAfter(e.find(".owl-video")),this._playing=e.addClass("owl-video-playing"))},e.prototype.isInFullScreen=function(){var b=c.fullscreenElement||c.mozFullScreenElement||c.webkitFullscreenElement;return b&&a(b).parent().hasClass("owl-video-frame")},e.prototype.destroy=function(){var a,b;this._core.$element.off("click.owl.video");for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Video=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this.core=b,this.core.options=a.extend({},e.Defaults,this.core.options),this.swapping=!0,this.previous=d,this.next=d,this.handlers={"change.owl.carousel":a.proxy(function(a){a.namespace&&"position"==a.property.name&&(this.previous=this.core.current(),this.next=a.property.value)},this),"drag.owl.carousel dragged.owl.carousel translated.owl.carousel":a.proxy(function(a){a.namespace&&(this.swapping="translated"==a.type)},this),"translate.owl.carousel":a.proxy(function(a){a.namespace&&this.swapping&&(this.core.options.animateOut||this.core.options.animateIn)&&this.swap()},this)},this.core.$element.on(this.handlers)};e.Defaults={animateOut:!1,animateIn:!1},e.prototype.swap=function(){if(1===this.core.settings.items&&a.support.animation&&a.support.transition){this.core.speed(0);var b,c=a.proxy(this.clear,this),d=this.core.$stage.children().eq(this.previous),e=this.core.$stage.children().eq(this.next),f=this.core.settings.animateIn,g=this.core.settings.animateOut;this.core.current()!==this.previous&&(g&&(b=this.core.coordinates(this.previous)-this.core.coordinates(this.next),d.one(a.support.animation.end,c).css({left:b+"px"}).addClass("animated owl-animated-out").addClass(g)),f&&e.one(a.support.animation.end,c).addClass("animated owl-animated-in").addClass(f))}},e.prototype.clear=function(b){a(b.target).css({left:""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),this.core.onTransitionEnd()},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this.core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},
a.fn.owlCarousel.Constructor.Plugins.Animate=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._timeout=null,this._paused=!1,this._handlers={"changed.owl.carousel":a.proxy(function(a){a.namespace&&"settings"===a.property.name?this._core.settings.autoplay?this.play():this.stop():a.namespace&&"position"===a.property.name&&this._core.settings.autoplay&&this._setAutoPlayInterval()},this),"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoplay&&this.play()},this),"play.owl.autoplay":a.proxy(function(a,b,c){a.namespace&&this.play(b,c)},this),"stop.owl.autoplay":a.proxy(function(a){a.namespace&&this.stop()},this),"mouseover.owl.autoplay":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"mouseleave.owl.autoplay":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.play()},this),"touchstart.owl.core":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"touchend.owl.core":a.proxy(function(){this._core.settings.autoplayHoverPause&&this.play()},this)},this._core.$element.on(this._handlers),this._core.options=a.extend({},e.Defaults,this._core.options)};e.Defaults={autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!1,autoplaySpeed:!1},e.prototype.play=function(a,b){this._paused=!1,this._core.is("rotating")||(this._core.enter("rotating"),this._setAutoPlayInterval())},e.prototype._getNextTimeout=function(d,e){return this._timeout&&b.clearTimeout(this._timeout),b.setTimeout(a.proxy(function(){this._paused||this._core.is("busy")||this._core.is("interacting")||c.hidden||this._core.next(e||this._core.settings.autoplaySpeed)},this),d||this._core.settings.autoplayTimeout)},e.prototype._setAutoPlayInterval=function(){this._timeout=this._getNextTimeout()},e.prototype.stop=function(){this._core.is("rotating")&&(b.clearTimeout(this._timeout),this._core.leave("rotating"))},e.prototype.pause=function(){this._core.is("rotating")&&(this._paused=!0)},e.prototype.destroy=function(){var a,b;this.stop();for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.autoplay=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){"use strict";var e=function(b){this._core=b,this._initialized=!1,this._pages=[],this._controls={},this._templates=[],this.$element=this._core.$element,this._overrides={next:this._core.next,prev:this._core.prev,to:this._core.to},this._handlers={"prepared.owl.carousel":a.proxy(function(b){b.namespace&&this._core.settings.dotsData&&this._templates.push('<div class="'+this._core.settings.dotClass+'">'+a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot")+"</div>")},this),"added.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.dotsData&&this._templates.splice(a.position,0,this._templates.pop())},this),"remove.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.dotsData&&this._templates.splice(a.position,1)},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&"position"==a.property.name&&this.draw()},this),"initialized.owl.carousel":a.proxy(function(a){a.namespace&&!this._initialized&&(this._core.trigger("initialize",null,"navigation"),this.initialize(),this.update(),this.draw(),this._initialized=!0,this._core.trigger("initialized",null,"navigation"))},this),"refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._initialized&&(this._core.trigger("refresh",null,"navigation"),this.update(),this.draw(),this._core.trigger("refreshed",null,"navigation"))},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this.$element.on(this._handlers)};e.Defaults={nav:!1,navText:["prev","next"],navSpeed:!1,navElement:"div",navContainer:!1,navContainerClass:"owl-nav",navClass:["owl-prev","owl-next"],slideBy:1,dotClass:"owl-dot",dotsClass:"owl-dots",dots:!0,dotsEach:!1,dotsData:!1,dotsSpeed:!1,dotsContainer:!1},e.prototype.initialize=function(){var b,c=this._core.settings;this._controls.$relative=(c.navContainer?a(c.navContainer):a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"),this._controls.$previous=a("<"+c.navElement+">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click",a.proxy(function(a){this.prev(c.navSpeed)},this)),this._controls.$next=a("<"+c.navElement+">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click",a.proxy(function(a){this.next(c.navSpeed)},this)),c.dotsData||(this._templates=[a("<div>").addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]),this._controls.$absolute=(c.dotsContainer?a(c.dotsContainer):a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"),this._controls.$absolute.on("click","div",a.proxy(function(b){var d=a(b.target).parent().is(this._controls.$absolute)?a(b.target).index():a(b.target).parent().index();b.preventDefault(),this.to(d,c.dotsSpeed)},this));for(b in this._overrides)this._core[b]=a.proxy(this[b],this)},e.prototype.destroy=function(){var a,b,c,d;for(a in this._handlers)this.$element.off(a,this._handlers[a]);for(b in this._controls)this._controls[b].remove();for(d in this.overides)this._core[d]=this._overrides[d];for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},e.prototype.update=function(){var a,b,c,d=this._core.clones().length/2,e=d+this._core.items().length,f=this._core.maximum(!0),g=this._core.settings,h=g.center||g.autoWidth||g.dotsData?1:g.dotsEach||g.items;if("page"!==g.slideBy&&(g.slideBy=Math.min(g.slideBy,g.items)),g.dots||"page"==g.slideBy)for(this._pages=[],a=d,b=0,c=0;a<e;a++){if(b>=h||0===b){if(this._pages.push({start:Math.min(f,a-d),end:a-d+h-1}),Math.min(f,a-d)===f)break;b=0,++c}b+=this._core.mergers(this._core.relative(a))}},e.prototype.draw=function(){var b,c=this._core.settings,d=this._core.items().length<=c.items,e=this._core.relative(this._core.current()),f=c.loop||c.rewind;this._controls.$relative.toggleClass("disabled",!c.nav||d),c.nav&&(this._controls.$previous.toggleClass("disabled",!f&&e<=this._core.minimum(!0)),this._controls.$next.toggleClass("disabled",!f&&e>=this._core.maximum(!0))),this._controls.$absolute.toggleClass("disabled",!c.dots||d),c.dots&&(b=this._pages.length-this._controls.$absolute.children().length,c.dotsData&&0!==b?this._controls.$absolute.html(this._templates.join("")):b>0?this._controls.$absolute.append(new Array(b+1).join(this._templates[0])):b<0&&this._controls.$absolute.children().slice(b).remove(),this._controls.$absolute.find(".active").removeClass("active"),this._controls.$absolute.children().eq(a.inArray(this.current(),this._pages)).addClass("active"))},e.prototype.onTrigger=function(b){var c=this._core.settings;b.page={index:a.inArray(this.current(),this._pages),count:this._pages.length,size:c&&(c.center||c.autoWidth||c.dotsData?1:c.dotsEach||c.items)}},e.prototype.current=function(){var b=this._core.relative(this._core.current());return a.grep(this._pages,a.proxy(function(a,c){return a.start<=b&&a.end>=b},this)).pop()},e.prototype.getPosition=function(b){var c,d,e=this._core.settings;return"page"==e.slideBy?(c=a.inArray(this.current(),this._pages),d=this._pages.length,b?++c:--c,c=this._pages[(c%d+d)%d].start):(c=this._core.relative(this._core.current()),d=this._core.items().length,b?c+=e.slideBy:c-=e.slideBy),c},e.prototype.next=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!0),b)},e.prototype.prev=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!1),b)},e.prototype.to=function(b,c,d){var e;!d&&this._pages.length?(e=this._pages.length,a.proxy(this._overrides.to,this._core)(this._pages[(b%e+e)%e].start,c)):a.proxy(this._overrides.to,this._core)(b,c)},a.fn.owlCarousel.Constructor.Plugins.Navigation=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){"use strict";var e=function(c){this._core=c,this._hashes={},this.$element=this._core.$element,this._handlers={"initialized.owl.carousel":a.proxy(function(c){c.namespace&&"URLHash"===this._core.settings.startPosition&&a(b).trigger("hashchange.owl.navigation")},this),"prepared.owl.carousel":a.proxy(function(b){if(b.namespace){var c=a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");if(!c)return;this._hashes[c]=b.content}},this),"changed.owl.carousel":a.proxy(function(c){if(c.namespace&&"position"===c.property.name){var d=this._core.items(this._core.relative(this._core.current())),e=a.map(this._hashes,function(a,b){return a===d?b:null}).join();if(!e||b.location.hash.slice(1)===e)return;b.location.hash=e}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this.$element.on(this._handlers),a(b).on("hashchange.owl.navigation",a.proxy(function(a){var c=b.location.hash.substring(1),e=this._core.$stage.children(),f=this._hashes[c]&&e.index(this._hashes[c]);f!==d&&f!==this._core.current()&&this._core.to(this._core.relative(f),!1,!0)},this))};e.Defaults={URLhashListener:!1},e.prototype.destroy=function(){var c,d;a(b).off("hashchange.owl.navigation");for(c in this._handlers)this._core.$element.off(c,this._handlers[c]);for(d in Object.getOwnPropertyNames(this))"function"!=typeof this[d]&&(this[d]=null)},a.fn.owlCarousel.Constructor.Plugins.Hash=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){function e(b,c){var e=!1,f=b.charAt(0).toUpperCase()+b.slice(1);return a.each((b+" "+h.join(f+" ")+f).split(" "),function(a,b){if(g[b]!==d)return e=!c||b,!1}),e}function f(a){return e(a,!0)}var g=a("<support>").get(0).style,h="Webkit Moz O ms".split(" "),i={transition:{end:{WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"}},animation:{end:{WebkitAnimation:"webkitAnimationEnd",MozAnimation:"animationend",OAnimation:"oAnimationEnd",animation:"animationend"}}},j={csstransforms:function(){return!!e("transform")},csstransforms3d:function(){return!!e("perspective")},csstransitions:function(){return!!e("transition")},cssanimations:function(){return!!e("animation")}};j.csstransitions()&&(a.support.transition=new String(f("transition")),a.support.transition.end=i.transition.end[a.support.transition]),j.cssanimations()&&(a.support.animation=new String(f("animation")),a.support.animation.end=i.animation.end[a.support.animation]),j.csstransforms()&&(a.support.transform=new String(f("transform")),a.support.transform3d=j.csstransforms3d())}(window.Zepto||window.jQuery,window,document);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:63:"/local/templates/bitlate_pro/js/fancybox.min.js?150885328723135";s:6:"source";s:47:"/local/templates/bitlate_pro/js/fancybox.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*! fancyBox v2.1.5 fancyapps.com | fancyapps.com/fancybox/#license */
(function(r,G,f,v){var J=f("html"),n=f(r),p=f(G),b=f.fancybox=function(){b.open.apply(this,arguments)},I=navigator.userAgent.match(/msie/i),B=null,s=G.createTouch!==v,t=function(a){return a&&a.hasOwnProperty&&a instanceof f},q=function(a){return a&&"string"===f.type(a)},E=function(a){return q(a)&&0<a.indexOf("%")},l=function(a,d){var e=parseInt(a,10)||0;d&&E(a)&&(e*=b.getViewport()[d]/100);return Math.ceil(e)},w=function(a,b){return l(a,b)+"px"};f.extend(b,{version:"2.1.5",defaults:{padding:15,margin:20,
width:800,height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,pixelRatio:1,autoSize:!0,autoHeight:!1,autoWidth:!1,autoResize:!0,autoCenter:!s,fitToView:!0,aspectRatio:!1,topRatio:0.5,leftRatio:0.5,scrolling:"auto",wrapCSS:"",arrows:!0,closeBtn:!0,closeClick:!1,nextClick:!1,mouseWheel:!0,autoPlay:!1,playSpeed:3E3,preload:3,modal:!1,loop:!0,ajax:{dataType:"html",headers:{"X-fancyBox":!0}},iframe:{scrolling:"auto",preload:!0},swf:{wmode:"transparent",allowfullscreen:"true",allowscriptaccess:"always"},
keys:{next:{13:"left",34:"up",39:"left",40:"up"},prev:{8:"right",33:"down",37:"right",38:"down"},close:[27],play:[32],toggle:[70]},direction:{next:"left",prev:"right"},scrollOutside:!0,index:0,type:null,href:null,content:null,title:null,tpl:{wrap:'<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen'+
(I?' allowtransparency="true"':"")+"></iframe>",error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',next:'<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',prev:'<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'},openEffect:"fade",openSpeed:250,openEasing:"swing",openOpacity:!0,
openMethod:"zoomIn",closeEffect:"fade",closeSpeed:250,closeEasing:"swing",closeOpacity:!0,closeMethod:"zoomOut",nextEffect:"elastic",nextSpeed:250,nextEasing:"swing",nextMethod:"changeIn",prevEffect:"elastic",prevSpeed:250,prevEasing:"swing",prevMethod:"changeOut",helpers:{overlay:!0,title:!0},onCancel:f.noop,beforeLoad:f.noop,afterLoad:f.noop,beforeShow:f.noop,afterShow:f.noop,beforeChange:f.noop,beforeClose:f.noop,afterClose:f.noop},group:{},opts:{},previous:null,coming:null,current:null,isActive:!1,
isOpen:!1,isOpened:!1,wrap:null,skin:null,outer:null,inner:null,player:{timer:null,isActive:!1},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(a,d){if(a&&(f.isPlainObject(d)||(d={}),!1!==b.close(!0)))return f.isArray(a)||(a=t(a)?f(a).get():[a]),f.each(a,function(e,c){var k={},g,h,j,m,l;"object"===f.type(c)&&(c.nodeType&&(c=f(c)),t(c)?(k={href:c.data("fancybox-href")||c.attr("href"),title:c.data("fancybox-title")||c.attr("title"),isDom:!0,element:c},f.metadata&&f.extend(!0,k,
c.metadata())):k=c);g=d.href||k.href||(q(c)?c:null);h=d.title!==v?d.title:k.title||"";m=(j=d.content||k.content)?"html":d.type||k.type;!m&&k.isDom&&(m=c.data("fancybox-type"),m||(m=(m=c.prop("class").match(/fancybox\.(\w+)/))?m[1]:null));q(g)&&(m||(b.isImage(g)?m="image":b.isSWF(g)?m="swf":"#"===g.charAt(0)?m="inline":q(c)&&(m="html",j=c)),"ajax"===m&&(l=g.split(/\s+/,2),g=l.shift(),l=l.shift()));j||("inline"===m?g?j=f(q(g)?g.replace(/.*(?=#[^\s]+$)/,""):g):k.isDom&&(j=c):"html"===m?j=g:!m&&(!g&&
k.isDom)&&(m="inline",j=c));f.extend(k,{href:g,type:m,content:j,title:h,selector:l});a[e]=k}),b.opts=f.extend(!0,{},b.defaults,d),d.keys!==v&&(b.opts.keys=d.keys?f.extend({},b.defaults.keys,d.keys):!1),b.group=a,b._start(b.opts.index)},cancel:function(){var a=b.coming;a&&!1!==b.trigger("onCancel")&&(b.hideLoading(),b.ajaxLoad&&b.ajaxLoad.abort(),b.ajaxLoad=null,b.imgPreload&&(b.imgPreload.onload=b.imgPreload.onerror=null),a.wrap&&a.wrap.stop(!0,!0).trigger("onReset").remove(),b.coming=null,b.current||
b._afterZoomOut(a))},close:function(a){b.cancel();!1!==b.trigger("beforeClose")&&(b.unbindEvents(),b.isActive&&(!b.isOpen||!0===a?(f(".fancybox-wrap").stop(!0).trigger("onReset").remove(),b._afterZoomOut()):(b.isOpen=b.isOpened=!1,b.isClosing=!0,f(".fancybox-item, .fancybox-nav").remove(),b.wrap.stop(!0,!0).removeClass("fancybox-opened"),b.transitions[b.current.closeMethod]())))},play:function(a){var d=function(){clearTimeout(b.player.timer)},e=function(){d();b.current&&b.player.isActive&&(b.player.timer=
setTimeout(b.next,b.current.playSpeed))},c=function(){d();p.unbind(".player");b.player.isActive=!1;b.trigger("onPlayEnd")};if(!0===a||!b.player.isActive&&!1!==a){if(b.current&&(b.current.loop||b.current.index<b.group.length-1))b.player.isActive=!0,p.bind({"onCancel.player beforeClose.player":c,"onUpdate.player":e,"beforeLoad.player":d}),e(),b.trigger("onPlayStart")}else c()},next:function(a){var d=b.current;d&&(q(a)||(a=d.direction.next),b.jumpto(d.index+1,a,"next"))},prev:function(a){var d=b.current;
d&&(q(a)||(a=d.direction.prev),b.jumpto(d.index-1,a,"prev"))},jumpto:function(a,d,e){var c=b.current;c&&(a=l(a),b.direction=d||c.direction[a>=c.index?"next":"prev"],b.router=e||"jumpto",c.loop&&(0>a&&(a=c.group.length+a%c.group.length),a%=c.group.length),c.group[a]!==v&&(b.cancel(),b._start(a)))},reposition:function(a,d){var e=b.current,c=e?e.wrap:null,k;c&&(k=b._getPosition(d),a&&"scroll"===a.type?(delete k.position,c.stop(!0,!0).animate(k,200)):(c.css(k),e.pos=f.extend({},e.dim,k)))},update:function(a){var d=
a&&a.type,e=!d||"orientationchange"===d;e&&(clearTimeout(B),B=null);b.isOpen&&!B&&(B=setTimeout(function(){var c=b.current;c&&!b.isClosing&&(b.wrap.removeClass("fancybox-tmp"),(e||"load"===d||"resize"===d&&c.autoResize)&&b._setDimension(),"scroll"===d&&c.canShrink||b.reposition(a),b.trigger("onUpdate"),B=null)},e&&!s?0:300))},toggle:function(a){b.isOpen&&(b.current.fitToView="boolean"===f.type(a)?a:!b.current.fitToView,s&&(b.wrap.removeAttr("style").addClass("fancybox-tmp"),b.trigger("onUpdate")),
b.update())},hideLoading:function(){p.unbind(".loading");f("#fancybox-loading").remove()},showLoading:function(){var a,d;b.hideLoading();a=f('<div id="fancybox-loading"><div></div></div>').click(b.cancel).appendTo("body");p.bind("keydown.loading",function(a){if(27===(a.which||a.keyCode))a.preventDefault(),b.cancel()});b.defaults.fixed||(d=b.getViewport(),a.css({position:"absolute",top:0.5*d.h+d.y,left:0.5*d.w+d.x}))},getViewport:function(){var a=b.current&&b.current.locked||!1,d={x:n.scrollLeft(),
y:n.scrollTop()};a?(d.w=a[0].clientWidth,d.h=a[0].clientHeight):(d.w=s&&r.innerWidth?r.innerWidth:n.width(),d.h=s&&r.innerHeight?r.innerHeight:n.height());return d},unbindEvents:function(){b.wrap&&t(b.wrap)&&b.wrap.unbind(".fb");p.unbind(".fb");n.unbind(".fb")},bindEvents:function(){var a=b.current,d;a&&(n.bind("orientationchange.fb"+(s?"":" resize.fb")+(a.autoCenter&&!a.locked?" scroll.fb":""),b.update),(d=a.keys)&&p.bind("keydown.fb",function(e){var c=e.which||e.keyCode,k=e.target||e.srcElement;
if(27===c&&b.coming)return!1;!e.ctrlKey&&(!e.altKey&&!e.shiftKey&&!e.metaKey&&(!k||!k.type&&!f(k).is("[contenteditable]")))&&f.each(d,function(d,k){if(1<a.group.length&&k[c]!==v)return b[d](k[c]),e.preventDefault(),!1;if(-1<f.inArray(c,k))return b[d](),e.preventDefault(),!1})}),f.fn.mousewheel&&a.mouseWheel&&b.wrap.bind("mousewheel.fb",function(d,c,k,g){for(var h=f(d.target||null),j=!1;h.length&&!j&&!h.is(".fancybox-skin")&&!h.is(".fancybox-wrap");)j=h[0]&&!(h[0].style.overflow&&"hidden"===h[0].style.overflow)&&
(h[0].clientWidth&&h[0].scrollWidth>h[0].clientWidth||h[0].clientHeight&&h[0].scrollHeight>h[0].clientHeight),h=f(h).parent();if(0!==c&&!j&&1<b.group.length&&!a.canShrink){if(0<g||0<k)b.prev(0<g?"down":"left");else if(0>g||0>k)b.next(0>g?"up":"right");d.preventDefault()}}))},trigger:function(a,d){var e,c=d||b.coming||b.current;if(c){f.isFunction(c[a])&&(e=c[a].apply(c,Array.prototype.slice.call(arguments,1)));if(!1===e)return!1;c.helpers&&f.each(c.helpers,function(d,e){if(e&&b.helpers[d]&&f.isFunction(b.helpers[d][a]))b.helpers[d][a](f.extend(!0,
{},b.helpers[d].defaults,e),c)});p.trigger(a)}},isImage:function(a){return q(a)&&a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)},isSWF:function(a){return q(a)&&a.match(/\.(swf)((\?|#).*)?$/i)},_start:function(a){var d={},e,c;a=l(a);e=b.group[a]||null;if(!e)return!1;d=f.extend(!0,{},b.opts,e);e=d.margin;c=d.padding;"number"===f.type(e)&&(d.margin=[e,e,e,e]);"number"===f.type(c)&&(d.padding=[c,c,c,c]);d.modal&&f.extend(!0,d,{closeBtn:!1,closeClick:!1,nextClick:!1,arrows:!1,
mouseWheel:!1,keys:null,helpers:{overlay:{closeClick:!1}}});d.autoSize&&(d.autoWidth=d.autoHeight=!0);"auto"===d.width&&(d.autoWidth=!0);"auto"===d.height&&(d.autoHeight=!0);d.group=b.group;d.index=a;b.coming=d;if(!1===b.trigger("beforeLoad"))b.coming=null;else{c=d.type;e=d.href;if(!c)return b.coming=null,b.current&&b.router&&"jumpto"!==b.router?(b.current.index=a,b[b.router](b.direction)):!1;b.isActive=!0;if("image"===c||"swf"===c)d.autoHeight=d.autoWidth=!1,d.scrolling="visible";"image"===c&&(d.aspectRatio=
!0);"iframe"===c&&s&&(d.scrolling="scroll");d.wrap=f(d.tpl.wrap).addClass("fancybox-"+(s?"mobile":"desktop")+" fancybox-type-"+c+" fancybox-tmp "+d.wrapCSS).appendTo(d.parent||"body");f.extend(d,{skin:f(".fancybox-skin",d.wrap),outer:f(".fancybox-outer",d.wrap),inner:f(".fancybox-inner",d.wrap)});f.each(["Top","Right","Bottom","Left"],function(a,b){d.skin.css("padding"+b,w(d.padding[a]))});b.trigger("onReady");if("inline"===c||"html"===c){if(!d.content||!d.content.length)return b._error("content")}else if(!e)return b._error("href");
"image"===c?b._loadImage():"ajax"===c?b._loadAjax():"iframe"===c?b._loadIframe():b._afterLoad()}},_error:function(a){f.extend(b.coming,{type:"html",autoWidth:!0,autoHeight:!0,minWidth:0,minHeight:0,scrolling:"no",hasError:a,content:b.coming.tpl.error});b._afterLoad()},_loadImage:function(){var a=b.imgPreload=new Image;a.onload=function(){this.onload=this.onerror=null;b.coming.width=this.width/b.opts.pixelRatio;b.coming.height=this.height/b.opts.pixelRatio;b._afterLoad()};a.onerror=function(){this.onload=
this.onerror=null;b._error("image")};a.src=b.coming.href;!0!==a.complete&&b.showLoading()},_loadAjax:function(){var a=b.coming;b.showLoading();b.ajaxLoad=f.ajax(f.extend({},a.ajax,{url:a.href,error:function(a,e){b.coming&&"abort"!==e?b._error("ajax",a):b.hideLoading()},success:function(d,e){"success"===e&&(a.content=d,b._afterLoad())}}))},_loadIframe:function(){var a=b.coming,d=f(a.tpl.iframe.replace(/\{rnd\}/g,(new Date).getTime())).attr("scrolling",s?"auto":a.iframe.scrolling).attr("src",a.href);
f(a.wrap).bind("onReset",function(){try{f(this).find("iframe").hide().attr("src","//about:blank").end().empty()}catch(a){}});a.iframe.preload&&(b.showLoading(),d.one("load",function(){f(this).data("ready",1);s||f(this).bind("load.fb",b.update);f(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();b._afterLoad()}));a.content=d.appendTo(a.inner);a.iframe.preload||b._afterLoad()},_preloadImages:function(){var a=b.group,d=b.current,e=a.length,c=d.preload?Math.min(d.preload,
e-1):0,f,g;for(g=1;g<=c;g+=1)f=a[(d.index+g)%e],"image"===f.type&&f.href&&((new Image).src=f.href)},_afterLoad:function(){var a=b.coming,d=b.current,e,c,k,g,h;b.hideLoading();if(a&&!1!==b.isActive)if(!1===b.trigger("afterLoad",a,d))a.wrap.stop(!0).trigger("onReset").remove(),b.coming=null;else{d&&(b.trigger("beforeChange",d),d.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove());b.unbindEvents();e=a.content;c=a.type;k=a.scrolling;f.extend(b,{wrap:a.wrap,skin:a.skin,
outer:a.outer,inner:a.inner,current:a,previous:d});g=a.href;switch(c){case "inline":case "ajax":case "html":a.selector?e=f("<div>").html(e).find(a.selector):t(e)&&(e.data("fancybox-placeholder")||e.data("fancybox-placeholder",f('<div class="fancybox-placeholder"></div>').insertAfter(e).hide()),e=e.show().detach(),a.wrap.bind("onReset",function(){f(this).find(e).length&&e.hide().replaceAll(e.data("fancybox-placeholder")).data("fancybox-placeholder",!1)}));break;case "image":e=a.tpl.image.replace("{href}",
g);break;case "swf":e='<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="'+g+'"></param>',h="",f.each(a.swf,function(a,b){e+='<param name="'+a+'" value="'+b+'"></param>';h+=" "+a+'="'+b+'"'}),e+='<embed src="'+g+'" type="application/x-shockwave-flash" width="100%" height="100%"'+h+"></embed></object>"}(!t(e)||!e.parent().is(a.inner))&&a.inner.append(e);b.trigger("beforeShow");a.inner.css("overflow","yes"===k?"scroll":
"no"===k?"hidden":k);b._setDimension();b.reposition();b.isOpen=!1;b.coming=null;b.bindEvents();if(b.isOpened){if(d.prevMethod)b.transitions[d.prevMethod]()}else f(".fancybox-wrap").not(a.wrap).stop(!0).trigger("onReset").remove();b.transitions[b.isOpened?a.nextMethod:a.openMethod]();b._preloadImages()}},_setDimension:function(){var a=b.getViewport(),d=0,e=!1,c=!1,e=b.wrap,k=b.skin,g=b.inner,h=b.current,c=h.width,j=h.height,m=h.minWidth,u=h.minHeight,n=h.maxWidth,p=h.maxHeight,s=h.scrolling,q=h.scrollOutside?
h.scrollbarWidth:0,x=h.margin,y=l(x[1]+x[3]),r=l(x[0]+x[2]),v,z,t,C,A,F,B,D,H;e.add(k).add(g).width("auto").height("auto").removeClass("fancybox-tmp");x=l(k.outerWidth(!0)-k.width());v=l(k.outerHeight(!0)-k.height());z=y+x;t=r+v;C=E(c)?(a.w-z)*l(c)/100:c;A=E(j)?(a.h-t)*l(j)/100:j;if("iframe"===h.type){if(H=h.content,h.autoHeight&&1===H.data("ready"))try{H[0].contentWindow.document.location&&(g.width(C).height(9999),F=H.contents().find("body"),q&&F.css("overflow-x","hidden"),A=F.outerHeight(!0))}catch(G){}}else if(h.autoWidth||
h.autoHeight)g.addClass("fancybox-tmp"),h.autoWidth||g.width(C),h.autoHeight||g.height(A),h.autoWidth&&(C=g.width()),h.autoHeight&&(A=g.height()),g.removeClass("fancybox-tmp");c=l(C);j=l(A);D=C/A;m=l(E(m)?l(m,"w")-z:m);n=l(E(n)?l(n,"w")-z:n);u=l(E(u)?l(u,"h")-t:u);p=l(E(p)?l(p,"h")-t:p);F=n;B=p;h.fitToView&&(n=Math.min(a.w-z,n),p=Math.min(a.h-t,p));z=a.w-y;r=a.h-r;h.aspectRatio?(c>n&&(c=n,j=l(c/D)),j>p&&(j=p,c=l(j*D)),c<m&&(c=m,j=l(c/D)),j<u&&(j=u,c=l(j*D))):(c=Math.max(m,Math.min(c,n)),h.autoHeight&&
"iframe"!==h.type&&(g.width(c),j=g.height()),j=Math.max(u,Math.min(j,p)));if(h.fitToView)if(g.width(c).height(j),e.width(c+x),a=e.width(),y=e.height(),h.aspectRatio)for(;(a>z||y>r)&&(c>m&&j>u)&&!(19<d++);)j=Math.max(u,Math.min(p,j-10)),c=l(j*D),c<m&&(c=m,j=l(c/D)),c>n&&(c=n,j=l(c/D)),g.width(c).height(j),e.width(c+x),a=e.width(),y=e.height();else c=Math.max(m,Math.min(c,c-(a-z))),j=Math.max(u,Math.min(j,j-(y-r)));q&&("auto"===s&&j<A&&c+x+q<z)&&(c+=q);g.width(c).height(j);e.width(c+x);a=e.width();
y=e.height();e=(a>z||y>r)&&c>m&&j>u;c=h.aspectRatio?c<F&&j<B&&c<C&&j<A:(c<F||j<B)&&(c<C||j<A);f.extend(h,{dim:{width:w(a),height:w(y)},origWidth:C,origHeight:A,canShrink:e,canExpand:c,wPadding:x,hPadding:v,wrapSpace:y-k.outerHeight(!0),skinSpace:k.height()-j});!H&&(h.autoHeight&&j>u&&j<p&&!c)&&g.height("auto")},_getPosition:function(a){var d=b.current,e=b.getViewport(),c=d.margin,f=b.wrap.width()+c[1]+c[3],g=b.wrap.height()+c[0]+c[2],c={position:"absolute",top:c[0],left:c[3]};d.autoCenter&&d.fixed&&
!a&&g<=e.h&&f<=e.w?c.position="fixed":d.locked||(c.top+=e.y,c.left+=e.x);c.top=w(Math.max(c.top,c.top+(e.h-g)*d.topRatio));c.left=w(Math.max(c.left,c.left+(e.w-f)*d.leftRatio));return c},_afterZoomIn:function(){var a=b.current;a&&(b.isOpen=b.isOpened=!0,b.wrap.css("overflow","visible").addClass("fancybox-opened"),b.update(),(a.closeClick||a.nextClick&&1<b.group.length)&&b.inner.css("cursor","pointer").bind("click.fb",function(d){!f(d.target).is("a")&&!f(d.target).parent().is("a")&&(d.preventDefault(),
b[a.closeClick?"close":"next"]())}),a.closeBtn&&f(a.tpl.closeBtn).appendTo(b.skin).bind("click.fb",function(a){a.preventDefault();b.close()}),a.arrows&&1<b.group.length&&((a.loop||0<a.index)&&f(a.tpl.prev).appendTo(b.outer).bind("click.fb",b.prev),(a.loop||a.index<b.group.length-1)&&f(a.tpl.next).appendTo(b.outer).bind("click.fb",b.next)),b.trigger("afterShow"),!a.loop&&a.index===a.group.length-1?b.play(!1):b.opts.autoPlay&&!b.player.isActive&&(b.opts.autoPlay=!1,b.play()))},_afterZoomOut:function(a){a=
a||b.current;f(".fancybox-wrap").trigger("onReset").remove();f.extend(b,{group:{},opts:{},router:!1,current:null,isActive:!1,isOpened:!1,isOpen:!1,isClosing:!1,wrap:null,skin:null,outer:null,inner:null});b.trigger("afterClose",a)}});b.transitions={getOrigPosition:function(){var a=b.current,d=a.element,e=a.orig,c={},f=50,g=50,h=a.hPadding,j=a.wPadding,m=b.getViewport();!e&&(a.isDom&&d.is(":visible"))&&(e=d.find("img:first"),e.length||(e=d));t(e)?(c=e.offset(),e.is("img")&&(f=e.outerWidth(),g=e.outerHeight())):
(c.top=m.y+(m.h-g)*a.topRatio,c.left=m.x+(m.w-f)*a.leftRatio);if("fixed"===b.wrap.css("position")||a.locked)c.top-=m.y,c.left-=m.x;return c={top:w(c.top-h*a.topRatio),left:w(c.left-j*a.leftRatio),width:w(f+j),height:w(g+h)}},step:function(a,d){var e,c,f=d.prop;c=b.current;var g=c.wrapSpace,h=c.skinSpace;if("width"===f||"height"===f)e=d.end===d.start?1:(a-d.start)/(d.end-d.start),b.isClosing&&(e=1-e),c="width"===f?c.wPadding:c.hPadding,c=a-c,b.skin[f](l("width"===f?c:c-g*e)),b.inner[f](l("width"===
f?c:c-g*e-h*e))},zoomIn:function(){var a=b.current,d=a.pos,e=a.openEffect,c="elastic"===e,k=f.extend({opacity:1},d);delete k.position;c?(d=this.getOrigPosition(),a.openOpacity&&(d.opacity=0.1)):"fade"===e&&(d.opacity=0.1);b.wrap.css(d).animate(k,{duration:"none"===e?0:a.openSpeed,easing:a.openEasing,step:c?this.step:null,complete:b._afterZoomIn})},zoomOut:function(){var a=b.current,d=a.closeEffect,e="elastic"===d,c={opacity:0.1};e&&(c=this.getOrigPosition(),a.closeOpacity&&(c.opacity=0.1));b.wrap.animate(c,
{duration:"none"===d?0:a.closeSpeed,easing:a.closeEasing,step:e?this.step:null,complete:b._afterZoomOut})},changeIn:function(){var a=b.current,d=a.nextEffect,e=a.pos,c={opacity:1},f=b.direction,g;e.opacity=0.1;"elastic"===d&&(g="down"===f||"up"===f?"top":"left","down"===f||"right"===f?(e[g]=w(l(e[g])-200),c[g]="+=200px"):(e[g]=w(l(e[g])+200),c[g]="-=200px"));"none"===d?b._afterZoomIn():b.wrap.css(e).animate(c,{duration:a.nextSpeed,easing:a.nextEasing,complete:b._afterZoomIn})},changeOut:function(){var a=
b.previous,d=a.prevEffect,e={opacity:0.1},c=b.direction;"elastic"===d&&(e["down"===c||"up"===c?"top":"left"]=("up"===c||"left"===c?"-":"+")+"=200px");a.wrap.animate(e,{duration:"none"===d?0:a.prevSpeed,easing:a.prevEasing,complete:function(){f(this).trigger("onReset").remove()}})}};b.helpers.overlay={defaults:{closeClick:!0,speedOut:200,showEarly:!0,css:{},locked:!s,fixed:!0},overlay:null,fixed:!1,el:f("html"),create:function(a){a=f.extend({},this.defaults,a);this.overlay&&this.close();this.overlay=
f('<div class="fancybox-overlay"></div>').appendTo(b.coming?b.coming.parent:a.parent);this.fixed=!1;a.fixed&&b.defaults.fixed&&(this.overlay.addClass("fancybox-overlay-fixed"),this.fixed=!0)},open:function(a){var d=this;a=f.extend({},this.defaults,a);this.overlay?this.overlay.unbind(".overlay").width("auto").height("auto"):this.create(a);this.fixed||(n.bind("resize.overlay",f.proxy(this.update,this)),this.update());a.closeClick&&this.overlay.bind("click.overlay",function(a){if(f(a.target).hasClass("fancybox-overlay"))return b.isActive?
b.close():d.close(),!1});this.overlay.css(a.css).show()},close:function(){var a,b;n.unbind("resize.overlay");this.el.hasClass("fancybox-lock")&&(f(".fancybox-margin").removeClass("fancybox-margin"),a=n.scrollTop(),b=n.scrollLeft(),this.el.removeClass("fancybox-lock"),n.scrollTop(a).scrollLeft(b));f(".fancybox-overlay").remove().hide();f.extend(this,{overlay:null,fixed:!1})},update:function(){var a="100%",b;this.overlay.width(a).height("100%");I?(b=Math.max(G.documentElement.offsetWidth,G.body.offsetWidth),
p.width()>b&&(a=p.width())):p.width()>n.width()&&(a=p.width());this.overlay.width(a).height(p.height())},onReady:function(a,b){var e=this.overlay;f(".fancybox-overlay").stop(!0,!0);e||this.create(a);a.locked&&(this.fixed&&b.fixed)&&(e||(this.margin=p.height()>n.height()?f("html").css("margin-right").replace("px",""):!1),b.locked=this.overlay.append(b.wrap),b.fixed=!1);!0===a.showEarly&&this.beforeShow.apply(this,arguments)},beforeShow:function(a,b){var e,c;b.locked&&(!1!==this.margin&&(f("*").filter(function(){return"fixed"===
f(this).css("position")&&!f(this).hasClass("fancybox-overlay")&&!f(this).hasClass("fancybox-wrap")}).addClass("fancybox-margin"),this.el.addClass("fancybox-margin")),e=n.scrollTop(),c=n.scrollLeft(),this.el.addClass("fancybox-lock"),n.scrollTop(e).scrollLeft(c));this.open(a)},onUpdate:function(){this.fixed||this.update()},afterClose:function(a){this.overlay&&!b.coming&&this.overlay.fadeOut(a.speedOut,f.proxy(this.close,this))}};b.helpers.title={defaults:{type:"float",position:"bottom"},beforeShow:function(a){var d=
b.current,e=d.title,c=a.type;f.isFunction(e)&&(e=e.call(d.element,d));if(q(e)&&""!==f.trim(e)){d=f('<div class="fancybox-title fancybox-title-'+c+'-wrap">'+e+"</div>");switch(c){case "inside":c=b.skin;break;case "outside":c=b.wrap;break;case "over":c=b.inner;break;default:c=b.skin,d.appendTo("body"),I&&d.width(d.width()),d.wrapInner('<span class="child"></span>'),b.current.margin[2]+=Math.abs(l(d.css("margin-bottom")))}d["top"===a.position?"prependTo":"appendTo"](c)}}};f.fn.fancybox=function(a){var d,
e=f(this),c=this.selector||"",k=function(g){var h=f(this).blur(),j=d,k,l;!g.ctrlKey&&(!g.altKey&&!g.shiftKey&&!g.metaKey)&&!h.is(".fancybox-wrap")&&(k=a.groupAttr||"data-fancybox-group",l=h.attr(k),l||(k="rel",l=h.get(0)[k]),l&&(""!==l&&"nofollow"!==l)&&(h=c.length?f(c):e,h=h.filter("["+k+'="'+l+'"]'),j=h.index(this)),a.index=j,!1!==b.open(h,a)&&g.preventDefault())};a=a||{};d=a.index||0;!c||!1===a.live?e.unbind("click.fb-start").bind("click.fb-start",k):p.undelegate(c,"click.fb-start").delegate(c+
":not('.fancybox-item, .fancybox-nav')","click.fb-start",k);this.filter("[data-fancybox-start=1]").trigger("click");return this};p.ready(function(){var a,d;f.scrollbarWidth===v&&(f.scrollbarWidth=function(){var a=f('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),b=a.children(),b=b.innerWidth()-b.height(99).innerWidth();a.remove();return b});if(f.support.fixedPosition===v){a=f.support;d=f('<div style="position:fixed;top:20px;"></div>').appendTo("body");var e=20===
d[0].offsetTop||15===d[0].offsetTop;d.remove();a.fixedPosition=e}f.extend(b.defaults,{scrollbarWidth:f.scrollbarWidth(),fixed:f.support.fixedPosition,parent:f("body")});a=f(r).width();J.addClass("fancybox-lock-test");d=f(r).width();J.removeClass("fancybox-lock-test");f("<style type='text/css'>.fancybox-margin{margin-right:"+(d-a)+"px;}</style>").appendTo("head")})})(window,document,jQuery);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:65:"/local/templates/bitlate_pro/js/fancybox-thumbs.js?15088532873836";s:6:"source";s:50:"/local/templates/bitlate_pro/js/fancybox-thumbs.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
 /*!
 * Thumbnail helper for fancyBox
 * version: 1.0.7 (Mon, 01 Oct 2012)
 * @requires fancyBox v2.0 or later
 *
 * Usage:
 *     $(".fancybox").fancybox({
 *         helpers : {
 *             thumbs: {
 *                 width  : 50,
 *                 height : 50
 *             }
 *         }
 *     });
 *
 */
(function ($) {
	//Shortcut for fancyBox object
	var F = $.fancybox;

	//Add helper object
	F.helpers.thumbs = {
		defaults : {
			width    : 50,       // thumbnail width
			height   : 50,       // thumbnail height
			position : 'bottom', // 'top' or 'bottom'
			source   : function ( item ) {  // function to obtain the URL of the thumbnail image
				var href;

				if (item.element) {
					href = $(item.element).find('img').attr('src');
				}

				if (!href && item.type === 'image' && item.href) {
					href = item.href;
				}

				return href;
			}
		},

		wrap  : null,
		list  : null,
		width : 0,

		init: function (opts, obj) {
			var that = this,
				list,
				thumbWidth  = opts.width,
				thumbHeight = opts.height,
				thumbSource = opts.source;

			//Build list structure
			list = '';

			for (var n = 0; n < obj.group.length; n++) {
				list += '<li><a style="width:' + thumbWidth + 'px;height:' + thumbHeight + 'px;" href="javascript:jQuery.fancybox.jumpto(' + n + ');"></a></li>';
			}

			this.wrap = $('<div id="fancybox-thumbs"></div>').addClass(opts.position).appendTo('body');
			this.list = $('<ul>' + list + '</ul>').appendTo(this.wrap);

			//Load each thumbnail
			$.each(obj.group, function (i) {
				var href = thumbSource( obj.group[ i ] );

				if (!href) {
					return;
				}

				$("<img />").load(function () {
					var width  = this.width,
						height = this.height,
						widthRatio, heightRatio, parent;

					if (!that.list || !width || !height) {
						return;
					}

					//Calculate thumbnail width/height and center it
					widthRatio  = width / thumbWidth;
					heightRatio = height / thumbHeight;

					parent = that.list.children().eq(i).find('a');

					if (widthRatio >= 1 && heightRatio >= 1) {
						if (widthRatio > heightRatio) {
							width  = Math.floor(width / heightRatio);
							height = thumbHeight;

						} else {
							width  = thumbWidth;
							height = Math.floor(height / widthRatio);
						}
					}

					$(this).css({
						width  : width,
						height : height,
						top    : Math.floor(thumbHeight / 2 - height / 2),
						left   : Math.floor(thumbWidth / 2 - width / 2)
					});

					parent.width(thumbWidth).height(thumbHeight);

					$(this).hide().appendTo(parent).fadeIn(300);

				}).attr('src', href);
			});

			//Set initial width
			this.width = this.list.children().eq(0).outerWidth(true);

			this.list.width(this.width * (obj.group.length + 1)).css('left', Math.floor($(window).width() * 0.5 - (obj.index * this.width + this.width * 0.5)));
		},

		beforeLoad: function (opts, obj) {
			//Remove self if gallery do not have at least two items
			if (obj.group.length < 2) {
				obj.helpers.thumbs = false;

				return;
			}

			//Increase bottom margin to give space for thumbs
			obj.margin[ opts.position === 'top' ? 0 : 2 ] += ((opts.height) + 15);
		},

		afterShow: function (opts, obj) {
			//Check if exists and create or update list
			if (this.list) {
				this.onUpdate(opts, obj);

			} else {
				this.init(opts, obj);
			}

			//Set active element
			this.list.children().removeClass('active').eq(obj.index).addClass('active');
		},

		//Center list
		onUpdate: function (opts, obj) {
			if (this.list) {
				this.list.stop(true).animate({
					'left': Math.floor($(window).width() * 0.5 - (obj.index * this.width + this.width * 0.5))
				}, 150);
			}
		},

		beforeClose: function () {
			if (this.wrap) {
				this.wrap.remove();
			}

			this.wrap  = null;
			this.list  = null;
			this.width = 0;
		}
	}

}(jQuery));
/* End */
;
; /* Start:"a:4:{s:4:"full";s:61:"/local/templates/bitlate_pro/js/zoomsl.min.js?150885328712313";s:6:"source";s:45:"/local/templates/bitlate_pro/js/zoomsl.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*www.zoomsl.tw1.ru Sergey Zaragulov skype: deeserge icq: 287295769 sergeland@mail.ru*/
(function(e){var k=!0,r=!1;e.fn.imagezoomsl=function(d){d=d||{};return this.each(function(){if(!e(this).is("img"))return k;var c=this;setTimeout(function(){e(new Image).load(function(){y.F(e(c),d)}).attr("src",e(c).attr("src"))},30)})};var y={};e.extend(y,{dsetting:{loadinggif:"",loadopacity:0.1,loadbackground:"#878787",cursorshade:k,magnifycursor:"crosshair",cursorshadecolor:"#fff",cursorshadeopacity:0.3,cursorshadeborder:"1px solid black",zindex:"",stepzoom:0.5,zoomrange:[2,2],zoomstart:2,disablewheel:k,showstatus:k,
showstatustime:2E3,statusdivborder:"1px solid black",statusdivbackground:"#C0C0C0",statusdivpadding:"4px",statusdivfont:"bold 13px Arial",statusdivopacity:0.8,magnifierpos:"right",magnifiersize:[0,0],magnifiereffectanimate:"showIn",innerzoom:r,innerzoommagnifier:r,descarea:r,leftoffset:15,rightoffset:15,switchsides:k,magnifierborder:"1px solid black",textdnbackground:"#fff",textdnpadding:"10px",textdnfont:"13px/20px cursive",scrollspeedanimate:5,zoomspeedanimate:7,loopspeedanimate:2.5,magnifierspeedanimate:350,
classmagnifier:"magnifier",classcursorshade:"cursorshade",classstatusdiv:"statusdiv",classtextdn:"textdn"},U:-1!=navigator.userAgent.indexOf("MSIE")?k:r,T:function(d){var c=0,a;d.parents().add(d).each(function(){a=e(this).css("zIndex");a=isNaN(a)?0:+a;c=Math.max(c,a)});return c},L:function(d,c,a){if("left"==d)return d=-a.f.b*a.k+a.e.b,0<c?0:c<d?d:c;d=-a.f.d*a.k+a.e.d;return 0<c?0:c<d?d:c},H:function(d){var c=this,a=d.data("specs");if(a){var e=a.r.offsetsl(),s=c.a.g-e.left,l=c.a.i-e.top;c.a.B+=(c.a.g-
c.a.B)/2.45342;c.a.C+=(c.a.i-c.a.C)/2.45342;a.G.css({left:c.a.B-10,top:c.a.C+20});var h=Math.round(a.e.b/a.k),b=Math.round(a.e.d/a.k);c.a.z+=(s-c.a.z)/a.c.loopspeedanimate;c.a.A+=(l-c.a.A)/a.c.loopspeedanimate;a.K.css({left:a.f.b>h?Math.min(a.f.b-h,Math.max(0,c.a.z-h/2))+e.left-a.w.t.N:e.left-a.w.t.N,top:a.f.d>b?Math.min(a.f.d-b,Math.max(0,c.a.A-b/2))+e.top-a.w.t.R:e.top-a.w.t.R});a.c.innerzoommagnifier&&(c.a.p+=(c.a.g-c.a.p)/a.c.loopspeedanimate,c.a.q+=(c.a.i-c.a.q)/a.c.loopspeedanimate,a.l.css({left:c.a.p-
Math.round(a.e.b/2),top:c.a.q-Math.round(a.e.d/2)}),a.s.css({left:c.a.p-Math.round(a.e.b/2),top:c.a.q+a.e.d/2}));c.a.u+=(s-c.a.u)/a.c.scrollspeedanimate;c.a.v+=(l-c.a.v)/a.c.scrollspeedanimate;a.J.css({left:c.L("left",-c.a.u*a.k+a.e.b/2,a),top:c.L("top",-c.a.v*a.k+a.e.d/2,a)});c.a.n=setTimeout(function(){c.H(d)},30)}},I:function(d){var c=this,a=d.data("specs");a&&(a.h+=(a.k-a.h)/a.c.zoomspeedanimate,a.h=Math.round(1E3*a.h)/1E3,a.K.css({width:a.f.b>Math.round(a.e.b/a.h)?Math.round(a.e.b/a.h):a.f.b,
height:a.f.d>Math.round(a.e.d/a.h)?Math.round(a.e.d/a.h):a.f.d}),a.J.css({width:Math.round(a.h*a.m.b*(a.f.b/a.m.b)),height:Math.round(a.h*a.m.d*(a.f.d/a.m.d))}),c.a.o=setTimeout(function(){c.I(d)},30))},a:{},P:function(d){function c(){}var a=d.data("specs");d=a.c.magnifiersize[0];var p=a.c.magnifiersize[1],s,l=a.r.offsetsl(),h=0,b=0;s=l.left+("left"===a.c.magnifierpos?-a.e.b-a.c.leftoffset:a.f.b+a.c.rightoffset);a.c.switchsides&&!a.c.innerzoom&&("left"!==a.c.magnifierpos&&s+a.e.b+a.c.leftoffset>=
e(window).width()&&l.left-a.e.b>=a.c.leftoffset?s=l.left-a.e.b-a.c.leftoffset:"left"===a.c.magnifierpos&&0>s&&(s=l.left+a.f.b+a.c.rightoffset));h=s;b=l.top;a.l.css({visibility:"visible",display:"none"});a.c.descarea&&(h=e(a.c.descarea).offsetsl().left,b=e(a.c.descarea).offsetsl().top);a.c.innerzoommagnifier&&(h=this.a.g-Math.round(a.e.b/2),b=this.a.i-Math.round(a.e.d/2));c=function(){a.s.stop(k,k).fadeIn(a.c.magnifierspeedanimate);a.c.innerzoommagnifier||a.s.css({left:h,top:b+p})};a.c.innerzoom&&
(h=l.left,b=l.top,c=function(){a.r.css({visibility:"hidden"});a.s.css({left:h,top:b+p}).stop(k,k).fadeIn(a.c.magnifierspeedanimate)});switch(a.c.magnifiereffectanimate){case "slideIn":a.l.css({left:h,top:b-p/3,width:d,height:p}).stop(k,k).show().animate({top:b},a.c.magnifierspeedanimate,"easeOutBounceSL",c);break;case "showIn":a.l.css({left:l.left+Math.round(a.f.b/2),top:l.top+Math.round(a.f.d/2),width:Math.round(a.e.b/5),height:Math.round(a.e.d/5)}).stop(k,k).show().css({opacity:"0.1"}).animate({left:h,
top:b,opacity:"1",width:d,height:p},a.c.magnifierspeedanimate,c);break;default:a.l.css({left:h,top:b,width:d,height:p}).stop(k,k).fadeIn(a.c.magnifierspeedanimate,c)}a.c.showstatus&&(a.Q||a.M)?a.G.html(a.Q+'<div style="font-size:80%">'+a.M+"</div>").stop(k,k).fadeIn().delay(a.c.showstatustime).fadeOut("slow"):a.G.hide()},S:function(d){var c=d.data("specs");d=c.r.offsetsl();switch(c.c.magnifiereffectanimate){case "showIn":c.l.stop(k,k).animate({left:d.left+Math.round(c.f.b/2),top:d.top+Math.round(c.f.d/
2),opacity:"0.1",width:Math.round(c.e.b/5),height:Math.round(c.e.d/5)},c.c.magnifierspeedanimate,function(){c.l.hide()});break;default:c.l.stop(k,k).fadeOut(c.c.magnifierspeedanimate)}},F:function(d,c,a){function p(){this.i=this.g=0}function s(a){g.data("specs",{c:b,Q:y,M:E,r:d,l:u,J:a,G:n,K:q,s:t,f:m,m:{b:a.width(),d:a.height()},e:{b:u.width(),d:u.height()},w:{b:q.width(),d:q.height(),t:{N:parseInt(q.css("border-left-width"))||0,R:parseInt(q.css("border-top-width"))||0}},h:B,k:B})}function l(a){return!a.complete||
"undefined"!==typeof a.naturalWidth&&0===a.naturalWidth?r:k}function h(a){var b=a||window.event,c=[].slice.call(arguments,1),d=0,f=0,g=0,h=0,h=0;a=e.event.fix(b);a.type="mousewheel";b.wheelDelta&&(d=b.wheelDelta);b.detail&&(d=-1*b.detail);b.deltaY&&(d=g=-1*b.deltaY);b.deltaX&&(f=b.deltaX,d=-1*f);void 0!==b.wheelDeltaY&&(g=b.wheelDeltaY);void 0!==b.wheelDeltaX&&(f=-1*b.wheelDeltaX);h=Math.abs(d);if(!z||h<z)z=h;h=Math.max(Math.abs(g),Math.abs(f));if(!w||h<w)w=h;b=0<d?"floor":"ceil";d=Math[b](d/z);f=
Math[b](f/w);g=Math[b](g/w);c.unshift(a,d,f,g);return(e.event.dispatch||e.event.handle).apply(this,c)}var b=e.extend({},this.dsetting,c),x=b.zindex||this.T(d),m={b:d.width(),d:d.height()},p=new p,y=d.attr("data-title")?d.attr("data-title"):"",E=d.attr("data-help")?d.attr("data-help"):"",C=d.attr("data-text-bottom")?d.attr("data-text-bottom"):"",f=this,B,v,u,q,n,g,t;if(0===m.d||0===m.b)e(new Image).load(function(){f.F(d,c)}).attr("src",d.attr("src"));else{d.css({visibility:"visible"});b.j=d.attr("data-large")||
d.attr("src");for(v in b)""===b[v]&&(b[v]=this.dsetting[v]);B=b.zoomrange[0]<b.zoomstart?b.zoomstart:b.zoomrange[0];if("0,0"===b.magnifiersize.toString()||""===b.magnifiersize.toString())b.magnifiersize=b.innerzoommagnifier?[m.b/2,m.d/2]:[m.b,m.d];b.descarea&&e(b.descarea).length?0===e(b.descarea).width()||0===e(b.descarea).height()?b.descarea=r:b.magnifiersize=[e(b.descarea).width(),e(b.descarea).height()]:b.descarea=r;b.innerzoom&&(b.magnifiersize=[m.b,m.d],c.cursorshade||(b.cursorshade=r),c.scrollspeedanimate||
(b.scrollspeedanimate=10));if(b.innerzoommagnifier){if(!c.magnifycursor&&(window.chrome||window.sidebar))b.magnifycursor="none";b.cursorshade=r;b.magnifiereffectanimate="fadeIn"}v=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"];var A="onwheel"in document||9<=document.documentMode?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],z,w;if(e.event.fixHooks)for(var D=v.length;D;)e.event.fixHooks[v[--D]]=e.event.mouseHooks;e.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var a=
A.length;a;)this.addEventListener(A[--a],h,r);else this.onmousewheel=h},teardown:function(){if(this.removeEventListener)for(var a=A.length;a;)this.removeEventListener(A[--a],h,r);else this.onmousewheel=null}};e.fn.offsetsl=function(){var a=this.get(0);if(a.getBoundingClientRect)a=this.offset();else{for(var b=0,c=0;a;)b+=parseInt(a.offsetTop),c+=parseInt(a.offsetLeft),a=a.offsetParent;a={top:b,left:c}}return a};e.easing.easeOutBounceSL=function(a,b,c,d,e){return(b/=e)<1/2.75?d*7.5625*b*b+c:b<2/2.75?
d*(7.5625*(b-=1.5/2.75)*b+0.75)+c:b<2.5/2.75?d*(7.5625*(b-=2.25/2.75)*b+0.9375)+c:d*(7.5625*(b-=2.625/2.75)*b+0.984375)+c};u=e("<div />").attr({"class":b.classmagnifier}).css({position:"absolute",zIndex:x,width:b.magnifiersize[0],height:b.magnifiersize[1],left:-1E4,top:-1E4,visibility:"hidden",overflow:"hidden"}).appendTo(document.body);c.classmagnifier||u.css({border:b.magnifierborder});q=e("<div />");b.cursorshade&&(q.attr({"class":b.classcursorshade}).css({zIndex:x,display:"none",position:"absolute",
width:Math.round(b.magnifiersize[0]/b.zoomstart),height:Math.round(b.magnifiersize[1]/b.zoomstart),top:0,left:0}).appendTo(document.body),c.classcursorshade||q.css({border:b.cursorshadeborder,opacity:b.cursorshadeopacity,backgroundColor:b.cursorshadecolor}));b.loadinggif||(b.loadinggif="");
n=e("<div />").attr({"class":b.classstatusdiv+" preloadevt"}).css({position:"absolute",display:"none",zIndex:x,top:0,left:0}).html('<img src="'+b.loadinggif+'" />').appendTo(document.body);g=e("<div />").attr({"class":"tracker"}).css({zIndex:x,backgroundImage:f.U?"url(cannotbe)":"none",position:"absolute",width:m.b,height:m.d,left:a?d.offsetsl().left:-1E4,top:a?d.offsetsl().top:-1E4}).appendTo(document.body);t=e("<div />");C&&(t.attr({"class":b.classtextdn}).css({position:"absolute",zIndex:x,left:0,
top:0,display:"none"}).html(C).appendTo(document.body),c.classtextdn||t.css({border:b.magnifierborder,background:b.textdnbackground,padding:b.textdnpadding,font:b.textdnfont}),t.css({width:b.magnifiersize[0]-parseInt(t.css("padding-left"))-parseInt(t.css("padding-right"))}));g.data("largeimage",b.j);e(window).bind("resize",function(){var a=d.offsetsl();g.data("loadimgevt")&&g.css({left:a.left,top:a.top});n.filter(".preloadevt").css({left:a.left+m.b/2-n.width()/2,top:a.top+m.d/2-n.height()/2,visibility:"visible"})});
e(document).mousemove(function(a){f.a.D=a.pageX;f.a.g!==f.a.D&&(clearTimeout(f.a.n),clearTimeout(f.a.o),d.css({visibility:"visible"}))});d.mouseover(function(){var a=d.offsetsl();g.css({left:a.left,top:a.top}).show()});g.mouseover(function(a){f.a.g=a.pageX;f.a.i=a.pageY;p.g=a.pageX;p.i=a.pageY;f.a.D=a.pageX;var h=d.offsetsl();a=f.a.g-h.left;h=f.a.i-h.top;f.a.z=a;f.a.A=h;f.a.u=a;f.a.v=h;f.a.p=f.a.g;f.a.q=f.a.i;f.a.B=f.a.g-10;f.a.C=f.a.i+20;g.css({cursor:b.magnifycursor});b.j=d.attr("data-large")||
d.attr("src");n.show();clearTimeout(f.a.n);clearTimeout(f.a.o);b.j!==g.data("largeimage")&&(e(new Image).load(function(){}).attr("src",b.j),e(g).unbind(),e(n).remove(),e(q).remove(),e(u).remove(),e(g).remove(),e(t).remove(),f.F(d,c,k));g.data("loadevt")&&(q.fadeIn(),f.P(g),f.H(g),f.I(g))});g.mousemove(function(a){b.j=d.attr("data-large")||d.attr("src");b.j!==g.data("largeimage")&&(e(new Image).load(function(){}).attr("src",b.j),e(g).unbind(),e(n).remove(),e(q).remove(),e(u).remove(),e(g).remove(),
e(t).remove(),f.F(d,c,k));f.a.g=a.pageX;f.a.i=a.pageY;p.g=a.pageX;p.i=a.pageY;f.a.D=a.pageX});g.mouseout(function(){clearTimeout(f.a.n);clearTimeout(f.a.o);d.css({visibility:"visible"});t.hide();q.add(n.not(".preloadevt")).stop(k,k).hide()});g.one("mouseover",function(){var a=d.offsetsl(),h=e('<img src="'+b.j+'"/>').css({position:"relative",maxWidth:"none"}).appendTo(u);f.O[b.j]||(g.css({opacity:b.loadopacity,background:b.loadbackground}),g.data("loadimgevt",k),n.css({left:a.left+m.b/2-n.width()/
2,top:a.top+m.d/2-n.height()/2,visibility:"visible"}));h.bind("loadevt",function(a,e){if("error"!==e.type){g.mouseout(function(){f.S(g);clearTimeout(f.a.n);clearTimeout(f.a.o);d.css({visibility:"visible"});t.hide();g.hide().css({left:-1E4,top:-1E4})});g.mouseover(function(){l.h=l.k});g.data("loadimgevt",r);g.css({opacity:0,cursor:b.magnifycursor});n.empty();c.classstatusdiv||n.css({border:b.statusdivborder,background:b.statusdivbackground,padding:b.statusdivpadding,font:b.statusdivfont,opacity:b.statusdivopacity});
n.hide().removeClass("preloadevt");f.O[b.j]=k;s(h);p.g==f.a.D&&(q.fadeIn(),f.P(g),clearTimeout(f.a.n),clearTimeout(f.a.o),f.H(g),f.I(g));var l=g.data("specs");h.css({width:b.zoomstart*l.m.b*(m.b/l.m.b),height:b.zoomstart*l.m.d*(m.d/l.m.d)});g.data("loadevt",k);b.zoomrange&&b.zoomrange[1]>b.zoomrange[0]?g.bind("mousewheel",function(a,c){var d=l.k,d="in"==(0>c?"out":"in")?Math.min(d+b.stepzoom,b.zoomrange[1]):Math.max(d-b.stepzoom,b.zoomrange[0]);l.k=d;l.V=c;a.preventDefault()}):b.disablewheel&&g.bind("mousewheel",
function(a){a.preventDefault()})}});l(h.get(0))?h.trigger("loadevt",{type:"load"}):h.bind("load error",function(a){h.trigger("loadevt",a)})})}},O:{}})})(jQuery,window);

/* End */
;
; /* Start:"a:4:{s:4:"full";s:64:"/local/templates/bitlate_pro/js/selectbox.min.js?150885328713567";s:6:"source";s:48:"/local/templates/bitlate_pro/js/selectbox.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/* jQuery Form Styler v1.7.6 | (c) Dimox | https://github.com/Dimox/jQueryFormStyler */
(function(a){"function"===typeof define&&define.amd?define(["jquery"],a):"object"===typeof exports?module.exports=a(require("jquery")):a(jQuery)})(function(a){function v(b,c){this.element=b;this.options=a.extend({},z,c);this.init()}function D(b){if(!a(b.target).parents().hasClass("jq-selectbox")&&"OPTION"!=b.target.nodeName&&a("div.jq-selectbox.opened").length){b=a("div.jq-selectbox.opened");var c=a("div.jq-selectbox__search input",b),f=a("div.jq-selectbox__dropdown",b);b.find("select").data("_styler")
.options.onSelectClosed.call(b);c.length&&c.val("").keyup();f.hide().find("li.sel").addClass("selected");b.removeClass("focused opened dropup dropdown")}}var z={idSuffix:"-styler",filePlaceholder:"\u0424\u0430\u0439\u043b \u043d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d",fileBrowse:"\u041e\u0431\u0437\u043e\u0440...",fileNumber:"\u0412\u044b\u0431\u0440\u0430\u043d\u043e \u0444\u0430\u0439\u043b\u043e\u0432: %s",selectPlaceholder:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435...",
selectSearch:!1,selectSearchLimit:10,selectSearchNotFound:"\u0421\u043e\u0432\u043f\u0430\u0434\u0435\u043d\u0438\u0439 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e",selectSearchPlaceholder:"\u041f\u043e\u0438\u0441\u043a...",selectVisibleOptions:0,singleSelectzIndex:"100",selectSmartPositioning:!0,onSelectOpened:function(){},onSelectClosed:function(){},onFormStyled:function(){}};v.prototype={init:function(){function b(){void 0!==c.attr("id")&&""!==c.attr("id")&&
(this.id=c.attr("id")+f.idSuffix);this.title=c.attr("title");this.classes=c.attr("class");this.data=c.data()}var c=a(this.element),f=this.options,t=navigator.userAgent.match(/(iPad|iPhone|iPod)/i)&&!navigator.userAgent.match(/(Windows\sPhone)/i)?!0:!1,v=navigator.userAgent.match(/Android/i)&&
!navigator.userAgent.match(/(Windows\sPhone)/i)?!0:!1;if(c.is("select")){var C=function(){function C(c){c.off("mousewheel DOMMouseScroll").on("mousewheel DOMMouseScroll",function(c){var h=null;"mousewheel"==c.type?h=-1*c.originalEvent.wheelDelta:"DOMMouseScroll"==c.type&&(h=40*c.originalEvent.detail);h&&(c.stopPropagation(),c.preventDefault(),a(this).scrollTop(h+a(this).scrollTop()))})}function I(){for(var c=0;c<q.length;c++){var a=q.eq(c),b,e="",y=b="",r="",g="",w="",x="",d="";a.prop("selected")&&(e="selected sel");a.is(":disabled")&&
(e="disabled");a.is(":selected:disabled")&&(e="selected sel disabled");void 0!==a.attr("id")&&""!==a.attr("id")&&(y=' id="'+a.attr("id")+f.idSuffix+'"');void 0!==a.attr("title")&&""!==q.attr("title")&&(r=' title="'+a.attr("title")+'"');void 0!==a.attr("class")&&(w=" "+a.attr("class"),d=' data-jqfs-class="'+a.attr("class")+'"');var t=a.data(),k;for(k in t)""!==t[k]&&(g+=" data-"+k+'="'+t[k]+'"');""!==e+w&&(b=' class="'+e+w+'"');b="<li"+d+g+b+r+y+">"+a.html()+"</li>";a.parent().is("optgroup")&&(void 0!==
a.parent().attr("class")&&(x=" "+a.parent().attr("class")),b="<li"+d+g+' class="'+e+w+" option"+x+'"'+r+y+">"+a.html()+"</li>",a.is(":first-child")&&(b='<li class="optgroup'+x+'">'+a.parent().attr("label")+"</li>"+b));F+=b}}function z(){var u=new b,h="",n=c.data("placeholder"),e=c.data("search"),y=c.data("search-limit"),r=c.data("search-not-found"),g=c.data("search-placeholder"),w=c.data("z-index"),x=c.data("smart-positioning");void 0===n&&(n=f.selectPlaceholder);if(void 0===e||""===e)e=f.selectSearch;
if(void 0===y||""===y)y=f.selectSearchLimit;if(void 0===r||""===r)r=f.selectSearchNotFound;void 0===g&&(g=f.selectSearchPlaceholder);if(void 0===w||""===w)w=f.singleSelectzIndex;if(void 0===x||""===x)x=f.selectSmartPositioning;var d=a('<div class="jq-selectbox jqselect"><div class="jq-selectbox__select" style="position: relative"><div class="jq-selectbox__select-text"></div><div class="jq-selectbox__trigger"><div class="jq-selectbox__trigger-arrow"></div></div></div></div>')
.css({display:"inline-block",position:"relative",zIndex:w}).attr({id:u.id,title:u.title}).addClass(u.classes).data(u.data);c.css({margin:0,padding:0}).after(d).prependTo(d);var J=a("div.jq-selectbox__select",d),k=a("div.jq-selectbox__select-text",d),u=q.filter(":selected");I();e&&(h='<div class="jq-selectbox__search"><input type="search" autocomplete="off" placeholder="'+g+'"></div><div class="jq-selectbox__not-found">'+r+"</div>");var l=a('<div class="jq-selectbox__dropdown" style="position: absolute">'+h+'<ul style="position: relative; list-style: none; overflow: auto; overflow-x: hidden">'+F+"</ul></div>");d.append(l);
var p=a("ul",l),m=a("li",l),v=a("input",l),z=a("div.jq-selectbox__not-found",l).hide();m.length<y&&v.parent().hide();""===q.first().text()&&q.first().is(":selected")?k.text(n).addClass("placeholder"):k.text(u.text());var A=0,K=0;m.css({display:"inline-block"});m.each(function(){var c=a(this);c.innerWidth()>A&&(A=c.innerWidth(),K=c.width())});m.css({display:""});k.is(".placeholder")&&k.width()>A?k.width(k.width()):(h=d.clone().appendTo("body").width("auto"),e=h.outerWidth(),h.remove(),e==d.outerWidth()&&k.width(K));A>d.width()&&l.width(A);
""===q.first().text()&&""!==c.data("placeholder")&&m.first().hide();c.css({position:"absolute",left:0,top:0,width:"100%",height:"100%",opacity:0});var G=d.outerHeight(!0),B=v.parent().outerHeight(!0),E=p.css("max-height"),h=m.filter(".selected");1>h.length&&m.first().addClass("selected sel");void 0===m.data("li-height")&&m.data("li-height",m.outerHeight());var H=l.css("top");"auto"==l.css("left")&&l.css({left:0});"auto"==l.css("top")&&(l.css({top:G}),H=G);l.hide();h.length&&(q.first().text()!=u.text()&&d.addClass("changed"),
d.data("jqfs-class",h.data("jqfs-class")),d.addClass(h.data("jqfs-class")));if(c.is(":disabled"))return d.addClass("disabled"),!1;J.click(function(){a("div.jq-selectbox").filter(".opened").length&&f.onSelectClosed.call(a("div.jq-selectbox").filter(".opened"));c.focus();if(!t){var b=a(window),g=m.data("li-height"),h=d.offset().top,e=b.height()-G-(h-b.scrollTop()),k=c.data("visible-options");if(void 0===k||""===k)k=f.selectVisibleOptions;var n=5*g,u=g*k;0<k&&6>k&&(n=u);0===k&&(u="auto");var k=function(){l.height("auto").css({bottom:"auto",
top:H});var a=function(){p.css("max-height",Math.floor((e-20-B)/g)*g)};a();p.css("max-height",u);"none"!=E&&p.css("max-height",E);e<l.outerHeight()+20&&a()},r=function(){l.height("auto").css({top:"auto",bottom:H});var a=function(){p.css("max-height",Math.floor((h-b.scrollTop()-20-B)/g)*g)};a();p.css("max-height",u);"none"!=E&&p.css("max-height",E);h-b.scrollTop()-20<l.outerHeight()+20&&a()};!0===x||1===x?e>n+B+20?(k(),d.removeClass("dropup").addClass("dropdown")):(r(),d.removeClass("dropdown").addClass("dropup")):"dropdown"===x?e>n+B+20&&(k(),d.removeClass("dropup").addClass("dropdown")):"dropup"===x&&(r(),d.removeClass("dropdown").addClass("dropup"));
d.offset().left+l.outerWidth()>b.width()&&l.css({left:"auto",right:0});a("div.jqselect").css({zIndex:w-1}).removeClass("opened");d.css({zIndex:w});l.is(":hidden")?(a("div.jq-selectbox__dropdown:visible").hide(),l.show(),d.addClass("opened focused"),f.onSelectOpened.call(d)):(l.hide(),d.removeClass("opened dropup dropdown"),a("div.jq-selectbox").filter(".opened").length&&f.onSelectClosed.call(d));v.length&&(v.val("").keyup(),
z.hide(),v.keyup(function(){var b=a(this).val();m.each(function(){a(this).html().match(new RegExp(".*?"+b+".*?","i"))?a(this).show():a(this).hide()});""===q.first().text()&&""!==c.data("placeholder")&&m.first().hide();1>m.filter(":visible").length?z.show():z.hide()}));m.filter(".selected").length&&(""===c.val()?p.scrollTop(0):(0!==p.innerHeight()/g%2&&(g/=2),p.scrollTop(p.scrollTop()+m.filter(".selected").position().top-p.innerHeight()/2+g)));C(p)}});m.hover(function(){a(this).siblings().removeClass("selected")});
m.filter(".selected").text();m.filter(":not(.disabled):not(.optgroup)").click(function(){c.focus();var b=a(this),g=b.text();if(!b.is(".selected")){var e=b.index(),e=e-b.prevAll(".optgroup").length;b.addClass("selected sel").siblings().removeClass("selected sel");q.prop("selected",!1).eq(e).prop("selected",!0);k.text(g);d.data("jqfs-class")&&d.removeClass(d.data("jqfs-class"));d.data("jqfs-class",b.data("jqfs-class"));d.addClass(b.data("jqfs-class"));c.change()}l.hide();d.removeClass("opened dropup dropdown");
f.onSelectClosed.call(d)});l.mouseout(function(){a("li.sel",l).addClass("selected")});c.on("change.styler",function(){k.text(q.filter(":selected").text()).removeClass("placeholder");m.removeClass("selected sel").not(".optgroup").eq(c[0].selectedIndex).addClass("selected sel");q.first().text()!=m.filter(".selected").text()?d.addClass("changed"):d.removeClass("changed")}).on("focus.styler",function(){d.addClass("focused");a("div.jqselect").not(".focused").removeClass("opened dropup dropdown").find("div.jq-selectbox__dropdown").hide()}).on("blur.styler",
function(){d.removeClass("focused")}).on("keydown.styler keyup.styler",function(a){var b=m.data("li-height");""===c.val()?k.text(n).addClass("placeholder"):k.text(q.filter(":selected").text());m.removeClass("selected sel").not(".optgroup").eq(c[0].selectedIndex).addClass("selected sel");if(38==a.which||37==a.which||33==a.which||36==a.which)""===c.val()?p.scrollTop(0):p.scrollTop(p.scrollTop()+m.filter(".selected").position().top);40!=a.which&&39!=a.which&&34!=a.which&&35!=a.which||p.scrollTop(p.scrollTop()+
m.filter(".selected").position().top-p.innerHeight()+b);13==a.which&&(a.preventDefault(),l.hide(),d.removeClass("opened dropup dropdown"),f.onSelectClosed.call(d))}).on("keydown.styler",function(a){32==a.which&&(a.preventDefault(),J.click())});D.registered||(a(document).on("click",D),D.registered=!0)}function L(){var f=new b,h=a('<div class="jq-select-multiple jqselect"></div>').css({display:"inline-block",position:"relative"}).attr({id:f.id,title:f.title}).addClass(f.classes).data(f.data);c.css({margin:0,padding:0}).after(h);
I();h.append("<ul>"+F+"</ul>");var n=a("ul",h).css({position:"relative","overflow-x":"hidden","-webkit-overflow-scrolling":"touch"}),e=a("li",h).attr("unselectable","on"),f=c.attr("size"),t=n.outerHeight(),r=e.outerHeight();void 0!==f&&0<f?n.css({height:r*f}):n.css({height:4*r});t>h.height()&&(n.css("overflowY","scroll"),C(n),e.filter(".selected").length&&n.scrollTop(n.scrollTop()+e.filter(".selected").position().top));c.prependTo(h).css({position:"absolute",left:0,top:0,width:"100%",height:"100%",
opacity:0});if(c.is(":disabled"))h.addClass("disabled"),q.each(function(){a(this).is(":selected")&&e.eq(a(this).index()).addClass("selected")});else if(e.filter(":not(.disabled):not(.optgroup)").click(function(b){c.focus();var g=a(this);b.ctrlKey||b.metaKey||g.addClass("selected");b.shiftKey||g.addClass("first");b.ctrlKey||b.metaKey||b.shiftKey||g.siblings().removeClass("selected first");if(b.ctrlKey||b.metaKey)g.is(".selected")?g.removeClass("selected first"):g.addClass("selected first"),g.siblings().removeClass("first");
if(b.shiftKey){var f=!1,d=!1;g.siblings().removeClass("selected").siblings(".first").addClass("selected");g.prevAll().each(function(){a(this).is(".first")&&(f=!0)});g.nextAll().each(function(){a(this).is(".first")&&(d=!0)});f&&g.prevAll().each(function(){if(a(this).is(".selected"))return!1;a(this).not(".disabled, .optgroup").addClass("selected")});d&&g.nextAll().each(function(){if(a(this).is(".selected"))return!1;a(this).not(".disabled, .optgroup").addClass("selected")});1==e.filter(".selected").length&&
g.addClass("first")}q.prop("selected",!1);e.filter(".selected").each(function(){var b=a(this),c=b.index();b.is(".option")&&(c-=b.prevAll(".optgroup").length);q.eq(c).prop("selected",!0)});c.change()}),q.each(function(b){a(this).data("optionIndex",b)}),c.on("change.styler",function(){e.removeClass("selected");var b=[];q.filter(":selected").each(function(){b.push(a(this).data("optionIndex"))});e.not(".optgroup").filter(function(c){return-1<a.inArray(c,b)}).addClass("selected")}).on("focus.styler",function(){h.addClass("focused")}).on("blur.styler",
function(){h.removeClass("focused")}),t>h.height())c.on("keydown.styler",function(a){38!=a.which&&37!=a.which&&33!=a.which||n.scrollTop(n.scrollTop()+e.filter(".selected").position().top-r);40!=a.which&&39!=a.which&&34!=a.which||n.scrollTop(n.scrollTop()+e.filter(".selected:last").position().top-n.innerHeight()+2*r)})}var q=a("option",c),F="";c.is("[multiple]")?v||t||L():z()};C();c.on("refresh",function(){c.off(".styler").parent().before(c).remove();C()})}else if(c.is(":reset"))c.on("click",function(){setTimeout(function(){c.closest("form").find("input, select").trigger("refresh")},
1)})},destroy:function(){var b=a(this.element);b.is(":checkbox")||b.is(":radio")?(b.removeData("_styler").off(".styler refresh").removeAttr("style").parent().before(b).remove(),b.closest("label").add('label[for="'+b.attr("id")+'"]').off(".styler")):b.is('input[type="number"]')?b.removeData("_styler").off(".styler refresh").closest(".jq-number").before(b).remove():(b.is(":file")||b.is("select"))&&b.removeData("_styler").off(".styler refresh").removeAttr("style").parent().before(b).remove()}};a.fn.styler=function(b){var c=
arguments;if(void 0===b||"object"===typeof b)return this.each(function(){a.data(this,"_styler")||a.data(this,"_styler",new v(this,b))}).promise().done(function(){var b=a(this[0]).data("_styler");b&&b.options.onFormStyled.call()}),this;if("string"===typeof b&&"_"!==b[0]&&"init"!==b){var f;this.each(function(){var t=a.data(this,"_styler");t instanceof v&&"function"===typeof t[b]&&(f=t[b].apply(t,Array.prototype.slice.call(c,1)))});return void 0!==f?f:this}};D.registered=!1});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:58:"/local/templates/bitlate_pro/js/mask.min.js?15088532876318";s:6:"source";s:43:"/local/templates/bitlate_pro/js/mask.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
// jQuery Mask Plugin v1.14.0
// github.com/igorescobar/jQuery-Mask-Plugin
(function(b){"function"===typeof define&&define.amd?define(["jquery"],b):"object"===typeof exports?module.exports=b(require("jquery")):b(jQuery||Zepto)})(function(b){var y=function(a,e,d){var c={invalid:[],getCaret:function(){try{var r,b=0,e=a.get(0),d=document.selection,f=e.selectionStart;if(d&&-1===navigator.appVersion.indexOf("MSIE 10"))r=d.createRange(),r.moveStart("character",-c.val().length),b=r.text.length;else if(f||"0"===f)b=f;return b}catch(g){}},setCaret:function(r){try{if(a.is(":focus")){var c,
b=a.get(0);b.setSelectionRange?(b.focus(),b.setSelectionRange(r,r)):(c=b.createTextRange(),c.collapse(!0),c.moveEnd("character",r),c.moveStart("character",r),c.select())}}catch(e){}},events:function(){a.on("keydown.mask",function(c){a.data("mask-keycode",c.keyCode||c.which)}).on(b.jMaskGlobals.useInput?"input.mask":"keyup.mask",c.behaviour).on("paste.mask drop.mask",function(){setTimeout(function(){a.keydown().keyup()},100)}).on("change.mask",function(){a.data("changed",!0)}).on("blur.mask",function(){n===
c.val()||a.data("changed")||a.trigger("change");a.data("changed",!1)}).on("blur.mask",function(){n=c.val()}).on("focus.mask",function(a){!0===d.selectOnFocus&&b(a.target).select()}).on("focusout.mask",function(){d.clearIfNotMatch&&!p.test(c.val())&&c.val("")})},getRegexMask:function(){for(var a=[],c,b,d,f,l=0;l<e.length;l++)(c=g.translation[e.charAt(l)])?(b=c.pattern.toString().replace(/.{1}$|^.{1}/g,""),d=c.optional,(c=c.recursive)?(a.push(e.charAt(l)),f={digit:e.charAt(l),pattern:b}):a.push(d||
c?b+"?":b)):a.push(e.charAt(l).replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"));a=a.join("");f&&(a=a.replace(new RegExp("("+f.digit+"(.*"+f.digit+")?)"),"($1)?").replace(new RegExp(f.digit,"g"),f.pattern));return new RegExp(a)},destroyEvents:function(){a.off("input keydown keyup paste drop blur focusout ".split(" ").join(".mask "))},val:function(c){var b=a.is("input")?"val":"text";if(0<arguments.length){if(a[b]()!==c)a[b](c);b=a}else b=a[b]();return b},getMCharsBeforeCount:function(a,c){for(var b=0,d=0,
f=e.length;d<f&&d<a;d++)g.translation[e.charAt(d)]||(a=c?a+1:a,b++);return b},caretPos:function(a,b,d,h){return g.translation[e.charAt(Math.min(a-1,e.length-1))]?Math.min(a+d-b-h,d):c.caretPos(a+1,b,d,h)},behaviour:function(d){d=d||window.event;c.invalid=[];var e=a.data("mask-keycode");if(-1===b.inArray(e,g.byPassKeys)){var m=c.getCaret(),h=c.val().length,f=c.getMasked(),l=f.length,k=c.getMCharsBeforeCount(l-1)-c.getMCharsBeforeCount(h-1),n=m<h;c.val(f);n&&(8!==e&&46!==e&&(m=c.caretPos(m,h,l,k)),
c.setCaret(m));return c.callbacks(d)}},getMasked:function(a,b){var m=[],h=void 0===b?c.val():b+"",f=0,l=e.length,k=0,n=h.length,q=1,p="push",u=-1,t,w;d.reverse?(p="unshift",q=-1,t=0,f=l-1,k=n-1,w=function(){return-1<f&&-1<k}):(t=l-1,w=function(){return f<l&&k<n});for(;w();){var x=e.charAt(f),v=h.charAt(k),s=g.translation[x];if(s)v.match(s.pattern)?(m[p](v),s.recursive&&(-1===u?u=f:f===t&&(f=u-q),t===u&&(f-=q)),f+=q):s.optional?(f+=q,k-=q):s.fallback?(m[p](s.fallback),f+=q,k-=q):c.invalid.push({p:k,
v:v,e:s.pattern}),k+=q;else{if(!a)m[p](x);v===x&&(k+=q);f+=q}}h=e.charAt(t);l!==n+1||g.translation[h]||m.push(h);return m.join("")},callbacks:function(b){var g=c.val(),m=g!==n,h=[g,b,a,d],f=function(a,b,c){"function"===typeof d[a]&&b&&d[a].apply(this,c)};f("onChange",!0===m,h);f("onKeyPress",!0===m,h);f("onComplete",g.length===e.length,h);f("onInvalid",0<c.invalid.length,[g,b,a,c.invalid,d])}};a=b(a);var g=this,n=c.val(),p;e="function"===typeof e?e(c.val(),void 0,a,d):e;g.mask=e;g.options=d;g.remove=
function(){var b=c.getCaret();c.destroyEvents();c.val(g.getCleanVal());c.setCaret(b-c.getMCharsBeforeCount(b));return a};g.getCleanVal=function(){return c.getMasked(!0)};g.getMaskedVal=function(a){return c.getMasked(!1,a)};g.init=function(e){e=e||!1;d=d||{};g.clearIfNotMatch=b.jMaskGlobals.clearIfNotMatch;g.byPassKeys=b.jMaskGlobals.byPassKeys;g.translation=b.extend({},b.jMaskGlobals.translation,d.translation);g=b.extend(!0,{},g,d);p=c.getRegexMask();!1===e?(d.placeholder&&a.attr("placeholder",d.placeholder),
a.data("mask")&&a.attr("autocomplete","off"),c.destroyEvents(),c.events(),e=c.getCaret(),c.val(c.getMasked()),c.setCaret(e+c.getMCharsBeforeCount(e,!0))):(c.events(),c.val(c.getMasked()))};g.init(!a.is("input"))};b.maskWatchers={};var A=function(){var a=b(this),e={},d=a.attr("data-mask");a.attr("data-mask-reverse")&&(e.reverse=!0);a.attr("data-mask-clearifnotmatch")&&(e.clearIfNotMatch=!0);"true"===a.attr("data-mask-selectonfocus")&&(e.selectOnFocus=!0);if(z(a,d,e))return a.data("mask",new y(this,
d,e))},z=function(a,e,d){d=d||{};var c=b(a).data("mask"),g=JSON.stringify;a=b(a).val()||b(a).text();try{return"function"===typeof e&&(e=e(a)),"object"!==typeof c||g(c.options)!==g(d)||c.mask!==e}catch(n){}};b.fn.mask=function(a,e){e=e||{};var d=this.selector,c=b.jMaskGlobals,g=c.watchInterval,c=e.watchInputs||c.watchInputs,n=function(){if(z(this,a,e))return b(this).data("mask",new y(this,a,e))};b(this).each(n);d&&""!==d&&c&&(clearInterval(b.maskWatchers[d]),b.maskWatchers[d]=setInterval(function(){b(document).find(d).each(n)},
g));return this};b.fn.masked=function(a){return this.data("mask").getMaskedVal(a)};b.fn.unmask=function(){clearInterval(b.maskWatchers[this.selector]);delete b.maskWatchers[this.selector];return this.each(function(){var a=b(this).data("mask");a&&a.remove().removeData("mask")})};b.fn.cleanVal=function(){return this.data("mask").getCleanVal()};b.applyDataMask=function(a){a=a||b.jMaskGlobals.maskElements;(a instanceof b?a:b(a)).filter(b.jMaskGlobals.dataMaskAttr).each(A)};var p={maskElements:"input,td,span,div",
dataMaskAttr:"*[data-mask]",dataMask:!0,watchInterval:300,watchInputs:!0,useInput:function(a){var b=document.createElement("div"),d;a="on"+a;d=a in b;d||(b.setAttribute(a,"return;"),d="function"===typeof b[a]);return d}("input"),watchDataMask:!1,byPassKeys:[9,16,17,18,36,37,38,39,40,91],translation:{0:{pattern:/\d/},9:{pattern:/\d/,optional:!0},"#":{pattern:/\d/,recursive:!0},A:{pattern:/[a-zA-Z0-9]/},S:{pattern:/[a-zA-Z]/}}};b.jMaskGlobals=b.jMaskGlobals||{};p=b.jMaskGlobals=b.extend(!0,{},p,b.jMaskGlobals);
p.dataMask&&b.applyDataMask();setInterval(function(){b.jMaskGlobals.watchDataMask&&b.applyDataMask()},p.watchInterval)});

/* End */
;
; /* Start:"a:4:{s:4:"full";s:61:"/local/templates/bitlate_pro/js/yandex.maps.js?15088532871931";s:6:"source";s:46:"/local/templates/bitlate_pro/js/yandex.maps.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
function createPlacemark(params){
    return new ymaps.Placemark(params['coords'], {
        hintContent: params['title'],
        balloonContent: params['content'],
        iconContent: '<svg class="icon yandex-maps-placemark"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg-icon-placemark"></use></svg>',
    }, {
        balloonMaxWidth: 310,
    });
}

function initYmap(id, points){
    ymaps.ready(function(){
        var count = Object.keys(points).length;
        if (count) {
            var mapParams = (count == 1) ? {
                    center: points[0]['coords'],
                    zoom: 15,
                    controls: []
                } : {
                    center: [55.75, 37.61],
                    zoom: 7,
                    controls: []
                },
                map = new ymaps.Map(id, mapParams),
                geoCollection = new ymaps.GeoObjectCollection(),
                geoObject;

            for (var i in points) {
                if (points[i]['cluster'] === undefined) {
                    geoObject = createPlacemark(points[i]);
                } else {
                    var placemarks = [];
                    for (var j in points[i]['cluster']) {
                        placemarks.push(createPlacemark(points[i]['cluster'][j]));
                    }
                    geoObject = new ymaps.Clusterer({
                        clusterIconColor: colors['secondary'],
                        clusterIconContentLayout: ymaps.templateLayoutFactory.createClass('<div class="yandex-maps-cluster">$[properties.geoObjects.length]</div>')
                    });
                    geoObject.add(placemarks);
                }
                geoCollection.add(geoObject);
            }
            map.geoObjects.add(geoCollection);
            if (count > 1) {
                map.setBounds(geoCollection.getBounds());
            }
        }
    });
}
/* End */
;
; /* Start:"a:4:{s:4:"full";s:55:"/local/templates/bitlate_pro/js/main.js?150885328741682";s:6:"source";s:39:"/local/templates/bitlate_pro/js/main.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
var productGridOptions = {
    // options
    itemSelector: '.products-flex-item',
    masonry: {
        columnWidth: 240
    },
    animationOptions: {
        duration: 0,
        easing: 'linear',
        queue: false
    }
};

var profileGridOptions = {
    itemSelector: '.profile-column-item',
    animationOptions: {
        duration: 0,
        easing: 'linear',
        queue: false
    },
    getSortData: {
        order: '[data-order]'
    },
    sortBy : 'order'
}

var breakpoints = {
    small: 0,
    medium: 518,
    large: 758,
    xlarge: 998,
    xxlarge: 1238,
}

function initOwl() {
    var $mainSlider      = $('.main-slider'),
        $mainBanner      = $('.main-banner'),
        $mainNews        = $('.main-news-carousel'),
        $mainBrand       = $('.main-brand-carousel'),
        $productPreview  = $('.product-slider'),
        $productPack     = $('.product-pack-carousel'),
        $productCompare  = $('.product-compare-carousel'),
        $productSeeIt    = $('.product-carousel'),
        $innerGallery    = $('.inner-carousel'),
        $innerTeam       = $('.inner-team');

    if ($mainSlider.length) {
        var itemLength = $mainSlider.find('.item').length,
            $itemParallax = $mainSlider.find('.parallax-item'),
            itemParallaxLength = $itemParallax.length,
            $itemVideo = $mainSlider.find('.video-item'),
            $svgDots = $('#owl-dots-svg'),
            params = {
                items: 1,
                center: true,
                navText: [],
                dotsContainer: '#owl-dots-svg'
            },
            small = $mainSlider.parent().hasClass('small'),
            timeout = 70,
            timer = timeout,
            timerId = null,
            players = [],
            initOwlTimer = function(){
                timer--;
                return setInterval(function(){
                    timer--;
                    if (!timer) {
                        $mainSlider.trigger('next.owl.carousel');
                    }
                }, 100);
            };

        if (itemLength > 1) {
            params['loop'] = true;
            params['nav'] = (small) ? false : true;
        } else {
            params['loop'] = false;
            params['dots'] = false;
        }
        $mainSlider.on('initialized.owl.carousel', function(){
            $svgDots.removeClass('hide').appendTo($mainSlider);
            $svgDots.children('.owl-dot').click(function(){
                $mainSlider.trigger('to.owl.carousel', [$(this).index()]);
            });
            $mainSlider.hover(
                function(){
                    clearInterval(timerId);
                    $svgDots.addClass('pause');
                },
                function(){
                    timerId = initOwlTimer();
                    $svgDots.removeClass('pause');
                }
            );
            timerId = initOwlTimer();
        });
        $mainSlider.on('translate.owl.carousel', function(e){
            var player = players[e.relatedTarget._current];

            timer = timeout;
            if ($itemVideo.length) {
                for (var i in players) {
                    players[i].stopVideo();
                }
                if (player !== undefined) {
                    player.seekTo(player.b.c.playerVars.start);
                }
            }
        });
        $mainSlider.owlCarousel(params);
        if (itemParallaxLength) {
            $itemParallax.mouseParallax();
        }
        if ($itemVideo.length) {
            $('<script/>',{'src':'https://www.youtube.com/iframe_api'}).appendTo('body');

            onYouTubeIframeAPIReady = function(){
                $itemVideo.each(function(){
                    var $self = $(this),
                        $parent = $self.closest('.owl-item'),
                        videoId = $self.attr('data-video'),
                        time = $self.attr('data-time'),
                        tagId = 'video-' + videoId,
                        index = $parent.index();

                    $('<div/>',{'id':tagId}).prependTo($self);
                    var player = new YT.Player(tagId, {
                        videoId: videoId,
                        playerVars:{
                            loop: 1,
                            showinfo: 0,
                            controls: 0,
                            disablekb: 1,
                            modestbranding: 0,
                            iv_load_policy: 3,
                            playlist: videoId,
                            start: (time === undefined) ? 0 : parseInt(time)
                        },
                        events:{
                            'onReady':function(){
                                player.mute();
                                if ($parent.hasClass('active')) {
                                    player.playVideo();
                                }
                            }
                        }
                    });
                    players[index] = player;
                });
            };
        }
    }
    if ($mainBanner.length) {
        $mainBanner.each(function(){
            var $self = $(this),
                isRightBanner = ($self.closest('.main-slider-banner').hasClass('banner-right')),
                isDrag = !($self.hasClass('sortable-banner') || isRightBanner),
                itemLength = $self.find('.item').length,
                params = {
                    loop: true,
                    items: 1,
                    margin: 20,
                    navText: [],
                    responsive: {}
                };
            params['responsive'][breakpoints['large']] = {
                items: 2,
            };
            params['responsive'][breakpoints['xlarge']] = {
                items: (isRightBanner) ? 1 : 3,
                loop: false,
                dots: false,
                mouseDrag: isDrag,
                touchDrag: isDrag,
                freeDrag: !isDrag,
            };
            switch (itemLength) {
                case 1:
                    params['loop'] = false;
                    params['dots'] = false;
                    break;
                case 2:
                    params['responsive'][breakpoints['large']]['loop'] = false;
                    params['responsive'][breakpoints['large']]['dots'] = false;
                    break;
            }
            $(this).owlCarousel(params);
        });
    }
    if ($mainNews.length) {
        $mainNews.each(function(){
            var $self = $(this),
                itemLength = $self.find('.item').length,
                params = {
                    items: 1,
                    margin: 23,
                    nav: true,
                    navText: [],
                    responsive: {},
                };
            params['responsive'][breakpoints['large']] = {
                items: 2,
            };
            params['responsive'][breakpoints['xlarge']] = {
                items: 3,
            };
            params['responsive'][breakpoints['xxlarge']] = {
                items: 4,
            };
            switch (itemLength) {
                case 1:
                    params['nav'] = false;
                    params['dots'] = false;
                    break;
                case 2:
                    params['responsive'][breakpoints['large']]['dots'] = false;
                    params['responsive'][breakpoints['xlarge']]['dots'] = false;
                    params['responsive'][breakpoints['xxlarge']]['dots'] = false;
                    break;
                case 3:
                    params['responsive'][breakpoints['xlarge']]['dots'] = false;
                    params['responsive'][breakpoints['xxlarge']]['dots'] = false;
                    break;
                case 4:
                    params['responsive'][breakpoints['xxlarge']]['dots'] = false;
                    break;
            }
            $self.owlCarousel(params);
        });
    }
    if ($mainBrand.length) {
        $mainBrand.each(function(){
            var itemLength = $(this).find('.item').length,
                params = {
                    items: 4,
                    loop: true,
                    navText: [],
                    responsive: {},
                };
            params['responsive'][breakpoints['large']] = {
                items: 6,
            };
            params['responsive'][breakpoints['xlarge']] = {
                items: 8,
                dots: false,
            };
            if (itemLength <= 4) {
                params['dots'] = false;
                params['loop'] = false;
            } else if (itemLength <= 6) {
                params['responsive'][breakpoints['large']]['dots'] = false;
                params['responsive'][breakpoints['large']]['loop'] = false;
            } else if (itemLength <= 8) {
                params['responsive'][breakpoints['xlarge']]['dots'] = false;
                params['responsive'][breakpoints['xlarge']]['loop'] = false;
            } else {
                params['responsive'][breakpoints['xlarge']]['nav'] = true;
            }
            $(this).owlCarousel(params);
        });
    }
    if ($productPreview.length) {
        $productPreview.each(function(){
            var params = {
                items: 2,
                nav: true,
                dots: false,
                navText: [],
                responsive: {},
            };
            params['responsive'][breakpoints['medium']] = {
                items: 4,
            };
            $(this).owlCarousel(params);
        });
    }
    if ($productSeeIt.length) {
        $productSeeIt.each(function(){
            var $self = $(this),
                variation = $self.parent().hasClass('product-pack-variation'),
                inner = $self.hasClass('product-carousel-inner'),
                itemLength = $self.children('.item').length,
                params = {
                    items: 1,
                    margin: -1,
                    dragEndSpeed: 100,
                    navText: [],
                    rewind: variation ? false : true,
                    responsive: {},
                    mouseDrag: false
                };

            params['responsive'][breakpoints['medium']] = {
                items: 2,
            };
            params['responsive'][breakpoints['large']] = {
                items: 3,
            };
            params['responsive'][breakpoints['xlarge']] = {
                items: inner ? 3 : 4,
                nav: true,
                dots: false,
            };
            params['responsive'][breakpoints['xxlarge']] = {
                items: inner ? 4 : 5,
                nav: true,
                dots: false,
            };
            if (!variation) {
                switch (itemLength) {
                    case 1:
                        params['loop'] = false;
                        params['dots'] = false;
                    case 2:
                        params['responsive'][breakpoints['medium']]['loop'] = false;
                        params['responsive'][breakpoints['medium']]['dots'] = false;
                    case 3:
                        params['responsive'][breakpoints['large']]['loop'] = false;
                        params['responsive'][breakpoints['large']]['dots'] = false;
                    case 4:
                        params['responsive'][breakpoints['xlarge']]['loop'] = false;
                        params['responsive'][breakpoints['xlarge']]['nav'] = false;
                    case 5:
                        params['responsive'][breakpoints['xxlarge']]['loop'] = false;
                        params['responsive'][breakpoints['xxlarge']]['nav'] = (itemLength == 5 && inner) ? true : false;
                        break;
                }
            }
            $self.data('owlParams', params);
            if (!(variation && !itemLength)) {
                $self.owlCarousel(params);
            }
        });
    }
    if ($productPack.length) {
        $productPack.each(function(){
            var $self = $(this),
                itemLength = $self.children('.item').length,
                params = {
                    items: 1,
                    margin: -1,
                    responsive: {},
                };
            params['responsive'][breakpoints['xlarge']] = {
                items: 2,
            };
            params['responsive'][breakpoints['xxlarge']] = {
                items: 3,
            };
            $self.owlCarousel(params);
        });
    }
    if ($productCompare.length) {
        var itemLength = $productCompare.children('.item').length,
            $compareTd = $('.compare-table-td'),
            heightArr = [],
            params = {
            items: 1,
            margin: -1,
            navText: [],
            responsive: {},
            mouseDrag: false,
        };
        params['responsive'][breakpoints['medium']] = {
            items: 2,
        };
        params['responsive'][breakpoints['xlarge']] = {
            items: 3,
            nav: true,
            dots: false,
        };
        params['responsive'][breakpoints['xxlarge']] = {
            items: 4,
            nav: true,
            dots: false,
        };
        switch (itemLength) {
            case 1:
                params['dots'] = false;
            case 2:
                params['responsive'][breakpoints['medium']]['dots'] = false;
                break;
        }
        
        $compareTd.each(function(){
            var $td = $(this),
                index = $td.index(),
                heightColumn = $td.find('.column:not(.transparent)').outerHeight();

            if ((heightColumn > heightArr[index]) || (heightArr[index] === undefined)) {
                heightArr[index] = heightColumn;
            }
        });
        $compareTd.each(function(){
            var $td = $(this),
                index = $td.index(),
                $column = $td.find('.column:not(.transparent, .hide-for-large)');

            if ($column.length) {
                $column.css('height', heightArr[index]);
            }
        });
        
        $productCompare.owlCarousel(params);
    }
    if ($innerGallery.length) {
        $innerGallery.each(function() {
            var $self = $(this),
                itemLength = $self.children('.item').length,
                params = {
                    items: 2,
                    margin: 15,
                    loop: true,
                    navText: [],
                    responsive: {},
                };

            params['responsive'][breakpoints['large']] = {
                nav: true,
                dots: false,
            };
            params['responsive'][breakpoints['xxlarge']] = {
                items: 3,
                nav: true,
                dots: false,
            };
            switch (itemLength) {
                case 1:
                case 2:
                    params['loop'] = false;
                    params['dots'] = false;
                    params['responsive'][breakpoints['large']]['nav'] = false;
                case 3:
                    params['responsive'][breakpoints['xxlarge']]['nav'] = false;
                    break;
            }
            $self.owlCarousel(params);
        });
    }
    if ($innerTeam.length) {
        $innerTeam.each(function() {
            var $self = $(this),
                itemLength = $self.children('.item').length,
                params = {
                    items: 1,
                    loop: true,
                    navText: [],
                    responsive: {},
                };

            params['responsive'][breakpoints['medium']] = {
                items: 2,
            };
            params['responsive'][breakpoints['large']] = {
                items: 3,
            };
            params['responsive'][breakpoints['xxlarge']] = {
                items: 4,
                nav: true,
                dots: false,
            };
            switch (itemLength) {
                case 1:
                case 2:
                    params['loop'] = false;
                    params['dots'] = false;
                case 4:
                    params['responsive'][breakpoints['xxlarge']]['nav'] = false;
                    break;
            }
            $self.owlCarousel(params);
        });
    }
}

function removeOwlItem($self){
    var $owlCarousel = $self.closest('.owl-carousel'),
        $item = $self.closest('.owl-item'),
        index = $item.index();

    $item.find('.product-pack-change').toggleClass('remove add');
    var item = $item.html();
    $owlCarousel.trigger('remove.owl.carousel', index);
    $owlCarousel.trigger('refresh.owl.carousel');
    $owlCarousel.trigger('next.owl.carousel');
    return item;
}

function setPackVariation(target) {
    var $parentSet = target.parents('.set_group_block'),
        $mobileButton = $parentSet.find('.product-pack-mobile-button');
    $('.product-pack').removeClass('edit');
    $('.product-pack-caption.apply').hide();
    $mobileButton.children('.product-pack-set-variation').css('display','none');
    $mobileButton.children('.product-pack-get-variation').show();
    $parentSet.find('.product-pack-caption.change').show();
    $parentSet.find('.product-pack-variation').slideUp();
}

$(document).ready(function() {
    $.fancybox.showLoading = function(){
        var f = $.fancybox,
            doc = $(document),
            a, d;

        f.hideLoading();
        a = $('<div id="fancybox-loading"><div class="md-preloader"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="44" width="44" viewBox="0 0 75 75"><circle cx="37.5" cy="37.5" r="33.5" stroke-width="4"></circle></svg></div></div>').click(f.cancel).appendTo("body");
        doc.bind("keydown.loading", function(a){if(27===(a.which||a.keyCode))a.preventDefault(), f.cancel()});
        f.defaults.fixed || (d = f.getViewport(),a.css({position:"absolute",top:0.5*d.h+d.y,left:0.5*d.w+d.x}));
    }
    
    $.fn.extend({
        mouseParallax: function(options) {
            var defaults = {
                    speed: 5,
                    vertical: true,
                },
                options = $.extend(defaults, options);

            return this.each(function() {
                var $self = $(this),
                    dataSpeed = $self.attr('data-speed'),
                    dataVertical = $self.attr('data-vertical'),
                    speed = (dataSpeed !== undefined) ? parseInt(dataSpeed) : options.speed,
                    vertical = (dataVertical !== undefined) ? (dataVertical === 'true') : options.vertical;

                //background.parent()
                $('body').on('mousemove', function(e){
                    if ($self.closest('.owl-item').hasClass('active')) {
                        mouseX = e.pageX;
                        mouseY = e.pageY;

                        centerH = $(window).width() / 2;
                        centerV = $(window).height() / 2;

                        // (координаты курсора относительно центральной линии экрана)/ ("50" - 1% = 50px) * скорость * ("0.05" - коэффициент ускорения)
                        percentX = (centerH - mouseX) / 50 * speed * 0.05;
                        percentY = (centerV - mouseY) / 50 * speed * 0.05;

                        if (vertical) {
                            $self.css('transform', 'translate(' + percentX + '%,' + percentY + '%)');
                        } else {
                            $self.css('transform', 'translateX(' + percentX + '%)');
                        }
                    }
                });
            });
        }
    });
    
    $(document).foundation();

    var $productGrid = $('.products-flex-grid'),
        $bannerGrid = $('.main-banner-grid');

    if ($productGrid.length) {
        $productGrid.isotope({
            itemSelector: '.isotope-item',
            masonry: {
                columnWidth: 240
            },
            animationOptions: {
                duration: 0,
                easing: 'linear',
                queue: false
            },
            transitionDuration: $productGrid.hasClass('sortable-grid') ? 0 : '0.4s'
        });
        $('.products-flex-grid.sortable-grid').sortable({
            update: function(e, ui){
                var params = '',
                    $sortBlock = ui.item.closest('.products-flex-grid.sortable-grid'),
                    url = $sortBlock.attr('data-url');
                
                $sortBlock.find('input[name="product_position"], input[name="banner_position"]').each(function() {
                    params = params + '|' + $(this).val();
                });
                url = url.replace('productpositions=', 'productpositions=' + params);
                window.location.href = url;
                applyChange();
            }
        });
    }
    if ($bannerGrid.length) {
        $bannerGrid.isotope({
            itemSelector: '.main-banner-item',
            layoutMode: 'packery',
            transitionDuration: $bannerGrid.hasClass('sortable-grid') ? 0 : '0.4s'
        });
        $('.main-banner-grid.sortable-grid').sortable({
            update: function(e, ui){
                var params = '',
                    $sortBlock = $('.main-banner-grid.sortable-grid'),
                    url = $sortBlock.attr('data-url');
                
                $sortBlock.find('input').each(function() {
                    params = params + '|' + $(this).val();
                });
                url = url.replace('bannerpositions=', 'bannerpositions=' + params);
                window.location.href = url;
                applyChange();
            }
        });
    }

    var windowWidth = $(window).width(),
        foundationScreenOld = Foundation.MediaQuery.current,
        slideout = new Slideout({
            'panel': document.getElementById('page'),
            'menu': document.getElementById('mobile-menu'),
            'padding': 260,
            'tolerance': 70
        }),
        scrTop = 0,
        $scrollUpDown = $(".scroll-up-down"),
        $page = $('#page'),
        $mobileMenu = $('#mobile-menu'),
        $headerMenu = $('.header-main-menu'),
        $headerMenuFixed = $('.header-menu-fixed'),
        $headerMobileFixed = $('.header-mobile-fixed'),
        $headerMenuWrap = $('#header-main-menu-wrap');
    window['var'] = {
        menuOffsetTop: 0,
        menuScrollTop: 0,
        menuPositionTop: $headerMenuFixed.position().top,
        menuHeight: $headerMenuFixed.outerHeight(),
        isMenuFixed: $page.hasClass('menu-fixed')
    };
    window['func'] = {};
    
    initOwl();
    
    //Все, что связано с шаблоном
    
    initSelect('select');
    $('input.phone').mask('+7 (000) 000-0000');
    $('input.zip').mask('000 000');
    $('.fancybox:not([disabled],.disabled)').fancybox({
        padding: 0
    });
    
    $(document).on('click', '.fancybox-cancel', function(e){
        $.fancybox.close();
        e.preventDefault();
    });
    
    $(document).on('click', '.preview-button', function(e){
        var $self = $(this);
        $.fancybox({
            type: 'ajax',
            href: $self.attr('data-href'),
            padding: 0,
        });
        e.preventDefault();
    });
    
    $(document).on('click', '.show-href', function(e){
        var $self = $(this);
        $self.closest('.fancybox-block').hide();
        $($self.attr('href')).show();
        e.preventDefault();
    });
    
    $(document).click(function(e){
        var $dropdown = $('.dropdown-custom.is-open');
    
        if ($dropdown.length && !$dropdown.has(e.target).length) {
            $dropdown.removeClass('is-open');
        }
    });
    
    function mainMenuArrowPosition(){
        var $menu = $('.header-main-menu-other'),
            left = $menu.offset().left,
            width = $menu.width();
        $('.header-main-menu-other .header-main-menu-dropdown-arrow').css({'left': left + width/2 - 10});
    }
    
    function hsMainMenuItems(action) {
        if ($headerMenu.is(':visible')) {
            var $menuBlock = $('.header-main-menu-block'),
                $menuBase = $('.header-main-menu-base'),
                $menuFull = $('#header-main-menu-full'),
                $menuFullCont = $menuFull.find('.container'),
                $menuOther = $('.header-main-menu-other'),
                $mainSlider = $('.main-slider'),
                maxWidth = parseInt($menuBlock.css('maxWidth')),
                maxHeight = (($mainSlider.length) ? $mainSlider.height() + 20 : 450) - 45,
                baseWidth = $menuBase.width() - 16,
                baseHeight = $menuBase.height(),
                isVertical = ($headerMenu.parent('.header-main-menu-dropdow-wrap').length);
    
            function hideMainMenuItems(){
                if ($menuOther.hasClass('hide')) {
                    $menuOther.removeClass('hide');
                }
                var $replaceItem = $menuBase.find('.header-main-menu-category:last-child');
                if ($replaceItem.length) {
                    $menuFullCont.prepend($replaceItem);
                    hsMainMenuItems('hide');
                }
            }
            function showMainMenuItems(){
                var $replaceItem = $menuFullCont.find('.header-main-menu-category:first-child');
                if ($replaceItem.length) {
                    $menuBase.append($replaceItem);
                    hsMainMenuItems('show');
                }
            }
    
            if (action === 'hide') {
                if (isVertical) {
                    if (baseHeight > maxHeight) {
                        hideMainMenuItems();
                        $menuFull.on('closeme.zf.dropdown', function(){
                            return false;
                        });
                    }
                } else {
                    if (baseWidth > maxWidth) {
                        hideMainMenuItems();
                    }
                }
            }
            if (action === 'show') {
                if (isVertical) {
                    if (baseHeight <= maxHeight) {
                        showMainMenuItems();
                    } else {
                        hsMainMenuItems('hide');
                    }
                } else {
                    if (baseWidth <= maxWidth) {
                        showMainMenuItems();
                    } else {
                        hsMainMenuItems('hide');
                    }
                }
            }
            mainMenuArrowPosition();
        }
    }
    
    window.func.headerFixed = function(){
        var top = '';
    
        if ($.inArray(foundationScreenOld, ['xlarge', 'xxlarge']) !== -1) {
            if ($page.hasClass('header-v1') || $page.hasClass('header-v2')) {
                window.var.menuHeight = $headerMenuFixed.outerHeight();
            }
            if (scrTop > window.var.menuPositionTop + window.var.menuScrollTop) {
                $headerMenuFixed.css('top', window.var.menuOffsetTop);
                $page.addClass('is-fixed');
                if ($page.hasClass('index-page') && $page.hasClass('header-v3')) {
                    if ($headerMenuWrap.hasClass('is-open') && !$headerMenuWrap.hasClass('open-to-click')) {
                        $headerMenuWrap.foundation('close');
                    }
                }
            } else {
                $headerMenuFixed.css('top', 0);
                $page.removeClass('is-fixed');
                if ($page.hasClass('index-page') && $page.hasClass('header-v3')) {
                    $headerMenuWrap.removeClass('open-to-click');
                    if (!$headerMenuWrap.hasClass('is-open')) {
                        $headerMenuWrap.foundation('open');
                    }
                }
            }
        }
        if ($.inArray(foundationScreenOld, ['small', 'medium', 'large']) !== -1) {
            $page.addClass('is-fixed');
            $headerMenuFixed.css('top', top);
            if (window.var.menuScrollTop) {
                top = (scrTop > window.var.menuScrollTop) ? 0 : window.var.menuScrollTop - scrTop;
            }
        }
        $headerMobileFixed.css('top', top);
    };
    
    if (window.var.isMenuFixed) {
        window.func.headerFixed();
        slideout.on('beforeopen', function(){
            $headerMobileFixed.css('top', (scrTop > window.var.menuScrollTop) ? scrTop - window.var.menuScrollTop : 0);
        });
        slideout.on('close', function(){
            $headerMobileFixed.css('top', (window.var.menuScrollTop) ? ((scrTop > window.var.menuScrollTop) ? 0 : window.var.menuScrollTop - scrTop) : '');
        });
        if (window.BX !== undefined && BX.admin !== undefined) {
            var BxPanel,
                headerFixedBX = function () {
                    var bxPanelHeight = BxPanel.DIV.clientHeight,
                        mobileTop = 0;
    
                    if (BxPanel.isFixed()) {
                        window.var.menuOffsetTop = bxPanelHeight;
                        window.var.menuScrollTop = 0;
                        mobileTop += bxPanelHeight;
                    } else {
                        window.var.menuOffsetTop = 0;
                        window.var.menuScrollTop = bxPanelHeight;
                        mobileTop = (scrTop >= bxPanelHeight) ? 0 : bxPanelHeight - scrTop;
                    }
                    $mobileMenu.css({
                        top: mobileTop,
                        height: window.innerHeight - mobileTop
                    });
                    window.func.headerFixed();
                };
    
            BX.ready(function () {
                BxPanel = BX.admin.panel;
                BX.addCustomEvent('onTopPanelCollapse', BX.delegate(headerFixedBX, this));
                BX.addCustomEvent('onTopPanelFix', BX.delegate(headerFixedBX, this));
                headerFixedBX();
            });
        }
    }
    
    hsMainMenuItems('hide');
    
    if ($page.hasClass('index-page') && $page.hasClass('header-v3') && $headerMenuWrap.length) {
        $headerMenuWrap.foundation('open');
        $headerMenuWrap.on('hide.zf.dropdown', function(){
            if (!$page.hasClass('is-fixed')) {
                $headerMenuWrap.foundation('open');
            }
        });
        $('.header-main-menu-button').click(function(){
            if ($page.hasClass('is-fixed')) {
                $headerMenuWrap.addClass('open-to-click');
            } else {
                return false;
            }
        });
    }
    
    function hideCustomMenu()
    {
        var $cMenu = $('#custom-menu');
        if ($cMenu.length) {
            var $toggle = $cMenu.find('.toggle');
    
            $cMenu.removeClass('active');
            if ( $toggle.attr('data-toggle') !== undefined) {
                $toggle.foundation('hide');
            }
        }
    }
    
    function menuFilterToggle(inMobile)
    {
        $('#catalog-filter').appendTo((inMobile) ? $mobileMenu : $('#catalog-filter-wrapper'));
        $mobileMenu.find('.mobile-menu-wrapper').toggleClass('hide');
        $('html').toggleClass('slideout-filter');
    }
    
    function menuFilterToggleOnce()
    {
        menuFilterToggle(true);
        slideout.open();
        slideout.once('close', function(){
            menuFilterToggle();
        });
    }
    
    $('.header-mobile-toggle').on('click', function() {
        hideCustomMenu();
        if (slideout.isOpen() && $('html').hasClass('slideout-filter')) {
            slideout.close();
            slideout.once('close', function(){
                slideout.open();
            });
        } else {
            slideout.toggle();
        }
    });
    
    $(document).on('click', '.filter-mobile-toggle', function(e){
        hideCustomMenu();
        if (slideout.isOpen()) {
            if ($('html').hasClass('slideout-filter')) {
                slideout.close();
            } else {
                slideout.close();
                slideout.once('close', function(){
                    menuFilterToggleOnce();
                });
            }
        } else {
            menuFilterToggleOnce();
            initSlider();
        }
        e.preventDefault();
    });
    
    $(document).on('open.zf.drilldown', function(){
        $mobileMenu.animate({scrollTop: 0}, 200);
    });
    
    $scrollUpDown.click(function(e){
        $("body,html").animate({scrollTop: 0}, 200);
        e.preventDefault();
    });
    
    $(window).resize(function() {
        var windowWidthNew = $(this).width(),
            foundationScreenNew = Foundation.MediaQuery.current;
        if (windowWidthNew > windowWidth) {
            hsMainMenuItems('show');
        }
        if (windowWidthNew < windowWidth) {
            hsMainMenuItems('hide');
        }
        if (foundationScreenOld !== foundationScreenNew) {
            if (slideout.isOpen()
                && ($.inArray(foundationScreenOld, ['small', 'medium', 'large']) !== -1)
                && ($.inArray(foundationScreenNew, ['xlarge', 'xxlarge']) !== -1)) {
                slideout.close();
            }
            if ($page.hasClass('is-fixed')
                && ($.inArray(foundationScreenNew, ['small', 'medium', 'large']) !== -1)
                && ($.inArray(foundationScreenOld, ['xlarge', 'xxlarge']) !== -1)) {
                $page.removeClass('is-fixed');
            }
            foundationScreenOld = foundationScreenNew;
            if (window.var.isMenuFixed) {
                $page.removeClass('is-fixed');
                window.var.menuHeight = $headerMenuFixed.outerHeight();
                window.var.menuPositionTop = $headerMenuFixed.position().top;
                if (headerFixedBX !== undefined) {
                    headerFixedBX();
                } else {
                    window.func.headerFixed();
                }
            }
        }
        windowWidth = windowWidthNew;
    
        $('.tracker').data('largeimage', false);
        checkAccordionTabs(foundationScreenNew);
    });
    
    $(window).scroll(function() {
        scrTop = window.pageYOffset;
        if (scrTop > 250) {
            $scrollUpDown.fadeIn();
        } else {
            $scrollUpDown.fadeOut();
        }
        if (window.var.isMenuFixed) {
            if (headerFixedBX !== undefined) {
                headerFixedBX();
            } else {
                window.func.headerFixed();
            }
        }
    });
    
    //Позиционирование блоков в ЛК
    
    $('.profile-column-container').isotope(profileGridOptions);
    
    //Сетка продуктов на главной
    
    $('.main-product-tabs .tabs').on('change.zf.tabs', function(e, $tab) {
        var index = $tab.index(),
            $productCarousel = $($tab.find('a').attr('href') + ' .product-carousel');
    
        $tab.closest('.main-product-tabs').find('.select-tabs option').eq(index).prop('selected', true).trigger('refresh');
        if ($productGrid.length) {
            $productGrid.isotope();
        }
        if ($productCarousel.length) {
            $productCarousel.trigger('refresh.owl.carousel');
        }
    });
    
    $(document).on('change', '.main-product-tabs select.select-tabs', function(){
        var target = $(this).find('option:selected').val();
        $('.main-product-tabs .tabs').foundation('selectTab', $(target));
    });
    
    // Сворачивание блоков в блоке Фильтров в Каталоге
    $('.catalog-filters__block .heading').click(function (e) {
        e.preventDefault();
        $(this).parents('.catalog-filters__block').toggleClass('showed').find('.body').slideToggle();
        if (!$(this).hasClass('showed')) {
            initSlider();
        }
    });
    
    $('.search-from-header-button').click(function(e){
        $(this).toggleClass('active');
        $('.search-from-header-wrap').toggleClass('active');
    });
    
    $(document).on('click', '.breadcrumbs a[data-toggle]', function(e){
        var $self = $(this);
    
        if (($.inArray(foundationScreenOld, ['small', 'medium', 'large']) !== -1)) {
            if (!$self.hasClass('visited')) {
                $self.addClass('visited');
                e.preventDefault();
            }
        }
    });

    $('body').on('click', function(e){
        var $target = $(e.target),
            $filterTip = $('.filter-tip');

        if (!$target.closest('.filter-tip').length && $filterTip.length) {
            $filterTip.hide();
        }
    });

    //Все, что связано с карточкой товара
    
    initProductPreviewZoom();
    
    initTimer();
    
    initSlider();
    
    $(document).on('click', '.product-preview-zoom', function(e){
        var previews = [],
            activeIndex = 0;
        $('.product-slider .item:not([data-content="video"])').each(function(){
            var $self = $(this);
            previews.push($self.attr('href'));
            if ($self.hasClass('active')) {
                activeIndex = $self.parent().index();
            }
        });
        $.fancybox(previews, {
            index: activeIndex,
            helpers	: {
                thumbs	: {
                    width	: 61,
                    height	: 61
                }
            }
        });
        e.preventDefault();
    });
    
    $(document).on('click', '.product-slider .item', function(e){
        var $self = $(this),
            type = $self.attr('data-content'),
            tag = (type == 'video') ? 'iframe' : 'img';
    
        if (!$self.hasClass('active')) {
            var $contentBlock = $('.product-preview-main-content');
            $contentBlock.removeClass('active');
            $contentBlock.filter('.' + type).addClass('active');
    
            $('.product-slider .item').removeClass('active');
            $('.product-preview-main ' + tag).attr('src', $self.attr('href'));
            $self.addClass('active');
    
            if (type == 'video') {
                $('.product-preview-zoom').addClass('invisible');
            } else {
                $('.product-preview-zoom').removeClass('invisible');
            }
        }
        e.preventDefault();
    });
    
    $(document).on('click', '.product-info-social a', function(e){
        $('.' + $(this).attr('href')).click();
        e.preventDefault();
    });
    
    //Все, что связано с блоком "Набор"
    
    $(document).on('click', '.product-pack-get-variation', function(e){
        var $parentSet = $(this).parents('.set_group_block'),
            $variation = $parentSet.find('.product-pack-variation'),
            $carouselVariation = $parentSet.find('.product-carousel'),
            $mobileButton = $parentSet.find('.product-pack-mobile-button');

        $parentSet.find('.product-pack').addClass('edit');
        $parentSet.find('.product-pack-caption.change').hide();
        $mobileButton.children('.product-pack-get-variation').hide();
        $mobileButton.children('.product-pack-set-variation').css('display','inline-block');
        $parentSet.find('.product-pack-caption.apply').show();
        if ($carouselVariation.data('owl.carousel') !== undefined) {
            if ($carouselVariation.data('owl.carousel')._items.length > 0) {
                $variation.slideDown();
            }
        }

        e.preventDefault();
    });
    
    $(document).on('click', '.product-pack-set-variation', function(e){
        setPackVariation($(this));
        e.preventDefault();
    });
    
    //Синхронизация Аккардиона и Табов
    
    function checkAccordionTabs(foundationScreen){
        var $content = $('.product-accordion-tabs-content'),
            $items   = $('.product-accordion-tabs-item'),
            $wraps   = $('.product-accordion-tabs-wrap');
    
        if ($.inArray(foundationScreen, ['small', 'medium', 'large']) != -1) {
            if ($content.hasClass('tabs-content')) {
                $content.removeClass('tabs-content').addClass('accordion').attr('data-accordion');
                $items.addClass('accordion-item').removeClass('tabs-panel');
                $wraps.addClass('accordion-content').hide();
                $items.filter('.is-active').children('.product-accordion-tabs-wrap').show();
            }
        } else {
            if ($content.hasClass('accordion')) {
                $content.removeAttr('data-accordion').removeClass('accordion').addClass('tabs-content');
                $items.removeClass('accordion-item').addClass('tabs-panel');
                $wraps.removeClass('accordion-content').show();
            }
        }
    }
    
    checkAccordionTabs(foundationScreenOld);
    
    $(document).on('click', '.product-accordion-tabs .accordion-title', function(){
        var $self = $(this),
            $tabsTitle  = $('.product-accordion-tabs .tabs-title'),
            $activeLink = $tabsTitle.children('a[href="#' + $self.attr('id') + '"]');
        $tabsTitle.removeClass('is-active');
        $tabsTitle.children().removeAttr('aria-selected');
        $activeLink.attr('aria-selected', 'true');
        $activeLink.parent().addClass('is-active');
        setTimeout(function(){
            $("body,html").animate({scrollTop: $self.offset().top}, 200);
        }, 250);
    });

});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:66:"/local/templates/bitlate_pro/js/colorpicker.min.js?150885328718689";s:6:"source";s:50:"/local/templates/bitlate_pro/js/colorpicker.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*!
 * Bootstrap Colorpicker v2.3.3
 * http://mjolnic.github.io/bootstrap-colorpicker/
 */
!function(a){"use strict";"object"==typeof exports?module.exports=a(window.jQuery):"function"==typeof define&&define.amd?define(["jquery"],a):window.jQuery&&!window.jQuery.fn.colorpicker&&a(window.jQuery)}(function(a){"use strict";var b=function(b,c){this.value={h:0,s:0,b:0,a:1},this.origFormat=null,c&&a.extend(this.colors,c),b&&(void 0!==b.toLowerCase?(b+="",this.setColor(b)):void 0!==b.h&&(this.value=b))};b.prototype={constructor:b,colors:{aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgrey:"#d3d3d3",lightgreen:"#90ee90",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370d8",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#d87093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32",transparent:"transparent"},_sanitizeNumber:function(a){return"number"==typeof a?a:isNaN(a)||null===a||""===a||void 0===a?1:""===a?0:void 0!==a.toLowerCase?(a.match(/^\./)&&(a="0"+a),Math.ceil(100*parseFloat(a))/100):1},isTransparent:function(a){return a?(a=a.toLowerCase().trim(),"transparent"===a||a.match(/#?00000000/)||a.match(/(rgba|hsla)\(0,0,0,0?\.?0\)/)):!1},rgbaIsTransparent:function(a){return 0===a.r&&0===a.g&&0===a.b&&0===a.a},setColor:function(a){a=a.toLowerCase().trim(),a&&(this.isTransparent(a)?this.value={h:0,s:0,b:0,a:0}:this.value=this.stringToHSB(a)||{h:0,s:0,b:0,a:1})},stringToHSB:function(b){b=b.toLowerCase();var c;"undefined"!=typeof this.colors[b]&&(b=this.colors[b],c="alias");var d=this,e=!1;return a.each(this.stringParsers,function(a,f){var g=f.re.exec(b),h=g&&f.parse.apply(d,[g]),i=c||f.format||"rgba";return h?(e=i.match(/hsla?/)?d.RGBtoHSB.apply(d,d.HSLtoRGB.apply(d,h)):d.RGBtoHSB.apply(d,h),d.origFormat=i,!1):!0}),e},setHue:function(a){this.value.h=1-a},setSaturation:function(a){this.value.s=a},setBrightness:function(a){this.value.b=1-a},setAlpha:function(a){this.value.a=Math.round(parseInt(100*(1-a),10)/100*100)/100},toRGB:function(a,b,c,d){a||(a=this.value.h,b=this.value.s,c=this.value.b),a*=360;var e,f,g,h,i;return a=a%360/60,i=c*b,h=i*(1-Math.abs(a%2-1)),e=f=g=c-i,a=~~a,e+=[i,h,0,0,h,i][a],f+=[h,i,i,h,0,0][a],g+=[0,0,h,i,i,h][a],{r:Math.round(255*e),g:Math.round(255*f),b:Math.round(255*g),a:d||this.value.a}},toHex:function(a,b,c,d){var e=this.toRGB(a,b,c,d);return this.rgbaIsTransparent(e)?"transparent":"#"+(1<<24|parseInt(e.r)<<16|parseInt(e.g)<<8|parseInt(e.b)).toString(16).substr(1)},toHSL:function(a,b,c,d){a=a||this.value.h,b=b||this.value.s,c=c||this.value.b,d=d||this.value.a;var e=a,f=(2-b)*c,g=b*c;return g/=f>0&&1>=f?f:2-f,f/=2,g>1&&(g=1),{h:isNaN(e)?0:e,s:isNaN(g)?0:g,l:isNaN(f)?0:f,a:isNaN(d)?0:d}},toAlias:function(a,b,c,d){var e=this.toHex(a,b,c,d);for(var f in this.colors)if(this.colors[f]===e)return f;return!1},RGBtoHSB:function(a,b,c,d){a/=255,b/=255,c/=255;var e,f,g,h;return g=Math.max(a,b,c),h=g-Math.min(a,b,c),e=0===h?null:g===a?(b-c)/h:g===b?(c-a)/h+2:(a-b)/h+4,e=(e+360)%6*60/360,f=0===h?0:h/g,{h:this._sanitizeNumber(e),s:f,b:g,a:this._sanitizeNumber(d)}},HueToRGB:function(a,b,c){return 0>c?c+=1:c>1&&(c-=1),1>6*c?a+(b-a)*c*6:1>2*c?b:2>3*c?a+(b-a)*(2/3-c)*6:a},HSLtoRGB:function(a,b,c,d){0>b&&(b=0);var e;e=.5>=c?c*(1+b):c+b-c*b;var f=2*c-e,g=a+1/3,h=a,i=a-1/3,j=Math.round(255*this.HueToRGB(f,e,g)),k=Math.round(255*this.HueToRGB(f,e,h)),l=Math.round(255*this.HueToRGB(f,e,i));return[j,k,l,this._sanitizeNumber(d)]},toString:function(a){a=a||"rgba";var b=!1;switch(a){case"rgb":return b=this.toRGB(),this.rgbaIsTransparent(b)?"transparent":"rgb("+b.r+","+b.g+","+b.b+")";case"rgba":return b=this.toRGB(),"rgba("+b.r+","+b.g+","+b.b+","+b.a+")";case"hsl":return b=this.toHSL(),"hsl("+Math.round(360*b.h)+","+Math.round(100*b.s)+"%,"+Math.round(100*b.l)+"%)";case"hsla":return b=this.toHSL(),"hsla("+Math.round(360*b.h)+","+Math.round(100*b.s)+"%,"+Math.round(100*b.l)+"%,"+b.a+")";case"hex":return this.toHex();case"alias":return this.toAlias()||this.toHex();default:return b}},stringParsers:[{re:/rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*?\)/,format:"rgb",parse:function(a){return[a[1],a[2],a[3],1]}},{re:/rgb\(\s*(\d*(?:\.\d+)?)\%\s*,\s*(\d*(?:\.\d+)?)\%\s*,\s*(\d*(?:\.\d+)?)\%\s*?\)/,format:"rgb",parse:function(a){return[2.55*a[1],2.55*a[2],2.55*a[3],1]}},{re:/rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d*(?:\.\d+)?)\s*)?\)/,format:"rgba",parse:function(a){return[a[1],a[2],a[3],a[4]]}},{re:/rgba\(\s*(\d*(?:\.\d+)?)\%\s*,\s*(\d*(?:\.\d+)?)\%\s*,\s*(\d*(?:\.\d+)?)\%\s*(?:,\s*(\d*(?:\.\d+)?)\s*)?\)/,format:"rgba",parse:function(a){return[2.55*a[1],2.55*a[2],2.55*a[3],a[4]]}},{re:/hsl\(\s*(\d*(?:\.\d+)?)\s*,\s*(\d*(?:\.\d+)?)\%\s*,\s*(\d*(?:\.\d+)?)\%\s*?\)/,format:"hsl",parse:function(a){return[a[1]/360,a[2]/100,a[3]/100,a[4]]}},{re:/hsla\(\s*(\d*(?:\.\d+)?)\s*,\s*(\d*(?:\.\d+)?)\%\s*,\s*(\d*(?:\.\d+)?)\%\s*(?:,\s*(\d*(?:\.\d+)?)\s*)?\)/,format:"hsla",parse:function(a){return[a[1]/360,a[2]/100,a[3]/100,a[4]]}},{re:/#?([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/,format:"hex",parse:function(a){return[parseInt(a[1],16),parseInt(a[2],16),parseInt(a[3],16),1]}},{re:/#?([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/,format:"hex",parse:function(a){return[parseInt(a[1]+a[1],16),parseInt(a[2]+a[2],16),parseInt(a[3]+a[3],16),1]}}],colorNameToHex:function(a){return"undefined"!=typeof this.colors[a.toLowerCase()]?this.colors[a.toLowerCase()]:!1}};var c={horizontal:!1,inline:!1,color:!1,format:!1,input:"input",container:!1,component:".add-on, .input-group-addon",sliders:{saturation:{maxLeft:100,maxTop:100,callLeft:"setSaturation",callTop:"setBrightness"},hue:{maxLeft:0,maxTop:100,callLeft:!1,callTop:"setHue"},alpha:{maxLeft:0,maxTop:100,callLeft:!1,callTop:"setAlpha"}},slidersHorz:{saturation:{maxLeft:100,maxTop:100,callLeft:"setSaturation",callTop:"setBrightness"},hue:{maxLeft:100,maxTop:0,callLeft:"setHue",callTop:!1},alpha:{maxLeft:100,maxTop:0,callLeft:"setAlpha",callTop:!1}},template:'<div class="colorpicker dropdown-menu"><div class="colorpicker-saturation"><i><b></b></i></div><div class="colorpicker-hue"><i></i></div><div class="colorpicker-alpha"><i></i></div><div class="colorpicker-color"><div /></div><div class="colorpicker-selectors"></div></div>',align:"right",customClass:null,colorSelectors:null},d=function(d,e){if(this.element=a(d).addClass("colorpicker-element"),this.options=a.extend(!0,{},c,this.element.data(),e),this.component=this.options.component,this.component=this.component!==!1?this.element.find(this.component):!1,this.component&&0===this.component.length&&(this.component=!1),this.container=this.options.container===!0?this.element:this.options.container,this.container=this.container!==!1?a(this.container):!1,this.input=this.element.is("input")?this.element:this.options.input?this.element.find(this.options.input):!1,this.input&&0===this.input.length&&(this.input=!1),this.color=new b(this.options.color!==!1?this.options.color:this.getValue(),this.options.colorSelectors),this.format=this.options.format!==!1?this.options.format:this.color.origFormat,this.options.color!==!1&&(this.updateInput(this.color),this.updateData(this.color)),this.picker=a(this.options.template),this.options.customClass&&this.picker.addClass(this.options.customClass),this.options.inline?this.picker.addClass("colorpicker-inline colorpicker-visible"):this.picker.addClass("colorpicker-hidden"),this.options.horizontal&&this.picker.addClass("colorpicker-horizontal"),"rgba"!==this.format&&"hsla"!==this.format&&this.options.format!==!1||this.picker.addClass("colorpicker-with-alpha"),"right"===this.options.align&&this.picker.addClass("colorpicker-right"),this.options.inline===!0&&this.picker.addClass("colorpicker-no-arrow"),this.options.colorSelectors){var f=this;a.each(this.options.colorSelectors,function(b,c){var d=a("<i />").css("background-color",c).data("class",b);d.click(function(){f.setValue(a(this).css("background-color"))}),f.picker.find(".colorpicker-selectors").append(d)}),this.picker.find(".colorpicker-selectors").show()}this.picker.on("mousedown.colorpicker touchstart.colorpicker",a.proxy(this.mousedown,this)),this.picker.appendTo(this.container?this.container:a("body")),this.input!==!1&&(this.input.on({"keyup.colorpicker":a.proxy(this.keyup,this)}),this.input.on({"change.colorpicker":a.proxy(this.change,this)}),this.component===!1&&this.element.on({"focus.colorpicker":a.proxy(this.show,this)}),this.options.inline===!1&&this.element.on({"focusout.colorpicker":a.proxy(this.hide,this)})),this.component!==!1&&this.component.on({"click.colorpicker":a.proxy(this.show,this)}),this.input===!1&&this.component===!1&&this.element.on({"click.colorpicker":a.proxy(this.show,this)}),this.input!==!1&&this.component!==!1&&"color"===this.input.attr("type")&&this.input.on({"click.colorpicker":a.proxy(this.show,this),"focus.colorpicker":a.proxy(this.show,this)}),this.update(),a(a.proxy(function(){this.element.trigger("create")},this))};d.Color=b,d.prototype={constructor:d,destroy:function(){this.picker.remove(),this.element.removeData("colorpicker","color").off(".colorpicker"),this.input!==!1&&this.input.off(".colorpicker"),this.component!==!1&&this.component.off(".colorpicker"),this.element.removeClass("colorpicker-element"),this.element.trigger({type:"destroy"})},reposition:function(){if(this.options.inline!==!1||this.options.container)return!1;var a=this.container&&this.container[0]!==document.body?"position":"offset",b=this.component||this.element,c=b[a]();"right"===this.options.align&&(c.left-=this.picker.outerWidth()-b.outerWidth()),this.picker.css({top:c.top+b.outerHeight(),left:c.left})},show:function(b){return this.isDisabled()?!1:(this.picker.addClass("colorpicker-visible").removeClass("colorpicker-hidden"),this.reposition(),a(window).on("resize.colorpicker",a.proxy(this.reposition,this)),!b||this.hasInput()&&"color"!==this.input.attr("type")||b.stopPropagation&&b.preventDefault&&(b.stopPropagation(),b.preventDefault()),!this.component&&this.input||this.options.inline!==!1||a(window.document).on({"mousedown.colorpicker":a.proxy(this.hide,this)}),void this.element.trigger({type:"showPicker",color:this.color}))},hide:function(){this.picker.addClass("colorpicker-hidden").removeClass("colorpicker-visible"),a(window).off("resize.colorpicker",this.reposition),a(document).off({"mousedown.colorpicker":this.hide}),this.update(),this.element.trigger({type:"hidePicker",color:this.color})},updateData:function(a){return a=a||this.color.toString(this.format),this.element.data("color",a),a},updateInput:function(a){if(a=a||this.color.toString(this.format),this.input!==!1){if(this.options.colorSelectors){var c=new b(a,this.options.colorSelectors),d=c.toAlias();"undefined"!=typeof this.options.colorSelectors[d]&&(a=d)}this.input.prop("value",a)}return a},updatePicker:function(a){void 0!==a&&(this.color=new b(a,this.options.colorSelectors));var c=this.options.horizontal===!1?this.options.sliders:this.options.slidersHorz,d=this.picker.find("i");return 0!==d.length?(this.options.horizontal===!1?(c=this.options.sliders,d.eq(1).css("top",c.hue.maxTop*(1-this.color.value.h)).end().eq(2).css("top",c.alpha.maxTop*(1-this.color.value.a))):(c=this.options.slidersHorz,d.eq(1).css("left",c.hue.maxLeft*(1-this.color.value.h)).end().eq(2).css("left",c.alpha.maxLeft*(1-this.color.value.a))),d.eq(0).css({top:c.saturation.maxTop-this.color.value.b*c.saturation.maxTop,left:this.color.value.s*c.saturation.maxLeft}),this.picker.find(".colorpicker-saturation").css("backgroundColor",this.color.toHex(this.color.value.h,1,1,1)),this.picker.find(".colorpicker-alpha").css("backgroundColor",this.color.toHex()),this.picker.find(".colorpicker-color, .colorpicker-color div").css("backgroundColor",this.color.toString(this.format)),a):void 0},updateComponent:function(a){if(a=a||this.color.toString(this.format),this.component!==!1){var b=this.component.find("i").eq(0);b.length>0?b.css({backgroundColor:a}):this.component.css({backgroundColor:a})}return a},update:function(a){var b;return this.getValue(!1)===!1&&a!==!0||(b=this.updateComponent(),this.updateInput(b),this.updateData(b),this.updatePicker()),b},setValue:function(a){this.color=new b(a,this.options.colorSelectors),this.update(!0),this.element.trigger({type:"changeColor",color:this.color,value:a})},getValue:function(a){a=void 0===a?"#000000":a;var b;return b=this.hasInput()?this.input.val():this.element.data("color"),void 0!==b&&""!==b&&null!==b||(b=a),b},hasInput:function(){return this.input!==!1},isDisabled:function(){return this.hasInput()?this.input.prop("disabled")===!0:!1},disable:function(){return this.hasInput()?(this.input.prop("disabled",!0),this.element.trigger({type:"disable",color:this.color,value:this.getValue()}),!0):!1},enable:function(){return this.hasInput()?(this.input.prop("disabled",!1),this.element.trigger({type:"enable",color:this.color,value:this.getValue()}),!0):!1},currentSlider:null,mousePointer:{left:0,top:0},mousedown:function(b){!b.pageX&&!b.pageY&&b.originalEvent&&b.originalEvent.touches&&(b.pageX=b.originalEvent.touches[0].pageX,b.pageY=b.originalEvent.touches[0].pageY),b.stopPropagation(),b.preventDefault();var c=a(b.target),d=c.closest("div"),e=this.options.horizontal?this.options.slidersHorz:this.options.sliders;if(!d.is(".colorpicker")){if(d.is(".colorpicker-saturation"))this.currentSlider=a.extend({},e.saturation);else if(d.is(".colorpicker-hue"))this.currentSlider=a.extend({},e.hue);else{if(!d.is(".colorpicker-alpha"))return!1;this.currentSlider=a.extend({},e.alpha)}var f=d.offset();this.currentSlider.guide=d.find("i")[0].style,this.currentSlider.left=b.pageX-f.left,this.currentSlider.top=b.pageY-f.top,this.mousePointer={left:b.pageX,top:b.pageY},a(document).on({"mousemove.colorpicker":a.proxy(this.mousemove,this),"touchmove.colorpicker":a.proxy(this.mousemove,this),"mouseup.colorpicker":a.proxy(this.mouseup,this),"touchend.colorpicker":a.proxy(this.mouseup,this)}).trigger("mousemove")}return!1},mousemove:function(a){!a.pageX&&!a.pageY&&a.originalEvent&&a.originalEvent.touches&&(a.pageX=a.originalEvent.touches[0].pageX,a.pageY=a.originalEvent.touches[0].pageY),a.stopPropagation(),a.preventDefault();var b=Math.max(0,Math.min(this.currentSlider.maxLeft,this.currentSlider.left+((a.pageX||this.mousePointer.left)-this.mousePointer.left))),c=Math.max(0,Math.min(this.currentSlider.maxTop,this.currentSlider.top+((a.pageY||this.mousePointer.top)-this.mousePointer.top)));return this.currentSlider.guide.left=b+"px",this.currentSlider.guide.top=c+"px",this.currentSlider.callLeft&&this.color[this.currentSlider.callLeft].call(this.color,b/this.currentSlider.maxLeft),this.currentSlider.callTop&&this.color[this.currentSlider.callTop].call(this.color,c/this.currentSlider.maxTop),"setAlpha"===this.currentSlider.callTop&&this.options.format===!1&&(1!==this.color.value.a?(this.format="rgba",this.color.origFormat="rgba"):(this.format="hex",this.color.origFormat="hex")),this.update(!0),this.element.trigger({type:"changeColor",color:this.color}),!1},mouseup:function(b){return b.stopPropagation(),b.preventDefault(),a(document).off({"mousemove.colorpicker":this.mousemove,"touchmove.colorpicker":this.mousemove,"mouseup.colorpicker":this.mouseup,"touchend.colorpicker":this.mouseup}),!1},change:function(a){this.keyup(a)},keyup:function(a){38===a.keyCode?(this.color.value.a<1&&(this.color.value.a=Math.round(100*(this.color.value.a+.01))/100),this.update(!0)):40===a.keyCode?(this.color.value.a>0&&(this.color.value.a=Math.round(100*(this.color.value.a-.01))/100),this.update(!0)):(this.color=new b(this.input.val(),this.options.colorSelectors),this.color.origFormat&&this.options.format===!1&&(this.format=this.color.origFormat),this.getValue(!1)!==!1&&(this.updateData(),this.updateComponent(),this.updatePicker())),this.element.trigger({type:"changeColor",color:this.color,value:this.input.val()})}},a.colorpicker=d,a.fn.colorpicker=function(b){var c=arguments,e=null,f=this.each(function(){var f=a(this),g=f.data("colorpicker"),h="object"==typeof b?b:{};g||"string"==typeof b?"string"==typeof b&&(e=g[b].apply(g,Array.prototype.slice.call(c,1))):f.data("colorpicker",new d(this,h))});return"getValue"===b?e:f},a.fn.colorpicker.constructor=d});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:70:"/local/templates/bitlate_pro/js/jquery.validate.min.js?150885328722688";s:6:"source";s:54:"/local/templates/bitlate_pro/js/jquery.validate.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*! jQuery Validation Plugin - v1.15.0 - 2/24/2016
 * http://jqueryvalidation.org/
 * Copyright (c) 2016 Jörn Zaefferer; Licensed MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof module&&module.exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){a.extend(a.fn,{validate:function(b){if(!this.length)return void(b&&b.debug&&window.console&&console.warn("Nothing selected, can't validate, returning nothing."));var c=a.data(this[0],"validator");return c?c:(this.attr("novalidate","novalidate"),c=new a.validator(b,this[0]),a.data(this[0],"validator",c),c.settings.onsubmit&&(this.on("click.validate",":submit",function(b){c.settings.submitHandler&&(c.submitButton=b.target),a(this).hasClass("cancel")&&(c.cancelSubmit=!0),void 0!==a(this).attr("formnovalidate")&&(c.cancelSubmit=!0)}),this.on("submit.validate",function(b){function d(){var d,e;return c.settings.submitHandler?(c.submitButton&&(d=a("<input type='hidden'/>").attr("name",c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)),e=c.settings.submitHandler.call(c,c.currentForm,b),c.submitButton&&d.remove(),void 0!==e?e:!1):!0}return c.settings.debug&&b.preventDefault(),c.cancelSubmit?(c.cancelSubmit=!1,d()):c.form()?c.pendingRequest?(c.formSubmitted=!0,!1):d():(c.focusInvalid(),!1)})),c)},valid:function(){var b,c,d;return a(this[0]).is("form")?b=this.validate().form():(d=[],b=!0,c=a(this[0].form).validate(),this.each(function(){b=c.element(this)&&b,b||(d=d.concat(c.errorList))}),c.errorList=d),b},rules:function(b,c){if(this.length){var d,e,f,g,h,i,j=this[0];if(b)switch(d=a.data(j.form,"validator").settings,e=d.rules,f=a.validator.staticRules(j),b){case"add":a.extend(f,a.validator.normalizeRule(c)),delete f.messages,e[j.name]=f,c.messages&&(d.messages[j.name]=a.extend(d.messages[j.name],c.messages));break;case"remove":return c?(i={},a.each(c.split(/\s/),function(b,c){i[c]=f[c],delete f[c],"required"===c&&a(j).removeAttr("aria-required")}),i):(delete e[j.name],f)}return g=a.validator.normalizeRules(a.extend({},a.validator.classRules(j),a.validator.attributeRules(j),a.validator.dataRules(j),a.validator.staticRules(j)),j),g.required&&(h=g.required,delete g.required,g=a.extend({required:h},g),a(j).attr("aria-required","true")),g.remote&&(h=g.remote,delete g.remote,g=a.extend(g,{remote:h})),g}}}),a.extend(a.expr[":"],{blank:function(b){return!a.trim(""+a(b).val())},filled:function(b){var c=a(b).val();return null!==c&&!!a.trim(""+c)},unchecked:function(b){return!a(b).prop("checked")}}),a.validator=function(b,c){this.settings=a.extend(!0,{},a.validator.defaults,b),this.currentForm=c,this.init()},a.validator.format=function(b,c){return 1===arguments.length?function(){var c=a.makeArray(arguments);return c.unshift(b),a.validator.format.apply(this,c)}:void 0===c?b:(arguments.length>2&&c.constructor!==Array&&(c=a.makeArray(arguments).slice(1)),c.constructor!==Array&&(c=[c]),a.each(c,function(a,c){b=b.replace(new RegExp("\\{"+a+"\\}","g"),function(){return c})}),b)},a.extend(a.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",pendingClass:"pending",validClass:"valid",errorElement:"label",focusCleanup:!1,focusInvalid:!0,errorContainer:a([]),errorLabelContainer:a([]),onsubmit:!0,ignore:":hidden",ignoreTitle:!1,onfocusin:function(a){this.lastActive=a,this.settings.focusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,a,this.settings.errorClass,this.settings.validClass),this.hideThese(this.errorsFor(a)))},onfocusout:function(a){this.checkable(a)||!(a.name in this.submitted)&&this.optional(a)||this.element(a)},onkeyup:function(b,c){var d=[16,17,18,20,35,36,37,38,39,40,45,144,225];9===c.which&&""===this.elementValue(b)||-1!==a.inArray(c.keyCode,d)||(b.name in this.submitted||b.name in this.invalid)&&this.element(b)},onclick:function(a){a.name in this.submitted?this.element(a):a.parentNode.name in this.submitted&&this.element(a.parentNode)},highlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).addClass(c).removeClass(d):a(b).addClass(c).removeClass(d)},unhighlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).removeClass(c).addClass(d):a(b).removeClass(c).addClass(d)}},setDefaults:function(b){a.extend(a.validator.defaults,b)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date ( ISO ).",number:"Please enter a valid number.",digits:"Please enter only digits.",equalTo:"Please enter the same value again.",maxlength:a.validator.format("Please enter no more than {0} characters."),minlength:a.validator.format("Please enter at least {0} characters."),rangelength:a.validator.format("Please enter a value between {0} and {1} characters long."),range:a.validator.format("Please enter a value between {0} and {1}."),max:a.validator.format("Please enter a value less than or equal to {0}."),min:a.validator.format("Please enter a value greater than or equal to {0}."),step:a.validator.format("Please enter a multiple of {0}.")},autoCreateRanges:!1,prototype:{init:function(){function b(b){var c=a.data(this.form,"validator"),d="on"+b.type.replace(/^validate/,""),e=c.settings;e[d]&&!a(this).is(e.ignore)&&e[d].call(c,this,b)}this.labelContainer=a(this.settings.errorLabelContainer),this.errorContext=this.labelContainer.length&&this.labelContainer||a(this.currentForm),this.containers=a(this.settings.errorContainer).add(this.settings.errorLabelContainer),this.submitted={},this.valueCache={},this.pendingRequest=0,this.pending={},this.invalid={},this.reset();var c,d=this.groups={};a.each(this.settings.groups,function(b,c){"string"==typeof c&&(c=c.split(/\s/)),a.each(c,function(a,c){d[c]=b})}),c=this.settings.rules,a.each(c,function(b,d){c[b]=a.validator.normalizeRule(d)}),a(this.currentForm).on("focusin.validate focusout.validate keyup.validate",":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable]",b).on("click.validate","select, option, [type='radio'], [type='checkbox']",b),this.settings.invalidHandler&&a(this.currentForm).on("invalid-form.validate",this.settings.invalidHandler),a(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required","true")},form:function(){return this.checkForm(),a.extend(this.submitted,this.errorMap),this.invalid=a.extend({},this.errorMap),this.valid()||a(this.currentForm).triggerHandler("invalid-form",[this]),this.showErrors(),this.valid()},checkForm:function(){this.prepareForm();for(var a=0,b=this.currentElements=this.elements();b[a];a++)this.check(b[a]);return this.valid()},element:function(b){var c,d,e=this.clean(b),f=this.validationTargetFor(e),g=this,h=!0;return void 0===f?delete this.invalid[e.name]:(this.prepareElement(f),this.currentElements=a(f),d=this.groups[f.name],d&&a.each(this.groups,function(a,b){b===d&&a!==f.name&&(e=g.validationTargetFor(g.clean(g.findByName(a))),e&&e.name in g.invalid&&(g.currentElements.push(e),h=h&&g.check(e)))}),c=this.check(f)!==!1,h=h&&c,c?this.invalid[f.name]=!1:this.invalid[f.name]=!0,this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers)),this.showErrors(),a(b).attr("aria-invalid",!c)),h},showErrors:function(b){if(b){var c=this;a.extend(this.errorMap,b),this.errorList=a.map(this.errorMap,function(a,b){return{message:a,element:c.findByName(b)[0]}}),this.successList=a.grep(this.successList,function(a){return!(a.name in b)})}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){a.fn.resetForm&&a(this.currentForm).resetForm(),this.invalid={},this.submitted={},this.prepareForm(),this.hideErrors();var b=this.elements().removeData("previousValue").removeAttr("aria-invalid");this.resetElements(b)},resetElements:function(a){var b;if(this.settings.unhighlight)for(b=0;a[b];b++)this.settings.unhighlight.call(this,a[b],this.settings.errorClass,""),this.findByName(a[b].name).removeClass(this.settings.validClass);else a.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(a){var b,c=0;for(b in a)a[b]&&c++;return c},hideErrors:function(){this.hideThese(this.toHide)},hideThese:function(a){a.not(this.containers).text(""),this.addWrapper(a).hide()},valid:function(){return 0===this.size()},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{a(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")}catch(b){}},findLastActive:function(){var b=this.lastActive;return b&&1===a.grep(this.errorList,function(a){return a.element.name===b.name}).length&&b},elements:function(){var b=this,c={};return a(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function(){var d=this.name||a(this).attr("name");return!d&&b.settings.debug&&window.console&&console.error("%o has no name assigned",this),this.hasAttribute("contenteditable")&&(this.form=a(this).closest("form")[0]),d in c||!b.objectLength(a(this).rules())?!1:(c[d]=!0,!0)})},clean:function(b){return a(b)[0]},errors:function(){var b=this.settings.errorClass.split(" ").join(".");return a(this.settings.errorElement+"."+b,this.errorContext)},resetInternals:function(){this.successList=[],this.errorList=[],this.errorMap={},this.toShow=a([]),this.toHide=a([])},reset:function(){this.resetInternals(),this.currentElements=a([])},prepareForm:function(){this.reset(),this.toHide=this.errors().add(this.containers)},prepareElement:function(a){this.reset(),this.toHide=this.errorsFor(a)},elementValue:function(b){var c,d,e=a(b),f=b.type;return"radio"===f||"checkbox"===f?this.findByName(b.name).filter(":checked").val():"number"===f&&"undefined"!=typeof b.validity?b.validity.badInput?"NaN":e.val():(c=b.hasAttribute("contenteditable")?e.text():e.val(),"file"===f?"C:\\fakepath\\"===c.substr(0,12)?c.substr(12):(d=c.lastIndexOf("/"),d>=0?c.substr(d+1):(d=c.lastIndexOf("\\"),d>=0?c.substr(d+1):c)):"string"==typeof c?c.replace(/\r/g,""):c)},check:function(b){b=this.validationTargetFor(this.clean(b));var c,d,e,f=a(b).rules(),g=a.map(f,function(a,b){return b}).length,h=!1,i=this.elementValue(b);if("function"==typeof f.normalizer){if(i=f.normalizer.call(b,i),"string"!=typeof i)throw new TypeError("The normalizer should return a string value.");delete f.normalizer}for(d in f){e={method:d,parameters:f[d]};try{if(c=a.validator.methods[d].call(this,i,b,e.parameters),"dependency-mismatch"===c&&1===g){h=!0;continue}if(h=!1,"pending"===c)return void(this.toHide=this.toHide.not(this.errorsFor(b)));if(!c)return this.formatAndAdd(b,e),!1}catch(j){throw this.settings.debug&&window.console&&console.log("Exception occurred when checking element "+b.id+", check the '"+e.method+"' method.",j),j instanceof TypeError&&(j.message+=".  Exception occurred when checking element "+b.id+", check the '"+e.method+"' method."),j}}if(!h)return this.objectLength(f)&&this.successList.push(b),!0},customDataMessage:function(b,c){return a(b).data("msg"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase())||a(b).data("msg")},customMessage:function(a,b){var c=this.settings.messages[a];return c&&(c.constructor===String?c:c[b])},findDefined:function(){for(var a=0;a<arguments.length;a++)if(void 0!==arguments[a])return arguments[a]},defaultMessage:function(b,c){var d=this.findDefined(this.customMessage(b.name,c.method),this.customDataMessage(b,c.method),!this.settings.ignoreTitle&&b.title||void 0,a.validator.messages[c.method],"<strong>Warning: No message defined for "+b.name+"</strong>"),e=/\$?\{(\d+)\}/g;return"function"==typeof d?d=d.call(this,c.parameters,b):e.test(d)&&(d=a.validator.format(d.replace(e,"{$1}"),c.parameters)),d},formatAndAdd:function(a,b){var c=this.defaultMessage(a,b);this.errorList.push({message:c,element:a,method:b.method}),this.errorMap[a.name]=c,this.submitted[a.name]=c},addWrapper:function(a){return this.settings.wrapper&&(a=a.add(a.parent(this.settings.wrapper))),a},defaultShowErrors:function(){var a,b,c;for(a=0;this.errorList[a];a++)c=this.errorList[a],this.settings.highlight&&this.settings.highlight.call(this,c.element,this.settings.errorClass,this.settings.validClass),this.showLabel(c.element,c.message);if(this.errorList.length&&(this.toShow=this.toShow.add(this.containers)),this.settings.success)for(a=0;this.successList[a];a++)this.showLabel(this.successList[a]);if(this.settings.unhighlight)for(a=0,b=this.validElements();b[a];a++)this.settings.unhighlight.call(this,b[a],this.settings.errorClass,this.settings.validClass);this.toHide=this.toHide.not(this.toShow),this.hideErrors(),this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return a(this.errorList).map(function(){return this.element})},showLabel:function(b,c){var d,e,f,g,h=this.errorsFor(b),i=this.idOrName(b),j=a(b).attr("aria-describedby");h.length?(h.removeClass(this.settings.validClass).addClass(this.settings.errorClass),h.html(c)):(h=a("<"+this.settings.errorElement+">").attr("id",i+"-error").addClass(this.settings.errorClass).html(c||""),d=h,this.settings.wrapper&&(d=h.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()),this.labelContainer.length?this.labelContainer.append(d):this.settings.errorPlacement?this.settings.errorPlacement(d,a(b)):d.insertAfter(b),h.is("label")?h.attr("for",i):0===h.parents("label[for='"+this.escapeCssMeta(i)+"']").length&&(f=h.attr("id"),j?j.match(new RegExp("\\b"+this.escapeCssMeta(f)+"\\b"))||(j+=" "+f):j=f,a(b).attr("aria-describedby",j),e=this.groups[b.name],e&&(g=this,a.each(g.groups,function(b,c){c===e&&a("[name='"+g.escapeCssMeta(b)+"']",g.currentForm).attr("aria-describedby",h.attr("id"))})))),!c&&this.settings.success&&(h.text(""),"string"==typeof this.settings.success?h.addClass(this.settings.success):this.settings.success(h,b)),this.toShow=this.toShow.add(h)},errorsFor:function(b){var c=this.escapeCssMeta(this.idOrName(b)),d=a(b).attr("aria-describedby"),e="label[for='"+c+"'], label[for='"+c+"'] *";return d&&(e=e+", #"+this.escapeCssMeta(d).replace(/\s+/g,", #")),this.errors().filter(e)},escapeCssMeta:function(a){return a.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g,"\\$1")},idOrName:function(a){return this.groups[a.name]||(this.checkable(a)?a.name:a.id||a.name)},validationTargetFor:function(b){return this.checkable(b)&&(b=this.findByName(b.name)),a(b).not(this.settings.ignore)[0]},checkable:function(a){return/radio|checkbox/i.test(a.type)},findByName:function(b){return a(this.currentForm).find("[name='"+this.escapeCssMeta(b)+"']")},getLength:function(b,c){switch(c.nodeName.toLowerCase()){case"select":return a("option:selected",c).length;case"input":if(this.checkable(c))return this.findByName(c.name).filter(":checked").length}return b.length},depend:function(a,b){return this.dependTypes[typeof a]?this.dependTypes[typeof a](a,b):!0},dependTypes:{"boolean":function(a){return a},string:function(b,c){return!!a(b,c.form).length},"function":function(a,b){return a(b)}},optional:function(b){var c=this.elementValue(b);return!a.validator.methods.required.call(this,c,b)&&"dependency-mismatch"},startRequest:function(b){this.pending[b.name]||(this.pendingRequest++,a(b).addClass(this.settings.pendingClass),this.pending[b.name]=!0)},stopRequest:function(b,c){this.pendingRequest--,this.pendingRequest<0&&(this.pendingRequest=0),delete this.pending[b.name],a(b).removeClass(this.settings.pendingClass),c&&0===this.pendingRequest&&this.formSubmitted&&this.form()?(a(this.currentForm).submit(),this.formSubmitted=!1):!c&&0===this.pendingRequest&&this.formSubmitted&&(a(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=!1)},previousValue:function(b,c){return a.data(b,"previousValue")||a.data(b,"previousValue",{old:null,valid:!0,message:this.defaultMessage(b,{method:c})})},destroy:function(){this.resetForm(),a(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur")}},classRuleSettings:{required:{required:!0},email:{email:!0},url:{url:!0},date:{date:!0},dateISO:{dateISO:!0},number:{number:!0},digits:{digits:!0},creditcard:{creditcard:!0}},addClassRules:function(b,c){b.constructor===String?this.classRuleSettings[b]=c:a.extend(this.classRuleSettings,b)},classRules:function(b){var c={},d=a(b).attr("class");return d&&a.each(d.split(" "),function(){this in a.validator.classRuleSettings&&a.extend(c,a.validator.classRuleSettings[this])}),c},normalizeAttributeRule:function(a,b,c,d){/min|max|step/.test(c)&&(null===b||/number|range|text/.test(b))&&(d=Number(d),isNaN(d)&&(d=void 0)),d||0===d?a[c]=d:b===c&&"range"!==b&&(a[c]=!0)},attributeRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)"required"===c?(d=b.getAttribute(c),""===d&&(d=!0),d=!!d):d=f.attr(c),this.normalizeAttributeRule(e,g,c,d);return e.maxlength&&/-1|2147483647|524288/.test(e.maxlength)&&delete e.maxlength,e},dataRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)d=f.data("rule"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase()),this.normalizeAttributeRule(e,g,c,d);return e},staticRules:function(b){var c={},d=a.data(b.form,"validator");return d.settings.rules&&(c=a.validator.normalizeRule(d.settings.rules[b.name])||{}),c},normalizeRules:function(b,c){return a.each(b,function(d,e){if(e===!1)return void delete b[d];if(e.param||e.depends){var f=!0;switch(typeof e.depends){case"string":f=!!a(e.depends,c.form).length;break;case"function":f=e.depends.call(c,c)}f?b[d]=void 0!==e.param?e.param:!0:(a.data(c.form,"validator").resetElements(a(c)),delete b[d])}}),a.each(b,function(d,e){b[d]=a.isFunction(e)&&"normalizer"!==d?e(c):e}),a.each(["minlength","maxlength"],function(){b[this]&&(b[this]=Number(b[this]))}),a.each(["rangelength","range"],function(){var c;b[this]&&(a.isArray(b[this])?b[this]=[Number(b[this][0]),Number(b[this][1])]:"string"==typeof b[this]&&(c=b[this].replace(/[\[\]]/g,"").split(/[\s,]+/),b[this]=[Number(c[0]),Number(c[1])]))}),a.validator.autoCreateRanges&&(null!=b.min&&null!=b.max&&(b.range=[b.min,b.max],delete b.min,delete b.max),null!=b.minlength&&null!=b.maxlength&&(b.rangelength=[b.minlength,b.maxlength],delete b.minlength,delete b.maxlength)),b},normalizeRule:function(b){if("string"==typeof b){var c={};a.each(b.split(/\s/),function(){c[this]=!0}),b=c}return b},addMethod:function(b,c,d){a.validator.methods[b]=c,a.validator.messages[b]=void 0!==d?d:a.validator.messages[b],c.length<3&&a.validator.addClassRules(b,a.validator.normalizeRule(b))},methods:{required:function(b,c,d){if(!this.depend(d,c))return"dependency-mismatch";if("select"===c.nodeName.toLowerCase()){var e=a(c).val();return e&&e.length>0}return this.checkable(c)?this.getLength(b,c)>0:b.length>0},email:function(a,b){return this.optional(b)||/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)},url:function(a,b){return this.optional(b)||/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(a)},date:function(a,b){return this.optional(b)||!/Invalid|NaN/.test(new Date(a).toString())},dateISO:function(a,b){return this.optional(b)||/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)},number:function(a,b){return this.optional(b)||/^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)},digits:function(a,b){return this.optional(b)||/^\d+$/.test(a)},minlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e>=d},maxlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||d>=e},rangelength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e>=d[0]&&e<=d[1]},min:function(a,b,c){return this.optional(b)||a>=c},max:function(a,b,c){return this.optional(b)||c>=a},range:function(a,b,c){return this.optional(b)||a>=c[0]&&a<=c[1]},step:function(b,c,d){var e=a(c).attr("type"),f="Step attribute on input type "+e+" is not supported.",g=["text","number","range"],h=new RegExp("\\b"+e+"\\b"),i=e&&!h.test(g.join());if(i)throw new Error(f);return this.optional(c)||b%d===0},equalTo:function(b,c,d){var e=a(d);return this.settings.onfocusout&&e.not(".validate-equalTo-blur").length&&e.addClass("validate-equalTo-blur").on("blur.validate-equalTo",function(){a(c).valid()}),b===e.val()},remote:function(b,c,d,e){if(this.optional(c))return"dependency-mismatch";e="string"==typeof e&&e||"remote";var f,g,h,i=this.previousValue(c,e);return this.settings.messages[c.name]||(this.settings.messages[c.name]={}),i.originalMessage=i.originalMessage||this.settings.messages[c.name][e],this.settings.messages[c.name][e]=i.message,d="string"==typeof d&&{url:d}||d,h=a.param(a.extend({data:b},d.data)),i.old===h?i.valid:(i.old=h,f=this,this.startRequest(c),g={},g[c.name]=b,a.ajax(a.extend(!0,{mode:"abort",port:"validate"+c.name,dataType:"json",data:g,context:f.currentForm,success:function(a){var d,g,h,j=a===!0||"true"===a;f.settings.messages[c.name][e]=i.originalMessage,j?(h=f.formSubmitted,f.resetInternals(),f.toHide=f.errorsFor(c),f.formSubmitted=h,f.successList.push(c),f.invalid[c.name]=!1,f.showErrors()):(d={},g=a||f.defaultMessage(c,{method:e,parameters:b}),d[c.name]=i.message=g,f.invalid[c.name]=!0,f.showErrors(d)),i.valid=j,f.stopRequest(c,j)}},d)),"pending")}}});var b,c={};a.ajaxPrefilter?a.ajaxPrefilter(function(a,b,d){var e=a.port;"abort"===a.mode&&(c[e]&&c[e].abort(),c[e]=d)}):(b=a.ajax,a.ajax=function(d){var e=("mode"in d?d:a.ajaxSettings).mode,f=("port"in d?d:a.ajaxSettings).port;return"abort"===e?(c[f]&&c[f].abort(),c[f]=b.apply(this,arguments),c[f]):b.apply(this,arguments)})});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:56:"/local/templates/bitlate_pro/js/custom.js?15088532879573";s:6:"source";s:41:"/local/templates/bitlate_pro/js/custom.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
function showCustomTooltip(){
    setTimeout(function(){
        if ($('html').hasClass('slideout-open')) {
            showCustomTooltip();
        } else {
            var $toggle = $('#custom-menu .toggle');
            if ($toggle.attr('data-toggle') !== undefined) {
                $toggle.foundation('show');
            }
        }
    }, 3000);
}

function changePositions() {
    var params = '',
        $sortBlock = $("#custom-menu .sortable"),
        url = $sortBlock.attr('data-url');
    
    $sortBlock.find('input').each(function() {
        var $parent = $(this).closest('.sortable-item'),
            isVisible = ($parent.hasClass('sortable-invisible')) ? '0' : '1';
        params = params + '|' + $(this).val() + '-' + isVisible;
    });
    url = url.replace('positions=', 'positions=' + params);
    window.location.href = url;
    applyChange();
}

$(document).ready(function(){
    if ($("#custom-menu").length > 0) {
        showCustomTooltip();
        
        var $customMenu = $('#custom-menu'),
            $tooltip = $('.tooltip-fixed'),
            BxPanel,
            customCalc = function(){
                var panelTop = 0, // отступ "Настройки решения" от верхней границы. Граница = край окна || панель управления Bitrix || шапка сайта на мобиле || закрепленное меню
                    offsetTop = 0, // расстояние, равное высоте панели управления Bitrix || высота шапки сайта на мобиле || высота закрепленного меню
                    bxPanelHeight = 0,
                    pageYOffset = window.pageYOffset,
                    headerHeight = $('header').innerHeight(),
                    foundationScreen = Foundation.MediaQuery.current;

                if (BxPanel !== undefined) {
                    bxPanelHeight = BxPanel.DIV.clientHeight;
                    offsetTop += bxPanelHeight;

                    if (pageYOffset >= offsetTop && BxPanel.isFixed() === false) {
                        panelTop += 0;
                    } else if (BxPanel.isFixed() === true) {
                        panelTop += bxPanelHeight;
                    } else {
                        panelTop = panelTop + bxPanelHeight - pageYOffset;
                    }
                }
                if ($.inArray(foundationScreen, ['small', 'medium', 'large']) !== -1) {
                    if (window.var.isMenuFixed) {
                        panelTop += headerHeight;
                    } else {
                        offsetTop += headerHeight;
                        if (offsetTop >= pageYOffset) {
                            panelTop = offsetTop - pageYOffset;
                        }
                    }
                }
                if (window.var.isMenuFixed) {
                    if ($.inArray(foundationScreen, ['xlarge', 'xxlarge']) !== -1) {
                        if (pageYOffset > window.var.menuPositionTop) {
                            panelTop += window.var.menuHeight;
                        }
                    }
                }
                $customMenu.css({
                    top: panelTop,
                    height: window.innerHeight - panelTop
                });
                $tooltip.css({top: panelTop + 5.5});
            };
        window.onscroll = customCalc;
        window.onresize = customCalc;
        if (window.BX !== undefined) {
            BX.ready(function(){
                BxPanel = BX.admin.panel;
                BX.addCustomEvent('onTopPanelCollapse',BX.delegate(customCalc,this));
                BX.addCustomEvent('onTopPanelFix',BX.delegate(customCalc,this));
            });
        }
        setTimeout(customCalc, 100);
    }

    $(document).on('click', '#custom-menu .toggle', function(){
        var $self = $(this);
        if ($self.attr('data-toggle') !== undefined) {
            $(this).foundation('hide');
        }
        $('#custom-menu').toggleClass('active').promise().done(function(){
            if (window.customCalc !== undefined) {
                customCalc();
            }
        });
    });
    
    $('#custom-menu .toggle').on('hide.zf.tooltip', function(){
        $(this).foundation('destroy');
    });

    $(document).on('change', '.custom-option:not(.jq-selectbox)', function(){
        window.location.href = $(this).val();
        applyChange();
    });
    
    var $colorpicker = $('#colorpicker'),
        $colorpickers = $('.colorpicker-element'),
        colorpickerParams = {
            format: 'hex',
            align: 'left',
            inline: true,
            sliders: {
                saturation: {
                    maxLeft: 150,
                    maxTop: 150
                },
                hue: {maxTop: 150}
            },
            container: '#custom-menu'
        };
    
    if ($colorpickers.length) {
        $colorpickers.each(function(){
            var $self = $(this);

            colorpickerParams['container'] = $self.attr('data-wrap');
            $self.colorpicker(colorpickerParams);
        });
        $colorpickers.on('changeColor', function(e){
            var $self = $(e.target),
                color = e.color.toHex().slice(1);

            $($self.attr('data-hex')).val(color);
            $self.addClass('change');
        });
        $('.colorpicker-input').mask('ffffff', {translation:{'f':{pattern:/[0-9a-fA-F]/}}});
        $(document).on('change', '.colorpicker-input', function(){
            var $self = $(this);

            $('.colorpicker-element[data-hex="#' + $self.attr('id') + '"]').colorpicker('setValue', '#' + $self.val());
        });
        $colorpicker.on('show.zf.dropdown', function(){
            $('.colorpicker-icon').removeClass('checked');
        });
        $colorpicker.on('hide.zf.dropdown', function(){
            if ($colorpickers.filter('.change').length > 0) {
                $('.colorpicker-icon').addClass('checked');
                $('.radio-color input[type="radio"]').prop('checked', false);
                var url = $('.colorpicker-icon').attr('data-url') + '&primary=' + $('#hex-color-primary').val() + '&secondary=' + $('#hex-color-secondary').val();
                window.location.href = url;
                applyChange();
            }
        });
    }
    
    $('#custom-menu .body').on('scroll', function(){
        if ($colorpicker.length && $colorpicker.hasClass('is-open')) {
            $colorpicker.foundation('close');
        }
    });
    $('#custom-menu-accordion').on('up.zf.accordion', function(){
        var $self = $(this);

        $self.children('.accordion-item:first-child').appendTo($self);
    });
    $("#custom-menu .sortable").sortable({
        items: '.sortable-item:not(.sortable-disabled)',
        placeholder: 'sortable-placeholder',
        cancel: '.sortable-invisible',
        forcePlaceholderSize: true,
        update: function(e, ui){
            changePositions();
        }
    });
    $('.sortable-grid').sortable({
        containment: '#page',
        placeholder: 'sortable-placeholder',
        start: function(e, ui){
            var item  = ui.item;

            ui.placeholder.addClass(ui.item.attr('class')).removeClass('ui-sortable-handle');
            if (item.hasClass('main-banner-item')) {
                item.removeClass('main-banner-item');
                item.data('class', 'main-banner-item');
            }
            if (item.hasClass('isotope-item')) {
                item.removeClass('isotope-item');
                item.data('class', 'isotope-item');
            }
            ui.placeholder.css({
                top: ui.originalPosition.top,
                left: ui.originalPosition.left
            });
            $(e.target).isotope('reloadItems');
        },
        change: function(e, ui){
            $(e.target).isotope('reloadItems').isotope({sortBy: 'original-order'});
        },
        stop: function(e, ui){
            var item  = ui.item;

            item.addClass(item.data('class')).css('zIndex','');
            $(e.target).isotope('reloadItems').isotope({sortBy: 'original-order'});
        }
    });
    
    $('.sortable-banner').sortable({
        items: '.owl-item',
        placeholder: 'sortable-placeholder owl-item',
        start: function(e, ui){
            ui.placeholder.css({
                width: ui.item.width(),
                height: ui.item.height(),
                marginRight: 20,
            });
        },
        update: function(e, ui){
            var params = '',
                $sortBlock = $('.main-banner.sortable-banner'),
                url = $sortBlock.attr('data-url');
            
            $sortBlock.find('input').each(function() {
                params = params + '|' + $(this).val();
            });
            url = url.replace('bannerpositions=', 'bannerpositions=' + params);
            window.location.href = url;
            applyChange();
        }
    });
    
    $(document).on('click', '.sortable .hide-block', function(e){
        var $self = $(this),
            $parent = $self.closest('.sortable-item'),
            $sortBlock = $("#custom-menu .sortable");
            selfText = ($parent.hasClass('sortable-invisible')) ? $sortBlock.attr('data-invisible-text') : $sortBlock.attr('data-visible-text');

        $parent.toggleClass('sortable-invisible');
        $self.children('span').text(selfText);
        changePositions();
        e.preventDefault();
    });
});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:55:"/local/templates/bitlate_pro/js/site.js?150885328730909";s:6:"source";s:39:"/local/templates/bitlate_pro/js/site.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
function getNewsItems(elem, containerName, reload) {
    if (!$(elem).hasClass('ajax-loading')) {
        $(elem).addClass('ajax-loading');
    } else {
        return false;
    }
    $.ajax({
        type: 'GET',
        url: $(elem).attr('data-ajax'),
        success: function(data) {
            if (reload === true) {
                $('#' + containerName).html(data);
            } else {
                $('#' + containerName).append(data);
            }
            $(elem).removeClass('ajax-loading');
        }
    });
}

function showFilterLoading() {
    $('#catalog-content').addClass('loading');
    $('#catalog-preloader').show();
    $('.filter-tip').hide();
}
function hideFilterLoading() {
    $('#catalog-content').removeClass('loading');
    $('#catalog-preloader').hide();
}

function getCatalogItems(elem, block, reload, tab) {
    if (!$(elem).hasClass('ajax-loading')) {
        $(elem).addClass('ajax-loading');
    } else {
        return false;
    }
    var url = $(elem).attr('data-ajax');
    if (!url) {
        url = $(elem).attr('href');
    }
    var isHistory = true;
    var urlHistory = url.replace('&load=Y', '');
    urlHistory = urlHistory.replace('?load=Y&', '?');
    urlHistory = urlHistory.replace('?load=Y', '');
    if (tab !== true) {
        if (!(window.history && history.pushState)) {
            isHistory = false;
        }
    }
    if (isHistory === true) {
        if (reload === true) {
            showFilterLoading();
        }
        $.ajax({
            type: 'GET',
            url: url,
            success: function(data) {
                if (tab !== true) {
                    history.replaceState(null, null, urlHistory);
                }
                if (reload === true) {
                    $(block).html(data).foundation();
                    initSelect(block + ' select');
                    hideFilterLoading();
                } else {
                    if (tab === true) {
                        if ($('.products-flex-grid').hasClass('sortable-grid')) {
                            $(block).append($(data).find('.products-flex-grid').html());
                            $('.products-flex-grid.sortable-grid').sortable("refresh");
                        } else {
                            $(block).append($(data).html());
                        }
                    } else {
                        $(block).append($(data).find(block).html());
                    }
                    if ($('#catalog-content .catalog-footer').length > 0) {
                        $('#catalog-content .catalog-footer').html($(data).find('.catalog-footer').html());
                    }
                }
                if ($('.products-flex-grid').length > 0) {
                    if (reload !== true) {
                        $('.products-flex-grid').isotope('reloadItems');
                    }
                    $('.products-flex-grid').isotope(productGridOptions);
                }
                if ($('.product-list-item .dropdown-pane').length > 0) {
                    $('.product-list-item .dropdown-pane').foundation();
                }
                $(elem).removeClass('ajax-loading');
                updateAdd2Basket();
                updateAdd2Liked();
                updateAdd2Compare();
                initTimer();
            }
        });
        return false;
    } else {
        window.location.href = urlHistory;
    }
}

function initValidateOrder(formId, rulesArray) {
   $(formId).validate({
        rules: rulesArray,
        onsubmit: false,
        highlight: function( element ){
            $(element).addClass('error');
        },
        unhighlight: function( element ){
            $(element).removeClass('error');
        },
        submitHandler: function( form ){
            return true;
        },
        errorPlacement: function( error, element ){
            $.fancybox.hideLoading();
            $.fancybox.helpers.overlay.close();
            return false;
        }
    });
}

function initValidateWithRules(formId, rulesArray) {
   $(formId).validate({
        rules: rulesArray,
        highlight: function( element ){
            $(element).addClass('error');
        },
        unhighlight: function( element ){
            $(element).removeClass('error');
        },
        submitHandler: function( form ){
            switch (formId) {
                case "#registration-static form":
                case "#registration form":
                    var login = $(form).find('input[name=USER_LOGIN]').val();
                    $(form).find('input[name=USER_EMAIL]').val(login);
                    var fullName = $(form).find('input[name=USER_FULL_NAME]').val().split(' ');
                    $(form).find('input[name=USER_LAST_NAME]').val(fullName[0].trim());
                    delete fullName[0];
                    $(form).find('input[name=USER_NAME]').val(fullName.join(' ').trim());
                    break;
            }
            return true;
        },
        errorPlacement: function( error, element ){
            return false;
        }
    });
}

function initValidate(formId) {
    var rulesArray = false;
    switch (formId) {
        case "#main-feedback-form":
            var rulesArray = {
                user_name: {
                    required: true,
                    minlength: 2
                },
                user_email: {
                    required: true,
                    email: true,
                    minlength: 2
                },
                captcha_word: {
                    required: true
                },
                MESSAGE: {
                    required: true,
                    minlength: 4
                }
            };
            break;
        case "#login-static form":
        case "#login form":
            var rulesArray = {
                USER_LOGIN: {
                    required: true
                },
                USER_PASSWORD: {
                    required: true
                }
            };
            break;
        case "#registration-static form":
        case "#registration form":
            var rulesArray = {
                USER_FULL_NAME: {
                    required: true
                },
                USER_LOGIN: {
                    required: true,
                    email: true
                },
                USER_PASSWORD: {
                    required: true,
                    minlength: 6
                },
                USER_CONFIRM_PASSWORD: {
                    required: true,
                    minlength: 6,
                    equalTo: '.registration-form input[name=USER_PASSWORD]'
                },
                captcha_word: {
                    required: true,
                }
            };
            break;
        case "#confirmation form":
            var rulesArray = {
                login: {
                    required: true,
                    email: true
                },
                confirm_code: {
                    required: true
                }
            };
            break;
        case "#forgot form":
            var rulesArray = {
                USER_EMAIL: {
                    required: true,
                    email: true
                }
            };
            break;
        case "#change form":
            var rulesArray = {
                USER_LOGIN: {
                    required: true
                },
                USER_CHECKWORD: {
                    required: true
                },
                USER_PASSWORD: {
                    required: true,
                    minlength: 6
                },
                USER_CONFIRM_PASSWORD: {
                    required: true,
                    minlength: 6,
                    equalTo: '.forgot-form input[name=USER_PASSWORD]'
                }
            };
            break;
        case "#profile-pass form":
            var rulesArray = {
                NEW_PASSWORD: {
                    required: true,
                    minlength: 6
                },
                NEW_PASSWORD_CONFIRM: {
                    required: true,
                    minlength: 6,
                    equalTo: '#profile-pass input[name=NEW_PASSWORD]'
                }
            };
            break;
        case "#profile-data form":
            var rulesArray = {
                LAST_NAME: {
                    required: true
                },
                NAME: {
                    required: true
                },
                EMAIL: {
                    required: true,
                    email: true
                },
                PERSONAL_PHONE: {
                    required: true
                }
            };
            break;
        case "#buy-to-click-form":
            var rulesArray = {
                NAME: {
                    required: true,
                    minlength: 3,
                },
                PHONE: {
                    required: true
                }
            };
            break;
        default:
            break;
    }
    if (rulesArray !== false) {
        initValidateWithRules(formId, rulesArray);
    }
}

function initTimer() {
    var $actionTimer = $('.product-action-banner.timer');
    if ($actionTimer.length) {
        $actionTimer.each(function(){
            var $self = $(this),
                $hour = $self.find('.hour strong'),
                $min = $self.find('.min strong'),
                $sec = $self.find('.sec strong'),
                today = new Date();
                timeEnd = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 23, 59, 59);

            function timer($hour, $min, $sec, timeEnd) {
                var timeNow = new Date(),
                    timeLeft = new Date(timeEnd - timeNow),
                    timeLeftSec = parseInt(timeLeft / 1000),
                    timeLeftMin = parseInt(timeLeftSec / 60),
                    timeLeftHour = parseInt(timeLeftMin / 60);

                $hour.text(int2num(timeLeftHour));
                $min.text(int2num(timeLeftMin - (timeLeftHour * 60)));
                $sec.text(int2num(timeLeftSec - (timeLeftMin * 60)));
            }
            setInterval(function(){
                timer($hour, $min, $sec, timeEnd);
            }, 1000);
        });
    }
}

function initProductPreviewZoom() {
    if ($(".product-preview-main img.zoom").length) {
        $(".product-preview-main img.zoom").each(function(){
            var $self = $(this);
    
            if ($self.is(':visible')) {
                $self.imagezoomsl({
                    showstatus: false,
                    magnifiereffectanimate: "fadeIn",
                    loopspeedanimate: 1,
                });
            }
        });
    }
}

function initSelect(block) {
    $(block).styler({
        singleSelectzIndex: 20
    });
}

function initSlider()
{
    var $slider = $('.slider');
    if ($slider.length) {
        $slider.each(function () {
            var $self = $(this);

            if ($self.is(':visible') && ($self.data('init') !== true)) {
                new Foundation.Slider($self);
                $self.data({
                    'init': true,
                    'changed': 0
                });
            }
        });
    }
}

function updateAdd2Basket() {
    $('.add2cart span').html(NL_ADD_TO_BASKET_BUTTON);
    $('.add2cart').attr('href', 'javascript:;');
    $('.add2cart').removeClass('in_basket');
    if ($('.add2cart').length > 0 && $('.basket_products div').length > 0) {
        $('.basket_products div').each(function(){
            var productId = $(this).attr('data-product-id');
            $('.add2cart[data-product-id=' + productId + '] span').html(NL_ADD_TO_BASKET);
            $('.add2cart[data-product-id=' + productId + ']').attr('href', NL_ADD_TO_BASKET_URL);
            $('.add2cart[data-product-id=' + productId + ']').addClass('in_basket');
        });
    }
}

function updateAdd2Liked() {
    if ($('#bx_favorite_count').length > 0 && $('.liked_products div').length > 0) {
        $('.liked_products div').each(function(){
            var productId = $(this).attr('data-product-id');
            $('.add2liked[data-product-id=' + productId + '] span').html(NL_ADD_2_LIKED_DELETE);
            $('.add2liked[data-product-id=' + productId + ']').attr('title', NL_ADD_2_LIKED_DELETE);
            $('.add2liked[data-product-id=' + productId + ']').addClass('active');
        });
    }
}

function updateAdd2Compare() {
    if ($('#bx_compare_count').length > 0 && $('.compare_products div').length > 0) {
        $('.compare_products div').each(function(){
            var productId = $(this).attr('data-product-id');
            $('.add2compare[data-product-id=' + productId + '] span').html(NL_ADD_2_COMPARE);
            $('.add2compare[data-product-id=' + productId + ']').attr('title', NL_ADD_2_COMPARE);
            $('.add2compare[data-product-id=' + productId + ']').attr('href', NL_ADD_2_COMPARE_URL);
            $('.add2compare[data-product-id=' + productId + ']').addClass('active');
        });
    }
}

function preview2Basket($self) {
    if ($self) {
        $self.addClass('in_basket');
        if ($self.attr('data-preview') !== undefined) {
            var $preview = $($self.attr('data-preview') + ':visible'),
                $cart = $('.header-cart:visible');

            if ($preview.length) {
                $preview.clone().css({
                    'position':'absolute',
                    'top':$preview.offset().top,
                    'left':$preview.offset().left,
                    'z-index':3,
                    'max-width':'200px',
                }).appendTo('#page').animate({
                    'top' :$cart.offset().top,
                    'left':$cart.offset().left,
                    'width':'75px',
                }, 700, function(){
                    $(this).remove();
                });
            }
        }
    }
}

function int2num(val) {
    return val < 10 ? '0' + val : val;
}

function inclination(n, s1, s2, s3) {
    var m = n % 10;
    var j = n % 100;
    if (m == 0 || m >= 5 || (j >= 10 && j <= 20)) return s3;
    if (m >= 2 && m <= 4) return s2;
    return s1;
}

function add2compare(productId, count, message, url) {
    var captionMini = count + ' ' + inclination(count, NL_PRODUCT_1, NL_PRODUCT_2, NL_PRODUCT_10);
    var caption = count + ' ' + inclination(count, NL_PRODUCT_1, NL_PRODUCT_2, NL_PRODUCT_10) + ' ' + NL_ADD_2_COMPARE_CAPTION;
    $(".add2compare[data-product-id=" + productId + "] span").html(message);
    $(".add2compare[data-product-id=" + productId + "]").attr('title', message);
    $(".add2compare[data-product-id=" + productId + "]").attr('href', url);
    $(".add2compare[data-product-id=" + productId + "]").addClass('active');
    $('#bx_compare_count .compare_products').append('<div data-product-id="' + productId + '"></div>');
    if (count > 0) {
        if ($("#page").hasClass("header-v1") || $("#page").hasClass("header-v3")) {
            $('#bx_compare_count .add2compare_counter').html(count);
        } else {
            $('#bx_compare_count .add2compare_counter').html(' (' + count + ')');
        }
        $('#bx_compare_count_mini .header-block-info-counter').html(count);
        $('#bx_compare_count_mini .header-block-info-counter').attr('title', captionMini);
    } else {
        $('#bx_compare_count span').html('');
        $('#bx_compare_count_mini .header-block-info-counter').html('');
        $('#bx_compare_count_mini .header-block-info-counter').attr('title', '');
    }
    $('#bx_compare_count_mini .header-block-info-desc').html(caption);
    $('#bx_compare_count_mini .header-block-info-desc').attr('title', caption);
}

if (window.frameCacheVars !== undefined) {
    BX.addCustomEvent("onFrameDataReceived" , function(json) {
        $('#bx_personal_menu .dropdown-pane').foundation();
        updateAdd2Basket();
        updateAdd2Liked();
        updateAdd2Compare();
    });
} else {
    $(document).ready(function() {
        updateAdd2Basket();
        updateAdd2Liked();
        updateAdd2Compare();
    });
}

function applyChange(){
    $.fancybox.helpers.overlay.open({
        closeClick: false,
        parent: $('body')
    });
    $.fancybox.showLoading();
}

$(document).ready(function() {
    var initSlider = false;
    var initSliderCount = 0;
    
    if ($('section').hasClass('fancy')) {
        if ($('article #login-static').hasClass('fancybox-block-login') && $('article').hasClass('cart-container-order')) {
            $('article.cart-container-order').attr('class', 'inner-container float-center table-container');
        }
        $('article .fancybox-block').show();
    }
    
    $('#catalog-filter .slider').on('moved.zf.slider', function(e, handle){
        if (handle.attr('aria-valuenow') == handle.attr('aria-valuemax') || handle.attr('aria-valuenow') == handle.attr('aria-valuemin')) {
            $("#" + handle.attr('aria-controls')).val('');
        }
    })
    
    $('#catalog-filter .slider').on('changed.zf.slider', function(e, handle){
        initSliderCount++;
        if (!initSlider) {
            if (initSliderCount >= $('#catalog-filter .slider').length) {
                initSlider = true;
            }
        } else {
            smartFilter.reload($("#" + handle.attr('aria-controls')).get(0));
        }
    });
    
    $(document).on('change', '.catalog-sorting select', function(e){
        var url = $(this).val();
        if (url != '') {
            var newSort = $(this).find('option:selected').attr('data-sort-code');
            $('#catalog-filter input[name=sort]').val(newSort);
            $(this).attr('data-ajax', url);
            $('#catalog-filter #set_filter').attr('href', $(this).attr('data-ajax'));
            getCatalogItems(this, '.catalog-reload', true);
            return false;
        }
    });
    
    $(document).on('click', '.catalog-view-select a', function(e){
        var newView = $(this).attr('data-view-code');
        $('#catalog-filter input[name=view]').val(newView);
        $('#catalog-filter #set_filter').attr('href', $(this).attr('data-ajax'));
        getCatalogItems(this, '.catalog-reload', true);
        return false;
    });
    
    $(document).on('click', '.catalog-show-count a', function(e){
        var newCount = $(this).attr('data-count-code');
        $('#catalog-filter input[name=PAGE_EL_COUNT]').val(newCount);
        $('#catalog-filter #set_filter').attr('href', $(this).attr('data-ajax'));
        getCatalogItems(this, '.catalog-reload', true);
        return false;
    });
    
    $(document).on('click', '.show-del-delivery', function(e){
        $('.message-block').addClass('hide');
        $('.confirm-block').removeClass('hide');
        $('#del-delivery form input[name=id]').val($(this).attr('data-id'));
    });
    
    $(document).on('click', '.add2liked, .remove2liked', function(e){
        var productId = $(this).attr('data-product-id'),
            sessid = BX.bitrix_sessid(),
            action = 'check';
        var isShowLoading = ($(this).hasClass('close-button')) ? true : false;
        if (productId && action) {
            if (isShowLoading) {
                $.fancybox.showLoading();
            }
            $.post($(this).attr('data-ajax'), {'action': action, 'ID': productId, 'sessid': sessid}, function(data) {
                if (data.success == true) {
                    if (data.type == 'add') {
                        $('.add2liked[data-product-id=' + productId + '] span').html(NL_ADD_2_LIKED_DELETE);
                        $('.add2liked[data-product-id=' + productId + '] title').html(NL_ADD_2_LIKED_DELETE);
                        $('.add2liked[data-product-id=' + productId + ']').addClass('active');
                        $('#bx_favorite_count .liked_products').append('<div data-product-id="' + productId + '"></div>');
                        $('.add2liked.fancybox').attr('href', 'javascript:;');
                        $('#bx_favorite_count_mini .fancybox').attr('href', 'javascript:;');
                        $.ajax({
                            url: $('#liked').attr('data-ajax'),
                            success: function(data){
                                $('#bx_fancybox_blocks #liked').replaceWith(data);
                                $('.add2liked.fancybox').attr('href', '#liked');
                                $('#bx_favorite_count_mini .fancybox').attr('href', '#liked');
                                updateAdd2Basket();
                            }
                        });
                    } else {
                        $('.add2liked[data-product-id=' + productId + '] span').html(NL_ADD_2_LIKED);
                        $('.add2liked[data-product-id=' + productId + '] title').html(NL_ADD_2_LIKED);
                        $('.add2liked[data-product-id=' + productId + ']').removeClass('active');
                        $('#bx_favorite_count .liked_products div[data-product-id=' + productId + ']').remove();
                        if (!isShowLoading) {
                            $('#liked .cart-product-item[data-product-id=' + productId + ']').remove();
                        }
                    }
                    var captionMini = data.count + ' ' + inclination(data.count, NL_PRODUCT_1, NL_PRODUCT_2, NL_PRODUCT_10);
                    var caption = data.count + ' ' + inclination(data.count, NL_PRODUCT_1, NL_PRODUCT_2, NL_PRODUCT_10) + ' ' + NL_ADD_2_LIKED_CAPTION;
                    if (data.count > 0) {
                        if ($("#page").hasClass("header-v1") || $("#page").hasClass("header-v3")) {
                            $('header .add2liked .add2liked_counter').html(data.count);
                        } else {
                            $('header .add2liked .add2liked_counter').html(' (' + data.count + ')');
                        }
                        $('#bx_favorite_count_mini a .header-block-info-counter').html(data.count);
                        $('#bx_favorite_count_mini a .header-block-info-counter').attr('title', captionMini);
                    } else {
                        $('.add2liked.fancybox').attr('href', 'javascript:;');
                        $('#bx_favorite_count_mini .fancybox').attr('href', 'javascript:;');
                        $('header .add2liked span').html('');
                        $('#bx_favorite_count_mini a .header-block-info-counter').html('');
                        $('#bx_favorite_count_mini a .header-block-info-counter').attr('title', '');
                    }
                    $('#bx_favorite_count_mini a .header-block-info-desc').html(caption);
                    $('#bx_favorite_count_mini a .header-block-info-desc').attr('title', caption);
                    if (isShowLoading) {
                        $.fancybox.hideLoading();
                    }
                }
            }, 'json');
        }
        e.preventDefault();
    });
    
    $('.go2buy:not([disabled],.disabled)').fancybox({
        padding: 0,
        beforeLoad: function() {
            var parentBlock = $(this.element).parent();
            $("#buy-to-click input[name=cart]").val(parentBlock.find('input[name=cart]').val());
            $("#buy-to-click input[name=id]").val(parentBlock.find('input[name=id]').val());
            $("#buy-to-click input[name=offer_id]").val(parentBlock.find('input[name=offer_id]').val());
            $("#buy-to-click input[name=props]").val(parentBlock.find('input[name=props]').val());
            $("#buy-to-click input[name=price]").val(parentBlock.find('input[name=price]').val());
            $("#buy-to-click input[name=currency]").val(parentBlock.find('input[name=currency]').val());
            $("#buy-to-click input[name=quantity]").val(parentBlock.parents('.product-container').find('.product-count input[name=count]').val());
            $("#buy-to-click .callout").remove();
            $("#buy-to-click .result-text").remove();
            $("#buy-to-click .form-block").show();
        }
    });
    
    $(document).on('click', '#del-delivery .profile-remove', function(e){
        $.ajax({
            type: 'POST',
            url: $('#del-delivery form').attr('action'),
            data: $('#del-delivery form').serialize(),
            dataType: 'json',
            success: function(response){
                $('#del-delivery .message-block').removeClass('hide');
                $('#del-delivery .confirm-block').addClass('hide');
                if (response.success == 'N') {
                    if ($(response.error).length) {
                        $('#del-delivery .message-block').html(response.error);
                    }
                }
                if (response.success == 'Y') {
                    $('#del-delivery .message-block').html(response.message);
                    $('.shipping .profile-block-list li[data-id=' + response.id + ']').remove();
                    $('.shipping .profile-block-list li .secondary').remove();
                    if ($('.shipping .profile-block-list li').length > 0) {
                        $('.shipping .profile-block-list li').eq(0).prepend($('#profile-default-text').html());
                    } else {
                        $('.shipping .profile-block-list').remove();
                        $('.shipping .profile-block-wrap').prepend($('#profile-empty-text').html());
                    }
                    $('.profile-column-container').isotope('destroy');
                    $('.profile-column-container').isotope(profileGridOptions);
                }
            }
        });
        e.preventDefault();
    });
    
    $(document).on('click', '.delivery-form input[name=PERSON_TYPE]', function(e) {
        var curForm = $(this).parents('form');
        var curBlock = $(this).parents('.fancybox-block');
        curForm.find('input[name=action]').val('change');
        $.ajax({
            type: 'POST',
            url: curForm.attr('data-ajax'),
            data: curForm.serialize(),
            success: function(data){
                curBlock.html($(data).html());
            }
        });
        e.preventDefault();
    })
    
    $(document).on('submit', '#form_subscr_footer', function(e) {
        var curForm = $(this);
        $.ajax({
            type: 'POST',
            url: $('.footer-subscribe').attr('data-ajax'),
            data: curForm.serialize(),
            success: function(data){
                $('.footer-subscribe').replaceWith(data);
            }
        });
        e.preventDefault();
    })
    
    $(document).on('submit', '#form_subscr_personal', function(e) {
        var curForm = $(this);
        $.ajax({
            type: 'POST',
            url: curForm.attr('data-ajax'),
            data: curForm.serialize(),
            success: function(data){
                $(curForm).parents('.profile-block-wrap').html($(data).find('.profile-block-wrap').html());
            }
        });
        e.preventDefault();
    })
    
    $(document).on('click', '#registration-static .show-static, #login-static .show-static', function(e){
        if ($(this).attr('data-static') != undefined) {
            var idStatic = $(this).attr('data-static');
            $('article .fancybox-block').html($("#" + idStatic).html());
            $('article .fancybox-block').attr('id', idStatic + '-static');
            $('article .fancybox-block input[name=static]').val("Y");
            $('article .fancybox-block .show-static').removeClass("fancybox");
            initValidate("#" + idStatic + '-static');
            e.preventDefault();
        }
    });
    
    $(document).on('click', '.inner-menu-filter .menu li a', function(e){
        if ($(this).parent().hasClass('active')) {
            e.preventDefault();
        }
        $('.inner-menu-filter .menu li').removeClass('active');
        $(this).parent().addClass('active');
        if ($(this).attr('data-ajax') != undefined) {
            getNewsItems($(this), $('.inner-content-list').attr('id'), true);
            e.preventDefault();
        }
    });
    
    $(document).on('submit', '#main-feedback-form', function(e) {
        var curForm = $(this);
        $.ajax({
            type: 'POST',
            url: curForm.attr('data-ajax'),
            data: curForm.serialize(),
            success: function(data){
                $('.feedback-container').replaceWith(data);
            }
        });
        e.preventDefault();
    });
    
    $(document).on('submit', '.custom_iblock_add, .fancybox-block-form, #subscribe-edit form', function(e) {
        var curForm = $(this);
        var curBlock = $(this).parents('.fancybox-block');
        if (curForm.attr('data-ajax') != undefined) {
            if ($(curForm).parents('#service-order').length > 0) {
                $('#service-order input[data-property-code=PROPERTY_SERVICE]').val($('h1').html());
            }
            $.ajax({
                type: 'POST',
                url: curForm.attr('data-ajax'),
                data: curForm.serialize(),
                success: function(data){
                    curBlock.html($(data).html());
                }
            });
            e.preventDefault();
        }
    });
    
    $(document).on('submit', '#login-static form, #login form, #registration-static form, #registration form, #forgot form, #change form, #confirmation form', function(e) {
        var curForm = $(this);
        var curBlock = $(this).parents('.fancybox-block');
        $.ajax({
            type: 'POST',
            url: curForm.attr('data-ajax'),
            data: curForm.serialize(),
            success: function(data){
                curBlock.find('.callout.error').remove();
                var result = $(data).find('.fancybox-block-result').html();
                if (result !== undefined) {
                    curBlock.append(result);
                } else {
                    var resultForm = $(data).find("#" + curBlock.attr('id')).html();
                    if (resultForm == undefined) {
                        window.location.reload();
                    } else {
                        if (curBlock.attr('id') == 'registration' || curBlock.attr('id') == 'registration-static') {
                            var lastName = $(resultForm).find('input[name=USER_LAST_NAME]').val();
                            var name = $(resultForm).find('input[name=USER_NAME]').val();
                        }
                        curBlock.html(resultForm);
                        $(curBlock).find('.fancybox-block-caption').after($(data).find('.error-block').html());
                        initValidate("#" + curBlock.attr('id'));
                    }
                }
            }
        });
        e.preventDefault();
    });
});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:64:"/local/templates/bitlate_pro/js/jquery-ui.min.js?150885328737305";s:6:"source";s:48:"/local/templates/bitlate_pro/js/jquery-ui.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*! jQuery UI - v1.12.1 - 2017-03-15
* http://jqueryui.com
* Includes: widget.js, data.js, focusable.js, scroll-parent.js, widgets/sortable.js, widgets/mouse.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */

(function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)})(function(t){function e(t){for(var e=t.css("visibility");"inherit"===e;)t=t.parent(),e=t.css("visibility");return"hidden"!==e}t.ui=t.ui||{},t.ui.version="1.12.1";var i=0,s=Array.prototype.slice;t.cleanData=function(e){return function(i){var s,n,o;for(o=0;null!=(n=i[o]);o++)try{s=t._data(n,"events"),s&&s.remove&&t(n).triggerHandler("remove")}catch(a){}e(i)}}(t.cleanData),t.widget=function(e,i,s){var n,o,a,r={},l=e.split(".")[0];e=e.split(".")[1];var h=l+"-"+e;return s||(s=i,i=t.Widget),t.isArray(s)&&(s=t.extend.apply(null,[{}].concat(s))),t.expr[":"][h.toLowerCase()]=function(e){return!!t.data(e,h)},t[l]=t[l]||{},n=t[l][e],o=t[l][e]=function(t,e){return this._createWidget?(arguments.length&&this._createWidget(t,e),void 0):new o(t,e)},t.extend(o,n,{version:s.version,_proto:t.extend({},s),_childConstructors:[]}),a=new i,a.options=t.widget.extend({},a.options),t.each(s,function(e,s){return t.isFunction(s)?(r[e]=function(){function t(){return i.prototype[e].apply(this,arguments)}function n(t){return i.prototype[e].apply(this,t)}return function(){var e,i=this._super,o=this._superApply;return this._super=t,this._superApply=n,e=s.apply(this,arguments),this._super=i,this._superApply=o,e}}(),void 0):(r[e]=s,void 0)}),o.prototype=t.widget.extend(a,{widgetEventPrefix:n?a.widgetEventPrefix||e:e},r,{constructor:o,namespace:l,widgetName:e,widgetFullName:h}),n?(t.each(n._childConstructors,function(e,i){var s=i.prototype;t.widget(s.namespace+"."+s.widgetName,o,i._proto)}),delete n._childConstructors):i._childConstructors.push(o),t.widget.bridge(e,o),o},t.widget.extend=function(e){for(var i,n,o=s.call(arguments,1),a=0,r=o.length;r>a;a++)for(i in o[a])n=o[a][i],o[a].hasOwnProperty(i)&&void 0!==n&&(e[i]=t.isPlainObject(n)?t.isPlainObject(e[i])?t.widget.extend({},e[i],n):t.widget.extend({},n):n);return e},t.widget.bridge=function(e,i){var n=i.prototype.widgetFullName||e;t.fn[e]=function(o){var a="string"==typeof o,r=s.call(arguments,1),l=this;return a?this.length||"instance"!==o?this.each(function(){var i,s=t.data(this,n);return"instance"===o?(l=s,!1):s?t.isFunction(s[o])&&"_"!==o.charAt(0)?(i=s[o].apply(s,r),i!==s&&void 0!==i?(l=i&&i.jquery?l.pushStack(i.get()):i,!1):void 0):t.error("no such method '"+o+"' for "+e+" widget instance"):t.error("cannot call methods on "+e+" prior to initialization; "+"attempted to call method '"+o+"'")}):l=void 0:(r.length&&(o=t.widget.extend.apply(null,[o].concat(r))),this.each(function(){var e=t.data(this,n);e?(e.option(o||{}),e._init&&e._init()):t.data(this,n,new i(o,this))})),l}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:!1,create:null},_createWidget:function(e,s){s=t(s||this.defaultElement||this)[0],this.element=t(s),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=t(),this.hoverable=t(),this.focusable=t(),this.classesElementLookup={},s!==this&&(t.data(s,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===s&&this.destroy()}}),this.document=t(s.style?s.ownerDocument:s.document||s),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this.options=t.widget.extend({},this.options,this._getCreateOptions(),e),this._create(),this.options.disabled&&this._setOptionDisabled(this.options.disabled),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:function(){return{}},_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){var e=this;this._destroy(),t.each(this.classesElementLookup,function(t,i){e._removeClass(i,t)}),this.element.off(this.eventNamespace).removeData(this.widgetFullName),this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),this.bindings.off(this.eventNamespace)},_destroy:t.noop,widget:function(){return this.element},option:function(e,i){var s,n,o,a=e;if(0===arguments.length)return t.widget.extend({},this.options);if("string"==typeof e)if(a={},s=e.split("."),e=s.shift(),s.length){for(n=a[e]=t.widget.extend({},this.options[e]),o=0;s.length-1>o;o++)n[s[o]]=n[s[o]]||{},n=n[s[o]];if(e=s.pop(),1===arguments.length)return void 0===n[e]?null:n[e];n[e]=i}else{if(1===arguments.length)return void 0===this.options[e]?null:this.options[e];a[e]=i}return this._setOptions(a),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return"classes"===t&&this._setOptionClasses(e),this.options[t]=e,"disabled"===t&&this._setOptionDisabled(e),this},_setOptionClasses:function(e){var i,s,n;for(i in e)n=this.classesElementLookup[i],e[i]!==this.options.classes[i]&&n&&n.length&&(s=t(n.get()),this._removeClass(n,i),s.addClass(this._classes({element:s,keys:i,classes:e,add:!0})))},_setOptionDisabled:function(t){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!t),t&&(this._removeClass(this.hoverable,null,"ui-state-hover"),this._removeClass(this.focusable,null,"ui-state-focus"))},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_classes:function(e){function i(i,o){var a,r;for(r=0;i.length>r;r++)a=n.classesElementLookup[i[r]]||t(),a=e.add?t(t.unique(a.get().concat(e.element.get()))):t(a.not(e.element).get()),n.classesElementLookup[i[r]]=a,s.push(i[r]),o&&e.classes[i[r]]&&s.push(e.classes[i[r]])}var s=[],n=this;return e=t.extend({element:this.element,classes:this.options.classes||{}},e),this._on(e.element,{remove:"_untrackClassesElement"}),e.keys&&i(e.keys.match(/\S+/g)||[],!0),e.extra&&i(e.extra.match(/\S+/g)||[]),s.join(" ")},_untrackClassesElement:function(e){var i=this;t.each(i.classesElementLookup,function(s,n){-1!==t.inArray(e.target,n)&&(i.classesElementLookup[s]=t(n.not(e.target).get()))})},_removeClass:function(t,e,i){return this._toggleClass(t,e,i,!1)},_addClass:function(t,e,i){return this._toggleClass(t,e,i,!0)},_toggleClass:function(t,e,i,s){s="boolean"==typeof s?s:i;var n="string"==typeof t||null===t,o={extra:n?e:i,keys:n?t:e,element:n?this.element:t,add:s};return o.element.toggleClass(this._classes(o),s),this},_on:function(e,i,s){var n,o=this;"boolean"!=typeof e&&(s=i,i=e,e=!1),s?(i=n=t(i),this.bindings=this.bindings.add(i)):(s=i,i=this.element,n=this.widget()),t.each(s,function(s,a){function r(){return e||o.options.disabled!==!0&&!t(this).hasClass("ui-state-disabled")?("string"==typeof a?o[a]:a).apply(o,arguments):void 0}"string"!=typeof a&&(r.guid=a.guid=a.guid||r.guid||t.guid++);var l=s.match(/^([\w:-]*)\s*(.*)$/),h=l[1]+o.eventNamespace,c=l[2];c?n.on(h,c,r):i.on(h,r)})},_off:function(e,i){i=(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.off(i).off(i),this.bindings=t(this.bindings.not(e).get()),this.focusable=t(this.focusable.not(e).get()),this.hoverable=t(this.hoverable.not(e).get())},_delay:function(t,e){function i(){return("string"==typeof t?s[t]:t).apply(s,arguments)}var s=this;return setTimeout(i,e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){this._addClass(t(e.currentTarget),null,"ui-state-hover")},mouseleave:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){this._addClass(t(e.currentTarget),null,"ui-state-focus")},focusout:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-focus")}})},_trigger:function(e,i,s){var n,o,a=this.options[e];if(s=s||{},i=t.Event(i),i.type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),i.target=this.element[0],o=i.originalEvent)for(n in o)n in i||(i[n]=o[n]);return this.element.trigger(i,s),!(t.isFunction(a)&&a.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},function(e,i){t.Widget.prototype["_"+e]=function(s,n,o){"string"==typeof n&&(n={effect:n});var a,r=n?n===!0||"number"==typeof n?i:n.effect||i:e;n=n||{},"number"==typeof n&&(n={duration:n}),a=!t.isEmptyObject(n),n.complete=o,n.delay&&s.delay(n.delay),a&&t.effects&&t.effects.effect[r]?s[e](n):r!==e&&s[r]?s[r](n.duration,n.easing,o):s.queue(function(i){t(this)[e](),o&&o.call(s[0]),i()})}}),t.widget,t.extend(t.expr[":"],{data:t.expr.createPseudo?t.expr.createPseudo(function(e){return function(i){return!!t.data(i,e)}}):function(e,i,s){return!!t.data(e,s[3])}}),t.ui.focusable=function(i,s){var n,o,a,r,l,h=i.nodeName.toLowerCase();return"area"===h?(n=i.parentNode,o=n.name,i.href&&o&&"map"===n.nodeName.toLowerCase()?(a=t("img[usemap='#"+o+"']"),a.length>0&&a.is(":visible")):!1):(/^(input|select|textarea|button|object)$/.test(h)?(r=!i.disabled,r&&(l=t(i).closest("fieldset")[0],l&&(r=!l.disabled))):r="a"===h?i.href||s:s,r&&t(i).is(":visible")&&e(t(i)))},t.extend(t.expr[":"],{focusable:function(e){return t.ui.focusable(e,null!=t.attr(e,"tabindex"))}}),t.ui.focusable,t.fn.scrollParent=function(e){var i=this.css("position"),s="absolute"===i,n=e?/(auto|scroll|hidden)/:/(auto|scroll)/,o=this.parents().filter(function(){var e=t(this);return s&&"static"===e.css("position")?!1:n.test(e.css("overflow")+e.css("overflow-y")+e.css("overflow-x"))}).eq(0);return"fixed"!==i&&o.length?o:t(this[0].ownerDocument||document)},t.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());var n=!1;t(document).on("mouseup",function(){n=!1}),t.widget("ui.mouse",{version:"1.12.1",options:{cancel:"input, textarea, button, select, option",distance:1,delay:0},_mouseInit:function(){var e=this;this.element.on("mousedown."+this.widgetName,function(t){return e._mouseDown(t)}).on("click."+this.widgetName,function(i){return!0===t.data(i.target,e.widgetName+".preventClickEvent")?(t.removeData(i.target,e.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1):void 0}),this.started=!1},_mouseDestroy:function(){this.element.off("."+this.widgetName),this._mouseMoveDelegate&&this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(e){if(!n){this._mouseMoved=!1,this._mouseStarted&&this._mouseUp(e),this._mouseDownEvent=e;var i=this,s=1===e.which,o="string"==typeof this.options.cancel&&e.target.nodeName?t(e.target).closest(this.options.cancel).length:!1;return s&&!o&&this._mouseCapture(e)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){i.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=this._mouseStart(e)!==!1,!this._mouseStarted)?(e.preventDefault(),!0):(!0===t.data(e.target,this.widgetName+".preventClickEvent")&&t.removeData(e.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(t){return i._mouseMove(t)},this._mouseUpDelegate=function(t){return i._mouseUp(t)},this.document.on("mousemove."+this.widgetName,this._mouseMoveDelegate).on("mouseup."+this.widgetName,this._mouseUpDelegate),e.preventDefault(),n=!0,!0)):!0}},_mouseMove:function(e){if(this._mouseMoved){if(t.ui.ie&&(!document.documentMode||9>document.documentMode)&&!e.button)return this._mouseUp(e);if(!e.which)if(e.originalEvent.altKey||e.originalEvent.ctrlKey||e.originalEvent.metaKey||e.originalEvent.shiftKey)this.ignoreMissingWhich=!0;else if(!this.ignoreMissingWhich)return this._mouseUp(e)}return(e.which||e.button)&&(this._mouseMoved=!0),this._mouseStarted?(this._mouseDrag(e),e.preventDefault()):(this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,e)!==!1,this._mouseStarted?this._mouseDrag(e):this._mouseUp(e)),!this._mouseStarted)},_mouseUp:function(e){this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,e.target===this._mouseDownEvent.target&&t.data(e.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(e)),this._mouseDelayTimer&&(clearTimeout(this._mouseDelayTimer),delete this._mouseDelayTimer),this.ignoreMissingWhich=!1,n=!1,e.preventDefault()},_mouseDistanceMet:function(t){return Math.max(Math.abs(this._mouseDownEvent.pageX-t.pageX),Math.abs(this._mouseDownEvent.pageY-t.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}}),t.widget("ui.sortable",t.ui.mouse,{version:"1.12.1",widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_isOverAxis:function(t,e,i){return t>=e&&e+i>t},_isFloating:function(t){return/left|right/.test(t.css("float"))||/inline|table-cell/.test(t.css("display"))},_create:function(){this.containerCache={},this._addClass("ui-sortable"),this.refresh(),this.offset=this.element.offset(),this._mouseInit(),this._setHandleClassName(),this.ready=!0},_setOption:function(t,e){this._super(t,e),"handle"===t&&this._setHandleClassName()},_setHandleClassName:function(){var e=this;this._removeClass(this.element.find(".ui-sortable-handle"),"ui-sortable-handle"),t.each(this.items,function(){e._addClass(this.instance.options.handle?this.item.find(this.instance.options.handle):this.item,"ui-sortable-handle")})},_destroy:function(){this._mouseDestroy();for(var t=this.items.length-1;t>=0;t--)this.items[t].item.removeData(this.widgetName+"-item");return this},_mouseCapture:function(e,i){var s=null,n=!1,o=this;return this.reverting?!1:this.options.disabled||"static"===this.options.type?!1:(this._refreshItems(e),t(e.target).parents().each(function(){return t.data(this,o.widgetName+"-item")===o?(s=t(this),!1):void 0}),t.data(e.target,o.widgetName+"-item")===o&&(s=t(e.target)),s?!this.options.handle||i||(t(this.options.handle,s).find("*").addBack().each(function(){this===e.target&&(n=!0)}),n)?(this.currentItem=s,this._removeCurrentsFromItems(),!0):!1:!1)},_mouseStart:function(e,i,s){var n,o,a=this.options;if(this.currentContainer=this,this.refreshPositions(),this.helper=this._createHelper(e),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},t.extend(this.offset,{click:{left:e.pageX-this.offset.left,top:e.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),this.originalPosition=this._generatePosition(e),this.originalPageX=e.pageX,this.originalPageY=e.pageY,a.cursorAt&&this._adjustOffsetFromHelper(a.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!==this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),a.containment&&this._setContainment(),a.cursor&&"auto"!==a.cursor&&(o=this.document.find("body"),this.storedCursor=o.css("cursor"),o.css("cursor",a.cursor),this.storedStylesheet=t("<style>*{ cursor: "+a.cursor+" !important; }</style>").appendTo(o)),a.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",a.opacity)),a.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",a.zIndex)),this.scrollParent[0]!==this.document[0]&&"HTML"!==this.scrollParent[0].tagName&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",e,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions(),!s)for(n=this.containers.length-1;n>=0;n--)this.containers[n]._trigger("activate",e,this._uiHash(this));return t.ui.ddmanager&&(t.ui.ddmanager.current=this),t.ui.ddmanager&&!a.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e),this.dragging=!0,this._addClass(this.helper,"ui-sortable-helper"),this._mouseDrag(e),!0},_mouseDrag:function(e){var i,s,n,o,a=this.options,r=!1;for(this.position=this._generatePosition(e),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs),this.options.scroll&&(this.scrollParent[0]!==this.document[0]&&"HTML"!==this.scrollParent[0].tagName?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-e.pageY<a.scrollSensitivity?this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop+a.scrollSpeed:e.pageY-this.overflowOffset.top<a.scrollSensitivity&&(this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop-a.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-e.pageX<a.scrollSensitivity?this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft+a.scrollSpeed:e.pageX-this.overflowOffset.left<a.scrollSensitivity&&(this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft-a.scrollSpeed)):(e.pageY-this.document.scrollTop()<a.scrollSensitivity?r=this.document.scrollTop(this.document.scrollTop()-a.scrollSpeed):this.window.height()-(e.pageY-this.document.scrollTop())<a.scrollSensitivity&&(r=this.document.scrollTop(this.document.scrollTop()+a.scrollSpeed)),e.pageX-this.document.scrollLeft()<a.scrollSensitivity?r=this.document.scrollLeft(this.document.scrollLeft()-a.scrollSpeed):this.window.width()-(e.pageX-this.document.scrollLeft())<a.scrollSensitivity&&(r=this.document.scrollLeft(this.document.scrollLeft()+a.scrollSpeed))),r!==!1&&t.ui.ddmanager&&!a.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e)),this.positionAbs=this._convertPositionTo("absolute"),this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),i=this.items.length-1;i>=0;i--)if(s=this.items[i],n=s.item[0],o=this._intersectsWithPointer(s),o&&s.instance===this.currentContainer&&n!==this.currentItem[0]&&this.placeholder[1===o?"next":"prev"]()[0]!==n&&!t.contains(this.placeholder[0],n)&&("semi-dynamic"===this.options.type?!t.contains(this.element[0],n):!0)){if(this.direction=1===o?"down":"up","pointer"!==this.options.tolerance&&!this._intersectsWithSides(s))break;this._rearrange(e,s),this._trigger("change",e,this._uiHash());break}return this._contactContainers(e),t.ui.ddmanager&&t.ui.ddmanager.drag(this,e),this._trigger("sort",e,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1},_mouseStop:function(e,i){if(e){if(t.ui.ddmanager&&!this.options.dropBehaviour&&t.ui.ddmanager.drop(this,e),this.options.revert){var s=this,n=this.placeholder.offset(),o=this.options.axis,a={};o&&"x"!==o||(a.left=n.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollLeft)),o&&"y"!==o||(a.top=n.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollTop)),this.reverting=!0,t(this.helper).animate(a,parseInt(this.options.revert,10)||500,function(){s._clear(e)})}else this._clear(e,i);return!1}},cancel:function(){if(this.dragging){this._mouseUp(new t.Event("mouseup",{target:null})),"original"===this.options.helper?(this.currentItem.css(this._storedCSS),this._removeClass(this.currentItem,"ui-sortable-helper")):this.currentItem.show();for(var e=this.containers.length-1;e>=0;e--)this.containers[e]._trigger("deactivate",null,this._uiHash(this)),this.containers[e].containerCache.over&&(this.containers[e]._trigger("out",null,this._uiHash(this)),this.containers[e].containerCache.over=0)}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),"original"!==this.options.helper&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),t.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?t(this.domPosition.prev).after(this.currentItem):t(this.domPosition.parent).prepend(this.currentItem)),this},serialize:function(e){var i=this._getItemsAsjQuery(e&&e.connected),s=[];return e=e||{},t(i).each(function(){var i=(t(e.item||this).attr(e.attribute||"id")||"").match(e.expression||/(.+)[\-=_](.+)/);i&&s.push((e.key||i[1]+"[]")+"="+(e.key&&e.expression?i[1]:i[2]))}),!s.length&&e.key&&s.push(e.key+"="),s.join("&")},toArray:function(e){var i=this._getItemsAsjQuery(e&&e.connected),s=[];return e=e||{},i.each(function(){s.push(t(e.item||this).attr(e.attribute||"id")||"")}),s},_intersectsWith:function(t){var e=this.positionAbs.left,i=e+this.helperProportions.width,s=this.positionAbs.top,n=s+this.helperProportions.height,o=t.left,a=o+t.width,r=t.top,l=r+t.height,h=this.offset.click.top,c=this.offset.click.left,u="x"===this.options.axis||s+h>r&&l>s+h,d="y"===this.options.axis||e+c>o&&a>e+c,p=u&&d;return"pointer"===this.options.tolerance||this.options.forcePointerForContainers||"pointer"!==this.options.tolerance&&this.helperProportions[this.floating?"width":"height"]>t[this.floating?"width":"height"]?p:e+this.helperProportions.width/2>o&&a>i-this.helperProportions.width/2&&s+this.helperProportions.height/2>r&&l>n-this.helperProportions.height/2},_intersectsWithPointer:function(t){var e,i,s="x"===this.options.axis||this._isOverAxis(this.positionAbs.top+this.offset.click.top,t.top,t.height),n="y"===this.options.axis||this._isOverAxis(this.positionAbs.left+this.offset.click.left,t.left,t.width),o=s&&n;return o?(e=this._getDragVerticalDirection(),i=this._getDragHorizontalDirection(),this.floating?"right"===i||"down"===e?2:1:e&&("down"===e?2:1)):!1},_intersectsWithSides:function(t){var e=this._isOverAxis(this.positionAbs.top+this.offset.click.top,t.top+t.height/2,t.height),i=this._isOverAxis(this.positionAbs.left+this.offset.click.left,t.left+t.width/2,t.width),s=this._getDragVerticalDirection(),n=this._getDragHorizontalDirection();return this.floating&&n?"right"===n&&i||"left"===n&&!i:s&&("down"===s&&e||"up"===s&&!e)},_getDragVerticalDirection:function(){var t=this.positionAbs.top-this.lastPositionAbs.top;return 0!==t&&(t>0?"down":"up")},_getDragHorizontalDirection:function(){var t=this.positionAbs.left-this.lastPositionAbs.left;return 0!==t&&(t>0?"right":"left")},refresh:function(t){return this._refreshItems(t),this._setHandleClassName(),this.refreshPositions(),this},_connectWith:function(){var t=this.options;return t.connectWith.constructor===String?[t.connectWith]:t.connectWith},_getItemsAsjQuery:function(e){function i(){r.push(this)}var s,n,o,a,r=[],l=[],h=this._connectWith();if(h&&e)for(s=h.length-1;s>=0;s--)for(o=t(h[s],this.document[0]),n=o.length-1;n>=0;n--)a=t.data(o[n],this.widgetFullName),a&&a!==this&&!a.options.disabled&&l.push([t.isFunction(a.options.items)?a.options.items.call(a.element):t(a.options.items,a.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),a]);for(l.push([t.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):t(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]),s=l.length-1;s>=0;s--)l[s][0].each(i);return t(r)},_removeCurrentsFromItems:function(){var e=this.currentItem.find(":data("+this.widgetName+"-item)");this.items=t.grep(this.items,function(t){for(var i=0;e.length>i;i++)if(e[i]===t.item[0])return!1;return!0})},_refreshItems:function(e){this.items=[],this.containers=[this];var i,s,n,o,a,r,l,h,c=this.items,u=[[t.isFunction(this.options.items)?this.options.items.call(this.element[0],e,{item:this.currentItem}):t(this.options.items,this.element),this]],d=this._connectWith();if(d&&this.ready)for(i=d.length-1;i>=0;i--)for(n=t(d[i],this.document[0]),s=n.length-1;s>=0;s--)o=t.data(n[s],this.widgetFullName),o&&o!==this&&!o.options.disabled&&(u.push([t.isFunction(o.options.items)?o.options.items.call(o.element[0],e,{item:this.currentItem}):t(o.options.items,o.element),o]),this.containers.push(o));for(i=u.length-1;i>=0;i--)for(a=u[i][1],r=u[i][0],s=0,h=r.length;h>s;s++)l=t(r[s]),l.data(this.widgetName+"-item",a),c.push({item:l,instance:a,width:0,height:0,left:0,top:0})},refreshPositions:function(e){this.floating=this.items.length?"x"===this.options.axis||this._isFloating(this.items[0].item):!1,this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset());var i,s,n,o;for(i=this.items.length-1;i>=0;i--)s=this.items[i],s.instance!==this.currentContainer&&this.currentContainer&&s.item[0]!==this.currentItem[0]||(n=this.options.toleranceElement?t(this.options.toleranceElement,s.item):s.item,e||(s.width=n.outerWidth(),s.height=n.outerHeight()),o=n.offset(),s.left=o.left,s.top=o.top);if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(i=this.containers.length-1;i>=0;i--)o=this.containers[i].element.offset(),this.containers[i].containerCache.left=o.left,this.containers[i].containerCache.top=o.top,this.containers[i].containerCache.width=this.containers[i].element.outerWidth(),this.containers[i].containerCache.height=this.containers[i].element.outerHeight();return this},_createPlaceholder:function(e){e=e||this;var i,s=e.options;s.placeholder&&s.placeholder.constructor!==String||(i=s.placeholder,s.placeholder={element:function(){var s=e.currentItem[0].nodeName.toLowerCase(),n=t("<"+s+">",e.document[0]);return e._addClass(n,"ui-sortable-placeholder",i||e.currentItem[0].className)._removeClass(n,"ui-sortable-helper"),"tbody"===s?e._createTrPlaceholder(e.currentItem.find("tr").eq(0),t("<tr>",e.document[0]).appendTo(n)):"tr"===s?e._createTrPlaceholder(e.currentItem,n):"img"===s&&n.attr("src",e.currentItem.attr("src")),i||n.css("visibility","hidden"),n},update:function(t,n){(!i||s.forcePlaceholderSize)&&(n.height()||n.height(e.currentItem.innerHeight()-parseInt(e.currentItem.css("paddingTop")||0,10)-parseInt(e.currentItem.css("paddingBottom")||0,10)),n.width()||n.width(e.currentItem.innerWidth()-parseInt(e.currentItem.css("paddingLeft")||0,10)-parseInt(e.currentItem.css("paddingRight")||0,10)))}}),e.placeholder=t(s.placeholder.element.call(e.element,e.currentItem)),e.currentItem.after(e.placeholder),s.placeholder.update(e,e.placeholder)},_createTrPlaceholder:function(e,i){var s=this;e.children().each(function(){t("<td>&#160;</td>",s.document[0]).attr("colspan",t(this).attr("colspan")||1).appendTo(i)})},_contactContainers:function(e){var i,s,n,o,a,r,l,h,c,u,d=null,p=null;for(i=this.containers.length-1;i>=0;i--)if(!t.contains(this.currentItem[0],this.containers[i].element[0]))if(this._intersectsWith(this.containers[i].containerCache)){if(d&&t.contains(this.containers[i].element[0],d.element[0]))continue;d=this.containers[i],p=i}else this.containers[i].containerCache.over&&(this.containers[i]._trigger("out",e,this._uiHash(this)),this.containers[i].containerCache.over=0);if(d)if(1===this.containers.length)this.containers[p].containerCache.over||(this.containers[p]._trigger("over",e,this._uiHash(this)),this.containers[p].containerCache.over=1);else{for(n=1e4,o=null,c=d.floating||this._isFloating(this.currentItem),a=c?"left":"top",r=c?"width":"height",u=c?"pageX":"pageY",s=this.items.length-1;s>=0;s--)t.contains(this.containers[p].element[0],this.items[s].item[0])&&this.items[s].item[0]!==this.currentItem[0]&&(l=this.items[s].item.offset()[a],h=!1,e[u]-l>this.items[s][r]/2&&(h=!0),n>Math.abs(e[u]-l)&&(n=Math.abs(e[u]-l),o=this.items[s],this.direction=h?"up":"down"));if(!o&&!this.options.dropOnEmpty)return;if(this.currentContainer===this.containers[p])return this.currentContainer.containerCache.over||(this.containers[p]._trigger("over",e,this._uiHash()),this.currentContainer.containerCache.over=1),void 0;o?this._rearrange(e,o,null,!0):this._rearrange(e,null,this.containers[p].element,!0),this._trigger("change",e,this._uiHash()),this.containers[p]._trigger("change",e,this._uiHash(this)),this.currentContainer=this.containers[p],this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[p]._trigger("over",e,this._uiHash(this)),this.containers[p].containerCache.over=1}},_createHelper:function(e){var i=this.options,s=t.isFunction(i.helper)?t(i.helper.apply(this.element[0],[e,this.currentItem])):"clone"===i.helper?this.currentItem.clone():this.currentItem;return s.parents("body").length||t("parent"!==i.appendTo?i.appendTo:this.currentItem[0].parentNode)[0].appendChild(s[0]),s[0]===this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),(!s[0].style.width||i.forceHelperSize)&&s.width(this.currentItem.width()),(!s[0].style.height||i.forceHelperSize)&&s.height(this.currentItem.height()),s},_adjustOffsetFromHelper:function(e){"string"==typeof e&&(e=e.split(" ")),t.isArray(e)&&(e={left:+e[0],top:+e[1]||0}),"left"in e&&(this.offset.click.left=e.left+this.margins.left),"right"in e&&(this.offset.click.left=this.helperProportions.width-e.right+this.margins.left),"top"in e&&(this.offset.click.top=e.top+this.margins.top),"bottom"in e&&(this.offset.click.top=this.helperProportions.height-e.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var e=this.offsetParent.offset();return"absolute"===this.cssPosition&&this.scrollParent[0]!==this.document[0]&&t.contains(this.scrollParent[0],this.offsetParent[0])&&(e.left+=this.scrollParent.scrollLeft(),e.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===this.document[0].body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&t.ui.ie)&&(e={top:0,left:0}),{top:e.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:e.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"===this.cssPosition){var t=this.currentItem.position();return{top:t.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:t.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var e,i,s,n=this.options;"parent"===n.containment&&(n.containment=this.helper[0].parentNode),("document"===n.containment||"window"===n.containment)&&(this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,"document"===n.containment?this.document.width():this.window.width()-this.helperProportions.width-this.margins.left,("document"===n.containment?this.document.height()||document.body.parentNode.scrollHeight:this.window.height()||this.document[0].body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]),/^(document|window|parent)$/.test(n.containment)||(e=t(n.containment)[0],i=t(n.containment).offset(),s="hidden"!==t(e).css("overflow"),this.containment=[i.left+(parseInt(t(e).css("borderLeftWidth"),10)||0)+(parseInt(t(e).css("paddingLeft"),10)||0)-this.margins.left,i.top+(parseInt(t(e).css("borderTopWidth"),10)||0)+(parseInt(t(e).css("paddingTop"),10)||0)-this.margins.top,i.left+(s?Math.max(e.scrollWidth,e.offsetWidth):e.offsetWidth)-(parseInt(t(e).css("borderLeftWidth"),10)||0)-(parseInt(t(e).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,i.top+(s?Math.max(e.scrollHeight,e.offsetHeight):e.offsetHeight)-(parseInt(t(e).css("borderTopWidth"),10)||0)-(parseInt(t(e).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top])
},_convertPositionTo:function(e,i){i||(i=this.position);var s="absolute"===e?1:-1,n="absolute"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&t.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,o=/(html|body)/i.test(n[0].tagName);return{top:i.top+this.offset.relative.top*s+this.offset.parent.top*s-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():o?0:n.scrollTop())*s,left:i.left+this.offset.relative.left*s+this.offset.parent.left*s-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():o?0:n.scrollLeft())*s}},_generatePosition:function(e){var i,s,n=this.options,o=e.pageX,a=e.pageY,r="absolute"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&t.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,l=/(html|body)/i.test(r[0].tagName);return"relative"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&this.scrollParent[0]!==this.offsetParent[0]||(this.offset.relative=this._getRelativeOffset()),this.originalPosition&&(this.containment&&(e.pageX-this.offset.click.left<this.containment[0]&&(o=this.containment[0]+this.offset.click.left),e.pageY-this.offset.click.top<this.containment[1]&&(a=this.containment[1]+this.offset.click.top),e.pageX-this.offset.click.left>this.containment[2]&&(o=this.containment[2]+this.offset.click.left),e.pageY-this.offset.click.top>this.containment[3]&&(a=this.containment[3]+this.offset.click.top)),n.grid&&(i=this.originalPageY+Math.round((a-this.originalPageY)/n.grid[1])*n.grid[1],a=this.containment?i-this.offset.click.top>=this.containment[1]&&i-this.offset.click.top<=this.containment[3]?i:i-this.offset.click.top>=this.containment[1]?i-n.grid[1]:i+n.grid[1]:i,s=this.originalPageX+Math.round((o-this.originalPageX)/n.grid[0])*n.grid[0],o=this.containment?s-this.offset.click.left>=this.containment[0]&&s-this.offset.click.left<=this.containment[2]?s:s-this.offset.click.left>=this.containment[0]?s-n.grid[0]:s+n.grid[0]:s)),{top:a-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():l?0:r.scrollTop()),left:o-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():l?0:r.scrollLeft())}},_rearrange:function(t,e,i,s){i?i[0].appendChild(this.placeholder[0]):e.item[0].parentNode.insertBefore(this.placeholder[0],"down"===this.direction?e.item[0]:e.item[0].nextSibling),this.counter=this.counter?++this.counter:1;var n=this.counter;this._delay(function(){n===this.counter&&this.refreshPositions(!s)})},_clear:function(t,e){function i(t,e,i){return function(s){i._trigger(t,s,e._uiHash(e))}}this.reverting=!1;var s,n=[];if(!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null,this.helper[0]===this.currentItem[0]){for(s in this._storedCSS)("auto"===this._storedCSS[s]||"static"===this._storedCSS[s])&&(this._storedCSS[s]="");this.currentItem.css(this._storedCSS),this._removeClass(this.currentItem,"ui-sortable-helper")}else this.currentItem.show();for(this.fromOutside&&!e&&n.push(function(t){this._trigger("receive",t,this._uiHash(this.fromOutside))}),!this.fromOutside&&this.domPosition.prev===this.currentItem.prev().not(".ui-sortable-helper")[0]&&this.domPosition.parent===this.currentItem.parent()[0]||e||n.push(function(t){this._trigger("update",t,this._uiHash())}),this!==this.currentContainer&&(e||(n.push(function(t){this._trigger("remove",t,this._uiHash())}),n.push(function(t){return function(e){t._trigger("receive",e,this._uiHash(this))}}.call(this,this.currentContainer)),n.push(function(t){return function(e){t._trigger("update",e,this._uiHash(this))}}.call(this,this.currentContainer)))),s=this.containers.length-1;s>=0;s--)e||n.push(i("deactivate",this,this.containers[s])),this.containers[s].containerCache.over&&(n.push(i("out",this,this.containers[s])),this.containers[s].containerCache.over=0);if(this.storedCursor&&(this.document.find("body").css("cursor",this.storedCursor),this.storedStylesheet.remove()),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex","auto"===this._storedZIndex?"":this._storedZIndex),this.dragging=!1,e||this._trigger("beforeStop",t,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.cancelHelperRemoval||(this.helper[0]!==this.currentItem[0]&&this.helper.remove(),this.helper=null),!e){for(s=0;n.length>s;s++)n[s].call(this,t);this._trigger("stop",t,this._uiHash())}return this.fromOutside=!1,!this.cancelHelperRemoval},_trigger:function(){t.Widget.prototype._trigger.apply(this,arguments)===!1&&this.cancel()},_uiHash:function(e){var i=e||this;return{helper:i.helper,placeholder:i.placeholder||t([]),position:i.position,originalPosition:i.originalPosition,offset:i.positionAbs,item:i.currentItem,sender:e?e.element:null}}})});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:99:"/local/templates/bitlate_pro/components/bitrix/sale.basket.basket.line/mini/script.js?1508853287916";s:6:"source";s:85:"/local/templates/bitlate_pro/components/bitrix/sale.basket.basket.line/mini/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
'use strict';

function BitrixSmallCart(){}

BitrixSmallCart.prototype = {

	activate: function ()
	{
		this.cartElement = BX(this.cartId);
		this.setCartBodyClosure = this.closure('setCartBody');
		BX.addCustomEvent(window, 'OnBasketChange', this.closure('refreshCart', {}));
	},

	closure: function (fname, data)
	{
		var obj = this;
		return data
			? function(){obj[fname](data)}
			: function(arg1){obj[fname](arg1)};
	},

	refreshCart: function (data)
	{
		if (this.itemRemoved)
		{
			this.itemRemoved = false;
			return;
		}
		data.sessid = BX.bitrix_sessid();
		data.siteId = this.siteId;
		data.templateName = this.templateName;
		data.arParams = this.arParams;
		BX.ajax({
			url: this.ajaxPath,
			method: 'POST',
			dataType: 'html',
			data: data,
			onsuccess: this.setCartBodyClosure
		});
	},

	setCartBody: function (result)
	{
		if (this.cartElement)
			this.cartElement.innerHTML = result;
	}
};

/* End */
;
; /* Start:"a:4:{s:4:"full";s:67:"/bitrix/components/bitrix/search.title/script.min.js?15088523876110";s:6:"source";s:48:"/bitrix/components/bitrix/search.title/script.js";s:3:"min";s:52:"/bitrix/components/bitrix/search.title/script.min.js";s:3:"map";s:52:"/bitrix/components/bitrix/search.title/script.map.js";}"*/
function JCTitleSearch(t){var e=this;this.arParams={AJAX_PAGE:t.AJAX_PAGE,CONTAINER_ID:t.CONTAINER_ID,INPUT_ID:t.INPUT_ID,MIN_QUERY_LEN:parseInt(t.MIN_QUERY_LEN)};if(t.WAIT_IMAGE)this.arParams.WAIT_IMAGE=t.WAIT_IMAGE;if(t.MIN_QUERY_LEN<=0)t.MIN_QUERY_LEN=1;this.cache=[];this.cache_key=null;this.startText="";this.running=false;this.currentRow=-1;this.RESULT=null;this.CONTAINER=null;this.INPUT=null;this.WAIT=null;this.ShowResult=function(t){if(BX.type.isString(t)){e.RESULT.innerHTML=t}e.RESULT.style.display=e.RESULT.innerHTML!==""?"block":"none";var s=e.adjustResultNode();var i;var r;var n=BX.findChild(e.RESULT,{tag:"table","class":"title-search-result"},true);if(n){r=BX.findChild(n,{tag:"th"},true)}if(r){var a=BX.pos(n);a.width=a.right-a.left;var l=BX.pos(r);l.width=l.right-l.left;r.style.width=l.width+"px";e.RESULT.style.width=s.width+l.width+"px";e.RESULT.style.left=s.left-l.width-1+"px";if(a.width-l.width>s.width)e.RESULT.style.width=s.width+l.width-1+"px";a=BX.pos(n);i=BX.pos(e.RESULT);if(i.right>a.right){e.RESULT.style.width=a.right-a.left+"px"}}var o;if(n)o=BX.findChild(e.RESULT,{"class":"title-search-fader"},true);if(o&&r){i=BX.pos(e.RESULT);o.style.left=i.right-i.left-18+"px";o.style.width=18+"px";o.style.top=0+"px";o.style.height=i.bottom-i.top+"px";o.style.display="block"}};this.onKeyPress=function(t){var s=BX.findChild(e.RESULT,{tag:"table","class":"title-search-result"},true);if(!s)return false;var i;var r=s.rows.length;switch(t){case 27:e.RESULT.style.display="none";e.currentRow=-1;e.UnSelectAll();return true;case 40:if(e.RESULT.style.display=="none")e.RESULT.style.display="block";var n=-1;for(i=0;i<r;i++){if(!BX.findChild(s.rows[i],{"class":"title-search-separator"},true)){if(n==-1)n=i;if(e.currentRow<i){e.currentRow=i;break}else if(s.rows[i].className=="title-search-selected"){s.rows[i].className=""}}}if(i==r&&e.currentRow!=i)e.currentRow=n;s.rows[e.currentRow].className="title-search-selected";return true;case 38:if(e.RESULT.style.display=="none")e.RESULT.style.display="block";var a=-1;for(i=r-1;i>=0;i--){if(!BX.findChild(s.rows[i],{"class":"title-search-separator"},true)){if(a==-1)a=i;if(e.currentRow>i){e.currentRow=i;break}else if(s.rows[i].className=="title-search-selected"){s.rows[i].className=""}}}if(i<0&&e.currentRow!=i)e.currentRow=a;s.rows[e.currentRow].className="title-search-selected";return true;case 13:if(e.RESULT.style.display=="block"){for(i=0;i<r;i++){if(e.currentRow==i){if(!BX.findChild(s.rows[i],{"class":"title-search-separator"},true)){var l=BX.findChild(s.rows[i],{tag:"a"},true);if(l){window.location=l.href;return true}}}}}return false}return false};this.onTimeout=function(){e.onChange(function(){setTimeout(e.onTimeout,500)})};this.onChange=function(t){if(e.running)return;e.running=true;if(e.INPUT.value!=e.oldValue&&e.INPUT.value!=e.startText){e.oldValue=e.INPUT.value;if(e.INPUT.value.length>=e.arParams.MIN_QUERY_LEN){e.cache_key=e.arParams.INPUT_ID+"|"+e.INPUT.value;if(e.cache[e.cache_key]==null){if(e.WAIT){var s=BX.pos(e.INPUT);var i=s.bottom-s.top-2;e.WAIT.style.top=s.top+1+"px";e.WAIT.style.height=i+"px";e.WAIT.style.width=i+"px";e.WAIT.style.left=s.right-i+2+"px";e.WAIT.style.display="block"}BX.ajax.post(e.arParams.AJAX_PAGE,{ajax_call:"y",INPUT_ID:e.arParams.INPUT_ID,q:e.INPUT.value,l:e.arParams.MIN_QUERY_LEN},function(s){e.cache[e.cache_key]=s;e.ShowResult(s);e.currentRow=-1;e.EnableMouseEvents();if(e.WAIT)e.WAIT.style.display="none";if(!!t)t();e.running=false});return}else{e.ShowResult(e.cache[e.cache_key]);e.currentRow=-1;e.EnableMouseEvents()}}else{e.RESULT.style.display="none";e.currentRow=-1;e.UnSelectAll()}}if(!!t)t();e.running=false};this.UnSelectAll=function(){var t=BX.findChild(e.RESULT,{tag:"table","class":"title-search-result"},true);if(t){var s=t.rows.length;for(var i=0;i<s;i++)t.rows[i].className=""}};this.EnableMouseEvents=function(){var t=BX.findChild(e.RESULT,{tag:"table","class":"title-search-result"},true);if(t){var s=t.rows.length;for(var i=0;i<s;i++)if(!BX.findChild(t.rows[i],{"class":"title-search-separator"},true)){t.rows[i].id="row_"+i;t.rows[i].onmouseover=function(t){if(e.currentRow!=this.id.substr(4)){e.UnSelectAll();this.className="title-search-selected";e.currentRow=this.id.substr(4)}};t.rows[i].onmouseout=function(t){this.className="";e.currentRow=-1}}}};this.onFocusLost=function(t){setTimeout(function(){e.RESULT.style.display="none"},250)};this.onFocusGain=function(){if(e.RESULT.innerHTML.length)e.ShowResult()};this.onKeyDown=function(t){if(!t)t=window.event;if(e.RESULT.style.display=="block"){if(e.onKeyPress(t.keyCode))return BX.PreventDefault(t)}};this.adjustResultNode=function(){var t;var s=BX.findParent(e.CONTAINER,BX.is_fixed);if(!!s){e.RESULT.style.position="fixed";e.RESULT.style.zIndex=BX.style(s,"z-index")+2;t=BX.pos(e.CONTAINER,true)}else{e.RESULT.style.position="absolute";t=BX.pos(e.CONTAINER)}t.width=t.right-t.left;e.RESULT.style.top=t.bottom+2+"px";e.RESULT.style.left=t.left+"px";e.RESULT.style.width=t.width+"px";return t};this._onContainerLayoutChange=function(){if(e.RESULT.style.display!=="none"&&e.RESULT.innerHTML!==""){e.adjustResultNode()}};this.Init=function(){this.CONTAINER=document.getElementById(this.arParams.CONTAINER_ID);BX.addCustomEvent(this.CONTAINER,"OnNodeLayoutChange",this._onContainerLayoutChange);this.RESULT=document.body.appendChild(document.createElement("DIV"));this.RESULT.className="title-search-result";this.INPUT=document.getElementById(this.arParams.INPUT_ID);this.startText=this.oldValue=this.INPUT.value;BX.bind(this.INPUT,"focus",function(){e.onFocusGain()});BX.bind(this.INPUT,"blur",function(){e.onFocusLost()});this.INPUT.onkeydown=this.onKeyDown;if(this.arParams.WAIT_IMAGE){this.WAIT=document.body.appendChild(document.createElement("DIV"));this.WAIT.style.backgroundImage="url('"+this.arParams.WAIT_IMAGE+"')";if(!BX.browser.IsIE())this.WAIT.style.backgroundRepeat="none";this.WAIT.style.display="none";this.WAIT.style.position="absolute";this.WAIT.style.zIndex="1100"}BX.bind(this.INPUT,"bxchange",function(){e.onChange()})};BX.ready(function(){e.Init(t)})}
/* End */
;
; /* Start:"a:4:{s:4:"full";s:103:"/local/templates/bitlate_pro/components/bitrix/sale.basket.basket.line/.default/script.js?1508853287916";s:6:"source";s:89:"/local/templates/bitlate_pro/components/bitrix/sale.basket.basket.line/.default/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
'use strict';

function BitrixSmallCart(){}

BitrixSmallCart.prototype = {

	activate: function ()
	{
		this.cartElement = BX(this.cartId);
		this.setCartBodyClosure = this.closure('setCartBody');
		BX.addCustomEvent(window, 'OnBasketChange', this.closure('refreshCart', {}));
	},

	closure: function (fname, data)
	{
		var obj = this;
		return data
			? function(){obj[fname](data)}
			: function(arg1){obj[fname](arg1)};
	},

	refreshCart: function (data)
	{
		if (this.itemRemoved)
		{
			this.itemRemoved = false;
			return;
		}
		data.sessid = BX.bitrix_sessid();
		data.siteId = this.siteId;
		data.templateName = this.templateName;
		data.arParams = this.arParams;
		BX.ajax({
			url: this.ajaxPath,
			method: 'POST',
			dataType: 'html',
			data: data,
			onsuccess: this.setCartBodyClosure
		});
	},

	setCartBody: function (result)
	{
		if (this.cartElement)
			this.cartElement.innerHTML = result;
	}
};

/* End */
;; /* /local/templates/bitlate_pro/js/jquery.min.js?150885328785578*/
; /* /local/templates/bitlate_pro/js/foundation.min.js?1508853287108018*/
; /* /local/templates/bitlate_pro/js/isotope.pkgd.min.js?150885328734695*/
; /* /local/templates/bitlate_pro/js/packery-mode.pkgd.min.js?150885328713618*/
; /* /local/templates/bitlate_pro/js/slideout.min.js?15088532876865*/
; /* /local/templates/bitlate_pro/js/owl.carousel.min.js?150885328742766*/
; /* /local/templates/bitlate_pro/js/fancybox.min.js?150885328723135*/
; /* /local/templates/bitlate_pro/js/fancybox-thumbs.js?15088532873836*/
; /* /local/templates/bitlate_pro/js/zoomsl.min.js?150885328712313*/
; /* /local/templates/bitlate_pro/js/selectbox.min.js?150885328713567*/
; /* /local/templates/bitlate_pro/js/mask.min.js?15088532876318*/
; /* /local/templates/bitlate_pro/js/yandex.maps.js?15088532871931*/
; /* /local/templates/bitlate_pro/js/main.js?150885328741682*/
; /* /local/templates/bitlate_pro/js/colorpicker.min.js?150885328718689*/
; /* /local/templates/bitlate_pro/js/jquery.validate.min.js?150885328722688*/
; /* /local/templates/bitlate_pro/js/custom.js?15088532879573*/
; /* /local/templates/bitlate_pro/js/site.js?150885328730909*/
; /* /local/templates/bitlate_pro/js/jquery-ui.min.js?150885328737305*/
; /* /local/templates/bitlate_pro/components/bitrix/sale.basket.basket.line/mini/script.js?1508853287916*/
; /* /bitrix/components/bitrix/search.title/script.min.js?15088523876110*/
; /* /local/templates/bitlate_pro/components/bitrix/sale.basket.basket.line/.default/script.js?1508853287916*/

//# sourceMappingURL=template_a3e1bd0631074dba1b7ceb2c02204040.map.js