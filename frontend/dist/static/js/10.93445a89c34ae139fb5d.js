webpackJsonp([10],{"5Yde":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("table",{staticClass:"dataintable todo-list"},[e("tbody",[t._m(0),t._v(" "),t._l(t.list,function(n){return e("tr",{key:n.id},[e("td",[t._v(t._s(n.id))]),t._v(" "),e("td",[t._v(t._s(n.name))]),t._v(" "),e("td",[t._v(t._s(n.desc))]),t._v(" "),e("td",[t._v(t._s(n.date))])])})],2)])])},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("tr",[n("th",[this._v("标识")]),this._v(" "),n("th",[this._v("名称")]),this._v(" "),n("th",[this._v("描述")]),this._v(" "),n("th",[this._v("时间")])])}]};var d=e("VU/8")({name:"DataTable",props:["list"]},i,!1,function(t){e("7i4r")},null,null);n.default=d.exports},"7i4r":function(t,n,e){var i=e("hpdA");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e("rjj0")("6d978a90",i,!0)},hpdA:function(t,n,e){(t.exports=e("FZ+f")(!1)).push([t.i,"\n.dataintable{\n    border: 1px solid #aaa;\n    width: 100%;\n}\n.dataintable th{\n    padding: 0;\n    height: 36px;\n    vertical-align: middle;\n    text-align: center;\n    background-color: #F5F5F5;\n    border: 1px solid #ddd;\n}\ntable.todo-list{\n    border-collapse: collapse;\n}\ntable.todo-list td{\n      padding: 0;\n      height: 36px;\n      text-align: center;\n      vertical-align: middle;\n      background: #fdfcf8 no-repeat center;\n      border: 1px solid #ddd;\n}\n",""])}});