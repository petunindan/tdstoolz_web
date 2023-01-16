
// Function for calculating tds number
const tdsnum = () => {
	// getting input
	let tdsnum_in = document.querySelector("#tdsnum_in").value;
	let tdsnum_out = document.querySelector("#tdsnum_out").value;
	let tdsprefix = "ТДС.ХХХХ.ХХХ-";
	let result = "";

	// tds number condition
	if (tdsnum_in == 1) {
		result = "01";
	} else if (tdsnum_in == 2) {
		result = "02";
	} else if (tdsnum_in >= 3 && tdsnum_in < 5) {
      result = "03";
	} else if (tdsnum_in >= 5 && tdsnum_in < 7) {
      result = "04";
	} else if (tdsnum_in >= 6 && tdsnum_in < 11) {
      result = "05";
	} else if (tdsnum_in >= 10 && tdsnum_in < 17) {
      result = "06";
	} else if (tdsnum_in >= 17 && tdsnum_in < 21) {
      result = "07";
	} else if (tdsnum_in >= 21 && tdsnum_in < 26) {
      result = "08";
	} else if (tdsnum_in >= 26 && tdsnum_in < 33) {
      result = "09";
	} else if (tdsnum_in >= 33 && tdsnum_in < 41) {
      result = "10";
	} else if (tdsnum_in >= 41 && tdsnum_in < 64) {
      result = "11";
	} else if (tdsnum_in >= 65 && tdsnum_in < 81) {
      result = "12";
	} else if (tdsnum_in >= 81 && tdsnum_in < 101) {
      result = "13";
	} else if (tdsnum_in >= 101 && tdsnum_in < 126) {
      result = "14";
	} else if (tdsnum_in >= 126 && tdsnum_in < 161) {
      result = "15";
	} else if (tdsnum_in > 161) {
      result = "??";
	}
	  
   // checking the values are empty
   if(isNaN(tdsnum_in) || tdsnum_in == ""){ document.querySelector("#tdsnum_in").value = "Пожалуйста, укажите А";
	} else {
		{ document.querySelector("#tdsnum_out").value = tdsprefix + result;
		}
	}
};