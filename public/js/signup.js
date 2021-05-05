const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const tierEl = document.querySelector('#validationCustom04')
    const freelancer = tierEl.options[tierEl.selectedIndex].getAttribute("value");
   

    if (name && freelancer && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ name, freelancer, email, password}),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  
  };


document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);