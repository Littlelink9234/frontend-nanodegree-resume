var bio = {
	"name": "Jason Carvalho",
	"role": "Software Developer",
	"contacts": {
		"mobile": "516-343-6122",
		"email": "jason.carvalho1@gmail.com",
		"twitter": "@lead1290",
		"github": "Littlelink9234",
		"location": "Long Island, NY"
	},
	"biopic": "images/197x148.gif",
	"welcomeMessage": "Welcome to my World!",
	"skills": ["Software Developer", "PC Hardware Consultant"]
}

var work = {
	"jobs": [
		{ 
			"employer": 	"Investor Communications Network, LLC.",
			"title": 		"Database Developer",
			"location": 	"New York, NY",
			"dates": 		"March, 2015 - June, 2015",
			"description": 	"Managed multi-tiered database applications employing the .NET 4.0 Framework, C#, Entity Framework, and SQL Server 2014.  Applications were both desktop and web based, ensuring the satisfaction of the user’s needs.  Maintained companies’ websites by updating monthly and quarterly reports for client access, modifying business logic to improve UI interaction and experience, and modernized front-end design using contemporary web technologies.  Liaison with outside IT and ISP companies to establish a productive and respectful relationship.  Other duties included troubleshooting system outages, installing new hardware components like network printers, monitors and computers, configuring firewall and router setups, and assisting colleagues with software related issues." 
		},
		{
			"employer": 	"EidosMedia, Inc.",
			"title": 		"Application Specialist",
			"location": 	"New York, NY",
			"dates": 		"May, 2012 - March, 2015",
			"description": 	"Well-versed in companies’ proprietary CMS software including but not limited to: new integrated software development, custom configuration on multi-layered system, and customer technical support for clients in the media and financial industry.  Developed web components utilizing software’s API to expose custom functionality for ease of use.  Also, used .NET technology and WPF to custom design presentation-layer architecture.  Provided support and assistance on existing user interfaces to enhance effectiveness.  Customized and configured middle-layer architecture developed using Java Servlets to meet customer’s expectations.  Generated concise technical reports and corresponding technical documentation to ease future issues."
		},
		{
			"employer": 	"FDM Group, Inc.",
			"title": 		".NET Software Developer",
			"location": 	"New York, NY",
			"dates": 		"August, 2011 - January, 2012",
			"description": 	"Developed user-friendly desktop and web applications using the .NET 3.5 Framework, C#, and SQL Server.  Ported final applications to the web using ASP.NET and other web technologies.  Designed and built infrastructure of back-end databases using SQL Server.  Managed databases by setting up functions, stored procedures, and views to increase support productivity."
		}
	]
}

var projects = {
	"project": [
		{
			"title": "Content Management System at top financial analysis firm",
			"dates": "November, 2013 - March, 2015",
			"description": "Publishing system that handles authoring, permissions, workflow management and sending of final product to third party for web posting.",
			"images": "images/EidosMedia_image.png"
		}
	]
}

var education = {
	"schools": [
		{
			"name": 	"CUNY Queens",
			"location": "Flushing, NY",
			"degree": 	"Bachelors",
			"major": 	"Computer Science",
			"dates": 	2010,
			"url": 		"www.qc.cuny.edu"
		},
		// {
		// 	"name": 	"Nassau Community College",
		// 	"location": "Garden City, NY",
		// 	"degree": 	"A.S.",
		// 	"majors": 	"Computer Science",
		// 	"dates": 	2008,
		// 	"url": 		"http://www.ncc.edu/"
		// }
	],
	"onlineCourses": [
		{
			"title": 	"JavaScript Crash Course",
			"school": 	"Udacity",
			"date": 	2015,
			"url": 		"https://www.udacity.com/course/c-ud804"  
		}
	]
}

// Header Section
var formattedRole = HTMLheaderName.replace("%data%", bio.name);
var formattedName = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedName);
$("#header").prepend(formattedRole);


// Contact Information Section
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedLocation);

// Picture and Welcome Message
var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);

