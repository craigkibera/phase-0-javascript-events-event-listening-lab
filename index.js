function addingEventListener() {
  document.getElementById('button').addEventListener
  ('click',clickAlert)
  function clickAlert() {
    return alert('I was clicked!');
  }
}



// document.getElementById('button').addEventListener
// ('click',() => alert('I was clicked'))