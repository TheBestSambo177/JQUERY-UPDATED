//alert("Hello");
//Data: assume we have a list of top 5 movies - a list of JAVASCRIPT Objects
let topMovies = [{id: 0, title: "The Shawshank Redemption", year: 1994, image_url: "MEDIA/movie0.jpg"},
				 {id: 1, title: "The Godfather ", year: 1972, image_url: "MEDIA/movie1.jpg"},
				 {id: 2, title: "The Dark Knight", year: 2008, image_url: "MEDIA/movie2.jpg"},
			     {id: 3, title: "12 Angry Men", year: 1957, image_url: "MEDIA/movie3.jpg"},
			     {id: 4, title: " Schindler\'s List", year: 1993, image_url: "MEDIA/movie4.jpg"},
				];

//---------------------------------------------
//JQUERY: CSS MANIPULATION
//Link: https://www.tutorialsteacher.com/jquery/jquery-css-manipulation

//HTML Element Selector
jQuery('h1').css({
	'background-color': 'yellow',
	'text-align': 'center',
	'color': 'red',
	'padding': '1.5em'	
});

//Change all h2 color
$("h2").css('color', 'blue');
$("h2").css('margin-top', '2.0em');
//Make all h2 hidden & shown (JQUERY chaining)
$('h2').hide(200).show(200);

//Class Selector
$(".topic").css({
	'background-color': 'gray',
	'margin-top': '1.0em'
});

//ID Selector
$('#topic-text').css({
	'padding': '2.0em',
	'font-size': '1.2em'
});

//---------------------------------------------
//JQUERY: HTML EVENT METHODS
//Link: https://www.tutorialsteacher.com/jquery/jquery-event
$('#box').css({
	'width': '150px',
	'height': '150px'	,
	'background-color': 'red'
});

$('#btn1').click(function() {
	$('#box').hide(2000);
});

$('#btn2').on('click', function() {
	$('#box').show(2000);
});

$('#btn3').on('click', function() {
	$('#box').toggle(2000);
});

//---------------------------------------------
//JQUERY: EFFECTS AND ANIMATIONS
//Link: https://www.tutorialsteacher.com/jquery/jquery-animation
$('#demo-content').css({
	'width': '550px',
	'height': '150px'	,
	'background-color': 'green',
	'position': 'relative'
});

$('#btn4').on('click', function() {
	//$('#demo-content').fadeOut(2000);
	//$('#demo-content').fadeIn(2000);
	//$('#demo-content').fadeToggle(2000);
	
	//$('#demo-content').slideUp(2000);
	//$('#demo-content').slideDown(2000);
	$('#demo-content').slideToggle(2000);
});

$('#btn5').on('click', function() {
	//Move right
	$('#demo-content').animate({		
		left: 200,
		height: '300px',
		opacity: '0.5'
	});	
});

$('#btn6').click(function(){
	//Move around: right -> down -> left -> up
	$('#demo-content').animate({
		left: 200 //right
	}).animate({
		top: 200 //down
	}).animate({
		left: 0,//left
		top: 200
	}).animate({
		left: 0,//up
		top: 0
	});
});

//---------------------------------------------
//JQUERY: DOM MANIPULATION
//Link: https://www.tutorialsteacher.com/jquery/jquery-dom-manipulation
//append(), before(), after(), prepend(), remove(), replaceAll(), wrap()
$('#add-customer').on('click', function(){
	//Get entered data
	let enteredFruit = $('#new-customer').val();
	$(".error").remove();
	
	//Check if value is empty/null?
	if(enteredFruit == "" || enteredFruit == null) {
		//Create an error message below 
		$("#add-customer").after('<p class="error" style="color: red;">Please enter customer name</p>');
		return false;
	} else {
		//Add the data to the ul list
		$("#customer-list").append('<li>' + enteredFruit + '</li>');
		//Remove the error message if exist
		$(".error").remove();
		return;
	}
});

//Add "focus" event to input
$('#new-customer').on('focus', function(){
	$(this).css('background', 'pink');
});

//Add "blur" event to input
$('#new-customer').on('blur', function(){
	$(this).css('background', 'white');
});

//---------------------------------------------
//JQUERY: AJAX
let proxy = 'https://cors-anywhere.herokuapp.com/';
let url = 'http://danieldangs.com/itwd6408/json/faqs.json';

//User Jquery function "getJSON" to query this json file.
$.getJSON(
	proxy + url,//send request to this url to get Json file
	function(data){
		//Loop through all questions and extract them and
		//Display them on webpage
		$.each(data, function(i, question){//i: index, question
			//Extract question and answer
			let content =`
				<div class="col-12 col-md-6 p-2">
					<div style="background-color: #fcba03">
						<h4>${question.question}</h4>
						<p>${question.answer}</p>
					</div>
					
				</div>
				`;
				//append this question to the list
				$('#questions').append(content);
		});
	}//json file will be returned in "data"
);