$(document).ready(function(){
    $("#signform").validate({
        rules:{
            Fname:{
                required:true,
                minlength:4
            },
            sname:{
                required:true,
                minlength:4
            },
            mob:{
                required:true,
                email:true
            
            }
           
            
        }
        
    })
})