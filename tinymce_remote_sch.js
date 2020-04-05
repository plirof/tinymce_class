
	var schusr=location.search.substring(1).indexOf("schusr");// sch username
    var schdir=location.search.substring(1).indexOf("schdir");// sch folder that the server handler script located
    //var url_schhtm=location.search.substring(1).indexOf("schhtm");// htm filename to display (eg text.html)
    var schimg=location.search.substring(1).indexOf("schimg");// img filename to display (eg image.jpg)
    var schhandler=location.search.substring(1).indexOf("schhandler");// sch handler file name (default=index.php)
    
    var url_sch_form_action_fullpath="users.sch.gr/"+schusr+"/"+schdir+"/"+schhandler+; //"<form action="+url_sch_form_action_fullpath+" > ... </form>"
    var url_sch_image_fullpath="users.sch.gr/"+schusr+"/"+schdir+"/"+schimg; // "<img src="+url_sch_image_fullpath+" >"; 