// var li = function () {
    // var b = document.getElementById("title").value;
    // var one = "这是一个标题";
    // var two = '这是更改后的标题';
    // if (b === one){
    //     document.getElementById("title").innerHTML = '这是更改后的标题';
    // } else {
    //     document.getElementById("title").innerText = "这是一个标题";
    // }
    // console.log(b)
    // console.log(document.getElementById('title').innerHTML);
    // document.getElementById("title").innerHTML = 'hhh';
// };
// var change = function () {
//     var val = document.getElementById("title").innerHTML;
//     var one = "这是一个标题";
//     var after = "this is a new title";
//     if (val === one ){
//         document.getElementById("title").innerHTML = after;
//     }else {
//         document.getElementById("title").innerHTML = one;
//     }
// };

// document.getElementById("btn").addEventListener("click",change);
// function change() {
//     document.getElementById("title").innerHTML = "this is a new title";
// }
// const change = () => {
//   document.getElementById("title").innerHTML = "this is a new title";
// };

function getPosition(event) {
    let e = event || window.event;
    return {'x' : e.clientX,'y' : e.clientY}
}

function change() {
    document.getElementById('Xval').innerHTML = getPosition().x;
    document.getElementById('Yval').innerHTML = getPosition().y;
}

window.addEventListener('mousemove',change);