webpackJsonp([1],{Jg55:function(t,s){},NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("IvJb"),n={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},staticRenderFns:[]};var a=e("C7Lr")({name:"App"},n,!1,function(t){e("Jg55")},"data-v-a1ed10d2",null).exports,r=e("zO6J"),o={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"ui-header"},[s("div",{staticClass:"ui-back"},[s("i",{staticClass:"fa fa-angle-left fa-lg",attrs:{"aria-hidden":"true"}}),this._v("\n      返回\n    ")])])}]};var l=e("C7Lr")({data:function(){return{title:"这里是一个测试"}},created:function(){}},o,!1,function(t){e("Q6wu")},null,null).exports,c=e("7+S+"),u=(Boolean,Boolean,Boolean,String,String,Boolean,String,Object,Array,{name:"x-button",props:{type:{default:"default"},disabled:Boolean,mini:Boolean,plain:Boolean,text:String,actionType:String,showLoading:Boolean,link:[String,Object],gradients:{type:Array,validator:function(t){return 2===t.length}}},methods:{onClick:function(){!this.disabled&&Object(c.a)(this.link,this.$router)}},computed:{noBorder:function(){return Array.isArray(this.gradients)},buttonStyle:function(){if(this.gradients)return{background:"linear-gradient(90deg, "+this.gradients[0]+", "+this.gradients[1]+")",color:"#FFFFFF"}},classes:function(){return[{"weui-btn_disabled":!this.plain&&this.disabled,"weui-btn_plain-disabled":this.plain&&this.disabled,"weui-btn_mini":this.mini,"vux-x-button-no-border":this.noBorder},this.plain?"":"weui-btn_"+this.type,this.plain?"weui-btn_plain-"+this.type:"",this.showLoading?"weui-btn_loading":""]}}}),d={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("button",{staticClass:"weui-btn",class:t.classes,style:t.buttonStyle,attrs:{disabled:t.disabled,type:t.actionType},on:{click:t.onClick}},[t.showLoading?e("i",{staticClass:"weui-loading"}):t._e(),t._v(" "),t._t("default",[t._v(t._s(t.text))])],2)},staticRenderFns:[]};var h=e("C7Lr")(u,d,!1,function(t){e("tD2p")},null,null).exports,v={components:{XButton:h},data:function(){return{title:""}},methods:{show:function(){this.$router.push({name:"邀您加入群聊"})}}},f={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"ui-footer"},[s("div",{staticClass:"ui-invite"},[this._v("亦柔邀请你加入群聊")]),this._v(" "),s("input",{staticClass:"ui-btn",attrs:{type:"button",value:"加入群聊"},on:{click:this.show}}),this._v(" "),this._m(0)])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"ui-role"},[s("p",[this._v("1.您和群里其他人都不是朋友关系，请注意隐私安全。")]),this._v(" "),s("p",[this._v("2.该群聊人数较多，为减少新信息给您带来的打扰，建议进群后屏蔽消息通知。")])])}]};var _=e("C7Lr")(v,f,!1,function(t){e("ov49")},"data-v-a47bfb78",null).exports,p={components:{Header:l,Footer:_},name:"Main",data:function(){return{msg:""}},created:function(){}},m={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("Header"),this._v(" "),this._m(0),this._v(" "),s("Footer")],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"main"},[s("div",{staticClass:"ui-logo"}),this._v(" "),s("div",{staticClass:"ui-title"},[this._v("这是一个测试")]),this._v(" "),s("div",{staticClass:"ui-num"},[this._v("352人")])])}]};var g=e("C7Lr")(p,m,!1,function(t){e("ufG+")},null,null).exports,w={name:"Show",data:function(){return{now:""}},created:function(){this.getNowTime(),this.go()},methods:{getNowTime:function(){var t=new Date,s="";s=t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes();var e=t.getHours()+":"+s;this.now=e},go:function(){var t=this,s=1;document.body.scrollTop="10";var e=setInterval(function(){switch(s){case 1:t.$refs.go1.style.display="block";break;case 2:t.$refs.go2.style.display="block";break;case 3:t.$refs.go3.style.display="block";break;case 4:t.$refs.go4.style.display="block";break;case 5:t.$refs.go5.style.display="block";break;case 6:t.$refs.go6.style.display="block";break;case 7:t.$refs.go7.style.display="block";break;case 8:clearInterval(e)}s++;var i=document.documentElement.scrollHeight||document.body.scrollHeight;document.documentElement.scrollTop=i,document.body.scrollTop=i},800)}}},b={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"show"},[e("div",{ref:"go1",staticClass:"ui-show-step1"},[t._v(t._s(t.now))]),t._v(" "),e("div",{ref:"go2",staticClass:"ui-show-step2"},[t._v('"'),e("span",[t._v("亦柔")]),t._v('"邀请你加入了群聊，群聊参与人还有: 这是阿是会撒娇德哈卡烧烤、这是阿是会撒娇德哈卡烧烤、这是阿是会撒娇德哈卡烧烤、这是阿是会撒娇德哈卡烧烤、这是阿是会撒娇德哈卡烧烤、这是阿是会撒娇德哈卡烧烤、这是阿是会撒娇德哈卡烧烤、这是阿是会撒娇德哈卡烧烤、这是阿是会撒娇德哈卡烧烤、这是阿是会撒娇德哈卡烧烤、这是阿是会撒娇德哈卡烧烤、这是阿是会撒娇德哈卡烧烤、这是阿是会撒娇德')]),t._v(" "),e("div",{ref:"go3",staticClass:"ui-show-step3 clearfix"},[e("div",{staticClass:"show-left"}),t._v(" "),t._m(0)]),t._v(" "),e("div",{ref:"go4",staticClass:"ui-show-step3 clearfix"},[e("div",{staticClass:"show-left"}),t._v(" "),t._m(1)]),t._v(" "),e("div",{ref:"go5",staticClass:"ui-show-step3 clearfix"},[e("div",{staticClass:"show-left"}),t._v(" "),t._m(2)]),t._v(" "),e("div",{ref:"go6",staticClass:"ui-show-step3 clearfix"},[e("div",{staticClass:"show-left"}),t._v(" "),t._m(3)]),t._v(" "),e("div",{ref:"go7",staticClass:"ui-show-step4"},[t._v('\n      你被"'),e("span",[t._v("群主")]),t._v('"移除群聊\n    ')])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"show-right"},[s("div",{staticClass:"show-person"},[this._v("我们不一样")]),this._v(" "),s("div",{staticClass:"show-img-01"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"show-right"},[s("div",{staticClass:"show-person"},[this._v("我们不一样")]),this._v(" "),s("div",{staticClass:"show-img-02"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"show-right"},[s("div",{staticClass:"show-person"},[this._v("我们不一样")]),this._v(" "),s("div",{staticClass:"show-img-03"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"show-right"},[s("div",{staticClass:"show-person"},[this._v("我们不一样")]),this._v(" "),s("div",{staticClass:"show-text"},[this._v("\n          这里是一段很啰嗦的废话，这里是一段很啰嗦的废话，这里是一段很啰嗦的废话，这里是一段很啰嗦的废话，这里是一段很啰嗦的废话，这里是一段很啰嗦的废话，这里是一段很啰嗦的废话。\n        ")])])}]};var C=e("C7Lr")(w,b,!1,function(t){e("diUX")},null,null).exports;i.a.use(r.a);var y=new r.a({hashbang:!0,mode:"history",routes:[{path:"/",name:"群聊邀请",component:g},{path:"/show",name:"邀您加入群聊",component:C}]});y.beforeEach(function(t,s,e){document.getElementById("titleId").innerHTML=t.name,e()});var k=y,$=e("DMPO"),E=e.n($);e("wiGe");i.a.config.productionTip=!1,i.a.use(E.a),new i.a({el:"#app",router:k,components:{App:a},template:"<App/>"})},Q6wu:function(t,s){},diUX:function(t,s){},ov49:function(t,s){},tD2p:function(t,s){},"ufG+":function(t,s){},wiGe:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.a5fe16c640269a6efdb2.js.map