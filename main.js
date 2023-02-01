const dark = document.querySelector(".dark");
const thumbBar = document.querySelector(".thumb-bar")
const display = document.querySelector(".displayed-img");
const overlay = document.querySelector(".overlay");

const images = ['pic1.jpg', `pic2.jpg`, `pic3.jpg`, `pic4.jpg`, `pic5.jpg`];
const alts = {
  'pic1.jpg' : 'Closeup of a human eye',
  'pic2.jpg' : 'Rock that looks like a wave',
  'pic3.jpg' : 'Purple and white pansies',
  'pic4.jpg' : 'Section of wall from a pharoah\'s tomb',
  'pic5.jpg' : 'Large moth on a leaf'
}

for (const img of images){
    const newImg = document.createElement("img");
    newImg.setAttribute('src', `images/${img}`);
    newImg.setAttribute('alt', alts[img]);
    thumbBar.appendChild(newImg);
    newImg.addEventListener('click', event => {
        display.src = event.target.src;
        display.alt = event.target.alt;
    });
}


function color_Change(){
    const ref = dark.getAttribute('class');
    if (ref === "dark"){
        dark.setAttribute('class', 'light');
        dark.innerText = "Lighten";
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    } else {
        dark.setAttribute('class', "dark");
        dark.innerText = "Darken";
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0)";
    }
}

dark.addEventListener('click', color_Change);