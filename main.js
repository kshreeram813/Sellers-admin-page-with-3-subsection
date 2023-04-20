function PageAdmin(event) {
    event.preventDefault();
  
    //get input value
    var newPrice = document.getElementById("price").value;
    var newProduct = document.getElementById("product").value;
    var newcategory = document.getElementById("category").value;
  
    let infoObj = {
        newPrice,
        newProduct,
        newcategory,
    };
  
    axios
      .post(
        "https://crudcrud.com/api/af6c51809f2c413ab74e1eb452d8de2b/AdminPage",
        infoObj
      )
      //
      .then((response) => {
        showOnScreen(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  
  
  window.addEventListener("DOMContentLoaded", () => {
    axios
      .get(
        "https://crudcrud.com/api/af6c51809f2c413ab74e1eb452d8de2b/AdminPage"
      )
  
      .then((response) => {
        for (let i = 0; i < response.data.length; i++) {
          showOnScreen(response.data[i]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });
  
  function showOnScreen(infoObj) {
    let users = document.getElementById("list of users");
    var data = document.createElement("li");
  
    data.textContent = ` ${infoObj.newPrice}  ${infoObj.newProduct} ${infoObj.newcategory}`;
  
    // Add class
  
    data.className = "list-group-item";
  
    //Create a delete button
    var deleteBtn = document.createElement("input");
    deleteBtn.type = "button";
    deleteBtn.value = "delete";
  
    //add classes to delete button
    deleteBtn.className = "btn-delete";
  
    //Append Text node to delete
    deleteBtn.appendChild(document.createTextNode("X"));
  
    deleteBtn.onclick = () => {
      axios
        .delete(
          `https://crudcrud.com/api/af6c51809f2c413ab74e1eb452d8de2b/AdminPage/${infoObj._id}`
        )
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
      users.removeChild(data);
    };
  
    //Create a edit button
    var editBtn = document.createElement("input");
    editBtn.type = "button";
    editBtn.value = "edit";
  
    //add classes to edit button
    editBtn.className = "btn-edit";
  
    //Append Text node to edit
    deleteBtn.appendChild(document.createTextNode("edit"));
  
    editBtn.onclick = () => {
      axios
        .delete(
          `https://crudcrud.com/api/af6c51809f2c413ab74e1eb452d8de2b/AdminPage/${infoObj._id}`
        )
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
      users.removeChild(data);
      document.getElementById("price").value = infoObj.newPrice;
      document.getElementById("product").value = infoObj.newProduct;
      document.getElementById("category").value = infoObj.newcategory;
    };
    //append child
    data.appendChild(editBtn);
    data.appendChild(deleteBtn);
    users.appendChild(data);
  }
