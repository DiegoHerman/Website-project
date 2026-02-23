import {renderSignIn} from "./account.js";


const nav=document.querySelector("nav");
const main=document.querySelector("#app");

document.body.style.margin = "0";
document.body.style.padding = "0";

nav.style.display="flex";
nav.style.justifyContent="flex-end";
nav.style.height="60px";
nav.style.boxShadow="2px 5px 0 0";


const navArray=["categories","account","contact","about"];

navArray.forEach(item=>{
    const navBlockLink=document.createElement("div");
    const navLink=document.createElement("a");
    navLink.setAttribute("href",item);
    navLink.textContent=item;
    navBlockLink.style.display="flex";
    navBlockLink.style.alignItems="center";
    navBlockLink.style.justifyContent="center";
    navBlockLink.style.height="100%";
    navBlockLink.style.width="60px";
    navBlockLink.style.border="2px solid black";
    navBlockLink.style.marginLeft="10px";
    navBlockLink.style.marginRight="10px";
    navBlockLink.appendChild(navLink);

    nav.appendChild(navBlockLink);
});

// Find the nav link with text "account"
const accountLink = Array.from(nav.querySelectorAll("a"))
                         .find(link => link.textContent.toLowerCase() === "account");

if (accountLink) {
  accountLink.style.cursor = "pointer";

  accountLink.addEventListener("click", (e) => {
    e.preventDefault();           // prevent navigation
    renderSignIn(main);           // only call on click
  });
}



const intro=document.createElement("section");
intro.style.marginTop="10%";
intro.style.width="60vw";
const introHeader=document.createElement("h1");
introHeader.textContent="HOME OF ETERNAL GLOW";
introHeader.style.fontSize="2rem";
intro.appendChild(introHeader);

main.appendChild(intro);

const productSection=document.createElement("section");
productSection.style.display="flex";
productSection.style.flexWrap="wrap";
productSection.style.width=`${100*3+2}px`;
productSection.style.height="100%";

for(let i=0;i<6;i++){
    const prodItem=document.createElement("div");
    prodItem.style.width="100px";
    prodItem.style.height="100px";
    prodItem.style.border="2px solid black";
    prodItem.style.margin="5px";
    prodItem.style.borderRadius="10px";
    productSection.appendChild(prodItem);
}

main.appendChild(productSection);

