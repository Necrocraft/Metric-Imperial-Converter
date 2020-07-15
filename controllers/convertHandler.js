/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    let newInput = input.toLowerCase();
    let arr = ["km", "mi", "kg", "lbs", "gal",  "l"];
    for(let i = 0; i < arr.length; i++) {
      if(newInput.endsWith(arr[i])) {
        let val = arr[i].length;
        console.log("Run");
        var result = newInput.slice(0, newInput.length - val);
        console.log(result);
      }
    }
    
    return result;
  };
  
  this.getUnit = function(input) {
    let newInput = input.toLowerCase();
    let arr = ["km", "mi", "kg", "lbs", "gal",  "l"];
    for(let i = 0; i < arr.length; i++) {
      if(newInput.endsWith(arr[i])) {
        let val = arr[i].length;
        console.log("Run");
        var result = newInput.slice(newInput.length - val, newInput.length);
      }
    }
    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    const lToGal = 1 / galToL;
    const kgToLbs = 1 / lbsToKg;
    const kmToMi = 1 / miToKm;
    var result;
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
