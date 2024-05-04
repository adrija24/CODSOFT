let string = "";
let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      document.querySelector("input").value = string;
    } 
    else if (e.target.innerHTML == "AC") {
        string = "";
        document.querySelector("input").value = string;
      } 
      else if (e.target.innerHTML == "DEL") {
        string = document.querySelector("input").value.slice(0,-1);
        console.log(string);
        document.querySelector("input").value = string;
      } 
    else {
      string = string + e.target.innerHTML;
      document.querySelector("input").value = string;
    }
  });
});
