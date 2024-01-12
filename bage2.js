var textsArabic = {
	home: "الرئيسية",
	About_Us: "معلومات عنا ",
	Services: "خدماتنا",
	Student_materials: "مواد الطلبة ",
	Library: "المكتبة",
	Contact_Us: "إتصل بنا",
	service: "خدمات الأكاديميين والإداريين",
	service1: "خدمات الطلاب",
	service2: "خدمات الزوار",
	web: "موقع الطالب المستجد",
	Accounting1: "محاسبة ",
	Cloud: "الحوسبة السحابية",
	Principles: "مبادئ الإدارة",
	Entr: "ريادة الأعمال",
	First: "الفصل الدراسي الاول",
	Second: "الفصل الدراسي الثاني",
	Final: "الفصل الدراسي الصيفي",
	Student: "مواد الطلبة",
	first: "الفصل الدراسي الاول",
	second: "الفصل الدراسي الثاني",
	final: "الفصل الدراسي الصيفي",
	first1: "الفصل الدراسي الاول",
	second2: "الفصل الدراسي الثاني",
	final3: "الفصل الدراسي الصيفي",
	firstA: "الفصل الدراسي الاول",
	secondB: "الفصل الدراسي الثاني",
	finalC: "الفصل الدراسي الصيفي",
	about: "من الهاشمية الى العالمية",
	tex3: "الهاشمية في سطور - نشرة تعريفية",
	tex2: "الجامعة الهاشمية تعريفي",
	tex1: "الجامعة الهاشمية وثائقيا",
	texs: " الكلمة الترحيبية لرئيس الجامعةالهاشمية",
	ima: " مرافق الجامعة الهاشمية",
	uni: "الجامعة الهاشمية. الزرقاء. المملكة الاردنية الهاشمية",
	call: "الاتصال بنا",
	copy: "جميع الحقوق محفوظة©2021. الجامعة الهاشمية    ",
	help: "| للمساعدة | الدعم الفني ",
	hallo: "أضِف إقتراحك المميز",
	cancel: "إلـغاء",
	send: "إرســال",
	see: " : الـــرؤية ",
	uu: "جامعة رائدة إقليمًا وعالميًا",
	sen: " : الرســــالة",
	ter: "الارتقاء بمستوى البحث العلمي، والدارسات العليا، وتطوير المناهج الدراسية، وتهيئة بيئة جامعية محفزة على التميز والإبداع وروح القيادة، وإعداد طاقات بشرية مؤهلة وقادرة على المساهمة الفاعلة في رفد المسيرة العلمية والعملية والتنموية، واستدامتها، وخدمة المجتمع للنهوض به؛ ليواكب متطلبات العصر وتطويره.    ",
	gra: "نتائج علامات الطلبة",
};

var textsEnglish = {
	home: "Home",
	About_Us: "About Us ",
	Services: "Services",
	Student_materials: "Student materials",
	Library: "Library",
	Contact_Us: "Contact Us",
	service: " Academic and administrative services",
	service1: "Student services",
	service2: "Visitor service",
	web: "New student website ",
	Accounting1: "Accounting",
	Cloud: "Cloud Computing",
	Principles: "Principles of Management",
	Entr: "Entrepreneurship",
	First: "First Exam",
	Second: "Second Exam",
	Final: "Final Exam",
	Student: "Student Materials",
	first: "First Exam",
	second: "Second Exam",
	final: "Final Exam",
	first1: "First Exam",
	second2: "Second Exam",
	final3: "Final Exam",
	firstA: "First Exam",
	secondB: "Second Exam",
	finalC: "Final Exam",
	about: "From the Hashemite to the international",
	tex3: "The Hashemite Society in Brief - Introductory leaflet",
	tex2: "The Hashemite University My definition",
	tex1: "The Hashemite University Documentary",
	texs: "Welcoming speech by the University President",
	ima: "Hashemite University facilities",
	uni: "The Hashemite University. Zarqa city.the Hashemite Kingdom of Jordan",
	call: "Contact us",
	copy: "All rights reserved©2021. The Hashemite University",
	help: "| To help | technical support",
	hallo: "Add Your Unique Suggestion",
	cancel: "Cancel",
	send: "Send",
	see: "Vision",
	uu: "A leading university regionally and globally",
	sen: "the message    ",
	ter: "Raising the level of scientific research, graduate studies, developing curricula, creating a university environment that encourages excellence, creativity, and the spirit of leadership, and preparing qualified human energies capable of contributing effectively to supporting the scientific, practical, and developmental process, sustaining it, and serving society to advance it; To keep pace with the requirements of the times and its development.",
	gra: "Student Grades Results",
};

