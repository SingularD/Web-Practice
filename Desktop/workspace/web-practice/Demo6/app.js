function $(x) {
    return document.getElementById(x)
}
function getNum() {
    var myNumber = parseInt(Math.random()*99)+1;
    return myNumber;
}
function chack() {
    var number = parseInt($("inp").value);
    $("show").innerHTML = getNum();
    if (getNum() == number){
        alert("恭喜你才对了！")
    }else {
        alert("抱歉你猜错了，再接再厉")
    }
}
function reset() {
    $("inp").value = " "
}