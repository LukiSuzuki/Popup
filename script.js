function openModal(url) {
    const modal = document.getElementById('modal');
    const iframe = document.getElementById('iframe');

    iframe.src = url;  // Set the iframe source to the specified URL
    modal.style.display = 'block';  // Show the modal
}

function closeModal() {
    const modal = document.getElementById('modal');
    const iframe = document.getElementById('iframe');

    modal.style.display = 'none';  // Hide the modal
    iframe.src = '';  // Clear the iframe source to stop loading content
}

// Close the modal when clicking outside the content area
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        closeModal();
    }
}
