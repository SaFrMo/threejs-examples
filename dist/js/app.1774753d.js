(function(t){function e(e){for(var r,i,s=e[0],c=e[1],u=e[2],p=0,d=[];p<s.length;p++)i=s[p],a[i]&&d.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},o=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("0ab3")},"15b0":function(t,e,n){},"289f":function(t,e,n){},"3dfd":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"three-examples"},[n("h2",[t._v("Examples")]),n("ul",{staticClass:"grid"},t._l(t.toRender,function(e,r){return n("li",{key:r,staticClass:"item"},[n("button",{staticClass:"wrap"},[n("span",{staticClass:"title",domProps:{innerHTML:t._s(t.startCase(e))}}),n(e,{tag:"component"})],1)])}),0)])},a=[],o=(n("1699"),n("d48f"),n("c6a4"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("vue-three-wrap",{attrs:{start:t.start,update:t.update}})}),i=[],s=(n("75b3"),n("e55a"),n("32cd"),n("adee")),c=n("5a89"),u=n("35eb"),l={},p={components:{"vue-three-wrap":s["a"]},methods:{start:function(t){var e=t.scene,n=t.camera;l.dirLight=new c["c"](16777215,1),l.dirLight.position.set(1,0,1),e.add(l.dirLight),l.cubes=[];for(var r=20,a=u["c"].interpolate([0,r-1],["hsl(200, 100%, 50%)","hsl(340, 100%, 50%)"]),o=0;o<r;o++){var i=new c["a"](.5,1,.5),s=new c["j"]({color:a(o)}),p=new c["h"](i,s);p.position.y=o-10,l.cubes.push(p),e.add(p)}n.position.z=10},update:function(){l.cubes.forEach(function(t,e){t.rotation.y-=2e-4,t.scale.x=t.scale.z=Math.abs(5*Math.sin(.001*Date.now()+e/10))+5})}}},d=p,h=n("bf5c"),f=Object(h["a"])(d,o,i,!1,null,null,null);f.options.__file="PurpleTower.vue";var v=f.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("vue-three-wrap",{ref:"canvas",staticClass:"wandering-canvas",attrs:{start:t.start,update:t.update}})},w=[],g=(n("6e41"),n("d753"),n("dcec"),n("d063"),n("6525"),n("ea9d"),n("6552")),y=n("e0b0"),b=function(t){return new Promise(function(e){var n=!1,r=function r(){n=document.querySelector(t),n?requestAnimationFrame(e):requestAnimationFrame(r)};r()})},x=u["c"].interpolate,_={},j=new c["n"],O=[],R={mixins:[y["a"]],data:function(){return{masterX:0,masterRotation:0,mouseX:0,mouseY:0}},components:{"vue-three-wrap":s["a"]},mounted:function(){var t=Object(g["a"])(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,b(".wandering-canvas");case 2:Object(u["b"])().pipe(function(t){return t.x-=e.clientRect.left,t.y-=e.clientRect.top,t.x=x([0,e.clientRect.width],[-1,1])(t.x),t.y=x([0,e.clientRect.height],[1,-1])(t.y),t}).start(function(t){e.mouseX=t.x,e.mouseY=t.y});case 3:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),methods:{start:function(t){var e=this,n=t.scene,r=t.camera;_.dirLight1=new c["c"](16777215,1),_.dirLight1.position.set(1,0,1),n.add(_.dirLight1),_.dirLight2=new c["c"](15724527,.5),_.dirLight2.position.set(-1,0,1),n.add(_.dirLight2),_.cubes=[];for(var a=0;a<5;a++){var o=new c["f"](1,1,1),i=new c["j"]({color:16777215}),s=new c["h"](o,i),l=new c["i"]({color:3355443,wireframe:!0}),p=new c["h"](o,l);p.scale.set(1.01,1.01,1.01);var d=new c["e"];d.add(s),d.add(p),d.position.y=6-3*a,_.cubes.push(d),n.add(d)}_.cubeTween=Object(u["d"])({from:-8,to:8,flip:1/0,duration:4e3,ease:u["a"].easeInOut}).start(function(t){return e.masterX=t}),r.position.z=10},update:function(t){var e=this,n=t.camera;j.setFromCamera(new c["r"](this.mouseX,this.mouseY),n),O=j.intersectObjects(_.cubes,!0),this.masterRotation+=.01;var r=O.map(function(t){return t.object}),a=_.cubes.map(function(t){return t.children[0]});a.filter(function(t){return!r.includes(t)}).forEach(function(t){t.parent.position.x=e.masterX,t.parent.rotation.x=t.parent.rotation.z=e.masterRotation}),a.forEach(function(t){var e=16777215;O.find(function(e){return e.object==t})&&(e=16711680),t.material.color.set(e)})}}},z=R,C=(n("a3d5"),Object(h["a"])(z,m,w,!1,null,null,null));C.options.__file="WanderingNav.vue";var S=C.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("vue-three-wrap",{attrs:{start:t.start,update:t.update}})},k=[],E=(n("026f"),{});function L(t,e,n,r,a){a=void 0!==a&&a,a&&t.parent.localToWorld(t.position),t.position.sub(e),t.position.applyAxisAngle(n,r),t.position.add(e),a&&t.parent.worldToLocal(t.position),t.rotateOnAxis(n,r)}var K={components:{"vue-three-wrap":s["a"]},methods:{start:function(t){var e=t.scene,n=t.camera;n.position.z=10;var r=new c["j"]({color:6710886,side:c["d"]}),a=new c["l"](20,10);E.plane=new c["h"](a,r),E.plane.position.y=-4,E.plane.rotation.set(c["g"].degToRad(90),0,0),e.add(E.plane);var o=new c["p"](4,64,64);E.sphere=new c["h"](o,r),e.add(E.sphere),E.lights=[{light:new c["m"](16777215,1),speed:.03},{light:new c["m"](16711680,1),speed:.024},{light:new c["m"](65280,1),speed:.027}],E.lights.forEach(function(t){var n=t.light;n.castShadow=!0,n.position.x=-3,n.position.z=5,e.add(n)})},update:function(){E.lights.forEach(function(t){L(t.light,new c["s"](0),new c["s"](0,1,0),t.speed)})}}},X=K,T=Object(h["a"])(X,P,k,!1,null,null,null);T.options.__file="HoverLight.vue";var $=T.exports,M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("vue-three-wrap",{staticClass:"pyramid-follow",attrs:{start:t.start,update:t.update}})},Y=[],A=u["c"].interpolate,F={data:function(){return{raycaster:new c["n"],mouseX:0,mouseY:0,canvasSelector:"canvas",buildPointer:!0}},mounted:function(){var t=Object(g["a"])(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,b(this.canvasSelector);case 2:this.buildPointer&&Object(u["b"])().pipe(function(t){return t.x-=e.clientRect.left,t.y-=e.clientRect.top,t.x=A([0,e.clientRect.width],[-1,1])(t.x),t.y=A([0,e.clientRect.height],[1,-1])(t.y),t}).start(function(t){e.mouseX=t.x,e.mouseY=t.y});case 3:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),methods:{updateRaycaster:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=this.mouseX,a=this.mouseY;null!==e&&(r=e.hasOwnProperty("x")?e.x:r,a=e.hasOwnProperty("y")?e.y:a,n&&(r=A([0,this.clientRect.width],[-1,1])(r),a=A([0,this.clientRect.height],[1,-1])(a))),this.raycaster.setFromCamera(new c["r"](r,a),t)}}},q=n("9b02"),H=n.n(q),J={},N={mixins:[F,y["a"]],components:{"vue-three-wrap":s["a"]},data:function(){return{canvasSelector:".pyramid-follow"}},methods:{start:function(t){var e=t.scene,n=t.camera;J.light=new c["m"](14540253,2),J.light.castShadow=!0,J.light.position.x=-5,J.light.position.y=10,e.add(J.light),J.accent=new c["m"](13413034,.5),J.accent.castShadow=!0,J.accent.position.x=5,J.accent.position.z=-4,e.add(J.accent);var r=new c["j"]({color:6710886,side:c["d"]}),a=new c["l"](20,10);J.plane=new c["h"](a,r),J.plane.position.y=-4,J.plane.rotation.set(c["g"].degToRad(90),0,0),e.add(J.plane);var o=new c["b"](2,3,4);J.tetra=new c["h"](o,r),e.add(J.tetra),n.position.z=10},update:function(t){var e=t.camera;this.updateRaycaster(e);var n=this.raycaster.intersectObject(J.plane);if(n.length){var r=H()(n,"[0].point",null);J.tetra.position.set(r.x,r.y+1,r.z)}}}},W=N,D=Object(h["a"])(W,M,Y,!1,null,null,null);D.options.__file="PyramidFollow.vue";var I=D.exports,B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("vue-three-wrap",{ref:"canvas",staticClass:"shape-clicker",attrs:{start:t.start}})},G=[],Q={},U=[],V=null,Z=null,tt=null,et={mixins:[F,y["a"]],components:{"vue-three-wrap":s["a"]},mounted:function(){this.$el.parentNode.addEventListener("mousedown",this.onClick)},data:function(){return{canvasSelector:".shape-clicker"}},methods:{start:function(t){var e=t.scene,n=t.camera;Q.light=new c["m"](14540253,2),Q.light.castShadow=!0,Q.light.position.x=-5,Q.light.position.y=10,e.add(Q.light);var r=new c["j"]({color:"hsl(0, 50%, 50%)"}),a=new c["q"](10,3,100,16);Q.torusKnot=new c["h"](a,r),Q.torusKnot.position.set(-35,-30,-60),e.add(Q.torusKnot);var o=new c["j"]({color:"hsl(250, 50%, 50%)"});Q.torusKnot2=new c["h"](a,o),Q.torusKnot2.position.set(0,30,-60),e.add(Q.torusKnot2);var i=new c["j"]({color:"hsl(200, 50%, 50%)"});Q.torusKnot3=new c["h"](a,i),Q.torusKnot3.position.set(35,-30,-60),e.add(Q.torusKnot3),U=[Q.torusKnot,Q.torusKnot2,Q.torusKnot3],n.position.z=10,Z={x:n.position.x,y:n.position.y,z:n.position.z}},onClick:function(t){var e=this.$refs.canvas._props.camera;this.updateRaycaster(e,{x:t.layerX,y:t.layerY});var n=this.raycaster.intersectObjects(U);if(n.length){V&&V.stop();var r=n[0].object,a=r.position,o={x:a.x,y:a.y,z:Z.z+20};tt==r?(o=Z,tt=null):tt=r,V=Object(u["d"])({from:{x:e.position.x,y:e.position.y,z:e.position.z},to:{x:o.x,y:o.y,z:o.z},duration:1e3}).start(function(t){e.position.set(t.x,t.y,t.z)})}}}},nt=et,rt=Object(h["a"])(nt,B,G,!1,null,null,null);rt.options.__file="ShapeClicker.vue";var at=rt.exports,ot=n("e740"),it=n.n(ot),st={components:{"breathing-tower":v,"wandering-spheres":S,"revolving-lights":$,"trailing-pyramid":I,"shape-clicker":at},data:function(){return{toRender:["breathing-tower","revolving-lights","trailing-pyramid","wandering-spheres","shape-clicker"]}},methods:{startCase:it.a}},ct=st,ut=(n("5c0b"),Object(h["a"])(ct,r,a,!1,null,null,null));ut.options.__file="App.vue";e["a"]=ut.exports},"5c0b":function(t,e,n){"use strict";var r=n("15b0"),a=n.n(r);a.a},a3d5:function(t,e,n){"use strict";var r=n("289f"),a=n.n(r);a.a}});
//# sourceMappingURL=app.1774753d.js.map