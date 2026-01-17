const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if(name && email) {
        alert(`Thanks, ${name}! Your message has been sent.`);
        contactForm.reset();
    } else {
        alert('Please fill in all fields.');
    }
});
