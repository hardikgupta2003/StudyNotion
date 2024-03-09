import { toast } from "react-hot-toast";
import {setLoading,setToken} from "../../slices/authSlice"
import{resetCart} from "../../slices/cartSlice"
import {setUser} from "../../slices/profileSlice"
import {apiConnector} from "../apiConnector"
import {endPoints} from "../apis"



const {
    SENDOTP_API,
    SIGNUP_API,
    LOGIN_API,
    RESETPASSWORD_API,
    RESETPASSTOKEN_API,
}= endPoints;


export function sendOtp(email,navigate){
    return async (dispatch)=>{
        const toastID = toast.loading("loading...")
        dispatch(setLoading(true))
        try{
            const response = await apiConnector ( "POST",SENDOTP_API,{
                email,
                checkUserPresent:true,
            })
            console.log("SENDOTP API RESPONSE.......",response)

            console.log(response.data.success)

            if(!response.data.success){
                throw new Error ( response.data.message)
            }

            toast.success("OTP sent SuccessFully")
            navigate( "/verify-email");
        } catch(error){
            console.log("SENDOTP API ERROR",error)
            toast.error("Could not send OTP")
        }
        dispatch(setLoading(false))
        toast.dismiss(toastID)
    }
}


export function signUp(
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
            contactNumber,
            accountType,
            otp,navigate
){
     return async (dispatch) => {
        const toastId = toast.loading("Loading...")
        dispatch(setLoading(true))
        try{
            const response = await apiConnector('POST',SIGNUP_API,{
                firstName,
            lastName,
            email,
            password,
            confirmPassword,
            contactNumber,
            accountType,
            otp
            })

            console.log("SIGNUP API RESPONSE............", response)

            console.log(response.data.success);

            if (!response.data.success) {
                throw new Error(response.data.message)
              }
            toast.success("Signup Successful")
            navigate("/login")
        }
        catch(err){
            
            console.log("SIGNUP API ERROR............", err)
            toast.error("Signup Failed")
            navigate("/signup")
     }   

      dispatch(setLoading(false));
      toast.dismiss(toastId)          

}
}

export function login (email,password ,navigate){
    return async (dispatch)=>{
        const toastId = toast.loading("Loading...");
        dispatch(setLoading(true))


        try{
            const response= await apiConnector("POST",LOGIN_API,{
                email,
                password,
            })

            console.log("LOGIN API RESPONSE............", response)

      if (!response.data.success) {
        throw new Error(response.data.message)
      }

      toast.success("Login Successful")
      dispatch(setToken(response.data.token))


      const userImage = response.data?.user?.image
        ? response.data.user.image
        : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.user.firstName} ${response.data.user.lastName}`;

        dispatch(setUser({ ...response.data.user, image: userImage }))
      localStorage.setItem("token", JSON.stringify(response.data.token))
      navigate("/dashboard/my-profile")
        }
        catch(err){
            console.log("LOGIN API ERROR............", err)
            toast.error("Login Failed")
    }
    dispatch(setLoading(false))
    toast.dismiss(toastId)
    }
    
}


export function getPasswordResetToken(email, setEmailSent) {
    return async (dispatch) => {
      const toastId = toast.loading("Loading...")
      dispatch(setLoading(true))
      try {
        const response = await apiConnector("POST", RESETPASSTOKEN_API, {
          email,
        })
  
        console.log("RESETPASSTOKEN RESPONSE............", response)
  
        if (!response.data.success) {
          throw new Error(response.data.message)
        }
  
        toast.success("Reset Email Sent")
        setEmailSent(true)
      } catch (error) {
        console.log("RESETPASSTOKEN ERROR............", error)
        toast.error("Failed To Send Reset Email")
      }
      toast.dismiss(toastId)
      dispatch(setLoading(false))
    }
  }
  
  export function resetPassword(password, confirmPassword, token, navigate) {
    return async (dispatch) => {
      const toastId = toast.loading("Loading...")
      dispatch(setLoading(true))
      try {
        const response = await apiConnector("POST", RESETPASSWORD_API, {
          password,
          confirmPassword,
          token,
        })
  
        console.log("RESETPASSWORD RESPONSE............", response)
  
        if (!response.data.success) {
          throw new Error(response.data.message)
        }
  
        toast.success("Password Reset Successfully")
        navigate("/login")
      } catch (error) {
        console.log("RESETPASSWORD ERROR............", error)
        toast.error("Failed To Reset Password")
      }
      toast.dismiss(toastId)
      dispatch(setLoading(false))
    }
  }
  
  export function logout(navigate) {
    return (dispatch) => {
      dispatch(setToken(null))
      dispatch(setUser(null))
      dispatch(resetCart())
      localStorage.removeItem("token")
      localStorage.removeItem("user")
      toast.success("Logged Out")
      navigate("/")
    }
  }