const primeNumber = number => {
    let isNumberPrime;
    let result;
    isNumberPrime = true;
    if(number>1 && number <=1000) {
      for(let i = 2; i< number; i++) {
        if(number % i === 0) {                // проверка условия на четное число - а значит и на составное (четные = составные)
          isNumberPrime = false;              // 2 - это простое число = но по условию 2 % 2 - это ноль - а значит false , почему???
        } 
      }
     result = isNumberPrime? `Данное число ${number} - простое`: `Данное число ${number} - составное`;
    } else if (number>1000 || number === 0) {  // проверка на значения больше 1000 и равное 0
        result = "Данные не верны";
    }   
       console.log(result);
  }
  primeNumber(2);