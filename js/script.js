
$( document ).ready(function() {
         $( "button" ).click(function() {
        var userInput = $("input").val();
     
        
            var answers = ["rock","paper","scissors"];

            var compAnswer = answers[Math.floor(Math.random()*answers.length)];

            var getCompAnswer = document.innerHTML = compAnswer.toString();

            $("#compChoice").html(getCompAnswer);
    
    
    var score = $("#userscore");
    var originalPoints = score.text();
    console.log('originalPoints', originalPoints);
    var newPoints = Number(originalPoints) + 1;
    
    
    var score = $("#compscore");
    var originalPoints2 = score.text();
    console.log('originalPoints2', originalPoints2);
    var newPoints2 = Number(originalPoints2) + 1;
     
     

        if(userInput === "rock") {

            if (getCompAnswer === userInput) {    
                $("#results").html("Tie!");                     
            }
                                
            if (getCompAnswer === "paper") {              
                $("#results").html("Computer Wins!");
                $("#compscore").html(newPoints2);                   
            }
                        
            if (getCompAnswer === "scissors") {                         
                $("#results").html("You Win!");
                $("#userscore").html(newPoints);  
            }     
                          
        }
            
            
        if(userInput === "scissors") {

            if (getCompAnswer === userInput) { 
                $("#results").html("Tie!");  
            }
                                
            if (getCompAnswer === "rock") {            
                $("#results").html("Computer Wins");
                $("#compscore").html(newPoints2);                   
            }
                        
            if (getCompAnswer === "paper") {                         
                $("#results").html("You Win!");
                $("#userscore").html(newPoints);                  
            }
            
        }
        
        
        if(userInput === "paper") {

            if (getCompAnswer === userInput) {         
                $("#results").html("Tie!");
            }
                                
            if (getCompAnswer === "rock") {                          
                $("#results").html("You win!");
                $("#userscore").html(newPoints);                               
            }
                        
            if (getCompAnswer === "scissors") {                                        
                $("#results").html("Computer Wins!");
                $("#compscore").html(newPoints2);                                
            }
                          
        }
     
     
     });
});



