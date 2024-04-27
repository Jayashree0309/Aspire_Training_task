"use strict";
let firstname = document.getElementById("fname");
let lastname = document.getElementById("lname");
let Institution = document.getElementById("Institute");
let Address = document.getElementById("Address");
let mail = document.getElementById("mail");
let contact = document.getElementById("contact");
let male=document.getElementById("male");
//male.checked=true;
function submitForm() {
    let hasError = false;
    
    if(firstname.value == ''){
        console.log('FirstName should not be empty');
        document.getElementById('test').innerHTML='<p>FirstName should not be empty</p>';
        hasError=true;
        // return;
    }
    if(lastname.value == ''){
        console.log('LastName should not be empty');
        document.getElementById('test1').textContent='LastName should not be empty';
        hasError=true;
        // return;
    }
    if(Institution.value == ''){
        console.log('Institution should not be empty');
        document.getElementById('test2').textContent='Institution should not be empty';
        hasError=true;
        // return;
    }
    if(Address.value == ''){
        console.log('Address should not be empty');
        document.getElementById('test3').textContent='Address should not be empty';
        hasError=true;
        // return;
    }
    function isValidEmail(mail) {
        if(typeof mail == String) return;
        let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,}$/;
        console.log(emailRegex.test(mail));
        if(emailRegex.test(mail)){
            console.log(emailRegex.test(mail));
            document.getElementById('test4').textContent='';
    
            // return;
        }
        else{
            console.log("email")
            document.getElementById('test4').textContent='Email should be in a correct format';
            hasError=true;
            // return;
        }
    }
    isValidEmail(mail.value);
    if(contact.value == ''){
        console.log('Contact should not be empty');
        document.getElementById('test5').textContent='Contact should not be empty';
        hasError=true;
        // return;
    }

    if(hasError){
        return;
    }

    let selectedGender = document.querySelector('input[name="gender"]:checked');
    let selectedValue ="";
    if (selectedGender) {
        selectedValue = selectedGender.value;
        console.log("Selected gender: " + selectedValue);
    } else {
        console.log("No gender selected");
    }
    let values = {
        firstname:firstname.value,
        lastname:lastname.value,
        gender:selectedValue,
        institution:Institution.value,
        address:Address.value,
        Mail:mail.value,
        Contact:contact.value,

    }
    console.log(values);
}


function resetForm(){
    firstname.value="";
    lastname.value="";
    male.checked=true;
    Institution.value="";
    Address.value="";
    mail.value="";
    contact.value="";
}


const test = () => {

}

test()

let button = document.getElementById('submit-btn');
button.addEventListener('click',() => {});
