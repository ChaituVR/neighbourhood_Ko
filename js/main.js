$(document).ready(function(){
 // $("#maparea").animate({width: "-=353px"},1000)
  // $(".colapse-btn").on('click',function(){
  //   console.log("awefawefa");
  //   $('#main').toggleClass("slideInLeft slideOutLeft");
  //   $('.colapse-btn').animate({ "left": "500px" });
  // });
  var viewModel = {
    TabCollapsed:false,
    IsTabCollapsed: function(event){
      // $('#main').toggleClass("slideInLeft slideOutLeft");


      if(!this.TabCollapsed){
        console.log(this.TabCollapsed);
        $( " #main" ).animate({
                                      opacity: 0.4,
                                      marginLeft: "-353px"
                                    }, 1000 );
        $("#maparea").animate({left: "-=353px"},1000)
        $("#maparea").css({width: "100%"})
        google.maps.event.trigger(map, 'resize')
        this.TabCollapsed=true;
        //alert(this.TabCollapsed);

      }
      else{
        $( "#main" ).animate({
                                      opacity: 1,
                                      marginLeft: "0px"
                                    }, 1000 );
        $("#maparea").animate({left: "+=353px"},1000)
        $("#maparea").animate({width: "-=353px"},300)
        google.maps.event.trigger(map, 'resize')

        this.TabCollapsed=false;


      }
    },


};
ko.applyBindings(viewModel);
});
  var map;

  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 17.6868, lng: 83.2185},
      zoom: 8
    });
  }
