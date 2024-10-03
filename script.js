const menuIcon = document.querySelector('.menuIcon');
const navLinks = document.querySelector('.navLinks');

menuIcon.onclick = () => {
  if(navLinks.offsetHeight == 0){
    navLinks.style.height = "325px";
    menuIcon.classList.add("fa-xmark");
  }else{
    navLinks.style.height = "0";
    menuIcon.classList.remove("fa-xmark");
  }
}

function closeMenu(){
  navLinks.style.height = "0";
  menuIcon.classList.remove("fa-xmark");
}

function copyToClipboard(e){
  navigator.clipboard.writeText(e.previousElementSibling.textContent);
  e.classList.add('fa-check');
  e.classList.remove('fa-copy');
}