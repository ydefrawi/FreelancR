const addbidFormHandler = async (event) => {
    event.preventDefault();
    const description = document.querySelector('#description-addbid').value.trim();
    const amount = document.querySelector('#amount-addbid').value.trim();
    if (amount && description) {
        console.loge('BID SUBMITTED')
      const response = await fetch('/api/bids/', {
        method: 'POST',
        body: JSON.stringify({ amount, description }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to save bid.');
      }
    }
  };
  
  const delbidFormHandler = async (e) => {
    let res = await fetch('/api/projects/delBid/' + e.target.value, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  });
      if (res.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to delete bid.');
      }
  }
  
document.querySelector('.addbid-form').addEventListener("submit", addbidFormHandler);

document.querySelector('.delButton').addEventListener("click", delbidFormHandler);