let btn = document.querySelector(".btn");
let butn = document.querySelector(".butn");

let hide = document.querySelector("#maindiv");
let show = document.querySelector(".box");

btn.addEventListener("click", () => {
  let store = document.getElementById("userinput").value;
  // var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (store === "") {
    window.alert("Enter the Email");
    userinput.style.border = "2px solid red";
  } else {
    document.getElementById("email").textContent = store;
    console.log(store);
    hide.style.display = "none";
    show.style.display = "block";
  }
});

butn.addEventListener("click", () => {
  show.style.display = "none";
  hide.style.display = "flex";
});
