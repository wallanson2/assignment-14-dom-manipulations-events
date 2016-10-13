// GO!

// TASK 1 -- Show/Hide Nav

var navButtonEl = document.querySelector('#bigButton');

var masterHide = function(){
  var navMenuEl = document.querySelector('.nav-menu');
  console.log(navMenuEl)
  if(navButtonEl.innerHTML === 'Hide Me') {
    navMenuEl.style.visibility = 'hidden';
    navButtonEl.innerHTML = 'Show Me';
  } else {
    navMenuEl.style.visibility = 'visible';
    navButtonEl.innerHTML = 'Hide Me';
  }
}
navButtonEl.addEventListener('click', masterHide);

//========================================================

// TASK 2 -- Select an Icon

var wishListLiEls = document.querySelectorAll('.wish-list div')

var onClick1El = function(evt){
  console.log(evt.currentTarget)
  var clickedDivEl = evt.currentTarget;
  if(clickedDivEl.getAttribute('class') !== "selected") {
    clickedDivEl.setAttribute('class', 'selected');
  } else {
    clickedDivEl.classList.remove('selected');
  }
}

for (var i = 0; i < wishListLiEls.length; i += 1) {
  wishListLiEls[i].addEventListener('click', onClick1El)
}

//============================================================

// TASK 3 -- Move Item From List to List

var listOfStanding = document.querySelectorAll('#list-2-list ul li')
// console.log(listOfStanding)

var onClickLiEl = function(evt) {
  var clickedLiEl = evt.target.parentNode
  var clickedEl = evt.target
  var goodStandingList = document.querySelector('.good-standing-list')
  var probationList = document.querySelector('.probation-list')
  var clickedAttribute = clickedLiEl.getAttribute('class')

  if (clickedAttribute === 'good-standing-list') {
    probationList.appendChild(clickedEl)
  } else {
    goodStandingList.appendChild(clickedEl)
  }
}

for (var i = 0; i < listOfStanding.length; i += 1) {
  listOfStanding[i].addEventListener('click', onClickLiEl)
}

//==================================================================

// TASK 4 -- Add Guest to List

var inputBox = document.querySelector('.answer-box input');
var guestList = document.querySelector('.guest-list');

var whosComing = function(evt) {
  if(evt.keyCode === 13) {
    guestList.innerHTML += '<li class = guest>' + inputBox.value + '</li>';
    inputBox.value = '';
  }
}

inputBox.addEventListener('keydown', whosComing);

//====================================================================

// TASK 5 -- (Adventure Mode)-- Add + Remove Item From List

console.log("Am I wired Up?")
var inPutBox = document.querySelector('#add-guest-bonus input');
// console.log(inPutBox)
var itemList = document.querySelector('#add-guest-bonus ul');
// console.log(itemList)

var counter = 0
var whichItems = function(evt) {
  // console.log(evt)

  if ( evt.keyCode === 13 ) {

    itemList.innerHTML += '<li class = guest>' + inPutBox.value + '<button class=remove ></button>' + '</li>' ;
    inPutBox.value = '';

    var takeAwayButton = document.querySelector('.remove').addEventListener('click', removeMe)
    var itemEl = document.querySelector('#add-guest-bonus ul li')
    var itemLiEl = itemEl[counter]
    // console.log(itemLiEl)
    // takeAwayButton.addEventListener('click', removeMe)
    counter += 1

  }


  //   for ( var i = 0; i < itemList.children; i += 1)
  //     console.log(itemsList.children)


}
//=======  working on the button below ====================
var removeMe = function(event) {
  var killButton = event.target.remove(itemEl)

  // if (event.target.tagName.toLowerCase() === 'li') {
    // itemList.appendChild('ul')
  // }
}
// var removeMe = function() {
//   console.log('does this button work')
//   itemList.remove('li')
// // if ( ) {
// //
// }
// var takeButton = document.querySelector('.remove')

// console.log(takeButton)
// console.log(takeButton)
// var takeAwayButton = function() {
// console.log("does this button work?")
//
//   console.log(takeButton)
  // var itemsListLi = document.querySelector('#add-guest-bonus li')
  // console.log(itemsListLi)

  // itemList.innerHTML = ''



inPutBox.addEventListener('keydown', whichItems);
takeAwayButton.addEventListener('click', removeMe)
