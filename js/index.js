const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};


let container = document.querySelector(".container");

let header = document.querySelector('header');
header.style.backgroundColor = "#CDCDCD";
header.style.display = "flex";
header.style.justifyContent = "center";
header.style.padding = "25px";
header.style.fontSize = '20px';
header.style.fontWeight = "bold";
header.style.textShadow = "1px 1px 2px lightgreen";
header.style.borderBottom = "1px solid black";
header.style.position = "fixed";
header.style.marginTop = "-160px";



let timer = null;

window.addEventListener("scroll", function() {
  if (timer !== null) {
    clearTimeout(timer);
  }
  header.style.opacity = "0.8";
  timer = setTimeout(function() {
    header.style.opacity = "1";
  }, 200);
});

let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let nav1 = document.querySelectorAll('nav a')[0];
nav1.textContent = siteContent["nav"]["nav-item-1"];
nav1.style.color = 'green';

let nav2 = document.querySelectorAll('nav a')[1];
nav2.textContent = siteContent["nav"]["nav-item-2"];
nav2.style.color = 'green';

let nav3 = document.querySelectorAll('nav a')[2];
nav3.textContent = siteContent["nav"]["nav-item-3"];
nav3.style.color = 'green';

let nav4 = document.querySelectorAll('nav a')[3];
nav4.textContent = siteContent["nav"]["nav-item-4"];
nav4.style.color = 'green';

let nav5 = document.querySelectorAll('nav a')[4];
nav5.textContent = siteContent["nav"]["nav-item-5"];
nav5.style.color = 'green';

let nav6 = document.querySelectorAll('nav a')[5];
nav6.textContent = siteContent["nav"]["nav-item-6"];
nav6.style.color = 'green';



let h1 = document.querySelector('h1');
h1.innerHTML = "DOM <br/> is <br/> Awesome!";
h1.style.textShadow = "0px 0px 15px lightgreen, 0px 0px 50px lightblue, 2px 2px 2px grey";

let button = document.querySelectorAll('.cta button')[0];
button.textContent = "Turn Your World Upside-Down!";
button.style.height = "3rem";
button.style.borderRadius = "10px";
button.style.textShadow = "1px 1px 1px grey";
button.style.boxShadow = "2px 2px 2px, inset 2px 2px 2px grey";

// let buttonClick = function () {
//   h1.innerHTML = "Read Below to Begin Your Journey";
// }
// let buttonText = function () {
//   button.textContent = "vvv  SEE BELOW  vvv";
// }

// button.addEventListener('click', buttonClick);
// button.addEventListener('click', buttonText);

button.addEventListener('click', function() {
  container.style.transform = "rotate(180deg)";
  setTimeout(function () {
  container.style.transform = "rotate(0deg)";
 }, 2500);
});

let cta = document.querySelector('.cta');
cta.style.marginTop = "150px";

let headerIMG = document.querySelector('#cta-img');
headerIMG.setAttribute('src', siteContent["cta"]["img-src"]);
headerIMG.style.borderRadius = "50%";
headerIMG.style.boxShadow = "4px 4px 3px grey";

let features = document.querySelectorAll('.text-content h4')[0];
features.textContent = siteContent["main-content"]["features-h4"];
let featuresContent = document.querySelectorAll('.text-content p')[0];
featuresContent.textContent = siteContent["main-content"]["features-content"];
let about = document.querySelectorAll('.text-content h4')[1];
about.textContent = siteContent["main-content"]["about-h4"];
let aboutContent = document.querySelectorAll('.text-content p')[1];
aboutContent.textContent = siteContent["main-content"]["about-content"];

let middleIMG = document.querySelector('#middle-img');
middleIMG.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

let services = document.querySelectorAll('.text-content h4')[2];
services.textContent = siteContent["main-content"]["services-h4"];
let servicesContent = document.querySelectorAll('.text-content p')[2];
servicesContent.textContent = siteContent["main-content"]["services-content"];
let product = document.querySelectorAll('.text-content h4')[3];
product.textContent = siteContent["main-content"]["product-h4"];
let productContent = document.querySelectorAll('.text-content p')[3];
productContent.textContent = siteContent["main-content"]["product-content"];
let vision = document.querySelectorAll('.text-content h4')[4];
vision.textContent = siteContent["main-content"]["vision-h4"];
let visionContent = document.querySelectorAll('.text-content p')[4];
visionContent.textContent = siteContent["main-content"]["vision-content"];


let bottomInfo = document.querySelector('.bottom-info');
bottomInfo.style.display = "flex";
bottomInfo.style.alignItems = "center";
bottomInfo.style.justifyContent = "space-around";

let keysHeader = document.createElement("h1");
bottomInfo.appendChild(keysHeader);
keysHeader.textContent = "Press the keys and SEE WHAT HAPPENS";
keysHeader.style.fontSize = "30px";
keysHeader.style.textAlign = "center";

let keys = document.createElement("h4");
keysHeader.appendChild(keys);
keys.textContent = `R  G  B W`;
keys.style.letterSpacing = "20px";


let contact = document.querySelectorAll('.contact h4')[0];
contact.textContent = siteContent["contact"]["contact-h4"];
let address = document.querySelectorAll('.contact p')[0];
address.innerHTML = "123 Way 456 Street<br/> Somewhere, USA"
let phone = document.querySelectorAll('.contact p')[1];
phone.textContent = siteContent["contact"]["phone"];
let email = document.querySelectorAll('.contact p')[2];
email.textContent = siteContent["contact"]["email"];



let copyright = document.querySelector('footer p');
copyright.textContent = siteContent["footer"]["copyright"];

let nav = document.querySelector('nav');
let child1 = document.createElement("a");
nav.appendChild(child1);
child1.setAttribute('href', "#");
child1.textContent = "Append";
child1.style.color = 'green';

let child2 = document.createElement("a");
nav.prepend(child2);
child2.setAttribute('href', "#");
child2.textContent = "Prepend";
child2.style.color = 'green';

let body = document.querySelector('body');

window.addEventListener('keydown', (event) => {
  let x = event.which || event.keyCode;
  if (x == 82) {
    body.style.backgroundColor = "red";
    setTimeout(function () {
      body.style.backgroundColor = "white";
     }, 1500);
  } else if (x == 71) {
    body.style.backgroundColor = "green";
    setTimeout(function () {
      body.style.backgroundColor = "white";
     }, 1500);
  }  else if (x == 66) {
    body.style.backgroundColor = "blue";
    setTimeout(function () {
      body.style.backgroundColor = "white";
     }, 1500);
  }  else if (x == 87) {
    body.style.backgroundImage = "url('https://cdn-images-1.medium.com/max/1200/1*Km98PgzRp9yRYfVZeSzwzQ.png')";
    setTimeout(function () {
      body.style.backgroundImage = "";
     }, 1500);
  }
})