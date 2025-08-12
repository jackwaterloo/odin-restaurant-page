
const contentDiv = document.querySelector("div#content");

export default function refreshPage(sections) {
  contentDiv.innerHTML="";
  for (const section of sections) {
    contentDiv.appendChild(section);
  }
};