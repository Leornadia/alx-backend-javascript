export default function signUpUser(firstName, lastName) {
    // Return a new Promise
    return new Promise((resolve) => {
        // Resolve the Promise with an object containing firstName and lastName
        resolve({
            firstName: firstName,
            lastName: lastName
        });
    });
}
