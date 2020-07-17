/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  var convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res){
      var input = req.query.input;
      var initNum = convertHandler.getNum(input);
      var initUnit = convertHandler.getUnit(input);
      var returnNum = convertHandler.convert(initNum, initUnit);
      var returnUnit = convertHandler.getReturnUnit(initUnit);
      var toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
    
      let result;
    
      if(initUnit === null && initNum === null) {
        res.json({
          error: "invalid unit and number"
        })
      } else if(initUnit === null) {
         res.json({
          error: "invalid unit"
        })
      } else if(initNum === null) {
         res.json({
          error: "invalid num"
        })
      } else {
        result = {
          initUnit,
          initNum,
          returnUnit,
          returnNum,
          toString
        }
      }
    
      console.log(result);
    
      res.json(result);
    });
    
};
