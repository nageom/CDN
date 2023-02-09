
  $(document).ready(function() {
     $('#before').val('');
     $('#after').val('');
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
  
  function copy() {
        var content = document.getElementById('after');
    
      	$('#after').select();
    	document.execCommand('copy'); 
		//console.log("계좌가 정상적으로 복사되었습니다.");
    	//$('#after').blur();
  }
