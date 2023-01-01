//Loader

const preLoader = document.getElementById("loadig-screen");


window.addEventListener('load', () => {
    preLoader.style.display = "none";
});


//HarmBurger

           const menuToggle = document.querySelector('.toggle');
           const sideNav = document.getElementById('sideNav');
           sideNav.style.right = "-200px";


           menuToggle.addEventListener("click", () => {
               if(sideNav.style.right == "-200px") {
                    sideNav.style.right = 0;
                    menuToggle.classList.toggle('active');
               }
               else {
                sideNav.style.right = "-200px";
                menuToggle.classList.toggle('active');
               }
           });





//Progress Bar


const progressBar = document.querySelector("#progressBar");
const section = document.querySelector("#profiles");

const animateScrollBar = () => {
    let scrollDistance = -section.getBoundingClientRect().top;
    let progressWidth = (scrollDistance / 
        (section.getBoundingClientRect().height - 
            document.documentElement.clientHeight)) * 100;
    let value = Math.floor(progressWidth);
    progressBar.style.width = value + "%";
}

window.addEventListener('scroll', animateScrollBar);


// All animations will take exactly 500ms
var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
	speedAsDuration: true
});

//Notification

const bell = document.getElementById("bell");
const notfBtn = document.getElementById("notf-message");
const close = notfBtn.querySelector(".close");

console.log(close);
var time = setTimeout(function() {
    bell.style.opacity = 1;
}, 20000);

var time = setTimeout(function() {
    bell.style.opacity = 0;
}, 40000);

bell.onclick = function() {
    notfBtn.style.transform = "scale(1)";
    notfBtn.style.top = "40%";
    notfBtn.style.right = "5%";
    bell.style.opacity = "0";
}

close.onclick = function() {
    notfBtn.style.transform = "scale(0)";  
}









