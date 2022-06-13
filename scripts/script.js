'use strict';


// functions
const showShadowCard = (e) =>{
  e.target.parentElement.children[1].style.display = 'flex';
  // e.target.nextElementSibling.style.visibility = 'visible';
}
const showShadowCard1 = (e) =>{
  console.log(e);
  // e.target.nextElementSibling.style.visibility = 'visible';
}
const hideShadowCard = (e) =>{
  // e.target.nextElementSibling.style.visibility = 'hidden';
  e.target.children[1].style.display = 'none';
  
  // e.target.children[1].firstElementChild.style.visibility = 'hidden';
  
}
const hideShadowCard1 = (e) =>{
  // e.target.nextElementSibling.style.visibility = 'hidden';
  console.log(e);
  // e.target.nextElementSibling.style.visibility = 'hidden';
}