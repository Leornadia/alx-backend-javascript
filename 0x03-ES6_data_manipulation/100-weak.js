// 100-weak.js

// Create and export a WeakMap instance
export const weakMap = new WeakMap();

/**
 * Function to track API query calls.
 * @param {Object} endpoint - The endpoint object containing protocol and name.
 * @throws Will throw an error if the number of queries is >= 5.
 */
export const queryAPI = (endpoint) => {
    // Check if the endpoint is already in the WeakMap
    if (!weakMap.has(endpoint)) {
        // Initialize the count to 0 if it's a new endpoint
        weakMap.set(endpoint, 0);
    }

    // Increment the count for the endpoint
    const count = weakMap.get(endpoint) + 1;
    weakMap.set(endpoint, count);

    // Check if the count is 5 or more
    if (count >= 5) {
        throw new Error('Endpoint load is high');
    }
};

