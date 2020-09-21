/* ============================================= */
/*             Projects Modal Function           */
/* ============================================= */
const projects = {
  projects: [
    {
      title: "Responsive Website",
      img: "../assets/images/project2.png",
      description:
        "Build a responsive,mobile-first layout using HTML and CSS. This layout demonstrates my understanding of responsive design by adjusting to accommodate small, medium and large screen sizes. I wrote CSS to style the page for the small mobile device first and then use min-width media queries. I also add breakpoints to adjust the layout for wider tablet and desktop screens.",
      skills: "HTML5, CSS, JavaScript",
      preview: "https://wujenny15.github.io/Techdegree-Project2/",
      github: "https://github.com/JIWU6498/Techdegree-Project2",
    },
    {
      title: "Web Style Guide Study",
      img:
        "../assets/images/screencapture-wujenny15-github-io-Techdegree-Project4-1593599055591.png",
      description:
        "Using SASS to pre-process the css styles to format the page",
      skills: "HTML5, CSS, SASS",
      preview: "https://wujenny15.github.io/Techdegree-Project4/",
      github: "https://github.com/JIWU6498/Techdegree-Project4",
    },
    {
      title: "Interactive Photo Gallery",
      img:
        "../assets/images/screencapture-wujenny15-github-io-Techdegree-Project5-1593599098340.gif",
      description: "Using jQuery plugin to create a interative photo gallery",
      skills: "HTML5, CSS, SASS, JavaScript, jQuery plugin",
      preview: "https://wujenny15.github.io/Techdegree-Project5/",
      github: "https://github.com/JIWU6498/Techdegree-Project5",
    },
    {
      title: "Game Show App",
      img:
        "../assets/images/screencapture-wujenny15-github-io-Techdegree-Project6-1593599152311.gif",
      description:
        "Create a browser version of “Wheel of Success”, a word guessing game where players will click letters from an onscreen keyboard to try to guess a random phrase.",
      skills: "HTML5, CSS, JavaScript, DOM Scripting ,CSS transition",
      preview: "https://wujenny15.github.io/Techdegree-Project6/",
      github: "https://github.com/JIWU6498/Techdegree-Project6",
    },
    {
      title: "WebApp Dashboard",
      img:
        "../assets/images/screencapture-wujenny15-github-io-Techdegree-Project7-1593599183303.png",
      description:
        "Built a web dashboard based on a mockup with JavaScript-driven charts and graphs.",
      skills:
        "HTML5, CSS, SASS,CSS Transition, JavaScript ,jQury , DOM, Chart.js",
      preview: "https://wujenny15.github.io/Techdegree-Project7/",
      github: "https://github.com/JIWU6498/Techdegree-Project7",
    },
    {
      title: "API Employee Directory",
      img:
        "../assets/images/screencapture-wujenny15-github-io-Techdegree-Project8-1593599218682.gif",
      description:
        "Communicating with APIs which allows to work with microservices and with vast databases to build useful tools and relevant information quickly and easily.Request a JSON object from the API using fetch and parse the data so that 12 employees are listed in a grid with their thumbnail image, full name, email, and location.",
      skills: "JavaScript, Promise, JSON, API",
      preview: "https://wujenny15.github.io/Techdegree-Project8",
      github: "https://github.com/JIWU6498/Techdegree-Project8",
    },
  ],
};

const viewButtons = document.getElementsByClassName("viewBtn");
const modalContainer = document.getElementById("modalContainer");

for (let i = 0; i < viewButtons.length; i++) {
  viewButtons[i].addEventListener("click", () => {
    const modal = document.getElementById("projectsModal");

    modal.innerHTML = `
		<div class="modal-dialog modal-dialog-centered" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="projectsModalLabel">${projects.projects[i].title}</h5>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body">
					<img id="projectImg" src=${projects.projects[i].img} class="card-img-top text-secondary rounded" alt=${projects.projects[i].img} >
					<h5 class="my-3 text-uppercase heading">Description</h5>
					<p class="info">${projects.projects[i].description}</p>
					<h5 class="my-3 text-uppercase heading">Skills</h5>
					<p class="info">${projects.projects[i].skills}</p>  
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
					<a href=${projects.projects[i].preview}  class="btn preview text-white" target="_blank">Preview</a>
					<a href=${projects.projects[i].github}   class="btn github text-white" target="_blank">GitHub</a>
				</div>
			</div>
		</div>
		`;
    modalContainer.appendChild(modal);
  });
}

function closeNav() {
  document.getElementById("overlay-menu").style.width = "0%";
}

function openNav() {
  document.getElementById("overlay-menu").style.width = "100%";
}


var ctx = document.getElementById("myChart").getContext("2d");

new Chart(document.getElementById("myChart"), {
  type: "polarArea",
  data: {
    labels: ["UI & UX", "Front End Development", "Back End Development", "Software Testing", "Tools", "Data Analysis"],
    datasets: [
      {
        label: "My First Dataset",
        data: [7, 8, 11, 7, 7,5],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(75, 192, 192)",
          "rgb(255, 205, 86)",
          "rgb(201, 203, 207)",
          "rgb(54, 162, 235)",
          "rgb(54, 152, 225)",
        ],
      },
    ],
  },
  options: {
    legend: {
        display: true,
        position: 'bottom',
    }
}
});

