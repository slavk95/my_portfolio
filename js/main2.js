var API_KEY = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjlmMDEwMTI4MzkzMmVhN2UzZWJmZTNhZDhmMGRlYmJhZjMwYmY1MWMwOTI3YTE5Y2Q1MzJlMGYwMDBhNDU2MDdhYzA3YmI5M2MxNTk3OGQ3In0.eyJhdWQiOiIxMCIsImp0aSI6IjlmMDEwMTI4MzkzMmVhN2UzZWJmZTNhZDhmMGRlYmJhZjMwYmY1MWMwOTI3YTE5Y2Q1MzJlMGYwMDBhNDU2MDdhYzA3YmI5M2MxNTk3OGQ3IiwiaWF0IjoxNTA3NjUzODgzLCJuYmYiOjE1MDc2NTM4ODMsImV4cCI6MTgyMzE4NjY4Mywic3ViIjoiNzkwIiwic2NvcGVzIjpbInVzZXJEZXRhaWxlZEluZm8iLCJ1c2VyQmFzZUluZm8iLCJ1c2VyQ291cnNlSW5mbyJdfQ.As4RsmGoK_OghS7BB46GfPiy74UYFn-P93rkElRvJu6518TjoC6MQ7uxDP4YrpDbdzaB97M-OkiMRP5TNAcDxJxjFLIhpIx2uajyKEVu_csxzuuSkmCAAJ_ohSmKfLsBIvcdCRBNVdoewsbH-DekTLBDbwi9ytX4va3isAd-9xnGrTL2gGw3onJhzJ0bf42-l3eBGRYxgifOvf-2H7HlkXh6RgGEUxDVSFqb7UIvzRd_fdf6dzbpouiL2ll-tZ7thIqPfpptRY5itb1Zrn8qfBggi4wm9DCZHFESHa1A-zWFSrKqtKgMYkySUC79bYeW3q4M8xSNGSL3YGuyMrV_7WJbCKRRxWiAkqpCsWluuylMSrEkCQoUcZthW068Q2C4PJkSQz6nJwsAVEHtTNdwttFYqi810MdV9LDBuf97s9GGNjaWVEhp_W1Xkc6fyaY41jZ2F-NdXIGKtGMdjwFT1jgZd2K0QycZLPyke1EALkPWPRTQxIKc_kXKEOPn_c5NM8WfLRyn6XeggwR9qYfWo8tAY3roKxShrgivG2m14XHta_DkPdddwXxWF4H1zERf51mSnj7BK2hur8wmLGLP-pfUrkNP_TZuadqMgGCgC-THV9e6rKho7zE0SIIs_hSINNu1V_adneQ1-mvmXZJqvbWwJLTKgY4Jg-fEgHpoOrQ', 
my_id=790;
var client = new INTITAClient({
    key : API_KEY,
});
var nameNode = document.getElementById('mainInfo'), avatarNode = document.getElementById('avatar'), teacher = document.getElementById('teacher');
var courses = document.getElementById('courses'), courseDetail = document.getElementById('courseDetail'), 
courseModules = document.getElementById('courseModules'), moduleLectures = document.getElementById('moduleLectures'),
moduleInfo = document.getElementById('moduleInfo');
var idModuleLectures=[], counterTitle= new Array();

//client.getUserDetails(my_id)-BEGIN_________________________________________
function parseAllUserDetails(data) {
	runOnUserDetails(data.data);
}
function runOnUserDetails(data) {
	for (var key in data){
		printUserDetails(key,data[key]);
	}
}
function printUserDetails(key,dataKey) {
	if (key == "avatar") {
		avatarNode.setAttribute("src",dataKey);
	}
	else if(key == "trainers"){
		for (var i = 0; i < dataKey.length; i++) {
			getInformationAboutTeachers(dataKey[i])		
		}
	}
	else{
		nameNode.innerHTML += "<b>" + key + "</b>" + ": " + dataKey + "<br>";	
	}
}
function getInformationAboutTeachers(dataKeyI) {
	for (var key2 in dataKeyI){
		printInformationAboutTeacher(key2, dataKeyI[key2])		
	}
}
function printInformationAboutTeacher(key2, dataKeyI){
	teacher.innerHTML += "<b>" + key2 + "</b>" + ": " + dataKeyI + "<br>";
}
//client.getUserDetails(my_id)-END______________________________________________________-


