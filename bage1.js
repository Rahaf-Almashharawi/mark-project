// var  price=80;
// if(price=90)
// {
// console.log(" The price of a kilo of apples is $90");
// }else if(price=80)
// {
// console.log(" The price of a kilo of Banana	 is $80");
// }
// else if(price=70)
// {
// console.log(" The price of a kilo of Papaya	 is $70");
// }else if(price=50)
// {
// console.log(" ما عنا فواكة بهيك سعر ي معلم");
// };

//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////

// var x = 6;
// switch (x) {
//     case 1:
//         console.log("car");
//         break;
//     case 2:
//         console.log("Laptop");
//         break;
//     case 3:
//         console.log("mobile");
//         break;
//     case 4:
//         console.log("van");
//         break;
//     default:
//         console.log("ما عنا شي يناسب حضرتك");
// }

//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////

// var x = 1;
// switch (x) {
//     case 1:
//         console.log("car");
//         break
//     case 2:
//         console.log("Laptop");
//         break
//     case 3:
//         console.log("mobile");
//         break
//     case 4:
//         console.log("van");
//         break
//         default:
//             console.log("ما عنا شي يناسب حضرتك");
// }

//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////

// switch("orang"){
//     case 'Orang':
//         console.log("Orang are $0.95 ");
//         break;
//         case 'orang':
//             console.log("Orang are $0.85 ");
//             break;
//             case 'Apple':
//             console.log("Apple are $0.99 ");
//             break;
//             case 'Banana':
//             console.log("Banana are $0.85 ");
//             break;
//             default:
//                 console.log("لا يتوفر لدينا طلب لربما يكون الطلب بصل ي عسل")
// }

//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////

// let fruits=['Orang','Apple','Banana','Apple'];
// for(i=0;i<fruits.length;i++){
//     switch(fruits[i]){
//         case 'Orang':
//                     console.log("Orang are $0.95 ");
//                     break;
//                     case 'orang':
//                         console.log("Orang are $0.85 ");
//                         break;
//                         case 'Apple':
//                         console.log("Apple are $0.99 ");
//                         break;
//                         case 'Banana':
//                         console.log("Banana are $0.85 ");
//                         break;
//                         default:
//                             console.log("لا يتوفر لدينا طلب لربما يكون الطلب بصل ي عسل")

//     }
// }

//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////

//  let day;
// switch (new Date().getDay()) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//     day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case  6:
//     day = "Saturday";
// }
// document.getElementById("demo").innerHTML = "Today is " + day;

//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////

// let text;
// switch (new Date().getDay()) {
//   case 6:
//     text = "Today is Saturday";
//     break;
//   case 0:
//     text = "Today is Sunday";
//     break;
//   default:
//     text = "Looking forward to the Weekend";
// }
// document.getElementById("demo").innerHTML = text;

//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////

// function myFunction() {
//     var text;
//     var fruits = document.getElementById("myInput").value;

//     switch(fruits) {
//       case "Banana":
//         text = "Banana is good!";
//       break;
//       case "Orange":
//       text = "I am not a fan of orange.";
//       break;
//       case "Apple":
//       text = "How you like them apples?";
//       break;
//       default:
//       text = "مفيش ي عم الحج ";
//     }
//     document.getElementById("demo2").innerHTML = text;
//   }

//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////

//   function myFunction() {
//     var day;
//     switch (new Date().getDay()) {
//       case 0:
//         day = "Sunday";
//         break;
//       case 1:
//         day = "Monday";
//         break;
//       case 2:
//         day = "Tuesday";
//         break;
//       case 3:
//         day = "Wednesday";
//         break;
//       case 4:
//         day = "Thursday";
//         break;
//       case 5:
//         day = "Friday";
//         break;
//       case  6:
//         day = "Saturday";
//         break;
//       default:
//         day = "Unknown Day";
//     }
//     document.getElementById("demo3").innerHTML = "Today is " + day;
//   }

//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////

// switch (2) {
//     case 1:
//       console.log("Number 1 was chosen");
//     case 2:
//       console.log("Number 2 was chosen");
//     case 3:
//       console.log("Number 3 was chosen");
//     default:
//       console.log("No number was chosen");
//   }

//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////

// const number = prompt("Enter a number: ");

// if (number > 0) {
//   console.log("The number is positive");
// }else

// console.log("The if statement is easy");

//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////

// function myFunction() {
//     let person = prompt("Please enter your Full name", "Harry Potter");
//     if (person != null) {
//       document.getElementById("demo4").innerHTML =
//       "Hello " + person + "! How are you today?";
//     }
//   }

//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////

// var userName = prompt("What is your name?");

// if (userName !== null && userName !== "") {
//     var greeting = "Hello, " + userName + "! Welcome!";
//     alert(greeting);
// } else {
//     alert("Hello there! Welcome!");
// }

//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////

// // Define a variable
// var temperature = 25;

// // Check the temperature and display a message based on the condition
// if (temperature > 30) {
//     console.log("It's a hot day!");
// } else if (temperature >= 20 && temperature <= 30) {
//     console.log("The weather is pleasant.");
// } else {
//     console.log("It's a cold day!");
// }

//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////

// function calculateTotal() {
//     var sub1 = parseInt(document.getElementById("eng").value);
//     var sub2 = parseInt(document.getElementById("ar").value);

//     if (sub1 > 100 || sub2 > 100) {
//         alert("Please enter valid marks between 0 and 100");
//     } else {
//         var total = sub1 + sub2;
//         document.getElementById("total").innerHTML = "English mark: " + sub1 + "<br>Arabic mark: " + sub2 + "<br>Total = " + total;
//     }
// }

var textsArabic = {
	Log_In: "دخول",
	Uneversity_Id: "الرقم الجامعي",
	password: "كلمة المرور",
	Request_password_by_email: "طلب كلمة المرور عن طريق البريد الإلكتروني",
	Request_password_by_smartphone: "طلب كلمة المرور عن طريق الهاتف المحمول",
	// hello: 'مرحبا',
};

var textsEnglish = {
	Log_In: "Log In",
	Uneversity_Id: "Uneversity ID",
	password: "Password",
	Request_password_by_email: "Request Password By Email",
	Request_password_by_smartphone: "Request Password By Smartphone",
	// hello: 'hello',
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
	document.getElementById("welcomeText").innerHTML = `<p>${texts.Log_In}</p>`;
	document.getElementById("Unevesity_ID").innerHTML = texts.Uneversity_Id;
	document.getElementById("password").innerHTML = texts.password;
	document.getElementById("linkB").innerHTML = texts.Request_password_by_email;
	document.getElementById("linkC").innerHTML =
		texts.Request_password_by_smartphone;
	document.getElementById("home").innerHTML = texts.home;
	document.getElementById("hello").innerHTML = texts.hello;
}

switchLanguage(currentLanguage); //مافي داعي نحطها عادي لو شلناها عااااااادي
