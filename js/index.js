function matchPassword() {  
    var pw1 = document.getElementById("pswd1").value;  
    var pw2 = document.getElementById("pswd2").value;  
      
    if(pw1.length !=0){
        if(pw1 != pw2){
          alert('Password mismatch!')
            
        }
        else{
          alert('Registered succesfully!')
  
        }
    }
     
  } 