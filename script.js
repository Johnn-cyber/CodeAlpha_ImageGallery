const filter = document.querySelectorAll(".flt-btn");
const images = document.querySelectorAll(".image");

// Lightbox / popup elements
const show = document.getElementById("hid");
const touch = document.querySelectorAll(".imaging");
const pop = document.getElementById("set");
const cancel = document.querySelector(".cancel");
const leftBtn = document.querySelector('.left');
const rightBtn = document.querySelector('.right');

// State for navigation
let visibleImgs = []; // array of <img class="imaging"> currently visible after filtering
let currentIndex = -1; // index within visibleImgs for the image shown in the popup

function refreshVisibleImgs() {
    visibleImgs = Array.from(document.querySelectorAll('.image'))
      .filter(div => getComputedStyle(div).display !== 'none')
        .map(div => div.querySelector('.imaging'))
        .filter(Boolean);  // 
}

// Initialize visible images
refreshVisibleImgs();

// Filtering logic: show/hide image containers and refresh visible list
filter.forEach(button => {
    button.addEventListener('click', ()=>{
        const category = button.dataset.category;
        images.forEach(image => {
            if(category === 'all' || image.dataset.category === category){
                image.style.display = 'block';
            }
            else {
                image.style.display = 'none';
            }
        });
        // update the list of visible images after applying the filter
        refreshVisibleImgs();
        // if popup is open but no images remain, close it
        if(show.style.display === 'flex' && visibleImgs.length === 0) {
            show.style.display = 'none';
            currentIndex = -1;
        } else if (show.style.display === 'flex') {
            // if popup is open, keep currentIndex in sync with the visible list
            // try to find the currently shown src in the refreshed list
            const idx = visibleImgs.findIndex(img => img.src === pop.src);
            currentIndex = idx >= 0 ? idx : 0;
            if (visibleImgs[currentIndex]) pop.src = visibleImgs[currentIndex].src;
        }
    });
});

// Open popup when an image is clicked; track index among visible images
touch.forEach(imaging => {
    imaging.addEventListener("click", ()=>{
        refreshVisibleImgs();
        currentIndex = visibleImgs.indexOf(imaging);
        // if clicked image isn't in the visible list for some reason, fallback to first
        if (currentIndex === -1) currentIndex = 0;
        show.style.display = "flex";
        if (visibleImgs[currentIndex]) pop.src = visibleImgs[currentIndex].src;
    });
});

// Navigation helpers
function showAtIndex(index) {
    if (!visibleImgs.length) return;
    currentIndex = ((index % visibleImgs.length) + visibleImgs.length) % visibleImgs.length; // wrap
    pop.src = visibleImgs[currentIndex].src;
}

leftBtn.addEventListener('click', ()=>{
    refreshVisibleImgs();
    if (!visibleImgs.length) return;
    showAtIndex(currentIndex - 1);
});

rightBtn.addEventListener('click', ()=>{
    refreshVisibleImgs();
    if (!visibleImgs.length) return;
    showAtIndex(currentIndex + 1);
});

// Cancel/close popup
cancel.addEventListener('click', ()=>{
    show.style.display = "none";
    currentIndex = -1;
});

// Keyboard navigation: left/right arrows and escape
document.addEventListener('keydown', (e) => {
    if (show.style.display !== 'flex') return;
    if (e.key === 'ArrowLeft') {
        leftBtn.click();
    } else if (e.key === 'ArrowRight') {
        rightBtn.click();
    } else if (e.key === 'Escape') {
        cancel.click();
    }
});