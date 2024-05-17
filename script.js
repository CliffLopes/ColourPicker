 let getColour = () => {
  let randnum = Math.floor(Math.random() * 16777215);
  let randonColour = "#" + randnum.toString(16);
  document.body.style.backgroundColor = randonColour;
  document.getElementById("myid").innerText = randonColour;

 }
 document.getElementById("btn").addEventListener("click" , getColour)
 getColour();