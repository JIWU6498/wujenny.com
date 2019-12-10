/* ============================================= */
/*             Fullpage.js Calling Function      */
/* ============================================= */

$(document).ready(function() {
	$('#fullpage').fullpage({
		//options here
		autoScrolling:true,
        scrollHorizontally: true,
        
        easingcss3: 'ease',
	});

	//methods
	$.fn.fullpage.setAllowScrolling(true);
});

/* ============================================= */
/*             Projects Modal Function           */
/* ============================================= */

const projects ={
	"projects":[
		{
			"modal-title":"Responsive Website",
			"img":"images/projectsUI-01.jpg",
			"description":"Build a responsive,mobile-first layout using HTML and CSS. This layout demonstrates my understanding of responsive design by adjusting to accommodate small, medium and large screen sizes. I wrote CSS to style the page for the small mobile device first and then use min-width media queries. I also add breakpoints to adjust the layout for wider tablet and desktop screens.",
			"skills":"HTML5, CSS, JavaScript",
			"preview-link":"https://jiwu6498.github.io/Techdegree-Project2/",
			"github-link":"https://github.com/JIWU6498/Techdegree-Project2",

		},
		{
			"modal-title":"Responsive Website",
			"img":"images/projectsUI-01.jpg",
			"description":"Build a responsive,mobile-first layout using HTML and CSS. This layout demonstrates my understanding of responsive design by adjusting to accommodate small, medium and large screen sizes. I wrote CSS to style the page for the small mobile device first and then use min-width media queries. I also add breakpoints to adjust the layout for wider tablet and desktop screens.",
			"skills":"HTML5, CSS, JavaScript",
			"preview-link":"https://jiwu6498.github.io/Techdegree-Project2/",
			"github-link":"https://github.com/JIWU6498/Techdegree-Project2",

		},
		{
			"modal-title":"Responsive Website",
			"img":"images/projectsUI-01.jpg",
			"description":"Build a responsive,mobile-first layout using HTML and CSS. This layout demonstrates my understanding of responsive design by adjusting to accommodate small, medium and large screen sizes. I wrote CSS to style the page for the small mobile device first and then use min-width media queries. I also add breakpoints to adjust the layout for wider tablet and desktop screens.",
			"skills":"HTML5, CSS, JavaScript",
			"preview-link":"https://jiwu6498.github.io/Techdegree-Project2/",
			"github-link":"https://github.com/JIWU6498/Techdegree-Project2",

		},

	]

}

