// let numbers = [76,35,73,13,4,88,23,12,86,1,54,9,10,2]
// // remember numbers could be reassigned, added to, etc.
// let newNumbersB = numbers.map((num) => {
//     return num * 3
// })
// console.log(newNumbersB)

// let parentArr = [[1,2,3,4,5], ['a','b','c'], [5,null,'x',0]]
// function arrInception(parentArr) {
//     for (let i = 0; i < parentArr.length; i++) {
//       let childArr = parentArr[i]
//       for (let j = 0; j < childArr.length; j++) {
//         console.log(`value at index ${j} in child arr (at ${i} in parent arr): ${childArr[j]}`)
//       }
//     }
//   }
//   console.time('parent time');
//   arrInception(parentArr)
//   console.timeEnd('parent time');
// let numbers = [76,35,73,13,4,88,23,12,86,1,54,9,10,2]
// function getNumbersSquared(numbers) {
//     let numbers2 = [...numbers]
  
//     let answers = []
  
//     for (let i = 0; i < numbers.length; i++) {
//       let squaredValue = numbers[i] * numbers2[i]
//       answers.push(squaredValue)
//     }
//     return answers
//   }

//   console.log(getNumbersSquared(numbers))

function countLettersRoundTwo(str) {
    // this contains a RegEx or Regular Expression, feel free to google
    str = str.toLowerCase().replace(/([^a-z])+/g,'')
    let letters = {}
    for (let i = 0; i < str.length; i++) {
      if (letters.hasOwnProperty(str[i])) {
        letters[str[i]]++
      } else {
        letters[str[i]] = 0
      }
    }
    return letters
  }

  console.log(countLettersRoundTwo('doggoasdfasdfasdfasd'))
  function countLetters(str) {
    let letters = {
      a: 0,
      b: 0,
      c: 0,
      d: 0,
      e: 0,
      f: 0,
      g: 0,
      h: 0,
      i: 0,
      j: 0,
      k: 0,
      l: 0,
      m: 0,
      n: 0,
      o: 0,
      p: 0,
      q: 0,
      r: 0,
      s: 0,
      t: 0,
      u: 0,
      v: 0,
      w: 0,
      x: 0,
      y: 0,
      z: 0,
    }
  
    str = str.toLowerCase()
    const splitStr = str.split('')
  
    splitStr.forEach(char => {
      if (letters.hasOwnProperty(char)) {
        letters[char]++
      }
    })
  
    return letters
  }
//   console.log(countLetters('dog'))
