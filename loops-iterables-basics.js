////------------------------------------------------------------------
// TASK 1 : Build a function that returns an array of strings with last names added:
//    If less than 6 characters, append Sampson: e.g. "Homer Sampson"
//    If 6 characters or longer, append Simpson: 'Jessica Simpson'
////------------------------------------------------------------------
// var simpOrSamp = function(simpList) {
//   for (var i = 0 ; i < simpList.length ; i++){
//     	if ( simpList[i].length > 6 ){
//       var simpson = simpList[i] + " " + "Simpson";
//     // push simpson into modifiedNamesList
//       modifiedNamesList.push(simpson);
//       // name of new array.push name of what we are pushing
//     }
//     else if( simpList[i].length < 6 ){
//       var sampson = simpList[i] + " " + "Sampson";
//       modifiedNamesList.push(sampson);
//     }
//
// }
//    return modifiedNamesList;
// }
// var modifiedNamesList = []
//
// var simpList = [
//     "Homer",
//     "OJ",
//     "Marge",
//     "Jessica",
//     "Bart",
//     "Maggie"
// ]
//
// var modifiedNamesList = simpOrSamp(simpList)
// log( modifiedNamesList[1] === "OJ Sampson" )
// log( modifiedNamesList[2] === "Marge Sampson" )
// log( modifiedNamesList[5] === "Maggie Simpson" )


////------------------------------------------------------------------
// TASK 2 : Write a function called shortiesOnly(). It should as input an array of strings, and
//    it should return a new array containing only those strings with four or fewer characters.
////------------------------------------------------------------------
var shortiesOnly = function(shortList){

  for (var i = 0 ; i < allNames.length ; i++){
    if( allNames.length <= 4 ){
      var shortlist = shortiesOnly;
    }

  }
}




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

var shortList = shortiesOnly(allNames)


console.assert( shortList.length <= 4 )
checks to see that FRED is INCUDED in the array.
console.assert( shortList.indexOf('Fred') != -1 )
checks to see that WAYNE is NOT in the array.
console.assert( shortList.indexOf('Wayne') === -1 )
