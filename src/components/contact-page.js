import contactInfo from "../public/json/contact-info.json"

const sectionArray = [];
// section with page title
const section = document.createElement("section");
section.classList.add("title-sect");
const h1 = document.createElement("h1");
h1.textContent = "Contact Us";
section.appendChild(h1);

sectionArray.push(section);
// loop through contactInfo and add each contact section
for (const contact of contactInfo) {
  const section = document.createElement("section");
  section.classList.add("contact-card");
  const nameP = document.createElement("p");
  nameP.classList.add("contactName");
  nameP.textContent = contact["name"];
  const strongName = document.createElement("strong"); // strong element to make name bold
  strongName.appendChild(nameP);
  const titleP = document.createElement("p");
  titleP.classList.add("contactTitle");
  titleP.textContent = contact["title"];
  const phoneP = document.createElement("p");
  phoneP.classList.add("contactPhone");
  phoneP.textContent = contact["phone"];
  const emailP = document.createElement("p");
  emailP.classList.add("contactEmail");
  emailP.textContent = contact["email"];

  section.append(strongName,titleP,phoneP,emailP);

  sectionArray.push(section);
}

export default sectionArray;