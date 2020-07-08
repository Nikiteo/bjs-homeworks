function sleep(milliseconds) {
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

function sum(...args) {
    sleep(1000);
    return args.reduce((sum, arg) => {
      return sum += +arg;
    }, 0);
  }

function compareArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    return arr1.every((e, i) => e === arr2[i])
}

function memorize(fn, limit) {
  const memory = [];
  return function(...args) {
      const oldResult = memory.find(e => compareArrays(args, e.args));
      if (oldResult !== undefined) return oldResult.result;
    
      const newResult = fn(...args);
      if (memory.length === limit) memory.shift();
      memory.push({args: args, result: newResult});
      return newResult;
  }
}

const mSum = memorize(sum, 3);
