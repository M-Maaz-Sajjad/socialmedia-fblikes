// Example: Add a hover message on each benefit box (optional)

document.querySelectorAll('.benefit-box').forEach(box => {
    box.addEventListener('mouseover', () => {
        box.style.backgroundColor = '#f0f8ff';
    });
    box.addEventListener('mouseout', () => {
        box.style.backgroundColor = '#ffffff';
    });
});