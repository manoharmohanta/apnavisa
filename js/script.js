document.addEventListener("DOMContentLoaded", function() {
    // Function to load content from external files
    function loadContent(url, containerId) {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                document.getElementById(containerId).innerHTML = data;
            })
            .catch(error => {
                console.error('Error loading content:', error);
            });
    }

    // Load header content
    loadContent("pages/header.html", "headerContainer");

    // Load footer content
    loadContent("pages/footer.html", "footerContainer");
});
