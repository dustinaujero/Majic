(this.webpackJsonpmajic=this.webpackJsonpmajic||[]).push([[0],{142:function(e,t,c){},143:function(e,t,c){},154:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),s=c(31),r=c.n(s),i=(c(142),c(143),c(82)),o=c(18),l=c(126),j=c(215),d="#222222",b=function(){for(var e=arguments.length,t=new Array(e),c=0;c<e;c++)t[c]=arguments[c];return console.log("theme stuff",t),{palette:{primary:{main:d,contrastText:"#FFF"}},components:{MuiButton:{styleOverrides:{root:{borderColor:d}}},MuiListSubheader:{styleOverrides:{root:{backgroundColor:"inherit",color:"inherit"}}}}}},h=c(26),u=c(78),x=c(116),m=c(101),O="RECEIVE_CLIENT",f="RECEIVE_CHECKOUT_ID",p=function(e){return{type:f,checkoutID:e}},v=c(65),g={client:c.n(v).a.buildClient({domain:"solitdudellc.myshopify.com",storefrontAccessToken:"199d6524a76e5e4966034d6f445bcbb3"}),checkoutID:null},y=Object(u.b)({shopify:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(Object.freeze(e),t.type){case O:return Object(m.merge)({},e,{client:t.client});case f:var c=t.checkoutID;return localStorage.setItem("checkoutID",c),Object(m.merge)({},e,{checkoutID:c});default:return e}}}),N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(u.c)(y,e,Object(u.a)(x.a))},k=c(11),w=c(204),C=c(206),I=c(210),L=c(213),P=c(218),S=c(220),D=c(211),W=c(221),T=c(23),_=c(196),E=c(197),A=c(43),F=c(44),M=c(69),U=c(68),R=c(216),q=c(217),B=c(214),z=c(194),G=c(19),J=c(28),$=c(1),H=Object(G.a)(L.a)(J.c),K=Object(G.a)(R.a)(J.c),V=Object(G.a)(q.a)(J.c),Y=Object(G.a)(B.a)(J.c),Q=function(e){Object(M.a)(c,e);var t=Object(U.a)(c);function c(){var e;Object(A.a)(this,c);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={lineItems:[],subtotal:"0",webURL:""},e.removeItem=function(t){var c,n=e.props.shopifyCheckoutID,a=[t];console.log("remove item",n,a),null===(c=e.props.shopifyClient)||void 0===c||c.checkout.removeLineItems(n,a).then((function(t){e.setState({lineItems:t.lineItems,subtotal:t.lineItemsSubtotalPrice.amount,webURL:t.webUrl})}))},e.formatPrice=function(){return parseFloat(e.state.subtotal).toFixed(2)},e}return Object(F.a)(c,[{key:"componentDidMount",value:function(){var e,t,c=this,n=localStorage.getItem("checkoutID");(console.log("checkoutid",n),n)?null===(e=this.props.shopifyClient)||void 0===e||e.checkout.fetch(n).then((function(e){console.log("old checkout",e),c.props.updateCheckoutID(e.id),c.setState({lineItems:e.lineItems,subtotal:e.lineItemsSubtotalPrice.amount,webURL:e.webUrl})})):null===(t=this.props.shopifyClient)||void 0===t||t.checkout.create().then((function(e){console.log("new checkout",e),c.props.updateCheckoutID(e.id),c.setState({lineItems:e.lineItems,subtotal:e.lineItemsSubtotalPrice.amount,webURL:e.webUrl})}))}},{key:"render",value:function(){var e=this;return Object($.jsx)(H,{container:!0,alignItems:"start",className:"px-3",mt:5,sx:{minWidth:300,maxWidth:400},children:this.state.lineItems.length?Object($.jsxs)($.Fragment,{children:[this.state.lineItems.map((function(t){return Object($.jsxs)(H,{item:!0,xs:12,children:[Object($.jsx)(K,{my:2}),Object($.jsxs)(H,{container:!0,spacing:5,children:[Object($.jsxs)(H,{item:!0,xs:!0,children:[Object($.jsx)(V,{children:t.title}),Object($.jsx)(V,{children:t.variant.price})]}),Object($.jsx)(H,{item:!0,children:Object($.jsx)(P.a,{onClick:function(){return e.removeItem(t.id)},children:Object($.jsx)(z.a,{})})})]})]},t.id)})),Object($.jsxs)(H,{item:!0,xs:12,children:[Object($.jsx)(K,{my:2}),Object($.jsxs)(V,{className:"fw-bold",variant:"h6",children:["Subtotal: $",this.formatPrice()]}),Object($.jsx)(Y,{fullWidth:!0,my:2,variant:"contained",disabled:!this.state.webURL,onClick:function(){return window.location.href=e.state.webURL},children:"Checkout"})]})]}):Object($.jsxs)($.Fragment,{children:[Object($.jsx)(H,{item:!0,xs:12,children:Object($.jsx)("h3",{className:"fw-bold",children:"Your cart is empty."})}),Object($.jsx)(H,{item:!0,xs:12,children:Object($.jsx)("a",{className:"text-dark mt-5",children:"Let's fix that."})})]})})}}]),c}(a.a.Component),X=Object(h.b)((function(e){return{shopifyClient:e.shopify.client,shopifyCheckoutID:e.shopify.checkoutID}}),(function(e){return{updateCheckoutID:function(t){return e(p(t))}}}))(Q);var Z=function(e){var t=e.textColor,c=void 0===t?"light":t,a=e.noText,s=void 0!==a&&a,r=Object(T.a)(),i=Object(n.useState)(""),o=Object(k.a)(i,2),l=o[0],j=o[1],d=function(){return j("")};return Object($.jsxs)("header",{className:"d-flex justify-content-center flex-row mt-2 align-items-center",style:{zIndex:10},children:[!s&&Object($.jsxs)(w.a,{className:"d-flex flex-grow-1 justify-content-start ml-2",expand:"lg",children:[Object($.jsx)(w.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object($.jsx)(w.a.Collapse,{id:"basic-navbar-nav",children:Object($.jsxs)(C.a,{children:[Object($.jsx)(C.a.Link,{onClick:function(){return j("shop")},className:"text-".concat(c," smooth hover-underline"),children:"Shop"}),Object($.jsx)(C.a.Link,{onClick:function(){return j("learn")},className:"text-".concat(c," smooth hover-underline"),children:"Learn"})]})})]}),Object($.jsx)("h2",{onClick:function(){return r("/")},className:"text-".concat(c," m-0 p-0"),children:"Majic"}),!s&&Object($.jsxs)(w.a,{className:"d-flex flex-grow-1 justify-content-end mr-2",expand:"lg",children:[Object($.jsx)(w.a.Toggle,{"aria-controls":"basic-navbar-nav ",className:"justify-content-end"}),Object($.jsx)(w.a.Collapse,{id:"basic-navbar-nav",className:"justify-content-end",children:Object($.jsxs)(C.a,{children:[Object($.jsx)(C.a.Link,{href:"/login",className:"text-".concat(c," smooth hover-underline"),children:"Login"}),Object($.jsx)(C.a.Link,{onClick:function(){return j("cart")},className:"text-".concat(c," smooth hover-underline"),children:"Cart"})]})})]}),Object($.jsxs)(I.a,{open:"shop"===l||"learn"===l,onOpen:function(){},anchor:"left",onClose:d,disableBackdropTransition:!0,disableSwipeToOpen:!0,children:[Object($.jsxs)(L.a,{container:!0,alignItems:"center",sx:{minWidth:400,maxWidth:"calc(100vw - 10px)"},mb:8,children:[Object($.jsx)(L.a,{item:!0,xs:!0,className:"px-3",children:Object($.jsxs)(w.a,{className:"d-flex justify-content-start",expand:"lg",children:[Object($.jsx)(w.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object($.jsx)(w.a.Collapse,{id:"basic-navbar-nav",children:Object($.jsxs)(C.a,{children:[Object($.jsx)(C.a.Link,{onClick:function(){return j("shop")},className:"text-dark smooth hover-underline ".concat("shop"===l?"text-decoration-underline":""),children:"Shop"}),Object($.jsx)(C.a.Link,{onClick:function(){return j("learn")},className:"text-dark smooth hover-underline ".concat("learn"===l?"text-decoration-underline":""),children:"Learn"})]})})]})}),Object($.jsx)(L.a,{item:!0,className:"px-3",children:Object($.jsx)(P.a,{onClick:d,children:Object($.jsx)(_.a,{})})})]}),Object($.jsx)(L.a,{container:!0,spacing:10,children:Object($.jsxs)(L.a,{item:!0,xs:!0,children:["shop"===l&&Object($.jsx)(S.a,{className:"animate__animated ".concat("learn"===l?"animate__fadeOutLeft":""),children:Object($.jsx)(D.a,{button:!0,children:Object($.jsx)(W.a,{className:"animate__animated animate__fadeInLeft",children:Object($.jsx)("h2",{className:"fw-bold",onClick:function(){return r("/products")},children:"All Products"})})})}),"learn"===l&&Object($.jsxs)(S.a,{children:[Object($.jsx)(D.a,{button:!0,children:Object($.jsx)(W.a,{className:"animate__animated animate__fadeInLeft animate__delay-1s",children:Object($.jsx)("h2",{className:"fw-bold",onClick:function(){return r("/aboutUs")},children:"Company"})})}),Object($.jsx)(D.a,{button:!0,children:Object($.jsx)(W.a,{className:"animate__animated animate__fadeInLeft animate__delay-2s",children:Object($.jsx)("h2",{className:"fw-bold",onClick:function(){return r("/contact")},children:"Support"})})})]})]})})]}),Object($.jsxs)(I.a,{open:"cart"===l,onOpen:function(){},anchor:"right",onClose:d,disableBackdropTransition:!0,disableSwipeToOpen:!0,children:[Object($.jsxs)(L.a,{container:!0,alignItems:"center",sx:{minWidth:300,maxWidth:400},children:[Object($.jsx)(L.a,{item:!0,xs:!0,className:"px-3 mt-3",children:Object($.jsx)(P.a,{onClick:d,size:"small",children:Object($.jsx)(_.a,{})})}),Object($.jsx)(L.a,{item:!0,className:"px-3 mt-3",children:Object($.jsx)(P.a,{onClick:d,size:"small",children:Object($.jsx)(E.a,{})})})]}),Object($.jsx)(X,{})]})]})};var ee=function(){var e=Object(n.useRef)();return Object(n.useEffect)((function(){var t;console.log("video ref",e),(null===(t=e.current)||void 0===t?void 0:t.paused)&&e.current.play()}),[e]),Object($.jsx)("section",{style:{height:"calc(100vh - var(--header-height))"},children:Object($.jsx)("video",{autoPlay:"autoplay",muted:"muted",loop:"loop",playsInline:"",src:"assets/videos/DMTNT_Cut01_720.mov",className:"splash-video",style:{objectPosition:"50% 50%",display:"block"},ref:e})})};var te=function(){return Object($.jsx)("section",{style:{height:"100vh"},children:Object($.jsx)("video",{autoPlay:"autoplay",muted:"muted",loop:"loop",playsInline:"",src:"assets/videos/juicebox-animation.mov",className:"full-video",style:{objectPosition:"50% 50%",display:"block"}})})},ce=c(198),ne=Object(G.a)(L.a)(J.c);var ae=function(){var e=Object(n.useState)([]),t=Object(k.a)(e,2),c=t[0],a=t[1],s=Object(h.d)((function(e){return e.shopify.client}));return Object(n.useEffect)((function(){s&&!c.length&&s.product.fetchAll().then((function(e){console.log("products",e);for(var t=[],c=0;c<e.length;c++){var n=e[c];n&&t.push(n)}a(t)}))}),[s]),Object($.jsxs)("section",{className:"px-5",children:[Object($.jsx)(ne,{container:!0,direction:"column",alignItems:"center",children:Object($.jsxs)(ne,{item:!0,xs:!0,alignItems:"center",children:[Object($.jsxs)("h1",{className:"text-center mx-auto fw-bold",style:{fontSize:"8em",marginTop:"1em",maxWidth:"80%",marginBottom:"0.5em"},children:["We help ",Object($.jsx)("br",{})," you make music"]}),Object($.jsx)("h3",{className:"text-center",style:{marginBottom:"3.5em"},children:"Majic makes cutting edge software and gear for musicians so you can focus on being the creative."})]})}),Object($.jsx)(ne,{container:!0,spacing:10,mb:10,children:c.map((function(e){return Object($.jsx)(ne,{item:!0,xs:12,sm:6,children:Object($.jsxs)(ne,{container:!0,direction:"column",alignItems:"center",children:[Object($.jsx)("h3",{className:"mb-2 fw-bold",style:{maxWidth:"80%",fontSize:"3.5em"},children:e.title}),Object($.jsx)("h5",{className:"mb-4",style:{maxWidth:"80%"},children:e.description}),Object($.jsx)(ce.a,{rounded:!0,src:e.images[0].src,width:"90%",className:"strong-shadow"})]})},e.id)}))})]})},se=c(222),re=c(223),ie=Object(G.a)(R.a)(J.c),oe=Object(G.a)(L.a)(J.c);Object(G.a)(se.a)(J.c);var le=function(){return Object($.jsxs)("footer",{children:[Object($.jsx)(ie,{my:3}),Object($.jsxs)(oe,{container:!0,mb:3,px:3,spacing:10,alignItems:"center",justifyContent:"space-between",children:[Object($.jsx)(oe,{item:!0,children:"@2021 Majic. All rights reserved."}),Object($.jsx)(oe,{item:!0,children:Object($.jsx)(re.a,{target:"_blank",href:"assets/docs/JuiceboxTOS.pdf",children:"Terms of Service"})})]})]})};var je=function(){return Object($.jsxs)($.Fragment,{children:[Object($.jsx)(Z,{}),Object($.jsxs)("main",{children:[Object($.jsx)(ee,{}),Object($.jsx)(te,{}),Object($.jsx)(ae,{})]}),Object($.jsx)(le,{})]})},de=c(4),be=c(199),he=c(224),ue=c(225),xe=c(226),me=c(205),Oe=c(228),fe=c(227),pe=c(201),ve=c(202),ge=Object(G.a)(L.a)(J.c),ye=Object(G.a)(B.a)(J.c);var Ne=function(){var e=Object(o.f)(),t=(Object(h.d)((function(e){return e.shopify.client})),Object(n.useState)({showPassword:!1,email:"",password:""})),c=Object(k.a)(t,2),a=c[0],s=c[1];return Object(n.useEffect)((function(){}),[]),Object($.jsxs)($.Fragment,{children:[Object($.jsx)(Z,{textColor:"dark"}),Object($.jsx)(be.a,{className:"align-items-center",fluid:"sm",style:{maxWidth:"576px"},children:Object($.jsx)(he.a,{elevation:20,sx:{marginTop:"10vh"},children:Object($.jsxs)(ue.a,{children:[Object($.jsx)("h1",{className:"fw-bold",children:"Log In"}),Object($.jsx)(q.a,{className:"my-4",children:"Enter the email address associated with your Output account. Don't have an account? Enter your info and click \"new account\", and we'll create one for you."}),Object($.jsx)(ge,{container:!0,mb:3,children:Object($.jsx)(ge,{item:!0,sm:!0,children:Object($.jsx)(xe.a,{fullWidth:!0,children:Object($.jsx)(me.a,{variant:"outlined",label:"Email",placeholder:"Email",required:!0})})})}),Object($.jsx)(ge,{container:!0,mb:3,children:Object($.jsxs)(ge,{item:!0,sm:!0,children:[Object($.jsx)(xe.a,{fullWidth:!0,children:Object($.jsx)(me.a,{variant:"outlined",label:"Password",placeholder:"Passsword",type:a.showPassword?"text":"password",required:!0,InputProps:{endAdornment:Object($.jsx)(Oe.a,{position:"end",children:Object($.jsx)(P.a,{"aria-label":"toggle password visibility",onClick:function(){return s(Object(de.a)(Object(de.a)({},a),{},{showPassword:!a.showPassword}))},onMouseDown:function(e){return e.preventDefault()},edge:"end",children:a.showPassword?Object($.jsx)(pe.a,{}):Object($.jsx)(ve.a,{})})})}})}),Object($.jsx)(fe.a,{children:"Must have at least 5 characters"})]})}),Object($.jsx)(ge,{container:!0,mb:2,children:Object($.jsx)(ge,{item:!0,sm:!0,children:Object($.jsx)(ye,{color:"primary",variant:"contained",fullWidth:!0,onClick:function(){return e("/account")},children:"Log In"})})}),Object($.jsx)(ge,{container:!0,mb:2,children:Object($.jsx)(ge,{item:!0,sm:!0,children:Object($.jsx)(ye,{color:"primary",variant:"outlined",fullWidth:!0,children:"Create Account"})})})]})})})]})},ke=c(207),we=c(203),Ce=c(124),Ie=Object(G.a)(B.a)(J.c);var Le=function(){var e=Object(T.a)();return Object($.jsxs)("section",{children:[Object($.jsxs)("div",{className:"d-flex flex-direction-row align-items-center",children:[Object($.jsx)("h1",{children:"Daniel Majic"}),Object($.jsx)(Ie,{variant:"outlined",color:"primary",className:"rounded-pill ml-1 px-3",onClick:function(){return e("/login")},ml:3,children:"Log Out"})]}),Object($.jsxs)(ke.a,{children:[Object($.jsx)(be.a,{className:"px-0",children:Object($.jsxs)(we.a,{children:[Object($.jsx)(Ce.a,{children:Object($.jsxs)(ke.a.Group,{className:"mb-3",controlId:"form-firstName",children:[Object($.jsx)(ke.a.Label,{className:"fw-bold",children:"First Name"}),Object($.jsx)(ke.a.Control,{type:"text",required:!0,className:"bg-transparent border-1 border-dark"})]})}),Object($.jsx)(Ce.a,{children:Object($.jsxs)(ke.a.Group,{className:"mb-3",controlId:"form-lastName",children:[Object($.jsx)(ke.a.Label,{className:"fw-bold",children:"Last Name"}),Object($.jsx)(ke.a.Control,{type:"text",required:!0,className:"bg-transparent border-1 border-dark"})]})})]})}),Object($.jsx)(be.a,{className:"px-0",children:Object($.jsx)(we.a,{children:Object($.jsx)(Ce.a,{children:Object($.jsxs)(ke.a.Group,{className:"mb-3",controlId:"form-email",children:[Object($.jsx)(ke.a.Label,{className:"fw-bold",children:"Email"}),Object($.jsx)(ke.a.Control,{type:"email",className:"bg-transparent border-1 border-dark"})]})})})}),Object($.jsx)("h4",{className:"mt-5 fw-bold",children:"Change Password"}),Object($.jsx)(be.a,{className:"px-0",children:Object($.jsx)(we.a,{children:Object($.jsx)(Ce.a,{children:Object($.jsxs)(ke.a.Group,{className:"mb-3",controlId:"form-currentPassword",children:[Object($.jsx)(ke.a.Label,{className:"fw-bold",children:"Current Password"}),Object($.jsx)(ke.a.Control,{type:"password",className:"bg-transparent border-1 border-dark"}),Object($.jsx)(ke.a.Text,{className:"text-muted",children:"Leave blank if unchanged."})]})})})}),Object($.jsx)(be.a,{className:"px-0",children:Object($.jsx)(we.a,{children:Object($.jsx)(Ce.a,{children:Object($.jsxs)(ke.a.Group,{className:"mb-3",controlId:"form-newPassword",children:[Object($.jsx)(ke.a.Label,{className:"fw-bold",children:"New Password"}),Object($.jsx)(ke.a.Control,{type:"password",className:"bg-transparent border-1 border-dark"})]})})})}),Object($.jsx)(be.a,{className:"px-0",children:Object($.jsx)(we.a,{children:Object($.jsx)(Ce.a,{children:Object($.jsxs)(ke.a.Group,{className:"mb-3",controlId:"form-confirmPassword",children:[Object($.jsx)(ke.a.Label,{className:"fw-bold",children:"Confirm Password"}),Object($.jsx)(ke.a.Control,{type:"password",className:"bg-transparent border-1 border-dark"})]})})})}),Object($.jsx)(be.a,{children:Object($.jsx)(we.a,{children:Object($.jsx)(Ce.a,{className:"d-flex flex-direction-row justify-content-end px-0",children:Object($.jsx)(Ie,{color:"primary",variant:"contained",type:"submit",className:"rounded-pill px-3",children:"Submit"})})})})]})]})},Pe=c(229),Se=c(230),De=c(231),We=c(232),Te=c(233);var _e=function(){return Object(T.a)(),Object($.jsxs)("section",{children:[Object($.jsx)("div",{className:"d-flex flex-direction-row align-items-center",children:Object($.jsx)("h1",{children:"Arcade (Monthly)"})}),Object($.jsx)(Pe.a,{children:Object($.jsx)(Se.a,{children:Object($.jsx)(De.a,{children:Object($.jsxs)(We.a,{children:[Object($.jsx)(Te.a,{align:"center",children:Object($.jsx)(q.a,{className:"fw-bold",children:"Status"})}),Object($.jsx)(Te.a,{align:"center",children:Object($.jsx)(q.a,{children:"Expired"})})]})})})})]})};var Ee=function(){return Object(T.a)(),Object($.jsx)("section",{children:Object($.jsx)("div",{className:"d-flex flex-direction-row align-items-center",children:Object($.jsx)("h1",{children:"Downloads"})})})};var Ae=function(){return Object(T.a)(),Object($.jsx)("section",{children:Object($.jsx)("div",{className:"d-flex flex-direction-row align-items-center",children:Object($.jsx)("h1",{children:"Orders"})})})};var Fe=function(){return Object(T.a)(),Object($.jsx)("section",{children:Object($.jsx)("div",{className:"d-flex flex-direction-row align-items-center",children:Object($.jsx)("h1",{children:"Referrals"})})})};var Me=function(){return Object(T.a)(),Object($.jsxs)("section",{children:[Object($.jsx)("div",{className:"d-flex flex-direction-row align-items-center mb-5",children:Object($.jsx)("h1",{children:"Arcade (Monthly)"})}),Object($.jsxs)(L.a,{container:!0,children:[Object($.jsx)(L.a,{item:!0,sm:6,className:"border border-dark px-4 py-3 border-bottom-0 border-end-0",children:Object($.jsx)(q.a,{className:"fw-bold",children:"Status"})}),Object($.jsx)(L.a,{item:!0,sm:6,className:"border border-dark px-4 py-3 border-bottom-0 ",children:Object($.jsx)(q.a,{children:"Expired"})})]}),Object($.jsxs)(L.a,{container:!0,children:[Object($.jsx)(L.a,{item:!0,sm:6,className:"border border-dark px-4 py-3 border-bottom-0 border-end-0",children:Object($.jsx)(q.a,{className:"fw-bold",children:"Start Date"})}),Object($.jsx)(L.a,{item:!0,sm:6,className:"border border-dark px-4 py-3 border-bottom-0",children:Object($.jsx)(q.a,{children:"March 5, 2019"})})]}),Object($.jsxs)(L.a,{container:!0,children:[Object($.jsx)(L.a,{item:!0,sm:6,className:"border border-dark px-4 py-3 border-bottom-0 border-end-0",children:Object($.jsx)(q.a,{className:"fw-bold",children:"End Date"})}),Object($.jsx)(L.a,{item:!0,sm:6,className:"border border-dark px-4 py-3 border-bottom-0",children:Object($.jsx)(q.a,{children:"December 20, 2020"})})]}),Object($.jsxs)(L.a,{container:!0,children:[Object($.jsx)(L.a,{item:!0,sm:6,className:"border border-dark px-4 py-3 border-end-0",children:Object($.jsx)(q.a,{className:"fw-bold",children:"Actions"})}),Object($.jsx)(L.a,{item:!0,sm:6,className:"border border-dark px-4 py-3 ",children:Object($.jsx)(q.a,{className:"fw-bold text-decoration-underline",children:"Sign Up Again"})})]})]})},Ue=Object(G.a)(R.a)(J.c);var Re=function(){var e=Object(T.a)(),t=Object(n.useState)("account"),c=Object(k.a)(t,2),a=c[0],s=c[1];return Object($.jsxs)($.Fragment,{children:[Object($.jsx)(Z,{noText:!0}),Object($.jsx)(Ue,{my:5}),Object($.jsxs)(be.a,{className:"align-items-center",fluid:"sm",style:{maxWidth:"992px"},children:[Object($.jsxs)(w.a,{expand:"lg",className:"mb-5",children:[Object($.jsx)(w.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object($.jsx)(w.a.Collapse,{id:"basic-navbar-nav",children:Object($.jsxs)(C.a,{children:[Object($.jsx)(C.a.Link,{className:"text-dark fw-bold smooth hover-underline ".concat("account"===a?"text-decoration-underline":""),onClick:function(){return s("account")},children:"Account"}),Object($.jsx)(C.a.Link,{className:"text-dark fw-bold smooth hover-underline ".concat("subscriptions"===a?"text-decoration-underline":""),onClick:function(){return s("subscriptions")},children:"Subscriptions"}),Object($.jsx)(C.a.Link,{className:"text-dark fw-bold smooth hover-underline ".concat("arcade"===a?"text-decoration-underline":""),onClick:function(){return s("arcade")},children:"Arcade"}),Object($.jsx)(C.a.Link,{className:"text-dark fw-bold smooth hover-underline ".concat("orders"===a?"text-decoration-underline":""),onClick:function(){return s("orders")},children:"Orders"}),Object($.jsx)(C.a.Link,{className:"text-dark fw-bold smooth hover-underline ".concat("downloads"===a?"text-decoration-underline":""),onClick:function(){return s("downloads")},children:"Downloads"}),Object($.jsx)(C.a.Link,{className:"text-dark fw-bold smooth hover-underline ".concat("referrals"===a?"text-decoration-underline":""),onClick:function(){return s("referrals")},children:"Referrals"}),Object($.jsx)(C.a.Link,{className:"text-dark fw-bold smooth hover-underline ".concat("logout"===a?"text-decoration-underline":""),onClick:function(){return e("/login")},children:"Log Out"})]})})]}),Object($.jsxs)("main",{className:"container-sm",children:["account"===a&&Object($.jsx)(Le,{}),"subscriptions"===a&&Object($.jsx)(Me,{}),"arcade"===a&&Object($.jsx)(_e,{}),"orders"===a&&Object($.jsx)(Ae,{}),"downloads"===a&&Object($.jsx)(Ee,{}),"referrals"===a&&Object($.jsx)(Fe,{})]})]})]})},qe=c(20),Be=c(237),ze=c(234),Ge=c(235),Je=c(236),$e=Object(G.a)(B.a)(J.c),He=function(e){var t=e.product,c=Object(T.a)(),a=Object(h.d)((function(e){return e.shopify.client})),s=Object(h.d)((function(e){return e.shopify.checkoutID})),r=Object(n.useState)("available"),i=Object(k.a)(r,2),o=i[0],l=i[1],j=function(e){var c=!1;e.forEach((function(e){e.variant.id==t.variants[0].id&&(c=!0)})),console.log("found",c,t.title),l(c?"added":"available")};Object(n.useEffect)((function(){s?a.checkout.fetch(s).then((function(e){j(e.lineItems)})):a.checkout.create().then((function(e){console.log("checking checkout for product",e),d(p(e.id)),j(e.lineItems)}))}),[]);var d=Object(h.c)();return Object($.jsxs)(he.a,{children:[Object($.jsx)(ze.a,{component:"img",height:"160",image:t.images[0].src,alt:"image",onClick:function(){return c("/productDetails/".concat(t.id))}}),Object($.jsxs)(ue.a,{onClick:function(){return c("/productDetails/".concat(t.id))},children:[Object($.jsx)(q.a,{children:t.title}),Object($.jsxs)(q.a,{variant:"h6",children:["$",t.variants[0].price||""]})]}),Object($.jsx)(Ge.a,{children:Object($.jsxs)($e,{color:"primary",variant:"contained",fullWidth:!0,disabled:!t.variants[0],onClick:function(){if(l("loading"),console.log("product id",t.variants[0].id),console.log("checkout id",s),s){var e=[{variantId:t.variants[0].id,quantity:1}];a.checkout.addLineItems(s,e).then((function(e){console.log("add product",e),j(e.lineItems)}))}else a.checkout.create().then((function(e){console.log("new checkout",e),d(p(e.id));var c=[{variantId:t.variants[0].id,quantity:1}];a.checkout.addLineItems(e.id,c).then((function(e){console.log("add product",e),j(e.lineItems)}))}))},children:["available"==o&&Object($.jsx)(q.a,{children:"Add to Cart"}),"loading"==o&&Object($.jsx)(Je.a,{}),"added"==o&&Object($.jsx)(q.a,{children:"Added"})]})})]})},Ke=Object(G.a)(R.a)(J.c),Ve=Object(G.a)(L.a)(J.c),Ye=Object(G.a)(Be.a)(J.c),Qe=function(e){Object(M.a)(c,e);var t=Object(U.a)(c);function c(){var e;Object(A.a)(this,c);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={allProducts:[],products:[],searchProducts:""},e.filterProducts=function(){var t=Object(qe.a)(e.state.allProducts).filter((function(t){var c=t.title.toLowerCase(),n=t.description.toLowerCase(),a=e.state.searchProducts.toLowerCase();return c.includes(a)||n.includes(a)}));e.setState({products:t})},e}return Object(F.a)(c,[{key:"componentDidMount",value:function(){var e,t=this;null===(e=this.props.shopifyClient)||void 0===e||e.product.fetchAll().then((function(e){console.log("products",e);for(var c=[],n=0;n<e.length;n++){var a=e[n];a&&c.push(a)}t.setState({products:c,allProducts:c})}))}},{key:"componentDidUpdate",value:function(e,t){t.searchProducts!==this.state.searchProducts&&this.filterProducts()}},{key:"render",value:function(){var e=this;return Object($.jsxs)($.Fragment,{children:[Object($.jsx)(Z,{textColor:"dark"}),Object($.jsx)(Ke,{my:3}),Object($.jsx)(Ye,{p:5,children:Object($.jsxs)(Ve,{container:!0,spacing:5,children:[Object($.jsx)(Ve,{item:!0,xs:12,children:Object($.jsx)(xe.a,{fullWidth:!0,children:Object($.jsx)(me.a,{variant:"outlined",fullWidth:!0,label:"Search Products",value:this.state.searchProducts,onChange:function(t){return e.setState({searchProducts:t.target.value})},className:"bg-light",style:{borderRadius:"4px"}})})}),Object($.jsx)(Ve,{item:!0,xs:12,children:Object($.jsxs)(Ve,{container:!0,spacing:5,children:[Object($.jsx)(Ve,{item:!0,xs:3,children:Object($.jsx)(Ve,{container:!0,spacing:5,children:Object($.jsxs)(Ve,{item:!0,xs:12,children:[Object($.jsx)(Ke,{}),Object($.jsx)(q.a,{children:"Filters"}),Object($.jsx)(Ke,{}),Object($.jsx)(q.a,{children:"Price"})]})})}),Object($.jsx)(Ve,{item:!0,xs:9,children:Object($.jsx)(Ye,{children:Object($.jsx)(Ve,{container:!0,spacing:5,children:this.state.products.map((function(e){return Object($.jsx)(Ve,{item:!0,xs:12,sm:6,md:3,children:Object($.jsx)(He,{product:e})},e.id)}))})})})]})})]})})]})}}]),c}(a.a.Component),Xe=Object(h.b)((function(e){return{shopifyClient:e.shopify.client,shopifyCheckout:e.shopify.checkout}}),(function(e){return{}}))(Qe),Ze=Object(G.a)(L.a)(J.c),et=Object(G.a)(R.a)(J.c);var tt=function(){var e=Object(n.useState)({firstName:"",lastName:"",phone:"",description:""}),t=Object(k.a)(e,2),c=t[0],a=t[1];return Object($.jsxs)($.Fragment,{children:[Object($.jsx)(Z,{noText:!0}),Object($.jsx)(et,{my:3}),Object($.jsxs)(Ze,{container:!0,direction:"column",alignItems:"center",spacing:5,style:{maxWidth:"700px"},mx:"auto",children:[Object($.jsx)(Ze,{item:!0,xs:12,children:Object($.jsx)(q.a,{align:"center",variant:"h5",className:"fw-bold",children:"CONTACT OUR TEAM"})}),Object($.jsx)(Ze,{item:!0,xs:12,children:Object($.jsx)(q.a,{children:"Please use the email address and full name associated with your order (or include the order # in your message if applicable) so we can best assist you."})}),Object($.jsx)(Ze,{item:!0,xs:12,children:Object($.jsx)(q.a,{children:"We try to answer every message same day but please allow up to 48 hours for a response back from one of our team members. Thank you!"})}),Object($.jsx)(Ze,{item:!0,xs:12,children:Object($.jsx)("form",{onSubmit:function(e){e.preventDefault()},children:Object($.jsxs)(Ze,{container:!0,spacing:5,children:[Object($.jsx)(Ze,{item:!0,xs:6,pt:2,children:Object($.jsx)(xe.a,{fullWidth:!0,children:Object($.jsx)(me.a,{value:c.firstName,autoComplete:"name",onChange:function(e){return a(Object(de.a)(Object(de.a)({},c),{},{firstName:e.target.value}))},variant:"outlined",label:"First Name",fullWidth:!0})})}),Object($.jsx)(Ze,{item:!0,xs:6,pt:2,children:Object($.jsx)(xe.a,{fullWidth:!0,children:Object($.jsx)(me.a,{value:c.lastName,autoComplete:"family-name",onChange:function(e){return a(Object(de.a)(Object(de.a)({},c),{},{lastName:e.target.value}))},variant:"outlined",label:"Last Name",fullWidth:!0})})}),Object($.jsx)(Ze,{item:!0,xs:12,pt:2,children:Object($.jsx)(xe.a,{fullWidth:!0,children:Object($.jsx)(me.a,{value:c.phone,autoComplete:"tel",onChange:function(e){return a(Object(de.a)(Object(de.a)({},c),{},{phone:e.target.value}))},variant:"outlined",label:"Phone",fullWidth:!0})})}),Object($.jsx)(Ze,{item:!0,xs:12,pt:2,children:Object($.jsx)(xe.a,{fullWidth:!0,children:Object($.jsx)(me.a,{value:c.description,onChange:function(e){return a(Object(de.a)(Object(de.a)({},c),{},{description:e.target.value}))},variant:"outlined",multiline:!0,label:"Description",fullWidth:!0})})}),Object($.jsx)(Ze,{item:!0,xs:12,pt:2,children:Object($.jsx)(B.a,{type:"submit",variant:"contained",children:"Send"})})]})})})]})]})},ct=(Object(G.a)(L.a)(J.c),Object(G.a)(R.a)(J.c));var nt=function(){return Object($.jsxs)($.Fragment,{children:[Object($.jsx)(Z,{textColor:"dark",noText:!0}),Object($.jsx)(ct,{my:3}),Object($.jsxs)(be.a,{className:"align-items-center",fluid:"sm",style:{maxWidth:"576px"},children:[Object($.jsx)(Be.a,{style:{margin:"0 auto",display:"flex",flexDirection:"column",alignItems:"center"},children:Object($.jsx)(ce.a,{src:"assets/images/Hooked-2.0-Notes-Kit.png",width:"90%",className:"shadow"})}),Object($.jsx)(q.a,{className:"my-4",align:"center",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]})]})},at=Object(G.a)(R.a)(J.c),st=Object(G.a)(L.a)(J.c),rt=Object(G.a)(Be.a)(J.c),it=Object(G.a)(q.a)(J.c);var ot=function(){var e=Object(n.useState)(""),t=Object(k.a)(e,2),c=t[0],a=t[1],s=Object(o.g)(),r=Object(h.d)((function(e){return e.shopify.client}));return Object(n.useEffect)((function(){null===r||void 0===r||r.product.fetch(s.productID).then((function(e){console.log("product details",e),a(e)}))}),[s]),Object($.jsxs)($.Fragment,{children:[Object($.jsx)(Z,{textColor:"dark"}),Object($.jsx)(at,{my:3}),Object($.jsx)(rt,{p:5,children:c?Object($.jsx)(st,{container:!0,spacing:5,children:Object($.jsx)(st,{item:!0,xs:12,children:Object($.jsxs)(st,{container:!0,spacing:5,children:[Object($.jsx)(st,{item:!0,xs:12,sm:6,children:Object($.jsx)(ce.a,{rounded:!0,src:c.images[0].src,width:"90%",className:"strong-shadow"})}),Object($.jsxs)(st,{item:!0,xs:12,sm:6,children:[Object($.jsx)(it,{variant:"h3",className:"fw-bold",children:c.title}),Object($.jsx)(it,{my:2,children:c.description}),Object($.jsxs)(it,{my:2,variant:"body2",children:["$",c.variants[0].price]}),Object($.jsx)(B.a,{variant:"contained",children:"Add to Cart"})]})]})})}):Object($.jsx)(st,{container:!0,spacing:5,alignItems:"center",justifyContent:"center",children:Object($.jsx)(st,{item:!0,children:Object($.jsx)(Je.a,{})})})})]})};var lt=function(){var e=Object(n.useMemo)((function(){return Object(l.a)(b())}),[]);return Object($.jsx)(j.a,{theme:e,children:Object($.jsx)(h.a,{store:N(),children:Object($.jsx)(i.a,{children:Object($.jsxs)(o.c,{children:[Object($.jsx)(o.a,{path:"/",element:Object($.jsx)(je,{})}),Object($.jsx)(o.a,{path:"/login",element:Object($.jsx)(Ne,{})}),Object($.jsx)(o.a,{path:"/account",element:Object($.jsx)(Re,{})}),Object($.jsx)(o.a,{path:"/products",element:Object($.jsx)(Xe,{})}),Object($.jsx)(o.a,{path:"/contact",element:Object($.jsx)(tt,{})}),Object($.jsx)(o.a,{path:"/aboutUs",element:Object($.jsx)(nt,{})}),Object($.jsx)(o.a,{path:"/productDetails/:productID",element:Object($.jsx)(ot,{})})]})})})})},jt=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,238)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};r.a.render(Object($.jsx)(a.a.StrictMode,{children:Object($.jsx)(lt,{})}),document.getElementById("root")),jt()}},[[154,1,2]]]);
//# sourceMappingURL=main.24caa7c5.chunk.js.map