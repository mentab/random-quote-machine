(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,n){e.exports=n(27)},27:function(e,t,n){"use strict";n.r(t);var o=n(0),u=n.n(o),c=n(9),r=n(4),a=n(13),i=n(14),h=n(18),f=n(15),s=n(17),l=n(3),E=n(2),p=n(16),d={},m=function(){return{type:"REQUESTING_QUOTE"}},b=function(e){return{type:"RECEIVED_QUOTE",quote:e}},q=Object(E.c)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REQUESTING_QUOTE":return{fetching:!0,quote:[]};case"RECEIVED_QUOTE":return{fetching:!1,quote:t.quote};default:return e}},Object(E.a)(p.a)),O=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(h.a)(this,Object(f.a)(t).call(this,e))).fetchQuote=n.fetchQuote.bind(Object(l.a)(Object(l.a)(n))),n}return Object(s.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchQuote()}},{key:"fetchQuote",value:function(){this.props.fetchQuote()}},{key:"render",value:function(){return u.a.createElement("div",{id:"quote-box"},u.a.createElement(j,{quote:this.props.quote}),u.a.createElement(Q,{fetchQuote:this.fetchQuote}),u.a.createElement(v,null))}}]),t}(o.Component),Q=function(e){return u.a.createElement("button",{id:"new-quote",onClick:e.fetchQuote},"New quote")},j=function(e){return u.a.createElement("div",null,u.a.createElement("p",{id:"text"},e.quote.text),u.a.createElement("p",{id:"author"},e.quote.character))},v=function(){return u.a.createElement("a",{id:"tweet-quote",href:"#"},"Share quote")};j.defaultProps={quote:{character:"There is nothing here",text:"Its more or less the same here"}};var w=Object(r.b)(function(e){return{quote:e}},function(e){return{fetchQuote:function(){e(function(e){return e(m()),fetch("https://thesimpsonsquoteapi.glitch.me/quotes").then(function(t){e(b(t.data))})})}}})(O);Object(c.render)(u.a.createElement(r.a,{store:q},u.a.createElement(w,null)),document.getElementById("root"))}},[[19,2,1]]]);
//# sourceMappingURL=main.d9031fae.chunk.js.map