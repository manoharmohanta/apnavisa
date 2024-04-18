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
    loadContent("pages/footer.html", "footerContainer", function(){
        // WhatsApp icon click event
        document.getElementById('whatsapp-icon').addEventListener('click', function() {
            var iconSrc = document.getElementById('whatsapp-img').getAttribute('src');
            if (iconSrc === '../images/WhatsApp_icon.png') { // Make sure the iconSrc matches the initial image source
                openWhatsAppForm();
            } else {
                closeWhatsAppForm();
            }
        });

        // Function to open WhatsApp form
        function openWhatsAppForm() {
            document.getElementById('whatsapp-form-container').style.display = 'block';
            document.getElementById('whatsapp-img').setAttribute('src', '../images/close_icon.png'); // Correct the path to the close icon image
        }

        // Function to close WhatsApp form
        function closeWhatsAppForm() {
            document.getElementById('whatsapp-form-container').style.display = 'none';
            document.getElementById('whatsapp-img').setAttribute('src', '../images/WhatsApp_icon.png'); // Correct the path to the WhatsApp icon image
        }

        // WhatsApp form submission event
        document.getElementById('whatsapp-form').addEventListener('submit', function(e) {
            e.preventDefault();
            var name = document.getElementById('name').value;
            var contact = document.getElementById('contact').value;
            var email = document.getElementById('email').value;

            var message = 'Name: ' + name + '%0AContact: ' + contact + '%0AEmail: ' + email;

            var whatsappUrl = 'https://wa.me/+917093332363?text=' + message;

            window.open(whatsappUrl, '_blank');

            // Clear form fields
            document.getElementById('name').value = '';
            document.getElementById('contact').value = '';
            document.getElementById('email').value = '';

            // Close WhatsApp form
            closeWhatsAppForm();
        });
    });
});
