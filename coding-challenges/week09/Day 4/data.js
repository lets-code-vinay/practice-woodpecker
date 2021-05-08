var importStudent = require("./student")
var importUtils = require("./utils")
var arrayData =importStudent.data
importUtils.exportTraverseObjectArray(arrayData)
console.log(arrayData)
importUtils.exportAddAgeToObjectPosition(44,2,arrayData)
console.log(arrayData)