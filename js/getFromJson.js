$(document).ready(function() {


	$.getJSON("./json/myjson.js",
        function(data) {
    	    var licenses = [],
			prices = [];
            
            for (var key in data) {
            	licenses.push(key);
            	prices.push(data[key]);	
            };

            for (var i = 0; i < licenses.length; i++) {
				$('span#'+i+'-license').text(licenses[i]);
				$('span#'+i+'-price').text(prices[i]);
				$('input.'+i+'-license').val(prices[i]);
			};

        });
	
 });