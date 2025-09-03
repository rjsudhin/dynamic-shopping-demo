const userInput = document.querySelector('#user-input')
const addItemBtn = document.querySelector('.add-item-btn')
const menu = document.querySelector('#menu')


// add item button clicks
addItemBtn.addEventListener('click', (e) => {
  checkingTheInputField()
})

// checking values are inputed or not
function checkingTheInputField() {
  if (userInput.value != '') {
    console.log('field are filled')
    addingItemsInList()
  }
}


function addingItemsInList() {
  let userWish = userInput.value 
  userInput.value = ''
  console.log(userWish)
  creatingWishList(userWish)
  userInput.focus()
}

function creatingWishList(item) {
  let li = document.createElement('li')
  let span = document.createElement('span')
  span.textContent = item
  span.classList.add('wish-item')
  let deleteButton = document.createElement('button')
  deleteButton.textContent = 'delete'
  deleteButton.classList.add('delete-btn')
  deleteButton.addEventListener('click', removeCurrentItem)
  li.append(span, deleteButton)
  menu.appendChild(li)
}


// when the delete button clicks
function removeCurrentItem(e) {
  // select the current button
  let button = e.target
  // getting the parent element of li
  let parentElement = button.parentNode
  // remove the current wish list element
  menu.removeChild(parentElement)
}