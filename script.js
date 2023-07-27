const form = document.getElementById('form');
form.noValidate = true; 
form.addEventListener('submit', validateForm);

function validateForm(e) {
  const form = e.target;
  const pswd = form.pswd;
  const pswd2 = form.confirm_pswd;

  if (!form.checkValidity()) {
    e.preventDefault();
    Array.from(form.elements).forEach(i => {
      if(i.checkValidity()) {
        i.classList.remove('invalid');
      } else {
        i.classList.add('invalid');
      }
    });
  }

  if (pswd.value != pswd2.value) {
    pswd.classList.add('invalid');
    pswd.nextElementSibling.textContent = 'Passwords do not match';
    pswd2.classList.add('invalid');
  } 
}

