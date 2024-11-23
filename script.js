// حدد جميع روابط القائمة
const navLinks = document.querySelectorAll("nav ul li a");

let dropDownToggle = document.querySelector(".drepdownToggle")
let iconToggle = document.querySelector(".iconttoggle i")
let togglebtn = document.querySelector(".iconttoggle")

// أضف حدث "click" لكل رابط
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    // قم بإزالة الكلاس "active" من جميع الروابط
    navLinks.forEach((link) => link.classList.remove("active"));
    // أضف الكلاس "active" للعنصر الحالي
    this.classList.add("active");
  });
});



togglebtn.onClick = function(){
  dropDownToggle.classList.toggle("open")
}

