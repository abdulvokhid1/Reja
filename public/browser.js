console.log("Frontend js ishga tuhsdi");

function itemTemplate(item) {
  return ` <li class="list-group-item list-group-item-info d-flex align-items-center justify-content-between">
    <span class="item-text">${item.reja}</span>
    <div>
      <button data-id = ${item._id} class="edit-me btn btn-secondary btn-sm mr-1">change</button>
      <button data-id = ${item._id} class="delete-me btn btn-danger btn-sm">delete</button>
    </div>
  </li>
     `;
}

let createField = document.getElementById("create-field");

// Create

document.getElementById("create-form").addEventListener("submit", function (e) {
  e.preventDefault();

  axios
    .post("/create-item", { reja: createField.value })
    .then((response) => {
      document
        .getElementById("item-list")
        .insertAdjacentHTML("beforeend", itemTemplate(response.data));
      createField.value = "";
      createField.focus();
    })
    .catch((err) => {
      console.log("try again!");
    });
});

document.addEventListener("click", function (e) {
  // delete
  // console.log(e.target);
  if (e.target.classList.contains("delete-me")) {
    if (confirm("are you sure to delete?")) {
      axios
        .post("/delete-item", { id: e.target.getAttribute("data-id") })
        .then((response) => {
          console.log(response.data);
          e.target.parentElement.parentElement.remove();
        })
        .catch((err) => {
          console.log("try again");
        });
    }
  }
  // edit

  if (e.target.classList.contains("edit-me")) {
    let userInput = prompt(
      "Maka a change",
      e.target.parentElement.parentElement.querySelector(".item-text").innerHTML
    );

    if (userInput) {
      axios
        .post("/edit-item", {
          id: e.target.getAttribute("data-id"),
          new_input: userInput,
        })
        .then((response) => {
          console.log(response.data);
          e.target.parentElement.parentElement.querySelector(
            ".item-text"
          ).innerHTML = userInput;
        })
        .catch(function (err) {
          console.log("try again");
        });
    }
  }
});

document.getElementById("clean-all").addEventListener("click", function () {
  axios.post("/delete-all", { delete_all: true }).then((response) => {
    console.log(response.data.state);
    document.location.reload();
  });
});
