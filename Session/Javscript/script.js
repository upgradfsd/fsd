function validateForm(){

    let fname = document.forms["registrationForm"]["fname"].value;
    let lname = document.forms["registrationForm"]["lname"].value;
    // alert(fname);

    let isFormValidated=true;

    if(fname===""){
        document.getElementById("fnameError").innerHTML="Please enter your first Name";
        isFormValidated=false;
    }

    if(lname===""){
        document.getElementById("lnameError").innerHTML="Please enter your last Name";
        isFormValidated=false;
    }

    return isFormValidated;
}