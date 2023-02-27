
const clickOval = document.querySelector('.oval');
let list= document.querySelector('ol');
let input= document.querySelector('input');
let deleteIcon = document.querySelector(".secondCancel");
const filterButton = document.querySelector(".filter");
let deleteInput = document.querySelector('.cancel')


deleteInput.addEventListener("click", () => {
  input.value=''
})


clickOval.addEventListener("click", () => {
    list.style.border='1px solid #C4C4C4';
    list.style.borderRadius= '10px';
    list.style.marginTop= '20px';
    deleteIcon.style.display='block'

    if(input.value.split('').filter((item) => item != ' ').length === 0)
    {
        alert('Please enter step')
        list.style.border='none'
    } 
  else{
  const listItem = document.createElement("li");
  listItem.className = "list-item";

  const text = document.createElement("p");
  text.innerText = input.value;
  listItem.appendChild(text);


  const deleteButton = document.createElement("button");
  deleteButton.className = "delete-button";
  deleteButton.appendChild(deleteIcon.cloneNode(true));
  deleteButton.addEventListener("click", () => {
    list.removeChild(listItem);
    if (list.children.length=== 0) { 
      list.style.border = "none";
    }
  });
  listItem.appendChild(deleteButton);

  list.appendChild(listItem);

}
input.value=''

});

function alphabeticalSort(a, b) {
  if (a.textContent < b.textContent) {
    return -1;
  } else if (a.textContent > b.textContent) {
    return 1;
  } else {
    return 0;
  }
}

filterButton.addEventListener("click", () => {
  const listItems = document.querySelectorAll(".list-item");
  const sortedListItems = Array.from(listItems).sort(alphabeticalSort);
  list.innerHTML = "";
  sortedListItems.forEach((item) => list.appendChild(item));
});
