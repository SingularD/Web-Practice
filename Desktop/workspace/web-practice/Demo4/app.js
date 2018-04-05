function myTime() {
    var time = new Date();
    // document.write(time);
    document.getElementById("time").innerHTML = time;
    setTimeout("myTime()",1000);
}
myTime();
function myRealTime() {
    var time = new Date();
    var year = time.getFullYear();
    var month = time.getMonth()+1;
    var day = time.getDate();
    var date = time.getDate()-1;
    document.getElementById("time2").innerHTML =
        year + "年 " + month + "月 " + day + "日 " + "星期" + date + " "
        + time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds() ;
    setTimeout("myRealTime()",1000);
}
myRealTime()