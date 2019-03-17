// Angular.js for angular.html

angular.module('dymApp', [])
.filter('resize', function() {
    return function(banner,size) {
      //console.log(size);
      var newbanner;
      if( size == "160_360" || size == "160_600") {
        newbanner = banner.replace(/\d\d?\d?\d?x\d\d?\d?\d?/, "Flyout_" + size);
      } else if ( size === "") {
        newbanner = banner;
      } else {
        newbanner = banner.replace(/\d\d?\d?\d?x\d\d?\d?\d?/,size);
      }
      return newbanner;
    };
  })
.filter('dollars', function() {
    return function(price) {
      return Math.floor(price);
    };
  })
.filter('cents', function() {
    return function(price) {
      var cents = Math.round(price % 1.0 * 100);
      return cents < 10 ? "0" + cents : cents;
    };
  })
.filter('twodecimals', function() {
    return function(price) {
      return price.toFixed(2);
    };
  })
.filter('rounded', function() {
    return function(price) {
      return Math.round(price);
    };
  })
.filter('scrubbed', function() {
    return function(title) {
      return title.replace(/"/,"&#x22;");
    };
  })
.filter('stringify', function() {
  return function(obj) {
    return typeof obj.length != 'undefined' ? JSON.stringify({obj}) : JSON.stringify(obj);
  };
})
.filter('alphabetized', function() {
  return function(text) {
    var n = parseInt(text);
    return  (n < 27 ?
            String.fromCharCode(n + 64) :
            String.fromCharCode(Math.floor((n-26) / 27) + 65) + String.fromCharCode(((n-1) % 26) + 65));
  };
})
.filter('index', function() {
  return function(flyoutnav) {
    return parseInt(flyoutnav.split("NV")[1]) - 1;
  };
})

.controller('DYMController', function() {
  var dym = this;
  var now = new Date();

  // Set default values
  dym.banner = {
    campaignID : "DYM-MKS-19000",
    href : "https://www.newegg.com",
    bannerLink : "https://dummyimage.com/970x50/f00/fff",
    alt : "Alt text for banners",
    customerSeg : "STATIC",
    flyoutnav : "NV1",
    settings : {
      precode : false,
      preview : true,
      isFlyout : true
    }
  };

  dym.email = {
    campaignID : "DYMX-ABT-17011",
    date : (now.getDate() < 10 ? "0" + (now.getDate()) : now.getDate()) + (now.getMonth() < 9 ? "0" + (now.getMonth()+1) : now.getMonth()+1) + now.getFullYear(),
    sku : "20-147-674",
    producttitle : "SAMSUNG 860 EVO Series 2.5\" 500GB SATA III V-NAND 3-Bit MLC Internal SSD",
    productimg : "https://c1.neweggimages.com/NeweggImage/ProductImageCompressAll300/20-147-674-V01.jpg",
    promotext : "Extra savings with promocode",
    fullprice : 100.00,
    saleprice : 80.00,
    isCategory : false,
    freeShipping : true,
    showDiscount : true,
    count : 260
    
  };
  /*dym.flyout = {
    size : "",
    nav : "NV1"
  };*/
  
  dym.copy = {
    banner : {},
    email : {}
  };
  
  
  
  // Store data in localStorage
  dym.save = function() {
    for( var m in dym.banner ) {dym.copy.banner[m] = dym.banner[m];}
    for( m in dym.email ) {dym.copy.email[m] = dym.email[m];}
    localStorage.setItem("dym", JSON.stringify(dym.copy));
    
    alertUser("Saved dym session data to local storage");
  };
  dym.load = function() {
    var now = new Date();
    
    dym.copy = JSON.parse(localStorage.getItem("dym"));
    for( var m in dym.banner ) {dym.banner[m] = dym.copy.banner[m];}
    for( m in dym.email ) {dym.email[m] = dym.copy.email[m];}
    // Refresh date, no need to make it get yesterday's date.
    dym.email.date = (now.getDate() < 10 ? "0" + (now.getDate()) : now.getDate()) + (now.getMonth() < 9 ? "0" + (now.getMonth()+1) : now.getMonth()+1) + now.getFullYear();
    console.log("Loaded old session data from local storage");
  };
  
  dym.$onInit = function() {
    if(localStorage.hasOwnProperty("dym")) dym.load();
  };
  
  
  
  
});

// TO do
// Fix flyout filters and buttons and <banner-type>