// Skills list
var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
formattedSkills += HTMLskills.replace("%data%", bio.skills[1]);

if(bio.skills.length > 0)
{
	$("#header").append(HTMLskillsStart);
	$("#skills").append(formattedSkills);
}


// Work History Section
var formattedEmployer1 = HTMLworkEmployer.replace("%data%", work.jobs[0].employer);
var formattedTitle1 = HTMLworkTitle.replace("%data%", work.jobs[0].title);
var employerAndTitle1 = formattedEmployer1 + formattedTitle1;
var formattedDates1 = HTMLprojectDates.replace("%data%",work.jobs[0].dates);
var formattedLocation1 = HTMLworkLocation.replace("%data%",work.jobs[0].location);
var formattedDescription1 = HTMLworkDescription.replace("%data%",work.jobs[0].description);
$("#workExperience").append(HTMLworkStart);
$("#workExperience").append(employerAndTitle1);
$("#workExperience").append(formattedDates1);
$("#workExperience").append(formattedLocation1);
$("#workExperience").append(formattedDescription1);





var formattedEmployer2 = HTMLworkEmployer.replace("%data%", work.jobs[1].employer);
var formattedTitle2 = HTMLworkTitle.replace("%data%", work.jobs[1].title);
var employerAndTitle2 = formattedEmployer2 + formattedTitle2;
var formattedDates2 = HTMLprojectDates.replace("%data%",work.jobs[1].dates);
var formattedLocation2 = HTMLworkLocation.replace("%data%",work.jobs[1].location);
var formattedDescription2 = HTMLworkDescription.replace("%data%",work.jobs[1].description);
$("#workExperience").append(employerAndTitle2);
$("#workExperience").append(formattedDates2);
$("#workExperience").append(formattedLocation2);
$("#workExperience").append(formattedDescription2);


var formattedEmployer3 = HTMLworkEmployer.replace("%data%", work.jobs[2].employer);
var formattedTitle3 = HTMLworkTitle.replace("%data%", work.jobs[2].title);
var employerAndTitle3 = formattedEmployer3 + formattedTitle3;
var formattedDates3 = HTMLprojectDates.replace("%data%",work.jobs[2].dates);
var formattedLocation3 = HTMLworkLocation.replace("%data%",work.jobs[2].location);
var formattedDescription3 = HTMLworkDescription.replace("%data%",work.jobs[2].description);
$("#workExperience").append(employerAndTitle3);
$("#workExperience").append(formattedDates3);
$("#workExperience").append(formattedLocation3);
$("#workExperience").append(formattedDescription3);


// Project Section


// Education Section
var formattedSchoolName = HTMLschoolName.replace("%data%", education["schools"][0].name);
var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education["schools"][0].degree);
var SchoolNameAndSchoolDegree = formattedSchoolName + formattedSchoolDegree;
var formattedSchoolDates = HTMLschoolDates.replace("%data%", education["schools"][0].dates);
var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education["schools"][0].location);
var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education["schools"][0].major);
$("#education").append(HTMLschoolStart);
$("#education").append(SchoolNameAndSchoolDegree);
$("#education").append(formattedSchoolDates);
$("#education").append(formattedSchoolLocation);
$("#education").append(formattedSchoolMajor);


var formattedOnlineCourseTitle = HTMLonlineTitle.replace("%data%", education["onlineCourses"][0].title);
var formattedOnlineCourseSchool = HTMLonlineSchool.replace("%data%", education["onlineCourses"][0].school);
var OnlineCourseTitleAndSchool = formattedOnlineCourseTitle + formattedOnlineCourseSchool;
var formattedOnlineCourseDates = HTMLonlineDates.replace("%data%", education["onlineCourses"][0].date);
var formattedOnlineCourseURL = HTMLonlineURL.replace("%data%", education["onlineCourses"][0].url);
$("#education").append(HTMLonlineClasses);
$("#education").append(OnlineCourseTitleAndSchool);
$("#education").append(formattedOnlineCourseDates);
$("#education").append(formattedOnlineCourseURL);


// Map Section