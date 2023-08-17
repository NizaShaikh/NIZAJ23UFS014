(function($){
    // plugin code here
    $.prototype.simplePlugin=function(){
        // alert("Cool plugin");
        this.each(function(){
            $(this).click(function(e){
                alert("Element class:" +this.className);
            });
        });
    };
}(jQuery));