function camelCase(str) {
  let strArray = str.split('')
  wordCounter = 0
  for (let i in strArray) {
    if (strArray[i] == strArray[i].toUpperCase()) {
      wordCounter += 1
    }
  }
  return wordCounter + 1
}

console.log(camelCase("saveChangesInTheEditor"))