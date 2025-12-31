// Select the scrolling text element
const scrollingText = document.querySelector(".scrolling-text");
const scrollingText2 = document.querySelector(".scrolling-text2");


// Add a scroll event listener to the window
window.addEventListener("scroll", () => {
    // Calculate the horizontal offset based on scroll position
    const scrollOffset = window.scrollY * 0.5; // Adjust the multiplier to control speed
    scrollingText.style.transform = `translateX(${scrollOffset}px)`;
    scrollingText2.style.transform = `translateX(${scrollOffset}px)`;
    
});


