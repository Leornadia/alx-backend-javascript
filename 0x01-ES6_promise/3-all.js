import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
    // Use Promise.all to handle both promises
    Promise.all([uploadPhoto(), createUser()])
        .then(([photoResponse, userResponse]) => {
            // Log the required properties when promises resolve
            console.log(photoResponse.body); // Log the body from uploadPhoto response
            console.log(userResponse.firstName); // Log firstName from createUser response
            console.log(userResponse.lastName); // Log lastName from createUser response
        })
        .catch(() => {
            // Log error message if any promise is rejected
            console.error("Signup system offline");
        });
}

