let FName = document.getElementById("nom");
let Email = document.getElementById("mail");
let Phone_N = document.getElementById("PNumber");
let prenom = document.getElementById("Prenom");
let Gender = document.getElementsByName("genre");
let group = document.getElementsByName("group");
let club = document.getElementById("act")
let arr = [];
function validNomPr(username) {
    var val = username.value;
    const patternx = /^[a-zA-Z-\s]+$/;
    if (val.length <= 3 || val.length > 30) {
        username.classList.add("invalid");
        username.classList.remove("valid");
    }
    else if (patternx.test(val)) {
        username.classList.add("valid");
        username.classList.remove("invalid");
        arr.push(true);
        console.log(arr);
    }

    else {
        username.classList.add("invalid");
        username.classList.remove("valid");
    }
}


function validate(elem) {
    var val = elem.value;
    const pattern = /^[a-zA-Z]+[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]/;
    if (pattern.test(val)) {
        elem.classList.add("valid")
        elem.classList.remove("invalid")
        arr.push(true);

    } else {
        elem.classList.add("invalid")
        elem.classList.remove("valid")
    }
}

function validNuTe(Numtele) {
    var val = Numtele.value;
    const pattern = /^(05|06|07)\d{8}$/;
    if (pattern.test(val)) {
        Numtele.classList.add("valid");
        Numtele.classList.remove("invalid");
        arr.push(true);
    } else {
        Numtele.classList.add("invalid");
        Numtele.classList.remove("valid");
    }
}
function Genre() {
    if (Gender[0].checked == false && Gender[1].checked == false) {
    document.querySelector('#invalid').innerText = 'erreur! ';
    } else {
        document.querySelector('#invalid').innerText = '';
        arr.push(true);
    }
}


function Groupe() {
    let allselect = document.querySelectorAll('#sel');
    let sele = 0;
    for (let i = 0; i < allselect.length; i++) {
        if (allselect[i].checked == true) {
            sele += 1;
        }
    }if (sele > 1) {
        document.querySelector('#message').innerText = 'erreur! ';
        return false;
    } else if (group[0].checked == false && group[1].checked == false && group[2].checked == false && group[3].checked == false ) {
        document.querySelector('#message').innerText = 'erreur! ';
    } else {
        document.querySelector('#message').innerText = '';
        arr.push(true);
        console.log(true);
    }
}

function Club() {
    let allactivi = document.querySelectorAll('#act');
    let selacti = 0;
    for (let A = 0; A < allactivi.length; A++) {
        if (allactivi[A].checked == true) {
            selacti += 1;
        }
    }  if (selacti > 3) {
        document.querySelector('#msg').innerText = 'erreur!';
        return false;
    } else if (allactivi[0].checked == false && allactivi[1].checked == false && allactivi[2].checked == false && allactivi[3].checked == false) {
        document.querySelector('#msg').innerText = 'erreur! ';
    } else {
        document.querySelector('#msg').innerText = '';
        arr.push(true);
        console.log(true);
    }
}

document.getElementById("btn").addEventListener("click", (e) => {
    e.preventDefault();
    validNomPr(FName);
    validNomPr(prenom);
    validate(Email);
    validNuTe(Phone_N);
    Genre();
    Groupe();
    Club();
    if (arr.length === 4) {
        window.open(href = 'valid.html', target = '_blank');
    }
    arr = [];
    console.log(arr);
})