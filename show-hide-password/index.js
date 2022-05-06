const toggleBtn = document.getElementById('toggle-password')
const passwordInput = document.getElementById('password')

toggleBtn.addEventListener('click', function(){
    if(passwordInput.type == 'password'){
        passwordInput.type = 'text'
    }else{
        passwordInput.type = 'password'

    }
})
