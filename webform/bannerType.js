(function(angular) {
  
  
  function BannerController ($scope, $element, $attrs) {
    var ctrl = this;
    /*ctrl.update = function() {
      ctrl.textarea =  '<center>' + '\n' +
        '\t' + '<a href="' + ctrl.dym.href + '" onclick="if(typeof s != \'undefined\')' + '\n' +
        '\t\t' + '{s.linkTrackEvents=\'\';s.linkTrackVars=\'prop26,eVar50\';' + '\n' +
        '\t\t' + 's.prop26=\'-_--_--_--_--_-' + ctrl.dym.campaignID + '_HT_' + ctrl.dym.customerSeg + '-_-Pers_MNT-_--_-\'+new Date().toISOString()+\'-_-\';' + '\n' +
        '\t\t' + 's.eVar50=\'-_--_--_--_--_-' + ctrl.dym.campaignID + '_HT_' + ctrl.dym.customerSeg + '-_-Pers_MNT-_--_-\'+new Date().toISOString()+\'-_-\';' + '\n' +
        '\t\t' + 's.tl(this,\'o\',\'Target Banner click monetate\');}">' + '\n' +
        '\t\t' + '<img src="' + ctrl.dym.bannerLink + '" onclick="if(typeof s != \'undefined\')' + '\n' +
        '\t\t\t' + '{s.linkTrackEvents=\'\';s.linkTrackVars=\'prop26,eVar50\';' + '\n' +
        '\t\t\t' + 's.prop26=\'-_--_--_--_--_-' + ctrl.dym.campaignID + '_HT_' + ctrl.dym.customerSeg + '-_-Pers_MNT_Imp-_--_-\'+new Date().toISOString()+\'-_-\';' + '\n' +
        '\t\t\t' + 's.eVar50=\'-_--_--_--_--_-' + ctrl.dym.campaignID + '_HT_' + ctrl.dym.customerSeg + '-_-Pers_MNT_Imp-_--_-\'+new Date().toISOString()+\'-_-\';' + '\n' +
        '\t\t\t' + 's.tl(this,\'o\',\'Target Banner click monetate\');}" alt="' + ctrl.dym.alt + '" title="' + ctrl.dym.alt + '"/>' + '\n' +
        '\t' + '</a>' + '\n' +
        '</center>';
    }
    
    ctrl.$doCheck = function() {
      ctrl.update();
    }*/
    ctrl.$onInit = function() {
      //console.log("We're seriously starting this shiw");
      ctrl.type = ctrl.type || "HT";
      ctrl.title = ctrl.title || "Homepage Top Banner";
      ctrl.size = ctrl.size || "970x50";
      ctrl.bg = ctrl.bg || false;
      ctrl.mobile = ctrl.mobile || false;
      ctrl.flyout = ctrl.flyout || false;
      //ctrl.update();
    }
  }
  
  
  
  angular.module('dymApp')
    
    .component('bannerType', {

    templateUrl : 'bannerType.html',
    bindings: {
      type:'@', // Banner type. Ex: HT, UT, PB, BB
      title:'@', // Banner title. Ex: Homepage top, Universal Top, Product Page Box, Bullet
      size:'@', // Banner size. Ex: "970x50", "970x90", "300_250", "374x50"
      bg:'@', // bg='true' if banner requires a background-bg: url() in its styling
      mobile:'@',
      dym:'<'
    },
    controller : BannerController

  });
})(window.angular);


