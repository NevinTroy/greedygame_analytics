(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a(53)},30:function(e,t,a){},42:function(e,t){},44:function(e,t,a){},46:function(e,t,a){},48:function(e,t,a){e.exports=a.p+"static/media/logo.63207fb8.svg"},49:function(e,t,a){},51:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),l=a.n(c),u=a(1),s=a(10),i=(a(30),a(2)),o=(a(32),function(e,t,a){e({type:"REQUEST_PENDING"}),fetch("http://go-dev.greedygame.com/v3/dummy/report?startDate=".concat(t,"&endDate=").concat(a)).then(function(e){return e.json()}).then(function(t){fetch("http://go-dev.greedygame.com/v3/dummy/apps").then(function(e){return e.json()}).then(function(a){window.__appName=a,window.__data=t.data,e({type:"REQUEST_SUCCESS",payload:{cache_time:t.cache_time,data:t.data,appName:a.data}})})}).catch(function(t){return e({type:"REQUEST_FAILED",payload:t})})}),d=function(e,t){e({type:"ENABLE_CHANGE",payload:t})},m=a(3),E=(a(44),function(e){var t=e.setEnable,a=e.requestData,c=e.startDate,l=e.endDate,s=e.defaultenableVal,o=e.setToggle,d=Object(u.b)(),E=Object(n.useState)(s),p=Object(i.a)(E,2),f=p[0],g=p[1],b=Object(n.useState)(s),y=Object(i.a)(b,2),h=y[0],D=y[1],v=r.a.useRef(),N=r.a.useRef(),O=function(){var e=Object(m.a)(f),t=e.splice(v.current,1)[0];e.splice(N.current,0,t),v.current=null,N.current=null,g(e)},j=function(e){var t=e.target,a=t.name,n=t.checked;D(n?[].concat(Object(m.a)(h),[a]):h.filter(function(e){return e!==a}))};function S(e){return h.includes(e)}return r.a.createElement("div",{className:"container"},r.a.createElement("h3",null,"Dimensions and Metrics"),r.a.createElement("div",{className:"yuhh"},f.map(function(e,t){return r.a.createElement("div",{className:"checkbox",key:t,draggable:!0,onDragStart:function(e){return v.current=t},onDragEnter:function(e){return N.current=t},onDragEnd:O,onDragOver:function(e){return e.preventDefault()}},r.a.createElement("label",null,r.a.createElement("input",{id:t,name:e,type:"checkbox",checked:S(e),onChange:j}),r.a.createElement("span",null,e)))})),r.a.createElement("button",{onClick:function(){var e=f.filter(function(e){return h.includes(e)});a(d,c,l),t(d,e)},className:"apply"},"Apply"),r.a.createElement("button",{className:"close",onClick:function(){o(!1)}},"Close"))}),p=(a(46),function(){return r.a.createElement("div",{className:"error"},r.a.createElement("img",{src:a(48),alt:"No Data found "}),r.a.createElement("div",{className:"text"},r.a.createElement("h1",null,"Hey! Something's off!"),r.a.createElement("h1",null,"We couldn't display the given data."),r.a.createElement("h3",null,"Try changing your filters or selecting a different date")))}),f=(a(49),a(51),function(e){var t=e.enableVal,a=e.isPending,n=e.data,c=e.appName;return r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Date"),r.a.createElement("th",null,"App Name"),t.map(function(e,t){return r.a.createElement("th",{key:t},e)}))),r.a.createElement("tbody",null,a?r.a.createElement("td",null,"Loading"):n.map(function(e,a){return r.a.createElement("tr",{key:a},r.a.createElement("td",null,function(e){var t=new Date(e),a=t.toLocaleString("default",{month:"long"});return"".concat(t.getDate()," ").concat(a," ").concat(t.getFullYear())}(e.date)),c.map(function(t,a){if(t.app_id===e.app_id)return r.a.createElement("td",{key:a},t.app_name)}),t.map(function(t,a){switch(t){case"Clicks":return r.a.createElement("td",{key:a},e.clicks);case"AD Requests":return r.a.createElement("td",{key:a},e.requests);case"AD Responses":return r.a.createElement("td",{key:a},e.responses);case"Impressions":return r.a.createElement("td",{key:a},e.impressions);case"Revenue":return r.a.createElement("td",{key:a},e.revenue.toFixed(2));case"Fill Rate":return r.a.createElement("td",{key:a},(e.requests/e.responses*100).toFixed(2));case"CTR":return r.a.createElement("td",{key:a},(e.clicks/e.impressions*100).toFixed(2));default:return null}}))})))}),g=a(16),b=function(){var e=Object(u.b)(),t=Object(u.c)(function(e){return e.requestData.isPending}),a=(Object(u.c)(function(e){return e.requestData.cache_time}),Object(u.c)(function(e){return e.requestData.data})),c=Object(u.c)(function(e){return e.requestData.appName}),l=Object(u.c)(function(e){return e.setStartDate.startDate}),s=Object(u.c)(function(e){return e.setEndDate.endDate}),m=Object(u.c)(function(e){return e.setEnable.enableVal}),b=Object(u.c)(function(e){return e.requestData.error}),y=Object(n.useState)(!1),h=Object(i.a)(y,2),D=h[0],v=h[1];Object(n.useEffect)(function(){o(e,"2020-12-11","2020-12-12")},[b]);var N=function(t){"startDate"===t.target.id?function(e,t){e({type:"START_DATE_CHANGE",payload:t})}(e,t.target.value):function(e,t){e({type:"END_DATE_CHANGE",payload:t})}(e,t.target.value)};return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"bar"}),r.a.createElement("div",{className:"header"},r.a.createElement("h1",null,"Analytics")),r.a.createElement("div",{className:"settings"},r.a.createElement("input",{id:"startDate",type:"date",value:l,onChange:function(e){N(e)}}),r.a.createElement("input",{id:"endDate",type:"date",value:s,onChange:function(e){N(e)}}),r.a.createElement("button",{onClick:function(){v(!D)}},r.a.createElement(g.a,{className:"settingsIcon"}),"Settings"),D?r.a.createElement(E,{setEnable:d,requestData:o,startDate:l,endDate:s,defaultenableVal:m,setToggle:v}):r.a.createElement("h1",null,"Sorry")),0!==Object.keys(a).length?r.a.createElement("div",{className:"table"},r.a.createElement(f,{enableVal:m,isPending:t,data:a,appName:c})):r.a.createElement("div",{className:"errorBoundary",styles:{marginTop:D?"120px":"10px"}},r.a.createElement(p,null)))},y={isPending:!1,cache_time:0,data:[],error:"",appName:[]},h={startDate:"2020-12-11"},D={endDate:"2020-12-12"},v={enableVal:["Clicks","AD Requests","AD Responses","Impressions","Revenue","Fill Rate","CTR"]},N=Object(s.a)({requestData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_SUCCESS":return Object.assign({},e,{data:t.payload.data,isPending:!1,appName:t.payload.appName,cache_time:t.payload.cache_time});case"REQUEST_FAILED":return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}},setEnable:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"ENABLE_CHANGE":return Object.assign({},e,{enableVal:t.payload});default:return e}},setStartDate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"START_DATE_CHANGE":return Object.assign({},e,{startDate:t.payload});default:return e}},setEndDate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"END_DATE_CHANGE":return Object.assign({},e,{endDate:t.payload});default:return e}}}),O=function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(t){return}}(),j=Object(s.b)(N,O);j.subscribe(function(){!function(e){try{var t=JSON.stringify(e);localStorage.setItem("state",t)}catch(a){}}(j.getState())}),l.a.createRoot(document.getElementById("root")).render(r.a.createElement(u.a,{store:j},r.a.createElement(b,null)))}},[[17,2,1]]]);
//# sourceMappingURL=main.1f8dda52.chunk.js.map