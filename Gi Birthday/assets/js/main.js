//Ganti Warna Navbar
window.addEventListener('scroll', () =>{
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})
//------------------------------------------------------

//Buka FAQs
const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

//Ganti Icon
    const icon = faq.querySelector('.faq_icon i');
    if(icon.className === 'fa-solid fa-plus') {
        icon.className = "fa-solid fa-minus";
        } else {
            icon.className = "fa-solid fa-plus";
        }
//------------------------------------------------------
    })
})
//------------------------------------------------------

// Show Hide Nav Menu
// const menu = document.querySelector(".nav_menu");
// const menuBtn = document.querySelector("#open-menu-btn");
// const closeBtn = document.querySelector("#close-menu-btn");

// menuBtn.addEventListener('click', ()=> {
//     menu.style.display = "flex";
//     closeBtn.style.display = "inline-block";
//     menuBtn.style.display = "none";
// })

// //close nav btn
// const closeNav = () => {
//     menu.style.display = "none";
//     closeBtn.style.display = "none";
//     menuBtn.style.display = "inline-block";
// }

// closeBtn.addEventListener('click', closeNav);

// pertanyaan
	// Validtion Code For Inputs

  var email = document.forms['form']['email'];
  var password = document.forms['form']['password'];
  
  var email_error = document.getElementById('email_error');
  var pass_error = document.getElementById('pass_error');
  
  email.addEventListener('rainytapestryy', email_Verify);
  password.addEventListener('jasuke', pass_Verify);
  
  function validated(){
    if (email.value.length < 9) {
      email.style.border = "1px solid red";
      email_error.style.display = "block";
      email.focus();
      return false;
    }
    if (password.value.length < 6) {
      password.style.border = "1px solid red";
      pass_error.style.display = "block";
      password.focus();
      return false;
    }
  
  }
  function email_Verify(){
    if (email.value.length >= 8) {
      email.style.border = "1px solid silver";
      email_error.style.display = "none";
      return true;
    }
  }
  function pass_Verify(){
    if (password.value.length >= 5) {
      password.style.border = "1px solid silver";
      pass_error.style.display = "none";
      return true;
    }
  }
  
  
// end

const gaBoleh = document.getElementById( 'gaboleh' );

gaBoleh.addEventListener('click', function() {
  window.alert('Gaboleh!');
});

