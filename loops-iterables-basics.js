////------------------------------------------------------------------
// TASK 1 : Build a function that returns an array of strings with last names added:
//    If less than 6 characters, append Sampson: e.g. "Homer Sampson"
//    If 6 characters or longer, append Simpson: 'Jessica Simpson'
//------------------------------------------------------------------
var simpList = [
    "Homer",
    "OJ",
    "Marge",
    "Jessica",
    "Bart",
    "Maggie"
]

 function simpOrSamp(nameList) {
  var newLastName = []

  for (var i = 0 ; i < nameList.length ; i++){

    	if (nameList[i].length >= 6 ){
        newLastName.push(nameList[i] + " " + "Simpson")
      } else {

        newLastName.push(nameList[i] + " " + "Sampson")
      }
  }
   return newLastName
}

var modifiedNamesList = simpOrSamp(simpList)

console.assert( modifiedNamesList[1] === "OJ Sampson" )
console.assert( modifiedNamesList[2] === "Marge Sampson" )
console.assert( modifiedNamesList[5] === "Maggie Simpson" )


// //------------------------------------------------------------------
// TASK 2 : Write a function called shortiesOnly(). It should as input an array of strings, and
//    it should return a new array containing only those strings with four or fewer characters.
// //------------------------------------------------------------------

var allNames = [
    "Ed",
    "Tom",
    "Elfrid",
    "Sam",
    "Bartholomeu",
    "Wayne",
    "Theodore",
    "Ingrid",
    "Fred",
    "Yvette"
]

var shortiesOnly = function(shortArray){
  var resultsArray = []

  for (var i = 0; i < shortArray.length; i = i + 1){
    var shortList = shortArray[i]

    if( shortList.length <= 4 ){
      resultsArray.push(shortList)
    }
  }
      return resultsArray

}

var shortList = shortiesOnly(allNames)
console.assert( shortList.length === 4 )
console.assert( shortList.length <= 4 )
console.assert( shortList.indexOf('Fred') != -1 )
console.assert( shortList.indexOf('Wayne') === -1 )
