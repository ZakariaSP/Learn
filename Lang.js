var arabic = document.getElementById("arabic");
var english = document.getElementById("english");
var title = document.getElementById("title");
var title1 = document.getElementById("title1");
var comment1 = document.getElementById("comment1");
var title2 = document.getElementById("title2");
var comment2 = document.getElementById("comment2");
var title3 = document.getElementById("title3");
var comment3 = document.getElementById("comment3");
var register = document.getElementById("register");
var mail = document.getElementById("mail");
var subscribe = document.getElementById("subscribe");
var contact = document.getElementById("contact");

arabic.addEventListener("click", ()=>{
     changeLanguage("arabic");
     localStorage.setItem("Lang","arabic");
});



english.addEventListener("click", ()=>{
     changeLanguage("english");
     localStorage.setItem("Lang","english");
});
 

onload = ()=>{
     changeLanguage(localStorage.getItem("Lang"));
 };

function changeLanguage(Language){
    if(Language === "arabic"){
         title.innerHTML = "تعلم اللغات عبر العالم";
         title1.innerHTML = "تعلم المحادثة في وقت وجيز";
         comment1.innerHTML = "مثل عبارات التواصل وأمثلة للحوار والمحادثات";
         title2.innerHTML = "تعلم قواعد اللغة بسهولة";
         comment2.innerHTML = "مثل قواعد الصرف والإنشاء ومعاني الكلمات";
         title3.innerHTML = "ترجمة بعض العبارات إلى لغات أخرى";
         comment3.innerHTML = "مثل عبارات التحية والتقدير وبعض المصطلحات الأخرى";
         register.innerHTML = "للتسجيل في  موقعنا";
         mail.innerHTML = "البريد الإلكتروني";
         subscribe.innerHTML = "اشتراك";
         contact.innerHTML = "©2021جميع الحقوق محفوظة";

     }else if(Language === "english"){
         title.innerHTML = "Learn languages around the world";
         title1.innerHTML = "Learn conversation in a short time";
         comment1.innerHTML = "Such as communication phrases and examples of dialogue and conversations";
         title2.innerHTML = "Learn grammar easily";
         comment2.innerHTML = "Such as grammar, construction, and word meanings";
         title3.innerHTML = "Translate some phrases into other languages";
         comment3.innerHTML = "Such as greetings, appreciation and some other terms";
         register.innerHTML = "Sign up in our plateform";
         mail.innerHTML = "Email";
         subscribe.innerHTML = "Subscribe";
         contact.innerHTML = "All Rights Reserved 2021© ";
         
    }
}