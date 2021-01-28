var button = document.querySelector(".addBtn");

button.addEventListener("click", addingitem);

function addingitem() {
  // adding the item logic
  var ul = document.querySelector(".myul");
  var input = document.querySelector(".inputarea").value;
  if (input === "" || input.length > 15) {
    console.log("error");
  } else {
    var newli = document.createElement("li");
    var text = document.createTextNode(input);

    newli.appendChild(text);
    ul.appendChild(newli);

    // adding delete butto along with class

    var newDeleteBtn = document.createElement("button");
    newDeleteBtn.innerText = "delete";
    newDeleteBtn.classList = "deleteBtn";
    newli.appendChild(newDeleteBtn);

    //adding delete logic

    var alllistItem = document.getElementsByClassName("deleteBtn");

    for (var i = 0; i < alllistItem.length; i++) {
      alllistItem[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
      };
    }
  }
}

//adding strick through effect
var list = document.querySelector("ul");

list.addEventListener("click", function (ele) {
  if (ele.target.tagName === "LI") {
    ele.target.classList.toggle("checked");
  }
});
