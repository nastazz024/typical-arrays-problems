const max = (numbers) => {
  let memory = [];
  if (numbers && numbers.length !== 0) {
      for (let i = 0; i < numbers.length; i++) {
          if (memory.length === 0) {
              memory = numbers[i]
          }
          if (numbers[i] > memory) {
              memory = numbers[i]
          }
      }
      return memory
  } else {
      return 0
  }

}

const min = (numbers) => {
  let memory = [];
  if (numbers && numbers.length !== 0) {
      for (let i = 0; i < numbers.length; i++) {
          if (memory.length === 0) {
              memory = numbers[i]
          }
          if (numbers[i] < memory) {
              memory = numbers[i]
          }
      }
      return memory
  } else {
      return 0
  }
}

const avg = (numbers) => {
  if (numbers && numbers.length !== 0) {
      let sum = 0
      let myAvg = 0
      numbers.map((item) => {
          sum = sum + item
      })
      myAvg = sum / numbers.length

      return myAvg
  } else {
      return 0
  }
}
