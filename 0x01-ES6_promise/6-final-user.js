import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default function handleProfileSignup(firstName, lastName, fileName) {
    // Call both functions and use Promise.allSettled to wait for all promises
    return Promise.allSettled([
        signUpUser(firstName, lastName), // Call signUpUser
        uploadPhoto(fileName) // Call uploadPhoto
    ]).then(results => {
        // Map the results to the desired output format
        return results.map(result => ({
            status: result.status, // Promise status (fulfilled or rejected)
            value: result.status === 'fulfilled' ? result.value : result.reason // Value or error returned
        }));
    });
}
