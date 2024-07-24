export default function getResponseFromAPI() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve({ status: 200, body: 'Success' });
        }, 1000);
    });
}
