const menuIcon = document.querySelector('.menuIcon');
const navLinks = document.querySelector('.navLinks');

menuIcon.onclick = () => {
  if(navLinks.offsetHeight == 0){
    navLinks.style.height = "269px";
    console.log(navLinks.offsetHeight)
    menuIcon.classList.add("fa-xmark");
  }else{
    navLinks.style.height = "0";
    menuIcon.classList.remove("fa-xmark");
  }
}


function copyToClipboard(e){
  navigator.clipboard.writeText(e.parentElement.firstElementChild.innerText);
  e.lastElementChild.lastElementChild.innerText = "copied";
}