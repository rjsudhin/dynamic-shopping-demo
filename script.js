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
  let listCountElement = document.createElement('span')
  listCountElement.classList.add('count')
  let span = document.createElement('span')
  span.textContent = item
  span.classList.add('wish-item')
  let deleteButton = document.createElement('button')
  deleteButton.textContent = 'delete'
  deleteButton.classList.add('delete-btn')
  deleteButton.addEventListener('click', removeCurrentItem)
  li.append(listCountElement, span, deleteButton)
  menu.appendChild(li)
  checkingWishListCount()
  addingCountNumbers()
}


// when the delete button clicks
function removeCurrentItem(e) {
  // select the current button
  let button = e.target
  // getting the parent element of li
  let parentElement = button.parentNode
  // remove the current wish list element
  menu.removeChild(parentElement)

  addingCountNumbers()

  // when any item removed in less the the limit count it will be adding for next inventory
  if (menu.childElementCount < 5) {
    addItemBtn.disabled = false
    userInput.disabled = false
    userInput.focus()
  }
}

// checking the wish list's count and added limit to add new inventory
function checkingWishListCount() {
  if (menu.childElementCount >= 5) {
    addItemBtn.disabled = true
    userInput.disabled = true
  }
}


function addingCountNumbers() {
  let currentLength = menu.childElementCount
  let currentCountElements = Array.from(document.querySelectorAll('.count'))
  // for (i = 0; i < currentCountElements.length; i++) {
  //   let currentNumber = currentLength
  //   console.log('curent Length is now ' + currentNumber)
  //   console.log(currentCountElements[i])
  //   currentCountElements[i].textContent = currentNumber
  // }

  for (let i = 0; i < currentLength; i++) {
    for (let j = 0; j < currentCountElements.length; j++) {
      currentCountElements[j].textContent = i + 1
    }
  }

  
}