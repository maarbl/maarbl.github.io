var f = 1000;   
//  начинаем с 1
function fuelLoop () {           //  цикл
   setTimeout(function () {    
    document.getElementById("fuel").innerHTML = f;
      f = f - 1;                     //  увеличиваем счетчик
      if (f > 0) {           //  если счетчик меньше 100- увеличиваем его 
         fuelLoop();         
      }                        //  время между запусками 1000 миллисекунд (1 сек)
   }, 2500)
}
fuelLoop();

var d = 0;          
function distanceLoop () {       
   setTimeout(function () {    
    document.getElementById("distance").innerHTML = d;
      d = d + 1;                     
      if (s < 225000) {            
         distanceLoop();         
      }                      
   }, 500)
}
distanceLoop();

var s = 1000;          
function foodLoop () {       
   setTimeout(function () {    
    document.getElementById("food").innerHTML = s;
      s = s - 1;                     
      if (s > 0) {            
         foodLoop();         
      }                      
   }, 3000)
}
foodLoop();

var w = 5000;          
function waterLoop () {       
   setTimeout(function () {    
    document.getElementById("water").innerHTML = w;
      w = w - 1;                     
      if (w > 0) {            
         waterLoop();         
      }                      
   }, 2000)
}
waterLoop(); 



let spe = document.getElementById("speed")
setTimeout(function () {    
  spe.style.width = "400px"            
}, 1000)

let thr = document.getElementById("throttle")
setTimeout(function () {    
  thr.style.width = "400px"            
}, 1000)

let gra = document.getElementById("gravity")
setTimeout(function () {    
  gra.style.width = "400px"            
}, 1000)

         












