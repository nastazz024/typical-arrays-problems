
exports.min = function min(array) {
  let memory = [];
  if (array && array.length !== 0) {
    for (let i = 0; i < array.length; i++) {
      if (memory.length === 0) {
        memory = array[i]
      }
      if (array[i] < memory) {
        memory = array[i]
      }
    }
    return memory
  } else {
    return 0
  }
}

exports.max = function max(array) {
  let memory = [];
  if (array && array.length !== 0) {
    for (let i = 0; i < array.length; i++) {
      if (memory.length === 0) {
        memory = array[i]
      }
      if (array[i] > memory) {
        memory = array[i]
      }
    }
    return memory
  } else {
    return 0
  }
}

exports.avg = function avg(array) {
  if (array && array.length !== 0) {
    let sum = 0
    let myAvg = 0
    array.map((item) => {
      sum = sum + item
    })
    myAvg = sum / array.length

    return myAvg
  } else {
    return 0
  }
}
