(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1077:function(e,t,n){"use strict";n.r(t);n(22);var o=n(4),a=n(14),r=n(15),c=n(20),u=n(16),i=n(19),l=n(3),s=n(0),f=n.n(s),h=n(7),m=n.n(h),E={},b={quote:E,fetching:!1},p=function(){return{type:"REQUESTING_QUOTE",quote:E}},d=function(e){return{type:"RECEIVED_QUOTE",quote:e}},q=function(){return f.a.createElement("div",null,"Fetching quote...")},v=function(e){var t=e.fetchQuote;return f.a.createElement("button",{id:"new-quote",type:"button",className:"btn btn-primary",onClick:t},"New quote")},O=function(e){var t=e.quote;return f.a.createElement("div",{className:"pt-2"},f.a.createElement("a",{className:"btn btn-secondary twitter-share-button",role:"button","aria-pressed":"true",id:"tweet-quote",href:"https://twitter.com/intent/tweet?text=".concat(t.text,"-").concat(t.author),target:"_blank",rel:"noopener noreferrer"},"Share quote"))},Q=function(e){var t=e.quote;return f.a.createElement("blockquote",{className:"blockquote text-right"},f.a.createElement("p",{id:"text",className:"mb-0"},t.text),f.a.createElement("footer",{id:"author",className:"blockquote-footer"},t.author))},w=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).fetchQuote=n.fetchQuote.bind(Object(l.a)(Object(l.a)(n))),n}return Object(i.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchQuote()}},{key:"fetchQuote",value:function(){this.props.fetchQuote()}},{key:"render",value:function(){var e,t=this.props,n=t.quote,o=t.fetchQuote;return e=this.props.fetching?f.a.createElement(q,null):f.a.createElement("div",null,f.a.createElement(Q,{quote:n}),f.a.createElement(v,{fetchQuote:o}),f.a.createElement(O,{quote:n})),f.a.createElement("div",{id:"quote-box",className:"container"},f.a.createElement("div",{className:"row"},f.a.createElement("div",{className:"col-6 offset-3 jumbotron p-5 mt-5"},e)))}}]),t}(s.Component),g=Object(o.b)(function(e){return{quote:e.quote,fetching:e.fetching}},function(e){return{fetchQuote:function(){e(function(e){e(p()),setTimeout(function(){var t={author:m.a.hacker.noun(),text:m.a.hacker.phrase()};e(d(t))},500)})}}})(w),j=n(2),k=n(17),N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REQUESTING_QUOTE":return{quote:E,fetching:!0};case"RECEIVED_QUOTE":return{quote:t.quote,fetching:!1};default:return e}},y=function(){return Object(j.c)(N,Object(j.a)(k.a))},x=n(18),T=y();Object(x.render)(f.a.createElement(o.a,{store:T},f.a.createElement(g,null)),document.getElementById("root"))},21:function(e,t,n){e.exports=n(1077)}},[[21,2,1]]]);
//# sourceMappingURL=main.9b72536b.chunk.js.map