(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-018e24fe"],{"0323":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-card",{staticClass:"wrap-tag"},[a("el-row",[a("el-button",{attrs:{type:"success"},on:{click:t.doAdd}},[t._v("添加")])],1),t._v(" "),a("el-table",{attrs:{data:t.list}},[a("el-table-column",{attrs:{prop:"imgList",label:"产品图",width:"200"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("img",{staticStyle:{width:"180px"},attrs:{src:t.row.imgList[0],alt:""}})]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"名称"}}),t._v(" "),a("el-table-column",{attrs:{prop:"pdf",label:"产品说明书"}}),t._v(" "),a("el-table-column",{attrs:{prop:"model",label:"型号"}}),t._v(" "),a("el-table-column",{attrs:{prop:"type",label:"类型"}}),t._v(" "),a("el-table-column",{attrs:{prop:"isStar",label:"是否明星产品"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-switch",{attrs:{disabled:!0},model:{value:e.row.isStar,callback:function(a){t.$set(e.row,"isStar",a)},expression:"scope.row.isStar"}})]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"_id",label:"产品id"}}),t._v(" "),a("el-table-column",{attrs:{prop:"imgList",label:"编辑"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{on:{click:function(a){return t.doEdit(e.row)}}},[t._v("编辑")]),t._v(" "),a("el-button",{on:{click:function(a){return t.doDel(e.row)}}},[t._v("删除")])]}}])})],1),t._v(" "),a("el-dialog",{attrs:{width:"800px",title:"产品修改",visible:t.showEdit},on:{"update:visible":function(e){t.showEdit=e}}},[a("el-form",{attrs:{"label-width":"120px"}},[a("el-form-item",{attrs:{label:"名称"}},[a("el-input",{model:{value:t.selData.name,callback:function(e){t.$set(t.selData,"name",e)},expression:"selData.name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"推荐理由"}},[a("el-input",{model:{value:t.selData.starContent,callback:function(e){t.$set(t.selData,"starContent",e)},expression:"selData.starContent"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"型号"}},[a("el-input",{model:{value:t.selData.model,callback:function(e){t.$set(t.selData,"model",e)},expression:"selData.model"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"显示为明星产品"}},[a("el-switch",{model:{value:t.selData.isStar,callback:function(e){t.$set(t.selData,"isStar",e)},expression:"selData.isStar"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"类型"}},[a("el-select",{attrs:{placeholder:"Select"},model:{value:t.selData.type,callback:function(e){t.$set(t.selData,"type",e)},expression:"selData.type"}},t._l(t.listTag,(function(e){return a("el-option-group",{key:e.name,attrs:{label:e.name}},[a("el-option",{key:e.name,attrs:{label:e.name,value:e.name}}),t._v(" "),t._l(e.children,(function(t){return a("el-option",{key:t,attrs:{label:t,value:t}})}))],2)})),1)],1),t._v(" "),a("el-form-item",{attrs:{label:"产品图"}},[a("img-loader",{attrs:{"img-list":t.selData.imgList},on:{"update:imgList":function(e){return t.$set(t.selData,"imgList",e)},"update:img-list":function(e){return t.$set(t.selData,"imgList",e)}}})],1),t._v(" "),a("el-form-item",{attrs:{label:"左下角星星图片"}},[a("img-loader",{attrs:{"img-list":t.selData.imgListStar},on:{"update:imgList":function(e){return t.$set(t.selData,"imgListStar",e)},"update:img-list":function(e){return t.$set(t.selData,"imgListStar",e)}}})],1),t._v(" "),a("el-form-item",{attrs:{label:"详情图"}},[a("img-loader",{attrs:{"img-list":t.selData.detailPicList},on:{"update:imgList":function(e){return t.$set(t.selData,"detailPicList",e)},"update:img-list":function(e){return t.$set(t.selData,"detailPicList",e)}}})],1),t._v(" "),a("el-form-item",{attrs:{label:"规格图"}},[a("img-loader",{attrs:{"img-list":t.selData.sizePicList},on:{"update:imgList":function(e){return t.$set(t.selData,"sizePicList",e)},"update:img-list":function(e){return t.$set(t.selData,"sizePicList",e)}}})],1),t._v(" "),a("el-form-item",{attrs:{label:"产品说明书"}},[a("img-loader-single",{attrs:{img:t.selData.pdf},on:{"update:img":function(e){return t.$set(t.selData,"pdf",e)}}})],1)],1),t._v(" "),a("el-button",{on:{click:t.doSave}},[t._v("提交")])],1)],1)},s=[],n=a("9865"),l=a("9d99"),r={components:{ImgLoader:l["a"],ImgLoaderSingle:n["a"]},data:function(){return{list:[],showEdit:!1,selData:{},listTag:[]}},mounted:function(){this.getData(),this.getTagList()},methods:{getTagList:function(){var t=this;this.$ajax({url:"/type/list",method:"get",params:{}}).then((function(e){t.listTag=e}))},doDel:function(t){var e=this;this.selData=Object.assign({},t),this.$ajax({url:"/product/delete",method:"get",params:this.selData}).then((function(t){e.getData()}))},doAdd:function(){this.showEdit=!0,this.selData={}},doEdit:function(t){this.showEdit=!0,this.selData=Object.assign({},t)},doSave:function(){var t=this;console.log(this.selData),this.$ajax({url:"/product/edit",method:"post",params:this.selData}).then((function(e){t.showEdit=!1,t.getData()}))},getData:function(){var t=this;this.$ajax({url:"/product/list",method:"get",params:{}}).then((function(e){t.list=e}))}}},o=r,c=a("2877"),u=Object(c["a"])(o,i,s,!1,null,null,null);e["default"]=u.exports},"0a49":function(t,e,a){var i=a("9b43"),s=a("626a"),n=a("4bf8"),l=a("9def"),r=a("cd1c");t.exports=function(t,e){var a=1==t,o=2==t,c=3==t,u=4==t,d=6==t,f=5==t||d,m=e||r;return function(e,r,p){for(var h,g,v=n(e),b=s(v),_=i(r,p,3),w=l(b.length),D=0,I=a?m(e,w):o?m(e,0):void 0;w>D;D++)if((f||D in b)&&(h=b[D],g=_(h,D,v),t))if(a)I[D]=g;else if(g)switch(t){case 3:return!0;case 5:return h;case 6:return D;case 2:I.push(h)}else if(u)return!1;return d?-1:c||u?u:I}}},"20d6":function(t,e,a){"use strict";var i=a("5ca1"),s=a("0a49")(6),n="findIndex",l=!0;n in[]&&Array(1)[n]((function(){l=!1})),i(i.P+i.F*l,"Array",{findIndex:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}}),a("9c6c")(n)},9865:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-upload",{staticClass:"avatar-uploader",attrs:{action:t.baseUrl+"upload/","show-file-list":!1,"on-success":t.handleAvatarSuccess,"before-upload":t.beforeAvatarUpload}},[t.img?a("img",{staticClass:"avatar",staticStyle:{"max-widh":"600"},attrs:{src:t.img}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1)},s=[],n={props:{img:{type:String,default:""}},data:function(){return{baseUrl:"https://winia.com.cn:5001/admin/"}},mounted:function(){},methods:{handleAvatarSuccess:function(t){this.$emit("update:img","".concat(this.baseUrl,"img?filename=").concat(t.filename))},beforeAvatarUpload:function(){}}},l=n,r=a("2877"),o=Object(r["a"])(l,i,s,!1,null,null,null);e["a"]=o.exports},"9d99":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-upload",{attrs:{action:t.baseUrl+"upload/","list-type":"picture-card","file-list":t.imgListInner,"on-success":t.handleUploaded,"on-remove":t.handleRemove,"on-preview":t.handlePictureCardPreview,limit:t.limit}},[a("i",{staticClass:"el-icon-plus"})]),t._v(" "),a("el-dialog",{attrs:{title:"点击图片修改",visible:t.showImg,modal:!1,width:"800px"},on:{"update:visible":function(e){t.showImg=e}}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{action:t.baseUrl+"upload/","show-file-list":!1,"on-success":t.handleAvatarSuccess,"before-upload":t.beforeAvatarUpload}},[t.selImg.url?a("img",{staticClass:"avatar",staticStyle:{"max-widh":"600px","max-height":"500px"},attrs:{src:t.selImg.url}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1)],1)},s=[],n=(a("20d6"),a("c5f6"),{props:{limit:{type:Number,default:999},imgList:{type:Array,default:function(){return[]}}},data:function(){return{baseUrl:"https://winia.com.cn:5001/admin/",selImg:{},showImg:!1,imgListInner:[]}},watch:{imgList:function(){this.updateAll()}},mounted:function(){this.updateAll()},methods:{saveValue:function(){this.$emit("update:imgList",this.imgListInner.map((function(t){return t.url})))},updateAll:function(){this.imgListInner=this.imgList.concat().map((function(t){return{url:t,name:"sadad"}}))},handleAvatarSuccess:function(t){this.selImg.url="".concat(this.baseUrl,"img?filename=").concat(t.filename),this.saveValue()},beforeAvatarUpload:function(){},handlePictureCardPreview:function(t){this.selImg=t,this.showImg=!0},handleRemove:function(t,e){var a=this.imgListInner.findIndex((function(e){return e.url==t.url}));a>-1&&(this.imgListInner.splice(a,1),this.saveValue())},handleUploaded:function(t){console.log("".concat(this.baseUrl,"img?filename=").concat(t.filename)),this.imgListInner.push({url:"".concat(this.baseUrl,"img?filename=").concat(t.filename)}),this.saveValue()}}}),l=n,r=a("2877"),o=Object(r["a"])(l,i,s,!1,null,null,null);e["a"]=o.exports},aa77:function(t,e,a){var i=a("5ca1"),s=a("be13"),n=a("79e5"),l=a("fdef"),r="["+l+"]",o="​",c=RegExp("^"+r+r+"*"),u=RegExp(r+r+"*$"),d=function(t,e,a){var s={},r=n((function(){return!!l[t]()||o[t]()!=o})),c=s[t]=r?e(f):l[t];a&&(s[a]=c),i(i.P+i.F*r,"String",s)},f=d.trim=function(t,e){return t=String(s(t)),1&e&&(t=t.replace(c,"")),2&e&&(t=t.replace(u,"")),t};t.exports=d},c5f6:function(t,e,a){"use strict";var i=a("7726"),s=a("69a8"),n=a("2d95"),l=a("5dbc"),r=a("6a99"),o=a("79e5"),c=a("9093").f,u=a("11e9").f,d=a("86cc").f,f=a("aa77").trim,m="Number",p=i[m],h=p,g=p.prototype,v=n(a("2aeb")(g))==m,b="trim"in String.prototype,_=function(t){var e=r(t,!1);if("string"==typeof e&&e.length>2){e=b?e.trim():f(e,3);var a,i,s,n=e.charCodeAt(0);if(43===n||45===n){if(a=e.charCodeAt(2),88===a||120===a)return NaN}else if(48===n){switch(e.charCodeAt(1)){case 66:case 98:i=2,s=49;break;case 79:case 111:i=8,s=55;break;default:return+e}for(var l,o=e.slice(2),c=0,u=o.length;c<u;c++)if(l=o.charCodeAt(c),l<48||l>s)return NaN;return parseInt(o,i)}}return+e};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof p&&(v?o((function(){g.valueOf.call(a)})):n(a)!=m)?l(new h(_(e)),a,p):_(e)};for(var w,D=a("9e1e")?c(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),I=0;D.length>I;I++)s(h,w=D[I])&&!s(p,w)&&d(p,w,u(h,w));p.prototype=g,g.constructor=p,a("2aba")(i,m,p)}},cd1c:function(t,e,a){var i=a("e853");t.exports=function(t,e){return new(i(t))(e)}},e853:function(t,e,a){var i=a("d3f4"),s=a("1169"),n=a("2b4c")("species");t.exports=function(t){var e;return s(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!s(e.prototype)||(e=void 0),i(e)&&(e=e[n],null===e&&(e=void 0))),void 0===e?Array:e}},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);