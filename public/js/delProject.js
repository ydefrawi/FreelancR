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