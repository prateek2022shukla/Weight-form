function check(){
    var name = document.getElementById("input-name").value;
    var age = document.getElementById("input-age").value;
    var weight = document.getElementById("input-weight").value;
    
    var message;
  
        if(age >=5 && age <= 7){
            if(weight < 15){
                message = "Hello " + name +" !!! Your weight is less than recommended value of " + weight + " kg" + " at an age of "+ age;   
    
            }
            else if(weight > 20){
                message = "Hello " + name +" !!! Your weight is greater than recommended value of " + weight + " kg" + " at an age of "+ age;   
    
            }     
            else {
                message = "Hello " + name + " your weight is perfect";
            }  
             
        }
    
    
    
        if(age >=8 && age <= 10){
            if(weight < 21){
                message = "Hello " + name +" !!! Your weight is less than recommended value of " + weight + " kg" + " at an age of "+ age;   
    
            }
            else if(weight > 25){
                message = "Hello " + name +" !!! Your weight is greater than recommended value of " + weight + " kg" + " at an age of "+ age;   
    
            }   
            else{
                message = "Hello " + name + " your weight is perfect";
            }     
            
        }
    
        if(age >=11 && age <= 15){
            if(weight < 26){
                message = "Hello " + name +" !!! Your weight is less than recommended value of " + weight + " kg" + " at an age of "+ age;   
    
            }
            else if(weight > 30){
                message = "Hello " + name +" !!! Your weight is greater than recommended value of " + weight + " kg" + " at an age of "+ age;   
    
            }   
            else{
                message = "Hello " + name + " your weight is perfect";
            }     
            
        }
    
    
        if(age >=16 && age <= 20){
            if(weight < 31){
                message = "Hello " + name +" !!! Your weight is less than recommended value of " + weight + " kg" + " at an age of "+ age;   
    
            }
            else if(weight > 40){
                message = "Hello " + name +" !!! Your weight is greater than recommended value of " + weight + " kg" + " at an age of "+ age;   
    
            }   
            else{
                message = "Hello " + name + " your weight is perfect";
            }     
            
        }
   
   
      if(age < 5 || age > 20){
            message = "Please specify age within the given range";
        }
    
    

    
    display(message);
    
}

function display(message){
    document.getElementById("result").innerHTML = message;

}



