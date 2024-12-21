const menuIcon = document.querySelector("#menu-icon");
const navLinks = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
};

var typed = new Typed(".auto-typed", {
    strings: [
        'Cybersecurity Student',
        "Penetration Tester",
        "Threat Hunter",
        "Red Teamer",
        "Security Researcher"
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
})



document.getElementById('myForm').addEventListener('submit', async function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the input value
    const email = document.querySelector('input[name="email"]').value;
    const fullName = document.querySelector('input[name="name"]').value;
    const message = document.querySelector('textarea[name="message"]').value;

    // Prepare the form data
    const formData = new FormData();
    formData.append('entry.984568658', email);
    formData.append('entry.1994126310', fullName);
    formData.append('entry.401660184', message);

    // Send the data using fetch
    try {
        // Send the data using async/await
        await fetch('https://docs.google.com/forms/d/e/1FAIpQLSdsz46Mci1ANEs06iPt4NzBtffAA-j_Z6nnTDgZaHqNj8muDw/viewform?usp=header', {
          method: 'POST',
          body: formData,
          mode: 'no-cors' // Prevent CORS-related issues
        });
    
        // Reset the form and alert on success
        document.getElementById('myForm').reset();
        alert('Form submitted successfully');
      } catch (error) {
        // Handle any errors that occurred during the fetch
        console.error('Error submitting form:', error);
      }
});
