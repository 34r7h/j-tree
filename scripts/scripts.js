"use strict";angular.module("jtree",["firebase","ngAnimate"]),angular.module("jtree").directive("admin",["Data","Api",function(e,a){return{templateUrl:"scripts/admin/admin-d.html",restrict:"EA",scope:{},controller:["$scope",function(r){r.data=e,r.api=a}]}}]),angular.module("jtree").directive("capture",function(){return{templateUrl:"scripts/capture/capture-d.html",restrict:"EA"}});var sendgrid=sendgrid;angular.module("jtree").factory("Api",["$location","$anchorScroll","$rootScope","$http",function(e,a,r,t){var o={};return o.methods={email:function(e){console.log("TEST",e),t.post("/api/email",e).then(function(e,a){console.log("Sent ok")},function(e,a){console.log("Error")})},scrollTo:function(r){e.hash(r),a()},filterPlans:function(e,a){console.log("filtering plans");var r=[];return angular.forEach(a,function(a,t){e.sms<=a.sms+100&&e.sms>=a.sms-100&&e.data<=a.data+500&&e.data>=a.data-500&&e.calls<=a.calls.max+50&&e.calls>=a.calls.min-50&&r.push(a)}),r}},o.models={capture:{},usage:{},offers:{}},o.style={rangeTrack:function(e){return{background:"linear-gradient(90deg,  rgba(68,102,173,1) 0%, rgba(68,102,173,.9)  "+e+"%, rgba(68,102,173,.8)  "+e+"%, rgba(68,102,173,.6) "+e+"%,rgba(0,0,0,.4) "+e+"%,rgba(0,0,0,.1) 100%)",filter:"progid:DXImageTransform.Microsoft.gradient( startColorstr='rgba(0,0,0,.6)', endColorstr='rgba(0,0,0,.3)',GradientType=1 )"}},forward:function(){o.style.motion.slide="slide-right"},back:function(e){r.ui.show=e},margin:{bottom:{marginBottom:"1em"}},flex:{parent:{width:"auto",display:"flex",flexWrap:"wrap"},child:{flex:"1 1 auto"}},viewLeads:{background:"rgba(0,0,0, .2)",marginBottom:".25em"},viewLeadsItem:{textDecoration:"underline",padding:".1em"}},o}]);var fb=Firebase,ref="https://irthos.firebaseio.com/tyree";angular.module("jtree").factory("Data",["$firebaseObject","$firebaseArray",function(e,a){var r={},t=new fb(ref);return r.data={dataObj:e(t),dataArr:a(t)},r.methods={create:function(e,r){"providers"!==e?r.date=Date.now():null;var t=ref+"/"+e,o=new fb(t);a(o).$loaded().then(function(e){e.$add(r)})},save:function(a,r,t){var o=ref+"/"+a+"/"+r,s=new fb(o),n=e(s);n.$value=t,n.$save()},remove:function(a,r){var t=ref+"/"+a+"/"+r,o=new fb(t),s=e(o);s.$remove()}},r}]),angular.module("jtree").factory("Dummy",function(){var e={providers:["telstra","optus","voda","other"],plans:[{provider:"telstra",name:"telstra1",data:500,sms:50,calls:100},{provider:"telstra",name:"telstra2",data:5e3,sms:1100,calls:"unlimited"},{provider:"optus",name:"optus1",data:1e3,sms:500,calls:100},{provider:"optus",name:"optus2",data:3e3,sms:900,calls:450},{provider:"voda",name:"voda1",data:500,sms:100,calls:150},{provider:"telstra",name:"telstra3",data:2500,sms:1e3,calls:500},{provider:"telstra",name:"telstra4",data:5e3,sms:1100,calls:200},{provider:"optus",name:"optus3",data:1e3,sms:500,calls:100},{provider:"optus",name:"optus4",data:2e3,sms:950,calls:400},{provider:"voda",name:"voda4",data:500,sms:50,calls:50},{provider:"voda",name:"voda2",data:5e3,sms:2e3,calls:550},{provider:"voda",name:"voda3",data:5e3,sms:2e3,calls:550}]};return e}),angular.module("jtree").directive("iphone",["Api","Dummy","Data",function(e,a,r){return{templateUrl:"scripts/iphone/iphone-d.html",restrict:"EA",scope:{},controller:["$scope",function(t){t.api=e,t.dummy=a,t.data=r}]}}]),angular.module("jtree").directive("offers",function(){return{templateUrl:"scripts/offers/offers-d.html",restrict:"EA"}}),angular.module("jtree").directive("usage",function(){return{templateUrl:"scripts/usage/usage-d.html",restrict:"EA"}});