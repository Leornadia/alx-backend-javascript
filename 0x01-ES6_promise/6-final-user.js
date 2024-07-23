import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

async function handleProfileSignup(firstName, lastName, fileName) {
  const userPromise = signUpUser(firstName, lastName);
  const photoPromise = uploadPhoto(fileName);

  try {
    const user = await userPromise;
    const photoError = await photoPromise;
    
    return [
      { status: 'fulfilled', value: user },
      { status: 'rejected', value: photoError }
    ];
  } catch (error) {
    return [{ status: 'rejected', value: error }];
  }
}

export default handleProfileSignup;
