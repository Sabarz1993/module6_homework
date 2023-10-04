function getNumber1 () {
          const a = +prompt(`Введите число А`); // я думаю это не совсем корректно так делать . через prompt 
          return function () {
            const b = +prompt (`Введите число B`); 
            const result = a + b;
            return result;
          };
        }
        const resultSumm = getNumber1();
    console.log (resultSumm());