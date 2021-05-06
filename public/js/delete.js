 
  const delButtonHandler = async (event) => {
    event.preventDefault();
    if (event.target.hasAttribute('data-id')) {
      
      const id = event.target.getAttribute('data-id');
      console.log(id)
      const response = await fetch(`/api/projects/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to delete project');
      }
    }
  };
   
  document
    .querySelector('.deleteProject')
    .addEventListener('click', delButtonHandler);
  