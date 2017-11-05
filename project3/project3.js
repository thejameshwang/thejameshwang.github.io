function q1() {
    input = document.getElementById("task1");
    var x = parseInt(input.value);
    output = document.getElementById("q1"); 
    output.innerHTML = 5 * x - 3 * (x ^ 2) + 13;
}
document.getElementById("q1").innerHTML;


function q2() {
    input1 = document.getElementById("task2a");
    input2 = document.getElementById("task2b");
    input3 = document.getElementById("task2c");
    var a = input1.value;
    var b = input2.value;
    var c = input3.value;
    output = document.getElementById("q2") ;
    output.innerHTML = "Hello, "+ a +" " + b +" "+ c ;
}
document.getElementById("q1").innerHTML = q1(3);


function q3() {
    output = document.getElementById("q3") ;
    var ex3 = 0
    input1 = document.getElementById("task3a");
    input2 = document.getElementById("task3b");
    var x = parseInt(input1.value);
    var y = parseInt(input2.value);
    if(x > y){
        ex3 = "bananas";
        output.style.color = "yellow"
    }
    
        else if(y > x){
        ex3 = "porcupine"
        output.style.color = "brown"
        
    }
        else if(x == y && (x+y) <0){
        ex3 = "red apples"
        output.style.color = "red"
    }
        else{
        ex3 = "green apples"
        output.style.color = "green"
    }
    output.innerHTML = ex3;
}
document.getElementById("q3").innerHTML;


function q4() {
    output = document.getElementById("q4") ;
    var ex4 = []
    input1 = document.getElementById("task4");
    output.innerHTML = ex4;
}
document.getElementById("q4").innerHTML;


function q5() {
    output = document.getElementById("q5") ;
    input1 = document.getElementById("task5");
    var str = input.value;
    var res = str.split(",")[2];
}
document.getElementById("q5").innerHTML;