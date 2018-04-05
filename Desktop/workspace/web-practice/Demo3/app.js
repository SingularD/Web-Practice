function $(x) {
    return document.getElementById(x)
}
function num(a) {
    var txt = document.getElementById("txtnum");
    if(txt.value == "0"){
        txt.value = a;
    }else {
        txt.value += a;
    }
    return txt.value;
}
function clean() {
    $("txtnum").value = '0';
}
function Oper(op) {
    var txt = document.getElementById("txtnum");
    txt.value += op
}
function Decimal() {
    var txt = document.getElementById("txtnum");
    txt.value += '.'
}
function getResult() {
    var txt = $("txtnum").value;
    $("txtnum").value = eval(txt);
}
