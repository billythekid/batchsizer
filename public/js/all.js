/*! jQuery v2.2.0 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="2.2.0",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!k.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=d.createElement("script"),b.text=a,d.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:h.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(d=e.call(arguments,2),f=function(){return a.apply(b||this,d.concat(e.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=R.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return h.call(b,a)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&f.parentNode&&(this.length=1,this[0]=f),this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?void 0!==c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?h.call(n(a),this[0]):h.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||n.uniqueSort(e),D.test(a)&&e.reverse()),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.removeEventListener("DOMContentLoaded",J),a.removeEventListener("load",J),n.ready()}n.ready.promise=function(b){return I||(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(n.ready):(d.addEventListener("DOMContentLoaded",J),a.addEventListener("load",J))),I.promise(b)},n.ready.promise();var K=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)K(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},L=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function M(){this.expando=n.expando+M.uid++}M.uid=1,M.prototype={register:function(a,b){var c=b||{};return a.nodeType?a[this.expando]=c:Object.defineProperty(a,this.expando,{value:c,writable:!0,configurable:!0}),a[this.expando]},cache:function(a){if(!L(a))return{};var b=a[this.expando];return b||(b={},L(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[b]=c;else for(d in b)e[d]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=a[this.expando];if(void 0!==f){if(void 0===b)this.register(a);else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in f?d=[b,e]:(d=e,d=d in f?[d]:d.match(G)||[])),c=d.length;while(c--)delete f[d[c]]}(void 0===b||n.isEmptyObject(f))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!n.isEmptyObject(b)}};var N=new M,O=new M,P=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Q=/[A-Z]/g;function R(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Q,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:P.test(c)?n.parseJSON(c):c}catch(e){}O.set(a,b,c);
}else c=void 0;return c}n.extend({hasData:function(a){return O.hasData(a)||N.hasData(a)},data:function(a,b,c){return O.access(a,b,c)},removeData:function(a,b){O.remove(a,b)},_data:function(a,b,c){return N.access(a,b,c)},_removeData:function(a,b){N.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=O.get(f),1===f.nodeType&&!N.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),R(f,d,e[d])));N.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){O.set(this,a)}):K(this,function(b){var c,d;if(f&&void 0===b){if(c=O.get(f,a)||O.get(f,a.replace(Q,"-$&").toLowerCase()),void 0!==c)return c;if(d=n.camelCase(a),c=O.get(f,d),void 0!==c)return c;if(c=R(f,d,void 0),void 0!==c)return c}else d=n.camelCase(a),this.each(function(){var c=O.get(this,d);O.set(this,d,b),a.indexOf("-")>-1&&void 0!==c&&O.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){O.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=N.get(a,b),c&&(!d||n.isArray(c)?d=N.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return N.get(a,c)||N.access(a,c,{empty:n.Callbacks("once memory").add(function(){N.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=N.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),U=["Top","Right","Bottom","Left"],V=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function W(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&T.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var X=/^(?:checkbox|radio)$/i,Y=/<([\w:-]+)/,Z=/^$|\/(?:java|ecma)script/i,$={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};$.optgroup=$.option,$.tbody=$.tfoot=$.colgroup=$.caption=$.thead,$.th=$.td;function _(a,b){var c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function aa(a,b){for(var c=0,d=a.length;d>c;c++)N.set(a[c],"globalEval",!b||N.get(b[c],"globalEval"))}var ba=/<|&#?\w+;/;function ca(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],o=0,p=a.length;p>o;o++)if(f=a[o],f||0===f)if("object"===n.type(f))n.merge(m,f.nodeType?[f]:f);else if(ba.test(f)){g=g||l.appendChild(b.createElement("div")),h=(Y.exec(f)||["",""])[1].toLowerCase(),i=$[h]||$._default,g.innerHTML=i[1]+n.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;n.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",o=0;while(f=m[o++])if(d&&n.inArray(f,d)>-1)e&&e.push(f);else if(j=n.contains(f.ownerDocument,f),g=_(l.appendChild(f),"script"),j&&aa(g),c){k=0;while(f=g[k++])Z.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var da=/^key/,ea=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,fa=/^([^.]*)(?:\.(.+)|)/;function ga(){return!0}function ha(){return!1}function ia(){try{return d.activeElement}catch(a){}}function ja(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ja(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=ha;else if(!e)return this;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return"undefined"!=typeof n&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(G)||[""],j=b.length;while(j--)h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.hasData(a)&&N.get(a);if(r&&(i=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&N.remove(a,"handle events")}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(N.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.rnamespace||a.rnamespace.test(g.namespace))&&(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!==this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||d,e=c.documentElement,f=c.body,a.pageX=b.clientX+(e&&e.scrollLeft||f&&f.scrollLeft||0)-(e&&e.clientLeft||f&&f.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||f&&f.scrollTop||0)-(e&&e.clientTop||f&&f.clientTop||0)),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ea.test(f)?this.mouseHooks:da.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=d),3===a.target.nodeType&&(a.target=a.target.parentNode),h.filter?h.filter(a,g):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==ia()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===ia()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ga:ha):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:ha,isPropagationStopped:ha,isImmediatePropagationStopped:ha,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ga,a&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ga,a&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ga,a&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),n.fn.extend({on:function(a,b,c,d){return ja(this,a,b,c,d)},one:function(a,b,c,d){return ja(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=ha),this.each(function(){n.event.remove(this,a,c,b)})}});var ka=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,la=/<script|<style|<link/i,ma=/checked\s*(?:[^=]|=\s*.checked.)/i,na=/^true\/(.*)/,oa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function pa(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a:a}function qa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function ra(a){var b=na.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function sa(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(N.hasData(a)&&(f=N.access(a),g=N.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}O.hasData(a)&&(h=O.access(a),i=n.extend({},h),O.set(b,i))}}function ta(a,b){var c=b.nodeName.toLowerCase();"input"===c&&X.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}function ua(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&ma.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),ua(f,b,c,d)});if(o&&(e=ca(b,a[0].ownerDocument,!1,a,d),g=e.firstChild,1===e.childNodes.length&&(e=g),g||d)){for(h=n.map(_(e,"script"),qa),i=h.length;o>m;m++)j=e,m!==p&&(j=n.clone(j,!0,!0),i&&n.merge(h,_(j,"script"))),c.call(a[m],j,m);if(i)for(k=h[h.length-1].ownerDocument,n.map(h,ra),m=0;i>m;m++)j=h[m],Z.test(j.type||"")&&!N.access(j,"globalEval")&&n.contains(k,j)&&(j.src?n._evalUrl&&n._evalUrl(j.src):n.globalEval(j.textContent.replace(oa,"")))}return a}function va(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(_(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&aa(_(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(ka,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=_(h),f=_(a),d=0,e=f.length;e>d;d++)ta(f[d],g[d]);if(b)if(c)for(f=f||_(a),g=g||_(h),d=0,e=f.length;e>d;d++)sa(f[d],g[d]);else sa(a,h);return g=_(h,"script"),g.length>0&&aa(g,!i&&_(a,"script")),h},cleanData:function(a){for(var b,c,d,e=n.event.special,f=0;void 0!==(c=a[f]);f++)if(L(c)){if(b=c[N.expando]){if(b.events)for(d in b.events)e[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);c[N.expando]=void 0}c[O.expando]&&(c[O.expando]=void 0)}}}),n.fn.extend({domManip:ua,detach:function(a){return va(this,a,!0)},remove:function(a){return va(this,a)},text:function(a){return K(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.appendChild(a)}})},prepend:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(_(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return K(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!la.test(a)&&!$[(Y.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(_(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return ua(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(_(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),f=e.length-1,h=0;f>=h;h++)c=h===f?this:this.clone(!0),n(e[h])[b](c),g.apply(d,c.get());return this.pushStack(d)}});var wa,xa={HTML:"block",BODY:"block"};function ya(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function za(a){var b=d,c=xa[a];return c||(c=ya(a,b),"none"!==c&&c||(wa=(wa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=wa[0].contentDocument,b.write(),b.close(),c=ya(a,b),wa.detach()),xa[a]=c),c}var Aa=/^margin/,Ba=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ca=function(b){var c=b.ownerDocument.defaultView;return c.opener||(c=a),c.getComputedStyle(b)},Da=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Ea=d.documentElement;!function(){var b,c,e,f,g=d.createElement("div"),h=d.createElement("div");if(h.style){h.style.backgroundClip="content-box",h.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===h.style.backgroundClip,g.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",g.appendChild(h);function i(){h.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",h.innerHTML="",Ea.appendChild(g);var d=a.getComputedStyle(h);b="1%"!==d.top,f="2px"===d.marginLeft,c="4px"===d.width,h.style.marginRight="50%",e="4px"===d.marginRight,Ea.removeChild(g)}n.extend(l,{pixelPosition:function(){return i(),b},boxSizingReliable:function(){return null==c&&i(),c},pixelMarginRight:function(){return null==c&&i(),e},reliableMarginLeft:function(){return null==c&&i(),f},reliableMarginRight:function(){var b,c=h.appendChild(d.createElement("div"));return c.style.cssText=h.style.cssText="-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",h.style.width="1px",Ea.appendChild(g),b=!parseFloat(a.getComputedStyle(c).marginRight),Ea.removeChild(g),h.removeChild(c),b}})}}();function Fa(a,b,c){var d,e,f,g,h=a.style;return c=c||Ca(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),!l.pixelMarginRight()&&Ba.test(g)&&Aa.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Ga(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Ha=/^(none|table(?!-c[ea]).+)/,Ia={position:"absolute",visibility:"hidden",display:"block"},Ja={letterSpacing:"0",fontWeight:"400"},Ka=["Webkit","O","Moz","ms"],La=d.createElement("div").style;function Ma(a){if(a in La)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ka.length;while(c--)if(a=Ka[c]+b,a in La)return a}function Na(a,b,c){var d=T.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Oa(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+U[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+U[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+U[f]+"Width",!0,e))):(g+=n.css(a,"padding"+U[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+U[f]+"Width",!0,e)));return g}function Pa(b,c,e){var f=!0,g="width"===c?b.offsetWidth:b.offsetHeight,h=Ca(b),i="border-box"===n.css(b,"boxSizing",!1,h);if(d.msFullscreenElement&&a.top!==a&&b.getClientRects().length&&(g=Math.round(100*b.getBoundingClientRect()[c])),0>=g||null==g){if(g=Fa(b,c,h),(0>g||null==g)&&(g=b.style[c]),Ba.test(g))return g;f=i&&(l.boxSizingReliable()||g===b.style[c]),g=parseFloat(g)||0}return g+Oa(b,c,e||(i?"border":"content"),f,h)+"px"}function Qa(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=N.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&V(d)&&(f[g]=N.access(d,"olddisplay",za(d.nodeName)))):(e=V(d),"none"===c&&e||N.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Fa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=T.exec(c))&&e[1]&&(c=W(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Fa(a,b,d)),"normal"===e&&b in Ja&&(e=Ja[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Ha.test(n.css(a,"display"))&&0===a.offsetWidth?Da(a,Ia,function(){return Pa(a,b,d)}):Pa(a,b,d):void 0},set:function(a,c,d){var e,f=d&&Ca(a),g=d&&Oa(a,b,d,"border-box"===n.css(a,"boxSizing",!1,f),f);return g&&(e=T.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=n.css(a,b)),Na(a,c,g)}}}),n.cssHooks.marginLeft=Ga(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Fa(a,"marginLeft"))||a.getBoundingClientRect().left-Da(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px":void 0}),n.cssHooks.marginRight=Ga(l.reliableMarginRight,function(a,b){return b?Da(a,{display:"inline-block"},Fa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+U[d]+b]=f[d]||f[d-2]||f[0];return e}},Aa.test(a)||(n.cssHooks[a+b].set=Na)}),n.fn.extend({css:function(a,b){return K(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ca(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Qa(this,!0)},hide:function(){return Qa(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){V(this)?n(this).show():n(this).hide()})}});function Ra(a,b,c,d,e){return new Ra.prototype.init(a,b,c,d,e)}n.Tween=Ra,Ra.prototype={constructor:Ra,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ra.propHooks[this.prop];return a&&a.get?a.get(this):Ra.propHooks._default.get(this)},run:function(a){var b,c=Ra.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ra.propHooks._default.set(this),this}},Ra.prototype.init.prototype=Ra.prototype,Ra.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},Ra.propHooks.scrollTop=Ra.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=Ra.prototype.init,n.fx.step={};var Sa,Ta,Ua=/^(?:toggle|show|hide)$/,Va=/queueHooks$/;function Wa(){return a.setTimeout(function(){Sa=void 0}),Sa=n.now()}function Xa(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=U[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ya(a,b,c){for(var d,e=(_a.tweeners[b]||[]).concat(_a.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Za(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&V(a),q=N.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?N.get(a,"olddisplay")||za(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Ua.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?za(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=N.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;N.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ya(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function $a(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function _a(a,b,c){var d,e,f=0,g=_a.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Sa||Wa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:Sa||Wa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for($a(k,j.opts.specialEasing);g>f;f++)if(d=_a.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,Ya,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(_a,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return W(c.elem,a,T.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],_a.tweeners[c]=_a.tweeners[c]||[],_a.tweeners[c].unshift(b)},prefilters:[Za],prefilter:function(a,b){b?_a.prefilters.unshift(a):_a.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(V).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=_a(this,n.extend({},a),f);(e||N.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=N.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Va.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=N.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Xa(b,!0),a,d,e)}}),n.each({slideDown:Xa("show"),slideUp:Xa("hide"),slideToggle:Xa("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Sa=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Sa=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ta||(Ta=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(Ta),Ta=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",l.checkOn=""!==a.value,l.optSelected=c.selected,b.disabled=!0,l.optDisabled=!c.disabled,a=d.createElement("input"),a.value="t",a.type="radio",l.radioValue="t"===a.value}();var ab,bb=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return K(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ab:void 0)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)}}),ab={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=bb[b]||n.find.attr;bb[b]=function(a,b,d){var e,f;return d||(f=bb[b],bb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,bb[b]=f),e}});var cb=/^(?:input|select|textarea|button)$/i,db=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return K(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b];
},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):cb.test(a.nodeName)||db.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var eb=/[\t\r\n\f]/g;function fb(a){return a.getAttribute&&a.getAttribute("class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,fb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,fb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,fb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(void 0===a||"boolean"===c)&&(b=fb(this),b&&N.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":N.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+fb(c)+" ").replace(eb," ").indexOf(b)>-1)return!0;return!1}});var gb=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(gb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){return n.trim(a.value)}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(n.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var hb=/^(?:focusinfocus|focusoutblur)$/;n.extend(n.event,{trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!hb.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),l=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},f||!o.trigger||o.trigger.apply(e,c)!==!1)){if(!f&&!o.noBubble&&!n.isWindow(e)){for(j=o.delegateType||q,hb.test(j+q)||(h=h.parentNode);h;h=h.parentNode)p.push(h),i=h;i===(e.ownerDocument||d)&&p.push(i.defaultView||i.parentWindow||a)}g=0;while((h=p[g++])&&!b.isPropagationStopped())b.type=g>1?j:o.bindType||q,m=(N.get(h,"events")||{})[b.type]&&N.get(h,"handle"),m&&m.apply(h,c),m=l&&h[l],m&&m.apply&&L(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=q,f||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!L(e)||l&&n.isFunction(e[q])&&!n.isWindow(e)&&(i=e[l],i&&(e[l]=null),n.event.triggered=q,e[q](),n.event.triggered=void 0,i&&(e[l]=i)),b.result}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b),d.isDefaultPrevented()&&c.preventDefault()}}),n.fn.extend({trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),l.focusin="onfocusin"in a,l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=N.access(d,b);e||d.addEventListener(a,c,!0),N.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=N.access(d,b)-1;e?N.access(d,b,e):(d.removeEventListener(a,c,!0),N.remove(d,b))}}});var ib=a.location,jb=n.now(),kb=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return(!c||c.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+b),c};var lb=/#.*$/,mb=/([?&])_=[^&]*/,nb=/^(.*?):[ \t]*([^\r\n]*)$/gm,ob=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,pb=/^(?:GET|HEAD)$/,qb=/^\/\//,rb={},sb={},tb="*/".concat("*"),ub=d.createElement("a");ub.href=ib.href;function vb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function wb(a,b,c,d){var e={},f=a===sb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function xb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function yb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function zb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ib.href,type:"GET",isLocal:ob.test(ib.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":tb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?xb(xb(a,n.ajaxSettings),b):xb(n.ajaxSettings,a)},ajaxPrefilter:vb(rb),ajaxTransport:vb(sb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m=n.ajaxSetup({},c),o=m.context||m,p=m.context&&(o.nodeType||o.jquery)?n(o):n.event,q=n.Deferred(),r=n.Callbacks("once memory"),s=m.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,getResponseHeader:function(a){var b;if(2===v){if(!h){h={};while(b=nb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===v?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return v||(a=u[c]=u[c]||a,t[a]=b),this},overrideMimeType:function(a){return v||(m.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>v)for(b in a)s[b]=[s[b],a[b]];else x.always(a[x.status]);return this},abort:function(a){var b=a||w;return e&&e.abort(b),z(0,b),this}};if(q.promise(x).complete=r.add,x.success=x.done,x.error=x.fail,m.url=((b||m.url||ib.href)+"").replace(lb,"").replace(qb,ib.protocol+"//"),m.type=c.method||c.type||m.method||m.type,m.dataTypes=n.trim(m.dataType||"*").toLowerCase().match(G)||[""],null==m.crossDomain){j=d.createElement("a");try{j.href=m.url,j.href=j.href,m.crossDomain=ub.protocol+"//"+ub.host!=j.protocol+"//"+j.host}catch(y){m.crossDomain=!0}}if(m.data&&m.processData&&"string"!=typeof m.data&&(m.data=n.param(m.data,m.traditional)),wb(rb,m,c,x),2===v)return x;k=n.event&&m.global,k&&0===n.active++&&n.event.trigger("ajaxStart"),m.type=m.type.toUpperCase(),m.hasContent=!pb.test(m.type),f=m.url,m.hasContent||(m.data&&(f=m.url+=(kb.test(f)?"&":"?")+m.data,delete m.data),m.cache===!1&&(m.url=mb.test(f)?f.replace(mb,"$1_="+jb++):f+(kb.test(f)?"&":"?")+"_="+jb++)),m.ifModified&&(n.lastModified[f]&&x.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&x.setRequestHeader("If-None-Match",n.etag[f])),(m.data&&m.hasContent&&m.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",m.contentType),x.setRequestHeader("Accept",m.dataTypes[0]&&m.accepts[m.dataTypes[0]]?m.accepts[m.dataTypes[0]]+("*"!==m.dataTypes[0]?", "+tb+"; q=0.01":""):m.accepts["*"]);for(l in m.headers)x.setRequestHeader(l,m.headers[l]);if(m.beforeSend&&(m.beforeSend.call(o,x,m)===!1||2===v))return x.abort();w="abort";for(l in{success:1,error:1,complete:1})x[l](m[l]);if(e=wb(sb,m,c,x)){if(x.readyState=1,k&&p.trigger("ajaxSend",[x,m]),2===v)return x;m.async&&m.timeout>0&&(i=a.setTimeout(function(){x.abort("timeout")},m.timeout));try{v=1,e.send(t,z)}catch(y){if(!(2>v))throw y;z(-1,y)}}else z(-1,"No Transport");function z(b,c,d,h){var j,l,t,u,w,y=c;2!==v&&(v=2,i&&a.clearTimeout(i),e=void 0,g=h||"",x.readyState=b>0?4:0,j=b>=200&&300>b||304===b,d&&(u=yb(m,x,d)),u=zb(m,u,x,j),j?(m.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(n.lastModified[f]=w),w=x.getResponseHeader("etag"),w&&(n.etag[f]=w)),204===b||"HEAD"===m.type?y="nocontent":304===b?y="notmodified":(y=u.state,l=u.data,t=u.error,j=!t)):(t=y,(b||!y)&&(y="error",0>b&&(b=0))),x.status=b,x.statusText=(c||y)+"",j?q.resolveWith(o,[l,y,x]):q.rejectWith(o,[x,y,t]),x.statusCode(s),s=void 0,k&&p.trigger(j?"ajaxSuccess":"ajaxError",[x,m,j?l:t]),r.fireWith(o,[x,y]),k&&(p.trigger("ajaxComplete",[x,m]),--n.active||n.event.trigger("ajaxStop")))}return x},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return!n.expr.filters.visible(a)},n.expr.filters.visible=function(a){return a.offsetWidth>0||a.offsetHeight>0||a.getClientRects().length>0};var Ab=/%20/g,Bb=/\[\]$/,Cb=/\r?\n/g,Db=/^(?:submit|button|image|reset|file)$/i,Eb=/^(?:input|select|textarea|keygen)/i;function Fb(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||Bb.test(a)?d(a,e):Fb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Fb(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Fb(c,a[c],b,e);return d.join("&").replace(Ab,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Eb.test(this.nodeName)&&!Db.test(a)&&(this.checked||!X.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(Cb,"\r\n")}}):{name:b.name,value:c.replace(Cb,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Gb={0:200,1223:204},Hb=n.ajaxSettings.xhr();l.cors=!!Hb&&"withCredentials"in Hb,l.ajax=Hb=!!Hb,n.ajaxTransport(function(b){var c,d;return l.cors||Hb&&!b.crossDomain?{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Gb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=n("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Ib=[],Jb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Ib.pop()||n.expando+"_"+jb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Jb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Jb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Jb,"$1"+e):b.jsonp!==!1&&(b.url+=(kb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Ib.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),l.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||(l.createHTMLDocument?d.implementation.createHTMLDocument(""):d);var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ca([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var Kb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Kb)return Kb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(g,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function Lb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(e=d.getBoundingClientRect(),c=Lb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0)-a.scrollTop(),d.left+=n.css(a[0],"borderLeftWidth",!0)-a.scrollLeft()),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ea})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;n.fn[a]=function(d){return K(this,function(a,d,e){var f=Lb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ga(l.pixelPosition,function(a,c){return c?(c=Fa(a,b),Ba.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return K(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)},size:function(){return this.length}}),n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Mb=a.jQuery,Nb=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Nb),b&&a.jQuery===n&&(a.jQuery=Mb),n},b||(a.jQuery=a.$=n),n});

/*!
 * Bootstrap v3.3.6 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1||b[0]>2)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.6",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a(f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.6",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),a(c.target).is('input[type="radio"]')||a(c.target).is('input[type="checkbox"]')||c.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.6",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));return a>this.$items.length-1||0>a?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.6",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger(a.Event("hidden.bs.dropdown",f)))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.6",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger(a.Event("shown.bs.dropdown",h))}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.6",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.6",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),c.isInStateTrue()?void 0:(clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide())},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);return this.$element.trigger(g),g.isDefaultPrevented()?void 0:(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=d?{top:0,left:0}:b.offset(),g={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},h=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,g,h,f)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.6",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.6",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");
d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.6",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.6",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return c>e?"top":!1;if("bottom"==this.affixed)return null!=c?e+this.unpin<=f.top?!1:"bottom":a-d>=e+g?!1:"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&c>=e?"top":null!=d&&i+j>=a-d?"bottom":!1},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);
;(function(window, document, undefined) {
  "use strict";
  
  (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

// SweetAlert
// 2014-2015 (c) - Tristan Edwards
// github.com/t4t5/sweetalert

/*
 * jQuery-like functions for manipulating the DOM
 */

var _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation = require('./modules/handle-dom');

/*
 * Handy utilities
 */

var _extend$hexToRgb$isIE8$logStr$colorLuminance = require('./modules/utils');

/*
 *  Handle sweetAlert's DOM elements
 */

var _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition = require('./modules/handle-swal-dom');

// Handle button events and keyboard events

var _handleButton$handleConfirm$handleCancel = require('./modules/handle-click');

var _handleKeyDown = require('./modules/handle-key');

var _handleKeyDown2 = _interopRequireWildcard(_handleKeyDown);

// Default values

var _defaultParams = require('./modules/default-params');

var _defaultParams2 = _interopRequireWildcard(_defaultParams);

var _setParameters = require('./modules/set-params');

var _setParameters2 = _interopRequireWildcard(_setParameters);

/*
 * Remember state in cases where opening and handling a modal will fiddle with it.
 * (We also use window.previousActiveElement as a global variable)
 */
var previousWindowKeyDown;
var lastFocusedButton;

/*
 * Global sweetAlert function
 * (this is what the user calls)
 */
var sweetAlert, swal;

