
const userNameSpan = document.querySelector('#userName');
var logOut = document.querySelector('.logOutBtn');


if(localStorage.getItem('users')){
   userNameSpan.innerHTML =JSON.parse( localStorage.getItem('users'))[0].userName;
}

logOut.addEventListener('click',function(){
   window.location.href = 'index.html';
   localStorage.removeItem('users');

})