(this["webpackJsonpavengers-frontend"]=this["webpackJsonpavengers-frontend"]||[]).push([[0],{111:function(e,t,c){},114:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),r=c(20),a=c.n(r),i=(c(58),c(8)),l=c(5),o=c(3),j=c.n(o),d=c(6),b=c(2),u=c(49),x=c.n(u).a.create({baseURL:"http://avengerscafebackend-env.eba-4k2yn9bw.us-east-2.elasticbeanstalk.com"}),m=(c(78),c(1));var h=function(){return Object(m.jsx)(i.b,{to:"/",className:"fixed hover:text-gray-100 z-50 left-10 top-6 p-2 rounded-full bg-pink text-gray-50",children:Object(m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-8 w-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(m.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 19l-7-7m0 0l7-7m-7 7h18"})})})};var p=function(){var e=Object(n.useState)(""),t=Object(b.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)(""),a=Object(b.a)(r,2),i=a[0],o=a[1],u=Object(n.useState)(""),p=Object(b.a)(u,2),O=p[0],f=p[1],g=Object(n.useState)(""),v=Object(b.a)(g,2),N=v[0],y=v[1],w=Object(n.useState)(!1),C=Object(b.a)(w,2),k=C[0],S=C[1],I=Object(n.useState)(),T=Object(b.a)(I,2),D=T[0],E=T[1],q=(new Date).getDate().toString();function L(){return(L=Object(d.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.post("/customer/save",{address:N,date:q,name:c,nic:O,phone:i}).then((function(e){S(!0),localStorage.setItem("cus_id",e.data)})).catch((function(e){e.response?E("Can't send customer information"):e.request?(E("Internal Server Error"),console.log(e)):E("Can't send customer information")}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return k?Object(m.jsx)(l.a,{to:"/order"}):void 0!==D?Object(m.jsx)("div",{className:"w-screen h-screen flex items-center justify-center text-7xl tracking-widest font-light uppercase text-gray-400",children:D}):Object(m.jsxs)("div",{className:"h-screen flex w-screen justify-end bg-gray-100 overflow-hidden relative",children:[Object(m.jsx)(h,{}),Object(m.jsxs)("div",{className:"ml-16",children:[Object(m.jsxs)("svg",{width:"982",height:"1200",viewBox:"0 0 982 1200",fill:"none",className:"customer-shape",children:[Object(m.jsx)("path",{d:"M915 1206C915 1206 756 951 772 724C788 497 1002 561 980 228C980 228 967 62 899 2H0V1201L915 1206Z",fill:"#FFDB6D"}),Object(m.jsx)("path",{d:"M898 1203C898 1203 739 948 755 721C771 494 985 558 963 225C963 225 950 59 882 -1L0 2V1201L898 1203Z",fill:"#F9F9F9"})]}),Object(m.jsxs)("div",{className:"absolute left-24 top-20",children:[Object(m.jsx)("h1",{className:"text-yellow-light text-3xl text-logo font-semibold",children:"Avengers cafe"}),Object(m.jsxs)("div",{className:"mt-10",children:[Object(m.jsx)("h2",{className:"text-4xl font-semibold",children:"Welcome Back!"}),Object(m.jsx)("h3",{className:"text-2xl",children:"We need your information for your own safety."})]}),Object(m.jsxs)("div",{className:" ml-12 mt-12\u2248",children:[Object(m.jsxs)("div",{className:"flex flex-col w-24 min-w-full items-start mt-2",children:[Object(m.jsx)("label",{name:"",children:"Name"}),Object(m.jsx)("input",{type:"text",className:"bg-white px-3 py-3 rounded-md mt-3 w-24 min-w-full",name:"Name",id:"Name",placeholder:"Enter your name",onChange:function(e){return s(e.target.value)}})]}),Object(m.jsxs)("div",{className:"flex flex-col items-start mt-2",children:[Object(m.jsx)("label",{name:"",children:"Mobile"}),Object(m.jsx)("input",{type:"text",className:"bg-white px-3 py-3 rounded-md mt-3 w-24 min-w-full",name:"Mobile",id:"Mobile",placeholder:"Enter your mobile number",maxLength:"10",onChange:function(e){return o(e.target.value)}})]}),Object(m.jsxs)("div",{className:"flex flex-col items-start mt-2",children:[Object(m.jsx)("label",{name:"",children:"NIC"}),Object(m.jsx)("input",{type:"text",className:"bg-white px-3 py-3 rounded-md mt-3 w-24 min-w-full",name:"NIC",id:"NIC",placeholder:"Enter your NIC number",onChange:function(e){return f(e.target.value)}})]}),Object(m.jsxs)("div",{className:"flex flex-col items-start mt-2",children:[Object(m.jsx)("label",{name:"Address",children:"Address"}),Object(m.jsx)("textarea",{name:"Address",className:"bg-white px-3 py-3 rounded-md mt-3 w-24 min-w-full",id:"Address",placeholder:"Enter your address",onChange:function(e){return y(e.target.value)}})]}),Object(m.jsx)("button",{id:"",className:"bg-yellow-light px-7 py-4 rounded-md mt-10 w-24 min-w-full",onClick:function(){return L.apply(this,arguments)},children:"Get Started"})]})]})]}),Object(m.jsx)("div",{className:"h-screen flex justify-end bg-blue-400",children:Object(m.jsx)("img",{src:".images/one.png",alt:"",className:"w-full h-full object-contain"})})]})};var O=function(){return Object(m.jsx)("div",{className:"",children:Object(m.jsx)("div",{className:"container mx-auto",children:Object(m.jsxs)("div",{className:"flex flex-col items-start justify-center",children:[Object(m.jsx)(i.b,{to:"/customer-safety",className:"px-6 py-4 rounded-lg hover:text-gray-300 bg-pink mb-6",children:"Customer Safety"}),Object(m.jsx)(i.b,{to:"/order",className:"px-6 py-4 rounded-lg hover:text-gray-300 bg-pink mb-6",children:"Order"}),Object(m.jsx)(i.b,{to:"/kitchen",className:"px-6 py-4 rounded-lg hover:text-gray-300 bg-pink mb-6",children:"Kitchen"}),Object(m.jsx)(i.b,{to:"/dashboard/cashier",className:"px-6 py-4 rounded-lg hover:text-gray-300 bg-pink",children:"Dashboard"})]})})})};var f=function(){return Object(m.jsx)("div",{children:Object(m.jsx)("div",{className:"w-screen h-screen flex items-center justify-center text-7xl tracking-widest font-light uppercase text-gray-100",children:Object(m.jsx)(O,{})})})},g=c(18);c(40);var v=function(e){var t=e.image,c=e.name,n=e.price;return Object(m.jsxs)("div",{className:"bg-white w-64 h-80 rounded-lg flex flex-col items-center p-6 cursor-pointer",children:[Object(m.jsx)("div",{className:"rounded-full h-48 w-36 bg-yellow-mid flex items-center justify-center",children:Object(m.jsx)("img",{src:t,className:"category-image",alt:"Food"})}),Object(m.jsx)("h1",{className:"text-3xl my-5 text-center",children:c}),Object(m.jsxs)("h2",{className:"text-2xl font-semibold",children:["$",n]})]})},N=c(25),y=c(16);var w=function(e){var t=e.image,c=e.name,n=e.quantity,s=e.price;return Object(m.jsxs)("div",{className:"flex items-center mb-5",children:[Object(m.jsx)("div",{className:"w-36 h-36 bg-yellow-mid rounded-full flex items-center justify-center",children:Object(m.jsx)("img",{className:"category-image",src:t,alt:"Item"})}),Object(m.jsxs)("div",{className:"flex flex-1 flex-col px-3 justify-between",children:[Object(m.jsx)("h3",{className:"text-2xl font-semibold text-gray-500",children:c}),Object(m.jsxs)("p",{className:"text-gray-400 text-xl",children:["$",s]})]}),Object(m.jsxs)("p",{className:"px-3 text-xl text-gray-500",children:["x",n]}),Object(m.jsxs)("p",{className:"text-xl text-gray-500",children:["$",s*n]})]})};c(41);var C=function(e){var t=e.active,c=e.icon,n=e.title;return Object(m.jsxs)("div",{className:"cursor-pointer w-44 h-56 flex flex-col items-center justify-center rounded-3xl ".concat(t?"bg-yellow-light":"bg-gray-50"),children:[Object(m.jsx)("div",{className:"w-28 h-28 flex items-center justify-center rounded-3xl ".concat(t?"bg-white":"bg-gray-300"),children:Object(m.jsx)("img",{src:c,alt:"Icon"})}),Object(m.jsx)("p",{className:"text-center text-2xl font-semibold text-gray-500 mt-3",children:n})]})},k=c(4),S=c(52),I=c.n(S),T=c(116),D={ACTIVE:1,INACTIVE:2,BILLD:3,PENDING:4,COMPLETED:5},E=c(31);c(45);var q=function(e){var t=e.icon,c=e.name,n=e.active;return Object(m.jsxs)("div",{className:"".concat(n?"bg-pink":"bg-gray-100"," w-24 h-24 rounded-md flex flex-col items-center justify-center cursor-pointer"),children:[t,Object(m.jsx)("p",{className:"".concat(n?"text-white":"text-gray-500"),children:c})]})};var L=function(e){var t=Object(m.jsx)(N.a,{className:"w-14 h-14 block ".concat("Home"===e.type?"text-white":"text-gray-500")}),c=Object(m.jsx)(y.b,{className:"w-14 h-14 block ".concat("Kitchen"===e.type?"text-white":"text-gray-500")}),n=Object(m.jsx)(y.a,{className:"w-14 h-14 text-gray-500 block"}),s=Object(m.jsx)(y.c,{className:"w-14 h-14 text-gray-500 block"}),r=Object(m.jsx)(y.e,{className:"w-14 h-14 text-gray-500 block"}),a=Object(m.jsx)(y.d,{className:"w-14 h-14 block ".concat("Dashboard"===e.type?"text-white":"text-gray-500")});return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"w-1/12 flex flex-col items-center relative justify-between pb-10",children:[Object(m.jsxs)("div",{className:"flex flex-col h-3/5 justify-around items-center",children:[Object(m.jsx)("img",{src:"./images/logo.png",alt:"LOGO",className:"logo"}),"Home"===e.type&&Object(m.jsx)(q,{icon:t,name:"Home",active:!0}),"Kitchen"===e.type&&Object(m.jsx)(q,{icon:c,name:"Kitchen",active:!0}),"Dashboard"===e.type&&Object(m.jsx)(q,{icon:a,name:"Dashboard",active:!0}),Object(m.jsx)(q,{icon:n,name:"Chat",active:"Chat"===e.type}),Object(m.jsx)(q,{icon:s,name:"Settings",active:"Settings"===e.type})]}),Object(m.jsx)(i.b,{to:"/",children:Object(m.jsx)(q,{icon:r,name:"Close",active:!1})})]})})},P=[{id:1,title:"rice",icon:"./images/pizza.png"},{id:2,title:"burger",icon:"./images/burger.png"},{id:3,title:"pizza",icon:"./images/rice.png"},{id:4,title:"hot",icon:"./images/pizza.png"},{id:5,title:"devilled",icon:"./images/rice.png"}];var F=function(){var e=Object(k.useState)(!1),t=Object(b.a)(e,2),c=t[0],n=(t[1],Object(k.useState)(1)),s=Object(b.a)(n,2),r=s[0],a=s[1],i=Object(k.useState)([]),l=Object(b.a)(i,2),o=l[0],u=l[1],h=Object(k.useState)(!1),p=Object(b.a)(h,2),O=p[0],f=p[1],y=Object(k.useState)({}),S=Object(b.a)(y,2),q=S[0],F=S[1],M=Object(k.useState)([]),B=Object(b.a)(M,2),A=B[0],z=B[1],$=Object(k.useState)(0),G=Object(b.a)($,2),_=G[0],H=G[1],K=Object(k.useState)(0),R=Object(b.a)(K,2),V=R[0],W=R[1],Y=Object(k.useState)(!1),J=Object(b.a)(Y,2),Q=J[0],U=J[1],Z=function(){return f(!1)},X=function(){return E.b.success("You Order has been placed",{position:"top-center",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})},ee=function(e,t){var c={element:e,qty:t};z([].concat(Object(g.a)(A),[c])),H(0),Z(),U(!1),W(V+parseFloat(c.qty)*parseFloat(c.element.price)),function(e){ne.apply(this,arguments)}(c)};function te(e){return ce.apply(this,arguments)}function ce(){return ce=Object(d.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.get("/api/customer/save/FoodMenu/FoodCategory/".concat(t)).then((function(e){u(e.data)})).catch((function(e){e.response?console.error(e.response):e.request?console.log(e.request):console.log(e)}));case 2:case"end":return e.stop()}}),e)}))),ce.apply(this,arguments)}function ne(){return(ne=Object(d.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.post("/api/order/newitem",{foodie:t.element.food_id,quantity:t.qty,cusId:localStorage.getItem("cus_id")}).then((function(e){console.log(e)})).catch((function(e){e.response?console.error(e.response):e.request?console.log(e.request):console.log(e)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function se(){return re.apply(this,arguments)}function re(){return(re=Object(d.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.post("/order/neworder",{actId:D.PENDING,cusId:localStorage.getItem("cus_id"),totalPrice:parseFloat(.9*V),tableNum:1}).then((function(e){setTimeout((function(){window.location="/customer-safety"}),3e3)})).catch((function(e){e.response?console.error(e.response):e.request?console.log(e.request):console.log(e)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(k.useEffect)((function(){return te(r),function(){}}),[]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"w-screen h-screen bg-gray-100 flex relative",children:[Object(m.jsx)(E.a,{}),Object(m.jsx)(L,{type:"Home"}),Object(m.jsxs)("div",{className:"flex-1 py-6 px-5",children:[Object(m.jsxs)("div",{className:"mb-5",children:[Object(m.jsx)("h1",{className:"text-4xl font-semibold text-gray-500",children:"Menu Category"}),Object(m.jsx)("div",{className:"flex justify-between mt-10",children:P.map((function(e){return Object(m.jsx)("button",{className:"btn",onClick:function(t){a(e.id),te(e.id)},children:Object(m.jsx)(C,{active:r==e.id,icon:e.icon,title:e.title},e.id)})}))}),Object(m.jsx)("h1",{className:"text-4xl font-semibold text-gray-500 my-6",children:"Pick Your Favourite"})]}),o.length>0?Object(m.jsxs)("div",{className:"flex-1 grid grid-cols-4 py-10 relative",children:[Object(m.jsx)("div",{className:"absolute z-30 top-0 right-0 left-0 bottom-0 w-full h-full glass ".concat(c?"block":"hidden")}),o.map((function(e){return Object(m.jsx)("button",{className:"btn",onClick:function(){f(!0),F(e)},children:Object(m.jsx)(v,{image:e.image,name:e.name,price:e.price},e.food_id)})}))]}):Object(m.jsx)("div",{className:"flex items-start justify-center bg-gray-300",children:Object(m.jsx)("p",{className:"text-center text-2xl bg-gray-300 px-8 py-4 ",children:"No Items"})})]}),Object(m.jsxs)("div",{className:"w-1/4 px-4 py-10 relative",children:[Object(m.jsx)("h1",{className:"text-4xl font-semibold mb-10",children:"Order Menu"}),0===A.length?Object(m.jsx)("div",{className:"flex items-start justify-center",children:Object(m.jsx)("p",{className:"text-center text-2xl bg-gray-300 px-8 py-4 rounded-full",children:"No Items"})}):Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:"cart-property",children:A.map((function(e){return Object(m.jsx)(w,{image:e.element.image,name:e.element.name,quantity:e.qty,price:e.element.price})}))}),Object(m.jsx)("div",{className:"w-11/12 h-1 border-2 border-dashed border-gray-400 mx-auto"}),!Q&&Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"px-3 mt-6",children:[Object(m.jsxs)("div",{className:"flex text-2xl font-semibold text-gray-600",children:[Object(m.jsx)("p",{className:"flex-1",children:"Sub Total"}),Object(m.jsxs)("p",{children:["$",V]})]}),Object(m.jsxs)("div",{className:"flex text-2xl font-semibold text-gray-600 mt-2",children:[Object(m.jsx)("p",{className:"flex-1",children:"Discount(10%)"}),Object(m.jsxs)("p",{children:["$",.1*V]})]})]})})]}),!Q&&Object(m.jsx)("div",{className:"".concat(0===A.length?"opacity-60":"opacity-100"," order-btn-properties absolute bottom-10 left-1/2 transform -translate-x-1/2 px-10 py-5 bg-pink text-white rounded-full flex items-center justify-center cursor-pointer"),children:Object(m.jsx)("button",{className:"btn btn-block text-white",onClick:function(){U(!0)},children:0===A.length?Object(m.jsx)(N.b,{className:"w-10 h-10 text-gray-50 block"}):Object(m.jsxs)("p",{className:"text-3xl font-semibold",children:["Order $",V-.1*V]})})}),Q&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"row mt-2 justify-content-around",children:[Object(m.jsx)("div",{className:"col-4 payment-method-properties",children:Object(m.jsx)("img",{src:"./images/card_payment.png"})}),Object(m.jsx)("div",{className:"col-4 payment-method-properties",children:Object(m.jsx)("img",{src:"./images/cash_payment.png"})})]}),Object(m.jsxs)("div",{className:"row mt-2 justify-content-around",children:[Object(m.jsx)("div",{className:"col-4 payment-method-properties",children:Object(m.jsx)("button",{className:"btn btn-block bg-pink text-white",onClick:function(){X(),se()},children:"Card"})}),Object(m.jsx)("div",{className:"col-4 payment-method-properties",children:Object(m.jsx)("button",{className:"btn btn-block bg-pink text-white",onClick:function(){X(),se()},children:"Cash"})})]})]})]})]}),Object(m.jsxs)(I.a,{isOpen:O,onRequestClose:Z,style:{content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",borderRadius:"2rem",width:"16vw",transform:"translate(-50%, -50%)"}},contentLabel:"Example Modal",children:[Object(m.jsx)(v,{image:q.image,name:q.name,price:q.price},q.food_id),Object(m.jsxs)("div",{className:"form-group row",children:[Object(m.jsx)("label",{htmlFor:"elementName",className:"col-sm-4 col-form-label font-size-12 align-text-left",children:"Quantity"}),Object(m.jsx)("div",{className:"col-sm-7",children:Object(m.jsx)("input",{className:"form-control theam-textbox items-align-left",type:"number",id:"elementName",onChange:function(e){H(parseInt(e.target.value))}})})]}),Object(m.jsx)(T.a,{className:"bg-pink text-white rounded-full",onClick:function(){ee(q,_)},children:"Add To Cart"})]})]})},M=c(13),B=(c(46),c(53)),A=c.n(B);var z=function(e){var t=e.key,c=e.userData,n=e.selectedCustomerId,s=Object(k.useState)([]),r=Object(b.a)(s,2),a=r[0],i=r[1],l=Object(k.useState)(0),o=Object(b.a)(l,2),u=o[0],h=o[1],p=function(){var e=Object(d.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.get("/api/order/singleorder/"+c.cusID).then((function(e){e.data.map((function(e){return i((function(t){return[].concat(Object(g.a)(t),[e])})),t=e,void h((function(e){return e+t.prepTime*t.quantity}));var t}))})).catch((function(e){e.response?console.error(e.response):e.request?console.log(e.request):console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(k.useEffect)((function(){i([]),p()}),[]),Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"order-panel pt-3 pl-3 pr-3",children:[Object(m.jsxs)("div",{className:"row justify-content-between",children:[Object(m.jsxs)("div",{className:"col-4",children:[" ID : ",c.cusID]}),Object(m.jsxs)("div",{className:"col-3",children:[" Table No : ",c.tableNum]})]}),Object(m.jsx)("div",{className:"row justify-content-between mt-2",children:Object(m.jsx)("div",{className:"col-5",children:" Section No : 1"})}),Object(m.jsx)("div",{className:"row justify-content-center mt-2 not-selected-card-label",children:Object(m.jsx)("div",{className:"col-6 text-align-center",children:"New Items"})}),Object(m.jsx)("div",{className:"h-3/5 overflow-auto",children:a.map((function(e){return Object(m.jsxs)("div",{className:"row mt-4 justify-content-center",children:[Object(m.jsxs)("div",{className:"col-2",children:[" ",e.quantity]}),Object(m.jsxs)("div",{className:"col-6",children:[" ",e.fname]})]})}))}),Object(m.jsx)("div",{className:"row prep-time-label ".concat(n===c.cusID?"selected-card-label":"not-selected-card-label"),children:Object(m.jsxs)("div",{className:"col-12 text-align-center",children:["Preparation Time : ",u," min"]})})]},t)})};var $=function(){var e=Object(k.useState)(""),t=Object(b.a)(e,2),c=t[0],n=t[1],s=Object(k.useState)([]),r=Object(b.a)(s,2),a=r[0],i=r[1],l=function(){var e=Object(d.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.get("/api/order/cofirmorder").then((function(e){e.data.map((function(e){return i((function(t){return[].concat(Object(g.a)(t),[e])}))}))})).catch((function(e){e.response?console.error(e.response):e.request?console.log(e.request):console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(k.useEffect)((function(){i([]),l(),console.log(a.length)}),[]);var o=function(){var e=Object(d.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.put("/order/chefconfirm/"+t).then((function(e){n(""),i((function(e){var c=e.findIndex((function(e){return e.cusID===t}));return a.splice(c,1)}))})).catch((function(e){e.response?console.error(e.response):e.request?console.log(e.request):console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{style:{maxWidth:"90vw"},children:Object(m.jsx)(A.a,Object(M.a)(Object(M.a)({},{dots:!0,infinite:!0,speed:500,slidesToShow:4,slidesToScroll:1,adaptiveHeight:!0}),{},{children:a.map((function(e,t){return Object(m.jsx)("button",{onClick:function(){n(e.cusID)},children:Object(m.jsx)(z,{userData:e,selectedCustomerId:c},t)})}))}))}),Object(m.jsx)("div",{className:"row justify-content-center",children:Object(m.jsx)("div",{className:"col-3 done-btn-property",children:Object(m.jsx)("button",{type:"button",className:"btn btn-primary",disabled:""===c||void 0===c,onClick:function(){o(c)},children:"Done"})})})]})};var G=function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"w-screen h-screen bg-gray-100 flex relative",children:[Object(m.jsx)(L,{type:"Kitchen"}),Object(m.jsx)("div",{className:"pt-5 pl-2 pr-6 w-screen",children:Object(m.jsx)($,{})})]})})};function _(e){var t=Object(k.useState)({icon:"",amount:"",name:"",type:""}),c=Object(b.a)(t,2),n=c[0],s=c[1],r=Object(k.useState)(0),a=Object(b.a)(r,2),i=a[0],l=a[1],o=function(){var e=Object(d.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.get("/api/order/reports/"+t).then((function(e){l(e.data)})).catch((function(e){e.response?console.error(e.response):e.request?console.log(e.request):console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=Object(d.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.get("/api/order/reports/totalrevenue").then((function(e){l(e.data)})).catch((function(e){e.response?console.error(e.response):e.request?console.log(e.request):console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(k.useEffect)((function(){switch(function(){switch(Number(e.reportType)){case D.BILLD:return s({icon:"./images/order.png",name:"Billed",amount:i,type:"billd"});case D.PENDING:return o(D.PENDING.toString()),s({icon:"./images/pending.png",name:"Pending",amount:i,type:"pending"});case D.COMPLETED:return o(D.COMPLETED.toString()),s({icon:"./images/dispatch.png",name:"Dispatch",amount:i,type:"completed"});default:s({icon:"./images/Total.png",name:"Total",amount:"300"})}}(),parseInt(e.reportType)){case D.BILLD:return o("billed");case D.PENDING:return o("pending");case D.COMPLETED:return o("completed");default:return u()}return function(){}}),[]),Object(m.jsxs)("div",{className:"grid grid-rows-3 grid-flow-col gap-3 p-2",children:[Object(m.jsx)("div",{className:"row-span-3 flex justify-center ",children:Object(m.jsx)("img",{src:n.icon,alt:"report icon"})}),Object(m.jsx)("div",{className:"row-span-2 text-3xl font-bold font-serif col-span-2 text-center",children:i}),Object(m.jsx)("div",{className:"col-span-2 text-center text-xl font-bold",children:n.name})]})}c(48);var H=Object(n.createContext)({id:0,setId:function(){}}),K=Object(n.createContext)({openTable:!1,setOpenTable:function(){}}),R=Object(n.createContext)({total:0,setTotal:function(){}});function V(){var e=Object(n.useState)([]),t=Object(b.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)(!1),a=Object(b.a)(r,2),i=(a[0],a[1]),l=Object(n.useState)(!1),o=Object(b.a)(l,2),u=(o[0],o[1]),h=Object(n.useContext)(H),p=(h.id,h.setId);Object(n.useEffect)((function(){function e(){return(e=Object(d.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.get("/api/order/checkorder").then((function(e){return s(e.data),0!==e.data.length?i(!1):u("No Orders"),e})).catch((function(e){e.response?u("No Orders"):e.request?u("Internal Server Error"):u("Can't Load Orders")}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var O=Object(n.useContext)(K),f=O.openTable,g=O.setOpenTable,v=Object(n.useContext)(R).setTotal,N=c.map((function(e,t){return Object(m.jsxs)("tr",{className:"bg-white border pt-5",children:[Object(m.jsx)("td",{children:t+1}),Object(m.jsx)("td",{children:e.cname}),Object(m.jsx)("td",{children:e.tableNum}),Object(m.jsx)("td",{children:e.actType}),Object(m.jsxs)("td",{children:["Rs.",e.totalPrice,".00"]}),Object(m.jsx)("td",{children:Object(m.jsx)("button",{className:"px-3 py-2 bg-green-500 rounded-md text-white",onClick:function(){return t=e.cusId,c=e.totalPrice,p(t),v(c),void g(!0);var t,c},children:"View"})})]},e.cusId)}));return f?null:Object(m.jsx)("div",{className:"",children:Object(m.jsxs)("table",{className:"table table-hover text-xl",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{scope:"col",children:"No"}),Object(m.jsx)("th",{scope:"col",children:"Customer"}),Object(m.jsx)("th",{scope:"col",children:"Table No"}),Object(m.jsx)("th",{scope:"col",children:"Status"}),Object(m.jsx)("th",{scope:"col",children:"Total (10% Discount)"}),Object(m.jsx)("th",{scope:"col",children:"Action"})]})}),Object(m.jsx)("tbody",{className:"",children:N})]})})}function W(){var e=Object(n.useContext)(H).id,t=Object(n.useContext)(K).openTable,c=Object(n.useContext)(R).total,s=Object(k.useState)([]),r=Object(b.a)(s,2),a=r[0],i=r[1],l=Object(k.useState)(!0),o=Object(b.a)(l,2),u=(o[0],o[1]),h=Object(k.useState)(!1),p=Object(b.a)(h,2),O=(p[0],p[1]);return Object(k.useEffect)((function(){function t(){return(t=Object(d.a)(j.a.mark((function t(){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.get("/api/order/singleorder/".concat(e)).then((function(e){return i(e.data),0!==e.data.length?u(!1):O("No Orders"),e})).catch((function(e){e.response?O("No Orders"):e.request?O("Internal Server Error"):O("Can't Load Orders")}));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),t?Object(m.jsxs)("div",{children:[Object(m.jsxs)("table",{className:"table table-hover",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{scope:"col",children:"Item No"}),Object(m.jsx)("th",{scope:"col",children:"Food Items"}),Object(m.jsx)("th",{scope:"col",children:"QTY"}),Object(m.jsx)("th",{scope:"col",children:"Unit price"}),Object(m.jsx)("th",{scope:"col",children:"Price"})]})}),Object(m.jsx)("tbody",{className:"table-body-fixed-height",children:a.map((function(e,t){return Object(m.jsxs)("tr",{className:"bg-white border pt-5 text-xl",children:[Object(m.jsx)("td",{children:t+1}),Object(m.jsx)("td",{children:e.fname}),Object(m.jsx)("td",{children:e.quantity}),Object(m.jsxs)("td",{children:["$",e.price,".00"]}),Object(m.jsxs)("td",{children:["$",e.price*e.quantity,".00"]})]},t)}))})]}),Object(m.jsxs)("div",{className:"row justify-content-end text-2xl mt-10",children:[Object(m.jsx)("label",{className:"col-2 text-center",children:"Total (10% Discount)"}),Object(m.jsxs)("label",{className:"col-4 text-center",children:["$",c,".00"]})]})]}):null}var Y=function(e){var t=e.userType,c=Object(n.useContext)(K),s=c.openTable,r=c.setOpenTable,a=Object(n.useContext)(H).id,i=Object(n.useState)(!1),l=Object(b.a)(i,2),o=l[0],u=l[1],h=Object(n.useState)(!1),p=Object(b.a)(h,2),O=(p[0],p[1]);function f(){return(f=Object(d.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.put("/order/cashierconfirm/".concat(a),{}).then((function(e){u(!0)})).catch((function(e){e.response?O("Can't complete order"):e.request?O("Internal Server Error"):O("Can't complete order")}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}if(o)window.location.reload();else if(!s)return null;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"text-center text-xl",children:Object(m.jsx)("button",{className:"mr-2 btn btn-success rounded-md bg-green-500 px-4 py-3 text-white",onClick:function(){return r(!1)},children:"Cancel"})}),"manager"!==t?Object(m.jsx)("div",{className:"text-center text-xl",children:Object(m.jsx)("button",{className:"btn btn-warn rounded-md bg-red-500 px-4 py-3 text-white",onClick:function(){!function(){f.apply(this,arguments)}()},children:"Proceed"})}):null]})};var J=function(){var e=Object(n.useState)(0),t=Object(b.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)(0),a=Object(b.a)(r,2),i=a[0],o=a[1],j=Object(n.useState)(!1),d=Object(b.a)(j,2),u=d[0],x=d[1],h=Object(l.g)().userType;return Object(m.jsxs)("div",{className:"w-screen h-screen bg-gray-100 flex relative",children:[Object(m.jsx)(L,{type:"Dashboard"}),Object(m.jsx)(K.Provider,{value:{openTable:u,setOpenTable:x},children:Object(m.jsxs)("div",{className:"box-border  bg-red-100 h-90 w-screen p-12 m-12 rounded-3xl",children:[Object(m.jsx)("div",{className:"font-black pb-3 text-xl",children:"Live Orders"}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col h-32 w-32 rounded-2xl bg-white m-1",children:Object(m.jsx)(_,{reportType:D.BILLD})}),Object(m.jsx)("div",{className:"col h-32 w-32 rounded-2xl bg-white m-1",children:Object(m.jsx)(_,{reportType:D.PENDING})}),Object(m.jsx)("div",{className:"col h-32 w-32 rounded-2xl bg-white m-1",children:Object(m.jsx)(_,{reportType:D.COMPLETED})}),Object(m.jsx)("div",{className:"col h-32 w-32 rounded-2xl bg-white m-1",children:Object(m.jsx)(_,{})})]}),Object(m.jsx)("div",{className:"row justify-content-between mt-12",children:Object(m.jsx)("div",{className:"col-2 font-black pt-3 pb-3 text-xl",children:"Orders"})}),Object(m.jsxs)(H.Provider,{value:{id:c,setId:s},children:[Object(m.jsxs)(R.Provider,{value:{total:i,setTotal:o},children:[Object(m.jsx)("div",{className:"row",children:Object(m.jsx)(V,{})}),Object(m.jsx)("div",{className:"row",children:Object(m.jsx)(W,{})})]}),Object(m.jsx)("div",{className:"justify-content-end mt-6 flex items-center",children:Object(m.jsx)(Y,{userType:h})})]})]})})]})};var Q=function(){return Object(m.jsx)(i.a,{children:Object(m.jsx)("div",{className:"App",children:Object(m.jsxs)(l.d,{children:[Object(m.jsx)(l.b,{exact:!0,path:"/",children:Object(m.jsx)(f,{})}),Object(m.jsx)(l.b,{path:"/customer-safety",children:Object(m.jsx)(p,{})}),Object(m.jsx)(l.b,{path:"/order",children:Object(m.jsx)(F,{})}),Object(m.jsx)(l.b,{path:"/kitchen",children:Object(m.jsx)(G,{})}),Object(m.jsx)(l.b,{path:"/dashboard/:userType",children:Object(m.jsx)(J,{})})]})})})};c(111),c(112),c(113);a.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(Q,{})}),document.getElementById("root"))},40:function(e,t,c){},41:function(e,t,c){},46:function(e,t,c){},48:function(e,t,c){},58:function(e,t,c){},78:function(e,t,c){}},[[114,1,2]]]);
//# sourceMappingURL=main.7f26e20a.chunk.js.map