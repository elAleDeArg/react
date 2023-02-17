import {v2 as cloudinary} from 'cloudinary'

cloudinary.config({
    cloud_name:"dzxkjsvbt",
    api_key: "865331813254283",
    api_secret: "OO4bGnAGQFLluNP8Jn8mU1WE0IE"
})

export const uploadImage = async filePath =>{
    return await cloudinary.uploader.upload(filePath, {
        folder: 'posts'
    })
}

export const deleteImage = async id => {
    return await cloudinary.uploader.destroy(id)
}