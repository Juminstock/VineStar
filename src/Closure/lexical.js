const myGlobal = 0;

function myFunction() {
    const myNumber = 1;
    console.log(myGlobal);

    function parent() { // Función interna, closure
        const inner = 2;
        console.log(myNumber, myGlobal);

        function child() { // Función interna, closure
            console.log(inner, myNumber, myGlobal);
        };

        return child();
    };

    return parent();
};

myFunction();

// Closure para sumar 2 números eventualmente introducidos

export function sumWithClosure(firstNum) {
    let a = firstNum;
    return function (secondNum) {
      let b = secondNum;
      if (!b) {
        return a;
      } else {
        return a + b;
      };
    };
  };