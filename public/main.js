
var img_names = ["http://www.osa-opn.org/opn/media/Images/AfterImages/02feb_12.jpg?width=630&height=522&ext=.jpg", "http://www.photographymad.com/files/images/rule-of-thirds-vertical.jpg", "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ9fSvUVvINMgiuFKK9rP5AHETr28FHAuMR8Yha_BfhfYwYwu1KCw", "http://www.apnphotographyschool.com/wp-content/uploads/2011/10/vertical-panorama.jpg", "http://www.thinkstockphotos.com/CMS/StaticContent/Hero/TS_AnonHP_462882495_01.jpg", "http://www.gettyimages.com/gi-resources/images/CreativeImages/Hero-527920799.jpg", "http://www.menucool.com/slider/prod/image-slider-2.jpg", "http://www.freelargeimages.com/wp-content/uploads/2014/12/Landscape_01.jpg", "http://www.thinkstockphotos.com/CMS/StaticContent/Hero/TS_AnonHP_462882495_01.jpg", "http://www.gettyimages.com/gi-resources/images/CreativeImages/Hero-527920799.jpg", "http://www.menucool.com/slider/prod/image-slider-2.jpg", "http://www.freelargeimages.com/wp-content/uploads/2014/12/Landscape_01.jpg"];
/*
content.selectAll("div")
	.data(img_names)
	.enter()
	.append("img")
	.attr("src", function(d, i) {
		return d;
	})
	.attr("class", "col-md-3")
	.attr("class", "col-sm-4")
	.attr("class", "col-xs-6")
	.attr("class", "image")
	.on("click", "changeImage('')")
*/
$(document).ready(function() {
	var content = d3.select("#photo_section")
	var divs = content.selectAll("div")
		.data(img_names)
		.enter()
		.append("div")
		.attr("class", "col-md-3 col-sm-4 col-xs-6")
	;
	var anchors = divs.append("a")
		.attr("href", "")
	;
	anchors.append("img")
		.attr("src", function(d, i) {
			return d;
		})
		.attr("class", "image")
		.on("click", "changeImage(src)")
	;

	$("a").click(function(event) {
		event.preventDefault();
	})

	var cw = $('.image').width();
	$('.image').css({

		'height': cw + 'px'
			// clip: rect(0px,cw + 'px',cw + 'px',0px);
	});

	function changeImage(a) {
		console.log("herp")
		if (a==""){
			$('#photo_section').fadeTo("medium", 1);
		}
		else{
			$('#photo_section').fadeTo("medium", .2);
			$('#title_header').fadeTo("medium", .5);
		}

		setTimeout(function() {document.getElementById("main_image").src=a;},350);

	}

})
