( function( $ ) {
$( document ).ready(function() {
		
		// set the date we're counting down to
	var target_date = new Date("Apr 16, 2015").getTime();
	 
	// variables for time units
	var days, hours, minutes, seconds;
	 
	// get tag element
	var countdown = document.getElementById("countdown");
	 
	// update the tag with id "countdown" every 1 second
	setInterval(function () {
	 
	    // find the amount of "seconds" between now and target
	    var current_date = new Date().getTime();
	    var seconds_left = (target_date - current_date) / 1000;
	    if (seconds_left<0) {
	    	countdown.innerHTML = "Registration closed"
	 	 }else {
	    // do some time calculations
	    days = parseInt(seconds_left / 86400);
	    seconds_left = seconds_left % 86400;
	     
	    hours = parseInt(seconds_left / 3600);
	    seconds_left = seconds_left % 3600;
	     
	    minutes = parseInt(seconds_left / 60);
	    seconds = parseInt(seconds_left % 60);
	     
	    // format countdown string + set tag value
	   countdown.innerHTML = days + "D : " + hours + "H : "
	    + minutes + "M : " + seconds + "S";	 
	 	}
	}, 1000);
	
	var dimages=new Array();
	var numImages=4;
	for (i=0; i<numImages; i++)
	{
	  dimages[i]=new Image();
	  dimages[i].src="images/image"+(i+1)+".jpg";
	}
	var curImage=0;
	setInterval(function swapPicture()
	{
	  if (document.images)
	  {
	    var nextImage=curImage+1;
	    if (nextImage>=numImages)
	      nextImage=0;
	    if (dimages[nextImage] && dimages[nextImage].complete)
	    {
	      var target=0;
	      if (document.images.myImage)
	        target=document.images.myImage;
	      if (document.all && document.getElementById("myImage"))
	        target=document.getElementById("myImage");
	  
	      // make sure target is valid.  It might not be valid
	      //   if the page has not finished loading
	      if (target)
	      {
	        target.src=dimages[nextImage].src;
	        curImage=nextImage;
	      }
	    }
	  }
	}, 4000);
	
});
} )( jQuery );

