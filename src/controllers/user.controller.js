import {asyncHanlder} from '../utils/asyncHandler.js'

const registerUser = asyncHanlder(async(req,res) =>{
    // get user details from frontend
    // validation-must not be empty
    // check if user already exists using : email, username
    // check for images/check for avatar
    // upload  them to cloudinary/avatar
    // create user object - create entry in database
    // remove password and refresh token from response field
    // check for user creation
    // return response 
})



export {registerUser,}