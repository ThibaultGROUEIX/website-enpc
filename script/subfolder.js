$("#file-input").on("change", function(e) {
    var thefiles = e.target.files;
    $.each(thefiles, function(i, item) {
        var thefile = item;
        var reader = new FileReader();
        reader.onload = function() {
            files.push(thefile);
        };
        reader.readAsArrayBuffer(thefile);
    });

});