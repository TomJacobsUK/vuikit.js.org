webpackJsonp([31],{QT9a:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",[a("h1",{staticClass:"uk-h1 tm-heading-fragment"},[s._v("Dropdown")]),a("p",{staticClass:"uk-text-lead"},[s._v("Defines different styles for a toggleable dropdown.")]),s._v(" "),s._m(0),s._m(1),s._v(" "),s._m(2),a("p",[s._v("Basically, a dropdown is a Drop component providing it own styling. The following sections shows the Dropdown specific features, for the rest make sure to read about the "),a("router-link",{staticClass:"tm-internal-link",attrs:{to:"drop"}},[s._v("Drop component")]),s._v(".")],1),s._v(" "),a("hr",{staticClass:"uk-margin-large"}),s._m(3),a("p",[s._v("A dropdown can contain a nav from the "),a("router-link",{staticClass:"tm-internal-link",attrs:{to:"nav"}},[s._v("Nav component")]),s._v(". Simply use the "),a("code",[s._v("vk-nav-dropdown")]),s._v(" component.")],1),s._v(" "),s._m(4),a("md-code-example-93")],1)},staticRenderFns:[function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{staticClass:"uk-h2 tm-heading-fragment",attrs:{id:"usage"}},[t("a",{attrs:{href:"#usage"}},[this._v("Usage")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("Any content, like a button, can toggle a dropdown. Add the "),t("code",[this._v("vk-dropdown")]),this._v(" component to a block element following the toggle.")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"uk-margin-medium"},[a("pre",[a("code",{staticClass:"lang-html hljs"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("vk-button")]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("vk-button")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("vk-dropdown")]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("vk-dropdown")]),s._v(">")])])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{staticClass:"uk-h2 tm-heading-fragment",attrs:{id:"nav-in-dropdown"}},[t("a",{attrs:{href:"#nav-in-dropdown"}},[this._v("Nav in dropdown")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"uk-margin-medium"},[a("pre",[a("code",{staticClass:"lang-html hljs"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("vk-button")]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("vk-button")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("vk-dropdown")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("vk-nav-dropdown")]),s._v(">")]),s._v("..."),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("vk-nav-dropdown")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("vk-dropdown")]),s._v(">")])])])])}],data:function(){return{}},scrollToTop:!0,sections:[{id:"usage",title:"Usage"},{id:"nav-in-dropdown",title:"Nav in dropdown"}],components:{"md-code-example-93":{render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"uk-position-relative uk-margin-medium"},[a("vk-tabs",{staticClass:"uk-margin"},[a("vk-tabs-item",{attrs:{title:"Preview"}},[a("vk-button",[s._v("Hover")]),s._v(" "),a("vk-dropdown",[a("vk-nav-dropdown",[a("vk-nav-item",{attrs:{title:"Active",active:""}}),s._v(" "),a("vk-nav-item",{attrs:{title:"Item"}}),s._v(" "),a("vk-nav-item-header",{attrs:{title:"Header"}}),s._v(" "),a("vk-nav-item",{attrs:{title:"Item"}}),s._v(" "),a("vk-nav-item",{attrs:{title:"Item"}}),s._v(" "),a("vk-nav-item-divider"),s._v(" "),a("vk-nav-item",{attrs:{title:"Item"}})],1)],1)],1),s._v(" "),a("vk-tabs-item",{attrs:{title:"Markup"}},[a("pre",[a("code",{staticClass:"lang-html hljs",attrs:{id:"93"}},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("vk-button")]),s._v(">")]),s._v("Hover"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("vk-button")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("vk-dropdown")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("vk-nav-dropdown")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("vk-nav-item")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("title")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"Active"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("active")]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("vk-nav-item")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("vk-nav-item")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("title")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"Item"')]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("vk-nav-item")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("vk-nav-item-header")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("title")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"Header"')]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("vk-nav-item-header")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("vk-nav-item")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("title")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"Item"')]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("vk-nav-item")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("vk-nav-item")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("title")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"Item"')]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("vk-nav-item")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("vk-nav-item-divider")]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("vk-nav-item-divider")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("vk-nav-item")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("title")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"Item"')]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("vk-nav-item")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("vk-nav-dropdown")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("vk-dropdown")]),s._v(">")])])])])],1)],1)},data:function(){return{}}}},__file:"pages/guide/dropdown.md"};t.default=n}});