var currentLanguage = "ar"; // يمكن تغيير القيمة إلى 'en' للإنجليزية

function switchLanguage(lang) {
	if (lang === "ar") {
		currentLanguage = "ar";
		displayTexts(textsArabic);
	} else {
		currentLanguage = "en";
		displayTexts(textsEnglish);
	}
}

function displayTexts(texts) {
	document.getElementById("home").innerHTML = texts.home;
	document.getElementById("About_Us").innerHTML = texts.About_Us;
	document.getElementById("Services").innerHTML = texts.Services;
	document.getElementById("Library").innerHTML = texts.Library;
	document.getElementById("Contact_Us").innerHTML = texts.Contact_Us;
	document.getElementById("Student_materials").innerHTML =
		texts.Student_materials;
	document.getElementById("service").innerHTML = texts.service;
	document.getElementById("service1").innerHTML = texts.service1;
	document.getElementById("service2").innerHTML = texts.service2;
	document.getElementById("web").innerHTML = texts.web;
	document.getElementById("Accounting1").innerHTML = texts.Accounting1;
	document.getElementById("Entr").innerHTML = texts.Entr;
	document.getElementById("Cloud").innerHTML = texts.Cloud;
	document.getElementById("Principles").innerHTML = texts.Principles;
	document.getElementById("First").innerHTML = texts.First;
	document.getElementById("Second").innerHTML = texts.Second;
	document.getElementById("Final").innerHTML = texts.Final;
	document.getElementById("Student").innerHTML = texts.Student;
	document.getElementById("first").innerHTML = texts.first;
	document.getElementById("second").innerHTML = texts.second;
	document.getElementById("final").innerHTML = texts.final;
	document.getElementById("first1").innerHTML = texts.first1;
	document.getElementById("second2").innerHTML = texts.second2;
	document.getElementById("final3").innerHTML = texts.final3;
	document.getElementById("firstA").innerHTML = texts.firstA;
	document.getElementById("secondB").innerHTML = texts.secondB;
	document.getElementById("finalC").innerHTML = texts.finalC;
	document.getElementById("about").innerHTML = texts.about;
	document.getElementById("tex3").innerHTML = texts.tex3;
	document.getElementById("tex2").innerHTML = texts.tex2;
	document.getElementById("tex1").innerHTML = texts.tex1;
	document.getElementById("texs").innerHTML = texts.texs;
	document.getElementById("ima").innerHTML = texts.ima;
	document.getElementById("uni").innerHTML = texts.uni;
	document.getElementById("call").innerHTML = texts.call;
	document.getElementById("copy").innerHTML = texts.copy;
	document.getElementById("help").innerHTML = texts.help;
	document.getElementById("hallo").innerHTML = texts.hallo;
	document.getElementById("cancel").innerHTML = texts.cancel;
	document.getElementById("send").innerHTML = texts.send;
	document.getElementById("see").innerHTML = texts.see;
	document.getElementById("uu").innerHTML = texts.uu;
	document.getElementById("sen").innerHTML = texts.sen;
	document.getElementById("ter").innerHTML = texts.ter;
	document.getElementById("gra").innerHTML = texts.gra;
}

switchLanguage(currentLanguage); //مافي داعي نحطها عادي لو شلناها عااااااادي

////////////////////////////////////////////////////////////////////////////////////////////////////////////

function myFunction() {
	alert("Thank you, sent successfully!");
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////
