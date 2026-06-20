document.addEventListener('DOMContentLoaded', () => {
    // --- Mobile Menu Drawer Toggle ---
    const menuBtn = document.querySelector('.menu-btn');
    const mobileLinks = document.querySelector('.nav-links-mobile');

    if (menuBtn && mobileLinks) {
        menuBtn.addEventListener('click', () => {
            menuBtn.classList.toggle('active');
            mobileLinks.classList.toggle('active');
        });

        // Close menu drawer when clicking a link
        const mobileNavItems = mobileLinks.querySelectorAll('a');
        mobileNavItems.forEach(item => {
            item.addEventListener('click', () => {
                menuBtn.classList.remove('active');
                mobileLinks.classList.remove('active');
            });
        });
    }

    // --- Contact Form Submission Handler ---
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Fetch input values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();

            if (!name || !email || !subject || !message) {
                alert('Please fill out all fields.');
                return;
            }

            // Create custom success alert notification banner
            showCustomAlert(`Thank you for contacting me, ${name}! Your message has been sent successfully.`);

            // Reset form
            contactForm.reset();
        });
    }

    // --- Custom Alert Box Logic ---
    function showCustomAlert(messageText) {
        // Create alert elements dynamically if they don't exist
        let alertBox = document.querySelector('.custom-alert');
        if (!alertBox) {
            alertBox = document.createElement('div');
            alertBox.className = 'custom-alert';
            
            const checkIcon = document.createElement('span');
            checkIcon.innerHTML = '✔';
            checkIcon.style.color = '#22c55e';
            checkIcon.style.fontWeight = 'bold';
            
            const textNode = document.createElement('span');
            textNode.className = 'alert-text';
            
            alertBox.appendChild(checkIcon);
            alertBox.appendChild(textNode);
            document.body.appendChild(alertBox);
        }

        // Set message and animate showing
        alertBox.querySelector('.alert-text').textContent = messageText;
        alertBox.classList.add('show');

        // Automatically hide alert after 4 seconds
        setTimeout(() => {
            alertBox.classList.remove('show');
        }, 4000);
    }
});
