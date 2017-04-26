var total; 
var items;
//var inputAddress;
function mellowFunc(){
    document.getElementById("calzones").style.display = 'block';
    
}
function cheeseFunc(){
	document.getElementById("cheeseContent").style.display = 'block';
	cheeseCalzoneBoolean = true;

}

function addFunc(){
	var itemReady = false;
	var amount = document.getElementById("cheeseAmount").value;
	if(amount == ""){
		alert("Please input amount of item you want to order!")
	}else{
		itemReady = true;
	}
	if(itemReady == true){
		document.getElementById("checkout_btn").style.display = 'block';
		document.getElementById("add_other_item").style.display = 'block';
		
		var number = parseInt(amount);

		var request = document.getElementById("request").value;
		if(request == ""){
			request = "N/A";	
		}
		total = number*7.99;
		items = "Cheese Calzones";
		document.getElementById("total_price").innerHTML = items + " x" + amount + " subtotal: $" + total.toString();
		document.getElementById("cus_request").innerHTML = " note: " + request;
		
		sessionStorage.setItem('Name','Cheese Calzone x');
		sessionStorage.setItem('Amount',amount);
		sessionStorage.setItem('Price',total);
		sessionStorage.setItem('Request', request);
	}
}

function proceedCheckout(){
	window.location.assign("http://ptrinh2.github.io/submition.html")
}
function confirmOrderFunc(){

	var ready = false;
	var inputCredit = document.getElementById("crdit").value;
	var str, str2, str3;
	if(inputCredit == ""){
		document.getElementById("paymentReview").innerHTML = "CASH";
	}
	else if(inputCredit !== ""){
		str = "************";
		str2 = inputCredit.substring(12,16);
		document.getElementById("paymentReview").innerHTML = str + str2;
	}

	var inputAddress = document.getElementById("address").value;
	var inputCity = document.getElementById("city").value;
	var inputZip = document.getElementById("zip").value;

	if(inputAddress == ""){
		alert("Address cannot be empty!")
	}
	else if(inputCity == ""){
		alert("City cannot be empty!")
	}
	else if(inputZip == ""){
		alert("Zipcode cannot be empty!")
	}
	else if(inputAddress !=="" && inputCity !=="" && inputZip !==""){
		ready = true;
	}

	if(ready == true){
		document.getElementById("confirmBtn").style.display= 'none';
		document.getElementById("orderContent").style.display = 'none';
		document.getElementById("submitContent").style.display= 'block';

		document.getElementById("itemReview").innerHTML = sessionStorage.getItem('Name') + sessionStorage.getItem('Amount');
		document.getElementById("noteReview").innerHTML = "Note: " + sessionStorage.getItem('Request');
		document.getElementById("totalReview").innerHTML = sessionStorage.getItem('Total');

		document.getElementById("addressReview").innerHTML = inputAddress + ", " + inputCity + ", " + inputZip;
	}
}


function submitFunc(){
	
	if(confirm("Submit your order? This action cannot be undo") == true ){
		document.getElementById("submitContent").style.display = 'none';
		document.getElementById("finalPage").style.display = 'block';
	}
}

function cancelFunc(){
	if(confirm("Cancel current order and start orver?") == true){
		window.location.assign("http://ptrinh2.github.io/MellowMushroomMenu.html")
	}
}

function editFunc(){
	document.getElementById("orderContent").style.display = 'block';
	document.getElementById("confirmBtn").style.display= 'block';
	document.getElementById("submitContent").style.display= 'none';
	
}

function updateFunc(){
	var amount = document.getElementById('amountUpdate').value;
	var request = document.getElementById('noteUpdate').value;
	if(request == ""){
			request = "N/A";	
	}
	var number = parseInt(amount);
	total = number*7.99;
	sessionStorage.setItem('Amount',amount);
	sessionStorage.setItem('Price',total);
	sessionStorage.setItem('Request', request);


}

