# tinymce_class
Class tinymce skeleton/template

# Changes:
- 200110 - added gecko_spellcheck : true,   (use browser build-in dictionary) & added plugin "image"
- 200108 - giorti_apokries01.htm
- 191217c added probeserver for custom file load
-
-
-


# Examples:
- http://192.168.1.200/tinymce_class/tinymce.html?probeserver&file=lesson05
- http://192.168.1.200/tinymce_class/tinymce.html?probeserver&file=giorti25mart01
- http://192.168.1.200/tinymce_class/tinymce.html?probeserver&file=giorti_apokries01

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

