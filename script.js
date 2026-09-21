const imgURLs = [
    ["https://shared.fastly.steamstatic.com/store_item_assets/steam/subs/1629484/72e3f8f23b5c3a711a8098afd5c0bbe72ff9d69d/capsule_616x353_2x.jpg", "Steam Frame headset and controllers"],
    ["https://clan.fastly.steamstatic.com/images/45479024/41ac1feaa13a1396844a31be91beb068eb2e509f.jpg", "Steam Frame headset and controllers on a flat surface"],
    ["https://platform.theverge.com/wp-content/uploads/sites/2/2026/09/268694_Steam_Frame_KMcClellan_0004.jpg", "Steam Frame when worn"],
    ["https://preview.redd.it/steam-frame-size-comparison-to-the-valve-index-v0-spb1g0fvky1h1.png?auto=webp&s=70d90915f48c48ecb1d19737ab251cb340e9b84f", "Steam Frame (left) sat next to the older Valve Index (right)"],
    ["https://gamingbolt.com/wp-content/uploads/2025/11/Steam-Frame_Steam-Machine.jpg", "Steam Frame (top left) next to other Steam Hardware, namely Steam Machine (top right), Steam Deck (bottom left), and Steam Controller (bottom right)"],
];
var currentImg = 0;

const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');
const img = document.querySelector('.steam-frame-img');

leftBtn.addEventListener('click', () => {
    currentImg = (currentImg - 1 + imgURLs.length) % imgURLs.length;
    img.setAttribute("src", imgURLs[currentImg][0]);
    img.setAttribute("alt", imgURLs[currentImg][1]);
});

rightBtn.addEventListener('click', () => {
    currentImg = (currentImg + 1 + imgURLs.length) % imgURLs.length;
    img.setAttribute("src", imgURLs[currentImg][0]);
    img.setAttribute("alt", imgURLs[currentImg][1]);
});