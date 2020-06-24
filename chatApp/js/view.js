const view ={
}
view.setActiveScreen = (screenName) =>{
    switch (screenName){
        case 'registerScreen':
            document.getElementById('app').innerHTML = components.registerScreen
            const registerForm = document.getElementById('form-register')
            const btn = document.getElementById('redirect-to-login')
            btn.addEventListener('click',function(){
                view.setActiveScreen('loginScreen')
            })
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
                } else {document.getElementById('error-first-name').innerText = ""}
                if(registerInfo.lastName === ''){
                    document.getElementById('error-last-name').innerText = "Please input last name"
                } else {document.getElementById('error-last-name').innerText = ""}
                if(registerInfo.email === ''){
                    document.getElementById('error-email').innerText = "Please input email"
                } else {document.getElementById('error-email').innerText = ""}
                if(registerInfo.password === ''){
                    document.getElementById('error-password').innerText = "Please input password"
                } else {document.getElementById('error-password').innerText = ""}
                if(registerInfo.confirmPassword === ''){
                    document.getElementById('error-confirm-password').innerText = "Please input confirm password"
                } else {document.getElementById('error-confirm-password').innerText = ""}
                controller.register(registerInfo)
            }
            )
            break;
        case 'loginScreen':
            document.getElementById('app').innerHTML = components.loginScreen
            const loginForm = document.getElementById('form-login')
            const loginBtn = document.getElementById('redirect-to-register')
            loginBtn.addEventListener('click',function(){
                view.setActiveScreen('registerScreen')
            })
            loginForm.addEventListener('submit', (e) =>{
                e.preventDefault()
                const loginInfo = {
                    email: loginForm.email.value,
                    password: loginForm.password.value,
                }
                if(loginInfo.email === ''){
                    document.getElementById('error-email').innerText = "Please input email"
                } else {document.getElementById('error-email').innerText = ""}
                if(loginInfo.password === ''){
                    document.getElementById('error-password').innerText = "Please input password"
                } else {document.getElementById('error-password').innerText = ""}
                controller.register(loginInfo)
            }
            )
            break
        }
}