// isLoggedIn=>

// doLogin=> data => set to localStorage

// doLogout => remove from localStorage

export const isLoggedIn = () =>{
    let data = localStorage.getItem("data");
    if(data != null) return true;
    return false;
}

export const doLogin = (loginData,next)=>{
    localStorage.setItem("data",JSON.stringify(loginData))
    next()
}


// doLogout => remove from localStorage

export const doLogout = (next) =>{
    localStorage.removeItem("data")
    next()
}

// get currentUser
export const getCurrentUserDetail = () =>{
    if(isLoggedIn){
        return JSON.parse(localStorage.getItem("data")).user
    }
    return false
}