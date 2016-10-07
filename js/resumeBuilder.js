var work = {
	"jobs": [
	{
		"employer":"Limetray",
		"title": "Graphic Designer",
		"location": "New Delhi",
		"dates": "june 2013",
		"description": "i worked as a graphic designer and created different graphics according to the requirement",
		"url": "http://www.limetray.com/"
	},
	{
		"employer": "Infosys",
		"title": "Systems Engineer",
		"location": "Mysore",
		"dates": "yet to know",
		"description": "something",
		"url": "https://www.infosys.com/"
	}
	]
};

var projects = {
	"projects": [
	{
		"title": "3D-LED 4x4x4 Matrix",
		"dates": "2015",
		"description": "Made a 3d led display using 64 monochrome leds using Arduino UNO R3",
		"images":["images/project0.jpg","images/project1.jpg"]
	},
	{
		"title": "3D-LED cube interfaced with obstruction detection robot.",
		"dates": "2016",
		"description": "interfaced my first project with a obstruction detction robot which moves from its path when it detects any obstruction and displays message on the cube.",
		"images":["images/robot1.jpg"]
	}
	]
};

var bio = {
	
		"name": "Akshay Bhat",
		"role": "Web Developer",
		"welcomeMessage": "Hi My Name Is Akshay Bhat",
		"biopic": "images/PHOTO.jpg",
		"contacts": {
			"mobile":"9466475698",
			"email": "akshaybhat301094@gmail.com",
			"github": "akshaybhat301094",
			"twitter":"@Akshay301094",
			"blog": "--",
			"location": "udhampur, J&K"
		},
		"skills":["HTML","CSS","JAVA SCRIPT",
		"PHOTOSHOP","LEADERSHIP"
		]
};

var education = {
	"schools": [
	{
		"name": "Army Public School",
		"location": "Udhampur",
		"degree":"High school",
		"majors":["non medical"],
		"dates":"2012",
		"url":"http://www.apsudhampur.org/"
	},
	{
		"name": "BMIET",
		"location": "sonipat",
		"degree":"graduation B.TECH",
		"majors":["ECE"],
		"dates":"2012-2016",
		"url":"http://www.bmiet.in/"
	}
	],
	"onlineCourses": [
	{
		"title":"Front end web Developer Nanodegree",
		"school": "Udacity",
		"dates": "august 2016 to jan 2017",
		"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001" 
	}
	]
};

//created all the required objects above
//created all the functions applied on the objects below

//this bio.display function below displays the bio data of the candidate
bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var idStrings = ["#topContacts", "#footerContacts"];
    for(var i = 0, id; i < idStrings.length; i++) {
        id = idStrings[i];
        $(id).append(formattedMobile);
        $(id).append(formattedEmail);
        $(id).append(formattedTwitter);
        $(id).append(formattedGithub);
        $(id).append(formattedBlog);
        $(id).append(formattedLocation);
    }
    $("#header").append(formattedPic);
    $("#header").append(formattedMessage);

    $("#header").append(HTMLskillsStart);

    for(i = 0; i < bio.skills.length;i++) {
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
    $("#skills").append(formattedSkill);
    }
    };
bio.display();

//this work.display function displays the work section of the resume
work.display = function() {
	work.jobs.forEach(function(job) {
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer).replace("#",job.url);
            var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            $(".work-entry:last").append(formattedEmployerTitle);
            var formattedDates = HTMLworkDates.replace("%data%", job.dates);
            $(".work-entry:last").append(formattedDates);
            var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
            $(".work-entry:last").append(formattedDescription);
            });
            };
work.display();

//this function below displays the clicks in the console
$(document).click(function(loc) {
  		var x = loc.pageX;
  		var y = loc.pageY;
  		logClicks(x,y);
});

//this function below internationalizes the name
function inName(name) {
	name=name.trim().split(" ");
	console.log(name);
	name[1]=name[1].toUpperCase();
	name[0]=name[0].slice(0,1).toUpperCase() +
			name[0].slice(1).toLowerCase();
	return name[0]+ " " +name[1];
}
$("#main").append(internationalizeButton);

//this projects.display function shows the projects section in the resume
projects.display = function() {
	projects.projects.forEach(function(project) {
            $("#projects").append(HTMLprojectStart);

            var formattedTitle = HTMLprojectTitle.replace("%data%",project.title);
            $(".project-entry:last").append(formattedTitle);
            var formattedDates = HTMLprojectDates.replace("%data%",project.dates);
            $(".project-entry:last").append(formattedDates);
            var formattedDescription = HTMLprojectDescription.replace("%data%",project.description);
            $(".project-entry:last").append(formattedDescription);

            if (project.images.length > 0) {
                project.images.forEach(function(image) {
                    var formattedImage = HTMLprojectImage.replace("%data%", image);
                    $(".project-entry:last").append(formattedImage);
                });
            }
        });

    };
projects.display();

//this education.display function displays the education section in the resume
education.display = function() {
	education.schools.forEach(function(school) {
            $("#education").append(HTMLschoolStart);
            var formattedName = HTMLschoolName.replace("%data%",school.name).replace("#",school.url);
            var formattedDegree = HTMLschoolDegree.replace("%data%",school.degree);
            var formattedNameDegree = formattedName + formattedDegree;
            $(".education-entry:last").append(formattedNameDegree); 
            var formattedDates = HTMLschoolDates.replace("%data%",school.dates);
            $(".education-entry:last").append(formattedDates);
            var formattedLocation = HTMLschoolLocation.replace("%data%",school.location);
            $(".education-entry:last").append(formattedLocation);
            var formattedMajors = HTMLschoolMajor.replace("%data%",school.majors);
            $(".education-entry:last").append(formattedMajors);
        });

            $(".education-entry:last").append(HTMLonlineClasses);
	education.onlineCourses.forEach(function(online) {
            var formattedTitle = HTMLonlineTitle.replace("%data%",online.title); 
            var formattedSchool = HTMLonlineSchool.replace("%data%",online.school);
            var formattedTitleSchool = formattedTitle + formattedSchool;
            $(".education-entry:last").append(formattedTitleSchool);
            var formattedDates = HTMLonlineDates.replace("%data%",online.dates);
            $(".education-entry:last").append(formattedDates);
            var formattedUrl = HTMLonlineURL.replace("%data%",online.url).replace("#",online.url);
            $(".education-entry:last").append(formattedUrl);	
        });
    };
education.display();

$("#mapDiv").append(googleMap);//used to display the map in resume

//this function below is used to create the hamburger function when the screen size is below 550px
$(document).ready(function ( ) {
    $('.burger-nav').on('click', function ( ) {
    $("div #topContacts").toggleClass("open");
    });
});