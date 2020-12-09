function myFunction() {
  document.getElementById("level").innerHTML = Math.floor(Math.random() * 100);
  var a= document.getElementById("level").innerHTML;
  var b= document.getElementById("cap").innerHTML;
  var c= (a/b) *100;
  document.getElementById("perc").innerHTML=Math.round(c)+"%";
   $('#in').css('height', a*2 + 'px');
   $('#in').css('top', 195 - a*2 + 'px');     
}