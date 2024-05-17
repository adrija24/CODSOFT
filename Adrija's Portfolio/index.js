// JavaScript
document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('contactForm');
    var nameInput = document.getElementById('contactName');
    var emailInput = document.getElementById('contactEmail');
    var messageInput = document.getElementById('contactMessage');
    var submitButton = document.getElementById('subBtn');
    var isSubmitting = false;
    var isSubmitted = false;

    function updateButton() {
        var isDisabled = !nameInput.value || !emailInput.value || !messageInput.value || isSubmitted;
        submitButton.disabled = isDisabled;
        submitButton.innerText = isSubmitting ? 'Submitting...' : 'Send Message';
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        isSubmitting = true;
        isSubmitted = true;
        updateButton();

        var data = new FormData(form);
        fetch('https://script.google.com/macros/s/AKfycbwYw_EvfvYrOSRuQ57zTnMFtiLS8X7N5E1S_yYfR6NUCV0OXB_sBi5NfyLzKQjGSVZ4/exec', {
            method: 'POST',
            body: data,
        })
        .then(response => response.json())
        .then(result => {
            if (result.result === 'success') {
                window.location.href = '/contact-success.html';
            } else {
                window.location.href = '/contact-error.html';
            }
        })
        .catch(() => {
            window.location.href = '/contact-error.html';
        });
    });

    [nameInput, emailInput, messageInput].forEach(input => {
        input.addEventListener('input', updateButton);
    });
});