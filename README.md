# tinymce_class
Class tinymce skeleton/template

# Changes:
- 200902 - tinymce_submit.html  + handle-submit.php (save ergasies to /mnt/home/downloads_linux/word_saved_data )
- 200115 - added gecko_spellcheck : true,   (use browser build-in dictionary) & added plugin "image"
- 200110 - added gecko_spellcheck : true,   (use browser build-in dictionary) & added plugin "image"
- 200108 - giorti_apokries01.htm
- 191217c added probeserver for custom file load
-
-
-


# Examples:
These will display the file (.htm) specified.
- http://192.168.1.200/tinymce_class/tinymce.html?file=giorti_apokries01

These will probe for the file (.htm) every 30seconds
- http://192.168.1.200/tinymce_class/tinymce.html?probeserver&file=lesson05
- http://192.168.1.200/tinymce_class/tinymce.html?probeserver&file=giorti25mart01
- http://192.168.1.200/tinymce_class/tinymce.html?probeserver&file=giorti_apokries01

Tip: if you add the word "reload" anywhere in the text file you will get a full page reload.This might be used for lesson/text reseting eg while an hour change.

# Notes :
- Διαλυτικά: [για Linux + Win ] ταυτόχρονα Shift + ‘τόνος’ και μετά το φωνήεν.
- Διαλυτικά και τόνος όπως “Μαΐου”:    [για Linux] ταυτόχρονα Shift+ ‘τόνος‘, μετά ξανά ‘τόνος’ και μετά το φωνήεν.


# Disable right click
<script> 
  //OK WORKS !!!
tinymce.init({
  selector: 'textarea',
  contextmenu_never_use_native: true
});

</script>


# tinymce_submit.html  + handle-submit.php
Form with name/class entry fields that saves to folder 

link__word_saved_data.sh
```bash
mkdir -p /mnt/home/downloads_linux/word_saved_data
#delete folder word_saved_data (if exists to create a symlink)
rm word_saved_data
#ln -s ./word_saved_data /mnt/home/downloads_linux/word_saved_data

ln -s /mnt/home/downloads_linux/word_saved_data ./word_saved_data/
```

# Template for numbered table (for lesson with songs etc)
```html
<table>
<tr><td>
1.
</td><td>

</td></tr><!-- new row-->
<tr><td>
2.
</td><td>

</td></tr><!-- new row-->
<tr><td>
3.
</td><td>

</td></tr><!-- new row-->
<tr><td>
4.
</td><td>

</td></tr><!-- new row-->
<tr><td>
5.
</td><td>
 
</td></tr>
</table>
```

# init script

```javascript
<script>tinymce.init({
  	selector:'textarea',
  	language: 'el',
    entity_encoding: "raw",
    height: "300",
    menubar: 'file edit view insert format tools table help',
    plugins: [
             "table","image"
    ],    
    toolbar: 'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl',
    gecko_spellcheck : true,
  //toolbar_sticky: true,
  //table_responsive_width: true,
  



	});
</script>
```

# To Do:
- add option to send text as a url parameter (instead of file)
- remote option : add <form> , add name , class, school and SUMBIT button
- remote : remote username of sch.gr ,remote sch folder then inside it remote_html file, remote_jpg file , remote index.php file that saves/appends locally ergasies in html
- gecko_spellcheck is deprecated/replaced by browser_spellcheck: true