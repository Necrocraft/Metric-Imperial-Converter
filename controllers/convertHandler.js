/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    let result;
    let newInput = input.toLowerCase();
    if(this.getUnit(input) != null) {
      let val = this.getUnit(input).length;
    result = newInput.slice(0, newInput.length - val);
    if(/^[^a-zA-Z]*$/.test(result)) {
          result = eval(result);
        }
        else {
          return null;
        }
    
    return result === undefined ? 1 : result;
    }
    else {
      return null;
    }
  };
  
  this.getUnit = function(input) {
    let result;
    let newInput = input.toLowerCase();
    let arr = ["km", "mi", "kg", "lbs", "gal",  "l"];
    for(let i = 0; i < arr.length; i++) {
      if(newInput.endsWith(arr[i])) {
        let val = arr[i].length;
        console.log("Run 2");
        result = newInput.slice(newInput.length - val, newInput.length);
        return result;
      }
    }
    return null
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;
    if(initUnit === "kg") {
      result = "lbs";
    } else if(initUnit === "lbs") {
      result = "kg";
    } else if(initUnit === "km") {
      result = "mi";
    } else if(initUnit === "mi") {
      result = "km";
    }else if(initUnit === "gal") {
      result = "l";
    } else if(initUnit === "l") {
      result = "gal";
    } else {
      return null;
    }
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    let result;
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    const lToGal = 1 / galToL;
    const kgToLbs = 1 / lbsToKg;
    const kmToMi = 1 / miToKm;
    if(initUnit === "km"){
      result = kmToMi * initNum;
    } else if(initUnit === "mi"){
      result = miToKm * initNum;
    } else if(initUnit === "gal"){
      result = galToL * initNum;
    } else if(initUnit === "l"){
      result = lToGal * initNum;
    } else if(initUnit === "kg"){
      result = kgToLbs * initNum;
    } else if(initUnit === "lbs"){
      result = lbsToKg * initNum;
    } else {
      return null;
    }
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