/*


UT

<div id="monetate_selectorHTML_f04c72fc_0" class="monetate_selectorHTML_f04c72fc" style="margin: 10px auto -30px; max-width: 1634px;"><center>
	<a href="//www.newegg.com/DEALS-FOR-TECH-LOVERS/EventSaleStore/ID-1259" target="_blank" style="background: url('//promotions.newegg.com/nepro/19-0223/bg_970x90.jpg') repeat-x; display:block; " onclick="s.linkTrackVars='prop26,eVar50';
	s.prop26='-_--_--_--_--_-DYMX-MKS-19010_UT_STATIC-_-Pers_MNT-_--_-'+new Date().toISOString()+'-_-';
	s.eVar50='-_--_--_--_--_-DYMX-MKS-19010_UT_STATIC-_-Pers_MNT-_--_-'+new Date().toISOString()+'-_-';
	s.tl(this,'o','Target Banner click monetate');">
		<img src="//promotions.newegg.com/nepro/19-0223/970x90.jpg" style="vertical-align: middle" alt="Deals for Tech Lovers" title="Deals for Tech Lovers" onload="s.linkTrackVars='prop26,eVar50';        
        s.prop26='-_--_--_--_--_-DYMX-MKS-19010_UT_STATIC-_-Pers_MNT_Imp-_--_-'+new Date().toISOString()+'-_-';
        s.eVar50='-_--_--_--_--_-DYMX-MKS-19010_UT_STATIC-_-Pers_MNT_Imp-_--_-'+new Date().toISOString()+'-_-';
        s.tl(this,'o','Target Banner impression monetate');"> 
	</a>
</center>    </div>


SHARE


<div id="monetate_selectorHTML_4731c96a_0" class="monetate_selectorHTML_4731c96a" style="border-bottom: 1px solid rgb(217, 217, 217); background: rgb(236, 18, 18);"><center><a href="https://m.newegg.com/eventsalestores/1259/" onclick="if(typeof s != 'undefined') {s.linkTrackEvents=''; s.linkTrackVars='prop26,eVar50';
	s.prop26='-_--_--_--_--_-DYMMX-MKS-19008_FOOT_STATIC-_-Pers_MNT-_--_-'+new Date().toISOString()+'-_-';
	s.eVar50='-_--_--_--_--_-DYMMX-MKS-19008_FOOT_STATIC-_-Pers_MNT-_--_-'+new Date().toISOString()+'-_-';
	s.tl(this,'o','Target Banner click monetate');}" style="display:block; position:relative;"><img alt="Deals for Tech Lovers" onload="if(typeof s != 'undefined') {s.linkTrackEvents=''; s.linkTrackVars='prop26,eVar50';
        s.prop26='-_--_--_--_--_-DYMMX-MKS-19008_FOOT_STATIC-_-Pers_MNT_Imp-_--_-'+new Date().toISOString()+'-_-';
        s.eVar50='-_--_--_--_--_-DYMMX-MKS-19008_FOOT_STATIC-_-Pers_MNT_Imp-_--_-'+new Date().toISOString()+'-_-';
        s.tl(this,'o','Target Banner impression monetate');}" src="//promotions.newegg.com/nepro/19-0223/640x100.jpg" style="max-width: 100%;display: block;margin: auto;" title="Deals for Tech Lovers"> </a></center>
</div>

NV1 Flyout Banner

<div id="monetate_selectorHTML_66c992c7_0" class="monetate_selectorHTML_66c992c7" style="position: relative; text-align: center; bottom: 17px; right: 17px; float: right; z-index: 100; margin-top: -360px;"><center><a href="//www.newegg.com/PCs/EventSaleStore/ID-1837" onclick="if(typeof s != 'undefined'){s.linkTrackEvents='';s.linkTrackVars='prop26,eVar50';
	s.prop26='-_--_--_--_--_-DYMX-FLY-18042_NV1_STATIC-_-Pers_MNT-_--_-'+new Date().toISOString()+'-_-';
	s.eVar50='-_--_--_--_--_-DYMX-FLY-18042_NV1_STATIC-_-Pers_MNT-_--_-'+new Date().toISOString()+'-_-';
	s.tl(this,'o','Target Banner click monetate');}"><img alt="Our Expert Picks" src="//promotions.newegg.com/nepro/18-2309/nav_160x360.jpg" style="vertical-align: middle;" title="Our Expert Picks"> </a></center>
</div>

*/