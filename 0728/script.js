form.onclick = function(event) {
    event.target.style.backgroundColor = 'red';
  
    setTimeout(() => {
      alert();
      event.target.style.backgroundColor = ''
    }, 0);
  };

