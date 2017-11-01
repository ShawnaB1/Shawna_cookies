
$(document).ready(function(){
//create sugar cookie on button click
	$('#sugarButton').click(function(){
		var sugarCount = Cookies.get('sugarCount');
		if(sugarCount === undefined){
			sugarCount = 0;
		}
		var sugarCountNumber = parseInt(sugarCount);
		Cookies.set('sugarCount', (sugarCountNumber + 1) );
		//store sugar cookie
	});
	//create chocolate cookie on button click
	$('#chocolateButton').click(function(){
		var chocolateCount = Cookies.get('chocolateCount');
		if(chocolateCount === undefined){
			chocolateCount = 0;
		}
		var chocolateCountNumber = parseInt(chocolateCount);
		Cookies.set('chocolateCount', (chocolateCountNumber + 1) );
		//store chocolate cookie
	});
	//create lemon cookie on button click
	$('#lemonButton').click(function(){
		var lemonCount = Cookies.get('lemonCount');
		if(lemonCount === undefined){
			lemonCount = 0;
		}
		var lemonCountNumber = parseInt(lemonCount);
		Cookies.set('lemonCount', (lemonCountNumber + 1) );
		//store lemon cookie
	});
//function that returns number of cookies
	function getCookieCount(name){
		var cookieCount = Cookies.get(name);
		if(cookieCount === undefined){
			cookieCount = 0;
		}
		return parseInt(cookieCount);
	}

	var totalCookies = getCookieCount('sugarCount') + getCookieCount('chocolateCount') + getCookieCount('lemonCount');
	console.log("You've eten " + totalCookies + " cookies today");
	$('#totalCookies').append("You've eten " + totalCookies + " cookies today");
});

// //create sugar cookie on button click
// $(document).ready(function(){
// 	$('#chocolateButton').click(function(){
// 	cookies.set('chocolateCount', '1');
// 	}
// 	});

// var chocolateCount = Cookies.get('chocolateCount');
// //store chocolate cookie
// }


