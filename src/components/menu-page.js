
import menuData from "../menu.json"; //valid way to import JSON. Should already be handeled by webpack by default

console.log(menuData);

const menuPage = [];

// title section

let section = document.createElement("section");
const h1 = document.createElement("h1");
h1.textContent = "Menu";
section.appendChild(h1);

menuPage.push(section);

// menu content
for (const title in menuData) {
    console.log("Below is the title:");
    console.log(title);
    // title is section of menu. Like beverages, entree, etc
    section = document.createElement("section");
    const h2 = document.createElement("h2");
    h2.textContent = title;
    section.appendChild(h2);
    menuPage.push(section);

    for (const item of menuData[title]){
        section = document.createElement("section");
        // name of item on menu
        const hName = document.createElement("h3");
        hName.textContent = item["name"];
        hName.classList.add("item-name");
        // description of item on menu
        const pDesc = document.createElement("p");
        pDesc.textContent = item["description"];
        pDesc.classList.add("item-desc");
        // price
        const pPrice = document.createElement("p");
        pPrice.textContent = item["price"];
        pPrice.classList.add("item-price");

        section.append(hName,pDesc,pPrice);

        menuPage.push(section);
    }
}

console.log(menuPage);

export default menuPage;