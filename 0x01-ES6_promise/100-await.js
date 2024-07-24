import uploadPhoto from './utils.js'; // Importing uploadPhoto from utils.js
import createUser from './utils.js'; // Importing createUser from utils.js

export default async function asyncUploadUser() {
    try {
        // Call uploadPhoto and wait for its response
        const photoResponse = await uploadPhoto();

        // Call createUser and wait for its response
        const userResponse = await createUser();

        // Return the object with both responses
        return {
            photo: photoResponse,
            user: userResponse
        };
    } catch (error) {
        // If any function fails, return an empty object
        return {
            photo: null,
            user: null
        };
    }
}
