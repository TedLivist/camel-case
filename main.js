function camelCase(str) {
  strArray = str.split('')
  wordCounter = 0
  for (let i in strArray) {
    if (strArray[i] == strArray[i].toUpperCase()) {
      wordCounter += 1
    }
  }
  console.log(wordCounter)
}

camelCase("saveChangesInTheEditor")