// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  function generatePassword() {
    //get random integer from 0 to 120 then plus 8 so I get
    //a random number from 8 to 128
    let length = document.getElementById("passwordlength").value;
    let Uppercase_array,Lowercase_array,SpecialChar_array,Number_array;
    Uppercase_array = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    Lowercase_array = "abcdefghijklmnopqrstuvwxyz";
    SpecialChar_array = "~!@#$%^&*()_+=-`':><?/";
    Number_array = "0123456789";
    let password_array = "";
    let newpassword = "";
    let newpassword_length=0;
    if (length < 8 || length > 128)
    {
      alert("password can only be between 8 to 128");
      return;
    }
    // add uppercase letters to generate password if it is checked
    if (document.getElementById("Uppercase").checked)
    {
      password_array=password_array.concat(Uppercase_array);
    }
    // add Lowercase letters to generate password if it is checked
    if (document.getElementById("Lowercase").checked)
    {
      password_array=password_array.concat(Lowercase_array);
    }
    // add number 0-9 to generate password if it is checked
    if (document.getElementById("Number").checked)
    {
      password_array=password_array.concat(Number_array);
    }
    // add Special character to generate password if it is checked
    if (document.getElementById("SpecialChar").checked)
    {
      password_array=password_array.concat(SpecialChar_array);
    }
    // if no password attribute is checked it will alert user
    if (document.getElementById("SpecialChar").checked == false && document.getElementById("Uppercase").checked == false 
    && document.getElementById("Lowercase").checked == false && document.getElementById("Number").checked == false)
    {
      alert("need check at least one option");
      return;
    }
    // test
    // valid password input array
    // var    passwordarray = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~!@#$%^&*()_+=-`:><?/",
    
    //  n is the valid password input array length, it will fullfill from position 0
    // to the length equal the random generated password length
    for (let i = 0, n = password_array.length; i < length; ++i) {
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


