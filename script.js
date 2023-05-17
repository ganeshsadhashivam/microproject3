const billamount = document.getElementById("bill").value;
const percentbutton = document.querySelectorAll(".percent");
const noOfPeople = document.getElementById("numberofpeople").value;

const generateBill = document.getElementById("generate-bill");

let billAmount = document.getElementById("bill").value;
let percentage = [];
percentbutton.forEach((element) => {
  percentage.push(element.value);
});

generateBill.addEventListener("click", () => {
  console.log(percentage);
});

var lis = document.querySelectorAll(".percent");
lis.forEach(function (el) {
  el.addEventListener("click", onClick, false);
});

function onClick(e) {
  //   var li = e.currentTarget;
  //   var span = li.querySelector('span');
  console.log(e.value);
}
