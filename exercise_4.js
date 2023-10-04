const getIntervalNumberBetweenAandB = function(a,b) { 
  let i = a;  // присвоили переменной i значение a
  const timeoutId = setInterval(function() { 
    console.log(i);
    if(i===b) { // определяем условие когда заканчивать выполнение интервала
      clearInterval(timeoutId);
    }
    i++ //  выполнение шага 
  }, 1000);
};

getIntervalNumberBetweenAandB(5,15);