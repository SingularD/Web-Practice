function $(x) {
    return document.getElementById(x)
}
function getOpr() {
    var op = ["+","-","*","/"];
     var aOp = op[parseInt(Math.random()*4)];
    return aOp
}
var label = "";
var a,b,equation;
function getRandom() {
     a = parseInt(Math.random()*99+1);
     b = parseInt(Math.random()*99+1);
     equation = a + getOpr() + b;
    $("opr").innerHTML = equation + "=";
}
function getNum(equation) {

    var result = eval(equation);
    label += equation + "<br>";
    $("show").innerHTML = label;
    console.log(result+"getNum()");
    return result;
}
function submit() {
    var myReault = $("inp").value;
    console.log(myReault+"submit()");
    if(getNum(equation) == myReault){
        alert("回答正确！")
    }
}
