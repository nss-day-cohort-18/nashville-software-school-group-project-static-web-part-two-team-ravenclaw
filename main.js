//Product is an ARRAY with OBJECTS as the values
var product = [
	{
		title1: "Kitten Mittons for your infant kitty aged 5 months and under",
		description1: "Mittens for the baby kitty", 
		price1: "PRICE: $5.00",
		URL1: "http://www.kittenmittons.com/infants.gc",
		photo1: "images/mit1.jpg",
	},
	{
		title2: "Kitten Mittons for the 'young adult' kitten aged 5 to 12 months",
		description2: "For the young baby kitty",
		price2: "PRICE: $10.00",
		URL2: "hhttp://www.kittenmittons.com/youth.gc",
		photo2: "images/mit2.JPG",
	},
	{
		title3: "Kitten Mittonss for your Kitty age 1 to DEATH",
		description3: "Kitty Mittons for the kitten of all ages",
		price3: "PRICE: $15.00",
		URL3: "http://www.kittenmittons.com/senior.gc",
		photo3: "images/mit3.jpg",
	},
	
	{
		title4: "Siamese Kitten Mittons",
		description4: "Mittens uniquely developed for Siamese breeds",
		price4: "PRICE: $5.00",
		URL4: "http://www.kittenmittens.com/siamese.gc",
		photo4: "images/mit4.jpg",
	},
	{
		title5: "Senior Citizen Kitten Mittons",
		description5: "Mittens Designed for the Older Kitten with Mobility Problems",
		price5: "PRICE: $7.00",
		URL5: "http://www.kittenmittens.com/oldie.gc",
		photo5: "images/mit5.jpg",
	},
	{
		title6: "Athletic Teenage Kitten Mittons",
		description6: "Kitten Designed for the Athletic Teenage Kitten who Plays Sports",
		price6: "PRICE: $4.00",
		URL6: "http://www.kittenmittens.com/sporty.gc",
		photo6: "images/mit6.jpg",
	}, 
	{
		title7: "Edgy and Hip Kitten Mittons",
		description7: "For the Kitten who likes to look HIP",
		price7: "PRICE: $8.00",
		URL7: "http://www.kittenmittens.com/trendy.gc",
		photo7: "images/mit7.jpg",
	},
	{
		title8: "Hipster Mittons",
		description8: "For the East Nashville Kitten",
		price8: "PRICE: $9.00",
		URL8: "http://www.kittenmittens.com/eastnasty.gc",
		photo8: "images/mit8.jpg",
	},
	{
		title9: "Suburban Mittons",
		description9: "For the Williamson County Kitty",
		price9: "PRICE: $40.00",
		URL9: "http://www.kittenmittens.com/suburb.gc",
		photo9: "images/mit9.jpg",
	}
];

var sectionEntirety = document.getElementById("something");
var productLength = product.length;

var counter = 0;
var margin1 = 1;
var margin2 = 2;
var margin3 = 3;

function innerPushin() {
	if (product.length >= 1) {
		for (var eachObject in product) {

			//Iterating location
			var something = product[eachObject];

			//Arrays to hold each key: value pair 
			//as we cycle through products
			var myValues = [];
			var myKeys = [];
			myValues.push(Object.values(something));
			myKeys.push(Object.keys(something));

			//Creating ID's absed on key names of 
			//each array of "something" within
			//product
			var titleIdName = myKeys[0][0];
			var descriptionIdName = myKeys[0][1];
			var priceIdName = myKeys[0][2];
			var websiteIdName = myKeys[0][3];
			var photoIdName = myKeys[0][4];
			console.log(titleIdName, descriptionIdName, priceIdName, websiteIdName, photoIdName);

			//Grabbing content and assigning them 
			//to variables
			var titleContent = myValues[0][0];
			var descriptionContent = myValues[0][1];
			var priceContent = myValues[0][2];
			var websiteContent = myValues[0][3];
			var photoContent = myValues[0][4];

			//Create div to hold both description and photo
			counter += 1;
			var totalCard = document.createElement("div");
			totalCard.className = "productCards";
			totalCard.id = "productCard" + counter.toString();

			//Create description elements with 
			//appropriate classes and id's
			var head = document.createElement("h2");
			head.id = titleIdName + " doWhatIWant";
			head.className = "productCardTitle";
			var para = document.createElement("p");
			para.id = descriptionIdName + " doWhatIWant";
			para.className = "productCardDescription";
			var price = document.createElement("p");
			price.id = priceIdName + " doWhatIWant";
			price.className = "productCardPrice";
			var website = document.createElement("a");
			website.id = websiteIdName + " doWhatIWant";
			website.className = "productCardWebsite";
			website.href = websiteContent;
			website.target = "_blank";

			//Create div for photo
			var photoDiv = document.createElement("div");
			photoDiv.className = "productCardsPhoto";

			//Creating img tag to put img content into
			var img = document.createElement("IMG");
			img.id = photoIdName;

			//Giving images specific alt names 
			//based on key name.
			if (titleIdName === "title1") {
				img.alt = "Kitten Mittons Infant";
			} else if (titleIdName === "title2") {
				img.alt = "Kitten Mittons Young Adult";
			} else if (titleIdName === "title3") {
				img.alt = "Kitten Mittons Adult";
			/* } else if (titleIdName === "title4") {
				img.alt = "Fender Telecaster";
			} else if (titleIdName === "title5") {
				img.alt = "PRS Baritone";
			} else if (titleIdName === "title6") {
				img.alt = "Gretsch White Falcon"; */
			} else { 
				console.log("Something screw-y with matching alt names.");
			};

			//This function is to give each link tag within 
			//product card a custom URL
			function truncateAfter(original, pattern) {
				var patternPlace = original.indexOf(pattern);
  				var firstSection = original.substring(0, patternPlace + pattern.length); 
  				var secondSection = original.substring(patternPlace + pattern.length, original.indexOf("/", patternPlace + pattern.length));
  				return (firstSection + secondSection);
			};

			//Adding content to image
			img.src = photoContent;

			head.innerHTML += titleContent;
			para.innerHTML += descriptionContent;
			price.innerHTML += priceContent;

			//Appending ALL content appropriately
			sectionEntirety.appendChild(totalCard);
			
			// totalCard.appendChild(cardInfo);
			totalCard.appendChild(photoDiv);
			photoDiv.appendChild(img);
			totalCard.appendChild(head);
			totalCard.appendChild(para);
			totalCard.appendChild(price);
			totalCard.appendChild(website);
    	}
    }
};

innerPushin();




