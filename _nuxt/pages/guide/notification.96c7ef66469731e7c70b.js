webpackJsonp([16],{LmiZ:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});const n={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("h1",{staticClass:"uk-h1 tm-heading-fragment"},[t._v("Notification")]),a("p",{staticClass:"uk-text-lead"},[t._v("Create toggleable notifications that fade out automatically.")]),t._v(" "),t._m(0),a("p",[t._v("The notification will not fade out but remain visible when you hover the message until you stop hovering. You can also close the notification by clicking it. To show notifications simply push them in your array messages data, as simple text or Object. The following code snippet gets you started.")]),t._v(" "),t._m(1),a("md-code-example-50"),a("p",[a("vk-label",[t._v("Note")]),t._v(" By default identical messages displayed at the same time will be ignored. In the demo we are changing the message text but you can as well set a unique "),a("code",[t._v("key")]),t._v(" to the message "),a("code",[t._v("Object")]),t._v(" and display messages with the exact same text.")],1),t._v(" "),a("hr",{staticClass:"uk-margin-large"}),t._m(2),a("p",[t._v("You can set custom HTML inside your messages using the default scoped slot.")]),t._v(" "),t._m(3),a("md-code-example-51"),a("hr",{staticClass:"uk-margin-large"}),t._m(4),t._m(5),t._v(" "),t._m(6),t._m(7),a("md-code-example-52"),a("hr",{staticClass:"uk-margin-large"}),t._m(8),t._m(9),t._v(" "),t._m(10),a("md-code-example-53"),a("hr",{staticClass:"uk-margin-large"}),t._m(11),t._m(12),t._m(13),t._m(14),t._m(15)],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{staticClass:"uk-h2 tm-heading-fragment",attrs:{id:"usage"}},[s("a",{attrs:{href:"#usage"}},[this._v("Usage")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"uk-margin-medium"},[a("pre",[a("code",{staticClass:"lang-html hljs"},[a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("vk-notification")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":messages")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"[{...}]"')]),t._v(">")]),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("vk-notification")]),t._v(">")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{staticClass:"uk-h2 tm-heading-fragment",attrs:{id:"html-message"}},[s("a",{attrs:{href:"#html-message"}},[this._v("HTML message")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"uk-margin-medium"},[a("pre",[a("code",{staticClass:"lang-html hljs"},[a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("vk-notification")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("div")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("slot-scope")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"{ message }"')]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("vk-icon")]),t._v(">")]),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("vk-icon")]),t._v(">")]),t._v(" "),a("span",[t._v("{{")]),t._v(" message "),a("span",[t._v("}}")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("div")]),t._v(">")]),t._v("\n"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("vk-notification")]),t._v(">")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{staticClass:"uk-h2 tm-heading-fragment",attrs:{id:"position"}},[s("a",{attrs:{href:"#position"}},[this._v("Position")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Add one of the following options to the "),s("code",[this._v("position")]),this._v(" prop to adjust the notification's position to different corners.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"uk-margin-medium"},[a("pre",[a("code",{staticClass:"lang-html hljs"},[a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("vk-notification")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("position")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"top-right"')]),t._v(">")]),t._v("..."),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("vk-notification")]),t._v(">")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"uk-overflow-auto"},[a("table",{staticClass:"uk-table uk-table-divider"},[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Position")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Code")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("top-left")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v('position="top-left"')])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("top-center")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v('position="top-center"')])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("top-right")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v('position="top-right"')])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("bottom-left")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v('position="bottom-left"')])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("bottom-center")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v('position="bottom-center"')])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("bottom-right")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v('position="bottom-right"')])])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{staticClass:"uk-h2 tm-heading-fragment",attrs:{id:"style"}},[s("a",{attrs:{href:"#style"}},[this._v("Style")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("A notification can be styled by adding a status to the message to indicate a "),a("code",[t._v("primary")]),t._v(", "),a("code",[t._v("success")]),t._v(", "),a("code",[t._v("warning")]),t._v(" or "),a("code",[t._v("danger")]),t._v(" status.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"uk-margin-medium"},[a("pre",[a("code",{staticClass:"lang-html hljs"},[a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("vk-notification")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("status")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"primary"')]),t._v(">")]),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("vk-notification")]),t._v(">")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{staticClass:"uk-h2 tm-heading-fragment",attrs:{id:"props"}},[s("a",{attrs:{href:"#props"}},[this._v("Props")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{staticClass:"uk-h3 tm-heading-fragment",attrs:{id:"vk-notification"}},[s("a",{attrs:{href:"#vk-notification"}},[this._v("vk-notification")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"uk-overflow-auto"},[a("table",{staticClass:"uk-table uk-table-divider"},[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Default")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("timeout")])]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[a("code",[t._v("5000")])]),t._v(" "),a("td",[t._v("Time after which the message will be auto-closed.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("status")])]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("--")]),t._v(" "),a("td",[t._v("The message status style with "),a("code",[t._v("primary")]),t._v(", "),a("code",[t._v("success")]),t._v(", "),a("code",[t._v("warning")]),t._v(" or "),a("code",[t._v("danger")]),t._v(" as possible options.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("position")])]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[a("code",[t._v("top-center")])]),t._v(" "),a("td",[t._v("The position corner where to display the message - "),a("code",[t._v("(top bottom)-(left center right)")]),t._v(".")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("messages")])]),t._v(" "),a("td",[t._v("Array")]),t._v(" "),a("td",[a("code",[t._v("[]")])]),t._v(" "),a("td",[t._v("Array of "),a("code",[t._v("String")]),t._v(" or "),a("code",[t._v("Object")]),t._v(" representing the message to display.")])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{staticClass:"uk-h3 tm-heading-fragment",attrs:{id:"the-message-object"}},[s("a",{attrs:{href:"#the-message-object"}},[this._v("The message Object")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"uk-overflow-auto"},[a("table",{staticClass:"uk-table uk-table-divider"},[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Default")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("key")])]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("--")]),t._v(" "),a("td",[t._v("A unique "),a("code",[t._v("key")]),t._v(" to allow identifying the message over others when they are sharing the same exact text and display options.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("timeout")])]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[t._v("--")]),t._v(" "),a("td",[t._v("Overrides the "),a("code",[t._v("vk-notification")]),t._v(" timeout.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("status")])]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("--")]),t._v(" "),a("td",[t._v("Overrides the "),a("code",[t._v("vk-notification")]),t._v(" status.")])])])])])}],data:function(){return{}},scrollToTop:!0,sections:[{id:"usage",title:"Usage"},{id:"html-message",title:"HTML message"},{id:"position",title:"Position"},{id:"style",title:"Style"},{id:"props",title:"Props"}],components:{"md-code-example-50":{render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"uk-position-relative uk-margin-medium"},[a("vk-tabs",{staticClass:"uk-margin"},[a("vk-tabs-item",{attrs:{title:"Preview"}},[a("vk-notification",{attrs:{messages:t.messages},on:{"update:messages":function(s){t.messages=s}}}),t._v(" "),a("vk-button",{on:{click:function(s){t.count++,t.messages.push("Message "+t.count)}}},[t._v("Simple message")])],1),t._v(" "),a("vk-tabs-item",{attrs:{title:"Markup"}},[a("pre",[a("code",{staticClass:"lang-html hljs",attrs:{id:"50"}},[t._v("---\ncount: 0\nmessages: []\n---\n\n"),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("vk-notification")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":messages.sync")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"messages"')]),t._v(">")]),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("vk-notification")]),t._v(">")]),t._v("\n\n"),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("vk-button")]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("click")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"count++, messages.push(`Message ${count}`)"')]),t._v(">")]),t._v("Simple message"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("vk-button")]),t._v(">")])])])])],1)],1)},data:function(){return{count:0,messages:[]}}},"md-code-example-51":{render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"uk-position-relative uk-margin-medium"},[a("vk-tabs",{staticClass:"uk-margin"},[a("vk-tabs-item",{attrs:{title:"Preview"}},[a("vk-notification",{attrs:{messages:t.messages},on:{"update:messages":function(s){t.messages=s}},scopedSlots:t._u([{key:"default",fn:function(s){var n=s.message;return a("div",{},[a("vk-icon",{attrs:{icon:"check"}}),t._v(" "+t._s(n)+"\n  ")],1)}}])}),t._v(" "),a("vk-button",{on:{click:function(s){t.messages.push("Message")}}},[t._v("Click me")])],1),t._v(" "),a("vk-tabs-item",{attrs:{title:"Markup"}},[a("pre",[a("code",{staticClass:"lang-html hljs",attrs:{id:"51"}},[t._v("---\nmessages: []\n---\n\n"),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("vk-notification")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":messages.sync")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"messages"')]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("div")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("slot-scope")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"{ message }"')]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("vk-icon")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("icon")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"check"')]),t._v(">")]),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("vk-icon")]),t._v(">")]),t._v(" "),a("span",[t._v("{{")]),t._v(" message "),a("span",[t._v("}}")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("div")]),t._v(">")]),t._v("\n"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("vk-notification")]),t._v(">")]),t._v("\n\n"),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("vk-button")]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("click")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v("\"messages.push('Message')\"")]),t._v(">")]),t._v("Click me"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("vk-button")]),t._v(">")])])])])],1)],1)},data:function(){return{messages:[]}}},"md-code-example-52":{render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"uk-position-relative uk-margin-medium"},[a("vk-tabs",{staticClass:"uk-margin"},[a("vk-tabs-item",{attrs:{title:"Preview"}},[a("vk-notification",{attrs:{position:"top-left",messages:t.topLeft},on:{"update:messages":function(s){t.topLeft=s}}}),t._v(" "),a("vk-notification",{attrs:{position:"top-center",messages:t.topCenter},on:{"update:messages":function(s){t.topCenter=s}}}),t._v(" "),a("vk-notification",{attrs:{position:"top-right",messages:t.topRight},on:{"update:messages":function(s){t.topRight=s}}}),t._v(" "),a("vk-notification",{attrs:{position:"bottom-left",messages:t.bottomLeft},on:{"update:messages":function(s){t.bottomLeft=s}}}),t._v(" "),a("vk-notification",{attrs:{position:"bottom-center",messages:t.bottomCenter},on:{"update:messages":function(s){t.bottomCenter=s}}}),t._v(" "),a("vk-notification",{attrs:{position:"bottom-right",messages:t.bottomRight},on:{"update:messages":function(s){t.bottomRight=s}}}),t._v(" "),a("p",{directives:[{name:"vk-margin",rawName:"v-vk-margin"}]},[a("vk-button",{on:{click:function(s){t.topLeft.push("Top Left...")}}},[t._v("Top Left")]),t._v(" "),a("vk-button",{on:{click:function(s){t.topCenter.push("Top Center...")}}},[t._v("Top Center")]),t._v(" "),a("vk-button",{on:{click:function(s){t.topRight.push("Top Right...")}}},[t._v("Top Right")]),t._v(" "),a("vk-button",{on:{click:function(s){t.bottomLeft.push("Bottom Left...")}}},[t._v("Bottom Left")]),t._v(" "),a("vk-button",{on:{click:function(s){t.bottomCenter.push("Bottom Center...")}}},[t._v("Bottom Center")]),t._v(" "),a("vk-button",{on:{click:function(s){t.bottomRight.push("Bottom Right...")}}},[t._v("Bottom Right")])],1)],1),t._v(" "),a("vk-tabs-item",{attrs:{title:"Markup"}},[a("pre",[a("code",{staticClass:"lang-html hljs",attrs:{id:"52"}},[t._v("---\ntopLeft: []\ntopCenter: []\ntopRight: []\nbottomLeft: []\nbottomCenter: []\nbottomRight: []\n---\n\n"),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("vk-notification")]),t._v("\n  "),a("span",{staticClass:"hljs-attr"},[t._v("position")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"top-left"')]),t._v("\n  "),a("span",{staticClass:"hljs-attr"},[t._v(":messages.sync")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"topLeft"')]),t._v("\n>")]),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("vk-notification")]),t._v(">")]),t._v("\n\n"),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("vk-notification")]),t._v("\n  "),a("span",{staticClass:"hljs-attr"},[t._v("position")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"top-center"')]),t._v("\n  "),a("span",{staticClass:"hljs-attr"},[t._v(":messages.sync")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"topCenter"')]),t._v("\n>")]),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("vk-notification")]),t._v(">")]),t._v("\n\n"),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("vk-notification")]),t._v("\n  "),a("span",{staticClass:"hljs-attr"},[t._v("position")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"top-right"')]),t._v("\n  "),a("span",{staticClass:"hljs-attr"},[t._v(":messages.sync")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"topRight"')]),t._v("\n>")]),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("vk-notification")]),t._v(">")]),t._v("\n\n"),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("vk-notification")]),t._v("\n  "),a("span",{staticClass:"hljs-attr"},[t._v("position")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"bottom-left"')]),t._v("\n  "),a("span",{staticClass:"hljs-attr"},[t._v(":messages.sync")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"bottomLeft"')]),t._v("\n>")]),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("vk-notification")]),t._v(">")]),t._v("\n\n"),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("vk-notification")]),t._v("\n  "),a("span",{staticClass:"hljs-attr"},[t._v("position")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"bottom-center"')]),t._v("\n  "),a("span",{staticClass:"hljs-attr"},[t._v(":messages.sync")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"bottomCenter"')]),t._v("\n>")]),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("vk-notification")]),t._v(">")]),t._v("\n\n"),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("vk-notification")]),t._v("\n  "),a("span",{staticClass:"hljs-attr"},[t._v("position")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"bottom-right"')]),t._v("\n  "),a("span",{staticClass:"hljs-attr"},[t._v(":messages.sync")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"bottomRight"')]),t._v("\n>")]),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("vk-notification")]),t._v(">")]),t._v("\n\n"),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("p")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("v-vk-margin")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("vk-button")]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("click")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v("\"topLeft.push('Top Left...')\"")]),t._v(">")]),t._v("Top Left"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("vk-button")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("vk-button")]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("click")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v("\"topCenter.push('Top Center...')\"")]),t._v(">")]),t._v("Top Center"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("vk-button")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("vk-button")]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("click")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v("\"topRight.push('Top Right...')\"")]),t._v(">")]),t._v("Top Right"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("vk-button")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("vk-button")]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("click")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v("\"bottomLeft.push('Bottom Left...')\"")]),t._v(">")]),t._v("Bottom Left"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("vk-button")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("vk-button")]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("click")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v("\"bottomCenter.push('Bottom Center...')\"")]),t._v(">")]),t._v("Bottom Center"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("vk-button")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("vk-button")]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("click")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v("\"bottomRight.push('Bottom Right...')\"")]),t._v(">")]),t._v("Bottom Right"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("vk-button")]),t._v(">")]),t._v("\n"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("p")]),t._v(">")])])])])],1)],1)},data:function(){return{topLeft:[],topCenter:[],topRight:[],bottomLeft:[],bottomCenter:[],bottomRight:[]}}},"md-code-example-53":{render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"uk-position-relative uk-margin-medium"},[a("vk-tabs",{staticClass:"uk-margin"},[a("vk-tabs-item",{attrs:{title:"Preview"}},[a("vk-notification",{attrs:{status:"primary",messages:t.messages},on:{"update:messages":function(s){t.messages=s}}}),t._v(" "),a("p",{directives:[{name:"vk-margin",rawName:"v-vk-margin"}]},[a("vk-button",{on:{click:function(s){t.messages.push("Primary")}}},[t._v("Primary")]),t._v(" "),a("vk-button",{on:{click:function(s){t.messages.push({message:"Success",status:"success"})}}},[t._v("Success")]),t._v(" "),a("vk-button",{on:{click:function(s){t.messages.push({message:"Warning",status:"warning"})}}},[t._v("Warning")]),t._v(" "),a("vk-button",{on:{click:function(s){t.messages.push({message:"Danger",status:"danger"})}}},[t._v("Danger")])],1)],1),t._v(" "),a("vk-tabs-item",{attrs:{title:"Markup"}},[a("pre",[a("code",{staticClass:"lang-html hljs",attrs:{id:"53"}},[t._v("---\nmessages: []\n---\n\n"),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("vk-notification")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("status")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"primary"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":messages.sync")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"messages"')]),t._v(">")]),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("vk-notification")]),t._v(">")]),t._v("\n\n"),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("p")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("v-vk-margin")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("vk-button")]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("click")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v("\"messages.push('Primary')\"")]),t._v(">")]),t._v("Primary"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("vk-button")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("vk-button")]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("click")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v("\"messages.push({ message: 'Success', status: 'success' })\"")]),t._v(">")]),t._v("Success"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("vk-button")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("vk-button")]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("click")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v("\"messages.push({ message: 'Warning', status: 'warning' })\"")]),t._v(">")]),t._v("Warning"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("vk-button")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("vk-button")]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("click")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v("\"messages.push({ message: 'Danger', status: 'danger' })\"")]),t._v(">")]),t._v("Danger"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("vk-button")]),t._v(">")]),t._v("\n"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("p")]),t._v(">")])])])])],1)],1)},data:function(){return{messages:[]}}}},__file:"pages/guide/notification.md"};s.default=n}});