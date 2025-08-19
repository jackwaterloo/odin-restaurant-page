import menuData from "../public/json/menu.json"; //valid way to import JSON. Should already be handled by webpack by default

const menuPage = [];

// title section

let section = document.createElement("section");
const h1 = document.createElement("h1");
h1.textContent = "Menu";
section.classList.add("title-sect");
section.appendChild(h1);

menuPage.push(section);

// menu content
for (const title in menuData) {
    // title is section of menu. Like beverages, entree, etc
    section = document.createElement("section");
    const h2 = document.createElement("h2");
    h2.textContent = title;
    section.classList.add("menu-cat");
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

export default menuPage;