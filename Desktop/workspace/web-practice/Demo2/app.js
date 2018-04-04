function $(x) {
    return document.getElementById(x);
}

var FlagNew = false;
var tatol = 0;
var Opp;

function Decimal() {
    var txt = $("txtnum");
    if(FlagNew){
        txt.value = "0."
    }else {
        if(txt.value.indexOf('.') == -1){
            txt.value = "."
        }
    }
    FlagNew = false;
}

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
}

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
}