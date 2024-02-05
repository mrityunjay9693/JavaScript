// const uname = document.getElementById('username');
// const email = document.getElementById('email');
// const phoneNumber = document.getElementById('phone');
// const button = document.getElementById('btn');

// button.addEventListener('click', () =>{
    
//     const value1 = uname.value;
//     const value2 = email.value;
//     const value3 = phoneNumber.value;
//     localStorage.setItem("name", value1);
//     localStorage.setItem("email", value2);
//     localStorage.setItem("phoneNumber", value3);
    
// });

const form = document.querySelector("form");
form.addEventListener("submit", (event)=>{
  const username = event.target.username.value;
  const email = event.target.email.value;
  const phone = event.target.phone.value;
  
  let userData = JSON.parse(localStorage.getItem("userDetails")) || [];
  userData.push({
    'username' : username,
    'email' : email,
    'phone' : phone   
  })

  localStorage.setItem("userDetails",JSON.stringfy(userData));
 
  event.preventDefault();
  
})
