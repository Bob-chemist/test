(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,n){e.exports={Auth:"Auth_Auth__3MLmN",Error:"Auth_Error__16NlV"}},26:function(e,t,n){e.exports={News:"News_News__1sspS"}},27:function(e,t,n){e.exports={Content:"Content_Content__3IeW0"}},29:function(e,t,n){e.exports={Button:"Button_Button__1WFL2"}},30:function(e,t,n){e.exports={Input:"Input_Input__2hT4d"}},31:function(e,t,n){e.exports={Main:"Main_Main__1LPmx"}},32:function(e,t,n){e.exports={Profile:"Profile_Profile__7TZW8"}},33:function(e,t,n){e.exports={Layout:"Layout_Layout__22sQx"}},34:function(e,t,n){e.exports={Navigation:"Navigation_Navigation__2HOZP"}},37:function(e,t,n){e.exports=n(48)},42:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(25),l=n.n(o),c=(n(42),n(4)),i=n(5),u=n(7),s=n(6),m=n(8),p=n(52),h=n(35),f=n(50),b=n(51),d=n(26),v=n.n(d),E=n(27),g=n.n(E),O=function(e){return r.a.createElement("div",{className:g.a.Content},r.a.createElement("h2",null,e.title),r.a.createElement("p",null,e.text))},j=n(10),y=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"renderContent",value:function(){return this.props.news.map(function(e,t){return r.a.createElement(O,{key:t,title:e.title,text:e.text})})}},{key:"render",value:function(){return r.a.createElement("div",{className:v.a.News},r.a.createElement("h1",null,"News"),this.renderContent())}}]),t}(a.Component);var w=Object(j.b)(function(e){return{news:e.news.news}})(y),C=n(21),_=n(17),x=n.n(_),k=n(29),N=n.n(k),I=function(e){return r.a.createElement("button",{className:N.a.Button,onClick:e.onClick},e.children)},L=n(30),M=n.n(L),P=function(e){var t=e.type||"text",n=[M.a.Input],a="".concat(t,"-").concat(Math.random());return r.a.createElement("div",{className:n.join(" ")},r.a.createElement("label",{htmlFor:a},e.label),r.a.createElement("input",{type:t,id:a,value:e.value,onChange:e.onChange,autoComplete:e.autocomplete}))},A=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={formControls:{login:{value:"",type:"text",autocomplete:"username",label:"Login"},password:{value:"",type:"password",autocomplete:"current-password",label:"Password"}},login:"Admin",password:"12345",errorMessage:""},n.submitHandler=function(e){e.preventDefault()},n.loginHandler=function(){var e=n.state.formControls.login.value,t=n.state.formControls.password.value;if(e===n.state.login&&t===n.state.password)return n.props.login();n.setState({errorMessage:"\u0418\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c \u0432\u0432\u0435\u0434\u0435\u043d\u044b \u043d\u0435 \u0432\u0435\u0440\u043d\u043e"})},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"onChangeHandler",value:function(e,t){var n=Object(C.a)({},this.state.formControls),a=Object(C.a)({},n[t]);a.value=e.target.value,n[t]=a,this.setState({formControls:n,errorMessage:""})}},{key:"renderInput",value:function(){var e=this;return Object.keys(this.state.formControls).map(function(t,n){var a=e.state.formControls[t];return r.a.createElement(P,{key:n,value:a.value,type:a.type,autocomplete:a.autocomplete,label:a.label,onChange:function(n){return e.onChangeHandler(n,t)}})})}},{key:"render",value:function(){return r.a.createElement("div",{className:x.a.Auth},r.a.createElement("div",null,r.a.createElement("h1",null,"Login, please"),r.a.createElement("form",{onSubmit:this.submitHandler,className:x.a.AuthForm},this.renderInput(),r.a.createElement("span",{className:x.a.Error},this.state.errorMessage),r.a.createElement("br",null),r.a.createElement(I,{onClick:this.loginHandler},"Login"))))}}]),t}(a.Component);var H=Object(j.b)(null,function(e){return{login:function(){return e({type:"LOGIN"})}}})(A),B=n(31),W=n.n(B),S=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:W.a.Main},r.a.createElement("h1",null,"Main Page"),r.a.createElement(O,{text:this.props.main}))}}]),t}(a.Component);var F=Object(j.b)(function(e){return{main:e.main.main}})(S),T=n(32),G=n.n(T),J=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:G.a.Profile},r.a.createElement("h1",null,"Profile page"),"Username: Admin ",r.a.createElement("br",null),"Password: 12345")}}]),t}(a.Component),U=n(33),Z=n.n(U),D=n(34),Q=n.n(D),R=n(53),V=[{to:"/",label:"Main",exact:!0},{to:"/profile",label:"Profile",exact:!1},{to:"/news",label:"News",exact:!1}],$=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"renderLinks",value:function(){return V.map(function(e,t){return r.a.createElement("li",{key:t},r.a.createElement(R.a,{to:e.to,exact:e.exact},e.label))})}},{key:"render",value:function(){return r.a.createElement("header",{className:Q.a.Navigation},r.a.createElement("nav",null,r.a.createElement("ul",null,this.renderLinks())))}}]),t}(r.a.Component),q=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:Z.a.Layout},r.a.createElement($,null),r.a.createElement("main",null,this.props.children))}}]),t}(a.Component),z=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Ooooppss, seems to be a problem!"),r.a.createElement("h2",null,"Try another URL"))}}]),t}(a.Component),K=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(q,null,r.a.createElement(p.a,null,r.a.createElement(h.a,{path:"/news",component:w}),r.a.createElement(h.a,{path:"/login",render:function(){return e.props.loggedIn?r.a.createElement(f.a,{to:"/profile"}):r.a.createElement(H,null)}}),r.a.createElement(h.a,{path:"/profile",render:function(){return e.props.loggedIn?r.a.createElement(J,null):r.a.createElement(f.a,{to:"/login"})}}),r.a.createElement(h.a,{path:"/test",render:function(){return r.a.createElement(f.a,{to:"/"})}}),r.a.createElement(h.a,{path:"/",exact:!0,component:F}),r.a.createElement(h.a,{component:z})))}}]),t}(a.Component);var X=Object(b.a)(Object(j.b)(function(e){return{loggedIn:e.login.loggedIn}})(K));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Y=n(49),ee=n(12),te={loggedIn:!1};var ne={news:[{title:"\u041a\u043d\u0438\u0433\u0438: \u041d. \u0421\u0442\u0438\u0432\u0435\u043d\u0441\u043e\u043d. \u0410\u043d\u0430\u0444\u0435\u043c",text:"\u041c\u044b \u0442\u0443\u0442 \u0432 \u0442\u0435\u0447\u0435\u043d\u0438\u0435 \u043c\u0435\u0441\u044f\u0446\u0430 \u0447\u0438\u0442\u0430\u043b\u0438 \u043d\u0430\u0443\u0447\u043d\u043e-\u0444\u0430\u043d\u0442\u0430\u0441\u0442\u0438\u0447\u0435\u0441\u043a\u0443\u044e \u043a\u043d\u0438\u0433\u0443 \u043d\u0435\u043a\u043e\u0435\u0433\u043e \u041d\u0438\u043b\u0430 \u0421\u0442\u0438\u0432\u0435\u043d\u0441\u043e\u043d\u0430 \u043f\u043e\u0434 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435\u043c \xab\u0410\u043d\u0430\u0444\u0435\u043c\xbb. \u0422\u0430\u043a \u043a\u0430\u043a \u043a\u043d\u0438\u0433\u0430 \u043f\u0440\u0435\u0442\u0435\u043d\u0434\u0443\u0435\u0442 \u043d\u0430 \u0440\u0430\u0441\u043a\u0440\u044b\u0442\u0438\u0435 \u0442\u0435\u043c\u044b \u043d\u0430\u0443\u043a\u0438 \u0438 \u0444\u0438\u043b\u043e\u0441\u043e\u0444\u0438\u0438, \u043c\u044b \u0432\u0437\u044f\u043b\u0438 \u043d\u0430 \u0441\u0435\u0431\u044f \u0441\u043c\u0435\u043b\u043e\u0441\u0442\u044c \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043a\u043e\u0435-\u043a\u0430\u043a\u0438\u0435 \u0432\u043f\u0435\u0447\u0430\u0442\u043b\u0435\u043d\u0438\u044f \u043e\u0442 \u0441\u0435\u0433\u043e \u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0435\u043d\u0438\u044f."},{title:"\u041c\u043e\u0434\u0435\u043b\u044c \u0412\u0441\u0435\u043b\u0435\u043d\u043d\u043e\u0439",text:"\u041f\u0430\u0440\u0443 \u043b\u0435\u0442 \u043d\u0430\u0437\u0430\u0434 \u043a\u0430\u043a\u043e\u0439-\u0442\u043e \u043c\u0443\u0436\u0438\u043a \u0438\u0437 \u044d\u0442\u0438\u0445 \u0438\u0445\u043d\u0438\u0445 \u043b\u0430\u0431\u043e\u0440\u0430\u0442\u043e\u0440\u0438\u0439 \u0437\u0430\u043f\u0438\u043b\u0438\u043b \u043d\u0430 \u0441\u0443\u043f\u0435\u0440\u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u0435 \u043c\u043e\u0434\u0435\u043b\u044c \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044f \u0412\u0441\u0435\u043b\u0435\u043d\u043d\u043e\u0439 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0438 \u0438\u043c\u0435\u044e\u0449\u0438\u0445\u0441\u044f \u0443 \u043d\u0430\u0441 \u043d\u0430 \u0441\u0435\u0433\u043e\u0434\u043d\u044f \u0434\u0430\u043d\u043d\u044b\u0445. \u041d\u0443 \u0442\u043e \u0435\u0441\u0442\u044c \u043e\u043d \u0432\u0437\u044f\u043b \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0411\u043e\u043b\u044c\u0448\u043e\u0433\u043e \u0412\u0437\u0440\u044b\u0432\u0430 \u0438 \u0441\u043c\u043e\u0434\u0435\u043b\u0438\u0440\u043e\u0432\u0430\u043b \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0435 \u0432\u0441\u0435\u043b\u0435\u043d\u043d\u043e\u0439 \u043f\u043e \u0438\u0437\u0432\u0435\u0441\u0442\u043d\u044b\u043c \u0444\u043e\u0440\u043c\u0443\u043b\u0430\u043c \u0438 \u0442\u0435\u043e\u0440\u0438\u044f\u043c. \u042d\u0442\u043e \u0431\u044b\u043b\u0430 \u0434\u043e\u0432\u043e\u043b\u044c\u043d\u043e \u0442\u043e\u0447\u043d\u0430\u044f \u0438 \u043e\u0431\u0448\u0438\u0440\u043d\u0430\u044f \u043c\u043e\u0434\u0435\u043b\u044c - \u0433\u0438\u0433\u0430\u043d\u0442\u0441\u043a\u0438\u0435 \u0440\u0430\u0441\u0447\u0435\u0442\u044b \u043f\u0440\u043e\u0432\u043e\u0434\u0438\u043b\u0438\u0441\u044c \u0432 \u043a\u0443\u0431\u0435 \u0441 \u043f\u043e\u043f\u0435\u0440\u0435\u0447\u043d\u0438\u043a\u043e\u043c \u0432 350 \u043c\u043b\u043d. \u0441\u0432\u0435\u0442\u043e\u0432\u044b\u0445 \u043b\u0435\u0442. \u0412 \u0438\u0442\u043e\u0433\u0435 \u043f\u043e\u043b\u0443\u0447\u0438\u043b\u0430\u0441\u044c \u0441\u0438\u043c\u043f\u0430\u0442\u0438\u0447\u043d\u0430\u044f \u0412\u0441\u0435\u043b\u0435\u043d\u043d\u0430\u044f, \u043e\u0447\u0435\u043d\u044c \u0434\u0430\u0436\u0435 \u043f\u043e\u0445\u043e\u0436\u0430\u044f \u043d\u0430 \u0440\u0435\u0430\u043b\u044c\u043d\u0443\u044e. "}]};var ae={main:"\u041c\u044b \u0442\u0443\u0442 \u0432 \u0442\u0435\u0447\u0435\u043d\u0438\u0435 \u043c\u0435\u0441\u044f\u0446\u0430 \u0447\u0438\u0442\u0430\u043b\u0438 \u043d\u0430\u0443\u0447\u043d\u043e-\u0444\u0430\u043d\u0442\u0430\u0441\u0442\u0438\u0447\u0435\u0441\u043a\u0443\u044e \u043a\u043d\u0438\u0433\u0443 \u043d\u0435\u043a\u043e\u0435\u0433\u043e \u041d\u0438\u043b\u0430 \u0421\u0442\u0438\u0432\u0435\u043d\u0441\u043e\u043d\u0430 \u043f\u043e\u0434 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435\u043c \xab\u0410\u043d\u0430\u0444\u0435\u043c\xbb. \u0422\u0430\u043a \u043a\u0430\u043a \u043a\u043d\u0438\u0433\u0430 \u043f\u0440\u0435\u0442\u0435\u043d\u0434\u0443\u0435\u0442 \u043d\u0430 \u0440\u0430\u0441\u043a\u0440\u044b\u0442\u0438\u0435 \u0442\u0435\u043c\u044b \u043d\u0430\u0443\u043a\u0438 \u0438 \u0444\u0438\u043b\u043e\u0441\u043e\u0444\u0438\u0438, \u043c\u044b \u0432\u0437\u044f\u043b\u0438 \u043d\u0430 \u0441\u0435\u0431\u044f \u0441\u043c\u0435\u043b\u043e\u0441\u0442\u044c \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043a\u043e\u0435-\u043a\u0430\u043a\u0438\u0435 \u0432\u043f\u0435\u0447\u0430\u0442\u043b\u0435\u043d\u0438\u044f \u043e\u0442 \u0441\u0435\u0433\u043e \u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0435\u043d\u0438\u044f."};var re=Object(ee.b)({login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te;switch((arguments.length>1?arguments[1]:void 0).type){case"LOGIN":return{loggedIn:!0};default:return e}},news:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne;return arguments.length>1&&arguments[1],e},main:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae;return arguments.length>1&&arguments[1],e}}),oe=Object(ee.c)(re),le=r.a.createElement(j.a,{store:oe},r.a.createElement(Y.a,null,r.a.createElement(X,null)));l.a.render(le,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[37,1,2]]]);
//# sourceMappingURL=main.86846b1a.chunk.js.map