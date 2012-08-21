
var stringLibrary = function () {
	var checkPhone = function (string) {
		
		//To get 123 digits
		var end = string.indexOf("-");  				//define ending position, starts at 0
		var str1 = string.substring(0,end);							
		
		//To get 456 digits
		var start = string.indexOf("-")+1;				//define starting position
		var end = string.lastIndexOf("-");				//define ending position
		var str2 = string.substring(start,end)

		//To get last 4 digits, 7890:
		var start = string.lastIndexOf("-")+1;  		//define starting position
		var end = string.length;						//define ending position
		var str3 = string.substring(start, end);

		console.log(str1 + " " + str2 + " " + str3);

		if (!isNaN(str1) && !isNaN(str2) && !isNaN(str3)) {  //if str1,2,3 is not Not a Number(is a number)=true
			return true;
		} else {
			return false;
		};
	}; 
	return {
		"checkPhone" : checkPhone
	};
};

var phoneNumber = "123-456-7890";
var checkStrings = stringLibrary();
var phoneCheckResult = checkStrings.checkPhone(phoneNumber);
console.log(phoneCheckResult);



// //---------------

// 	var checkEmail = function (string) {
// 	if ()
// }



//----------------

var titleCase = function (string) {
	var words = string.split(" ");							//splits the phrase into an array
	console.log(words);	
	var result = "";									//console logs the array
	for (var i=0; i < words.length; i++) {					//loop through the array of words
		var firstLetter = words[i].charAt(0);				//identify first letter of each word
		var capital = firstLetter.toUpperCase();			//capitalize first letter at words[i], character 0
		var upperCase = words[i].replace(firstLetter,capital);	//replace firstletter with capitalized version
		console.log(upperCase);
 		result = result.concat(upperCase + " ");
	};
	return result;
};

var phrase = "The cow jumped over the moon"
console.log(titleCase(phrase));


//checkPhone Call
