window.onload = canvasApp;
var $ = function (id) {
    return document.getElementById(id);
};
function canvasApp () {
    var canvas = $("canvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(0,0,300,300);
}
