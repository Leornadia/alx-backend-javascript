function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Sample API response");
    }, 1000);
  });
}

export default getResponseFromAPI;