//getUserCoursesAndModules - BEGIN_______________________________________________________---

function parseUserCoursesAndModules(data) {
	return searchCourses(data.data);
}
function searchCourses(data) {
	for (var key in data){
		if (key == "courses") {
			return parseCourses(data[key]);
		}
	}
}
function parseCourses(data) {
	for(var i=0; i<data.length; i++){
		return countCourse(data[i]);
	}
	
}
function countCourse(data) {
	for(var key in data){
		courses.innerHTML += "<b>" + key + "</b>" + data[key] + "<br>";
		if (key == "id") {
			var id = data[key];
		}
	}
	return id;
}
//getUserCoursesAndModules - END______________________________________________________



//getCourseInfo - BEGIN_____________________________________________________________-----

function parseCourseInfo(data) {
	return searchCourseInfo(data.data);
}
function searchCourseInfo(data) {
	for(var key in data){
		printCourseInfo(key,data[key]);
		if (key = "course_ID") {
			var id = data[key];
		}
	}
	return id;
}
function printCourseInfo(key, dataKey){
	courseDetail.innerHTML += "<b>" + key + "</b>" + dataKey + "<br>";
}
//getCourseInfo - END________________________________________________________________-----

//getModuleInfo - BEGIN______________________________
function parseModuleInfo(data) {
	for (var key in data.data){
		if (key=="module_ID") {
			var id = data.data[key];
		}
		printModuleInfo(key, data.data[key]);
	}
	return id;
}
function printModuleInfo(key, dataKey) {
	moduleInfo.innerHTML += "<b>" + key + "</b>" + dataKey + "<br>";
}
//getModuleInfo - END_______________________________

//getCourseModules - BEGIN__________________________________________
var idsParseCourseModules =[];
function parseCourseModules(data) {
	for (var i = 0; i < data.data.length; i++) {
		getDetailAboutCourseModules(data.data[i]);
	}
	return idsParseCourseModules;
}
function getDetailAboutCourseModules(data) {
	for(var key in data){
		if (key == "id") {
			idsParseCourseModules.push(data[key]);
		}
		printCourseModules(key, data[key]);
	}
}
function printCourseModules(key, dataKey) {
	courseModules.innerHTML += "<b>"+key + "</b>" + ": "  + dataKey +"<br>";
	if (key == "title") {
		courseModules.innerHTML += "<span class='title'>"+"</span>";
	}
}
//getCourseModules- END_____________________________________


//______________________________________________
var count=0;
var k=0;
var j=-1;
function parseModuleLectures(data,j){
	console.log(data);
	for (var i = 0; i < data.data.length; i++) {
		$(".title")[j].innerHTML += "<b>" +data.data[i].id +"</b>" + ": " + data.data[i].title+ "<br>";
	}
	k++;
	return k;

}

//______________________________________________





client.getUserDetails(my_id)
.then(data => parseAllUserDetails(data));

client.getUserCoursesAndModules(my_id)
.then(data => {
	return parseUserCoursesAndModules(data);
})
.then(data => client.getCourseInfo(data)
	.then(data => {
		return	parseCourseInfo(data);
	})
	.then(data => client.getModuleInfo(data)
	.then(data => {
		return	parseModuleInfo(data)
	})
	.then(data => client.getCourseModules(data)
	.then(data => {
		return parseCourseModules(data)
	})
	.then(data => {
		innerModules(data,k);
	})

			
			
	)
	));
function innerModules(data,k) {
	if (j>data.length-2) {return}
	client.getModuleLectures(data[k]).then(data => {
		j++;
		return parseModuleLectures(data,j);
	}).then(k => innerModules(data,k))
}