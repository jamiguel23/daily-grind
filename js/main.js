'use strict'


// One unique image, with appropriate and matching content in the alt tag.  


// A paragraph or two of content that describes the daily item (paragraph must include the name of the highlighted weekday)

// Image of specific coffee
// alt tag to identify 
// description 
// weekday
// color 


// A unique color that supports the image and paragraph of content


// alert('Can you see this?')

function coffeeTemplate(coffee) {


  return `<p>
  <img src="images/${coffee.pic}"
    alt="${coffee.alt}!"
    id="coffee" />
  <strong class="feature">${coffee.day}'s Coffee
    Special:</strong> ${coffee.day}'s daily coffee special is
    ${coffee.name}.
    ${coffee.desc}!
</p>`;
}


let myDate = new Date();
let today = myDate.getDay();
// let today = 0
let thisYear = myDate.getFullYear();

let coffee = '';
let myDay = '';


//use location object to access querystring (address bar)
const queryString = window.location.search;
    
//output to console    
console.log(queryString);
    
//separate querystring parameters
const urlParams = new URLSearchParams(queryString);

if(urlParams.has('day')){
  myDay = urlParams.get('day')
} else{
  myDay = today
}


// change to a number not string
myDay = parseInt(myDay)
switch (myDay) {

  case 0:
    today = "Sunday";
    coffee = {
      color: '#FF7518',
      name: 'Pumpkin Spice',
      pic: 'pumpkin-spice-latte.jpg',
      alt: 'picture of pumpkin spice',
      day: 'Sunday',
      desc: `which makes us wish it was always Fall, as this is one
      of our top sellers!`,
      p: 'yes, pumpkin spice is very good for the soul',
      p2: 'I hope you all enjoy'
    };
    break;
  case 1:
    today = "Monday";
    coffee = {
      color: 'pink',
      name: 'Bubble Tea',
      pic: 'bubble-tea.jpg',
      alt: 'A picture of bubble tea',
      day: 'Monday',
      desc: `I like bubble tea`,
      p: 'yes, bubble tea is very good for the soul',
      p2: 'live mas'
    };
    break;
  case 2:
    today = "Tuesday";
    coffee = {
      color: 'brown',
      name: 'Caramel Latte',
      pic: 'caramel-latte.jpg',
      alt: 'picture of caramel latte',
      day: 'Tuesday',
      desc: `It's cold, so a caramel latte sounds good`,
      p: 'yes, Caramel Latte is very good for the soul',
      p2: 'get crunk'
    };
    break;
  case 3:
    today = "Wednesday";
    coffee = {
      color: '#241444',
      name: 'Cold Brew',
      pic: 'cold-brew.jpg',
      alt: 'picture of cold brew',
      day: 'Wednesday',
      desc: `Nothing like some refreshing cold brew`,
      p: 'yes, Cold BREW is very good for the soul',
      p2: 'Cold, like the weather'
    };
    break;
  case 4:
    today = "Thursday";
    coffee = {
      color: 'black',
      name: 'Drip Coffee',
      pic: 'drip.jpg',
      alt: 'picture of drip',
      day: 'Thursday',
      desc: `A drink to match my soul`,
      p: 'yes, Drip coffee is very good for the soul',
      p2: 'drip drip'
    };
    break;
  case 5:
    today = "Friday";
    coffee = {
      color: '#00704A',
      name: 'Frappaccino',
      pic: 'frappaccino.jpg',
      alt: 'picture of frappaccino',
      day: 'Friday',
      desc: `Cool down with one`,
      p: 'yes, frappaccino is very good for the soul',
      p2: 'Have you seen Zoolander?'
    };
    break;
  case 6:
    today = "Saturday";
    coffee = {
      color: '#C8AD90',
      name: 'Mocha',
      pic: 'mocha.jpg',
      alt: 'picture of mocha',
      day: 'Saturday',
      desc: `Saturday mocha? Who could say no?`,
      p: 'yes, Mocha is very good for the soul',
      p2: 'Zoolander reference again'
    };
    break
  default:
    alert('switch case error')
}

document.getElementById('coffee-template').innerHTML = coffeeTemplate(coffee);
document.getElementById('feature').innerHTML = coffee.p
document.getElementById('feature2').innerHTML = coffee.p2

document.querySelector("html").style.backgroundColor = coffee.color
document.getElementByID("feature").style.color = coffee.color







//https://tinyurl.com/dynamic-html-checker
document.getElementById("html-checker").setAttribute("href", "https://validator.w3.org/nu/?doc=" + location.href);

document.getElementById("css-checker").setAttribute("href", "https://jigsaw.w3.org/css-validator/validator?uri=" + location.href);

document.getElementById("this-year").innerHTML = thisYear;
