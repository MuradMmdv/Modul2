
const clickOval = document.querySelector('.oval');
let list= document.querySelector('ol');
let input= document.querySelector('input');
let deleteIcon = document.querySelector(".cancel");
const filterButton = document.querySelector(".filter");




clickOval.addEventListener("click", () => {
    list.style.border='1px solid #C4C4C4';
    list.style.borderRadius= '10px';
    list.style.marginTop= '20px';

    if(input.value==''){
        alert('Please enter step')
    } else{
  const listItem = document.createElement("li");
  listItem.className = "list-item";

  const text = document.createElement("p");
  text.innerText = input.value;
  listItem.appendChild(text);

  deleteIcon.addEventListener("click", () => {
    remove(input).value;
  });

  const deleteButton = document.createElement("button");
  deleteButton.className = "delete-button";
  deleteButton.appendChild(deleteIcon.cloneNode(true));
  deleteButton.addEventListener("click", () => {
    list.removeChild(listItem);
  });
  listItem.appendChild(deleteButton);

  list.appendChild(listItem);
}
});
function clearInput() {
    document.getElementsByTagName("input").value = ""; // Giriş alanının içeriğini boşalt
  }
  


