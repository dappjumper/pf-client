(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{2368:function(t,e,n){"use strict";var a=n("445d"),i=n.n(a);i.a},"2b3a":function(t,e,n){},"445d":function(t,e,n){},"8b24":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-page",[n("BotController",{on:{status:t.botStatusChanged}})],1)},i=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"fullscreen",class:{state:!0}},[n("Spinner",{attrs:{active:"loading"==t.state}}),n("div",{staticClass:"form supercenter"},[n("q-form",{staticClass:"q-gutter-md",on:{submit:t.onSubmit,reset:t.onReset}},[n("q-input",{attrs:{filled:"",label:"API key *",hint:"Your telegram bot API key","lazy-rules":"",rules:[function(t){return t&&t.length>0||"Please type something"}]},model:{value:t.apikey_input,callback:function(e){t.apikey_input=e},expression:"apikey_input"}}),n("q-toggle",{attrs:{label:"Allow this service to use your key for additional functionality"},model:{value:t.accept,callback:function(e){t.accept=e},expression:"accept"}}),n("div",[n("q-btn",{attrs:{label:"Submit",type:"submit",color:"primary"}}),n("q-btn",{staticClass:"q-ml-sm",attrs:{label:"Back",type:"reset",color:"primary",flat:""}})],1)],1)],1)],1)},s=[],c=n("ded3"),l=n.n(c),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"loadContainer",class:{active:t.active}},[n("div",{staticClass:"loader"})])},u=[],p={name:"Spinner",props:["active"],data:function(){return{}},computed:{},mounted:function(){},methods:{}},f=p,d=(n("8e33"),n("2877")),m=Object(d["a"])(f,r,u,!1,null,"54be8e25",null),h=m.exports,b=n("2f62"),g={name:"BotController",props:["serviceDomain"],components:{Spinner:h},data:function(){return{state:"loading",apikey_input:"",accept:!1}},computed:{},mounted:function(){var t=this.$store.state.localBot.apikey;this.accept=this.$store.state.localBot.allowInternal,t?(this.state="loading",this.fetchInitialBotData(t)):this.state="initial"},methods:l()(l()({},Object(b["b"])("localBot",["externalQuery"])),{},{fetchInitialBotData:function(t){var e=this;this.externalQuery({method:"getMe",apikey:t||this.apikey_input}).then((function(t){console.log("Resultaing",t),e.state="initial"})).catch((function(t){e.$q.notify({type:"negative",message:"API key did not work",position:"bottom-right"}),console.log(t),e.state="initial"}))},onSubmit:function(){this.state="loading",this.fetchInitialBotData()},onReset:function(){this.apikey_input="",this.$router.push("/")}})},v=g,y=(n("2368"),n("0378")),k=n("27f9"),C=n("9564"),_=n("9c40"),B=n("eebe"),q=n.n(B),w=Object(d["a"])(v,o,s,!1,null,"a6b0e086",null),I=w.exports;q()(w,"components",{QForm:y["a"],QInput:k["a"],QToggle:C["a"],QBtn:_["a"]});var S={name:"PageIndex",data:function(){return{}},mounted:function(){},components:{BotController:I},methods:{botStatusChanged:function(t){console.log("Status changed: "+t)}}},x=S,Q=(n("ca61"),n("9989")),$=Object(d["a"])(x,a,i,!1,null,"545b5703",null);e["default"]=$.exports;q()($,"components",{QPage:Q["a"]})},"8e33":function(t,e,n){"use strict";var a=n("fcc0"),i=n.n(a);i.a},ca61:function(t,e,n){"use strict";var a=n("2b3a"),i=n.n(a);i.a},fcc0:function(t,e,n){}}]);