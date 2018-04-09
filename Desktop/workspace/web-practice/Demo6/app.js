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
var x = 1,r = 1;
function getRandom() {
     a = parseInt(Math.random()*99+1);
     b = parseInt(Math.random()*99+1);
     equation = a + getOpr() + b;
    $("opr").innerHTML = equation + "=" ;
    $("all").innerHTML = x;
    x++;

}
function getNum(equation) {

    var result = eval(equation);
    label += equation + "<br>";
    $("show").innerHTML = label;
    return result;
}
function submit() {
    var myReault = eval($("inp").value);
    console.log(myReault+"submit()");
    if(getNum(equation) == myReault){
        alert("回答正确！")
        $("correct").innerHTML = r;
        r++;
    }else if(myReault == ""){
        alert("请输入结果！")
    }else {
        alert("回答错误！")
    }
}
