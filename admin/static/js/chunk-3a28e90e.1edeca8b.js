(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3a28e90e"],{"432a":function(t,a,e){"use strict";e.r(a);var l=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("el-card",{staticClass:"wrap-tag"},[e("el-row",[e("el-button",{attrs:{type:"success"},on:{click:t.doAdd}},[t._v("添加")])],1),t._v(" "),e("el-table",{attrs:{data:t.list}},[e("el-table-column",{attrs:{label:"标题",prop:"title"}}),t._v(" "),e("el-table-column",{attrs:{prop:"children",label:"图"},scopedSlots:t._u([{key:"default",fn:function(t){return[e("img",{attrs:{src:t.row.url,alt:""}})]}}])}),t._v(" "),e("el-table-column",{attrs:{prop:"productId",label:"绑定的产品id"}}),t._v(" "),e("el-table-column",{attrs:{label:"编辑"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-button",{on:{click:function(e){return t.doEdit(a.row)}}},[t._v("编辑")]),t._v(" "),e("el-button",{on:{click:function(e){return t.doDel(a.row)}}},[t._v("删除")])]}}])})],1),t._v(" "),e("el-dialog",{attrs:{width:"500px",title:"分类修改",visible:t.showEdit},on:{"update:visible":function(a){t.showEdit=a}}},[e("el-form",{attrs:{"label-width":"120px"}},[e("el-form-item",{attrs:{label:"名称"}},[e("el-input",{model:{value:t.selData.title,callback:function(a){t.$set(t.selData,"title",a)},expression:"selData.title"}})],1),t._v(" "),e("el-form-item",{attrs:{label:"图（只能一张）"}},[e("img-loader-single",{attrs:{img:t.selData.url},on:{"update:img":function(a){return t.$set(t.selData,"url",a)}}})],1),t._v(" "),e("el-form-item",{attrs:{label:"绑定的产品id"}},[e("el-input",{model:{value:t.selData.productId,callback:function(a){t.$set(t.selData,"productId",a)},expression:"selData.productId"}})],1)],1),t._v(" "),e("el-button",{on:{click:t.doSave}},[t._v("提交")])],1)],1)},s=[],n=e("9865"),i={components:{ImgLoaderSingle:n["a"]},data:function(){return{list:[],showEdit:!1,selData:{}}},mounted:function(){this.getData()},methods:{doAdd:function(){this.showEdit=!0,this.selData={}},doDel:function(t){var a=this;this.selData=Object.assign({},t),this.$ajax({url:"/banner/delete",method:"get",params:this.selData}).then((function(t){a.getData()}))},doEdit:function(t){this.showEdit=!0,this.selData=Object.assign({},t)},doSave:function(){var t=this;console.log(this.selData),this.$ajax({url:"/banner/edit",method:"post",params:this.selData}).then((function(a){t.showEdit=!1,t.getData()}))},getData:function(){var t=this;this.$ajax({url:"/banner/list",method:"get",params:{}}).then((function(a){t.list=a}))}}},o=i,r=e("2877"),u=Object(r["a"])(o,l,s,!1,null,null,null);a["default"]=u.exports},9865:function(t,a,e){"use strict";var l=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("el-upload",{staticClass:"avatar-uploader",attrs:{action:t.baseUrl+"upload/","show-file-list":!1,"on-success":t.handleAvatarSuccess,"before-upload":t.beforeAvatarUpload}},[t.img?e("img",{staticClass:"avatar",staticStyle:{"max-widh":"600"},attrs:{src:t.img}}):e("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1)},s=[],n={props:{img:{type:String,default:""}},data:function(){return{baseUrl:"https://winia.com.cn:5001//admin/"}},mounted:function(){},methods:{handleAvatarSuccess:function(t){this.$emit("update:img","".concat(this.baseUrl,"img?filename=").concat(t.filename))},beforeAvatarUpload:function(){}}},i=n,o=e("2877"),r=Object(o["a"])(i,l,s,!1,null,null,null);a["a"]=r.exports}}]);