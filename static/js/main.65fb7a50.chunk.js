(this["webpackJsonpcard-learning"]=this["webpackJsonpcard-learning"]||[]).push([[0],{151:function(e,t,a){},157:function(e,t,a){},178:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(31),s=a.n(c),i=(a(151),function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,265)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),c(e),s(e)}))}),o=a(35),l=a(16),d=(a(157),a(232)),j=a(12),u=a(39),b=a.n(u),m=b.a.create({baseURL:"https://neko-back.herokuapp.com/2.0",withCredentials:!0}),h=function(e){return m.post("/auth/login",e)},O=function(){return m.delete("/auth/me")},p=b.a.create({baseURL:"https://neko-back.herokuapp.com/2.0",withCredentials:!0}),x=function(){return p.post("auth/me")},f={status:"idle"},g=function(e){return{type:"APP/SET-STATUS",status:e}},w={isAuth:!1,user:{_id:"",email:"",name:"",avatar:"",publicCardPacksCount:0,created:new Date,updated:new Date,isAdmin:!1,verified:!1,rememberMe:!1,error:""}},v="card-learning/login/LOG-IN",y="card-learning/login/SET-USER",k=function(e){return{type:v,isAuth:e}},C=function(e){return{type:y,data:e}},P=a(2),S=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.login.isAuth}));return Object(P.jsxs)("div",{className:"header",children:[Object(P.jsx)(o.c,{to:"/profile",children:"Profile"}),Object(P.jsx)(o.c,{to:"/packs-list",children:"Packs List"}),t&&Object(P.jsx)(d.a,{color:"inherit",onClick:function(){e((function(e){O().then((function(t){e(k(!1)),e(C(t.data))}))}))},children:"Logout"})]})},E=a(17),_=a(50),A=b.a.create({baseURL:"https://neko-back.herokuapp.com/2.0",withCredentials:!0}),N=function(e){return A.post("auth/forgot",e)},T=function(e){return A.post("auth/set-new-password",e)},R={IsRequestNewPasswordSent:!1,email:"",message:null},F="card-learning/forgot/IS_REQUEST_NEW_PASSWORD_SENT",I="card-learning/forgot/SET_MESSAGE",D=function(e){return{type:I,message:e}},L=function(e,t,a){return function(n){n(g("loading")),N({email:e,from:t,message:a}).then((function(t){n(function(e,t){return{type:F,email:e,IsRequestNewPasswordSent:t}}(e,!0)),n(D("Check your email please")),n(g("succeeded"))})).catch((function(e){n(D(e.response?e.response.data.error:e.message+"more details in the console")),n(g("failed"))}))}},B=a(233),W=a(245),U=a(249),G=a(255),M=a(235),q=a(243),V=r.a.memo((function(){var e=Object(l.c)((function(e){return e.forgot.IsRequestNewPasswordSent})),t=Object(l.c)((function(e){return e.login.isAuth})),a=Object(l.c)((function(e){return e.forgot.message})),n=Object(l.b)(),r=Object(l.c)((function(e){return e.forgot.email})),c=Object(E.g)(),s=Object(_.a)({initialValues:{email:""},validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Please type your email!",t},onSubmit:function(e){n(L(e.email,"davidovich336@gmail.com",'<div style="background-color: lime; padding: 15px">\n            password recovery link:\n            <a href="https://yauhendavidovich.github.io/card-learning/#/recovery-password/$token$">link</a> \n          </div>')),s.resetForm()}});return e?Object(P.jsx)(E.a,{to:"/check-email/"+r}):t?Object(P.jsx)(E.a,{to:"/profile"}):Object(P.jsx)("div",{className:"main",children:Object(P.jsx)("div",{className:"mainBlock",children:Object(P.jsx)(B.a,{container:!0,justifyContent:"center",children:Object(P.jsx)(B.a,{item:!0,justifyContent:"center",children:Object(P.jsx)("form",{onSubmit:s.handleSubmit,children:Object(P.jsxs)(U.a,{children:[Object(P.jsx)(M.a,{children:Object(P.jsx)(W.a,{component:"span",sx:{marginTop:"20px",marginBottom:"10px"},children:Object(P.jsx)("h2",{style:{textAlign:"center"},children:"Forgot your password?"})})}),Object(P.jsx)(G.a,{children:Object(P.jsxs)(B.a,{container:!0,justifyContent:"space-between",direction:"column",alignItems:"center",children:[Object(P.jsx)(q.a,Object(j.a)({type:"email",label:"Email",margin:"normal",color:"primary",placeholder:"Email"},s.getFieldProps("email"))),s.touched.email&&s.errors.email&&Object(P.jsx)("div",{style:{color:"red"},children:s.errors.email}),a&&Object(P.jsx)("div",{style:{color:"red"},children:a}),Object(P.jsx)(B.a,{container:!0,justifyContent:"center",children:Object(P.jsx)(B.a,{item:!0,justifyContent:"center",children:Object(P.jsx)("h4",{children:"Enter your email address and we will send you further instructions"})})}),Object(P.jsx)(d.a,{variant:"contained",color:"primary",type:"submit",children:"Send Instructions"}),Object(P.jsx)(W.a,{children:Object(P.jsx)("h4",{children:"Did you remember your password?"})}),Object(P.jsx)(d.a,{variant:"contained",color:"secondary",onClick:function(){c("/login")},children:"Try logging in"})]})})]})})})})})})})),Z=a(253),$=a(246),J=a(258),z=a(250),H=function(){var e=Object(E.g)(),t=Object(l.b)(),a=Object(l.c)((function(e){return e.login.isAuth})),n=Object(_.a)({initialValues:{email:"",password:"",rememberMe:!1},validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="required fill",e.password||(t.password="password must have"),t},onSubmit:function(e){var a;t((a=e,function(e){e(g("loading")),h(a).then((function(t){e(k(!0)),e(C(t.data)),e(g("succeeded"))})).catch((function(t){e(g("failed"))}))}))}});return a?Object(P.jsx)(E.a,{to:"/profile"}):Object(P.jsx)("div",{className:"main",children:Object(P.jsx)("div",{className:"mainBlock",children:Object(P.jsx)(Z.a,{container:!0,justifyContent:"center",children:Object(P.jsx)(Z.a,{item:!0,justifyContent:"center",children:Object(P.jsx)("form",{onSubmit:n.handleSubmit,children:Object(P.jsxs)(U.a,{children:[Object(P.jsx)(M.a,{children:Object(P.jsx)("h2",{style:{padding:"20px"},children:"SIGN-IN"})}),Object(P.jsx)(G.a,{children:Object(P.jsxs)(Z.a,{container:!0,justifyContent:"center",direction:"column",children:[Object(P.jsx)(q.a,Object(j.a)(Object(j.a)({label:"Email",margin:"normal"},n.getFieldProps("email")),{},{value:n.values.email,onChange:n.handleChange,onBlur:n.handleBlur})),n.touched.email&&n.errors.email?Object(P.jsx)("div",{style:{color:"red"},children:n.errors.email}):null,Object(P.jsx)(q.a,Object(j.a)(Object(j.a)({type:"password",label:"Password",margin:"normal"},n.getFieldProps("password")),{},{value:n.values.password,onChange:n.handleChange,onBlur:n.handleBlur})),n.touched.password&&n.errors.password?Object(P.jsx)("div",{style:{color:"red"},children:n.errors.password}):null,Object(P.jsx)(z.a,{label:"Remember me",control:Object(P.jsx)($.a,{name:"rememberMe",onChange:n.handleChange,value:n.values.rememberMe})}),Object(P.jsx)(J.a,{component:o.b,to:"/forgot-password",color:"secondary",children:"Forgot Password"}),Object(P.jsx)(d.a,{color:"primary",type:"submit",variant:"contained",children:"Login"}),Object(P.jsx)("div",{children:" Don`t have an account?"}),Object(P.jsx)(d.a,{onClick:function(){e("/registration")},variant:"contained",color:"secondary",children:"Sign Up"})]})})]})})})})})})},K=function(){var e=Object(l.c)((function(e){return e.login.user}));return Object(l.c)((function(e){return e.login.isAuth}))?Object(P.jsx)("div",{className:"main",children:Object(P.jsx)("div",{className:"mainBlock",children:Object(P.jsxs)("div",{children:[Object(P.jsx)("h4",{children:e.name}),Object(P.jsx)("div",{children:Object(P.jsx)("img",{src:e.avatar})})]})})}):Object(P.jsx)(E.a,{to:"/login"})},Q={isNewPasswordSet:!1,message:null},X="card-learning/newPassword/SET_NEW_PASSWORD",Y="card-learning/newPassword/SET_MESSAGE",ee=function(e){return{type:Y,message:e}},te=a(240),ae=r.a.memo((function(){var e=Object(l.c)((function(e){return e.newPassword.isNewPasswordSet})),t=Object(l.c)((function(e){return e.newPassword.message})),a=Object(l.b)(),n=Object(E.h)().token,r=Object(_.a)({initialValues:{password:""},validate:function(e){var t={};return e.password?e.password.length<8&&(t.password="Must be 8 characters or more"):t.password="Please type new password",t},onSubmit:function(e){var t,c;a((t=e.password,c=n,function(e){T({password:t,resetPasswordToken:c}).then((function(t){t.data.info?e({type:"card-learning/newPassword/SET_NEW_PASSWORD",isPasswordSet:!0}):t.data.error?e(ee(t.data.error)):e(ee("Some error occurred!"))})).catch((function(t){e(ee(t.message?t.message:"Network error occurred!"))}))})),r.resetForm()}});return e?Object(P.jsx)(E.a,{to:"/login"}):Object(P.jsx)("div",{className:"main",children:Object(P.jsx)(te.a,{maxWidth:"sm",style:{background:"#F9F9FE",height:"50vh",borderRadius:"8px"},children:Object(P.jsx)(B.a,{container:!0,spacing:3,children:Object(P.jsx)(B.a,{item:!0,style:{marginTop:"20px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:Object(P.jsxs)("form",{onSubmit:r.handleSubmit,style:{display:"flex",flexDirection:"column",justifyContent:"center"},children:[Object(P.jsx)(W.a,{component:"span",sx:{marginTop:"20px",marginBottom:"20px"},children:Object(P.jsx)("h2",{style:{textAlign:"center"},children:"Create new password"})}),Object(P.jsxs)(W.a,{component:"span",display:"block",children:[Object(P.jsx)(q.a,Object(j.a)({variant:"outlined",style:{marginTop:"20px",width:"100%"},id:"outlined-basic",type:"password",color:"primary",placeholder:"password"},r.getFieldProps("password"))),r.touched.password&&r.errors.password&&Object(P.jsx)("div",{style:{color:"red"},children:r.errors.password}),t&&Object(P.jsx)("div",{style:{color:"red"},children:t})]}),Object(P.jsx)(W.a,{children:Object(P.jsx)("h4",{children:"Create new password and we will send you further instructions to email"})}),Object(P.jsx)(d.a,{variant:"contained",color:"primary",type:"submit",style:{borderRadius:"30px",background:"#73926C",marginTop:"30px",alignSelf:"center",boxShadow:"0px 4px 18px rgba(33, 38, 143, 0.35), inset 0px 1px 0px rgba(255, 255, 255, 0.3)"},children:"Create new password"})]})})})})})})),ne=b.a.create({baseURL:"https://neko-back.herokuapp.com/2.0",withCredentials:!0}),re=function(e,t){return ne.post("auth/register",{email:e,password:t})},ce={isRegistered:!1},se=function(){var e=Object(l.c)((function(e){return e.login.isAuth})),t=Object(l.b)(),a=Object(_.a)({initialValues:{email:"",password:"",confirmPassword:""},validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",e.password?e.password.length<3&&(t.password="Password must be more than two characters"):t.password="Required",e.confirmPassword?e.confirmPassword!==e.password&&(t.confirmPassword="Passwords must match"):t.confirmPassword="Required",t},onSubmit:function(e){var n,r;t((n=e.email,r=e.password,function(e){re(n,r).then((function(t){e({type:"REGISTERED",isRegistered:!0})})).catch((function(e){alert("This email is already registered")}))})),a.resetForm()}});return e?Object(P.jsx)(E.a,{to:"/profile"}):Object(P.jsx)("div",{className:"main",children:Object(P.jsx)("div",{className:"mainBlock",children:Object(P.jsx)(B.a,{container:!0,justifyContent:"center",children:Object(P.jsx)(B.a,{item:!0,justifyContent:"center",children:Object(P.jsx)("form",{onSubmit:a.handleSubmit,children:Object(P.jsxs)(U.a,{children:[Object(P.jsx)(M.a,{children:Object(P.jsx)(B.a,{container:!0,justifyContent:"center",children:Object(P.jsxs)(B.a,{item:!0,justifyContent:"center",children:[Object(P.jsx)("h1",{children:"It-incubator"}),Object(P.jsx)(B.a,{container:!0,justifyContent:"center",children:Object(P.jsx)(B.a,{item:!0,justifyContent:"center",children:Object(P.jsx)("h3",{children:"Sign up"})})})]})})}),Object(P.jsxs)(G.a,{children:[Object(P.jsx)(q.a,Object(j.a)({label:"Email",margin:"normal"},a.getFieldProps("email"))),a.touched.email&&a.errors.email&&Object(P.jsx)("div",{style:{color:"red"},children:a.errors.email}),Object(P.jsx)(q.a,Object(j.a)({type:"password",label:"Password",margin:"normal"},a.getFieldProps("password"))),a.touched.password&&a.errors.password&&Object(P.jsx)("div",{style:{color:"red"},children:a.errors.password}),Object(P.jsx)(q.a,Object(j.a)({type:"password",label:"Confirm password",margin:"normal"},a.getFieldProps("confirmPassword"))),a.touched.confirmPassword&&a.errors.confirmPassword&&Object(P.jsx)("div",{style:{color:"red"},children:a.errors.confirmPassword}),Object(P.jsx)(W.a,{children:Object(P.jsxs)(B.a,{container:!0,justifyContent:"space-between",children:[Object(P.jsx)(d.a,{onClick:function(){a.resetForm()},variant:"contained",color:"secondary",children:"Cancel"}),Object(P.jsx)(d.a,{type:"submit",variant:"contained",color:"primary",children:"Register"})]})})]})]})})})})})})},ie=function(){return Object(P.jsx)("div",{className:"main",children:"Page not found"})},oe=function(){var e=Object(E.h)().email;return Object(P.jsx)("div",{className:"main",children:Object(P.jsx)(te.a,{maxWidth:"sm",style:{background:"#F9F9FE",height:"50vh",borderRadius:"8px"},children:Object(P.jsx)(B.a,{container:!0,direction:"column",justifyContent:"center",alignItems:"center",spacing:3,children:Object(P.jsxs)(B.a,{item:!0,style:{marginTop:"20px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[Object(P.jsx)(W.a,{component:"span",sx:{marginTop:"20px",marginBottom:"20px"},children:Object(P.jsx)("h2",{style:{textAlign:"center"},children:"Check Email"})}),Object(P.jsx)(W.a,{children:Object(P.jsxs)("h4",{children:["We\u2019ve sent an Email with instructions to ",e]})})]})})})})},le=function(){return Object(P.jsx)("div",{children:"Search"})},de=function(){return Object(P.jsx)("div",{children:"PacksToggle"})},je=a(7),ue=a(13),be=a(61),me=a.n(be),he=a(128),Oe=a.n(he),pe=b.a.create({baseURL:"https://neko-back.herokuapp.com/2.0",withCredentials:!0}),xe=function(e){return pe.get("cards/pack",{params:Object(j.a)({},e)})},fe=function(e){return pe.post("/cards/pack",Object(j.a)({},e))},ge={cardPacks:[{_id:"",user_id:"",name:"",cardsCount:0,created:"",updated:""}],cardPacksTotalCount:0,maxCardsCount:0,minCardsCount:0,packsParams:{max:0,min:0,page:0,pageCount:0,sortPacks:""}},we="card-learning/cards/GET-CARDS",ve="card-learning/cards/SET_SORT_VALUE",ye="card-learning/cards/SET_PACKS_PAGE",ke="card-learning/cards/SET_PACKS_CARD_RANGE",Ce=function(e){return function(t,a){var n,r,c,s;e.sortPacks&&e.sortPacks!==a().packs.packsParams.sortPacks&&t((n=e.sortPacks,{type:ve,sortValue:n})),e.page&&t((r=e.page,{type:ye,page:r})),e.min&&e.max&&t((c=e.min,s=e.max,{type:ke,min:c,max:s}));var i=a().packs.packsParams;xe(i).then((function(e){t(function(e){return{type:we,data:e}}(e.data))}))}},Pe=function(){for(var e=Object(l.c)((function(e){return e.packs.packsParams.pageCount})),t=Object(l.c)((function(e){return e.packs.cardPacksTotalCount})),a=Object(l.c)((function(e){return e.packs.packsParams.page})),r=Math.ceil(t/e),c=[],s=1;s<r;s++)c.push(s);var i=Math.ceil(r/10),o=Object(n.useState)(1),d=Object(ue.a)(o,2),j=d[0],u=d[1],b=10*(j-1)+1,m=10*j,h=Object(l.b)();return Object(P.jsxs)("div",{className:me.a.paginator,children:[j>1&&Object(P.jsx)("button",{className:me.a.arrowLeft,onClick:function(){u(j-1)}}),c.filter((function(e){return e>=b&&e<=m})).map((function(e){return Object(P.jsx)("span",{className:Oe()(Object(je.a)({},me.a.selectedPage,a===e),me.a.pageNumber),onClick:function(t){!function(e){h(Ce({page:e}))}(e)},children:e},e)})),i>j&&Object(P.jsx)("button",{className:me.a.arrowRight,onClick:function(){u(j+1)}})]})},Se=a(260),Ee=a(264),_e=a(263),Ae=a(259),Ne=a(261),Te=a(262),Re=a(257),Fe=a(247),Ie=function(e){var t=Object(l.c)((function(e){return e.login.user._id})),a=Object(n.useState)(!0),r=Object(ue.a)(a,2),c=r[0],s=r[1],i=Object(n.useState)(!0),o=Object(ue.a)(i,2),d=o[0],j=o[1],u=Object(n.useState)(!0),b=Object(ue.a)(u,2),m=b[0],h=b[1],O=Object(n.useState)(!0),p=Object(ue.a)(O,2),x=p[0],f=p[1],g=Object(l.b)(),w=function(e,t,a){a(Ce(e?{sortPacks:"".concat(1,t)}:{sortPacks:"".concat(0,t)}))},v=function(e){"name"===e&&(s(!c),w(c,e,g)),"cardsCount"===e&&(j(!d),w(d,e,g)),"created"===e&&(h(!m),w(m,e,g)),"updated"===e&&(f(!x),w(x,e,g))},y=function(t){t===e.packs[0].user_id&&alert(t)},k={color:"black"},C={backgroundColor:"#D7D8EF",marginLeft:"10px"};return Object(P.jsx)(Ae.a,{component:Re.a,style:{maxHeight:500,minHeight:500,minWidth:1e3,marginTop:20},children:Object(P.jsxs)(Se.a,{"aria-label":"simple table",children:[Object(P.jsx)(Ne.a,{style:{backgroundColor:"#8CE0EB"},children:Object(P.jsxs)(Te.a,{children:[Object(P.jsx)(_e.a,{align:"left",children:Object(P.jsx)(Fe.a,{style:k,variant:"text",onClick:function(){return v("name")},children:"Name\u2b83"})}),Object(P.jsx)(_e.a,{align:"left",children:Object(P.jsx)(Fe.a,{style:k,variant:"text",onClick:function(){return v("cardsCount")},children:"Cards\u2b83"})}),Object(P.jsx)(_e.a,{align:"left",children:Object(P.jsx)(Fe.a,{style:k,variant:"text",onClick:function(){return v("created")},children:"Created\u2b83"})}),Object(P.jsx)(_e.a,{align:"left",children:Object(P.jsx)(Fe.a,{style:k,variant:"text",onClick:function(){return v("updated")},children:"Updated\u2b83"})}),Object(P.jsx)(_e.a,{align:"left",children:"ACTIONS"}),Object(P.jsx)(_e.a,{align:"left",children:Object(P.jsx)(Fe.a,{onClick:function(){fe({cardsPack:{name:"INGVARR"}}).then((function(e){return alert(e)}))},children:"ADD+"})})]})}),Object(P.jsx)(Ee.a,{children:e.packs.map((function(e,a){return Object(P.jsxs)(Te.a,{sx:{"&:last-child td, &:last-child th":{border:0},"&:nth-of-type(odd)":{backgroundColor:"#F8F7FD"}},children:[Object(P.jsx)(_e.a,{component:"th",scope:"row",align:"left",style:{maxWidth:100,minWidth:100,wordWrap:"break-word"},children:e.name}),Object(P.jsx)(_e.a,{align:"left",children:e.cardsCount}),Object(P.jsx)(_e.a,{align:"left",children:e.created.substring(0,10)}),Object(P.jsx)(_e.a,{align:"left",children:e.updated.substring(0,10)}),Object(P.jsxs)(_e.a,{align:"left",children:[Object(P.jsx)(Fe.a,{style:e.user_id!==t?{backgroundColor:"red",color:"white",opacity:.3}:{backgroundColor:"red",color:"white"},disabled:e.user_id!==t,onClick:function(){return y(e.user_id)},children:"Delete"}),Object(P.jsx)(Fe.a,{style:C,disabled:e.user_id!==t,onClick:function(){return y(e.user_id)},children:"Edit"}),Object(P.jsx)(Fe.a,{style:C,onClick:function(){return t=e.user_id,void alert(t);var t},children:"Cards"})]}),Object(P.jsx)(_e.a,{align:"left"})]},"".concat(a).concat(e.name))}))})]})})},De=function(){return Object(P.jsx)("div",{children:"ShowItemsPerPage"})},Le=a(248),Be=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.packs.maxCardsCount})),a=Object(l.c)((function(e){return e.packs.minCardsCount})),r=Object(n.useState)([a,t]),c=Object(ue.a)(r,2),s=c[0],i=c[1];return Object(n.useEffect)((function(){e(Ce({}))}),[t]),Object(P.jsx)(Le.a,{value:s,onChangeCommitted:function(t,a){i(a),e(Ce({min:a[0],max:a[1]}))},min:a,max:t,valueLabelDisplay:"on"})},We=function(){var e=Object(l.c)((function(e){return e.packs.cardPacks})),t=Object(l.b)();return Object(n.useEffect)((function(){t(Ce({}))}),[]),Object(P.jsx)("div",{className:"main",children:Object(P.jsxs)("div",{className:"mainBlock",children:[Object(P.jsx)(Be,{}),Object(P.jsx)(le,{}),Object(P.jsx)(de,{}),Object(P.jsx)(Ie,{packs:e}),Object(P.jsx)(Pe,{}),Object(P.jsx)(De,{})]})})},Ue=function(){return Object(P.jsxs)(E.d,{children:[Object(P.jsx)(E.b,{path:"/login",element:Object(P.jsx)(H,{})}),Object(P.jsx)(E.b,{path:"/",element:Object(P.jsx)(H,{})}),Object(P.jsx)(E.b,{path:"/forgot-password",element:Object(P.jsx)(V,{})}),Object(P.jsx)(E.b,{path:"/profile",element:Object(P.jsx)(K,{})}),Object(P.jsx)(E.b,{path:"/recovery-password/:token",element:Object(P.jsx)(ae,{})}),Object(P.jsx)(E.b,{path:"/packs-list",element:Object(P.jsx)(We,{})}),Object(P.jsx)(E.b,{path:"/registration",element:Object(P.jsx)(se,{})}),Object(P.jsx)(E.b,{path:"/404",element:Object(P.jsx)(ie,{})}),Object(P.jsx)(E.b,{path:"/check-email/:email",element:Object(P.jsx)(oe,{})}),Object(P.jsx)(E.b,{path:"*",element:Object(P.jsx)(E.a,{to:"/404"})})]})},Ge=a(242),Me=a(130),qe=Object(Me.a)({palette:{primary:{main:"#73926C",contrastText:"#fff"},secondary:{main:"#EDA909",contrastText:"#fff"}}}),Ve=a(254),Ze=function(){return Object(P.jsx)("div",{style:{position:"fixed",top:"30%",textAlign:"center",width:"100%",opacity:.5},children:Object(P.jsx)(Ve.a,{})})};var $e=function(){var e=Object(l.c)((function(e){return e.app.status})),t=Object(l.b)();return Object(n.useEffect)((function(){t((function(e){e(g("loading")),x().then((function(t){e(k(!0)),e(C(t.data)),e(g("succeeded"))})).catch((function(){e(g("failed"))}))}))}),[]),Object(P.jsx)(Ge.a,{theme:qe,children:Object(P.jsxs)("div",{className:"App",children:["loading"===e&&Object(P.jsx)(Ze,{}),Object(P.jsx)(S,{}),Object(P.jsx)(Ue,{})]})})},Je=a(87),ze=a(129),He={},Ke=Object(Je.b)({login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(j.a)(Object(j.a)({},e),{},{isAuth:t.isAuth});case y:return Object(j.a)(Object(j.a)({},e),{},{user:t.data});default:return e}},forgot:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F:return Object(j.a)(Object(j.a)({},e),{},{email:t.email,IsRequestNewPasswordSent:t.IsRequestNewPasswordSent});case I:return Object(j.a)(Object(j.a)({},e),{},{message:t.message});default:return e}},newPassword:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case X:return Object(j.a)(Object(j.a)({},e),{},{isNewPasswordSet:t.isPasswordSet});case Y:return Object(j.a)(Object(j.a)({},e),{},{message:t.message});default:return e}},registration:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REGISTERED":return Object(j.a)(Object(j.a)({},e),{},{isRegistered:t.isRegistered});default:return e}},profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:He,t=arguments.length>1?arguments[1]:void 0;return t.type,e},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"APP/SET-STATUS":return Object(j.a)(Object(j.a)({},e),{},{status:t.status});default:return Object(j.a)({},e)}},packs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case we:return Object(j.a)(Object(j.a)({},e),{},{cardPacks:t.data.cardPacks,cardPacksTotalCount:t.data.cardPacksTotalCount,maxCardsCount:t.data.maxCardsCount,minCardsCount:t.data.minCardsCount,packsParams:Object(j.a)(Object(j.a)({},e.packsParams),{},{page:t.data.page,pageCount:t.data.pageCount})});case ve:return Object(j.a)(Object(j.a)({},e),{},{packsParams:Object(j.a)(Object(j.a)({},e.packsParams),{},{sortPacks:t.sortValue})});case ye:return Object(j.a)(Object(j.a)({},e),{},{packsParams:Object(j.a)(Object(j.a)({},e.packsParams),{},{page:t.page})});case ke:return Object(j.a)(Object(j.a)({},e),{},{packsParams:Object(j.a)(Object(j.a)({},e.packsParams),{},{min:t.min,max:t.max})});default:return e}}}),Qe=Object(Je.c)(Ke,Object(Je.a)(ze.a)),Xe=window.store=Qe;s.a.render(Object(P.jsx)(o.a,{children:Object(P.jsx)(l.a,{store:Xe,children:Object(P.jsx)($e,{})})}),document.getElementById("root")),i()},61:function(e,t,a){e.exports={selectedPage:"Paginator_selectedPage__1u1Cm",paginator:"Paginator_paginator__1VFdz",pageNumber:"Paginator_pageNumber__MoS0k",arrowLeft:"Paginator_arrowLeft__bvzOo",arrowRight:"Paginator_arrowRight__2Jh-l"}}},[[178,1,2]]]);
//# sourceMappingURL=main.65fb7a50.chunk.js.map