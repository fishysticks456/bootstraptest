// Form

class BannerPreview extends React.Component {
  constructor(props) {
    super(props);
  }

  adobeClick(campaignID, pos, seg, e) {
    e.preventDefault();
    console.log("Adobe click on banner " + campaignID + "_" + pos + "_" + seg);
  };

  formatImg(url, replacement) {
    return url.replace(/\d\d\d(x|_)\d\d\d?/g, replacement);
  }

  render () {
    return (
      <div className={"form-output banner-"+this.props.pos}>
        <h4>{this.props.posTitle} ({this.props.pos.toUpperCase()})</h4>
        <pre className="text-area">
          &#x3C;center&#x3E; <br/>
            &#x3C;a href=&#x22;<var>{this.props.banner.href}</var>&#x22;&#x3E; <br/>
              &#x3C;img src=&#x22;<var>{this.formatImg(this.props.banner.bannerLink, this.props.imgDimensions)}</var>&#x22; alt=&#x22;<var>{this.props.banner.alt}</var>&#x22; title=&#x22;<var>{this.props.banner.alt}</var>&#x22;/&#x3E; <br/>
            &#x3C;/a&#x3E; <br/>
          &#x3C;/center&#x3E;
        </pre>
        <div className="banner-preview">
          <center>
          <a href={this.props.banner.href} onClick={(e) => this.adobeClick(this.props.banner.campaignID, this.props.pos, this.props.banner.seg, e)}>
            <img src={this.formatImg(this.props.banner.bannerLink, this.props.imgDimensions)} alt={this.props.banner.alt} title={this.props.banner.alt} /><br/>
            {this.props.banner.campaignID}_{this.props.pos.toUpperCase()}_{this.props.banner.seg}
          </a>
          </center>
        </div> 
      </div>
    )
  }
}

class Webform extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      campaignID : '',
      campaignName : '',
      seg : 'STATIC',
      href : 'http://localhost/webdev/amp/index.html',
      bannerLink : 'https://dummyimage.com/970x50/f00/fff',
      alt : 'alt text for <img>'
    };

    this.handleInputChange = this.handleInputChange.bind(this);

  }  

  handleInputChange(event) {
    const target = event.target;
    const value = (target.name == "campaignID" || target.name == "seg") ? target.value.toUpperCase() : target.value;
    const name = target.name;
    this.setState({
      [name] : value
    });

  }
  render() {
    return (
      <form name="DYMForm">
        <label>*Campaign ID : <input name="campaignID" type="text" value={this.state.value} onChange={this.handleInputChange} className="uppercase"/></label>
        <br/>
        <label>*Campaign Name : <input name="campaignName" type="text" value={this.state.value} onChange={this.handleInputChange} /></label>
        <br/>
        <label>Customer Segment : <input name="seg" type="text" value={this.state.value} placeholder={this.state.seg} onChange={this.handleInputChange} className="uppercase"/></label>
        <br/>
        <label>*Banner Href : <input name="href" type="text" value={this.state.value} placeholder={this.state.href} onChange={this.handleInputChange} /></label>
        <br/>
        <label>*Banner Img : <input name="bannerLink" type="text" value={this.state.value} placeholder={this.state.bannerLink} onChange={this.handleInputChange} /></label>
        <br/>
        <label>Banner Alt & Title : <input name="alt" type="text" value={this.state.value} placeholder={this.state.alt} onChange={this.handleInputChange} /></label>
        <br/>
        <div className="form-output form-output-direct">
	      	CampaignID : {this.state.campaignID} <br/>
	      	CampaignName : {this.state.campaignName}<br/>
          Banner Position : {this.state.alt}<br/>
          Customer Segment : {this.state.seg}<br/>
          Href Link : {this.state.href}<br/>
	      	Banner Link : {this.state.bannerLink}
	      </div>

        <BannerPreview posTitle="Homepage Top Banner" pos="ht" imgDimensions="970x50" banner={this.state}/>
        <BannerPreview posTitle="Universal Top Banner" pos="ut" imgDimensions="970x90" banner={this.state}/>
        <BannerPreview posTitle="Product Page Box Banner" pos="pb" imgDimensions="300x250" banner={this.state}/>
        <BannerPreview posTitle="Flyout Banner - Systems" pos="nv1" imgDimensions="120x600" banner={this.state}/>
          
          
      </form>
      
      
    );
  }
}

ReactDOM.render(
  <Webform />,
  document.getElementById('Webform')
);
jQuery("#Loader").hide();
jQuery("#WebformSettings button.btn-primary").map(function(i,n) {
  jQuery(n).click(function() {
    jQuery("." + jQuery(this).attr("data-label")).slideToggle();
  })
})

// Function to download data to a file
function download(data, filename, type) {
  var file = new Blob([data], {type: type});
  if (window.navigator.msSaveOrOpenBlob) // IE10+
      window.navigator.msSaveOrOpenBlob(file, filename);
  else { // Others
      var a = document.createElement("a"),
              url = URL.createObjectURL(file);
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      setTimeout(function() {
          document.body.removeChild(a);
          window.URL.revokeObjectURL(url);  
      }, 0); 
  }
}
function saveBanners() {
  var banners = jQuery(".banner-preview:visible"); 

  if( banners.length > 1 ) {
    console.log("Downloading multiple html files.");
    var zip = new JSZip();
    banners.map(function(i,n) {
      var filename = jQuery(n).text() + ".html";
      zip.folder("banners").file(filename.toLowerCase(), jQuery(n).html());
      
    });
    zip.generateAsync({type:"blob"})
      .then(function (blob) {
          saveAs(blob, "banners.zip");
      });  
  } else {
    console.log("Downloading a banner as an html file.");
    var filename = jQuery(banners).text().toLowerCase();
    var file = new Blob(jQuery(banners).html(), {type: "html"});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        var a = document.createElement("a"),
                url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);  
        }, 0); 
    }
  }
}

  //var onclick = "if(typeof s != &#x27;undefined&#x27;) {s.linkTrackEvents=&#x27;&#x27;; s.linkTrackVars=&#x27;prop26,eVar50&#x27;;
    //s.prop26=&#x27;-_--_--_--_--_-" + this.state.campaignID + "_PCs_" + this.state.seg + "-_-Pers_MNT-_--_-&#x27;+new Date().toISOString()+&#x27;-_-&#x27;;
    //s.eVar50=&#x27;-_--_--_--_--_-" + this.state.campaignID + "_PCs_" + this.state.seg + "-_-Pers_MNT-_--_-&#x27;+new Date().toISOString()+&#x27;-_-&#x27;;
    //s.tl(this,&#x27;o&#x27;,&#x27;Target Banner click monetate&#x27;);}"
