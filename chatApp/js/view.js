const view ={

}
view.setActiveScreen = (screenName) =>{
    switch (screenName){
        case 'registerScreen':
            document.getElementById('app').innerHTML = components.registerScreen
            const registerForm = document.getElementById('form-register')
            registerForm.addEventListener('submit', (e) =>{
                e.preventDefault()
                const registerInfo = {
                    firstName: registerForm.firstName.value,
                    lastName: registerForm.lastName.value,
                    email: registerForm.email.value,
                    password: registerForm.password.value,
                    confirmPassword: registerForm.confirmPassword.value
                }
                if(registerInfo.firstName === ''){
                    document.getElementById('error-first-name').innerText = "Please input first name"
                }
                if(registerInfo.lastName === ''){
                    document.getElementById('error-last-name').innerText = "Please input last name"
                }
                controller.register(registerInfo)
            })
            break
    }
}