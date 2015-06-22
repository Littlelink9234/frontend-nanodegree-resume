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
			"dates": 		"03/2015 - 06/2015",
			"description": 	"Managed multi-tiered database applications employing the .NET 4.0 Framework, C#, Entity Framework, and SQL Server 2014.  Applications were both desktop and web based, ensuring the satisfaction of the user’s needs.  Maintained companies’ websites by updating monthly and quarterly reports for client access, modifying business logic to improve UI interaction and experience, and modernized front-end design using contemporary web technologies.  Liaison with outside IT and ISP companies to establish a productive and respectful relationship.  Other duties included troubleshooting system outages, installing new hardware components like network printers, monitors and computers, configuring firewall and router setups, and assisting colleagues with software related issues." 
		}
	]
}

var education = {
	"schools": [
		{
			"name": 	"CUNY Queens",
			"location": "Flushing, NY",
			"degree": 	"B.A.",
			"majors": 	"Computer Science",
			"dates": 	2010,
			"url": 		"www.qc.cuny.edu"
		},
		{
			"name": 	"Nassau Community College",
			"location": "Garden City, NY",
			"degree": 	"A.S.",
			"majors": 	"Computer Science",
			"dates": 	2008,
			"url": 		"http://www.ncc.edu/"
		}
	]
}

var formattedRole = HTMLheaderName.replace("%data%", bio.name);
var formattedName = HTMLheaderRole.replace("%data%", bio.role);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
formattedSkills += HTMLskills.replace("%data%", bio.skills[1]);

var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[0].employer);
var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[0].title);
var employerAndTitle = formattedEmployer + formattedTitle;

var formattedSchool = HTMLschoolName.replace("%data%", education["schools"][0].name);

$("#header").prepend(formattedName);
$("#header").prepend(formattedRole);

$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedLocation);

$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);

$("#header").append(HTMLskillsStart);
$("#header").append(formattedSkills);

$("#workExperience").append(HTMLworkStart);
$("#workExperience").append(employerAndTitle);


$("#education").append(HTMLschoolStart);
$("#education").append(formattedSchool);


