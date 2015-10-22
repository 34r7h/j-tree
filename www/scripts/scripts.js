"use strict";angular.module("jtree",["firebase","ngAnimate"]),angular.module("jtree").directive("admin",["Data","Api",function(e,r){return{templateUrl:"scripts/admin/admin-d.html",restrict:"EA",scope:{},controller:["$scope",function(a){a.data=e,a.api=r}]}}]),angular.module("jtree").directive("capture",function(){return{templateUrl:"scripts/capture/capture-d.html",restrict:"EA"}}),angular.module("jtree").factory("Api",["$location","$anchorScroll","$rootScope",function(e,r,a){var t={};return t.methods={scrollTo:function(a){e.hash(a),r()}},t.models={capture:{},usage:{},offers:{}},t.style={rangeTrack:function(e){return{background:"linear-gradient(90deg,  rgba(0,0,0,.6) 0%,rgba(0,0,0,.5) "+e+"%,rgba(0,0,0,.4) "+e+"%,rgba(0,0,0,.2) "+e+"%,rgba(0,0,0,.4) "+e+"%,rgba(0,0,0,.1) 100%)",filter:"progid:DXImageTransform.Microsoft.gradient( startColorstr='rgba(0,0,0,.6)', endColorstr='rgba(0,0,0,.3)',GradientType=1 )"}},forward:function(){t.style.motion.slide="slide-right"},back:function(e){a.ui.show=e},margin:{bottom:{marginBottom:"1em"}},flex:{parent:{width:"auto",display:"flex",flexWrap:"wrap"},child:{flex:"1 1 auto"}},viewLeads:{background:"rgba(0,0,0, .2)",marginBottom:".25em"},viewLeadsItem:{textDecoration:"underline",padding:".1em"}},t}]);var fb=Firebase,ref="https://irthos.firebaseio.com/tyree";angular.module("jtree").factory("Data",["$firebaseObject","$firebaseArray",function(e,r){var a={},t=new fb(ref);return a.data={dataObj:e(t),dataArr:r(t)},a.methods={create:function(e,a){"providers"!==e?a.date=Date.now():null;var t=ref+"/"+e,o=new fb(t);r(o).$loaded().then(function(e){e.$add(a)})},save:function(r,a,t){var o=ref+"/"+r+"/"+a,s=new fb(o),n=e(s);n.$value=t,n.$save()},remove:function(r,a){var t=ref+"/"+r+"/"+a,o=new fb(t),s=e(o);s.$remove()}},a}]),angular.module("jtree").factory("Dummy",function(){var e={providers:["telstra","optus","voda","other"],plans:[{provider:"telstra",name:"telstra1",data:500,sms:50,calls:100},{provider:"telstra",name:"telstra2",data:5e3,sms:1100,calls:"unlimited"},{provider:"optus",name:"optus1",data:1e3,sms:500,calls:100},{provider:"optus",name:"optus2",data:3e3,sms:900,calls:450},{provider:"voda",name:"voda1",data:500,sms:100,calls:150},{provider:"telstra",name:"telstra3",data:2500,sms:1e3,calls:500},{provider:"telstra",name:"telstra4",data:5e3,sms:1100,calls:200},{provider:"optus",name:"optus3",data:1e3,sms:500,calls:100},{provider:"optus",name:"optus4",data:2e3,sms:950,calls:400},{provider:"voda",name:"voda4",data:500,sms:50,calls:50},{provider:"voda",name:"voda2",data:5e3,sms:2e3,calls:550},{provider:"voda",name:"voda3",data:5e3,sms:2e3,calls:550}]};return e}),angular.module("jtree").directive("iphone",["Api","Dummy","Data",function(e,r,a){return{templateUrl:"scripts/iphone/iphone-d.html",restrict:"EA",scope:{},controller:["$scope",function(t){t.api=e,t.dummy=r,t.data=a}]}}]),angular.module("jtree").directive("offers",function(){return{templateUrl:"scripts/offers/offers-d.html",restrict:"EA"}}),angular.module("jtree").directive("usage",function(){return{templateUrl:"scripts/usage/usage-d.html",restrict:"EA"}});