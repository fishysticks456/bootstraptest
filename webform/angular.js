// Angular.js for angular.html

angular.module('dymApp', [])
.filter('resize', function() {
    return function(banner,size) {
      //console.log(size);
      return banner.replace(/\d\d?\d?x\d\d?\d?/,size)
    };
  })
.controller('DYMController', function() {
  var dym = this;

  // Set default values
  dym.campaignID = "DYM-MKS-19000";
  dym.href = "http://localhost/webdev/amp/index.html";
  dym.bannerLink = "https://dummyimage.com/970x50/f00/fff";
  dym.alt = "Alt text for banners";
  dym.customerSeg = "STATIC";
  
  
});