sweetAlert = swal = function () {
  var customizations = arguments[0];

  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.addClass(document.body, 'stop-scrolling');
  _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.resetInput();

  /*
   * Use argument if defined or default value from params object otherwise.
   * Supports the case where a default value is boolean true and should be
   * overridden by a corresponding explicit argument which is boolean false.
   */
  function argumentOrDefault(key) {
    var args = customizations;
    return args[key] === undefined ? _defaultParams2['default'][key] : args[key];
  }

  if (customizations === undefined) {
    _extend$hexToRgb$isIE8$logStr$colorLuminance.logStr('SweetAlert expects at least 1 attribute!');
    return false;
  }

  var params = _extend$hexToRgb$isIE8$logStr$colorLuminance.extend({}, _defaultParams2['default']);

  switch (typeof customizations) {

    // Ex: swal("Hello", "Just testing", "info");
    case 'string':
      params.title = customizations;
      params.text = arguments[1] || '';
      params.type = arguments[2] || '';
      break;

    // Ex: swal({ title:"Hello", text: "Just testing", type: "info" });
    case 'object':
      if (customizations.title === undefined) {
        _extend$hexToRgb$isIE8$logStr$colorLuminance.logStr('Missing "title" argument!');
        return false;
      }

      params.title = customizations.title;

      for (var customName in _defaultParams2['default']) {
        params[customName] = argumentOrDefault(customName);
      }

      // Show "Confirm" instead of "OK" if cancel button is visible
      params.confirmButtonText = params.showCancelButton ? 'Confirm' : _defaultParams2['default'].confirmButtonText;
      params.confirmButtonText = argumentOrDefault('confirmButtonText');

      // Callback function when clicking on "OK"/"Cancel"
      params.doneFunction = arguments[1] || null;

      break;

    default:
      _extend$hexToRgb$isIE8$logStr$colorLuminance.logStr('Unexpected type of argument! Expected "string" or "object", got ' + typeof customizations);
      return false;

  }

  _setParameters2['default'](params);
  _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.fixVerticalPosition();
  _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.openModal(arguments[1]);

  // Modal interactions
  var modal = _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getModal();

  /*
   * Make sure all modal buttons respond to all events
   */
  var $buttons = modal.querySelectorAll('button');
  var buttonEvents = ['onclick', 'onmouseover', 'onmouseout', 'onmousedown', 'onmouseup', 'onfocus'];
  var onButtonEvent = function onButtonEvent(e) {
    return _handleButton$handleConfirm$handleCancel.handleButton(e, params, modal);
  };

  for (var btnIndex = 0; btnIndex < $buttons.length; btnIndex++) {
    for (var evtIndex = 0; evtIndex < buttonEvents.length; evtIndex++) {
      var btnEvt = buttonEvents[evtIndex];
      $buttons[btnIndex][btnEvt] = onButtonEvent;
    }
  }

  // Clicking outside the modal dismisses it (if allowed by user)
  _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getOverlay().onclick = onButtonEvent;

  previousWindowKeyDown = window.onkeydown;

  var onKeyEvent = function onKeyEvent(e) {
    return _handleKeyDown2['default'](e, params, modal);
  };
  window.onkeydown = onKeyEvent;

  window.onfocus = function () {
    // When the user has focused away and focused back from the whole window.
    setTimeout(function () {
      // Put in a timeout to jump out of the event sequence.
      // Calling focus() in the event sequence confuses things.
      if (lastFocusedButton !== undefined) {
        lastFocusedButton.focus();
        lastFocusedButton = undefined;
      }
    }, 0);
  };

  // Show alert with enabled buttons always
  swal.enableButtons();
};

/*
 * Set default params for each popup
 * @param {Object} userParams
 */
sweetAlert.setDefaults = swal.setDefaults = function (userParams) {
  if (!userParams) {
    throw new Error('userParams is required');
  }
  if (typeof userParams !== 'object') {
    throw new Error('userParams has to be a object');
  }

  _extend$hexToRgb$isIE8$logStr$colorLuminance.extend(_defaultParams2['default'], userParams);
};

/*
 * Animation when closing modal
 */
sweetAlert.close = swal.close = function () {
  var modal = _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getModal();

  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.fadeOut(_sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getOverlay(), 5);
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.fadeOut(modal, 5);
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass(modal, 'showSweetAlert');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.addClass(modal, 'hideSweetAlert');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass(modal, 'visible');

  /*
   * Reset icon animations
   */
  var $successIcon = modal.querySelector('.sa-icon.sa-success');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($successIcon, 'animate');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($successIcon.querySelector('.sa-tip'), 'animateSuccessTip');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($successIcon.querySelector('.sa-long'), 'animateSuccessLong');

  var $errorIcon = modal.querySelector('.sa-icon.sa-error');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($errorIcon, 'animateErrorIcon');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($errorIcon.querySelector('.sa-x-mark'), 'animateXMark');

  var $warningIcon = modal.querySelector('.sa-icon.sa-warning');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($warningIcon, 'pulseWarning');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($warningIcon.querySelector('.sa-body'), 'pulseWarningIns');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($warningIcon.querySelector('.sa-dot'), 'pulseWarningIns');

  // Reset custom class (delay so that UI changes aren't visible)
  setTimeout(function () {
    var customClass = modal.getAttribute('data-custom-class');
    _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass(modal, customClass);
  }, 300);

  // Make page scrollable again
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass(document.body, 'stop-scrolling');

  // Reset the page to its previous state
  window.onkeydown = previousWindowKeyDown;
  if (window.previousActiveElement) {
    window.previousActiveElement.focus();
  }
  lastFocusedButton = undefined;
  clearTimeout(modal.timeout);

  return true;
};

/*
 * Validation of the input field is done by user
 * If something is wrong => call showInputError with errorMessage
 */
sweetAlert.showInputError = swal.showInputError = function (errorMessage) {
  var modal = _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getModal();

  var $errorIcon = modal.querySelector('.sa-input-error');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.addClass($errorIcon, 'show');

  var $errorContainer = modal.querySelector('.sa-error-container');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.addClass($errorContainer, 'show');

  $errorContainer.querySelector('p').innerHTML = errorMessage;

  setTimeout(function () {
    sweetAlert.enableButtons();
  }, 1);

  modal.querySelector('input').focus();
};

/*
 * Reset input error DOM elements
 */
sweetAlert.resetInputError = swal.resetInputError = function (event) {
  // If press enter => ignore
  if (event && event.keyCode === 13) {
    return false;
  }

  var $modal = _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getModal();

  var $errorIcon = $modal.querySelector('.sa-input-error');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($errorIcon, 'show');

  var $errorContainer = $modal.querySelector('.sa-error-container');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($errorContainer, 'show');
};

/*
 * Disable confirm and cancel buttons
 */
sweetAlert.disableButtons = swal.disableButtons = function (event) {
  var modal = _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getModal();
  var $confirmButton = modal.querySelector('button.confirm');
  var $cancelButton = modal.querySelector('button.cancel');
  $confirmButton.disabled = true;
  $cancelButton.disabled = true;
};

/*
 * Enable confirm and cancel buttons
 */
sweetAlert.enableButtons = swal.enableButtons = function (event) {
  var modal = _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getModal();
  var $confirmButton = modal.querySelector('button.confirm');
  var $cancelButton = modal.querySelector('button.cancel');
  $confirmButton.disabled = false;
  $cancelButton.disabled = false;
};

if (typeof window !== 'undefined') {
  // The 'handle-click' module requires
  // that 'sweetAlert' was set as global.
  window.sweetAlert = window.swal = sweetAlert;
} else {
  _extend$hexToRgb$isIE8$logStr$colorLuminance.logStr('SweetAlert is a frontend module!');
}

},{"./modules/default-params":2,"./modules/handle-click":3,"./modules/handle-dom":4,"./modules/handle-key":5,"./modules/handle-swal-dom":6,"./modules/set-params":8,"./modules/utils":9}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var defaultParams = {
  title: '',
  text: '',
  type: null,
  allowOutsideClick: false,
  showConfirmButton: true,
  showCancelButton: false,
  closeOnConfirm: true,
  closeOnCancel: true,
  confirmButtonText: 'OK',
  confirmButtonColor: '#8CD4F5',
  cancelButtonText: 'Cancel',
  imageUrl: null,
  imageSize: null,
  timer: null,
  customClass: '',
  html: false,
  animation: true,
  allowEscapeKey: true,
  inputType: 'text',
  inputPlaceholder: '',
  inputValue: '',
  showLoaderOnConfirm: false
};

exports['default'] = defaultParams;
module.exports = exports['default'];

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _colorLuminance = require('./utils');

var _getModal = require('./handle-swal-dom');

var _hasClass$isDescendant = require('./handle-dom');

/*
 * User clicked on "Confirm"/"OK" or "Cancel"
 */
var handleButton = function handleButton(event, params, modal) {
  var e = event || window.event;
  var target = e.target || e.srcElement;

  var targetedConfirm = target.className.indexOf('confirm') !== -1;
  var targetedOverlay = target.className.indexOf('sweet-overlay') !== -1;
  var modalIsVisible = _hasClass$isDescendant.hasClass(modal, 'visible');
  var doneFunctionExists = params.doneFunction && modal.getAttribute('data-has-done-function') === 'true';

  // Since the user can change the background-color of the confirm button programmatically,
  // we must calculate what the color should be on hover/active
  var normalColor, hoverColor, activeColor;
  if (targetedConfirm && params.confirmButtonColor) {
    normalColor = params.confirmButtonColor;
    hoverColor = _colorLuminance.colorLuminance(normalColor, -0.04);
    activeColor = _colorLuminance.colorLuminance(normalColor, -0.14);
  }

  function shouldSetConfirmButtonColor(color) {
    if (targetedConfirm && params.confirmButtonColor) {
      target.style.backgroundColor = color;
    }
  }

  switch (e.type) {
    case 'mouseover':
      shouldSetConfirmButtonColor(hoverColor);
      break;

    case 'mouseout':
      shouldSetConfirmButtonColor(normalColor);
      break;

    case 'mousedown':
      shouldSetConfirmButtonColor(activeColor);
      break;

    case 'mouseup':
      shouldSetConfirmButtonColor(hoverColor);
      break;

    case 'focus':
      var $confirmButton = modal.querySelector('button.confirm');
      var $cancelButton = modal.querySelector('button.cancel');

      if (targetedConfirm) {
        $cancelButton.style.boxShadow = 'none';
      } else {
        $confirmButton.style.boxShadow = 'none';
      }
      break;

    case 'click':
      var clickedOnModal = modal === target;
      var clickedOnModalChild = _hasClass$isDescendant.isDescendant(modal, target);

      // Ignore click outside if allowOutsideClick is false
      if (!clickedOnModal && !clickedOnModalChild && modalIsVisible && !params.allowOutsideClick) {
        break;
      }

      if (targetedConfirm && doneFunctionExists && modalIsVisible) {
        handleConfirm(modal, params);
      } else if (doneFunctionExists && modalIsVisible || targetedOverlay) {
        handleCancel(modal, params);
      } else if (_hasClass$isDescendant.isDescendant(modal, target) && target.tagName === 'BUTTON') {
        sweetAlert.close();
      }
      break;
  }
};

/*
 *  User clicked on "Confirm"/"OK"
 */
var handleConfirm = function handleConfirm(modal, params) {
  var callbackValue = true;

  if (_hasClass$isDescendant.hasClass(modal, 'show-input')) {
    callbackValue = modal.querySelector('input').value;

    if (!callbackValue) {
      callbackValue = '';
    }
  }

  params.doneFunction(callbackValue);

  if (params.closeOnConfirm) {
    sweetAlert.close();
  }
  // Disable cancel and confirm button if the parameter is true
  if (params.showLoaderOnConfirm) {
    sweetAlert.disableButtons();
  }
};

/*
 *  User clicked on "Cancel"
 */
var handleCancel = function handleCancel(modal, params) {
  // Check if callback function expects a parameter (to track cancel actions)
  var functionAsStr = String(params.doneFunction).replace(/\s/g, '');
  var functionHandlesCancel = functionAsStr.substring(0, 9) === 'function(' && functionAsStr.substring(9, 10) !== ')';

  if (functionHandlesCancel) {
    params.doneFunction(false);
  }

  if (params.closeOnCancel) {
    sweetAlert.close();
  }
};

exports['default'] = {
  handleButton: handleButton,
  handleConfirm: handleConfirm,
  handleCancel: handleCancel
};
module.exports = exports['default'];

},{"./handle-dom":4,"./handle-swal-dom":6,"./utils":9}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var hasClass = function hasClass(elem, className) {
  return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
};

var addClass = function addClass(elem, className) {
  if (!hasClass(elem, className)) {
    elem.className += ' ' + className;
  }
};

var removeClass = function removeClass(elem, className) {
  var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
  if (hasClass(elem, className)) {
    while (newClass.indexOf(' ' + className + ' ') >= 0) {
      newClass = newClass.replace(' ' + className + ' ', ' ');
    }
    elem.className = newClass.replace(/^\s+|\s+$/g, '');
  }
};

var escapeHtml = function escapeHtml(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

var _show = function _show(elem) {
  elem.style.opacity = '';
  elem.style.display = 'block';
};

var show = function show(elems) {
  if (elems && !elems.length) {
    return _show(elems);
  }
  for (var i = 0; i < elems.length; ++i) {
    _show(elems[i]);
  }
};

var _hide = function _hide(elem) {
  elem.style.opacity = '';
  elem.style.display = 'none';
};

var hide = function hide(elems) {
  if (elems && !elems.length) {
    return _hide(elems);
  }
  for (var i = 0; i < elems.length; ++i) {
    _hide(elems[i]);
  }
};

var isDescendant = function isDescendant(parent, child) {
  var node = child.parentNode;
  while (node !== null) {
    if (node === parent) {
      return true;
    }
    node = node.parentNode;
  }
  return false;
};

var getTopMargin = function getTopMargin(elem) {
  elem.style.left = '-9999px';
  elem.style.display = 'block';

  var height = elem.clientHeight,
      padding;
  if (typeof getComputedStyle !== 'undefined') {
    // IE 8
    padding = parseInt(getComputedStyle(elem).getPropertyValue('padding-top'), 10);
  } else {
    padding = parseInt(elem.currentStyle.padding);
  }

  elem.style.left = '';
  elem.style.display = 'none';
  return '-' + parseInt((height + padding) / 2) + 'px';
};

var fadeIn = function fadeIn(elem, interval) {
  if (+elem.style.opacity < 1) {
    interval = interval || 16;
    elem.style.opacity = 0;
    elem.style.display = 'block';
    var last = +new Date();
    var tick = (function (_tick) {
      function tick() {
        return _tick.apply(this, arguments);
      }

      tick.toString = function () {
        return _tick.toString();
      };

      return tick;
    })(function () {
      elem.style.opacity = +elem.style.opacity + (new Date() - last) / 100;
      last = +new Date();

      if (+elem.style.opacity < 1) {
        setTimeout(tick, interval);
      }
    });
    tick();
  }
  elem.style.display = 'block'; //fallback IE8
};

var fadeOut = function fadeOut(elem, interval) {
  interval = interval || 16;
  elem.style.opacity = 1;
  var last = +new Date();
  var tick = (function (_tick2) {
    function tick() {
      return _tick2.apply(this, arguments);
    }

    tick.toString = function () {
      return _tick2.toString();
    };

    return tick;
  })(function () {
    elem.style.opacity = +elem.style.opacity - (new Date() - last) / 100;
    last = +new Date();

    if (+elem.style.opacity > 0) {
      setTimeout(tick, interval);
    } else {
      elem.style.display = 'none';
    }
  });
  tick();
};

var fireClick = function fireClick(node) {
  // Taken from http://www.nonobtrusive.com/2011/11/29/programatically-fire-crossbrowser-click-event-with-javascript/
  // Then fixed for today's Chrome browser.
  if (typeof MouseEvent === 'function') {
    // Up-to-date approach
    var mevt = new MouseEvent('click', {
      view: window,
      bubbles: false,
      cancelable: true
    });
    node.dispatchEvent(mevt);
  } else if (document.createEvent) {
    // Fallback
    var evt = document.createEvent('MouseEvents');
    evt.initEvent('click', false, false);
    node.dispatchEvent(evt);
  } else if (document.createEventObject) {
    node.fireEvent('onclick');
  } else if (typeof node.onclick === 'function') {
    node.onclick();
  }
};

var stopEventPropagation = function stopEventPropagation(e) {
  // In particular, make sure the space bar doesn't scroll the main window.
  if (typeof e.stopPropagation === 'function') {
    e.stopPropagation();
    e.preventDefault();
  } else if (window.event && window.event.hasOwnProperty('cancelBubble')) {
    window.event.cancelBubble = true;
  }
};

exports.hasClass = hasClass;
exports.addClass = addClass;
exports.removeClass = removeClass;
exports.escapeHtml = escapeHtml;
exports._show = _show;
exports.show = show;
exports._hide = _hide;
exports.hide = hide;
exports.isDescendant = isDescendant;
exports.getTopMargin = getTopMargin;
exports.fadeIn = fadeIn;
exports.fadeOut = fadeOut;
exports.fireClick = fireClick;
exports.stopEventPropagation = stopEventPropagation;

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _stopEventPropagation$fireClick = require('./handle-dom');

var _setFocusStyle = require('./handle-swal-dom');

var handleKeyDown = function handleKeyDown(event, params, modal) {
  var e = event || window.event;
  var keyCode = e.keyCode || e.which;

  var $okButton = modal.querySelector('button.confirm');
  var $cancelButton = modal.querySelector('button.cancel');
  var $modalButtons = modal.querySelectorAll('button[tabindex]');

  if ([9, 13, 32, 27].indexOf(keyCode) === -1) {
    // Don't do work on keys we don't care about.
    return;
  }

  var $targetElement = e.target || e.srcElement;

  var btnIndex = -1; // Find the button - note, this is a nodelist, not an array.
  for (var i = 0; i < $modalButtons.length; i++) {
    if ($targetElement === $modalButtons[i]) {
      btnIndex = i;
      break;
    }
  }

  if (keyCode === 9) {
    // TAB
    if (btnIndex === -1) {
      // No button focused. Jump to the confirm button.
      $targetElement = $okButton;
    } else {
      // Cycle to the next button
      if (btnIndex === $modalButtons.length - 1) {
        $targetElement = $modalButtons[0];
      } else {
        $targetElement = $modalButtons[btnIndex + 1];
      }
    }

    _stopEventPropagation$fireClick.stopEventPropagation(e);
    $targetElement.focus();

    if (params.confirmButtonColor) {
      _setFocusStyle.setFocusStyle($targetElement, params.confirmButtonColor);
    }
  } else {
    if (keyCode === 13) {
      if ($targetElement.tagName === 'INPUT') {
        $targetElement = $okButton;
        $okButton.focus();
      }

      if (btnIndex === -1) {
        // ENTER/SPACE clicked outside of a button.
        $targetElement = $okButton;
      } else {
        // Do nothing - let the browser handle it.
        $targetElement = undefined;
      }
    } else if (keyCode === 27 && params.allowEscapeKey === true) {
      $targetElement = $cancelButton;
      _stopEventPropagation$fireClick.fireClick($targetElement, e);
    } else {
      // Fallback - let the browser handle it.
      $targetElement = undefined;
    }
  }
};

exports['default'] = handleKeyDown;
module.exports = exports['default'];

},{"./handle-dom":4,"./handle-swal-dom":6}],6:[function(require,module,exports){
'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _hexToRgb = require('./utils');

var _removeClass$getTopMargin$fadeIn$show$addClass = require('./handle-dom');

var _defaultParams = require('./default-params');

var _defaultParams2 = _interopRequireWildcard(_defaultParams);

/*
 * Add modal + overlay to DOM
 */

var _injectedHTML = require('./injected-html');

var _injectedHTML2 = _interopRequireWildcard(_injectedHTML);

var modalClass = '.sweet-alert';
var overlayClass = '.sweet-overlay';

var sweetAlertInitialize = function sweetAlertInitialize() {
  var sweetWrap = document.createElement('div');
  sweetWrap.innerHTML = _injectedHTML2['default'];

  // Append elements to body
  while (sweetWrap.firstChild) {
    document.body.appendChild(sweetWrap.firstChild);
  }
};

/*
 * Get DOM element of modal
 */
var getModal = (function (_getModal) {
  function getModal() {
    return _getModal.apply(this, arguments);
  }

  getModal.toString = function () {
    return _getModal.toString();
  };

  return getModal;
})(function () {
  var $modal = document.querySelector(modalClass);

  if (!$modal) {
    sweetAlertInitialize();
    $modal = getModal();
  }

  return $modal;
});

/*
 * Get DOM element of input (in modal)
 */
var getInput = function getInput() {
  var $modal = getModal();
  if ($modal) {
    return $modal.querySelector('input');
  }
};

/*
 * Get DOM element of overlay
 */
var getOverlay = function getOverlay() {
  return document.querySelector(overlayClass);
};

/*
 * Add box-shadow style to button (depending on its chosen bg-color)
 */
var setFocusStyle = function setFocusStyle($button, bgColor) {
  var rgbColor = _hexToRgb.hexToRgb(bgColor);
  $button.style.boxShadow = '0 0 2px rgba(' + rgbColor + ', 0.8), inset 0 0 0 1px rgba(0, 0, 0, 0.05)';
};

/*
 * Animation when opening modal
 */
var openModal = function openModal(callback) {
  var $modal = getModal();
  _removeClass$getTopMargin$fadeIn$show$addClass.fadeIn(getOverlay(), 10);
  _removeClass$getTopMargin$fadeIn$show$addClass.show($modal);
  _removeClass$getTopMargin$fadeIn$show$addClass.addClass($modal, 'showSweetAlert');
  _removeClass$getTopMargin$fadeIn$show$addClass.removeClass($modal, 'hideSweetAlert');

  window.previousActiveElement = document.activeElement;
  var $okButton = $modal.querySelector('button.confirm');
  $okButton.focus();

  setTimeout(function () {
    _removeClass$getTopMargin$fadeIn$show$addClass.addClass($modal, 'visible');
  }, 500);

  var timer = $modal.getAttribute('data-timer');

  if (timer !== 'null' && timer !== '') {
    var timerCallback = callback;
    $modal.timeout = setTimeout(function () {
      var doneFunctionExists = (timerCallback || null) && $modal.getAttribute('data-has-done-function') === 'true';
      if (doneFunctionExists) {
        timerCallback(null);
      } else {
        sweetAlert.close();
      }
    }, timer);
  }
};

/*
 * Reset the styling of the input
 * (for example if errors have been shown)
 */
var resetInput = function resetInput() {
  var $modal = getModal();
  var $input = getInput();

  _removeClass$getTopMargin$fadeIn$show$addClass.removeClass($modal, 'show-input');
  $input.value = _defaultParams2['default'].inputValue;
  $input.setAttribute('type', _defaultParams2['default'].inputType);
  $input.setAttribute('placeholder', _defaultParams2['default'].inputPlaceholder);

  resetInputError();
};

var resetInputError = function resetInputError(event) {
  // If press enter => ignore
  if (event && event.keyCode === 13) {
    return false;
  }

  var $modal = getModal();

  var $errorIcon = $modal.querySelector('.sa-input-error');
  _removeClass$getTopMargin$fadeIn$show$addClass.removeClass($errorIcon, 'show');

  var $errorContainer = $modal.querySelector('.sa-error-container');
  _removeClass$getTopMargin$fadeIn$show$addClass.removeClass($errorContainer, 'show');
};

/*
 * Set "margin-top"-property on modal based on its computed height
 */
var fixVerticalPosition = function fixVerticalPosition() {
  var $modal = getModal();
  $modal.style.marginTop = _removeClass$getTopMargin$fadeIn$show$addClass.getTopMargin(getModal());
};

exports.sweetAlertInitialize = sweetAlertInitialize;
exports.getModal = getModal;
exports.getOverlay = getOverlay;
exports.getInput = getInput;
exports.setFocusStyle = setFocusStyle;
exports.openModal = openModal;
exports.resetInput = resetInput;
exports.resetInputError = resetInputError;
exports.fixVerticalPosition = fixVerticalPosition;

},{"./default-params":2,"./handle-dom":4,"./injected-html":7,"./utils":9}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var injectedHTML =

// Dark overlay
"<div class=\"sweet-overlay\" tabIndex=\"-1\"></div>" +

// Modal
"<div class=\"sweet-alert\">" +

// Error icon
"<div class=\"sa-icon sa-error\">\n      <span class=\"sa-x-mark\">\n        <span class=\"sa-line sa-left\"></span>\n        <span class=\"sa-line sa-right\"></span>\n      </span>\n    </div>" +

// Warning icon
"<div class=\"sa-icon sa-warning\">\n      <span class=\"sa-body\"></span>\n      <span class=\"sa-dot\"></span>\n    </div>" +

// Info icon
"<div class=\"sa-icon sa-info\"></div>" +

// Success icon
"<div class=\"sa-icon sa-success\">\n      <span class=\"sa-line sa-tip\"></span>\n      <span class=\"sa-line sa-long\"></span>\n\n      <div class=\"sa-placeholder\"></div>\n      <div class=\"sa-fix\"></div>\n    </div>" + "<div class=\"sa-icon sa-custom\"></div>" +

// Title, text and input
"<h2>Title</h2>\n    <p>Text</p>\n    <fieldset>\n      <input type=\"text\" tabIndex=\"3\" />\n      <div class=\"sa-input-error\"></div>\n    </fieldset>" +

// Input errors
"<div class=\"sa-error-container\">\n      <div class=\"icon\">!</div>\n      <p>Not valid!</p>\n    </div>" +

// Cancel and confirm buttons
"<div class=\"sa-button-container\">\n      <button class=\"cancel\" tabIndex=\"2\">Cancel</button>\n      <div class=\"sa-confirm-button-container\">\n        <button class=\"confirm\" tabIndex=\"1\">OK</button>" +

// Loading animation
"<div class=\"la-ball-fall\">\n          <div></div>\n          <div></div>\n          <div></div>\n        </div>\n      </div>\n    </div>" +

// End of modal
"</div>";

exports["default"] = injectedHTML;
module.exports = exports["default"];

},{}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _isIE8 = require('./utils');

var _getModal$getInput$setFocusStyle = require('./handle-swal-dom');

var _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide = require('./handle-dom');

var alertTypes = ['error', 'warning', 'info', 'success', 'input', 'prompt'];

/*
 * Set type, text and actions on modal
 */
