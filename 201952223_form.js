function validate_form() {
  var check_ID = document.forms["s_form"]["ID"].value;
  var check_name = document.forms["s_form"]["Student's name"].value;
  var check_course = document.forms["s_form"]["course"].value;
  var check_email = document.forms["s_form"]["Email"].value;
  var check_password = document.forms["s_form"]["password"].value;
  var check_retype_password =
    document.forms["s_form"]["Confirm password"].value;

  if (check_password != check_retype_password) {
    alert("Password doesn't match !!");
    return false;
  }

  if (check_ID == "" || check_ID == null) {
    alert("ID field empty !!");
    return false;
  }

  if (check_name == "" || check_name == null) {
    alert("Name field empty !!");
    return false;
  }

  if (check_course == "Course") {
    alert("Please select any course !!");
    return false;
  }

  if (check_email == "" || check_ID == null) {
    alert("Email field empty !!");
    return false;
  }

  if (check_password == "" || check_password == null) {
    alert("Password field Empty !!");
    return false;
  }

  if (check_retype_password == "" || check_retype_password == null) {
    alert("Confirm Password field Empty !!");
    return false;
  }

  var mail_expression_checker = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  if (mail_expression_checker.test(check_email) == false) {
    alert("Invalid Email Address");
    return false;
  }
}
