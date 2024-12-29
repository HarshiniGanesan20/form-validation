
var btn = document.getElementById("btn")
btn.addEventListener("click", function (e) {
    e.preventDefault();

    var formIsValid = true;

    var nameReg = /^[a-zA-Z]+$/
    var mailReg = /^[a-zA-Z0-9]+@gmail\.com/
    var pwdReg = /^.{6,}$/;

    var name = document.getElementById("name")
    var email = document.getElementById("email")
    var pwd = document.getElementById("pwd")

    if (nameReg.test(name.value) == false) {
        document.querySelector(".errormsgp1").style.display = "block"
        formIsValid = false;
    }
    else {
        document.querySelector(".errormsgp1").style.display = "none"
    }

    if (mailReg.test(email.value) == false) {
        document.querySelector(".errormsgp2").style.display = "block"
        formIsValid = false;
    }
    else {
        document.querySelector(".errormsgp2").style.display = "none"
    }

    if (pwdReg.test(pwd.value) == false) {
        document.querySelector(".errormsgp3").style.display = "block"
        formIsValid = false;
    }
    else {
        document.querySelector(".errormsgp3").style.display = "none"
    }


    if (formIsValid) {
        var fcontainer = document.querySelector(".form-container");
        var successmsg = document.querySelector(".successmsg");

        fcontainer.classList.add("hidden");
        successmsg.classList.remove("hidden");
        successmsg.classList.add("block");
    }

})

var btn1 = document.getElementById("btn1")
btn1.addEventListener("click", function (e) {
    e.preventDefault();
    var formIsValid = true;

    var nameReg = /^[a-zA-Z]+$/
    var mailReg = /^[a-zA-Z0-9]+@gmail\.com/
    var pwdReg = /^.{6,}$/;

    var name = document.getElementById("name")
    var email = document.getElementById("email")
    var pwd = document.getElementById("pwd")

    if (nameReg.test(name.value) == false) {
        document.querySelector(".errormsgp1").style.display = "block"
        formIsValid = false;
    }
    else {
        document.querySelector(".errormsgp1").style.display = "none"
    }

    if (mailReg.test(email.value) == false) {
        document.querySelector(".errormsgp2").style.display = "block"
        formIsValid = false;
    }
    else {
        document.querySelector(".errormsgp2").style.display = "none"
    }

    if (pwdReg.test(pwd.value) == false) {
        document.querySelector(".errormsgp3").style.display = "block"
        formIsValid = false;
    }
    else {
        document.querySelector(".errormsgp3").style.display = "none"
    }


    if (formIsValid) {
        var fcontainer = document.querySelector(".form-container");
        var successmsg = document.querySelector(".successmsg");

        fcontainer.classList.add("hidden");
        successmsg.classList.remove("hidden");
        successmsg.classList.add("block");
    }

})

var btn2 = document.getElementById("btn2")
btn2.addEventListener("click", function (e) {
    e.preventDefault();
    var formIsValid = true;

var nameReg = /^[a-zA-Z]+$/
var mailReg = /^[a-zA-Z0-9]+@gmail\.com/
var pwdReg = /^.{6,}$/;

var name = document.getElementById("name")
var email = document.getElementById("email")
var pwd = document.getElementById("pwd")

if (nameReg.test(name.value) == false) {
document.querySelector(".errormsgp1").style.display = "block"
formIsValid = false;
}
else {
document.querySelector(".errormsgp1").style.display = "none"
}

if (mailReg.test(email.value) == false) {
document.querySelector(".errormsgp2").style.display = "block"
formIsValid = false;
}
else {
document.querySelector(".errormsgp2").style.display = "none"
}

if (pwdReg.test(pwd.value) == false) {
document.querySelector(".errormsgp3").style.display = "block"
formIsValid = false;
}
else {
document.querySelector(".errormsgp3").style.display = "none"
}


if (formIsValid) {
var fcontainer = document.querySelector(".form-container");
var successmsg = document.querySelector(".successmsg");

fcontainer.classList.add("hidden");
successmsg.classList.remove("hidden");
successmsg.classList.add("block");
}

})

var btn3 = document.getElementById("btn3")
btn3.addEventListener("click", function (e) {
    e.preventDefault();
    var formIsValid = true;

var nameReg = /^[a-zA-Z]+$/
var mailReg = /^[a-zA-Z0-9]+@gmail\.com/
var pwdReg = /^.{6,}$/;

var name = document.getElementById("name")
var email = document.getElementById("email")
var pwd = document.getElementById("pwd")

if (nameReg.test(name.value) == false) {
document.querySelector(".errormsgp1").style.display = "block"
formIsValid = false;
}
else {
document.querySelector(".errormsgp1").style.display = "none"
}

if (mailReg.test(email.value) == false) {
document.querySelector(".errormsgp2").style.display = "block"
formIsValid = false;
}
else {
document.querySelector(".errormsgp2").style.display = "none"
}

if (pwdReg.test(pwd.value) == false) {
document.querySelector(".errormsgp3").style.display = "block"
formIsValid = false;
}
else {
document.querySelector(".errormsgp3").style.display = "none"
}


if (formIsValid) {
var fcontainer = document.querySelector(".form-container");
var successmsg = document.querySelector(".successmsg");

fcontainer.classList.add("hidden");
successmsg.classList.remove("hidden");
successmsg.classList.add("block");
}

})