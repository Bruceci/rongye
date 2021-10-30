
if(!window.Msn){window.Msn={};}
Msn.Slideshow=new function(){var me=this;var se=null;var t=null;var dly=2;var tm=2;var st=0;var w=window;if(w.ipFadeSecs){tm=w.ipFadeSecs;}
if(w.ipDelaySecs){dly=w.ipDelaySecs;}
function E(i){return document.getElementById(i);}
function init(){var ss=E("flipslides");if(ss){if(ss.style&&ss.style.filter===""){ss.style.filter="progid:DXImageTransform.Microsoft.Fade()";}
se=fc(ss);if(se){var c=1,n=ns(se);while(n!=se){++c;n.style.display="none";n=ns(n);}
if(w.attachEvent){w.attachEvent("onunload",me.ondestroy);}
if(c>1){ss.onmousemove=pause;ss.onfilterchange=trans;hb();res();}}}}
function uninit(){if(w.detachEvent){w.detachEvent("onunload",me.ondestroy);}
var sl=E("flipslides");if(sl){sl.onfilterchange=null;sl.onmousemove=null;}
hb(true);}
this.ondestroy=function(){uninit();};function hb(u){var f=E("flipper");if(f){var as=f.getElementsByTagName("a");for(var n=0;n<as.length;++n){var a=as[n];switch(n){case 0:a.onclick=(u?null:fp);a.style.visibility="visible";break;case 1:a.onclick=(u?null:fn);a.style.visibility="visible";break;}}}}
function hide(){st=1;var sl=E("flipslides");if(sl&&sl.filters&&sl.filters[0]){f(sl,0);}
else{h();t=w.setTimeout(trans,tm*1000/4);}}
function trans(){if(st==1){st=2;se=ns(se);var sl=E("flipslides");if(sl&&sl.filters&&sl.filters[0]){f(sl,1);}
else{s();res(tm);}}
else if(st==2){res();}}
function res(ex){st=0;t=w.setTimeout(hide,(dly+(ex?ex:0))*1000);}
function ct(){w.clearTimeout(t);return(se!==null);}
function f(sl,v){sl.filters[0].apply();(v?s():h());sl.filters[0].play(duration=tm);}
function s(){se.style.display="block";}
function h(){se.style.display="none";}
function pause(){if(!st){if(ct()){res();}}}
function fc(p){var n=p.firstChild;while(n&&(n.nodeType!=1||ie(n))){n=n.nextSibling;}
return n;}
function lc(p){var n=p.lastChild;while(n&&(n.nodeType!=1||ie(n))){n=n.previousSibling;}
return n;}
function pe(n){var p=n.parentNode;while(p&&p.nodeType!=1){p=p.parentNode;}
return p;}
function ns(n){var s=n.nextSibling;while(s&&(s.nodeType!=1||ie(s))){s=s.nextSibling;}
if(!s){s=fc(pe(n));}
return s;}
function ps(n){var s=n.previousSibling;while(s&&(s.nodeType!=1||ie(s))){s=s.previousSibling;}
if(!s){s=lc(pe(n));}
return s;}
function ie(n){for(var i=0;i<n.childNodes.length;++i){if(n.childNodes[i].nodeType==1){return false;}}
return true;}
function fp(){return flip(1);}
function fn(){return flip();}
function flip(r){if(!st){if(ct()){h();se=(r?ps(se):ns(se));s();res();}}
if(w.event){w.event.returnValue=false;}
return false;}
init();};