const items = [
    "img/01.jpg",
    "img/02.jpg",
    "img/03.jpg",
    "img/04.jpg",
    "img/05.jpg",
];

const titles = [
    "Svezia",
    "Svizzera",
    "Gran Bretagna",
    "Germania",
    "Paradise",
];

const texts = [
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed ea temporibus aliquam quam neque corrupti cum quibusdam alias maiores in voluptate atque, molestiae quod. Nostrum exercitationem debitis dolorum fugiat deserunt.",
    "Lorem ipsum .",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed ea temporibus aliquam quam neque corrupti cum quibusdam alias maiores in voluptate atque, molestiae quod.",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed ea temporibus aliquam quam neque corrupti cum quibusdam alias maiores in voluptate atque, molestiae quod. Nostrum exercitationem debitis dolorum fugiat deserunt.",
];

let slides = '';

let active = 0  ;

for (let i = 0; i < items.length; i++) {
    slides +=  `<div class="items">
                    <img src="${items[i]}">
                </div>`;           
}

let slider = document.getElementsByClassName('slider') [0]
slider.innerHTML = slides

itemsRef.innerHTML = item;
document.getElementsByClassName('item')[active].classList.add('active');