var setParameters = function setParameters(params) {
  var modal = _getModal$getInput$setFocusStyle.getModal();

  var $title = modal.querySelector('h2');
  var $text = modal.querySelector('p');
  var $cancelBtn = modal.querySelector('button.cancel');
  var $confirmBtn = modal.querySelector('button.confirm');

  /*
   * Title
   */
  $title.innerHTML = params.html ? params.title : _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.escapeHtml(params.title).split('\n').join('<br>');

  /*
   * Text
   */
  $text.innerHTML = params.html ? params.text : _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.escapeHtml(params.text || '').split('\n').join('<br>');
  if (params.text) _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.show($text);

  /*
   * Custom class
   */
  if (params.customClass) {
    _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass(modal, params.customClass);
    modal.setAttribute('data-custom-class', params.customClass);
  } else {
    // Find previously set classes and remove them
    var customClass = modal.getAttribute('data-custom-class');
    _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.removeClass(modal, customClass);
    modal.setAttribute('data-custom-class', '');
  }

  /*
   * Icon
   */
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.hide(modal.querySelectorAll('.sa-icon'));

  if (params.type && !_isIE8.isIE8()) {
    var _ret = (function () {

      var validType = false;

      for (var i = 0; i < alertTypes.length; i++) {
        if (params.type === alertTypes[i]) {
          validType = true;
          break;
        }
      }

      if (!validType) {
        logStr('Unknown alert type: ' + params.type);
        return {
          v: false
        };
      }

      var typesWithIcons = ['success', 'error', 'warning', 'info'];
      var $icon = undefined;

      if (typesWithIcons.indexOf(params.type) !== -1) {
        $icon = modal.querySelector('.sa-icon.' + 'sa-' + params.type);
        _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.show($icon);
      }

      var $input = _getModal$getInput$setFocusStyle.getInput();

      // Animate icon
      switch (params.type) {

        case 'success':
          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass($icon, 'animate');
          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass($icon.querySelector('.sa-tip'), 'animateSuccessTip');
          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass($icon.querySelector('.sa-long'), 'animateSuccessLong');
          break;

        case 'error':
          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass($icon, 'animateErrorIcon');
          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass($icon.querySelector('.sa-x-mark'), 'animateXMark');
          break;

        case 'warning':
          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass($icon, 'pulseWarning');
          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass($icon.querySelector('.sa-body'), 'pulseWarningIns');
          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass($icon.querySelector('.sa-dot'), 'pulseWarningIns');
          break;

        case 'input':
        case 'prompt':
          $input.setAttribute('type', params.inputType);
          $input.value = params.inputValue;
          $input.setAttribute('placeholder', params.inputPlaceholder);
          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass(modal, 'show-input');
          setTimeout(function () {
            $input.focus();
            $input.addEventListener('keyup', swal.resetInputError);
          }, 400);
          break;
      }
    })();

    if (typeof _ret === 'object') {
      return _ret.v;
    }
  }

  /*
   * Custom image
   */
  if (params.imageUrl) {
    var $customIcon = modal.querySelector('.sa-icon.sa-custom');

    $customIcon.style.backgroundImage = 'url(' + params.imageUrl + ')';
    _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.show($customIcon);

    var _imgWidth = 80;
    var _imgHeight = 80;

    if (params.imageSize) {
      var dimensions = params.imageSize.toString().split('x');
      var imgWidth = dimensions[0];
      var imgHeight = dimensions[1];

      if (!imgWidth || !imgHeight) {
        logStr('Parameter imageSize expects value with format WIDTHxHEIGHT, got ' + params.imageSize);
      } else {
        _imgWidth = imgWidth;
        _imgHeight = imgHeight;
      }
    }

    $customIcon.setAttribute('style', $customIcon.getAttribute('style') + 'width:' + _imgWidth + 'px; height:' + _imgHeight + 'px');
  }

  /*
   * Show cancel button?
   */
  modal.setAttribute('data-has-cancel-button', params.showCancelButton);
  if (params.showCancelButton) {
    $cancelBtn.style.display = 'inline-block';
  } else {
    _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.hide($cancelBtn);
  }

  /*
   * Show confirm button?
   */
  modal.setAttribute('data-has-confirm-button', params.showConfirmButton);
  if (params.showConfirmButton) {
    $confirmBtn.style.display = 'inline-block';
  } else {
    _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.hide($confirmBtn);
  }

  /*
   * Custom text on cancel/confirm buttons
   */
  if (params.cancelButtonText) {
    $cancelBtn.innerHTML = _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.escapeHtml(params.cancelButtonText);
  }
  if (params.confirmButtonText) {
    $confirmBtn.innerHTML = _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.escapeHtml(params.confirmButtonText);
  }

  /*
   * Custom color on confirm button
   */
  if (params.confirmButtonColor) {
    // Set confirm button to selected background color
    $confirmBtn.style.backgroundColor = params.confirmButtonColor;

    // Set the confirm button color to the loading ring
    $confirmBtn.style.borderLeftColor = params.confirmLoadingButtonColor;
    $confirmBtn.style.borderRightColor = params.confirmLoadingButtonColor;

    // Set box-shadow to default focused button
    _getModal$getInput$setFocusStyle.setFocusStyle($confirmBtn, params.confirmButtonColor);
  }

  /*
   * Allow outside click
   */
  modal.setAttribute('data-allow-outside-click', params.allowOutsideClick);

  /*
   * Callback function
   */
  var hasDoneFunction = params.doneFunction ? true : false;
  modal.setAttribute('data-has-done-function', hasDoneFunction);

  /*
   * Animation
   */
  if (!params.animation) {
    modal.setAttribute('data-animation', 'none');
  } else if (typeof params.animation === 'string') {
    modal.setAttribute('data-animation', params.animation); // Custom animation
  } else {
    modal.setAttribute('data-animation', 'pop');
  }

  /*
   * Timer
   */
  modal.setAttribute('data-timer', params.timer);
};

exports['default'] = setParameters;
module.exports = exports['default'];

},{"./handle-dom":4,"./handle-swal-dom":6,"./utils":9}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
/*
 * Allow user to pass their own params
 */
var extend = function extend(a, b) {
  for (var key in b) {
    if (b.hasOwnProperty(key)) {
      a[key] = b[key];
    }
  }
  return a;
};

/*
 * Convert HEX codes to RGB values (#000000 -> rgb(0,0,0))
 */
var hexToRgb = function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? parseInt(result[1], 16) + ', ' + parseInt(result[2], 16) + ', ' + parseInt(result[3], 16) : null;
};

/*
 * Check if the user is using Internet Explorer 8 (for fallbacks)
 */
var isIE8 = function isIE8() {
  return window.attachEvent && !window.addEventListener;
};

/*
 * IE compatible logging for developers
 */
var logStr = function logStr(string) {
  if (window.console) {
    // IE...
    window.console.log('SweetAlert: ' + string);
  }
};

/*
 * Set hover, active and focus-states for buttons 
 * (source: http://www.sitepoint.com/javascript-generate-lighter-darker-color)
 */
var colorLuminance = function colorLuminance(hex, lum) {
  // Validate hex string
  hex = String(hex).replace(/[^0-9a-f]/gi, '');
  if (hex.length < 6) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  lum = lum || 0;

  // Convert to decimal and change luminosity
  var rgb = '#';
  var c;
  var i;

  for (i = 0; i < 3; i++) {
    c = parseInt(hex.substr(i * 2, 2), 16);
    c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16);
    rgb += ('00' + c).substr(c.length);
  }

  return rgb;
};

