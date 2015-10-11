var content = d3.select("#photo_section")

var img_names = ["http://www.osa-opn.org/opn/media/Images/AfterImages/02feb_12.jpg?width=630&height=522&ext=.jpg", "http://www.photographymad.com/files/images/rule-of-thirds-vertical.jpg", "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ9fSvUVvINMgiuFKK9rP5AHETr28FHAuMR8Yha_BfhfYwYwu1KCw", "http://www.apnphotographyschool.com/wp-content/uploads/2011/10/vertical-panorama.jpg", "http://www.thinkstockphotos.com/CMS/StaticContent/Hero/TS_AnonHP_462882495_01.jpg", "http://www.gettyimages.com/gi-resources/images/CreativeImages/Hero-527920799.jpg", "http://www.menucool.com/slider/prod/image-slider-2.jpg", "http://www.freelargeimages.com/wp-content/uploads/2014/12/Landscape_01.jpg", "http://www.thinkstockphotos.com/CMS/StaticContent/Hero/TS_AnonHP_462882495_01.jpg", "http://www.gettyimages.com/gi-resources/images/CreativeImages/Hero-527920799.jpg", "http://www.menucool.com/slider/prod/image-slider-2.jpg", "http://www.freelargeimages.com/wp-content/uploads/2014/12/Landscape_01.jpg"];

content.selectAll("div")
	.data(img_names)
	.enter()
	.append("img")
	.attr("class", "col-md-3")
	.attr("class", "col-sm-4")
	.attr("class", "col-xs-6")
	.attr("class", "image")
	.on("click", "changeImage('')")
