function rgb2hex(str) {
  let rgb = str.replace(/\s/g, '')
  rgb = rgb.split("(")[1].split(")")[0];
  rgb = rgb.split(",");
  
  let hex = rgb.map(function(x){            //For each array element
      x = parseInt(x).toString(16);         //Convert to a base16 string
      return (x.length==1) ? "0"+x : x;     //Add zero if we get only one character
  })
  hex = hex.join("");

  return hex;
}

black.onclick = function(event) {
  const targetId = event.target.id;
  const bgColor = ntc.name(rgb2hex(getComputedStyle(document.getElementById(targetId)).backgroundColor))[1].toLowerCase();
  console.log(rgb2hex(getComputedStyle(document.getElementById(targetId)).backgroundColor));

  if (bgColor == 'black')
      event.target.style.backgroundColor = 'yellow';
  else if (bgColor == 'yellow')
      event.target.style.backgroundColor = 'black';

  setTimeout(() => {
    alert(bgColor);
    event.target.style.backgroundColor = bgColor;
  }, 0);
  };



