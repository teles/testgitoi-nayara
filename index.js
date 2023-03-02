let totalVisits = 0;

if (window.onload) {
   window.onload = function () { 
      totalVisits++;
      document.getElementById("demo").innerHTML = totalVisits;
   }
}