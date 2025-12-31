document.addEventListener("DOMContentLoaded", () => {
    const tableContainer = document.querySelector(".table-container");
    const animatedTable = document.querySelector(".animated-table");
    
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            tableContainer.style.opacity = 1; // Fade in effect
            animatedTable.classList.add("animate-lines"); // Start border animation
            observer.unobserve(tableContainer); // Stop observing after animation starts
          }
        });
      },
      { threshold: 0.1 }
    );
  
    observer.observe(tableContainer);
  });

  
