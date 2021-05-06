
  const deletePostHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');
      
    const response = await fetch(`/api/projects/${id}`,{
          method: 'DESTROY',
          headers: {'Content -Type': 'application/json'},
        }
        
        )

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
    
// projectID = document.querySelector(".delButton").getAttribute("data-id")
document
.querySelector('.projectDel')
.addEventListener('click', deletePostHandler);
