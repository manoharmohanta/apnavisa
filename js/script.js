document.addEventListener("DOMContentLoaded", function() {
    // Function to load content from external files
    function loadContent(url, containerId, callback) {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                document.getElementById(containerId).innerHTML = data;
                if (callback) {
                    callback(); // Call the callback function after loading content
                }
            })
            .catch(error => {
                console.error('Error loading content:', error);
            });
    }

    // Load header content
    loadContent("pages/header.html", "headerContainer", function() {
        // After loading header content, get navigation links

        // Function to determine active link
        function setActiveLink() {
            var currentPage = window.location.pathname.split("/").pop(); // Get current page filename
            var links = document.querySelectorAll(".site-navigation li"); // Select all navigation links
            
            links.forEach(function(li) {
                var link = li.querySelector("a"); // Find the <a> element inside the <li>
                // Check if the href attribute of the <a> element matches the current page filename
                if (link && link.getAttribute("href") === currentPage) {
                    li.classList.add("active"); // Add 'active' class to the <li>
                }
            });
        }

        // Call the function to set active link
        setActiveLink();
    });

    // Load footer content
    loadContent("pages/footer.html", "footerContainer");
});