exports.extend = extend;
exports.hexToRgb = hexToRgb;
exports.isIE8 = isIE8;
exports.logStr = logStr;
exports.colorLuminance = colorLuminance;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvVHJpc3Rhbi9kZXYvU3dlZXRBbGVydC9kZXYvc3dlZXRhbGVydC5lczYuanMiLCIvVXNlcnMvVHJpc3Rhbi9kZXYvU3dlZXRBbGVydC9kZXYvbW9kdWxlcy9kZWZhdWx0LXBhcmFtcy5qcyIsIi9Vc2Vycy9UcmlzdGFuL2Rldi9Td2VldEFsZXJ0L2Rldi9tb2R1bGVzL2hhbmRsZS1jbGljay5qcyIsIi9Vc2Vycy9UcmlzdGFuL2Rldi9Td2VldEFsZXJ0L2Rldi9tb2R1bGVzL2hhbmRsZS1kb20uanMiLCIvVXNlcnMvVHJpc3Rhbi9kZXYvU3dlZXRBbGVydC9kZXYvbW9kdWxlcy9oYW5kbGUta2V5LmpzIiwiL1VzZXJzL1RyaXN0YW4vZGV2L1N3ZWV0QWxlcnQvZGV2L21vZHVsZXMvaGFuZGxlLXN3YWwtZG9tLmpzIiwiL1VzZXJzL1RyaXN0YW4vZGV2L1N3ZWV0QWxlcnQvZGV2L21vZHVsZXMvaW5qZWN0ZWQtaHRtbC5qcyIsIi9Vc2Vycy9UcmlzdGFuL2Rldi9Td2VldEFsZXJ0L2Rldi9tb2R1bGVzL3NldC1wYXJhbXMuanMiLCIvVXNlcnMvVHJpc3Rhbi9kZXYvU3dlZXRBbGVydC9kZXYvbW9kdWxlcy91dGlscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7OztzSkNnQk8sc0JBQXNCOzs7Ozs7MkRBV3RCLGlCQUFpQjs7Ozs7O3dIQWNqQiwyQkFBMkI7Ozs7dURBSXdCLHdCQUF3Qjs7NkJBQ3hELHNCQUFzQjs7Ozs7OzZCQUl0QiwwQkFBMEI7Ozs7NkJBQzFCLHNCQUFzQjs7Ozs7Ozs7QUFNaEQsSUFBSSxxQkFBcUIsQ0FBQztBQUMxQixJQUFJLGlCQUFpQixDQUFDOzs7Ozs7QUFPdEIsSUFBSSxVQUFVLEVBQUUsSUFBSSxDQUFDOztBQUVyQixVQUFVLEdBQUcsSUFBSSxHQUFHLFlBQVc7QUFD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QUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNyRSxPQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFBLENBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztHQUNwQzs7QUFFRCxTQUFPLEdBQUcsQ0FBQztDQUNaLENBQUM7O1FBSUEsTUFBTSxHQUFOLE1BQU07UUFDTixRQUFRLEdBQVIsUUFBUTtRQUNSLEtBQUssR0FBTCxLQUFLO1FBQ0wsTUFBTSxHQUFOLE1BQU07UUFDTixjQUFjLEdBQWQsY0FBYyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvLyBTd2VldEFsZXJ0XG4vLyAyMDE0LTIwMTUgKGMpIC0gVHJpc3RhbiBFZHdhcmRzXG4vLyBnaXRodWIuY29tL3Q0dDUvc3dlZXRhbGVydFxuXG4vKlxuICogalF1ZXJ5LWxpa2UgZnVuY3Rpb25zIGZvciBtYW5pcHVsYXRpbmcgdGhlIERPTVxuICovXG5pbXBvcnQge1xuICBoYXNDbGFzcywgYWRkQ2xhc3MsIHJlbW92ZUNsYXNzLFxuICBlc2NhcGVIdG1sLFxuICBfc2hvdywgc2hvdywgX2hpZGUsIGhpZGUsXG4gIGlzRGVzY2VuZGFudCxcbiAgZ2V0VG9wTWFyZ2luLFxuICBmYWRlSW4sIGZhZGVPdXQsXG4gIGZpcmVDbGljayxcbiAgc3RvcEV2ZW50UHJvcGFnYXRpb25cbn0gZnJvbSAnLi9tb2R1bGVzL2hhbmRsZS1kb20nO1xuXG4vKlxuICogSGFuZHkgdXRpbGl0aWVzXG4gKi9cbmltcG9ydCB7XG4gIGV4dGVuZCxcbiAgaGV4VG9SZ2IsXG4gIGlzSUU4LFxuICBsb2dTdHIsXG4gIGNvbG9yTHVtaW5hbmNlXG59IGZyb20gJy4vbW9kdWxlcy91dGlscyc7XG5cbi8qXG4gKiAgSGFuZGxlIHN3ZWV0QWxlcnQncyBET00gZWxlbWVudHNcbiAqL1xuaW1wb3J0IHtcbiAgc3dlZXRBbGVydEluaXRpYWxpemUsXG4gIGdldE1vZGFsLFxuICBnZXRPdmVybGF5LFxuICBnZXRJbnB1dCxcbiAgc2V0Rm9jdXNTdHlsZSxcbiAgb3Blbk1vZGFsLFxuICByZXNldElucHV0LFxuICBmaXhWZXJ0aWNhbFBvc2l0aW9uXG59IGZyb20gJy4vbW9kdWxlcy9oYW5kbGUtc3dhbC1kb20nO1xuXG5cbi8vIEhhbmRsZSBidXR0b24gZXZlbnRzIGFuZCBrZXlib2FyZCBldmVudHNcbmltcG9ydCB7IGhhbmRsZUJ1dHRvbiwgaGFuZGxlQ29uZmlybSwgaGFuZGxlQ2FuY2VsIH0gZnJvbSAnLi9tb2R1bGVzL2hhbmRsZS1jbGljayc7XG5pbXBvcnQgaGFuZGxlS2V5RG93biBmcm9tICcuL21vZHVsZXMvaGFuZGxlLWtleSc7XG5cblxuLy8gRGVmYXVsdCB2YWx1ZXNcbmltcG9ydCBkZWZhdWx0UGFyYW1zIGZyb20gJy4vbW9kdWxlcy9kZWZhdWx0LXBhcmFtcyc7XG5pbXBvcnQgc2V0UGFyYW1ldGVycyBmcm9tICcuL21vZHVsZXMvc2V0LXBhcmFtcyc7XG5cbi8qXG4gKiBSZW1lbWJlciBzdGF0ZSBpbiBjYXNlcyB3aGVyZSBvcGVuaW5nIGFuZCBoYW5kbGluZyBhIG1vZGFsIHdpbGwgZmlkZGxlIHdpdGggaXQuXG4gKiAoV2UgYWxzbyB1c2Ugd2luZG93LnByZXZpb3VzQWN0aXZlRWxlbWVudCBhcyBhIGdsb2JhbCB2YXJpYWJsZSlcbiAqL1xudmFyIHByZXZpb3VzV2luZG93S2V5RG93bjtcbnZhciBsYXN0Rm9jdXNlZEJ1dHRvbjtcblxuXG4vKlxuICogR2xvYmFsIHN3ZWV0QWxlcnQgZnVuY3Rpb25cbiAqICh0aGlzIGlzIHdoYXQgdGhlIHVzZXIgY2FsbHMpXG4gKi9cbnZhciBzd2VldEFsZXJ0LCBzd2FsO1xuXG5zd2VldEFsZXJ0ID0gc3dhbCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgY3VzdG9taXphdGlvbnMgPSBhcmd1bWVudHNbMF07XG5cbiAgYWRkQ2xhc3MoZG9jdW1lbnQuYm9keSwgJ3N0b3Atc2Nyb2xsaW5nJyk7XG4gIHJlc2V0SW5wdXQoKTtcblxuICAvKlxuICAgKiBVc2UgYXJndW1lbnQgaWYgZGVmaW5lZCBvciBkZWZhdWx0IHZhbHVlIGZyb20gcGFyYW1zIG9iamVjdCBvdGhlcndpc2UuXG4gICAqIFN1cHBvcnRzIHRoZSBjYXNlIHdoZXJlIGEgZGVmYXVsdCB2YWx1ZSBpcyBib29sZWFuIHRydWUgYW5kIHNob3VsZCBiZVxuICAgKiBvdmVycmlkZGVuIGJ5IGEgY29ycmVzcG9uZGluZyBleHBsaWNpdCBhcmd1bWVudCB3aGljaCBpcyBib29sZWFuIGZhbHNlLlxuICAgKi9cbiAgZnVuY3Rpb24gYXJndW1lbnRPckRlZmF1bHQoa2V5KSB7XG4gICAgdmFyIGFyZ3MgPSBjdXN0b21pemF0aW9ucztcbiAgICByZXR1cm4gKGFyZ3Nba2V5XSA9PT0gdW5kZWZpbmVkKSA/ICBkZWZhdWx0UGFyYW1zW2tleV0gOiBhcmdzW2tleV07XG4gIH1cblxuICBpZiAoY3VzdG9taXphdGlvbnMgPT09IHVuZGVmaW5lZCkge1xuICAgIGxvZ1N0cignU3dlZXRBbGVydCBleHBlY3RzIGF0IGxlYXN0IDEgYXR0cmlidXRlIScpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwYXJhbXMgPSBleHRlbmQoe30sIGRlZmF1bHRQYXJhbXMpO1xuXG4gIHN3aXRjaCAodHlwZW9mIGN1c3RvbWl6YXRpb25zKSB7XG5cbiAgICAvLyBFeDogc3dhbChcIkhlbGxvXCIsIFwiSnVzdCB0ZXN0aW5nXCIsIFwiaW5mb1wiKTtcbiAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgcGFyYW1zLnRpdGxlID0gY3VzdG9taXphdGlvbnM7XG4gICAgICBwYXJhbXMudGV4dCAgPSBhcmd1bWVudHNbMV0gfHwgJyc7XG4gICAgICBwYXJhbXMudHlwZSAgPSBhcmd1bWVudHNbMl0gfHwgJyc7XG4gICAgICBicmVhaztcblxuICAgIC8vIEV4OiBzd2FsKHsgdGl0bGU6XCJIZWxsb1wiLCB0ZXh0OiBcIkp1c3QgdGVzdGluZ1wiLCB0eXBlOiBcImluZm9cIiB9KTtcbiAgICBjYXNlICdvYmplY3QnOlxuICAgICAgaWYgKGN1c3RvbWl6YXRpb25zLnRpdGxlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbG9nU3RyKCdNaXNzaW5nIFwidGl0bGVcIiBhcmd1bWVudCEnKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBwYXJhbXMudGl0bGUgPSBjdXN0b21pemF0aW9ucy50aXRsZTtcblxuICAgICAgZm9yIChsZXQgY3VzdG9tTmFtZSBpbiBkZWZhdWx0UGFyYW1zKSB7XG4gICAgICAgIHBhcmFtc1tjdXN0b21OYW1lXSA9IGFyZ3VtZW50T3JEZWZhdWx0KGN1c3RvbU5hbWUpO1xuICAgICAgfVxuXG4gICAgICAvLyBTaG93IFwiQ29uZmlybVwiIGluc3RlYWQgb2YgXCJPS1wiIGlmIGNhbmNlbCBidXR0b24gaXMgdmlzaWJsZVxuICAgICAgcGFyYW1zLmNvbmZpcm1CdXR0b25UZXh0ID0gcGFyYW1zLnNob3dDYW5jZWxCdXR0b24gPyAnQ29uZmlybScgOiBkZWZhdWx0UGFyYW1zLmNvbmZpcm1CdXR0b25UZXh0O1xuICAgICAgcGFyYW1zLmNvbmZpcm1CdXR0b25UZXh0ID0gYXJndW1lbnRPckRlZmF1bHQoJ2NvbmZpcm1CdXR0b25UZXh0Jyk7XG5cbiAgICAgIC8vIENhbGxiYWNrIGZ1bmN0aW9uIHdoZW4gY2xpY2tpbmcgb24gXCJPS1wiL1wiQ2FuY2VsXCJcbiAgICAgIHBhcmFtcy5kb25lRnVuY3Rpb24gPSBhcmd1bWVudHNbMV0gfHwgbnVsbDtcblxuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgbG9nU3RyKCdVbmV4cGVjdGVkIHR5cGUgb2YgYXJndW1lbnQhIEV4cGVjdGVkIFwic3RyaW5nXCIgb3IgXCJvYmplY3RcIiwgZ290ICcgKyB0eXBlb2YgY3VzdG9taXphdGlvbnMpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gIH1cblxuICBzZXRQYXJhbWV0ZXJzKHBhcmFtcyk7XG4gIGZpeFZlcnRpY2FsUG9zaXRpb24oKTtcbiAgb3Blbk1vZGFsKGFyZ3VtZW50c1sxXSk7XG5cbiAgLy8gTW9kYWwgaW50ZXJhY3Rpb25zXG4gIHZhciBtb2RhbCA9IGdldE1vZGFsKCk7XG5cblxuICAvKlxuICAgKiBNYWtlIHN1cmUgYWxsIG1vZGFsIGJ1dHRvbnMgcmVzcG9uZCB0byBhbGwgZXZlbnRzXG4gICAqL1xuICB2YXIgJGJ1dHRvbnMgPSBtb2RhbC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKTtcbiAgdmFyIGJ1dHRvbkV2ZW50cyA9IFsnb25jbGljaycsICdvbm1vdXNlb3ZlcicsICdvbm1vdXNlb3V0JywgJ29ubW91c2Vkb3duJywgJ29ubW91c2V1cCcsICdvbmZvY3VzJ107XG4gIHZhciBvbkJ1dHRvbkV2ZW50ID0gKGUpID0+IGhhbmRsZUJ1dHRvbihlLCBwYXJhbXMsIG1vZGFsKTtcblxuICBmb3IgKGxldCBidG5JbmRleCA9IDA7IGJ0bkluZGV4IDwgJGJ1dHRvbnMubGVuZ3RoOyBidG5JbmRleCsrKSB7XG4gICAgZm9yIChsZXQgZXZ0SW5kZXggPSAwOyBldnRJbmRleCA8IGJ1dHRvbkV2ZW50cy5sZW5ndGg7IGV2dEluZGV4KyspIHtcbiAgICAgIGxldCBidG5FdnQgPSBidXR0b25FdmVudHNbZXZ0SW5kZXhdO1xuICAgICAgJGJ1dHRvbnNbYnRuSW5kZXhdW2J0bkV2dF0gPSBvbkJ1dHRvbkV2ZW50O1xuICAgIH1cbiAgfVxuXG4gIC8vIENsaWNraW5nIG91dHNpZGUgdGhlIG1vZGFsIGRpc21pc3NlcyBpdCAoaWYgYWxsb3dlZCBieSB1c2VyKVxuICBnZXRPdmVybGF5KCkub25jbGljayA9IG9uQnV0dG9uRXZlbnQ7XG5cbiAgcHJldmlvdXNXaW5kb3dLZXlEb3duID0gd2luZG93Lm9ua2V5ZG93bjtcblxuICB2YXIgb25LZXlFdmVudCA9IChlKSA9PiBoYW5kbGVLZXlEb3duKGUsIHBhcmFtcywgbW9kYWwpO1xuICB3aW5kb3cub25rZXlkb3duID0gb25LZXlFdmVudDtcblxuICB3aW5kb3cub25mb2N1cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBXaGVuIHRoZSB1c2VyIGhhcyBmb2N1c2VkIGF3YXkgYW5kIGZvY3VzZWQgYmFjayBmcm9tIHRoZSB3aG9sZSB3aW5kb3cuXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBQdXQgaW4gYSB0aW1lb3V0IHRvIGp1bXAgb3V0IG9mIHRoZSBldmVudCBzZXF1ZW5jZS5cbiAgICAgIC8vIENhbGxpbmcgZm9jdXMoKSBpbiB0aGUgZXZlbnQgc2VxdWVuY2UgY29uZnVzZXMgdGhpbmdzLlxuICAgICAgaWYgKGxhc3RGb2N1c2VkQnV0dG9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbGFzdEZvY3VzZWRCdXR0b24uZm9jdXMoKTtcbiAgICAgICAgbGFzdEZvY3VzZWRCdXR0b24gPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfSwgMCk7XG4gIH07XG4gIFxuICAvLyBTaG93IGFsZXJ0IHdpdGggZW5hYmxlZCBidXR0b25zIGFsd2F5c1xuICBzd2FsLmVuYWJsZUJ1dHRvbnMoKTtcbn07XG5cblxuXG4vKlxuICogU2V0IGRlZmF1bHQgcGFyYW1zIGZvciBlYWNoIHBvcHVwXG4gKiBAcGFyYW0ge09iamVjdH0gdXNlclBhcmFtc1xuICovXG5zd2VldEFsZXJ0LnNldERlZmF1bHRzID0gc3dhbC5zZXREZWZhdWx0cyA9IGZ1bmN0aW9uKHVzZXJQYXJhbXMpIHtcbiAgaWYgKCF1c2VyUGFyYW1zKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCd1c2VyUGFyYW1zIGlzIHJlcXVpcmVkJyk7XG4gIH1cbiAgaWYgKHR5cGVvZiB1c2VyUGFyYW1zICE9PSAnb2JqZWN0Jykge1xuICAgIHRocm93IG5ldyBFcnJvcigndXNlclBhcmFtcyBoYXMgdG8gYmUgYSBvYmplY3QnKTtcbiAgfVxuXG4gIGV4dGVuZChkZWZhdWx0UGFyYW1zLCB1c2VyUGFyYW1zKTtcbn07XG5cblxuLypcbiAqIEFuaW1hdGlvbiB3aGVuIGNsb3NpbmcgbW9kYWxcbiAqL1xuc3dlZXRBbGVydC5jbG9zZSA9IHN3YWwuY2xvc2UgPSBmdW5jdGlvbigpIHtcbiAgdmFyIG1vZGFsID0gZ2V0TW9kYWwoKTtcblxuICBmYWRlT3V0KGdldE92ZXJsYXkoKSwgNSk7XG4gIGZhZGVPdXQobW9kYWwsIDUpO1xuICByZW1vdmVDbGFzcyhtb2RhbCwgJ3Nob3dTd2VldEFsZXJ0Jyk7XG4gIGFkZENsYXNzKG1vZGFsLCAnaGlkZVN3ZWV0QWxlcnQnKTtcbiAgcmVtb3ZlQ2xhc3MobW9kYWwsICd2aXNpYmxlJyk7XG5cbiAgLypcbiAgICogUmVzZXQgaWNvbiBhbmltYXRpb25zXG4gICAqL1xuICB2YXIgJHN1Y2Nlc3NJY29uID0gbW9kYWwucXVlcnlTZWxlY3RvcignLnNhLWljb24uc2Etc3VjY2VzcycpO1xuICByZW1vdmVDbGFzcygkc3VjY2Vzc0ljb24sICdhbmltYXRlJyk7XG4gIHJlbW92ZUNsYXNzKCRzdWNjZXNzSWNvbi5xdWVyeVNlbGVjdG9yKCcuc2EtdGlwJyksICdhbmltYXRlU3VjY2Vzc1RpcCcpO1xuICByZW1vdmVDbGFzcygkc3VjY2Vzc0ljb24ucXVlcnlTZWxlY3RvcignLnNhLWxvbmcnKSwgJ2FuaW1hdGVTdWNjZXNzTG9uZycpO1xuXG4gIHZhciAkZXJyb3JJY29uID0gbW9kYWwucXVlcnlTZWxlY3RvcignLnNhLWljb24uc2EtZXJyb3InKTtcbiAgcmVtb3ZlQ2xhc3MoJGVycm9ySWNvbiwgJ2FuaW1hdGVFcnJvckljb24nKTtcbiAgcmVtb3ZlQ2xhc3MoJGVycm9ySWNvbi5xdWVyeVNlbGVjdG9yKCcuc2EteC1tYXJrJyksICdhbmltYXRlWE1hcmsnKTtcblxuICB2YXIgJHdhcm5pbmdJY29uID0gbW9kYWwucXVlcnlTZWxlY3RvcignLnNhLWljb24uc2Etd2FybmluZycpO1xuICByZW1vdmVDbGFzcygkd2FybmluZ0ljb24sICdwdWxzZVdhcm5pbmcnKTtcbiAgcmVtb3ZlQ2xhc3MoJHdhcm5pbmdJY29uLnF1ZXJ5U2VsZWN0b3IoJy5zYS1ib2R5JyksICdwdWxzZVdhcm5pbmdJbnMnKTtcbiAgcmVtb3ZlQ2xhc3MoJHdhcm5pbmdJY29uLnF1ZXJ5U2VsZWN0b3IoJy5zYS1kb3QnKSwgJ3B1bHNlV2FybmluZ0lucycpO1xuXG4gIC8vIFJlc2V0IGN1c3RvbSBjbGFzcyAoZGVsYXkgc28gdGhhdCBVSSBjaGFuZ2VzIGFyZW4ndCB2aXNpYmxlKVxuICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgIHZhciBjdXN0b21DbGFzcyA9IG1vZGFsLmdldEF0dHJpYnV0ZSgnZGF0YS1jdXN0b20tY2xhc3MnKTtcbiAgICByZW1vdmVDbGFzcyhtb2RhbCwgY3VzdG9tQ2xhc3MpO1xuICB9LCAzMDApO1xuXG4gIC8vIE1ha2UgcGFnZSBzY3JvbGxhYmxlIGFnYWluXG4gIHJlbW92ZUNsYXNzKGRvY3VtZW50LmJvZHksICdzdG9wLXNjcm9sbGluZycpO1xuXG4gIC8vIFJlc2V0IHRoZSBwYWdlIHRvIGl0cyBwcmV2aW91cyBzdGF0ZVxuICB3aW5kb3cub25rZXlkb3duID0gcHJldmlvdXNXaW5kb3dLZXlEb3duO1xuICBpZiAod2luZG93LnByZXZpb3VzQWN0aXZlRWxlbWVudCkge1xuICAgIHdpbmRvdy5wcmV2aW91c0FjdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgfVxuICBsYXN0Rm9jdXNlZEJ1dHRvbiA9IHVuZGVmaW5lZDtcbiAgY2xlYXJUaW1lb3V0KG1vZGFsLnRpbWVvdXQpO1xuXG4gIHJldHVybiB0cnVlO1xufTtcblxuXG4vKlxuICogVmFsaWRhdGlvbiBvZiB0aGUgaW5wdXQgZmllbGQgaXMgZG9uZSBieSB1c2VyXG4gKiBJZiBzb21ldGhpbmcgaXMgd3JvbmcgPT4gY2FsbCBzaG93SW5wdXRFcnJvciB3aXRoIGVycm9yTWVzc2FnZVxuICovXG5zd2VldEFsZXJ0LnNob3dJbnB1dEVycm9yID0gc3dhbC5zaG93SW5wdXRFcnJvciA9IGZ1bmN0aW9uKGVycm9yTWVzc2FnZSkge1xuICB2YXIgbW9kYWwgPSBnZXRNb2RhbCgpO1xuXG4gIHZhciAkZXJyb3JJY29uID0gbW9kYWwucXVlcnlTZWxlY3RvcignLnNhLWlucHV0LWVycm9yJyk7XG4gIGFkZENsYXNzKCRlcnJvckljb24sICdzaG93Jyk7XG5cbiAgdmFyICRlcnJvckNvbnRhaW5lciA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5zYS1lcnJvci1jb250YWluZXInKTtcbiAgYWRkQ2xhc3MoJGVycm9yQ29udGFpbmVyLCAnc2hvdycpO1xuXG4gICRlcnJvckNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdwJykuaW5uZXJIVE1MID0gZXJyb3JNZXNzYWdlO1xuXG4gIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgc3dlZXRBbGVydC5lbmFibGVCdXR0b25zKCk7XG4gIH0sIDEpO1xuXG4gIG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykuZm9jdXMoKTtcbn07XG5cblxuLypcbiAqIFJlc2V0IGlucHV0IGVycm9yIERPTSBlbGVtZW50c1xuICovXG5zd2VldEFsZXJ0LnJlc2V0SW5wdXRFcnJvciA9IHN3YWwucmVzZXRJbnB1dEVycm9yID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgLy8gSWYgcHJlc3MgZW50ZXIgPT4gaWdub3JlXG4gIGlmIChldmVudCAmJiBldmVudC5rZXlDb2RlID09PSAxMykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciAkbW9kYWwgPSBnZXRNb2RhbCgpO1xuXG4gIHZhciAkZXJyb3JJY29uID0gJG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5zYS1pbnB1dC1lcnJvcicpO1xuICByZW1vdmVDbGFzcygkZXJyb3JJY29uLCAnc2hvdycpO1xuXG4gIHZhciAkZXJyb3JDb250YWluZXIgPSAkbW9kYWwucXVlcnlTZWxlY3RvcignLnNhLWVycm9yLWNvbnRhaW5lcicpO1xuICByZW1vdmVDbGFzcygkZXJyb3JDb250YWluZXIsICdzaG93Jyk7XG59O1xuXG4vKlxuICogRGlzYWJsZSBjb25maXJtIGFuZCBjYW5jZWwgYnV0dG9uc1xuICovXG5zd2VldEFsZXJ0LmRpc2FibGVCdXR0b25zID0gc3dhbC5kaXNhYmxlQnV0dG9ucyA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gIHZhciBtb2RhbCA9IGdldE1vZGFsKCk7XG4gIHZhciAkY29uZmlybUJ1dHRvbiA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbi5jb25maXJtJyk7XG4gIHZhciAkY2FuY2VsQnV0dG9uID0gbW9kYWwucXVlcnlTZWxlY3RvcignYnV0dG9uLmNhbmNlbCcpO1xuICAkY29uZmlybUJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gICRjYW5jZWxCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xufTtcblxuLypcbiAqIEVuYWJsZSBjb25maXJtIGFuZCBjYW5jZWwgYnV0dG9uc1xuICovXG5zd2VldEFsZXJ0LmVuYWJsZUJ1dHRvbnMgPSBzd2FsLmVuYWJsZUJ1dHRvbnMgPSBmdW5jdGlvbihldmVudCkge1xuICB2YXIgbW9kYWwgPSBnZXRNb2RhbCgpO1xuICB2YXIgJGNvbmZpcm1CdXR0b24gPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCdidXR0b24uY29uZmlybScpO1xuICB2YXIgJGNhbmNlbEJ1dHRvbiA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbi5jYW5jZWwnKTtcbiAgJGNvbmZpcm1CdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgJGNhbmNlbEJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xufTtcblxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gIC8vIFRoZSAnaGFuZGxlLWNsaWNrJyBtb2R1bGUgcmVxdWlyZXNcbiAgLy8gdGhhdCAnc3dlZXRBbGVydCcgd2FzIHNldCBhcyBnbG9iYWwuXG4gIHdpbmRvdy5zd2VldEFsZXJ0ID0gd2luZG93LnN3YWwgPSBzd2VldEFsZXJ0O1xufSBlbHNlIHtcbiAgbG9nU3RyKCdTd2VldEFsZXJ0IGlzIGEgZnJvbnRlbmQgbW9kdWxlIScpO1xufVxuIiwidmFyIGRlZmF1bHRQYXJhbXMgPSB7XG4gIHRpdGxlOiAnJyxcbiAgdGV4dDogJycsXG4gIHR5cGU6IG51bGwsXG4gIGFsbG93T3V0c2lkZUNsaWNrOiBmYWxzZSxcbiAgc2hvd0NvbmZpcm1CdXR0b246IHRydWUsXG4gIHNob3dDYW5jZWxCdXR0b246IGZhbHNlLFxuICBjbG9zZU9uQ29uZmlybTogdHJ1ZSxcbiAgY2xvc2VPbkNhbmNlbDogdHJ1ZSxcbiAgY29uZmlybUJ1dHRvblRleHQ6ICdPSycsXG4gIGNvbmZpcm1CdXR0b25Db2xvcjogJyM4Q0Q0RjUnLFxuICBjYW5jZWxCdXR0b25UZXh0OiAnQ2FuY2VsJyxcbiAgaW1hZ2VVcmw6IG51bGwsXG4gIGltYWdlU2l6ZTogbnVsbCxcbiAgdGltZXI6IG51bGwsXG4gIGN1c3RvbUNsYXNzOiAnJyxcbiAgaHRtbDogZmFsc2UsXG4gIGFuaW1hdGlvbjogdHJ1ZSxcbiAgYWxsb3dFc2NhcGVLZXk6IHRydWUsXG4gIGlucHV0VHlwZTogJ3RleHQnLFxuICBpbnB1dFBsYWNlaG9sZGVyOiAnJyxcbiAgaW5wdXRWYWx1ZTogJycsXG4gIHNob3dMb2FkZXJPbkNvbmZpcm06IGZhbHNlXG59O1xuXG5leHBvcnQgZGVmYXVsdCBkZWZhdWx0UGFyYW1zO1xuIiwiaW1wb3J0IHsgY29sb3JMdW1pbmFuY2UgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IGdldE1vZGFsIH0gZnJvbSAnLi9oYW5kbGUtc3dhbC1kb20nO1xuaW1wb3J0IHsgaGFzQ2xhc3MsIGlzRGVzY2VuZGFudCB9IGZyb20gJy4vaGFuZGxlLWRvbSc7XG5cblxuLypcbiAqIFVzZXIgY2xpY2tlZCBvbiBcIkNvbmZpcm1cIi9cIk9LXCIgb3IgXCJDYW5jZWxcIlxuICovXG52YXIgaGFuZGxlQnV0dG9uID0gZnVuY3Rpb24oZXZlbnQsIHBhcmFtcywgbW9kYWwpIHtcbiAgdmFyIGUgPSBldmVudCB8fCB3aW5kb3cuZXZlbnQ7XG4gIHZhciB0YXJnZXQgPSBlLnRhcmdldCB8fCBlLnNyY0VsZW1lbnQ7XG5cbiAgdmFyIHRhcmdldGVkQ29uZmlybSA9IHRhcmdldC5jbGFzc05hbWUuaW5kZXhPZignY29uZmlybScpICE9PSAtMTtcbiAgdmFyIHRhcmdldGVkT3ZlcmxheSA9IHRhcmdldC5jbGFzc05hbWUuaW5kZXhPZignc3dlZXQtb3ZlcmxheScpICE9PSAtMTtcbiAgdmFyIG1vZGFsSXNWaXNpYmxlICA9IGhhc0NsYXNzKG1vZGFsLCAndmlzaWJsZScpO1xuICB2YXIgZG9uZUZ1bmN0aW9uRXhpc3RzID0gKHBhcmFtcy5kb25lRnVuY3Rpb24gJiYgbW9kYWwuZ2V0QXR0cmlidXRlKCdkYXRhLWhhcy1kb25lLWZ1bmN0aW9uJykgPT09ICd0cnVlJyk7XG5cbiAgLy8gU2luY2UgdGhlIHVzZXIgY2FuIGNoYW5nZSB0aGUgYmFja2dyb3VuZC1jb2xvciBvZiB0aGUgY29uZmlybSBidXR0b24gcHJvZ3JhbW1hdGljYWxseSxcbiAgLy8gd2UgbXVzdCBjYWxjdWxhdGUgd2hhdCB0aGUgY29sb3Igc2hvdWxkIGJlIG9uIGhvdmVyL2FjdGl2ZVxuICB2YXIgbm9ybWFsQ29sb3IsIGhvdmVyQ29sb3IsIGFjdGl2ZUNvbG9yO1xuICBpZiAodGFyZ2V0ZWRDb25maXJtICYmIHBhcmFtcy5jb25maXJtQnV0dG9uQ29sb3IpIHtcbiAgICBub3JtYWxDb2xvciAgPSBwYXJhbXMuY29uZmlybUJ1dHRvbkNvbG9yO1xuICAgIGhvdmVyQ29sb3IgICA9IGNvbG9yTHVtaW5hbmNlKG5vcm1hbENvbG9yLCAtMC4wNCk7XG4gICAgYWN0aXZlQ29sb3IgID0gY29sb3JMdW1pbmFuY2Uobm9ybWFsQ29sb3IsIC0wLjE0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3VsZFNldENvbmZpcm1CdXR0b25Db2xvcihjb2xvcikge1xuICAgIGlmICh0YXJnZXRlZENvbmZpcm0gJiYgcGFyYW1zLmNvbmZpcm1CdXR0b25Db2xvcikge1xuICAgICAgdGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xuICAgIH1cbiAgfVxuXG4gIHN3aXRjaCAoZS50eXBlKSB7XG4gICAgY2FzZSAnbW91c2VvdmVyJzpcbiAgICAgIHNob3VsZFNldENvbmZpcm1CdXR0b25Db2xvcihob3ZlckNvbG9yKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnbW91c2VvdXQnOlxuICAgICAgc2hvdWxkU2V0Q29uZmlybUJ1dHRvbkNvbG9yKG5vcm1hbENvbG9yKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnbW91c2Vkb3duJzpcbiAgICAgIHNob3VsZFNldENvbmZpcm1CdXR0b25Db2xvcihhY3RpdmVDb2xvcik7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ21vdXNldXAnOlxuICAgICAgc2hvdWxkU2V0Q29uZmlybUJ1dHRvbkNvbG9yKGhvdmVyQ29sb3IpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdmb2N1cyc6XG4gICAgICBsZXQgJGNvbmZpcm1CdXR0b24gPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCdidXR0b24uY29uZmlybScpO1xuICAgICAgbGV0ICRjYW5jZWxCdXR0b24gID0gbW9kYWwucXVlcnlTZWxlY3RvcignYnV0dG9uLmNhbmNlbCcpO1xuXG4gICAgICBpZiAodGFyZ2V0ZWRDb25maXJtKSB7XG4gICAgICAgICRjYW5jZWxCdXR0b24uc3R5bGUuYm94U2hhZG93ID0gJ25vbmUnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJGNvbmZpcm1CdXR0b24uc3R5bGUuYm94U2hhZG93ID0gJ25vbmUnO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdjbGljayc6XG4gICAgICBsZXQgY2xpY2tlZE9uTW9kYWwgPSAobW9kYWwgPT09IHRhcmdldCk7XG4gICAgICBsZXQgY2xpY2tlZE9uTW9kYWxDaGlsZCA9IGlzRGVzY2VuZGFudChtb2RhbCwgdGFyZ2V0KTtcblxuICAgICAgLy8gSWdub3JlIGNsaWNrIG91dHNpZGUgaWYgYWxsb3dPdXRzaWRlQ2xpY2sgaXMgZmFsc2VcbiAgICAgIGlmICghY2xpY2tlZE9uTW9kYWwgJiYgIWNsaWNrZWRPbk1vZGFsQ2hpbGQgJiYgbW9kYWxJc1Zpc2libGUgJiYgIXBhcmFtcy5hbGxvd091dHNpZGVDbGljaykge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgaWYgKHRhcmdldGVkQ29uZmlybSAmJiBkb25lRnVuY3Rpb25FeGlzdHMgJiYgbW9kYWxJc1Zpc2libGUpIHtcbiAgICAgICAgaGFuZGxlQ29uZmlybShtb2RhbCwgcGFyYW1zKTtcbiAgICAgIH0gZWxzZSBpZiAoZG9uZUZ1bmN0aW9uRXhpc3RzICYmIG1vZGFsSXNWaXNpYmxlIHx8IHRhcmdldGVkT3ZlcmxheSkge1xuICAgICAgICBoYW5kbGVDYW5jZWwobW9kYWwsIHBhcmFtcyk7XG4gICAgICB9IGVsc2UgaWYgKGlzRGVzY2VuZGFudChtb2RhbCwgdGFyZ2V0KSAmJiB0YXJnZXQudGFnTmFtZSA9PT0gJ0JVVFRPTicpIHtcbiAgICAgICAgc3dlZXRBbGVydC5jbG9zZSgpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gIH1cbn07XG5cbi8qXG4gKiAgVXNlciBjbGlja2VkIG9uIFwiQ29uZmlybVwiL1wiT0tcIlxuICovXG52YXIgaGFuZGxlQ29uZmlybSA9IGZ1bmN0aW9uKG1vZGFsLCBwYXJhbXMpIHtcbiAgdmFyIGNhbGxiYWNrVmFsdWUgPSB0cnVlO1xuXG4gIGlmIChoYXNDbGFzcyhtb2RhbCwgJ3Nob3ctaW5wdXQnKSkge1xuICAgIGNhbGxiYWNrVmFsdWUgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLnZhbHVlO1xuXG4gICAgaWYgKCFjYWxsYmFja1ZhbHVlKSB7XG4gICAgICBjYWxsYmFja1ZhbHVlID0gJyc7XG4gICAgfVxuICB9XG5cbiAgcGFyYW1zLmRvbmVGdW5jdGlvbihjYWxsYmFja1ZhbHVlKTtcblxuICBpZiAocGFyYW1zLmNsb3NlT25Db25maXJtKSB7XG4gICAgc3dlZXRBbGVydC5jbG9zZSgpO1xuICB9XG4gIC8vIERpc2FibGUgY2FuY2VsIGFuZCBjb25maXJtIGJ1dHRvbiBpZiB0aGUgcGFyYW1ldGVyIGlzIHRydWVcbiAgaWYgKHBhcmFtcy5zaG93TG9hZGVyT25Db25maXJtKSB7XG4gICAgc3dlZXRBbGVydC5kaXNhYmxlQnV0dG9ucygpO1xuICB9XG59O1xuXG4vKlxuICogIFVzZXIgY2xpY2tlZCBvbiBcIkNhbmNlbFwiXG4gKi9cbnZhciBoYW5kbGVDYW5jZWwgPSBmdW5jdGlvbihtb2RhbCwgcGFyYW1zKSB7XG4gIC8vIENoZWNrIGlmIGNhbGxiYWNrIGZ1bmN0aW9uIGV4cGVjdHMgYSBwYXJhbWV0ZXIgKHRvIHRyYWNrIGNhbmNlbCBhY3Rpb25zKVxuICB2YXIgZnVuY3Rpb25Bc1N0ciA9IFN0cmluZyhwYXJhbXMuZG9uZUZ1bmN0aW9uKS5yZXBsYWNlKC9cXHMvZywgJycpO1xuICB2YXIgZnVuY3Rpb25IYW5kbGVzQ2FuY2VsID0gZnVuY3Rpb25Bc1N0ci5zdWJzdHJpbmcoMCwgOSkgPT09ICdmdW5jdGlvbignICYmIGZ1bmN0aW9uQXNTdHIuc3Vic3RyaW5nKDksIDEwKSAhPT0gJyknO1xuXG4gIGlmIChmdW5jdGlvbkhhbmRsZXNDYW5jZWwpIHtcbiAgICBwYXJhbXMuZG9uZUZ1bmN0aW9uKGZhbHNlKTtcbiAgfVxuXG4gIGlmIChwYXJhbXMuY2xvc2VPbkNhbmNlbCkge1xuICAgIHN3ZWV0QWxlcnQuY2xvc2UoKTtcbiAgfVxufTtcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGhhbmRsZUJ1dHRvbixcbiAgaGFuZGxlQ29uZmlybSxcbiAgaGFuZGxlQ2FuY2VsXG59O1xuIiwidmFyIGhhc0NsYXNzID0gZnVuY3Rpb24oZWxlbSwgY2xhc3NOYW1lKSB7XG4gIHJldHVybiBuZXcgUmVnRXhwKCcgJyArIGNsYXNzTmFtZSArICcgJykudGVzdCgnICcgKyBlbGVtLmNsYXNzTmFtZSArICcgJyk7XG59O1xuXG52YXIgYWRkQ2xhc3MgPSBmdW5jdGlvbihlbGVtLCBjbGFzc05hbWUpIHtcbiAgaWYgKCFoYXNDbGFzcyhlbGVtLCBjbGFzc05hbWUpKSB7XG4gICAgZWxlbS5jbGFzc05hbWUgKz0gJyAnICsgY2xhc3NOYW1lO1xuICB9XG59O1xuXG52YXIgcmVtb3ZlQ2xhc3MgPSBmdW5jdGlvbihlbGVtLCBjbGFzc05hbWUpIHtcbiAgdmFyIG5ld0NsYXNzID0gJyAnICsgZWxlbS5jbGFzc05hbWUucmVwbGFjZSgvW1xcdFxcclxcbl0vZywgJyAnKSArICcgJztcbiAgaWYgKGhhc0NsYXNzKGVsZW0sIGNsYXNzTmFtZSkpIHtcbiAgICB3aGlsZSAobmV3Q2xhc3MuaW5kZXhPZignICcgKyBjbGFzc05hbWUgKyAnICcpID49IDApIHtcbiAgICAgIG5ld0NsYXNzID0gbmV3Q2xhc3MucmVwbGFjZSgnICcgKyBjbGFzc05hbWUgKyAnICcsICcgJyk7XG4gICAgfVxuICAgIGVsZW0uY2xhc3NOYW1lID0gbmV3Q2xhc3MucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpO1xuICB9XG59O1xuXG52YXIgZXNjYXBlSHRtbCA9IGZ1bmN0aW9uKHN0cikge1xuICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShzdHIpKTtcbiAgcmV0dXJuIGRpdi5pbm5lckhUTUw7XG59O1xuXG52YXIgX3Nob3cgPSBmdW5jdGlvbihlbGVtKSB7XG4gIGVsZW0uc3R5bGUub3BhY2l0eSA9ICcnO1xuICBlbGVtLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xufTtcblxudmFyIHNob3cgPSBmdW5jdGlvbihlbGVtcykge1xuICBpZiAoZWxlbXMgJiYgIWVsZW1zLmxlbmd0aCkge1xuICAgIHJldHVybiBfc2hvdyhlbGVtcyk7XG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbGVtcy5sZW5ndGg7ICsraSkge1xuICAgIF9zaG93KGVsZW1zW2ldKTtcbiAgfVxufTtcblxudmFyIF9oaWRlID0gZnVuY3Rpb24oZWxlbSkge1xuICBlbGVtLnN0eWxlLm9wYWNpdHkgPSAnJztcbiAgZWxlbS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufTtcblxudmFyIGhpZGUgPSBmdW5jdGlvbihlbGVtcykge1xuICBpZiAoZWxlbXMgJiYgIWVsZW1zLmxlbmd0aCkge1xuICAgIHJldHVybiBfaGlkZShlbGVtcyk7XG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbGVtcy5sZW5ndGg7ICsraSkge1xuICAgIF9oaWRlKGVsZW1zW2ldKTtcbiAgfVxufTtcblxudmFyIGlzRGVzY2VuZGFudCA9IGZ1bmN0aW9uKHBhcmVudCwgY2hpbGQpIHtcbiAgdmFyIG5vZGUgPSBjaGlsZC5wYXJlbnROb2RlO1xuICB3aGlsZSAobm9kZSAhPT0gbnVsbCkge1xuICAgIGlmIChub2RlID09PSBwYXJlbnQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBub2RlID0gbm9kZS5wYXJlbnROb2RlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbnZhciBnZXRUb3BNYXJnaW4gPSBmdW5jdGlvbihlbGVtKSB7XG4gIGVsZW0uc3R5bGUubGVmdCA9ICctOTk5OXB4JztcbiAgZWxlbS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblxuICB2YXIgaGVpZ2h0ID0gZWxlbS5jbGllbnRIZWlnaHQsXG4gICAgICBwYWRkaW5nO1xuICBpZiAodHlwZW9mIGdldENvbXB1dGVkU3R5bGUgIT09IFwidW5kZWZpbmVkXCIpIHsgLy8gSUUgOFxuICAgIHBhZGRpbmcgPSBwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKGVsZW0pLmdldFByb3BlcnR5VmFsdWUoJ3BhZGRpbmctdG9wJyksIDEwKTtcbiAgfSBlbHNlIHtcbiAgICBwYWRkaW5nID0gcGFyc2VJbnQoZWxlbS5jdXJyZW50U3R5bGUucGFkZGluZyk7XG4gIH1cblxuICBlbGVtLnN0eWxlLmxlZnQgPSAnJztcbiAgZWxlbS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICByZXR1cm4gKCctJyArIHBhcnNlSW50KChoZWlnaHQgKyBwYWRkaW5nKSAvIDIpICsgJ3B4Jyk7XG59O1xuXG52YXIgZmFkZUluID0gZnVuY3Rpb24oZWxlbSwgaW50ZXJ2YWwpIHtcbiAgaWYgKCtlbGVtLnN0eWxlLm9wYWNpdHkgPCAxKSB7XG4gICAgaW50ZXJ2YWwgPSBpbnRlcnZhbCB8fCAxNjtcbiAgICBlbGVtLnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgIGVsZW0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgdmFyIGxhc3QgPSArbmV3IERhdGUoKTtcbiAgICB2YXIgdGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgZWxlbS5zdHlsZS5vcGFjaXR5ID0gK2VsZW0uc3R5bGUub3BhY2l0eSArIChuZXcgRGF0ZSgpIC0gbGFzdCkgLyAxMDA7XG4gICAgICBsYXN0ID0gK25ldyBEYXRlKCk7XG5cbiAgICAgIGlmICgrZWxlbS5zdHlsZS5vcGFjaXR5IDwgMSkge1xuICAgICAgICBzZXRUaW1lb3V0KHRpY2ssIGludGVydmFsKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRpY2soKTtcbiAgfVxuICBlbGVtLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snOyAvL2ZhbGxiYWNrIElFOFxufTtcblxudmFyIGZhZGVPdXQgPSBmdW5jdGlvbihlbGVtLCBpbnRlcnZhbCkge1xuICBpbnRlcnZhbCA9IGludGVydmFsIHx8IDE2O1xuICBlbGVtLnN0eWxlLm9wYWNpdHkgPSAxO1xuICB2YXIgbGFzdCA9ICtuZXcgRGF0ZSgpO1xuICB2YXIgdGljayA9IGZ1bmN0aW9uKCkge1xuICAgIGVsZW0uc3R5bGUub3BhY2l0eSA9ICtlbGVtLnN0eWxlLm9wYWNpdHkgLSAobmV3IERhdGUoKSAtIGxhc3QpIC8gMTAwO1xuICAgIGxhc3QgPSArbmV3IERhdGUoKTtcblxuICAgIGlmICgrZWxlbS5zdHlsZS5vcGFjaXR5ID4gMCkge1xuICAgICAgc2V0VGltZW91dCh0aWNrLCBpbnRlcnZhbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG4gIH07XG4gIHRpY2soKTtcbn07XG5cbnZhciBmaXJlQ2xpY2sgPSBmdW5jdGlvbihub2RlKSB7XG4gIC8vIFRha2VuIGZyb20gaHR0cDovL3d3dy5ub25vYnRydXNpdmUuY29tLzIwMTEvMTEvMjkvcHJvZ3JhbWF0aWNhbGx5LWZpcmUtY3Jvc3Nicm93c2VyLWNsaWNrLWV2ZW50LXdpdGgtamF2YXNjcmlwdC9cbiAgLy8gVGhlbiBmaXhlZCBmb3IgdG9kYXkncyBDaHJvbWUgYnJvd3Nlci5cbiAgaWYgKHR5cGVvZiBNb3VzZUV2ZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gVXAtdG8tZGF0ZSBhcHByb2FjaFxuICAgIHZhciBtZXZ0ID0gbmV3IE1vdXNlRXZlbnQoJ2NsaWNrJywge1xuICAgICAgdmlldzogd2luZG93LFxuICAgICAgYnViYmxlczogZmFsc2UsXG4gICAgICBjYW5jZWxhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgbm9kZS5kaXNwYXRjaEV2ZW50KG1ldnQpO1xuICB9IGVsc2UgaWYgKCBkb2N1bWVudC5jcmVhdGVFdmVudCApIHtcbiAgICAvLyBGYWxsYmFja1xuICAgIHZhciBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnTW91c2VFdmVudHMnKTtcbiAgICBldnQuaW5pdEV2ZW50KCdjbGljaycsIGZhbHNlLCBmYWxzZSk7XG4gICAgbm9kZS5kaXNwYXRjaEV2ZW50KGV2dCk7XG4gIH0gZWxzZSBpZiAoZG9jdW1lbnQuY3JlYXRlRXZlbnRPYmplY3QpIHtcbiAgICBub2RlLmZpcmVFdmVudCgnb25jbGljaycpIDtcbiAgfSBlbHNlIGlmICh0eXBlb2Ygbm9kZS5vbmNsaWNrID09PSAnZnVuY3Rpb24nICkge1xuICAgIG5vZGUub25jbGljaygpO1xuICB9XG59O1xuXG52YXIgc3RvcEV2ZW50UHJvcGFnYXRpb24gPSBmdW5jdGlvbihlKSB7XG4gIC8vIEluIHBhcnRpY3VsYXIsIG1ha2Ugc3VyZSB0aGUgc3BhY2UgYmFyIGRvZXNuJ3Qgc2Nyb2xsIHRoZSBtYWluIHdpbmRvdy5cbiAgaWYgKHR5cGVvZiBlLnN0b3BQcm9wYWdhdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9IGVsc2UgaWYgKHdpbmRvdy5ldmVudCAmJiB3aW5kb3cuZXZlbnQuaGFzT3duUHJvcGVydHkoJ2NhbmNlbEJ1YmJsZScpKSB7XG4gICAgd2luZG93LmV2ZW50LmNhbmNlbEJ1YmJsZSA9IHRydWU7XG4gIH1cbn07XG5cbmV4cG9ydCB7IFxuICBoYXNDbGFzcywgYWRkQ2xhc3MsIHJlbW92ZUNsYXNzLCBcbiAgZXNjYXBlSHRtbCwgXG4gIF9zaG93LCBzaG93LCBfaGlkZSwgaGlkZSwgXG4gIGlzRGVzY2VuZGFudCwgXG4gIGdldFRvcE1hcmdpbixcbiAgZmFkZUluLCBmYWRlT3V0LFxuICBmaXJlQ2xpY2ssXG4gIHN0b3BFdmVudFByb3BhZ2F0aW9uXG59O1xuIiwiaW1wb3J0IHsgc3RvcEV2ZW50UHJvcGFnYXRpb24sIGZpcmVDbGljayB9IGZyb20gJy4vaGFuZGxlLWRvbSc7XG5pbXBvcnQgeyBzZXRGb2N1c1N0eWxlIH0gZnJvbSAnLi9oYW5kbGUtc3dhbC1kb20nO1xuXG5cbnZhciBoYW5kbGVLZXlEb3duID0gZnVuY3Rpb24oZXZlbnQsIHBhcmFtcywgbW9kYWwpIHtcbiAgdmFyIGUgPSBldmVudCB8fCB3aW5kb3cuZXZlbnQ7XG4gIHZhciBrZXlDb2RlID0gZS5rZXlDb2RlIHx8IGUud2hpY2g7XG5cbiAgdmFyICRva0J1dHRvbiAgICAgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCdidXR0b24uY29uZmlybScpO1xuICB2YXIgJGNhbmNlbEJ1dHRvbiA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbi5jYW5jZWwnKTtcbiAgdmFyICRtb2RhbEJ1dHRvbnMgPSBtb2RhbC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b25bdGFiaW5kZXhdJyk7XG5cblxuICBpZiAoWzksIDEzLCAzMiwgMjddLmluZGV4T2Yoa2V5Q29kZSkgPT09IC0xKSB7XG4gICAgLy8gRG9uJ3QgZG8gd29yayBvbiBrZXlzIHdlIGRvbid0IGNhcmUgYWJvdXQuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyICR0YXJnZXRFbGVtZW50ID0gZS50YXJnZXQgfHwgZS5zcmNFbGVtZW50O1xuXG4gIHZhciBidG5JbmRleCA9IC0xOyAvLyBGaW5kIHRoZSBidXR0b24gLSBub3RlLCB0aGlzIGlzIGEgbm9kZWxpc3QsIG5vdCBhbiBhcnJheS5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCAkbW9kYWxCdXR0b25zLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKCR0YXJnZXRFbGVtZW50ID09PSAkbW9kYWxCdXR0b25zW2ldKSB7XG4gICAgICBidG5JbmRleCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBpZiAoa2V5Q29kZSA9PT0gOSkge1xuICAgIC8vIFRBQlxuICAgIGlmIChidG5JbmRleCA9PT0gLTEpIHtcbiAgICAgIC8vIE5vIGJ1dHRvbiBmb2N1c2VkLiBKdW1wIHRvIHRoZSBjb25maXJtIGJ1dHRvbi5cbiAgICAgICR0YXJnZXRFbGVtZW50ID0gJG9rQnV0dG9uO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBDeWNsZSB0byB0aGUgbmV4dCBidXR0b25cbiAgICAgIGlmIChidG5JbmRleCA9PT0gJG1vZGFsQnV0dG9ucy5sZW5ndGggLSAxKSB7XG4gICAgICAgICR0YXJnZXRFbGVtZW50ID0gJG1vZGFsQnV0dG9uc1swXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICR0YXJnZXRFbGVtZW50ID0gJG1vZGFsQnV0dG9uc1tidG5JbmRleCArIDFdO1xuICAgICAgfVxuICAgIH1cblxuICAgIHN0b3BFdmVudFByb3BhZ2F0aW9uKGUpO1xuICAgICR0YXJnZXRFbGVtZW50LmZvY3VzKCk7XG5cbiAgICBpZiAocGFyYW1zLmNvbmZpcm1CdXR0b25Db2xvcikge1xuICAgICAgc2V0Rm9jdXNTdHlsZSgkdGFyZ2V0RWxlbWVudCwgcGFyYW1zLmNvbmZpcm1CdXR0b25Db2xvcik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChrZXlDb2RlID09PSAxMykge1xuICAgICAgaWYgKCR0YXJnZXRFbGVtZW50LnRhZ05hbWUgPT09ICdJTlBVVCcpIHtcbiAgICAgICAgJHRhcmdldEVsZW1lbnQgPSAkb2tCdXR0b247XG4gICAgICAgICRva0J1dHRvbi5mb2N1cygpO1xuICAgICAgfVxuXG4gICAgICBpZiAoYnRuSW5kZXggPT09IC0xKSB7XG4gICAgICAgIC8vIEVOVEVSL1NQQUNFIGNsaWNrZWQgb3V0c2lkZSBvZiBhIGJ1dHRvbi5cbiAgICAgICAgJHRhcmdldEVsZW1lbnQgPSAkb2tCdXR0b247XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBEbyBub3RoaW5nIC0gbGV0IHRoZSBicm93c2VyIGhhbmRsZSBpdC5cbiAgICAgICAgJHRhcmdldEVsZW1lbnQgPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChrZXlDb2RlID09PSAyNyAmJiBwYXJhbXMuYWxsb3dFc2NhcGVLZXkgPT09IHRydWUpIHtcbiAgICAgICR0YXJnZXRFbGVtZW50ID0gJGNhbmNlbEJ1dHRvbjtcbiAgICAgIGZpcmVDbGljaygkdGFyZ2V0RWxlbWVudCwgZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEZhbGxiYWNrIC0gbGV0IHRoZSBicm93c2VyIGhhbmRsZSBpdC5cbiAgICAgICR0YXJnZXRFbGVtZW50ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlS2V5RG93bjtcbiIsImltcG9ydCB7IGhleFRvUmdiIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyByZW1vdmVDbGFzcywgZ2V0VG9wTWFyZ2luLCBmYWRlSW4sIHNob3csIGFkZENsYXNzIH0gZnJvbSAnLi9oYW5kbGUtZG9tJztcbmltcG9ydCBkZWZhdWx0UGFyYW1zIGZyb20gJy4vZGVmYXVsdC1wYXJhbXMnO1xuXG52YXIgbW9kYWxDbGFzcyAgID0gJy5zd2VldC1hbGVydCc7XG52YXIgb3ZlcmxheUNsYXNzID0gJy5zd2VldC1vdmVybGF5JztcblxuLypcbiAqIEFkZCBtb2RhbCArIG92ZXJsYXkgdG8gRE9NXG4gKi9cbmltcG9ydCBpbmplY3RlZEhUTUwgZnJvbSAnLi9pbmplY3RlZC1odG1sJztcblxudmFyIHN3ZWV0QWxlcnRJbml0aWFsaXplID0gZnVuY3Rpb24oKSB7XG4gIHZhciBzd2VldFdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc3dlZXRXcmFwLmlubmVySFRNTCA9IGluamVjdGVkSFRNTDtcblxuICAvLyBBcHBlbmQgZWxlbWVudHMgdG8gYm9keVxuICB3aGlsZSAoc3dlZXRXcmFwLmZpcnN0Q2hpbGQpIHtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHN3ZWV0V3JhcC5maXJzdENoaWxkKTtcbiAgfVxufTtcblxuLypcbiAqIEdldCBET00gZWxlbWVudCBvZiBtb2RhbFxuICovXG52YXIgZ2V0TW9kYWwgPSBmdW5jdGlvbigpIHtcbiAgdmFyICRtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobW9kYWxDbGFzcyk7XG5cbiAgaWYgKCEkbW9kYWwpIHtcbiAgICBzd2VldEFsZXJ0SW5pdGlhbGl6ZSgpO1xuICAgICRtb2RhbCA9IGdldE1vZGFsKCk7XG4gIH1cblxuICByZXR1cm4gJG1vZGFsO1xufTtcblxuLypcbiAqIEdldCBET00gZWxlbWVudCBvZiBpbnB1dCAoaW4gbW9kYWwpXG4gKi9cbnZhciBnZXRJbnB1dCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgJG1vZGFsID0gZ2V0TW9kYWwoKTtcbiAgaWYgKCRtb2RhbCkge1xuICAgIHJldHVybiAkbW9kYWwucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcbiAgfVxufTtcblxuLypcbiAqIEdldCBET00gZWxlbWVudCBvZiBvdmVybGF5XG4gKi9cbnZhciBnZXRPdmVybGF5ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG92ZXJsYXlDbGFzcyk7XG59O1xuXG4vKlxuICogQWRkIGJveC1zaGFkb3cgc3R5bGUgdG8gYnV0dG9uIChkZXBlbmRpbmcgb24gaXRzIGNob3NlbiBiZy1jb2xvcilcbiAqL1xudmFyIHNldEZvY3VzU3R5bGUgPSBmdW5jdGlvbigkYnV0dG9uLCBiZ0NvbG9yKSB7XG4gIHZhciByZ2JDb2xvciA9IGhleFRvUmdiKGJnQ29sb3IpO1xuICAkYnV0dG9uLnN0eWxlLmJveFNoYWRvdyA9ICcwIDAgMnB4IHJnYmEoJyArIHJnYkNvbG9yICsgJywgMC44KSwgaW5zZXQgMCAwIDAgMXB4IHJnYmEoMCwgMCwgMCwgMC4wNSknO1xufTtcblxuLypcbiAqIEFuaW1hdGlvbiB3aGVuIG9wZW5pbmcgbW9kYWxcbiAqL1xudmFyIG9wZW5Nb2RhbCA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gIHZhciAkbW9kYWwgPSBnZXRNb2RhbCgpO1xuICBmYWRlSW4oZ2V0T3ZlcmxheSgpLCAxMCk7XG4gIHNob3coJG1vZGFsKTtcbiAgYWRkQ2xhc3MoJG1vZGFsLCAnc2hvd1N3ZWV0QWxlcnQnKTtcbiAgcmVtb3ZlQ2xhc3MoJG1vZGFsLCAnaGlkZVN3ZWV0QWxlcnQnKTtcblxuICB3aW5kb3cucHJldmlvdXNBY3RpdmVFbGVtZW50ID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgdmFyICRva0J1dHRvbiA9ICRtb2RhbC5xdWVyeVNlbGVjdG9yKCdidXR0b24uY29uZmlybScpO1xuICAkb2tCdXR0b24uZm9jdXMoKTtcblxuICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICBhZGRDbGFzcygkbW9kYWwsICd2aXNpYmxlJyk7XG4gIH0sIDUwMCk7XG5cbiAgdmFyIHRpbWVyID0gJG1vZGFsLmdldEF0dHJpYnV0ZSgnZGF0YS10aW1lcicpO1xuXG4gIGlmICh0aW1lciAhPT0gJ251bGwnICYmIHRpbWVyICE9PSAnJykge1xuICAgIHZhciB0aW1lckNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgJG1vZGFsLnRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGRvbmVGdW5jdGlvbkV4aXN0cyA9ICgodGltZXJDYWxsYmFjayB8fCBudWxsKSAmJiAkbW9kYWwuZ2V0QXR0cmlidXRlKCdkYXRhLWhhcy1kb25lLWZ1bmN0aW9uJykgPT09ICd0cnVlJyk7XG4gICAgICBpZiAoZG9uZUZ1bmN0aW9uRXhpc3RzKSB7IFxuICAgICAgICB0aW1lckNhbGxiYWNrKG51bGwpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHN3ZWV0QWxlcnQuY2xvc2UoKTtcbiAgICAgIH1cbiAgICB9LCB0aW1lcik7XG4gIH1cbn07XG5cbi8qXG4gKiBSZXNldCB0aGUgc3R5bGluZyBvZiB0aGUgaW5wdXRcbiAqIChmb3IgZXhhbXBsZSBpZiBlcnJvcnMgaGF2ZSBiZWVuIHNob3duKVxuICovXG52YXIgcmVzZXRJbnB1dCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgJG1vZGFsID0gZ2V0TW9kYWwoKTtcbiAgdmFyICRpbnB1dCA9IGdldElucHV0KCk7XG5cbiAgcmVtb3ZlQ2xhc3MoJG1vZGFsLCAnc2hvdy1pbnB1dCcpO1xuICAkaW5wdXQudmFsdWUgPSBkZWZhdWx0UGFyYW1zLmlucHV0VmFsdWU7XG4gICRpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCBkZWZhdWx0UGFyYW1zLmlucHV0VHlwZSk7XG4gICRpbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgZGVmYXVsdFBhcmFtcy5pbnB1dFBsYWNlaG9sZGVyKTtcblxuICByZXNldElucHV0RXJyb3IoKTtcbn07XG5cblxudmFyIHJlc2V0SW5wdXRFcnJvciA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gIC8vIElmIHByZXNzIGVudGVyID0+IGlnbm9yZVxuICBpZiAoZXZlbnQgJiYgZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgJG1vZGFsID0gZ2V0TW9kYWwoKTtcblxuICB2YXIgJGVycm9ySWNvbiA9ICRtb2RhbC5xdWVyeVNlbGVjdG9yKCcuc2EtaW5wdXQtZXJyb3InKTtcbiAgcmVtb3ZlQ2xhc3MoJGVycm9ySWNvbiwgJ3Nob3cnKTtcblxuICB2YXIgJGVycm9yQ29udGFpbmVyID0gJG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5zYS1lcnJvci1jb250YWluZXInKTtcbiAgcmVtb3ZlQ2xhc3MoJGVycm9yQ29udGFpbmVyLCAnc2hvdycpO1xufTtcblxuXG4vKlxuICogU2V0IFwibWFyZ2luLXRvcFwiLXByb3BlcnR5IG9uIG1vZGFsIGJhc2VkIG9uIGl0cyBjb21wdXRlZCBoZWlnaHRcbiAqL1xudmFyIGZpeFZlcnRpY2FsUG9zaXRpb24gPSBmdW5jdGlvbigpIHtcbiAgdmFyICRtb2RhbCA9IGdldE1vZGFsKCk7XG4gICRtb2RhbC5zdHlsZS5tYXJnaW5Ub3AgPSBnZXRUb3BNYXJnaW4oZ2V0TW9kYWwoKSk7XG59O1xuXG5cbmV4cG9ydCB7IFxuICBzd2VldEFsZXJ0SW5pdGlhbGl6ZSxcbiAgZ2V0TW9kYWwsXG4gIGdldE92ZXJsYXksXG4gIGdldElucHV0LFxuICBzZXRGb2N1c1N0eWxlLFxuICBvcGVuTW9kYWwsXG4gIHJlc2V0SW5wdXQsXG4gIHJlc2V0SW5wdXRFcnJvcixcbiAgZml4VmVydGljYWxQb3NpdGlvblxufTtcbiIsInZhciBpbmplY3RlZEhUTUwgPSBcblxuICAvLyBEYXJrIG92ZXJsYXlcbiAgYDxkaXYgY2xhc3M9XCJzd2VldC1vdmVybGF5XCIgdGFiSW5kZXg9XCItMVwiPjwvZGl2PmAgK1xuXG4gIC8vIE1vZGFsXG4gIGA8ZGl2IGNsYXNzPVwic3dlZXQtYWxlcnRcIj5gICtcblxuICAgIC8vIEVycm9yIGljb25cbiAgICBgPGRpdiBjbGFzcz1cInNhLWljb24gc2EtZXJyb3JcIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwic2EteC1tYXJrXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwic2EtbGluZSBzYS1sZWZ0XCI+PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz1cInNhLWxpbmUgc2EtcmlnaHRcIj48L3NwYW4+XG4gICAgICA8L3NwYW4+XG4gICAgPC9kaXY+YCArXG5cbiAgICAvLyBXYXJuaW5nIGljb25cbiAgICBgPGRpdiBjbGFzcz1cInNhLWljb24gc2Etd2FybmluZ1wiPlxuICAgICAgPHNwYW4gY2xhc3M9XCJzYS1ib2R5XCI+PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJzYS1kb3RcIj48L3NwYW4+XG4gICAgPC9kaXY+YCArXG5cbiAgICAvLyBJbmZvIGljb25cbiAgICBgPGRpdiBjbGFzcz1cInNhLWljb24gc2EtaW5mb1wiPjwvZGl2PmAgK1xuXG4gICAgLy8gU3VjY2VzcyBpY29uXG4gICAgYDxkaXYgY2xhc3M9XCJzYS1pY29uIHNhLXN1Y2Nlc3NcIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwic2EtbGluZSBzYS10aXBcIj48L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cInNhLWxpbmUgc2EtbG9uZ1wiPjwvc3Bhbj5cblxuICAgICAgPGRpdiBjbGFzcz1cInNhLXBsYWNlaG9sZGVyXCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwic2EtZml4XCI+PC9kaXY+XG4gICAgPC9kaXY+YCArXG5cbiAgICBgPGRpdiBjbGFzcz1cInNhLWljb24gc2EtY3VzdG9tXCI+PC9kaXY+YCArXG5cbiAgICAvLyBUaXRsZSwgdGV4dCBhbmQgaW5wdXRcbiAgICBgPGgyPlRpdGxlPC9oMj5cbiAgICA8cD5UZXh0PC9wPlxuICAgIDxmaWVsZHNldD5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHRhYkluZGV4PVwiM1wiIC8+XG4gICAgICA8ZGl2IGNsYXNzPVwic2EtaW5wdXQtZXJyb3JcIj48L2Rpdj5cbiAgICA8L2ZpZWxkc2V0PmAgK1xuXG4gICAgLy8gSW5wdXQgZXJyb3JzXG4gICAgYDxkaXYgY2xhc3M9XCJzYS1lcnJvci1jb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJpY29uXCI+ITwvZGl2PlxuICAgICAgPHA+Tm90IHZhbGlkITwvcD5cbiAgICA8L2Rpdj5gICtcblxuICAgIC8vIENhbmNlbCBhbmQgY29uZmlybSBidXR0b25zXG4gICAgYDxkaXYgY2xhc3M9XCJzYS1idXR0b24tY29udGFpbmVyXCI+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwiY2FuY2VsXCIgdGFiSW5kZXg9XCIyXCI+Q2FuY2VsPC9idXR0b24+XG4gICAgICA8ZGl2IGNsYXNzPVwic2EtY29uZmlybS1idXR0b24tY29udGFpbmVyXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJjb25maXJtXCIgdGFiSW5kZXg9XCIxXCI+T0s8L2J1dHRvbj5gICsgXG5cbiAgICAgICAgLy8gTG9hZGluZyBhbmltYXRpb25cbiAgICAgICAgYDxkaXYgY2xhc3M9XCJsYS1iYWxsLWZhbGxcIj5cbiAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5gICtcblxuICAvLyBFbmQgb2YgbW9kYWxcbiAgYDwvZGl2PmA7XG5cbmV4cG9ydCBkZWZhdWx0IGluamVjdGVkSFRNTDtcbiIsInZhciBhbGVydFR5cGVzID0gWydlcnJvcicsICd3YXJuaW5nJywgJ2luZm8nLCAnc3VjY2VzcycsICdpbnB1dCcsICdwcm9tcHQnXTtcblxuaW1wb3J0IHtcbiAgaXNJRThcbn0gZnJvbSAnLi91dGlscyc7XG5cbmltcG9ydCB7XG4gIGdldE1vZGFsLFxuICBnZXRJbnB1dCxcbiAgc2V0Rm9jdXNTdHlsZVxufSBmcm9tICcuL2hhbmRsZS1zd2FsLWRvbSc7XG5cbmltcG9ydCB7XG4gIGhhc0NsYXNzLCBhZGRDbGFzcywgcmVtb3ZlQ2xhc3MsXG4gIGVzY2FwZUh0bWwsXG4gIF9zaG93LCBzaG93LCBfaGlkZSwgaGlkZVxufSBmcm9tICcuL2hhbmRsZS1kb20nO1xuXG5cbi8qXG4gKiBTZXQgdHlwZSwgdGV4dCBhbmQgYWN0aW9ucyBvbiBtb2RhbFxuICovXG52YXIgc2V0UGFyYW1ldGVycyA9IGZ1bmN0aW9uKHBhcmFtcykge1xuICB2YXIgbW9kYWwgPSBnZXRNb2RhbCgpO1xuXG4gIHZhciAkdGl0bGUgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCdoMicpO1xuICB2YXIgJHRleHQgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCdwJyk7XG4gIHZhciAkY2FuY2VsQnRuID0gbW9kYWwucXVlcnlTZWxlY3RvcignYnV0dG9uLmNhbmNlbCcpO1xuICB2YXIgJGNvbmZpcm1CdG4gPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCdidXR0b24uY29uZmlybScpO1xuXG4gIC8qXG4gICAqIFRpdGxlXG4gICAqL1xuICAkdGl0bGUuaW5uZXJIVE1MID0gcGFyYW1zLmh0bWwgPyBwYXJhbXMudGl0bGUgOiBlc2NhcGVIdG1sKHBhcmFtcy50aXRsZSkuc3BsaXQoJ1xcbicpLmpvaW4oJzxicj4nKTtcblxuICAvKlxuICAgKiBUZXh0XG4gICAqL1xuICAkdGV4dC5pbm5lckhUTUwgPSBwYXJhbXMuaHRtbCA/IHBhcmFtcy50ZXh0IDogZXNjYXBlSHRtbChwYXJhbXMudGV4dCB8fCAnJykuc3BsaXQoJ1xcbicpLmpvaW4oJzxicj4nKTtcbiAgaWYgKHBhcmFtcy50ZXh0KSBzaG93KCR0ZXh0KTtcblxuICAvKlxuICAgKiBDdXN0b20gY2xhc3NcbiAgICovXG4gIGlmIChwYXJhbXMuY3VzdG9tQ2xhc3MpIHtcbiAgICBhZGRDbGFzcyhtb2RhbCwgcGFyYW1zLmN1c3RvbUNsYXNzKTtcbiAgICBtb2RhbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtY3VzdG9tLWNsYXNzJywgcGFyYW1zLmN1c3RvbUNsYXNzKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBGaW5kIHByZXZpb3VzbHkgc2V0IGNsYXNzZXMgYW5kIHJlbW92ZSB0aGVtXG4gICAgbGV0IGN1c3RvbUNsYXNzID0gbW9kYWwuZ2V0QXR0cmlidXRlKCdkYXRhLWN1c3RvbS1jbGFzcycpO1xuICAgIHJlbW92ZUNsYXNzKG1vZGFsLCBjdXN0b21DbGFzcyk7XG4gICAgbW9kYWwuc2V0QXR0cmlidXRlKCdkYXRhLWN1c3RvbS1jbGFzcycsICcnKTtcbiAgfVxuXG4gIC8qXG4gICAqIEljb25cbiAgICovXG4gIGhpZGUobW9kYWwucXVlcnlTZWxlY3RvckFsbCgnLnNhLWljb24nKSk7XG5cbiAgaWYgKHBhcmFtcy50eXBlICYmICFpc0lFOCgpKSB7XG5cbiAgICBsZXQgdmFsaWRUeXBlID0gZmFsc2U7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsZXJ0VHlwZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChwYXJhbXMudHlwZSA9PT0gYWxlcnRUeXBlc1tpXSkge1xuICAgICAgICB2YWxpZFR5cGUgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXZhbGlkVHlwZSkge1xuICAgICAgbG9nU3RyKCdVbmtub3duIGFsZXJ0IHR5cGU6ICcgKyBwYXJhbXMudHlwZSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgbGV0IHR5cGVzV2l0aEljb25zID0gWydzdWNjZXNzJywgJ2Vycm9yJywgJ3dhcm5pbmcnLCAnaW5mbyddO1xuICAgIGxldCAkaWNvbjtcblxuICAgIGlmICh0eXBlc1dpdGhJY29ucy5pbmRleE9mKHBhcmFtcy50eXBlKSAhPT0gLTEpIHtcbiAgICAgICRpY29uID0gbW9kYWwucXVlcnlTZWxlY3RvcignLnNhLWljb24uJyArICdzYS0nICsgcGFyYW1zLnR5cGUpO1xuICAgICAgc2hvdygkaWNvbik7XG4gICAgfVxuXG4gICAgbGV0ICRpbnB1dCA9IGdldElucHV0KCk7XG5cbiAgICAvLyBBbmltYXRlIGljb25cbiAgICBzd2l0Y2ggKHBhcmFtcy50eXBlKSB7XG5cbiAgICAgIGNhc2UgJ3N1Y2Nlc3MnOlxuICAgICAgICBhZGRDbGFzcygkaWNvbiwgJ2FuaW1hdGUnKTtcbiAgICAgICAgYWRkQ2xhc3MoJGljb24ucXVlcnlTZWxlY3RvcignLnNhLXRpcCcpLCAnYW5pbWF0ZVN1Y2Nlc3NUaXAnKTtcbiAgICAgICAgYWRkQ2xhc3MoJGljb24ucXVlcnlTZWxlY3RvcignLnNhLWxvbmcnKSwgJ2FuaW1hdGVTdWNjZXNzTG9uZycpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnZXJyb3InOlxuICAgICAgICBhZGRDbGFzcygkaWNvbiwgJ2FuaW1hdGVFcnJvckljb24nKTtcbiAgICAgICAgYWRkQ2xhc3MoJGljb24ucXVlcnlTZWxlY3RvcignLnNhLXgtbWFyaycpLCAnYW5pbWF0ZVhNYXJrJyk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICd3YXJuaW5nJzpcbiAgICAgICAgYWRkQ2xhc3MoJGljb24sICdwdWxzZVdhcm5pbmcnKTtcbiAgICAgICAgYWRkQ2xhc3MoJGljb24ucXVlcnlTZWxlY3RvcignLnNhLWJvZHknKSwgJ3B1bHNlV2FybmluZ0lucycpO1xuICAgICAgICBhZGRDbGFzcygkaWNvbi5xdWVyeVNlbGVjdG9yKCcuc2EtZG90JyksICdwdWxzZVdhcm5pbmdJbnMnKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2lucHV0JzpcbiAgICAgIGNhc2UgJ3Byb21wdCc6XG4gICAgICAgICRpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCBwYXJhbXMuaW5wdXRUeXBlKTtcbiAgICAgICAgJGlucHV0LnZhbHVlID0gcGFyYW1zLmlucHV0VmFsdWU7XG4gICAgICAgICRpbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgcGFyYW1zLmlucHV0UGxhY2Vob2xkZXIpO1xuICAgICAgICBhZGRDbGFzcyhtb2RhbCwgJ3Nob3ctaW5wdXQnKTtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgJGlucHV0LmZvY3VzKCk7XG4gICAgICAgICAgJGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgc3dhbC5yZXNldElucHV0RXJyb3IpO1xuICAgICAgICB9LCA0MDApO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICAvKlxuICAgKiBDdXN0b20gaW1hZ2VcbiAgICovXG4gIGlmIChwYXJhbXMuaW1hZ2VVcmwpIHtcbiAgICBsZXQgJGN1c3RvbUljb24gPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCcuc2EtaWNvbi5zYS1jdXN0b20nKTtcblxuICAgICRjdXN0b21JY29uLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoJyArIHBhcmFtcy5pbWFnZVVybCArICcpJztcbiAgICBzaG93KCRjdXN0b21JY29uKTtcblxuICAgIGxldCBfaW1nV2lkdGggPSA4MDtcbiAgICBsZXQgX2ltZ0hlaWdodCA9IDgwO1xuXG4gICAgaWYgKHBhcmFtcy5pbWFnZVNpemUpIHtcbiAgICAgIGxldCBkaW1lbnNpb25zID0gcGFyYW1zLmltYWdlU2l6ZS50b1N0cmluZygpLnNwbGl0KCd4Jyk7XG4gICAgICBsZXQgaW1nV2lkdGggPSBkaW1lbnNpb25zWzBdO1xuICAgICAgbGV0IGltZ0hlaWdodCA9IGRpbWVuc2lvbnNbMV07XG5cbiAgICAgIGlmICghaW1nV2lkdGggfHwgIWltZ0hlaWdodCkge1xuICAgICAgICBsb2dTdHIoJ1BhcmFtZXRlciBpbWFnZVNpemUgZXhwZWN0cyB2YWx1ZSB3aXRoIGZvcm1hdCBXSURUSHhIRUlHSFQsIGdvdCAnICsgcGFyYW1zLmltYWdlU2l6ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfaW1nV2lkdGggPSBpbWdXaWR0aDtcbiAgICAgICAgX2ltZ0hlaWdodCA9IGltZ0hlaWdodDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAkY3VzdG9tSWNvbi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJGN1c3RvbUljb24uZ2V0QXR0cmlidXRlKCdzdHlsZScpICsgJ3dpZHRoOicgKyBfaW1nV2lkdGggKyAncHg7IGhlaWdodDonICsgX2ltZ0hlaWdodCArICdweCcpO1xuICB9XG5cbiAgLypcbiAgICogU2hvdyBjYW5jZWwgYnV0dG9uP1xuICAgKi9cbiAgbW9kYWwuc2V0QXR0cmlidXRlKCdkYXRhLWhhcy1jYW5jZWwtYnV0dG9uJywgcGFyYW1zLnNob3dDYW5jZWxCdXR0b24pO1xuICBpZiAocGFyYW1zLnNob3dDYW5jZWxCdXR0b24pIHtcbiAgICAkY2FuY2VsQnRuLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcbiAgfSBlbHNlIHtcbiAgICBoaWRlKCRjYW5jZWxCdG4pO1xuICB9XG5cbiAgLypcbiAgICogU2hvdyBjb25maXJtIGJ1dHRvbj9cbiAgICovXG4gIG1vZGFsLnNldEF0dHJpYnV0ZSgnZGF0YS1oYXMtY29uZmlybS1idXR0b24nLCBwYXJhbXMuc2hvd0NvbmZpcm1CdXR0b24pO1xuICBpZiAocGFyYW1zLnNob3dDb25maXJtQnV0dG9uKSB7XG4gICAgJGNvbmZpcm1CdG4uc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xuICB9IGVsc2Uge1xuICAgIGhpZGUoJGNvbmZpcm1CdG4pO1xuICB9XG5cbiAgLypcbiAgICogQ3VzdG9tIHRleHQgb24gY2FuY2VsL2NvbmZpcm0gYnV0dG9uc1xuICAgKi9cbiAgaWYgKHBhcmFtcy5jYW5jZWxCdXR0b25UZXh0KSB7XG4gICAgJGNhbmNlbEJ0bi5pbm5lckhUTUwgPSBlc2NhcGVIdG1sKHBhcmFtcy5jYW5jZWxCdXR0b25UZXh0KTtcbiAgfVxuICBpZiAocGFyYW1zLmNvbmZpcm1CdXR0b25UZXh0KSB7XG4gICAgJGNvbmZpcm1CdG4uaW5uZXJIVE1MID0gZXNjYXBlSHRtbChwYXJhbXMuY29uZmlybUJ1dHRvblRleHQpO1xuICB9XG5cbiAgLypcbiAgICogQ3VzdG9tIGNvbG9yIG9uIGNvbmZpcm0gYnV0dG9uXG4gICAqL1xuICBpZiAocGFyYW1zLmNvbmZpcm1CdXR0b25Db2xvcikge1xuICAgIC8vIFNldCBjb25maXJtIGJ1dHRvbiB0byBzZWxlY3RlZCBiYWNrZ3JvdW5kIGNvbG9yXG4gICAgJGNvbmZpcm1CdG4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gcGFyYW1zLmNvbmZpcm1CdXR0b25Db2xvcjtcblxuICAgIC8vIFNldCB0aGUgY29uZmlybSBidXR0b24gY29sb3IgdG8gdGhlIGxvYWRpbmcgcmluZ1xuICAgICRjb25maXJtQnRuLnN0eWxlLmJvcmRlckxlZnRDb2xvciA9IHBhcmFtcy5jb25maXJtTG9hZGluZ0J1dHRvbkNvbG9yO1xuICAgICRjb25maXJtQnRuLnN0eWxlLmJvcmRlclJpZ2h0Q29sb3IgPSBwYXJhbXMuY29uZmlybUxvYWRpbmdCdXR0b25Db2xvcjtcblxuICAgIC8vIFNldCBib3gtc2hhZG93IHRvIGRlZmF1bHQgZm9jdXNlZCBidXR0b25cbiAgICBzZXRGb2N1c1N0eWxlKCRjb25maXJtQnRuLCBwYXJhbXMuY29uZmlybUJ1dHRvbkNvbG9yKTtcbiAgfVxuXG4gIC8qXG4gICAqIEFsbG93IG91dHNpZGUgY2xpY2tcbiAgICovXG4gIG1vZGFsLnNldEF0dHJpYnV0ZSgnZGF0YS1hbGxvdy1vdXRzaWRlLWNsaWNrJywgcGFyYW1zLmFsbG93T3V0c2lkZUNsaWNrKTtcblxuICAvKlxuICAgKiBDYWxsYmFjayBmdW5jdGlvblxuICAgKi9cbiAgdmFyIGhhc0RvbmVGdW5jdGlvbiA9IHBhcmFtcy5kb25lRnVuY3Rpb24gPyB0cnVlIDogZmFsc2U7XG4gIG1vZGFsLnNldEF0dHJpYnV0ZSgnZGF0YS1oYXMtZG9uZS1mdW5jdGlvbicsIGhhc0RvbmVGdW5jdGlvbik7XG5cbiAgLypcbiAgICogQW5pbWF0aW9uXG4gICAqL1xuICBpZiAoIXBhcmFtcy5hbmltYXRpb24pIHtcbiAgICBtb2RhbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtYW5pbWF0aW9uJywgJ25vbmUnKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgcGFyYW1zLmFuaW1hdGlvbiA9PT0gJ3N0cmluZycpIHtcbiAgICBtb2RhbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtYW5pbWF0aW9uJywgcGFyYW1zLmFuaW1hdGlvbik7IC8vIEN1c3RvbSBhbmltYXRpb25cbiAgfSBlbHNlIHtcbiAgICBtb2RhbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtYW5pbWF0aW9uJywgJ3BvcCcpO1xuICB9XG5cbiAgLypcbiAgICogVGltZXJcbiAgICovXG4gIG1vZGFsLnNldEF0dHJpYnV0ZSgnZGF0YS10aW1lcicsIHBhcmFtcy50aW1lcik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzZXRQYXJhbWV0ZXJzO1xuIiwiLypcbiAqIEFsbG93IHVzZXIgdG8gcGFzcyB0aGVpciBvd24gcGFyYW1zXG4gKi9cbnZhciBleHRlbmQgPSBmdW5jdGlvbihhLCBiKSB7XG4gIGZvciAodmFyIGtleSBpbiBiKSB7XG4gICAgaWYgKGIuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgYVtrZXldID0gYltrZXldO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYTtcbn07XG5cbi8qXG4gKiBDb252ZXJ0IEhFWCBjb2RlcyB0byBSR0IgdmFsdWVzICgjMDAwMDAwIC0+IHJnYigwLDAsMCkpXG4gKi9cbnZhciBoZXhUb1JnYiA9IGZ1bmN0aW9uKGhleCkge1xuICB2YXIgcmVzdWx0ID0gL14jPyhbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KSQvaS5leGVjKGhleCk7XG4gIHJldHVybiByZXN1bHQgPyBwYXJzZUludChyZXN1bHRbMV0sIDE2KSArICcsICcgKyBwYXJzZUludChyZXN1bHRbMl0sIDE2KSArICcsICcgKyBwYXJzZUludChyZXN1bHRbM10sIDE2KSA6IG51bGw7XG59O1xuXG4vKlxuICogQ2hlY2sgaWYgdGhlIHVzZXIgaXMgdXNpbmcgSW50ZXJuZXQgRXhwbG9yZXIgOCAoZm9yIGZhbGxiYWNrcylcbiAqL1xudmFyIGlzSUU4ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAod2luZG93LmF0dGFjaEV2ZW50ICYmICF3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcik7XG59O1xuXG4vKlxuICogSUUgY29tcGF0aWJsZSBsb2dnaW5nIGZvciBkZXZlbG9wZXJzXG4gKi9cbnZhciBsb2dTdHIgPSBmdW5jdGlvbihzdHJpbmcpIHtcbiAgaWYgKHdpbmRvdy5jb25zb2xlKSB7XG4gICAgLy8gSUUuLi5cbiAgICB3aW5kb3cuY29uc29sZS5sb2coJ1N3ZWV0QWxlcnQ6ICcgKyBzdHJpbmcpO1xuICB9XG59O1xuXG4vKlxuICogU2V0IGhvdmVyLCBhY3RpdmUgYW5kIGZvY3VzLXN0YXRlcyBmb3IgYnV0dG9ucyBcbiAqIChzb3VyY2U6IGh0dHA6Ly93d3cuc2l0ZXBvaW50LmNvbS9qYXZhc2NyaXB0LWdlbmVyYXRlLWxpZ2h0ZXItZGFya2VyLWNvbG9yKVxuICovXG52YXIgY29sb3JMdW1pbmFuY2UgPSBmdW5jdGlvbihoZXgsIGx1bSkge1xuICAvLyBWYWxpZGF0ZSBoZXggc3RyaW5nXG4gIGhleCA9IFN0cmluZyhoZXgpLnJlcGxhY2UoL1teMC05YS1mXS9naSwgJycpO1xuICBpZiAoaGV4Lmxlbmd0aCA8IDYpIHtcbiAgICBoZXggPSBoZXhbMF0gKyBoZXhbMF0gKyBoZXhbMV0gKyBoZXhbMV0gKyBoZXhbMl0gKyBoZXhbMl07XG4gIH1cbiAgbHVtID0gbHVtIHx8IDA7XG5cbiAgLy8gQ29udmVydCB0byBkZWNpbWFsIGFuZCBjaGFuZ2UgbHVtaW5vc2l0eVxuICB2YXIgcmdiID0gJyMnO1xuICB2YXIgYztcbiAgdmFyIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IDM7IGkrKykge1xuICAgIGMgPSBwYXJzZUludChoZXguc3Vic3RyKGkgKiAyLCAyKSwgMTYpO1xuICAgIGMgPSBNYXRoLnJvdW5kKE1hdGgubWluKE1hdGgubWF4KDAsIGMgKyBjICogbHVtKSwgMjU1KSkudG9TdHJpbmcoMTYpO1xuICAgIHJnYiArPSAoJzAwJyArIGMpLnN1YnN0cihjLmxlbmd0aCk7XG4gIH1cblxuICByZXR1cm4gcmdiO1xufTtcblxuXG5leHBvcnQge1xuICBleHRlbmQsXG4gIGhleFRvUmdiLFxuICBpc0lFOCxcbiAgbG9nU3RyLFxuICBjb2xvckx1bWluYW5jZVxufTtcbiJdfQ==

  
  /*
   * Use SweetAlert with RequireJS
   */
  
  if (typeof define === 'function' && define.amd) {
    define(function () {
      return sweetAlert;
    });
  } else if (typeof module !== 'undefined' && module.exports) {
    module.exports = sweetAlert;
  }

})(window, document);

