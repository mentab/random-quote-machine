(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1077:function(t,e,n){"use strict";n.r(e);var o=n(0),u=n.n(o),r=n(11),c=n(4),a=n(15),i=n(16),l=n(20),s=n(17),f=n(19),h=n(3),E=n(2),b=n(18),m=n(7),d=n.n(m),p={},q=function(){return{type:"REQUESTING_QUOTE"}},v=function(t){return{type:"RECEIVED_QUOTE",quote:t}},O=Object(E.c)(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"REQUESTING_QUOTE":return{quote:p};case"RECEIVED_QUOTE":return{quote:e.quote};default:return t}},Object(E.a)(b.a)),Q=function(t){function e(t){var n;return Object(a.a)(this,e),(n=Object(l.a)(this,Object(s.a)(e).call(this,t))).fetchQuote=n.fetchQuote.bind(Object(h.a)(Object(h.a)(n))),n}return Object(f.a)(e,t),Object(i.a)(e,[{key:"componentDidMount",value:function(){this.props.fetchQuote()}},{key:"fetchQuote",value:function(){this.props.fetchQuote()}},{key:"render",value:function(){return u.a.createElement("div",{id:"quote-box",class:"container"},u.a.createElement("div",{class:"row"},u.a.createElement("div",{class:"col-6 offset-3 jumbotron p-5 mt-5"},u.a.createElement(k,{quote:this.props.quote}),u.a.createElement(w,{fetchQuote:this.fetchQuote}),u.a.createElement(j,{quote:this.props.quote}))))}}]),e}(o.Component),j=function(t){return u.a.createElement("div",{class:"pt-2"},u.a.createElement("a",{class:"btn btn-secondary twitter-share-button",role:"button","aria-pressed":"true",id:"tweet-quote",href:"https://twitter.com/intent/tweet?text=Text to do",target:"_blank"},"Share quote"))},w=function(t){return u.a.createElement("button",{id:"new-quote",type:"button",class:"btn btn-primary",onClick:t.fetchQuote},"New quote")},k=function(t){var e;return e=void 0===t.quote||void 0!==t.quote&&0===Object.keys(t.quote).length&&t.quote.constructor===Object?u.a.createElement(x,null):u.a.createElement(y,{quote:t.quote}),u.a.createElement("div",null,e)},y=function(t){return u.a.createElement("blockquote",{class:"blockquote text-right"},u.a.createElement("p",{id:"text",class:"mb-0"},t.quote.text),u.a.createElement("footer",{id:"author",class:"blockquote-footer"},t.quote.author))},x=function(){return u.a.createElement("div",null,"Fetching quote...")},T=Object(c.b)(function(t){return{quote:t.quote}},function(t){return{fetchQuote:function(){t(function(t){t(q()),setTimeout(function(){var e={author:d.a.hacker.noun(),text:d.a.hacker.phrase()};t(v(e))},500)})}}})(Q);n(1075);Object(r.render)(u.a.createElement(c.a,{store:O},u.a.createElement(T,null)),document.getElementById("root"))},21:function(t,e,n){t.exports=n(1077)}},[[21,2,1]]]);
//# sourceMappingURL=main.5c554192.chunk.js.map