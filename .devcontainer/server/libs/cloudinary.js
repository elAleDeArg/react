import {v2 as cloudinary} from 'cloudinary'

export const uploadImage = async filePath =>{
    return await cloudinary.uploader.upload(filePath {
        folder: 'posts'
    })
}
