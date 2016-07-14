/*! jQuery v1.7.2 jquery.com | jquery.org/license */
(function(a,b){function cy(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cu(a){if(!cj[a]){var b=c.body,d=f("<"+a+">").appendTo(b),e=d.css("display");d.remove();if(e==="none"||e===""){ck||(ck=c.createElement("iframe"),ck.frameBorder=ck.width=ck.height=0),b.appendChild(ck);if(!cl||!ck.createElement)cl=(ck.contentWindow||ck.contentDocument).document,cl.write((f.support.boxModel?"<!doctype html>":"")+"<html><body>"),cl.close();d=cl.createElement(a),cl.body.appendChild(d),e=f.css(d,"display"),b.removeChild(ck)}cj[a]=e}return cj[a]}function ct(a,b){var c={};f.each(cp.concat.apply([],cp.slice(0,b)),function(){c[this]=a});return c}function cs(){cq=b}function cr(){setTimeout(cs,0);return cq=f.now()}function ci(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function ch(){try{return new a.XMLHttpRequest}catch(b){}}function cb(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h=="string"&&(e[h.toLowerCase()]=a.converters[h]);l=k,k=d[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=e[m]||e["* "+k];if(!n){p=b;for(o in e){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=e[j[1]+" "+k];if(p){o=e[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&f.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function ca(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function b_(a,b,c,d){if(f.isArray(b))f.each(b,function(b,e){c||bD.test(a)?d(a,e):b_(a+"["+(typeof e=="object"?b:"")+"]",e,c,d)});else if(!c&&f.type(b)==="object")for(var e in b)b_(a+"["+e+"]",b[e],c,d);else d(a,b)}function b$(a,c){var d,e,g=f.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((g[d]?a:e||(e={}))[d]=c[d]);e&&f.extend(!0,a,e)}function bZ(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bS,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=bZ(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=bZ(a,c,d,e,"*",g));return l}function bY(a){return function(b,c){typeof b!="string"&&(c=b,b="*");if(f.isFunction(c)){var d=b.toLowerCase().split(bO),e=0,g=d.length,h,i,j;for(;e<g;e++)h=d[e],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bB(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=b==="width"?1:0,g=4;if(d>0){if(c!=="border")for(;e<g;e+=2)c||(d-=parseFloat(f.css(a,"padding"+bx[e]))||0),c==="margin"?d+=parseFloat(f.css(a,c+bx[e]))||0:d-=parseFloat(f.css(a,"border"+bx[e]+"Width"))||0;return d+"px"}d=by(a,b);if(d<0||d==null)d=a.style[b];if(bt.test(d))return d;d=parseFloat(d)||0;if(c)for(;e<g;e+=2)d+=parseFloat(f.css(a,"padding"+bx[e]))||0,c!=="padding"&&(d+=parseFloat(f.css(a,"border"+bx[e]+"Width"))||0),c==="margin"&&(d+=parseFloat(f.css(a,c+bx[e]))||0);return d+"px"}function bo(a){var b=c.createElement("div");bh.appendChild(b),b.innerHTML=a.outerHTML;return b.firstChild}function bn(a){var b=(a.nodeName||"").toLowerCase();b==="input"?bm(a):b!=="script"&&typeof a.getElementsByTagName!="undefined"&&f.grep(a.getElementsByTagName("input"),bm)}function bm(a){if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked}function bl(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bk(a,b){var c;b.nodeType===1&&(b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase(),c==="object"?b.outerHTML=a.outerHTML:c!=="input"||a.type!=="checkbox"&&a.type!=="radio"?c==="option"?b.selected=a.defaultSelected:c==="input"||c==="textarea"?b.defaultValue=a.defaultValue:c==="script"&&b.text!==a.text&&(b.text=a.text):(a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value)),b.removeAttribute(f.expando),b.removeAttribute("_submit_attached"),b.removeAttribute("_change_attached"))}function bj(a,b){if(b.nodeType===1&&!!f.hasData(a)){var c,d,e,g=f._data(a),h=f._data(b,g),i=g.events;if(i){delete h.handle,h.events={};for(c in i)for(d=0,e=i[c].length;d<e;d++)f.event.add(b,c,i[c][d])}h.data&&(h.data=f.extend({},h.data))}}function bi(a,b){return f.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function U(a){var b=V.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function T(a,b,c){b=b||0;if(f.isFunction(b))return f.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return f.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=f.grep(a,function(a){return a.nodeType===1});if(O.test(b))return f.filter(b,d,!c);b=f.filter(b,d)}return f.grep(a,function(a,d){return f.inArray(a,b)>=0===c})}function S(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function K(){return!0}function J(){return!1}function n(a,b,c){var d=b+"defer",e=b+"queue",g=b+"mark",h=f._data(a,d);h&&(c==="queue"||!f._data(a,e))&&(c==="mark"||!f._data(a,g))&&setTimeout(function(){!f._data(a,e)&&!f._data(a,g)&&(f.removeData(a,d,!0),h.fire())},0)}function m(a){for(var b in a){if(b==="data"&&f.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function l(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(k,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:f.isNumeric(d)?+d:j.test(d)?f.parseJSON(d):d}catch(g){}f.data(a,c,d)}else d=b}return d}function h(a){var b=g[a]={},c,d;a=a.split(/\s+/);for(c=0,d=a.length;c<d;c++)b[a[c]]=!0;return b}var c=a.document,d=a.navigator,e=a.location,f=function(){function J(){if(!e.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(J,1);return}e.ready()}}var e=function(a,b){return new e.fn.init(a,b,h)},f=a.jQuery,g=a.$,h,i=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,j=/\S/,k=/^\s+/,l=/\s+$/,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,n=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=/-([a-z]|[0-9])/ig,w=/^-ms-/,x=function(a,b){return(b+"").toUpperCase()},y=d.userAgent,z,A,B,C=Object.prototype.toString,D=Object.prototype.hasOwnProperty,E=Array.prototype.push,F=Array.prototype.slice,G=String.prototype.trim,H=Array.prototype.indexOf,I={};e.fn=e.prototype={constructor:e,init:function(a,d,f){var g,h,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!d&&c.body){this.context=c,this[0]=c.body,this.selector=a,this.length=1;return this}if(typeof a=="string"){a.charAt(0)!=="<"||a.charAt(a.length-1)!==">"||a.length<3?g=i.exec(a):g=[null,a,null];if(g&&(g[1]||!d)){if(g[1]){d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=m.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(j.fragment):j.fragment).childNodes);return e.merge(this,a)}h=c.getElementById(g[2]);if(h&&h.parentNode){if(h.id!==g[2])return f.find(a);this.length=1,this[0]=h}this.context=c,this.selector=a;return this}return!d||d.jquery?(d||f).find(a):this.constructor(d).find(a)}if(e.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return e.makeArray(a,this)},selector:"",jquery:"1.7.2",length:0,size:function(){return this.length},toArray:function(){return F.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=this.constructor();e.isArray(a)?E.apply(d,a):e.merge(d,a),d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")");return d},each:function(a,b){return e.each(this,a,b)},ready:function(a){e.bindReady(),A.add(a);return this},eq:function(a){a=+a;return a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(F.apply(this,arguments),"slice",F.call(arguments).join(","))},map:function(a){return this.pushStack(e.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:E,sort:[].sort,splice:[].splice},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i=="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!="object"&&!e.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){d=i[c],f=a[c];if(i===f)continue;l&&f&&(e.isPlainObject(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&&e.isArray(d)?d:[]):h=d&&e.isPlainObject(d)?d:{},i[c]=e.extend(l,h,f)):f!==b&&(i[c]=f)}return i},e.extend({noConflict:function(b){a.$===e&&(a.$=g),b&&a.jQuery===e&&(a.jQuery=f);return e},isReady:!1,readyWait:1,holdReady:function(a){a?e.readyWait++:e.ready(!0)},ready:function(a){if(a===!0&&!--e.readyWait||a!==!0&&!e.isReady){if(!c.body)return setTimeout(e.ready,1);e.isReady=!0;if(a!==!0&&--e.readyWait>0)return;A.fireWith(c,[e]),e.fn.trigger&&e(c).trigger("ready").off("ready")}},bindReady:function(){if(!A){A=e.Callbacks("once memory");if(c.readyState==="complete")return setTimeout(e.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",B,!1),a.addEventListener("load",e.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",B),a.attachEvent("onload",e.ready);var b=!1;try{b=a.frameElement==null}catch(d){}c.documentElement.doScroll&&b&&J()}}},isFunction:function(a){return e.type(a)==="function"},isArray:Array.isArray||function(a){return e.type(a)==="array"},isWindow:function(a){return a!=null&&a==a.window},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):I[C.call(a)]||"object"},isPlainObject:function(a){if(!a||e.type(a)!=="object"||a.nodeType||e.isWindow(a))return!1;try{if(a.constructor&&!D.call(a,"constructor")&&!D.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||D.call(a,d)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw new Error(a)},parseJSON:function(b){if(typeof b!="string"||!b)return null;b=e.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(n.test(b.replace(o,"@").replace(p,"]").replace(q,"")))return(new Function("return "+b))();e.error("Invalid JSON: "+b)},parseXML:function(c){if(typeof c!="string"||!c)return null;var d,f;try{a.DOMParser?(f=new DOMParser,d=f.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(g){d=b}(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&e.error("Invalid XML: "+c);return d},noop:function(){},globalEval:function(b){b&&j.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(w,"ms-").replace(v,x)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var f,g=0,h=a.length,i=h===b||e.isFunction(a);if(d){if(i){for(f in a)if(c.apply(a[f],d)===!1)break}else for(;g<h;)if(c.apply(a[g++],d)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(;g<h;)if(c.call(a[g],g,a[g++])===!1)break;return a},trim:G?function(a){return a==null?"":G.call(a)}:function(a){return a==null?"":(a+"").replace(k,"").replace(l,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var d=e.type(a);a.length==null||d==="string"||d==="function"||d==="regexp"||e.isWindow(a)?E.call(c,a):e.merge(c,a)}return c},inArray:function(a,b,c){var d;if(b){if(H)return H.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length=="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,c,d){var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j-1]||j===0||e.isArray(a));if(k)for(;i<j;i++)f=c(a[i],i,d),f!=null&&(h[h.length]=f);else for(g in a)f=c(a[g],g,d),f!=null&&(h[h.length]=f);return h.concat.apply([],h)},guid:1,proxy:function(a,c){if(typeof c=="string"){var d=a[c];c=a,a=d}if(!e.isFunction(a))return b;var f=F.call(arguments,2),g=function(){return a.apply(c,f.concat(F.call(arguments)))};g.guid=a.guid=a.guid||g.guid||e.guid++;return g},access:function(a,c,d,f,g,h,i){var j,k=d==null,l=0,m=a.length;if(d&&typeof d=="object"){for(l in d)e.access(a,c,l,d[l],1,h,f);g=1}else if(f!==b){j=i===b&&e.isFunction(f),k&&(j?(j=c,c=function(a,b,c){return j.call(e(a),c)}):(c.call(a,f),c=null));if(c)for(;l<m;l++)c(a[l],d,j?f.call(a[l],l,c(a[l],d)):f,i);g=1}return g?a:k?c.call(a):m?c(a[0],d):h},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=r.exec(a)||s.exec(a)||t.exec(a)||a.indexOf("compatible")<0&&u.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,f){f&&f instanceof e&&!(f instanceof a)&&(f=a(f));return e.fn.init.call(this,d,f,b)},a.fn.init.prototype=a.fn;var b=a(c);return a},browser:{}}),e.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){I["[object "+b+"]"]=b.toLowerCase()}),z=e.uaMatch(y),z.browser&&(e.browser[z.browser]=!0,e.browser.version=z.version),e.browser.webkit&&(e.browser.safari=!0),j.test(" ")&&(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/),h=e(c),c.addEventListener?B=function(){c.removeEventListener("DOMContentLoaded",B,!1),e.ready()}:c.attachEvent&&(B=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",B),e.ready())});return e}(),g={};f.Callbacks=function(a){a=a?g[a]||h(a):{};var c=[],d=[],e,i,j,k,l,m,n=function(b){var d,e,g,h,i;for(d=0,e=b.length;d<e;d++)g=b[d],h=f.type(g),h==="array"?n(g):h==="function"&&(!a.unique||!p.has(g))&&c.push(g)},o=function(b,f){f=f||[],e=!a.memory||[b,f],i=!0,j=!0,m=k||0,k=0,l=c.length;for(;c&&m<l;m++)if(c[m].apply(b,f)===!1&&a.stopOnFalse){e=!0;break}j=!1,c&&(a.once?e===!0?p.disable():c=[]:d&&d.length&&(e=d.shift(),p.fireWith(e[0],e[1])))},p={add:function(){if(c){var a=c.length;n(arguments),j?l=c.length:e&&e!==!0&&(k=a,o(e[0],e[1]))}return this},remove:function(){if(c){var b=arguments,d=0,e=b.length;for(;d<e;d++)for(var f=0;f<c.length;f++)if(b[d]===c[f]){j&&f<=l&&(l--,f<=m&&m--),c.splice(f--,1);if(a.unique)break}}return this},has:function(a){if(c){var b=0,d=c.length;for(;b<d;b++)if(a===c[b])return!0}return!1},empty:function(){c=[];return this},disable:function(){c=d=e=b;return this},disabled:function(){return!c},lock:function(){d=b,(!e||e===!0)&&p.disable();return this},locked:function(){return!d},fireWith:function(b,c){d&&(j?a.once||d.push([b,c]):(!a.once||!e)&&o(b,c));return this},fire:function(){p.fireWith(this,arguments);return this},fired:function(){return!!i}};return p};var i=[].slice;f.extend({Deferred:function(a){var b=f.Callbacks("once memory"),c=f.Callbacks("once memory"),d=f.Callbacks("memory"),e="pending",g={resolve:b,reject:c,notify:d},h={done:b.add,fail:c.add,progress:d.add,state:function(){return e},isResolved:b.fired,isRejected:c.fired,then:function(a,b,c){i.done(a).fail(b).progress(c);return this},always:function(){i.done.apply(i,arguments).fail.apply(i,arguments);return this},pipe:function(a,b,c){return f.Deferred(function(d){f.each({done:[a,"resolve"],fail:[b,"reject"],progress:[c,"notify"]},function(a,b){var c=b[0],e=b[1],g;f.isFunction(c)?i[a](function(){g=c.apply(this,arguments),g&&f.isFunction(g.promise)?g.promise().then(d.resolve,d.reject,d.notify):d[e+"With"](this===i?d:this,[g])}):i[a](d[e])})}).promise()},promise:function(a){if(a==null)a=h;else for(var b in h)a[b]=h[b];return a}},i=h.promise({}),j;for(j in g)i[j]=g[j].fire,i[j+"With"]=g[j].fireWith;i.done(function(){e="resolved"},c.disable,d.lock).fail(function(){e="rejected"},b.disable,d.lock),a&&a.call(i,i);return i},when:function(a){function m(a){return function(b){e[a]=arguments.length>1?i.call(arguments,0):b,j.notifyWith(k,e)}}function l(a){return function(c){b[a]=arguments.length>1?i.call(arguments,0):c,--g||j.resolveWith(j,b)}}var b=i.call(arguments,0),c=0,d=b.length,e=Array(d),g=d,h=d,j=d<=1&&a&&f.isFunction(a.promise)?a:f.Deferred(),k=j.promise();if(d>1){for(;c<d;c++)b[c]&&b[c].promise&&f.isFunction(b[c].promise)?b[c].promise().then(l(c),j.reject,m(c)):--g;g||j.resolveWith(j,b)}else j!==a&&j.resolveWith(j,d?[a]:[]);return k}}),f.support=function(){var b,d,e,g,h,i,j,k,l,m,n,o,p=c.createElement("div"),q=c.documentElement;p.setAttribute("className","t"),p.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",d=p.getElementsByTagName("*"),e=p.getElementsByTagName("a")[0];if(!d||!d.length||!e)return{};g=c.createElement("select"),h=g.appendChild(c.createElement("option")),i=p.getElementsByTagName("input")[0],b={leadingWhitespace:p.firstChild.nodeType===3,tbody:!p.getElementsByTagName("tbody").length,htmlSerialize:!!p.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:e.getAttribute("href")==="/a",opacity:/^0.55/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,checkOn:i.value==="on",optSelected:h.selected,getSetAttribute:p.className!=="t",enctype:!!c.createElement("form").enctype,html5Clone:c.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,pixelMargin:!0},f.boxModel=b.boxModel=c.compatMode==="CSS1Compat",i.checked=!0,b.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,b.optDisabled=!h.disabled;try{delete p.test}catch(r){b.deleteExpando=!1}!p.addEventListener&&p.attachEvent&&p.fireEvent&&(p.attachEvent("onclick",function(){b.noCloneEvent=!1}),p.cloneNode(!0).fireEvent("onclick")),i=c.createElement("input"),i.value="t",i.setAttribute("type","radio"),b.radioValue=i.value==="t",i.setAttribute("checked","checked"),i.setAttribute("name","t"),p.appendChild(i),j=c.createDocumentFragment(),j.appendChild(p.lastChild),b.checkClone=j.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=i.checked,j.removeChild(i),j.appendChild(p);if(p.attachEvent)for(n in{submit:1,change:1,focusin:1})m="on"+n,o=m in p,o||(p.setAttribute(m,"return;"),o=typeof p[m]=="function"),b[n+"Bubbles"]=o;j.removeChild(p),j=g=h=p=i=null,f(function(){var d,e,g,h,i,j,l,m,n,q,r,s,t,u=c.getElementsByTagName("body")[0];!u||(m=1,t="padding:0;margin:0;border:",r="position:absolute;top:0;left:0;width:1px;height:1px;",s=t+"0;visibility:hidden;",n="style='"+r+t+"5px solid #000;",q="<div "+n+"display:block;'><div style='"+t+"0;display:block;overflow:hidden;'></div></div>"+"<table "+n+"' cellpadding='0' cellspacing='0'>"+"<tr><td></td></tr></table>",d=c.createElement("div"),d.style.cssText=s+"width:0;height:0;position:static;top:0;margin-top:"+m+"px",u.insertBefore(d,u.firstChild),p=c.createElement("div"),d.appendChild(p),p.innerHTML="<table><tr><td style='"+t+"0;display:none'></td><td>t</td></tr></table>",k=p.getElementsByTagName("td"),o=k[0].offsetHeight===0,k[0].style.display="",k[1].style.display="none",b.reliableHiddenOffsets=o&&k[0].offsetHeight===0,a.getComputedStyle&&(p.innerHTML="",l=c.createElement("div"),l.style.width="0",l.style.marginRight="0",p.style.width="2px",p.appendChild(l),b.reliableMarginRight=(parseInt((a.getComputedStyle(l,null)||{marginRight:0}).marginRight,10)||0)===0),typeof p.style.zoom!="undefined"&&(p.innerHTML="",p.style.width=p.style.padding="1px",p.style.border=0,p.style.overflow="hidden",p.style.display="inline",p.style.zoom=1,b.inlineBlockNeedsLayout=p.offsetWidth===3,p.style.display="block",p.style.overflow="visible",p.innerHTML="<div style='width:5px;'></div>",b.shrinkWrapBlocks=p.offsetWidth!==3),p.style.cssText=r+s,p.innerHTML=q,e=p.firstChild,g=e.firstChild,i=e.nextSibling.firstChild.firstChild,j={doesNotAddBorder:g.offsetTop!==5,doesAddBorderForTableAndCells:i.offsetTop===5},g.style.position="fixed",g.style.top="20px",j.fixedPosition=g.offsetTop===20||g.offsetTop===15,g.style.position=g.style.top="",e.style.overflow="hidden",e.style.position="relative",j.subtractsBorderForOverflowNotVisible=g.offsetTop===-5,j.doesNotIncludeMarginInBodyOffset=u.offsetTop!==m,a.getComputedStyle&&(p.style.marginTop="1%",b.pixelMargin=(a.getComputedStyle(p,null)||{marginTop:0}).marginTop!=="1%"),typeof d.style.zoom!="undefined"&&(d.style.zoom=1),u.removeChild(d),l=p=d=null,f.extend(b,j))});return b}();var j=/^(?:\{.*\}|\[.*\])$/,k=/([A-Z])/g;f.extend({cache:{},uuid:0,expando:"jQuery"+(f.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?f.cache[a[f.expando]]:a[f.expando];return!!a&&!m(a)},data:function(a,c,d,e){if(!!f.acceptData(a)){var g,h,i,j=f.expando,k=typeof c=="string",l=a.nodeType,m=l?f.cache:a,n=l?a[j]:a[j]&&j,o=c==="events";if((!n||!m[n]||!o&&!e&&!m[n].data)&&k&&d===b)return;n||(l?a[j]=n=++f.uuid:n=j),m[n]||(m[n]={},l||(m[n].toJSON=f.noop));if(typeof c=="object"||typeof c=="function")e?m[n]=f.extend(m[n],c):m[n].data=f.extend(m[n].data,c);g=h=m[n],e||(h.data||(h.data={}),h=h.data),d!==b&&(h[f.camelCase(c)]=d);if(o&&!h[c])return g.events;k?(i=h[c],i==null&&(i=h[f.camelCase(c)])):i=h;return i}},removeData:function(a,b,c){if(!!f.acceptData(a)){var d,e,g,h=f.expando,i=a.nodeType,j=i?f.cache:a,k=i?a[h]:h;if(!j[k])return;if(b){d=c?j[k]:j[k].data;if(d){f.isArray(b)||(b in d?b=[b]:(b=f.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,g=b.length;e<g;e++)delete d[b[e]];if(!(c?m:f.isEmptyObject)(d))return}}if(!c){delete j[k].data;if(!m(j[k]))return}f.support.deleteExpando||!j.setInterval?delete j[k]:j[k]=null,i&&(f.support.deleteExpando?delete a[h]:a.removeAttribute?a.removeAttribute(h):a[h]=null)}},_data:function(a,b,c){return f.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),f.fn.extend({data:function(a,c){var d,e,g,h,i,j=this[0],k=0,m=null;if(a===b){if(this.length){m=f.data(j);if(j.nodeType===1&&!f._data(j,"parsedAttrs")){g=j.attributes;for(i=g.length;k<i;k++)h=g[k].name,h.indexOf("data-")===0&&(h=f.camelCase(h.substring(5)),l(j,h,m[h]));f._data(j,"parsedAttrs",!0)}}return m}if(typeof a=="object")return this.each(function(){f.data(this,a)});d=a.split(".",2),d[1]=d[1]?"."+d[1]:"",e=d[1]+"!";return f.access(this,function(c){if(c===b){m=this.triggerHandler("getData"+e,[d[0]]),m===b&&j&&(m=f.data(j,a),m=l(j,a,m));return m===b&&d[1]?this.data(d[0]):m}d[1]=c,this.each(function(){var b=f(this);b.triggerHandler("setData"+e,d),f.data(this,a,c),b.triggerHandler("changeData"+e,d)})},null,c,arguments.length>1,null,!1)},removeData:function(a){return this.each(function(){f.removeData(this,a)})}}),f.extend({_mark:function(a,b){a&&(b=(b||"fx")+"mark",f._data(a,b,(f._data(a,b)||0)+1))},_unmark:function(a,b,c){a!==!0&&(c=b,b=a,a=!1);if(b){c=c||"fx";var d=c+"mark",e=a?0:(f._data(b,d)||1)-1;e?f._data(b,d,e):(f.removeData(b,d,!0),n(b,c,"mark"))}},queue:function(a,b,c){var d;if(a){b=(b||"fx")+"queue",d=f._data(a,b),c&&(!d||f.isArray(c)?d=f._data(a,b,f.makeArray(c)):d.push(c));return d||[]}},dequeue:function(a,b){b=b||"fx";var c=f.queue(a,b),d=c.shift(),e={};d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),f._data(a,b+".run",e),d.call(a,function(){f.dequeue(a,b)},e)),c.length||(f.removeData(a,b+"queue "+b+".run",!0),n(a,b,"queue"))}}),f.fn.extend({queue:function(a,c){var d=2;typeof a!="string"&&(c=a,a="fx",d--);if(arguments.length<d)return f.queue(this[0],a);return c===b?this:this.each(function(){var b=f.queue(this,a,c);a==="fx"&&b[0]!=="inprogress"&&f.dequeue(this,a)})},dequeue:function(a){return this.each(function(){f.dequeue(this,a)})},delay:function(a,b){a=f.fx?f.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function m(){--h||d.resolveWith(e,[e])}typeof a!="string"&&(c=a,a=b),a=a||"fx";var d=f.Deferred(),e=this,g=e.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;while(g--)if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&&f.data(e[g],i,f.Callbacks("once memory"),!0))h++,l.add(m);m();return d.promise(c)}});var o=/[\n\t\r]/g,p=/\s+/,q=/\r/g,r=/^(?:button|input)$/i,s=/^(?:button|input|object|select|textarea)$/i,t=/^a(?:rea)?$/i,u=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,v=f.support.getSetAttribute,w,x,y;f.fn.extend({attr:function(a,b){return f.access(this,f.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)})},prop:function(a,b){return f.access(this,f.prop,a,b,arguments.length>1)},removeProp:function(a){a=f.propFix[a]||a;return this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,g,h,i;if(f.isFunction(a))return this.each(function(b){f(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(p);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{g=" "+e.className+" ";for(h=0,i=b.length;h<i;h++)~g.indexOf(" "+b[h]+" ")||(g+=b[h]+" ");e.className=f.trim(g)}}}return this},removeClass:function(a){var c,d,e,g,h,i,j;if(f.isFunction(a))return this.each(function(b){f(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(p);for(d=0,e=this.length;d<e;d++){g=this[d];if(g.nodeType===1&&g.className)if(a){h=(" "+g.className+" ").replace(o," ");for(i=0,j=c.length;i<j;i++)h=h.replace(" "+c[i]+" "," ");g.className=f.trim(h)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";if(f.isFunction(a))return this.each(function(c){f(this).toggleClass(a.call(this,c,this.className,b),b)});return this.each(function(){if(c==="string"){var e,g=0,h=f(this),i=b,j=a.split(p);while(e=j[g++])i=d?i:!h.hasClass(e),h[i?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&f._data(this,"__className__",this.className),this.className=this.className||a===!1?"":f._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(o," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e,g=this[0];{if(!!arguments.length){e=f.isFunction(a);return this.each(function(d){var g=f(this),h;if(this.nodeType===1){e?h=a.call(this,d,g.val()):h=a,h==null?h="":typeof h=="number"?h+="":f.isArray(h)&&(h=f.map(h,function(a){return a==null?"":a+""})),c=f.valHooks[this.type]||f.valHooks[this.nodeName.toLowerCase()];if(!c||!("set"in c)||c.set(this,h,"value")===b)this.value=h}})}if(g){c=f.valHooks[g.type]||f.valHooks[g.nodeName.toLowerCase()];if(c&&"get"in c&&(d=c.get(g,"value"))!==b)return d;d=g.value;return typeof d=="string"?d.replace(q,""):d==null?"":d}}}}),f.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,g=a.selectedIndex,h=[],i=a.options,j=a.type==="select-one";if(g<0)return null;c=j?g:0,d=j?g+1:i.length;for(;c<d;c++){e=i[c];if(e.selected&&(f.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!f.nodeName(e.parentNode,"optgroup"))){b=f(e).val();if(j)return b;h.push(b)}}if(j&&!h.length&&i.length)return f(i[g]).val();return h},set:function(a,b){var c=f.makeArray(b);f(a).find("option").each(function(){this.selected=f.inArray(f(this).val(),c)>=0}),c.length||(a.selectedIndex=-1);return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,d,e){var g,h,i,j=a.nodeType;if(!!a&&j!==3&&j!==8&&j!==2){if(e&&c in f.attrFn)return f(a)[c](d);if(typeof a.getAttribute=="undefined")return f.prop(a,c,d);i=j!==1||!f.isXMLDoc(a),i&&(c=c.toLowerCase(),h=f.attrHooks[c]||(u.test(c)?x:w));if(d!==b){if(d===null){f.removeAttr(a,c);return}if(h&&"set"in h&&i&&(g=h.set(a,d,c))!==b)return g;a.setAttribute(c,""+d);return d}if(h&&"get"in h&&i&&(g=h.get(a,c))!==null)return g;g=a.getAttribute(c);return g===null?b:g}},removeAttr:function(a,b){var c,d,e,g,h,i=0;if(b&&a.nodeType===1){d=b.toLowerCase().split(p),g=d.length;for(;i<g;i++)e=d[i],e&&(c=f.propFix[e]||e,h=u.test(e),h||f.attr(a,e,""),a.removeAttribute(v?e:c),h&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(r.test(a.nodeName)&&a.parentNode)f.error("type property can't be changed");else if(!f.support.radioValue&&b==="radio"&&f.nodeName(a,"input")){var c=a.value;a.setAttribute("type",b),c&&(a.value=c);return b}}},value:{get:function(a,b){if(w&&f.nodeName(a,"button"))return w.get(a,b);return b in a?a.value:null},set:function(a,b,c){if(w&&f.nodeName(a,"button"))return w.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,g,h,i=a.nodeType;if(!!a&&i!==3&&i!==8&&i!==2){h=i!==1||!f.isXMLDoc(a),h&&(c=f.propFix[c]||c,g=f.propHooks[c]);return d!==b?g&&"set"in g&&(e=g.set(a,d,c))!==b?e:a[c]=d:g&&"get"in g&&(e=g.get(a,c))!==null?e:a[c]}},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):s.test(a.nodeName)||t.test(a.nodeName)&&a.href?0:b}}}}),f.attrHooks.tabindex=f.propHooks.tabIndex,x={get:function(a,c){var d,e=f.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase()));return c}},v||(y={name:!0,id:!0,coords:!0},w=f.valHooks.button={get:function(a,c){var d;d=a.getAttributeNode(c);return d&&(y[c]?d.nodeValue!=="":d.specified)?d.nodeValue:b},set:function(a,b,d){var e=a.getAttributeNode(d);e||(e=c.createAttribute(d),a.setAttributeNode(e));return e.nodeValue=b+""}},f.attrHooks.tabindex.set=w.set,f.each(["width","height"],function(a,b){f.attrHooks[b]=f.extend(f.attrHooks[b],{set:function(a,c){if(c===""){a.setAttribute(b,"auto");return c}}})}),f.attrHooks.contenteditable={get:w.get,set:function(a,b,c){b===""&&(b="false"),w.set(a,b,c)}}),f.support.hrefNormalized||f.each(["href","src","width","height"],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),f.support.style||(f.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{get:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex);return null}})),f.support.enctype||(f.propFix.enctype="encoding"),f.support.checkOn||f.each(["radio","checkbox"],function(){f.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]=f.extend(f.valHooks[this],{set:function(a,b){if(f.isArray(b))return a.checked=f.inArray(f(a).val(),b)>=0}})});var z=/^(?:textarea|input|select)$/i,A=/^([^\.]*)?(?:\.(.+))?$/,B=/(?:^|\s)hover(\.\S+)?\b/,C=/^key/,D=/^(?:mouse|contextmenu)|click/,E=/^(?:focusinfocus|focusoutblur)$/,F=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,G=function(
a){var b=F.exec(a);b&&(b[1]=(b[1]||"").toLowerCase(),b[3]=b[3]&&new RegExp("(?:^|\\s)"+b[3]+"(?:\\s|$)"));return b},H=function(a,b){var c=a.attributes||{};return(!b[1]||a.nodeName.toLowerCase()===b[1])&&(!b[2]||(c.id||{}).value===b[2])&&(!b[3]||b[3].test((c["class"]||{}).value))},I=function(a){return f.event.special.hover?a:a.replace(B,"mouseenter$1 mouseleave$1")};f.event={add:function(a,c,d,e,g){var h,i,j,k,l,m,n,o,p,q,r,s;if(!(a.nodeType===3||a.nodeType===8||!c||!d||!(h=f._data(a)))){d.handler&&(p=d,d=p.handler,g=p.selector),d.guid||(d.guid=f.guid++),j=h.events,j||(h.events=j={}),i=h.handle,i||(h.handle=i=function(a){return typeof f!="undefined"&&(!a||f.event.triggered!==a.type)?f.event.dispatch.apply(i.elem,arguments):b},i.elem=a),c=f.trim(I(c)).split(" ");for(k=0;k<c.length;k++){l=A.exec(c[k])||[],m=l[1],n=(l[2]||"").split(".").sort(),s=f.event.special[m]||{},m=(g?s.delegateType:s.bindType)||m,s=f.event.special[m]||{},o=f.extend({type:m,origType:l[1],data:e,handler:d,guid:d.guid,selector:g,quick:g&&G(g),namespace:n.join(".")},p),r=j[m];if(!r){r=j[m]=[],r.delegateCount=0;if(!s.setup||s.setup.call(a,e,n,i)===!1)a.addEventListener?a.addEventListener(m,i,!1):a.attachEvent&&a.attachEvent("on"+m,i)}s.add&&(s.add.call(a,o),o.handler.guid||(o.handler.guid=d.guid)),g?r.splice(r.delegateCount++,0,o):r.push(o),f.event.global[m]=!0}a=null}},global:{},remove:function(a,b,c,d,e){var g=f.hasData(a)&&f._data(a),h,i,j,k,l,m,n,o,p,q,r,s;if(!!g&&!!(o=g.events)){b=f.trim(I(b||"")).split(" ");for(h=0;h<b.length;h++){i=A.exec(b[h])||[],j=k=i[1],l=i[2];if(!j){for(j in o)f.event.remove(a,j+b[h],c,d,!0);continue}p=f.event.special[j]||{},j=(d?p.delegateType:p.bindType)||j,r=o[j]||[],m=r.length,l=l?new RegExp("(^|\\.)"+l.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;for(n=0;n<r.length;n++)s=r[n],(e||k===s.origType)&&(!c||c.guid===s.guid)&&(!l||l.test(s.namespace))&&(!d||d===s.selector||d==="**"&&s.selector)&&(r.splice(n--,1),s.selector&&r.delegateCount--,p.remove&&p.remove.call(a,s));r.length===0&&m!==r.length&&((!p.teardown||p.teardown.call(a,l)===!1)&&f.removeEvent(a,j,g.handle),delete o[j])}f.isEmptyObject(o)&&(q=g.handle,q&&(q.elem=null),f.removeData(a,["events","handle"],!0))}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){if(!e||e.nodeType!==3&&e.nodeType!==8){var h=c.type||c,i=[],j,k,l,m,n,o,p,q,r,s;if(E.test(h+f.event.triggered))return;h.indexOf("!")>=0&&(h=h.slice(0,-1),k=!0),h.indexOf(".")>=0&&(i=h.split("."),h=i.shift(),i.sort());if((!e||f.event.customEvent[h])&&!f.event.global[h])return;c=typeof c=="object"?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.isTrigger=!0,c.exclusive=k,c.namespace=i.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$)"):null,o=h.indexOf(":")<0?"on"+h:"";if(!e){j=f.cache;for(l in j)j[l].events&&j[l].events[h]&&f.event.trigger(c,d,j[l].handle.elem,!0);return}c.result=b,c.target||(c.target=e),d=d!=null?f.makeArray(d):[],d.unshift(c),p=f.event.special[h]||{};if(p.trigger&&p.trigger.apply(e,d)===!1)return;r=[[e,p.bindType||h]];if(!g&&!p.noBubble&&!f.isWindow(e)){s=p.delegateType||h,m=E.test(s+h)?e:e.parentNode,n=null;for(;m;m=m.parentNode)r.push([m,s]),n=m;n&&n===e.ownerDocument&&r.push([n.defaultView||n.parentWindow||a,s])}for(l=0;l<r.length&&!c.isPropagationStopped();l++)m=r[l][0],c.type=r[l][1],q=(f._data(m,"events")||{})[c.type]&&f._data(m,"handle"),q&&q.apply(m,d),q=o&&m[o],q&&f.acceptData(m)&&q.apply(m,d)===!1&&c.preventDefault();c.type=h,!g&&!c.isDefaultPrevented()&&(!p._default||p._default.apply(e.ownerDocument,d)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData(e)&&o&&e[h]&&(h!=="focus"&&h!=="blur"||c.target.offsetWidth!==0)&&!f.isWindow(e)&&(n=e[o],n&&(e[o]=null),f.event.triggered=h,e[h](),f.event.triggered=b,n&&(e[o]=n));return c.result}},dispatch:function(c){c=f.event.fix(c||a.event);var d=(f._data(this,"events")||{})[c.type]||[],e=d.delegateCount,g=[].slice.call(arguments,0),h=!c.exclusive&&!c.namespace,i=f.event.special[c.type]||{},j=[],k,l,m,n,o,p,q,r,s,t,u;g[0]=c,c.delegateTarget=this;if(!i.preDispatch||i.preDispatch.call(this,c)!==!1){if(e&&(!c.button||c.type!=="click")){n=f(this),n.context=this.ownerDocument||this;for(m=c.target;m!=this;m=m.parentNode||this)if(m.disabled!==!0){p={},r=[],n[0]=m;for(k=0;k<e;k++)s=d[k],t=s.selector,p[t]===b&&(p[t]=s.quick?H(m,s.quick):n.is(t)),p[t]&&r.push(s);r.length&&j.push({elem:m,matches:r})}}d.length>e&&j.push({elem:this,matches:d.slice(e)});for(k=0;k<j.length&&!c.isPropagationStopped();k++){q=j[k],c.currentTarget=q.elem;for(l=0;l<q.matches.length&&!c.isImmediatePropagationStopped();l++){s=q.matches[l];if(h||!c.namespace&&!s.namespace||c.namespace_re&&c.namespace_re.test(s.namespace))c.data=s.data,c.handleObj=s,o=((f.event.special[s.origType]||{}).handle||s.handler).apply(q.elem,g),o!==b&&(c.result=o,o===!1&&(c.preventDefault(),c.stopPropagation()))}}i.postDispatch&&i.postDispatch.call(this,c);return c.result}},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode);return a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,d){var e,f,g,h=d.button,i=d.fromElement;a.pageX==null&&d.clientX!=null&&(e=a.target.ownerDocument||c,f=e.documentElement,g=e.body,a.pageX=d.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=d.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?d.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0);return a}},fix:function(a){if(a[f.expando])return a;var d,e,g=a,h=f.event.fixHooks[a.type]||{},i=h.props?this.props.concat(h.props):this.props;a=f.Event(g);for(d=i.length;d;)e=i[--d],a[e]=g[e];a.target||(a.target=g.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey===b&&(a.metaKey=a.ctrlKey);return h.filter?h.filter(a,g):a},special:{ready:{setup:f.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){f.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=f.extend(new f.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?f.event.trigger(e,null,b):f.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},f.event.handle=f.event.dispatch,f.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},f.Event=function(a,b){if(!(this instanceof f.Event))return new f.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?K:J):this.type=a,b&&f.extend(this,b),this.timeStamp=a&&a.timeStamp||f.now(),this[f.expando]=!0},f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=K;var a=this.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=K;var a=this.originalEvent;!a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=K,this.stopPropagation()},isDefaultPrevented:J,isPropagationStopped:J,isImmediatePropagationStopped:J},f.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){f.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c=this,d=a.relatedTarget,e=a.handleObj,g=e.selector,h;if(!d||d!==c&&!f.contains(c,d))a.type=e.origType,h=e.handler.apply(this,arguments),a.type=b;return h}}}),f.support.submitBubbles||(f.event.special.submit={setup:function(){if(f.nodeName(this,"form"))return!1;f.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=f.nodeName(c,"input")||f.nodeName(c,"button")?c.form:b;d&&!d._submit_attached&&(f.event.add(d,"submit._submit",function(a){a._submit_bubble=!0}),d._submit_attached=!0)})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&f.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){if(f.nodeName(this,"form"))return!1;f.event.remove(this,"._submit")}}),f.support.changeBubbles||(f.event.special.change={setup:function(){if(z.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")f.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),f.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1,f.event.simulate("change",this,a,!0))});return!1}f.event.add(this,"beforeactivate._change",function(a){var b=a.target;z.test(b.nodeName)&&!b._change_attached&&(f.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&f.event.simulate("change",this.parentNode,a,!0)}),b._change_attached=!0)})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){f.event.remove(this,"._change");return z.test(this.nodeName)}}),f.support.focusinBubbles||f.each({focus:"focusin",blur:"focusout"},function(a,b){var d=0,e=function(a){f.event.simulate(b,a.target,f.event.fix(a),!0)};f.event.special[b]={setup:function(){d++===0&&c.addEventListener(a,e,!0)},teardown:function(){--d===0&&c.removeEventListener(a,e,!0)}}}),f.fn.extend({on:function(a,c,d,e,g){var h,i;if(typeof a=="object"){typeof c!="string"&&(d=d||c,c=b);for(i in a)this.on(i,c,d,a[i],g);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=J;else if(!e)return this;g===1&&(h=e,e=function(a){f().off(a);return h.apply(this,arguments)},e.guid=h.guid||(h.guid=f.guid++));return this.each(function(){f.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,c,d){if(a&&a.preventDefault&&a.handleObj){var e=a.handleObj;f(a.delegateTarget).off(e.namespace?e.origType+"."+e.namespace:e.origType,e.selector,e.handler);return this}if(typeof a=="object"){for(var g in a)this.off(g,c,a[g]);return this}if(c===!1||typeof c=="function")d=c,c=b;d===!1&&(d=J);return this.each(function(){f.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){f(this.context).on(a,this.selector,b,c);return this},die:function(a,b){f(this.context).off(a,this.selector||"**",b);return this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length==1?this.off(a,"**"):this.off(b,a,c)},trigger:function(a,b){return this.each(function(){f.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return f.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||f.guid++,d=0,e=function(c){var e=(f._data(this,"lastToggle"+a.guid)||0)%d;f._data(this,"lastToggle"+a.guid,e+1),c.preventDefault();return b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){f.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.on(b,null,a,c):this.trigger(b)},f.attrFn&&(f.attrFn[b]=!0),C.test(b)&&(f.event.fixHooks[b]=f.event.keyHooks),D.test(b)&&(f.event.fixHooks[b]=f.event.mouseHooks)}),function(){function x(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}if(j.nodeType===1){g||(j[d]=c,j.sizset=h);if(typeof b!="string"){if(j===b){k=!0;break}}else if(m.filter(b,[j]).length>0){k=j;break}}j=j[a]}e[h]=k}}}function w(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}j.nodeType===1&&!g&&(j[d]=c,j.sizset=h);if(j.nodeName.toLowerCase()===b){k=j;break}j=j[a]}e[h]=k}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d="sizcache"+(Math.random()+"").replace(".",""),e=0,g=Object.prototype.toString,h=!1,i=!0,j=/\\/g,k=/\r\n/g,l=/\W/;[0,0].sort(function(){i=!1;return 0});var m=function(b,d,e,f){e=e||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!="string")return e;var i,j,k,l,n,q,r,t,u=!0,v=m.isXML(d),w=[],x=b;do{a.exec(""),i=a.exec(x);if(i){x=i[3],w.push(i[1]);if(i[2]){l=i[3];break}}}while(i);if(w.length>1&&p.exec(b))if(w.length===2&&o.relative[w[0]])j=y(w[0]+w[1],d,f);else{j=o.relative[w[0]]?[d]:m(w.shift(),d);while(w.length)b=w.shift(),o.relative[b]&&(b+=w.shift()),j=y(b,j,f)}else{!f&&w.length>1&&d.nodeType===9&&!v&&o.match.ID.test(w[0])&&!o.match.ID.test(w[w.length-1])&&(n=m.find(w.shift(),d,v),d=n.expr?m.filter(n.expr,n.set)[0]:n.set[0]);if(d){n=f?{expr:w.pop(),set:s(f)}:m.find(w.pop(),w.length===1&&(w[0]==="~"||w[0]==="+")&&d.parentNode?d.parentNode:d,v),j=n.expr?m.filter(n.expr,n.set):n.set,w.length>0?k=s(j):u=!1;while(w.length)q=w.pop(),r=q,o.relative[q]?r=w.pop():q="",r==null&&(r=d),o.relative[q](k,r,v)}else k=w=[]}k||(k=j),k||m.error(q||b);if(g.call(k)==="[object Array]")if(!u)e.push.apply(e,k);else if(d&&d.nodeType===1)for(t=0;k[t]!=null;t++)k[t]&&(k[t]===!0||k[t].nodeType===1&&m.contains(d,k[t]))&&e.push(j[t]);else for(t=0;k[t]!=null;t++)k[t]&&k[t].nodeType===1&&e.push(j[t]);else s(k,e);l&&(m(l,h,e,f),m.uniqueSort(e));return e};m.uniqueSort=function(a){if(u){h=i,a.sort(u);if(h)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},m.matches=function(a,b){return m(a,null,null,b)},m.matchesSelector=function(a,b){return m(b,null,null,[a]).length>0},m.find=function(a,b,c){var d,e,f,g,h,i;if(!a)return[];for(e=0,f=o.order.length;e<f;e++){h=o.order[e];if(g=o.leftMatch[h].exec(a)){i=g[1],g.splice(1,1);if(i.substr(i.length-1)!=="\\"){g[1]=(g[1]||"").replace(j,""),d=o.find[h](g,b,c);if(d!=null){a=a.replace(o.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},m.filter=function(a,c,d,e){var f,g,h,i,j,k,l,n,p,q=a,r=[],s=c,t=c&&c[0]&&m.isXML(c[0]);while(a&&c.length){for(h in o.filter)if((f=o.leftMatch[h].exec(a))!=null&&f[2]){k=o.filter[h],l=f[1],g=!1,f.splice(1,1);if(l.substr(l.length-1)==="\\")continue;s===r&&(r=[]);if(o.preFilter[h]){f=o.preFilter[h](f,s,d,r,e,t);if(!f)g=i=!0;else if(f===!0)continue}if(f)for(n=0;(j=s[n])!=null;n++)j&&(i=k(j,f,n,s),p=e^i,d&&i!=null?p?g=!0:s[n]=!1:p&&(r.push(j),g=!0));if(i!==b){d||(s=r),a=a.replace(o.match[h],"");if(!g)return[];break}}if(a===q)if(g==null)m.error(a);else break;q=a}return s},m.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)};var n=m.getText=function(a){var b,c,d=a.nodeType,e="";if(d){if(d===1||d===9||d===11){if(typeof a.textContent=="string")return a.textContent;if(typeof a.innerText=="string")return a.innerText.replace(k,"");for(a=a.firstChild;a;a=a.nextSibling)e+=n(a)}else if(d===3||d===4)return a.nodeValue}else for(b=0;c=a[b];b++)c.nodeType!==8&&(e+=n(c));return e},o=m.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b=="string",d=c&&!l.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1);a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&m.filter(b,a,!0)},">":function(a,b){var c,d=typeof b=="string",e=0,f=a.length;if(d&&!l.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&m.filter(b,a,!0)}},"":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("parentNode",b,f,a,d,c)},"~":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("previousSibling",b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(j,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(j,"")},TAG:function(a,b){return a[1].replace(j,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||m.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&m.error(a[0]);a[0]=e++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(j,"");!f&&o.attrMap[g]&&(a[1]=o.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(j,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=m(b[3],null,null,c);else{var g=m.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(o.match.POS.test(b[0])||o.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!m(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=o.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||n([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}m.error(e)},CHILD:function(a,b){var c,e,f,g,h,i,j,k=b[1],l=a;switch(k){case"only":case"first":while(l=l.previousSibling)if(l.nodeType===1)return!1;if(k==="first")return!0;l=a;case"last":while(l=l.nextSibling)if(l.nodeType===1)return!1;return!0;case"nth":c=b[2],e=b[3];if(c===1&&e===0)return!0;f=b[0],g=a.parentNode;if(g&&(g[d]!==f||!a.nodeIndex)){i=0;for(l=g.firstChild;l;l=l.nextSibling)l.nodeType===1&&(l.nodeIndex=++i);g[d]=f}j=a.nodeIndex-e;return c===0?j===0:j%c===0&&j/c>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||!!a.nodeName&&a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=m.attr?m.attr(a,c):o.attrHandle[c]?o.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":!f&&m.attr?d!=null:f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=o.setFilters[e];if(f)return f(a,c,b,d)}}},p=o.match.POS,q=function(a,b){return"\\"+(b-0+1)};for(var r in o.match)o.match[r]=new RegExp(o.match[r].source+/(?![^\[]*\])(?![^\(]*\))/.source),o.leftMatch[r]=new RegExp(/(^(?:.|\r|\n)*?)/.source+o.match[r].source.replace(/\\(\d+)/g,q));o.match.globalPOS=p;var s=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(t){s=function(a,b){var c=0,d=b||[];if(g.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length=="number")for(var e=a.length;c<e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var u,v;c.documentElement.compareDocumentPosition?u=function(a,b){if(a===b){h=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(u=function(a,b){if(a===b){h=!0;return 0}if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,i=b.parentNode,j=g;if(g===i)return v(a,b);if(!g)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return v(e[k],f[k]);return k===c?v(a,f[k],-1):v(e[k],b,1)},v=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(o.find.ID=function(a,c,d){if(typeof c.getElementById!="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},o.filter.ID=function(a,b){var c=typeof a.getAttributeNode!="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(o.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(o.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=m,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){m=function(b,e,f,g){e=e||c;if(!g&&!m.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return s(e.getElementsByTagName(b),f);if(h[2]&&o.find.CLASS&&e.getElementsByClassName)return s(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return s([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return s([],f);if(i.id===h[3])return s([i],f)}try{return s(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var k=e,l=e.getAttribute("id"),n=l||d,p=e.parentNode,q=/^\s*[+~]/.test(b);l?n=n.replace(/'/g,"\\$&"):e.setAttribute("id",n),q&&p&&(e=e.parentNode);try{if(!q||p)return s(e.querySelectorAll("[id='"+n+"'] "+b),f)}catch(r){}finally{l||k.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)m[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(f){e=!0}m.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!m.isXML(a))try{if(e||!o.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11)return f}}catch(g){}return m(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(!!a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;o.order.splice(1,0,"CLASS"),o.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?m.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?m.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:m.contains=function(){return!1},m.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var y=function(a,b,c){var d,e=[],f="",g=b.nodeType?[b]:b;while(d=o.match.PSEUDO.exec(a))f+=d[0],a=a.replace(o.match.PSEUDO,"");a=o.relative[a]?a+"*":a;for(var h=0,i=g.length;h<i;h++)m(a,g[h],e,c);return m.filter(f,e)};m.attr=f.attr,m.selectors.attrMap={},f.find=m,f.expr=m.selectors,f.expr[":"]=f.expr.filters,f.unique=m.uniqueSort,f.text=m.getText,f.isXMLDoc=m.isXML,f.contains=m.contains}();var L=/Until$/,M=/^(?:parents|prevUntil|prevAll)/,N=/,/,O=/^.[^:#\[\.,]*$/,P=Array.prototype.slice,Q=f.expr.match.globalPOS,R={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({find:function(a){var b=this,c,d;if(typeof a!="string")return f(a).filter(function(){for(c=0,d=b.length;c<d;c++)if(f.contains(b[c],this))return!0});var e=this.pushStack("","find",a),g,h,i;for(c=0,d=this.length;c<d;c++){g=e.length,f.find(a,this[c],e);if(c>0)for(h=g;h<e.length;h++)for(i=0;i<g;i++)if(e[i]===e[h]){e.splice(h--,1);break}}return e},has:function(a){var b=f(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(f.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(T(this,a,!1),"not",a)},filter:function(a){return this.pushStack(T(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?Q.test(a)?f(a,this.context).index(this[0])>=0:f.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],d,e,g=this[0];if(f.isArray(a)){var h=1;while(g&&g.ownerDocument&&g!==b){for(d=0;d<a.length;d++)f(g).is(a[d])&&c.push({selector:a[d],elem:g,level:h});g=g.parentNode,h++}return c}var i=Q.test(a)||typeof a!="string"?f(a,b||this.context):0;for(d=0,e=this.length;d<e;d++){g=this[d];while(g){if(i?i.index(g)>-1:f.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11)break}}c=c.length>1?f.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a)return this[0]&&this[0].parentNode?this.prevAll().length:-1;if(typeof a=="string")return f.inArray(this[0],f(a));return f.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a=="string"?f(a,b):f.makeArray(a&&a.nodeType?[a]:a),d=f.merge(this.get(),c);return this.pushStack(S(c[0])||S(d[0])?d:f.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),f.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return f.dir(a,"parentNode")},parentsUntil:function(a,b,c){return f.dir(a,"parentNode",c)},next:function(a){return f.nth(a,2,"nextSibling")},prev:function(a){return f.nth(a,2,"previousSibling")},nextAll:function(a){return f.dir(a,"nextSibling")},prevAll:function(a){return f.dir(a,"previousSibling")},nextUntil:function(a,b,c){return f.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return f.dir(a,"previousSibling",c)},siblings:function(a){return f.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return f.sibling(a.firstChild)},contents:function(a){return f.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:f.makeArray(a.childNodes)}},function(a,b){f.fn[a]=function(c,d){var e=f.map(this,b,c);L.test(a)||(d=c),d&&typeof d=="string"&&(e=f.filter(d,e)),e=this.length>1&&!R[a]?f.unique(e):e,(this.length>1||N.test(d))&&M.test(a)&&(e=e.reverse());return this.pushStack(e,a,P.call(arguments).join(","))}}),f.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,b)},dir:function(a,c,d){var e=[],g=a[c];while(g&&g.nodeType!==9&&(d===b||g.nodeType!==1||!f(g).is(d)))g.nodeType===1&&e.push(g),g=g[c];return e},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var V="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",W=/ jQuery\d+="(?:\d+|null)"/g,X=/^\s+/,Y=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Z=/<([\w:]+)/,$=/<tbody/i,_=/<|&#?\w+;/,ba=/<(?:script|style)/i,bb=/<(?:script|object|embed|option|style)/i,bc=new RegExp("<(?:"+V+")[\\s/>]","i"),bd=/checked\s*(?:[^=]|=\s*.checked.)/i,be=/\/(java|ecma)script/i,bf=/^\s*<!(?:\[CDATA\[|\-\-)/,bg={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bh=U(c);bg.optgroup=bg.option,bg.tbody=bg.tfoot=bg.colgroup=bg.caption=bg.thead,bg.th=bg.td,f.support.htmlSerialize||(bg._default=[1,"div<div>","</div>"]),f.fn.extend({text:function(a){return f.access(this,function(a){return a===b?f.text(this):this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a))},null,a,arguments.length)},wrapAll:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapAll(a.call(this,b))});if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapInner(a.call(this,b))});return this.each(function(){var b=f(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=f.isFunction(a);return this.each(function(c){f(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=f
.clean(arguments);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,f.clean(arguments));return a}},remove:function(a,b){for(var c=0,d;(d=this[c])!=null;c++)if(!a||f.filter(a,[d]).length)!b&&d.nodeType===1&&(f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d);return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return f.clone(this,a,b)})},html:function(a){return f.access(this,function(a){var c=this[0]||{},d=0,e=this.length;if(a===b)return c.nodeType===1?c.innerHTML.replace(W,""):null;if(typeof a=="string"&&!ba.test(a)&&(f.support.leadingWhitespace||!X.test(a))&&!bg[(Z.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Y,"<$1></$2>");try{for(;d<e;d++)c=this[d]||{},c.nodeType===1&&(f.cleanData(c.getElementsByTagName("*")),c.innerHTML=a);c=0}catch(g){}}c&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(f.isFunction(a))return this.each(function(b){var c=f(this),d=c.html();c.replaceWith(a.call(this,b,d))});typeof a!="string"&&(a=f(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;f(this).remove(),b?f(b).before(a):f(c).append(a)})}return this.length?this.pushStack(f(f.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];if(!f.support.checkClone&&arguments.length===3&&typeof j=="string"&&bd.test(j))return this.each(function(){f(this).domManip(a,c,d,!0)});if(f.isFunction(j))return this.each(function(e){var g=f(this);a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)});if(this[0]){i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&f.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)d.call(c?bi(this[l],g):this[l],e.cacheable||m>1&&l<n?f.clone(h,!0,!0):h)}k.length&&f.each(k,function(a,b){b.src?f.ajax({type:"GET",global:!1,url:b.src,async:!1,dataType:"script"}):f.globalEval((b.text||b.textContent||b.innerHTML||"").replace(bf,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)})}return this}}),f.buildFragment=function(a,b,d){var e,g,h,i,j=a[0];b&&b[0]&&(i=b[0].ownerDocument||b[0]),i.createDocumentFragment||(i=c),a.length===1&&typeof j=="string"&&j.length<512&&i===c&&j.charAt(0)==="<"&&!bb.test(j)&&(f.support.checkClone||!bd.test(j))&&(f.support.html5Clone||!bc.test(j))&&(g=!0,h=f.fragments[j],h&&h!==1&&(e=h)),e||(e=i.createDocumentFragment(),f.clean(a,i,e,d)),g&&(f.fragments[j]=h?e:1);return{fragment:e,cacheable:g}},f.fragments={},f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){f.fn[a]=function(c){var d=[],e=f(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&e.length===1){e[b](this[0]);return this}for(var h=0,i=e.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();f(e[h])[b](j),d=d.concat(j)}return this.pushStack(d,a,e.selector)}}),f.extend({clone:function(a,b,c){var d,e,g,h=f.support.html5Clone||f.isXMLDoc(a)||!bc.test("<"+a.nodeName+">")?a.cloneNode(!0):bo(a);if((!f.support.noCloneEvent||!f.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a)){bk(a,h),d=bl(a),e=bl(h);for(g=0;d[g];++g)e[g]&&bk(d[g],e[g])}if(b){bj(a,h);if(c){d=bl(a),e=bl(h);for(g=0;d[g];++g)bj(d[g],e[g])}}d=e=null;return h},clean:function(a,b,d,e){var g,h,i,j=[];b=b||c,typeof b.createElement=="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);for(var k=0,l;(l=a[k])!=null;k++){typeof l=="number"&&(l+="");if(!l)continue;if(typeof l=="string")if(!_.test(l))l=b.createTextNode(l);else{l=l.replace(Y,"<$1></$2>");var m=(Z.exec(l)||["",""])[1].toLowerCase(),n=bg[m]||bg._default,o=n[0],p=b.createElement("div"),q=bh.childNodes,r;b===c?bh.appendChild(p):U(b).appendChild(p),p.innerHTML=n[1]+l+n[2];while(o--)p=p.lastChild;if(!f.support.tbody){var s=$.test(l),t=m==="table"&&!s?p.firstChild&&p.firstChild.childNodes:n[1]==="<table>"&&!s?p.childNodes:[];for(i=t.length-1;i>=0;--i)f.nodeName(t[i],"tbody")&&!t[i].childNodes.length&&t[i].parentNode.removeChild(t[i])}!f.support.leadingWhitespace&&X.test(l)&&p.insertBefore(b.createTextNode(X.exec(l)[0]),p.firstChild),l=p.childNodes,p&&(p.parentNode.removeChild(p),q.length>0&&(r=q[q.length-1],r&&r.parentNode&&r.parentNode.removeChild(r)))}var u;if(!f.support.appendChecked)if(l[0]&&typeof (u=l.length)=="number")for(i=0;i<u;i++)bn(l[i]);else bn(l);l.nodeType?j.push(l):j=f.merge(j,l)}if(d){g=function(a){return!a.type||be.test(a.type)};for(k=0;j[k];k++){h=j[k];if(e&&f.nodeName(h,"script")&&(!h.type||be.test(h.type)))e.push(h.parentNode?h.parentNode.removeChild(h):h);else{if(h.nodeType===1){var v=f.grep(h.getElementsByTagName("script"),g);j.splice.apply(j,[k+1,0].concat(v))}d.appendChild(h)}}}return j},cleanData:function(a){var b,c,d=f.cache,e=f.event.special,g=f.support.deleteExpando;for(var h=0,i;(i=a[h])!=null;h++){if(i.nodeName&&f.noData[i.nodeName.toLowerCase()])continue;c=i[f.expando];if(c){b=d[c];if(b&&b.events){for(var j in b.events)e[j]?f.event.remove(i,j):f.removeEvent(i,j,b.handle);b.handle&&(b.handle.elem=null)}g?delete i[f.expando]:i.removeAttribute&&i.removeAttribute(f.expando),delete d[c]}}}});var bp=/alpha\([^)]*\)/i,bq=/opacity=([^)]*)/,br=/([A-Z]|^ms)/g,bs=/^[\-+]?(?:\d*\.)?\d+$/i,bt=/^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,bu=/^([\-+])=([\-+.\de]+)/,bv=/^margin/,bw={position:"absolute",visibility:"hidden",display:"block"},bx=["Top","Right","Bottom","Left"],by,bz,bA;f.fn.css=function(a,c){return f.access(this,function(a,c,d){return d!==b?f.style(a,c,d):f.css(a,c)},a,c,arguments.length>1)},f.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=by(a,"opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":f.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!!a&&a.nodeType!==3&&a.nodeType!==8&&!!a.style){var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];c=f.cssProps[i]||i;if(d===b){if(k&&"get"in k&&(g=k.get(a,!1,e))!==b)return g;return j[c]}h=typeof d,h==="string"&&(g=bu.exec(d))&&(d=+(g[1]+1)*+g[2]+parseFloat(f.css(a,c)),h="number");if(d==null||h==="number"&&isNaN(d))return;h==="number"&&!f.cssNumber[i]&&(d+="px");if(!k||!("set"in k)||(d=k.set(a,d))!==b)try{j[c]=d}catch(l){}}},css:function(a,c,d){var e,g;c=f.camelCase(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c==="cssFloat"&&(c="float");if(g&&"get"in g&&(e=g.get(a,!0,d))!==b)return e;if(by)return by(a,c)},swap:function(a,b,c){var d={},e,f;for(f in b)d[f]=a.style[f],a.style[f]=b[f];e=c.call(a);for(f in b)a.style[f]=d[f];return e}}),f.curCSS=f.css,c.defaultView&&c.defaultView.getComputedStyle&&(bz=function(a,b){var c,d,e,g,h=a.style;b=b.replace(br,"-$1").toLowerCase(),(d=a.ownerDocument.defaultView)&&(e=d.getComputedStyle(a,null))&&(c=e.getPropertyValue(b),c===""&&!f.contains(a.ownerDocument.documentElement,a)&&(c=f.style(a,b))),!f.support.pixelMargin&&e&&bv.test(b)&&bt.test(c)&&(g=h.width,h.width=c,c=e.width,h.width=g);return c}),c.documentElement.currentStyle&&(bA=function(a,b){var c,d,e,f=a.currentStyle&&a.currentStyle[b],g=a.style;f==null&&g&&(e=g[b])&&(f=e),bt.test(f)&&(c=g.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),g.left=b==="fontSize"?"1em":f,f=g.pixelLeft+"px",g.left=c,d&&(a.runtimeStyle.left=d));return f===""?"auto":f}),by=bz||bA,f.each(["height","width"],function(a,b){f.cssHooks[b]={get:function(a,c,d){if(c)return a.offsetWidth!==0?bB(a,b,d):f.swap(a,bw,function(){return bB(a,b,d)})},set:function(a,b){return bs.test(b)?b+"px":b}}}),f.support.opacity||(f.cssHooks.opacity={get:function(a,b){return bq.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=f.isNumeric(b)?"alpha(opacity="+b*100+")":"",g=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&f.trim(g.replace(bp,""))===""){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bp.test(g)?g.replace(bp,e):g+" "+e}}),f(function(){f.support.reliableMarginRight||(f.cssHooks.marginRight={get:function(a,b){return f.swap(a,{display:"inline-block"},function(){return b?by(a,"margin-right"):a.style.marginRight})}})}),f.expr&&f.expr.filters&&(f.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!f.support.reliableHiddenOffsets&&(a.style&&a.style.display||f.css(a,"display"))==="none"},f.expr.filters.visible=function(a){return!f.expr.filters.hidden(a)}),f.each({margin:"",padding:"",border:"Width"},function(a,b){f.cssHooks[a+b]={expand:function(c){var d,e=typeof c=="string"?c.split(" "):[c],f={};for(d=0;d<4;d++)f[a+bx[d]+b]=e[d]||e[d-2]||e[0];return f}}});var bC=/%20/g,bD=/\[\]$/,bE=/\r?\n/g,bF=/#.*$/,bG=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bH=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bI=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,bJ=/^(?:GET|HEAD)$/,bK=/^\/\//,bL=/\?/,bM=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bN=/^(?:select|textarea)/i,bO=/\s+/,bP=/([?&])_=[^&]*/,bQ=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bR=f.fn.load,bS={},bT={},bU,bV,bW=["*/"]+["*"];try{bU=e.href}catch(bX){bU=c.createElement("a"),bU.href="",bU=bU.href}bV=bQ.exec(bU.toLowerCase())||[],f.fn.extend({load:function(a,c,d){if(typeof a!="string"&&bR)return bR.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var g=a.slice(e,a.length);a=a.slice(0,e)}var h="GET";c&&(f.isFunction(c)?(d=c,c=b):typeof c=="object"&&(c=f.param(c,f.ajaxSettings.traditional),h="POST"));var i=this;f.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?f("<div>").append(c.replace(bM,"")).find(g):c)),d&&i.each(d,[c,b,a])}});return this},serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?f.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bN.test(this.nodeName)||bH.test(this.type))}).map(function(a,b){var c=f(this).val();return c==null?null:f.isArray(c)?f.map(c,function(a,c){return{name:b.name,value:a.replace(bE,"\r\n")}}):{name:b.name,value:c.replace(bE,"\r\n")}}).get()}}),f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){f.fn[b]=function(a){return this.on(b,a)}}),f.each(["get","post"],function(a,c){f[c]=function(a,d,e,g){f.isFunction(d)&&(g=g||e,e=d,d=b);return f.ajax({type:c,url:a,data:d,success:e,dataType:g})}}),f.extend({getScript:function(a,c){return f.get(a,b,c,"script")},getJSON:function(a,b,c){return f.get(a,b,c,"json")},ajaxSetup:function(a,b){b?b$(a,f.ajaxSettings):(b=a,a=f.ajaxSettings),b$(a,b);return a},ajaxSettings:{url:bU,isLocal:bI.test(bV[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":bW},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":f.parseJSON,"text xml":f.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:bY(bS),ajaxTransport:bY(bT),ajax:function(a,c){function w(a,c,l,m){if(s!==2){s=2,q&&clearTimeout(q),p=b,n=m||"",v.readyState=a>0?4:0;var o,r,u,w=c,x=l?ca(d,v,l):b,y,z;if(a>=200&&a<300||a===304){if(d.ifModified){if(y=v.getResponseHeader("Last-Modified"))f.lastModified[k]=y;if(z=v.getResponseHeader("Etag"))f.etag[k]=z}if(a===304)w="notmodified",o=!0;else try{r=cb(d,x),w="success",o=!0}catch(A){w="parsererror",u=A}}else{u=w;if(!w||a)w="error",a<0&&(a=0)}v.status=a,v.statusText=""+(c||w),o?h.resolveWith(e,[r,w,v]):h.rejectWith(e,[v,w,u]),v.statusCode(j),j=b,t&&g.trigger("ajax"+(o?"Success":"Error"),[v,d,o?r:u]),i.fireWith(e,[v,w]),t&&(g.trigger("ajaxComplete",[v,d]),--f.active||f.event.trigger("ajaxStop"))}}typeof a=="object"&&(c=a,a=b),c=c||{};var d=f.ajaxSetup({},c),e=d.context||d,g=e!==d&&(e.nodeType||e instanceof f)?f(e):f.event,h=f.Deferred(),i=f.Callbacks("once memory"),j=d.statusCode||{},k,l={},m={},n,o,p,q,r,s=0,t,u,v={readyState:0,setRequestHeader:function(a,b){if(!s){var c=a.toLowerCase();a=m[c]=m[c]||a,l[a]=b}return this},getAllResponseHeaders:function(){return s===2?n:null},getResponseHeader:function(a){var c;if(s===2){if(!o){o={};while(c=bG.exec(n))o[c[1].toLowerCase()]=c[2]}c=o[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){s||(d.mimeType=a);return this},abort:function(a){a=a||"abort",p&&p.abort(a),w(0,a);return this}};h.promise(v),v.success=v.done,v.error=v.fail,v.complete=i.add,v.statusCode=function(a){if(a){var b;if(s<2)for(b in a)j[b]=[j[b],a[b]];else b=a[v.status],v.then(b,b)}return this},d.url=((a||d.url)+"").replace(bF,"").replace(bK,bV[1]+"//"),d.dataTypes=f.trim(d.dataType||"*").toLowerCase().split(bO),d.crossDomain==null&&(r=bQ.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]==bV[1]&&r[2]==bV[2]&&(r[3]||(r[1]==="http:"?80:443))==(bV[3]||(bV[1]==="http:"?80:443)))),d.data&&d.processData&&typeof d.data!="string"&&(d.data=f.param(d.data,d.traditional)),bZ(bS,d,c,v);if(s===2)return!1;t=d.global,d.type=d.type.toUpperCase(),d.hasContent=!bJ.test(d.type),t&&f.active++===0&&f.event.trigger("ajaxStart");if(!d.hasContent){d.data&&(d.url+=(bL.test(d.url)?"&":"?")+d.data,delete d.data),k=d.url;if(d.cache===!1){var x=f.now(),y=d.url.replace(bP,"$1_="+x);d.url=y+(y===d.url?(bL.test(d.url)?"&":"?")+"_="+x:"")}}(d.data&&d.hasContent&&d.contentType!==!1||c.contentType)&&v.setRequestHeader("Content-Type",d.contentType),d.ifModified&&(k=k||d.url,f.lastModified[k]&&v.setRequestHeader("If-Modified-Since",f.lastModified[k]),f.etag[k]&&v.setRequestHeader("If-None-Match",f.etag[k])),v.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+(d.dataTypes[0]!=="*"?", "+bW+"; q=0.01":""):d.accepts["*"]);for(u in d.headers)v.setRequestHeader(u,d.headers[u]);if(d.beforeSend&&(d.beforeSend.call(e,v,d)===!1||s===2)){v.abort();return!1}for(u in{success:1,error:1,complete:1})v[u](d[u]);p=bZ(bT,d,c,v);if(!p)w(-1,"No Transport");else{v.readyState=1,t&&g.trigger("ajaxSend",[v,d]),d.async&&d.timeout>0&&(q=setTimeout(function(){v.abort("timeout")},d.timeout));try{s=1,p.send(l,w)}catch(z){if(s<2)w(-1,z);else throw z}}return v},param:function(a,c){var d=[],e=function(a,b){b=f.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=f.ajaxSettings.traditional);if(f.isArray(a)||a.jquery&&!f.isPlainObject(a))f.each(a,function(){e(this.name,this.value)});else for(var g in a)b_(g,a[g],c,e);return d.join("&").replace(bC,"+")}}),f.extend({active:0,lastModified:{},etag:{}});var cc=f.now(),cd=/(\=)\?(&|$)|\?\?/i;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return f.expando+"_"+cc++}}),f.ajaxPrefilter("json jsonp",function(b,c,d){var e=typeof b.data=="string"&&/^application\/x\-www\-form\-urlencoded/.test(b.contentType);if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(cd.test(b.url)||e&&cd.test(b.data))){var g,h=b.jsonpCallback=f.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2";b.jsonp!==!1&&(j=j.replace(cd,l),b.url===j&&(e&&(k=k.replace(cd,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},d.always(function(){a[h]=i,g&&f.isFunction(i)&&a[h](g[0])}),b.converters["script json"]=function(){g||f.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){f.globalEval(a);return a}}}),f.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),f.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(c||!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var ce=a.ActiveXObject?function(){for(var a in cg)cg[a](0,1)}:!1,cf=0,cg;f.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&ch()||ci()}:ch,function(a){f.extend(f.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(f.ajaxSettings.xhr()),f.support.ajax&&f.ajaxTransport(function(c){if(!c.crossDomain||f.support.cors){var d;return{send:function(e,g){var h=c.xhr(),i,j;c.username?h.open(c.type,c.url,c.async,c.username,c.password):h.open(c.type,c.url,c.async);if(c.xhrFields)for(j in c.xhrFields)h[j]=c.xhrFields[j];c.mimeType&&h.overrideMimeType&&h.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(j in e)h.setRequestHeader(j,e[j])}catch(k){}h.send(c.hasContent&&c.data||null),d=function(a,e){var j,k,l,m,n;try{if(d&&(e||h.readyState===4)){d=b,i&&(h.onreadystatechange=f.noop,ce&&delete cg[i]);if(e)h.readyState!==4&&h.abort();else{j=h.status,l=h.getAllResponseHeaders(),m={},n=h.responseXML,n&&n.documentElement&&(m.xml=n);try{m.text=h.responseText}catch(a){}try{k=h.statusText}catch(o){k=""}!j&&c.isLocal&&!c.crossDomain?j=m.text?200:404:j===1223&&(j=204)}}}catch(p){e||g(-1,p)}m&&g(j,k,m,l)},!c.async||h.readyState===4?d():(i=++cf,ce&&(cg||(cg={},f(a).unload(ce)),cg[i]=d),h.onreadystatechange=d)},abort:function(){d&&d(0,1)}}}});var cj={},ck,cl,cm=/^(?:toggle|show|hide)$/,cn=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,co,cp=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],cq;f.fn.extend({show:function(a,b,c){var d,e;if(a||a===0)return this.animate(ct("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)d=this[g],d.style&&(e=d.style.display,!f._data(d,"olddisplay")&&e==="none"&&(e=d.style.display=""),(e===""&&f.css(d,"display")==="none"||!f.contains(d.ownerDocument.documentElement,d))&&f._data(d,"olddisplay",cu(d.nodeName)));for(g=0;g<h;g++){d=this[g];if(d.style){e=d.style.display;if(e===""||e==="none")d.style.display=f._data(d,"olddisplay")||""}}return this},hide:function(a,b,c){if(a||a===0)return this.animate(ct("hide",3),a,b,c);var d,e,g=0,h=this.length;for(;g<h;g++)d=this[g],d.style&&(e=f.css(d,"display"),e!=="none"&&!f._data(d,"olddisplay")&&f._data(d,"olddisplay",e));for(g=0;g<h;g++)this[g].style&&(this[g].style.display="none");return this},_toggle:f.fn.toggle,toggle:function(a,b,c){var d=typeof a=="boolean";f.isFunction(a)&&f.isFunction(b)?this._toggle.apply(this,arguments):a==null||d?this.each(function(){var b=d?a:f(this).is(":hidden");f(this)[b?"show":"hide"]()}):this.animate(ct("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){function g(){e.queue===!1&&f._mark(this);var b=f.extend({},e),c=this.nodeType===1,d=c&&f(this).is(":hidden"),g,h,i,j,k,l,m,n,o,p,q;b.animatedProperties={};for(i in a){g=f.camelCase(i),i!==g&&(a[g]=a[i],delete a[i]);if((k=f.cssHooks[g])&&"expand"in k){l=k.expand(a[g]),delete a[g];for(i in l)i in a||(a[i]=l[i])}}for(g in a){h=a[g],f.isArray(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.specialEasing&&b.specialEasing[g]||b.easing||"swing";if(h==="hide"&&d||h==="show"&&!d)return b.complete.call(this);c&&(g==="height"||g==="width")&&(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],f.css(this,"display")==="inline"&&f.css(this,"float")==="none"&&(!f.support.inlineBlockNeedsLayout||cu(this.nodeName)==="inline"?this.style.display="inline-block":this.style.zoom=1))}b.overflow!=null&&(this.style.overflow="hidden");for(i in a)j=new f.fx(this,b,i),h=a[i],cm.test(h)?(q=f._data(this,"toggle"+i)||(h==="toggle"?d?"show":"hide":0),q?(f._data(this,"toggle"+i,q==="show"?"hide":"show"),j[q]()):j[h]()):(m=cn.exec(h),n=j.cur(),m?(o=parseFloat(m[2]),p=m[3]||(f.cssNumber[i]?"":"px"),p!=="px"&&(f.style(this,i,(o||1)+p),n=(o||1)/j.cur()*n,f.style(this,i,n+p)),m[1]&&(o=(m[1]==="-="?-1:1)*o+n),j.custom(n,o,p)):j.custom(n,h,""));return!0}var e=f.speed(b,c,d);if(f.isEmptyObject(a))return this.each(e.complete,[!1]);a=f.extend({},a);return e.queue===!1?this.each(g):this.queue(e.queue,g)},stop:function(a,c,d){typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]);return this.each(function(){function h(a,b,c){var e=b[c];f.removeData(a,c,!0),e.stop(d)}var b,c=!1,e=f.timers,g=f._data(this);d||f._unmark(!0,this);if(a==null)for(b in g)g[b]&&g[b].stop&&b.indexOf(".run")===b.length-4&&h(this,g,b);else g[b=a+".run"]&&g[b].stop&&h(this,g,b);for(b=e.length;b--;)e[b].elem===this&&(a==null||e[b].queue===a)&&(d?e[b](!0):e[b].saveState(),c=!0,e.splice(b,1));(!d||!c)&&f.dequeue(this,a)})}}),f.each({slideDown:ct("show",1),slideUp:ct("hide",1),slideToggle:ct("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){f.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),f.extend({speed:function(a,b,c){var d=a&&typeof a=="object"?f.extend({},a):{complete:c||!c&&b||f.isFunction(a)&&a,duration:a,easing:c&&b||b&&!f.isFunction(b)&&b};d.duration=f.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in f.fx.speeds?f.fx.speeds[d.duration]:f.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";d.old=d.complete,d.complete=function(a){f.isFunction(d.old)&&d.old.call(this),d.queue?f.dequeue(this,d.queue):a!==!1&&f._unmark(this)};return d},easing:{linear:function(a){return a},swing:function(a){return-Math.cos(a*Math.PI)/2+.5}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}}}),f.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(f.fx.step[this.prop]||f.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=f.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,c,d){function h(a){return e.step(a)}var e=this,g=f.fx;this.startTime=cq||cr(),this.end=c,this.now=this.start=a,this.pos=this.state=0,this.unit=d||this.unit||(f.cssNumber[this.prop]?"":"px"),h.queue=this.options.queue,h.elem=this.elem,h.saveState=function(){f._data(e.elem,"fxshow"+e.prop)===b&&(e.options.hide?f._data(e.elem,"fxshow"+e.prop,e.start):e.options.show&&f._data(e.elem,"fxshow"+e.prop,e.end))},h()&&f.timers.push(h)&&!co&&(co=setInterval(g.tick,g.interval))},show:function(){var a=f._data(this.elem,"fxshow"+this.prop);this.options.orig[this.prop]=a||f.style(this.elem,this.prop),this.options.show=!0,a!==b?this.custom(this.cur(),a):this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),f(this.elem).show()},hide:function(){this.options.orig[this.prop]=f._data(this.elem,"fxshow"+this.prop)||f.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b,c,d,e=cq||cr(),g=!0,h=this.elem,i=this.options;if(a||e>=i.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),i.animatedProperties[this.prop]=!0;for(b in i.animatedProperties)i.animatedProperties[b]!==!0&&(g=!1);if(g){i.overflow!=null&&!f.support.shrinkWrapBlocks&&f.each(["","X","Y"],function(a,b){h.style["overflow"+b]=i.overflow[a]}),i.hide&&f(h).hide();if(i.hide||i.show)for(b in i.animatedProperties)f.style(h,b,i.orig[b]),f.removeData(h,"fxshow"+b,!0),f.removeData(h,"toggle"+b,!0);d=i.complete,d&&(i.complete=!1,d.call(h))}return!1}i.duration==Infinity?this.now=e:(c=e-this.startTime,this.state=c/i.duration,this.pos=f.easing[i.animatedProperties[this.prop]](this.state,c,0,1,i.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update();return!0}},f.extend(f.fx,{tick:function(){var a,b=f.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||f.fx.stop()},interval:13,stop:function(){clearInterval(co),co=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){f.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=a.now+a.unit:a.elem[a.prop]=a.now}}}),f.each(cp.concat.apply([],cp),function(a,b){b.indexOf("margin")&&(f.fx.step[b]=function(a){f.style(a.elem,b,Math.max(0,a.now)+a.unit)})}),f.expr&&f.expr.filters&&(f.expr.filters.animated=function(a){return f.grep(f.timers,function(b){return a===b.elem}).length});var cv,cw=/^t(?:able|d|h)$/i,cx=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?cv=function(a,b,c,d){try{d=a.getBoundingClientRect()}catch(e){}if(!d||!f.contains(c,a))return d?{top:d.top,left:d.left}:{top:0,left:0};var g=b.body,h=cy(b),i=c.clientTop||g.clientTop||0,j=c.clientLeft||g.clientLeft||0,k=h.pageYOffset||f.support.boxModel&&c.scrollTop||g.scrollTop,l=h.pageXOffset||f.support.boxModel&&c.scrollLeft||g.scrollLeft,m=d.top+k-i,n=d.left+l-j;return{top:m,left:n}}:cv=function(a,b,c){var d,e=a.offsetParent,g=a,h=b.body,i=b.defaultView,j=i?i.getComputedStyle(a,null):a.currentStyle,k=a.offsetTop,l=a.offsetLeft;while((a=a.parentNode)&&a!==h&&a!==c){if(f.support.fixedPosition&&j.position==="fixed")break;d=i?i.getComputedStyle(a,null):a.currentStyle,k-=a.scrollTop,l-=a.scrollLeft,a===e&&(k+=a.offsetTop,l+=a.offsetLeft,f.support.doesNotAddBorder&&(!f.support.doesAddBorderForTableAndCells||!cw.test(a.nodeName))&&(k+=parseFloat(d.borderTopWidth)||0,l+=parseFloat(d.borderLeftWidth)||0),g=e,e=a.offsetParent),f.support.subtractsBorderForOverflowNotVisible&&d.overflow!=="visible"&&(k+=parseFloat(d.borderTopWidth)||0,l+=parseFloat(d.borderLeftWidth)||0),j=d}if(j.position==="relative"||j.position==="static")k+=h.offsetTop,l+=h.offsetLeft;f.support.fixedPosition&&j.position==="fixed"&&(k+=Math.max(c.scrollTop,h.scrollTop),l+=Math.max(c.scrollLeft,h.scrollLeft));return{top:k,left:l}},f.fn.offset=function(a){if(arguments.length)return a===b?this:this.each(function(b){f.offset.setOffset(this,a,b)});var c=this[0],d=c&&c.ownerDocument;if(!d)return null;if(c===d.body)return f.offset.bodyOffset(c);return cv(c,d,d.documentElement)},f.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;f.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(f.css(a,"marginTop"))||0,c+=parseFloat(f.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var d=f.css(a,"position");d==="static"&&(a.style.position="relative");var e=f(a),g=e.offset(),h=f.css(a,"top"),i=f.css(a,"left"),j=(d==="absolute"||d==="fixed")&&f.inArray("auto",[h,i])>-1,k={},l={},m,n;j?(l=e.position(),m=l.top,n=l.left):(m=parseFloat(h)||0,n=parseFloat(i)||0),f.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):e.css(k)}},f.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=cx.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(f.css(a,"marginTop"))||0,c.left-=parseFloat(f.css(a,"marginLeft"))||0,d.top+=parseFloat(f.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(f.css(b[0],"borderLeftWidth"))||0;return{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&!cx.test(a.nodeName)&&f.css(a,"position")==="static")a=a.offsetParent;return a})}}),f.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,c){var d=/Y/.test(c);f.fn[a]=function(e){return f.access(this,function(a,e,g){var h=cy(a);if(g===b)return h?c in h?h[c]:f.support.boxModel&&h.document.documentElement[e]||h.document.body[e]:a[e];h?h.scrollTo(d?f(h).scrollLeft():g,d?g:f(h).scrollTop()):a[e]=g},a,e,arguments.length,null)}}),f.each({Height:"height",Width:"width"},function(a,c){var d="client"+a,e="scroll"+a,g="offset"+a;f.fn["inner"+a]=function(){var a=this[0];return a?a.style?parseFloat(f.css(a,c,"padding")):this[c]():null},f.fn["outer"+a]=function(a){var b=this[0];return b?b.style?parseFloat(f.css(b,c,a?"margin":"border")):this[c]():null},f.fn[c]=function(a){return f.access(this,function(a,c,h){var i,j,k,l;if(f.isWindow(a)){i=a.document,j=i.documentElement[d];return f.support.boxModel&&j||i.body&&i.body[d]||j}if(a.nodeType===9){i=a.documentElement;if(i[d]>=i[e])return i[d];return Math.max(a.body[e],i[e],a.body[g],i[g])}if(h===b){k=f.css(a,c),l=parseFloat(k);return f.isNumeric(l)?l:k}f(a).css(c,h)},c,a,arguments.length,null)}}),a.jQuery=a.$=f,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return f})})(window);;/*
 * jQuery throttle / debounce - v1.1 - 3/7/2010
 * http://benalman.com/projects/jquery-throttle-debounce-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function(b,c){var $=b.jQuery||b.Cowboy||(b.Cowboy={}),a;$.throttle=a=function(e,f,j,i){var h,d=0;if(typeof f!=="boolean"){i=j;j=f;f=c}function g(){var o=this,m=+new Date()-d,n=arguments;function l(){d=+new Date();j.apply(o,n)}function k(){h=c}if(i&&!h){l()}h&&clearTimeout(h);if(i===c&&m>e){l()}else{if(f!==true){h=setTimeout(i?k:l,i===c?e-m:e)}}}if($.guid){g.guid=j.guid=j.guid||$.guid++}return g};$.debounce=function(d,e,f){return f===c?a(d,e,false):a(d,f,e!==false)}})(this);;// Everything but the relevant parts stripped out by Janne Aukia
// for Zoomooz on April 4 2012 by using jscoverage coverage analysis tool.

// === Sylvester ===
// Vector and Matrix mathematics modules for JavaScript
// Copyright (c) 2007 James Coglan
//
// Permission is hereby granted, free of charge, to any person obtaining
// a copy of this software and associated documentation files (the "Software"),
// to deal in the Software without restriction, including without limitation
// the rights to use, copy, modify, merge, publish, distribute, sublicense,
// and/or sell copies of the Software, and to permit persons to whom the
// Software is furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
// THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
// FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
// DEALINGS IN THE SOFTWARE.

var Sylvester = {
  version: '0.1.3',
  precision: 1e-6
};

function Matrix() {}
Matrix.prototype = {

  // Returns a copy of the matrix
  dup: function() {
    return Matrix.create(this.elements);
  },

  // Maps the matrix to another matrix (of the same dimensions) according to the given function
  /*map: function(fn) {
    var els = [], ni = this.elements.length, ki = ni, i, nj, kj = this.elements[0].length, j;
    do { i = ki - ni;
      nj = kj;
      els[i] = [];
      do { j = kj - nj;
        els[i][j] = fn(this.elements[i][j], i + 1, j + 1);
      } while (--nj);
    } while (--ni);
    return Matrix.create(els);
  },*/

  // Returns true iff the matrix can multiply the argument from the left
  canMultiplyFromLeft: function(matrix) {
    var M = matrix.elements || matrix;
    if (typeof(M[0][0]) == 'undefined') { M = Matrix.create(M).elements; }
    // this.columns should equal matrix.rows
    return (this.elements[0].length == M.length);
  },

  // Returns the result of multiplying the matrix from the right by the argument.
  // If the argument is a scalar then just multiply all the elements. If the argument is
  // a vector, a vector is returned, which saves you having to remember calling
  // col(1) on the result.
  multiply: function(matrix) {
    /*if (!matrix.elements) {
      return this.map(function(x) { return x * matrix; });
    }*/

    var returnVector = matrix.modulus ? true : false;
    var M = matrix.elements || matrix;
    if (typeof(M[0][0]) == 'undefined') { M = Matrix.create(M).elements; }
    if (!this.canMultiplyFromLeft(M)) { return null; }
    var ni = this.elements.length, ki = ni, i, nj, kj = M[0].length, j;
    var cols = this.elements[0].length, elements = [], sum, nc, c;
    do { i = ki - ni;
      elements[i] = [];
      nj = kj;
      do { j = kj - nj;
        sum = 0;
        nc = cols;
        do { c = cols - nc;
          sum += this.elements[i][c] * M[c][j];
        } while (--nc);
        elements[i][j] = sum;
      } while (--nj);
    } while (--ni);

    M = Matrix.create(elements);
    return returnVector ? M.col(1) : M;
  },

  // Returns true iff the matrix is square
  isSquare: function() {
    return (this.elements.length == this.elements[0].length);
  },

  // Make the matrix upper (right) triangular by Gaussian elimination.
  // This method only adds multiples of rows to other rows. No rows are
  // scaled up or switched, and the determinant is preserved.
  toRightTriangular: function() {
    var M = this.dup(), els;
    var n = this.elements.length, k = n, i, np, kp = this.elements[0].length, p;
    do { i = k - n;
      if (M.elements[i][i] === 0) {
        for (j = i + 1; j < k; j++) {
          if (M.elements[j][i] !== 0) {
            els = []; np = kp;
            do { p = kp - np;
              els.push(M.elements[i][p] + M.elements[j][p]);
            } while (--np);
            M.elements[i] = els;
            break;
          }
        }
      }
      if (M.elements[i][i] !== 0) {
        for (j = i + 1; j < k; j++) {
          var multiplier = M.elements[j][i] / M.elements[i][i];
          els = []; np = kp;
          do { p = kp - np;
            // Elements with column numbers up to an including the number
            // of the row that we're subtracting can safely be set straight to
            // zero, since that's the point of this routine and it avoids having
            // to loop over and correct rounding errors later
            els.push(p <= i ? 0 : M.elements[j][p] - M.elements[i][p] * multiplier);
          } while (--np);
          M.elements[j] = els;
        }
      }
    } while (--n);
    return M;
  },

  // Returns the determinant for square matrices
  determinant: function() {
    if (!this.isSquare()) { return null; }
    var M = this.toRightTriangular();
    var det = M.elements[0][0], n = M.elements.length - 1, k = n, i;
    do { i = k - n + 1;
      det = det * M.elements[i][i];
    } while (--n);
    return det;
  },

  // Returns true iff the matrix is singular
  isSingular: function() {
    return (this.isSquare() && this.determinant() === 0);
  },

  // Returns the result of attaching the given argument to the right-hand side of the matrix
  augment: function(matrix) {
    var M = matrix.elements || matrix;
    if (typeof(M[0][0]) == 'undefined') { M = Matrix.create(M).elements; }
    var T = this.dup(), cols = T.elements[0].length;
    var ni = T.elements.length, ki = ni, i, nj, kj = M[0].length, j;
    if (ni != M.length) { return null; }
    do { i = ki - ni;
      nj = kj;
      do { j = kj - nj;
        T.elements[i][cols + j] = M[i][j];
      } while (--nj);
    } while (--ni);
    return T;
  },

  // Returns the inverse (if one exists) using Gauss-Jordan
  inverse: function() {
    if (!this.isSquare() || this.isSingular()) { return null; }
    var ni = this.elements.length, ki = ni, i, j;
    var M = this.augment(Matrix.I(ni)).toRightTriangular();
    var np, kp = M.elements[0].length, p, els, divisor;
    var inverse_elements = [], new_element;
    // Matrix is non-singular so there will be no zeros on the diagonal
    // Cycle through rows from last to first
    do { i = ni - 1;
      // First, normalise diagonal elements to 1
      els = []; np = kp;
      inverse_elements[i] = [];
      divisor = M.elements[i][i];
      do { p = kp - np;
        new_element = M.elements[i][p] / divisor;
        els.push(new_element);
        // Shuffle of the current row of the right hand side into the results
        // array as it will not be modified by later runs through this loop
        if (p >= ki) { inverse_elements[i].push(new_element); }
      } while (--np);
      M.elements[i] = els;
      // Then, subtract this row from those above it to
      // give the identity matrix on the left hand side
      for (j = 0; j < i; j++) {
        els = []; np = kp;
        do { p = kp - np;
          els.push(M.elements[j][p] - M.elements[i][p] * M.elements[j][i]);
        } while (--np);
        M.elements[j] = els;
      }
    } while (--ni);
    return Matrix.create(inverse_elements);
  },

  // Set the matrix's elements from an array. If the argument passed
  // is a vector, the resulting matrix will be a single column.
  setElements: function(els) {
    var i, elements = els.elements || els;
    if (typeof(elements[0][0]) != 'undefined') {
      var ni = elements.length, ki = ni, nj, kj, j;
      this.elements = [];
      do { i = ki - ni;
        nj = elements[i].length; kj = nj;
        this.elements[i] = [];
        do { j = kj - nj;
          this.elements[i][j] = elements[i][j];
        } while (--nj);
      } while(--ni);
      return this;
    }
    var n = elements.length, k = n;
    this.elements = [];
    do { i = k - n;
      this.elements.push([elements[i]]);
    } while (--n);
    return this;
  }
};

// Constructor function
Matrix.create = function(elements) {
  var M = new Matrix();
  return M.setElements(elements);
};

// Identity matrix of size n
Matrix.I = function(n) {
  var els = [], k = n, i, nj, j;
  do { i = k - n;
    els[i] = []; nj = k;
    do { j = k - nj;
      els[i][j] = (i == j) ? 1 : 0;
    } while (--nj);
  } while (--n);
  return Matrix.create(els);
};;/*
 * purecssmatrix.js, version 0.10, part of:
 * http://janne.aukia.com/zoomooz
 *
 * 0.10 initial stand-alone version
 *
 * LICENCE INFORMATION:
 *
 * Copyright (c) 2010 Janne Aukia (janne.aukia.com)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL Version 2 (GPL-LICENSE.txt) licenses.
 *
 */

 PureCSSMatrix = (function() {
    "use strict";

    //**********************************//
    //***  Variables                 ***//
    //**********************************//

    var regexp_is_deg = /deg$/;
    var regexp_filter_number = /([0-9.\-e]+)/g;
    var regexp_trans_splitter = /([a-zA-Z]+)\(([^\)]+)\)/g;

    //**********************************//
    //***  WebKitCSSMatrix in        ***//
    //***  pure Javascript           ***//
    //**********************************//

    function CssMatrix(trans) {
        if(trans && trans !== null && trans!="none") {
            if(trans instanceof Matrix) {
                this.setMatrix(trans);
            } else {
                this.setMatrixValue(trans);
            }
        } else {
            this.m = Matrix.I(3);
        }
    }

    CssMatrix.prototype.setMatrix = function(matr) {
        this.m = matr;
    };

    function rawRotationToRadians(raw) {
        var rot = parseFloat(filterNumber(raw));
        if(raw.match(regexp_is_deg)) {
            rot = (2*Math.PI)*rot/360.0;
        }
        return rot;
    }

    CssMatrix.prototype.setMatrixValue = function(transString) {
        var mtr = Matrix.I(3);
        var items;
        while((items = regexp_trans_splitter.exec(transString)) !== null) {
            var action = items[1].toLowerCase();
            var val = items[2].split(",");
            var trans;
            if(action=="matrix") {
                trans = Matrix.create([[parseFloat(val[0]),parseFloat(val[2]),parseFloat(filterNumber(val[4]))],
                               [parseFloat(val[1]),parseFloat(val[3]),parseFloat(filterNumber(val[5]))],
                               [                0,                0,                              1]]);
            } else if(action=="translate") {
                trans = Matrix.I(3);
                trans.elements[0][2] = parseFloat(filterNumber(val[0]));
                trans.elements[1][2] = parseFloat(filterNumber(val[1]));
            } else if(action=="scale") {
                var sx = parseFloat(val[0]);
                var sy;
                if(val.length>1) {
                    sy = parseFloat(val[1]);
                } else {
                    sy = sx;
                }
                trans = Matrix.create([[sx, 0, 0], [0, sy, 0], [0, 0, 1]]);
            } else if(action=="rotate") {
                trans = Matrix.RotationZ(rawRotationToRadians(val[0]));
            } else if(action=="skew" || action=="skewx") {
                // TODO: supports only one parameter skew
                trans = Matrix.I(3);
                trans.elements[0][1] = Math.tan(rawRotationToRadians(val[0]));
            } else if(action=="skewy") {
                // TODO: test that this works (or unit test them all!)
                trans = Matrix.I(3);
                trans.elements[1][0] = Math.tan(rawRotationToRadians(val[0]));
            } else {
                console.log("Problem with setMatrixValue", action, val);
            }

            mtr = mtr.multiply(trans);
        }

        this.m = mtr;
    };

    CssMatrix.prototype.multiply = function(m2) {
        return new CssMatrix(this.m.multiply(m2.m));
    };

    CssMatrix.prototype.inverse = function() {
        if(Math.abs(this.m.elements[0][0])<0.000001) {
            /* fixes a weird displacement problem with 90 deg rotations */
            this.m.elements[0][0] = 0;
        }
        return new CssMatrix(this.m.inverse());
    };

    CssMatrix.prototype.translate = function(x,y) {
        var trans = Matrix.I(3);
        trans.elements[0][2] = x;
        trans.elements[1][2] = y;
        return new CssMatrix(this.m.multiply(trans));
    };

    CssMatrix.prototype.scale = function(sx,sy) {
        var trans = Matrix.create([[sx, 0, 0], [0, sy, 0], [0, 0, 1]]);
        return new CssMatrix(this.m.multiply(trans));
    };

    CssMatrix.prototype.rotate = function(rot) {
        var trans = Matrix.RotationZ(rot);
        return new CssMatrix(this.m.multiply(trans));
    };

    CssMatrix.prototype.toString = function() {
        var e = this.m.elements;
        var pxstr = "";
        if($.browser.mozilla || $.browser.opera) {
            pxstr = "px";
        }
        return "matrix("+printFixedNumber(e[0][0])+", "+printFixedNumber(e[1][0])+", "+
                         printFixedNumber(e[0][1])+", "+printFixedNumber(e[1][1])+", "+
                         printFixedNumber(e[0][2])+pxstr+", "+printFixedNumber(e[1][2])+pxstr+")";
    };

    //****************************************//
    //***  Not part of the WebkitCSSMatrix ***//
    //***  interface (but used in Zoomooz) ***//
    //****************************************//

    CssMatrix.prototype.elements = function() {
        var mv = this.m.elements;
        return {"a":mv[0][0],"b":mv[1][0],"c":mv[0][1],
                "d":mv[1][1],"e":mv[0][2],"f":mv[1][2]};
    };

    //**********************************//
    //***  Helpers                   ***//
    //**********************************//

    function filterNumber(x) {
        return x.match(regexp_filter_number);
    }

    function printFixedNumber(x) {
        return Number(x).toFixed(6);
    }

    return CssMatrix;
})();;/*
 * jquery.zoomooz-helpers.js, part of:
 * http://janne.aukia.com/zoomooz
 *
 * LICENCE INFORMATION:
 *
 * Copyright (c) 2010 Janne Aukia (janne.aukia.com)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL Version 2 (GPL-LICENSE.txt) licenses.
 *
 */

/*jslint sub: true */

if(!$.zoomooz) {
    $.zoomooz = {};
}

 $.zoomooz.helpers = (function($, ns) {
    "use strict";

    //**********************************//
    //***  Variables                 ***//
    //**********************************//

    var browser_prefixes = ["-moz-","-webkit-","-o-","-ms-"];

    //**********************************//
    //***  Helpers                   ***//
    //**********************************//

    ns.forEachPrefix = function(func,includeNoPrefix) {
        for(var i=0;i<browser_prefixes.length;i++) {
            func(browser_prefixes[i]);
        }
        if(includeNoPrefix) {
            func("");
        }
    };

    ns.getElementTransform = function(elem) {
        var retVal;
        ns.forEachPrefix(function(prefix) {
            retVal = retVal || $(elem).css(prefix+"transform");
        },true);
        return retVal;
    };

    return ns;

})(jQuery, {});;/*
 * jquery.zoomooz-anim.js, part of:
 * http://janne.aukia.com/zoomooz
 *
 * LICENCE INFORMATION:
 *
 * Copyright (c) 2010 Janne Aukia (janne.aukia.com)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL Version 2 (GPL-LICENSE.txt) licenses.
 *
 * LICENCE INFORMATION FOR DERIVED FUNCTIONS:
 *
 * Functions CubicBezierAtPosition and
 * CubicBezierAtTime are written by Christian Effenberger,
 * and correspond 1:1 to WebKit project functions.
 * "WebCore and JavaScriptCore are available under the
 * Lesser GNU Public License. WebKit is available under
 * a BSD-style license."
 *
 */

/*jslint sub: true */

(function($) {
    "use strict";

    //**********************************//
    //***  Variables                 ***//
    //**********************************//

    var animation_start_time;
    var animation_interval_timer;

    var regexp_filter_number = /([0-9.\-e]+)/g;
    var regexp_trans_splitter = /([a-z]+)\(([^\)]+)\)/g;
    var regexp_is_deg = /deg$/;

    var helpers = $.zoomooz.helpers;

    var default_settings = {
        duration: 450,
        easing: "ease",
        /* Native animation may cause issues with pixelated content while zooming,
           and there might be other issues with browser compatibility etc. so use
           it with care and test on your target devices/browsers :). */
        nativeanimation: false
    };

    var endCallbackTimeout;

    //**********************************//
    //***  Setup css hook for IE     ***//
    //**********************************//

    jQuery.cssHooks["MsTransform"] = {
        set: function( elem, value ) {
            elem.style.msTransform = value;
        }
    };

    jQuery.cssHooks["MsTransformOrigin"] = {
        set: function( elem, value ) {
            elem.style.msTransformOrigin = value;
        }
    };

    //**********************************//
    //***  jQuery functions          ***//
    //**********************************//

    $.fn.animateTransformation = function(transformation, settings, posOffset, animateEndCallback, animateStartedCallback) {
        settings = jQuery.extend({}, default_settings, settings);

        // FIXME: what would be the best way to handle leftover animations?
        if(endCallbackTimeout) {
            clearTimeout(endCallbackTimeout);
            endCallbackTimeout = null;
        }

        if(settings.nativeanimation && animateEndCallback) {
            endCallbackTimeout = setTimeout(animateEndCallback, settings.duration);
        }

        this.each(function() {
            var $target = $(this);

            if(!transformation) transformation = new PureCSSMatrix();

            var current_affine = constructAffineFixingRotation($target, posOffset);
            var final_affine = fixRotationToSameLap(current_affine, affineTransformDecompose(transformation));

            if(settings.nativeanimation) {
                $target.css(constructZoomRootCssTransform(matrixCompose(final_affine), settings.duration, settings.easing));
                if(animateStartedCallback) {
                    animateStartedCallback();
                }
            } else {
                animateTransition($target, current_affine, final_affine, settings, animateEndCallback, animateStartedCallback);
            }
        });
    };

    $.fn.setTransformation = function(transformation) {
        this.each(function() {
            var $target = $(this);
            var current_affine = constructAffineFixingRotation($target);
            var final_affine = fixRotationToSameLap(current_affine, affineTransformDecompose(transformation));
            $target.css(constructZoomRootCssTransform(matrixCompose(final_affine)));
        });
    };

    //**********************************//
    //***  Element positioning       ***//
    //**********************************//

    function constructZoomRootCssTransform(trans, duration, easing) {
        var propMap = {};

        helpers.forEachPrefix(function(prefix) {
            propMap[prefix+"transform"] = trans;
        },true);

        if(duration) {
            var transdur = roundNumber(duration/1000,6)+"s";
            propMap["-webkit-transition-duration"] = transdur;
            propMap["-o-transition-duration"] = transdur;
            propMap["-moz-transition-duration"] = transdur;
        }

        if(easing) {
            var transtiming = constructEasingCss(easing);
            propMap["-webkit-transition-timing-function"] = transtiming;
            propMap["-o-transition-timing-function"] = transtiming;
            propMap["-moz-transition-timing-function"] = transtiming;
        }

        return propMap;
    }

    //**********************************//
    //***  Non-native animation      ***//
    //**********************************//

    function animateTransition($target, st, et, settings, animateEndCallback, animateStartedCallback) {

        if(!st) {
            st = affineTransformDecompose(new PureCSSMatrix());
        }
        animation_start_time = (new Date()).getTime();
        if(animation_interval_timer) {
            clearInterval(animation_interval_timer);
            animation_interval_timer = null;
        }
        if(settings.easing) {
            settings.easingfunction = constructEasingFunction(settings.easing, settings.duration);
        }

        // first step
        animationStep($target, st, et, settings, animateEndCallback);

        if(animateStartedCallback) {
            animateStartedCallback();
        }

        animation_interval_timer = setInterval(function() { animationStep($target, st, et, settings, animateEndCallback); }, 1);
    }

    function animationStep($target, affine_start, affine_end, settings, animateEndCallback) {
        var current_time = (new Date()).getTime() - animation_start_time;
        var time_value;
        if(settings.easingfunction) {
            time_value = settings.easingfunction(current_time/settings.duration);
        } else {
            time_value = current_time/settings.duration;
        }

        $target.css(constructZoomRootCssTransform(matrixCompose(interpolateArrays(affine_start, affine_end, time_value))));

        if(current_time>settings.duration) {
            clearInterval(animation_interval_timer);
            animation_interval_timer = null;
            time_value=1.0;
            if(animateEndCallback) {
                animateEndCallback();
            }
        }

    }

    /* Based on pseudo-code in:
     * https://bugzilla.mozilla.org/show_bug.cgi?id=531344
     */
    function affineTransformDecompose(matrix) {
        var m = matrix.elements();
        var a=m.a, b=m.b, c=m.c, d=m.d, e=m.e, f=m.f;

        if(Math.abs(a*d-b*c)<0.01) {
            console.log("fail!");
            return;
        }

        var tx = e, ty = f;

        var sx = Math.sqrt(a*a+b*b);
        a = a/sx;
        b = b/sx;

        var k = a*c+b*d;
        c -= a*k;
        d -= b*k;

        var sy = Math.sqrt(c*c+d*d);
        c = c/sy;
        d = d/sy;
        k = k/sy;

        if((a*d-b*c)<0.0) {
            a = -a;
            b = -b;
            c = -c;
            d = -d;
            sx = -sx;
            sy = -sy;
        }

        var r = Math.atan2(b,a);
        return {"tx":tx, "ty":ty, "r":r, "k":Math.atan(k), "sx":sx, "sy":sy};
    }

    function matrixCompose(ia) {
        var ret = "";
        /* this probably made safari 5.1.1. + os 10.6.8 + non-unibody mac? */
        //ret += "translateZ(0) ";
        ret += "translate("+roundNumber(ia.tx,6)+"px,"+roundNumber(ia.ty,6)+"px) ";
        ret += "rotate("+roundNumber(ia.r,6)+"rad) skewX("+roundNumber(ia.k,6)+"rad) ";
        ret += "scale("+roundNumber(ia.sx,6)+","+roundNumber(ia.sy,6)+")";
        return ret;
    }

    //**********************************//
    //***  Easing functions          ***//
    //**********************************//

    function constructEasingCss(input) {
        if((input instanceof Array)) {
            return "cubic-bezier("+roundNumber(input[0],6)+","+roundNumber(input[1],6)+","+
                                   roundNumber(input[2],6)+","+roundNumber(input[3],6)+")";
        } else {
            return input;
        }
    }

    function constructEasingFunction(input, dur) {
        var params = [];
        if((input instanceof Array)) {
            params = input;
        } else {
            switch(input) {
                case "linear": params = [0.0,0.0,1.0,1.0]; break;
                case "ease": params = [0.25,0.1,0.25,1.0]; break;
                case "ease-in": params = [0.42,0.0,1.0,1.0]; break;
                case "ease-out": params = [0.0,0.0,0.58,1.0]; break;
                case "ease-in-out": params = [0.42,0.0,0.58,1.0]; break;
            }
        }

        var easingFunc = function(t) {
            return cubicBezierAtTime(t, params[0], params[1], params[2], params[3], dur);
        };

        return easingFunc;
    }

    // From: http://www.netzgesta.de/dev/cubic-bezier-timing-function.html
    function cubicBezierAtPosition(t,P1x,P1y,P2x,P2y) {
        var x,y,k=((1-t)*(1-t)*(1-t));
        x=P1x*(3*t*t*(1-t))+P2x*(3*t*(1-t)*(1-t))+k;
        y=P1y*(3*t*t*(1-t))+P2y*(3*t*(1-t)*(1-t))+k;
        return {x:Math.abs(x),y:Math.abs(y)};
    }

    // From: http://www.netzgesta.de/dev/cubic-bezier-timing-function.html
    // 1:1 conversion to js from webkit source files
    // UnitBezier.h, WebCore_animation_AnimationBase.cpp
    function cubicBezierAtTime(t,p1x,p1y,p2x,p2y,duration) {
        var ax=0,bx=0,cx=0,ay=0,by=0,cy=0;
        // `ax t^3 + bx t^2 + cx t' expanded using Horner's rule.
        function sampleCurveX(t) {return ((ax*t+bx)*t+cx)*t;}
        function sampleCurveY(t) {return ((ay*t+by)*t+cy)*t;}
        function sampleCurveDerivativeX(t) {return (3.0*ax*t+2.0*bx)*t+cx;}
        // The epsilon value to pass given that the animation is going to run over |dur| seconds. The longer the
        // animation, the more precision is needed in the timing function result to avoid ugly discontinuities.
        function solveEpsilon(duration) {return 1.0/(200.0*duration);}
        function solve(x,epsilon) {return sampleCurveY(solveCurveX(x,epsilon));}
        // Given an x value, find a parametric value it came from.
        function solveCurveX(x,epsilon) {var t0,t1,t2,x2,d2,i;
            function fabs(n) {if(n>=0) {return n;}else {return 0-n;}}
            // First try a few iterations of Newton's method -- normally very fast.
            for(t2=x, i=0; i<8; i++) {x2=sampleCurveX(t2)-x; if(fabs(x2)<epsilon) {return t2;} d2=sampleCurveDerivativeX(t2); if(fabs(d2)<1e-6) {break;} t2=t2-x2/d2;}
            // Fall back to the bisection method for reliability.
            t0=0.0; t1=1.0; t2=x; if(t2<t0) {return t0;} if(t2>t1) {return t1;}
            while(t0<t1) {x2=sampleCurveX(t2); if(fabs(x2-x)<epsilon) {return t2;} if(x>x2) {t0=t2;}else {t1=t2;} t2=(t1-t0)*0.5+t0;}
            return t2; // Failure.
        }
        // Calculate the polynomial coefficients, implicit first and last control points are (0,0) and (1,1).
        cx=3.0*p1x; bx=3.0*(p2x-p1x)-cx; ax=1.0-cx-bx; cy=3.0*p1y; by=3.0*(p2y-p1y)-cy; ay=1.0-cy-by;
        // Convert from input time to parametric value in curve, then from that to output time.
        return solve(t, solveEpsilon(duration));
    }

    //**********************************//
    //***  CSS Matrix helpers        ***//
    //**********************************//

    function constructAffineFixingRotation(elem, posOffset) {
        var rawTrans = helpers.getElementTransform(elem);
        var matr;
        if(!rawTrans) {
            matr = new PureCSSMatrix();
        } else {
            matr = new PureCSSMatrix(rawTrans);
        }

        if(posOffset) {
            matr = matr.translate(posOffset.x,posOffset.y);
        }

        var current_affine = affineTransformDecompose(matr);
        current_affine.r = getTotalRotation(rawTrans);
        return current_affine;
    }

    function getTotalRotation(transString) {
        var totalRot = 0;
        var items;
        while((items = regexp_trans_splitter.exec(transString)) !== null) {
            var action = items[1].toLowerCase();
            var val = items[2].split(",");
            if(action=="matrix") {
                var recomposedTransItem = action+"("+items[2]+")";
                totalRot += affineTransformDecompose(new PureCSSMatrix(recomposedTransItem)).r;
            } else if(action=="rotate") {
                var raw = val[0];
                var rot = parseFloat(filterNumber(raw));
                if(raw.match(regexp_is_deg)) {
                    rot = (2*Math.PI)*rot/360.0;
                }
                totalRot += rot;
            }
        }
        return totalRot;
    }

    // TODO: use modulo instead of loops
    function fixRotationToSameLap(current_affine, final_affine) {

        if(Math.abs(current_affine.r-final_affine.r)>Math.PI) {
            if(final_affine.r<current_affine.r) {
                while(Math.abs(current_affine.r-final_affine.r)>Math.PI) {
                    final_affine.r+=(2*Math.PI);
                }
            } else {
                while(Math.abs(current_affine.r-final_affine.r)>Math.PI) {
                    final_affine.r-=(2*Math.PI);
                }
            }
        }
        return final_affine;
    }

    //**********************************//
    //***  Helpers                   ***//
    //**********************************//

    function interpolateArrays(st, et, pos) {
        var it = {};
        for(var i in st) {
            if (st.hasOwnProperty(i)) {
                it[i] = st[i]+(et[i]-st[i])*pos;
            }
        }
        return it;
    }

    function roundNumber(number, precision) {
        precision = Math.abs(parseInt(precision,10)) || 0;
        var coefficient = Math.pow(10, precision);
        return Math.round(number*coefficient)/coefficient;
    }

    function filterNumber(x) {
        return x.match(regexp_filter_number);
    }

})(jQuery);;/*
 * jquery.zoomooz-core.js, part of:
 * http://janne.aukia.com/zoomooz
 *
 * Version history:
 * 1.1.5 zoom for scrolled pages without flickering
 * 1.1.0 carousel prev/next navigation
 * 1.0.6 support for jQuery 1.9
 * 1.0.4 fixed examples, iphone tuneups, transform offset fix
 * 1.0.3 added closeclick, code structuring
 * 1.0.2 bug fix on endcallback resetting for native animation
 * 1.0.1 declarative syntax and fixes
 * 0.9.2 working scrolling
 * 0.9.1 simplifying code base and scrolling for non-body zoom roots
 * 0.9.0 fixing margin on first body child
 * 0.8.9 support for jQuery 1.7
 * 0.8.8 fixed a bug with 90 deg rotations
 * 0.8.7 fixed a bug with settings and a couple of demos
 * 0.8.6 fixed a bug with non-body zoom root
 * 0.8.5 basic IE9 support
 * 0.8.1 basic support for scrolling
 * 0.8.0 refactored position code to a separate file
 * 0.7.2 fixed a bug with skew in Webkit
 * 0.7.1 fixed bugs with FF4
 * 0.7.0 support for non-body zoom root
 * 0.6.9 better settings management
 * 0.6.8 root element tuning
 * 0.6.7 adjustable zoom origin (not fully working yet)
 * 0.6.5 zoom origin to center
 * 0.6.3 basic Opera support
 * 0.6.1 refactored to use CSSMatrix classes
 * 0.5.1 initial public version
 *
 * LICENCE INFORMATION:
 *
 * Copyright (c) 2010 Janne Aukia (janne.aukia.com)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL Version 2 (GPL-LICENSE.txt) licenses.
 *
 * LICENCE INFORMATION FOR DERIVED FUNCTIONS:
 *
 * Function computeTotalTransformation based
 * on jquery.fn.offset, copyright John Resig, 2010
 * (MIT and GPL Version 2).
 *
 */

/*jslint sub: true */

(function($) {
    "use strict";

    //**********************************//
    //***  Variables                 ***//
    //**********************************//

    var helpers = $.zoomooz.helpers;

    var animationSettings = ["duration", "easing", "nativeanimation"];

    //**********************************//
    //***  Static setup              ***//
    //**********************************//

    // document.ready needed for scroll bar width
    // calculation
    setupCssStyles();

    //**********************************//
    //***  jQuery functions          ***//
    //**********************************//

    if(!$.zoomooz) {
        $.zoomooz = {};
    }

    /* this can be used for setting the default settings for zoomooz explicitly. */
    $.zoomooz.setup = function(settings) {
        $.zoomooz.defaultSettings = jQuery.extend(constructDefaultSettings(), settings);
    };

    /* returns the zooming settings of a particular element. used by zoomTarget. */
    $.fn.zoomSettings = function(settings) {
        var retValue;
        this.each(function() {
            var $elem = $(this);
            retValue = setupElementSettings($elem, settings);
        });
        return retValue;
    };

    /* the main zooming method. */
    $.fn.zoomTo = function(settings, skipElementSettings) {
        this.each(function() {
            var $this = $(this);

            if(!skipElementSettings) {
                settings = $this.zoomSettings(settings);
            }

            zoomTo($this, settings);

            if(settings.debug) {
                if($("#debug").length===0) {
                    $(settings.root).append('<div id="debug"><div>');
                } else {
                    $("#debug").html("");
                }
                showDebug($this,settings);
            } else {
                if($("#debug").length!==0) {
                    $("#debug").html("");
                }
            }
        });

        return this;
    };

    //**********************************//
    //***  Setup functions           ***//
    //**********************************//

    function setupElementSettings($elem, baseSettings) {

        var settings = jQuery.extend({}, baseSettings);

        if(!$.zoomooz.defaultSettings) {
            $.zoomooz.setup();
        }

        var defaultSettings = $.zoomooz.defaultSettings;
        var elementSettings = jQuery.extend({},settings);

        var key;

        for(key in defaultSettings) {
            if (defaultSettings.hasOwnProperty(key) && !elementSettings[key]) {
                elementSettings[key] = $elem.data(key);
            }
        }

        // FIXME: it would be better, that the animationSettings
        // would come from the jquery.zoomooz-anim file somehow
        for(var i=0;i<animationSettings.length;i++) {
            key = animationSettings[i];
            if(!elementSettings[key]) {
                elementSettings[key] = $elem.data(key);
            }
        }

        return jQuery.extend({}, defaultSettings, elementSettings);
    }

    /* setup css styles in javascript to not need an extra zoomooz.css file for the user to load.
       having the styles here helps also at keeping the css requirements minimal. */
    function setupCssStyles() {
        var style = document.createElement('style');
        style.type = 'text/css';

        var transformOrigin = "";
        helpers.forEachPrefix(function(prefix) {
            transformOrigin += prefix+"transform-origin: 0 0;";
        },true);

        // FIXME: how to remove the html height requirement?
        // FIXME: how to remove the transform origin?
        style.innerHTML = "html {height:100%;}" +
                          ".noScroll{overflow:hidden !important;}" +
                          "* {"+transformOrigin+"}";

        document.getElementsByTagName('head')[0].appendChild(style);

        $(document).ready(function() {
            var scrollBarWidth = window.innerWidth - $("body").width();
            style.innerHTML += "body.noScroll,html.noScroll body{margin-right:"+scrollBarWidth+"px;}";
        });

    }

    function constructDefaultSettings() {
        var retObject = {
            targetsize: 0.9,
            scalemode: "both",
            root: $(document.body),
            debug: false,
            animationendcallback: null,
            closeclick: false
        };

        // FIXME: feat detection would be better
        var isFF = (window.mozInnerScreenX !== undefined);
        retObject.scrollresetbeforezoom = isFF;

        return retObject;
    }

    //**********************************//
    //***  Main zoom function        ***//
    //**********************************//

    function zoomTo(elem, settings) {

        // scrolling:

        var useScrollResetBeforeZoom = settings.scrollresetbeforezoom;

        var scrollData = null;
        var startedZoomFromScroll;

        (function() {
            var $root = settings.root;
            var $scroll = $root.parent();

            if(elem[0] === $root[0]) {
                scrollData = getExistingScrollData($root, $scroll);
            } else if(!$root.data("original-scroll")) {
                startedZoomFromScroll = true;
                scrollData = storeNewScrollData($root, $scroll, useScrollResetBeforeZoom);
            } else if(!useScrollResetBeforeZoom) {
                scrollData = getExistingScrollData($root, $scroll);
            }
        }());

        var rootTransformation;
        var animationendcallback = null;

        setTransformOrigin(settings.root);

        var animScrollData = null;

        if(elem[0] !== settings.root[0]) {
            var inv = computeTotalTransformation(elem, settings.root).inverse();

            if(!useScrollResetBeforeZoom) {
                animScrollData = scrollData;
            }

            rootTransformation = computeViewportTransformation(elem, inv, animScrollData, settings);

            if(settings.animationendcallback) {
                animationendcallback = function() {
                    settings.animationendcallback.call(elem[0]);
                };
            }

        } else {

            if(useScrollResetBeforeZoom) {
                rootTransformation = (new PureCSSMatrix()).translate(-scrollData.x,-scrollData.y);
            }

            animationendcallback = function() {
                var $root = $(settings.root);
                var $scroll = scrollData.elem;

                $scroll.removeClass("noScroll");

                $root.setTransformation(new PureCSSMatrix());
                $root.data("original-scroll",null);

                $(document).off("touchmove");

                if(useScrollResetBeforeZoom) {

                    // this needs to be after the setTransformation and
                    // done with window.scrollTo to not have iPhone repaints
                    if($scroll[0]==document.body || $scroll[0]==window) {
                        window.scrollTo(scrollData.x,scrollData.y);
                    } else {
                        $scroll.scrollLeft(scrollData.x);
                        $scroll.scrollTop(scrollData.y);
                    }

                }

                if(settings.animationendcallback) {
                    settings.animationendcallback.call(elem[0]);
                }
            };
        }

        var animationstartedcallback = null;
        if(useScrollResetBeforeZoom && scrollData && scrollData.animationstartedcallback) {
            animationstartedcallback = scrollData.animationstartedcallback;
        }

        if(!startedZoomFromScroll) {
            animScrollData = false;
        }

        $(settings.root).animateTransformation(rootTransformation, settings, animScrollData, animationendcallback, animationstartedcallback);
    }

    //**********************************//
    //***  Handle scrolling          ***//
    //**********************************//


        function getExistingScrollData($root, $scroll) {
            var scrollData = $root.data("original-scroll");
            if(!scrollData) {
                scrollData = {"elem": $scroll, "x":0,"y:":0};
            }
            return scrollData;
        }

        function storeNewScrollData($root, $scroll, useScrollResetBeforeZoom) {
            // safari
            var scrollY = $root.scrollTop();
            var scrollX = $root.scrollLeft();
            var elem = $root;

            // moz
            if(!scrollY) {
                scrollY = $scroll.scrollTop();
                scrollX = $scroll.scrollLeft();
                elem = $scroll;
            }

            var scrollData = {"elem":elem,"x":scrollX,"y":scrollY};
            $root.data("original-scroll",scrollData);

            $(document).on("touchmove", function(e) {
                e.preventDefault();
            });

            var transformStr = "translate(-"+scrollX+"px,-"+scrollY+"px)";
            helpers.forEachPrefix(function(prefix) {
                $root.css(prefix+"transform", transformStr);
            });

            elem.addClass("noScroll");

            if(useScrollResetBeforeZoom) {
                scrollData.animationstartedcallback = function() {

                    // this needs to be after the setTransformation and
                    // done with window.scrollTo to not have iPhone repaints
                    if(elem[0]==document.body || elem[0]==document) {
                        window.scrollTo(0,0);
                    } else {
                        elem.scrollLeft(0);
                        elem.scrollTop(0);
                    }

                };
            }

            return scrollData;
        }

    //**********************************//
    //***  Element positioning       ***//
    //**********************************//

    function setTransformOrigin(zoomParent) {
        var zoomViewport = $(zoomParent).parent();

        var dw = zoomViewport.width();
        var dh = zoomViewport.height();

        var xrotorigin = dw/2.0;
        var yrotorigin = dh/2.0;

        var offsetStr = printFixedNumber(xrotorigin)+"px "+printFixedNumber(yrotorigin)+"px";

        helpers.forEachPrefix(function(prefix) {
             zoomParent.css(prefix+"transform-origin", offsetStr);
        });
    }

    function computeViewportTransformation(elem, endtrans, scrollData, settings) {
        var zoomAmount = settings.targetsize;
        var zoomMode = settings.scalemode;
        var zoomParent = settings.root;
        var zoomViewport = $(zoomParent).parent();

        var dw = zoomViewport.width();
        var dh = zoomViewport.height();

        var relw = dw/elem.outerWidth();
        var relh = dh/elem.outerHeight();

        var scale;
        if(zoomMode=="width") {
            scale = zoomAmount*relw;
        } else if(zoomMode=="height") {
            scale = zoomAmount*relh;
        } else if(zoomMode=="both") {
            scale = zoomAmount*Math.min(relw,relh);
        } else if(zoomMode=="scale") {
            scale = zoomAmount;
        } else {
            console.log("wrong zoommode");
            return;
        }

        var xoffset = (dw-elem.outerWidth()*scale)/2.0;
        var yoffset = (dh-elem.outerHeight()*scale)/2.0;

        var xrotorigin = dw/2.0;
        var yrotorigin = dh/2.0;

        /* fix for body margins, hope that this does not break anything .. */
        /* see also the part of the fix that is in computeTotalTransformation! */
        var xmarginfix = -parseFloat(zoomParent.css("margin-left")) || 0;
        var ymarginfix = -parseFloat(zoomParent.css("margin-top")) || 0;

        var initTransformation = (new PureCSSMatrix());
        if(scrollData) {
            initTransformation = initTransformation.translate(scrollData.x,scrollData.y);
        }

        var viewportTransformation =
            initTransformation
            .translate(xmarginfix,ymarginfix)
            .translate(-xrotorigin,-yrotorigin)
            .translate(xoffset,yoffset)
            .scale(scale,scale)
            .multiply(endtrans)
            .translate(xrotorigin,yrotorigin);

        return viewportTransformation;
    }

    //**********************************//
    //***  Debugging positioning     ***//
    //**********************************//

    function calcPoint(e,x,y) {
        return [e.a*x+e.c*y+e.e,e.b*x+e.d*y+e.f];
    }

    function showDebug(elem, settings) {
        var e = computeTotalTransformation(elem, settings.root).elements();
        displayLabel(calcPoint(e,0,0));
        displayLabel(calcPoint(e,0,elem.outerHeight()));
        displayLabel(calcPoint(e,elem.outerWidth(),elem.outerHeight()));
        displayLabel(calcPoint(e,elem.outerWidth(),0));
    }

    function displayLabel(pos) {
        var labelStyle = "width:4px;height:4px;background-color:red;position:absolute;margin-left:-2px;margin-top:-2px;";
        labelStyle += 'left:'+pos[0]+'px;top:'+pos[1]+'px;';
        var label = '<div class="debuglabel" style="'+labelStyle+'"></div>';
        $("#debug").append(label);
    }

    //**********************************//
    //***  Calculating element       ***//
    //***  total transformation      ***//
    //**********************************//

    /* Based on:
     * jQuery.fn.offset
     */
    function computeTotalTransformation(input, transformationRootElement) {
        var elem = input[0];
        if( !elem || !elem.ownerDocument ) {
            return null;
        }

        var totalTransformation = new PureCSSMatrix();

        var trans;
        if ( elem === elem.ownerDocument.body ) {
            var bOffset = jQuery.offset.bodyOffset( elem );
            trans = new PureCSSMatrix();
            trans = trans.translate(bOffset.left, bOffset.top);
            totalTransformation = totalTransformation.multiply(trans);
            return totalTransformation;
        }

        var support;
        if(jQuery.offset.initialize) {
            jQuery.offset.initialize();
            support = {
                fixedPosition:jQuery.offset.supportsFixedPosition,
                doesNotAddBorder:jQuery.offset.doesNotAddBorder,
                doesAddBorderForTableAndCells:jQuery.support.doesAddBorderForTableAndCells,
                subtractsBorderForOverflowNotVisible:jQuery.offset.subtractsBorderForOverflowNotVisible
            };
        } else {
            support = jQuery.support;
        }

        var offsetParent = elem.offsetParent;
        var doc = elem.ownerDocument;
        var computedStyle;
        var docElem = doc.documentElement;
        var body = doc.body;
        var root = transformationRootElement[0];
        var defaultView = doc.defaultView;
        var prevComputedStyle;
        if(defaultView) {
            prevComputedStyle = defaultView.getComputedStyle( elem, null );
        } else {
            prevComputedStyle = elem.currentStyle;
        }

        /*
        function offsetParentInsideRoot($elem, $root) {
            // FIXME:
            // wondering, should this be $root.closest()
            // or $root.parent().closest...
            var $viewport = $root.parent();
            var $offsetParent = $elem.offsetParent();
            return ($viewport[0]==$offsetParent[0]) || $viewport.closest($offsetParent).length==0;
        }

        console.log("inside root",offsetParentInsideRoot(input, transformationRootElement));
        */

        var top = elem.offsetTop;
        var left = elem.offsetLeft;

        var transformation = constructTransformation().translate(left,top);
        transformation = transformation.multiply(constructTransformation(elem));
        totalTransformation = transformation.multiply((totalTransformation));
        // loop from node down to root
        while ( (elem = elem.parentNode) && elem !== root) {
            top = 0; left = 0;
            if ( support.fixedPosition && prevComputedStyle.position === "fixed" ) {
                break;
            }
            computedStyle = defaultView ? defaultView.getComputedStyle(elem, null) : elem.currentStyle;
            top  -= elem.scrollTop;
            left -= elem.scrollLeft;
            if ( elem === offsetParent ) {
                top  += elem.offsetTop;
                left += elem.offsetLeft;
                if ( support.doesNotAddBorder && !(support.doesAddBorderForTableAndCells && /^t(able|d|h)$/i.test(elem.nodeName)) ) {
                    top  += parseFloat( computedStyle.borderTopWidth  ) || 0;
                    left += parseFloat( computedStyle.borderLeftWidth ) || 0;
                }
                offsetParent = elem.offsetParent;
            }
            if ( support.subtractsBorderForOverflowNotVisible && computedStyle.overflow !== "visible" ) {
                top  += parseFloat( computedStyle.borderTopWidth  ) || 0;
                left += parseFloat( computedStyle.borderLeftWidth ) || 0;
            }
            prevComputedStyle = computedStyle;

            if(elem.offsetParent==root) {
                top -= parseFloat($(elem.offsetParent).css("margin-top")) || 0;
                left -= parseFloat($(elem.offsetParent).css("margin-left")) || 0;
            }

            transformation = constructTransformation().translate(left,top);
            transformation = transformation.multiply(constructTransformation(elem));
            totalTransformation = transformation.multiply(totalTransformation);

        }

        top = 0;
        left = 0;

        // fixme: should disable these for non-body roots?
        if ( prevComputedStyle.position === "relative" || prevComputedStyle.position === "static" ) {
            top  += body.offsetTop;
            left += body.offsetLeft;
        }
        if ( support.fixedPosition && prevComputedStyle.position === "fixed" ) {
            top  += Math.max( docElem.scrollTop, body.scrollTop );
            left += Math.max( docElem.scrollLeft, body.scrollLeft );
        }

        var itertrans = (new PureCSSMatrix()).translate(left,top);
        totalTransformation = totalTransformation.multiply(itertrans);

        return totalTransformation;

    }

    //**********************************//
    //***  Helpers                   ***//
    //**********************************//

    function printFixedNumber(x) {
        return Number(x).toFixed(6);
    }

    function constructTransformation(elem) {
        var rawTrans = helpers.getElementTransform(elem);
        if(!rawTrans) {
            return new PureCSSMatrix();
        } else {
            return new PureCSSMatrix(rawTrans);
        }
    }

})(jQuery);;/*
 * jquery.zoomooz-zoomTarget.js, part of:
 * http://janne.aukia.com/zoomooz
 *
 * LICENCE INFORMATION:
 *
 * Copyright (c) 2010 Janne Aukia (janne.aukia.com)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL Version 2 (GPL-LICENSE.txt) licenses.
 *
 */

/*jslint sub: true */

(function($) {
    "use strict";

    if(!$.zoomooz) {
        $.zoomooz = {};
    }

    //**********************************//
    //***  Variables                 ***//
    //**********************************//

    var helpers = $.zoomooz.helpers;

    //**********************************//
    //***  jQuery functions          ***//
    //**********************************//

    $.fn.zoomTarget = function(baseSettings) {
        this.each(function() {
            var settings = $(this).zoomSettings(baseSettings);
            setupClickHandler($(this),$(this),settings);
        });
    };

    //**********************************//
    //***  Helper functions          ***//
    //**********************************//

    function setupClickHandler(clickTarget, zoomTarget, settings) {
        clickTarget.addClass("zoomTarget");

        if(!settings.animationendcallback) {
            if(!settings.closeclick) {
                settings.animationendcallback = function() {
                    $(".selectedZoomTarget").removeClass("selectedZoomTarget zoomNotClickable");
                    clickTarget.addClass("selectedZoomTarget zoomNotClickable");
                };
            } else {
                settings.animationendcallback = function() {
                    $(".selectedZoomTarget").removeClass("selectedZoomTarget zoomNotClickable");
                    clickTarget.addClass("selectedZoomTarget");
                };
            }
        }

        var zoomContainer = zoomTarget.closest(".zoomContainer");
        if(zoomContainer.length!==0) {
            settings.root = zoomContainer;
        }

        var $root = settings.root;

        if(!$root.hasClass("zoomTarget")) {

            var rootSettings = $root.zoomSettings({});

            rootSettings.animationendcallback = function() {
                var $elem = $(this);
                $(".selectedZoomTarget").removeClass("selectedZoomTarget zoomNotClickable");
                $elem.addClass("selectedZoomTarget zoomNotClickable");
                $elem.parent().addClass("selectedZoomTarget zoomNotClickable");
            };

            setupClickHandler($root,$root,rootSettings);
            setupClickHandler($root.parent(),$root,rootSettings);

            // FIXME: there could be many of these called simultaneously,
            // don't know what would happen then
            $root.click();
        }

        clickTarget.on("click", function(evt) {

            // closeclick not available here...
            if(settings.closeclick && zoomTarget.hasClass("selectedZoomTarget")) {
                settings.root.click();
            } else {
                zoomTarget.zoomTo(settings);
            }
            evt.stopPropagation();
        });
    }

    //**********************************//
    //***  Setup functions           ***//
    //**********************************//

    /* setup css styles in javascript to not need an extra zoomooz.css file for the user to load.
       having the styles here helps also at keeping the css requirements minimal. */
    function setupCssStyles() {
        var style = document.createElement('style');
        style.type = 'text/css';

        function setupSelectionCss(enabled) {
            var selectionString = "-webkit-touch-callout: "+(enabled?"default":"none")+";";
            helpers.forEachPrefix(function(prefix) {
                selectionString += prefix+"user-select:"+(enabled?"text":"none")+";";
            },true);
            return selectionString;
        }

        // FIXME: how to remove the html height requirement?
        // FIXME: how to remove the transform origin?
        style.innerHTML = ".zoomTarget{"+setupSelectionCss(false)+"}"+
                          ".zoomTarget:hover{cursor:pointer!important;}"+
                          ".zoomNotClickable{"+setupSelectionCss(true)+"}"+
                          ".zoomNotClickable:hover{cursor:auto!important;}"+
                          /* padding to fix margin collapse issues */
                          ".zoomContainer{position:relative;padding:1px;margin:-1px;}";

        document.getElementsByTagName('head')[0].appendChild(style);
    }

    //**********************************//
    //***  Static setup              ***//
    //**********************************//

    setupCssStyles();

    // make all elements with the zoomTarget class zooming
    $(document).ready(function() {
        // this needs to be after the "$.fn.zoomTarget" has been initialized
        $(".zoomTarget").zoomTarget();
    });

})(jQuery);
;/*
 * jquery.zoomooz-zoomContainer.js, part of:
 * http://janne.aukia.com/zoomooz
 *
 * LICENCE INFORMATION:
 *
 * Copyright (c) 2010 Janne Aukia (janne.aukia.com)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL Version 2 (GPL-LICENSE.txt) licenses.
 *
 */

/*jslint sub: true */

(function($) {
    "use strict";

    if(!$.zoomooz) {
        $.zoomooz = {};
    }

    //**********************************//
    //***  Variables                 ***//
    //**********************************//

    //var helpers = $.zoomooz.helpers;


    //**********************************//
    //***  jQuery functions          ***//
    //**********************************//

    $.fn.zoomContainer = function(settings) {

        // add next and previous calls to the canvas
        // (auto detect next and previous buttons)

    };

    //**********************************//
    //***  Static setup              ***//
    //**********************************//

    // FIXME: move zoomContainer styling here?
    //setupCssStyles();

    // make all elements with the zoomContainer class zooming containers
    $(document).ready(function() {
        // this needs to be after the "$.fn.zoomContainer" has been initialized
        $(".zoomContainer").zoomContainer();
    });

})(jQuery);
;/*
 * jquery.zoomooz-zoomButton.js, part of:
 * http://janne.aukia.com/zoomooz
 *
 * LICENCE INFORMATION:
 *
 * Copyright (c) 2010 Janne Aukia (janne.aukia.com)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL Version 2 (GPL-LICENSE.txt) licenses.
 *
 */

/*jslint sub: true */

(function($) {

    if(!$.zoomooz) {
        $.zoomooz = {};
    }

    //**********************************//
    //***  Variables                 ***//
    //**********************************//

    var helpers = $.zoomooz.helpers;

    //**********************************//
    //***  jQuery functions          ***//
    //**********************************//

    $.fn.zoomButton = function(baseSettings) {
        this.each(function() {
            var settings = setupZoomButtonSettings($(this),baseSettings);
            setupClickHandler($(this),settings);
        });
    };

    //**********************************//
    //***  Setup functions           ***//
    //**********************************//

    function setupZoomButtonSettings($elem, settings) {

        var defaultSettings = constructDefaultSettings();
        var elementSettings = jQuery.extend({},settings);

        // FIXME: could move the core declarative stuff to a separate lib or file

        for(var key in defaultSettings) {
            if (defaultSettings.hasOwnProperty(key) && !elementSettings[key]) {
                if(defaultSettings[key] instanceof jQuery) {
                    elementSettings[key] = $($elem.data(key));
                } else {
                    elementSettings[key] = $elem.data(key);
                }
            }
        }

        return jQuery.extend({}, defaultSettings, elementSettings);
    }

    function constructDefaultSettings() {
        return {
            type: "next",
            root: $(document.body),
            wrap: "true"
        };
    }

    //**********************************//
    //***  Helper functions          ***//
    //**********************************//

    function setupClickHandler(clickTarget, settings) {

        clickTarget.addClass("zoomButton");

        var $root;

        if(settings.root.hasClass("zoomContainer")) {
            $root = settings.root;
        } else {
            $root = settings.root.find(".zoomContainer");
        }

        var displayList = (function() {
            var listData = jQuery.makeArray($root.find(".zoomTarget"));

            function _getIndex(elem) {
                return listData.indexOf(elem);
            }

            function _getNext(elem) {
                var index = _getIndex(elem)+1;
                if(index<listData.length && index!==0) {
                    return listData[index];
                } else {
                    return null;
                }
            }

            function _getPrev(elem) {
                var index = _getIndex(elem)-1;
                if(index<0) {
                    return null;
                } else {
                    return listData[index];
                }
            }

            function _getFirst() {
                return listData[0];
            }

            function _getLast() {
                return listData[listData.length-1];
            }

            return {
                next: _getNext,
                prev: _getPrev,
                last: _getLast,
                first: _getFirst
            };
        }());

        clickTarget.on("click", function(evt) {

            var target;
            var performZoom = true;

            var $selected = $root.find(".selectedZoomTarget");

            if($selected.length===0) {
                $selected = displayList.first();
            }

            if(settings.type.indexOf("prev")===0) {
                target = displayList.prev($selected[0]);
                if(target === null) {
                    if(settings.wrap) {
                        target = displayList.last();
                    } else {
                        performZoom = false;
                    }
                }
            } else {
                target = displayList.next($selected[0]);
                if(target === null) {
                    if(settings.wrap) {
                        target = displayList.first();
                    } else {
                        performZoom = false;
                    }
                }
            }

            if(performZoom) {
                // not this easy! would need to read the data fields
                //target.zoomTo();

                // FIXME: hacky...
                target.click();
            } else {
                // don't do anything if no wrap
                // (would be great if the button was disabled)
            }

            evt.stopPropagation();
        });
    }

    //**********************************//
    //***  Static setup              ***//
    //**********************************//

    // make all elements with the zoomButton class activate
    $(document).ready(function() {
        // this needs to be after the "$.fn.zoomButton" has been initialized
        $(".zoomButton").zoomButton();
    });

})(jQuery);
;/*!
 * jQuery imagesLoaded plugin v2.1.1
 * http://github.com/desandro/imagesloaded
 *
 * MIT License. by Paul Irish et al.
 */

/*jshint curly: true, eqeqeq: true, noempty: true, strict: true, undef: true, browser: true */
/*global jQuery: false */

;(function($, undefined) {
'use strict';

// blank image data-uri bypasses webkit log warning (thx doug jones)
var BLANK = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';

$.fn.imagesLoaded = function( callback ) {
	var $this = this,
		deferred = $.isFunction($.Deferred) ? $.Deferred() : 0,
		hasNotify = $.isFunction(deferred.notify),
		$images = $this.find('img').add( $this.filter('img') ),
		loaded = [],
		proper = [],
		broken = [];

	// Register deferred callbacks
	if ($.isPlainObject(callback)) {
		$.each(callback, function (key, value) {
			if (key === 'callback') {
				callback = value;
			} else if (deferred) {
				deferred[key](value);
			}
		});
	}

	function doneLoading() {
		var $proper = $(proper),
			$broken = $(broken);

		if ( deferred ) {
			if ( broken.length ) {
				deferred.reject( $images, $proper, $broken );
			} else {
				deferred.resolve( $images );
			}
		}

		if ( $.isFunction( callback ) ) {
			callback.call( $this, $images, $proper, $broken );
		}
	}

	function imgLoadedHandler( event ) {
		imgLoaded( event.target, event.type === 'error' );
	}

	function imgLoaded( img, isBroken ) {
		// don't proceed if BLANK image, or image is already loaded
		if ( img.src === BLANK || $.inArray( img, loaded ) !== -1 ) {
			return;
		}

		// store element in loaded images array
		loaded.push( img );

		// keep track of broken and properly loaded images
		if ( isBroken ) {
			broken.push( img );
		} else {
			proper.push( img );
		}

		// cache image and its state for future calls
		$.data( img, 'imagesLoaded', { isBroken: isBroken, src: img.src } );

		// trigger deferred progress method if present
		if ( hasNotify ) {
			deferred.notifyWith( $(img), [ isBroken, $images, $(proper), $(broken) ] );
		}

		// call doneLoading and clean listeners if all images are loaded
		if ( $images.length === loaded.length ) {
			setTimeout( doneLoading );
			$images.unbind( '.imagesLoaded', imgLoadedHandler );
		}
	}

	// if no images, trigger immediately
	if ( !$images.length ) {
		doneLoading();
	} else {
		$images.bind( 'load.imagesLoaded error.imagesLoaded', imgLoadedHandler )
		.each( function( i, el ) {
			var src = el.src;

			// find out if this image has been already checked for status
			// if it was, and src has not changed, call imgLoaded on it
			var cached = $.data( el, 'imagesLoaded' );
			if ( cached && cached.src === src ) {
				imgLoaded( el, cached.isBroken );
				return;
			}

			// if complete is true and browser supports natural sizes, try
			// to check for image status manually
			if ( el.complete && el.naturalWidth !== undefined ) {
				imgLoaded( el, el.naturalWidth === 0 || el.naturalHeight === 0 );
				return;
			}

			// cached images don't fire load sometimes, so we reset src, but only when
			// dealing with IE, or image is complete (loaded) and failed manual check
			// webkit hack from http://groups.google.com/group/jquery-dev/browse_thread/thread/eee6ab7b2da50e1f
			if ( el.readyState || el.complete ) {
				el.src = BLANK;
				el.src = src;
			}
		});
	}

	return deferred ? deferred.promise( $this ) : $this;
};

})(jQuery);;/*!
 * jQuery Transit - CSS3 transitions and transformations
 * (c) 2011-2012 Rico Sta. Cruz <rico@ricostacruz.com>
 * MIT Licensed.
 *
 * http://ricostacruz.com/jquery.transit
 * http://github.com/rstacruz/jquery.transit
 */

(function($) {
  $.transit = {
    version: "0.9.9",

    // Map of $.css() keys to values for 'transitionProperty'.
    // See https://developer.mozilla.org/en/CSS/CSS_transitions#Properties_that_can_be_animated
    propertyMap: {
      marginLeft    : 'margin',
      marginRight   : 'margin',
      marginBottom  : 'margin',
      marginTop     : 'margin',
      paddingLeft   : 'padding',
      paddingRight  : 'padding',
      paddingBottom : 'padding',
      paddingTop    : 'padding'
    },

    // Will simply transition "instantly" if false
    enabled: true,

    // Set this to false if you don't want to use the transition end property.
    useTransitionEnd: false
  };

  var div = document.createElement('div');
  var support = {};

  // Helper function to get the proper vendor property name.
  // (`transition` => `WebkitTransition`)
  function getVendorPropertyName(prop) {
    // Handle unprefixed versions (FF16+, for example)
    if (prop in div.style) return prop;

    var prefixes = ['Moz', 'Webkit', 'O', 'ms'];
    var prop_ = prop.charAt(0).toUpperCase() + prop.substr(1);

    if (prop in div.style) { return prop; }

    for (var i=0; i<prefixes.length; ++i) {
      var vendorProp = prefixes[i] + prop_;
      if (vendorProp in div.style) { return vendorProp; }
    }
  }

  // Helper function to check if transform3D is supported.
  // Should return true for Webkits and Firefox 10+.
  function checkTransform3dSupport() {
    div.style[support.transform] = '';
    div.style[support.transform] = 'rotateY(90deg)';
    return div.style[support.transform] !== '';
  }

  var isChrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;

  // Check for the browser's transitions support.
  support.transition      = getVendorPropertyName('transition');
  support.transitionDelay = getVendorPropertyName('transitionDelay');
  support.transform       = getVendorPropertyName('transform');
  support.transformOrigin = getVendorPropertyName('transformOrigin');
  support.transform3d     = checkTransform3dSupport();

  var eventNames = {
    'transition':       'transitionEnd',
    'MozTransition':    'transitionend',
    'OTransition':      'oTransitionEnd',
    'WebkitTransition': 'webkitTransitionEnd',
    'msTransition':     'MSTransitionEnd'
  };

  // Detect the 'transitionend' event needed.
  var transitionEnd = support.transitionEnd = eventNames[support.transition] || null;

  // Populate jQuery's `$.support` with the vendor prefixes we know.
  // As per [jQuery's cssHooks documentation](http://api.jquery.com/jQuery.cssHooks/),
  // we set $.support.transition to a string of the actual property name used.
  for (var key in support) {
    if (support.hasOwnProperty(key) && typeof $.support[key] === 'undefined') {
      $.support[key] = support[key];
    }
  }

  // Avoid memory leak in IE.
  div = null;

  // ## $.cssEase
  // List of easing aliases that you can use with `$.fn.transition`.
  $.cssEase = {
    '_default':       'ease',
    'in':             'ease-in',
    'out':            'ease-out',
    'in-out':         'ease-in-out',
    'snap':           'cubic-bezier(0,1,.5,1)',
    // Penner equations
    'easeOutCubic':   'cubic-bezier(.215,.61,.355,1)',
    'easeInOutCubic': 'cubic-bezier(.645,.045,.355,1)',
    'easeInCirc':     'cubic-bezier(.6,.04,.98,.335)',
    'easeOutCirc':    'cubic-bezier(.075,.82,.165,1)',
    'easeInOutCirc':  'cubic-bezier(.785,.135,.15,.86)',
    'easeInExpo':     'cubic-bezier(.95,.05,.795,.035)',
    'easeOutExpo':    'cubic-bezier(.19,1,.22,1)',
    'easeInOutExpo':  'cubic-bezier(1,0,0,1)',
    'easeInQuad':     'cubic-bezier(.55,.085,.68,.53)',
    'easeOutQuad':    'cubic-bezier(.25,.46,.45,.94)',
    'easeInOutQuad':  'cubic-bezier(.455,.03,.515,.955)',
    'easeInQuart':    'cubic-bezier(.895,.03,.685,.22)',
    'easeOutQuart':   'cubic-bezier(.165,.84,.44,1)',
    'easeInOutQuart': 'cubic-bezier(.77,0,.175,1)',
    'easeInQuint':    'cubic-bezier(.755,.05,.855,.06)',
    'easeOutQuint':   'cubic-bezier(.23,1,.32,1)',
    'easeInOutQuint': 'cubic-bezier(.86,0,.07,1)',
    'easeInSine':     'cubic-bezier(.47,0,.745,.715)',
    'easeOutSine':    'cubic-bezier(.39,.575,.565,1)',
    'easeInOutSine':  'cubic-bezier(.445,.05,.55,.95)',
    'easeInBack':     'cubic-bezier(.6,-.28,.735,.045)',
    'easeOutBack':    'cubic-bezier(.175, .885,.32,1.275)',
    'easeInOutBack':  'cubic-bezier(.68,-.55,.265,1.55)'
  };

  // ## 'transform' CSS hook
  // Allows you to use the `transform` property in CSS.
  //
  //     $("#hello").css({ transform: "rotate(90deg)" });
  //
  //     $("#hello").css('transform');
  //     //=> { rotate: '90deg' }
  //
  $.cssHooks['transit:transform'] = {
    // The getter returns a `Transform` object.
    get: function(elem) {
      return $(elem).data('transform') || new Transform();
    },

    // The setter accepts a `Transform` object or a string.
    set: function(elem, v) {
      var value = v;

      if (!(value instanceof Transform)) {
        value = new Transform(value);
      }

      // We've seen the 3D version of Scale() not work in Chrome when the
      // element being scaled extends outside of the viewport.  Thus, we're
      // forcing Chrome to not use the 3d transforms as well.  Not sure if
      // translate is affectede, but not risking it.  Detection code from
      // http://davidwalsh.name/detecting-google-chrome-javascript
      if (support.transform === 'WebkitTransform' && !isChrome) {
        elem.style[support.transform] = value.toString(true);
      } else {
        elem.style[support.transform] = value.toString();
      }

      $(elem).data('transform', value);
    }
  };

  // Add a CSS hook for `.css({ transform: '...' })`.
  // In jQuery 1.8+, this will intentionally override the default `transform`
  // CSS hook so it'll play well with Transit. (see issue #62)
  $.cssHooks.transform = {
    set: $.cssHooks['transit:transform'].set
  };

  // jQuery 1.8+ supports prefix-free transitions, so these polyfills will not
  // be necessary.
  if ($.fn.jquery < "1.8") {
    // ## 'transformOrigin' CSS hook
    // Allows the use for `transformOrigin` to define where scaling and rotation
    // is pivoted.
    //
    //     $("#hello").css({ transformOrigin: '0 0' });
    //
    $.cssHooks.transformOrigin = {
      get: function(elem) {
        return elem.style[support.transformOrigin];
      },
      set: function(elem, value) {
        elem.style[support.transformOrigin] = value;
      }
    };

    // ## 'transition' CSS hook
    // Allows you to use the `transition` property in CSS.
    //
    //     $("#hello").css({ transition: 'all 0 ease 0' });
    //
    $.cssHooks.transition = {
      get: function(elem) {
        return elem.style[support.transition];
      },
      set: function(elem, value) {
        elem.style[support.transition] = value;
      }
    };
  }

  // ## Other CSS hooks
  // Allows you to rotate, scale and translate.
  registerCssHook('scale');
  registerCssHook('translate');
  registerCssHook('rotate');
  registerCssHook('rotateX');
  registerCssHook('rotateY');
  registerCssHook('rotate3d');
  registerCssHook('perspective');
  registerCssHook('skewX');
  registerCssHook('skewY');
  registerCssHook('x', true);
  registerCssHook('y', true);

  // ## Transform class
  // This is the main class of a transformation property that powers
  // `$.fn.css({ transform: '...' })`.
  //
  // This is, in essence, a dictionary object with key/values as `-transform`
  // properties.
  //
  //     var t = new Transform("rotate(90) scale(4)");
  //
  //     t.rotate             //=> "90deg"
  //     t.scale              //=> "4,4"
  //
  // Setters are accounted for.
  //
  //     t.set('rotate', 4)
  //     t.rotate             //=> "4deg"
  //
  // Convert it to a CSS string using the `toString()` and `toString(true)` (for WebKit)
  // functions.
  //
  //     t.toString()         //=> "rotate(90deg) scale(4,4)"
  //     t.toString(true)     //=> "rotate(90deg) scale3d(4,4,0)" (WebKit version)
  //
  function Transform(str) {
    if (typeof str === 'string') { this.parse(str); }
    return this;
  }

  Transform.prototype = {
    // ### setFromString()
    // Sets a property from a string.
    //
    //     t.setFromString('scale', '2,4');
    //     // Same as set('scale', '2', '4');
    //
    setFromString: function(prop, val) {
      var args =
        (typeof val === 'string')  ? val.split(',') :
        (val.constructor === Array) ? val :
        [ val ];

      args.unshift(prop);

      Transform.prototype.set.apply(this, args);
    },

    // ### set()
    // Sets a property.
    //
    //     t.set('scale', 2, 4);
    //
    set: function(prop) {
      var args = Array.prototype.slice.apply(arguments, [1]);
      if (this.setter[prop]) {
        this.setter[prop].apply(this, args);
      } else {
        this[prop] = args.join(',');
      }
    },

    get: function(prop) {
      if (this.getter[prop]) {
        return this.getter[prop].apply(this);
      } else {
        return this[prop] || 0;
      }
    },

    setter: {
      // ### rotate
      //
      //     .css({ rotate: 30 })
      //     .css({ rotate: "30" })
      //     .css({ rotate: "30deg" })
      //     .css({ rotate: "30deg" })
      //
      rotate: function(theta) {
        this.rotate = unit(theta, 'deg');
      },

      rotateX: function(theta) {
        this.rotateX = unit(theta, 'deg');
      },

      rotateY: function(theta) {
        this.rotateY = unit(theta, 'deg');
      },

      // ### scale
      //
      //     .css({ scale: 9 })      //=> "scale(9,9)"
      //     .css({ scale: '3,2' })  //=> "scale(3,2)"
      //
      scale: function(x, y) {
        if (y === undefined) { y = x; }
        this.scale = x + "," + y;
      },

      // ### skewX + skewY
      skewX: function(x) {
        this.skewX = unit(x, 'deg');
      },

      skewY: function(y) {
        this.skewY = unit(y, 'deg');
      },

      // ### perspectvie
      perspective: function(dist) {
        this.perspective = unit(dist, 'px');
      },

      // ### x / y
      // Translations. Notice how this keeps the other value.
      //
      //     .css({ x: 4 })       //=> "translate(4px, 0)"
      //     .css({ y: 10 })      //=> "translate(4px, 10px)"
      //
      x: function(x) {
        this.set('translate', x, null);
      },

      y: function(y) {
        this.set('translate', null, y);
      },

      // ### translate
      // Notice how this keeps the other value.
      //
      //     .css({ translate: '2, 5' })    //=> "translate(2px, 5px)"
      //
      translate: function(x, y) {
        if (this._translateX === undefined) { this._translateX = 0; }
        if (this._translateY === undefined) { this._translateY = 0; }

        if (x !== null && x !== undefined) { this._translateX = unit(x, 'px'); }
        if (y !== null && y !== undefined) { this._translateY = unit(y, 'px'); }

        this.translate = this._translateX + "," + this._translateY;
      }
    },

    getter: {
      x: function() {
        return this._translateX || 0;
      },

      y: function() {
        return this._translateY || 0;
      },

      scale: function() {
        var s = (this.scale || "1,1").split(',');
        if (s[0]) { s[0] = parseFloat(s[0]); }
        if (s[1]) { s[1] = parseFloat(s[1]); }

        // "2.5,2.5" => 2.5
        // "2.5,1" => [2.5,1]
        return (s[0] === s[1]) ? s[0] : s;
      },

      rotate3d: function() {
        var s = (this.rotate3d || "0,0,0,0deg").split(',');
        for (var i=0; i<=3; ++i) {
          if (s[i]) { s[i] = parseFloat(s[i]); }
        }
        if (s[3]) { s[3] = unit(s[3], 'deg'); }

        return s;
      }
    },

    // ### parse()
    // Parses from a string. Called on constructor.
    parse: function(str) {
      var self = this;
      str.replace(/([a-zA-Z0-9]+)\((.*?)\)/g, function(x, prop, val) {
        self.setFromString(prop, val);
      });
    },

    // ### toString()
    // Converts to a `transition` CSS property string. If `use3d` is given,
    // it converts to a `-webkit-transition` CSS property string instead.
    toString: function(use3d) {
      var re = [];

      for (var i in this) {
        if (this.hasOwnProperty(i)) {
          // Don't use 3D transformations if the browser can't support it.
          if ((!support.transform3d) && (
            (i === 'rotateX') ||
            (i === 'rotateY') ||
            (i === 'perspective') ||
            (i === 'transformOrigin'))) { continue; }

          if (i[0] !== '_') {
            if (use3d && (i === 'scale')) {
              re.push(i + "3d(" + this[i] + ",1)");
            } else if (use3d && (i === 'translate')) {
              re.push(i + "3d(" + this[i] + ",0)");
            } else {
              re.push(i + "(" + this[i] + ")");
            }
          }
        }
      }

      return re.join(" ");
    }
  };

  function callOrQueue(self, queue, fn) {
    if (queue === true) {
      self.queue(fn);
    } else if (queue) {
      self.queue(queue, fn);
    } else {
      fn();
    }
  }

  // ### getProperties(dict)
  // Returns properties (for `transition-property`) for dictionary `props`. The
  // value of `props` is what you would expect in `$.css(...)`.
  function getProperties(props) {
    var re = [];

    $.each(props, function(key) {
      key = $.camelCase(key); // Convert "text-align" => "textAlign"
      key = $.transit.propertyMap[key] || $.cssProps[key] || key;
      key = uncamel(key); // Convert back to dasherized

      if ($.inArray(key, re) === -1) { re.push(key); }
    });

    return re;
  }

  // ### getTransition()
  // Returns the transition string to be used for the `transition` CSS property.
  //
  // Example:
  //
  //     getTransition({ opacity: 1, rotate: 30 }, 500, 'ease');
  //     //=> 'opacity 500ms ease, -webkit-transform 500ms ease'
  //
  function getTransition(properties, duration, easing, delay) {
    // Get the CSS properties needed.
    var props = getProperties(properties);

    // Account for aliases (`in` => `ease-in`).
    if ($.cssEase[easing]) { easing = $.cssEase[easing]; }

    // Build the duration/easing/delay attributes for it.
    var attribs = '' + toMS(duration) + ' ' + easing;
    if (parseInt(delay, 10) > 0) { attribs += ' ' + toMS(delay); }

    // For more properties, add them this way:
    // "margin 200ms ease, padding 200ms ease, ..."
    var transitions = [];
    $.each(props, function(i, name) {
      transitions.push(name + ' ' + attribs);
    });

    return transitions.join(', ');
  }

  // ## $.fn.transition
  // Works like $.fn.animate(), but uses CSS transitions.
  //
  //     $("...").transition({ opacity: 0.1, scale: 0.3 });
  //
  //     // Specific duration
  //     $("...").transition({ opacity: 0.1, scale: 0.3 }, 500);
  //
  //     // With duration and easing
  //     $("...").transition({ opacity: 0.1, scale: 0.3 }, 500, 'in');
  //
  //     // With callback
  //     $("...").transition({ opacity: 0.1, scale: 0.3 }, function() { ... });
  //
  //     // With everything
  //     $("...").transition({ opacity: 0.1, scale: 0.3 }, 500, 'in', function() { ... });
  //
  //     // Alternate syntax
  //     $("...").transition({
  //       opacity: 0.1,
  //       duration: 200,
  //       delay: 40,
  //       easing: 'in',
  //       complete: function() { /* ... */ }
  //      });
  //
  $.fn.transition = $.fn.transit = function(properties, duration, easing, callback) {
    var self  = this;
    var delay = 0;
    var queue = true;

    // Account for `.transition(properties, callback)`.
    if (typeof duration === 'function') {
      callback = duration;
      duration = undefined;
    }

    // Account for `.transition(properties, duration, callback)`.
    if (typeof easing === 'function') {
      callback = easing;
      easing = undefined;
    }

    // Alternate syntax.
    if (typeof properties.easing !== 'undefined') {
      easing = properties.easing;
      delete properties.easing;
    }

    if (typeof properties.duration !== 'undefined') {
      duration = properties.duration;
      delete properties.duration;
    }

    if (typeof properties.complete !== 'undefined') {
      callback = properties.complete;
      delete properties.complete;
    }

    if (typeof properties.queue !== 'undefined') {
      queue = properties.queue;
      delete properties.queue;
    }

    if (typeof properties.delay !== 'undefined') {
      delay = properties.delay;
      delete properties.delay;
    }

    // Set defaults. (`400` duration, `ease` easing)
    if (typeof duration === 'undefined') { duration = $.fx.speeds._default; }
    if (typeof easing === 'undefined')   { easing = $.cssEase._default; }

    duration = toMS(duration);

    // Build the `transition` property.
    var transitionValue = getTransition(properties, duration, easing, delay);

    // Compute delay until callback.
    // If this becomes 0, don't bother setting the transition property.
    var work = $.transit.enabled && support.transition;
    var i = work ? (parseInt(duration, 10) + parseInt(delay, 10)) : 0;

    // If there's nothing to do...
    if (i === 0) {
      var fn = function(next) {
        self.css(properties);
        if (callback) { callback.apply(self); }
        if (next) { next(); }
      };

      callOrQueue(self, queue, fn);
      return self;
    }

    // Save the old transitions of each element so we can restore it later.
    var oldTransitions = {};

    var run = function(nextCall) {
      var bound = false;

      // Prepare the callback.
      var cb = function() {
        if (bound) { self.unbind(transitionEnd, cb); }

        if (i > 0) {
          self.each(function() {
            this.style[support.transition] = (oldTransitions[this] || null);
          });
        }

        if (typeof callback === 'function') { callback.apply(self); }
        if (typeof nextCall === 'function') { nextCall(); }
      };

      if ((i > 0) && (transitionEnd) && ($.transit.useTransitionEnd)) {
        // Use the 'transitionend' event if it's available.
        bound = true;
        self.bind(transitionEnd, cb);
      } else {
        // Fallback to timers if the 'transitionend' event isn't supported.
        window.setTimeout(cb, i);
      }

      // Apply transitions.
      self.each(function() {
        if (i > 0) {
          this.style[support.transition] = transitionValue;
        }
        $(this).css(properties);
      });
    };

    // Defer running. This allows the browser to paint any pending CSS it hasn't
    // painted yet before doing the transitions.
    var deferredRun = function(next) {
        this.offsetWidth; // force a repaint
        run(next);
    };

    // Use jQuery's fx queue.
    callOrQueue(self, queue, deferredRun);

    // Chainability.
    return this;
  };

  function registerCssHook(prop, isPixels) {
    // For certain properties, the 'px' should not be implied.
    if (!isPixels) { $.cssNumber[prop] = true; }

    $.transit.propertyMap[prop] = support.transform;

    $.cssHooks[prop] = {
      get: function(elem) {
        var t = $(elem).css('transit:transform');
        return t.get(prop);
      },

      set: function(elem, value) {
        var t = $(elem).css('transit:transform');
        t.setFromString(prop, value);

        $(elem).css({ 'transit:transform': t });
      }
    };

  }

  // ### uncamel(str)
  // Converts a camelcase string to a dasherized string.
  // (`marginLeft` => `margin-left`)
  function uncamel(str) {
    return str.replace(/([A-Z])/g, function(letter) { return '-' + letter.toLowerCase(); });
  }

  // ### unit(number, unit)
  // Ensures that number `number` has a unit. If no unit is found, assume the
  // default is `unit`.
  //
  //     unit(2, 'px')          //=> "2px"
  //     unit("30deg", 'rad')   //=> "30deg"
  //
  function unit(i, units) {
    if ((typeof i === "string") && (!i.match(/^[\-0-9\.]+$/))) {
      return i;
    } else {
      return "" + i + units;
    }
  }

  // ### toMS(duration)
  // Converts given `duration` to a millisecond string.
  //
  //     toMS('fast')   //=> '400ms'
  //     toMS(10)       //=> '10ms'
  //
  function toMS(duration) {
    var i = duration;

    // Allow for string durations like 'fast'.
    if ($.fx.speeds[i]) { i = $.fx.speeds[i]; }

    return unit(i, 'ms');
  }

  // Export some functions for testable-ness.
  $.transit.getTransitionValue = getTransition;
})(jQuery);
;/*!
 * jQuery Mousewheel 3.1.13
 *
 * Copyright 2015 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a:a(jQuery)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120===0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b),d=c["offsetParent"in a.fn?"offsetParent":"parent"]();return d.length||(d=a("body")),parseInt(d.css("fontSize"),10)||parseInt(c.css("fontSize"),10)||16},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})});;
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
;/*
---
MooTools: the javascript framework

web build:
 - http://mootools.net/core/3d1b81cc31675bdfb1cfdf58818ad97a

packager build:
 - packager build Core/Core Core/Array Core/String Core/Number Core/Function Core/Object Core/Event Core/Browser Core/Class Core/Class.Extras Core/Slick.Parser Core/Slick.Finder Core/Element Core/Element.Style Core/Element.Event Core/Element.Dimensions Core/Fx Core/Fx.CSS Core/Fx.Tween Core/Fx.Morph Core/Fx.Transitions Core/Request Core/Request.HTML Core/Request.JSON Core/Cookie Core/JSON Core/DOMReady

copyrights:
  - [MooTools](http://mootools.net)

licenses:
  - [MIT License](http://mootools.net/license.txt)
...
*/
(function(){this.MooTools={version:"1.3.2",build:"c9f1ff10e9e7facb65e9481049ed1b450959d587"};var e=this.typeOf=function(i){if(i==null){return"null";}if(i.$family){return i.$family();
}if(i.nodeName){if(i.nodeType==1){return"element";}if(i.nodeType==3){return(/\S/).test(i.nodeValue)?"textnode":"whitespace";}}else{if(typeof i.length=="number"){if(i.callee){return"arguments";
}if("item" in i){return"collection";}}}return typeof i;};var u=this.instanceOf=function(w,i){if(w==null){return false;}var v=w.$constructor||w.constructor;
while(v){if(v===i){return true;}v=v.parent;}return w instanceof i;};var f=this.Function;var r=true;for(var q in {toString:1}){r=null;}if(r){r=["hasOwnProperty","valueOf","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","constructor"];
}f.prototype.overloadSetter=function(v){var i=this;return function(x,w){if(x==null){return this;}if(v||typeof x!="string"){for(var y in x){i.call(this,y,x[y]);
}if(r){for(var z=r.length;z--;){y=r[z];if(x.hasOwnProperty(y)){i.call(this,y,x[y]);}}}}else{i.call(this,x,w);}return this;};};f.prototype.overloadGetter=function(v){var i=this;
return function(x){var y,w;if(v||typeof x!="string"){y=x;}else{if(arguments.length>1){y=arguments;}}if(y){w={};for(var z=0;z<y.length;z++){w[y[z]]=i.call(this,y[z]);
}}else{w=i.call(this,x);}return w;};};f.prototype.extend=function(i,v){this[i]=v;}.overloadSetter();f.prototype.implement=function(i,v){this.prototype[i]=v;
}.overloadSetter();var o=Array.prototype.slice;f.from=function(i){return(e(i)=="function")?i:function(){return i;};};Array.from=function(i){if(i==null){return[];
}return(k.isEnumerable(i)&&typeof i!="string")?(e(i)=="array")?i:o.call(i):[i];};Number.from=function(v){var i=parseFloat(v);return isFinite(i)?i:null;
};String.from=function(i){return i+"";};f.implement({hide:function(){this.$hidden=true;return this;},protect:function(){this.$protected=true;return this;
}});var k=this.Type=function(x,w){if(x){var v=x.toLowerCase();var i=function(y){return(e(y)==v);};k["is"+x]=i;if(w!=null){w.prototype.$family=(function(){return v;
}).hide();w.type=i;}}if(w==null){return null;}w.extend(this);w.$constructor=k;w.prototype.$constructor=w;return w;};var p=Object.prototype.toString;k.isEnumerable=function(i){return(i!=null&&typeof i.length=="number"&&p.call(i)!="[object Function]");
};var b={};var d=function(i){var v=e(i.prototype);return b[v]||(b[v]=[]);};var h=function(w,A){if(A&&A.$hidden){return;}var v=d(this);for(var x=0;x<v.length;
x++){var z=v[x];if(e(z)=="type"){h.call(z,w,A);}else{z.call(this,w,A);}}var y=this.prototype[w];if(y==null||!y.$protected){this.prototype[w]=A;}if(this[w]==null&&e(A)=="function"){t.call(this,w,function(i){return A.apply(i,o.call(arguments,1));
});}};var t=function(i,w){if(w&&w.$hidden){return;}var v=this[i];if(v==null||!v.$protected){this[i]=w;}};k.implement({implement:h.overloadSetter(),extend:t.overloadSetter(),alias:function(i,v){h.call(this,i,this.prototype[v]);
}.overloadSetter(),mirror:function(i){d(this).push(i);return this;}});new k("Type",k);var c=function(v,z,x){var w=(z!=Object),D=z.prototype;if(w){z=new k(v,z);
}for(var A=0,y=x.length;A<y;A++){var E=x[A],C=z[E],B=D[E];if(C){C.protect();}if(w&&B){delete D[E];D[E]=B.protect();}}if(w){z.implement(D);}return c;};c("String",String,["charAt","charCodeAt","concat","indexOf","lastIndexOf","match","quote","replace","search","slice","split","substr","substring","toLowerCase","toUpperCase"])("Array",Array,["pop","push","reverse","shift","sort","splice","unshift","concat","join","slice","indexOf","lastIndexOf","filter","forEach","every","map","some","reduce","reduceRight"])("Number",Number,["toExponential","toFixed","toLocaleString","toPrecision"])("Function",f,["apply","call","bind"])("RegExp",RegExp,["exec","test"])("Object",Object,["create","defineProperty","defineProperties","keys","getPrototypeOf","getOwnPropertyDescriptor","getOwnPropertyNames","preventExtensions","isExtensible","seal","isSealed","freeze","isFrozen"])("Date",Date,["now"]);
Object.extend=t.overloadSetter();Date.extend("now",function(){return +(new Date);});new k("Boolean",Boolean);Number.prototype.$family=function(){return isFinite(this)?"number":"null";
}.hide();Number.extend("random",function(v,i){return Math.floor(Math.random()*(i-v+1)+v);});var l=Object.prototype.hasOwnProperty;Object.extend("forEach",function(i,w,x){for(var v in i){if(l.call(i,v)){w.call(x,i[v],v,i);
}}});Object.each=Object.forEach;Array.implement({forEach:function(x,y){for(var w=0,v=this.length;w<v;w++){if(w in this){x.call(y,this[w],w,this);}}},each:function(i,v){Array.forEach(this,i,v);
return this;}});var s=function(i){switch(e(i)){case"array":return i.clone();case"object":return Object.clone(i);default:return i;}};Array.implement("clone",function(){var v=this.length,w=new Array(v);
while(v--){w[v]=s(this[v]);}return w;});var a=function(v,i,w){switch(e(w)){case"object":if(e(v[i])=="object"){Object.merge(v[i],w);}else{v[i]=Object.clone(w);
}break;case"array":v[i]=w.clone();break;default:v[i]=w;}return v;};Object.extend({merge:function(C,y,x){if(e(y)=="string"){return a(C,y,x);}for(var B=1,w=arguments.length;
B<w;B++){var z=arguments[B];for(var A in z){a(C,A,z[A]);}}return C;},clone:function(i){var w={};for(var v in i){w[v]=s(i[v]);}return w;},append:function(z){for(var y=1,w=arguments.length;
y<w;y++){var v=arguments[y]||{};for(var x in v){z[x]=v[x];}}return z;}});["Object","WhiteSpace","TextNode","Collection","Arguments"].each(function(i){new k(i);
});var j=Date.now();String.extend("uniqueID",function(){return(j++).toString(36);});var g=this.Hash=new k("Hash",function(i){if(e(i)=="hash"){i=Object.clone(i.getClean());
}for(var v in i){this[v]=i[v];}return this;});g.implement({forEach:function(i,v){Object.forEach(this,i,v);},getClean:function(){var v={};for(var i in this){if(this.hasOwnProperty(i)){v[i]=this[i];
}}return v;},getLength:function(){var v=0;for(var i in this){if(this.hasOwnProperty(i)){v++;}}return v;}});g.alias("each","forEach");Object.type=k.isObject;
var n=this.Native=function(i){return new k(i.name,i.initialize);};n.type=k.type;n.implement=function(x,v){for(var w=0;w<x.length;w++){x[w].implement(v);
}return n;};var m=Array.type;Array.type=function(i){return u(i,Array)||m(i);};this.$A=function(i){return Array.from(i).slice();};this.$arguments=function(v){return function(){return arguments[v];
};};this.$chk=function(i){return !!(i||i===0);};this.$clear=function(i){clearTimeout(i);clearInterval(i);return null;};this.$defined=function(i){return(i!=null);
};this.$each=function(w,v,x){var i=e(w);((i=="arguments"||i=="collection"||i=="array"||i=="elements")?Array:Object).each(w,v,x);};this.$empty=function(){};
this.$extend=function(v,i){return Object.append(v,i);};this.$H=function(i){return new g(i);};this.$merge=function(){var i=Array.slice(arguments);i.unshift({});
return Object.merge.apply(null,i);};this.$lambda=f.from;this.$mixin=Object.merge;this.$random=Number.random;this.$splat=Array.from;this.$time=Date.now;
this.$type=function(i){var v=e(i);if(v=="elements"){return"array";}return(v=="null")?false:v;};this.$unlink=function(i){switch(e(i)){case"object":return Object.clone(i);
case"array":return Array.clone(i);case"hash":return new g(i);default:return i;}};})();Array.implement({every:function(c,d){for(var b=0,a=this.length;b<a;
b++){if((b in this)&&!c.call(d,this[b],b,this)){return false;}}return true;},filter:function(d,e){var c=[];for(var b=0,a=this.length;b<a;b++){if((b in this)&&d.call(e,this[b],b,this)){c.push(this[b]);
}}return c;},indexOf:function(c,d){var a=this.length;for(var b=(d<0)?Math.max(0,a+d):d||0;b<a;b++){if(this[b]===c){return b;}}return -1;},map:function(d,e){var c=[];
for(var b=0,a=this.length;b<a;b++){if(b in this){c[b]=d.call(e,this[b],b,this);}}return c;},some:function(c,d){for(var b=0,a=this.length;b<a;b++){if((b in this)&&c.call(d,this[b],b,this)){return true;
}}return false;},clean:function(){return this.filter(function(a){return a!=null;});},invoke:function(a){var b=Array.slice(arguments,1);return this.map(function(c){return c[a].apply(c,b);
});},associate:function(c){var d={},b=Math.min(this.length,c.length);for(var a=0;a<b;a++){d[c[a]]=this[a];}return d;},link:function(c){var a={};for(var e=0,b=this.length;
e<b;e++){for(var d in c){if(c[d](this[e])){a[d]=this[e];delete c[d];break;}}}return a;},contains:function(a,b){return this.indexOf(a,b)!=-1;},append:function(a){this.push.apply(this,a);
return this;},getLast:function(){return(this.length)?this[this.length-1]:null;},getRandom:function(){return(this.length)?this[Number.random(0,this.length-1)]:null;
},include:function(a){if(!this.contains(a)){this.push(a);}return this;},combine:function(c){for(var b=0,a=c.length;b<a;b++){this.include(c[b]);}return this;
},erase:function(b){for(var a=this.length;a--;){if(this[a]===b){this.splice(a,1);}}return this;},empty:function(){this.length=0;return this;},flatten:function(){var d=[];
for(var b=0,a=this.length;b<a;b++){var c=typeOf(this[b]);if(c=="null"){continue;}d=d.concat((c=="array"||c=="collection"||c=="arguments"||instanceOf(this[b],Array))?Array.flatten(this[b]):this[b]);
}return d;},pick:function(){for(var b=0,a=this.length;b<a;b++){if(this[b]!=null){return this[b];}}return null;},hexToRgb:function(b){if(this.length!=3){return null;
}var a=this.map(function(c){if(c.length==1){c+=c;}return c.toInt(16);});return(b)?a:"rgb("+a+")";},rgbToHex:function(d){if(this.length<3){return null;}if(this.length==4&&this[3]==0&&!d){return"transparent";
}var b=[];for(var a=0;a<3;a++){var c=(this[a]-0).toString(16);b.push((c.length==1)?"0"+c:c);}return(d)?b:"#"+b.join("");}});Array.alias("extend","append");
var $pick=function(){return Array.from(arguments).pick();};String.implement({test:function(a,b){return((typeOf(a)=="regexp")?a:new RegExp(""+a,b)).test(this);
},contains:function(a,b){return(b)?(b+this+b).indexOf(b+a+b)>-1:this.indexOf(a)>-1;},trim:function(){return this.replace(/^\s+|\s+$/g,"");},clean:function(){return this.replace(/\s+/g," ").trim();
},camelCase:function(){return this.replace(/-\D/g,function(a){return a.charAt(1).toUpperCase();});},hyphenate:function(){return this.replace(/[A-Z]/g,function(a){return("-"+a.charAt(0).toLowerCase());
});},capitalize:function(){return this.replace(/\b[a-z]/g,function(a){return a.toUpperCase();});},escapeRegExp:function(){return this.replace(/([-.*+?^${}()|[\]\/\\])/g,"\\$1");
},toInt:function(a){return parseInt(this,a||10);},toFloat:function(){return parseFloat(this);},hexToRgb:function(b){var a=this.match(/^#?(\w{1,2})(\w{1,2})(\w{1,2})$/);
return(a)?a.slice(1).hexToRgb(b):null;},rgbToHex:function(b){var a=this.match(/\d{1,3}/g);return(a)?a.rgbToHex(b):null;},substitute:function(a,b){return this.replace(b||(/\\?\{([^{}]+)\}/g),function(d,c){if(d.charAt(0)=="\\"){return d.slice(1);
}return(a[c]!=null)?a[c]:"";});}});Number.implement({limit:function(b,a){return Math.min(a,Math.max(b,this));},round:function(a){a=Math.pow(10,a||0).toFixed(a<0?-a:0);
return Math.round(this*a)/a;},times:function(b,c){for(var a=0;a<this;a++){b.call(c,a,this);}},toFloat:function(){return parseFloat(this);},toInt:function(a){return parseInt(this,a||10);
}});Number.alias("each","times");(function(b){var a={};b.each(function(c){if(!Number[c]){a[c]=function(){return Math[c].apply(null,[this].concat(Array.from(arguments)));
};}});Number.implement(a);})(["abs","acos","asin","atan","atan2","ceil","cos","exp","floor","log","max","min","pow","sin","sqrt","tan"]);Function.extend({attempt:function(){for(var b=0,a=arguments.length;
b<a;b++){try{return arguments[b]();}catch(c){}}return null;}});Function.implement({attempt:function(a,c){try{return this.apply(c,Array.from(a));}catch(b){}return null;
},bind:function(c){var a=this,b=(arguments.length>1)?Array.slice(arguments,1):null;return function(){if(!b&&!arguments.length){return a.call(c);}if(b&&arguments.length){return a.apply(c,b.concat(Array.from(arguments)));
}return a.apply(c,b||arguments);};},pass:function(b,c){var a=this;if(b!=null){b=Array.from(b);}return function(){return a.apply(c,b||arguments);};},delay:function(b,c,a){return setTimeout(this.pass((a==null?[]:a),c),b);
},periodical:function(c,b,a){return setInterval(this.pass((a==null?[]:a),b),c);}});delete Function.prototype.bind;Function.implement({create:function(b){var a=this;
b=b||{};return function(d){var c=b.arguments;c=(c!=null)?Array.from(c):Array.slice(arguments,(b.event)?1:0);if(b.event){c=[d||window.event].extend(c);}var e=function(){return a.apply(b.bind||null,c);
};if(b.delay){return setTimeout(e,b.delay);}if(b.periodical){return setInterval(e,b.periodical);}if(b.attempt){return Function.attempt(e);}return e();};
},bind:function(c,b){var a=this;if(b!=null){b=Array.from(b);}return function(){return a.apply(c,b||arguments);};},bindWithEvent:function(c,b){var a=this;
if(b!=null){b=Array.from(b);}return function(d){return a.apply(c,(b==null)?arguments:[d].concat(b));};},run:function(a,b){return this.apply(b,Array.from(a));
}});var $try=Function.attempt;(function(){var a=Object.prototype.hasOwnProperty;Object.extend({subset:function(d,g){var f={};for(var e=0,b=g.length;e<b;
e++){var c=g[e];if(c in d){f[c]=d[c];}}return f;},map:function(b,e,f){var d={};for(var c in b){if(a.call(b,c)){d[c]=e.call(f,b[c],c,b);}}return d;},filter:function(b,e,g){var d={};
for(var c in b){var f=b[c];if(a.call(b,c)&&e.call(g,f,c,b)){d[c]=f;}}return d;},every:function(b,d,e){for(var c in b){if(a.call(b,c)&&!d.call(e,b[c],c)){return false;
}}return true;},some:function(b,d,e){for(var c in b){if(a.call(b,c)&&d.call(e,b[c],c)){return true;}}return false;},keys:function(b){var d=[];for(var c in b){if(a.call(b,c)){d.push(c);
}}return d;},values:function(c){var b=[];for(var d in c){if(a.call(c,d)){b.push(c[d]);}}return b;},getLength:function(b){return Object.keys(b).length;},keyOf:function(b,d){for(var c in b){if(a.call(b,c)&&b[c]===d){return c;
}}return null;},contains:function(b,c){return Object.keyOf(b,c)!=null;},toQueryString:function(b,c){var d=[];Object.each(b,function(h,g){if(c){g=c+"["+g+"]";
}var f;switch(typeOf(h)){case"object":f=Object.toQueryString(h,g);break;case"array":var e={};h.each(function(k,j){e[j]=k;});f=Object.toQueryString(e,g);
break;default:f=g+"="+encodeURIComponent(h);}if(h!=null){d.push(f);}});return d.join("&");}});})();Hash.implement({has:Object.prototype.hasOwnProperty,keyOf:function(a){return Object.keyOf(this,a);
},hasValue:function(a){return Object.contains(this,a);},extend:function(a){Hash.each(a||{},function(c,b){Hash.set(this,b,c);},this);return this;},combine:function(a){Hash.each(a||{},function(c,b){Hash.include(this,b,c);
},this);return this;},erase:function(a){if(this.hasOwnProperty(a)){delete this[a];}return this;},get:function(a){return(this.hasOwnProperty(a))?this[a]:null;
},set:function(a,b){if(!this[a]||this.hasOwnProperty(a)){this[a]=b;}return this;},empty:function(){Hash.each(this,function(b,a){delete this[a];},this);
return this;},include:function(a,b){if(this[a]==null){this[a]=b;}return this;},map:function(a,b){return new Hash(Object.map(this,a,b));},filter:function(a,b){return new Hash(Object.filter(this,a,b));
},every:function(a,b){return Object.every(this,a,b);},some:function(a,b){return Object.some(this,a,b);},getKeys:function(){return Object.keys(this);},getValues:function(){return Object.values(this);
},toQueryString:function(a){return Object.toQueryString(this,a);}});Hash.extend=Object.append;Hash.alias({indexOf:"keyOf",contains:"hasValue"});(function(){var l=this.document;
var j=l.window=this;var b=1;this.$uid=(j.ActiveXObject)?function(e){return(e.uid||(e.uid=[b++]))[0];}:function(e){return e.uid||(e.uid=b++);};$uid(j);$uid(l);
var a=navigator.userAgent.toLowerCase(),c=navigator.platform.toLowerCase(),k=a.match(/(opera|ie|firefox|chrome|version)[\s\/:]([\w\d\.]+)?.*?(safari|version[\s\/:]([\w\d\.]+)|$)/)||[null,"unknown",0],g=k[1]=="ie"&&l.documentMode;
var p=this.Browser={extend:Function.prototype.extend,name:(k[1]=="version")?k[3]:k[1],version:g||parseFloat((k[1]=="opera"&&k[4])?k[4]:k[2]),Platform:{name:a.match(/ip(?:ad|od|hone)/)?"ios":(a.match(/(?:webos|android)/)||c.match(/mac|win|linux/)||["other"])[0]},Features:{xpath:!!(l.evaluate),air:!!(j.runtime),query:!!(l.querySelector),json:!!(j.JSON)},Plugins:{}};
p[p.name]=true;p[p.name+parseInt(p.version,10)]=true;p.Platform[p.Platform.name]=true;p.Request=(function(){var r=function(){return new XMLHttpRequest();
};var q=function(){return new ActiveXObject("MSXML2.XMLHTTP");};var e=function(){return new ActiveXObject("Microsoft.XMLHTTP");};return Function.attempt(function(){r();
return r;},function(){q();return q;},function(){e();return e;});})();p.Features.xhr=!!(p.Request);var i=(Function.attempt(function(){return navigator.plugins["Shockwave Flash"].description;
},function(){return new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version");})||"0 r0").match(/\d+/g);p.Plugins.Flash={version:Number(i[0]||"0."+i[1])||0,build:Number(i[2])||0};
p.exec=function(q){if(!q){return q;}if(j.execScript){j.execScript(q);}else{var e=l.createElement("script");e.setAttribute("type","text/javascript");e.text=q;
l.head.appendChild(e);l.head.removeChild(e);}return q;};String.implement("stripScripts",function(q){var e="";var r=this.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi,function(s,t){e+=t+"\n";
return"";});if(q===true){p.exec(e);}else{if(typeOf(q)=="function"){q(e,r);}}return r;});p.extend({Document:this.Document,Window:this.Window,Element:this.Element,Event:this.Event});
this.Window=this.$constructor=new Type("Window",function(){});this.$family=Function.from("window").hide();Window.mirror(function(e,q){j[e]=q;});this.Document=l.$constructor=new Type("Document",function(){});
l.$family=Function.from("document").hide();Document.mirror(function(e,q){l[e]=q;});l.html=l.documentElement;if(!l.head){l.head=l.getElementsByTagName("head")[0];
}if(l.execCommand){try{l.execCommand("BackgroundImageCache",false,true);}catch(h){}}if(this.attachEvent&&!this.addEventListener){var d=function(){this.detachEvent("onunload",d);
l.head=l.html=l.window=null;};this.attachEvent("onunload",d);}var n=Array.from;try{n(l.html.childNodes);}catch(h){Array.from=function(q){if(typeof q!="string"&&Type.isEnumerable(q)&&typeOf(q)!="array"){var e=q.length,r=new Array(e);
while(e--){r[e]=q[e];}return r;}return n(q);};var m=Array.prototype,o=m.slice;["pop","push","reverse","shift","sort","splice","unshift","concat","join","slice"].each(function(e){var q=m[e];
Array[e]=function(r){return q.apply(Array.from(r),o.call(arguments,1));};});}if(p.Platform.ios){p.Platform.ipod=true;}p.Engine={};var f=function(q,e){p.Engine.name=q;
p.Engine[q+e]=true;p.Engine.version=e;};if(p.ie){p.Engine.trident=true;switch(p.version){case 6:f("trident",4);break;case 7:f("trident",5);break;case 8:f("trident",6);
}}if(p.firefox){p.Engine.gecko=true;if(p.version>=3){f("gecko",19);}else{f("gecko",18);}}if(p.safari||p.chrome){p.Engine.webkit=true;switch(p.version){case 2:f("webkit",419);
break;case 3:f("webkit",420);break;case 4:f("webkit",525);}}if(p.opera){p.Engine.presto=true;if(p.version>=9.6){f("presto",960);}else{if(p.version>=9.5){f("presto",950);
}else{f("presto",925);}}}if(p.name=="unknown"){switch((a.match(/(?:webkit|khtml|gecko)/)||[])[0]){case"webkit":case"khtml":p.Engine.webkit=true;break;case"gecko":p.Engine.gecko=true;
}}this.$exec=p.exec;})();var Event=new Type("Event",function(a,i){if(!i){i=window;}var o=i.document;a=a||i.event;if(a.$extended){return a;}this.$extended=true;
var n=a.type,k=a.target||a.srcElement,m={},c={},q=null,h,l,b,p;while(k&&k.nodeType==3){k=k.parentNode;}if(n.indexOf("key")!=-1){b=a.which||a.keyCode;p=Object.keyOf(Event.Keys,b);
if(n=="keydown"){var d=b-111;if(d>0&&d<13){p="f"+d;}}if(!p){p=String.fromCharCode(b).toLowerCase();}}else{if((/click|mouse|menu/i).test(n)){o=(!o.compatMode||o.compatMode=="CSS1Compat")?o.html:o.body;
m={x:(a.pageX!=null)?a.pageX:a.clientX+o.scrollLeft,y:(a.pageY!=null)?a.pageY:a.clientY+o.scrollTop};c={x:(a.pageX!=null)?a.pageX-i.pageXOffset:a.clientX,y:(a.pageY!=null)?a.pageY-i.pageYOffset:a.clientY};
if((/DOMMouseScroll|mousewheel/).test(n)){l=(a.wheelDelta)?a.wheelDelta/120:-(a.detail||0)/3;}h=(a.which==3)||(a.button==2);if((/over|out/).test(n)){q=a.relatedTarget||a[(n=="mouseover"?"from":"to")+"Element"];
var j=function(){while(q&&q.nodeType==3){q=q.parentNode;}return true;};var g=(Browser.firefox2)?j.attempt():j();q=(g)?q:null;}}else{if((/gesture|touch/i).test(n)){this.rotation=a.rotation;
this.scale=a.scale;this.targetTouches=a.targetTouches;this.changedTouches=a.changedTouches;var f=this.touches=a.touches;if(f&&f[0]){var e=f[0];m={x:e.pageX,y:e.pageY};
c={x:e.clientX,y:e.clientY};}}}}return Object.append(this,{event:a,type:n,page:m,client:c,rightClick:h,wheel:l,relatedTarget:document.id(q),target:document.id(k),code:b,key:p,shift:a.shiftKey,control:a.ctrlKey,alt:a.altKey,meta:a.metaKey});
});Event.Keys={enter:13,up:38,down:40,left:37,right:39,esc:27,space:32,backspace:8,tab:9,"delete":46};Event.Keys=new Hash(Event.Keys);Event.implement({stop:function(){return this.stopPropagation().preventDefault();
},stopPropagation:function(){if(this.event.stopPropagation){this.event.stopPropagation();}else{this.event.cancelBubble=true;}return this;},preventDefault:function(){if(this.event.preventDefault){this.event.preventDefault();
}else{this.event.returnValue=false;}return this;}});(function(){var a=this.Class=new Type("Class",function(h){if(instanceOf(h,Function)){h={initialize:h};
}var g=function(){e(this);if(g.$prototyping){return this;}this.$caller=null;var i=(this.initialize)?this.initialize.apply(this,arguments):this;this.$caller=this.caller=null;
return i;}.extend(this).implement(h);g.$constructor=a;g.prototype.$constructor=g;g.prototype.parent=c;return g;});var c=function(){if(!this.$caller){throw new Error('The method "parent" cannot be called.');
}var g=this.$caller.$name,h=this.$caller.$owner.parent,i=(h)?h.prototype[g]:null;if(!i){throw new Error('The method "'+g+'" has no parent.');}return i.apply(this,arguments);
};var e=function(g){for(var h in g){var j=g[h];switch(typeOf(j)){case"object":var i=function(){};i.prototype=j;g[h]=e(new i);break;case"array":g[h]=j.clone();
break;}}return g;};var b=function(g,h,j){if(j.$origin){j=j.$origin;}var i=function(){if(j.$protected&&this.$caller==null){throw new Error('The method "'+h+'" cannot be called.');
}var l=this.caller,m=this.$caller;this.caller=m;this.$caller=i;var k=j.apply(this,arguments);this.$caller=m;this.caller=l;return k;}.extend({$owner:g,$origin:j,$name:h});
return i;};var f=function(h,i,g){if(a.Mutators.hasOwnProperty(h)){i=a.Mutators[h].call(this,i);if(i==null){return this;}}if(typeOf(i)=="function"){if(i.$hidden){return this;
}this.prototype[h]=(g)?i:b(this,h,i);}else{Object.merge(this.prototype,h,i);}return this;};var d=function(g){g.$prototyping=true;var h=new g;delete g.$prototyping;
return h;};a.implement("implement",f.overloadSetter());a.Mutators={Extends:function(g){this.parent=g;this.prototype=d(g);},Implements:function(g){Array.from(g).each(function(j){var h=new j;
for(var i in h){f.call(this,i,h[i],true);}},this);}};})();(function(){this.Chain=new Class({$chain:[],chain:function(){this.$chain.append(Array.flatten(arguments));
return this;},callChain:function(){return(this.$chain.length)?this.$chain.shift().apply(this,arguments):false;},clearChain:function(){this.$chain.empty();
return this;}});var a=function(b){return b.replace(/^on([A-Z])/,function(c,d){return d.toLowerCase();});};this.Events=new Class({$events:{},addEvent:function(d,c,b){d=a(d);
if(c==$empty){return this;}this.$events[d]=(this.$events[d]||[]).include(c);if(b){c.internal=true;}return this;},addEvents:function(b){for(var c in b){this.addEvent(c,b[c]);
}return this;},fireEvent:function(e,c,b){e=a(e);var d=this.$events[e];if(!d){return this;}c=Array.from(c);d.each(function(f){if(b){f.delay(b,this,c);}else{f.apply(this,c);
}},this);return this;},removeEvent:function(e,d){e=a(e);var c=this.$events[e];if(c&&!d.internal){var b=c.indexOf(d);if(b!=-1){delete c[b];}}return this;
},removeEvents:function(d){var e;if(typeOf(d)=="object"){for(e in d){this.removeEvent(e,d[e]);}return this;}if(d){d=a(d);}for(e in this.$events){if(d&&d!=e){continue;
}var c=this.$events[e];for(var b=c.length;b--;){if(b in c){this.removeEvent(e,c[b]);}}}return this;}});this.Options=new Class({setOptions:function(){var b=this.options=Object.merge.apply(null,[{},this.options].append(arguments));
if(this.addEvent){for(var c in b){if(typeOf(b[c])!="function"||!(/^on[A-Z]/).test(c)){continue;}this.addEvent(c,b[c]);delete b[c];}}return this;}});})();
(function(){var k,n,l,g,a={},c={},m=/\\/g;var e=function(q,p){if(q==null){return null;}if(q.Slick===true){return q;}q=(""+q).replace(/^\s+|\s+$/g,"");g=!!p;
var o=(g)?c:a;if(o[q]){return o[q];}k={Slick:true,expressions:[],raw:q,reverse:function(){return e(this.raw,true);}};n=-1;while(q!=(q=q.replace(j,b))){}k.length=k.expressions.length;
return o[k.raw]=(g)?h(k):k;};var i=function(o){if(o==="!"){return" ";}else{if(o===" "){return"!";}else{if((/^!/).test(o)){return o.replace(/^!/,"");}else{return"!"+o;
}}}};var h=function(u){var r=u.expressions;for(var p=0;p<r.length;p++){var t=r[p];var q={parts:[],tag:"*",combinator:i(t[0].combinator)};for(var o=0;o<t.length;
o++){var s=t[o];if(!s.reverseCombinator){s.reverseCombinator=" ";}s.combinator=s.reverseCombinator;delete s.reverseCombinator;}t.reverse().push(q);}return u;
};var f=function(o){return o.replace(/[-[\]{}()*+?.\\^$|,#\s]/g,function(p){return"\\"+p;});};var j=new RegExp("^(?:\\s*(,)\\s*|\\s*(<combinator>+)\\s*|(\\s+)|(<unicode>+|\\*)|\\#(<unicode>+)|\\.(<unicode>+)|\\[\\s*(<unicode1>+)(?:\\s*([*^$!~|]?=)(?:\\s*(?:([\"']?)(.*?)\\9)))?\\s*\\](?!\\])|(:+)(<unicode>+)(?:\\((?:(?:([\"'])([^\\13]*)\\13)|((?:\\([^)]+\\)|[^()]*)+))\\))?)".replace(/<combinator>/,"["+f(">+~`!@$%^&={}\\;</")+"]").replace(/<unicode>/g,"(?:[\\w\\u00a1-\\uFFFF-]|\\\\[^\\s0-9a-f])").replace(/<unicode1>/g,"(?:[:\\w\\u00a1-\\uFFFF-]|\\\\[^\\s0-9a-f])"));
function b(x,s,D,z,r,C,q,B,A,y,u,F,G,v,p,w){if(s||n===-1){k.expressions[++n]=[];l=-1;if(s){return"";}}if(D||z||l===-1){D=D||" ";var t=k.expressions[n];
if(g&&t[l]){t[l].reverseCombinator=i(D);}t[++l]={combinator:D,tag:"*"};}var o=k.expressions[n][l];if(r){o.tag=r.replace(m,"");}else{if(C){o.id=C.replace(m,"");
}else{if(q){q=q.replace(m,"");if(!o.classList){o.classList=[];}if(!o.classes){o.classes=[];}o.classList.push(q);o.classes.push({value:q,regexp:new RegExp("(^|\\s)"+f(q)+"(\\s|$)")});
}else{if(G){w=w||p;w=w?w.replace(m,""):null;if(!o.pseudos){o.pseudos=[];}o.pseudos.push({key:G.replace(m,""),value:w,type:F.length==1?"class":"element"});
}else{if(B){B=B.replace(m,"");u=(u||"").replace(m,"");var E,H;switch(A){case"^=":H=new RegExp("^"+f(u));break;case"$=":H=new RegExp(f(u)+"$");break;case"~=":H=new RegExp("(^|\\s)"+f(u)+"(\\s|$)");
break;case"|=":H=new RegExp("^"+f(u)+"(-|$)");break;case"=":E=function(I){return u==I;};break;case"*=":E=function(I){return I&&I.indexOf(u)>-1;};break;
case"!=":E=function(I){return u!=I;};break;default:E=function(I){return !!I;};}if(u==""&&(/^[*$^]=$/).test(A)){E=function(){return false;};}if(!E){E=function(I){return I&&H.test(I);
};}if(!o.attributes){o.attributes=[];}o.attributes.push({key:B,operator:A,value:u,test:E});}}}}}return"";}var d=(this.Slick||{});d.parse=function(o){return e(o);
};d.escapeRegExp=f;if(!this.Slick){this.Slick=d;}}).apply((typeof exports!="undefined")?exports:this);(function(){var j={},l={},b=Object.prototype.toString;
j.isNativeCode=function(c){return(/\{\s*\[native code\]\s*\}/).test(""+c);};j.isXML=function(c){return(!!c.xmlVersion)||(!!c.xml)||(b.call(c)=="[object XMLDocument]")||(c.nodeType==9&&c.documentElement.nodeName!="HTML");
};j.setDocument=function(w){var t=w.nodeType;if(t==9){}else{if(t){w=w.ownerDocument;}else{if(w.navigator){w=w.document;}else{return;}}}if(this.document===w){return;
}this.document=w;var y=w.documentElement,u=this.getUIDXML(y),o=l[u],A;if(o){for(A in o){this[A]=o[A];}return;}o=l[u]={};o.root=y;o.isXMLDocument=this.isXML(w);
o.brokenStarGEBTN=o.starSelectsClosedQSA=o.idGetsName=o.brokenMixedCaseQSA=o.brokenGEBCN=o.brokenCheckedQSA=o.brokenEmptyAttributeQSA=o.isHTMLDocument=o.nativeMatchesSelector=false;
var m,n,x,q,r;var s,c="slick_uniqueid";var z=w.createElement("div");var p=w.body||w.getElementsByTagName("body")[0]||y;p.appendChild(z);try{z.innerHTML='<a id="'+c+'"></a>';
o.isHTMLDocument=!!w.getElementById(c);}catch(v){}if(o.isHTMLDocument){z.style.display="none";z.appendChild(w.createComment(""));n=(z.getElementsByTagName("*").length>1);
try{z.innerHTML="foo</foo>";s=z.getElementsByTagName("*");m=(s&&!!s.length&&s[0].nodeName.charAt(0)=="/");}catch(v){}o.brokenStarGEBTN=n||m;try{z.innerHTML='<a name="'+c+'"></a><b id="'+c+'"></b>';
o.idGetsName=w.getElementById(c)===z.firstChild;}catch(v){}if(z.getElementsByClassName){try{z.innerHTML='<a class="f"></a><a class="b"></a>';z.getElementsByClassName("b").length;
z.firstChild.className="b";q=(z.getElementsByClassName("b").length!=2);}catch(v){}try{z.innerHTML='<a class="a"></a><a class="f b a"></a>';x=(z.getElementsByClassName("a").length!=2);
}catch(v){}o.brokenGEBCN=q||x;}if(z.querySelectorAll){try{z.innerHTML="foo</foo>";s=z.querySelectorAll("*");o.starSelectsClosedQSA=(s&&!!s.length&&s[0].nodeName.charAt(0)=="/");
}catch(v){}try{z.innerHTML='<a class="MiX"></a>';o.brokenMixedCaseQSA=!z.querySelectorAll(".MiX").length;}catch(v){}try{z.innerHTML='<select><option selected="selected">a</option></select>';
o.brokenCheckedQSA=(z.querySelectorAll(":checked").length==0);}catch(v){}try{z.innerHTML='<a class=""></a>';o.brokenEmptyAttributeQSA=(z.querySelectorAll('[class*=""]').length!=0);
}catch(v){}}try{z.innerHTML='<form action="s"><input id="action"/></form>';r=(z.firstChild.getAttribute("action")!="s");}catch(v){}o.nativeMatchesSelector=y.matchesSelector||y.mozMatchesSelector||y.webkitMatchesSelector;
if(o.nativeMatchesSelector){try{o.nativeMatchesSelector.call(y,":slick");o.nativeMatchesSelector=null;}catch(v){}}}try{y.slick_expando=1;delete y.slick_expando;
o.getUID=this.getUIDHTML;}catch(v){o.getUID=this.getUIDXML;}p.removeChild(z);z=s=p=null;o.getAttribute=(o.isHTMLDocument&&r)?function(D,B){var E=this.attributeGetters[B];
if(E){return E.call(D);}var C=D.getAttributeNode(B);return(C)?C.nodeValue:null;}:function(C,B){var D=this.attributeGetters[B];return(D)?D.call(C):C.getAttribute(B);
};o.hasAttribute=(y&&this.isNativeCode(y.hasAttribute))?function(C,B){return C.hasAttribute(B);}:function(C,B){C=C.getAttributeNode(B);return !!(C&&(C.specified||C.nodeValue));
};o.contains=(y&&this.isNativeCode(y.contains))?function(B,C){return B.contains(C);}:(y&&y.compareDocumentPosition)?function(B,C){return B===C||!!(B.compareDocumentPosition(C)&16);
}:function(B,C){if(C){do{if(C===B){return true;}}while((C=C.parentNode));}return false;};o.documentSorter=(y.compareDocumentPosition)?function(C,B){if(!C.compareDocumentPosition||!B.compareDocumentPosition){return 0;
}return C.compareDocumentPosition(B)&4?-1:C===B?0:1;}:("sourceIndex" in y)?function(C,B){if(!C.sourceIndex||!B.sourceIndex){return 0;}return C.sourceIndex-B.sourceIndex;
}:(w.createRange)?function(E,C){if(!E.ownerDocument||!C.ownerDocument){return 0;}var D=E.ownerDocument.createRange(),B=C.ownerDocument.createRange();D.setStart(E,0);
D.setEnd(E,0);B.setStart(C,0);B.setEnd(C,0);return D.compareBoundaryPoints(Range.START_TO_END,B);}:null;y=null;for(A in o){this[A]=o[A];}};var e=/^([#.]?)((?:[\w-]+|\*))$/,g=/\[.+[*$^]=(?:""|'')?\]/,f={};
j.search=function(U,z,H,s){var p=this.found=(s)?null:(H||[]);if(!U){return p;}else{if(U.navigator){U=U.document;}else{if(!U.nodeType){return p;}}}var F,O,V=this.uniques={},I=!!(H&&H.length),y=(U.nodeType==9);
if(this.document!==(y?U:U.ownerDocument)){this.setDocument(U);}if(I){for(O=p.length;O--;){V[this.getUID(p[O])]=true;}}if(typeof z=="string"){var r=z.match(e);
simpleSelectors:if(r){var u=r[1],v=r[2],A,E;if(!u){if(v=="*"&&this.brokenStarGEBTN){break simpleSelectors;}E=U.getElementsByTagName(v);if(s){return E[0]||null;
}for(O=0;A=E[O++];){if(!(I&&V[this.getUID(A)])){p.push(A);}}}else{if(u=="#"){if(!this.isHTMLDocument||!y){break simpleSelectors;}A=U.getElementById(v);
if(!A){return p;}if(this.idGetsName&&A.getAttributeNode("id").nodeValue!=v){break simpleSelectors;}if(s){return A||null;}if(!(I&&V[this.getUID(A)])){p.push(A);
}}else{if(u=="."){if(!this.isHTMLDocument||((!U.getElementsByClassName||this.brokenGEBCN)&&U.querySelectorAll)){break simpleSelectors;}if(U.getElementsByClassName&&!this.brokenGEBCN){E=U.getElementsByClassName(v);
if(s){return E[0]||null;}for(O=0;A=E[O++];){if(!(I&&V[this.getUID(A)])){p.push(A);}}}else{var T=new RegExp("(^|\\s)"+d.escapeRegExp(v)+"(\\s|$)");E=U.getElementsByTagName("*");
for(O=0;A=E[O++];){className=A.className;if(!(className&&T.test(className))){continue;}if(s){return A;}if(!(I&&V[this.getUID(A)])){p.push(A);}}}}}}if(I){this.sort(p);
}return(s)?null:p;}querySelector:if(U.querySelectorAll){if(!this.isHTMLDocument||f[z]||this.brokenMixedCaseQSA||(this.brokenCheckedQSA&&z.indexOf(":checked")>-1)||(this.brokenEmptyAttributeQSA&&g.test(z))||(!y&&z.indexOf(",")>-1)||d.disableQSA){break querySelector;
}var S=z,x=U;if(!y){var C=x.getAttribute("id"),t="slickid__";x.setAttribute("id",t);S="#"+t+" "+S;U=x.parentNode;}try{if(s){return U.querySelector(S)||null;
}else{E=U.querySelectorAll(S);}}catch(Q){f[z]=1;break querySelector;}finally{if(!y){if(C){x.setAttribute("id",C);}else{x.removeAttribute("id");}U=x;}}if(this.starSelectsClosedQSA){for(O=0;
A=E[O++];){if(A.nodeName>"@"&&!(I&&V[this.getUID(A)])){p.push(A);}}}else{for(O=0;A=E[O++];){if(!(I&&V[this.getUID(A)])){p.push(A);}}}if(I){this.sort(p);
}return p;}F=this.Slick.parse(z);if(!F.length){return p;}}else{if(z==null){return p;}else{if(z.Slick){F=z;}else{if(this.contains(U.documentElement||U,z)){(p)?p.push(z):p=z;
return p;}else{return p;}}}}this.posNTH={};this.posNTHLast={};this.posNTHType={};this.posNTHTypeLast={};this.push=(!I&&(s||(F.length==1&&F.expressions[0].length==1)))?this.pushArray:this.pushUID;
if(p==null){p=[];}var M,L,K;var B,J,D,c,q,G,W;var N,P,o,w,R=F.expressions;search:for(O=0;(P=R[O]);O++){for(M=0;(o=P[M]);M++){B="combinator:"+o.combinator;
if(!this[B]){continue search;}J=(this.isXMLDocument)?o.tag:o.tag.toUpperCase();D=o.id;c=o.classList;q=o.classes;G=o.attributes;W=o.pseudos;w=(M===(P.length-1));
this.bitUniques={};if(w){this.uniques=V;this.found=p;}else{this.uniques={};this.found=[];}if(M===0){this[B](U,J,D,q,G,W,c);if(s&&w&&p.length){break search;
}}else{if(s&&w){for(L=0,K=N.length;L<K;L++){this[B](N[L],J,D,q,G,W,c);if(p.length){break search;}}}else{for(L=0,K=N.length;L<K;L++){this[B](N[L],J,D,q,G,W,c);
}}}N=this.found;}}if(I||(F.expressions.length>1)){this.sort(p);}return(s)?(p[0]||null):p;};j.uidx=1;j.uidk="slick-uniqueid";j.getUIDXML=function(m){var c=m.getAttribute(this.uidk);
if(!c){c=this.uidx++;m.setAttribute(this.uidk,c);}return c;};j.getUIDHTML=function(c){return c.uniqueNumber||(c.uniqueNumber=this.uidx++);};j.sort=function(c){if(!this.documentSorter){return c;
}c.sort(this.documentSorter);return c;};j.cacheNTH={};j.matchNTH=/^([+-]?\d*)?([a-z]+)?([+-]\d+)?$/;j.parseNTHArgument=function(p){var n=p.match(this.matchNTH);
if(!n){return false;}var o=n[2]||false;var m=n[1]||1;if(m=="-"){m=-1;}var c=+n[3]||0;n=(o=="n")?{a:m,b:c}:(o=="odd")?{a:2,b:1}:(o=="even")?{a:2,b:0}:{a:0,b:m};
return(this.cacheNTH[p]=n);};j.createNTHPseudo=function(o,m,c,n){return function(r,p){var t=this.getUID(r);if(!this[c][t]){var z=r.parentNode;if(!z){return false;
}var q=z[o],s=1;if(n){var y=r.nodeName;do{if(q.nodeName!=y){continue;}this[c][this.getUID(q)]=s++;}while((q=q[m]));}else{do{if(q.nodeType!=1){continue;
}this[c][this.getUID(q)]=s++;}while((q=q[m]));}}p=p||"n";var u=this.cacheNTH[p]||this.parseNTHArgument(p);if(!u){return false;}var x=u.a,w=u.b,v=this[c][t];
if(x==0){return w==v;}if(x>0){if(v<w){return false;}}else{if(w<v){return false;}}return((v-w)%x)==0;};};j.pushArray=function(o,c,q,n,m,p){if(this.matchSelector(o,c,q,n,m,p)){this.found.push(o);
}};j.pushUID=function(p,c,r,o,m,q){var n=this.getUID(p);if(!this.uniques[n]&&this.matchSelector(p,c,r,o,m,q)){this.uniques[n]=true;this.found.push(p);}};
j.matchNode=function(m,n){if(this.isHTMLDocument&&this.nativeMatchesSelector){try{return this.nativeMatchesSelector.call(m,n.replace(/\[([^=]+)=\s*([^'"\]]+?)\s*\]/g,'[$1="$2"]'));
}catch(u){}}var t=this.Slick.parse(n);if(!t){return true;}var r=t.expressions,p,s=0,q;for(q=0;(currentExpression=r[q]);q++){if(currentExpression.length==1){var o=currentExpression[0];
if(this.matchSelector(m,(this.isXMLDocument)?o.tag:o.tag.toUpperCase(),o.id,o.classes,o.attributes,o.pseudos)){return true;}s++;}}if(s==t.length){return false;
}var c=this.search(this.document,t),v;for(q=0;v=c[q++];){if(v===m){return true;}}return false;};j.matchPseudo=function(p,c,o){var m="pseudo:"+c;if(this[m]){return this[m](p,o);
}var n=this.getAttribute(p,c);return(o)?o==n:!!n;};j.matchSelector=function(n,u,c,o,p,r){if(u){var s=(this.isXMLDocument)?n.nodeName:n.nodeName.toUpperCase();
if(u=="*"){if(s<"@"){return false;}}else{if(s!=u){return false;}}}if(c&&n.getAttribute("id")!=c){return false;}var q,m,t;if(o){for(q=o.length;q--;){t=n.getAttribute("class")||n.className;
if(!(t&&o[q].regexp.test(t))){return false;}}}if(p){for(q=p.length;q--;){m=p[q];if(m.operator?!m.test(this.getAttribute(n,m.key)):!this.hasAttribute(n,m.key)){return false;
}}}if(r){for(q=r.length;q--;){m=r[q];if(!this.matchPseudo(n,m.key,m.value)){return false;}}}return true;};var i={" ":function(p,v,m,q,r,t,o){var s,u,n;
if(this.isHTMLDocument){getById:if(m){u=this.document.getElementById(m);if((!u&&p.all)||(this.idGetsName&&u&&u.getAttributeNode("id").nodeValue!=m)){n=p.all[m];
if(!n){return;}if(!n[0]){n=[n];}for(s=0;u=n[s++];){var c=u.getAttributeNode("id");if(c&&c.nodeValue==m){this.push(u,v,null,q,r,t);break;}}return;}if(!u){if(this.contains(this.root,p)){return;
}else{break getById;}}else{if(this.document!==p&&!this.contains(p,u)){return;}}this.push(u,v,null,q,r,t);return;}getByClass:if(q&&p.getElementsByClassName&&!this.brokenGEBCN){n=p.getElementsByClassName(o.join(" "));
if(!(n&&n.length)){break getByClass;}for(s=0;u=n[s++];){this.push(u,v,m,null,r,t);}return;}}getByTag:{n=p.getElementsByTagName(v);if(!(n&&n.length)){break getByTag;
}if(!this.brokenStarGEBTN){v=null;}for(s=0;u=n[s++];){this.push(u,v,m,q,r,t);}}},">":function(o,c,q,n,m,p){if((o=o.firstChild)){do{if(o.nodeType==1){this.push(o,c,q,n,m,p);
}}while((o=o.nextSibling));}},"+":function(o,c,q,n,m,p){while((o=o.nextSibling)){if(o.nodeType==1){this.push(o,c,q,n,m,p);break;}}},"^":function(o,c,q,n,m,p){o=o.firstChild;
if(o){if(o.nodeType==1){this.push(o,c,q,n,m,p);}else{this["combinator:+"](o,c,q,n,m,p);}}},"~":function(p,c,r,o,m,q){while((p=p.nextSibling)){if(p.nodeType!=1){continue;
}var n=this.getUID(p);if(this.bitUniques[n]){break;}this.bitUniques[n]=true;this.push(p,c,r,o,m,q);}},"++":function(o,c,q,n,m,p){this["combinator:+"](o,c,q,n,m,p);
this["combinator:!+"](o,c,q,n,m,p);},"~~":function(o,c,q,n,m,p){this["combinator:~"](o,c,q,n,m,p);this["combinator:!~"](o,c,q,n,m,p);},"!":function(o,c,q,n,m,p){while((o=o.parentNode)){if(o!==this.document){this.push(o,c,q,n,m,p);
}}},"!>":function(o,c,q,n,m,p){o=o.parentNode;if(o!==this.document){this.push(o,c,q,n,m,p);}},"!+":function(o,c,q,n,m,p){while((o=o.previousSibling)){if(o.nodeType==1){this.push(o,c,q,n,m,p);
break;}}},"!^":function(o,c,q,n,m,p){o=o.lastChild;if(o){if(o.nodeType==1){this.push(o,c,q,n,m,p);}else{this["combinator:!+"](o,c,q,n,m,p);}}},"!~":function(p,c,r,o,m,q){while((p=p.previousSibling)){if(p.nodeType!=1){continue;
}var n=this.getUID(p);if(this.bitUniques[n]){break;}this.bitUniques[n]=true;this.push(p,c,r,o,m,q);}}};for(var h in i){j["combinator:"+h]=i[h];}var k={empty:function(c){var m=c.firstChild;
return !(m&&m.nodeType==1)&&!(c.innerText||c.textContent||"").length;},not:function(c,m){return !this.matchNode(c,m);},contains:function(c,m){return(c.innerText||c.textContent||"").indexOf(m)>-1;
},"first-child":function(c){while((c=c.previousSibling)){if(c.nodeType==1){return false;}}return true;},"last-child":function(c){while((c=c.nextSibling)){if(c.nodeType==1){return false;
}}return true;},"only-child":function(n){var m=n;while((m=m.previousSibling)){if(m.nodeType==1){return false;}}var c=n;while((c=c.nextSibling)){if(c.nodeType==1){return false;
}}return true;},"nth-child":j.createNTHPseudo("firstChild","nextSibling","posNTH"),"nth-last-child":j.createNTHPseudo("lastChild","previousSibling","posNTHLast"),"nth-of-type":j.createNTHPseudo("firstChild","nextSibling","posNTHType",true),"nth-last-of-type":j.createNTHPseudo("lastChild","previousSibling","posNTHTypeLast",true),index:function(m,c){return this["pseudo:nth-child"](m,""+c+1);
},even:function(c){return this["pseudo:nth-child"](c,"2n");},odd:function(c){return this["pseudo:nth-child"](c,"2n+1");},"first-of-type":function(c){var m=c.nodeName;
while((c=c.previousSibling)){if(c.nodeName==m){return false;}}return true;},"last-of-type":function(c){var m=c.nodeName;while((c=c.nextSibling)){if(c.nodeName==m){return false;
}}return true;},"only-of-type":function(n){var m=n,o=n.nodeName;while((m=m.previousSibling)){if(m.nodeName==o){return false;}}var c=n;while((c=c.nextSibling)){if(c.nodeName==o){return false;
}}return true;},enabled:function(c){return !c.disabled;},disabled:function(c){return c.disabled;},checked:function(c){return c.checked||c.selected;},focus:function(c){return this.isHTMLDocument&&this.document.activeElement===c&&(c.href||c.type||this.hasAttribute(c,"tabindex"));
},root:function(c){return(c===this.root);},selected:function(c){return c.selected;}};for(var a in k){j["pseudo:"+a]=k[a];}j.attributeGetters={"class":function(){return this.getAttribute("class")||this.className;
},"for":function(){return("htmlFor" in this)?this.htmlFor:this.getAttribute("for");},href:function(){return("href" in this)?this.getAttribute("href",2):this.getAttribute("href");
},style:function(){return(this.style)?this.style.cssText:this.getAttribute("style");},tabindex:function(){var c=this.getAttributeNode("tabindex");return(c&&c.specified)?c.nodeValue:null;
},type:function(){return this.getAttribute("type");}};var d=j.Slick=(this.Slick||{});d.version="1.1.5";d.search=function(m,n,c){return j.search(m,n,c);
};d.find=function(c,m){return j.search(c,m,null,true);};d.contains=function(c,m){j.setDocument(c);return j.contains(c,m);};d.getAttribute=function(m,c){return j.getAttribute(m,c);
};d.match=function(m,c){if(!(m&&c)){return false;}if(!c||c===m){return true;}j.setDocument(m);return j.matchNode(m,c);};d.defineAttributeGetter=function(c,m){j.attributeGetters[c]=m;
return this;};d.lookupAttributeGetter=function(c){return j.attributeGetters[c];};d.definePseudo=function(c,m){j["pseudo:"+c]=function(o,n){return m.call(o,n);
};return this;};d.lookupPseudo=function(c){var m=j["pseudo:"+c];if(m){return function(n){return m.call(this,n);};}return null;};d.override=function(m,c){j.override(m,c);
return this;};d.isXML=j.isXML;d.uidOf=function(c){return j.getUIDHTML(c);};if(!this.Slick){this.Slick=d;}}).apply((typeof exports!="undefined")?exports:this);
var Element=function(b,g){var h=Element.Constructors[b];if(h){return h(g);}if(typeof b!="string"){return document.id(b).set(g);}if(!g){g={};}if(!(/^[\w-]+$/).test(b)){var e=Slick.parse(b).expressions[0][0];
b=(e.tag=="*")?"div":e.tag;if(e.id&&g.id==null){g.id=e.id;}var d=e.attributes;if(d){for(var f=0,c=d.length;f<c;f++){var a=d[f];if(g[a.key]!=null){continue;
}if(a.value!=null&&a.operator=="="){g[a.key]=a.value;}else{if(!a.value&&!a.operator){g[a.key]=true;}}}}if(e.classList&&g["class"]==null){g["class"]=e.classList.join(" ");
}}return document.newElement(b,g);};if(Browser.Element){Element.prototype=Browser.Element.prototype;}new Type("Element",Element).mirror(function(a){if(Array.prototype[a]){return;
}var b={};b[a]=function(){var h=[],e=arguments,j=true;for(var g=0,d=this.length;g<d;g++){var f=this[g],c=h[g]=f[a].apply(f,e);j=(j&&typeOf(c)=="element");
}return(j)?new Elements(h):h;};Elements.implement(b);});if(!Browser.Element){Element.parent=Object;Element.Prototype={"$family":Function.from("element").hide()};
Element.mirror(function(a,b){Element.Prototype[a]=b;});}Element.Constructors={};Element.Constructors=new Hash;var IFrame=new Type("IFrame",function(){var e=Array.link(arguments,{properties:Type.isObject,iframe:function(f){return(f!=null);
}});var c=e.properties||{},b;if(e.iframe){b=document.id(e.iframe);}var d=c.onload||function(){};delete c.onload;c.id=c.name=[c.id,c.name,b?(b.id||b.name):"IFrame_"+String.uniqueID()].pick();
b=new Element(b||"iframe",c);var a=function(){d.call(b.contentWindow);};if(window.frames[c.id]){a();}else{b.addListener("load",a);}return b;});var Elements=this.Elements=function(a){if(a&&a.length){var e={},d;
for(var c=0;d=a[c++];){var b=Slick.uidOf(d);if(!e[b]){e[b]=true;this.push(d);}}}};Elements.prototype={length:0};Elements.parent=Array;new Type("Elements",Elements).implement({filter:function(a,b){if(!a){return this;
}return new Elements(Array.filter(this,(typeOf(a)=="string")?function(c){return c.match(a);}:a,b));}.protect(),push:function(){var d=this.length;for(var b=0,a=arguments.length;
b<a;b++){var c=document.id(arguments[b]);if(c){this[d++]=c;}}return(this.length=d);}.protect(),unshift:function(){var b=[];for(var c=0,a=arguments.length;
c<a;c++){var d=document.id(arguments[c]);if(d){b.push(d);}}return Array.prototype.unshift.apply(this,b);}.protect(),concat:function(){var b=new Elements(this);
for(var c=0,a=arguments.length;c<a;c++){var d=arguments[c];if(Type.isEnumerable(d)){b.append(d);}else{b.push(d);}}return b;}.protect(),append:function(c){for(var b=0,a=c.length;
b<a;b++){this.push(c[b]);}return this;}.protect(),empty:function(){while(this.length){delete this[--this.length];}return this;}.protect()});Elements.alias("extend","append");
(function(){var g=Array.prototype.splice,b={"0":0,"1":1,length:2};g.call(b,1,1);if(b[1]==1){Elements.implement("splice",function(){var e=this.length;g.apply(this,arguments);
while(e>=this.length){delete this[e--];}return this;}.protect());}Elements.implement(Array.prototype);Array.mirror(Elements);var f;try{var a=document.createElement("<input name=x>");
f=(a.name=="x");}catch(c){}var d=function(e){return(""+e).replace(/&/g,"&amp;").replace(/"/g,"&quot;");};Document.implement({newElement:function(e,h){if(h&&h.checked!=null){h.defaultChecked=h.checked;
}if(f&&h){e="<"+e;if(h.name){e+=' name="'+d(h.name)+'"';}if(h.type){e+=' type="'+d(h.type)+'"';}e+=">";delete h.name;delete h.type;}return this.id(this.createElement(e)).set(h);
}});})();Document.implement({newTextNode:function(a){return this.createTextNode(a);},getDocument:function(){return this;},getWindow:function(){return this.window;
},id:(function(){var a={string:function(d,c,b){d=Slick.find(b,"#"+d.replace(/(\W)/g,"\\$1"));return(d)?a.element(d,c):null;},element:function(b,c){$uid(b);
if(!c&&!b.$family&&!(/^(?:object|embed)$/i).test(b.tagName)){Object.append(b,Element.Prototype);}return b;},object:function(c,d,b){if(c.toElement){return a.element(c.toElement(b),d);
}return null;}};a.textnode=a.whitespace=a.window=a.document=function(b){return b;};return function(c,e,d){if(c&&c.$family&&c.uid){return c;}var b=typeOf(c);
return(a[b])?a[b](c,e,d||document):null;};})()});if(window.$==null){Window.implement("$",function(a,b){return document.id(a,b,this.document);});}Window.implement({getDocument:function(){return this.document;
},getWindow:function(){return this;}});[Document,Element].invoke("implement",{getElements:function(a){return Slick.search(this,a,new Elements);},getElement:function(a){return document.id(Slick.find(this,a));
}});(function(b,d,a){this.Selectors={};var e=this.Selectors.Pseudo=new Hash();var c=function(){for(var f in e){if(e.hasOwnProperty(f)){Slick.definePseudo(f,e[f]);
delete e[f];}}};Slick.search=function(g,h,f){c();return b.call(this,g,h,f);};Slick.find=function(f,g){c();return d.call(this,f,g);};Slick.match=function(g,f){c();
return a.call(this,g,f);};})(Slick.search,Slick.find,Slick.match);if(window.$$==null){Window.implement("$$",function(a){var f=new Elements;if(arguments.length==1&&typeof a=="string"){return Slick.search(this.document,a,f);
}var c=Array.flatten(arguments);for(var d=0,b=c.length;d<b;d++){var e=c[d];switch(typeOf(e)){case"element":f.push(e);break;case"string":Slick.search(this.document,e,f);
}}return f;});}if(window.$$==null){Window.implement("$$",function(a){if(arguments.length==1){if(typeof a=="string"){return Slick.search(this.document,a,new Elements);
}else{if(Type.isEnumerable(a)){return new Elements(a);}}}return new Elements(arguments);});}(function(){var k={},i={};var n={input:"checked",option:"selected",textarea:"value"};
var e=function(p){return(i[p]||(i[p]={}));};var j=function(q){var p=q.uid;if(q.removeEvents){q.removeEvents();}if(q.clearAttributes){q.clearAttributes();
}if(p!=null){delete k[p];delete i[p];}return q;};var o=["defaultValue","accessKey","cellPadding","cellSpacing","colSpan","frameBorder","maxLength","readOnly","rowSpan","tabIndex","useMap"];
var d=["compact","nowrap","ismap","declare","noshade","checked","disabled","readOnly","multiple","selected","noresize","defer","defaultChecked"];var g={html:"innerHTML","class":"className","for":"htmlFor",text:(function(){var p=document.createElement("div");
return(p.textContent==null)?"innerText":"textContent";})()};var m=["type"];var h=["value","defaultValue"];var l=/^(?:href|src|usemap)$/i;d=d.associate(d);
o=o.associate(o.map(String.toLowerCase));m=m.associate(m);Object.append(g,h.associate(h));var c={before:function(q,p){var r=p.parentNode;if(r){r.insertBefore(q,p);
}},after:function(q,p){var r=p.parentNode;if(r){r.insertBefore(q,p.nextSibling);}},bottom:function(q,p){p.appendChild(q);},top:function(q,p){p.insertBefore(q,p.firstChild);
}};c.inside=c.bottom;Object.each(c,function(q,r){r=r.capitalize();var p={};p["inject"+r]=function(s){q(this,document.id(s,true));return this;};p["grab"+r]=function(s){q(document.id(s,true),this);
return this;};Element.implement(p);});var b=function(s,r){if(!s){return r;}s=Object.clone(Slick.parse(s));var q=s.expressions;for(var p=q.length;p--;){q[p][0].combinator=r;
}return s;};Element.implement({set:function(r,q){var p=Element.Properties[r];(p&&p.set)?p.set.call(this,q):this.setProperty(r,q);}.overloadSetter(),get:function(q){var p=Element.Properties[q];
return(p&&p.get)?p.get.apply(this):this.getProperty(q);}.overloadGetter(),erase:function(q){var p=Element.Properties[q];(p&&p.erase)?p.erase.apply(this):this.removeProperty(q);
return this;},setProperty:function(q,r){q=o[q]||q;if(r==null){return this.removeProperty(q);}var p=g[q];(p)?this[p]=r:(d[q])?this[q]=!!r:this.setAttribute(q,""+r);
return this;},setProperties:function(p){for(var q in p){this.setProperty(q,p[q]);}return this;},getProperty:function(q){q=o[q]||q;var p=g[q]||m[q];return(p)?this[p]:(d[q])?!!this[q]:(l.test(q)?this.getAttribute(q,2):(p=this.getAttributeNode(q))?p.nodeValue:null)||null;
},getProperties:function(){var p=Array.from(arguments);return p.map(this.getProperty,this).associate(p);},removeProperty:function(q){q=o[q]||q;var p=g[q];
(p)?this[p]="":(d[q])?this[q]=false:this.removeAttribute(q);return this;},removeProperties:function(){Array.each(arguments,this.removeProperty,this);return this;
},hasClass:function(p){return this.className.clean().contains(p," ");},addClass:function(p){if(!this.hasClass(p)){this.className=(this.className+" "+p).clean();
}return this;},removeClass:function(p){this.className=this.className.replace(new RegExp("(^|\\s)"+p+"(?:\\s|$)"),"$1");return this;},toggleClass:function(p,q){if(q==null){q=!this.hasClass(p);
}return(q)?this.addClass(p):this.removeClass(p);},adopt:function(){var s=this,p,u=Array.flatten(arguments),t=u.length;if(t>1){s=p=document.createDocumentFragment();
}for(var r=0;r<t;r++){var q=document.id(u[r],true);if(q){s.appendChild(q);}}if(p){this.appendChild(p);}return this;},appendText:function(q,p){return this.grab(this.getDocument().newTextNode(q),p);
},grab:function(q,p){c[p||"bottom"](document.id(q,true),this);return this;},inject:function(q,p){c[p||"bottom"](this,document.id(q,true));return this;},replaces:function(p){p=document.id(p,true);
p.parentNode.replaceChild(this,p);return this;},wraps:function(q,p){q=document.id(q,true);return this.replaces(q).grab(q,p);},getPrevious:function(p){return document.id(Slick.find(this,b(p,"!~")));
},getAllPrevious:function(p){return Slick.search(this,b(p,"!~"),new Elements);},getNext:function(p){return document.id(Slick.find(this,b(p,"~")));},getAllNext:function(p){return Slick.search(this,b(p,"~"),new Elements);
},getFirst:function(p){return document.id(Slick.search(this,b(p,">"))[0]);},getLast:function(p){return document.id(Slick.search(this,b(p,">")).getLast());
},getParent:function(p){return document.id(Slick.find(this,b(p,"!")));},getParents:function(p){return Slick.search(this,b(p,"!"),new Elements);},getSiblings:function(p){return Slick.search(this,b(p,"~~"),new Elements);
},getChildren:function(p){return Slick.search(this,b(p,">"),new Elements);},getWindow:function(){return this.ownerDocument.window;},getDocument:function(){return this.ownerDocument;
},getElementById:function(p){return document.id(Slick.find(this,"#"+(""+p).replace(/(\W)/g,"\\$1")));},getSelected:function(){this.selectedIndex;return new Elements(Array.from(this.options).filter(function(p){return p.selected;
}));},toQueryString:function(){var p=[];this.getElements("input, select, textarea").each(function(r){var q=r.type;if(!r.name||r.disabled||q=="submit"||q=="reset"||q=="file"||q=="image"){return;
}var s=(r.get("tag")=="select")?r.getSelected().map(function(t){return document.id(t).get("value");}):((q=="radio"||q=="checkbox")&&!r.checked)?null:r.get("value");
Array.from(s).each(function(t){if(typeof t!="undefined"){p.push(encodeURIComponent(r.name)+"="+encodeURIComponent(t));}});});return p.join("&");},destroy:function(){var p=j(this).getElementsByTagName("*");
Array.each(p,j);Element.dispose(this);return null;},empty:function(){Array.from(this.childNodes).each(Element.dispose);return this;},dispose:function(){return(this.parentNode)?this.parentNode.removeChild(this):this;
},match:function(p){return !p||Slick.match(this,p);}});var a=function(t,s,q){if(!q){t.setAttributeNode(document.createAttribute("id"));}if(t.clearAttributes){t.clearAttributes();
t.mergeAttributes(s);t.removeAttribute("uid");if(t.options){var u=t.options,p=s.options;for(var r=u.length;r--;){u[r].selected=p[r].selected;}}}var v=n[s.tagName.toLowerCase()];
if(v&&s[v]){t[v]=s[v];}};Element.implement("clone",function(r,p){r=r!==false;var w=this.cloneNode(r),q;if(r){var s=w.getElementsByTagName("*"),u=this.getElementsByTagName("*");
for(q=s.length;q--;){a(s[q],u[q],p);}}a(w,this,p);if(Browser.ie){var t=w.getElementsByTagName("object"),v=this.getElementsByTagName("object");for(q=t.length;
q--;){t[q].outerHTML=v[q].outerHTML;}}return document.id(w);});var f={contains:function(p){return Slick.contains(this,p);}};if(!document.contains){Document.implement(f);
}if(!document.createElement("div").contains){Element.implement(f);}Element.implement("hasChild",function(p){return this!==p&&this.contains(p);});[Element,Window,Document].invoke("implement",{addListener:function(s,r){if(s=="unload"){var p=r,q=this;
r=function(){q.removeListener("unload",r);p();};}else{k[$uid(this)]=this;}if(this.addEventListener){this.addEventListener(s,r,!!arguments[2]);}else{this.attachEvent("on"+s,r);
}return this;},removeListener:function(q,p){if(this.removeEventListener){this.removeEventListener(q,p,!!arguments[2]);}else{this.detachEvent("on"+q,p);
}return this;},retrieve:function(q,p){var s=e($uid(this)),r=s[q];if(p!=null&&r==null){r=s[q]=p;}return r!=null?r:null;},store:function(q,p){var r=e($uid(this));
r[q]=p;return this;},eliminate:function(p){var q=e($uid(this));delete q[p];return this;}});if(window.attachEvent&&!window.addEventListener){window.addListener("unload",function(){Object.each(k,j);
if(window.CollectGarbage){CollectGarbage();}});}})();Element.Properties={};Element.Properties=new Hash;Element.Properties.style={set:function(a){this.style.cssText=a;
},get:function(){return this.style.cssText;},erase:function(){this.style.cssText="";}};Element.Properties.tag={get:function(){return this.tagName.toLowerCase();
}};(function(a){if(a!=null){Element.Properties.maxlength=Element.Properties.maxLength={get:function(){var b=this.getAttribute("maxLength");return b==a?null:b;
}};}})(document.createElement("input").getAttribute("maxLength"));Element.Properties.html=(function(){var c=Function.attempt(function(){var e=document.createElement("table");
e.innerHTML="<tr><td></td></tr>";});var d=document.createElement("div");var a={table:[1,"<table>","</table>"],select:[1,"<select>","</select>"],tbody:[2,"<table><tbody>","</tbody></table>"],tr:[3,"<table><tbody><tr>","</tr></tbody></table>"]};
a.thead=a.tfoot=a.tbody;var b={set:function(){var f=Array.flatten(arguments).join("");var g=(!c&&a[this.get("tag")]);if(g){var h=d;h.innerHTML=g[1]+f+g[2];
for(var e=g[0];e--;){h=h.firstChild;}this.empty().adopt(h.childNodes);}else{this.innerHTML=f;}}};b.erase=b.set;return b;})();(function(){var c=document.html;
Element.Properties.styles={set:function(f){this.setStyles(f);}};var e=(c.style.opacity!=null);var d=/alpha\(opacity=([\d.]+)\)/i;var b=function(g,f){if(!g.currentStyle||!g.currentStyle.hasLayout){g.style.zoom=1;
}if(e){g.style.opacity=f;}else{f=(f*100).limit(0,100).round();f=(f==100)?"":"alpha(opacity="+f+")";var h=g.style.filter||g.getComputedStyle("filter")||"";
g.style.filter=d.test(h)?h.replace(d,f):h+f;}};Element.Properties.opacity={set:function(g){var f=this.style.visibility;if(g==0&&f!="hidden"){this.style.visibility="hidden";
}else{if(g!=0&&f!="visible"){this.style.visibility="visible";}}b(this,g);},get:(e)?function(){var f=this.style.opacity||this.getComputedStyle("opacity");
return(f=="")?1:f;}:function(){var f,g=(this.style.filter||this.getComputedStyle("filter"));if(g){f=g.match(d);}return(f==null||g==null)?1:(f[1]/100);}};
var a=(c.style.cssFloat==null)?"styleFloat":"cssFloat";Element.implement({getComputedStyle:function(h){if(this.currentStyle){return this.currentStyle[h.camelCase()];
}var g=Element.getDocument(this).defaultView,f=g?g.getComputedStyle(this,null):null;return(f)?f.getPropertyValue((h==a)?"float":h.hyphenate()):null;},setOpacity:function(f){b(this,f);
return this;},getOpacity:function(){return this.get("opacity");},setStyle:function(g,f){switch(g){case"opacity":return this.set("opacity",parseFloat(f));
case"float":g=a;}g=g.camelCase();if(typeOf(f)!="string"){var h=(Element.Styles[g]||"@").split(" ");f=Array.from(f).map(function(k,j){if(!h[j]){return"";
}return(typeOf(k)=="number")?h[j].replace("@",Math.round(k)):k;}).join(" ");}else{if(f==String(Number(f))){f=Math.round(f);}}this.style[g]=f;return this;
},getStyle:function(l){switch(l){case"opacity":return this.get("opacity");case"float":l=a;}l=l.camelCase();var f=this.style[l];if(!f||l=="zIndex"){f=[];
for(var k in Element.ShortStyles){if(l!=k){continue;}for(var j in Element.ShortStyles[k]){f.push(this.getStyle(j));}return f.join(" ");}f=this.getComputedStyle(l);
}if(f){f=String(f);var h=f.match(/rgba?\([\d\s,]+\)/);if(h){f=f.replace(h[0],h[0].rgbToHex());}}if(Browser.opera||(Browser.ie&&isNaN(parseFloat(f)))){if((/^(height|width)$/).test(l)){var g=(l=="width")?["left","right"]:["top","bottom"],i=0;
g.each(function(m){i+=this.getStyle("border-"+m+"-width").toInt()+this.getStyle("padding-"+m).toInt();},this);return this["offset"+l.capitalize()]-i+"px";
}if(Browser.opera&&String(f).indexOf("px")!=-1){return f;}if((/^border(.+)Width|margin|padding/).test(l)){return"0px";}}return f;},setStyles:function(g){for(var f in g){this.setStyle(f,g[f]);
}return this;},getStyles:function(){var f={};Array.flatten(arguments).each(function(g){f[g]=this.getStyle(g);},this);return f;}});Element.Styles={left:"@px",top:"@px",bottom:"@px",right:"@px",width:"@px",height:"@px",maxWidth:"@px",maxHeight:"@px",minWidth:"@px",minHeight:"@px",backgroundColor:"rgb(@, @, @)",backgroundPosition:"@px @px",color:"rgb(@, @, @)",fontSize:"@px",letterSpacing:"@px",lineHeight:"@px",clip:"rect(@px @px @px @px)",margin:"@px @px @px @px",padding:"@px @px @px @px",border:"@px @ rgb(@, @, @) @px @ rgb(@, @, @) @px @ rgb(@, @, @)",borderWidth:"@px @px @px @px",borderStyle:"@ @ @ @",borderColor:"rgb(@, @, @) rgb(@, @, @) rgb(@, @, @) rgb(@, @, @)",zIndex:"@",zoom:"@",fontWeight:"@",textIndent:"@px",opacity:"@"};
Element.Styles=new Hash(Element.Styles);Element.ShortStyles={margin:{},padding:{},border:{},borderWidth:{},borderStyle:{},borderColor:{}};["Top","Right","Bottom","Left"].each(function(l){var k=Element.ShortStyles;
var g=Element.Styles;["margin","padding"].each(function(m){var n=m+l;k[m][n]=g[n]="@px";});var j="border"+l;k.border[j]=g[j]="@px @ rgb(@, @, @)";var i=j+"Width",f=j+"Style",h=j+"Color";
k[j]={};k.borderWidth[i]=k[j][i]=g[i]="@px";k.borderStyle[f]=k[j][f]=g[f]="@";k.borderColor[h]=k[j][h]=g[h]="rgb(@, @, @)";});})();(function(){Element.Properties.events={set:function(b){this.addEvents(b);
}};[Element,Window,Document].invoke("implement",{addEvent:function(f,h){var i=this.retrieve("events",{});if(!i[f]){i[f]={keys:[],values:[]};}if(i[f].keys.contains(h)){return this;
}i[f].keys.push(h);var g=f,b=Element.Events[f],d=h,j=this;if(b){if(b.onAdd){b.onAdd.call(this,h);}if(b.condition){d=function(k){if(b.condition.call(this,k)){return h.call(this,k);
}return true;};}g=b.base||g;}var e=function(){return h.call(j);};var c=Element.NativeEvents[g];if(c){if(c==2){e=function(k){k=new Event(k,j.getWindow());
if(d.call(j,k)===false){k.stop();}};}this.addListener(g,e,arguments[2]);}i[f].values.push(e);return this;},removeEvent:function(e,d){var c=this.retrieve("events");
if(!c||!c[e]){return this;}var h=c[e];var b=h.keys.indexOf(d);if(b==-1){return this;}var g=h.values[b];delete h.keys[b];delete h.values[b];var f=Element.Events[e];
if(f){if(f.onRemove){f.onRemove.call(this,d);}e=f.base||e;}return(Element.NativeEvents[e])?this.removeListener(e,g,arguments[2]):this;},addEvents:function(b){for(var c in b){this.addEvent(c,b[c]);
}return this;},removeEvents:function(b){var d;if(typeOf(b)=="object"){for(d in b){this.removeEvent(d,b[d]);}return this;}var c=this.retrieve("events");
if(!c){return this;}if(!b){for(d in c){this.removeEvents(d);}this.eliminate("events");}else{if(c[b]){c[b].keys.each(function(e){this.removeEvent(b,e);},this);
delete c[b];}}return this;},fireEvent:function(e,c,b){var d=this.retrieve("events");if(!d||!d[e]){return this;}c=Array.from(c);d[e].keys.each(function(f){if(b){f.delay(b,this,c);
}else{f.apply(this,c);}},this);return this;},cloneEvents:function(e,d){e=document.id(e);var c=e.retrieve("events");if(!c){return this;}if(!d){for(var b in c){this.cloneEvents(e,b);
}}else{if(c[d]){c[d].keys.each(function(f){this.addEvent(d,f);},this);}}return this;}});Element.NativeEvents={click:2,dblclick:2,mouseup:2,mousedown:2,contextmenu:2,mousewheel:2,DOMMouseScroll:2,mouseover:2,mouseout:2,mousemove:2,selectstart:2,selectend:2,keydown:2,keypress:2,keyup:2,orientationchange:2,touchstart:2,touchmove:2,touchend:2,touchcancel:2,gesturestart:2,gesturechange:2,gestureend:2,focus:2,blur:2,change:2,reset:2,select:2,submit:2,load:2,unload:1,beforeunload:2,resize:1,move:1,DOMContentLoaded:1,readystatechange:1,error:1,abort:1,scroll:1};
var a=function(b){var c=b.relatedTarget;if(c==null){return true;}if(!c){return false;}return(c!=this&&c.prefix!="xul"&&typeOf(this)!="document"&&!this.contains(c));
};Element.Events={mouseenter:{base:"mouseover",condition:a},mouseleave:{base:"mouseout",condition:a},mousewheel:{base:(Browser.firefox)?"DOMMouseScroll":"mousewheel"}};
Element.Events=new Hash(Element.Events);})();(function(){var h=document.createElement("div"),e=document.createElement("div");h.style.height="0";h.appendChild(e);
var d=(e.offsetParent===h);h=e=null;var l=function(m){return k(m,"position")!="static"||a(m);};var i=function(m){return l(m)||(/^(?:table|td|th)$/i).test(m.tagName);
};Element.implement({scrollTo:function(m,n){if(a(this)){this.getWindow().scrollTo(m,n);}else{this.scrollLeft=m;this.scrollTop=n;}return this;},getSize:function(){if(a(this)){return this.getWindow().getSize();
}return{x:this.offsetWidth,y:this.offsetHeight};},getScrollSize:function(){if(a(this)){return this.getWindow().getScrollSize();}return{x:this.scrollWidth,y:this.scrollHeight};
},getScroll:function(){if(a(this)){return this.getWindow().getScroll();}return{x:this.scrollLeft,y:this.scrollTop};},getScrolls:function(){var n=this.parentNode,m={x:0,y:0};
while(n&&!a(n)){m.x+=n.scrollLeft;m.y+=n.scrollTop;n=n.parentNode;}return m;},getOffsetParent:d?function(){var m=this;if(a(m)||k(m,"position")=="fixed"){return null;
}var n=(k(m,"position")=="static")?i:l;while((m=m.parentNode)){if(n(m)){return m;}}return null;}:function(){var m=this;if(a(m)||k(m,"position")=="fixed"){return null;
}try{return m.offsetParent;}catch(n){}return null;},getOffsets:function(){if(this.getBoundingClientRect&&!Browser.Platform.ios){var r=this.getBoundingClientRect(),o=document.id(this.getDocument().documentElement),q=o.getScroll(),t=this.getScrolls(),s=(k(this,"position")=="fixed");
return{x:r.left.toInt()+t.x+((s)?0:q.x)-o.clientLeft,y:r.top.toInt()+t.y+((s)?0:q.y)-o.clientTop};}var n=this,m={x:0,y:0};if(a(this)){return m;}while(n&&!a(n)){m.x+=n.offsetLeft;
m.y+=n.offsetTop;if(Browser.firefox){if(!c(n)){m.x+=b(n);m.y+=g(n);}var p=n.parentNode;if(p&&k(p,"overflow")!="visible"){m.x+=b(p);m.y+=g(p);}}else{if(n!=this&&Browser.safari){m.x+=b(n);
m.y+=g(n);}}n=n.offsetParent;}if(Browser.firefox&&!c(this)){m.x-=b(this);m.y-=g(this);}return m;},getPosition:function(p){if(a(this)){return{x:0,y:0};}var q=this.getOffsets(),n=this.getScrolls();
var m={x:q.x-n.x,y:q.y-n.y};if(p&&(p=document.id(p))){var o=p.getPosition();return{x:m.x-o.x-b(p),y:m.y-o.y-g(p)};}return m;},getCoordinates:function(o){if(a(this)){return this.getWindow().getCoordinates();
}var m=this.getPosition(o),n=this.getSize();var p={left:m.x,top:m.y,width:n.x,height:n.y};p.right=p.left+p.width;p.bottom=p.top+p.height;return p;},computePosition:function(m){return{left:m.x-j(this,"margin-left"),top:m.y-j(this,"margin-top")};
},setPosition:function(m){return this.setStyles(this.computePosition(m));}});[Document,Window].invoke("implement",{getSize:function(){var m=f(this);return{x:m.clientWidth,y:m.clientHeight};
},getScroll:function(){var n=this.getWindow(),m=f(this);return{x:n.pageXOffset||m.scrollLeft,y:n.pageYOffset||m.scrollTop};},getScrollSize:function(){var o=f(this),n=this.getSize(),m=this.getDocument().body;
return{x:Math.max(o.scrollWidth,m.scrollWidth,n.x),y:Math.max(o.scrollHeight,m.scrollHeight,n.y)};},getPosition:function(){return{x:0,y:0};},getCoordinates:function(){var m=this.getSize();
return{top:0,left:0,bottom:m.y,right:m.x,height:m.y,width:m.x};}});var k=Element.getComputedStyle;function j(m,n){return k(m,n).toInt()||0;}function c(m){return k(m,"-moz-box-sizing")=="border-box";
}function g(m){return j(m,"border-top-width");}function b(m){return j(m,"border-left-width");}function a(m){return(/^(?:body|html)$/i).test(m.tagName);
}function f(m){var n=m.getDocument();return(!n.compatMode||n.compatMode=="CSS1Compat")?n.html:n.body;}})();Element.alias({position:"setPosition"});[Window,Document,Element].invoke("implement",{getHeight:function(){return this.getSize().y;
},getWidth:function(){return this.getSize().x;},getScrollTop:function(){return this.getScroll().y;},getScrollLeft:function(){return this.getScroll().x;
},getScrollHeight:function(){return this.getScrollSize().y;},getScrollWidth:function(){return this.getScrollSize().x;},getTop:function(){return this.getPosition().y;
},getLeft:function(){return this.getPosition().x;}});(function(){var f=this.Fx=new Class({Implements:[Chain,Events,Options],options:{fps:60,unit:false,duration:500,frames:null,frameSkip:true,link:"ignore"},initialize:function(g){this.subject=this.subject||this;
this.setOptions(g);},getTransition:function(){return function(g){return -(Math.cos(Math.PI*g)-1)/2;};},step:function(g){if(this.options.frameSkip){var h=(this.time!=null)?(g-this.time):0,i=h/this.frameInterval;
this.time=g;this.frame+=i;}else{this.frame++;}if(this.frame<this.frames){var j=this.transition(this.frame/this.frames);this.set(this.compute(this.from,this.to,j));
}else{this.frame=this.frames;this.set(this.compute(this.from,this.to,1));this.stop();}},set:function(g){return g;},compute:function(i,h,g){return f.compute(i,h,g);
},check:function(){if(!this.isRunning()){return true;}switch(this.options.link){case"cancel":this.cancel();return true;case"chain":this.chain(this.caller.pass(arguments,this));
return false;}return false;},start:function(k,j){if(!this.check(k,j)){return this;}this.from=k;this.to=j;this.frame=(this.options.frameSkip)?0:-1;this.time=null;
this.transition=this.getTransition();var i=this.options.frames,h=this.options.fps,g=this.options.duration;this.duration=f.Durations[g]||g.toInt();this.frameInterval=1000/h;
this.frames=i||Math.round(this.duration/this.frameInterval);this.fireEvent("start",this.subject);b.call(this,h);return this;},stop:function(){if(this.isRunning()){this.time=null;
d.call(this,this.options.fps);if(this.frames==this.frame){this.fireEvent("complete",this.subject);if(!this.callChain()){this.fireEvent("chainComplete",this.subject);
}}else{this.fireEvent("stop",this.subject);}}return this;},cancel:function(){if(this.isRunning()){this.time=null;d.call(this,this.options.fps);this.frame=this.frames;
this.fireEvent("cancel",this.subject).clearChain();}return this;},pause:function(){if(this.isRunning()){this.time=null;d.call(this,this.options.fps);}return this;
},resume:function(){if((this.frame<this.frames)&&!this.isRunning()){b.call(this,this.options.fps);}return this;},isRunning:function(){var g=e[this.options.fps];
return g&&g.contains(this);}});f.compute=function(i,h,g){return(h-i)*g+i;};f.Durations={"short":250,normal:500,"long":1000};var e={},c={};var a=function(){var h=Date.now();
for(var j=this.length;j--;){var g=this[j];if(g){g.step(h);}}};var b=function(h){var g=e[h]||(e[h]=[]);g.push(this);if(!c[h]){c[h]=a.periodical(Math.round(1000/h),g);
}};var d=function(h){var g=e[h];if(g){g.erase(this);if(!g.length&&c[h]){delete e[h];c[h]=clearInterval(c[h]);}}};})();Fx.CSS=new Class({Extends:Fx,prepare:function(c,d,b){b=Array.from(b);
if(b[1]==null){b[1]=b[0];b[0]=c.getStyle(d);}var a=b.map(this.parse);return{from:a[0],to:a[1]};},parse:function(a){a=Function.from(a)();a=(typeof a=="string")?a.split(" "):Array.from(a);
return a.map(function(c){c=String(c);var b=false;Object.each(Fx.CSS.Parsers,function(f,e){if(b){return;}var d=f.parse(c);if(d||d===0){b={value:d,parser:f};
}});b=b||{value:c,parser:Fx.CSS.Parsers.String};return b;});},compute:function(d,c,b){var a=[];(Math.min(d.length,c.length)).times(function(e){a.push({value:d[e].parser.compute(d[e].value,c[e].value,b),parser:d[e].parser});
});a.$family=Function.from("fx:css:value");return a;},serve:function(c,b){if(typeOf(c)!="fx:css:value"){c=this.parse(c);}var a=[];c.each(function(d){a=a.concat(d.parser.serve(d.value,b));
});return a;},render:function(a,d,c,b){a.setStyle(d,this.serve(c,b));},search:function(a){if(Fx.CSS.Cache[a]){return Fx.CSS.Cache[a];}var c={},b=new RegExp("^"+a.escapeRegExp()+"$");
Array.each(document.styleSheets,function(f,e){var d=f.href;if(d&&d.contains("://")&&!d.contains(document.domain)){return;}var g=f.rules||f.cssRules;Array.each(g,function(k,h){if(!k.style){return;
}var j=(k.selectorText)?k.selectorText.replace(/^\w+/,function(i){return i.toLowerCase();}):null;if(!j||!b.test(j)){return;}Object.each(Element.Styles,function(l,i){if(!k.style[i]||Element.ShortStyles[i]){return;
}l=String(k.style[i]);c[i]=((/^rgb/).test(l))?l.rgbToHex():l;});});});return Fx.CSS.Cache[a]=c;}});Fx.CSS.Cache={};Fx.CSS.Parsers={Color:{parse:function(a){if(a.match(/^#[0-9a-f]{3,6}$/i)){return a.hexToRgb(true);
}return((a=a.match(/(\d+),\s*(\d+),\s*(\d+)/)))?[a[1],a[2],a[3]]:false;},compute:function(c,b,a){return c.map(function(e,d){return Math.round(Fx.compute(c[d],b[d],a));
});},serve:function(a){return a.map(Number);}},Number:{parse:parseFloat,compute:Fx.compute,serve:function(b,a){return(a)?b+a:b;}},String:{parse:Function.from(false),compute:function(b,a){return a;
},serve:function(a){return a;}}};Fx.CSS.Parsers=new Hash(Fx.CSS.Parsers);Fx.Tween=new Class({Extends:Fx.CSS,initialize:function(b,a){this.element=this.subject=document.id(b);
this.parent(a);},set:function(b,a){if(arguments.length==1){a=b;b=this.property||this.options.property;}this.render(this.element,b,a,this.options.unit);
return this;},start:function(c,e,d){if(!this.check(c,e,d)){return this;}var b=Array.flatten(arguments);this.property=this.options.property||b.shift();var a=this.prepare(this.element,this.property,b);
return this.parent(a.from,a.to);}});Element.Properties.tween={set:function(a){this.get("tween").cancel().setOptions(a);return this;},get:function(){var a=this.retrieve("tween");
if(!a){a=new Fx.Tween(this,{link:"cancel"});this.store("tween",a);}return a;}};Element.implement({tween:function(a,c,b){this.get("tween").start(arguments);
return this;},fade:function(c){var e=this.get("tween"),d="opacity",a;c=[c,"toggle"].pick();switch(c){case"in":e.start(d,1);break;case"out":e.start(d,0);
break;case"show":e.set(d,1);break;case"hide":e.set(d,0);break;case"toggle":var b=this.retrieve("fade:flag",this.get("opacity")==1);e.start(d,(b)?0:1);this.store("fade:flag",!b);
a=true;break;default:e.start(d,arguments);}if(!a){this.eliminate("fade:flag");}return this;},highlight:function(c,a){if(!a){a=this.retrieve("highlight:original",this.getStyle("background-color"));
a=(a=="transparent")?"#fff":a;}var b=this.get("tween");b.start("background-color",c||"#ffff88",a).chain(function(){this.setStyle("background-color",this.retrieve("highlight:original"));
b.callChain();}.bind(this));return this;}});Fx.Morph=new Class({Extends:Fx.CSS,initialize:function(b,a){this.element=this.subject=document.id(b);this.parent(a);
},set:function(a){if(typeof a=="string"){a=this.search(a);}for(var b in a){this.render(this.element,b,a[b],this.options.unit);}return this;},compute:function(e,d,c){var a={};
for(var b in e){a[b]=this.parent(e[b],d[b],c);}return a;},start:function(b){if(!this.check(b)){return this;}if(typeof b=="string"){b=this.search(b);}var e={},d={};
for(var c in b){var a=this.prepare(this.element,c,b[c]);e[c]=a.from;d[c]=a.to;}return this.parent(e,d);}});Element.Properties.morph={set:function(a){this.get("morph").cancel().setOptions(a);
return this;},get:function(){var a=this.retrieve("morph");if(!a){a=new Fx.Morph(this,{link:"cancel"});this.store("morph",a);}return a;}};Element.implement({morph:function(a){this.get("morph").start(a);
return this;}});Fx.implement({getTransition:function(){var a=this.options.transition||Fx.Transitions.Sine.easeInOut;if(typeof a=="string"){var b=a.split(":");
a=Fx.Transitions;a=a[b[0]]||a[b[0].capitalize()];if(b[1]){a=a["ease"+b[1].capitalize()+(b[2]?b[2].capitalize():"")];}}return a;}});Fx.Transition=function(c,b){b=Array.from(b);
var a=function(d){return c(d,b);};return Object.append(a,{easeIn:a,easeOut:function(d){return 1-c(1-d,b);},easeInOut:function(d){return(d<=0.5?c(2*d,b):(2-c(2*(1-d),b)))/2;
}});};Fx.Transitions={linear:function(a){return a;}};Fx.Transitions=new Hash(Fx.Transitions);Fx.Transitions.extend=function(a){for(var b in a){Fx.Transitions[b]=new Fx.Transition(a[b]);
}};Fx.Transitions.extend({Pow:function(b,a){return Math.pow(b,a&&a[0]||6);},Expo:function(a){return Math.pow(2,8*(a-1));},Circ:function(a){return 1-Math.sin(Math.acos(a));
},Sine:function(a){return 1-Math.cos(a*Math.PI/2);},Back:function(b,a){a=a&&a[0]||1.618;return Math.pow(b,2)*((a+1)*b-a);},Bounce:function(f){var e;for(var d=0,c=1;
1;d+=c,c/=2){if(f>=(7-4*d)/11){e=c*c-Math.pow((11-6*d-11*f)/4,2);break;}}return e;},Elastic:function(b,a){return Math.pow(2,10*--b)*Math.cos(20*b*Math.PI*(a&&a[0]||1)/3);
}});["Quad","Cubic","Quart","Quint"].each(function(b,a){Fx.Transitions[b]=new Fx.Transition(function(c){return Math.pow(c,a+2);});});(function(){var d=function(){},a=("onprogress" in new Browser.Request);
var c=this.Request=new Class({Implements:[Chain,Events,Options],options:{url:"",data:"",headers:{"X-Requested-With":"XMLHttpRequest",Accept:"text/javascript, text/html, application/xml, text/xml, */*"},async:true,format:false,method:"post",link:"ignore",isSuccess:null,emulation:true,urlEncoded:true,encoding:"utf-8",evalScripts:false,evalResponse:false,timeout:0,noCache:false},initialize:function(e){this.xhr=new Browser.Request();
this.setOptions(e);this.headers=this.options.headers;},onStateChange:function(){var e=this.xhr;if(e.readyState!=4||!this.running){return;}this.running=false;
this.status=0;Function.attempt(function(){var f=e.status;this.status=(f==1223)?204:f;}.bind(this));e.onreadystatechange=d;if(a){e.onprogress=e.onloadstart=d;
}clearTimeout(this.timer);this.response={text:this.xhr.responseText||"",xml:this.xhr.responseXML};if(this.options.isSuccess.call(this,this.status)){this.success(this.response.text,this.response.xml);
}else{this.failure();}},isSuccess:function(){var e=this.status;return(e>=200&&e<300);},isRunning:function(){return !!this.running;},processScripts:function(e){if(this.options.evalResponse||(/(ecma|java)script/).test(this.getHeader("Content-type"))){return Browser.exec(e);
}return e.stripScripts(this.options.evalScripts);},success:function(f,e){this.onSuccess(this.processScripts(f),e);},onSuccess:function(){this.fireEvent("complete",arguments).fireEvent("success",arguments).callChain();
},failure:function(){this.onFailure();},onFailure:function(){this.fireEvent("complete").fireEvent("failure",this.xhr);},loadstart:function(e){this.fireEvent("loadstart",[e,this.xhr]);
},progress:function(e){this.fireEvent("progress",[e,this.xhr]);},timeout:function(){this.fireEvent("timeout",this.xhr);},setHeader:function(e,f){this.headers[e]=f;
return this;},getHeader:function(e){return Function.attempt(function(){return this.xhr.getResponseHeader(e);}.bind(this));},check:function(){if(!this.running){return true;
}switch(this.options.link){case"cancel":this.cancel();return true;case"chain":this.chain(this.caller.pass(arguments,this));return false;}return false;},send:function(o){if(!this.check(o)){return this;
}this.options.isSuccess=this.options.isSuccess||this.isSuccess;this.running=true;var l=typeOf(o);if(l=="string"||l=="element"){o={data:o};}var h=this.options;
o=Object.append({data:h.data,url:h.url,method:h.method},o);var j=o.data,f=String(o.url),e=o.method.toLowerCase();switch(typeOf(j)){case"element":j=document.id(j).toQueryString();
break;case"object":case"hash":j=Object.toQueryString(j);}if(this.options.format){var m="format="+this.options.format;j=(j)?m+"&"+j:m;}if(this.options.emulation&&!["get","post"].contains(e)){var k="_method="+e;
j=(j)?k+"&"+j:k;e="post";}if(this.options.urlEncoded&&["post","put"].contains(e)){var g=(this.options.encoding)?"; charset="+this.options.encoding:"";this.headers["Content-type"]="application/x-www-form-urlencoded"+g;
}if(!f){f=document.location.pathname;}var i=f.lastIndexOf("/");if(i>-1&&(i=f.indexOf("#"))>-1){f=f.substr(0,i);}if(this.options.noCache){f+=(f.contains("?")?"&":"?")+String.uniqueID();
}if(j&&e=="get"){f+=(f.contains("?")?"&":"?")+j;j=null;}var n=this.xhr;if(a){n.onloadstart=this.loadstart.bind(this);n.onprogress=this.progress.bind(this);
}n.open(e.toUpperCase(),f,this.options.async,this.options.user,this.options.password);if(this.options.user&&"withCredentials" in n){n.withCredentials=true;
}n.onreadystatechange=this.onStateChange.bind(this);Object.each(this.headers,function(q,p){try{n.setRequestHeader(p,q);}catch(r){this.fireEvent("exception",[p,q]);
}},this);this.fireEvent("request");n.send(j);if(!this.options.async){this.onStateChange();}if(this.options.timeout){this.timer=this.timeout.delay(this.options.timeout,this);
}return this;},cancel:function(){if(!this.running){return this;}this.running=false;var e=this.xhr;e.abort();clearTimeout(this.timer);e.onreadystatechange=d;
if(a){e.onprogress=e.onloadstart=d;}this.xhr=new Browser.Request();this.fireEvent("cancel");return this;}});var b={};["get","post","put","delete","GET","POST","PUT","DELETE"].each(function(e){b[e]=function(g){var f={method:e};
if(g!=null){f.data=g;}return this.send(f);};});c.implement(b);Element.Properties.send={set:function(e){var f=this.get("send").cancel();f.setOptions(e);
return this;},get:function(){var e=this.retrieve("send");if(!e){e=new c({data:this,link:"cancel",method:this.get("method")||"post",url:this.get("action")});
this.store("send",e);}return e;}};Element.implement({send:function(e){var f=this.get("send");f.send({data:this,url:e||f.options.url});return this;}});})();
Request.HTML=new Class({Extends:Request,options:{update:false,append:false,evalScripts:true,filter:false,headers:{Accept:"text/html, application/xml, text/xml, */*"}},success:function(e){var d=this.options,b=this.response;
b.html=e.stripScripts(function(f){b.javascript=f;});var c=b.html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);if(c){b.html=c[1];}var a=new Element("div").set("html",b.html);
b.tree=a.childNodes;b.elements=a.getElements("*");if(d.filter){b.tree=b.elements.filter(d.filter);}if(d.update){document.id(d.update).empty().set("html",b.html);
}else{if(d.append){document.id(d.append).adopt(a.getChildren());}}if(d.evalScripts){Browser.exec(b.javascript);}this.onSuccess(b.tree,b.elements,b.html,b.javascript);
}});Element.Properties.load={set:function(a){var b=this.get("load").cancel();b.setOptions(a);return this;},get:function(){var a=this.retrieve("load");if(!a){a=new Request.HTML({data:this,link:"cancel",update:this,method:"get"});
this.store("load",a);}return a;}};Element.implement({load:function(){this.get("load").send(Array.link(arguments,{data:Type.isObject,url:Type.isString}));
return this;}});if(typeof JSON=="undefined"){this.JSON={};}JSON=new Hash({stringify:JSON.stringify,parse:JSON.parse});(function(){var special={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};
var escape=function(chr){return special[chr]||"\\u"+("0000"+chr.charCodeAt(0).toString(16)).slice(-4);};JSON.validate=function(string){string=string.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"");
return(/^[\],:{}\s]*$/).test(string);};JSON.encode=JSON.stringify?function(obj){return JSON.stringify(obj);}:function(obj){if(obj&&obj.toJSON){obj=obj.toJSON();
}switch(typeOf(obj)){case"string":return'"'+obj.replace(/[\x00-\x1f\\"]/g,escape)+'"';case"array":return"["+obj.map(JSON.encode).clean()+"]";case"object":case"hash":var string=[];
Object.each(obj,function(value,key){var json=JSON.encode(value);if(json){string.push(JSON.encode(key)+":"+json);}});return"{"+string+"}";case"number":case"boolean":return""+obj;
case"null":return"null";}return null;};JSON.decode=function(string,secure){if(!string||typeOf(string)!="string"){return null;}if(secure||JSON.secure){if(JSON.parse){return JSON.parse(string);
}if(!JSON.validate(string)){throw new Error("JSON could not decode the input; security is enabled and the value is not secure.");}}return eval("("+string+")");
};})();Request.JSON=new Class({Extends:Request,options:{secure:true},initialize:function(a){this.parent(a);Object.append(this.headers,{Accept:"application/json","X-Request":"JSON"});
},success:function(c){var b;try{b=this.response.json=JSON.decode(c,this.options.secure);}catch(a){this.fireEvent("error",[c,a]);return;}if(b==null){this.onFailure();
}else{this.onSuccess(b,c);}}});var Cookie=new Class({Implements:Options,options:{path:"/",domain:false,duration:false,secure:false,document:document,encode:true},initialize:function(b,a){this.key=b;
this.setOptions(a);},write:function(b){if(this.options.encode){b=encodeURIComponent(b);}if(this.options.domain){b+="; domain="+this.options.domain;}if(this.options.path){b+="; path="+this.options.path;
}if(this.options.duration){var a=new Date();a.setTime(a.getTime()+this.options.duration*24*60*60*1000);b+="; expires="+a.toGMTString();}if(this.options.secure){b+="; secure";
}this.options.document.cookie=this.key+"="+b;return this;},read:function(){var a=this.options.document.cookie.match("(?:^|;)\\s*"+this.key.escapeRegExp()+"=([^;]*)");
return(a)?decodeURIComponent(a[1]):null;},dispose:function(){new Cookie(this.key,Object.merge({},this.options,{duration:-1})).write("");return this;}});
Cookie.write=function(b,c,a){return new Cookie(b,a).write(c);};Cookie.read=function(a){return new Cookie(a).read();};Cookie.dispose=function(b,a){return new Cookie(b,a).dispose();
};(function(i,k){var l,f,e=[],c,b,d=k.createElement("div");var g=function(){clearTimeout(b);if(l){return;}Browser.loaded=l=true;k.removeListener("DOMContentLoaded",g).removeListener("readystatechange",a);
k.fireEvent("domready");i.fireEvent("domready");};var a=function(){for(var m=e.length;m--;){if(e[m]()){g();return true;}}return false;};var j=function(){clearTimeout(b);
if(!a()){b=setTimeout(j,10);}};k.addListener("DOMContentLoaded",g);var h=function(){try{d.doScroll();return true;}catch(m){}return false;};if(d.doScroll&&!h()){e.push(h);
c=true;}if(k.readyState){e.push(function(){var m=k.readyState;return(m=="loaded"||m=="complete");});}if("onreadystatechange" in k){k.addListener("readystatechange",a);
}else{c=true;}if(c){j();}Element.Events.domready={onAdd:function(m){if(l){m.call(this);}}};Element.Events.load={base:"load",onAdd:function(m){if(f&&this==i){m.call(this);
}},condition:function(){if(this==i){g();delete Element.Events.load;}return true;}};i.addEvent("load",function(){f=true;});})(window,document);;// MooTools: the javascript framework.
// Load this file's selection again by visiting: http://mootools.net/more/36075c19162e7661ab85ec0526068fe6 
// Or build this file again with packager using: packager build More/More More/Events.Pseudos More/Class.Refactor More/Class.Binds More/Class.Occlude More/Chain.Wait More/Array.Extras More/Date More/Date.Extras More/Number.Format More/Object.Extras More/String.Extras More/String.QueryString More/URI More/URI.Relative More/Hash More/Hash.Extras More/Element.Forms More/Elements.From More/Element.Event.Pseudos More/Element.Event.Pseudos.Keys More/Element.Delegation More/Element.Measure More/Element.Pin More/Element.Position More/Element.Shortcuts More/Form.Request More/Form.Request.Append More/OverText More/Fx.Elements More/Fx.Accordion More/Fx.Move More/Fx.Reveal More/Fx.Scroll More/Fx.Slide More/Fx.SmoothScroll More/Fx.Sort More/Drag More/Drag.Move More/Slider More/Sortables More/Request.JSONP More/Request.Queue More/Request.Periodical More/Assets More/Color More/Group More/Hash.Cookie More/IframeShim More/Table More/HtmlTable More/HtmlTable.Zebra More/HtmlTable.Sort More/HtmlTable.Select More/Keyboard More/Keyboard.Extras More/Mask More/Scroller More/Tips More/Spinner More/Locale More/Locale.en-US.Date More/Locale.en-US.Number
/*
---
copyrights:
  - [MooTools](http://mootools.net)

licenses:
  - [MIT License](http://mootools.net/license.txt)
...
*/
MooTools.More={version:"1.3.2.1",build:"e586bcd2496e9b22acfde32e12f84d49ce09e59d"};Events.Pseudos=function(g,c,e){var b="monitorEvents:";var a=function(h){return{store:h.store?function(i,j){h.store(b+i,j);
}:function(i,j){(h.$monitorEvents||(h.$monitorEvents={}))[i]=j;},retrieve:h.retrieve?function(i,j){return h.retrieve(b+i,j);}:function(i,j){if(!h.$monitorEvents){return j;
}return h.$monitorEvents[i]||j;}};};var f=function(j){if(j.indexOf(":")==-1||!g){return null;}var i=Slick.parse(j).expressions[0][0],m=i.pseudos,h=m.length,k=[];
while(h--){if(g[m[h].key]){k.push({event:i.tag,value:m[h].value,pseudo:m[h].key,original:j});}}return k.length?k:null;};var d=function(h){return Object.merge.apply(this,h.map(function(i){return g[i.pseudo].options||{};
}));};return{addEvent:function(m,p,j){var n=f(m);if(!n){return c.call(this,m,p,j);}var k=a(this),s=k.retrieve(m,[]),h=n[0].event,t=d(n),o=p,i=t[h]||{},l=Array.slice(arguments,2),r=this,q;
if(i.args){l.append(Array.from(i.args));}if(i.base){h=i.base;}if(i.onAdd){i.onAdd(this);}n.each(function(u){var v=o;o=function(){(i.listener||g[u.pseudo].listener).call(r,u,v,arguments,q,t);
};});q=o.bind(this);s.include({event:p,monitor:q});k.store(m,s);c.apply(this,[m,p].concat(l));return c.apply(this,[h,q].concat(l));},removeEvent:function(l,n){var m=f(l);
if(!m){return e.call(this,l,n);}var j=a(this),o=j.retrieve(l);if(!o){return this;}var h=m[0].event,p=d(m),i=p[h]||{},k=Array.slice(arguments,2);if(i.args){k.append(Array.from(i.args));
}if(i.base){h=i.base;}if(i.onRemove){i.onRemove(this);}e.apply(this,[l,n].concat(k));o.each(function(q,r){if(!n||q.event==n){e.apply(this,[h,q.monitor].concat(k));
}delete o[r];},this);j.store(l,o);return this;}};};(function(){var b={once:{listener:function(e,f,d,c){f.apply(this,d);this.removeEvent(e.event,c).removeEvent(e.original,f);
}},throttle:{listener:function(d,e,c){if(!e._throttled){e.apply(this,c);e._throttled=setTimeout(function(){e._throttled=false;},d.value||250);}}},pause:{listener:function(d,e,c){clearTimeout(e._pause);
e._pause=e.delay(d.value||250,this,c);}}};Events.definePseudo=function(c,d){b[c]=Type.isFunction(d)?{listener:d}:d;return this;};Events.lookupPseudo=function(c){return b[c];
};var a=Events.prototype;Events.implement(Events.Pseudos(b,a.addEvent,a.removeEvent));["Request","Fx"].each(function(c){if(this[c]){this[c].implement(Events.prototype);
}});})();Class.refactor=function(b,a){Object.each(a,function(e,d){var c=b.prototype[d];c=(c&&c.$origin)||c||function(){};b.implement(d,(typeof e=="function")?function(){var f=this.previous;
this.previous=c;var g=e.apply(this,arguments);this.previous=f;return g;}:e);});return b;};Class.Mutators.Binds=function(a){if(!this.prototype.initialize){this.implement("initialize",function(){});
}return Array.from(a).concat(this.prototype.Binds||[]);};Class.Mutators.initialize=function(a){return function(){Array.from(this.Binds).each(function(b){var c=this[b];
if(c){this[b]=c.bind(this);}},this);return a.apply(this,arguments);};};Class.Occlude=new Class({occlude:function(c,b){b=document.id(b||this.element);var a=b.retrieve(c||this.property);
if(a&&!this.occluded){return(this.occluded=a);}this.occluded=false;b.store(c||this.property,this);return this.occluded;}});(function(){var a={wait:function(b){return this.chain(function(){this.callChain.delay(b==null?500:b,this);
return this;}.bind(this));}};Chain.implement(a);if(this.Fx){Fx.implement(a);}if(this.Element&&Element.implement&&this.Fx){Element.implement({chains:function(b){Array.from(b||["tween","morph","reveal"]).each(function(c){c=this.get(c);
if(!c){return;}c.setOptions({link:"chain"});},this);return this;},pauseFx:function(c,b){this.chains(b).get(b||"tween").wait(c);return this;}});}})();(function(a){Array.implement({min:function(){return Math.min.apply(null,this);
},max:function(){return Math.max.apply(null,this);},average:function(){return this.length?this.sum()/this.length:0;},sum:function(){var b=0,c=this.length;
if(c){while(c--){b+=this[c];}}return b;},unique:function(){return[].combine(this);},shuffle:function(){for(var c=this.length;c&&--c;){var b=this[c],d=Math.floor(Math.random()*(c+1));
this[c]=this[d];this[d]=b;}return this;},reduce:function(d,e){for(var c=0,b=this.length;c<b;c++){if(c in this){e=e===a?this[c]:d.call(null,e,this[c],c,this);
}}return e;},reduceRight:function(c,d){var b=this.length;while(b--){if(b in this){d=d===a?this[b]:c.call(null,d,this[b],b,this);}}return d;}});})();(function(){var b=function(c){return c!=null;
};var a=Object.prototype.hasOwnProperty;Object.extend({getFromPath:function(e,f){if(typeof f=="string"){f=f.split(".");}for(var d=0,c=f.length;d<c;d++){if(a.call(e,f[d])){e=e[f[d]];
}else{return null;}}return e;},cleanValues:function(c,e){e=e||b;for(var d in c){if(!e(c[d])){delete c[d];}}return c;},erase:function(c,d){if(a.call(c,d)){delete c[d];
}return c;},run:function(d){var c=Array.slice(arguments,1);for(var e in d){if(d[e].apply){d[e].apply(d,c);}}return d;}});})();(function(){var b=null,a={},e={};
var d=function(g){if(instanceOf(g,f.Set)){return g;}else{return a[g];}};var f=this.Locale={define:function(g,k,i,j){var h;if(instanceOf(g,f.Set)){h=g.name;
if(h){a[h]=g;}}else{h=g;if(!a[h]){a[h]=new f.Set(h);}g=a[h];}if(k){g.define(k,i,j);}if(k=="cascade"){return f.inherit(h,i);}if(!b){b=g;}return g;},use:function(g){g=d(g);
if(g){b=g;this.fireEvent("change",g);this.fireEvent("langChange",g.name);}return this;},getCurrent:function(){return b;},get:function(h,g){return(b)?b.get(h,g):"";
},inherit:function(g,h,i){g=d(g);if(g){g.inherit(h,i);}return this;},list:function(){return Object.keys(a);}};Object.append(f,new Events);f.Set=new Class({sets:{},inherits:{locales:[],sets:{}},initialize:function(g){this.name=g||"";
},define:function(j,h,i){var g=this.sets[j];if(!g){g={};}if(h){if(typeOf(h)=="object"){g=Object.merge(g,h);}else{g[h]=i;}}this.sets[j]=g;return this;},get:function(s,k,r){var q=Object.getFromPath(this.sets,s);
if(q!=null){var n=typeOf(q);if(n=="function"){q=q.apply(null,Array.from(k));}else{if(n=="object"){q=Object.clone(q);}}return q;}var j=s.indexOf("."),p=j<0?s:s.substr(0,j),m=(this.inherits.sets[p]||[]).combine(this.inherits.locales).include("en-US");
if(!r){r=[];}for(var h=0,g=m.length;h<g;h++){if(r.contains(m[h])){continue;}r.include(m[h]);var o=a[m[h]];if(!o){continue;}q=o.get(s,k,r);if(q!=null){return q;
}}return"";},inherit:function(h,i){h=Array.from(h);if(i&&!this.inherits.sets[i]){this.inherits.sets[i]=[];}var g=h.length;while(g--){(i?this.inherits.sets[i]:this.inherits.locales).unshift(h[g]);
}return this;}});var c=MooTools.lang={};Object.append(c,f,{setLanguage:f.use,getCurrentLanguage:function(){var g=f.getCurrent();return(g)?g.name:null;},set:function(){f.define.apply(this,arguments);
return this;},get:function(i,h,g){if(h){i+="."+h;}return f.get(i,g);}});})();Locale.define("en-US","Date",{months:["January","February","March","April","May","June","July","August","September","October","November","December"],months_abbr:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],days_abbr:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dateOrder:["month","date","year"],shortDate:"%m/%d/%Y",shortTime:"%I:%M%p",AM:"AM",PM:"PM",firstDayOfWeek:0,ordinal:function(a){return(a>3&&a<21)?"th":["th","st","nd","rd","th"][Math.min(a%10,4)];
},lessThanMinuteAgo:"less than a minute ago",minuteAgo:"about a minute ago",minutesAgo:"{delta} minutes ago",hourAgo:"about an hour ago",hoursAgo:"about {delta} hours ago",dayAgo:"1 day ago",daysAgo:"{delta} days ago",weekAgo:"1 week ago",weeksAgo:"{delta} weeks ago",monthAgo:"1 month ago",monthsAgo:"{delta} months ago",yearAgo:"1 year ago",yearsAgo:"{delta} years ago",lessThanMinuteUntil:"less than a minute from now",minuteUntil:"about a minute from now",minutesUntil:"{delta} minutes from now",hourUntil:"about an hour from now",hoursUntil:"about {delta} hours from now",dayUntil:"1 day from now",daysUntil:"{delta} days from now",weekUntil:"1 week from now",weeksUntil:"{delta} weeks from now",monthUntil:"1 month from now",monthsUntil:"{delta} months from now",yearUntil:"1 year from now",yearsUntil:"{delta} years from now"});
(function(){var a=this.Date;var f=a.Methods={ms:"Milliseconds",year:"FullYear",min:"Minutes",mo:"Month",sec:"Seconds",hr:"Hours"};["Date","Day","FullYear","Hours","Milliseconds","Minutes","Month","Seconds","Time","TimezoneOffset","Week","Timezone","GMTOffset","DayOfYear","LastMonth","LastDayOfMonth","UTCDate","UTCDay","UTCFullYear","AMPM","Ordinal","UTCHours","UTCMilliseconds","UTCMinutes","UTCMonth","UTCSeconds","UTCMilliseconds"].each(function(t){a.Methods[t.toLowerCase()]=t;
});var p=function(v,u,t){if(u==1){return v;}return v<Math.pow(10,u-1)?(t||"0")+p(v,u-1,t):v;};a.implement({set:function(v,t){v=v.toLowerCase();var u=f[v]&&"set"+f[v];
if(u&&this[u]){this[u](t);}return this;}.overloadSetter(),get:function(u){u=u.toLowerCase();var t=f[u]&&"get"+f[u];if(t&&this[t]){return this[t]();}return null;
}.overloadGetter(),clone:function(){return new a(this.get("time"));},increment:function(t,v){t=t||"day";v=v!=null?v:1;switch(t){case"year":return this.increment("month",v*12);
case"month":var u=this.get("date");this.set("date",1).set("mo",this.get("mo")+v);return this.set("date",u.min(this.get("lastdayofmonth")));case"week":return this.increment("day",v*7);
case"day":return this.set("date",this.get("date")+v);}if(!a.units[t]){throw new Error(t+" is not a supported interval");}return this.set("time",this.get("time")+v*a.units[t]());
},decrement:function(t,u){return this.increment(t,-1*(u!=null?u:1));},isLeapYear:function(){return a.isLeapYear(this.get("year"));},clearTime:function(){return this.set({hr:0,min:0,sec:0,ms:0});
},diff:function(u,t){if(typeOf(u)=="string"){u=a.parse(u);}return((u-this)/a.units[t||"day"](3,3)).round();},getLastDayOfMonth:function(){return a.daysInMonth(this.get("mo"),this.get("year"));
},getDayOfYear:function(){return(a.UTC(this.get("year"),this.get("mo"),this.get("date")+1)-a.UTC(this.get("year"),0,1))/a.units.day();},setDay:function(u,t){if(t==null){t=a.getMsg("firstDayOfWeek");
if(t===""){t=1;}}u=(7+a.parseDay(u,true)-t)%7;var v=(7+this.get("day")-t)%7;return this.increment("day",u-v);},getWeek:function(w){if(w==null){w=a.getMsg("firstDayOfWeek");
if(w===""){w=1;}}var y=this,v=(7+y.get("day")-w)%7,u=0,x;if(w==1){var z=y.get("month"),t=y.get("date")-v;if(z==11&&t>28){return 1;}if(z==0&&t<-2){y=new a(y).decrement("day",v);
v=0;}x=new a(y.get("year"),0,1).get("day")||7;if(x>4){u=-7;}}else{x=new a(y.get("year"),0,1).get("day");}u+=y.get("dayofyear");u+=6-v;u+=(7+x-w)%7;return(u/7);
},getOrdinal:function(t){return a.getMsg("ordinal",t||this.get("date"));},getTimezone:function(){return this.toString().replace(/^.*? ([A-Z]{3}).[0-9]{4}.*$/,"$1").replace(/^.*?\(([A-Z])[a-z]+ ([A-Z])[a-z]+ ([A-Z])[a-z]+\)$/,"$1$2$3");
},getGMTOffset:function(){var t=this.get("timezoneOffset");return((t>0)?"-":"+")+p((t.abs()/60).floor(),2)+p(t%60,2);},setAMPM:function(t){t=t.toUpperCase();
var u=this.get("hr");if(u>11&&t=="AM"){return this.decrement("hour",12);}else{if(u<12&&t=="PM"){return this.increment("hour",12);}}return this;},getAMPM:function(){return(this.get("hr")<12)?"AM":"PM";
},parse:function(t){this.set("time",a.parse(t));return this;},isValid:function(t){return !isNaN((t||this).valueOf());},format:function(u){if(!this.isValid()){return"invalid date";
}if(!u){u="%x %X";}var t=u.toLowerCase();if(s[t]){return s[t](this);}u=g[t]||u;var v=this;return u.replace(/%([a-z%])/gi,function(x,w){switch(w){case"a":return a.getMsg("days_abbr")[v.get("day")];
case"A":return a.getMsg("days")[v.get("day")];case"b":return a.getMsg("months_abbr")[v.get("month")];case"B":return a.getMsg("months")[v.get("month")];
case"c":return v.format("%a %b %d %H:%M:%S %Y");case"d":return p(v.get("date"),2);case"e":return p(v.get("date"),2," ");case"H":return p(v.get("hr"),2);
case"I":return p((v.get("hr")%12)||12,2);case"j":return p(v.get("dayofyear"),3);case"k":return p(v.get("hr"),2," ");case"l":return p((v.get("hr")%12)||12,2," ");
case"L":return p(v.get("ms"),3);case"m":return p((v.get("mo")+1),2);case"M":return p(v.get("min"),2);case"o":return v.get("ordinal");case"p":return a.getMsg(v.get("ampm"));
case"s":return Math.round(v/1000);case"S":return p(v.get("seconds"),2);case"T":return v.format("%H:%M:%S");case"U":return p(v.get("week"),2);case"w":return v.get("day");
case"x":return v.format(a.getMsg("shortDate"));case"X":return v.format(a.getMsg("shortTime"));case"y":return v.get("year").toString().substr(2);case"Y":return v.get("year");
case"z":return v.get("GMTOffset");case"Z":return v.get("Timezone");}return w;});},toISOString:function(){return this.format("iso8601");}}).alias({toJSON:"toISOString",compare:"diff",strftime:"format"});
var g={db:"%Y-%m-%d %H:%M:%S",compact:"%Y%m%dT%H%M%S","short":"%d %b %H:%M","long":"%B %d, %Y %H:%M"};var k=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],h=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
var s={rfc822:function(t){return k[t.get("day")]+t.format(", %d ")+h[t.get("month")]+t.format(" %Y %H:%M:%S %Z");},rfc2822:function(t){return k[t.get("day")]+t.format(", %d ")+h[t.get("month")]+t.format(" %Y %H:%M:%S %z");
},iso8601:function(t){return(t.getUTCFullYear()+"-"+p(t.getUTCMonth()+1,2)+"-"+p(t.getUTCDate(),2)+"T"+p(t.getUTCHours(),2)+":"+p(t.getUTCMinutes(),2)+":"+p(t.getUTCSeconds(),2)+"."+p(t.getUTCMilliseconds(),3)+"Z");
}};var c=[],n=a.parse;var r=function(w,y,v){var u=-1,x=a.getMsg(w+"s");switch(typeOf(y)){case"object":u=x[y.get(w)];break;case"number":u=x[y];if(!u){throw new Error("Invalid "+w+" index: "+y);
}break;case"string":var t=x.filter(function(z){return this.test(z);},new RegExp("^"+y,"i"));if(!t.length){throw new Error("Invalid "+w+" string");}if(t.length>1){throw new Error("Ambiguous "+w);
}u=t[0];}return(v)?x.indexOf(u):u;};var i=1900,o=70;a.extend({getMsg:function(u,t){return Locale.get("Date."+u,t);},units:{ms:Function.from(1),second:Function.from(1000),minute:Function.from(60000),hour:Function.from(3600000),day:Function.from(86400000),week:Function.from(608400000),month:function(u,t){var v=new a;
return a.daysInMonth(u!=null?u:v.get("mo"),t!=null?t:v.get("year"))*86400000;},year:function(t){t=t||new a().get("year");return a.isLeapYear(t)?31622400000:31536000000;
}},daysInMonth:function(u,t){return[31,a.isLeapYear(t)?29:28,31,30,31,30,31,31,30,31,30,31][u];},isLeapYear:function(t){return((t%4===0)&&(t%100!==0))||(t%400===0);
},parse:function(w){var v=typeOf(w);if(v=="number"){return new a(w);}if(v!="string"){return w;}w=w.clean();if(!w.length){return null;}var u;c.some(function(x){var t=x.re.exec(w);
return(t)?(u=x.handler(t)):false;});if(!(u&&u.isValid())){u=new a(n(w));if(!(u&&u.isValid())){u=new a(w.toInt());}}return u;},parseDay:function(t,u){return r("day",t,u);
},parseMonth:function(u,t){return r("month",u,t);},parseUTC:function(u){var t=new a(u);var v=a.UTC(t.get("year"),t.get("mo"),t.get("date"),t.get("hr"),t.get("min"),t.get("sec"),t.get("ms"));
return new a(v);},orderIndex:function(t){return a.getMsg("dateOrder").indexOf(t)+1;},defineFormat:function(t,u){g[t]=u;return this;},defineFormats:function(t){for(var u in t){a.defineFormat(u,t[u]);
}return this;},parsePatterns:c,defineParser:function(t){c.push((t.re&&t.handler)?t:l(t));return this;},defineParsers:function(){Array.flatten(arguments).each(a.defineParser);
return this;},define2DigitYearStart:function(t){o=t%100;i=t-o;return this;}});var d=function(t){return new RegExp("(?:"+a.getMsg(t).map(function(u){return u.substr(0,3);
}).join("|")+")[a-z]*");};var m=function(t){switch(t){case"T":return"%H:%M:%S";case"x":return((a.orderIndex("month")==1)?"%m[-./]%d":"%d[-./]%m")+"([-./]%y)?";
case"X":return"%H([.:]%M)?([.:]%S([.:]%s)?)? ?%p? ?%z?";}return null;};var j={d:/[0-2]?[0-9]|3[01]/,H:/[01]?[0-9]|2[0-3]/,I:/0?[1-9]|1[0-2]/,M:/[0-5]?\d/,s:/\d+/,o:/[a-z]*/,p:/[ap]\.?m\.?/,y:/\d{2}|\d{4}/,Y:/\d{4}/,z:/Z|[+-]\d{2}(?::?\d{2})?/};
j.m=j.I;j.S=j.M;var e;var b=function(t){e=t;j.a=j.A=d("days");j.b=j.B=d("months");c.each(function(v,u){if(v.format){c[u]=l(v.format);}});};var l=function(v){if(!e){return{format:v};
}var t=[];var u=(v.source||v).replace(/%([a-z])/gi,function(x,w){return m(w)||x;}).replace(/\((?!\?)/g,"(?:").replace(/ (?!\?|\*)/g,",? ").replace(/%([a-z%])/gi,function(x,w){var y=j[w];
if(!y){return w;}t.push(w);return"("+y.source+")";}).replace(/\[a-z\]/gi,"[a-z\\u00c0-\\uffff;&]");return{format:v,re:new RegExp("^"+u+"$","i"),handler:function(z){z=z.slice(1).associate(t);
var w=new a().clearTime(),y=z.y||z.Y;if(y!=null){q.call(w,"y",y);}if("d" in z){q.call(w,"d",1);}if("m" in z||z.b||z.B){q.call(w,"m",1);}for(var x in z){q.call(w,x,z[x]);
}return w;}};};var q=function(t,u){if(!u){return this;}switch(t){case"a":case"A":return this.set("day",a.parseDay(u,true));case"b":case"B":return this.set("mo",a.parseMonth(u,true));
case"d":return this.set("date",u);case"H":case"I":return this.set("hr",u);case"m":return this.set("mo",u-1);case"M":return this.set("min",u);case"p":return this.set("ampm",u.replace(/\./g,""));
case"S":return this.set("sec",u);case"s":return this.set("ms",("0."+u)*1000);case"w":return this.set("day",u);case"Y":return this.set("year",u);case"y":u=+u;
if(u<100){u+=i+(u<o?100:0);}return this.set("year",u);case"z":if(u=="Z"){u="+00";}var v=u.match(/([+-])(\d{2}):?(\d{2})?/);v=(v[1]+"1")*(v[2]*60+(+v[3]||0))+this.getTimezoneOffset();
return this.set("time",this-v*60000);}return this;};a.defineParsers("%Y([-./]%m([-./]%d((T| )%X)?)?)?","%Y%m%d(T%H(%M%S?)?)?","%x( %X)?","%d%o( %b( %Y)?)?( %X)?","%b( %d%o)?( %Y)?( %X)?","%Y %b( %d%o( %X)?)?","%o %b %d %X %z %Y","%T","%H:%M( ?%p)?");
Locale.addEvent("change",function(t){if(Locale.get("Date")){b(t);}}).fireEvent("change",Locale.getCurrent());})();Date.implement({timeDiffInWords:function(a){return Date.distanceOfTimeInWords(this,a||new Date);
},timeDiff:function(f,c){if(f==null){f=new Date;}var h=((f-this)/1000).floor().abs();var e=[],a=[60,60,24,365,0],d=["s","m","h","d","y"],g,b;for(var i=0;
i<a.length;i++){if(i&&!h){break;}g=h;if((b=a[i])){g=(h%b);h=(h/b).floor();}e.unshift(g+(d[i]||""));}return e.join(c||":");}}).extend({distanceOfTimeInWords:function(b,a){return Date.getTimePhrase(((a-b)/1000).toInt());
},getTimePhrase:function(f){var d=(f<0)?"Until":"Ago";if(f<0){f*=-1;}var b={minute:60,hour:60,day:24,week:7,month:52/12,year:12,eon:Infinity};var e="lessThanMinute";
for(var c in b){var a=b[c];if(f<1.5*a){if(f>0.75*a){e=c;}break;}f/=a;e=c+"s";}f=f.round();return Date.getMsg(e+d,f).substitute({delta:f});}}).defineParsers({re:/^(?:tod|tom|yes)/i,handler:function(a){var b=new Date().clearTime();
switch(a[0]){case"tom":return b.increment();case"yes":return b.decrement();default:return b;}}},{re:/^(next|last) ([a-z]+)$/i,handler:function(e){var f=new Date().clearTime();
var b=f.getDay();var c=Date.parseDay(e[2],true);var a=c-b;if(c<=b){a+=7;}if(e[1]=="last"){a-=7;}return f.set("date",f.getDate()+a);}}).alias("timeAgoInWords","timeDiffInWords");
Locale.define("en-US","Number",{decimal:".",group:",",currency:{prefix:"$ "}});Number.implement({format:function(q){var n=this;q=q?Object.clone(q):{};var a=function(i){if(q[i]!=null){return q[i];
}return Locale.get("Number."+i);};var f=n<0,h=a("decimal"),k=a("precision"),o=a("group"),c=a("decimals");if(f){var e=a("negative")||{};if(e.prefix==null&&e.suffix==null){e.prefix="-";
}["prefix","suffix"].each(function(i){if(e[i]){q[i]=a(i)+e[i];}});n=-n;}var l=a("prefix"),p=a("suffix");if(c!==""&&c>=0&&c<=20){n=n.toFixed(c);}if(k>=1&&k<=21){n=(+n).toPrecision(k);
}n+="";var m;if(a("scientific")===false&&n.indexOf("e")>-1){var j=n.split("e"),b=+j[1];n=j[0].replace(".","");if(b<0){b=-b-1;m=j[0].indexOf(".");if(m>-1){b-=m-1;
}while(b--){n="0"+n;}n="0."+n;}else{m=j[0].lastIndexOf(".");if(m>-1){b-=j[0].length-m-1;}while(b--){n+="0";}}}if(h!="."){n=n.replace(".",h);}if(o){m=n.lastIndexOf(h);
m=(m>-1)?m:n.length;var d=n.substring(m),g=m;while(g--){if((m-g-1)%3==0&&g!=(m-1)){d=o+d;}d=n.charAt(g)+d;}n=d;}if(l){n=l+n;}if(p){n+=p;}return n;},formatCurrency:function(){var a=Locale.get("Number.currency")||{};
if(a.scientific==null){a.scientific=false;}if(a.decimals==null){a.decimals=2;}return this.format(a);},formatPercentage:function(){var a=Locale.get("Number.percentage")||{};
if(a.suffix==null){a.suffix="%";}if(a.decimals==null){a.decimals=2;}return this.format(a);}});(function(){var c={a:/[àáâãäåăą]/g,A:/[ÀÁÂÃÄÅĂĄ]/g,c:/[ćčç]/g,C:/[ĆČÇ]/g,d:/[ďđ]/g,D:/[ĎÐ]/g,e:/[èéêëěę]/g,E:/[ÈÉÊËĚĘ]/g,g:/[ğ]/g,G:/[Ğ]/g,i:/[ìíîï]/g,I:/[ÌÍÎÏ]/g,l:/[ĺľł]/g,L:/[ĹĽŁ]/g,n:/[ñňń]/g,N:/[ÑŇŃ]/g,o:/[òóôõöøő]/g,O:/[ÒÓÔÕÖØ]/g,r:/[řŕ]/g,R:/[ŘŔ]/g,s:/[ššş]/g,S:/[ŠŞŚ]/g,t:/[ťţ]/g,T:/[ŤŢ]/g,ue:/[ü]/g,UE:/[Ü]/g,u:/[ùúûůµ]/g,U:/[ÙÚÛŮ]/g,y:/[ÿý]/g,Y:/[ŸÝ]/g,z:/[žźż]/g,Z:/[ŽŹŻ]/g,th:/[þ]/g,TH:/[Þ]/g,dh:/[ð]/g,DH:/[Ð]/g,ss:/[ß]/g,oe:/[œ]/g,OE:/[Œ]/g,ae:/[æ]/g,AE:/[Æ]/g},b={" ":/[\xa0\u2002\u2003\u2009]/g,"*":/[\xb7]/g,"'":/[\u2018\u2019]/g,'"':/[\u201c\u201d]/g,"...":/[\u2026]/g,"-":/[\u2013]/g,"&raquo;":/[\uFFFD]/g};
var a=function(f,h){var e=f,g;for(g in h){e=e.replace(h[g],g);}return e;};var d=function(e,g){e=e||"";var h=g?"<"+e+"(?!\\w)[^>]*>([\\s\\S]*?)</"+e+"(?!\\w)>":"</?"+e+"([^>]+)?>",f=new RegExp(h,"gi");
return f;};String.implement({standardize:function(){return a(this,c);},repeat:function(e){return new Array(e+1).join(this);},pad:function(e,h,g){if(this.length>=e){return this;
}var f=(h==null?" ":""+h).repeat(e-this.length).substr(0,e-this.length);if(!g||g=="right"){return this+f;}if(g=="left"){return f+this;}return f.substr(0,(f.length/2).floor())+this+f.substr(0,(f.length/2).ceil());
},getTags:function(e,f){return this.match(d(e,f))||[];},stripTags:function(e,f){return this.replace(d(e,f),"");},tidy:function(){return a(this,b);},truncate:function(e,f,i){var h=this;
if(f==null&&arguments.length==1){f="…";}if(h.length>e){h=h.substring(0,e);if(i){var g=h.lastIndexOf(i);if(g!=-1){h=h.substr(0,g);}}if(f){h+=f;}}return h;
}});})();String.implement({parseQueryString:function(d,a){if(d==null){d=true;}if(a==null){a=true;}var c=this.split(/[&;]/),b={};if(!c.length){return b;
}c.each(function(i){var e=i.indexOf("=")+1,g=e?i.substr(e):"",f=e?i.substr(0,e-1).match(/([^\]\[]+|(\B)(?=\]))/g):[i],h=b;if(!f){return;}if(a){g=decodeURIComponent(g);
}f.each(function(k,j){if(d){k=decodeURIComponent(k);}var l=h[k];if(j<f.length-1){h=h[k]=l||{};}else{if(typeOf(l)=="array"){l.push(g);}else{h[k]=l!=null?[l,g]:g;
}}});});return b;},cleanQueryString:function(a){return this.split("&").filter(function(e){var b=e.indexOf("="),c=b<0?"":e.substr(0,b),d=e.substr(b+1);return a?a.call(null,c,d):(d||d===0);
}).join("&");}});(function(){var b=function(){return this.get("value");};var a=this.URI=new Class({Implements:Options,options:{},regex:/^(?:(\w+):)?(?:\/\/(?:(?:([^:@\/]*):?([^:@\/]*))?@)?([^:\/?#]*)(?::(\d*))?)?(\.\.?$|(?:[^?#\/]*\/)*)([^?#]*)(?:\?([^#]*))?(?:#(.*))?/,parts:["scheme","user","password","host","port","directory","file","query","fragment"],schemes:{http:80,https:443,ftp:21,rtsp:554,mms:1755,file:0},initialize:function(d,c){this.setOptions(c);
var e=this.options.base||a.base;if(!d){d=e;}if(d&&d.parsed){this.parsed=Object.clone(d.parsed);}else{this.set("value",d.href||d.toString(),e?new a(e):false);
}},parse:function(e,d){var c=e.match(this.regex);if(!c){return false;}c.shift();return this.merge(c.associate(this.parts),d);},merge:function(d,c){if((!d||!d.scheme)&&(!c||!c.scheme)){return false;
}if(c){this.parts.every(function(e){if(d[e]){return false;}d[e]=c[e]||"";return true;});}d.port=d.port||this.schemes[d.scheme.toLowerCase()];d.directory=d.directory?this.parseDirectory(d.directory,c?c.directory:""):"/";
return d;},parseDirectory:function(d,e){d=(d.substr(0,1)=="/"?"":(e||"/"))+d;if(!d.test(a.regs.directoryDot)){return d;}var c=[];d.replace(a.regs.endSlash,"").split("/").each(function(f){if(f==".."&&c.length>0){c.pop();
}else{if(f!="."){c.push(f);}}});return c.join("/")+"/";},combine:function(c){return c.value||c.scheme+"://"+(c.user?c.user+(c.password?":"+c.password:"")+"@":"")+(c.host||"")+(c.port&&c.port!=this.schemes[c.scheme]?":"+c.port:"")+(c.directory||"/")+(c.file||"")+(c.query?"?"+c.query:"")+(c.fragment?"#"+c.fragment:"");
},set:function(d,f,e){if(d=="value"){var c=f.match(a.regs.scheme);if(c){c=c[1];}if(c&&this.schemes[c.toLowerCase()]==null){this.parsed={scheme:c,value:f};
}else{this.parsed=this.parse(f,(e||this).parsed)||(c?{scheme:c,value:f}:{value:f});}}else{if(d=="data"){this.setData(f);}else{this.parsed[d]=f;}}return this;
},get:function(c,d){switch(c){case"value":return this.combine(this.parsed,d?d.parsed:false);case"data":return this.getData();}return this.parsed[c]||"";
},go:function(){document.location.href=this.toString();},toURI:function(){return this;},getData:function(e,d){var c=this.get(d||"query");if(!(c||c===0)){return e?null:{};
}var f=c.parseQueryString();return e?f[e]:f;},setData:function(c,f,d){if(typeof c=="string"){var e=this.getData();e[arguments[0]]=arguments[1];c=e;}else{if(f){c=Object.merge(this.getData(),c);
}}return this.set(d||"query",Object.toQueryString(c));},clearData:function(c){return this.set(c||"query","");},toString:b,valueOf:b});a.regs={endSlash:/\/$/,scheme:/^(\w+):/,directoryDot:/\.\/|\.$/};
a.base=new a(Array.from(document.getElements("base[href]",true)).getLast(),{base:document.location});String.implement({toURI:function(c){return new a(this,c);
}});})();URI=Class.refactor(URI,{combine:function(f,e){if(!e||f.scheme!=e.scheme||f.host!=e.host||f.port!=e.port){return this.previous.apply(this,arguments);
}var a=f.file+(f.query?"?"+f.query:"")+(f.fragment?"#"+f.fragment:"");if(!e.directory){return(f.directory||(f.file?"":"./"))+a;}var d=e.directory.split("/"),c=f.directory.split("/"),g="",h;
var b=0;for(h=0;h<d.length&&h<c.length&&d[h]==c[h];h++){}for(b=0;b<d.length-h-1;b++){g+="../";}for(b=h;b<c.length-1;b++){g+=c[b]+"/";}return(g||(f.file?"":"./"))+a;
},toAbsolute:function(a){a=new URI(a);if(a){a.set("directory","").set("file","");}return this.toRelative(a);},toRelative:function(a){return this.get("value",new URI(a));
}});(function(){if(this.Hash){return;}var a=this.Hash=new Type("Hash",function(b){if(typeOf(b)=="hash"){b=Object.clone(b.getClean());}for(var c in b){this[c]=b[c];
}return this;});this.$H=function(b){return new a(b);};a.implement({forEach:function(b,c){Object.forEach(this,b,c);},getClean:function(){var c={};for(var b in this){if(this.hasOwnProperty(b)){c[b]=this[b];
}}return c;},getLength:function(){var c=0;for(var b in this){if(this.hasOwnProperty(b)){c++;}}return c;}});a.alias("each","forEach");a.implement({has:Object.prototype.hasOwnProperty,keyOf:function(b){return Object.keyOf(this,b);
},hasValue:function(b){return Object.contains(this,b);},extend:function(b){a.each(b||{},function(d,c){a.set(this,c,d);},this);return this;},combine:function(b){a.each(b||{},function(d,c){a.include(this,c,d);
},this);return this;},erase:function(b){if(this.hasOwnProperty(b)){delete this[b];}return this;},get:function(b){return(this.hasOwnProperty(b))?this[b]:null;
},set:function(b,c){if(!this[b]||this.hasOwnProperty(b)){this[b]=c;}return this;},empty:function(){a.each(this,function(c,b){delete this[b];},this);return this;
},include:function(b,c){if(this[b]==undefined){this[b]=c;}return this;},map:function(b,c){return new a(Object.map(this,b,c));},filter:function(b,c){return new a(Object.filter(this,b,c));
},every:function(b,c){return Object.every(this,b,c);},some:function(b,c){return Object.some(this,b,c);},getKeys:function(){return Object.keys(this);},getValues:function(){return Object.values(this);
},toQueryString:function(b){return Object.toQueryString(this,b);}});a.alias({indexOf:"keyOf",contains:"hasValue"});})();Hash.implement({getFromPath:function(a){return Object.getFromPath(this,a);
},cleanValues:function(a){return new Hash(Object.cleanValues(this,a));},run:function(){Object.run(arguments);}});Element.implement({tidy:function(){this.set("value",this.get("value").tidy());
},getTextInRange:function(b,a){return this.get("value").substring(b,a);},getSelectedText:function(){if(this.setSelectionRange){return this.getTextInRange(this.getSelectionStart(),this.getSelectionEnd());
}return document.selection.createRange().text;},getSelectedRange:function(){if(this.selectionStart!=null){return{start:this.selectionStart,end:this.selectionEnd};
}var e={start:0,end:0};var a=this.getDocument().selection.createRange();if(!a||a.parentElement()!=this){return e;}var c=a.duplicate();if(this.type=="text"){e.start=0-c.moveStart("character",-100000);
e.end=e.start+a.text.length;}else{var b=this.get("value");var d=b.length;c.moveToElementText(this);c.setEndPoint("StartToEnd",a);if(c.text.length){d-=b.match(/[\n\r]*$/)[0].length;
}e.end=d-c.text.length;c.setEndPoint("StartToStart",a);e.start=d-c.text.length;}return e;},getSelectionStart:function(){return this.getSelectedRange().start;
},getSelectionEnd:function(){return this.getSelectedRange().end;},setCaretPosition:function(a){if(a=="end"){a=this.get("value").length;}this.selectRange(a,a);
return this;},getCaretPosition:function(){return this.getSelectedRange().start;},selectRange:function(e,a){if(this.setSelectionRange){this.focus();this.setSelectionRange(e,a);
}else{var c=this.get("value");var d=c.substr(e,a-e).replace(/\r/g,"").length;e=c.substr(0,e).replace(/\r/g,"").length;var b=this.createTextRange();b.collapse(true);
b.moveEnd("character",e+d);b.moveStart("character",e);b.select();}return this;},insertAtCursor:function(b,a){var d=this.getSelectedRange();var c=this.get("value");
this.set("value",c.substring(0,d.start)+b+c.substring(d.end,c.length));if(a!==false){this.selectRange(d.start,d.start+b.length);}else{this.setCaretPosition(d.start+b.length);
}return this;},insertAroundCursor:function(b,a){b=Object.append({before:"",defaultMiddle:"",after:""},b);var c=this.getSelectedText()||b.defaultMiddle;
var g=this.getSelectedRange();var f=this.get("value");if(g.start==g.end){this.set("value",f.substring(0,g.start)+b.before+c+b.after+f.substring(g.end,f.length));
this.selectRange(g.start+b.before.length,g.end+b.before.length+c.length);}else{var d=f.substring(g.start,g.end);this.set("value",f.substring(0,g.start)+b.before+d+b.after+f.substring(g.end,f.length));
var e=g.start+b.before.length;if(a!==false){this.selectRange(e,e+d.length);}else{this.setCaretPosition(e+f.length);}}return this;}});Elements.from=function(e,d){if(d||d==null){e=e.stripScripts();
}var b,c=e.match(/^\s*<(t[dhr]|tbody|tfoot|thead)/i);if(c){b=new Element("table");var a=c[1].toLowerCase();if(["td","th","tr"].contains(a)){b=new Element("tbody").inject(b);
if(a!="tr"){b=new Element("tr").inject(b);}}}return(b||new Element("div")).set("html",e).getChildren();};(function(){var d={},c=["once","throttle","pause"],b=c.length;
while(b--){d[c[b]]=Events.lookupPseudo(c[b]);}Event.definePseudo=function(e,f){d[e]=Type.isFunction(f)?{listener:f}:f;return this;};var a=Element.prototype;
[Element,Window,Document].invoke("implement",Events.Pseudos(d,a.addEvent,a.removeEvent));})();(function(){var a="$moo:keys-pressed",b="$moo:keys-keyup";
Event.definePseudo("keys",function(d,e,c){var g=c[0],f=[],h=this.retrieve(a,[]);f.append(d.value.replace("++",function(){f.push("+");return"";}).split("+"));
h.include(g.key);if(f.every(function(j){return h.contains(j);})){e.apply(this,c);}this.store(a,h);if(!this.retrieve(b)){var i=function(j){(function(){h=this.retrieve(a,[]).erase(j.key);
this.store(a,h);}).delay(0,this);};this.store(b,i).addEvent("keyup",i);}});Object.append(Event.Keys,{shift:16,control:17,alt:18,capslock:20,pageup:33,pagedown:34,end:35,home:36,numlock:144,scrolllock:145,";":186,"=":187,",":188,"-":Browser.firefox?109:189,".":190,"/":191,"`":192,"[":219,"\\":220,"]":221,"'":222,"+":107});
})();(function(){var b=!(window.attachEvent&&!window.addEventListener),f=Element.NativeEvents;f.focusin=2;f.focusout=2;var c=function(h,k,i){var j=Element.Events[h.event],l;
if(j){l=j.condition;}return Slick.match(k,h.value)&&(!l||l.call(k,i));};var e=function(h,j,i){for(var k=j.target;k&&k!=this;k=document.id(k.parentNode)){if(k&&c(h,k,j)){return i.call(k,j,k);
}}};var g=function(h){var i="$delegation:";return{base:"focusin",onRemove:function(j){j.retrieve(i+"forms",[]).each(function(k){k.retrieve(i+"listeners",[]).each(function(l){k.removeEvent(h,l);
});k.eliminate(i+h+"listeners").eliminate(i+h+"originalFn");});},listener:function(r,s,q,t,v){var k=q[0],j=this.retrieve(i+"forms",[]),p=k.target,m=(p.get("tag")=="form")?p:k.target.getParent("form");
if(!m){return;}var o=m.retrieve(i+"originalFn",[]),l=m.retrieve(i+"listeners",[]),u=this;j.include(m);this.store(i+"forms",j);if(!o.contains(s)){var n=function(w){e.call(u,r,w,s);
};m.addEvent(h,n);o.push(s);l.push(n);m.store(i+h+"originalFn",o).store(i+h+"listeners",l);}}};};var a=function(h){return{base:"focusin",listener:function(l,m,j){var k={blur:function(){this.removeEvents(k);
}},i=this;k[h]=function(n){e.call(i,l,n,m);};j[0].target.addEvents(k);}};};var d={mouseenter:{base:"mouseover"},mouseleave:{base:"mouseout"},focus:{base:"focus"+(b?"":"in"),args:[true]},blur:{base:b?"blur":"focusout",args:[true]}};
if(!b){Object.append(d,{submit:g("submit"),reset:g("reset"),change:a("change"),select:a("select")});}Event.definePseudo("relay",{listener:function(i,j,h){e.call(this,i,h[0],j);
},options:d});})();(function(){var b=function(e,d){var f=[];Object.each(d,function(g){Object.each(g,function(h){e.each(function(i){f.push(i+"-"+h+(i=="border"?"-width":""));
});});});return f;};var c=function(f,e){var d=0;Object.each(e,function(h,g){if(g.test(f)){d=d+h.toInt();}});return d;};var a=function(d){return !!(!d||d.offsetHeight||d.offsetWidth);
};Element.implement({measure:function(h){if(a(this)){return h.call(this);}var g=this.getParent(),e=[];while(!a(g)&&g!=document.body){e.push(g.expose());
g=g.getParent();}var f=this.expose(),d=h.call(this);f();e.each(function(i){i();});return d;},expose:function(){if(this.getStyle("display")!="none"){return function(){};
}var d=this.style.cssText;this.setStyles({display:"block",position:"absolute",visibility:"hidden"});return function(){this.style.cssText=d;}.bind(this);
},getDimensions:function(d){d=Object.merge({computeSize:false},d);var i={x:0,y:0};var h=function(j,e){return(e.computeSize)?j.getComputedSize(e):j.getSize();
};var f=this.getParent("body");if(f&&this.getStyle("display")=="none"){i=this.measure(function(){return h(this,d);});}else{if(f){try{i=h(this,d);}catch(g){}}}return Object.append(i,(i.x||i.x===0)?{width:i.x,height:i.y}:{x:i.width,y:i.height});
},getComputedSize:function(d){if(d&&d.plains){d.planes=d.plains;}d=Object.merge({styles:["padding","border"],planes:{height:["top","bottom"],width:["left","right"]},mode:"both"},d);
var g={},e={width:0,height:0},f;if(d.mode=="vertical"){delete e.width;delete d.planes.width;}else{if(d.mode=="horizontal"){delete e.height;delete d.planes.height;
}}b(d.styles,d.planes).each(function(h){g[h]=this.getStyle(h).toInt();},this);Object.each(d.planes,function(i,h){var k=h.capitalize(),j=this.getStyle(h);
if(j=="auto"&&!f){f=this.getDimensions();}j=g[h]=(j=="auto")?f[h]:j.toInt();e["total"+k]=j;i.each(function(m){var l=c(m,g);e["computed"+m.capitalize()]=l;
e["total"+k]+=l;});},this);return Object.append(e,g);}});})();(function(){var a=false,b=false;var c=function(){var d=new Element("div").setStyles({position:"fixed",top:0,right:0}).inject(document.body);
a=(d.offsetTop===0);d.dispose();b=true;};Element.implement({pin:function(h,f){if(!b){c();}if(this.getStyle("display")=="none"){return this;}var j,k=window.getScroll(),l,e;
if(h!==false){j=this.getPosition(a?document.body:this.getOffsetParent());if(!this.retrieve("pin:_pinned")){var g={top:j.y-k.y,left:j.x-k.x};if(a&&!f){this.setStyle("position","fixed").setStyles(g);
}else{l=this.getOffsetParent();var i=this.getPosition(l),m=this.getStyles("left","top");if(l&&m.left=="auto"||m.top=="auto"){this.setPosition(i);}if(this.getStyle("position")=="static"){this.setStyle("position","absolute");
}i={x:m.left.toInt()-k.x,y:m.top.toInt()-k.y};e=function(){if(!this.retrieve("pin:_pinned")){return;}var n=window.getScroll();this.setStyles({left:i.x+n.x,top:i.y+n.y});
}.bind(this);this.store("pin:_scrollFixer",e);window.addEvent("scroll",e);}this.store("pin:_pinned",true);}}else{if(!this.retrieve("pin:_pinned")){return this;
}l=this.getParent();var d=(l.getComputedStyle("position")!="static"?l:l.getOffsetParent());j=this.getPosition(d);this.store("pin:_pinned",false);e=this.retrieve("pin:_scrollFixer");
if(!e){this.setStyles({position:"absolute",top:j.y+k.y,left:j.x+k.x});}else{this.store("pin:_scrollFixer",null);window.removeEvent("scroll",e);}this.removeClass("isPinned");
}return this;},unpin:function(){return this.pin(false);},togglePin:function(){return this.pin(!this.retrieve("pin:_pinned"));}});Element.alias("togglepin","togglePin");
})();(function(b){var a=Element.Position={options:{relativeTo:document.body,position:{x:"center",y:"center"},offset:{x:0,y:0}},getOptions:function(d,c){c=Object.merge({},a.options,c);
a.setPositionOption(c);a.setEdgeOption(c);a.setOffsetOption(d,c);a.setDimensionsOption(d,c);return c;},setPositionOption:function(c){c.position=a.getCoordinateFromValue(c.position);
},setEdgeOption:function(d){var c=a.getCoordinateFromValue(d.edge);d.edge=c?c:(d.position.x=="center"&&d.position.y=="center")?{x:"center",y:"center"}:{x:"left",y:"top"};
},setOffsetOption:function(f,d){var c={x:0,y:0},g=f.measure(function(){return document.id(this.getOffsetParent());}),e=g.getScroll();if(!g||g==f.getDocument().body){return;
}c=g.measure(function(){var i=this.getPosition();if(this.getStyle("position")=="fixed"){var h=window.getScroll();i.x+=h.x;i.y+=h.y;}return i;});d.offset={parentPositioned:g!=document.id(d.relativeTo),x:d.offset.x-c.x+e.x,y:d.offset.y-c.y+e.y};
},setDimensionsOption:function(d,c){c.dimensions=d.getDimensions({computeSize:true,styles:["padding","border","margin"]});},getPosition:function(e,d){var c={};
d=a.getOptions(e,d);var f=document.id(d.relativeTo)||document.body;a.setPositionCoordinates(d,c,f);if(d.edge){a.toEdge(c,d);}var g=d.offset;c.left=((c.x>=0||g.parentPositioned||d.allowNegative)?c.x:0).toInt();
c.top=((c.y>=0||g.parentPositioned||d.allowNegative)?c.y:0).toInt();a.toMinMax(c,d);if(d.relFixedPosition||f.getStyle("position")=="fixed"){a.toRelFixedPosition(f,c);
}if(d.ignoreScroll){a.toIgnoreScroll(f,c);}if(d.ignoreMargins){a.toIgnoreMargins(c,d);}c.left=Math.ceil(c.left);c.top=Math.ceil(c.top);delete c.x;delete c.y;
return c;},setPositionCoordinates:function(k,g,d){var f=k.offset.y,h=k.offset.x,e=(d==document.body)?window.getScroll():d.getPosition(),j=e.y,c=e.x,i=window.getSize();
switch(k.position.x){case"left":g.x=c+h;break;case"right":g.x=c+h+d.offsetWidth;break;default:g.x=c+((d==document.body?i.x:d.offsetWidth)/2)+h;break;}switch(k.position.y){case"top":g.y=j+f;
break;case"bottom":g.y=j+f+d.offsetHeight;break;default:g.y=j+((d==document.body?i.y:d.offsetHeight)/2)+f;break;}},toMinMax:function(c,d){var f={left:"x",top:"y"},e;
["minimum","maximum"].each(function(g){["left","top"].each(function(h){e=d[g]?d[g][f[h]]:null;if(e!=null&&((g=="minimum")?c[h]<e:c[h]>e)){c[h]=e;}});});
},toRelFixedPosition:function(e,c){var d=window.getScroll();c.top+=d.y;c.left+=d.x;},toIgnoreScroll:function(e,d){var c=e.getScroll();d.top-=c.y;d.left-=c.x;
},toIgnoreMargins:function(c,d){c.left+=d.edge.x=="right"?d.dimensions["margin-right"]:(d.edge.x!="center"?-d.dimensions["margin-left"]:-d.dimensions["margin-left"]+((d.dimensions["margin-right"]+d.dimensions["margin-left"])/2));
c.top+=d.edge.y=="bottom"?d.dimensions["margin-bottom"]:(d.edge.y!="center"?-d.dimensions["margin-top"]:-d.dimensions["margin-top"]+((d.dimensions["margin-bottom"]+d.dimensions["margin-top"])/2));
},toEdge:function(c,d){var e={},g=d.dimensions,f=d.edge;switch(f.x){case"left":e.x=0;break;case"right":e.x=-g.x-g.computedRight-g.computedLeft;break;default:e.x=-(Math.round(g.totalWidth/2));
break;}switch(f.y){case"top":e.y=0;break;case"bottom":e.y=-g.y-g.computedTop-g.computedBottom;break;default:e.y=-(Math.round(g.totalHeight/2));break;}c.x+=e.x;
c.y+=e.y;},getCoordinateFromValue:function(c){if(typeOf(c)!="string"){return c;}c=c.toLowerCase();return{x:c.test("left")?"left":(c.test("right")?"right":"center"),y:c.test(/upper|top/)?"top":(c.test("bottom")?"bottom":"center")};
}};Element.implement({position:function(d){if(d&&(d.x!=null||d.y!=null)){return(b?b.apply(this,arguments):this);}var c=this.setStyle("position","absolute").calculatePosition(d);
return(d&&d.returnPos)?c:this.setStyles(c);},calculatePosition:function(c){return a.getPosition(this,c);}});})(Element.prototype.position);Element.implement({isDisplayed:function(){return this.getStyle("display")!="none";
},isVisible:function(){var a=this.offsetWidth,b=this.offsetHeight;return(a==0&&b==0)?false:(a>0&&b>0)?true:this.style.display!="none";},toggle:function(){return this[this.isDisplayed()?"hide":"show"]();
},hide:function(){var b;try{b=this.getStyle("display");}catch(a){}if(b=="none"){return this;}return this.store("element:_originalDisplay",b||"").setStyle("display","none");
},show:function(a){if(!a&&this.isDisplayed()){return this;}a=a||this.retrieve("element:_originalDisplay")||"block";return this.setStyle("display",(a=="none")?"block":a);
},swapClass:function(a,b){return this.removeClass(a).addClass(b);}});Document.implement({clearSelection:function(){if(window.getSelection){var a=window.getSelection();
if(a&&a.removeAllRanges){a.removeAllRanges();}}else{if(document.selection&&document.selection.empty){try{document.selection.empty();}catch(b){}}}}});var IframeShim=new Class({Implements:[Options,Events,Class.Occlude],options:{className:"iframeShim",src:'javascript:false;document.write("");',display:false,zIndex:null,margin:0,offset:{x:0,y:0},browsers:(Browser.ie6||(Browser.firefox&&Browser.version<3&&Browser.Platform.mac))},property:"IframeShim",initialize:function(b,a){this.element=document.id(b);
if(this.occlude()){return this.occluded;}this.setOptions(a);this.makeShim();return this;},makeShim:function(){if(this.options.browsers){var c=this.element.getStyle("zIndex").toInt();
if(!c){c=1;var b=this.element.getStyle("position");if(b=="static"||!b){this.element.setStyle("position","relative");}this.element.setStyle("zIndex",c);
}c=((this.options.zIndex!=null||this.options.zIndex===0)&&c>this.options.zIndex)?this.options.zIndex:c-1;if(c<0){c=1;}this.shim=new Element("iframe",{src:this.options.src,scrolling:"no",frameborder:0,styles:{zIndex:c,position:"absolute",border:"none",filter:"progid:DXImageTransform.Microsoft.Alpha(style=0,opacity=0)"},"class":this.options.className}).store("IframeShim",this);
var a=(function(){this.shim.inject(this.element,"after");this[this.options.display?"show":"hide"]();this.fireEvent("inject");}).bind(this);if(!IframeShim.ready){window.addEvent("load",a);
}else{a();}}else{this.position=this.hide=this.show=this.dispose=Function.from(this);}},position:function(){if(!IframeShim.ready||!this.shim){return this;
}var a=this.element.measure(function(){return this.getSize();});if(this.options.margin!=undefined){a.x=a.x-(this.options.margin*2);a.y=a.y-(this.options.margin*2);
this.options.offset.x+=this.options.margin;this.options.offset.y+=this.options.margin;}this.shim.set({width:a.x,height:a.y}).position({relativeTo:this.element,offset:this.options.offset});
return this;},hide:function(){if(this.shim){this.shim.setStyle("display","none");}return this;},show:function(){if(this.shim){this.shim.setStyle("display","block");
}return this.position();},dispose:function(){if(this.shim){this.shim.dispose();}return this;},destroy:function(){if(this.shim){this.shim.destroy();}return this;
}});window.addEvent("load",function(){IframeShim.ready=true;});var Mask=new Class({Implements:[Options,Events],Binds:["position"],options:{style:{},"class":"mask",maskMargins:false,useIframeShim:true,iframeShimOptions:{}},initialize:function(b,a){this.target=document.id(b)||document.id(document.body);
this.target.store("mask",this);this.setOptions(a);this.render();this.inject();},render:function(){this.element=new Element("div",{"class":this.options["class"],id:this.options.id||"mask-"+String.uniqueID(),styles:Object.merge({},this.options.style,{display:"none"}),events:{click:function(a){this.fireEvent("click",a);
if(this.options.hideOnClick){this.hide();}}.bind(this)}});this.hidden=true;},toElement:function(){return this.element;},inject:function(b,a){a=a||(this.options.inject?this.options.inject.where:"")||this.target==document.body?"inside":"after";
b=b||(this.options.inject&&this.options.inject.target)||this.target;this.element.inject(b,a);if(this.options.useIframeShim){this.shim=new IframeShim(this.element,this.options.iframeShimOptions);
this.addEvents({show:this.shim.show.bind(this.shim),hide:this.shim.hide.bind(this.shim),destroy:this.shim.destroy.bind(this.shim)});}},position:function(){this.resize(this.options.width,this.options.height);
this.element.position({relativeTo:this.target,position:"topLeft",ignoreMargins:!this.options.maskMargins,ignoreScroll:this.target==document.body});return this;
},resize:function(a,e){var b={styles:["padding","border"]};if(this.options.maskMargins){b.styles.push("margin");}var d=this.target.getComputedSize(b);if(this.target==document.body){this.element.setStyles({width:0,height:0});
var c=window.getScrollSize();if(d.totalHeight<c.y){d.totalHeight=c.y;}if(d.totalWidth<c.x){d.totalWidth=c.x;}}this.element.setStyles({width:Array.pick([a,d.totalWidth,d.x]),height:Array.pick([e,d.totalHeight,d.y])});
return this;},show:function(){if(!this.hidden){return this;}window.addEvent("resize",this.position);this.position();this.showMask.apply(this,arguments);
return this;},showMask:function(){this.element.setStyle("display","block");this.hidden=false;this.fireEvent("show");},hide:function(){if(this.hidden){return this;
}window.removeEvent("resize",this.position);this.hideMask.apply(this,arguments);if(this.options.destroyOnHide){return this.destroy();}return this;},hideMask:function(){this.element.setStyle("display","none");
this.hidden=true;this.fireEvent("hide");},toggle:function(){this[this.hidden?"show":"hide"]();},destroy:function(){this.hide();this.element.destroy();this.fireEvent("destroy");
this.target.eliminate("mask");}});Element.Properties.mask={set:function(b){var a=this.retrieve("mask");if(a){a.destroy();}return this.eliminate("mask").store("mask:options",b);
},get:function(){var a=this.retrieve("mask");if(!a){a=new Mask(this,this.retrieve("mask:options"));this.store("mask",a);}return a;}};Element.implement({mask:function(a){if(a){this.set("mask",a);
}this.get("mask").show();return this;},unmask:function(){this.get("mask").hide();return this;}});var Spinner=new Class({Extends:Mask,Implements:Chain,options:{"class":"spinner",containerPosition:{},content:{"class":"spinner-content"},messageContainer:{"class":"spinner-msg"},img:{"class":"spinner-img"},fxOptions:{link:"chain"}},initialize:function(c,a){this.target=document.id(c)||document.id(document.body);
this.target.store("spinner",this);this.setOptions(a);this.render();this.inject();var b=function(){this.active=false;}.bind(this);this.addEvents({hide:b,show:b});
},render:function(){this.parent();this.element.set("id",this.options.id||"spinner-"+String.uniqueID());this.content=document.id(this.options.content)||new Element("div",this.options.content);
this.content.inject(this.element);if(this.options.message){this.msg=document.id(this.options.message)||new Element("p",this.options.messageContainer).appendText(this.options.message);
this.msg.inject(this.content);}if(this.options.img){this.img=document.id(this.options.img)||new Element("div",this.options.img);this.img.inject(this.content);
}this.element.set("tween",this.options.fxOptions);},show:function(a){if(this.active){return this.chain(this.show.bind(this));}if(!this.hidden){this.callChain.delay(20,this);
return this;}this.active=true;return this.parent(a);},showMask:function(a){var b=function(){this.content.position(Object.merge({relativeTo:this.element},this.options.containerPosition));
}.bind(this);if(a){this.parent();b();}else{if(!this.options.style.opacity){this.options.style.opacity=this.element.getStyle("opacity").toFloat();}this.element.setStyles({display:"block",opacity:0}).tween("opacity",this.options.style.opacity);
b();this.hidden=false;this.fireEvent("show");this.callChain();}},hide:function(a){if(this.active){return this.chain(this.hide.bind(this));}if(this.hidden){this.callChain.delay(20,this);
return this;}this.active=true;return this.parent(a);},hideMask:function(a){if(a){return this.parent();}this.element.tween("opacity",0).get("tween").chain(function(){this.element.setStyle("display","none");
this.hidden=true;this.fireEvent("hide");this.callChain();}.bind(this));},destroy:function(){this.content.destroy();this.parent();this.target.eliminate("spinner");
}});Request=Class.refactor(Request,{options:{useSpinner:false,spinnerOptions:{},spinnerTarget:false},initialize:function(a){this._send=this.send;this.send=function(b){var c=this.getSpinner();
if(c){c.chain(this._send.pass(b,this)).show();}else{this._send(b);}return this;};this.previous(a);},getSpinner:function(){if(!this.spinner){var b=document.id(this.options.spinnerTarget)||document.id(this.options.update);
if(this.options.useSpinner&&b){b.set("spinner",this.options.spinnerOptions);var a=this.spinner=b.get("spinner");["complete","exception","cancel"].each(function(c){this.addEvent(c,a.hide.bind(a));
},this);}}return this.spinner;}});Element.Properties.spinner={set:function(a){var b=this.retrieve("spinner");if(b){b.destroy();}return this.eliminate("spinner").store("spinner:options",a);
},get:function(){var a=this.retrieve("spinner");if(!a){a=new Spinner(this,this.retrieve("spinner:options"));this.store("spinner",a);}return a;}};Element.implement({spin:function(a){if(a){this.set("spinner",a);
}this.get("spinner").show();return this;},unspin:function(){this.get("spinner").hide();return this;}});if(!window.Form){window.Form={};}(function(){Form.Request=new Class({Binds:["onSubmit","onFormValidate"],Implements:[Options,Events,Class.Occlude],options:{requestOptions:{evalScripts:true,useSpinner:true,emulation:false,link:"ignore"},sendButtonClicked:true,extraData:{},resetForm:true},property:"form.request",initialize:function(b,c,a){this.element=document.id(b);
if(this.occlude()){return this.occluded;}this.setOptions(a).setTarget(c).attach();},setTarget:function(a){this.target=document.id(a);if(!this.request){this.makeRequest();
}else{this.request.setOptions({update:this.target});}return this;},toElement:function(){return this.element;},makeRequest:function(){var a=this;this.request=new Request.HTML(Object.merge({update:this.target,emulation:false,spinnerTarget:this.element,method:this.element.get("method")||"post"},this.options.requestOptions)).addEvents({success:function(c,e,d,b){["complete","success"].each(function(f){a.fireEvent(f,[a.target,c,e,d,b]);
});},failure:function(){a.fireEvent("complete",arguments).fireEvent("failure",arguments);},exception:function(){a.fireEvent("failure",arguments);}});return this.attachReset();
},attachReset:function(){if(!this.options.resetForm){return this;}this.request.addEvent("success",function(){Function.attempt(function(){this.element.reset();
}.bind(this));if(window.OverText){OverText.update();}}.bind(this));return this;},attach:function(a){var c=(a!=false)?"addEvent":"removeEvent";this.element[c]("click:relay(button, input[type=submit])",this.saveClickedButton.bind(this));
var b=this.element.retrieve("validator");if(b){b[c]("onFormValidate",this.onFormValidate);}else{this.element[c]("submit",this.onSubmit);}return this;},detach:function(){return this.attach(false);
},enable:function(){return this.attach();},disable:function(){return this.detach();},onFormValidate:function(c,b,a){if(!a){return;}var d=this.element.retrieve("validator");
if(c||(d&&!d.options.stopOnFailure)){a.stop();this.send();}},onSubmit:function(a){var b=this.element.retrieve("validator");if(b){this.element.removeEvent("submit",this.onSubmit);
b.addEvent("onFormValidate",this.onFormValidate);this.element.validate();return;}if(a){a.stop();}this.send();},saveClickedButton:function(b,c){var a=c.get("name");
if(!a||!this.options.sendButtonClicked){return;}this.options.extraData[a]=c.get("value")||true;this.clickedCleaner=function(){delete this.options.extraData[a];
this.clickedCleaner=function(){};}.bind(this);},clickedCleaner:function(){},send:function(){var b=this.element.toQueryString().trim(),a=Object.toQueryString(this.options.extraData);
if(b){b+="&"+a;}else{b=a;}this.fireEvent("send",[this.element,b.parseQueryString()]);this.request.send({data:b,url:this.options.requestOptions.url||this.element.get("action")});
this.clickedCleaner();return this;}});Element.implement("formUpdate",function(c,b){var a=this.retrieve("form.request");if(!a){a=new Form.Request(this,c,b);
}else{if(c){a.setTarget(c);}if(b){a.setOptions(b).makeRequest();}}a.send();return this;});})();(function(){var a=function(d){var b=d.options.hideInputs;
if(window.OverText){var c=[null];OverText.each(function(e){c.include("."+e.options.labelClass);});if(c){b+=c.join(", ");}}return(b)?d.element.getElements(b):null;
};Fx.Reveal=new Class({Extends:Fx.Morph,options:{link:"cancel",styles:["padding","border","margin"],transitionOpacity:!Browser.ie6,mode:"vertical",display:function(){return this.element.get("tag")!="tr"?"block":"table-row";
},opacity:1,hideInputs:Browser.ie?"select, input, textarea, object, embed":null},dissolve:function(){if(!this.hiding&&!this.showing){if(this.element.getStyle("display")!="none"){this.hiding=true;
this.showing=false;this.hidden=true;this.cssText=this.element.style.cssText;var d=this.element.getComputedSize({styles:this.options.styles,mode:this.options.mode});
if(this.options.transitionOpacity){d.opacity=this.options.opacity;}var c={};Object.each(d,function(f,e){c[e]=[f,0];});this.element.setStyles({display:Function.from(this.options.display).call(this),overflow:"hidden"});
var b=a(this);if(b){b.setStyle("visibility","hidden");}this.$chain.unshift(function(){if(this.hidden){this.hiding=false;this.element.style.cssText=this.cssText;
this.element.setStyle("display","none");if(b){b.setStyle("visibility","visible");}}this.fireEvent("hide",this.element);this.callChain();}.bind(this));this.start(c);
}else{this.callChain.delay(10,this);this.fireEvent("complete",this.element);this.fireEvent("hide",this.element);}}else{if(this.options.link=="chain"){this.chain(this.dissolve.bind(this));
}else{if(this.options.link=="cancel"&&!this.hiding){this.cancel();this.dissolve();}}}return this;},reveal:function(){if(!this.showing&&!this.hiding){if(this.element.getStyle("display")=="none"){this.hiding=false;
this.showing=true;this.hidden=false;this.cssText=this.element.style.cssText;var d;this.element.measure(function(){d=this.element.getComputedSize({styles:this.options.styles,mode:this.options.mode});
}.bind(this));if(this.options.heightOverride!=null){d.height=this.options.heightOverride.toInt();}if(this.options.widthOverride!=null){d.width=this.options.widthOverride.toInt();
}if(this.options.transitionOpacity){this.element.setStyle("opacity",0);d.opacity=this.options.opacity;}var c={height:0,display:Function.from(this.options.display).call(this)};
Object.each(d,function(f,e){c[e]=0;});c.overflow="hidden";this.element.setStyles(c);var b=a(this);if(b){b.setStyle("visibility","hidden");}this.$chain.unshift(function(){this.element.style.cssText=this.cssText;
this.element.setStyle("display",Function.from(this.options.display).call(this));if(!this.hidden){this.showing=false;}if(b){b.setStyle("visibility","visible");
}this.callChain();this.fireEvent("show",this.element);}.bind(this));this.start(d);}else{this.callChain();this.fireEvent("complete",this.element);this.fireEvent("show",this.element);
}}else{if(this.options.link=="chain"){this.chain(this.reveal.bind(this));}else{if(this.options.link=="cancel"&&!this.showing){this.cancel();this.reveal();
}}}return this;},toggle:function(){if(this.element.getStyle("display")=="none"){this.reveal();}else{this.dissolve();}return this;},cancel:function(){this.parent.apply(this,arguments);
if(this.cssText!=null){this.element.style.cssText=this.cssText;}this.hiding=false;this.showing=false;return this;}});Element.Properties.reveal={set:function(b){this.get("reveal").cancel().setOptions(b);
return this;},get:function(){var b=this.retrieve("reveal");if(!b){b=new Fx.Reveal(this);this.store("reveal",b);}return b;}};Element.Properties.dissolve=Element.Properties.reveal;
Element.implement({reveal:function(b){this.get("reveal").setOptions(b).reveal();return this;},dissolve:function(b){this.get("reveal").setOptions(b).dissolve();
return this;},nix:function(b){var c=Array.link(arguments,{destroy:Type.isBoolean,options:Type.isObject});this.get("reveal").setOptions(b).dissolve().chain(function(){this[c.destroy?"destroy":"dispose"]();
}.bind(this));return this;},wink:function(){var c=Array.link(arguments,{duration:Type.isNumber,options:Type.isObject});var b=this.get("reveal").setOptions(c.options);
b.reveal().chain(function(){(function(){b.dissolve();}).delay(c.duration||2000);});}});})();Form.Request.Append=new Class({Extends:Form.Request,options:{useReveal:true,revealOptions:{},inject:"bottom"},makeRequest:function(){this.request=new Request.HTML(Object.merge({url:this.element.get("action"),method:this.element.get("method")||"post",spinnerTarget:this.element},this.options.requestOptions,{evalScripts:false})).addEvents({success:function(b,g,f,a){var c;
var d=Elements.from(f);if(d.length==1){c=d[0];}else{c=new Element("div",{styles:{display:"none"}}).adopt(d);}c.inject(this.target,this.options.inject);
if(this.options.requestOptions.evalScripts){Browser.exec(a);}this.fireEvent("beforeEffect",c);var e=function(){this.fireEvent("success",[c,this.target,b,g,f,a]);
}.bind(this);if(this.options.useReveal){c.set("reveal",this.options.revealOptions).get("reveal").chain(e);c.reveal();}else{e();}}.bind(this),failure:function(a){this.fireEvent("failure",a);
}.bind(this)});this.attachReset();}});var OverText=new Class({Implements:[Options,Events,Class.Occlude],Binds:["reposition","assert","focus","hide"],options:{element:"label",labelClass:"overTxtLabel",positionOptions:{position:"upperLeft",edge:"upperLeft",offset:{x:4,y:2}},poll:false,pollInterval:250,wrap:false},property:"OverText",initialize:function(b,a){b=this.element=document.id(b);
if(this.occlude()){return this.occluded;}this.setOptions(a);this.attach(b);OverText.instances.push(this);if(this.options.poll){this.poll();}},toElement:function(){return this.element;
},attach:function(){var b=this.element,a=this.options,c=a.textOverride||b.get("alt")||b.get("title");if(!c){return this;}var d=this.text=new Element(a.element,{"class":a.labelClass,styles:{lineHeight:"normal",position:"absolute",cursor:"text"},html:c,events:{click:this.hide.pass(a.element=="label",this)}}).inject(b,"after");
if(a.element=="label"){if(!b.get("id")){b.set("id","input_"+String.uniqueID());}d.set("for",b.get("id"));}if(a.wrap){this.textHolder=new Element("div.overTxtWrapper",{styles:{lineHeight:"normal",position:"relative"}}).grab(d).inject(b,"before");
}return this.enable();},destroy:function(){this.element.eliminate(this.property);this.disable();if(this.text){this.text.destroy();}if(this.textHolder){this.textHolder.destroy();
}return this;},disable:function(){this.element.removeEvents({focus:this.focus,blur:this.assert,change:this.assert});window.removeEvent("resize",this.reposition);
this.hide(true,true);return this;},enable:function(){this.element.addEvents({focus:this.focus,blur:this.assert,change:this.assert});window.addEvent("resize",this.reposition);
this.assert(true);this.reposition();return this;},wrap:function(){if(this.options.element=="label"){if(!this.element.get("id")){this.element.set("id","input_"+String.uniqueID());
}this.text.set("for",this.element.get("id"));}},startPolling:function(){this.pollingPaused=false;return this.poll();},poll:function(a){if(this.poller&&!a){return this;
}if(a){clearInterval(this.poller);}else{this.poller=(function(){if(!this.pollingPaused){this.assert(true);}}).periodical(this.options.pollInterval,this);
}return this;},stopPolling:function(){this.pollingPaused=true;return this.poll(true);},focus:function(){if(this.text&&(!this.text.isDisplayed()||this.element.get("disabled"))){return this;
}return this.hide();},hide:function(c,a){if(this.text&&(this.text.isDisplayed()&&(!this.element.get("disabled")||a))){this.text.hide();this.fireEvent("textHide",[this.text,this.element]);
this.pollingPaused=true;if(!c){try{this.element.fireEvent("focus");this.element.focus();}catch(b){}}}return this;},show:function(){if(this.text&&!this.text.isDisplayed()){this.text.show();
this.reposition();this.fireEvent("textShow",[this.text,this.element]);this.pollingPaused=false;}return this;},test:function(){return !this.element.get("value");
},assert:function(a){return this[this.test()?"show":"hide"](a);},reposition:function(){this.assert(true);if(!this.element.isVisible()){return this.stopPolling().hide();
}if(this.text&&this.test()){this.text.position(Object.merge(this.options.positionOptions,{relativeTo:this.element}));}return this;}});OverText.instances=[];
Object.append(OverText,{each:function(a){return OverText.instances.each(function(c,b){if(c.element&&c.text){a.call(OverText,c,b);}});},update:function(){return OverText.each(function(a){return a.reposition();
});},hideAll:function(){return OverText.each(function(a){return a.hide(true,true);});},showAll:function(){return OverText.each(function(a){return a.show();
});}});Fx.Elements=new Class({Extends:Fx.CSS,initialize:function(b,a){this.elements=this.subject=$$(b);this.parent(a);},compute:function(g,h,j){var c={};
for(var d in g){var a=g[d],e=h[d],f=c[d]={};for(var b in a){f[b]=this.parent(a[b],e[b],j);}}return c;},set:function(b){for(var c in b){if(!this.elements[c]){continue;
}var a=b[c];for(var d in a){this.render(this.elements[c],d,a[d],this.options.unit);}}return this;},start:function(c){if(!this.check(c)){return this;}var h={},j={};
for(var d in c){if(!this.elements[d]){continue;}var f=c[d],a=h[d]={},g=j[d]={};for(var b in f){var e=this.prepare(this.elements[d],b,f[b]);a[b]=e.from;
g[b]=e.to;}}return this.parent(h,j);}});Fx.Accordion=new Class({Extends:Fx.Elements,options:{fixedHeight:false,fixedWidth:false,display:0,show:false,height:true,width:false,opacity:true,alwaysHide:false,trigger:"click",initialDisplayFx:true,resetHeight:true},initialize:function(){var g=function(h){return h!=null;
};var f=Array.link(arguments,{container:Type.isElement,options:Type.isObject,togglers:g,elements:g});this.parent(f.elements,f.options);var b=this.options,e=this.togglers=$$(f.togglers);
this.previous=-1;this.internalChain=new Chain();if(b.alwaysHide){this.options.link="chain";}if(b.show||this.options.show===0){b.display=false;this.previous=b.show;
}if(b.start){b.display=false;b.show=false;}var d=this.effects={};if(b.opacity){d.opacity="fullOpacity";}if(b.width){d.width=b.fixedWidth?"fullWidth":"offsetWidth";
}if(b.height){d.height=b.fixedHeight?"fullHeight":"scrollHeight";}for(var c=0,a=e.length;c<a;c++){this.addSection(e[c],this.elements[c]);}this.elements.each(function(j,h){if(b.show===h){this.fireEvent("active",[e[h],j]);
}else{for(var k in d){j.setStyle(k,0);}}},this);if(b.display||b.display===0||b.initialDisplayFx===false){this.display(b.display,b.initialDisplayFx);}if(b.fixedHeight!==false){b.resetHeight=false;
}this.addEvent("complete",this.internalChain.callChain.bind(this.internalChain));},addSection:function(g,d){g=document.id(g);d=document.id(d);this.togglers.include(g);
this.elements.include(d);var f=this.togglers,c=this.options,h=f.contains(g),a=f.indexOf(g),b=this.display.pass(a,this);g.store("accordion:display",b).addEvent(c.trigger,b);
if(c.height){d.setStyles({"padding-top":0,"border-top":"none","padding-bottom":0,"border-bottom":"none"});}if(c.width){d.setStyles({"padding-left":0,"border-left":"none","padding-right":0,"border-right":"none"});
}d.fullOpacity=1;if(c.fixedWidth){d.fullWidth=c.fixedWidth;}if(c.fixedHeight){d.fullHeight=c.fixedHeight;}d.setStyle("overflow","hidden");if(!h){for(var e in this.effects){d.setStyle(e,0);
}}return this;},removeSection:function(f,b){var e=this.togglers,a=e.indexOf(f),c=this.elements[a];var d=function(){e.erase(f);this.elements.erase(c);this.detach(f);
}.bind(this);if(this.now==a||b!=null){this.display(b!=null?b:(a-1>=0?a-1:0)).chain(d);}else{d();}return this;},detach:function(b){var a=function(c){c.removeEvent(this.options.trigger,c.retrieve("accordion:display"));
}.bind(this);if(!b){this.togglers.each(a);}else{a(b);}return this;},display:function(b,c){if(!this.check(b,c)){return this;}var h={},g=this.elements,a=this.options,f=this.effects;
if(c==null){c=true;}if(typeOf(b)=="element"){b=g.indexOf(b);}if(b==this.previous&&!a.alwaysHide){return this;}if(a.resetHeight){var e=g[this.previous];
if(e&&!this.selfHidden){for(var d in f){e.setStyle(d,e[f[d]]);}}}if((this.timer&&a.link=="chain")||(b===this.previous&&!a.alwaysHide)){return this;}this.previous=b;
this.selfHidden=false;g.each(function(l,k){h[k]={};var j;if(k!=b){j=true;}else{if(a.alwaysHide&&((l.offsetHeight>0&&a.height)||l.offsetWidth>0&&a.width)){j=true;
this.selfHidden=true;}}this.fireEvent(j?"background":"active",[this.togglers[k],l]);for(var m in f){h[k][m]=j?0:l[f[m]];}if(!c&&!j&&a.resetHeight){h[k].height="auto";
}},this);this.internalChain.clearChain();this.internalChain.chain(function(){if(a.resetHeight&&!this.selfHidden){var i=g[b];if(i){i.setStyle("height","auto");
}}}.bind(this));return c?this.start(h):this.set(h).internalChain.callChain();}});var Accordion=new Class({Extends:Fx.Accordion,initialize:function(){this.parent.apply(this,arguments);
var a=Array.link(arguments,{container:Type.isElement});this.container=a.container;},addSection:function(c,b,e){c=document.id(c);b=document.id(b);var d=this.togglers.contains(c);
var a=this.togglers.length;if(a&&(!d||e)){e=e!=null?e:a-1;c.inject(this.togglers[e],"before");b.inject(c,"after");}else{if(this.container&&!d){c.inject(this.container);
b.inject(this.container);}}return this.parent.apply(this,arguments);}});Fx.Move=new Class({Extends:Fx.Morph,options:{relativeTo:document.body,position:"center",edge:false,offset:{x:0,y:0}},start:function(a){var b=this.element,c=b.getStyles("top","left");
if(c.top=="auto"||c.left=="auto"){b.setPosition(b.getPosition(b.getOffsetParent()));}return this.parent(b.position(Object.merge({},this.options,a,{returnPos:true})));
}});Element.Properties.move={set:function(a){this.get("move").cancel().setOptions(a);return this;},get:function(){var a=this.retrieve("move");if(!a){a=new Fx.Move(this,{link:"cancel"});
this.store("move",a);}return a;}};Element.implement({move:function(a){this.get("move").start(a);return this;}});(function(){Fx.Scroll=new Class({Extends:Fx,options:{offset:{x:0,y:0},wheelStops:true},initialize:function(c,b){this.element=this.subject=document.id(c);
this.parent(b);if(typeOf(this.element)!="element"){this.element=document.id(this.element.getDocument().body);}if(this.options.wheelStops){var d=this.element,e=this.cancel.pass(false,this);
this.addEvent("start",function(){d.addEvent("mousewheel",e);},true);this.addEvent("complete",function(){d.removeEvent("mousewheel",e);},true);}},set:function(){var b=Array.flatten(arguments);
if(Browser.firefox){b=[Math.round(b[0]),Math.round(b[1])];}this.element.scrollTo(b[0],b[1]);return this;},compute:function(d,c,b){return[0,1].map(function(e){return Fx.compute(d[e],c[e],b);
});},start:function(c,d){if(!this.check(c,d)){return this;}var b=this.element.getScroll();return this.parent([b.x,b.y],[c,d]);},calculateScroll:function(g,f){var d=this.element,b=d.getScrollSize(),h=d.getScroll(),j=d.getSize(),c=this.options.offset,i={x:g,y:f};
for(var e in i){if(!i[e]&&i[e]!==0){i[e]=h[e];}if(typeOf(i[e])!="number"){i[e]=b[e]-j[e];}i[e]+=c[e];}return[i.x,i.y];},toTop:function(){return this.start.apply(this,this.calculateScroll(false,0));
},toLeft:function(){return this.start.apply(this,this.calculateScroll(0,false));},toRight:function(){return this.start.apply(this,this.calculateScroll("right",false));
},toBottom:function(){return this.start.apply(this,this.calculateScroll(false,"bottom"));},toElement:function(d,e){e=e?Array.from(e):["x","y"];var c=a(this.element)?{x:0,y:0}:this.element.getScroll();
var b=Object.map(document.id(d).getPosition(this.element),function(g,f){return e.contains(f)?g+c[f]:false;});return this.start.apply(this,this.calculateScroll(b.x,b.y));
},toElementEdge:function(d,g,e){g=g?Array.from(g):["x","y"];d=document.id(d);var i={},f=d.getPosition(this.element),j=d.getSize(),h=this.element.getScroll(),b=this.element.getSize(),c={x:f.x+j.x,y:f.y+j.y};
["x","y"].each(function(k){if(g.contains(k)){if(c[k]>h[k]+b[k]){i[k]=c[k]-b[k];}if(f[k]<h[k]){i[k]=f[k];}}if(i[k]==null){i[k]=h[k];}if(e&&e[k]){i[k]=i[k]+e[k];
}},this);if(i.x!=h.x||i.y!=h.y){this.start(i.x,i.y);}return this;},toElementCenter:function(e,f,h){f=f?Array.from(f):["x","y"];e=document.id(e);var i={},c=e.getPosition(this.element),d=e.getSize(),b=this.element.getScroll(),g=this.element.getSize();
["x","y"].each(function(j){if(f.contains(j)){i[j]=c[j]-(g[j]-d[j])/2;}if(i[j]==null){i[j]=b[j];}if(h&&h[j]){i[j]=i[j]+h[j];}},this);if(i.x!=b.x||i.y!=b.y){this.start(i.x,i.y);
}return this;}});Fx.Scroll.implement({scrollToCenter:function(){return this.toElementCenter.apply(this,arguments);},scrollIntoView:function(){return this.toElementEdge.apply(this,arguments);
}});function a(b){return(/^(?:body|html)$/i).test(b.tagName);}})();Fx.Slide=new Class({Extends:Fx,options:{mode:"vertical",wrapper:false,hideOverflow:true,resetHeight:false},initialize:function(b,a){b=this.element=this.subject=document.id(b);
this.parent(a);a=this.options;var d=b.retrieve("wrapper"),c=b.getStyles("margin","position","overflow");if(a.hideOverflow){c=Object.append(c,{overflow:"hidden"});
}if(a.wrapper){d=document.id(a.wrapper).setStyles(c);}if(!d){d=new Element("div",{styles:c}).wraps(b);}b.store("wrapper",d).setStyle("margin",0);if(b.getStyle("overflow")=="visible"){b.setStyle("overflow","hidden");
}this.now=[];this.open=true;this.wrapper=d;this.addEvent("complete",function(){this.open=(d["offset"+this.layout.capitalize()]!=0);if(this.open&&this.options.resetHeight){d.setStyle("height","");
}},true);},vertical:function(){this.margin="margin-top";this.layout="height";this.offset=this.element.offsetHeight;},horizontal:function(){this.margin="margin-left";
this.layout="width";this.offset=this.element.offsetWidth;},set:function(a){this.element.setStyle(this.margin,a[0]);this.wrapper.setStyle(this.layout,a[1]);
return this;},compute:function(c,b,a){return[0,1].map(function(d){return Fx.compute(c[d],b[d],a);});},start:function(b,e){if(!this.check(b,e)){return this;
}this[e||this.options.mode]();var d=this.element.getStyle(this.margin).toInt(),c=this.wrapper.getStyle(this.layout).toInt(),a=[[d,c],[0,this.offset]],g=[[d,c],[-this.offset,0]],f;
switch(b){case"in":f=a;break;case"out":f=g;break;case"toggle":f=(c==0)?a:g;}return this.parent(f[0],f[1]);},slideIn:function(a){return this.start("in",a);
},slideOut:function(a){return this.start("out",a);},hide:function(a){this[a||this.options.mode]();this.open=false;return this.set([-this.offset,0]);},show:function(a){this[a||this.options.mode]();
this.open=true;return this.set([0,this.offset]);},toggle:function(a){return this.start("toggle",a);}});Element.Properties.slide={set:function(a){this.get("slide").cancel().setOptions(a);
return this;},get:function(){var a=this.retrieve("slide");if(!a){a=new Fx.Slide(this,{link:"cancel"});this.store("slide",a);}return a;}};Element.implement({slide:function(d,e){d=d||"toggle";
var b=this.get("slide"),a;switch(d){case"hide":b.hide(e);break;case"show":b.show(e);break;case"toggle":var c=this.retrieve("slide:flag",b.open);b[c?"slideOut":"slideIn"](e);
this.store("slide:flag",!c);a=true;break;default:b.start(d,e);}if(!a){this.eliminate("slide:flag");}return this;}});var SmoothScroll=Fx.SmoothScroll=new Class({Extends:Fx.Scroll,options:{axes:["x","y"]},initialize:function(c,d){d=d||document;
this.doc=d.getDocument();this.parent(this.doc,c);var e=d.getWindow(),a=e.location.href.match(/^[^#]*/)[0]+"#",b=$$(this.options.links||this.doc.links);
b.each(function(g){if(g.href.indexOf(a)!=0){return;}var f=g.href.substr(a.length);if(f){this.useLink(g,f);}},this);this.addEvent("complete",function(){e.location.hash=this.anchor;
this.element.scrollTo(this.to[0],this.to[1]);},true);},useLink:function(b,a){b.addEvent("click",function(d){var c=document.id(a)||this.doc.getElement("a[name="+a+"]");
if(!c){return;}d.preventDefault();this.toElement(c,this.options.axes).chain(function(){this.fireEvent("scrolledTo",[b,c]);}.bind(this));this.anchor=a;}.bind(this));
return this;}});Fx.Sort=new Class({Extends:Fx.Elements,options:{mode:"vertical"},initialize:function(b,a){this.parent(b,a);this.elements.each(function(c){if(c.getStyle("position")=="static"){c.setStyle("position","relative");
}});this.setDefaultOrder();},setDefaultOrder:function(){this.currentOrder=this.elements.map(function(b,a){return a;});},sort:function(){if(!this.check(arguments)){return this;
}var e=Array.flatten(arguments);var i=0,a=0,c={},h={},d=this.options.mode=="vertical";var f=this.elements.map(function(m,k){var l=m.getComputedSize({styles:["border","padding","margin"]});
var n;if(d){n={top:i,margin:l["margin-top"],height:l.totalHeight};i+=n.height-l["margin-top"];}else{n={left:a,margin:l["margin-left"],width:l.totalWidth};
a+=n.width;}var j=d?"top":"left";h[k]={};var o=m.getStyle(j).toInt();h[k][j]=o||0;return n;},this);this.set(h);e=e.map(function(j){return j.toInt();});
if(e.length!=this.elements.length){this.currentOrder.each(function(j){if(!e.contains(j)){e.push(j);}});if(e.length>this.elements.length){e.splice(this.elements.length-1,e.length-this.elements.length);
}}var b=0;i=a=0;e.each(function(k){var j={};if(d){j.top=i-f[k].top-b;i+=f[k].height;}else{j.left=a-f[k].left;a+=f[k].width;}b=b+f[k].margin;c[k]=j;},this);
var g={};Array.clone(e).sort().each(function(j){g[j]=c[j];});this.start(g);this.currentOrder=e;return this;},rearrangeDOM:function(a){a=a||this.currentOrder;
var b=this.elements[0].getParent();var c=[];this.elements.setStyle("opacity",0);a.each(function(d){c.push(this.elements[d].inject(b).setStyles({top:0,left:0}));
},this);this.elements.setStyle("opacity",1);this.elements=$$(c);this.setDefaultOrder();return this;},getDefaultOrder:function(){return this.elements.map(function(b,a){return a;
});},getCurrentOrder:function(){return this.currentOrder;},forward:function(){return this.sort(this.getDefaultOrder());},backward:function(){return this.sort(this.getDefaultOrder().reverse());
},reverse:function(){return this.sort(this.currentOrder.reverse());},sortByElements:function(a){return this.sort(a.map(function(b){return this.elements.indexOf(b);
},this));},swap:function(c,b){if(typeOf(c)=="element"){c=this.elements.indexOf(c);}if(typeOf(b)=="element"){b=this.elements.indexOf(b);}var a=Array.clone(this.currentOrder);
a[this.currentOrder.indexOf(c)]=b;a[this.currentOrder.indexOf(b)]=c;return this.sort(a);}});var Drag=new Class({Implements:[Events,Options],options:{snap:6,unit:"px",grid:false,style:true,limit:false,handle:false,invert:false,preventDefault:false,stopPropagation:false,modifiers:{x:"left",y:"top"}},initialize:function(){var b=Array.link(arguments,{options:Type.isObject,element:function(c){return c!=null;
}});this.element=document.id(b.element);this.document=this.element.getDocument();this.setOptions(b.options||{});var a=typeOf(this.options.handle);this.handles=((a=="array"||a=="collection")?$$(this.options.handle):document.id(this.options.handle))||this.element;
this.mouse={now:{},pos:{}};this.value={start:{},now:{}};this.selection=(Browser.ie)?"selectstart":"mousedown";if(Browser.ie&&!Drag.ondragstartFixed){document.ondragstart=Function.from(false);
Drag.ondragstartFixed=true;}this.bound={start:this.start.bind(this),check:this.check.bind(this),drag:this.drag.bind(this),stop:this.stop.bind(this),cancel:this.cancel.bind(this),eventStop:Function.from(false)};
this.attach();},attach:function(){this.handles.addEvent("mousedown",this.bound.start);return this;},detach:function(){this.handles.removeEvent("mousedown",this.bound.start);
return this;},start:function(a){var j=this.options;if(a.rightClick){return;}if(j.preventDefault){a.preventDefault();}if(j.stopPropagation){a.stopPropagation();
}this.mouse.start=a.page;this.fireEvent("beforeStart",this.element);var c=j.limit;this.limit={x:[],y:[]};var e,g;for(e in j.modifiers){if(!j.modifiers[e]){continue;
}var b=this.element.getStyle(j.modifiers[e]);if(b&&!b.match(/px$/)){if(!g){g=this.element.getCoordinates(this.element.getOffsetParent());}b=g[j.modifiers[e]];
}if(j.style){this.value.now[e]=(b||0).toInt();}else{this.value.now[e]=this.element[j.modifiers[e]];}if(j.invert){this.value.now[e]*=-1;}this.mouse.pos[e]=a.page[e]-this.value.now[e];
if(c&&c[e]){var d=2;while(d--){var f=c[e][d];if(f||f===0){this.limit[e][d]=(typeof f=="function")?f():f;}}}}if(typeOf(this.options.grid)=="number"){this.options.grid={x:this.options.grid,y:this.options.grid};
}var h={mousemove:this.bound.check,mouseup:this.bound.cancel};h[this.selection]=this.bound.eventStop;this.document.addEvents(h);},check:function(a){if(this.options.preventDefault){a.preventDefault();
}var b=Math.round(Math.sqrt(Math.pow(a.page.x-this.mouse.start.x,2)+Math.pow(a.page.y-this.mouse.start.y,2)));if(b>this.options.snap){this.cancel();this.document.addEvents({mousemove:this.bound.drag,mouseup:this.bound.stop});
this.fireEvent("start",[this.element,a]).fireEvent("snap",this.element);}},drag:function(b){var a=this.options;if(a.preventDefault){b.preventDefault();
}this.mouse.now=b.page;for(var c in a.modifiers){if(!a.modifiers[c]){continue;}this.value.now[c]=this.mouse.now[c]-this.mouse.pos[c];if(a.invert){this.value.now[c]*=-1;
}if(a.limit&&this.limit[c]){if((this.limit[c][1]||this.limit[c][1]===0)&&(this.value.now[c]>this.limit[c][1])){this.value.now[c]=this.limit[c][1];}else{if((this.limit[c][0]||this.limit[c][0]===0)&&(this.value.now[c]<this.limit[c][0])){this.value.now[c]=this.limit[c][0];
}}}if(a.grid[c]){this.value.now[c]-=((this.value.now[c]-(this.limit[c][0]||0))%a.grid[c]);}if(a.style){this.element.setStyle(a.modifiers[c],this.value.now[c]+a.unit);
}else{this.element[a.modifiers[c]]=this.value.now[c];}}this.fireEvent("drag",[this.element,b]);},cancel:function(a){this.document.removeEvents({mousemove:this.bound.check,mouseup:this.bound.cancel});
if(a){this.document.removeEvent(this.selection,this.bound.eventStop);this.fireEvent("cancel",this.element);}},stop:function(b){var a={mousemove:this.bound.drag,mouseup:this.bound.stop};
a[this.selection]=this.bound.eventStop;this.document.removeEvents(a);if(b){this.fireEvent("complete",[this.element,b]);}}});Element.implement({makeResizable:function(a){var b=new Drag(this,Object.merge({modifiers:{x:"width",y:"height"}},a));
this.store("resizer",b);return b.addEvent("drag",function(){this.fireEvent("resize",b);}.bind(this));}});Drag.Move=new Class({Extends:Drag,options:{droppables:[],container:false,precalculate:false,includeMargins:true,checkDroppables:true},initialize:function(b,a){this.parent(b,a);
b=this.element;this.droppables=$$(this.options.droppables);this.container=document.id(this.options.container);if(this.container&&typeOf(this.container)!="element"){this.container=document.id(this.container.getDocument().body);
}if(this.options.style){if(this.options.modifiers.x=="left"&&this.options.modifiers.y=="top"){var c=b.getOffsetParent(),d=b.getStyles("left","top");if(c&&(d.left=="auto"||d.top=="auto")){b.setPosition(b.getPosition(c));
}}if(b.getStyle("position")=="static"){b.setStyle("position","absolute");}}this.addEvent("start",this.checkDroppables,true);this.overed=null;},start:function(a){if(this.container){this.options.limit=this.calculateLimit();
}if(this.options.precalculate){this.positions=this.droppables.map(function(b){return b.getCoordinates();});}this.parent(a);},calculateLimit:function(){var j=this.element,e=this.container,d=document.id(j.getOffsetParent())||document.body,h=e.getCoordinates(d),c={},b={},k={},g={},m={};
["top","right","bottom","left"].each(function(q){c[q]=j.getStyle("margin-"+q).toInt();b[q]=j.getStyle("border-"+q).toInt();k[q]=e.getStyle("margin-"+q).toInt();
g[q]=e.getStyle("border-"+q).toInt();m[q]=d.getStyle("padding-"+q).toInt();},this);var f=j.offsetWidth+c.left+c.right,p=j.offsetHeight+c.top+c.bottom,i=0,l=0,o=h.right-g.right-f,a=h.bottom-g.bottom-p;
if(this.options.includeMargins){i+=c.left;l+=c.top;}else{o+=c.right;a+=c.bottom;}if(j.getStyle("position")=="relative"){var n=j.getCoordinates(d);n.left-=j.getStyle("left").toInt();
n.top-=j.getStyle("top").toInt();i-=n.left;l-=n.top;if(e.getStyle("position")!="relative"){i+=g.left;l+=g.top;}o+=c.left-n.left;a+=c.top-n.top;if(e!=d){i+=k.left+m.left;
l+=((Browser.ie6||Browser.ie7)?0:k.top)+m.top;}}else{i-=c.left;l-=c.top;if(e!=d){i+=h.left+g.left;l+=h.top+g.top;}}return{x:[i,o],y:[l,a]};},getDroppableCoordinates:function(c){var b=c.getCoordinates();
if(c.getStyle("position")=="fixed"){var a=window.getScroll();b.left+=a.x;b.right+=a.x;b.top+=a.y;b.bottom+=a.y;}return b;},checkDroppables:function(){var a=this.droppables.filter(function(d,c){d=this.positions?this.positions[c]:this.getDroppableCoordinates(d);
var b=this.mouse.now;return(b.x>d.left&&b.x<d.right&&b.y<d.bottom&&b.y>d.top);},this).getLast();if(this.overed!=a){if(this.overed){this.fireEvent("leave",[this.element,this.overed]);
}if(a){this.fireEvent("enter",[this.element,a]);}this.overed=a;}},drag:function(a){this.parent(a);if(this.options.checkDroppables&&this.droppables.length){this.checkDroppables();
}},stop:function(a){this.checkDroppables();this.fireEvent("drop",[this.element,this.overed,a]);this.overed=null;return this.parent(a);}});Element.implement({makeDraggable:function(a){var b=new Drag.Move(this,a);
this.store("dragger",b);return b;}});var Slider=new Class({Implements:[Events,Options],Binds:["clickedElement","draggedKnob","scrolledElement"],options:{onTick:function(a){this.setKnobPosition(a);
},initialStep:0,snap:false,offset:0,range:false,wheel:false,steps:100,mode:"horizontal"},initialize:function(f,a,e){this.setOptions(e);e=this.options;this.element=document.id(f);
a=this.knob=document.id(a);this.previousChange=this.previousEnd=this.step=-1;var b={},d={x:false,y:false};switch(e.mode){case"vertical":this.axis="y";this.property="top";
this.offset="offsetHeight";break;case"horizontal":this.axis="x";this.property="left";this.offset="offsetWidth";}this.setSliderDimensions();this.setRange(e.range);
if(a.getStyle("position")=="static"){a.setStyle("position","relative");}a.setStyle(this.property,-e.offset);d[this.axis]=this.property;b[this.axis]=[-e.offset,this.full-e.offset];
var c={snap:0,limit:b,modifiers:d,onDrag:this.draggedKnob,onStart:this.draggedKnob,onBeforeStart:(function(){this.isDragging=true;}).bind(this),onCancel:function(){this.isDragging=false;
}.bind(this),onComplete:function(){this.isDragging=false;this.draggedKnob();this.end();}.bind(this)};if(e.snap){this.setSnap(c);}this.drag=new Drag(a,c);
this.attach();if(e.initialStep!=null){this.set(e.initialStep);}},attach:function(){this.element.addEvent("mousedown",this.clickedElement);if(this.options.wheel){this.element.addEvent("mousewheel",this.scrolledElement);
}this.drag.attach();return this;},detach:function(){this.element.removeEvent("mousedown",this.clickedElement).removeEvent("mousewheel",this.scrolledElement);
this.drag.detach();return this;},autosize:function(){this.setSliderDimensions().setKnobPosition(this.toPosition(this.step));this.drag.options.limit[this.axis]=[-this.options.offset,this.full-this.options.offset];
if(this.options.snap){this.setSnap();}return this;},setSnap:function(a){if(!a){a=this.drag.options;}a.grid=Math.ceil(this.stepWidth);a.limit[this.axis][1]=this.full;
return this;},setKnobPosition:function(a){if(this.options.snap){a=this.toPosition(this.step);}this.knob.setStyle(this.property,a);return this;},setSliderDimensions:function(){this.full=this.element.measure(function(){this.half=this.knob[this.offset]/2;
return this.element[this.offset]-this.knob[this.offset]+(this.options.offset*2);}.bind(this));return this;},set:function(a){if(!((this.range>0)^(a<this.min))){a=this.min;
}if(!((this.range>0)^(a>this.max))){a=this.max;}this.step=Math.round(a);return this.checkStep().fireEvent("tick",this.toPosition(this.step)).end();},setRange:function(a,b){this.min=Array.pick([a[0],0]);
this.max=Array.pick([a[1],this.options.steps]);this.range=this.max-this.min;this.steps=this.options.steps||this.full;this.stepSize=Math.abs(this.range)/this.steps;
this.stepWidth=this.stepSize*this.full/Math.abs(this.range);if(a){this.set(Array.pick([b,this.step]).floor(this.min).max(this.max));}return this;},clickedElement:function(c){if(this.isDragging||c.target==this.knob){return;
}var b=this.range<0?-1:1,a=c.page[this.axis]-this.element.getPosition()[this.axis]-this.half;a=a.limit(-this.options.offset,this.full-this.options.offset);
this.step=Math.round(this.min+b*this.toStep(a));this.checkStep().fireEvent("tick",a).end();},scrolledElement:function(a){var b=(this.options.mode=="horizontal")?(a.wheel<0):(a.wheel>0);
this.set(this.step+(b?-1:1)*this.stepSize);a.stop();},draggedKnob:function(){var b=this.range<0?-1:1,a=this.drag.value.now[this.axis];a=a.limit(-this.options.offset,this.full-this.options.offset);
this.step=Math.round(this.min+b*this.toStep(a));this.checkStep();},checkStep:function(){var a=this.step;if(this.previousChange!=a){this.previousChange=a;
this.fireEvent("change",a);}return this;},end:function(){var a=this.step;if(this.previousEnd!==a){this.previousEnd=a;this.fireEvent("complete",a+"");}return this;
},toStep:function(a){var b=(a+this.options.offset)*this.stepSize/this.full*this.steps;return this.options.steps?Math.round(b-=b%this.stepSize):b;},toPosition:function(a){return(this.full*Math.abs(this.min-a))/(this.steps*this.stepSize)-this.options.offset;
}});var Sortables=new Class({Implements:[Events,Options],options:{opacity:1,clone:false,revert:false,handle:false,dragOptions:{},snap:4,constrain:false,preventDefault:false},initialize:function(a,b){this.setOptions(b);
this.elements=[];this.lists=[];this.idle=true;this.addLists($$(document.id(a)||a));if(!this.options.clone){this.options.revert=false;}if(this.options.revert){this.effect=new Fx.Morph(null,Object.merge({duration:250,link:"cancel"},this.options.revert));
}},attach:function(){this.addLists(this.lists);return this;},detach:function(){this.lists=this.removeLists(this.lists);return this;},addItems:function(){Array.flatten(arguments).each(function(a){this.elements.push(a);
var b=a.retrieve("sortables:start",function(c){this.start.call(this,c,a);}.bind(this));(this.options.handle?a.getElement(this.options.handle)||a:a).addEvent("mousedown",b);
},this);return this;},addLists:function(){Array.flatten(arguments).each(function(a){this.lists.include(a);this.addItems(a.getChildren());},this);return this;
},removeItems:function(){return $$(Array.flatten(arguments).map(function(a){this.elements.erase(a);var b=a.retrieve("sortables:start");(this.options.handle?a.getElement(this.options.handle)||a:a).removeEvent("mousedown",b);
return a;},this));},removeLists:function(){return $$(Array.flatten(arguments).map(function(a){this.lists.erase(a);this.removeItems(a.getChildren());return a;
},this));},getClone:function(b,a){if(!this.options.clone){return new Element(a.tagName).inject(document.body);}if(typeOf(this.options.clone)=="function"){return this.options.clone.call(this,b,a,this.list);
}var c=a.clone(true).setStyles({margin:0,position:"absolute",visibility:"hidden",width:a.getStyle("width")}).addEvent("mousedown",function(d){a.fireEvent("mousedown",d);
});if(c.get("html").test("radio")){c.getElements("input[type=radio]").each(function(d,e){d.set("name","clone_"+e);if(d.get("checked")){a.getElements("input[type=radio]")[e].set("checked",true);
}});}return c.inject(this.list).setPosition(a.getPosition(a.getOffsetParent()));},getDroppables:function(){var a=this.list.getChildren().erase(this.clone).erase(this.element);
if(!this.options.constrain){a.append(this.lists).erase(this.list);}return a;},insert:function(c,b){var a="inside";if(this.lists.contains(b)){this.list=b;
this.drag.droppables=this.getDroppables();}else{a=this.element.getAllPrevious().contains(b)?"before":"after";}this.element.inject(b,a);this.fireEvent("sort",[this.element,this.clone]);
},start:function(b,a){if(!this.idle||b.rightClick||["button","input","a"].contains(b.target.get("tag"))){return;}this.idle=false;this.element=a;this.opacity=a.get("opacity");
this.list=a.getParent();this.clone=this.getClone(b,a);this.drag=new Drag.Move(this.clone,Object.merge({preventDefault:this.options.preventDefault,snap:this.options.snap,container:this.options.constrain&&this.element.getParent(),droppables:this.getDroppables()},this.options.dragOptions)).addEvents({onSnap:function(){b.stop();
this.clone.setStyle("visibility","visible");this.element.set("opacity",this.options.opacity||0);this.fireEvent("start",[this.element,this.clone]);}.bind(this),onEnter:this.insert.bind(this),onCancel:this.end.bind(this),onComplete:this.end.bind(this)});
this.clone.inject(this.element,"before");this.drag.start(b);},end:function(){this.drag.detach();this.element.set("opacity",this.opacity);if(this.effect){var b=this.element.getStyles("width","height"),d=this.clone,c=d.computePosition(this.element.getPosition(this.clone.getOffsetParent()));
var a=function(){this.removeEvent("cancel",a);d.destroy();};this.effect.element=d;this.effect.start({top:c.top,left:c.left,width:b.width,height:b.height,opacity:0.25}).addEvent("cancel",a).chain(a);
}else{this.clone.destroy();}this.reset();},reset:function(){this.idle=true;this.fireEvent("complete",this.element);},serialize:function(){var c=Array.link(arguments,{modifier:Type.isFunction,index:function(d){return d!=null;
}});var b=this.lists.map(function(d){return d.getChildren().map(c.modifier||function(e){return e.get("id");},this);},this);var a=c.index;if(this.lists.length==1){a=0;
}return(a||a===0)&&a>=0&&a<this.lists.length?b[a]:b;}});Request.JSONP=new Class({Implements:[Chain,Events,Options],options:{onRequest:function(a){if(this.options.log&&window.console&&console.log){console.log("JSONP retrieving script with url:"+a);
}},onError:function(a){if(this.options.log&&window.console&&console.warn){console.warn("JSONP "+a+" will fail in Internet Explorer, which enforces a 2083 bytes length limit on URIs");
}},url:"",callbackKey:"callback",injectScript:document.head,data:"",link:"ignore",timeout:0,log:false},initialize:function(a){this.setOptions(a);},send:function(c){if(!Request.prototype.check.call(this,c)){return this;
}this.running=true;var d=typeOf(c);if(d=="string"||d=="element"){c={data:c};}c=Object.merge(this.options,c||{});var e=c.data;switch(typeOf(e)){case"element":e=document.id(e).toQueryString();
break;case"object":case"hash":e=Object.toQueryString(e);}var b=this.index=Request.JSONP.counter++;var f=c.url+(c.url.test("\\?")?"&":"?")+(c.callbackKey)+"=Request.JSONP.request_map.request_"+b+(e?"&"+e:"");
if(f.length>2083){this.fireEvent("error",f);}Request.JSONP.request_map["request_"+b]=function(){this.success(arguments,b);}.bind(this);var a=this.getScript(f).inject(c.injectScript);
this.fireEvent("request",[f,a]);if(c.timeout){this.timeout.delay(c.timeout,this);}return this;},getScript:function(a){if(!this.script){this.script=new Element("script",{type:"text/javascript",async:true,src:a});
}return this.script;},success:function(b,a){if(!this.running){return;}this.clear().fireEvent("complete",b).fireEvent("success",b).callChain();},cancel:function(){if(this.running){this.clear().fireEvent("cancel");
}return this;},isRunning:function(){return !!this.running;},clear:function(){this.running=false;if(this.script){this.script.destroy();this.script=null;
}return this;},timeout:function(){if(this.running){this.running=false;this.fireEvent("timeout",[this.script.get("src"),this.script]).fireEvent("failure").cancel();
}return this;}});Request.JSONP.counter=0;Request.JSONP.request_map={};Request.Queue=new Class({Implements:[Options,Events],Binds:["attach","request","complete","cancel","success","failure","exception"],options:{stopOnFailure:true,autoAdvance:true,concurrent:1,requests:{}},initialize:function(a){var b;
if(a){b=a.requests;delete a.requests;}this.setOptions(a);this.requests={};this.queue=[];this.reqBinders={};if(b){this.addRequests(b);}},addRequest:function(a,b){this.requests[a]=b;
this.attach(a,b);return this;},addRequests:function(a){Object.each(a,function(c,b){this.addRequest(b,c);},this);return this;},getName:function(a){return Object.keyOf(this.requests,a);
},attach:function(a,b){if(b._groupSend){return this;}["request","complete","cancel","success","failure","exception"].each(function(c){if(!this.reqBinders[a]){this.reqBinders[a]={};
}this.reqBinders[a][c]=function(){this["on"+c.capitalize()].apply(this,[a,b].append(arguments));}.bind(this);b.addEvent(c,this.reqBinders[a][c]);},this);
b._groupSend=b.send;b.send=function(c){this.send(a,c);return b;}.bind(this);return this;},removeRequest:function(b){var a=typeOf(b)=="object"?this.getName(b):b;
if(!a&&typeOf(a)!="string"){return this;}b=this.requests[a];if(!b){return this;}["request","complete","cancel","success","failure","exception"].each(function(c){b.removeEvent(c,this.reqBinders[a][c]);
},this);b.send=b._groupSend;delete b._groupSend;return this;},getRunning:function(){return Object.filter(this.requests,function(a){return a.running;});
},isRunning:function(){return !!(Object.keys(this.getRunning()).length);},send:function(b,a){var c=function(){this.requests[b]._groupSend(a);this.queue.erase(c);
}.bind(this);c.name=b;if(Object.keys(this.getRunning()).length>=this.options.concurrent||(this.error&&this.options.stopOnFailure)){this.queue.push(c);}else{c();
}return this;},hasNext:function(a){return(!a)?!!this.queue.length:!!this.queue.filter(function(b){return b.name==a;}).length;},resume:function(){this.error=false;
(this.options.concurrent-Object.keys(this.getRunning()).length).times(this.runNext,this);return this;},runNext:function(a){if(!this.queue.length){return this;
}if(!a){this.queue[0]();}else{var b;this.queue.each(function(c){if(!b&&c.name==a){b=true;c();}});}return this;},runAll:function(){this.queue.each(function(a){a();
});return this;},clear:function(a){if(!a){this.queue.empty();}else{this.queue=this.queue.map(function(b){if(b.name!=a){return b;}else{return false;}}).filter(function(b){return b;
});}return this;},cancel:function(a){this.requests[a].cancel();return this;},onRequest:function(){this.fireEvent("request",arguments);},onComplete:function(){this.fireEvent("complete",arguments);
if(!this.queue.length){this.fireEvent("end");}},onCancel:function(){if(this.options.autoAdvance&&!this.error){this.runNext();}this.fireEvent("cancel",arguments);
},onSuccess:function(){if(this.options.autoAdvance&&!this.error){this.runNext();}this.fireEvent("success",arguments);},onFailure:function(){this.error=true;
if(!this.options.stopOnFailure&&this.options.autoAdvance){this.runNext();}this.fireEvent("failure",arguments);},onException:function(){this.error=true;
if(!this.options.stopOnFailure&&this.options.autoAdvance){this.runNext();}this.fireEvent("exception",arguments);}});Request.implement({options:{initialDelay:5000,delay:5000,limit:60000},startTimer:function(b){var a=function(){if(!this.running){this.send({data:b});
}};this.lastDelay=this.options.initialDelay;this.timer=a.delay(this.lastDelay,this);this.completeCheck=function(c){clearTimeout(this.timer);this.lastDelay=(c)?this.options.delay:(this.lastDelay+this.options.delay).min(this.options.limit);
this.timer=a.delay(this.lastDelay,this);};return this.addEvent("complete",this.completeCheck);},stopTimer:function(){clearTimeout(this.timer);return this.removeEvent("complete",this.completeCheck);
}});var Asset={javascript:function(f,c){if(!c){c={};}var a=new Element("script",{src:f,type:"text/javascript"}),g=c.document||document,b=0,d=c.onload||c.onLoad;
var e=d?function(){if(++b==1){d.call(this);}}:function(){};delete c.onload;delete c.onLoad;delete c.document;return a.addEvents({load:e,readystatechange:function(){if(["loaded","complete"].contains(this.readyState)){e.call(this);
}}}).set(c).inject(g.head);},css:function(d,a){if(!a){a={};}var b=new Element("link",{rel:"stylesheet",media:"screen",type:"text/css",href:d});var c=a.onload||a.onLoad,e=a.document||document;
delete a.onload;delete a.onLoad;delete a.document;if(c){b.addEvent("load",c);}return b.set(a).inject(e.head);},image:function(c,b){if(!b){b={};}var d=new Image(),a=document.id(d)||new Element("img");
["load","abort","error"].each(function(e){var g="on"+e,f="on"+e.capitalize(),h=b[g]||b[f]||function(){};delete b[f];delete b[g];d[g]=function(){if(!d){return;
}if(!a.parentNode){a.width=d.width;a.height=d.height;}d=d.onload=d.onabort=d.onerror=null;h.delay(1,a,a);a.fireEvent(e,a,1);};});d.src=a.src=c;if(d&&d.complete){d.onload.delay(1);
}return a.set(b);},images:function(c,b){c=Array.from(c);var d=function(){},a=0;b=Object.merge({onComplete:d,onProgress:d,onError:d,properties:{}},b);return new Elements(c.map(function(f,e){return Asset.image(f,Object.append(b.properties,{onload:function(){a++;
b.onProgress.call(this,a,e,f);if(a==c.length){b.onComplete();}},onerror:function(){a++;b.onError.call(this,a,e,f);if(a==c.length){b.onComplete();}}}));
}));}};(function(){var a=this.Color=new Type("Color",function(c,d){if(arguments.length>=3){d="rgb";c=Array.slice(arguments,0,3);}else{if(typeof c=="string"){if(c.match(/rgb/)){c=c.rgbToHex().hexToRgb(true);
}else{if(c.match(/hsb/)){c=c.hsbToRgb();}else{c=c.hexToRgb(true);}}}}d=d||"rgb";switch(d){case"hsb":var b=c;c=c.hsbToRgb();c.hsb=b;break;case"hex":c=c.hexToRgb(true);
break;}c.rgb=c.slice(0,3);c.hsb=c.hsb||c.rgbToHsb();c.hex=c.rgbToHex();return Object.append(c,this);});a.implement({mix:function(){var b=Array.slice(arguments);
var d=(typeOf(b.getLast())=="number")?b.pop():50;var c=this.slice();b.each(function(e){e=new a(e);for(var f=0;f<3;f++){c[f]=Math.round((c[f]/100*(100-d))+(e[f]/100*d));
}});return new a(c,"rgb");},invert:function(){return new a(this.map(function(b){return 255-b;}));},setHue:function(b){return new a([b,this.hsb[1],this.hsb[2]],"hsb");
},setSaturation:function(b){return new a([this.hsb[0],b,this.hsb[2]],"hsb");},setBrightness:function(b){return new a([this.hsb[0],this.hsb[1],b],"hsb");
}});this.$RGB=function(e,d,c){return new a([e,d,c],"rgb");};this.$HSB=function(e,d,c){return new a([e,d,c],"hsb");};this.$HEX=function(b){return new a(b,"hex");
};Array.implement({rgbToHsb:function(){var c=this[0],d=this[1],k=this[2],h=0;var j=Math.max(c,d,k),f=Math.min(c,d,k);var l=j-f;var i=j/255,g=(j!=0)?l/j:0;
if(g!=0){var e=(j-c)/l;var b=(j-d)/l;var m=(j-k)/l;if(c==j){h=m-b;}else{if(d==j){h=2+e-m;}else{h=4+b-e;}}h/=6;if(h<0){h++;}}return[Math.round(h*360),Math.round(g*100),Math.round(i*100)];
},hsbToRgb:function(){var d=Math.round(this[2]/100*255);if(this[1]==0){return[d,d,d];}else{var b=this[0]%360;var g=b%60;var h=Math.round((this[2]*(100-this[1]))/10000*255);
var e=Math.round((this[2]*(6000-this[1]*g))/600000*255);var c=Math.round((this[2]*(6000-this[1]*(60-g)))/600000*255);switch(Math.floor(b/60)){case 0:return[d,c,h];
case 1:return[e,d,h];case 2:return[h,d,c];case 3:return[h,e,d];case 4:return[c,h,d];case 5:return[d,h,e];}}return false;}});String.implement({rgbToHsb:function(){var b=this.match(/\d{1,3}/g);
return(b)?b.rgbToHsb():null;},hsbToRgb:function(){var b=this.match(/\d{1,3}/g);return(b)?b.hsbToRgb():null;}});})();(function(){this.Group=new Class({initialize:function(){this.instances=Array.flatten(arguments);
this.events={};this.checker={};},addEvent:function(b,a){this.checker[b]=this.checker[b]||{};this.events[b]=this.events[b]||[];if(this.events[b].contains(a)){return false;
}else{this.events[b].push(a);}this.instances.each(function(c,d){c.addEvent(b,this.check.pass([b,c,d],this));},this);return this;},check:function(c,a,b){this.checker[c][b]=true;
var d=this.instances.every(function(f,e){return this.checker[c][e]||false;},this);if(!d){return;}this.checker[c]={};this.events[c].each(function(e){e.call(this,this.instances,a);
},this);}});})();Hash.Cookie=new Class({Extends:Cookie,options:{autoSave:true},initialize:function(b,a){this.parent(b,a);this.load();},save:function(){var a=JSON.encode(this.hash);
if(!a||a.length>4096){return false;}if(a=="{}"){this.dispose();}else{this.write(a);}return true;},load:function(){this.hash=new Hash(JSON.decode(this.read(),true));
return this;}});Hash.each(Hash.prototype,function(b,a){if(typeof b=="function"){Hash.Cookie.implement(a,function(){var c=b.apply(this.hash,arguments);if(this.options.autoSave){this.save();
}return c;});}});(function(){var a=this.Table=function(){this.length=0;var c=[],b=[];this.set=function(e,g){var d=c.indexOf(e);if(d==-1){var f=c.length;
c[f]=e;b[f]=g;this.length++;}else{b[d]=g;}return this;};this.get=function(e){var d=c.indexOf(e);return(d==-1)?null:b[d];};this.erase=function(e){var d=c.indexOf(e);
if(d!=-1){this.length--;c.splice(d,1);return b.splice(d,1)[0];}return null;};this.each=this.forEach=function(f,g){for(var e=0,d=this.length;e<d;e++){f.call(g,c[e],b[e],this);
}};};if(this.Type){new Type("Table",a);}})();var HtmlTable=new Class({Implements:[Options,Events,Class.Occlude],options:{properties:{cellpadding:0,cellspacing:0,border:0},rows:[],headers:[],footers:[]},property:"HtmlTable",initialize:function(){var a=Array.link(arguments,{options:Type.isObject,table:Type.isElement,id:Type.isString});
this.setOptions(a.options);if(!a.table&&a.id){a.table=document.id(a.id);}this.element=a.table||new Element("table",this.options.properties);if(this.occlude()){return this.occluded;
}this.build();},build:function(){this.element.store("HtmlTable",this);this.body=document.id(this.element.tBodies[0])||new Element("tbody").inject(this.element);
$$(this.body.rows);if(this.options.headers.length){this.setHeaders(this.options.headers);}else{this.thead=document.id(this.element.tHead);}if(this.thead){this.head=this.getHead();
}if(this.options.footers.length){this.setFooters(this.options.footers);}this.tfoot=document.id(this.element.tFoot);if(this.tfoot){this.foot=document.id(this.tfoot.rows[0]);
}this.options.rows.each(function(a){this.push(a);},this);},toElement:function(){return this.element;},empty:function(){this.body.empty();return this;},set:function(e,a){var d=(e=="headers")?"tHead":"tFoot",b=d.toLowerCase();
this[b]=(document.id(this.element[d])||new Element(b).inject(this.element,"top")).empty();var c=this.push(a,{},this[b],e=="headers"?"th":"td");if(e=="headers"){this.head=this.getHead();
}else{this.foot=this.getHead();}return c;},getHead:function(){var a=this.thead.rows;return a.length>1?$$(a):a.length?document.id(a[0]):false;},setHeaders:function(a){this.set("headers",a);
return this;},setFooters:function(a){this.set("footers",a);return this;},push:function(f,c,e,a,b){if(typeOf(f)=="element"&&f.get("tag")=="tr"){f.inject(e||this.body,b);
return{tr:f,tds:f.getChildren("td")};}var d=f.map(function(i){var j=new Element(a||"td",i?i.properties:{}),h=(i?i.content:"")||i,g=typeOf(h);if(["element","array","collection","elements"].contains(g)){j.adopt(h);
}else{j.set("html",h);}return j;});return{tr:new Element("tr",c).inject(e||this.body,b).adopt(d),tds:d};}});["adopt","inject","wraps","grab","replaces","dispose"].each(function(a){HtmlTable.implement(a,function(){this.element[a].apply(this.element,arguments);
return this;});});HtmlTable=Class.refactor(HtmlTable,{options:{classZebra:"table-tr-odd",zebra:true},initialize:function(){this.previous.apply(this,arguments);
if(this.occluded){return this.occluded;}if(this.options.zebra){this.updateZebras();}},updateZebras:function(){Array.each(this.body.rows,this.zebra,this);
},setRowStyle:function(b,a){if(this.previous){this.previous(b,a);}this.zebra(b,a);},zebra:function(b,a){return b[((a%2)?"remove":"add")+"Class"](this.options.classZebra);
},push:function(){var a=this.previous.apply(this,arguments);if(this.options.zebra){this.updateZebras();}return a;}});HtmlTable=Class.refactor(HtmlTable,{options:{sortIndex:0,sortReverse:false,parsers:[],defaultParser:"string",classSortable:"table-sortable",classHeadSort:"table-th-sort",classHeadSortRev:"table-th-sort-rev",classNoSort:"table-th-nosort",classGroupHead:"table-tr-group-head",classGroup:"table-tr-group",classCellSort:"table-td-sort",classSortSpan:"table-th-sort-span",sortable:false,thSelector:"th"},initialize:function(){this.previous.apply(this,arguments);
if(this.occluded){return this.occluded;}this.sorted={index:null,dir:1};this.bound={headClick:this.headClick.bind(this)};this.sortSpans=new Elements();if(this.options.sortable){this.enableSort();
if(this.options.sortIndex!=null){this.sort(this.options.sortIndex,this.options.sortReverse);}}},attachSorts:function(a){this.detachSorts();if(a!==false){this.element.addEvent("click:relay("+this.options.thSelector+")",this.bound.headClick);
}},detachSorts:function(){this.element.removeEvents("click:relay("+this.options.thSelector+")");},setHeaders:function(){this.previous.apply(this,arguments);
if(this.sortEnabled){this.setParsers();}},setParsers:function(){this.parsers=this.detectParsers();},detectParsers:function(){return this.head&&this.head.getElements(this.options.thSelector).flatten().map(this.detectParser,this);
},detectParser:function(a,b){if(a.hasClass(this.options.classNoSort)||a.retrieve("htmltable-parser")){return a.retrieve("htmltable-parser");}var c=new Element("div");
c.adopt(a.childNodes).inject(a);var f=new Element("span",{"class":this.options.classSortSpan}).inject(c,"top");this.sortSpans.push(f);var g=this.options.parsers[b],e=this.body.rows,d;
switch(typeOf(g)){case"function":g={convert:g};d=true;break;case"string":g=g;d=true;break;}if(!d){HtmlTable.ParserPriority.some(function(k){var o=HtmlTable.Parsers[k],m=o.match;
if(!m){return false;}for(var n=0,l=e.length;n<l;n++){var h=document.id(e[n].cells[b]),p=h?h.get("html").clean():"";if(p&&m.test(p)){g=o;return true;}}});
}if(!g){g=this.options.defaultParser;}a.store("htmltable-parser",g);return g;},headClick:function(b,a){if(!this.head||a.hasClass(this.options.classNoSort)){return;
}return this.sort(Array.indexOf(this.head.getElements(this.options.thSelector).flatten(),a)%this.body.rows[0].cells.length);},serialize:function(){var a=this.previous.apply(this,arguments)||{};
if(this.options.sortable){a.sortIndex=this.sorted.index;a.sortReverse=this.sorted.reverse;}return a;},restore:function(a){if(this.options.sortable&&a.sortIndex){this.sort(a.sortIndex,a.sortReverse);
}this.previous.apply(this,arguments);},setSortedState:function(b,a){if(a!=null){this.sorted.reverse=a;}else{if(this.sorted.index==b){this.sorted.reverse=!this.sorted.reverse;
}else{this.sorted.reverse=this.sorted.index==null;}}if(b!=null){this.sorted.index=b;}},setHeadSort:function(a){var b=$$(!this.head.length?this.head.cells[this.sorted.index]:this.head.map(function(c){return c.getElements(this.options.thSelector)[this.sorted.index];
},this).clean());if(!b.length){return;}if(a){b.addClass(this.options.classHeadSort);if(this.sorted.reverse){b.addClass(this.options.classHeadSortRev);}else{b.removeClass(this.options.classHeadSortRev);
}}else{b.removeClass(this.options.classHeadSort).removeClass(this.options.classHeadSortRev);}},setRowSort:function(b,a){var e=b.length,d=this.body,g,f;
while(e){var h=b[--e],c=h.position,i=d.rows[c];if(i.disabled){continue;}if(!a){g=this.setGroupSort(g,i,h);this.setRowStyle(i,e);}d.appendChild(i);for(f=0;
f<e;f++){if(b[f].position>c){b[f].position--;}}}},setRowStyle:function(b,a){this.previous(b,a);b.cells[this.sorted.index].addClass(this.options.classCellSort);
},setGroupSort:function(b,c,a){if(b==a.value){c.removeClass(this.options.classGroupHead).addClass(this.options.classGroup);}else{c.removeClass(this.options.classGroup).addClass(this.options.classGroupHead);
}return a.value;},getParser:function(){var a=this.parsers[this.sorted.index];return typeOf(a)=="string"?HtmlTable.Parsers[a]:a;},sort:function(c,b,e){if(!this.head){return;
}if(!e){this.clearSort();this.setSortedState(c,b);this.setHeadSort(true);}var f=this.getParser();if(!f){return;}var a;if(!Browser.ie){a=this.body.getParent();
this.body.dispose();}var d=this.parseData(f).sort(function(h,g){if(h.value===g.value){return 0;}return h.value>g.value?1:-1;});if(this.sorted.reverse==(f==HtmlTable.Parsers["input-checked"])){d.reverse(true);
}this.setRowSort(d,e);if(a){a.grab(this.body);}this.fireEvent("stateChanged");return this.fireEvent("sort",[this.body,this.sorted.index]);},parseData:function(a){return Array.map(this.body.rows,function(d,b){var c=a.convert.call(document.id(d.cells[this.sorted.index]));
return{position:b,value:c};},this);},clearSort:function(){this.setHeadSort(false);this.body.getElements("td").removeClass(this.options.classCellSort);},reSort:function(){if(this.sortEnabled){this.sort.call(this,this.sorted.index,this.sorted.reverse);
}return this;},enableSort:function(){this.element.addClass(this.options.classSortable);this.attachSorts(true);this.setParsers();this.sortEnabled=true;return this;
},disableSort:function(){this.element.removeClass(this.options.classSortable);this.attachSorts(false);this.sortSpans.each(function(a){a.destroy();});this.sortSpans.empty();
this.sortEnabled=false;return this;}});HtmlTable.ParserPriority=["date","input-checked","input-value","float","number"];HtmlTable.Parsers={date:{match:/^\d{2}[-\/ ]\d{2}[-\/ ]\d{2,4}$/,convert:function(){var a=Date.parse(this.get("text").stripTags());
return(typeOf(a)=="date")?a.format("db"):"";},type:"date"},"input-checked":{match:/ type="(radio|checkbox)" /,convert:function(){return this.getElement("input").checked;
}},"input-value":{match:/<input/,convert:function(){return this.getElement("input").value;}},number:{match:/^\d+[^\d.,]*$/,convert:function(){return this.get("text").stripTags().toInt();
},number:true},numberLax:{match:/^[^\d]+\d+$/,convert:function(){return this.get("text").replace(/[^-?^0-9]/,"").stripTags().toInt();},number:true},"float":{match:/^[\d]+\.[\d]+/,convert:function(){return this.get("text").replace(/[^-?^\d.]/,"").stripTags().toFloat();
},number:true},floatLax:{match:/^[^\d]+[\d]+\.[\d]+$/,convert:function(){return this.get("text").replace(/[^-?^\d.]/,"").stripTags();},number:true},string:{match:null,convert:function(){return this.get("text").stripTags().toLowerCase();
}},title:{match:null,convert:function(){return this.title;}}};HtmlTable.Parsers=new Hash(HtmlTable.Parsers);HtmlTable.defineParsers=function(a){HtmlTable.Parsers=Object.append(HtmlTable.Parsers,a);
for(var b in a){HtmlTable.ParserPriority.unshift(b);}};(function(){var a=this.Keyboard=new Class({Extends:Events,Implements:[Options],options:{defaultEventType:"keydown",active:false,manager:null,events:{},nonParsedEvents:["activate","deactivate","onactivate","ondeactivate","changed","onchanged"]},initialize:function(f){if(f&&f.manager){this._manager=f.manager;
delete f.manager;}this.setOptions(f);this._setup();},addEvent:function(h,g,f){return this.parent(a.parse(h,this.options.defaultEventType,this.options.nonParsedEvents),g,f);
},removeEvent:function(g,f){return this.parent(a.parse(g,this.options.defaultEventType,this.options.nonParsedEvents),f);},toggleActive:function(){return this[this.isActive()?"deactivate":"activate"]();
},activate:function(f){if(f){if(f.isActive()){return this;}if(this._activeKB&&f!=this._activeKB){this.previous=this._activeKB;this.previous.fireEvent("deactivate");
}this._activeKB=f.fireEvent("activate");a.manager.fireEvent("changed");}else{if(this._manager){this._manager.activate(this);}}return this;},isActive:function(){return this._manager?(this._manager._activeKB==this):(a.manager==this);
},deactivate:function(f){if(f){if(f===this._activeKB){this._activeKB=null;f.fireEvent("deactivate");a.manager.fireEvent("changed");}}else{if(this._manager){this._manager.deactivate(this);
}}return this;},relinquish:function(){if(this.isActive()&&this._manager&&this._manager.previous){this._manager.activate(this._manager.previous);}else{this.deactivate();
}return this;},manage:function(f){if(f._manager){f._manager.drop(f);}this._instances.push(f);f._manager=this;if(!this._activeKB){this.activate(f);}return this;
},drop:function(f){f.relinquish();this._instances.erase(f);if(this._activeKB==f){if(this.previous&&this._instances.contains(this.previous)){this.activate(this.previous);
}else{this._activeKB=this._instances[0];}}return this;},trace:function(){a.trace(this);},each:function(f){a.each(this,f);},_instances:[],_disable:function(f){if(this._activeKB==f){this._activeKB=null;
}},_setup:function(){this.addEvents(this.options.events);if(a.manager&&!this._manager){a.manager.manage(this);}if(this.options.active){this.activate();
}else{this.relinquish();}},_handle:function(h,g){if(h.preventKeyboardPropagation){return;}var f=!!this._manager;if(f&&this._activeKB){this._activeKB._handle(h,g);
if(h.preventKeyboardPropagation){return;}}this.fireEvent(g,h);if(!f&&this._activeKB){this._activeKB._handle(h,g);}}});var b={};var c=["shift","control","alt","meta"];
var e=/^(?:shift|control|ctrl|alt|meta)$/;a.parse=function(h,g,k){if(k&&k.contains(h.toLowerCase())){return h;}h=h.toLowerCase().replace(/^(keyup|keydown):/,function(m,l){g=l;
return"";});if(!b[h]){var f,j={};h.split("+").each(function(l){if(e.test(l)){j[l]=true;}else{f=l;}});j.control=j.control||j.ctrl;var i=[];c.each(function(l){if(j[l]){i.push(l);
}});if(f){i.push(f);}b[h]=i.join("+");}return g+":keys("+b[h]+")";};a.each=function(f,g){var h=f||a.manager;while(h){g.run(h);h=h._activeKB;}};a.stop=function(f){f.preventKeyboardPropagation=true;
};a.manager=new a({active:true});a.trace=function(f){f=f||a.manager;var g=window.console&&console.log;if(g){console.log("the following items have focus: ");
}a.each(f,function(h){if(g){console.log(document.id(h.widget)||h.wiget||h);}});};var d=function(g){var f=[];c.each(function(h){if(g[h]){f.push(h);}});if(!e.test(g.key)){f.push(g.key);
}a.manager._handle(g,g.type+":keys("+f.join("+")+")");};document.addEvents({keyup:d,keydown:d});})();Keyboard.prototype.options.nonParsedEvents.combine(["rebound","onrebound"]);
Keyboard.implement({addShortcut:function(b,a){this._shortcuts=this._shortcuts||[];this._shortcutIndex=this._shortcutIndex||{};a.getKeyboard=Function.from(this);
a.name=b;this._shortcutIndex[b]=a;this._shortcuts.push(a);if(a.keys){this.addEvent(a.keys,a.handler);}return this;},addShortcuts:function(b){for(var a in b){this.addShortcut(a,b[a]);
}return this;},removeShortcut:function(b){var a=this.getShortcut(b);if(a&&a.keys){this.removeEvent(a.keys,a.handler);delete this._shortcutIndex[b];this._shortcuts.erase(a);
}return this;},removeShortcuts:function(a){a.each(this.removeShortcut,this);return this;},getShortcuts:function(){return this._shortcuts||[];},getShortcut:function(a){return(this._shortcutIndex||{})[a];
}});Keyboard.rebind=function(b,a){Array.from(a).each(function(c){c.getKeyboard().removeEvent(c.keys,c.handler);c.getKeyboard().addEvent(b,c.handler);c.keys=b;
c.getKeyboard().fireEvent("rebound");});};Keyboard.getActiveShortcuts=function(b){var a=[],c=[];Keyboard.each(b,[].push.bind(a));a.each(function(d){c.extend(d.getShortcuts());
});return c;};Keyboard.getShortcut=function(c,b,d){d=d||{};var a=d.many?[]:null,e=d.many?function(g){var f=g.getShortcut(c);if(f){a.push(f);}}:function(f){if(!a){a=f.getShortcut(c);
}};Keyboard.each(b,e);return a;};Keyboard.getShortcuts=function(b,a){return Keyboard.getShortcut(b,a,{many:true});};HtmlTable=Class.refactor(HtmlTable,{options:{useKeyboard:true,classRowSelected:"table-tr-selected",classRowHovered:"table-tr-hovered",classSelectable:"table-selectable",shiftForMultiSelect:true,allowMultiSelect:true,selectable:false},initialize:function(){this.previous.apply(this,arguments);
if(this.occluded){return this.occluded;}this.selectedRows=new Elements();this.bound={mouseleave:this.mouseleave.bind(this),clickRow:this.clickRow.bind(this),activateKeyboard:function(){if(this.keyboard&&this.selectEnabled){this.keyboard.activate();
}}.bind(this)};if(this.options.selectable){this.enableSelect();}},empty:function(){this.selectNone();return this.previous();},enableSelect:function(){this.selectEnabled=true;
this.attachSelects();this.element.addClass(this.options.classSelectable);return this;},disableSelect:function(){this.selectEnabled=false;this.attachSelects(false);
this.element.removeClass(this.options.classSelectable);return this;},push:function(){var a=this.previous.apply(this,arguments);this.updateSelects();return a;
},isSelected:function(a){return this.selectedRows.contains(a);},toggleRow:function(a){return this[(this.isSelected(a)?"de":"")+"selectRow"](a);},selectRow:function(b,a){if(this.isSelected(b)||(!a&&!this.body.getChildren().contains(b))){return;
}if(!this.options.allowMultiSelect){this.selectNone();}if(!this.isSelected(b)){this.selectedRows.push(b);b.addClass(this.options.classRowSelected);this.fireEvent("rowFocus",[b,this.selectedRows]);
this.fireEvent("stateChanged");}this.focused=b;document.clearSelection();return this;},getSelected:function(){return this.selectedRows;},serialize:function(){var a=this.previous.apply(this,arguments)||{};
if(this.options.selectable){a.selectedRows=this.selectedRows.map(function(b){return Array.indexOf(this.body.rows,b);}.bind(this));}return a;},restore:function(a){if(this.options.selectable&&a.selectedRows){a.selectedRows.each(function(b){this.selectRow(this.body.rows[b]);
}.bind(this));}this.previous.apply(this,arguments);},deselectRow:function(b,a){if(!this.isSelected(b)||(!a&&!this.body.getChildren().contains(b))){return;
}this.selectedRows=new Elements(Array.from(this.selectedRows).erase(b));b.removeClass(this.options.classRowSelected);this.fireEvent("rowUnfocus",[b,this.selectedRows]);
this.fireEvent("stateChanged");return this;},selectAll:function(a){if(!a&&!this.options.allowMultiSelect){return;}this.selectRange(0,this.body.rows.length,a);
return this;},selectNone:function(){return this.selectAll(true);},selectRange:function(b,a,f){if(!this.options.allowMultiSelect&&!f){return;}var g=f?"deselectRow":"selectRow",e=Array.clone(this.body.rows);
if(typeOf(b)=="element"){b=e.indexOf(b);}if(typeOf(a)=="element"){a=e.indexOf(a);}a=a<e.length-1?a:e.length-1;if(a<b){var d=b;b=a;a=d;}for(var c=b;c<=a;
c++){this[g](e[c],true);}return this;},deselectRange:function(b,a){this.selectRange(b,a,true);},getSelected:function(){return this.selectedRows;},enterRow:function(a){if(this.hovered){this.hovered=this.leaveRow(this.hovered);
}this.hovered=a.addClass(this.options.classRowHovered);},leaveRow:function(a){a.removeClass(this.options.classRowHovered);},updateSelects:function(){Array.each(this.body.rows,function(a){var b=a.retrieve("binders");
if(!b&&!this.selectEnabled){return;}if(!b){b={mouseenter:this.enterRow.pass([a],this),mouseleave:this.leaveRow.pass([a],this)};a.store("binders",b);}if(this.selectEnabled){a.addEvents(b);
}else{a.removeEvents(b);}},this);},shiftFocus:function(b,a){if(!this.focused){return this.selectRow(this.body.rows[0],a);}var c=this.getRowByOffset(b);
if(c===null||this.focused==this.body.rows[c]){return this;}this.toggleRow(this.body.rows[c],a);},clickRow:function(a,b){var c=(a.shift||a.meta||a.control)&&this.options.shiftForMultiSelect;
if(!c&&!(a.rightClick&&this.isSelected(b)&&this.options.allowMultiSelect)){this.selectNone();}if(a.rightClick){this.selectRow(b);}else{this.toggleRow(b);
}if(a.shift){this.selectRange(this.rangeStart||this.body.rows[0],b,this.rangeStart?!this.isSelected(b):true);this.focused=b;}this.rangeStart=b;},getRowByOffset:function(c){if(!this.focused){return 0;
}var b=Array.clone(this.body.rows),a=b.indexOf(this.focused)+c;if(a<0){a=null;}if(a>=b.length){a=null;}return a;},attachSelects:function(d){d=d!=null?d:true;
var g=d?"addEvents":"removeEvents";this.element[g]({mouseleave:this.bound.mouseleave,click:this.bound.activateKeyboard});this.body[g]({"click:relay(tr)":this.bound.clickRow,"contextmenu:relay(tr)":this.bound.clickRow});
if(this.options.useKeyboard||this.keyboard){if(!this.keyboard){this.keyboard=new Keyboard();}if(!this.selectKeysDefined){this.selectKeysDefined=true;var f,e;
var c=function(i){var h=function(j){clearTimeout(f);j.preventDefault();var k=this.body.rows[this.getRowByOffset(i)];if(j.shift&&k&&this.isSelected(k)){this.deselectRow(this.focused);
this.focused=k;}else{if(k&&(!this.options.allowMultiSelect||!j.shift)){this.selectNone();}this.shiftFocus(i,j);}if(e){f=h.delay(100,this,j);}else{f=(function(){e=true;
h(j);}).delay(400);}}.bind(this);return h;}.bind(this);var b=function(){clearTimeout(f);e=false;};this.keyboard.addEvents({"keydown:shift+up":c(-1),"keydown:shift+down":c(1),"keyup:shift+up":b,"keyup:shift+down":b,"keyup:up":b,"keyup:down":b});
var a="";if(this.options.allowMultiSelect&&this.options.shiftForMultiSelect&&this.options.useKeyboard){a=" (Shift multi-selects).";}this.keyboard.addShortcuts({"Select Previous Row":{keys:"up",shortcut:"up arrow",handler:c(-1),description:"Select the previous row in the table."+a},"Select Next Row":{keys:"down",shortcut:"down arrow",handler:c(1),description:"Select the next row in the table."+a}});
}this.keyboard[d?"activate":"deactivate"]();}this.updateSelects();},mouseleave:function(){if(this.hovered){this.leaveRow(this.hovered);}}});var Scroller=new Class({Implements:[Events,Options],options:{area:20,velocity:1,onChange:function(a,b){this.element.scrollTo(a,b);
},fps:50},initialize:function(b,a){this.setOptions(a);this.element=document.id(b);this.docBody=document.id(this.element.getDocument().body);this.listener=(typeOf(this.element)!="element")?this.docBody:this.element;
this.timer=null;this.bound={attach:this.attach.bind(this),detach:this.detach.bind(this),getCoords:this.getCoords.bind(this)};},start:function(){this.listener.addEvents({mouseover:this.bound.attach,mouseleave:this.bound.detach});
return this;},stop:function(){this.listener.removeEvents({mouseover:this.bound.attach,mouseleave:this.bound.detach});this.detach();this.timer=clearInterval(this.timer);
return this;},attach:function(){this.listener.addEvent("mousemove",this.bound.getCoords);},detach:function(){this.listener.removeEvent("mousemove",this.bound.getCoords);
this.timer=clearInterval(this.timer);},getCoords:function(a){this.page=(this.listener.get("tag")=="body")?a.client:a.page;if(!this.timer){this.timer=this.scroll.periodical(Math.round(1000/this.options.fps),this);
}},scroll:function(){var c=this.element.getSize(),a=this.element.getScroll(),h=this.element!=this.docBody?this.element.getOffsets():{x:0,y:0},d=this.element.getScrollSize(),g={x:0,y:0},e=this.options.area.top||this.options.area,b=this.options.area.bottom||this.options.area;
for(var f in this.page){if(this.page[f]<(e+h[f])&&a[f]!=0){g[f]=(this.page[f]-e-h[f])*this.options.velocity;}else{if(this.page[f]+b>(c[f]+h[f])&&a[f]+c[f]!=d[f]){g[f]=(this.page[f]-c[f]+b-h[f])*this.options.velocity;
}}g[f]=g[f].round();}if(g.y||g.x){this.fireEvent("change",[a.x+g.x,a.y+g.y]);}}});(function(){var a=function(c,b){return(c)?(typeOf(c)=="function"?c(b):b.get(c)):"";
};this.Tips=new Class({Implements:[Events,Options],options:{onShow:function(){this.tip.setStyle("display","block");},onHide:function(){this.tip.setStyle("display","none");
},title:"title",text:function(b){return b.get("rel")||b.get("href");},showDelay:100,hideDelay:100,className:"tip-wrap",offset:{x:16,y:16},windowPadding:{x:0,y:0},fixed:false},initialize:function(){var b=Array.link(arguments,{options:Type.isObject,elements:function(c){return c!=null;
}});this.setOptions(b.options);if(b.elements){this.attach(b.elements);}this.container=new Element("div",{"class":"tip"});},toElement:function(){if(this.tip){return this.tip;
}this.tip=new Element("div",{"class":this.options.className,styles:{position:"absolute",top:0,left:0}}).adopt(new Element("div",{"class":"tip-top"}),this.container,new Element("div",{"class":"tip-bottom"}));
return this.tip;},attach:function(b){$$(b).each(function(d){var f=a(this.options.title,d),e=a(this.options.text,d);d.set("title","").store("tip:native",f).retrieve("tip:title",f);
d.retrieve("tip:text",e);this.fireEvent("attach",[d]);var c=["enter","leave"];if(!this.options.fixed){c.push("move");}c.each(function(h){var g=d.retrieve("tip:"+h);
if(!g){g=function(i){this["element"+h.capitalize()].apply(this,[i,d]);}.bind(this);}d.store("tip:"+h,g).addEvent("mouse"+h,g);},this);},this);return this;
},detach:function(b){$$(b).each(function(d){["enter","leave","move"].each(function(e){d.removeEvent("mouse"+e,d.retrieve("tip:"+e)).eliminate("tip:"+e);
});this.fireEvent("detach",[d]);if(this.options.title=="title"){var c=d.retrieve("tip:native");if(c){d.set("title",c);}}},this);return this;},elementEnter:function(c,b){clearTimeout(this.timer);
this.timer=(function(){this.container.empty();["title","text"].each(function(e){var d=b.retrieve("tip:"+e);var f=this["_"+e+"Element"]=new Element("div",{"class":"tip-"+e}).inject(this.container);
if(d){this.fill(f,d);}},this);this.show(b);this.position((this.options.fixed)?{page:b.getPosition()}:c);}).delay(this.options.showDelay,this);},elementLeave:function(c,b){clearTimeout(this.timer);
this.timer=this.hide.delay(this.options.hideDelay,this,b);this.fireForParent(c,b);},setTitle:function(b){if(this._titleElement){this._titleElement.empty();
this.fill(this._titleElement,b);}return this;},setText:function(b){if(this._textElement){this._textElement.empty();this.fill(this._textElement,b);}return this;
},fireForParent:function(c,b){b=b.getParent();if(!b||b==document.body){return;}if(b.retrieve("tip:enter")){b.fireEvent("mouseenter",c);}else{this.fireForParent(c,b);
}},elementMove:function(c,b){this.position(c);},position:function(f){if(!this.tip){document.id(this);}var c=window.getSize(),b=window.getScroll(),g={x:this.tip.offsetWidth,y:this.tip.offsetHeight},d={x:"left",y:"top"},e={y:false,x2:false,y2:false,x:false},h={};
for(var i in d){h[d[i]]=f.page[i]+this.options.offset[i];if(h[d[i]]<0){e[i]=true;}if((h[d[i]]+g[i]-b[i])>c[i]-this.options.windowPadding[i]){h[d[i]]=f.page[i]-this.options.offset[i]-g[i];
e[i+"2"]=true;}}this.fireEvent("bound",e);this.tip.setStyles(h);},fill:function(b,c){if(typeof c=="string"){b.set("html",c);}else{b.adopt(c);}},show:function(b){if(!this.tip){document.id(this);
}if(!this.tip.getParent()){this.tip.inject(document.body);}this.fireEvent("show",[this.tip,b]);},hide:function(b){if(!this.tip){document.id(this);}this.fireEvent("hide",[this.tip,b]);
}});})();;/*
---
description: The Wall is a plugin for Mootools javascript framework designed to create walls of infinite dimensions. Its flexibility allows different applications, from infinite wall mode to Coda slider mode. The Wall creates compatible interfaces with the newer browsers and iPhone and iPad mobile devices.

license: MIT-style

authors:
- Marco Dell'Anna

requires:
- core/1.3: '*'

provides:
- The Wall
...
*/

/*
 * Mootools The Wall
 * Version 1.0
 * Copyright (c) 2011 Marco Dell'Anna - http://www.plasm.it
 *
 * Inspiration:
 * - Class implementation inspired by [Infinite Drag] (http://ianli.com/infinitedrag/) by Ian Li, Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) license.
 *
 * Requires:
 * MooTools http://mootools.net
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 *
 * Log:
 * 1.1 - Inserito onResize Windows
 * 1.0 - Inizio implementazione release stabile
 */



var Wall = new Class({
    __target: undefined,
    init : false,
    Implements : Options,
    id   : 0, // ID Elemento Attivo
    coordinates :[],
    wall : undefined,
    viewport : undefined,
    grid : [],
    minx : 0,
    maxx : 0,
    wallFX : undefined,
    slideshowInterval:undefined,
    options : {
        printCoordinates : false,             // Inserisce le coordinate nel tile
        speed            : 1000,              // Velocità spostamento
        transition       : Fx.Transitions.Quad.easeOut,
        autoposition     : false,             // Autoposizionamento wall
        draggable        : true,              // Abilita drag
        scrollable       : true,
        inertia          : false,             // Abilita inertia
        inertiaSpeed     : 0.9,
        invert           : false,             // Inverte direzione drag
        width            : 0,                 // W tile
        height           : 0,                 // H tile
        startx           : 0,                 // Tile iniziale
        starty           : 0,                 // Tile iniziale
        rangex           : [-500, 500],       // Definisce il numero di colonne (non pixel)
        rangey           : [-500, 500],       // Definisce il numero di righe (non pixel)
        handle           : undefined,         // Definisce un differente handle
        slideshow        : false,             // Abilita Slideshow Wall
        showDuration     : 3000,              // Durata visualizzazione Slideshow
        preload          : false,             // Precarica contenuto
        callOnUpdate     : Function,          // Azione on drag/complete
        callOnChange     : Function,          // Azione scatenata quando viene impostato id elemento attivo
        callOnMouseDown  : Function,
        callOnMouseUp    : Function,
        callOnMouseDragged : Function,
        detectMobile     : true               // Detect mobile device
    },

    initialize : function(id, options) {
        // Set opzioni
        this.setOptions(options);
        this.__target   = id;
        // Imposta wall e Viewport
        this.wall       = document.id(this.__target);
        this.viewport   = document.id(this.__target).getParent();
    },

    /**
     * Initialize The Wall
     */
    initWall : function() {
        // Calcola tutte le coordinate
        this.coordinates = this.calculateCoordinates();
        // Prepopolate
        if( this.options.preload == true ) this.preloadContent();
        // Calcola Spostamento Min e Max per Assi X,Y
        var bb = this.setBoundingBox();
        // Imposta Coordiname BB
        this.maxx = bb.maxx;
        this.maxy = bb.maxy;
        this.minx = bb.minx;
        this.miny = bb.miny;

        // Verifica Init Class
        if( this.init == false ){
            // Definisce Effetto di spostamento
            this.wallFX = new Fx.Morph(this.wall, {
                duration: this.options.speed,
                transition: this.options.transition,
                onStart: function(){
                  /*periodicalID = (function(){
                      this.options.callOnUpdate(this.updateWall());
                  }).periodical(Math.floor(this.options.speed/4), this);*/
                }.bind( this ),
                onComplete: function(){
                    this.options.callOnUpdate(this.updateWall());
                   // clearTimeout(periodicalID);
                }.bind( this )
            });
            // Inizializza Resize Windows
            window.addEvent('resize', function(){ this.options.callOnUpdate(this.updateWall()); }.bind( this ));

            // Inizializza Class
            this.init = true;
        }else{
            // Sgancia elemento solo se draggabile
            if( this.options.draggable == true ) this.wallDrag.detach();
        }

        // Definisce Handler
        var handler = this.options.handle != undefined ? document.id(this.options.handle) : document.id(this.__target);

        // Click sul Wall
        document.id(this.__target).addEvent("click", function(e){
            e.stopPropagation();
            this.options.callOnMouseClick(e);
            // Reset Movement
            this.moved = 0;
        }.bind( this ))

        if(this.options.scrollable == true){
            document.id(this.__target).addEvent(['scroll','mousewheel'], function(el, e){
                console.log("scrolling");

                this.xspeed = e.page.x - this.xPos; // x mouse speed
                this.yspeed = e.page.y - this.yPos; // y mouse speed
                this.xPos   = e.page.x;
                this.yPos   = e.page.y;

                this.options.callOnMouseDragged( [this.startX - this.xPos,
                                                    this.startY - this.yPos] , e)
                //
                e.stopPropagation();

                // Interrompe Slideshow
                this.clearSlideShow();
                // Tronca transizione se riparte il drag
                if( this.wallFX ) this.wallFX.cancel();
                this.options.callOnUpdate(this.updateWall());
                // Considera movimento
                this.moved++;
            });
        }

        // Definisce oggetto draggabile
        if( this.options.draggable == true ){
            this.wallDrag = document.id(this.__target).makeDraggable({
                handle:handler,
                limit: {
                            x: [this.minx, this.maxx],
                            y: [this.miny, this.maxy]
                        },
                invert:this.options.invert,
                onStart: function(el, e){
                    clearTimeout(this.periodicalID);
                    // Reset Movement
                    this.moved = 0;

                    this.startX = e.page.x;
                    this.startY = e.page.y;

                    // Posizione Inizio Drag
                    this.xPos = e.page.x;
                    this.yPos = e.page.y;

                    this.options.callOnMouseDown(e)
                }.bind( this ),
                onDrag: function(el, e){
                    this.xspeed = e.page.x - this.xPos; // x mouse speed
                    this.yspeed = e.page.y - this.yPos; // y mouse speed
                    this.xPos   = e.page.x;
                    this.yPos   = e.page.y;

                    this.options.callOnMouseDragged( [this.startX - this.xPos,
                                                     this.startY - this.yPos] , e)
                    //
                    e.stopPropagation();
                    // Interrompe Slideshow
                    this.clearSlideShow();
                    // Tronca transizione se riparte il drag
                    if( this.wallFX ) this.wallFX.cancel();
                    this.options.callOnUpdate(this.updateWall());
                    // Considera movimento
                    this.moved++;
                }.bind( this ),
                onComplete: function(el, e){

                    this.options.callOnMouseUp( e )
                    e.preventDefault();
                    // Verifica inertia
                    if( this.options.inertia == true ){

                        var i = 0;

                        // START Inertia
                        this.periodicalID = (function(){

                            if( this.options.invert == true ){
                                var finX = this.wall.getStyle("left").toInt() - this.xspeed;
                                var finY = this.wall.getStyle("top").toInt()  - this.yspeed;
                            }else{
                                var finX = this.wall.getStyle("left").toInt() + this.xspeed;
                                var finY = this.wall.getStyle("top").toInt()  + this.yspeed;
                            }
                            if( finX < 0) this.wall.setStyle("left", Math.max(this.minx, finX));
                            if( finY < 0) this.wall.setStyle("top",  Math.max(this.miny, finY));
                            if( finX > 0) this.wall.setStyle("left", Math.min(this.maxx, finX));
                            if( finY > 0) this.wall.setStyle("top",  Math.min(this.maxy, finY));

                            // Decrementa velocità di spostamento
                            this.xspeed *= this.options.inertiaSpeed;
                            this.yspeed *= this.options.inertiaSpeed;

                            // Aggiorna Wall
                            this.options.callOnUpdate(this.updateWall());

                            // Interrompe spostamento se prossimo a 0.6
                            if (Math.abs(this.xspeed) < 2 && Math.abs(this.yspeed) < 2) {
                                // Attiva elemento del coda, se presente
                                var p = this.calculateProximity();
                                // Calcola l'id in base alle coordinate
                                this.id = this.getIdFromCoordinates(p.c,p.r);
                                // Attiva elemento del coda
                                this.codaActiveItem(this.id);
                                this.options.callOnUpdate(this.updateWall());
                                // Ricalcola posizione
                                if( this.options.autoposition == true ) this.normalizePosition();
                                // Clear Periodical
                                clearTimeout(this.periodicalID);
                            }

                        }).periodical(20, this);
                        // END Inertia
                    }
                    // Riposizionamento automatico
                    if( this.options.autoposition == true && this.options.inertia == false){
                        // Riposiziona, se richiesto e se lo slideshow è terminato
                        if( this.slideshowInterval == undefined || this.options.slideshow == false ) this.normalizePosition();
                    }else{
                        // Attiva elemento del coda, se presente
                        var p = this.calculateProximity();
                        // Calcola l'id in base alle coordinate
                        this.id = this.getIdFromCoordinates(p.c,p.r);
                        // Attiva elemento del coda
                        this.codaActiveItem(this.id);
                    }
                    // Callback wall
                    this.options.callOnUpdate(this.updateWall());
                }.bind( this )
            });
            // Imposta Cursore
            // this.wall.setStyle("cursor", "move");
            // Scarica Prediodical
            this.wallDrag.addEvent("mousedown", function(e){
                e.stop();
                clearTimeout(this.periodicalID);
                e.stopPropagation();
            }.bind(this));
        }else{
            // Imposta Cursore default
            this.wall.setStyles({
                                    "cursor":"default",
                                    "position":"absolute"
                                });
        }

        // Imposta posizione iniziale
        this.wall.setStyles({
            "left": this.options.startx*this.options.width,
            "top": this.options.starty*this.options.height
        })

        // Aggiorna Wall ed esegue CallBack di creazione
        this.options.callOnUpdate(this.updateWall());

        // Inizializza Slideshow
        if( this.options.slideshow == true ) this.initSlideshow();

        // Inizializza Device Mobile
        if( this.options.detectMobile && this.detectMobile() ) this.initMobile();

        //
        return this;
    },

    /**
     * Verifica se il Wall si è spostato
     * @return boolean
     */
    getMovement: function(){
        var m = this.moved > 0 ? true : false;
        // Resetta variabile movimento
        this.moved = 0;
        return m;
    },

    /**
     * @PRIVATE
     * Calcola lo spazio di contenimento del wall e il relativo spostamento
     * @return oggetto {minx, miny, maxx, maxy}
     */
    setBoundingBox: function(){
        // Estrae Coordinate Viewport
        var vp_coordinate = this.viewport.getCoordinates();
        // Tile Size
        var tile_w = this.options.width;
        var tile_h = this.options.height;
        // Viewport Size
        var vp_w = vp_coordinate.width;
        var vp_h = vp_coordinate.height;
        var vp_cols   = Math.ceil(vp_w / tile_w);
        var vp_rows   = Math.ceil(vp_h / tile_h);
        // Calcola X min e X max
        var maxx = Math.abs(this.options.rangex[0]) * tile_w;
        var maxy = Math.abs(this.options.rangey[0]) * tile_h;
        var minx = -( (Math.abs(this.options.rangex[1])) * tile_w ) + vp_w;
        var miny = -( (Math.abs(this.options.rangey[1])) * tile_h ) + vp_h;
        return {"minx":minx,"miny":miny,"maxx":maxx,"maxy":maxy}
    },

    /**
     * @PRIVATE
     * Calcola tutte le coordinate possibili del Wall
     * @return array di oggetti {colonna, riga}
     */
    calculateCoordinates: function(){
        var indice      = 0;
        var coordinates = [];
        for(var r=this.options.rangey[0]; r<this.options.rangey[1]; r++){
            for(var c=this.options.rangex[0]; c<this.options.rangex[1]; c++){
                coordinates[indice] = {"c":c, "r":r};
                if(c==0&&r==0){ this.id = indice; }
                indice++;
            }
        }
        return coordinates;
    },

    /**
     * Estrae id da Coordinate spaziali
     * @return numeric id
     */
    getIdFromCoordinates: function(gc,gr){
        var indice = 0;
        for(var r=this.options.rangey[0]; r<this.options.rangey[1]; r++){
            for(var c=this.options.rangex[0]; c<this.options.rangex[1]; c++){
                if(c==gc&&r==gr){ return indice; }
                indice++;
            }
        }
        return indice;
    },

    /**
     * Restituisce le coordinate del tassello richiesto
     * @return object o.c, o.r
     */
    getCoordinatesFromId: function(id){
      return this.coordinates[id];
    },

    /**
     * Restituisce id elemento attivo
     * @return numeric
     */
    getActiveItem: function(){
        return this.id;
    },

    /**
     * @PRIVATE
     * Calcola la posizione più prossima al punto raggiunto
     * @return Object - Coordinate del punto
     */
    calculateProximity: function(){
        var wallx = this.wall.getStyle("left").toInt()*-1;
        var wally = this.wall.getStyle("top").toInt()*-1;
        var w     = this.options.width;
        var h     = this.options.height;
        // Calcola posizione
        var npx = Math.round(wallx/w);
        var npy = Math.round(wally/h);
        return {"c":npx, "r":npy};
    },

    /**
     * @PRIVATE
     * Normalizza la posizione del Wall se è impostato il settaggio "autoposition"
     * @return
     */
    normalizePosition: function(){
        var p = this.calculateProximity();
        // Sposta al punto
        this.moveTo(p.c, p.r);
        return;
    },

    /**
     * @PRIVATE
     * Aggiorna gli elementi del wall. Calcola gli elementi visibili non ancora generati
     * @return array new nodes
     */
    updateWall: function(){
        // Array Nodes
        var newItems = [];
        // Estrae Coordinate Wall e Viewport
        var vp_coordinate   = this.viewport.getCoordinates();
        var wall_coordinate = this.wall.getCoordinates();

        // Tile Size
        var tile_w = this.options.width;
        var tile_h = this.options.height;

        // Viewport Size
        var vp_w = vp_coordinate.width;
        var vp_h = vp_coordinate.height;
        var vp_cols   = Math.ceil(vp_w / tile_w);
        var vp_rows   = Math.ceil(vp_h / tile_h);

        // Posizioni
        var pos = {
            left: wall_coordinate.left - vp_coordinate.left,
            top:  wall_coordinate.top  - vp_coordinate.top
        }

        // Calcola visibilità elemento
        var visible_left_col = Math.ceil(-pos.left / tile_w)  - 1;
        var visible_top_row  = Math.ceil(-pos.top /  tile_h)  - 1;

        for (var i = visible_left_col; i <= visible_left_col + vp_cols; i++) {
            for (var j = visible_top_row; j <= visible_top_row + vp_rows; j++) {
                if (this.grid[i] === undefined) {
                    this.grid[i] = {};
                }
                if (this.grid[i][j] === undefined) {
                    var item = this.appendTile(i, j);
                    if( item.node !== undefined )  newItems.push(item);
                }
            }
        }

        // Update viewport info.
        wall_width  = wall_coordinate.width;
        wall_height = wall_coordinate.height;
        wall_cols = Math.ceil(wall_width  / tile_w);
        wall_rows = Math.ceil(wall_height / tile_h);

        return newItems;
    },

    /**
     * @PRIVATE
     * Aggiunge un elemento al Wall
     * @return object {nodo_Dom, x, y}
     */
    appendTile: function(i,j){
        this.grid[i][j] = true;

        // Tile Size
        var tile_w = this.options.width;
        var tile_h = this.options.height;
        // Valori Min/Max
        var range_col = this.options.rangex;
        var range_row = this.options.rangey;
        if (i < range_col[0] || (range_col[1]) < i) return {};
        if (j < range_row[0] || (range_row[1]) < j) return {};

        var x    = i * tile_w;
        var y    = j * tile_h;
        var e    = new Element("div").inject(this.wall);
            e.setProperties({
                "class": "tile",
                "col": i,
                "row": j,
                "rel": i+"x"+j
            }).setStyles({
                "position": "absolute",
                "left": x,
                "top": y,
                "width": tile_w,
                "height": tile_h
            })
            if( this.options.printCoordinates ) e.set("text", i+"x"+j);
            return {"node":e, "x":j, "y":i};
    },

    /**
     * Esegue operazione di alimentazione massificata eseguendo la generazione di tutti i tasselli
     * Azione applicabile al coda, sconsigliato su wall di grandi dimensioni
     */
    preloadContent: function(){
        // Array Nodes
        var newItems = [];
        Object.each(this.coordinates, function(e){
            if (this.grid[e.c] === undefined) this.grid[e.c] = {};
                var item = this.appendTile(e.c, e.r);
                    newItems.push(item);
        }.bind(this))
        // Popola tutto il wall
        this.options.callOnUpdate(newItems);
        return newItems;
    },

    /**
     * Imposta CallBack di di inizializzazione tile del Wall
     */
    setCallOnUpdate: function(f){
        this.options.callOnUpdate = f;
        return f;
    },

    /**
     * Imposta CallBack di aggiornamento focus elemento
     */
    setCallOnChange: function(f){
        this.options.callOnChange = f;
        return f;
    },

    /**
     * @PRIVATE
     * Inizializza Slideshow
     * Lo slideshow viene interrotto al Drag o Touch
     */
    initSlideshow: function(){
        // Controllo Speed
        if( this.options.showDuration < this.options.speed ) this.options.showDuration = this.options.speed;
        this.slideshowInterval = this.getAutomaticNext.periodical(this.options.showDuration, this );
    },

    /**
     * @PRIVATE
     * Richiede elemento successivo nel coda Slideshow
     * return
     */
    getAutomaticNext: function(){
        this.clearSlideShow();
        if( this.options.slideshow == true ){
            this.slideshowInterval = this.getAutomaticNext.periodical(this.options.showDuration, this );
        }
        // Verifica elemento
        1+this.id > this.coordinates.length-1 ? this.id = 0 : this.id++;
        this.moveTo(this.coordinates[this.id].c, this.coordinates[this.id].r); // Richiede prossima slide
    },

    /**
     * @PRIVATE
     * Interrompe Slideshow
     * return
     */
    clearSlideShow: function(){
        clearTimeout(this.slideshowInterval);
        this.slideshowInterval = undefined;
    },

    /**
     * Esegue spostamento del Wall alle coordinate indicate
     * return false || nodo Dom attivo
     */
    moveTo: function(c,r){

        // Verifica validità valori possibile e valore indicato
        if( c < 0 ) c = Math.max(c, this.options.rangex[0]);
        if( c > 0 ) c = Math.min(c, this.options.rangex[1]);
        if( r < 0 ) r = Math.max(r, this.options.rangey[0]);
        if( r > 0 ) r = Math.min(r, this.options.rangey[1]);

        // Esegue Morph
        this.wallFX.cancel().start({
            'left': Math.max(-(c*this.options.width), this.minx),
            'top':  Math.max(-(r*this.options.height), this.miny)
        });

        // Calcola l'id in base alle coordinate
        this.id = this.getIdFromCoordinates(c,r);

        // Attiva elemento del coda
        this.codaActiveItem(this.id);
        //
        var name = this.coordinates[this.id].c+"x"+this.coordinates[this.id].r;
        var item = $$("#"+this.__target+" div[rel="+name+"]");
        if( item.length > 0) return $$("#"+this.__target+" div[rel="+name+"]")[0];
        return false;
    },

    /**
     * Posiziona il Wall su elemento attivo
     * return Object node Dom elemento con focus di posizionamento
     */
    moveToActive: function(){
        // Muove il Wall alle coordinate del tile con id attivo
        return this.moveTo(this.coordinates[this.id].c, this.coordinates[this.id].r)
    },

    /**
     * Posiziona il Wall su elemento successivo
     * return Object node Dom elemento con focus di posizionamento
     */
    moveToNext: function(){
        this.clearSlideShow();
        if( 1+this.id < this.coordinates.length ){ this.id++; }
        return this.moveTo(this.coordinates[this.id].c, this.coordinates[this.id].r)
    },

    /**
     * Posiziona il Wall su elemento precedente
     * return Object node Dom elemento con focus di posizionamento
     */
    moveToPrev: function(){
        this.clearSlideShow();
        if( (this.id-1) >= 0 ){ this.id--; }
        return this.moveTo(this.coordinates[this.id].c, this.coordinates[this.id].r)
    },

    /**
     * Richiede la lista dei punti sotto forma di Link
     * @target: ID DOM element dove inserire i links
     * @return array list element
     */
    getListLinksPoints: function( id_target ){
        var items = [];
        // Crea Hyperlink per ogni elemento del Wall
        Array.each(this.coordinates, function(e,i){
            var a = new Element("a.wall-item-coda[html="+(1+i)+"][href=#"+(1+i)+"]");
                a.addEvent("click", function(evt){
                    // Disabilita slideshow
                    this.clearSlideShow();
                    this.id = i;
                    this.codaActiveItem(i);
                    evt.stop();
                    this.moveTo(e.c, e.r);
                }.bind( this ))
                // Inserisce nel target
                a.inject(document.id(id_target));
                // Aggiunge ad array elementi
                items.push(a);
        }.bind( this ))
        // Imposta id coda target
        this.coda_target = id_target;
        // Imposta lista elementi del coda
        this.coda_items  = items;
        // Imposta attivo il primo elemento del coda
        this.codaActiveItem(0);
        return items;
    },

    /**
     * @PRIVATE
     * Attiva Elemento del Coda console
     * @i indice dell'elemento cliccato 1,2,3,4,5
     * @return node Dom element
     */
    codaActiveItem: function(i){
        // Esegue CallBack
        this.options.callOnChange(i);
        // Attivazione
        if( this.coda_target ){
            // Rimuove link attivi
            Array.each(this.coda_items, function(e,i){ e.removeClass("wall-item-current"); })
            // Attiva corrente
            this.coda_items[i].addClass("wall-item-current");
            return this.coda_items[i];
        }
    },

    /**
     * @PRIVATE
     * Esegue Detect di device iPad, iPod, iPhone
     * @return boolean
     */
    detectMobile: function(){
        return 'ontouchstart' in window || navigator.msMaxTouchPoints;
    },

    /**
     * @PRIVATE
     * Inizializza comportamenti per il magico ditino
     */
    initMobile: function(){
        // Touch Start Slider
        this.wall.__root = this
        this.wall.addEvent('touchstart',function(e) {
            if( e ) e.stop();

            // Interrompe Slideshow
            this.__root.clearSlideShow();

            // Data Start
            this._startXMouse = e.page.x;
            this._startYMouse = e.page.y;
            this._startLeft   = this.getStyle("left").toInt();
            this._startTop    = this.getStyle("top").toInt();
            this._width       = this.getStyle("width").toInt();
            this._height      = this.getStyle("height").toInt();
        });

        // Touch Move Slider
        this.wall.addEvent('touchmove',function(e) {
            if( e ) e.stop();
            // Horizontal
            var _deltax = this._startXMouse - e.page.x;
            var _x      = this.getStyle("left").toInt();

            if( _x  > Math.min(this.__root.minx, 0) ){
                endx = Math.min(this._startLeft - _deltax, this.__root.maxx)
            }else{
                endx = Math.max( this.__root.minx, this._startLeft - _deltax)
            }
            // Imposta posizione X
            if( endx <= this.__root.maxx) this.setStyle("left",  endx );

            // Vertical
            var _deltay = this._startYMouse - e.page.y;
            var _y  = this.getStyle("top").toInt();

            if( _y  > Math.min(this.__root.miny, 0) ){
                endy = Math.min(this._startTop - _deltay, this.__root.maxy)
            }else{
                endy = Math.max( this.__root.miny, this._startTop - _deltay)
            }
            // Imposta posizione Y
            if( endy <= this.__root.maxy) this.setStyle("top",  endy );

            // Aggiorna Wall ed esegue CallBack di creazione
            this.__root.options.callOnUpdate(this.__root.updateWall());
        });

        // Touch Move End
        this.wall.addEvent('touchend',function(e) {
            if( this.options.autoposition == true){
                // Riposiziona, se richiesto e se lo slideshow è terminato
                if( this.slideshowInterval == undefined || this.options.slideshow == false ) this.normalizePosition();
            }else{
                // Attiva elemento del coda, se presente
                var p = this.calculateProximity();
                // Calcola l'id in base alle coordinate
                this.id = this.getIdFromCoordinates(p.c,p.r);
                // Attiva elemento del coda
                this.codaActiveItem(this.id);
            }
            // Aggiorna Wall ed esegue CallBack di creazione
            this.options.callOnUpdate(this.updateWall());
        }.bind(this));
    }
});
