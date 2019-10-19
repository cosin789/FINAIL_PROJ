function Change() {
    var skilled = prompt("add skill")
    var newss = new skilled

    newss.push(newss);
    console.log(skilled)
    document.getElementById("addskill").innerHTML = newss
}

function changename() {
    var yournames = prompt("input your name")
    console.log(yournames)
    document.getElementById("fn2").innerHTML = yournames
}

function ShowDate() {
    var d = new Date();
    document.getElementById("DATE").innerHTML = d;
}





function changecolor(id) {
    document.body.style.background = document.getElementById(id).innerHTML;
}