(function(t){function e(e){for(var r,u,i=e[0],s=e[1],l=e[2],p=0,d=[];p<i.length;p++)u=i[p],Object.prototype.hasOwnProperty.call(a,u)&&a[u]&&d.push(a[u][0]),a[u]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);c&&c(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,i=1;i<n.length;i++){var s=n[i];0!==a[s]&&(r=!1)}r&&(o.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},a={app:0},o=[];function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/Vuex/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var c=s;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=n("5f5b"),o=(n("f9e3"),n("2dd8"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),n("router-link",{attrs:{to:"/cats"}},[t._v("Cats")]),t._v(" | "),n("router-link",{attrs:{to:"/dogs"}},[t._v("Dogs")]),t._v(" | ")],1),n("b-container",[n("router-view")],1)],1)}),u=[],i=(n("5c0b"),n("2877")),s={},l=Object(i["a"])(s,o,u,!1,null,null,null),c=l.exports,p=n("8c4f"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("h1",[t._v("Betje haywan aljakmy?")]),n("button",{staticClass:"btn btn-primary",on:{click:t.togglePetForm}},[t._v(" Add new Pet ")]),t.showPetForm?n("b-form",{on:{submit:function(e){return e.preventDefault(),t.handleSubmit.apply(null,arguments)}}},[n("b-form-group",{attrs:{id:"input-group-2",label:"Pet's Name:","label-for":"input-2"}},[n("b-form-input",{attrs:{id:"input-2",placeholder:"Enter name",required:""},model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name",e)},expression:"formData.name"}})],1),n("b-form-group",{attrs:{id:"input-group-3",label:"Gornushi","label-for":"input-3"}},[n("b-form-select",{attrs:{id:"input-3",options:["cats","dogs"],required:""},model:{value:t.formData.gornushi,callback:function(e){t.$set(t.formData,"gornushi",e)},expression:"formData.gornushi"}})],1),n("b-form-group",{attrs:{id:"input-group-2",label:"Pet's Age:","label-for":"input-2"}},[n("b-form-input",{attrs:{id:"input-2",type:"number",placeholder:"Enter age",required:""},model:{value:t.formData.age,callback:function(e){t.$set(t.formData,"age",e)},expression:"formData.age"}})],1),n("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Submit")]),n("b-button",{attrs:{type:"reset",variant:"danger"}},[t._v("Reset")])],1):t._e()],1)},f=[],m=n("5530"),b=(n("b0c0"),n("2f62")),h={name:"home",data:function(){return{showPetForm:!1,formData:{name:"",age:0,gornushi:null}}},methods:Object(m["a"])(Object(m["a"])({},Object(b["b"])(["addPet"])),{},{togglePetForm:function(){this.showPetForm=!this.showPetForm},handleSubmit:function(){var t=this.formData,e=t.name,n=t.age,r=t.gornushi,a={gornushi:r,pet:{name:e,age:n}};this.addPet(a),this.formData={name:"",age:0,gornushi:null}}})},g=h,v=Object(i["a"])(g,d,f,!1,null,null,null),_=v.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Cats for adaption")]),n("b-table",{attrs:{striped:"",hover:"",items:t.cats},scopedSlots:t._u([{key:"cell(name)",fn:function(e){return[n("router-link",{attrs:{to:"/pets/cats/"+e.index}},[t._v(t._s(e.value))])]}}])})],1)},k=[],j={data:function(){return{}},computed:Object(m["a"])({},Object(b["c"])(["cats"]))},w=j,O=Object(i["a"])(w,y,k,!1,null,null,null),P=O.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Dogs for adaption")]),n("b-table",{attrs:{striped:"",hover:"",items:t.dogs},scopedSlots:t._u([{key:"cell(name)",fn:function(e){return[n("router-link",{attrs:{to:"/pets/dogs/"+e.index}},[t._v(t._s(e.value))])]}}])})],1)},D=[],S={data:function(){return{}},computed:Object(m["a"])({},Object(b["c"])(["dogs"]))},$=S,E=Object(i["a"])($,x,D,!1,null,null,null),F=E.exports,M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v(" "+t._s(t.animal.name)+" ("+t._s(this.$route.params.gornushi)+")")]),n("p",[t._v(" Sorty: "+t._s(t.animal.breed)+" ")]),n("p",[t._v(" Age: "+t._s(t.animal.age)+" ")])])},A=[],C={data:function(){return{animal:{}}},computed:Object(m["a"])({},Object(b["c"])(["cats","dogs"])),mounted:function(){var t=this[this.$route.params.gornushi][this.$route.params.id];this.animal=t}},q=C,T=Object(i["a"])(q,M,A,!1,null,null,null),H=T.exports;r["default"].use(p["a"]);var J=[{path:"/",name:"Home",component:_},{path:"/cats",name:"cats",component:P},{path:"/dogs",name:"dogs",component:F},{path:"/pets/:gornushi/:id",name:"pet",component:H}],V=new p["a"]({mode:"history",base:"/Vuex/",routes:J}),B=V,G=[{name:"Murka",breed:"musur pishik",gender:"erkek",age:2,color:"sary",weight:20,location:"oy",notes:"bet pishik"},{name:"Zeus",breed:"gowy",gender:"urkacy",age:3,color:"gara",weight:25,location:"oy",notes:"bet pishik"}],N=[{name:"Alabay",breed:"copan gujuk",gender:"erkek",age:2,color:"ala",weight:47,location:"oy",notes:"bet gujuk"},{name:"Muhtar",breed:"Awcarka",gender:"urkacy",age:3,color:"gara",weight:30,location:"oy",notes:"bet gujuk"}],R={cats:G,dogs:N},Z={appendPet:function(t,e){var n=e.gornushi,r=e.pet;t[n].push(r)}},z={addPet:function(t,e){var n=t.commit;n("appendPet",e)}};r["default"].use(b["a"]);var I=new b["a"].Store({state:R,mutations:Z,actions:z});r["default"].use(a["a"]),r["default"].config.productionTip=!1,new r["default"]({router:B,store:I,render:function(t){return t(c)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"9c0c":function(t,e,n){}});
//# sourceMappingURL=app.659f40fd.js.map