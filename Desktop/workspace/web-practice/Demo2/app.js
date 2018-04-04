function $(x) {
    return document.getElementById(x);
}//简化DOM操作

var FlagNew = false;//之前是否使用过运算符，默认为空
var tatol = 0;//输入运算符之前的数据
var Opp;//记录运算符

function Decimal() {
    var txt = $("txtnum");
    if(FlagNew){
        txt.value = "0."
    }else {
        if(txt.value.indexOf('.') == -1){
            txt.value += "."
        }
    }
    FlagNew = false;
}//小数点操作

function num(Num) {
    var txt = $("txtnum");
    if (FlagNew){
        txt.value = Num;
        FlagNew = false;
    }else {
        if (txt.value == "0"){
            txt.value = Num
        }else {
            txt.value += Num
        }
    }
}//按键获取数字值

function Oper(Op) {
    var Num1 = $("txtnum").value;
    if(Num1 == ""){
        Num1 = 0
    }
    FlagNew = true;
    switch (Opp){
        case "+" : tatol += parseFloat(Num1);
            break;
        case "-" : tatol -= parseFloat(Num1);
            break;
        case "*" : tatol *= parseFloat(Num1);
            break;
        case "/" : tatol /= parseFloat(Num1);
            break;
        default:tatol = parseFloat(Num1)
    }
    $("txtnum").value = tatol;
    Opp = Op;
}//得到结果