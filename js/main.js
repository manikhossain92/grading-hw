//switch case


var grade = prompt("enter your grade:");

switch(true){
    case (grade >= 80 && grade <= 100 ):
        document.getElementById("one").innerHTML ="You have got 'A+' Grade.";
        window.alert("Congratulations");
        break; 

    case (grade >= 70 && grade <= 79 ):
        document.getElementById("one").innerHTML ="You have got 'A' Grade.";
        break; 

    case (grade >= 60 && grade <= 69 ):
        document.getElementById("one").innerHTML ="You have got 'A-' Grade.";
        break; 

    case (grade >= 50 && grade <= 59 ):
        document.getElementById("one").innerHTML ="You have got 'B' Grade.";
        break;  

    case (grade >= 40 && grade <= 49 ):
        document.getElementById("one").innerHTML ="You have got 'C' Grade.";
        break;
    case (grade >= 33 && grade <= 39 ):
        document.getElementById("one").innerHTML ="You have got TTP'D'.";
        break;
    case (grade >= 0 && grade <= 32 ):
        document.getElementById("one").innerHTML ="You have got 'F'Grade.You have failed.";
        break;  

    default:
        document.getElementById("one").innerHTML ="Your number is incorrect.";
        window.alert("Please enter your valid number 0-100.");
}

