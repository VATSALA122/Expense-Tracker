import { API_PATHS } from "./apiPaths";
import axiosInstance from "./axiosInstance";

const uploadImage = async(imageFile) => {
    const formData=new FormData();
    //Append image filr to form data
    formData.append('image', imageFile);

    try{
        const response = await axiosInstance.post(API_PATHS.IMAGE.UPLOAD_IMAGE,formData,{
            headers: {
                'Content-Type' : 'multipart/form-data',
            },
        });
        return response.data;// REturn response data

    } catch (error) {
        console.error('Error uploading the iamge',error);
        throw error;//Rethrow error for handling
    }
};
export default uploadImage;