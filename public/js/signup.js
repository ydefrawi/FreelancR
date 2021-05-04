const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const tierEl = document.querySelector('#validationCustom04')
    const tier = tierEl.options[tierEl.selectedIndex].innerHTML;
   

    if (name && tier && email && password) {
        console.log(tier);
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ name, tier, email, password}),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
  
  };


document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);