app = {
    say: function (message) {
        if(arguments.length === 0){
            message = "nothing";
        }
        console.log(message)
    }
}
app.say()