(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1077:function(e,t,n){"use strict";n.r(t);n(22);var o=n(4),r=n(14),a=n(15),c=n(20),u=n(16),i=n(19),l=n(3),s=n(1),f=n.n(s),h=n(0),m=n.n(h),p=n(7),E=n.n(p),b={},q={quote:b,fetching:!1},d=function(){return{type:"REQUESTING_QUOTE",quote:b}},v=function(e){return{type:"RECEIVED_QUOTE",quote:e}},O=function(){return m.a.createElement("div",null,"Fetching quote...")},Q=function(e){return m.a.createElement("button",{id:"new-quote",type:"button",className:"btn btn-primary",onClick:e.fetchQuote},"New quote")},w=function(e){return m.a.createElement("div",{className:"pt-2"},m.a.createElement("a",{className:"btn btn-secondary twitter-share-button",role:"button","aria-pressed":"true",id:"tweet-quote",href:"https://twitter.com/intent/tweet?text=".concat(e.quote.text,"-").concat(e.quote.author),target:"_blank",rel:"noopener noreferrer"},"Share quote"))},j=function(e){return m.a.createElement("blockquote",{className:"blockquote text-right"},m.a.createElement("p",{id:"text",className:"mb-0"},e.quote.text),m.a.createElement("footer",{id:"author",className:"blockquote-footer"},e.quote.author))},g=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).fetchQuote=n.fetchQuote.bind(Object(l.a)(Object(l.a)(n))),n}return Object(i.a)(t,e),Object(a.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchQuote()}},{key:"fetchQuote",value:function(){this.props.fetchQuote()}},{key:"render",value:function(){var e;return e=this.props.fetching?m.a.createElement(O,null):m.a.createElement("div",null,m.a.createElement(j,{quote:this.props.quote}),m.a.createElement(Q,{fetchQuote:this.fetchQuote}),m.a.createElement(w,{quote:this.props.quote})),m.a.createElement("div",{id:"quote-box",className:"container"},m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-6 offset-3 jumbotron p-5 mt-5"},e)))}}]),t}(h.Component);j.propTypes={quote:f.a.object};var k=Object(o.b)(function(e){return{quote:e.quote,fetching:e.fetching}},function(e){return{fetchQuote:function(){e(function(e){e(d()),setTimeout(function(){var t={author:E.a.hacker.noun(),text:E.a.hacker.phrase()};e(v(t))},500)})}}})(g),N=n(2),y=n(17),x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REQUESTING_QUOTE":return{quote:b,fetching:!0};case"RECEIVED_QUOTE":return{quote:t.quote,fetching:!1};default:return e}},T=function(){return Object(N.c)(x,Object(N.a)(y.a))},U=n(18),I=T();Object(U.render)(m.a.createElement(o.a,{store:I},m.a.createElement(k,null)),document.getElementById("root"))},21:function(e,t,n){e.exports=n(1077)}},[[21,2,1]]]);
//# sourceMappingURL=main.5d5df5bc.chunk.js.map