$(document).ready(function () {
	
	var oaImages = [

		{srcThumb: "images/epic-01-thumb.jpg", src: "images/epic-01.jpg", w: 1024, h: 682},
		{srcThumb: "images/epic-02-thumb.jpg", src: "images/epic-02.jpg", w: 715, h: 1000},
		{srcThumb: "images/epic-03-thumb.jpg", src: "images/epic-03.jpg", w: 1024, h: 682},
		{srcThumb: "images/epic-04-thumb.jpg", src: "images/epic-04.jpg", w: 960, h: 639},
		{srcThumb: "images/epic-05-thumb.jpg", src: "images/epic-05.jpg", w: 1024, h: 588},
		{srcThumb: "images/epic-06-thumb.jpg", src: "images/epic-06.jpg", w: 960, h: 639},
		{srcThumb: "images/epic-07-thumb.jpg", src: "images/epic-07.jpg", w: 1024, h: 505},
		{srcThumb: "images/epic-08-thumb.jpg", src: "images/epic-08.jpg", w: 1024, h: 682},
		{srcThumb: "images/epic-09-thumb.jpg", src: "images/epic-09.jpg", w: 1024, h: 797},
		
		{srcThumb: "images/gallery-oh5-01.jpg", src: "images/oh5-01.jpg", w: 679, h: 960},
		{srcThumb: "images/gallery-oh5-02.jpg", src: "images/oh5-02.jpg", w: 1052, h: 744},
		{srcThumb: "images/gallery-oh5-03.jpg", src: "images/oh5-03.jpg", w: 678, h: 960},
		{srcThumb: "images/gallery-oh5-04.jpg", src: "images/oh5-04.jpg", w: 679, h: 960},
		{srcThumb: "images/gallery-oh5-05.jpg", src: "images/oh5-05.jpg", w: 1600, h: 1131},
		{srcThumb: "images/gallery-oh5-06.jpg", src: "images/oh5-06.jpg", w: 679, h: 960},
		{srcThumb: "images/gallery-oh5-07.jpg", src: "images/oh5-07.jpg", w: 679, h: 960},
		{srcThumb: "images/gallery-oh5-08.jpg", src: "images/oh5-08.jpg", w: 678, h: 960},

		{srcThumb: "images/galleryThumb1.jpg", src: "images/gallery1.jpg", w: 960, h: 638},
		{srcThumb: "images/galleryThumb2.jpg", src: "images/gallery2.jpg", w: 960, h: 638},
		{srcThumb: "images/galleryThumb3.jpg", src: "images/gallery3.jpg", w: 960, h: 553},
		{srcThumb: "images/galleryThumb4.jpg", src: "images/gallery4.jpg", w: 960, h: 790},
		
		{srcThumb: "images/galleryThumb5.jpg", src: "images/gallery5.jpg", w: 787, h: 720},
		{srcThumb: "images/galleryThumb6.jpg", src: "images/gallery6.png", w: 500, h: 500},
		{srcThumb: "images/galleryThumb7.jpg", src: "images/gallery7.jpg", w: 960, h: 960},
		{srcThumb: "images/galleryThumb8.jpg", src: "images/gallery8.jpg", w: 960, h: 960},
		
		{srcThumb: "images/galleryThumb9.jpg", src: "images/gallery9.jpg", w: 400, h: 400},
		{srcThumb: "images/galleryThumb10.jpg", src: "images/gallery10.jpg", w: 960, h: 960},
		{srcThumb: "images/galleryThumb11.jpg", src: "images/gallery11.jpg", w: 904, h: 960},
		{srcThumb: "images/galleryThumb12.jpg", src: "images/gallery12.png", w: 600, h: 600}
		
			
	];
	
	var openPhotoSwipe = function(iIndex) {
		
		var pswpElement = document.querySelectorAll('.pswp')[0];
		
		// define options (if needed)
		var options = {
				 // history & focus options are disabled on CodePen        
			history: false,
			focus: false,
			
			index: Number(iIndex),

			showAnimationDuration: 0,
			hideAnimationDuration: 0
			
		};
		
		var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, oaImages, options);
		gallery.init();
		
	};
	
	// Create gallery images
	for (var i = 0; i < oaImages.length; i++) {
		
		var sSrc = oaImages[i].srcThumb || oaImages[i].src;
		
		// Create structure
		var oDivOuter = $('<div>', {
			"class": "responsiveGallery"
		});
		
		
		var oDivInner = $('<div>', {
			"class": "gallery"
		});
		
		var oA = $('<a>', {
			"target": "_blank"
			//"href": sSrc
		});
		
		var oImg = $('<img>', {
			"src": sSrc
		});
		
		// Width and height must be set this way, not as style properties
		oImg.attr('width', "300px");
		oImg.attr('height', "200px");
		
		// Append all
		oDivOuter.append(oDivInner);
		oDivInner.append(oA);
		oA.append(oImg);
		$('#galleryHolder').append(oDivOuter);
		
		// Add event listener
		oDivOuter.attr('id', i);
		oDivOuter.click(function () {
			
			openPhotoSwipe(this.id);
			
		});
		
	}
	
});