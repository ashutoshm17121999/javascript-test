function mySubmit(){
    var name1 = document.getElementById('name').value;
    var number1 = document.getElementById('number').value;
    var text = "*<p> inncorrect field</p>";
    var text2 = text.fontcolor("red");

    if(name1 == "" && number == ""){
        document.getElementById('result-1').innerHTML = text2;
        document.getElementById('name').style.border = "1px solid red";
        document.getElementById('result-2').innerHTML = text2;
        document.getElementById('number').style.border = "1px solid red";
    }
    if(name1 == "" || !isNaN(name1)){
        document.getElementById('result-1').innerHTML = text2;
        document.getElementById('name').style.border = "1px solid red";
    }
    if(number1 == "" || isNaN(number1)){
        document.getElementById('result-2').innerHTML = text2;
        document.getElementById('number').style.border = "1px solid red";
    }
    if(number1.length !=  10){
        document.getElementById('result-2').innerHTML = text2;
        document.getElementById('number').style.border = "1px solid red";
    }
}