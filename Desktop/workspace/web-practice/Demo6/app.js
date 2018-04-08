function $(x) {
    return document.getElementById(x)
}
function getOpr() {
    var op = ["+","-","*","/"];
     var aOp = op[parseInt(Math.random()*4)];
    return aOp
}
var label = "";
function getNum() {
    var a = parseInt(Math.random()*99+1);
    var b = parseInt(Math.random()*99+1);
    var aquation = a + getOpr() + b ;
    $("opr").innerHTML = aquation + "=";
    var answer = parseInt(eval(aquation));
    label += aquation  + "<br>";
    console.log(typeof eval(aquation));
    $("show").innerHTML = label;
    return answer;
}
function submit() {
    var result = parseInt($("inp").value);
    var myAnswer = parseInt(eval(result));
    console.log(typeof myAnswer)
    if(myAnswer == getNum()){
        $("show").innerHTML = "恭喜你，回答正确！"
    }else if(myAnswer == ""){
        alert("请输入答案！")
    }else {
        $("show").innerHTML = "回答错误，再接再厉！"

    }
}
