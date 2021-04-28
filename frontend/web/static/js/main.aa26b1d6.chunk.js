(this.webpackJsonpdev=this.webpackJsonpdev||[]).push([[0],{35:function(e,t,n){},36:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var r=n(1),s=n.n(r),c=n(29),a=n.n(c),o=(n(35),n(4)),i=(n(36),n(9)),l=n(0);var u=function(e){var t=e.loggedInUser;return Object(l.jsxs)("header",{className:"p-2 bg-primary text-white",children:[t?Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{className:"font-l, font-strong",children:"Welcome to WeReserve!"}),Object(l.jsx)(i.b,{to:"/",children:Object(l.jsx)("button",{className:"m-r-4 b-rounded-2 b-1 b-white bg-transparent text-white hover:bg-white hover:text-black",children:"Home"})}),Object(l.jsx)(i.b,{to:"/calendar",children:Object(l.jsx)("button",{className:"b-rounded-2 b-1 b-white bg-transparent text-white hover:bg-white hover:text-black",children:"Calendar"})}),Object(l.jsx)(i.b,{to:"/profile",children:Object(l.jsx)("button",{className:"b-rounded-2 b-1 b-white bg-transparent text-white hover:bg-white hover:text-black m-l-4",children:"My Profile"})}),"faculty"===t.user_type?Object(l.jsx)(i.b,{to:"/users",children:Object(l.jsx)("button",{className:"b-rounded-2 b-1 b-white bg-transparent text-white hover:bg-white hover:text-black m-l-4",children:"Manage Users"})}):null]}):Object(l.jsx)(i.b,{to:"/login",children:Object(l.jsx)("button",{className:"b-rounded-2 b-1 b-white bg-transparent text-white hover:bg-white hover:text-black",children:"Login"})}),Object(l.jsx)("div",{})]})},b=n(10),j=n.n(b),d=n(14),h=n(19),m=n.n(h);m.a.defaults.withCredentials=!0;var p=m.a.create({baseURL:"https://we-reserve.herokuapp.com/api.v1",headers:{}});p.interceptors.request.use((function(e){return sessionStorage.token&&(e.headers.Authorization="Bearer ".concat(sessionStorage.token.replace('"',""))),e}));var x=p,O=n(2);var f=function(e){var t=Object(O.f)(),n=Object(r.useState)(""),s=Object(o.a)(n,2),c=s[0],a=s[1],i=Object(r.useState)(""),u=Object(o.a)(i,2),b=u[0],h=u[1],m=function(){var n=Object(d.a)(j.a.mark((function n(r){var s,a;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r.preventDefault(),n.prev=1,n.next=4,x.post("/login",{email:c,password:b});case 4:s=n.sent,a=s.data,sessionStorage.setItem("user",JSON.stringify(a.user)),sessionStorage.setItem("token",a.token),e.updateSession(),t.push("/"),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(1),alert("wrong credentials");case 15:case"end":return n.stop()}}),n,null,[[1,12]])})));return function(e){return n.apply(this,arguments)}}();return Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{children:"Welcome To WeReserve!"}),Object(l.jsx)("p",{children:"The only app made to reserve rooms in Weir Hall at Ole Miss!"}),Object(l.jsx)("p",{className:"font-strong",children:"Please sign in using your Ole Miss email!"}),Object(l.jsxs)("form",{onSubmit:m,children:[Object(l.jsx)("input",{type:"email",value:c,onChange:function(e){return a(e.target.value)},required:!0,placeholder:"email"}),Object(l.jsx)("input",{type:"password",value:b,onChange:function(e){return h(e.target.value)},required:!0,placeholder:"password"}),Object(l.jsx)("button",{type:"submit",children:"login"})]}),Object(l.jsx)("p",{className:"font-sm",children:"This application is only available to Ole Miss Graduate students and Faculty in Computer Science"})]})};var v=function(e){var t=e.rooms,n=e.onSelected;return Object(l.jsxs)("select",{onChange:function(e){return n(e.target.value)},defaultValue:0,children:[Object(l.jsx)("option",{value:0,disabled:!0,children:"choose room"}),t.map((function(e){return Object(l.jsx)("option",{value:e.id,children:e.name},e.id)}))]})},g=n(12),w=function(e){e.time;var t=e.onBooking,n=e.close,s=Object(r.useState)(""),c=Object(o.a)(s,2),a=c[0],i=c[1];return Object(l.jsx)("div",{className:"overlay",children:Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(a)},className:"w-50p bg-white p-3 m-x-auto m-t-5 position-relative",children:[Object(l.jsx)("button",{className:"position-absolute bg-red b-rounded-2 text-white b-1",style:{right:5},type:"button",onClick:n,children:"x"}),Object(l.jsx)("p",{children:"Please write your reason"}),Object(l.jsx)("input",{type:"text",value:a,onChange:function(e){return i(e.target.value)}}),Object(l.jsx)("button",{type:"submit",children:"enter"})]})})};var y=function(e){var t=Object(r.useState)([]),n=Object(o.a)(t,2),s=n[0],c=n[1],a=Object(r.useState)([]),i=Object(o.a)(a,2),u=i[0],b=i[1],h=Object(r.useState)([]),m=Object(o.a)(h,2),p=m[0],O=m[1],f=Object(r.useState)(!1),y=Object(o.a)(f,2),N=y[0],S=y[1],k=Object(r.useState)(null),C=Object(o.a)(k,2),M=C[0],D=C[1],T=function(e){return g(e).format("YYYY-MM-DD")};Object(r.useEffect)((function(){(function(){var e=Object(d.a)(j.a.mark((function e(){var t,n,r,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new Date,n=[],e.prev=2,e.next=5,x.get("/room");case 5:r=e.sent,c(r.data),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.log("you are not logged in");case 12:for(s=0;s<31;s++)n.push(new Date(t.getTime()+864e5*s));O(n);case 14:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var H=function(e){for(var t=u.filter((function(t){return t.booking_day===T(e)})),n=[],r=function(r){var s=g("".concat(T(e)," ").concat(r,":00:00"));n.push({time:s,appointments:t.filter((function(e){return e.booking_time===s.format("HH:mm:ss")}))})},s=8;s<21;s++)r(s);return console.log(n),n.map((function(e,t){return Object(l.jsxs)("div",{className:"p-1 m-y-1 b-primary-lg b-1 calendar-item",children:[Object(l.jsx)("div",{className:"text-black-70 font-md",children:e.time.format("hh:mm a")}),e.appointments.length>0?Object(l.jsxs)("div",{className:"bg-blue p-1 text-white font-strong",children:[Object(l.jsx)("p",{children:e.appointments[0].reason}),Object(l.jsx)("p",{className:"font-sm m-y-1",children:e.appointments[0].email.replace(/@[a-z\.]+/,"")})]}):Object(l.jsx)("button",{onClick:function(){return t=e.time,void S({time:t});var t},className:"button text-red font-strong b-blue hover:bg-blue hover:text-red",children:"BOOK ROOM"})]},t)}))},W=function(){var e=Object(d.a)(j.a.mark((function e(t){var n,r,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return D(t),n=new Date,console.log(n),r=T(n),console.log(r),e.prev=5,e.next=8,x.get("/schedule/"+r+"/"+t);case 8:s=e.sent,b(s.data),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(5),console.log("you are not logged in");case 15:case"end":return e.stop()}}),e,null,[[5,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsxs)("div",{className:"w-100p",children:[Object(l.jsx)(v,{rooms:s,onSelected:W}),M&&Object(l.jsx)("div",{className:"d-flex w-100p",children:p.map((function(e){return Object(l.jsxs)("div",{style:{minWidth:160},className:"m-1 b-1 b-primary f-1",children:[Object(l.jsxs)("div",{style:{height:45},className:"font-strong text-white bg-blue",children:[g(e).format("dddd")," ",Object(l.jsx)("br",{}),g(e).format("MM/DD")]}),Object(l.jsx)("hr",{}),Object(l.jsx)("div",{children:H(e)})]},e.getTime())}))}),N&&Object(l.jsx)(w,{time:N,onBooking:function(e){x.post("/schedule",{room_id:M,booking_day:g(N.time).format("YYYY-MM-DD"),booking_time:g(N.time).format("HH:mm:ss"),reason:e}).then((function(e){S(!1),W(M)}))},close:function(){S(!1)}})]})},N=n.p+"static/media/weirfall.ba9cec1b.jpg";var S=function(){return Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:"grid-3-6-3",children:[Object(l.jsx)("span",{}),Object(l.jsx)("img",{src:N,alt:"",className:"w-100p"})]}),Object(l.jsx)("p",{className:"text-blue font-strong",children:"Home"}),Object(l.jsx)("p",{className:"text-blue",children:"Welcome To WeReserve!"}),Object(l.jsx)("p",{className:"text-babyblue",children:"The only app made to reserve rooms in Weir Hall at Ole Miss!"})]})};var k=function(e){var t=e.user,n=Object(r.useState)(""),s=Object(o.a)(n,2),c=s[0],a=s[1];return Object(l.jsxs)("div",{className:"container m-t-5",children:[Object(l.jsx)("h2",{children:t.email}),Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),x.put("/login",{password:c}).then((function(e){alert("password updated")}))},className:"grid-6-6",children:[Object(l.jsx)("input",{type:"password",value:c,onChange:function(e){return a(e.target.value)},className:"w-100p"}),Object(l.jsx)("div",{className:"place-x-center",children:Object(l.jsx)("button",{className:"button",type:"submit",children:"update password"})})]})]})};var C=function(){var e=Object(r.useState)([]),t=Object(o.a)(e,2),n=t[0],s=t[1];function c(){x.get("/users").then((function(e){return s(e.data)}))}return Object(r.useEffect)((function(){c()}),[]),Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:"Users"}),Object(l.jsxs)("section",{className:"grid-9-3 w-100p font-strong",children:[Object(l.jsx)("div",{className:"font-strong p-1 text-red",children:"Email"}),Object(l.jsx)("div",{className:"text-red",children:"Remove User"})]}),n.map((function(e){return Object(l.jsxs)("section",{className:"grid-9-3",children:[Object(l.jsx)("div",{children:e.email}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{onClick:function(t){return n=e.id,void(window.confirm("Are you sure you want to delete user?")&&x.delete("/users/"+n).then(c));var n},children:"delete"})})]},e.id)}))]})};var M=function(e){var t=Object(r.useState)(!1),n=Object(o.a)(t,2),s=n[0],c=n[1];return Object(l.jsx)(i.a,{children:Object(l.jsxs)("div",{className:"d-flex main-container",children:[Object(l.jsx)(u,{loggedInUser:s}),Object(l.jsx)("section",{className:"f-1 container o-y-auto w-100p font-md",children:Object(l.jsxs)(O.c,{children:[Object(l.jsx)(O.a,{exact:!0,path:"/",component:S}),Object(l.jsx)(O.a,{exact:!0,path:"/calendar",component:y}),Object(l.jsx)(O.a,{exact:!0,path:"/profile",children:Object(l.jsx)(k,{user:s})}),Object(l.jsx)(O.a,{path:"/login",children:Object(l.jsx)(f,{updateSession:function(){var e=!1;sessionStorage.user&&(e=JSON.parse(sessionStorage.user)),c(e)}})}),Object(l.jsx)(O.a,{exact:!0,path:"/users",component:C})]})}),Object(l.jsx)("p",{className:"font-strong",children:"Hotty Toddy!"}),Object(l.jsx)("footer",{className:"p-2 bg-gray",children:"Booking available for Graduate Computer Science Students and Computer Science Faculty"})]})})},D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,63)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),r(e),s(e),c(e),a(e)}))};a.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(M,{})}),document.getElementById("root")),D()}},[[62,1,2]]]);
//# sourceMappingURL=main.aa26b1d6.chunk.js.map