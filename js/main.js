$(document).ready(function () {
	
	var DROP_DOWN_DURATION = 200;
	
	var oaNavBarProps = [
		{id:"home", sText:"HOME"},
		{id:"bio", sText:"BIO"},
		{id:"news", sText:"NEWS"},
		{id:"music", sText:"MUSIC"},
		{id:"video", sText:"VIDEOS"},
		{id:"photos", sText:"PHOTOS"},
		{id:"media", sText:"MEDIA"},
		{id:"contact", sText:"CONTACT"},
		{id:"hamburger", sText:"&#9776", bBarOnly:true}
	];
	
	var oNavDropDownHolder = null;
	
	var oaSocialMediaFooterProps = [
		{sLink:"https://www.facebook.com/hyperfox/", sClass:"hvr-float fa fa-facebook"},
		{sLink:"https://twitter.com/HyperFoxBand", sClass:"hvr-float fa fa-twitter"},
		{sLink:"https://open.spotify.com/artist/6lPfUJHTQcLx2DlZlWYmJG", sClass:"hvr-float fa fa-spotify"},
		{sLink:"https://www.instagram.com/hyperfoxband/", sClass:"hvr-float fa fa-instagram"},
		{sLink:"https://www.youtube.com/channel/UCkMHRpzBSOlFkri3IeDCERg", sClass:"hvr-float fa fa-youtube"}
	];
	
	init();
	
	function init() {
		
		populateNavBar();
		populateFooter();
		
		// Nav bar title - Home click event
		$('#navBarTitle').click(function () {
			window.location.href = "home.html";
		});
		
		// Fade in contents
		$('#content').addClass('fadeInCSS');
		
	}
	
	function populateNavBar() {
		
		// Create list
		var ul = $('<ul>', {
			"id": "mainNavList"
		});
		
		// Create nav bar list items
		for (var i = 0; i < oaNavBarProps.length; i++) {
			
			var id = oaNavBarProps[i].id,
				sText = oaNavBarProps[i].sText;
			
			// List item
			var li = $('<li>', {
				"id": id,
				"class": 'hvr-underline-from-center'
			});
			
			// Hamburger exception
			if (id === "hamburger") {
				li.addClass('icon');
			}
			
			// Create item as link
			var a = $('<a>' + sText + '</a>');
			
			// Append all
			ul.append(li);
			li.append(a);
			
			// Add click event to list item
			li.click(function () {
			
				if (this.id === "hamburger") {
					
					if (oNavDropDownHolder) {
						killNavDropDown();
					} else {
						createNavDropDown();
					}				
					
				} else {
					
					window.location.href = this.id + ".html";
					
				}
			
			});
			
		}
		
		// Render list to holder
		$('#navBar').append(ul);
			
			
	}
	
	function createNavDropDown() {
		
		if (!oNavDropDownHolder) {
			
			// Create list
			var ul = $('<ul>', {
				"id": "navDropDown"
			});
			
			// Create nav bar list items
			for (var i = 0; i < oaNavBarProps.length; i++) {
				
				var id = oaNavBarProps[i].id,
					sText = oaNavBarProps[i].sText,
					bBarOnly = oaNavBarProps[i].bBarOnly || false;
					
				if (!bBarOnly) {
					
					// List item
					var li = $('<li>', {
						"id": id,
						"class": 'hvr-fade'
					});
					
					// Create item as link
					var a = $('<a>' + sText + '</a>');
					
					// Append all
					ul.append(li);
					li.append(a);
					
					// Add click event to list item
					li.click(function () {
						
						window.location.href = this.id + ".html";
					
					});
					
				}
		
			}
			
			// Create overlay
			var oOverlay = $('<div id="dropDownOverlay"></div>');
			oOverlay.click(function () {
						
				killNavDropDown();
			
			});
			
			// Append
			oNavDropDownHolder = $('<div id="dropDownHolder"></div>');
			oNavDropDownHolder.append(oOverlay);
			oNavDropDownHolder.append(ul);
			
			// Render list to holder
			oNavDropDownHolder.css('z-index', '-1');
			$(document.body).append(oNavDropDownHolder);
		
			// Animate in
			ul.css({'opacity': '0',	'top': '-100px'});
			ul.animate({'opacity': '1', 'top': '0'}, DROP_DOWN_DURATION);
			oOverlay.fadeIn(DROP_DOWN_DURATION);
			
		}
		
	}
	
	function killNavDropDown() {
		if (oNavDropDownHolder) {
			
			// Animate out
			var ul = $('#navDropDown');
			ul.css({'opacity': '1',	'top': '0'});
			$('#dropDownOverlay').fadeOut(DROP_DOWN_DURATION);
			ul.animate({'opacity': '0', 'top': '-100px'}, DROP_DOWN_DURATION, function () {
			
				// Kill display object
				$('#dropDownHolder').remove();
				oNavDropDownHolder = null;
				
			});
		}
	}

	function populateFooter() {
		
		// Create list
		var ul = $('<ul>', {
			"id": "socialMediaLinks"
		});
		
		// Create nav bar list items
		for (var i = 0; i < oaSocialMediaFooterProps.length; i++) {
			
			var sLink = oaSocialMediaFooterProps[i].sLink,
				sClass = oaSocialMediaFooterProps[i].sClass;
			
			// List item
			var li = $('<li>');
			
			// Create item as link
			var a = $('<a>', {
				"href": sLink,
				"class": sClass
			});
			
			// Append all
			ul.append(li);
			li.append(a);
			
		}
		
		// Render list to holder
		$('footer').append(ul);
			
			
	}
	
	
		
	
});