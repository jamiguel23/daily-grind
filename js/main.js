'use strict'


// One unique image, with appropriate and matching content in the alt tag.  


// A paragraph or two of content that describes the daily item (paragraph must include the name of the highlighted weekday)

// Image of specific coffee
// alt tag to identify 
// description 
// weekday
// color 


// A unique color that supports the image and paragraph of content


alert('Can you see this?')


let myDate = new Date();
let day = myDate.getDay();
let thisYear = myDate.getFullYear();

let coffee = '';

switch (day) {

  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    coffee = {
      color: 'pink',
      name: 'Bubble Tea',
      pic: 'bubble-tea.jpg',
      alt: 'A picture of bubble tea',
      day: 'Monday',
      desc: `I like bubble tea`,
    };
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break
  default:
    alert('switch case error')
}

console.log(coffee);









//https://tinyurl.com/dynamic-html-checker
document.getElementById("html-checker").setAttribute("href", "https://validator.w3.org/nu/?doc=" + location.href);

document.getElementById("css-checker").setAttribute("href", "https://jigsaw.w3.org/css-validator/validator?uri=" + location.href);

document.getElementById("this-year").innerHTML = thisYear;
