function palindrome(str) {
  const regex = /[\W_]/g;
  var alphaNumeric = str.replace(regex, "").toLowerCase();
  var reversed = alphaNumeric.split('').reverse().join('');
  //console.log(alphaNumeric)
  if (reversed === alphaNumeric) {
    return true;
  } else {
    return false;
  }

}



palindrome("My age is 0, 0 si ega ym.");
