export const checkVelidateData = (email,password)=>{
    const isEmailVelid = /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/.test(email);
    const isPasswordVelid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(password)

    if(!isEmailVelid) return "Email Id Is Not Velid"
    if(!isPasswordVelid) return "Password Id Is Not Velid"

    return null;
}