/*
 *
 * More info at [www.dropzonejs.com](http://www.dropzonejs.com)
 *
 * Copyright (c) 2012, Matias Meno
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 */

(function() {
    var Dropzone, Emitter, camelize, contentLoaded, detectVerticalSquash, drawImageIOSFix, noop, without,
        __slice = [].slice,
        __hasProp = {}.hasOwnProperty,
        __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

    noop = function() {};

    Emitter = (function() {
        function Emitter() {}

        Emitter.prototype.addEventListener = Emitter.prototype.on;

        Emitter.prototype.on = function(event, fn) {
            this._callbacks = this._callbacks || {};
            if (!this._callbacks[event]) {
                this._callbacks[event] = [];
            }
            this._callbacks[event].push(fn);
            return this;
        };

        Emitter.prototype.emit = function() {
            var args, callback, callbacks, event, _i, _len;
            event = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
            this._callbacks = this._callbacks || {};
            callbacks = this._callbacks[event];
            if (callbacks) {
                for (_i = 0, _len = callbacks.length; _i < _len; _i++) {
                    callback = callbacks[_i];
                    callback.apply(this, args);
                }
            }
            return this;
        };

        Emitter.prototype.removeListener = Emitter.prototype.off;

        Emitter.prototype.removeAllListeners = Emitter.prototype.off;

        Emitter.prototype.removeEventListener = Emitter.prototype.off;

        Emitter.prototype.off = function(event, fn) {
            var callback, callbacks, i, _i, _len;
            if (!this._callbacks || arguments.length === 0) {
                this._callbacks = {};
                return this;
            }
            callbacks = this._callbacks[event];
            if (!callbacks) {
                return this;
            }
            if (arguments.length === 1) {
                delete this._callbacks[event];
                return this;
            }
            for (i = _i = 0, _len = callbacks.length; _i < _len; i = ++_i) {
                callback = callbacks[i];
                if (callback === fn) {
                    callbacks.splice(i, 1);
                    break;
                }
            }
            return this;
        };

        return Emitter;

    })();

    Dropzone = (function(_super) {
        var extend, resolveOption;

        __extends(Dropzone, _super);

        Dropzone.prototype.Emitter = Emitter;


        /*
         This is a list of all available events you can register on a dropzone object.

         You can register an event handler like this:

         dropzone.on("dragEnter", function() { });
         */

        Dropzone.prototype.events = ["drop", "dragstart", "dragend", "dragenter", "dragover", "dragleave", "addedfile", "addedfiles", "removedfile", "thumbnail", "error", "errormultiple", "processing", "processingmultiple", "uploadprogress", "totaluploadprogress", "sending", "sendingmultiple", "success", "successmultiple", "canceled", "canceledmultiple", "complete", "completemultiple", "reset", "maxfilesexceeded", "maxfilesreached", "queuecomplete"];

        Dropzone.prototype.defaultOptions = {
            url: null,
            method: "post",
            withCredentials: false,
            parallelUploads: 2,
            uploadMultiple: false,
            maxFilesize: 256,
            paramName: "file",
            createImageThumbnails: true,
            maxThumbnailFilesize: 10,
            thumbnailWidth: 120,
            thumbnailHeight: 120,
            filesizeBase: 1000,
            maxFiles: null,
            params: {},
            clickable: true,
            ignoreHiddenFiles: true,
            acceptedFiles: null,
            acceptedMimeTypes: null,
            autoProcessQueue: true,
            autoQueue: true,
            addRemoveLinks: false,
            previewsContainer: null,
            hiddenInputContainer: "body",
            capture: null,
            dictDefaultMessage: "Drop files here to upload",
            dictFallbackMessage: "Your browser does not support drag'n'drop file uploads.",
            dictFallbackText: "Please use the fallback form below to upload your files like in the olden days.",
            dictFileTooBig: "File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",
            dictInvalidFileType: "You can't upload files of this type.",
            dictResponseError: "Server responded with {{statusCode}} code.",
            dictCancelUpload: "Cancel upload",
            dictCancelUploadConfirmation: "Are you sure you want to cancel this upload?",
            dictRemoveFile: "Remove file",
            dictRemoveFileConfirmation: null,
            dictMaxFilesExceeded: "You can not upload any more files.",
            accept: function(file, done) {
                return done();
            },
            init: function() {
                return noop;
            },
            forceFallback: false,
            fallback: function() {
                var child, messageElement, span, _i, _len, _ref;
                this.element.className = "" + this.element.className + " dz-browser-not-supported";
                _ref = this.element.getElementsByTagName("div");
                for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                    child = _ref[_i];
                    if (/(^| )dz-message($| )/.test(child.className)) {
                        messageElement = child;
                        child.className = "dz-message";
                        continue;
                    }
                }
                if (!messageElement) {
                    messageElement = Dropzone.createElement("<div class=\"dz-message\"><span></span></div>");
                    this.element.appendChild(messageElement);
                }
                span = messageElement.getElementsByTagName("span")[0];
                if (span) {
                    if (span.textContent != null) {
                        span.textContent = this.options.dictFallbackMessage;
                    } else if (span.innerText != null) {
                        span.innerText = this.options.dictFallbackMessage;
                    }
                }
                return this.element.appendChild(this.getFallbackForm());
            },
            resize: function(file) {
                var info, srcRatio, trgRatio;
                info = {
                    srcX: 0,
                    srcY: 0,
                    srcWidth: file.width,
                    srcHeight: file.height
                };
                srcRatio = file.width / file.height;
                info.optWidth = this.options.thumbnailWidth;
                info.optHeight = this.options.thumbnailHeight;
                if ((info.optWidth == null) && (info.optHeight == null)) {
                    info.optWidth = info.srcWidth;
                    info.optHeight = info.srcHeight;
                } else if (info.optWidth == null) {
                    info.optWidth = srcRatio * info.optHeight;
                } else if (info.optHeight == null) {
                    info.optHeight = (1 / srcRatio) * info.optWidth;
                }
                trgRatio = info.optWidth / info.optHeight;
                if (file.height < info.optHeight || file.width < info.optWidth) {
                    info.trgHeight = info.srcHeight;
                    info.trgWidth = info.srcWidth;
                } else {
                    if (srcRatio > trgRatio) {
                        info.srcHeight = file.height;
                        info.srcWidth = info.srcHeight * trgRatio;
                    } else {
                        info.srcWidth = file.width;
                        info.srcHeight = info.srcWidth / trgRatio;
                    }
                }
                info.srcX = (file.width - info.srcWidth) / 2;
                info.srcY = (file.height - info.srcHeight) / 2;
                return info;
            },

            /*
             Those functions register themselves to the events on init and handle all
             the user interface specific stuff. Overwriting them won't break the upload
             but can break the way it's displayed.
             You can overwrite them if you don't like the default behavior. If you just
             want to add an additional event handler, register it on the dropzone object
             and don't overwrite those options.
             */
            drop: function(e) {
                return this.element.classList.remove("dz-drag-hover");
            },
            dragstart: noop,
            dragend: function(e) {
                return this.element.classList.remove("dz-drag-hover");
            },
            dragenter: function(e) {
                return this.element.classList.add("dz-drag-hover");
            },
            dragover: function(e) {
                return this.element.classList.add("dz-drag-hover");
            },
            dragleave: function(e) {
                return this.element.classList.remove("dz-drag-hover");
            },
            paste: noop,
            reset: function() {
                return this.element.classList.remove("dz-started");
            },
            addedfile: function(file) {
                var node, removeFileEvent, removeLink, _i, _j, _k, _len, _len1, _len2, _ref, _ref1, _ref2, _results;
                if (this.element === this.previewsContainer) {
                    this.element.classList.add("dz-started");
                }
                if (this.previewsContainer) {
                    file.previewElement = Dropzone.createElement(this.options.previewTemplate.trim());
                    file.previewTemplate = file.previewElement;
                    this.previewsContainer.appendChild(file.previewElement);
                    _ref = file.previewElement.querySelectorAll("[data-dz-name]");
                    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                        node = _ref[_i];
                        node.textContent = file.name;
                    }
                    _ref1 = file.previewElement.querySelectorAll("[data-dz-size]");
                    for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
                        node = _ref1[_j];
                        node.innerHTML = this.filesize(file.size);
                    }
                    if (this.options.addRemoveLinks) {
                        file._removeLink = Dropzone.createElement("<a class=\"dz-remove\" href=\"javascript:undefined;\" data-dz-remove>" + this.options.dictRemoveFile + "</a>");
                        file.previewElement.appendChild(file._removeLink);
                    }
                    removeFileEvent = (function(_this) {
                        return function(e) {
                            e.preventDefault();
                            e.stopPropagation();
                            if (file.status === Dropzone.UPLOADING) {
                                return Dropzone.confirm(_this.options.dictCancelUploadConfirmation, function() {
                                    return _this.removeFile(file);
                                });
                            } else {
                                if (_this.options.dictRemoveFileConfirmation) {
                                    return Dropzone.confirm(_this.options.dictRemoveFileConfirmation, function() {
                                        return _this.removeFile(file);
                                    });
                                } else {
                                    return _this.removeFile(file);
                                }
                            }
                        };
                    })(this);
                    _ref2 = file.previewElement.querySelectorAll("[data-dz-remove]");
                    _results = [];
                    for (_k = 0, _len2 = _ref2.length; _k < _len2; _k++) {
                        removeLink = _ref2[_k];
                        _results.push(removeLink.addEventListener("click", removeFileEvent));
                    }
                    return _results;
                }
            },
            removedfile: function(file) {
                var _ref;
                if (file.previewElement) {
                    if ((_ref = file.previewElement) != null) {
                        _ref.parentNode.removeChild(file.previewElement);
                    }
                }
                return this._updateMaxFilesReachedClass();
            },
            thumbnail: function(file, dataUrl) {
                var thumbnailElement, _i, _len, _ref;
                if (file.previewElement) {
                    file.previewElement.classList.remove("dz-file-preview");
                    _ref = file.previewElement.querySelectorAll("[data-dz-thumbnail]");
                    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                        thumbnailElement = _ref[_i];
                        thumbnailElement.alt = file.name;
                        thumbnailElement.src = dataUrl;
                    }
                    return setTimeout(((function(_this) {
                        return function() {
                            return file.previewElement.classList.add("dz-image-preview");
                        };
                    })(this)), 1);
                }
            },
            error: function(file, message) {
                var node, _i, _len, _ref, _results;
                if (file.previewElement) {
                    file.previewElement.classList.add("dz-error");
                    if (typeof message !== "String" && message.error) {
                        message = message.error;
                    }
                    _ref = file.previewElement.querySelectorAll("[data-dz-errormessage]");
                    _results = [];
                    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                        node = _ref[_i];
                        _results.push(node.textContent = message);
                    }
                    return _results;
                }
            },
            errormultiple: noop,
            processing: function(file) {
                if (file.previewElement) {
                    file.previewElement.classList.add("dz-processing");
                    if (file._removeLink) {
                        return file._removeLink.textContent = this.options.dictCancelUpload;
                    }
                }
            },
            processingmultiple: noop,
            uploadprogress: function(file, progress, bytesSent) {
                var node, _i, _len, _ref, _results;
                if (file.previewElement) {
                    _ref = file.previewElement.querySelectorAll("[data-dz-uploadprogress]");
                    _results = [];
                    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                        node = _ref[_i];
                        if (node.nodeName === 'PROGRESS') {
                            _results.push(node.value = progress);
                        } else {
                            _results.push(node.style.width = "" + progress + "%");
                        }
                    }
                    return _results;
                }
            },
            totaluploadprogress: noop,
            sending: noop,
            sendingmultiple: noop,
            success: function(file) {
                if (file.previewElement) {
                    return file.previewElement.classList.add("dz-success");
                }
            },
            successmultiple: noop,
            canceled: function(file) {
                return this.emit("error", file, "Upload canceled.");
            },
            canceledmultiple: noop,
            complete: function(file) {
                if (file._removeLink) {
                    file._removeLink.textContent = this.options.dictRemoveFile;
                }
                if (file.previewElement) {
                    return file.previewElement.classList.add("dz-complete");
                }
            },
            completemultiple: noop,
            maxfilesexceeded: noop,
            maxfilesreached: noop,
            queuecomplete: noop,
            addedfiles: noop,
            previewTemplate: "<div class=\"dz-preview dz-file-preview\">\n  <div class=\"dz-image\"><img data-dz-thumbnail /></div>\n  <div class=\"dz-details\">\n    <div class=\"dz-size\"><span data-dz-size></span></div>\n    <div class=\"dz-filename\"><span data-dz-name></span></div>\n  </div>\n  <div class=\"dz-progress\"><span class=\"dz-upload\" data-dz-uploadprogress></span></div>\n  <div class=\"dz-error-message\"><span data-dz-errormessage></span></div>\n  <div class=\"dz-success-mark\">\n    <svg width=\"54px\" height=\"54px\" viewBox=\"0 0 54 54\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:sketch=\"http://www.bohemiancoding.com/sketch/ns\">\n      <title>Check</title>\n      <defs></defs>\n      <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" sketch:type=\"MSPage\">\n        <path d=\"M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z\" id=\"Oval-2\" stroke-opacity=\"0.198794158\" stroke=\"#747474\" fill-opacity=\"0.816519475\" fill=\"#FFFFFF\" sketch:type=\"MSShapeGroup\"></path>\n      </g>\n    </svg>\n  </div>\n  <div class=\"dz-error-mark\">\n    <svg width=\"54px\" height=\"54px\" viewBox=\"0 0 54 54\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:sketch=\"http://www.bohemiancoding.com/sketch/ns\">\n      <title>Error</title>\n      <defs></defs>\n      <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" sketch:type=\"MSPage\">\n        <g id=\"Check-+-Oval-2\" sketch:type=\"MSLayerGroup\" stroke=\"#747474\" stroke-opacity=\"0.198794158\" fill=\"#FFFFFF\" fill-opacity=\"0.816519475\">\n          <path d=\"M32.6568542,29 L38.3106978,23.3461564 C39.8771021,21.7797521 39.8758057,19.2483887 38.3137085,17.6862915 C36.7547899,16.1273729 34.2176035,16.1255422 32.6538436,17.6893022 L27,23.3431458 L21.3461564,17.6893022 C19.7823965,16.1255422 17.2452101,16.1273729 15.6862915,17.6862915 C14.1241943,19.2483887 14.1228979,21.7797521 15.6893022,23.3461564 L21.3431458,29 L15.6893022,34.6538436 C14.1228979,36.2202479 14.1241943,38.7516113 15.6862915,40.3137085 C17.2452101,41.8726271 19.7823965,41.8744578 21.3461564,40.3106978 L27,34.6568542 L32.6538436,40.3106978 C34.2176035,41.8744578 36.7547899,41.8726271 38.3137085,40.3137085 C39.8758057,38.7516113 39.8771021,36.2202479 38.3106978,34.6538436 L32.6568542,29 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z\" id=\"Oval-2\" sketch:type=\"MSShapeGroup\"></path>\n        </g>\n      </g>\n    </svg>\n  </div>\n</div>"
        };

        extend = function() {
            var key, object, objects, target, val, _i, _len;
            target = arguments[0], objects = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
            for (_i = 0, _len = objects.length; _i < _len; _i++) {
                object = objects[_i];
                for (key in object) {
                    val = object[key];
                    target[key] = val;
                }
            }
            return target;
        };

        function Dropzone(element, options) {
            var elementOptions, fallback, _ref;
            this.element = element;
            this.version = Dropzone.version;
            this.defaultOptions.previewTemplate = this.defaultOptions.previewTemplate.replace(/\n*/g, "");
            this.clickableElements = [];
            this.listeners = [];
            this.files = [];
            if (typeof this.element === "string") {
                this.element = document.querySelector(this.element);
            }
            if (!(this.element && (this.element.nodeType != null))) {
                throw new Error("Invalid dropzone element.");
            }
            if (this.element.dropzone) {
                throw new Error("Dropzone already attached.");
            }
            Dropzone.instances.push(this);
            this.element.dropzone = this;
            elementOptions = (_ref = Dropzone.optionsForElement(this.element)) != null ? _ref : {};
            this.options = extend({}, this.defaultOptions, elementOptions, options != null ? options : {});
            if (this.options.forceFallback || !Dropzone.isBrowserSupported()) {
                return this.options.fallback.call(this);
            }
            if (this.options.url == null) {
                this.options.url = this.element.getAttribute("action");
            }
            if (!this.options.url) {
                throw new Error("No URL provided.");
            }
            if (this.options.acceptedFiles && this.options.acceptedMimeTypes) {
                throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");
            }
            if (this.options.acceptedMimeTypes) {
                this.options.acceptedFiles = this.options.acceptedMimeTypes;
                delete this.options.acceptedMimeTypes;
            }
            this.options.method = this.options.method.toUpperCase();
            if ((fallback = this.getExistingFallback()) && fallback.parentNode) {
                fallback.parentNode.removeChild(fallback);
            }
            if (this.options.previewsContainer !== false) {
                if (this.options.previewsContainer) {
                    this.previewsContainer = Dropzone.getElement(this.options.previewsContainer, "previewsContainer");
                } else {
                    this.previewsContainer = this.element;
                }
            }
            if (this.options.clickable) {
                if (this.options.clickable === true) {
                    this.clickableElements = [this.element];
                } else {
                    this.clickableElements = Dropzone.getElements(this.options.clickable, "clickable");
                }
            }
            this.init();
        }

        Dropzone.prototype.getAcceptedFiles = function() {
            var file, _i, _len, _ref, _results;
            _ref = this.files;
            _results = [];
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                file = _ref[_i];
                if (file.accepted) {
                    _results.push(file);
                }
            }
            return _results;
        };

        Dropzone.prototype.getRejectedFiles = function() {
            var file, _i, _len, _ref, _results;
            _ref = this.files;
            _results = [];
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                file = _ref[_i];
                if (!file.accepted) {
                    _results.push(file);
                }
            }
            return _results;
        };

        Dropzone.prototype.getFilesWithStatus = function(status) {
            var file, _i, _len, _ref, _results;
            _ref = this.files;
            _results = [];
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                file = _ref[_i];
                if (file.status === status) {
                    _results.push(file);
                }
            }
            return _results;
        };

        Dropzone.prototype.getQueuedFiles = function() {
            return this.getFilesWithStatus(Dropzone.QUEUED);
        };

        Dropzone.prototype.getUploadingFiles = function() {
            return this.getFilesWithStatus(Dropzone.UPLOADING);
        };

        Dropzone.prototype.getAddedFiles = function() {
            return this.getFilesWithStatus(Dropzone.ADDED);
        };

        Dropzone.prototype.getActiveFiles = function() {
            var file, _i, _len, _ref, _results;
            _ref = this.files;
            _results = [];
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                file = _ref[_i];
                if (file.status === Dropzone.UPLOADING || file.status === Dropzone.QUEUED) {
                    _results.push(file);
                }
            }
            return _results;
        };

        Dropzone.prototype.init = function() {
            var eventName, noPropagation, setupHiddenFileInput, _i, _len, _ref, _ref1;
            if (this.element.tagName === "form") {
                this.element.setAttribute("enctype", "multipart/form-data");
            }
            if (this.element.classList.contains("dropzone") && !this.element.querySelector(".dz-message")) {
                this.element.appendChild(Dropzone.createElement("<div class=\"dz-default dz-message\"><span>" + this.options.dictDefaultMessage + "</span></div>"));
            }
            if (this.clickableElements.length) {
                setupHiddenFileInput = (function(_this) {
                    return function() {
                        if (_this.hiddenFileInput) {
                            _this.hiddenFileInput.parentNode.removeChild(_this.hiddenFileInput);
                        }
                        _this.hiddenFileInput = document.createElement("input");
                        _this.hiddenFileInput.setAttribute("type", "file");
                        if ((_this.options.maxFiles == null) || _this.options.maxFiles > 1) {
                            _this.hiddenFileInput.setAttribute("multiple", "multiple");
                        }
                        _this.hiddenFileInput.className = "dz-hidden-input";
                        if (_this.options.acceptedFiles != null) {
                            _this.hiddenFileInput.setAttribute("accept", _this.options.acceptedFiles);
                        }
                        if (_this.options.capture != null) {
                            _this.hiddenFileInput.setAttribute("capture", _this.options.capture);
                        }
                        _this.hiddenFileInput.style.visibility = "hidden";
                        _this.hiddenFileInput.style.position = "absolute";
                        _this.hiddenFileInput.style.top = "0";
                        _this.hiddenFileInput.style.left = "0";
                        _this.hiddenFileInput.style.height = "0";
                        _this.hiddenFileInput.style.width = "0";
                        document.querySelector(_this.options.hiddenInputContainer).appendChild(_this.hiddenFileInput);
                        return _this.hiddenFileInput.addEventListener("change", function() {
                            var file, files, _i, _len;
                            files = _this.hiddenFileInput.files;
                            if (files.length) {
                                for (_i = 0, _len = files.length; _i < _len; _i++) {
                                    file = files[_i];
                                    _this.addFile(file);
                                }
                            }
                            _this.emit("addedfiles", files);
                            return setupHiddenFileInput();
                        });
                    };
                })(this);
                setupHiddenFileInput();
            }
            this.URL = (_ref = window.URL) != null ? _ref : window.webkitURL;
            _ref1 = this.events;
            for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
                eventName = _ref1[_i];
                this.on(eventName, this.options[eventName]);
            }
            this.on("uploadprogress", (function(_this) {
                return function() {
                    return _this.updateTotalUploadProgress();
                };
            })(this));
            this.on("removedfile", (function(_this) {
                return function() {
                    return _this.updateTotalUploadProgress();
                };
            })(this));
            this.on("canceled", (function(_this) {
                return function(file) {
                    return _this.emit("complete", file);
                };
            })(this));
            this.on("complete", (function(_this) {
                return function(file) {
                    if (_this.getAddedFiles().length === 0 && _this.getUploadingFiles().length === 0 && _this.getQueuedFiles().length === 0) {
                        return setTimeout((function() {
                            return _this.emit("queuecomplete");
                        }), 0);
                    }
                };
            })(this));
            noPropagation = function(e) {
                e.stopPropagation();
                if (e.preventDefault) {
                    return e.preventDefault();
                } else {
                    return e.returnValue = false;
                }
            };
            this.listeners = [
                {
                    element: this.element,
                    events: {
                        "dragstart": (function(_this) {
                            return function(e) {
                                return _this.emit("dragstart", e);
                            };
                        })(this),
                        "dragenter": (function(_this) {
                            return function(e) {
                                noPropagation(e);
                                return _this.emit("dragenter", e);
                            };
                        })(this),
                        "dragover": (function(_this) {
                            return function(e) {
                                var efct;
                                try {
                                    efct = e.dataTransfer.effectAllowed;
                                } catch (_error) {}
                                e.dataTransfer.dropEffect = 'move' === efct || 'linkMove' === efct ? 'move' : 'copy';
                                noPropagation(e);
                                return _this.emit("dragover", e);
                            };
                        })(this),
                        "dragleave": (function(_this) {
                            return function(e) {
                                return _this.emit("dragleave", e);
                            };
                        })(this),
                        "drop": (function(_this) {
                            return function(e) {
                                noPropagation(e);
                                return _this.drop(e);
                            };
                        })(this),
                        "dragend": (function(_this) {
                            return function(e) {
                                return _this.emit("dragend", e);
                            };
                        })(this)
                    }
                }
            ];
            this.clickableElements.forEach((function(_this) {
                return function(clickableElement) {
                    return _this.listeners.push({
                        element: clickableElement,
                        events: {
                            "click": function(evt) {
                                if ((clickableElement !== _this.element) || (evt.target === _this.element || Dropzone.elementInside(evt.target, _this.element.querySelector(".dz-message")))) {
                                    _this.hiddenFileInput.click();
                                }
                                return true;
                            }
                        }
                    });
                };
            })(this));
            this.enable();
            return this.options.init.call(this);
        };

        Dropzone.prototype.destroy = function() {
            var _ref;
            this.disable();
            this.removeAllFiles(true);
            if ((_ref = this.hiddenFileInput) != null ? _ref.parentNode : void 0) {
                this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput);
                this.hiddenFileInput = null;
            }
            delete this.element.dropzone;
            return Dropzone.instances.splice(Dropzone.instances.indexOf(this), 1);
        };

        Dropzone.prototype.updateTotalUploadProgress = function() {
            var activeFiles, file, totalBytes, totalBytesSent, totalUploadProgress, _i, _len, _ref;
            totalBytesSent = 0;
            totalBytes = 0;
            activeFiles = this.getActiveFiles();
            if (activeFiles.length) {
                _ref = this.getActiveFiles();
                for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                    file = _ref[_i];
                    totalBytesSent += file.upload.bytesSent;
                    totalBytes += file.upload.total;
                }
                totalUploadProgress = 100 * totalBytesSent / totalBytes;
            } else {
                totalUploadProgress = 100;
            }
            return this.emit("totaluploadprogress", totalUploadProgress, totalBytes, totalBytesSent);
        };

        Dropzone.prototype._getParamName = function(n) {
            if (typeof this.options.paramName === "function") {
                return this.options.paramName(n);
            } else {
                return "" + this.options.paramName + (this.options.uploadMultiple ? "[" + n + "]" : "");
            }
        };

        Dropzone.prototype.getFallbackForm = function() {
            var existingFallback, fields, fieldsString, form;
            if (existingFallback = this.getExistingFallback()) {
                return existingFallback;
            }
            fieldsString = "<div class=\"dz-fallback\">";
            if (this.options.dictFallbackText) {
                fieldsString += "<p>" + this.options.dictFallbackText + "</p>";
            }
            fieldsString += "<input type=\"file\" name=\"" + (this._getParamName(0)) + "\" " + (this.options.uploadMultiple ? 'multiple="multiple"' : void 0) + " /><input type=\"submit\" value=\"Upload!\"></div>";
            fields = Dropzone.createElement(fieldsString);
            if (this.element.tagName !== "FORM") {
                form = Dropzone.createElement("<form action=\"" + this.options.url + "\" enctype=\"multipart/form-data\" method=\"" + this.options.method + "\"></form>");
                form.appendChild(fields);
            } else {
                this.element.setAttribute("enctype", "multipart/form-data");
                this.element.setAttribute("method", this.options.method);
            }
            return form != null ? form : fields;
        };

        Dropzone.prototype.getExistingFallback = function() {
            var fallback, getFallback, tagName, _i, _len, _ref;
            getFallback = function(elements) {
                var el, _i, _len;
                for (_i = 0, _len = elements.length; _i < _len; _i++) {
                    el = elements[_i];
                    if (/(^| )fallback($| )/.test(el.className)) {
                        return el;
                    }
                }
            };
            _ref = ["div", "form"];
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                tagName = _ref[_i];
                if (fallback = getFallback(this.element.getElementsByTagName(tagName))) {
                    return fallback;
                }
            }
        };

        Dropzone.prototype.setupEventListeners = function() {
            var elementListeners, event, listener, _i, _len, _ref, _results;
            _ref = this.listeners;
            _results = [];
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                elementListeners = _ref[_i];
                _results.push((function() {
                    var _ref1, _results1;
                    _ref1 = elementListeners.events;
                    _results1 = [];
                    for (event in _ref1) {
                        listener = _ref1[event];
                        _results1.push(elementListeners.element.addEventListener(event, listener, false));
                    }
                    return _results1;
                })());
            }
            return _results;
        };

        Dropzone.prototype.removeEventListeners = function() {
            var elementListeners, event, listener, _i, _len, _ref, _results;
            _ref = this.listeners;
            _results = [];
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                elementListeners = _ref[_i];
                _results.push((function() {
                    var _ref1, _results1;
                    _ref1 = elementListeners.events;
                    _results1 = [];
                    for (event in _ref1) {
                        listener = _ref1[event];
                        _results1.push(elementListeners.element.removeEventListener(event, listener, false));
                    }
                    return _results1;
                })());
            }
            return _results;
        };

        Dropzone.prototype.disable = function() {
            var file, _i, _len, _ref, _results;
            this.clickableElements.forEach(function(element) {
                return element.classList.remove("dz-clickable");
            });
            this.removeEventListeners();
            _ref = this.files;
            _results = [];
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                file = _ref[_i];
                _results.push(this.cancelUpload(file));
            }
            return _results;
        };

        Dropzone.prototype.enable = function() {
            this.clickableElements.forEach(function(element) {
                return element.classList.add("dz-clickable");
            });
            return this.setupEventListeners();
        };

        Dropzone.prototype.filesize = function(size) {
            var cutoff, i, selectedSize, selectedUnit, unit, units, _i, _len;
            selectedSize = 0;
            selectedUnit = "b";
            if (size > 0) {
                units = ['TB', 'GB', 'MB', 'KB', 'b'];
                for (i = _i = 0, _len = units.length; _i < _len; i = ++_i) {
                    unit = units[i];
                    cutoff = Math.pow(this.options.filesizeBase, 4 - i) / 10;
                    if (size >= cutoff) {
                        selectedSize = size / Math.pow(this.options.filesizeBase, 4 - i);
                        selectedUnit = unit;
                        break;
                    }
                }
                selectedSize = Math.round(10 * selectedSize) / 10;
            }
            return "<strong>" + selectedSize + "</strong> " + selectedUnit;
        };

        Dropzone.prototype._updateMaxFilesReachedClass = function() {
            if ((this.options.maxFiles != null) && this.getAcceptedFiles().length >= this.options.maxFiles) {
                if (this.getAcceptedFiles().length === this.options.maxFiles) {
                    this.emit('maxfilesreached', this.files);
                }
                return this.element.classList.add("dz-max-files-reached");
            } else {
                return this.element.classList.remove("dz-max-files-reached");
            }
        };

        Dropzone.prototype.drop = function(e) {
            var files, items;
            if (!e.dataTransfer) {
                return;
            }
            this.emit("drop", e);
            files = e.dataTransfer.files;
            this.emit("addedfiles", files);
            if (files.length) {
                items = e.dataTransfer.items;
                if (items && items.length && (items[0].webkitGetAsEntry != null)) {
                    this._addFilesFromItems(items);
                } else {
                    this.handleFiles(files);
                }
            }
        };

        Dropzone.prototype.paste = function(e) {
            var items, _ref;
            if ((e != null ? (_ref = e.clipboardData) != null ? _ref.items : void 0 : void 0) == null) {
                return;
            }
            this.emit("paste", e);
            items = e.clipboardData.items;
            if (items.length) {
                return this._addFilesFromItems(items);
            }
        };

        Dropzone.prototype.handleFiles = function(files) {
            var file, _i, _len, _results;
            _results = [];
            for (_i = 0, _len = files.length; _i < _len; _i++) {
                file = files[_i];
                _results.push(this.addFile(file));
            }
            return _results;
        };

        Dropzone.prototype._addFilesFromItems = function(items) {
            var entry, item, _i, _len, _results;
            _results = [];
            for (_i = 0, _len = items.length; _i < _len; _i++) {
                item = items[_i];
                if ((item.webkitGetAsEntry != null) && (entry = item.webkitGetAsEntry())) {
                    if (entry.isFile) {
                        _results.push(this.addFile(item.getAsFile()));
                    } else if (entry.isDirectory) {
                        _results.push(this._addFilesFromDirectory(entry, entry.name));
                    } else {
                        _results.push(void 0);
                    }
                } else if (item.getAsFile != null) {
                    if ((item.kind == null) || item.kind === "file") {
                        _results.push(this.addFile(item.getAsFile()));
                    } else {
                        _results.push(void 0);
                    }
                } else {
                    _results.push(void 0);
                }
            }
            return _results;
        };

        Dropzone.prototype._addFilesFromDirectory = function(directory, path) {
            var dirReader, entriesReader;
            dirReader = directory.createReader();
            entriesReader = (function(_this) {
                return function(entries) {
                    var entry, _i, _len;
                    for (_i = 0, _len = entries.length; _i < _len; _i++) {
                        entry = entries[_i];
                        if (entry.isFile) {
                            entry.file(function(file) {
                                if (_this.options.ignoreHiddenFiles && file.name.substring(0, 1) === '.') {
                                    return;
                                }
                                file.fullPath = "" + path + "/" + file.name;
                                return _this.addFile(file);
                            });
                        } else if (entry.isDirectory) {
                            _this._addFilesFromDirectory(entry, "" + path + "/" + entry.name);
                        }
                    }
                };
            })(this);
            return dirReader.readEntries(entriesReader, function(error) {
                return typeof console !== "undefined" && console !== null ? typeof console.log === "function" ? console.log(error) : void 0 : void 0;
            });
        };

        Dropzone.prototype.accept = function(file, done) {
            if (file.size > this.options.maxFilesize * 1024 * 1024) {
                return done(this.options.dictFileTooBig.replace("{{filesize}}", Math.round(file.size / 1024 / 10.24) / 100).replace("{{maxFilesize}}", this.options.maxFilesize));
            } else if (!Dropzone.isValidFile(file, this.options.acceptedFiles)) {
                return done(this.options.dictInvalidFileType);
            } else if ((this.options.maxFiles != null) && this.getAcceptedFiles().length >= this.options.maxFiles) {
                done(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}", this.options.maxFiles));
                return this.emit("maxfilesexceeded", file);
            } else {
                return this.options.accept.call(this, file, done);
            }
        };

        Dropzone.prototype.addFile = function(file) {
            file.upload = {
                progress: 0,
                total: file.size,
                bytesSent: 0
            };
            this.files.push(file);
            file.status = Dropzone.ADDED;
            this.emit("addedfile", file);
            this._enqueueThumbnail(file);
            return this.accept(file, (function(_this) {
                return function(error) {
                    if (error) {
                        file.accepted = false;
                        _this._errorProcessing([file], error);
                    } else {
                        file.accepted = true;
                        if (_this.options.autoQueue) {
                            _this.enqueueFile(file);
                        }
                    }
                    return _this._updateMaxFilesReachedClass();
                };
            })(this));
        };

        Dropzone.prototype.enqueueFiles = function(files) {
            var file, _i, _len;
            for (_i = 0, _len = files.length; _i < _len; _i++) {
                file = files[_i];
                this.enqueueFile(file);
            }
            return null;
        };

        Dropzone.prototype.enqueueFile = function(file) {
            if (file.status === Dropzone.ADDED && file.accepted === true) {
                file.status = Dropzone.QUEUED;
                if (this.options.autoProcessQueue) {
                    return setTimeout(((function(_this) {
                        return function() {
                            return _this.processQueue();
                        };
                    })(this)), 0);
                }
            } else {
                throw new Error("This file can't be queued because it has already been processed or was rejected.");
            }
        };

        Dropzone.prototype._thumbnailQueue = [];

        Dropzone.prototype._processingThumbnail = false;

        Dropzone.prototype._enqueueThumbnail = function(file) {
            if (this.options.createImageThumbnails && file.type.match(/image.*/) && file.size <= this.options.maxThumbnailFilesize * 1024 * 1024) {
                this._thumbnailQueue.push(file);
                return setTimeout(((function(_this) {
                    return function() {
                        return _this._processThumbnailQueue();
                    };
                })(this)), 0);
            }
        };

        Dropzone.prototype._processThumbnailQueue = function() {
            if (this._processingThumbnail || this._thumbnailQueue.length === 0) {
                return;
            }
            this._processingThumbnail = true;
            return this.createThumbnail(this._thumbnailQueue.shift(), (function(_this) {
                return function() {
                    _this._processingThumbnail = false;
                    return _this._processThumbnailQueue();
                };
            })(this));
        };

        Dropzone.prototype.removeFile = function(file) {
            if (file.status === Dropzone.UPLOADING) {
                this.cancelUpload(file);
            }
            this.files = without(this.files, file);
            this.emit("removedfile", file);
            if (this.files.length === 0) {
                return this.emit("reset");
            }
        };

        Dropzone.prototype.removeAllFiles = function(cancelIfNecessary) {
            var file, _i, _len, _ref;
            if (cancelIfNecessary == null) {
                cancelIfNecessary = false;
            }
            _ref = this.files.slice();
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                file = _ref[_i];
                if (file.status !== Dropzone.UPLOADING || cancelIfNecessary) {
                    this.removeFile(file);
                }
            }
            return null;
        };

        Dropzone.prototype.createThumbnail = function(file, callback) {
            var fileReader;
            fileReader = new FileReader;
            fileReader.onload = (function(_this) {
                return function() {
                    if (file.type === "image/svg+xml") {
                        _this.emit("thumbnail", file, fileReader.result);
                        if (callback != null) {
                            callback();
                        }
                        return;
                    }
                    return _this.createThumbnailFromUrl(file, fileReader.result, callback);
                };
            })(this);
            return fileReader.readAsDataURL(file);
        };

        Dropzone.prototype.createThumbnailFromUrl = function(file, imageUrl, callback, crossOrigin) {
            var img;
            img = document.createElement("img");
            if (crossOrigin) {
                img.crossOrigin = crossOrigin;
            }
            img.onload = (function(_this) {
                return function() {
                    var canvas, ctx, resizeInfo, thumbnail, _ref, _ref1, _ref2, _ref3;
                    file.width = img.width;
                    file.height = img.height;
                    resizeInfo = _this.options.resize.call(_this, file);
                    if (resizeInfo.trgWidth == null) {
                        resizeInfo.trgWidth = resizeInfo.optWidth;
                    }
                    if (resizeInfo.trgHeight == null) {
                        resizeInfo.trgHeight = resizeInfo.optHeight;
                    }
                    canvas = document.createElement("canvas");
                    ctx = canvas.getContext("2d");
                    canvas.width = resizeInfo.trgWidth;
                    canvas.height = resizeInfo.trgHeight;
                    drawImageIOSFix(ctx, img, (_ref = resizeInfo.srcX) != null ? _ref : 0, (_ref1 = resizeInfo.srcY) != null ? _ref1 : 0, resizeInfo.srcWidth, resizeInfo.srcHeight, (_ref2 = resizeInfo.trgX) != null ? _ref2 : 0, (_ref3 = resizeInfo.trgY) != null ? _ref3 : 0, resizeInfo.trgWidth, resizeInfo.trgHeight);
                    thumbnail = canvas.toDataURL("image/png");
                    _this.emit("thumbnail", file, thumbnail);
                    if (callback != null) {
                        return callback();
                    }
                };
            })(this);
            if (callback != null) {
                img.onerror = callback;
            }
            return img.src = imageUrl;
        };

        Dropzone.prototype.processQueue = function() {
            var i, parallelUploads, processingLength, queuedFiles;
            parallelUploads = this.options.parallelUploads;
            processingLength = this.getUploadingFiles().length;
            i = processingLength;
            if (processingLength >= parallelUploads) {
                return;
            }
            queuedFiles = this.getQueuedFiles();
            if (!(queuedFiles.length > 0)) {
                return;
            }
            if (this.options.uploadMultiple) {
                return this.processFiles(queuedFiles.slice(0, parallelUploads - processingLength));
            } else {
                while (i < parallelUploads) {
                    if (!queuedFiles.length) {
                        return;
                    }
                    this.processFile(queuedFiles.shift());
                    i++;
                }
            }
        };

        Dropzone.prototype.processFile = function(file) {
            return this.processFiles([file]);
        };

        Dropzone.prototype.processFiles = function(files) {
            var file, _i, _len;
            for (_i = 0, _len = files.length; _i < _len; _i++) {
                file = files[_i];
                file.processing = true;
                file.status = Dropzone.UPLOADING;
                this.emit("processing", file);
            }
            if (this.options.uploadMultiple) {
                this.emit("processingmultiple", files);
            }
            return this.uploadFiles(files);
        };

        Dropzone.prototype._getFilesWithXhr = function(xhr) {
            var file, files;
            return files = (function() {
                var _i, _len, _ref, _results;
                _ref = this.files;
                _results = [];
                for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                    file = _ref[_i];
                    if (file.xhr === xhr) {
                        _results.push(file);
                    }
                }
                return _results;
            }).call(this);
        };

        Dropzone.prototype.cancelUpload = function(file) {
            var groupedFile, groupedFiles, _i, _j, _len, _len1, _ref;
            if (file.status === Dropzone.UPLOADING) {
                groupedFiles = this._getFilesWithXhr(file.xhr);
                for (_i = 0, _len = groupedFiles.length; _i < _len; _i++) {
                    groupedFile = groupedFiles[_i];
                    groupedFile.status = Dropzone.CANCELED;
                }
                file.xhr.abort();
                for (_j = 0, _len1 = groupedFiles.length; _j < _len1; _j++) {
                    groupedFile = groupedFiles[_j];
                    this.emit("canceled", groupedFile);
                }
                if (this.options.uploadMultiple) {
                    this.emit("canceledmultiple", groupedFiles);
                }
            } else if ((_ref = file.status) === Dropzone.ADDED || _ref === Dropzone.QUEUED) {
                file.status = Dropzone.CANCELED;
                this.emit("canceled", file);
                if (this.options.uploadMultiple) {
                    this.emit("canceledmultiple", [file]);
                }
            }
            if (this.options.autoProcessQueue) {
                return this.processQueue();
            }
        };

        resolveOption = function() {
            var args, option;
            option = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
            if (typeof option === 'function') {
                return option.apply(this, args);
            }
            return option;
        };

        Dropzone.prototype.uploadFile = function(file) {
            return this.uploadFiles([file]);
        };

        Dropzone.prototype.uploadFiles = function(files) {
            var file, formData, handleError, headerName, headerValue, headers, i, input, inputName, inputType, key, method, option, progressObj, response, updateProgress, url, value, xhr, _i, _j, _k, _l, _len, _len1, _len2, _len3, _m, _ref, _ref1, _ref2, _ref3, _ref4, _ref5;
            xhr = new XMLHttpRequest();
            for (_i = 0, _len = files.length; _i < _len; _i++) {
                file = files[_i];
                file.xhr = xhr;
            }
            method = resolveOption(this.options.method, files);
            url = resolveOption(this.options.url, files);
            xhr.open(method, url, true);
            xhr.withCredentials = !!this.options.withCredentials;
            response = null;
            handleError = (function(_this) {
                return function() {
                    var _j, _len1, _results;
                    _results = [];
                    for (_j = 0, _len1 = files.length; _j < _len1; _j++) {
                        file = files[_j];
                        _results.push(_this._errorProcessing(files, response || _this.options.dictResponseError.replace("{{statusCode}}", xhr.status), xhr));
                    }
                    return _results;
                };
            })(this);
            updateProgress = (function(_this) {
                return function(e) {
                    var allFilesFinished, progress, _j, _k, _l, _len1, _len2, _len3, _results;
                    if (e != null) {
                        progress = 100 * e.loaded / e.total;
                        for (_j = 0, _len1 = files.length; _j < _len1; _j++) {
                            file = files[_j];
                            file.upload = {
                                progress: progress,
                                total: e.total,
                                bytesSent: e.loaded
                            };
                        }
                    } else {
                        allFilesFinished = true;
                        progress = 100;
                        for (_k = 0, _len2 = files.length; _k < _len2; _k++) {
                            file = files[_k];
                            if (!(file.upload.progress === 100 && file.upload.bytesSent === file.upload.total)) {
                                allFilesFinished = false;
                            }
                            file.upload.progress = progress;
                            file.upload.bytesSent = file.upload.total;
                        }
                        if (allFilesFinished) {
                            return;
                        }
                    }
                    _results = [];
                    for (_l = 0, _len3 = files.length; _l < _len3; _l++) {
                        file = files[_l];
                        _results.push(_this.emit("uploadprogress", file, progress, file.upload.bytesSent));
                    }
                    return _results;
                };
            })(this);
            xhr.onload = (function(_this) {
                return function(e) {
                    var _ref;
                    if (files[0].status === Dropzone.CANCELED) {
                        return;
                    }
                    if (xhr.readyState !== 4) {
                        return;
                    }
                    response = xhr.responseText;
                    if (xhr.getResponseHeader("content-type") && ~xhr.getResponseHeader("content-type").indexOf("application/json")) {
                        try {
                            response = JSON.parse(response);
                        } catch (_error) {
                            e = _error;
                            response = "Invalid JSON response from server.";
                        }
                    }
                    updateProgress();
                    if (!((200 <= (_ref = xhr.status) && _ref < 300))) {
                        return handleError();
                    } else {
                        return _this._finished(files, response, e);
                    }
                };
            })(this);
            xhr.onerror = (function(_this) {
                return function() {
                    if (files[0].status === Dropzone.CANCELED) {
                        return;
                    }
                    return handleError();
                };
            })(this);
            progressObj = (_ref = xhr.upload) != null ? _ref : xhr;
            progressObj.onprogress = updateProgress;
            headers = {
                "Accept": "application/json",
                "Cache-Control": "no-cache",
                "X-Requested-With": "XMLHttpRequest"
            };
            if (this.options.headers) {
                extend(headers, this.options.headers);
            }
            for (headerName in headers) {
                headerValue = headers[headerName];
                if (headerValue) {
                    xhr.setRequestHeader(headerName, headerValue);
                }
            }
            formData = new FormData();
            if (this.options.params) {
                _ref1 = this.options.params;
                for (key in _ref1) {
                    value = _ref1[key];
                    formData.append(key, value);
                }
            }
            for (_j = 0, _len1 = files.length; _j < _len1; _j++) {
                file = files[_j];
                this.emit("sending", file, xhr, formData);
            }
            if (this.options.uploadMultiple) {
                this.emit("sendingmultiple", files, xhr, formData);
            }
            if (this.element.tagName === "FORM") {
                _ref2 = this.element.querySelectorAll("input, textarea, select, button");
                for (_k = 0, _len2 = _ref2.length; _k < _len2; _k++) {
                    input = _ref2[_k];
                    inputName = input.getAttribute("name");
                    inputType = input.getAttribute("type");
                    if (input.tagName === "SELECT" && input.hasAttribute("multiple")) {
                        _ref3 = input.options;
                        for (_l = 0, _len3 = _ref3.length; _l < _len3; _l++) {
                            option = _ref3[_l];
                            if (option.selected) {
                                formData.append(inputName, option.value);
                            }
                        }
                    } else if (!inputType || ((_ref4 = inputType.toLowerCase()) !== "checkbox" && _ref4 !== "radio") || input.checked) {
                        formData.append(inputName, input.value);
                    }
                }
            }
            for (i = _m = 0, _ref5 = files.length - 1; 0 <= _ref5 ? _m <= _ref5 : _m >= _ref5; i = 0 <= _ref5 ? ++_m : --_m) {
                formData.append(this._getParamName(i), files[i], files[i].name);
            }
            return this.submitRequest(xhr, formData, files);
        };

        Dropzone.prototype.submitRequest = function(xhr, formData, files) {
            return xhr.send(formData);
        };

        Dropzone.prototype._finished = function(files, responseText, e) {
            var file, _i, _len;
            for (_i = 0, _len = files.length; _i < _len; _i++) {
                file = files[_i];
                file.status = Dropzone.SUCCESS;
                this.emit("success", file, responseText, e);
                this.emit("complete", file);
            }
            if (this.options.uploadMultiple) {
                this.emit("successmultiple", files, responseText, e);
                this.emit("completemultiple", files);
            }
            if (this.options.autoProcessQueue) {
                return this.processQueue();
            }
        };

        Dropzone.prototype._errorProcessing = function(files, message, xhr) {
            var file, _i, _len;
            for (_i = 0, _len = files.length; _i < _len; _i++) {
                file = files[_i];
                file.status = Dropzone.ERROR;
                this.emit("error", file, message, xhr);
                this.emit("complete", file);
            }
            if (this.options.uploadMultiple) {
                this.emit("errormultiple", files, message, xhr);
                this.emit("completemultiple", files);
            }
            if (this.options.autoProcessQueue) {
                return this.processQueue();
            }
        };

        return Dropzone;

    })(Emitter);

    Dropzone.version = "4.2.0";

    Dropzone.options = {};

    Dropzone.optionsForElement = function(element) {
        if (element.getAttribute("id")) {
            return Dropzone.options[camelize(element.getAttribute("id"))];
        } else {
            return void 0;
        }
    };

    Dropzone.instances = [];

    Dropzone.forElement = function(element) {
        if (typeof element === "string") {
            element = document.querySelector(element);
        }
        if ((element != null ? element.dropzone : void 0) == null) {
            throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");
        }
        return element.dropzone;
    };

    Dropzone.autoDiscover = true;

    Dropzone.discover = function() {
        var checkElements, dropzone, dropzones, _i, _len, _results;
        if (document.querySelectorAll) {
            dropzones = document.querySelectorAll(".dropzone");
        } else {
            dropzones = [];
            checkElements = function(elements) {
                var el, _i, _len, _results;
                _results = [];
                for (_i = 0, _len = elements.length; _i < _len; _i++) {
                    el = elements[_i];
                    if (/(^| )dropzone($| )/.test(el.className)) {
                        _results.push(dropzones.push(el));
                    } else {
                        _results.push(void 0);
                    }
                }
                return _results;
            };
            checkElements(document.getElementsByTagName("div"));
            checkElements(document.getElementsByTagName("form"));
        }
        _results = [];
        for (_i = 0, _len = dropzones.length; _i < _len; _i++) {
            dropzone = dropzones[_i];
            if (Dropzone.optionsForElement(dropzone) !== false) {
                _results.push(new Dropzone(dropzone));
            } else {
                _results.push(void 0);
            }
        }
        return _results;
    };

    Dropzone.blacklistedBrowsers = [/opera.*Macintosh.*version\/12/i];

    Dropzone.isBrowserSupported = function() {
        var capableBrowser, regex, _i, _len, _ref;
        capableBrowser = true;
        if (window.File && window.FileReader && window.FileList && window.Blob && window.FormData && document.querySelector) {
            if (!("classList" in document.createElement("a"))) {
                capableBrowser = false;
            } else {
                _ref = Dropzone.blacklistedBrowsers;
                for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                    regex = _ref[_i];
                    if (regex.test(navigator.userAgent)) {
                        capableBrowser = false;
                        continue;
                    }
                }
            }
        } else {
            capableBrowser = false;
        }
        return capableBrowser;
    };

    without = function(list, rejectedItem) {
        var item, _i, _len, _results;
        _results = [];
        for (_i = 0, _len = list.length; _i < _len; _i++) {
            item = list[_i];
            if (item !== rejectedItem) {
                _results.push(item);
            }
        }
        return _results;
    };

    camelize = function(str) {
        return str.replace(/[\-_](\w)/g, function(match) {
            return match.charAt(1).toUpperCase();
        });
    };

    Dropzone.createElement = function(string) {
        var div;
        div = document.createElement("div");
        div.innerHTML = string;
        return div.childNodes[0];
    };

    Dropzone.elementInside = function(element, container) {
        if (element === container) {
            return true;
        }
        while (element = element.parentNode) {
            if (element === container) {
                return true;
            }
        }
        return false;
    };

    Dropzone.getElement = function(el, name) {
        var element;
        if (typeof el === "string") {
            element = document.querySelector(el);
        } else if (el.nodeType != null) {
            element = el;
        }
        if (element == null) {
            throw new Error("Invalid `" + name + "` option provided. Please provide a CSS selector or a plain HTML element.");
        }
        return element;
    };

    Dropzone.getElements = function(els, name) {
        var e, el, elements, _i, _j, _len, _len1, _ref;
        if (els instanceof Array) {
            elements = [];
            try {
                for (_i = 0, _len = els.length; _i < _len; _i++) {
                    el = els[_i];
                    elements.push(this.getElement(el, name));
                }
            } catch (_error) {
                e = _error;
                elements = null;
            }
        } else if (typeof els === "string") {
            elements = [];
            _ref = document.querySelectorAll(els);
            for (_j = 0, _len1 = _ref.length; _j < _len1; _j++) {
                el = _ref[_j];
                elements.push(el);
            }
        } else if (els.nodeType != null) {
            elements = [els];
        }
        if (!((elements != null) && elements.length)) {
            throw new Error("Invalid `" + name + "` option provided. Please provide a CSS selector, a plain HTML element or a list of those.");
        }
        return elements;
    };

    Dropzone.confirm = function(question, accepted, rejected) {
        if (window.confirm(question)) {
            return accepted();
        } else if (rejected != null) {
            return rejected();
        }
    };

    Dropzone.isValidFile = function(file, acceptedFiles) {
        var baseMimeType, mimeType, validType, _i, _len;
        if (!acceptedFiles) {
            return true;
        }
        acceptedFiles = acceptedFiles.split(",");
        mimeType = file.type;
        baseMimeType = mimeType.replace(/\/.*$/, "");
        for (_i = 0, _len = acceptedFiles.length; _i < _len; _i++) {
            validType = acceptedFiles[_i];
            validType = validType.trim();
            if (validType.charAt(0) === ".") {
                if (file.name.toLowerCase().indexOf(validType.toLowerCase(), file.name.length - validType.length) !== -1) {
                    return true;
                }
            } else if (/\/\*$/.test(validType)) {
                if (baseMimeType === validType.replace(/\/.*$/, "")) {
                    return true;
                }
            } else {
                if (mimeType === validType) {
                    return true;
                }
            }
        }
        return false;
    };

    if (typeof jQuery !== "undefined" && jQuery !== null) {
        jQuery.fn.dropzone = function(options) {
            return this.each(function() {
                return new Dropzone(this, options);
            });
        };
    }

    if (typeof module !== "undefined" && module !== null) {
        module.exports = Dropzone;
    } else {
        window.Dropzone = Dropzone;
    }

    Dropzone.ADDED = "added";

    Dropzone.QUEUED = "queued";

    Dropzone.ACCEPTED = Dropzone.QUEUED;

    Dropzone.UPLOADING = "uploading";

    Dropzone.PROCESSING = Dropzone.UPLOADING;

    Dropzone.CANCELED = "canceled";

    Dropzone.ERROR = "error";

    Dropzone.SUCCESS = "success";


    /*

     Bugfix for iOS 6 and 7
     Source: http://stackoverflow.com/questions/11929099/html5-canvas-drawimage-ratio-bug-ios
     based on the work of https://github.com/stomita/ios-imagefile-megapixel
     */

    detectVerticalSquash = function(img) {
        var alpha, canvas, ctx, data, ey, ih, iw, py, ratio, sy;
        iw = img.naturalWidth;
        ih = img.naturalHeight;
        canvas = document.createElement("canvas");
        canvas.width = 1;
        canvas.height = ih;
        ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        data = ctx.getImageData(0, 0, 1, ih).data;
        sy = 0;
        ey = ih;
        py = ih;
        while (py > sy) {
            alpha = data[(py - 1) * 4 + 3];
            if (alpha === 0) {
                ey = py;
            } else {
                sy = py;
            }
            py = (ey + sy) >> 1;
        }
        ratio = py / ih;
        if (ratio === 0) {
            return 1;
        } else {
            return ratio;
        }
    };

    drawImageIOSFix = function(ctx, img, sx, sy, sw, sh, dx, dy, dw, dh) {
        var vertSquashRatio;
        vertSquashRatio = detectVerticalSquash(img);
        return ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh / vertSquashRatio);
    };


    /*
     * contentloaded.js
     *
     * Author: Diego Perini (diego.perini at gmail.com)
     * Summary: cross-browser wrapper for DOMContentLoaded
     * Updated: 20101020
     * License: MIT
     * Version: 1.2
     *
     * URL:
     * http://javascript.nwbox.com/ContentLoaded/
     * http://javascript.nwbox.com/ContentLoaded/MIT-LICENSE
     */

    contentLoaded = function(win, fn) {
        var add, doc, done, init, poll, pre, rem, root, top;
        done = false;
        top = true;
        doc = win.document;
        root = doc.documentElement;
        add = (doc.addEventListener ? "addEventListener" : "attachEvent");
        rem = (doc.addEventListener ? "removeEventListener" : "detachEvent");
        pre = (doc.addEventListener ? "" : "on");
        init = function(e) {
            if (e.type === "readystatechange" && doc.readyState !== "complete") {
                return;
            }
            (e.type === "load" ? win : doc)[rem](pre + e.type, init, false);
            if (!done && (done = true)) {
                return fn.call(win, e.type || e);
            }
        };
        poll = function() {
            var e;
            try {
                root.doScroll("left");
            } catch (_error) {
                e = _error;
                setTimeout(poll, 50);
                return;
            }
            return init("poll");
        };
        if (doc.readyState !== "complete") {
            if (doc.createEventObject && root.doScroll) {
                try {
                    top = !win.frameElement;
                } catch (_error) {}
                if (top) {
                    poll();
                }
            }
            doc[add](pre + "DOMContentLoaded", init, false);
            doc[add](pre + "readystatechange", init, false);
            return win[add](pre + "load", init, false);
        }
    };

    Dropzone._autoDiscoverFunction = function() {
        if (Dropzone.autoDiscover) {
            return Dropzone.discover();
        }
    };

    contentLoaded(window, Dropzone._autoDiscoverFunction);

}).call(this);

