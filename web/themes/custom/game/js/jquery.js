//== Custom jquery

jQuery('document').ready(function($){

//## Hover image to play video
    //** slick system */
    
  $('.slick__slide.slide, .grid').mouseover(function() {
      var $el = $(this);
        //** if item has video */
      if ($el.find('video').length) {
          $el.find('.views-field-field-service1-image').hide();
          // $el.css ({'border-radius': '10px', 'z-index':'999', 'position':'relative', 'border':'3px solid #47a6ff'});
          $el.css ({'border-radius': '10px', 'z-index':'999', 'position':'relative'});
          //disable right click menu
          $el.find('video').bind('contextmenu',function() { return false; });
          // show scale video and play
          $el.find('video').css('transform' , 'scale(1.3)').attr("href", $link).show()[0].play();
          
          $el.find('.views-field-title').css ({'display' : 'flex','z-index':'9999'});
          //** click video to node page */
          var $link = $el.find('div.views-field-title a').attr('href');
          $el.find('video').click(function() {
              window.location = $link;
          });
      //** end click */
      } else {
          // $el.find('.views-field-field-service1-image').css ({'border':'3px solid #47a6ff', 'transform':'scale(1.2)'});
          // $el.css ({'border-radius': '10px', 'z-index':'999', 'position':'relative','border':'3px solid #47a6ff'});
          $el.css ({'border-radius': '10px', 'z-index':'999', 'position':'relative'});
          $el.find('.views-field-field-service1-image').css ({'transform':'scale(1.1)'});
          $el.find('.views-field-title').css ({'display' : 'flex','z-index':'9999'});
      }      
      
  }).mouseout(function() {
      var $el = $(this);
      $el.find('.views-field-title').css ({'display' : 'none'});
      $el.css ({ 'border':'3px solid transparent'});
      $el.find('.views-field-field-service1-image').show().css ({'transform':'none'});
      // $el.find('img').css ({'transform':'none'});
      $el.find('video').hide()[0].pause().currentTime = 0;
  });
   
    //** End slick system */

    
//## Full screen button iframe

    // document.querySelector('.fa-compress').onclick = e => {
  // 	const frameDoc = frame.contentDocument;
  // 	const el = document.getElementsByTagName("iframe");
  
  // 	if(el.requestFullscreen) el.requestFullscreen();
  //   else if(el.mozRequestFullScreen) el.mozRequestFullScreen();
  //   else if(el.webkitRequestFullscreen) el.webkitRequestFullscreen();
  //   else if(el.msRequestFullscreen) el.msRequestFullscreen();
  // }
  var elements = document.getElementsByClassName("fa-compress");
  var myFunction = function() {
      // var attribute = this.getAttribute("class");
      // alert(attribute);

    // function toggleFullscreen() {
      let elem = document.querySelector("iframe");
      
      if (!document.fullscreenElement) {
        elem.requestFullscreen().catch(err => {
          alert(`Error attempting to enable fullscreen mode: ${err.message} (${err.name})`);
        });
      } else {
        document.exitFullscreen();
      }
    // }
  };
  
  for (var i = 0; i < elements.length; i++) {
      elements[i].addEventListener('click', myFunction, false);
  }


  //## Disable submit on search input
  $(document).on("keypress", "input", function (e) {
    var code = e.keyCode || e.which;
    if (code == 13) {
        e.preventDefault();
        return false;
    }
  });

  //## JavaScript Auto Adjust iFrame Height Based on Content
  //   function resizeIframe(obj){
  //     obj.style.height = 0;
  //     obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
  // }
  // function resizeIFrameToFitContent( iFrame ) {

  //   iFrame.width  = iFrame.contentWindow.document.body.scrollWidth;
  //   iFrame.height = iFrame.contentWindow.document.body.scrollHeight;
  // }
  // Selecting the iframe element
  // var iframe = document.getElementsByClassName("iframe--link");
  // var iFrame = document.querySelector("iframe");

  // Adjusting the iframe height onload event
  // iFrame.onload = function(){
    // alert("ok");
    // alert(iFrame.height);
    // frame.style.height = frame.contentWindow.document.body.scrollHeight + 'px';
    // resizeIFrameToFitContent( iFrame );
  // }

  // function resizeIFrameToFitContent( iFrame ) {

  //   iFrame.width  = iFrame.contentWindow.document.body.scrollWidth;
  //   iFrame.height = iFrame.contentWindow.document.body.scrollHeight;
  // }

  // window.addEventListener('DOMContentLoaded', function(e) {
  //   alert("ok");
    // var iFrame = document.getElementById( 'iFrame1' );
    // var iFrame = document.querySelector("iframe");
    // resizeIFrameToFitContent( iFrame );

    // or, to resize all iframes:
    // var iframes = document.querySelectorAll("iframe");
    // for( var i = 0; i < iframes.length; i++) {
    //     resizeIFrameToFitContent( iframes[i] );
    // }
  // } );
});

