(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5eb945d1"],{"40cf":function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.loggedIn?r("div",{staticClass:"hello"},[r("h1",[e._v("Welcome "+e._s(e.user.name))]),r("h2",[e._v("Your email is "+e._s(e.user.email))]),r("h2",[e._v("Your key is "+e._s(e.truncatedApi))]),r("h2",[e._v("Above Key is Valid for 1 Day, after that You have to Login Another time")])]):r("div",{staticClass:"hello"},[r("h1",[e._v("This is homepage")]),r("h2"),r("h2",[e._v("Not Present")])])},a=[],i=(r("fb6a"),{data:function(){return{msg:"Hello World!",user:JSON.parse(localStorage.getItem("user")),truncatedApi:localStorage.getItem("jwt").slice(10,20)+"............"+localStorage.getItem("jwt").slice(20,25)}},computed:{loggedIn:function(){return null!=this.user}}}),l=i,n=r("2877"),s=Object(n["a"])(l,o,a,!1,null,null,null);t["default"]=s.exports},fb6a:function(e,t,r){"use strict";var o=r("23e7"),a=r("861d"),i=r("e8b5"),l=r("23cb"),n=r("50c4"),s=r("fc6a"),c=r("8418"),u=r("b622"),d=r("1dde"),h=r("ae40"),f=d("slice"),v=h("slice",{ACCESSORS:!0,0:0,1:2}),g=u("species"),p=[].slice,m=Math.max;o({target:"Array",proto:!0,forced:!f||!v},{slice:function(e,t){var r,o,u,d=s(this),h=n(d.length),f=l(e,h),v=l(void 0===t?h:t,h);if(i(d)&&(r=d.constructor,"function"!=typeof r||r!==Array&&!i(r.prototype)?a(r)&&(r=r[g],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return p.call(d,f,v);for(o=new(void 0===r?Array:r)(m(v-f,0)),u=0;f<v;f++,u++)f in d&&c(o,u,d[f]);return o.length=u,o}})}}]);