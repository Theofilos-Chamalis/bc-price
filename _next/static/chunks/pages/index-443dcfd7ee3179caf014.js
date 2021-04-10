(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3144:function(e){"use strict";var t=self.fetch.bind(self);e.exports=t,e.exports.default=e.exports},5275:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(5893),c=n(9008),i=n(1664),o=function(){return(0,r.jsx)("nav",{className:"navbar navbar-expand navbar-dark bg-dark mb-4",children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsxs)("a",{className:"navbar-brand",href:"#",children:[(0,r.jsx)("img",{src:"../static/bitcoin.png",width:"30",height:"30",className:"d-inline-block align-top mr-2",alt:""}),"BC-Price"]}),(0,r.jsx)("div",{className:"collapse navbar-collapse",children:(0,r.jsxs)("ul",{className:"navbar-nav ml-auto",children:[(0,r.jsx)("li",{className:"nav-item",children:(0,r.jsx)(i.default,{href:"/",children:(0,r.jsx)("a",{className:"nav-link",children:"Home"})})}),(0,r.jsx)("li",{className:"nav-item",children:(0,r.jsx)(i.default,{href:"/about",children:(0,r.jsx)("a",{className:"nav-link",children:"About"})})})]})})]})})},a="\xa9 ".concat((new Date).getFullYear()," Copyright: Theofilos Chamalis"),s=function(){return(0,r.jsx)("footer",{className:"page-footer font-small fixed-bottom",children:(0,r.jsx)("div",{className:"footer-copyright text-center py-3",children:a})})},l=function(e){return(0,r.jsxs)("div",{children:[(0,r.jsxs)(c.default,{children:[(0,r.jsx)("title",{children:"BC-Price"}),(0,r.jsx)("link",{rel:"stylesheet",href:"https://bootswatch.com/4/minty/bootstrap.min.css"}),(0,r.jsx)("link",{rel:"icon",type:"image/x-icon",href:"/static/bitcoin.png"})]}),(0,r.jsx)(o,{}),(0,r.jsx)("div",{className:"container",children:e.children}),(0,r.jsx)(s,{})]})}},2201:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var r=n(7757),c=n.n(r);function i(e,t,n,r,c,i,o){try{var a=e[i](o),s=a.value}catch(l){return void n(l)}a.done?t(s):Promise.resolve(s).then(r,c)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(r,c){var o=e.apply(t,n);function a(e){i(o,r,c,a,s,"next",e)}function s(e){i(o,r,c,a,s,"throw",e)}a(void 0)}))}}var a=n(5893),s=(n(3144),n(5275));function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){return(h="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){return!t||"object"!==h(t)&&"function"!==typeof t?f(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m=n(7294);function x(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=b(e);if(t){var c=b(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return p(this,n)}}var y=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(i,e);var t,n,r,c=x(i);function i(){var e;l(this,i);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return v(f(e=c.call.apply(c,[this].concat(n))),"state",{currency:"EUR"}),e}return t=i,(n=[{key:"render",value:function(){var e=this;return(0,a.jsxs)(m.Fragment,{children:[(0,a.jsxs)("div",{className:"card",children:[(0,a.jsx)("div",{className:"card-header",children:"Select your currency"}),(0,a.jsx)("div",{className:"card-body",children:(0,a.jsxs)("select",{className:"form-control",onChange:function(t){return e.setState({currency:t.target.value})},children:[(0,a.jsx)("option",{value:"EUR",children:"EUR"}),(0,a.jsx)("option",{value:"GBP",children:"GBP"}),(0,a.jsx)("option",{value:"USD",children:"USD"})]})})]}),(0,a.jsx)("br",{}),(0,a.jsxs)("div",{className:"card",children:[(0,a.jsxs)("div",{className:"card-header",children:["Bitcoin rate for ",this.props.bpi[this.state.currency].description]}),(0,a.jsxs)("div",{className:"card-body",children:[(0,a.jsx)("span",{className:"badge badge-primary",children:this.props.bpi[this.state.currency].code}),(0,a.jsx)("strong",{children:" "+this.props.bpi[this.state.currency].rate})]})]})]})}}])&&u(t.prototype,n),r&&u(t,r),i}(m.Component),j=function(e){return(0,a.jsx)(s.Z,{children:(0,a.jsxs)("div",{children:[(0,a.jsx)("h1",{children:"Welcome to BC-Price"}),(0,a.jsx)("p",{children:"Check out the current Bitcoin rate"}),(0,a.jsx)(y,{bpi:e.bpi})]})})};j.getInitialProps=o(c().mark((function e(){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.coindesk.com/v1/bpi/currentprice.json");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",{bpi:n.bpi});case 7:case"end":return e.stop()}}),e)})));var g=j},8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(2201)}])}},function(e){e.O(0,[774,351,996],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);