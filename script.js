function scrollToGallery() {
    const gallerySection = document.getElementById('gallery-section');
    gallerySection.scrollIntoView({ behavior: 'smooth' });
}

// Show hero content with a delay for better visual effect
document.addEventListener('DOMContentLoaded', () => {
    const heroContent = document.querySelector('.hero-content');
    setTimeout(() => {
        heroContent.classList.add('show');
    }, 300);
});

// Open Modal
function openModal(imgElement) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    modal.style.display = 'flex';
    modalImg.src = imgElement.src;
}

// Close Modal
function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
}

// Close modal when clicking outside of the image
window.onclick = function(event) {
    const modal = document.getElementById('imageModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Open image in a new window
function openImageInNewWindow(imgElement) {
    window.open(imgElement.src, '_blank');
}
