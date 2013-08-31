function print(variable) {
    if(typeof variable == 'object') {
        $.each(variable, function(key, element) {
            console.log('' + key + ' => ' + element+"");
        });
    }
    else {
        console.log('' + variable +"");
    }
}
(function($) {
    
    $.fn.print_r = $.fn.print = function(variable){
        return this.each(function(){
        if(typeof variable == 'object'){
            var string = $.print_r.objectToString(variable,0);
            $(this).html(string);
        } else {
            $(this).html('<pre>'+variable.toString()+'</pre>');
        }
	});
    
    }
    
    $.print_r = {
            objectToString : function (variable,i){
              var string = '';
              if(typeof variable == 'object' && i < 3){ // 3 is to prevent endless recursion, set higher for more depth
                  string += 'Object ( <ul style="list-style:none;">';
                  var key;
                  for(key in variable) {
                      if (variable.hasOwnProperty(key)) {
                        string += '<li>['+key+'] => ';
                        string += $.print_r.objectToString(variable[key],i+1);
                        string += '</li>';
                      }
                  }
                  string += '</ul> )';
              } else {
                  string = variable.toString();
              }
              return string;
        }
    }
    
})(jQuery)
