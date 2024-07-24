export default function getResponseFromAPI() {
    // Return a new Promise
    return new Promise((resolve, reject) => {
        // Simulating an API call with a timeout
        setTimeout(() => {
            // Simulate a successful API response
            const success = true; // Change to false to simulate an error

            if (success) {
                // If successful, resolve the Promise with a response object
                resolve({ message: "API response successful!" });
            } else {
                // If there was an error, reject the Promise with an error message
                reject(new Error("API response failed!"));
            }
        }, 2000); // Simulate a delay of 2 seconds
    });
}
