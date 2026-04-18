const getTheTitles = function(array) {
  let newArray = []
  for (const obj of array) {
		newArray.push(obj.title)
  }
	return newArray;
};

// Do not edit below this line
module.exports = getTheTitles;
