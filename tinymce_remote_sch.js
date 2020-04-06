// tiny_mve_remote.js 
// Changes:
//
// 200405 - inital version
//
//sample URLs
//
// ?schusr=gamesedu&schdir=serverside&schaltdomain=127.0.0.1
//
//


// url has been defined from *_js_footer.js
var schaltdomain_activated=true;//disable this if abused
var schaltdomain=url.searchParams.get("schaltdomain");// (default users.sch.gr) alternative domain that will host the serverside files

var schusr=url.searchParams.get("schusr");// sch username  *REQUIRED
var schdir=url.searchParams.get("schdir");// (default: "word")sch folder that the server handler script located
//var url_schhtm=url.searchParams.get("schhtm");// htm filename to display (eg text.html)
var schimg=url.searchParams.get("schimg");// img filename to display (default image.jpg)
var schhandler=url.searchParams.get("schhandler");// sch handler file name (default=index.php)
    

var schBaseURL="http://users.sch.gr/";
var schBaseURL="http://localhost/";    


console.log("schusr="+schusr+"schdir="+schdir+"schimg="+schimg);

if (schdir===null)console.log("TESTaaaaaaaaaaa");


if (schaltdomain===null) {schBaseURL="http://users.sch.gr/";} else { if(schaltdomain_activated) schBaseURL="http://"+schaltdomain+"/"; }
if (schdir===null)schdir="word";
if (schimg===null)schimg="image.jpg";
if (schhandler===null)schhandler="index.php";

console.log("schusr="+schusr+"schdir="+schdir+"schimg="+schimg);

var url_sch_form_action_fullpath=schBaseURL+schusr+"/"+schdir+"/"+schhandler; //"<form action="+url_sch_form_action_fullpath+" > ... </form>"
var url_sch_image_fullpath=schBaseURL+schusr+"/"+schdir+"/"+schimg; // "<img src="+url_sch_image_fullpath+" >"; 

var handle_sch_stuff = function () {
	console.log("url_sch_form_action_fullpath="+url_sch_form_action_fullpath);
	console.log("<img src="+url_sch_image_fullpath+" >");




	document.getElementById("probeserver").innerHTML = "<img src="+url_sch_image_fullpath+" >";
	document.getElementById("myForm").action = url_sch_form_action_fullpath;


}



if (schusr!==-1)handle_sch_stuff();

 
//var file_name_param = url.searchParams.get("file");

//always add our extra text -unless we got an 404 not found error
//if (jsonrequestIntervaled.status!=404 && jsonrequestIntervaled.status!=0) document.getElementById("probeserver").innerHTML = response_string;