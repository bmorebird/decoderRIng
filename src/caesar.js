// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    if(!shift || shift === 0 || shift > 25 || shift < -25){
      return false
    }
    if(encode === false){
      shift = -shift
    }
   let output = ""
   input = input.toLowerCase()
    
    for(let i of input){
      let convertedToNumbers = i.charCodeAt()
      if (convertedToNumbers >= 97 && convertedToNumbers <=122){
        convertedToNumbers += shift
        if (convertedToNumbers > 122){ 
        convertedToNumbers -= 26
      } else if(convertedToNumbers < 97){
        convertedToNumbers += 26
      }
     
     } 
      output += String.fromCharCode(convertedToNumbers)
    }
   return output 
 
}

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
