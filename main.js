document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    const contactData = {
      name: name,
      email: email,
      message: message
    };
  
    localStorage.setItem('contactData', JSON.stringify(contactData));
  
    alert('Your message has been submitted!');
    
    document.getElementById('contactForm').reset();
  });
  