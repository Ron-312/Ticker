(function(t){function e(e){for(var o,a,i=e[0],c=e[1],l=e[2],p=0,f=[];p<i.length;p++)a=i[p],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&f.push(r[a][0]),r[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);u&&u(e);while(f.length)f.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],o=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(o=!1)}o&&(s.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},r={app:0},s=[];function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("85ec"),r=n.n(o);r.a},1355:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},s=[],a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"ticker",style:{backgroundImage:"url("+n("d68e")+")"}},[t._m(0),t.msgsToShow.length?o("transition-group",{attrs:{name:"fade",tag:"span"}},t._l(t.msgsToShow,(function(e){return o("div",{key:e.name,staticClass:"msgs"},[o("div",{staticClass:"msg-container flex column",style:{backgroundImage:"url("+n("d199")+")"}},[o("div",{staticClass:"flex justify-cont-end"},[o("div",{staticClass:"flex column box-margin"},[o("div",{staticClass:"name-cont"},[o("h3",[t._v(t._s(e.name))])]),o("div",{staticClass:"date-cont"},[o("h5",[t._v(t._s(e.date))])])]),o("div",{staticClass:"msg-pic-cont"},[o("img",{staticClass:"msg-pic",attrs:{src:e.profilePic,alt:""}})])]),o("div",{staticClass:"msg-cont"},[o("h4",[t._v(t._s(e.text))])])])])})),0):t._e()],1)},i=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"title-container"},[o("img",{staticClass:"title-pic",attrs:{src:n("f773"),alt:""}})])}],c=[{profilePic:"https://robohash.org/22",name:"juju",date:"20/12/2020",text:"Yo! Whats up?"},{profilePic:"https://robohash.org/24",name:"pupu",date:"22/12/2020",text:"Answer me!"},{profilePic:"https://robohash.org/26",name:"gaga",date:"23/12/2020",text:"Are you ok?"},{profilePic:"https://robohash.org/27",name:"lele",date:"25/12/2020",text:"Can i help you?"},{profilePic:"https://robohash.org/222",name:"nana",date:"30/12/2020",text:"What are you doing?"},{profilePic:"https://robohash.org/25",name:"toto",date:"31/12/2020",text:"How you doin'?"},{profilePic:"https://robohash.org/2124",name:"fifi",date:"01/01/2020",text:"A new Year!"},{profilePic:"https://robohash.org/2534",name:"lala",date:"03/01/2020",text:"Your profile pic is so cool!"},{profilePic:"https://robohash.org/214",name:"pipi",date:"07/01/2020",text:"Yo! Why so silent?"},{profilePic:"https://robohash.org/2",name:"bloop",date:"14/01/2020",text:"Do I love you? I love you!"}];function l(t){return c[t]}var u={getNextMsg:l},p={data:function(){return{msgNum:0,msgs:[]}},created:function(){this.startInterval()},methods:{getMsg:function(t){var e=u.getNextMsg(t);this.msgNum++,this.msgs.unshift(e)},startInterval:function(){var t=this;setInterval((function(){10==t.msgs.length?(t.msgs=[],t.msgNum=0):t.getMsg(t.msgNum)}),3e3)}},computed:{msgsToShow:function(){if(this.msgs.length<3)return this.msgs;for(var t=[],e=0;e<3;e++)t.push(this.msgs[e]);return t}}},f=p,g=(n("7d5b"),n("2877")),h=Object(g["a"])(f,a,i,!1,null,null,null),d=h.exports,m={name:"App",components:{HelloWorld:d}},v=m,b=(n("034f"),Object(g["a"])(v,r,s,!1,null,null,null)),x=b.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(x)}}).$mount("#app")},"7d5b":function(t,e,n){"use strict";var o=n("1355"),r=n.n(o);r.a},"85ec":function(t,e,n){},d199:function(t,e,n){t.exports=n.p+"img/post_bg.1d57288f.png"},d68e:function(t,e,n){t.exports=n.p+"img/bg.74b3cd34.png"},f773:function(t,e,n){t.exports=n.p+"img/title.59df1d90.png"}});
//# sourceMappingURL=app.af0eb21d.js.map