(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,a,t){e.exports=t.p+"static/media/logo.8d469ab9.png"},106:function(e,a,t){e.exports=t(186)},111:function(e,a,t){},138:function(e,a){},142:function(e,a,t){},143:function(e,a,t){},181:function(e,a,t){},182:function(e,a,t){e.exports=t.p+"static/media/projector.9863cd8f.jpg"},183:function(e,a,t){},184:function(e,a,t){},185:function(e,a,t){},186:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(36),i=t.n(r),l=(t(111),t(11)),c=t(7),s=t(13),p=t(12),m=t(14),d=t(32),u=t(30);var g=function(e){var a=e.children;return o.a.createElement("div",{style:{width:"100%",clear:"both",padding:"5%",marginLeft:"0em",textAlign:"center",backgroundColor:"steelblue"},className:"jumbotron"},a)},x=t(39),b=t(5),h=t(100),f=t.n(h),v=t(101),E=t.n(v),w=function(e){function a(){var e;return Object(l.a)(this,a),(e=Object(s.a)(this,Object(p.a)(a).call(this))).handleChange=function(a){var t=a.target,n=t.name,o=t.value;e.setState(Object(b.a)({},n,o))},e.updateSubmit=function(a){a.preventDefault();var t=e.state.userName;e.socket.emit("username",t),e.setState({nameSubmitted:!0})},e.handleSubmit=function(a){a.preventDefault();var t=a.target.value;if(13===a.keyCode&&t){var n={body:t,from:e.state.userName,time:E()().format("llll")};e.setState({messages:[].concat(Object(x.a)(e.state.messages),[n]),message:""}),e.socket.emit("message",n)}},e.state={userName:"",message:"",nameSubmitted:!1,messages:[],users:[],endpoint:"http://localhost:3001/"},e}return Object(m.a)(a,e),Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.socket=f()(this.state.endpoint),this.socket.on("connect",function(){console.log("connected"),e.socket.on("username",function(a){console.log(a),e.setState({users:[].concat(Object(x.a)(e.state.users),[a])})}),e.socket.on("message",function(a){e.setState({messages:[].concat(Object(x.a)(e.state.messages),[a])})}),e.socket.on("messages",function(e){console.log("You have joined room",e)})}),this.socket.emit("room","abc")}},{key:"render",value:function(){var e=this,a=this.state.messages.map(function(a,t){return console.log(e.state.messages),o.a.createElement("li",{key:t},o.a.createElement("b",null,a.from," (",a.time,"):")," ",o.a.createElement("p",null,a.body))}),t=this.state.users.map(function(e,a){return o.a.createElement("div",{key:a},e)});return o.a.createElement("div",{className:"App"},this.state.nameSubmitted?o.a.createElement("div",{id:"entrance container"},o.a.createElement("ul",{id:"messages row"},t,a),o.a.createElement("div",{id:"chatForm"},o.a.createElement("span",{className:"userName",name:"userName"},this.state.userName),o.a.createElement("input",{className:"msg",name:"message",value:this.state.message,onChange:this.handleChange,id:"txt",placeholder:"Type your message here & press enter...",onKeyUp:this.handleSubmit}))):o.a.createElement("div",{id:"user"},o.a.createElement("input",{onChange:this.handleChange,name:"userName",value:this.state.userName,type:"text",placeholder:"Enter a nickname",id:"userName"}),o.a.createElement("button",{id:"enter",className:"btn btn-success",onClick:this.updateSubmit},"Start Chatting")))}}]),a}(n.Component);var N=function(e){var a=e.children;return o.a.createElement("div",{className:"embed-responsive embed-responsive-21by9"},a)};var k=function(e){var a=e.children;return o.a.createElement("div",{style:{margin:"5%"},className:"btn-toolbar",role:"toolbar"},a)};t(142);var y=function(e){var a=e.children;return o.a.createElement("button",{className:"btn btn-primary",type:"button"},a)};function j(){return"copyInvite()"}function S(){return"outFunc()"}var O=function(){return o.a.createElement("div",{id:"inviteModal",className:"modal fade",role:"dialog"},o.a.createElement("div",{className:"modal-dialog"},o.a.createElement("div",{className:"modal-content"},o.a.createElement("div",{className:"modal-header"},o.a.createElement("h4",{className:"modal-title"},"Invite a Friend"),o.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal"},"\xd7")),o.a.createElement("div",{className:"modal-body"},o.a.createElement("p",null,"Send your friends the room link and start watching videos together!"),o.a.createElement("input",{className:"inv_input field left",id:"inv_input",type:"text",value:"project3-30992.herokuapp.com/ROOMNUM",readOnly:!0})),o.a.createElement("div",{className:"modal-footer"},o.a.createElement("div",{style:{opacity:"1"},className:"tooltip"},o.a.createElement("button",{type:"button",className:"btn btn-default",onClick:j,onMouseOut:S},o.a.createElement("span",{className:"tooltiptext",id:"myTooltip"},"Copy to clipboard"),o.a.createElement("i",{className:"fas fa-clipboard"})),o.a.createElement("button",{type:"button",className:"btn btn-default","data-dismiss":"modal"},"Close"))))))},C=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=Object(s.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(o)))).state={},t.playVideo=function(){return"playVideo(roomnum)"},t.syncVideo=function(){return"syncVideo(roomnum);syncAlert();"},t.changeHost=function(){return"changeHost(roomnum)"},t}return Object(m.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("input",{type:"Video",style:{maxWidth:"300px",marginRight:".5em",marginBottom:".5em"},className:"form-control",id:"inputVideoId",placeholder:"Enter Video ID / URL"}),o.a.createElement("button",{style:{float:"left",backgroundColor:"indigo",height:"auto",marginBottom:".5em"},type:"button",className:"nonmobile-hide btn btn-info btn-sm invite-button","data-toggle":"modal","data-target":"#inviteModal"},o.a.createElement("span",null,"Invite   "),o.a.createElement("i",{style:{width:"20px",height:"20px"},className:"fas fa-user-plus"})),o.a.createElement(O,null),o.a.createElement(N,null,o.a.createElement("iframe",{id:"existing-iframe-example",width:"640",height:"360",src:"https://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1",frameBorder:"0.7",title:"youtube",style:{border:"solid 4px #37474F"}})),o.a.createElement("br",null),o.a.createElement(k,null,o.a.createElement(y,{id:"playButton",onClick:this.playVideo},o.a.createElement("i",{className:"fa fa-play"})," Play / ",o.a.createElement("i",{className:"fa fa-pause"})," Pause"),o.a.createElement(y,{id:"syncbutton",onClick:this.syncVideo},o.a.createElement("i",{className:"fa fa-sync"})," Sync"),o.a.createElement(y,{id:"hostbutton",onClick:this.changeHost},o.a.createElement("i",{className:"fas fa-users"})," Make me the host!")))}}]),a}(n.Component);function F(e){var a=e.fluid,t=e.children;return o.a.createElement("div",{className:"container".concat(a?"-fluid":"")},t)}function I(e){var a=e.fluid,t=e.children;return o.a.createElement("div",{className:"row".concat(a?"-fluid":"")},t)}function R(e){var a=e.size,t=e.children;return o.a.createElement("div",{className:a.split(" ").map(function(e){return"col-"+e}).join(" ")},t)}var T=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=Object(s.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(o)))).state={toggle:!1},t.logOut=function(){return window.location.reload(),window.location.href="/login"},t.reloadPage=function(){setTimeout(function(){window.location.reload()},12e4)},t.isTokenExpired=function(){return!sessionStorage.getItem("token")||(setTimeout(function(){sessionStorage.removeItem("token")},12e4),!1)},t}return Object(m.a)(a,e),Object(c.a)(a,[{key:"componentDidMount",value:function(){this.isTokenExpired()?this.logOut():this.reloadPage()}},{key:"render",value:function(){return o.a.createElement("div",{className:"mt-5"},o.a.createElement(F,{fluid:!0},o.a.createElement(R,{size:"md-6"},o.a.createElement("h5",{style:{backgroundColor:"indigo",fontSize:"20px",borderColor:"black",borderStyle:"solid",margin:"0%",padding:"0%",position:"relative",top:"0px",textAlign:"center",color:"white",width:"30%",borderTopLeftRadius:"4em",borderTopRightRadius:"4em"}},"Group Name"))),o.a.createElement(F,{fluid:!0},o.a.createElement(I,null,o.a.createElement(R,{size:"md-6"},o.a.createElement(g,null,o.a.createElement(C,null))),o.a.createElement(R,{size:"md-6"},o.a.createElement(g,null,o.a.createElement(I,null,o.a.createElement(R,{size:"md-12"},o.a.createElement(F,{fluid:!0},o.a.createElement("div",{style:{height:"440px",overflow:"auto"}},o.a.createElement(w,null))))),o.a.createElement(I,null))))))}}]),a}(n.Component),W=(t(143),t(56)),z=t.n(W);var A=function(e){return o.a.createElement("form",{className:e.active?"form-signin":"form-signup-left",action:"",method:"post",name:"form"},o.a.createElement("label",{htmlFor:"username"},"Username"),o.a.createElement("input",{className:"form-styling",type:"text",name:"username",placeholder:"",value:e.username,onChange:e.handleInputChange}),o.a.createElement("label",{htmlFor:"password"},"Password"),o.a.createElement("input",{className:"form-styling",type:"password",name:"password",placeholder:"",value:e.password,onChange:e.handleInputChange}),o.a.createElement("input",{type:"checkbox",id:"checkbox"}),o.a.createElement("label",{htmlFor:"checkbox"},o.a.createElement("span",{className:"ui"}),"Keep me signed in"),o.a.createElement("div",{className:"btn-animate"},o.a.createElement(d.b,{to:"/show",className:"btn-signin",onClick:e.loginSubmit},"Sign in")),o.a.createElement("a",{href:"/login"},"Forgot your password?"))};var H=function(e){return o.a.createElement("form",{className:e.active?"form-signup":"form-signin-down",action:"",method:"post",name:"form"},o.a.createElement("label",{htmlFor:"firstName"},"First Name"),o.a.createElement("input",{className:"form-styling",type:"text",name:"firstName",placeholder:"",value:e.firstName,onChange:e.handleInputChange}),o.a.createElement("label",{htmlFor:"lastName"},"Last Name"),o.a.createElement("input",{className:"form-styling",type:"text",name:"lastName",placeholder:"",value:e.lastName,onChange:e.handleInputChange}),o.a.createElement("label",{htmlFor:"email"},"Email"),o.a.createElement("input",{className:"form-styling",type:"email",name:"email",placeholder:"",value:e.email,onChange:e.handleInputChange}),o.a.createElement("label",{htmlFor:"username"},"Create Username"),o.a.createElement("input",{className:"form-styling",type:"text",name:"username",placeholder:"",value:e.username,onChange:e.handleInputChange}),o.a.createElement("label",{htmlFor:"password"},"Password"),o.a.createElement("input",{className:"form-styling",type:"password",name:"password",placeholder:"",value:e.password,onChange:e.handleInputChange}),o.a.createElement(d.b,{to:"/authorization",className:"btn-signup",onClick:e.signupSubmit},"Sign Up"))},L=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=Object(s.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(o)))).state={active:!1,username:"",password:"",loggedIn:!1,firstName:"",lastName:"",email:"",signedUp:!1},t.handleClick=function(e){t.setState({active:!t.state.active})},t.handleInputChange=function(e){var a=e.target,n=a.name,o=a.value;t.setState(Object(b.a)({},n,o))},t.loginSubmit=function(e){e.preventDefault();var a=t.state,n={user:{username:a.username,password:a.password}};z.a.post("/api/users/login",n).then(function(e){sessionStorage.setItem("token",e.data.user.token),console.log(e)}).then(function(){var e=sessionStorage.getItem("token");z.a.get("/api/users/current",{headers:{"Content-Type":"application/json",Authorization:"Token "+e}}).then(function(e){console.log(e),setTimeout(function(){t.setState({signedUp:!0,loggedIn:!0})},2e3)})})},t.isTokenExpired=function(){return!sessionStorage.getItem("token")||(setTimeout(function(){sessionStorage.removeItem("token")},12e4),!1)},t.signupSubmit=function(e){e.preventDefault();var a=t.state,n={user:{firstName:a.firstName,lastName:a.lastName,username:a.username,email:a.email,password:a.password}};z.a.post("/api/users",n).then(function(e){console.log(e);var a=e.data.user;console.log(a);var n=a.token;n&&(sessionStorage.setItem("token",n),setTimeout(function(){t.setState({active:!0,loggedIn:!1})},2e3))})},t}return Object(m.a)(a,e),Object(c.a)(a,[{key:"componentDidMount",value:function(){this.isTokenExpired()?console.log("Please sign in or sign up"):window.location.href="/show"}},{key:"render",value:function(){var e=this.state,a=e.firstName,t=e.lastName,n=e.username,r=e.email,i=e.password,l=e.active;return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:this.state.active?"frame frame-short":"frame frame-long"},o.a.createElement("div",{className:(this.state.active,"nav")},o.a.createElement("ul",{className:"links"},o.a.createElement("li",{className:this.state.active?"signin-active":"signin-inactive"},o.a.createElement("span",{className:"btn",onClick:this.handleClick,style:{width:"427px"}},"Toggle Authentication ",o.a.createElement("i",{className:"fas fa-sync-alt"}))))),o.a.createElement("div",{className:"form"},this.state.active?this.state.loggedIn?o.a.createElement(u.a,{to:"/show"}):o.a.createElement(A,{active:l,username:n,handleInputChange:this.handleInputChange,password:i,loginSubmit:this.loginSubmit}):this.state.signedUp?o.a.createElement(u.a,{to:"/login"}):o.a.createElement(H,{active:l,firstName:a,lastName:t,handleInputChange:this.handleInputChange,email:r,username:n,password:i,signupSubmit:this.signupSubmit}))))}}]),a}(n.Component),M=t(37),D=t.n(M),$=t(28),P=t.n($),U=t(38),V=t(3),B=t(103),Y=t.n(B),K=t(194),G=(Object(V.a)({},{paddingRight:"15px",paddingLeft:"15px",marginRight:"auto",marginLeft:"auto",width:"100%"},{"@media (min-width: 576px)":{maxWidth:"540px"},"@media (min-width: 768px)":{maxWidth:"720px"},"@media (min-width: 992px)":{maxWidth:"960px"},"@media (min-width: 1200px)":{maxWidth:"1140px"}}),Object(V.a)({color:"#fff",background:"linear-gradient(60deg, #ffa726, #fb8c00)"},{boxShadow:"0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2)"}),Object(V.a)({color:"#fff",background:"linear-gradient(60deg, #66bb6a, #43a047)"},{boxShadow:"0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2)"}),Object(V.a)({color:"#fff",background:"linear-gradient(60deg, #ef5350, #e53935)"},{boxShadow:"0 12px 20px -10px rgba(244, 67, 54, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(244, 67, 54, 0.2)"}),Object(V.a)({color:"#fff",background:"linear-gradient(60deg, #26c6da, #00acc1)"},{boxShadow:"0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2)"}),Object(V.a)({color:"#fff",background:"linear-gradient(60deg, #ab47bc, #8e24aa)"},{boxShadow:"0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2)"}),Object(V.a)({color:"#fff",background:"linear-gradient(60deg, #ec407a, #d81b60)"},{boxShadow:"0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(233, 30, 99, 0.4)"}),Object(V.a)({margin:"0 20px 10px",paddingTop:"10px",borderTop:"1px solid #eeeeee",height:"auto"},{fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif',fontWeight:"300",lineHeight:"1.5em"}),Object(V.a)({},{color:"#3C4858",margin:"1.75rem 0 0.875rem",textDecoration:"none",fontWeight:"700",fontFamily:'"Roboto Slab", "Times New Roman", serif'},{marginTop:".625rem"}),{button:{minHeight:"auto",minWidth:"auto",backgroundColor:"#999999",color:"#FFFFFF",boxShadow:"0 2px 2px 0 rgba(153, 153, 153, 0.14), 0 3px 1px -2px rgba(153, 153, 153, 0.2), 0 1px 5px 0 rgba(153, 153, 153, 0.12)",border:"none",borderRadius:"3px",position:"relative",padding:"12px 30px",margin:".3125rem 1px",fontSize:"12px",fontWeight:"400",textTransform:"uppercase",letterSpacing:"0",willChange:"box-shadow, transform",transition:"box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)",lineHeight:"1.42857143",textAlign:"center",whiteSpace:"nowrap",verticalAlign:"middle",touchAction:"manipulation",cursor:"pointer","&:hover,&:focus":{color:"#FFFFFF",backgroundColor:"#999999",boxShadow:"0 14px 26px -12px rgba(153, 153, 153, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(153, 153, 153, 0.2)"},"& .fab,& .fas,& .far,& .fal,& .material-icons":{position:"relative",display:"inline-block",top:"0",fontSize:"1.1rem",marginRight:"4px",verticalAlign:"middle"},"& svg":{position:"relative",display:"inline-block",top:"0",width:"18px",height:"18px",marginRight:"4px",verticalAlign:"middle"},"&$justIcon":{"& .fab,& .fas,& .far,& .fal,& .material-icons":{marginRight:"0px",position:"absolute",width:"100%",transform:"none",left:"0px",top:"0px",height:"100%",lineHeight:"41px",fontSize:"20px"}}},fullWidth:{width:"100%"},primary:{backgroundColor:"#9c27b0",boxShadow:"0 2px 2px 0 rgba(156, 39, 176, 0.14), 0 3px 1px -2px rgba(156, 39, 176, 0.2), 0 1px 5px 0 rgba(156, 39, 176, 0.12)","&:hover,&:focus":{backgroundColor:"#9c27b0",boxShadow:"0 14px 26px -12px rgba(156, 39, 176, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(156, 39, 176, 0.2)"}},info:{backgroundColor:"#00acc1",boxShadow:"0 2px 2px 0 rgba(0, 188, 212, 0.14), 0 3px 1px -2px rgba(0, 188, 212, 0.2), 0 1px 5px 0 rgba(0, 188, 212, 0.12)","&:hover,&:focus":{backgroundColor:"#00acc1",boxShadow:"0 14px 26px -12px rgba(0, 188, 212, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 188, 212, 0.2)"}},success:{backgroundColor:"#4caf50",boxShadow:"0 2px 2px 0 rgba(76, 175, 80, 0.14), 0 3px 1px -2px rgba(76, 175, 80, 0.2), 0 1px 5px 0 rgba(76, 175, 80, 0.12)","&:hover,&:focus":{backgroundColor:"#4caf50",boxShadow:"0 14px 26px -12px rgba(76, 175, 80, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(76, 175, 80, 0.2)"}},warning:{backgroundColor:"#ff9800",boxShadow:"0 2px 2px 0 rgba(255, 152, 0, 0.14), 0 3px 1px -2px rgba(255, 152, 0, 0.2), 0 1px 5px 0 rgba(255, 152, 0, 0.12)","&:hover,&:focus":{backgroundColor:"#ff9800",boxShadow:"0 14px 26px -12px rgba(255, 152, 0, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(255, 152, 0, 0.2)"}},danger:{backgroundColor:"#f44336",boxShadow:"0 2px 2px 0 rgba(244, 67, 54, 0.14), 0 3px 1px -2px rgba(244, 67, 54, 0.2), 0 1px 5px 0 rgba(244, 67, 54, 0.12)","&:hover,&:focus":{backgroundColor:"#f44336",boxShadow:"0 14px 26px -12px rgba(244, 67, 54, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(244, 67, 54, 0.2)"}},rose:{backgroundColor:"#e91e63",boxShadow:"0 2px 2px 0 rgba(233, 30, 99, 0.14), 0 3px 1px -2px rgba(233, 30, 99, 0.2), 0 1px 5px 0 rgba(233, 30, 99, 0.12)","&:hover,&:focus":{backgroundColor:"#e91e63",boxShadow:"0 14px 26px -12px rgba(233, 30, 99, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(233, 30, 99, 0.2)"}},white:{"&,&:focus,&:hover,&:visited":{backgroundColor:"#FFFFFF",color:"#999999"}},twitter:{backgroundColor:"#55acee",color:"#fff",boxShadow:"0 2px 2px 0 rgba(85, 172, 238, 0.14), 0 3px 1px -2px rgba(85, 172, 238, 0.2), 0 1px 5px 0 rgba(85, 172, 238, 0.12)","&:hover,&:focus,&:visited":{backgroundColor:"#55acee",color:"#fff",boxShadow:"0 14px 26px -12px rgba(85, 172, 238, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(85, 172, 238, 0.2)"}},facebook:{backgroundColor:"#3b5998",color:"#fff",boxShadow:"0 2px 2px 0 rgba(59, 89, 152, 0.14), 0 3px 1px -2px rgba(59, 89, 152, 0.2), 0 1px 5px 0 rgba(59, 89, 152, 0.12)","&:hover,&:focus":{backgroundColor:"#3b5998",color:"#fff",boxShadow:"0 14px 26px -12px rgba(59, 89, 152, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(59, 89, 152, 0.2)"}},google:{backgroundColor:"#dd4b39",color:"#fff",boxShadow:"0 2px 2px 0 rgba(221, 75, 57, 0.14), 0 3px 1px -2px rgba(221, 75, 57, 0.2), 0 1px 5px 0 rgba(221, 75, 57, 0.12)","&:hover,&:focus":{backgroundColor:"#dd4b39",color:"#fff",boxShadow:"0 14px 26px -12px rgba(221, 75, 57, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(221, 75, 57, 0.2)"}},github:{backgroundColor:"#333333",color:"#fff",boxShadow:"0 2px 2px 0 rgba(51, 51, 51, 0.14), 0 3px 1px -2px rgba(51, 51, 51, 0.2), 0 1px 5px 0 rgba(51, 51, 51, 0.12)","&:hover,&:focus":{backgroundColor:"#333333",color:"#fff",boxShadow:"0 14px 26px -12px rgba(51, 51, 51, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(51, 51, 51, 0.2)"}},simple:{"&,&:focus,&:hover,&:visited":{color:"#FFFFFF",background:"transparent",boxShadow:"none"},"&$primary":{"&,&:focus,&:hover,&:visited":{color:"#9c27b0"}},"&$info":{"&,&:focus,&:hover,&:visited":{color:"#00acc1"}},"&$success":{"&,&:focus,&:hover,&:visited":{color:"#4caf50"}},"&$warning":{"&,&:focus,&:hover,&:visited":{color:"#ff9800"}},"&$rose":{"&,&:focus,&:hover,&:visited":{color:"#e91e63"}},"&$danger":{"&,&:focus,&:hover,&:visited":{color:"#f44336"}},"&$twitter":{"&,&:focus,&:hover,&:visited":{color:"#55acee"}},"&$facebook":{"&,&:focus,&:hover,&:visited":{color:"#3b5998"}},"&$google":{"&,&:focus,&:hover,&:visited":{color:"#dd4b39"}},"&$github":{"&,&:focus,&:hover,&:visited":{color:"#333333"}}},transparent:{"&,&:focus,&:hover,&:visited":{color:"inherit",background:"transparent",boxShadow:"none"}},disabled:{opacity:"0.65",pointerEvents:"none"},lg:{padding:"1.125rem 2.25rem",fontSize:"0.875rem",lineHeight:"1.333333",borderRadius:"0.2rem"},sm:{padding:"0.40625rem 1.25rem",fontSize:"0.6875rem",lineHeight:"1.5",borderRadius:"0.2rem"},round:{borderRadius:"30px"},block:{width:"100% !important"},link:{"&,&:hover,&:focus":{backgroundColor:"transparent",color:"#999999",boxShadow:"none"}},justIcon:{paddingLeft:"12px",paddingRight:"12px",fontSize:"20px",height:"41px",minWidth:"41px",width:"41px","& .fab,& .fas,& .far,& .fal,& svg,& .material-icons":{marginRight:"0px"},"&$lg":{height:"57px",minWidth:"57px",width:"57px",lineHeight:"56px","& .fab,& .fas,& .far,& .fal,& .material-icons":{fontSize:"32px",lineHeight:"56px"},"& svg":{width:"32px",height:"32px"}},"&$sm":{height:"30px",minWidth:"30px",width:"30px","& .fab,& .fas,& .far,& .fal,& .material-icons":{fontSize:"17px",lineHeight:"29px"},"& svg":{width:"17px",height:"17px"}}}}),J=Y()(function(){return Object(V.a)({},G)}),_=o.a.forwardRef(function(e,a){var t,n=e.color,r=e.round,i=e.children,l=e.fullWidth,c=e.disabled,s=e.simple,p=e.size,m=e.block,d=e.link,u=e.justIcon,g=e.className,x=Object(U.a)(e,["color","round","children","fullWidth","disabled","simple","size","block","link","justIcon","className"]),h=J(),f=D()((t={},Object(b.a)(t,h.button,!0),Object(b.a)(t,h[p],p),Object(b.a)(t,h[n],n),Object(b.a)(t,h.round,r),Object(b.a)(t,h.fullWidth,l),Object(b.a)(t,h.disabled,c),Object(b.a)(t,h.simple,s),Object(b.a)(t,h.block,m),Object(b.a)(t,h.link,d),Object(b.a)(t,h.justIcon,u),Object(b.a)(t,g,g),t));return o.a.createElement(K.a,Object.assign({},x,{ref:a,className:f}),i)}),q=t(1),Q=t(193);function X(e){var a=Object(q.a)({},e),t=a.classes,n=a.children,r=a.className,i=Object(U.a)(a,["classes","children","className"]);return o.a.createElement(Q.a,Object.assign({container:!0},i,{className:t.grid+" "+r}),n)}X.defaultProps={className:""};var Z=P()({grid:{marginRight:"-15px",marginLeft:"-15px",width:"auto"}})(X);function ee(e){var a=Object(q.a)({},e),t=a.classes,n=a.children,r=a.className,i=Object(U.a)(a,["classes","children","className"]);return o.a.createElement(Q.a,Object.assign({item:!0},i,{className:t.grid+" "+r}),n)}ee.defaultProps={className:""};var ae=P()({grid:{position:"relative",width:"100%",minHeight:"1px",paddingRight:"15px",paddingLeft:"15px",flexBasis:"auto"}})(ee),te={parallax:{height:"90vh",maxHeight:"1000px",overflow:"hidden",position:"relative",backgroundPosition:"center center",backgroundSize:"cover",margin:"0",padding:"0",border:"0",display:"flex",alignItems:"center"},filter:{"&:before":{background:"rgba(0, 0, 0, 0.5)"},"&:after,&:before":{position:"absolute",zIndex:"1",width:"100%",height:"100%",display:"block",left:"0",top:"0",content:"''"}},small:{height:"380px"}},ne=function(e){function a(e){var t;Object(l.a)(this,a),(t=Object(s.a)(this,Object(p.a)(a).call(this,e))).resetTransform=function(){var e=window.pageYOffset/3;t.setState({transform:"translate3d(0,"+e+"px,0)"})};var n=window.pageYOffset/3;return t.state={transform:"translate3d(0,"+n+"px,0)"},t}return Object(m.a)(a,e),Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=window.pageYOffset/3;this.setState({transform:"translate3d(0,"+e+"px,0)"}),window.addEventListener("scroll",this.resetTransform)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.resetTransform)}},{key:"render",value:function(){var e,a=this.props,t=a.classes,n=a.filter,r=a.className,i=a.children,l=a.style,c=a.image,s=a.small,p=D()((e={},Object(b.a)(e,t.parallax,!0),Object(b.a)(e,t.filter,n),Object(b.a)(e,t.small,s),Object(b.a)(e,r,void 0!==r),e));return o.a.createElement("div",{className:p,style:Object(V.a)({},l,{backgroundImage:"url("+c+")"},this.state)},i)}}]),a}(o.a.Component),oe=P()(te)(ne),re=Object(V.a)({},{paddingRight:"15px",paddingLeft:"15px",marginRight:"auto",marginLeft:"auto",width:"100%"},{"@media (min-width: 576px)":{maxWidth:"540px"},"@media (min-width: 768px)":{maxWidth:"720px"},"@media (min-width: 992px)":{maxWidth:"960px"},"@media (min-width: 1200px)":{maxWidth:"1140px"}}),ie=(Object(V.a)({color:"#fff",background:"linear-gradient(60deg, #ffa726, #fb8c00)"},{boxShadow:"0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2)"}),Object(V.a)({color:"#fff",background:"linear-gradient(60deg, #66bb6a, #43a047)"},{boxShadow:"0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2)"}),Object(V.a)({color:"#fff",background:"linear-gradient(60deg, #ef5350, #e53935)"},{boxShadow:"0 12px 20px -10px rgba(244, 67, 54, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(244, 67, 54, 0.2)"}),Object(V.a)({color:"#fff",background:"linear-gradient(60deg, #26c6da, #00acc1)"},{boxShadow:"0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2)"}),Object(V.a)({color:"#fff",background:"linear-gradient(60deg, #ab47bc, #8e24aa)"},{boxShadow:"0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2)"}),Object(V.a)({color:"#fff",background:"linear-gradient(60deg, #ec407a, #d81b60)"},{boxShadow:"0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(233, 30, 99, 0.4)"}),Object(V.a)({margin:"0 20px 10px",paddingTop:"10px",borderTop:"1px solid #eeeeee",height:"auto"},{fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif',fontWeight:"300",lineHeight:"1.5em"}),{color:"#3C4858",margin:"1.75rem 0 0.875rem",textDecoration:"none",fontWeight:"700",fontFamily:'"Roboto Slab", "Times New Roman", serif'}),le=(Object(V.a)({},ie,{marginTop:".625rem"}),{container:Object(V.a)({zIndex:"12",color:"#FFFFFF"},re),title:Object(V.a)({},ie,{display:"inline-block",position:"relative",marginTop:"30px",minHeight:"32px",color:"#FFFFFF",textDecoration:"none"}),subtitle:{fontSize:"1.313rem",maxWidth:"500px",margin:"10px auto 0"},main:{background:"#FFFFFF",position:"relative",zIndex:"3"},mainRaised:{margin:"-60px 30px 0px",borderRadius:"6px",boxShadow:"0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"}}),ce=(t(181),function(e){function a(){return Object(l.a)(this,a),Object(s.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.classes;return o.a.createElement("div",null,o.a.createElement(oe,{filter:!0,image:t(182)},o.a.createElement("div",{className:e.container},o.a.createElement(Z,null,o.a.createElement(ae,{xs:12,sm:12,md:6},o.a.createElement("h1",{className:e.title},"ShareFlix"),o.a.createElement("h3",null,"ShareFlix & Chill? We've got you covered. Browse our MERN Full Stack application today to watch movies with Friends & Family. ANYWHERE | ANYTIME!"),o.a.createElement("br",null),o.a.createElement(_,{color:"danger",size:"lg",href:"/login",rel:"noopener noreferrer"},"Get Started"))))),o.a.createElement("div",{className:D()(e.main,e.mainRaised)}))}}]),a}(o.a.Component)),se=P()(le)(ce),pe=t(104),me=t.n(pe);t(183);var de=function(){return o.a.createElement("nav",{className:"navbar navbar-expand-lg"},o.a.createElement("a",{className:"navbar-brand js-scroll-trigger",href:"/show"},o.a.createElement("img",{src:me.a,alt:"App logo",height:"65px",width:"100px"})),o.a.createElement("div",{className:"collapse navbar-collapse justify-content-end",id:"navbarSupportedContent"},o.a.createElement("ul",{className:"navbar-nav justify-content-end float-left"},o.a.createElement("li",{className:"nav-item dropdown"},o.a.createElement("span",{className:"nav-link dropdown-toggle",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},o.a.createElement("i",{className:"fa fa-user-ninja"})),o.a.createElement("div",{className:"dropdown-menu dropdown-menu-right","aria-labelledby":"navbarDropdown"},o.a.createElement("a",{className:"dropdown-item",href:"/profile"},"Account"),o.a.createElement("div",{className:"dropdown-divider"}),o.a.createElement("a",{className:"dropdown-item",href:"/logout"},"Log Out"))))))},ue=(t(184),function(e){function a(){return Object(l.a)(this,a),Object(s.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"container-fluid"},o.a.createElement("div",{className:"row border-bottom"},o.a.createElement("div",{className:"col-6"},o.a.createElement("h1",{className:"text-left"},"Manage Your Account"))),o.a.createElement("div",{className:"row border-bottom"},o.a.createElement("div",{className:"col-6"},o.a.createElement("ul",{className:"nav nav-tabs"},o.a.createElement("li",{className:"nav-item"},o.a.createElement("a",{className:"nav-link active",href:"/overview"},"Settings")),o.a.createElement("li",{className:"nav-item"},o.a.createElement("a",{className:"nav-link",href:"/profile"},"Profile")))))))}}]),a}(n.Component));t(185);var ge=function(){return o.a.createElement("footer",{className:"page-footer",style:{background:"rgb(2, 17, 49)",color:"rgb(235, 235, 235)",height:"auto"}},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col l4  s6"},o.a.createElement("h6",{className:"white-text"},"Developers ",o.a.createElement("i",{className:"fab fa-github",style:{fontSize:"20px",color:"#ffffff"}})),o.a.createElement("span",{style:{fontSize:"13px"}},o.a.createElement("a",{className:"grey-text text-lighten-3",href:"/show"},"Kimberly | "),o.a.createElement("a",{className:"grey-text text-lighten-3",href:"/show"},"Laura | "),o.a.createElement("a",{className:"grey-text text-lighten-3",href:"/show"},"Mike | "),o.a.createElement("a",{className:"grey-text text-lighten-3",href:"/show"},"Sajad | "),o.a.createElement("a",{className:"grey-text text-lighten-3",href:"/show"},"Steven"))))),o.a.createElement("div",{className:"footer-copyright"},o.a.createElement("div",{style:{margin:"0 auto"}},"\xa9 2019 APP NAME")))},xe=function(e){function a(){return Object(l.a)(this,a),Object(s.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement(d.a,null,o.a.createElement("div",null,o.a.createElement(de,null),o.a.createElement(u.d,null,o.a.createElement(u.b,{exact:!0,path:"/",component:se}),o.a.createElement(u.b,{exact:!0,path:"/login",component:L}),o.a.createElement(u.b,{exact:!0,path:"/show",component:T}),o.a.createElement(u.b,{exact:!0,path:"/youtube",component:C}),o.a.createElement(u.b,{exact:!0,path:"/nav",component:de}),o.a.createElement(u.b,{path:"/profile",component:ue})),o.a.createElement(ge,null)))}}]),a}(n.Component),be=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function he(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(o.a.createElement(xe,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");be?function(e){fetch(e).then(function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):he(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):he(e)})}}()}},[[106,1,2]]]);
//# sourceMappingURL=main.14dfd893.chunk.js.map