let divide = function(number1, number2){

    if(number1 == 0 || number2 == 0){
      return "No se puede dividir por cero"
    }
  
    return number1/number2
  }
  
  module.exports = divide