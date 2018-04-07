function $(x) {
    return document.getElementById(x)
}
function change() {
    if($("pro").value == "x^y"){
        $("y").style.display = "inline";
    }else {
        $("y").style.display = "none";
    }
}
function res() {
    var Num = parseFloat($("inp").value);
    var Op = $("pro").value;
    var result = 0;
    switch (Op){
        case "sin" : result = Math.sin(Num*(Math.PI/180));
            break;
        case "cos" : result = Math.cos(Num*(Math.PI/180));
            break;
        case "tan" : result = Math.tan(Num*(Math.PI/180));
            break;
        case "Ln" : result = Math.log(Num);
            break;
        case "x^y" : result = Math.pow(Num,parseFloat($("y").value));
            break;
    }
    $("show").innerHTML = "结果为：" + result;
}