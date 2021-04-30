let phonePattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/i;
let emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let phone = document.getElementById("phone");
let email = document.getElementById("email");
let name = document.getElementById("name");
let fName = document.getElementById("fName");

email.onkeyup = function validationEmail() {
  if (email.value.match(emailPattern)) {
    document.getElementById("errorEmail").innerHTML = "";
  } else {
    document.getElementById("errorEmail").innerHTML =
      "!لطفا فرمت ایمیل به درستی وارد کنید";
  }
};

phone.onkeyup = function validationPhone() {
  if (phone.value.match(phonePattern)) {
    document.getElementById("errorPhone").innerHTML = "";
  } else {
    document.getElementById("errorPhone").innerHTML =
      "!لطفا شماره تماس را به درستی وارد کنید";
  }
};

function checkform() {
  if (!email.value.match(emailPattern)) {
    alert("!لطفا فرمت ایمیل به درستی وارد کنید");
    return false;
  } else if (!phone.value.match(phonePattern)) {
    alert("!لطفا شماره تماس را به درستی وارد کنید");
    return false;
  } else if (name.value == "") {
    alert("!لطفا نام خود را به درستی وارد کنید");
    return false;
  } else if (fName.value == "") {
    alert("!لطفا نام خانوادگی را به درستی وارد کنید");
    return false;
  }

  return true;
}
