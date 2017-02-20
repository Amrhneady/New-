$(document).ready(function() {
    get();
});


function get(){
   $.ajax({
    url: "http://api.fixer.io/latest?base=USD",
    type: 'GET',
    success: function(result) {
        
         for (var item in result.rates){ $('#list').append('<option value ='+result.rates[item]+'>'+item+'</option>');
                                   }
     
    }
  }); 

    }


function exchange(){
    
   var first= parseFloat($('#input').val());
    var second = parseFloat($('#list').val());
    $('#res').val((first * second));   
}
