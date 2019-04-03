//var heading1 = document.getElementById('heading1');

var tl1 = new TimelineMax({repeat:1000});
tl1.to(heading1, 5, {left: 1060, ease: Sine.ease});

var tl2 = new TimelineMax({repeat:1000});
tl2.from(heading2, 5, {left: 1060, ease: Sine.ease});  


(function(){
'use strict';

document.addEventListener('DOMContentLoaded', function(){
	var c = document.getElementById('current-time');
	
	setInterval(updateTime, 100);
	
	function updateTime() {
		var d = new Date();
	
		var hours = d.getHours(),
			minutes = d.getMinutes(),
            seconds = d.getSeconds(),
			ampm = 'AM';
			
		if (hours > 12) {
			hours -= 12;
			ampm = 'PM';
		} else if (hours === 0) {
			hours = 12;
		}
		
		if (minutes < 10) {
			minutes = '0' + minutes;
		}
        
        if (seconds < 10) {
            seconds = '0' + seconds;
        }
        
		c.innerHTML = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
	   }
    });
})();

function earthTheme() {
    document.body.style.backgroundImage = "url(https://media.freestocktextures.com/cache/7d/66/7d66ae58b2966a05ccadce0ed94723a9.jpg)";
 	//document.body.style.backgroundSize = "cover";
 	document.body.style.color = "#E0E2DB";
}

function marsTheme() {
    document.body.style.backgroundImage = "url(https://www.unlockthelaw.co.uk/images/mars-water.jpg)";
    //document.body.style.backgroundSize = "cover";
    document.body.style.color = "#F0FFCE";
}
















