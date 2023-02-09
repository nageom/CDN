
  $(document).ready(function() {
     $('#before').val('');
     $('#after').val('');
	  
     $('#copyBtn').on("click", function () {
         var content = document.getElementById('after');
    
      	$('#after').select();
    	document.execCommand('copy'); 
     });
	  
  });
  
  function change(obj) {     
   	 	var content = sha256(obj.value);
   		$('#after').val(content);
  };

  function del(what) {   
    	if (what == 'before') {
          	$('#before').val('');
        } else {
            $('#after').val('');
        }
    
  };
