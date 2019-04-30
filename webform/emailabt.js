(function(angular) {
  
  
  function EmailController ($scope, $element, $attrs) {
    var ctrl = this;

    ctrl.$onInit = function() {
      //console.log("We're seriously starting this shiw");
      ctrl.type = ctrl.type || "normal";
      
    }
  }
  
  angular.module('dymApp')
    
    .component('emailabt', {

    templateUrl : 'emailabt.html',
    bindings: {
      type:'@', // Banner type. Ex: HT, UT, PB, BB
      email:'<'
    },
    controller : EmailController

  });
})(window.angular);