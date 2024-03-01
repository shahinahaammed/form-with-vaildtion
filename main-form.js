function updateFullName() {
    var firstName = document.getElementById("firstName").value;
    var middleName = document.getElementById("middleName").value;
    var lastName = document.getElementById("lastName").value;
    
    // Check if names contain only alphabetic characters
    if (/^[A-Za-z]+$/.test(firstName) && /^[A-Za-z]+$/.test(middleName) && /^[A-Za-z]+$/.test(lastName)) {
        var fullName = (firstName + " " + middleName + " " + lastName).toUpperCase();
        document.getElementById("fullName").value = fullName;
    } else {
        document.getElementById("fullName").value = "Invalid names";
    }
}
function validateForm() {
    const nameInput = document.getElementById("name");
    const errorMessage = document.getElementById("error-message");
  
    if (nameInput.value.trim() === "") {
      errorMessage.textContent = "Name is required!";
      nameInput.classList.add("error");
    } else {
      errorMessage.textContent = "";
      nameInput.classList.remove("error");
      // Perform further form submission or processing
    }
}
function calculateAge() {
    const dobInput = document.getElementById('dob');
    const ageInput = document.getElementById('age');
    
    const dob = new Date(dobInput.value);
    const today = new Date();

    if (isNaN(dob)) {
        ageInput.value = 'Invalid'; // Display 'Invalid' for invalid date of birth
        return;
    }

    const age = Math.floor((today - dob) / (365.25 * 24 * 60 * 60 * 1000));

    if (age <= 0) {
        ageInput.value = 'Invalid'; // Display 'Invalid' for zero or negative age
    } else {
        ageInput.value = age;
    }
}
function validateEmail(emailField){
    var vaild = "";
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (reg.test(emailField.value) == false) 
    {
        vaild = "Invalid Email Address";
        document.getElementById("para1").textContent=vaild;
        return false;
    }
    else{
        taild1 = "";
        document.getElementById("para1").textContent=taild1;
        return true;

    }
}
function validateMobileNumber(input) {
    const mobileNumber = input.value;

    if (/^\d{10}$/.test(mobileNumber)) {
        document.getElementById("validationMessage").textContent = "Valid mobile number";
    } else {
        document.getElementById("validationMessage").textContent = "Invalid mobile number. Please enter a 10-digit number." ;
    }
}
var password = document.getElementById("password")
, confirm_password = document.getElementById("confirm_password");

function vaildatePassWord(){
    if(password.value != confirm_password.value) {
        confirm_password.setCustomValidity("passwords Don't Match");
    } else {
        confirm_password.setCustomValidity('');
    }
}

password.onchange = vaildatePassWord;
confirm_password.onkeyup = vaildatePassWord;

// function updateFullName(){
//     var firstName = document.getElementById("firstName").value;
//     var secondName = document.getElementById("middleName").value;
//     var lastName = document.getElementById("lastName").value;

//     //validtion 
//     var fullName = "";
//     var error1 = "";
//     var error2 = "";
//     var error3 = "";

//     if (firstName.length < 3 || firstName.length > 25 || !/^[a-zA-Z\s]*$/.test(firstName)) {
//         error1 = "3-25 charecters and only letters";
//     } else if (secondName.length < 3 || secondName.length > 25 ||!/^[a-zA-Z\s]*$/.test(secondName)) {
//         error2 = "3-25 charecters and only letters";
//     }else if (lastName.length < 3 || lastName.length > 25 ||!/^[a-zA-Z\s]*$/.test(lastName)) {
//         error3 = "1-25 charecters and only letters";
//     }else {
//         fullName = (firstName + "" + secondName + " "+lastName).toUpperCase();
//     }

//     fullNameField.value = fullName;
//     document.getElementById("error_message1").textContent = error1;
//     document.getElementById("error_message2").textContent = error2;
//     document.getElementById("error_maessage3").textContent = error3;
// }