const button = document.querySelector("[data-share]");
const share = document.querySelector('.share-list');

function showSocial(){
    share.classList.toggle("display");
}

button.addEventListener("click", showSocial);