(function(e){function t(t){for(var r,i,c=t[0],s=t[1],u=t[2],p=0,f=[];p<c.length;p++)i=c[p],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);l&&l(t);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var s=n[c];0!==o[s]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"033f":function(e,t,n){"use strict";n("824b")},"034f":function(e,t,n){"use strict";n("85ec")},"38dd":function(e,t,n){"use strict";n("bc1f")},5272:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),n("router-link",{attrs:{to:"/about"}},[e._v("About me")]),e._v(" | "),n("router-link",{attrs:{to:"/jokes"}},[e._v("Jokes")]),e._v(" | "),n("router-link",{attrs:{to:"/weather"}},[e._v("Weather")])],1),n("router-view")],1)},a=[],i=(n("034f"),n("2877")),c={},s=Object(i["a"])(c,o,a,!1,null,null,null),u=s.exports,l=n("9483");Object(l["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var p=n("8c4f"),f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),r("HelloWorld",{attrs:{msg:"Welcome to my Vue.js App"}})],1)},d=[],h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))])])},m=[],v={name:"HelloWorld",props:{msg:String}},g=v,b=(n("5d06"),Object(i["a"])(g,h,m,!1,null,"43f48a4c",null)),_=b.exports,y={name:"Home",components:{HelloWorld:_}},k=y,w=Object(i["a"])(k,f,d,!1,null,null,null),j=w.exports,O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"about"},[n("h1",[e._v("My name is Roman Divkovic")]),n("getcomponent",{attrs:{info:"Write a litte bit about you",getMsg:"And this is an about page about me"}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],attrs:{id:"input",type:"text",placeholder:"Write here"},domProps:{value:e.value},on:{input:function(t){t.target.composing||(e.value=t.target.value)}}}),n("br"),n("h4",[e._v(e._s(e.value))])],1)},x=[],M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v(e._s(e.getMsg))]),n("p",[e._v("I'm 28 years old and this is a school project")]),n("h3",[e._v(" "+e._s(e.info))])])},S=[],C=(n("a9e3"),{name:"myComp",props:{getMsg:String,info:String,age:Number}}),P=C,A=Object(i["a"])(P,M,S,!1,null,null,null),W=A.exports,E={name:"About",components:{getcomponent:W},data:function(){return{value:""}},computed:{n:function(){return this.value}},methods:{onClick:function(){}}},D=E,J=(n("e76e"),Object(i["a"])(D,O,x,!1,null,null,null)),$=J.exports,N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("h1",[e._v("Getting programming jokes or general to display")]),e.jokes?n("dl",[e._l(e.jokes,(function(t){return[n("ul",{key:t.id,attrs:{id:"test"}},[n("li",[e._v(" Type: "+e._s(t.type))]),n("dt",[e._v(e._s(t.setup))]),n("dd",{style:e.styleObject},[e._v(e._s(t.punchline))])])]}))],2):n("p",[e._v("Getting jokes...")]),n("b-button",{attrs:{id:"button",variant:"primary"},on:{click:e.changeJokes}},[e._v("Click here to change to general")]),n("br"),n("b-button",{attrs:{id:"button",variant:"primary"},on:{click:e.changeBack}},[e._v("Click here to change to programming")])],1)},H=[],T=n("bc3a"),B=n.n(T),F={name:"fetch",created:function(){var e=this;B.a.get("https://official-joke-api.appspot.com/jokes/programming/ten").then((function(t){e.jokes=t.data})).catch((function(t){e.errors.push(t)}))},data:function(){return{jokes:null,styleObject:{color:"grey",fontSize:"20px"}}},props:{},methods:{changeJokes:function(){var e=this;B.a.get("https://official-joke-api.appspot.com/random_ten").then((function(t){e.jokes=t.data})).catch((function(t){e.errors.push(t)}))},changeBack:function(){var e=this;B.a.get("https://official-joke-api.appspot.com/jokes/programming/ten").then((function(t){e.jokes=t.data})).catch((function(t){e.errors.push(t)}))}}},q=F,I=(n("033f"),Object(i["a"])(q,N,H,!1,null,"ddd75194",null)),G=I.exports,V=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"this-page"}},[n("section",[n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.city,expression:"city"}],staticClass:"search",attrs:{type:"text",placeholder:"Search for a city and press enter"},domProps:{value:e.city},on:{keypress:e.getWeather,input:function(t){t.target.composing||(e.city=t.target.value)}}})]),e.weather.main?n("div",[n("p",{staticClass:"get-city"},[e._v(e._s(e.weather.name)+", "+e._s(e.weather.sys.country))]),n("p",{staticClass:"Date"},[e._v(" "+e._s(e.dateBuilder()))]),n("p",{attrs:{id:"temperature"}},[e._v(e._s(Math.round(e.weather.main.temp))+"°c")]),n("p",{attrs:{id:"weather"}},[e._v(e._s(e.weather.weather[0].main))]),n("p",{staticClass:"hi-lo"},[e._v(" "+e._s(Math.round(e.weather.main.temp_min))+"°c / "+e._s(Math.round(e.weather.main.temp_max))+"°c ")])]):n("div",[n("p",{attrs:{id:"p"}},[e._v("Cant get the weather right now")])])])])},z=[],R=(n("99af"),{created:function(){var e=this;B.a.get("".concat(this.url,"weather?q=gothenburg&units=metric&APPID=").concat(this.key)).then((function(t){e.weather=t.data})).catch((function(t){e.errors.push(t)}))},data:function(){return{key:"6e14ee8cdb51cf3777c97628f3ae1998",url:"https://api.openweathermap.org/data/2.5/",city:null,weather:[]}},methods:{getWeather:function(e){var t=this;"Enter"===e.key&&B.a.get("".concat(this.url,"weather?q=").concat(this.city,"&units=metric&APPID=").concat(this.key)).then((function(e){t.weather=e.data})).catch((function(e){t.errors.push(e)}))},dateBuilder:function(){var e=new Date,t=["January","February","March","April","May","June","July","August","September","October","November","December"],n=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],r=n[e.getDay()],o=e.getDate(),a=t[e.getMonth()],i=e.getFullYear();return"".concat(r," \n                ").concat(o," \n                ").concat(a,"\n                ").concat(i)}}}),Y=R,K=(n("38dd"),Object(i["a"])(Y,V,z,!1,null,null,null)),L=K.exports;r["default"].use(p["a"]);var Q=[{path:"/",name:"Home",component:j},{path:"/about",name:"About",component:$},{path:"/jokes",name:"jokes",component:G},{path:"/weather",name:"weather",component:L}],U=new p["a"]({routes:Q}),X=U,Z=n("2f62");r["default"].use(Z["a"]);var ee=new Z["a"].Store({state:{},mutations:{},actions:{},modules:{}}),te=n("5f5b"),ne=n("b1e0");n("f9e3"),n("2dd8");r["default"].use(te["a"]),r["default"].use(ne["a"]),r["default"].config.productionTip=!1,new r["default"]({router:X,store:ee,render:function(e){return e(u)}}).$mount("#app")},"5d06":function(e,t,n){"use strict";n("5272")},"824b":function(e,t,n){},"85ec":function(e,t,n){},"91aa":function(e,t,n){},bc1f:function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.919f9ca4.png"},e76e:function(e,t,n){"use strict";n("91aa")}});
//# sourceMappingURL=app.1d82cdc5.js.map