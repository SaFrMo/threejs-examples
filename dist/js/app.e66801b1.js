(function(e){function t(t){for(var r,u,i=t[0],l=t[1],s=t[2],p=0,f=[];p<i.length;p++)u=i[p],o[u]&&f.push(o[u][0]),o[u]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);c&&c(t);while(f.length)f.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var l=n[i];0!==o[l]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var c=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("0ab3")},"15b0":function(e,t,n){},"3dfd":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",{staticClass:"three-examples"},[n("h2",[e._v("Examples")]),n("ul",{staticClass:"grid"},[n("li",[n("div",{staticClass:"wrap"},[n("purple-tower")],1)])])])},o=[],a=(n("1699"),n("d48f"),n("c6a4"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("vue-three-wrap",{attrs:{start:e.start,update:e.update}})}),u=[],i=(n("75b3"),n("e55a"),n("32cd"),n("adee")),l=n("5a89"),s=n("35eb"),c={},p={components:{"vue-three-wrap":i["a"]},methods:{start:function(e){var t=e.scene,n=e.camera;c.dirLight=new l["b"](16777215,1),c.dirLight.position.set(1,0,1),t.add(c.dirLight),c.cubes=[];for(var r=20,o=s["a"].interpolate([0,r-1],["hsl(200, 100%, 50%)","hsl(340, 100%, 50%)"]),a=0;a<r;a++){var u=new l["a"](.5,1,.5),i=new l["d"]({color:o(a)}),p=new l["c"](u,i);p.position.y=a-10,c.cubes.push(p),t.add(p)}n.position.z=10},update:function(){c.cubes.forEach(function(e,t){e.rotation.y-=2e-4,e.scale.x=e.scale.z=Math.abs(5*Math.sin(.001*Date.now()+t/10))+5})}}},f=p,d=n("bf5c"),b=Object(d["a"])(f,a,u,!1,null,null,null);b.options.__file="PurpleTower.vue";var h=b.exports,v={components:{"purple-tower":h}},w=v,y=(n("5c0b"),Object(d["a"])(w,r,o,!1,null,null,null));y.options.__file="App.vue";t["a"]=y.exports},"5c0b":function(e,t,n){"use strict";var r=n("15b0"),o=n.n(r);o.a}});
//# sourceMappingURL=app.e66801b1.js.map