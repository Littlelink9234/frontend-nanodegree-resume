/*var awesomeThoughts = "I am Jason and I am AWESOME!";

var funThoughts = awesomeThoughts.replace("AWESOME!", "FUN");

$("#main").append(funThoughts);

console.log(awesomeThoughts);
*/

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
	"pictureURL": "images/197x148.gif",
	"welcomeMessage": "Welcome to my World!",
	"skills": ["Software Developer", "PC Hardware Consultant"]
}

var formattedRole = HTMLheaderName.replace("%data%", bio.name);
var formattedName = HTMLheaderRole.replace("%data%", bio.role);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

var formattedBioPic = HTMLbioPic.replace("%data%", bio.pictureURL);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
formattedSkills += HTMLskills.replace("%data%", bio.skills[1]);

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





