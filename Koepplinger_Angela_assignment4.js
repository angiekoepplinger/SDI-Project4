//String Class
var stringLibrary = function () {
 	
	var checkPhone = function (string) {
		var str1 = string.substring(0,string.indexOf("-"));								//1st 3 numbers
		var str2 = string.substring(string.indexOf("-")+1,string.lastIndexOf("-"))		//Middle 3 numbers
		var str3 = string.substring(string.lastIndexOf("-")+1, string.length);			//Last 4 numbers
		
		if (!isNaN(str1) && !isNaN(str2) && !isNaN(str3)) {  						//if str1,2,3 is not Not a Number(is a number)=true
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

	var separatorChange = function (str1, newChar) {		
 		var newstr = str1.replace(/\W/g,newChar);
 		return newstr;
 	};

	return {
		"checkPhone"      : checkPhone,
		"checkEmail"      : checkEmail,
		"titleCase"       : titleCase,
		"separatorChange" : separatorChange
	};
};		

//Math Class
var mathLibrary = function () {

	var formatDecimal = function (dollars) {
		var number = parseFloat(dollars.toFixed(2));
		return number;
	};

	var fuzzyMatch = function (number1, number2, range) {
		if ((number1 < number2 - ((range/100)*number2)) || (number1 > number2 + ((range/100)*number2))) {
			return false;
		} else {
			return true;
		};
	};
 	
 	var stringToNum = function (string) {
 		var number = parseFloat("42.2")
 		return number;
 	};

 	var compareDates =  function (d1, d2) {
 		var output =[];
 		var hrs  = 1000*60*60;
 		var days = 1000*60*60*24;
 		output[0] = (((d2.getTime() - d1.getTime())/days));
 		output[1] = (((d2.getTime() - d1.getTime())/hrs));
 		return output;
 	};

 	return {
		"formatDecimal" : formatDecimal,
		"fuzzyMatch"    : fuzzyMatch,
		"stringToNum"   : stringToNum,
		"compareDates"  : compareDates
	};
};	

//Array Class
var arrayLibrary =  function () {

	var smallestValue = function (arr, num) {
		var initialSort = arr.sort(function(a,b) {return a-b});
		if ((num < initialSort[0]) || (num > initialSort[initialSort.length])) {
			return null;
		} else {
			arr.push(num);
			var sortArray = arr.sort(function(a,b) {return a-b});
			var index = arr.lastIndexOf(num)+1;
			var result = sortArray[index];
			console.log(sortArray);
			return result;
		};
	};	

var arrayValue = function (array) {
	var result = [];
	for (var i = 0; i < array.length; i++) {
		if (!isNaN(array[i])) {
			if (array[i]/1 === array[i]) {
			result.push(array[i]/1);
			};
		};
	};	
	var sum = eval(result.join('+'));
	return sum;
	};

	return {
		"smallestValue" : smallestValue,
		"arrayValue"    : arrayValue
	};
};	



//Global Variables
var checkStrings = stringLibrary();
var checkMath    = mathLibrary();	
var checkArray   = arrayLibrary();

//STRING CALLS::
//checkPhone
var phoneNumber = "123-456-7890";
var phoneCheckResult = checkStrings.checkPhone(phoneNumber);
console.log("phoneCheck Result: " + phoneCheckResult);

//checkEmail
var emailAddress = "a@k.co@";
var emailCheckResult = checkStrings.checkEmail(emailAddress);
console.log("emailCheck Result: " + emailCheckResult);

//titleCase Call
var phrase = "The cow jumped over the moon"
console.log("titleCase Result: " + checkStrings.titleCase(phrase));

//separatorCheck 
var string1 = "a,b,c";
var separatorChangeResult = checkStrings.separatorChange(string1,"/");
console.log(separatorChangeResult);


// NUMBER CALLS::
//formatDecimal
var money = 5.827
var formatDecimalResult = checkMath.formatDecimal(5.8);
console.log(formatDecimalResult);

//fuzzyMatch Call
var no1 = 90
var no2 = 100
var percent = 10
var fuzzyMatchResult = checkMath.fuzzyMatch(no1, no2, percent);
console.log("fuzzyMatch Result: " + fuzzyMatchResult);

//compareDates
var date1 = new Date(2012,8,23);
var date2 = new Date(2013,2,19);
var compareDatesResult = checkMath.compareDates(date1, date2);
console.log(compareDatesResult[0] + " days, or " + compareDatesResult[1] + " hrs");

//stringToNumber
var stringToNumResult = checkMath.stringToNum("42");
console.log(stringToNumResult);


//ARRAY CALLS
//smallestValue
var array  = [10,50,30,60,40];
var number = 30;
var smallestValueResult = checkArray.smallestValue(array, number);
console.log(smallestValueResult);

//arrayValue
var comboArray = [9,"16","elephant",42,"Mike",17,"yellow",86];
var arrayValueResult = checkArray.arrayValue(comboArray);
console.log(arrayValueResult);








