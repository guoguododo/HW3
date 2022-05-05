// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  function generatePassword() {
    //get random integer from 0 to 120 then plus 8 so I get
    //a random number from 8 to 128
    var length = document.getElementById("passwordlength").value;
    var Uppercase_array,Lowercase_array,SpecialChar_array,Number_array;
    Uppercase_array = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    Lowercase_array = "abcdefghijklmnopqrstuvwxyz";
    SpecialChar_array = "~!@#$%^&*()_+=-`:><?/";
    Number_array = "0123456789";
    var password_array = "";
    if (document.getElementById("Uppercase").checked)
    {
      password_array=password_array.concat(Uppercase_array);
      
    }
    if (document.getElementById("Lowercase").checked)
    {
      password_array=password_array.concat(Lowercase_array);
    }
    if (document.getElementById("Number").checked)
    {
      password_array=password_array.concat(Number_array);
    }
    if (document.getElementById("SpecialChar").checked)
    {
      password_array=password_array.concat(SpecialChar_array);
    }
    // valid password input array
    // var    passwordarray = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~!@#$%^&*()_+=-`:><?/",
      var newpassword = "";
    //  n is the valid password input array length, it will fullfill from position 0
    // to the length equal the random generated password length
    for (var i = 0, n = password_array.length; i < length; ++i) {
    // newpassword will fill a random character in the 'passwordarray' array, for
    // each position in the newpassword, untill it full it's length
      newpassword += password_array.charAt(Math.floor(Math.random() * n));
    }
    return newpassword;
}
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
