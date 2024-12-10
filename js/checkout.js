
// Exercise 6
function validate(event) {

	event.preventDefault();

	let error = 0;
	// Get the input fields
	let fName = document.getElementById("fName");
	let fEmail = document.getElementById("fEmail");
	let fAddress = document.getElementById("fAddress");
	let fLastN = document.getElementById("fLastN");
	let fPassword = document.getElementById("fPassword");
	let fPhone = document.getElementById("fPhone");

	// Get the error elements
	let errorName = document.getElementById("errorName");
	let errorEmail = document.getElementById("errorEmail");  
	let errorAddress = document.getElementById("errorAddress");  
	let errorLastN = document.getElementById("errorLastN");  
	let errorPassword = document.getElementById("errorPassword");  
	let errorPhone = document.getElementById("errorPhone");  

	
	// Validate fields entered by the user: name, phone, password, and email
	if(fName.value == ""|| fName.value.length < 3 || !/^[A-Za-z]+$/.test(fName.value)){
		error++;
		errorName.style.display = "block";
		fName.classList.add("is-invalid");
	}else{
		errorName.style.display = "none"
		fName.classList.remove("is-invalid");
	}

	if(fEmail.value == "" || fEmail.value.length < 3 || (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(fEmail.value))){
		error++;
		errorEmail.style.display ="block"
		fEmail.classList.add("is-invalid");
	} else {
		errorEmail.style.display ="none"
		fEmail.classList.remove("is-invalid");


	}

	if(fAddress.value == "" || fAddress.value.length < 3){
		error++;
		errorAddress.style.display = "block";
		fAddress.classList.add("is-invalid");
	}else {
		fAddress.classList.remove("is-invalid");
		errorAddress.style.display = "none";
	}

	if(fLastN.value == "" || fLastN.value.length < 3 ||!/^[A-Za-z]+$/.test(fLastN.value) ){
		error++;
		errorLastN.style.display = "block"
		fLastN.classList.add("is-invalid");
	}else {
		errorLastN.style.display = "none";
		fLastN.classList.remove("is-invalid");

	}

	if(fPassword.value == "" || fPassword.value.length < 3 || !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/.test(fPassword.value) ){
		error++;
		errorPassword.style.display ="block"
		fPassword.classList.add("is-invalid");
	}else { 
		errorPassword.style.display ="none"
		fPassword.classList.remove("is-invalid");
	}

	if(fPhone.value == "" || fPhone.value.length < 3 || !/^\d+$/.test(fPhone.value)){
		error++;
		errorPhone.style.display ="block"
		fPhone.classList.add("is-invalid");
	}else { 
		errorPhone.style.display ="none"
		fPhone.classList.remove("is-invalid");
	}


	if(error === 0){
		document.getElementById("myForm").submit();
	}
}
