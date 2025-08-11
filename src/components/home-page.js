// exports list of elements to be loaded into a page

const RESTAURANTNAME = "Pancake Palace";
const ABOUTREST = "Pancake Palace is your number one place for pancakes! We serve pancakes in all shapes, sizes, and flavors. Whether you are looking for your classic buttermilk, chocolate chip, or blueberry pancakes or looking for something a bit more extravagant, we have you covered!";
const TIMES = ["Sunday: 8am - 4pm", "Monday: 6am - 3pm", "Tuesday: 6am - 3pm", "Wednesday: 6am - 3pm", "Thursday: 6am - 3pm", "Friday: 6am - 3pm", "Saturday: 8am - 4pm"];
const ADDRESS = "6789 Meadow Rd, Peoria, IL";


// title section
const title = document.createElement("section");
title.setAttribute("id", "title");

const h1 = document.createElement("h1");
h1.textContent = RESTAURANTNAME;

title.appendChild(h1);

// about section
const about = document.createElement("section");
about.setAttribute("id", "about");

const aboutP = document.createElement("p");
aboutP.textContent = ABOUTREST;

about.appendChild(aboutP);

// hours section
const hours = document.createElement("section");
hours.setAttribute("id", "hours");

const ulElem = document.createElement("ul");
for (const time of TIMES){
  const liElem = document.createElement("li");
  liElem.textContent = time;

  ulElem.appendChild(liElem);
}

hours.appendChild(ulElem);

// location section
const location = document.createElement("section");
location.setAttribute("id", "location");

const h2 = document.createElement("h2");
h2.textContent = "Location";

const locationP = document.createElement("p");
locationP.textContent = ADDRESS;

location.appendChild(h2);
location.appendChild(locationP);
// return lists of sections

export default [title, about, hours, location];