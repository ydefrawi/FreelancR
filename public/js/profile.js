const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#project-name').value.trim();
  const starting_price = document.querySelector('#project-funding').value.trim();
  const description = document.querySelector('#project-desc').value.trim();

  if (name && starting_price && description) {
    //CONSOLE LOG BEING HIT
    console.log('New Project Submitted')
    const response = await fetch(`/api/projects`, {
      method: 'POST',
      body: JSON.stringify({ name, starting_price, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to create project');
    }
  }
};

document
  .querySelector('.new-project-form')
  .addEventListener('submit', newFormHandler);

