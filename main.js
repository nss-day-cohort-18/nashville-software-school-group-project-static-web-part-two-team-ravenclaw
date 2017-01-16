// The team's product page will be driven from JavaScript code. Decide on the names of, at least, 8 products that your business manufactures. The product page must have a linked JavaScript file.

// Create an array to hold your products.
// Each item in the array must be an object that contains the following information: name, description, price, and URL for product image. You can add more properties if that's what the team wants, but it must have those.
// The team will use JavaScript to add each product to the DOM.
// Each product must be a card, much like everyone made in the Static Web quiz. As a team, decide on the style of the card.
// The layout of the product page should be a grid of cards. 3-wide, 4-wide, 5-wide, the teams must decide how many cards are on each row.
/*======================================*/




//Product is an ARRAY with OBJECTS as the values
var product = [
	{
		title1: "Kitten Mittons for your infant kitty aged 5 months and under",
		description1: "Lorem ipsum dolor sit amet, quis morbi, habitasse pellentesque. Mi eget, diam ac nec, consequat posuere. Curabitur wisi, elit vestibulum. Suspendisse magnam donec, ut dictum vitae, pellentesque ultrices. Sodales nisl, porttitor pellentesque massa. Cras nunc.", 
		price1: "PRICE: $5.00",
		URL1: "http://www.kittenmittons.com/infants.gc",
		photo1: "images/mit1.jpg",
	},
	{
		title2: "Kitten Mittons for the 'young adult' kitten aged 5 to 12 months",
		description2: "Lorem ipsum dolor sit amet, dolorem vel malesuada. Mauris etiam pretium, at ut, nisl rhoncus. Dolor et, tincidunt commodi. Vestibulum vehicula nulla. Amet velit. Sed tristique, ac massa.",
		price2: "PRICE: $10.00",
		URL2: "hhttp://www.kittenmittons.com/youth.gc",
		photo2: "images/mit2.JPG",
	},
	{
		title3: "Kitten Mittonss for your Kitty age 1 to DEATH",
		description3: "Lorem ipsum dolor sit amet, pellentesque rhoncus. Congue donec eget. Phasellus hac, justo vestibulum, vestibulum praesent lectus. A tellus risus, montes vitae. Quis tortor, pretium non, feugiat enim. Suspendisse placerat leo.",
		price3: "PRICE: $15.00",
		URL3: "http://www.kittenmittons.com/senior.gc",
		photo3: "images/mit3.jpg",
	},
	/* {
		title4: "Fender Limited Edition American Standard Telecaster",
		description4: "Thi",
		price4: "PRICE: $1449.99",
		URL4: "http://www.guitarcenter.com/Fender/Limited-Edition-American-Standard-Telecaster-Rosewood-Neck-Electric-Guitar.gc",
		photo4: "images/fenderTele.png",
	},
	{
		title5: "PRS 2017 SE 277 Baritone Electric Guitar",
		description5: "Built with a .",
		price5: "PRICE: $749.00",
		URL5: "http://www.guitarcenter.com/PRS/2017-SE-277-Baritone-Electric-Guitar.gc",
		photo5: "images/prs.png",
	},
	{
		title6: "Gretsch Guitars G6136T White Falcon with Bigsby",
		description6: "Luxurious .",
		price6: "PRICE: $3499.00",
		URL6: "http://www.guitarcenter.com/Gretsch-Guitars/G6136T-White-Falcon-with-Bigsby.gc",
		photo6: "images/gretsch.png",
	}, */
];


//Grabbing the div that will be wrapping the 
//product cards
var sectionEntirety = document.getElementById("something");

var productLength = product.length;



/*---
The purpose of this function:
1. Cycle through each object or product
2. Grab both key and value pairs to 
	push to DOM and use for id naming
3.Assign id names for each element created, and class
	name for the product cards in general
4. Create div to hold the contents of productcard
5. Create header for each card
6. Create paragraph for description, price, and url
7. Update content to appropriate elements
8. Append elements appropriately
---*/
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


			/*========================================*/
			/*========================================*/


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


			/*========================================*/
			/*========================================*/


			//Create div to hold both description and photo
			counter += 1;
			var totalCard = document.createElement("div");
			totalCard.className = "productCards";
			totalCard.id = "productCard" + counter.toString();


			//This is giving each product card a 
			//specific class name based on location of the page
			//so all margin's in between are the same
			/* if ((productLength - 2) === counter) {
				totalCard.className += " slight-margin4";
				margin1 += 3;
			} else if ((productLength - 1) === counter) {
				totalCard.className += " slight-margin5";
				margin2 += 3;
			} else if (productLength === counter) {
				totalCard.className += " slight-margin6";
				margin3 += 3;
			} else if (counter === 1) {
				totalCard.className += " slight-margin1";
				margin1 += 3;
			} else if (counter === 2) {
				totalCard.className += " slight-margin2";
				margin2 += 3;
			} else if (counter === 3) {
				totalCard.className += " slight-margin3";
				margin3 += 3;
			} else if (counter === margin1) {
				totalCard.className += " slight-margin7";
				margin1 += 3;
			} else if (counter === margin3) {
				totalCard.className += " slight-margin8";
				margin3 += 1;
			} else {
				totalCard.className += " regular-margin";
			}; */
			


			/*========================================*/
			/*========================================*/


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


			/*========================================*/
			/*========================================*/


			//Create div for photo
			var photoDiv = document.createElement("div");
			photoDiv.className = "productCardsPhoto";

			//Creating img tag to put img content into
			var img = document.createElement("IMG");
			img.id = photoIdName;

			//Giving images specific alt names 
			//based on key name.
			/* if (titleIdName === "title1") {
				img.alt = "Gibson Hummingbird";
			} else if (titleIdName === "title2") {
				img.alt = "Martin D-28";
			} else if (titleIdName === "title3") {
				img.alt = "Larivee";
			} else if (titleIdName === "title4") {
				img.alt = "Fender Telecaster";
			} else if (titleIdName === "title5") {
				img.alt = "PRS Baritone";
			} else if (titleIdName === "title6") {
				img.alt = "Gretsch White Falcon";
			} else { 
				console.log("Something screw-y with matching alt names.");
			}; */


			/*========================================*/
			/*========================================*/
			

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
			/* website.innerHTML += truncateAfter(websiteContent, "com/"); */



			/*========================================*/
			/*========================================*/


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


//Call'd
innerPushin();




