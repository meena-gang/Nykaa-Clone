const loginForm = document.getElementById("login-form");


loginForm.addEventListener("submit", (e) => {
    
    e.preventDefault();
    let username = document.getElementById("userName");
    let password = document.getElementById("password");
    let userDeatils = {
        email: username.value,
        password: password.value
    }
    let userDeatilsArray = JSON.parse(localStorage.getItem('userDetails')) || [];
    

    if(userDeatilsArray.length > 0){
        
       let existedUser = userDeatilsArray.filter((obj) => obj.email === userDeatils.email);
        if(existedUser.length > 0){
            userDeatilsArray.forEach((obj) => {
                
                if(obj.email == userDeatils.email && 
                    obj.password == userDeatils.password){
                    localStorage.setItem('isLoggedIn','true');
                    window.location.href = '../home.html';
                    }
                else if((obj.email == userDeatils.email && 
                    obj.password != userDeatils.password) ){
                    localStorage.setItem('isLoggedIn','false');
                    window.location.href = '../index.html';
                        alert('Invalid credentials');
                }
            });
        } 
        else{
                alert("User doesn't exist Please create it.");
        }
           
    }else {
        alert("User doesn't exist Please create it.")
    }
    
})