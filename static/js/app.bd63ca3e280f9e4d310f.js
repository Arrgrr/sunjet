webpackJsonp([1],{"1zVs":function(t,e){},"3bGq":function(t,e){},"88sp":function(t,e){},DVMH:function(t,e){},"Jdy+":function(t,e){},JwBw:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("7+uW"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view",{staticClass:"header",attrs:{name:"header"}}),this._v(" "),(this.isOpen=!0)?e("router-view",{staticClass:"container",attrs:{name:"search"}}):this._e(),this._v(" "),e("router-view",{staticClass:"container"}),this._v(" "),e("router-view",{staticClass:"footer",attrs:{name:"footer"}})],1)},staticRenderFns:[]};var n=i("VU/8")({data:function(){return{isOpen:!1}}},a,!1,function(t){i("Qlzr")},null,null).exports,r=i("mtWM"),l=i.n(r),c=i("Rf8U"),o=i.n(c),p=i("/ocq"),v={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home"},[t._m(0),t._v(" "),i("div",{staticClass:"item_container"},[i("router-link",{staticClass:"service_block",attrs:{to:"/services/"}},[i("img",{staticClass:"service_img",attrs:{src:"https://arrgrr.github.io/proMask/static/service01.png"}}),t._v(" "),i("p",{staticClass:"service_title"},[t._v("辦公室規劃設計")])]),t._v(" "),i("router-link",{staticClass:"service_block",attrs:{to:"/services/service02"}},[i("img",{staticClass:"service_img",attrs:{src:"https://arrgrr.github.io/proMask/static/service02.png"}}),t._v(" "),i("p",{staticClass:"service_title"},[t._v("專案廠房建置工程")])]),t._v(" "),i("router-link",{staticClass:"service_block",attrs:{to:"/services/service03"}},[i("img",{staticClass:"service_img",attrs:{src:"https://arrgrr.github.io/proMask/static/service03.png"}}),t._v(" "),i("p",{staticClass:"service_title"},[t._v("廠務各式修改維修工程")])]),t._v(" "),i("router-link",{staticClass:"service_block",attrs:{to:"/services/service04"}},[i("img",{staticClass:"service_img",attrs:{src:"https://arrgrr.github.io/proMask/static/service04.png"}}),t._v(" "),i("p",{staticClass:"service_title"},[t._v("無塵室產線各式加工件製品")])])],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"banner"},[e("div",{staticClass:"slogan"},[e("p",{attrs:{id:"slogan1"}},[this._v("專業工程規劃")]),this._v(" "),e("p",{attrs:{id:"slogan2"}},[this._v("品質永遠堅持")]),this._v(" "),e("p",{attrs:{id:"slogan3"}},[this._v("安全施工管理")])])])}]};var d=i("VU/8")({data:function(){return{}}},v,!1,function(t){i("JwBw")},"data-v-26b3147b",null).exports,u={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"about"},[e("div",{staticClass:"banner"}),this._v(" "),e("div",{staticClass:"content_container"},[e("div",{staticClass:"concept"},[e("img",{attrs:{src:"https://arrgrr.github.io/proMask/static/core_value.png",alt:"core_value"}})]),this._v(" "),e("div",{staticClass:"article"},[e("h1",[this._v("公司理念")]),this._v(" "),e("p",[this._v("本公司為專業生產半導體測試Socket、Pin、生產治具、測試板設計、製造與 測試機台電路板維修之廠商。針對各個領域培養專業工程人員，並配合客戶各種不同的需求發展先進的產品與技術，以迎合市場日趨嚴苛的要求。")]),this._v(" "),e("p",[this._v("這幾年在團隊合作努力下，以品質、技術、創新與服務為導向建立不少成功案例並贏得客戶青睞。在socket 領域上我們有最新POP(Package on Package)產品提供手機晶片測試，並提供各式類型socket pin 供客戶選擇以達到最佳測試效果。也積極開發各式Handler的change kit與生產工具來滿足量產需求，在客戶成本考量上提供各式ATE測試機台電路板維修來降低生產成本。另外也開發出不少PCB測試板(load board, probe card, burn-in board 等)以滿足工程與量產需求，進而達到完整測試解決方案(Total Solution)。")])])])])}]};var h=i("VU/8")({data:function(){return{}}},u,!1,function(t){i("v+92")},null,null).exports,f={data:function(){return{isOpen:!0}},methods:{active_item:function(t){for(var e=document.getElementsByClassName("menu"),i=0;i<e.length;i++)e[i].classList.remove("menu_act");t.target.classList.add("menu_act"),console.log(t.target.classList)}}},_={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"service"},[i("div",{staticClass:"service_container"},[i("div",{staticClass:"menu_sec"},[i("h3",[t._v("我們的服務")]),t._v(" "),i("router-link",{staticClass:"menu",attrs:{to:"/services/"},nativeOn:{click:function(e){return t.active_item(e)}}},[i("span"),t._v(" 辦公室規劃設計工程\n      ")]),t._v(" "),i("router-link",{staticClass:"menu",attrs:{to:"/services/service02"},nativeOn:{click:function(e){return t.active_item(e)}}},[i("span"),t._v("專案廠房建置工程\n      ")]),t._v(" "),i("router-link",{staticClass:"menu",attrs:{to:"/services/service03"},nativeOn:{click:function(e){return t.active_item(e)}}},[i("span"),t._v("廠務各式修改維修工程\n      ")]),t._v(" "),i("router-link",{staticClass:"menu",attrs:{to:"/services/service04"},nativeOn:{click:function(e){return t.active_item(e)}}},[i("span"),t._v("無塵室產線各式加工件製品\n      ")])],1),t._v(" "),i("router-view",{staticClass:"content"})],1)])},staticRenderFns:[]};var m=i("VU/8")(f,_,!1,function(t){i("sZle")},"data-v-364c8dc4",null).exports,g={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"works"},[i("div",{staticClass:"work_container"},[i("div",{staticClass:"filter_bar"},[i("div",{staticClass:"work_search"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.filterText,expression:"filterText"}],attrs:{type:"text",placeholder:"尋找"},domProps:{value:t.filterText},on:{input:function(e){e.target.composing||(t.filterText=e.target.value)}}})]),t._v(" "),i("div",{staticClass:"progress"},[i("p",[t._v("進度")]),t._v(" "),i("div",{staticClass:"switch",on:{click:function(e){return t.showAll()}}},[t._v("全部")]),t._v(" "),i("div",{staticClass:"switch",on:{click:function(e){return t.showDone()}}},[t._v("已完工")]),t._v(" "),i("div",{staticClass:"switch",on:{click:function(e){return t.showIng()}}},[t._v("進行中")])]),t._v(" "),i("div",{staticClass:"work_type"},[i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.displayer.all,expression:"displayer.all"}],attrs:{type:"checkbox",id:"allgud"},domProps:{checked:Array.isArray(t.displayer.all)?t._i(t.displayer.all,null)>-1:t.displayer.all},on:{click:function(e){return t.allTrue()},change:function(e){var i=t.displayer.all,s=e.target,a=!!s.checked;if(Array.isArray(i)){var n=t._i(i,null);s.checked?n<0&&t.$set(t.displayer,"all",i.concat([null])):n>-1&&t.$set(t.displayer,"all",i.slice(0,n).concat(i.slice(n+1)))}else t.$set(t.displayer,"all",a)}}}),t._v(" "),i("label",{attrs:{for:"allgud"}},[t._v("全部")])]),t._v(" "),i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.displayer.l1Open,expression:"displayer.l1Open"}],attrs:{type:"checkbox",id:"l1Open"},domProps:{checked:Array.isArray(t.displayer.l1Open)?t._i(t.displayer.l1Open,null)>-1:t.displayer.l1Open},on:{click:function(e){t.closeAll(),t.optIn01()},change:function(e){var i=t.displayer.l1Open,s=e.target,a=!!s.checked;if(Array.isArray(i)){var n=t._i(i,null);s.checked?n<0&&t.$set(t.displayer,"l1Open",i.concat([null])):n>-1&&t.$set(t.displayer,"l1Open",i.slice(0,n).concat(i.slice(n+1)))}else t.$set(t.displayer,"l1Open",a)}}}),t._v(" "),i("label",{attrs:{for:"l1Open"}},[t._v("辦公室規劃設計工程")])]),t._v(" "),i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.displayer.l2Open,expression:"displayer.l2Open"}],attrs:{type:"checkbox",id:"l2Open"},domProps:{checked:Array.isArray(t.displayer.l2Open)?t._i(t.displayer.l2Open,null)>-1:t.displayer.l2Open},on:{click:function(e){t.closeAll(),t.optIn02()},change:function(e){var i=t.displayer.l2Open,s=e.target,a=!!s.checked;if(Array.isArray(i)){var n=t._i(i,null);s.checked?n<0&&t.$set(t.displayer,"l2Open",i.concat([null])):n>-1&&t.$set(t.displayer,"l2Open",i.slice(0,n).concat(i.slice(n+1)))}else t.$set(t.displayer,"l2Open",a)}}}),t._v(" "),i("label",{attrs:{for:"l2Open"}},[t._v("廠務各式修改維修工程")])]),t._v(" "),i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.displayer.l3Open,expression:"displayer.l3Open"}],attrs:{type:"checkbox",id:"l3Open"},domProps:{checked:Array.isArray(t.displayer.l3Open)?t._i(t.displayer.l3Open,null)>-1:t.displayer.l3Open},on:{click:function(e){t.closeAll(),t.optIn03()},change:function(e){var i=t.displayer.l3Open,s=e.target,a=!!s.checked;if(Array.isArray(i)){var n=t._i(i,null);s.checked?n<0&&t.$set(t.displayer,"l3Open",i.concat([null])):n>-1&&t.$set(t.displayer,"l3Open",i.slice(0,n).concat(i.slice(n+1)))}else t.$set(t.displayer,"l3Open",a)}}}),t._v(" "),i("label",{attrs:{for:"l3Open"}},[t._v("專案廠房建置工程")])]),t._v(" "),i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.displayer.l4Open,expression:"displayer.l4Open"}],attrs:{type:"checkbox",id:"l4Open"},domProps:{checked:Array.isArray(t.displayer.l4Open)?t._i(t.displayer.l4Open,null)>-1:t.displayer.l4Open},on:{click:function(e){t.closeAll(),t.optIn04()},change:function(e){var i=t.displayer.l4Open,s=e.target,a=!!s.checked;if(Array.isArray(i)){var n=t._i(i,null);s.checked?n<0&&t.$set(t.displayer,"l4Open",i.concat([null])):n>-1&&t.$set(t.displayer,"l4Open",i.slice(0,n).concat(i.slice(n+1)))}else t.$set(t.displayer,"l4Open",a)}}}),t._v(" "),i("label",{attrs:{for:"l4Open"}},[t._v("無塵室產線各式加工件製品")])])])]),t._v(" "),i("div",{staticClass:"work_list"},[t._l(t.filterArray,function(e){return[1==e.finish||1==e.inprogress?[1==e.office||1==e.factoryFix||1==e.factoryBuild||1==e.machining?i("div",{key:e.index,staticClass:"work_item"},[i("img",{attrs:{src:e.img,alt:""}}),t._v(" "),i("p",{staticClass:"work_title"},[t._v(t._s(e.title))]),t._v(" "),i("div",{staticClass:"tag_block"},[i("div",{staticClass:"build_type"},[t._v(t._s(e.buildType))]),t._v(" "),1==e.finish?i("div",{staticClass:"tag_finish"},[t._v("已完工")]):t._e(),t._v(" "),1==e.inprogress?i("div",{staticClass:"tag_progress"},[t._v("進行中")]):t._e()])]):t._e()]:t._e()]})],2)])])},staticRenderFns:[]};var y=i("VU/8")({data:function(){return{isOpen:"",filterText:"",displayer:{l1Open:!0,l2Open:!0,l3Open:!0,l4Open:!0,all:!0},list1:[{img:"https://arrgrr.github.io/proMask/static/work.jpg",title:"XXXX設計工程",buildType:"辦公室規劃設計工程",office:!0,finish:!0},{img:"https://arrgrr.github.io/proMask/static/work.jpg",title:"aaaaa設計工程",buildType:"廠務各式修改維修工程",factoryFix:!0,inprogress:!0},{img:"https://arrgrr.github.io/proMask/static/work.jpg",title:"bbbbb設計工程",buildType:"專案廠房建置工程",factoryBuild:!0,finish:!0},{img:"https://arrgrr.github.io/proMask/static/work.jpg",title:"ccccc設計工程",buildType:"無塵室產線各式加工件製",machining:!0,finish:!0},{img:"https://arrgrr.github.io/proMask/static/work.jpg",title:"asasas設計工程",buildType:"無塵室產線各式加工件製",machining:!0,inprogress:!0},{img:"https://arrgrr.github.io/proMask/static/work.jpg",title:"abcabc設計工程",buildType:"廠務各式修改維修工程",factoryBuild:!0,finish:!0}]}},methods:{allTrue:function(){if(0==this.displayer.all){this.displayer.l1Open=!0,this.displayer.l2Open=!0,this.displayer.l3Open=!0,this.displayer.l4Open=!0;for(var t=0;t<this.list1.length;t++)"office"==this.list1[t].office?this.list1[t].office=!0:"factoryFix"==this.list1[t].factoryFix?this.list1[t].factoryFix=!0:"factoryBuild"==this.list1[t].factoryBuild?this.list1[t].factoryBuild=!0:"machining"==this.list1[t].machining&&(this.list1[t].machining=!0)}},closeAll:function(){1==this.displayer.all&&(this.displayer.all=!1)},optIn01:function(){for(var t=0;t<this.list1.length;t++)1==this.list1[t].office?this.list1[t].office="office":"office"==this.list1[t].office&&(this.list1[t].office=!0)},optIn02:function(){for(var t=0;t<this.list1.length;t++)1==this.list1[t].factoryFix?this.list1[t].factoryFix="factoryFix":"factoryFix"==this.list1[t].factoryFix&&(this.list1[t].factoryFix=!0)},optIn03:function(){for(var t=0;t<this.list1.length;t++)1==this.list1[t].factoryBuild?this.list1[t].factoryBuild="factoryBuild":"factoryBuild"==this.list1[t].factoryBuild&&(this.list1[t].factoryBuild=!0)},optIn04:function(){for(var t=0;t<this.list1.length;t++)1==this.list1[t].machining?this.list1[t].machining="machining":"machining"==this.list1[t].machining&&(this.list1[t].machining=!0)},showIng:function(){for(var t=0;t<this.list1.length;t++)1==this.list1[t].finish?this.list1[t].finish="finish":"inprogress"==this.list1[t].inprogress&&(this.list1[t].inprogress=!0)},showDone:function(){for(var t=0;t<this.list1.length;t++)1==this.list1[t].inprogress?this.list1[t].inprogress="inprogress":"finish"==this.list1[t].finish&&(this.list1[t].finish=!0)},showAll:function(){for(var t=0;t<this.list1.length;t++)"finish"==this.list1[t].finish?this.list1[t].finish=!0:"inprogress"==this.list1[t].inprogress&&(this.list1[t].inprogress=!0)}},computed:{filterArray:function(){var t=this;return t.list1.filter(function(e){return e.title.match(t.filterText)})}}},g,!1,function(t){i("Jdy+")},"data-v-392b4559",null).exports,k={data:function(){return{mail:"",name:"",company:"",phone:"",email:"",content:""}},methods:{sendMail:function(){var t="lenezgrand@gmail.com?subject=[官網]業務詢問&body=聯絡人：%0A "+this.name+"%0A 公司：%0A "+this.company+"%0A 聯絡電話：%0A "+this.phone+"%0A 聯絡email：%0A "+this.email+"%0A 詢問內容：%0A "+this.content;this.mail=t,console.log(t)}}},b={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"contact"},[i("div",{staticClass:"contact_container"},[i("div",{staticClass:"sec"},[i("h2",[t._v("您的需求，我們的第一優先！")]),t._v(" "),i("div",{staticClass:"form"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"detail",attrs:{placeholder:"聯絡人姓名及稱謂",type:"text"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.company,expression:"company"}],staticClass:"detail",attrs:{placeholder:"公司",type:"text"},domProps:{value:t.company},on:{input:function(e){e.target.composing||(t.company=e.target.value)}}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],staticClass:"detail",attrs:{placeholder:"聯絡電話",type:"tel",name:"",id:""},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"detail",attrs:{placeholder:"聯絡 Email",type:"email",name:"",id:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],staticClass:"detail_body",attrs:{placeholder:"諮詢事宜",name:"",id:"",cols:"30",rows:"5"},domProps:{value:t.content},on:{input:function(e){e.target.composing||(t.content=e.target.value)}}}),t._v(" "),i("a",{staticClass:"btn",attrs:{href:"mailto:"+t.mail,type:"submit",target:"_blank",rel:"noopener noreferrer"},on:{click:t.sendMail}},[t._v("送出業務詢問表單")])])]),t._v(" "),t._m(0)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"sec"},[i("h2",[t._v("三俱精密股份有限公司")]),t._v(" "),i("div",{staticClass:"map"},[i("iframe",{staticStyle:{border:"0"},attrs:{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d678.4434234246744!2d120.92498260393273!3d24.708111789588276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34684b6225ff1d8b%3A0xf886d4c681b8f1a!2zMzUw6IuX5qCX57ij56u55Y2X6Y6u5Lit6I-v6LevODjomZ9D5qOf!5e0!3m2!1szh-TW!2stw!4v1562152168590!5m2!1szh-TW!2stw",width:"100%",height:"200",frameborder:"0",allowfullscreen:""}})]),t._v(" "),i("ul",{staticClass:"info"},[i("li",[t._v("竹南辦公室 苗栗縣竹南鎮中華路88號C棟")]),t._v(" "),i("li",[t._v("TEL：037-689526")]),t._v(" "),i("li",[t._v("FAX：037-689527")]),t._v(" "),i("li",[t._v("Email：service@sun-jet.com.co")])])])}]};var C=i("VU/8")(k,b,!1,function(t){i("DVMH")},null,null).exports,O={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header_bg"},[i("header",{staticClass:"header_container"},[t._m(0),t._v(" "),i("div",{staticClass:"btn_group"},[i("router-link",{staticClass:"navBtn",attrs:{to:"/index"},on:{click:function(e){t.isOpen=!0}}},[t._v("首頁")]),t._v(" "),i("router-link",{staticClass:"navBtn",attrs:{to:"/about"},on:{click:function(e){t.isOpen=!0}}},[t._v("公司理念")]),t._v(" "),i("router-link",{staticClass:"navBtn",attrs:{to:"/services"},on:{click:function(e){t.isOpen=!0}}},[t._v("專業項目")]),t._v(" "),i("router-link",{staticClass:"navBtn",attrs:{to:"/works"},on:{click:function(e){t.isOpen=!0}}},[t._v("工程實績")]),t._v(" "),i("router-link",{staticClass:"navBtn",attrs:{to:"/contact"},on:{click:function(e){t.isOpen=!0}}},[t._v("聯絡我們")]),t._v(" "),0==t.isOpen?i("router-link",{staticClass:"navBtn_search",attrs:{to:"/search"}},[i("div",{on:{click:function(e){t.isOpen=!0}}},[i("font-awesome-icon",{staticClass:"icon",attrs:{icon:["fal","search"]}})],1)]):t._e(),t._v(" "),1==t.isOpen?i("a",{staticClass:"navBtn_search",on:{click:function(e){t.$router.go(-1),t.isOpen=!1}}},[i("font-awesome-icon",{staticClass:"icon",attrs:{icon:["fal","times"]}})],1):t._e()],1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("img",{attrs:{src:"https://arrgrr.github.io/proMask/static/logo.png",alt:"三俱精密"}})])}]};var w=i("VU/8")({data:function(){return{isOpen:!1}},methods:{openSearch:function(){this.isOpen=!1}}},O,!1,function(t){i("jqPX")},"data-v-acb1ea04",null).exports,x={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"footer_bg"},[e("div",{staticClass:"footer_container"},[e("div",{staticClass:"company_title"},[e("p",[this._v("三俱精密股份有限公司")]),this._v(" "),e("p",[this._v("ACHIEVE INFINITE MOBILITY")])]),this._v(" "),e("div",{staticClass:"address"},[e("p",[this._v("竹南辦公室 苗栗縣竹南鎮中華路88號C棟")]),this._v(" "),e("p",[this._v("TEL：037-689526,FAX：037-689527")])])])])}]};var A=i("VU/8")({data:function(){return{}}},x,!1,function(t){i("3bGq")},"data-v-35597d6a",null).exports,P={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",[e("h1",[this._v("辦公室規劃設計工程")])]),this._v(" "),e("img",{attrs:{src:"https://arrgrr.github.io/proMask/static/ser_img.jpg",alt:""}}),this._v(" "),e("p",[this._v("本公司為專業生產半導體測試Socket、Pin、生產治具、測試板設計、製造與 測試機台電路板維修之廠商。針對各個領域培養專業工程人員，並配合客戶各種不同的需求發展先進的產品與技術，以迎合市場日趨嚴苛的要求。")]),this._v(" "),e("p",[this._v("這幾年在團隊合作努力下，以品質、技術、創新與服務為導向建立不少成功案例並贏得客戶青睞。在socket 領域上我們有最新POP(Package on Package)產品提供手機晶片測試，並提供各式類型socket pin 供客戶選擇以達到最佳測試效果。也積極開發各式Handler的change kit與生產工具來滿足量產需求，在客戶成本考量上提供各式ATE測試機台電路板維修來降低生產成本。另外也開發出不少PCB測試板(load board, probe card, burn-in board 等)以滿足工程與量產需求，進而達到完整測試解決方案(Total Solution)。")])])}]};var $=i("VU/8")({data:function(){return{}}},P,!1,function(t){i("1zVs")},"data-v-5ab119b4",null).exports,E={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",[e("h1",[this._v("專案廠房建置工程")])]),this._v(" "),e("img",{attrs:{src:"https://arrgrr.github.io/proMask/static/ser_img.jpg",alt:""}}),this._v(" "),e("p",[this._v("本公司為專業生產半導體測試Socket、Pin、生產治具、測試板設計、製造與 測試機台電路板維修之廠商。針對各個領域培養專業工程人員，並配合客戶各種不同的需求發展先進的產品與技術，以迎合市場日趨嚴苛的要求。")]),this._v(" "),e("p",[this._v("這幾年在團隊合作努力下，以品質、技術、創新與服務為導向建立不少成功案例並贏得客戶青睞。在socket 領域上我們有最新POP(Package on Package)產品提供手機晶片測試，並提供各式類型socket pin 供客戶選擇以達到最佳測試效果。也積極開發各式Handler的change kit與生產工具來滿足量產需求，在客戶成本考量上提供各式ATE測試機台電路板維修來降低生產成本。另外也開發出不少PCB測試板(load board, probe card, burn-in board 等)以滿足工程與量產需求，進而達到完整測試解決方案(Total Solution)。")])])}]};var T=i("VU/8")({data:function(){return{}}},E,!1,function(t){i("sY0M")},"data-v-e079f426",null).exports,j={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",[e("h1",[this._v("廠務各式修改維修工程")])]),this._v(" "),e("img",{attrs:{src:"https://arrgrr.github.io/proMask/static/ser_img.jpg",alt:""}}),this._v(" "),e("p",[this._v("本公司為專業生產半導體測試Socket、Pin、生產治具、測試板設計、製造與 測試機台電路板維修之廠商。針對各個領域培養專業工程人員，並配合客戶各種不同的需求發展先進的產品與技術，以迎合市場日趨嚴苛的要求。")]),this._v(" "),e("p",[this._v("這幾年在團隊合作努力下，以品質、技術、創新與服務為導向建立不少成功案例並贏得客戶青睞。在socket 領域上我們有最新POP(Package on Package)產品提供手機晶片測試，並提供各式類型socket pin 供客戶選擇以達到最佳測試效果。也積極開發各式Handler的change kit與生產工具來滿足量產需求，在客戶成本考量上提供各式ATE測試機台電路板維修來降低生產成本。另外也開發出不少PCB測試板(load board, probe card, burn-in board 等)以滿足工程與量產需求，進而達到完整測試解決方案(Total Solution)。")])])}]};var B=i("VU/8")({data:function(){return{}}},j,!1,function(t){i("PN6U")},"data-v-71ad25cb",null).exports,F={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",[e("h1",[this._v("無塵室產線各式加工件製品")])]),this._v(" "),e("img",{attrs:{src:"https://arrgrr.github.io/proMask/static/ser_img.jpg",alt:""}}),this._v(" "),e("p",[this._v("本公司為專業生產半導體測試Socket、Pin、生產治具、測試板設計、製造與 測試機台電路板維修之廠商。針對各個領域培養專業工程人員，並配合客戶各種不同的需求發展先進的產品與技術，以迎合市場日趨嚴苛的要求。")]),this._v(" "),e("p",[this._v("這幾年在團隊合作努力下，以品質、技術、創新與服務為導向建立不少成功案例並贏得客戶青睞。在socket 領域上我們有最新POP(Package on Package)產品提供手機晶片測試，並提供各式類型socket pin 供客戶選擇以達到最佳測試效果。也積極開發各式Handler的change kit與生產工具來滿足量產需求，在客戶成本考量上提供各式ATE測試機台電路板維修來降低生產成本。另外也開發出不少PCB測試板(load board, probe card, burn-in board 等)以滿足工程與量產需求，進而達到完整測試解決方案(Total Solution)。")])])}]};var M=i("VU/8")({data:function(){return{}}},F,!1,function(t){i("x+k4")},"data-v-08f9b438",null).exports,I={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"search_box"},[i("div",{staticClass:"search_container"},[i("div",{staticClass:"input_container"},[i("font-awesome-icon",{staticClass:"arrow",attrs:{icon:["fal","search"]}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.filterInput,expression:"filterInput"}],staticClass:"search_input",attrs:{type:"text",placeholder:"請輸入搜尋內容"},domProps:{value:t.filterInput},on:{input:function(e){e.target.composing||(t.filterInput=e.target.value)}}})],1),t._v(" "),i("div",{staticClass:"list_container"},[i("div",{staticClass:"list_column"},[i("h2",[t._v("項目細項")]),t._v(" "),t._l(t.filterArray,function(e){return[0!=e.name?i("router-link",{key:e.index,staticClass:"link_item",attrs:{to:"/services/service03"}},[t._v(t._s(e.name))]):t._e()]})],2),t._v(" "),i("div",{staticClass:"list_column"},[i("h2",[t._v("工程實績")]),t._v(" "),t._l(t.filterArray,function(e){return[0!=e.project?i("router-link",{key:e.index,staticClass:"link_item",attrs:{to:"/services/service03"}},[t._v(t._s(e.project))]):t._e()]})],2)])])])},staticRenderFns:[]};var N=i("VU/8")({data:function(){return{filterInput:"",list:[{name:"項目be",project:0,goto:"/"},{name:"項目de",project:0},{name:"工程項目cc",project:0},{name:"工程項目ab",project:0},{name:"項目af",project:0},{name:0,project:"工程實績eee"},{name:0,project:"工程實績ddd"},{name:0,project:"工程實績ccc"},{name:0,project:"工程實績bbb"},{name:0,project:"工程實績aaa"}]}},computed:{filterArray:function(){var t=this;return t.list.filter(function(e){return 0!=e.name?e.name.match(t.filterInput):0!=e.project?e.project.match(t.filterInput):void 0})}}},I,!1,function(t){i("88sp")},null,null).exports;s.a.use(p.a),s.a.component("modal",{template:"#modal-template"});var V=new p.a({routes:[{name:"modal",path:"/search",components:{default:N,header:w,footer:A}},{name:"Home",path:"/index",components:{default:d,header:w,footer:A}},{name:"About",path:"/about",components:{default:h,header:w,footer:A}},{name:"",path:"/services",components:{default:m,header:w,footer:A},children:[{name:"服務1",path:"",component:$},{name:"服務2",path:"service02",component:T},{name:"服務3",path:"service03",component:B},{name:"服務4",path:"service04",component:M}]},{name:"Works",path:"/works",components:{default:y,header:w,footer:A}},{name:"Contact",path:"/contact",components:{default:C,header:w,footer:A}}]}),U=i("C/JF"),R=i("3nTA"),S=i("1e6/");U.c.add(R.a),s.a.component("font-awesome-icon",S.a),s.a.use(o.a,l.a),s.a.config.productionTip=!1,new s.a({el:"#app",components:{App:n},template:"<App/>",router:V})},PN6U:function(t,e){},Qlzr:function(t,e){},jqPX:function(t,e){},sY0M:function(t,e){},sZle:function(t,e){},"v+92":function(t,e){},"x+k4":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.bd63ca3e280f9e4d310f.js.map