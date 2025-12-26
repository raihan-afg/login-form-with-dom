const section = document.querySelector("section");
const div = document.querySelector("div")
const div2 = document.querySelector("div> div")
const h6 = document.querySelector("h6");
section.classList.add("loginpage");
div.className = "form outline";
// div.className += div.className + " outline";
// div.className = "${div.className} outline";
// div2.className = "${div2.className} signin";
div2.setAttribute("class", "signin");
// div2.setAttribute("class", "gruop");
// div2.className.add("signin")
h6.style.color = "#ddd";
