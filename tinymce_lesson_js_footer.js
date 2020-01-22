//<script type="text/javascript">
/*
* tinymce_lesson_js_footer  (put this in same folder as parent html)
*
*
* Changes:
* ver200114 - probeserver reloads every 30sec, else load it once
* ver191216 -initial tinymce version - sample http://192.168.1.200/tinymce_class/tinymce.html?probeserver&file=lesson05
* 
* example : index.html?showdiv5\&timer3\&probeserver , 
*/

var first_click=true;
var url_time_param=location.search.substring(1).indexOf("time");

var url_string = location;// "http://www.example.com/t.html?a=1&b=3&c=m2-m3-m4-m5"; //window.location.href
var url = new URL(location.href);

var file_name_param = url.searchParams.get("file");

console.log(file_name_param);


//+++++++++++++++++++ probeserver4lessons v02 1911+++++++++++++++++
var server_probing_enabled=false;
var url_probeserver=location.search.substring(1).indexOf("probeserver");
if (url_probeserver!==-1)server_probing_enabled=true;

var timer_server_probe = 30000; //probe every 30 seconds
var server_probe_file="lessons/lesson05.htm";

if (file_name_param!==-1) {
    server_probe_file='lessons/'+file_name_param +".htm";
    console.log(server_probe_file);
    

    }

var jsonrequestInterval = function () {
    console.log("The request was send");
    // <hr><div id="probeserver"></div><hr> 
    var jsonrequestIntervaled = new XMLHttpRequest();
    var random_number=Math.random(); // OLD was=Date.prototype.getTime;
    jsonrequestIntervaled.open("GET", server_probe_file+"?"+random_number, true); // Date.prototype.getTime is used to avoid caching
    jsonrequestIntervaled.send();
    jsonrequestIntervaled.onreadystatechange = function () {
        if (jsonrequestIntervaled.readyState == 4) {
            console.log("The request was made and returned status="+jsonrequestIntervaled.status+" , and results (with random number="+random_number);
            var response_string =jsonrequestIntervaled.responseText;

            //always add our extra text -unless we got an 404 not found error
            if (jsonrequestIntervaled.status!=404 && jsonrequestIntervaled.status!=0) document.getElementById("probeserver").innerHTML = response_string;

            //in case we put the word reload, refresh browser
            if (response_string.indexOf("reload") !== -1) {
                console.log("refreshing browser");
                //document.getElementById("probeserver").innerHTML = response_string;
                window.location.reload(true);
            }
            
        }
    };
    
};

if (file_name_param!==-1) jsonrequestInterval();

if(server_probing_enabled) {setInterval(jsonrequestInterval, timer_server_probe); }else {jsonrequestInterval();}

//-------------------probeserver ---------------




//</script>
