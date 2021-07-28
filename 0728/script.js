box.onclick = function(event) {
    const bgColor = event.target.style.backgroundColor;

    if (bgColor == 'black')
        event.target.style.backgroundColor = 'yellow';
    else if (bgColor == 'yellow')
        event.target.style.backgroundColor = 'black';

    setTimeout(() => {
      alert(bgColor);
      event.target.style.backgroundColor = bgColor;
    }, 0);
  };

