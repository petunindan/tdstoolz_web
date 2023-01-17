
// Function for calculating tds number
const kwtcalc = () => {
	// getting input
	let kwt_in_pn = document.querySelector("#kwt_in_pn").value;
	let kwt_in_un = document.querySelector("#kwt_in_un").value;
	let kwt_in_eta = document.querySelector("#kwt_in_eta").value;
	let kwt_in_cosf = document.querySelector("#kwt_in_cosf").value;
	let kwt_out = document.querySelector("#kwt_out").value;
	let kwtsuffix = " кВт";
	let result = "";

	// kwt formula
	let etathree = (kwt_in_eta * 3);
	let sqrt_eta  = (Math.sqrt(etathree));
	let kwt = (1000 * kwt_in_pn / (kwt_in_un * kwt_in_cosf * sqrt_eta));
	  
   // checking the values are empty
   if(isNaN(kwt_in_pn) || kwt_in_pn == ""){ document.querySelector("#kwt_out").value = "Пожалуйста, укажите Рн";
	} else if (isNaN(kwt_in_un) || kwt_in_un == "") {
      document.querySelector("#kwt_out").value = "Пожалуйста, укажите Uн";
	} else if (isNaN(kwt_in_eta) || kwt_in_eta == "") {
      document.querySelector("#kwt_out").value = "Пожалуйста, укажите η";
	} else if (isNaN(kwt_in_cosf) || kwt_in_cosf == "") {
      document.querySelector("#kwt_out").value = "Пожалуйста, укажите cosφ";
	} else {
		{ document.querySelector("#kwt_out").value = kwt + kwtsuffix;
		}
	}
};