
import { uploadPhoto, createUser } from './utils';

const asyncUploadUser = async () => {
    try {
        // Call uploadPhoto and createUser asynchronously
        const photoResponse = await uploadPhoto();
        const userResponse = await createUser();

        // Return the combined result
        return {
            photo: photoResponse,
            user: userResponse
        };
    } catch (error) {
        // If any of the calls fail, return an empty object
        return {
            photo: null,
            user: null
        };
    }
};

export default asyncUploadUser;
