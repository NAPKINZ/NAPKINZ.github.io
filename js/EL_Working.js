
var Airtable = require('airtable');
var base = new Airtable({apiKey: 'YOUR_SECRET_API_TOKEN'}).base('appzkiarvtlc0udil');

function registerPerson(){
    base('Table 1').create({
        "Email": emailValue,
        "First Name": fNameValue,
        "Last Name": lNameValue,
        "Phone Number": phoneNumValue
      }, function(err, record) {
        if (err) {
          console.error(err);
          return;
        }
        console.log(record.getId());
      });
}

document.getElementById("_registration").addEventListener("click", registerPerson);

var fNameValue = document.getElementById("_fName").value;
var lNameValue = document.getElementById("_lName").value;
var phoneNumValue = document.getElementById("_phoneNum").value;
var emailValue = document.getElementById("_email").value;