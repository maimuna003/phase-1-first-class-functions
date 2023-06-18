// const spy = function () {
//   console.log(`Hey there`);
// };

// const receivesAFunction = function () {};

// function spy(spy) {
//   console.log(`i am a ${spy}`);
// }

// receivesAFunction(spy);

const callBack = function () {
    return `Hi there`;
  };
  
  const receivesAFunction = function (callBack) {
    return callBack();
  };
  
  function returnsANamedFunction() {
    function namedFunction() {
      console.log(`Named function`);
    }
    return namedFunction;
  }
  
  function returnsAnAnonymousFunction() {
    let x = function () {
      return `An anonymous function`;
    };
    return x;
  }