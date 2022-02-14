(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[547],{5081:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user/form",function(){return a(2649)}])},7562:function(e,s,a){"use strict";var r=a(9669),t=a.n(r),n=a(6737),l=a.n(n),c="https://fakestoreapi.com";s.Z={actions:{get_user:function(e,s){var a={limit:e,sort:s||"asc"};return new Promise((function(e,s){try{t().get(c+"/users",{params:a}).then((function(s){e(s)}))}catch(r){s(r)}}))},get_total_user:function(){return new Promise((function(e,s){try{t().get(c+"/users").then((function(s){e(s)}))}catch(a){s(a)}}))},submit_user:function(e){var s=this;return new Promise((function(a,r){try{var n=s;t().post(c+"/users",e).then((function(e){200===e.status?(a(e.data),n.handling("Done","user submited","success")):a("submit data is error")}))}catch(l){r(l),s.handling("Oops","check network or data submition","error")}}))},edit_user:function(e,s){var a=this;return new Promise((function(r,n){try{var l=a;t().put(c+"/users/"+e,s).then((function(e){200===e.status?(r(e.data),l.handling("Done","user edited","success"),window.location.href="/user"):r("update data error")}))}catch(i){n(i),a.handling("Oops","check network or data submition","error")}}))},get_detail_user:function(e){return new Promise((function(s,a){try{t().get(c+"/users/"+e).then((function(e){s(e)}))}catch(r){a(r)}}))},delete_user:function(e){var s=this;return new Promise((function(a,r){try{var n=s;t().delete(c+"/users/"+e).then((function(e){200===e.status?(a(e.data),n.handling("Success","data has been deleted","success")):(a("error access"),n.handling("Oops","something wrong","error"))}))}catch(l){r(l)}}))},handling:function(e,s,a){l()({title:e,text:s,icon:a,timer:2e3,button:!1})}}}},4016:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return l}});var r=a(5893),t=a(5697),n=a.n(t);function l(e){var s=e.children,a=e.bgcolor,t={backgroundColor:a||"#FFF",border:"none",borderRadius:"10px",padding:"30px",margin:"20px 0"};return(0,r.jsx)("div",{className:"card",style:t,children:s})}l.propTypes={children:n().oneOfType([n().arrayOf(n().node),n().node,n().string]),bgcolor:n().string}},2649:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return c}});var r=a(5893),t=a(7294),n=a(7562),l=a(4016);function c(){(0,t.useEffect)((function(){}),[]);return(0,r.jsxs)("form",{onSubmit:function(e){e.preventDefault();var s={email:e.target.email.value,name:{firstname:e.target.firstname.value,lastname:e.target.lastname.value},username:e.target.username.value,password:e.target.password.value,address:{city:e.target.city.value,street:e.target.street.value,number:e.target.number.value,zipcode:e.target.zipcode.value,geolocation:{lat:e.target.lat.value,long:e.target.long.value}},phone:e.target.phone.value};n.Z.actions.submit_user(s)},children:[(0,r.jsxs)(l.default,{children:[(0,r.jsx)("h3",{children:"Detail User"}),(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-md-6 my-2",children:(0,r.jsxs)("div",{className:"form-groupd",children:[(0,r.jsx)("label",{className:"form-label",children:"First Name"}),(0,r.jsx)("input",{type:"text",name:"firstname",className:"form-control"})]})}),(0,r.jsx)("div",{className:"col-md-6 my-2",children:(0,r.jsxs)("div",{className:"form-groupd",children:[(0,r.jsx)("label",{className:"form-label",children:"Last Name"}),(0,r.jsx)("input",{type:"text",name:"lastname",className:"form-control"})]})}),(0,r.jsx)("div",{className:"col-md-6 my-2",children:(0,r.jsxs)("div",{className:"form-groupd",children:[(0,r.jsx)("label",{className:"form-label",children:"Email"}),(0,r.jsx)("input",{type:"email",name:"email",className:"form-control"})]})}),(0,r.jsx)("div",{className:"col-md-6 my-2",children:(0,r.jsxs)("div",{className:"form-groupd",children:[(0,r.jsx)("label",{className:"form-label",children:"Username"}),(0,r.jsx)("input",{type:"text",name:"username",className:"form-control"})]})}),(0,r.jsx)("div",{className:"col-md-6 my-2",children:(0,r.jsxs)("div",{className:"form-groupd",children:[(0,r.jsx)("label",{className:"form-label",children:"Password"}),(0,r.jsx)("input",{type:"text",name:"password",className:"form-control"})]})}),(0,r.jsx)("div",{className:"col-md-6 my-2",children:(0,r.jsxs)("div",{className:"form-groupd",children:[(0,r.jsx)("label",{className:"form-label",children:"Phone"}),(0,r.jsx)("input",{type:"text",name:"phone",className:"form-control"})]})})]})]}),(0,r.jsxs)(l.default,{children:[(0,r.jsx)("h3",{children:"Address"}),(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-md-6 my-2",children:(0,r.jsxs)("div",{className:"form-groupd",children:[(0,r.jsx)("label",{className:"form-label",children:"City"}),(0,r.jsx)("input",{type:"text",name:"city",className:"form-control"})]})}),(0,r.jsx)("div",{className:"col-md-6 my-2",children:(0,r.jsxs)("div",{className:"form-groupd",children:[(0,r.jsx)("label",{className:"form-label",children:"Street"}),(0,r.jsx)("input",{type:"text",name:"street",className:"form-control"})]})}),(0,r.jsx)("div",{className:"col-md-2 my-2",children:(0,r.jsxs)("div",{className:"form-groupd",children:[(0,r.jsx)("label",{className:"form-label",children:"Number"}),(0,r.jsx)("input",{type:"text",name:"number",className:"form-control"})]})}),(0,r.jsx)("div",{className:"col-md-4 my-2",children:(0,r.jsxs)("div",{className:"form-groupd",children:[(0,r.jsx)("label",{className:"form-label",children:"Zipcode"}),(0,r.jsx)("input",{type:"text",name:"zipcode",className:"form-control"})]})}),(0,r.jsx)("div",{className:"col-md-3 my-2",children:(0,r.jsxs)("div",{className:"form-groupd",children:[(0,r.jsx)("label",{className:"form-label",children:"Latitude"}),(0,r.jsx)("input",{type:"text",name:"lat",className:"form-control"})]})}),(0,r.jsx)("div",{className:"col-md-3 my-2",children:(0,r.jsxs)("div",{className:"form-groupd",children:[(0,r.jsx)("label",{className:"form-label",children:"Latitude"}),(0,r.jsx)("input",{type:"text",name:"long",className:"form-control"})]})})]})]}),(0,r.jsx)(l.default,{children:(0,r.jsxs)("div",{className:"row justify-content-end",children:[(0,r.jsx)("div",{className:"col-md-6 my-2 py-2",children:(0,r.jsxs)("div",{className:"form-check",children:[(0,r.jsx)("input",{className:"form-check-input",type:"checkbox",value:"",id:"confirm"}),(0,r.jsx)("label",{className:"form-check-label",htmlFor:"confirm",children:"Confirm data submitions is valid"})]})}),(0,r.jsx)("div",{className:"col-md-3 my-2",children:(0,r.jsx)("button",{className:"btn btn-secondary w-100",type:"button",children:"Cancel"})}),(0,r.jsx)("div",{className:"col-md-3 my-2",children:(0,r.jsx)("button",{className:"btn btn-primary w-100",type:"submit",children:"Save"})})]})})]})}}},function(e){e.O(0,[609,774,888,179],(function(){return s=5081,e(e.s=s);var s}));var s=e.O();_N_E=s}]);