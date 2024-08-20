import { v2 as cloudinary } from "cloudinary";
import fs from 'fs'

//cloudinary configurations
cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET 
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath) return null
        //upload file on Cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        }) 
        //uploading msg
        console.log('File Uploaded Successfully on Cloudinary', response.url);
        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath) //remove the locally saved temporary file as the operation got failed
        return null;
        
    }
}

export {uploadOnCloudinary}