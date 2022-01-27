let clickButton = function(buttonEvent) {
    console.log(buttonEvent);
 }
 document.getElementById("btnToClick").addEventListener("click", buttonEvent);

 text.addEventListener('focus', (event) => {
    event.target.style.background = 'pink';
    console.log(event);
  });