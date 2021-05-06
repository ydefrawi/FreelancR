const addprojectFormHandler = async (event) => {
      event.preventDefault();
    
      const name = document.querySelector('#name-addproject').value.trim();
      const description = document.querySelector('#description-addproject').value.trim();
      const starting_price = document.querySelector('#starting_price-addproject').value.trim();

      if (name && starting_price && description) {
        const response = await fetch('/api/projects/addProject', {
          method: 'POST',
          body: JSON.stringify({ name, starting_price, description }),
          headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
          document.location.replace('/');
        } else {
          alert('Failed to save post.');
        }
      }
    };
  
  
  
    document.querySelector('.addproject-form').addEventListener("submit", addprojectFormHandler);


    const delprojectFormHandler = async (e) => {
      let res = await fetch('/api/projects/delProject/' + e.target.value, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });
    
        if (res.ok) {
          document.location.replace('/');
        } else {
          alert('Failed to delete project.');
        }
    }
  
  
  document.querySelector('.delButton').addEventListener("click", delprojectFormHandler);