Dropzone.autoDiscover = false;

$('#filezone').dropzone({
    dictDefaultMessage: "Drop images here, max 5 at a time.",
    paramName: "picture",
    maxFilesize: 5,
    uploadMultiple: true,
    maxFiles: 5,
    parallelUploads: 5,
    addRemoveLinks: true,
    acceptedFiles: 'image/*',
    init: function () {
        this.on("successmultiple", function (file, response) {
            window.location = response.url;
            this.removeAllFiles()
        });
        this.on("drop", function (file) {
            document.getElementsByClassName("progress")[0].classList.remove('hidden');
        });
    }
});

function showFeedbackForm() {
    swal({
        title: "Feedback",
        text: "Please send me your feedback:",
        type: "input",
        showCancelButton: true,
        closeOnConfirm: false,
        animation: "slide-from-top",
        inputPlaceholder: "Write something"
    }, function (inputValue) {
        if (inputValue === false) return false;
        if (inputValue === "") {
            swal.showInputError("You need to write something!");
            return false
        }
        swal({
            title: "Please wait.",
            text: "Sending your feedback...",
            type: 'info',
            showConfirmButton: false
        });
        var feedbackForm = document.getElementById('feedback-form');
        var feedbackField = document.getElementById('feedback');
        feedbackField.value = inputValue;
        feedbackForm.submit();
    });
}
//# sourceMappingURL=all.js.map
