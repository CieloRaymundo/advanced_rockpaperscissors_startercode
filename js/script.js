
$( document ).ready(function() {
        $("button").click(function() {
                
                var possibleAnswers = ["Rock", "Paper", "Scissors"];
                var compAnswer = possibleAnswers[Math.floor(Math.random()*possibleAnswers.length)];
                var getCompAns = document.innerHTML = compAnswer.toString();
                $("#compChoice").html(getCompAns)
                
                var userInput = $("input").val();
                var rockImg = "http://www.freepngimg.com/download/rock/7-2-rock-free-png-image.png"
                var paperImg = "http://allfreedesigns.com/wp-content/uploads/2017/04/lined-paper-texture-4.jpg"
                var scissorsImg = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Pair_of_scissors_with_black_handle%2C_2015-06-07.jpg/1200px-Pair_of_scissors_with_black_handle%2C_2015-06-07.jpg"
                
                
                        if(userInput === "Rock") {

                                $("#userPhoto").attr("src", rockImg);

                                if (getCompAns === userInput) {
                                        $("#compPhoto").attr("src", rockImg);
                                        $("#results").html("Tie")
                                }
                                if (getCompAns === "Paper") {
                                        $("#compPhoto").attr("src", paperImg);
                                        $("#results").html("You lose")
                                }
                                if (getCompAns === "Scissors") {
                                        $("#compPhoto").attr("src", scissorsImg);
                                        $("#results").html("You win")      
                                }
                                
                        }
                        
                        if(userInput === "Paper") {
                                $("#userPhoto").attr("src",paperImg);
                                
                                if (getCompAns === "Rock") {
                                        $("#compPhoto").attr("src", rockImg);
                                        $("#results").html("You win")      
                                }
                                if (getCompAns === userInput) {
                                        $("#compPhoto").attr("src", paperImg);
                                        $("#results").html("Tie")
                                }
                                if (getCompAns === "Scissors") {
                                        $("#compPhoto").attr("src", scissorsImg);
                                        $("#results").html("You lose")
                                }
                                
                        }
                        
                         if(userInput === "Scissors") {
                                $("#userPhoto").attr("src", scissorsImg);

                                if (getCompAns === "Rock") {
                                        $("#compPhoto").attr("src", rockImg);
                                        $("#results").html("You lose")      
                                }
                                if (getCompAns === "Paper") {
                                        $("#compPhoto").attr("src", paperImg);
                                        $("#results").html("You win")
                                }
                                if (getCompAns === userInput) {
                                        $("#compPhoto").attr("src", scissorsImg);
                                        $("#results").html("Tie")
                                }
                                
                        }
        });
});



