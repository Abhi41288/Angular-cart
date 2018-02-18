 $( function() {
    $( "#datepicker1" ).datepicker({ dateFormat: "d-M-yy", 
    	orientation: "auto",	
    	overflow: "auto"
    	    });
        
  } ); 

$( function() {
    $( "#datepicker2" ).datepicker({ dateFormat: "d-M-yy"});
      
  } );

function openCity(evt, Name){
    var i, tabcontent, tablinks;
// tabcontent = document.getElementById("case3")..style.display = "none";;
   if(Name=="case3"){
       //alert(Name);
       document.getElementById('case3').style.display = "block";
       document.getElementById('caseInfo').style.display = "none";
       document.getElementById('moreInfo').style.display = "none";
       document.getElementById('throughput').style.display = "none";
       }
   if(Name=="moreInfo"){
      // alert(Name);
        document.getElementById('case3').style.display = "none";
        document.getElementById('caseInfo').style.display = "none";
        document.getElementById('moreInfo').style.display = "block";
       document.getElementById('throughput').style.display = "none";
       }
   if(Name=="caseInfo"){
       //alert(Name);
        document.getElementById('case3').style.display = "none";
        document.getElementById('caseInfo').style.display = "block";
        document.getElementById('moreInfo').style.display = "none";
       document.getElementById('throughput').style.display = "none";
       }
   if(Name=="throughput"){
       document.getElementById('case3').style.display = "none";
       document.getElementById('caseInfo').style.display = "none";
       document.getElementById('moreInfo').style.display = "none";
       document.getElementById('throughput').style.display = "block";
       }
   
//  for (i = 0; i < tabcontent.length; i++) {
//    tabcontent[i].style.display = "none";
//}
//tablinks = document.getElementsByClassName("tablinks");
//tablinks = document.getElementsByClassName("tablinks");
//tablinks = document.getElementsByClassName("tablinks");
//for (i = 0; i < tablinks.length; i++) {
//   tablinks[i].className = tablinks[i].className.replace(" active", "");
//}
//document.getElementById(cityName).style.display = "block";
//evt.currentTarget.className += " active";
//   alert("function click");
}

/*function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    tablinks = document.getElementsByClassName("tablinks");
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
*/