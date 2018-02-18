/// <reference path="../angular.js" />
/// <reference path="Module.js" />

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
//    tablinks = document.getElementsByClassName("tablinks");
//    tablinks = document.getElementsByClassName("tablinks");
//    tablinks = document.getElementsByClassName("tablinks");
//    for (i = 0; i < tablinks.length; i++) {
//        tablinks[i].className = tablinks[i].className.replace(" active", "");
//    }
//    document.getElementById(cityName).style.display = "block";
//    evt.currentTarget.className += " active";
//        alert("function click");
}

function validate(user,pass) {
	
	alert(user+"  "+pass);
	
	$.ajax({
		url : 'http://localhost:8080/restWebApp/doj/rest1/validate/' +user,
	 dataType: "json",
		 type: "GET",
				    			
		success : function(userdata) {
							
			var res = userdata;
			alert(res.username+"  "+res.password);
			if(res.username==user && res.password==pass){
				alert("success");
				window.location = 'http://localhost:8080/Clarify_backlog_monitor/WebContent/sample_clarify_backlog.html';
			}			 
			else{
				alert("failure");
				window.location = 'http://localhost:8080/Clarify_backlog_monitor/WebContent/login.html';
			} 
			 
		}
	});
	
	
}
/*app.service('crudService', function ($http) {

    
    //Create new record
    this.post = function (Employee) {
        var request = $http({
            method: "post",
            url: "/api/EmployeesAPI",
            data:  Employee
        });
        return request;
    }
    //Get Single Records
    this.get = function (caseId) {
       return $http.get("http://localhost:8080/restWebApp/doj/rest1/" + caseId);
    }

    //Get All Employees
    this.getEmployees = function () {
        return $http.get("/api/EmployeesAPI"); 
    }


    //Update the Record
    this.put = function (EmpNo, Employee) {
        var request = $http({
            method: "put",
            url: "/api/EmployeesAPI/" + EmpNo,
            data: Employee
        });
        return request;
    }
    //Delete the Record
    this.delete = function (EmpNo) {
        var request = $http({
            method: "delete",
            url: "/api/EmployeesAPI/" + EmpNo
        });
        return request;
    }

});
*/