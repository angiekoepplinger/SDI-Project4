
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
			if(str1.length === 3 && str2.length === 3 && str3.length === 4){
				return true;
			} else {
				return false;
			};
		} else {
			return false;
		};
	};

	var titleCase = function (string) {
		var words = string.split(" ");							//splits the phrase into an array called "words"	
		var combine = "";										//creates a variable to hold the concatinated capitalized words
		for (var i=0; i < words.length; i++) {					
			var upperCase = words[i].replace(words[i].charAt(0),words[i].charAt(0).toUpperCase()); 
 			combine = combine.concat(upperCase + " ");
		};
		return combine;
	};

	var checkEmail = function (email) {
		var atStart = email.indexOf("@");
		var periodStart = email.lastIndexOf(".");
		if ((atStart > 0) && (periodStart > 2) && (atStart < periodStart) && ((email.length - 1) - periodStart > 1) && 
			((email.length - 1) - periodStart < 4) && (atStart === (email.lastIndexOf("@")))) {
			return true;
		} else {
			return false;
		};
	};	

	return {
		"checkPhone"   : checkPhone,
		"titleCase"    : titleCase,
		"checkEmail"   : checkEmail,
	};
};		

var mathLibrary = function () {

	var checkPercent = function (number1, number2, range) {
		if ((number1 < number2 - ((range/100)*number2)) || (number1 > number2 + ((range/100)*number2))) {
			return false;
		} else {
			return true;
		};
	};

	var formatNumber = function (dollars) {
		var number = parseFloat(dollars.toFixed(2));
		return number;
	};
 	
 	var stringToNum = function (string) {
 		var number = parseFloat("42.2")
 		return number


 	};

 	return {
		"checkPercent" : checkPercent,
		"formatNumber" : formatNumber,
		"stringToNum"  : stringToNum
	};


};

	


	
	

// //----------------


//checkPhone Call
var phoneNumber = "123-456-7890";
var checkStrings = stringLibrary();
var phoneCheckResult = checkStrings.checkPhone(phoneNumber);
console.log("phoneCheck Result: " + phoneCheckResult);

// //titleCase Call
var phrase = "The cow jumped over the moon"
console.log("titleCase Result: " + checkStrings.titleCase(phrase));

//checkEmail Call
var emailAddress = "a@k.co@";
var checkStrings = stringLibrary();
var emailCheckResult = checkStrings.checkEmail(emailAddress);
console.log("emailCheck Result: " + emailCheckResult);

//checkPercent Call
var no1 = 90
var no2 = 100
var percent = 10
var checkMath = mathLibrary();
var checkPercentResult = checkMath.checkPercent(no1, no2, percent);
console.log("checkPercent Result: " + checkPercentResult);

//formatNumber
var money = 5.827
var checkMath = mathLibrary();
var formatNumberResult = checkMath.formatNumber(money);
console.log(formatNumberResult);

//stringToNumber
var stringNum= "42"
var checkMath = mathLibrary();
var stringToNumResult = checkMath.stringToNum("42");
console.log(stringToNumResult);









