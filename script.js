
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
  listItem.style.transitionDuration='1s'

}
input.value=''

});

filterButton.addEventListener("click", () => {
  const listItems = document.querySelectorAll(".list-item");
  const sortedListItems = Array.from(listItems).sort((a, b) => a.textContent.localeCompare(b.textContent));
  list.innerHTML = "";
  sortedListItems.forEach((item) => list.appendChild(item));
});

