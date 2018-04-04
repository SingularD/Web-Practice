function app() {
    var Flag = false;
    var a = "a";
    var b = 'b';
    if(Flag){
        return a;
    }else {
        return b;
    }
}
console.log(app());