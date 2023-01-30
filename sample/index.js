const btnProp = {
  backgroundColor: "red",
  color: "white",
  padding: "30px",
  fontSize: "30px",
};

const editButton = document.createElement("button");
const para = document.createElement("p");
const div = document.createElement("div");

editButton.textContent = "Edit";
para.textContent = "This is paragraph one";

editButton.setAttribute("class", "edit-button");
editButton.style.cssText = "background-color: red; color: white; padding: 30px";

div.appendChild(editButton);
document.body.appendChild(div);
document.body.appendChild(para);
