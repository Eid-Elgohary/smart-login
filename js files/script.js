

const emailInput = document.querySelector('.mail');
const passInput = document.querySelector('.pass');
const logBtn = document.querySelector('.logBtn');
const signUplink = document.querySelector('.signUpLink');
const logindiv = document.querySelector('.login');

const signUpdiv = document.querySelector('.signUp');
const setName = document.querySelector('.setName');
const setMail = document.querySelector('.setMail');
const setPass = document.querySelector('.setPass');
const errorP = document.querySelector('#invalid');
const notificationP = document.querySelector('#validUser');
const signUpBtn = document.querySelector('.signUpBtn');
const signInLink = document.querySelector('.signInLink');
notificationP.style.color = "red";


var usersArr = [];
var userName = '';


if(localStorage.getItem('users')){
   usersArr = JSON.parse(localStorage.getItem('users')) ; 
}

logBtn.addEventListener('click', function(){
   if(usersArr.length >0){
      for(var i =0 ; i< usersArr.length; i++){
         if(emailInput.value != usersArr[i].userMail){
            errorP.innerHTML = 'incorrect email ';
         }else if(passInput.value != usersArr[i].userPass){
            errorP.innerHTML = 'incorrect password ';
         }else{
            userName = usersArr[i].userName;
            window.location.href = 'welcome.html';
         }
      }
   }else{
      errorP.innerHTML = 'you have to sign up first ';
   }
})

signUpBtn.addEventListener('click' , function(){

   validateInputs();

   checkMail();

   if(isValidMail && vaildInput ){
      setUserObj();
      saveUserInLocalStorage();
      resetForm();
      notificationP.style.color = "green";
      notificationP.innerHTML = "Success";
   }
   // notificationP.style.color = "red";

})

signInLink.addEventListener('click',function(){
   signUpdiv.classList.add('d-none');
   logindiv.classList.replace('d-none' , 'd-block');
})

signUplink.addEventListener('click',function(){
   logindiv.classList.add('d-none');
   signUpdiv.classList.replace('d-none' , 'd-block');
})

function setUserObj(){
   var userObj ={
      userName : setName.value ,
      userMail : setMail.value ,
      userPass : setPass.value
   }
   usersArr.push(userObj);
}

function saveUserInLocalStorage(){
   localStorage.setItem('users' ,JSON.stringify(usersArr));
}

function resetForm(){
   setName.value = "";
   setMail.value = "";
   setPass.value = "";
}
var vaildInput = true ;

function validateInputs(){
   
   var mailregex = /^[a-zA-Z]{3,}\@[a-zA-Z]{3,7}\.[a-zA-Z]{2,6}$/ ;
   var passRegex  = /^\S{5,}$/;

   if(setName.value == ""){
      notificationP.innerHTML = "invalid user name";
      vaildInput = false ;
   }else{
      vaildInput = true ;
   }

   if( mailregex.test(setMail.value) != true){
      notificationP.innerHTML = "invalid email";
      vaildInput = false ;
   }else{
      vaildInput = true ;
   }

   if(passRegex.test(setPass.value) != true){
      notificationP.innerHTML = "invalid password";
      vaildInput = false ;
   }else{
      vaildInput = true ;
   }
}

var isValidMail = true
function checkMail(){
   isValidMail = true ;

   if(usersArr.length > 0){
      for(var i=0 ; i<usersArr.length; i++){
         if(setMail.value == usersArr[i].userMail){
            notificationP.innerHTML = "email already exist";
            isValidMail =  false ;
         }
      }  
   }
}
