function myFunction1(){
    document.getElementById("Kedarnath").style.display="block";
    document.getElementById("Badrinath").style.display="none";
    document.getElementById("Yamunotri").style.display="none";
    document.getElementById("Gangotri").style.display="none";
    document.getElementById("Rishikesh").style.display="none";

}

function myFunction2(){
    document.getElementById("Kedarnath").style.display="none";
    document.getElementById("Badrinath").style.display="block";
    document.getElementById("Yamunotri").style.display="none";
    document.getElementById("Gangotri").style.display="none";
    document.getElementById("Rishikesh").style.display="none";

}

function myFunction3(){
    document.getElementById("Kedarnath").style.display="none";
    document.getElementById("Badrinath").style.display="none";
    document.getElementById("Yamunotri").style.display="block";
    document.getElementById("Gangotri").style.display="none";
    document.getElementById("Rishikesh").style.display="none";

}

function myFunction4(){
    document.getElementById("Kedarnath").style.display="none";
    document.getElementById("Badrinath").style.display="none";
    document.getElementById("Yamunotri").style.display="none";
    document.getElementById("Gangotri").style.display="block";
    document.getElementById("Rishikesh").style.display="none";

}
function myFunction5(){
    document.getElementById("Kedarnath").style.display="none";
    document.getElementById("Badrinath").style.display="none";
    document.getElementById("Yamunotri").style.display="none";
    document.getElementById("Gangotri").style.display="none";
    document.getElementById("Rishikesh").style.display="block";

}

function mOver(obj){
    obj.innerHTML ="Thank You"
}
function mOut(obj){
    obj.innerHTML="Mouse Over Me"
}

function focusFun(){
    document.getElementById("fname").style.background = "yellow";
    document.getElementById("lname").style.background = "yellow";
    document.getElementById("phone").style.background = "yellow";
    document.getElementById("email").style.background = "yellow";

}

function blurFun(){
    document.getElementById("fname").style.background = "";
    document.getElementById("lname").style.background = "";
    document.getElementById("phone").style.background = "";
    document.getElementById("email").style.background = "";
}

function upperCase(){
    const x = document.getELementByID("fname");
    x.value = x.value.toUpperCase();
    const y = document.getElementByID("lname");
    y.value = y.value.toUpperCase();
    const z = document.getElementById("phone");
    z.value = z.value.toUpperCase();
    const a = document.getElementById("email");
    a.value = a.value.toUpperCase();
}

function validateForm() {
    var fname = document.forms["myForm"]["fname"].value;
    var lname = document.forms["myForm"]["lname"].value;
    var phone = document.forms["myForm"]["phone"].value;
    var email = document.forms["myForm"]["email"].value;

    if (fname == null || fname == "") {
        alert("Please fill out firstName!");
        return false;
    }
    if (lname == null || lname == "") {
        alert("Please fill out lastName!");
        return false;
    }
    if (phone == null || phone == "") {
        alert("Please fill out phoneNumber!");
        return false;
    }
    if (email== null || email == "") {
        alert("Please fill out email!");
        return false;
    }
    
}