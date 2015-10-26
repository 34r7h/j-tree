"use strict";angular.module("jtree",["firebase","ngAnimate"]),angular.module("jtree").directive("admin",["Data","Api",function(a,e){return{templateUrl:"scripts/admin/admin-d.html",restrict:"EA",scope:{},controller:["$scope",function(t){t.data=a,t.api=e}]}}]),angular.module("jtree").directive("capture",function(){return{templateUrl:"scripts/capture/capture-d.html",restrict:"EA"}});var sendgrid=sendgrid;angular.module("jtree").factory("Api",["$location","$anchorScroll","$rootScope","$http","Data",function(a,e,t,r,n){var o={};return o.methods={email:function(a){var e="",t="";angular.forEach(n.data.dataObj.texts,function(a){"email"===a.type?e=a.text:null,"emailSubject"===a.type?t=a.text:null});var o=e+"\r\n";angular.forEach(a.text,function(a){console.log("email",a),angular.forEach(a,function(a,e){o="calls"===e?o+"\n"+e+": "+a.min+" - "+a.max:o+"\n"+e+": "+a+" "}),o+=" \r\n"}),a.text=o,a.subject=t,r.post("/api/email",a).then(function(a,e){console.log("Sent ok")},function(a,e){console.log("Error")})},emailSales:function(a){var e="",t="";angular.forEach(n.data.dataObj.texts,function(a){"email"===a.type?e=a.text:null,"emailSubject"===a.type?t=a.text:null});var o=e+"\r\n";angular.forEach(a.text,function(a){console.log("emailSales",a),angular.forEach(a,function(a,e){o="calls"===e?o+"\n"+e+": "+a.min+" - "+a.max:o+"\n"+e+": "+a+" "}),o+=" \r\n"}),a.text=o,a.subject=t,r.post("/api/emailSales",a).then(function(a,e){console.log("Sent ok")},function(a,e){console.log("Error")})},scrollTo:function(t){a.hash(t),e()},filterPlans:function(a,e){var t=[];return angular.forEach(e,function(e,r){a.sms<=e.sms+100&&a.sms>=e.sms-100&&a.data<=e.data+500&&a.data>=e.data-500&&a.calls<=e.calls.max+50&&a.calls>=e.calls.min-50&&t.push(e)}),t}},o.models={capture:{},usage:{},offers:{}},o.style={rangeTrack:function(a){return{background:"linear-gradient(90deg,  rgba(68,102,173,1) 0%, rgba(68,102,173,.9)  "+a+"%, rgba(68,102,173,.8)  "+a+"%, rgba(68,102,173,.6) "+a+"%,rgba(0,0,0,.4) "+a+"%,rgba(0,0,0,.1) 100%)",filter:"progid:DXImageTransform.Microsoft.gradient( startColorstr='rgba(0,0,0,.6)', endColorstr='rgba(0,0,0,.3)',GradientType=1 )"}},forward:function(){o.style.motion.slide="slide-right"},back:function(a){t.ui.show=a},margin:{bottom:{marginBottom:"1em"}},flex:{parent:{width:"auto",display:"flex",flexWrap:"wrap"},child:{flex:"1 1 auto"}},viewLeads:{background:"rgba(0,0,0, .2)",marginBottom:".25em"},viewLeadsItem:{textDecoration:"underline",padding:".1em"}},o}]);var fb=Firebase,ref="https://irthos.firebaseio.com/tyree";angular.module("jtree").factory("Data",["$firebaseObject","$firebaseArray",function(a,e){var t={},r=new fb(ref);return t.data={dataObj:a(r),dataArr:e(r)},t.methods={create:function(a,t){"providers"!==a?t.date=Date.now():null;var r=ref+"/"+a,n=new fb(r);e(n).$loaded().then(function(a){a.$add(t)})},save:function(e,t,r){var n=ref+"/"+e+"/"+t,o=new fb(n),l=a(o);l.$value=r,l.$save()},remove:function(e,t){var r=ref+"/"+e+"/"+t,n=new fb(r),o=a(n);o.$remove()}},t}]),angular.module("jtree").factory("Dummy",function(){var a={providers:["telstra","optus","voda","other"],plans:[{provider:"telstra",name:"telstra1",data:500,sms:50,calls:100},{provider:"telstra",name:"telstra2",data:5e3,sms:1100,calls:"unlimited"},{provider:"optus",name:"optus1",data:1e3,sms:500,calls:100},{provider:"optus",name:"optus2",data:3e3,sms:900,calls:450},{provider:"voda",name:"voda1",data:500,sms:100,calls:150},{provider:"telstra",name:"telstra3",data:2500,sms:1e3,calls:500},{provider:"telstra",name:"telstra4",data:5e3,sms:1100,calls:200},{provider:"optus",name:"optus3",data:1e3,sms:500,calls:100},{provider:"optus",name:"optus4",data:2e3,sms:950,calls:400},{provider:"voda",name:"voda4",data:500,sms:50,calls:50},{provider:"voda",name:"voda2",data:5e3,sms:2e3,calls:550},{provider:"voda",name:"voda3",data:5e3,sms:2e3,calls:550}]};return a}),angular.module("jtree").directive("iphone",["Api","Dummy","Data",function(a,e,t){return{templateUrl:"scripts/iphone/iphone-d.html",restrict:"EA",scope:{},controller:["$scope",function(r){r.api=a,r.dummy=e,r.data=t}]}}]),angular.module("jtree").directive("offers",function(){return{templateUrl:"scripts/offers/offers-d.html",restrict:"EA"}}),angular.module("jtree").directive("usage",function(){return{templateUrl:"scripts/usage/usage-d.html",restrict:"EA"}});