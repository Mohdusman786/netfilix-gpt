export const checkVelidateData = (email,password)=>{
    // const isNameValid = /^[a-zA-Z ]{2,30}$/.test(name);
    const isEmailValid = /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/.test(email);
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(password)

    // if(!isNameValid) return "Please Enter Full Name"
    if(!isEmailValid) return "Email Id Is not valid"
    if(!isPasswordValid) return "Password Id is not Valid"

    return null;
}