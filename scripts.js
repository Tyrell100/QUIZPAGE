function validate() {
    var questionOne = document.getElementById('q1').value;
    var questionTwo = document.getElementById('q2').value;
    var questionThree = document.getElementById('q3').value;
    var questionFour = document.getElementById('q4').value;
    var questionFive = document.getElementById('q5').value;
    var right = 0;


    if (questionOne === "Safari") {
        right = right + 20
    };
    if (questionTwo === "Latin") {
        right = right + 20;
    };
    if (questionThree === "Messi") {
        right = right + 20;
    };
    if (questionFour === "Akothee") {
        right = right + 20;
    };
    if (questionFive === "Nairobi") {
        right = right + 20;
    };



    document.getElementById("show").style.visibility = "visible";
    document.getElementById("final").innerHTML = "Your score in percentage is: " + right + "%";
    $(".container").fadeOut();

};
