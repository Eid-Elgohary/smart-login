user = (localStorage.getItem('welcomeName'));

console.log(user);
const userNameSpan = document.querySelector('#userName');
var logOut = document.querySelector('.logOutBtn');


if(localStorage.getItem('users')){
   userNameSpan.innerHTML = user ;
}

logOut.addEventListener('click',function(){
   window.location.href = 'index.html';
   localStorage.removeItem('welcomeName');

})