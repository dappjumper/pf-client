(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"5f47":function(t,e,o){"use strict";var n=o("7276"),a=o.n(n);a.a},7276:function(t,e,o){},"8b24":function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{key:t.stateNonce},["initial"==t.state?o("q-page",{staticClass:"flex flex-center"},[o("ApiKeyEntry",{on:{"bot-data":t.useBot}})],1):t._e(),"ready"==t.state?o("q-page",{staticClass:"flex flex-center"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-sm-12"},[o("TelegramBot",{attrs:{bot:t.localBot}})],1),o("div",{staticClass:"col-sm-12"},[o("q-btn",{attrs:{color:"red"},on:{click:t.logout}},[t._v("\n          Log out\n        ")])],1)])]):t._e()],1)},a=[],i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("q-form",{attrs:{autofocus:"",action:t.endpoint,method:"post"},on:{submit:[function(t){t.preventDefault()},t.onSubmit]}},[o("q-input",{attrs:{label:"Enter API Key",name:"apikey",placeholder:"Enter your key",type:"text",rules:[function(t){return t&&t.length>0||"This field can not be blank"}]},model:{value:t.apikey,callback:function(e){t.apikey=e},expression:"apikey"}}),o("br"),o("q-btn",{attrs:{label:"Submit",type:"submit",color:"primary"}}),o("q-btn",{staticClass:"q-ml-sm",attrs:{label:"Reset",type:"reset",color:"primary",flat:""}})],1)},s=[],l=(o("c975"),o("bc3a")),c=o.n(l),r={name:"ApiKeyEntry",props:{},data:function(){return{localBot:{},apikey:"",endpoint:window.location.href.indexOf("localhost")>-1?"http://localhost:8000":"https://pf-api.dappjump.io"}},methods:{customNotification:function(t,e){this.$q.notify({type:e||"info",message:t,position:"bottom-right"})},customError:function(t){this.$q.notify({type:"negative",message:t||"Failed contacting server",position:"bottom-right"})},submitError:function(){this.customError("Failed contacting server")},onSubmit:function(t){this.tryApiKey(this.apikey)},tryApiKey:function(t){var e=this;c.a.post(this.endpoint+"/telegram/checkIn",{},{headers:{"X-API-KEY":t}}).then((function(t){t.data.error?e.customError(t.data.error||"API Key did'nt work"):(e.customNotification("Successfully checked in!","positive"),t.data.apikey=e.apikey,e.$emit("bot-data",t.data))})).catch(function(t){this.submitError(t)}.bind(this))}}},u=r,p=o("2877"),f=o("0378"),d=o("27f9"),m=o("9c40"),h=o("eebe"),b=o.n(h),y=Object(p["a"])(u,i,s,!1,null,null,null),g=y.exports;b()(y,"components",{QForm:f["a"],QInput:d["a"],QBtn:m["a"]});var v=o("d7eb"),k={name:"PageIndex",data:function(){return{localBot:{},stateNonce:0,state:"initial"}},mounted:function(){this.getInitialState()},components:{ApiKeyEntry:g,TelegramBot:v["a"]},methods:{logout:function(){localStorage.clear(),this.state="initial",this.stateNonce++},useBot:function(t){console.log(t),localStorage.setItem("localBot",JSON.stringify(t)),this.state="ready",this.localBot=t,this.stateNonce++},getInitialState:function(){var t=localStorage.getItem("localBot");null!==t?(this.localBot=JSON.parse(t),this.state="ready"):this.state="initial",this.stateNonce++}}},B=k,E=(o("5f47"),o("9989")),_=Object(p["a"])(B,n,a,!1,null,"e6ef4cca",null);e["default"]=_.exports;b()(_,"components",{QPage:E["a"],QBtn:m["a"]})},d7eb:function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",t._l(t.localBot.bot,(function(e,n,a){return o("p",{key:a},[o("b",[t._v(t._s(n)+": ")]),t._v(t._s(e)),o("br")])})),0)},a=[],i=(o("c975"),{name:"TelegramBot",props:["bot"],data:function(){return{localBot:{},endpoint:window.location.href.indexOf("localhost")>-1?"http://localhost:8000":"https://pf-api.dappjump.io"}},mounted:function(){this.localBot=this.bot},methods:{}}),s=i,l=o("2877"),c=Object(l["a"])(s,n,a,!1,null,null,null);e["a"]=c.exports}}]);