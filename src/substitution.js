// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length !== 26){
      return false
    }

    for( let i = 0; i < alphabet.length; i++){
      if(alphabet.lastIndexOf(alphabet[i]) !== i){
        return false
      }
    }

    const standAlpha = "abcdefghijklmnopqrstuvwxyz"
    input = input.toLowerCase()
    let output = ""
    if(encode == true){
      for (let i of input){
        if (i == " "){
          output += " "
        } else {
          let indexVal = standAlpha.indexOf(i)
          console.log(indexVal)
          output += alphabet[indexVal]
        }
      }
    } else {
      for(let j of input){
        
        if( j == " "){
          output += " "
        } else {

        let indexVal = alphabet.indexOf(j)
        output += standAlpha[indexVal] }
      }
    }
    return output
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
